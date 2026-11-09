import React from 'react';
import { BookOpen } from 'lucide-react';
import SemanticHighlight from './SemanticHighlight';

export interface DefinitionSegment {
  textEn: string;
  textAr: string;
  role: 'concept' | 'action' | 'target' | 'condition' | 'distinction' | 'exception';
  explanationEn: string;
  explanationAr: string;
}

export interface DefinitionAnnotationProps {
  conceptEn: string;
  conceptAr?: string;
  definingActionEn: string;
  definingActionAr?: string;
  targetEn: string;
  targetAr?: string;
  conditionEn?: string;
  conditionAr?: string;
  exceptionEn?: string;
  exceptionAr?: string;
  isArabic?: boolean;
  className?: string;
}

export default function DefinitionAnnotation({
  conceptEn,
  conceptAr,
  definingActionEn,
  definingActionAr,
  targetEn,
  targetAr,
  conditionEn,
  conditionAr,
  exceptionEn,
  exceptionAr,
  isArabic = false,
  className = '',
}: DefinitionAnnotationProps): React.ReactElement {
  return (
    <div
      className={`border border-[#E5E5E5] rounded-xl bg-[#FFFFFF] p-4 sm:p-5 space-y-4 shadow-2xs ${className}`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-2 pb-2 border-b border-[#F0F0F0] text-xs font-mono uppercase text-[#737373]">
        <BookOpen className="w-3.5 h-3.5 text-[#171717]" />
        <span>{isArabic ? 'البنية الدلالية للتعريف الأكاديمي' : 'Academic Semantic Structure'}</span>
      </div>

      {/* Semantic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        {/* 1. Core Concept */}
        <div className="p-3 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5] space-y-1">
          <span className="font-mono text-[10px] uppercase text-[#737373] block">
            {isArabic ? 'المفهوم الأساسي (Core Concept)' : 'Core Concept'}
          </span>
          <SemanticHighlight role="concept" isArabic={isArabic}>
            {isArabic ? conceptAr || conceptEn : conceptEn}
          </SemanticHighlight>
        </div>

        {/* 2. Defining Action */}
        <div className="p-3 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5] space-y-1">
          <span className="font-mono text-[10px] uppercase text-[#737373] block">
            {isArabic ? 'الإجراء المحدد (Defining Action)' : 'Defining Action'}
          </span>
          <SemanticHighlight role="action" isArabic={isArabic}>
            {isArabic ? definingActionAr || definingActionEn : definingActionEn}
          </SemanticHighlight>
        </div>

        {/* 3. Affected Target / Object */}
        <div className="p-3 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5] space-y-1">
          <span className="font-mono text-[10px] uppercase text-[#737373] block">
            {isArabic ? 'الكيان أو المورد المستهدف (Target)' : 'Affected Target / Object'}
          </span>
          <SemanticHighlight role="target" isArabic={isArabic}>
            {isArabic ? targetAr || targetEn : targetEn}
          </SemanticHighlight>
        </div>

        {/* 4. Essential Condition (if present) */}
        {(conditionEn || conditionAr) && (
          <div className="p-3 rounded-lg bg-[#FFFEEB] border border-[#E2C65A] space-y-1">
            <span className="font-mono text-[10px] uppercase text-[#8C6D1F] font-bold block">
              {isArabic ? 'الشرط الحاسم (Essential Condition)' : 'Mandatory Condition'}
            </span>
            <SemanticHighlight role="condition" isArabic={isArabic}>
              {isArabic ? conditionAr || conditionEn : conditionEn}
            </SemanticHighlight>
          </div>
        )}

        {/* 5. Exception or Limitation (if present) */}
        {(exceptionEn || exceptionAr) && (
          <div className="p-3 rounded-lg bg-[#FAFAFA] border border-[#D4D4D4] space-y-1 sm:col-span-2">
            <span className="font-mono text-[10px] uppercase text-[#525252] font-bold block">
              {isArabic ? 'القيد أو الاستثناء المانع (Limitation / Exception)' : 'Limitation / Exception'}
            </span>
            <SemanticHighlight role="exception" isArabic={isArabic}>
              {isArabic ? exceptionAr || exceptionEn : exceptionEn}
            </SemanticHighlight>
          </div>
        )}
      </div>
    </div>
  );
}
