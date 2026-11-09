import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight } from 'lucide-react';

export interface KeywordRecallLinkProps {
  keywordId?: string;
  chapterId?: string;
  isArabic?: boolean;
  className?: string;
}

export default function KeywordRecallLink({
  keywordId,
  chapterId = 'all',
  isArabic = false,
  className = '',
}: KeywordRecallLinkProps): React.ReactElement {
  const targetUrl = keywordId
    ? `/review?tab=recall&keyword=${keywordId}&chapter=${chapterId}`
    : `/review?tab=recall&chapter=${chapterId}`;

  return (
    <Link
      to={targetUrl}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#171717] bg-[#171717] text-[#FFFFFF] text-[11px] font-bold hover:bg-[#333333] transition-colors shadow-xs ${className}`}
      title={isArabic ? 'اختبر استرجاعك لهذا المفهوم في قسم استرجاع الكلمات' : 'Practice recalling this concept in the Recall Hub'}
    >
      <Brain className="w-3.5 h-3.5 text-[#FFF1A6]" />
      <span>{isArabic ? 'تدريب الاسترجاع' : 'Practice Recall'}</span>
      <ArrowRight className={`w-3 h-3 ${isArabic ? 'rotate-180' : ''}`} />
    </Link>
  );
}

