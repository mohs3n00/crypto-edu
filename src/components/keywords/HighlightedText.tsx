import React, { useMemo } from 'react';
import SemanticHighlight from './SemanticHighlight';
import MathDisplay from '../ui/MathDisplay';
import { academicPhraseRules, type PhraseRule } from '../../data/keywords/phraseRules';
import type { SemanticRole } from '../../data/keywords/semanticTypes';

export interface HighlightedTextProps {
  text?: string;
  className?: string;
  isArabic?: boolean;
  chapterFilter?: 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch7' | 'all';
  boldTerms?: boolean;
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

// Bullet term pattern: e.g. "• Term: Description", "- Term: Description", "1. Term: Description", "• Term (English): Description"
const BULLET_TERM_REGEX = /^(\s*(?:[•\-\*–—]|\d+\.|\([a-zA-Z0-9]+\))\s*)([^:\n]{1,85}?)(:)(\s+[\s\S]*|$)/;

// Leading term pattern: e.g. "Frequent Exam Question: Description", "سؤال امتحان متكرر: الوصف", "Confidentiality: Description"
const LEADING_TERM_REGEX = /^(\s*)([A-Z\u0600-\u06FF][^:\.\n]{1,65}?)(:)(\s+[\s\S]*|$)/;

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
  boldTerms = true,
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

    // Render plain text with semantic highlight rules
    const renderPlainSlice = (plainText: string, keyPrefix: string): React.ReactNode => {
      if (!plainText) return null;
      const spans = processPlainTextWithRules(plainText, applicableRules);
      if (spans.length === 1 && spans[0].type === 'text') {
        return spans[0].text;
      }

      return spans.map((span, idx) => {
        if (span.type === 'text') {
          return span.text;
        }
        return (
          <SemanticHighlight
            key={`${keyPrefix}-sem-${idx}-${span.text.slice(0, 10)}`}
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

    // Render segment supporting explicit marks (==...==) and markdown bold (**...**)
    const renderSegment = (seg: string, segKeyPrefix: string): React.ReactNode => {
      if (!seg) return null;

      // Check for explicit marks (==...==)
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

          if (matchStart > lastIndex) {
            const plainSlice = seg.slice(lastIndex, matchStart);
            spans.push(...processPlainTextWithRules(plainSlice, applicableRules));
          }

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
              key={`${segKeyPrefix}-explicit-${idx}-${span.text.slice(0, 10)}`}
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

      // Check for markdown bold syntax (**bold text**)
      if (seg.includes('**')) {
        const parts = seg.split(/(\*\*[\s\S]+?\*\*)/g);
        return parts.map((part, pIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            const inner = part.slice(2, -2);
            return (
              <strong
                key={`${segKeyPrefix}-b-${pIdx}`}
                className="font-extrabold text-[#000000]"
              >
                {renderPlainSlice(inner, `${segKeyPrefix}-bi-${pIdx}`)}
              </strong>
            );
          }
          return (
            <React.Fragment key={`${segKeyPrefix}-bp-${pIdx}`}>
              {renderPlainSlice(part, `${segKeyPrefix}-p-${pIdx}`)}
            </React.Fragment>
          );
        });
      }

      // Fallback: plain slice with rule matches
      return renderPlainSlice(seg, segKeyPrefix);
    };

    // Render a single line, detecting terms before colons when boldTerms is active
    const renderLine = (line: string, lineKeyPrefix: string): React.ReactNode => {
      if (!line) return null;

      if (boldTerms) {
        // Check for bullet with term: e.g. "• Term: Description" or "1. Term: Description"
        const bulletMatch = line.match(BULLET_TERM_REGEX);
        if (bulletMatch) {
          const prefix = bulletMatch[1];
          const term = bulletMatch[2];
          const rest = bulletMatch[4];

          return (
            <React.Fragment key={lineKeyPrefix}>
              <span className="text-[#000000] font-mono font-bold select-none">{prefix}</span>
              <strong className="font-extrabold text-[#000000] inline mr-1">
                {renderSegment(term, `${lineKeyPrefix}-term`)}:
              </strong>
              {renderSegment(rest, `${lineKeyPrefix}-rest`)}
            </React.Fragment>
          );
        }

        // Check for leading term label: e.g. "Frequent Exam Question: ..." or "سؤال امتحان متكرر: ..."
        const leadingMatch = line.match(LEADING_TERM_REGEX);
        if (leadingMatch) {
          const prefix = leadingMatch[1];
          const term = leadingMatch[2];
          const rest = leadingMatch[4];

          return (
            <React.Fragment key={lineKeyPrefix}>
              {prefix}
              <strong className="font-extrabold text-[#000000] inline mr-1">
                {renderSegment(term, `${lineKeyPrefix}-lterm`)}:
              </strong>
              {renderSegment(rest, `${lineKeyPrefix}-lrest`)}
            </React.Fragment>
          );
        }
      }

      return renderSegment(line, lineKeyPrefix);
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

        // Process lines inside this text fragment
        const lines = part.split('\n');
        return (
          <React.Fragment key={`text-seg-${pIdx}`}>
            {lines.map((line, lIdx) => (
              <React.Fragment key={`p-${pIdx}-l-${lIdx}`}>
                {lIdx > 0 && '\n'}
                {renderLine(line, `p-${pIdx}-l-${lIdx}`)}
              </React.Fragment>
            ))}
          </React.Fragment>
        );
      });
    }

    // Process all lines
    const lines = text.split('\n');
    return lines.map((line, lIdx) => (
      <React.Fragment key={`root-l-${lIdx}`}>
        {lIdx > 0 && '\n'}
        {renderLine(line, `root-l-${lIdx}`)}
      </React.Fragment>
    ));
  }, [text, isArabic, chapterFilter, boldTerms]);

  return <span className={className}>{elements}</span>;
}
