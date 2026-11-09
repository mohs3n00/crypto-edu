import React from 'react';
import { CheckCircle2, Clock, RotateCcw, TrendingUp, Circle } from 'lucide-react';
import type { TopicMasteryState } from '../../types';
import { useUI } from '../../store/uiStore';

export interface TopicMasteryBadgeProps {
  state: TopicMasteryState;
  className?: string;
}

export default function TopicMasteryBadge({
  state,
  className = '',
}: TopicMasteryBadgeProps): React.ReactElement {
  const { language } = useUI();
  const isArabic = language === 'ar';

  switch (state) {
    case 'mastered':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] text-[11px] font-mono font-bold rounded ${className}`}
        >
          <CheckCircle2 size={12} />
          <span>{isArabic ? 'متقن (Mastered)' : 'Mastered'}</span>
        </span>
      );

    case 'improving':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-[#171717] bg-[#FAFAFA] text-[#171717] text-[11px] font-mono font-semibold rounded ${className}`}
        >
          <TrendingUp size={12} />
          <span>{isArabic ? 'في تحسن (Improving)' : 'Improving'}</span>
        </span>
      );

    case 'needs-review':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-dashed border-[#171717] bg-[#FFFFFF] text-[#171717] text-[11px] font-mono font-bold rounded ${className}`}
        >
          <RotateCcw size={12} />
          <span>{isArabic ? 'بحاجة لمراجعة (Review)' : 'Needs Review'}</span>
        </span>
      );

    case 'studying':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-[#E5E5E5] bg-[#FAFAFA] text-[#525252] text-[11px] font-mono font-medium rounded ${className}`}
        >
          <Clock size={12} />
          <span>{isArabic ? 'قيد الدراسة (Studying)' : 'Studying'}</span>
        </span>
      );

    case 'not-started':
    default:
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-[#E5E5E5] bg-[#FFFFFF] text-[#737373] text-[11px] font-mono rounded ${className}`}
        >
          <Circle size={12} />
          <span>{isArabic ? 'لم يبدأ بعد' : 'Not Started'}</span>
        </span>
      );
  }
}

