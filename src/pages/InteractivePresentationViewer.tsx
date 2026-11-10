import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { getInteractiveDeck } from '../data/interactive/slideBuilder';
import PresentationStage from '../components/interactive/PresentationStage';
import { useUI } from '../store/uiStore';

export default function InteractivePresentationViewer(): React.ReactElement {
  const { chapterId, lessonId } = useParams<{ chapterId?: string; lessonId?: string }>();
  const { language } = useUI();
  const isArabic = language === 'ar';

  const deck = useMemo(() => {
    if (!lessonId) return undefined;
    return getInteractiveDeck(lessonId);
  }, [lessonId]);

  if (!deck) {
    return (
      <div className="max-w-xl mx-auto my-20 p-8 bg-[#FFFFFF] border border-[#E2E2DF] rounded-2xl text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-[#FFFDF0] border border-[#E2C65A] flex items-center justify-center mx-auto text-[#856404]">
          <AlertCircle size={24} />
        </div>
        <h2 className="text-xl font-bold text-[#222222]">
          {isArabic ? 'لم يتم العثور على المحاضرة المطلوبة' : 'Interactive Lecture Not Found'}
        </h2>
        <p className="text-sm text-[#505050]">
          {isArabic
            ? `المعرف (${lessonId}) غير مسجل في كتالوج المحاضرات التفاعلية.`
            : `The requested lecture ID (${lessonId}) was not found in the catalog.`}
        </p>
        <Link
          to="/interactive"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#222222] text-[#FFFFFF] text-sm font-semibold hover:bg-[#333333] transition-colors"
        >
          <ArrowLeft size={16} className={isArabic ? 'rotate-180' : ''} />
          <span>{isArabic ? 'العودة لكتالوج المحاضرات' : 'Back to Lecture Catalog'}</span>
        </Link>
      </div>
    );
  }

  return <PresentationStage deck={deck} />;
}

