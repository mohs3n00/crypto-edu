import React, { useMemo } from 'react';
import SemanticHighlight from './SemanticHighlight';
import { academicPhraseRules } from '../../data/keywords/phraseRules';
import type { SemanticRole } from '../../data/keywords/semanticTypes';

export interface HighlightedTextProps {
  text: string;
  className?: string;
  isArabic?: boolean;
  chapterFilter?: 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch7' | 'all';
}

interface TextSpanMatch {
  start: number;
  end: number;
  matchedText: string;
  role: SemanticRole;
  keywordId?: string;
  phraseLabelEn?: string;
  phraseLabelAr?: string;
  explanationEn?: string;
  explanationAr?: string;
  relatedConceptEn?: string;
  relatedConceptAr?: string;
  chapterId?: 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch7';
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

    const matches: TextSpanMatch[] = [];

    // Filter rules by chapter if requested, otherwise check all
    const applicableRules =
      chapterFilter !== 'all'
        ? academicPhraseRules.filter((r) => r.chapterId === chapterFilter)
        : academicPhraseRules;

    // Scan for all rule matches
    for (const rule of applicableRules) {
      const regex = new RegExp(rule.pattern.source, rule.pattern.flags);
      let match: RegExpExecArray | null;

      while ((match = regex.exec(text)) !== null) {
        const start = match.index;
        const end = start + match[0].length;

        // Check for collision with existing match
        const collisionIdx = matches.findIndex(
          (m) =>
            (start >= m.start && start < m.end) ||
            (end > m.start && end <= m.end) ||
            (start <= m.start && end >= m.end)
        );

        if (collisionIdx === -1) {
          // No collision -> add match
          matches.push({
            start,
            end,
            matchedText: match[0],
            role: rule.role,
            keywordId: rule.keywordId,
            phraseLabelEn: rule.phraseLabelEn,
            phraseLabelAr: rule.phraseLabelAr,
            explanationEn: rule.explanationEn,
            explanationAr: rule.explanationAr,
            relatedConceptEn: rule.relatedConceptEn,
            relatedConceptAr: rule.relatedConceptAr,
            chapterId: rule.chapterId,
          });
        } else {
          // If the new match is longer, replace the shorter one (Rule 1: Longest Meaningful Phrase)
          const existing = matches[collisionIdx];
          const newLen = end - start;
          const existingLen = existing.end - existing.start;
          if (newLen > existingLen) {
            matches[collisionIdx] = {
              start,
              end,
              matchedText: match[0],
              role: rule.role,
              keywordId: rule.keywordId,
              phraseLabelEn: rule.phraseLabelEn,
              phraseLabelAr: rule.phraseLabelAr,
              explanationEn: rule.explanationEn,
              explanationAr: rule.explanationAr,
              relatedConceptEn: rule.relatedConceptEn,
              relatedConceptAr: rule.relatedConceptAr,
              chapterId: rule.chapterId,
            };
          }
        }
      }
    }

    // If no matches found, return raw text
    if (matches.length === 0) {
      return text;
    }

    // Sort matches in natural reading order
    matches.sort((a, b) => a.start - b.start);

    const result: React.ReactNode[] = [];
    let lastIdx = 0;

    matches.forEach((m, idx) => {
      // Push preceding plain text
      if (m.start > lastIdx) {
        result.push(text.slice(lastIdx, m.start));
      }

      // Push wrapped SemanticHighlight
      result.push(
        <SemanticHighlight
          key={`sem-hl-${idx}-${m.start}`}
          role={m.role}
          keywordId={m.keywordId}
          phraseLabelEn={m.phraseLabelEn}
          phraseLabelAr={m.phraseLabelAr}
          explanationEn={m.explanationEn}
          explanationAr={m.explanationAr}
          relatedConceptEn={m.relatedConceptEn}
          relatedConceptAr={m.relatedConceptAr}
          chapterId={m.chapterId}
          isArabic={isArabic}
        >
          {m.matchedText}
        </SemanticHighlight>
      );

      lastIdx = m.end;
    });

    // Push trailing plain text
    if (lastIdx < text.length) {
      result.push(text.slice(lastIdx));
    }

    return result;
  }, [text, isArabic, chapterFilter]);

  return <span className={className}>{elements}</span>;
}
