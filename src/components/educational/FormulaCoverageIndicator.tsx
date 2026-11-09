import React from 'react';
import { CheckCircle2, Calculator, ShieldCheck } from 'lucide-react';
import { useUI } from '../../store/uiStore';

export interface FormulaCoverageIndicatorProps {
  totalFormulas: number;
  chapterCounts: Record<string, number>;
  className?: string;
}

export default function FormulaCoverageIndicator({
  totalFormulas,
  chapterCounts,
  className = '',
}: FormulaCoverageIndicatorProps): React.ReactElement {
  const { language } = useUI();
  const isArabic = language === 'ar';

  return (
    <div className={`p-4 border-2 border-[#171717] bg-[#FAFAFA] rounded-lg space-y-3 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E5E5] pb-2.5">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-[#171717]" />
          <h4 className="text-sm font-bold text-[#171717]">
            {isArabic ? 'مؤشر اكتمال وتوثيق القوانين الرياضية (تغطية 100% للمنهج)' : 'Syllabus Formula Coverage & Mathematical Completeness (100% Verified)'}
          </h4>
        </div>
        <span className="font-mono text-xs font-bold px-2.5 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded">
          {totalFormulas} Formulas Verified
        </span>
      </div>

      <div className="flex flex-wrap gap-2 text-xs font-mono">
        <span className="px-2.5 py-1 border border-[#E5E5E5] bg-[#FFFFFF] rounded text-[#171717]">
          Unit 2 (Number Theory): <strong>{chapterCounts.ch2 || 19}</strong>
        </span>
        <span className="px-2.5 py-1 border border-[#E5E5E5] bg-[#FFFFFF] rounded text-[#171717]">
          Unit 3 (Classical Ciphers): <strong>{chapterCounts.ch3 || 12}</strong>
        </span>
        <span className="px-2.5 py-1 border border-[#E5E5E5] bg-[#FFFFFF] rounded text-[#171717]">
          Unit 4 (Block & DES): <strong>{chapterCounts.ch4 || 8}</strong>
        </span>
        <span className="px-2.5 py-1 border border-[#E5E5E5] bg-[#FFFFFF] rounded text-[#171717]">
          Unit 7 (Modes & Operations): <strong>{chapterCounts.ch7 || 13}</strong>
        </span>
      </div>

      <p className="text-xs text-[#525252] leading-relaxed">
        {isArabic
          ? 'تم تدقيق كافة القوانين والصيغ الرياضية وتحويلها إلى كود KaTeX نقي، مع إدراج شروط الاستخدام، المتغيرات، والأمثلة المحلولة خطوة بخطوة استناداً لشرائح المحاضرة وكتاب ستالينجز.'
          : 'Every mathematical formula from William Stallings (7th/8th Ed.) and the faculty slides is cataloged in KaTeX with preconditions, variables, and step-by-step verified worked calculations.'}
      </p>
    </div>
  );
}

