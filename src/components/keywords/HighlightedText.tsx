import React, { useMemo } from 'react';
import SemanticHighlight from './SemanticHighlight';
import MathDisplay from '../ui/MathDisplay';
import { academicPhraseRules, type PhraseRule } from '../../data/keywords/phraseRules';
import type { SemanticRole } from '../../data/keywords/semanticTypes';

export interface HighlightedTextProps {
  text: string;
  className?: string;
  isArabic?: boolean;
  chapterFilter?: 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch7' | 'all';
}

interface SpanItem {
  type: 'explicit' | 'rule' | 'text';
  text: string;
  role?: SemanticRole;
  keywordId?: string;
  phraseLabelEn?: string;
  phraseLabelAr?: string;
  explanationEn?: string;
  explanationAr?: string;
  relatedConceptEn?: string;
  relatedConceptAr?: string;
  chapterId?: 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch7';
}

const EXPLICIT_MARK_REGEX = /==(?:(concept|action|target|condition|distinction|exception):)?([\s\S]+?)==/g;

function findRuleMatch(phrase: string, applicableRules: PhraseRule[]): PhraseRule | undefined {
  const clean = phrase.trim().toLowerCase();
  return applicableRules.find((r) => {
    if (r.phraseLabelEn && r.phraseLabelEn.toLowerCase() === clean) return true;
    if (r.phraseLabelAr && r.phraseLabelAr === phrase.trim()) return true;
    const testRegex = new RegExp(r.pattern.source, r.pattern.flags);
    return testRegex.test(phrase);
  });
}

function processPlainTextWithRules(
  slice: string,
  applicableRules: PhraseRule[]
): SpanItem[] {
  if (!slice) return [];

  interface RuleMatch {
    start: number;
    end: number;
    matchedText: string;
    rule: PhraseRule;
  }

  const matches: RuleMatch[] = [];

  for (const rule of applicableRules) {
    const regex = new RegExp(rule.pattern.source, rule.pattern.flags);
    let match: RegExpExecArray | null;

    while ((match = regex.exec(slice)) !== null) {
      const start = match.index;
      const end = start + match[0].length;

      // Avoid matching empty or whitespace-only
      if (match[0].trim().length === 0) continue;

      // Check collision with existing matches
      const collisionIdx = matches.findIndex(
        (m) =>
          (start >= m.start && start < m.end) ||
          (end > m.start && end <= m.end) ||
          (start <= m.start && end >= m.end)
      );

      if (collisionIdx === -1) {
        matches.push({ start, end, matchedText: match[0], rule });
      } else {
        const existing = matches[collisionIdx];
        const newLen = end - start;
        const existingLen = existing.end - existing.start;
        if (newLen > existingLen) {
          matches[collisionIdx] = { start, end, matchedText: match[0], rule };
        }
      }
    }
  }

  if (matches.length === 0) {
    return [{ type: 'text', text: slice }];
  }

  matches.sort((a, b) => a.start - b.start);

  const spans: SpanItem[] = [];
  let lastIdx = 0;

  for (const m of matches) {
    if (m.start > lastIdx) {
      spans.push({ type: 'text', text: slice.slice(lastIdx, m.start) });
    }
    spans.push({
      type: 'rule',
      text: m.matchedText,
      role: m.rule.role,
      keywordId: m.rule.keywordId,
      phraseLabelEn: m.rule.phraseLabelEn,
      phraseLabelAr: m.rule.phraseLabelAr,
      explanationEn: m.rule.explanationEn,
      explanationAr: m.rule.explanationAr,
      relatedConceptEn: m.rule.relatedConceptEn,
      relatedConceptAr: m.rule.relatedConceptAr,
      chapterId: m.rule.chapterId,
    });
    lastIdx = m.end;
  }

  if (lastIdx < slice.length) {
    spans.push({ type: 'text', text: slice.slice(lastIdx) });
  }

  return spans;
}

export default function HighlightedText({
  text,
  className = '',
  isArabic = false,
  chapterFilter = 'all',
}: HighlightedTextProps): React.ReactElement {
  const elements = useMemo(() => {
    if (!text || typeof text !== 'string') {
      return text;
    }

    const applicableRules = (
      chapterFilter !== 'all'
        ? academicPhraseRules.filter((r) => r.chapterId === chapterFilter)
        : academicPhraseRules
    ).slice().sort((a, b) => b.pattern.source.length - a.pattern.source.length);

    const renderSegment = (seg: string, segKeyPrefix: string): React.ReactNode => {
      if (!seg) return null;

      // If text contains explicit marks (==...==)
      if (seg.includes('==')) {
        const spans: SpanItem[] = [];
        let lastIndex = 0;
        let match: RegExpExecArray | null;
        const explicitRegex = new RegExp(EXPLICIT_MARK_REGEX.source, 'g');

        while ((match = explicitRegex.exec(seg)) !== null) {
          const matchStart = match.index;
          const matchEnd = match.index + match[0].length;
          const explicitRole = match[1] as SemanticRole | undefined;
          const content = match[2];

          // Plain text before the explicit highlight
          if (matchStart > lastIndex) {
            const plainSlice = seg.slice(lastIndex, matchStart);
            spans.push(...processPlainTextWithRules(plainSlice, applicableRules));
          }

          // Check if content matches any known rule for richer explanation
          const matchingRule = findRuleMatch(content, applicableRules);

          spans.push({
            type: 'explicit',
            text: content,
            role: explicitRole || matchingRule?.role || 'concept',
            keywordId: matchingRule?.keywordId,
            phraseLabelEn: matchingRule?.phraseLabelEn,
            phraseLabelAr: matchingRule?.phraseLabelAr,
            explanationEn: matchingRule?.explanationEn,
            explanationAr: matchingRule?.explanationAr,
            relatedConceptEn: matchingRule?.relatedConceptEn,
            relatedConceptAr: matchingRule?.relatedConceptAr,
            chapterId: matchingRule?.chapterId,
          });

          lastIndex = matchEnd;
        }

        if (lastIndex < seg.length) {
          const plainSlice = seg.slice(lastIndex);
          spans.push(...processPlainTextWithRules(plainSlice, applicableRules));
        }

        return spans.map((span, idx) => {
          if (span.type === 'text') {
            return span.text;
          }
          return (
            <SemanticHighlight
              key={`${segKeyPrefix}-sem-hl-${idx}-${span.text.slice(0, 10)}`}
              role={span.role || 'concept'}
              keywordId={span.keywordId}
              phraseLabelEn={span.phraseLabelEn}
              phraseLabelAr={span.phraseLabelAr}
              explanationEn={span.explanationEn}
              explanationAr={span.explanationAr}
              relatedConceptEn={span.relatedConceptEn}
              relatedConceptAr={span.relatedConceptAr}
              chapterId={span.chapterId}
              isArabic={isArabic}
            >
              {span.text}
            </SemanticHighlight>
          );
        });
      }

      // Pure rule-based processing
      const spans = processPlainTextWithRules(seg, applicableRules);
      if (spans.length === 1 && spans[0].type === 'text') {
        return seg;
      }

      return spans.map((span, idx) => {
        if (span.type === 'text') {
          return span.text;
        }
        return (
          <SemanticHighlight
            key={`${segKeyPrefix}-sem-hl-${idx}-${span.text.slice(0, 10)}`}
            role={span.role || 'concept'}
            keywordId={span.keywordId}
            phraseLabelEn={span.phraseLabelEn}
            phraseLabelAr={span.phraseLabelAr}
            explanationEn={span.explanationEn}
            explanationAr={span.explanationAr}
            relatedConceptEn={span.relatedConceptEn}
            relatedConceptAr={span.relatedConceptAr}
            chapterId={span.chapterId}
            isArabic={isArabic}
          >
            {span.text}
          </SemanticHighlight>
        );
      });
    };

    // If text contains LaTeX formulas ($ or $$), preserve them safely
    if (text.includes('$')) {
      const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$)/g);
      return parts.map((part, pIdx) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          return (
            <span key={`math-blk-${pIdx}`} className="block my-2" dir="ltr">
              <MathDisplay latex={part.slice(2, -2)} display />
            </span>
          );
        }
        if (part.startsWith('$') && part.endsWith('$')) {
          return (
            <span key={`math-inl-${pIdx}`} className="inline-block mx-0.5" dir="ltr">
              <MathDisplay latex={part.slice(1, -1)} />
            </span>
          );
        }
        return <React.Fragment key={`text-seg-${pIdx}`}>{renderSegment(part, `p-${pIdx}`)}</React.Fragment>;
      });
    }

    return renderSegment(text, 'root');
  }, [text, isArabic, chapterFilter]);

  return <span className={className}>{elements}</span>;
}
