import React from 'react';
import { KeyRound, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import type { Question } from '../../types';
import { getExamCluesForQuestion } from '../../data/keywords/examCluesDatabase';
import { useUI } from '../../store/uiStore';

export interface ExamCluesSectionProps {
  question: Question;
  className?: string;
}

export default function ExamCluesSection({
  question,
  className = '',
}: ExamCluesSectionProps): React.ReactElement {
  const { language } = useUI();
  const isArabicUI = language === 'ar';

  const examData = getExamCluesForQuestion(question);
  const clues = examData.clues;

  return (
    <div
      aria-label="Keywords to Remember | Exam Clues"
      className={`rounded-xl border-2 border-[#171717] bg-[#FAFAFA] p-4 sm:p-5 space-y-4 shadow-xs mt-3 ${className}`}
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#E5E5E5] gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-[#171717] text-[#FFFFFF] flex items-center justify-center shrink-0">
            <KeyRound size={15} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FFF1A6] text-[#171717] border border-[#E2C65A]">
                EXAM PREPARATION AID
              </span>
              <span className="text-[11px] font-mono text-[#737373] hidden sm:inline">
                MCQ Trigger Keywords
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-[#171717] tracking-tight">
              KEYWORDS TO REMEMBER | Exam Clues
            </h4>
          </div>
        </div>

        <div className="text-xs text-[#525252] font-medium self-end sm:self-auto">
          <span className="font-semibold text-[#171717]">Concept: </span>
          <span>{examData.primaryConcept}</span>
        </div>
      </div>

      {/* Purpose prompt */}
      <p className="text-xs text-[#525252] leading-relaxed">
        {isArabicUI
          ? 'دليل الربط السريع للامتحان: كيف تتعرف على الإجابة الصحيحة فور رؤية هذه العبارات المفتاحية في أسئلة الاختيار من متعدد؟'
          : 'Rapid exam recognition: connect these trigger phrases in MCQ questions directly to the governing concept and avoid common distractors.'}
      </p>

      {/* Responsive Exam Clues Table / Cards */}
      <div className="overflow-x-auto rounded-lg border border-[#E5E5E5] bg-[#FFFFFF]">
        <table className="w-full text-left text-xs sm:text-[13px] border-collapse">
          <thead>
            <tr className="bg-[#F2F2F2] border-b border-[#E5E5E5] text-[#171717] font-mono uppercase text-[11px]">
              <th className="py-2.5 px-3 sm:px-4 font-bold border-e border-[#E5E5E5] w-[35%]">
                When you see this in a question / عند رؤية هذا التعبير
              </th>
              <th className="py-2.5 px-3 sm:px-4 font-bold border-e border-[#E5E5E5] w-[30%]">
                Think of this concept / يتبادر لذهنك هذا المفهوم
              </th>
              <th className="py-2.5 px-3 sm:px-4 font-bold w-[35%]">
                Distinction & Exam Trap / الفارق الدقيق وفخ الامتحان
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E5E5]">
            {clues.map((clue, idx) => (
              <tr key={idx} className="hover:bg-[#FAFAFA] transition-colors">
                {/* Trigger phrase */}
                <td className="py-3 px-3 sm:px-4 border-e border-[#E5E5E5] align-top">
                  <div className="space-y-1">
                    <span className="font-bold text-[#171717] block font-sans">
                      "{clue.triggerText}"
                    </span>
                    {clue.triggerTextAr && (
                      <span
                        dir="rtl"
                        className="text-[12px] text-[#525252] font-serif block"
                        style={{ fontFamily: 'var(--font-arabic)' }}
                      >
                        «{clue.triggerTextAr}»
                      </span>
                    )}
                  </div>
                </td>

                {/* Target Concept */}
                <td className="py-3 px-3 sm:px-4 border-e border-[#E5E5E5] align-top">
                  <div className="space-y-1">
                    <span className="inline-block px-2 py-1 rounded bg-[#171717] text-[#FFFFFF] font-mono text-[11px] font-bold">
                      {clue.concept}
                    </span>
                    {clue.conceptAr && (
                      <span
                        dir="rtl"
                        className="text-[12px] font-bold text-[#171717] font-serif block"
                        style={{ fontFamily: 'var(--font-arabic)' }}
                      >
                        {clue.conceptAr}
                      </span>
                    )}
                    {clue.explanation && (
                      <p className="text-[11px] text-[#525252] leading-snug pt-0.5">
                        {clue.explanation}
                      </p>
                    )}
                  </div>
                </td>

                {/* Distinction / Trap */}
                <td className="py-3 px-3 sm:px-4 align-top">
                  <div className="space-y-1 text-[#171717]">
                    {clue.distinction && (
                      <div className="flex items-start gap-1.5">
                        <AlertCircle size={13} className="text-[#b45309] shrink-0 mt-0.5" />
                        <span className="text-[12px] leading-snug">
                          {clue.distinction}
                        </span>
                      </div>
                    )}
                    {clue.distinctionAr && (
                      <p
                        dir="rtl"
                        className="text-[12px] text-[#525252] font-serif leading-relaxed"
                        style={{ fontFamily: 'var(--font-arabic)' }}
                      >
                        {clue.distinctionAr}
                      </p>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

