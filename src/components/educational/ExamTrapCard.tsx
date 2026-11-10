import React from 'react';
import { AlertTriangle, CheckCircle2, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';
import AIProviderActions from '../ai/AIProviderActions';
import TrapQuestion, { type TrapQuestionProps } from './TrapQuestion';
import { useUI } from '../../store/uiStore';
import { HighlightedText } from '../keywords';

export interface ExamTrapItem {
  id: string | number;
  title: string;
  titleAr?: string;
  category: 'A. Definition' | 'B. Mathematical Condition' | 'C. Calculation' | 'D. Algorithm' | 'E. Cryptographic Structure' | 'F. Block Cipher Mode';
  difficulty: 'Level 1: Common Misunderstanding' | 'Level 2: University Exam Trap' | 'Level 3: Advanced Challenge';
  sourceType: 'Original Previous Midterm Question' | 'Original Test Bank Question' | 'Additional Academic Exam Insight';
  sourceRef?: string;
  chapterId: string;
  misconception: string;
  misconceptionAr?: string;
  truth: string;
  truthAr?: string;
  whyWrong: string;
  whyWrongAr?: string;
  correctCondition: string;
  correctConditionAr?: string;
  workedExample?: {
    validCase: string;
    invalidCase: string;
    validCaseAr?: string;
    invalidCaseAr?: string;
  };
  interactiveQuestion?: TrapQuestionProps;
}

export interface ExamTrapCardProps {
  trap: ExamTrapItem;
  className?: string;
}

export default function ExamTrapCard({
  trap,
  className = '',
}: ExamTrapCardProps): React.ReactElement {
  const { language } = useUI();
  const isArabic = language === 'ar';

  return (
    <div
      id={`trap-${trap.id}`}
      className={`border-2 border-[#171717] bg-[#FFFFFF] rounded-xl p-6 sm:p-7 space-y-6 shadow-sm hover:border-[#000000] transition-all ${className}`}
    >
      {/* Top Header: Category, Difficulty, Source Label & AI Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E5E5E5] gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] uppercase border border-[#171717] bg-[#171717] text-[#FFFFFF] px-2.5 py-0.5 rounded font-bold">
            {trap.category}
          </span>
          <span className="font-mono text-[11px] uppercase border border-[#E5E5E5] bg-[#FAFAFA] text-[#171717] px-2.5 py-0.5 rounded font-semibold">
            {trap.difficulty}
          </span>
          <span className="font-mono text-[11px] uppercase border border-[#E5E5E5] bg-[#FFFFFF] text-[#737373] px-2.5 py-0.5 rounded">
            {trap.sourceType} {trap.sourceRef ? `(${trap.sourceRef})` : ''}
          </span>
        </div>

        <AIProviderActions
          context={{
            sectionTitle: `Exam Trap: ${trap.title}`,
            content: `Topic: ${trap.title}\nCategory: ${trap.category}\nDifficulty: ${trap.difficulty}\nFalse Misconception: "${trap.misconception}"\nAcademic Truth: "${trap.truth}"\nWhy it is wrong: ${trap.whyWrong}\nCorrect Condition: ${trap.correctCondition}`,
            promptType: 'concept',
            chapterTitle: `Chapter: ${trap.chapterId.toUpperCase()}`,
          }}
          variant="compact"
        />
      </div>

      {/* Prominent Trap Heading (20-22px) */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <ShieldAlert size={22} className="text-[#171717] shrink-0" />
          <h3 className="text-[22px] sm:text-[24px] font-bold text-[#222222] tracking-tight">
            Trap #{trap.id}: {trap.title}
          </h3>
        </div>
        {trap.titleAr && (
          <h4
            dir="rtl"
            className="text-lg sm:text-[20px] font-bold text-[#525252] font-serif pt-0.5"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {trap.titleAr}
          </h4>
        )}
      </div>

      {/* Misconception vs Truth Section (17-19px) */}
      <div className="space-y-4">
        {/* The Misconception (False Claim) */}
        <div className="p-4 sm:p-5 border border-[#E5E5E5] bg-[#F2F2F2] rounded-lg text-sm sm:text-[17px] space-y-1.5">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#737373] block font-bold">
            Common Misconception / Tempting False Exam Claim (الادعاء الخاطئ الشائع):
          </span>
          {trap.misconception && trap.misconceptionAr ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start pt-1">
              <p className="text-[#525252] line-through font-medium leading-relaxed">
                "{trap.misconception}"
              </p>
              <p
                dir="rtl"
                className="text-[#737373] line-through font-serif md:border-s md:border-[#E5E5E5] md:ps-4"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                "{trap.misconceptionAr}"
              </p>
            </div>
          ) : (
            <p className="text-[#525252] line-through font-medium leading-relaxed">
              "{trap.misconception}"
            </p>
          )}
        </div>

        {/* The Academic Truth */}
        <div className="p-4 sm:p-5 border-2 border-[#171717] bg-[#FFFFFF] rounded-lg text-sm sm:text-[18px] space-y-1.5 shadow-xs">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#171717] block font-bold flex items-center gap-1.5">
            <CheckCircle2 size={14} />
            Academic Truth & Verified Doctrine (الحقيقة الأكاديمية المعتمدة):
          </span>
          {trap.truth && trap.truthAr ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start pt-1">
              <p className="text-[#171717] font-semibold leading-relaxed">
                <HighlightedText text={trap.truth} />
              </p>
              <p
                dir="rtl"
                className="text-[#171717] font-serif font-semibold leading-[2] md:border-s md:border-[#E5E5E5] md:ps-4"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                <HighlightedText text={trap.truthAr} isArabic />
              </p>
            </div>
          ) : (
            <p className="text-[#171717] font-semibold leading-relaxed">
              <HighlightedText text={trap.truth} />
            </p>
          )}
        </div>
      </div>

      {/* Why It Is Wrong & The Exact Condition */}
      <div className="p-4 sm:p-5 border border-[#E5E5E5] bg-[#FAFAFA] rounded-lg space-y-4 text-sm sm:text-[17px]">
        <div className="space-y-1">
          <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#737373] block">
            Why It Is Wrong / علة بطلان هذا الادعاء:
          </span>
          {trap.whyWrong && trap.whyWrongAr ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start pt-1">
              <p className="text-[#171717] leading-relaxed">
                {trap.whyWrong}
              </p>
              <p
                dir="rtl"
                className="text-[#525252] font-serif leading-relaxed md:border-s md:border-[#E5E5E5] md:ps-4"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {trap.whyWrongAr}
              </p>
            </div>
          ) : (
            <p className="text-[#171717] leading-relaxed">
              {trap.whyWrong}
            </p>
          )}
        </div>

        <div className="pt-3 border-t border-[#E5E5E5] space-y-1">
          <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#171717] block">
            Required Mathematical / Conceptual Condition (الشرط الحتمي اللازم):
          </span>
          {trap.correctCondition && trap.correctConditionAr ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start pt-1">
              <p className="text-[#171717] font-mono font-semibold text-sm sm:text-[16px]">
                <HighlightedText text={trap.correctCondition} />
              </p>
              <p
                dir="rtl"
                className="text-[#525252] font-serif text-sm md:border-s md:border-[#E5E5E5] md:ps-4"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                <HighlightedText text={trap.correctConditionAr} isArabic />
              </p>
            </div>
          ) : (
            <p className="text-[#171717] font-mono font-semibold text-sm sm:text-[16px]">
              <HighlightedText text={trap.correctCondition} />
            </p>
          )}
        </div>
      </div>

      {/* Worked Example: Valid vs Invalid Comparison */}
      {trap.workedExample && (
        <div className="border border-[#E5E5E5] rounded-lg p-4 bg-[#FFFFFF] space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#737373] block">
            Concrete Comparison / المقارنة التطبيقية:
          </span>
          <div className="flex flex-col space-y-3 w-full text-sm sm:text-[16px]">
            {/* Valid Case */}
            <div className="p-3 border border-[#171717] bg-[#FAFAFA] rounded space-y-1">
              <span className="font-mono text-[11px] uppercase font-bold text-[#171717] block">
                [Valid Case / الحالة الصحيحة]
              </span>
              <p className="text-[#171717] leading-relaxed">{trap.workedExample.validCase}</p>
              {trap.workedExample.validCaseAr && (
                <p dir="rtl" className="text-[#525252] font-serif text-sm pt-0.5" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {trap.workedExample.validCaseAr}
                </p>
              )}
            </div>

            {/* Invalid Case */}
            <div className="p-3 border border-[#E5E5E5] bg-[#F2F2F2] rounded space-y-1">
              <span className="font-mono text-[11px] uppercase font-bold text-[#737373] block">
                [Invalid Case / حالة الوقوع في الفخ]
              </span>
              <p className="text-[#525252] leading-relaxed">{trap.workedExample.invalidCase}</p>
              {trap.workedExample.invalidCaseAr && (
                <p dir="rtl" className="text-[#737373] font-serif text-sm pt-0.5" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {trap.workedExample.invalidCaseAr}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Embedded Interactive Question */}
      {trap.interactiveQuestion && (
        <div className="pt-2">
          <TrapQuestion {...trap.interactiveQuestion} />
        </div>
      )}
    </div>
  );
}

