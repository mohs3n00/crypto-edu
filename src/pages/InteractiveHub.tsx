import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Presentation,
  BookOpen,
  Search,
  CheckCircle2,
  Clock,
  Layers,
  ArrowRight,
  Sparkles,
  FileText,
  ChevronRight,
} from 'lucide-react';
import { useUI } from '../store/uiStore';
import { useProgress } from '../store/progressStore';
import { getAllChapters } from '../data/chapters';
import { getInteractiveDeck } from '../data/interactive/slideBuilder';

export default function InteractiveHub(): React.ReactElement {
  const { language } = useUI();
  const { isLessonCompleted } = useProgress();
  const navigate = useNavigate();

  const isArabic = language === 'ar';
  const chapters = getAllChapters();

  const [selectedChapterId, setSelectedChapterId] = useState<string>(chapters[0]?.id || 'ch1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentChapter = chapters.find((c) => c.id === selectedChapterId) || chapters[0];
  const allLessons = chapters.flatMap((c) => c.topics.flatMap((t) => t.lessons));

  // Filter lessons
  const filteredLessons = allLessons.filter((l) => {
    if (searchQuery.trim() === '') {
      return l.chapterId === selectedChapterId;
    }
    const q = searchQuery.toLowerCase();
    return (
      l.title.toLowerCase().includes(q) ||
      l.titleAr.toLowerCase().includes(q) ||
      l.id.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 select-none">
      {/* Hero Presentation Header */}
      <div className="bg-[#FFFFFF] border border-[#E2E2DF] rounded-2xl p-6 sm:p-10 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E8E5] text-[#222222] font-mono text-xs font-bold">
            <Presentation size={15} />
            <span>{isArabic ? 'نمط المحاضرات التفاعلية المباشرة' : 'Interactive Lecture Mode'}</span>
          </div>

          <span className="text-xs font-mono text-[#505050]">
            5 Units • 50 University Lectures • 100% Syllabus Coverage
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
            {isArabic ? 'التعلّم التفاعلي — شرائح المحاضرات الرقمية' : 'Interactive Learning — Digital Classroom Lectures'}
          </h1>
          <p className="text-sm sm:text-base text-[#505050] max-w-3xl leading-relaxed">
            {isArabic
              ? 'تعلّم المنهج الجامعي كاملاً عبر شرائح تفاعلية متسلسلة تشبه عروض PowerPoint الاحترافية، مع مخططات تقنية تفاعلية، وتوضيح خطوة بخطوة للعمليات الرياضية والخوارزميات، واختبارات فهم فورية.'
              : 'Study the full university cryptography curriculum through sequential presentation slides combining visual diagrams, step-by-step mathematical calculations, and instant knowledge checks without omitting syllabus details.'}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative pt-2 max-w-xl">
          <Search className={`w-4 h-4 text-[#737373] absolute top-1/2 -translate-y-1/2 ${isArabic ? 'right-3' : 'left-3'}`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              isArabic
                ? 'ابحث في كافة المحاضرات والمفاهيم (مثل: Feistel, DES, Fermat, CBC)...'
                : 'Search any lecture or topic (e.g. Feistel, DES, Fermat, CBC)...'
            }
            className={`w-full py-2.5 text-sm bg-[#F7F7F5] border border-[#E2E2DF] rounded-xl focus:outline-none focus:border-[#222222] placeholder-[#737373] text-[#222222] transition-colors ${
              isArabic ? 'pr-9 pl-4' : 'pl-9 pr-4'
            }`}
          />
        </div>
      </div>

      {/* Chapter Selection Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {chapters.map((ch) => {
          const isSelected = ch.id === selectedChapterId && searchQuery.trim() === '';
          const chLessons = ch.topics.flatMap((t) => t.lessons);
          const completedCount = chLessons.filter((l) => isLessonCompleted(l.id)).length;

          return (
            <button
              key={ch.id}
              type="button"
              onClick={() => {
                setSelectedChapterId(ch.id);
                setSearchQuery('');
              }}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                isSelected
                  ? 'bg-[#222222] text-[#FFFFFF] border-[#222222] shadow-xs'
                  : 'bg-[#FFFFFF] text-[#222222] border-[#E2E2DF] hover:bg-[#F7F7F5] hover:border-[#D4D4D0]'
              }`}
            >
              <span className={`font-mono text-xs px-2 py-0.5 rounded ${
                isSelected ? 'bg-[#333333] text-[#FFFFFF]' : 'bg-[#E8E8E5] text-[#222222]'
              }`}>
                Unit {ch.number}
              </span>
              <span>{isArabic ? ch.titleAr : ch.title}</span>
              <span className={`text-[11px] font-mono ml-1 ${isSelected ? 'opacity-80' : 'text-[#737373]'}`}>
                ({completedCount}/{chLessons.length})
              </span>
            </button>
          );
        })}
      </div>

      {/* Lectures Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-[#222222]">
              {searchQuery.trim() !== ''
                ? isArabic
                  ? `نتائج البحث (${filteredLessons.length} محاضرة)`
                  : `Search Results (${filteredLessons.length} lectures)`
                : isArabic
                ? currentChapter.titleAr
                : currentChapter.title}
            </h2>
          </div>
          <span className="text-xs font-mono text-[#505050]">
            {filteredLessons.length} {isArabic ? 'محاضرة تفاعلية جاهزة' : 'interactive lectures ready'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLessons.map((les) => {
            const isDone = isLessonCompleted(les.id);
            const deck = getInteractiveDeck(les.id);
            const slideCount = deck?.totalSlides || 8;

            return (
              <div
                key={les.id}
                className="bg-[#FFFFFF] border border-[#E2E2DF] rounded-xl p-5 flex flex-col justify-between space-y-4 hover:border-[#222222] transition-all group shadow-2xs"
              >
                {/* Card Top */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-[#F7F7F5] border border-[#E2E2DF] text-[#505050]">
                      {les.id.toUpperCase()}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-[#505050] flex items-center gap-1">
                        <Clock size={12} />
                        {les.estimatedMinutes}m
                      </span>

                      {isDone && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#217346] bg-[#EBF7EE] px-2 py-0.5 rounded">
                          <CheckCircle2 size={12} />
                          {isArabic ? 'مكتملة' : 'Done'}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#222222] group-hover:underline leading-snug">
                    {isArabic ? les.titleAr : les.title}
                  </h3>

                  <p className="text-xs text-[#505050] line-clamp-2">
                    {isArabic ? les.content?.arExplanation : les.content?.enDefinition}
                  </p>
                </div>

                {/* Card Bottom Meta & Launch Button */}
                <div className="pt-3 border-t border-[#F0F0EE] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-xs text-[#505050] font-mono">
                    <Layers size={13} />
                    <span>{slideCount} slides</span>
                  </div>

                  <Link
                    to={`/interactive/${les.chapterId}/${les.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#222222] text-[#FFFFFF] hover:bg-[#333333] text-xs font-semibold cursor-pointer transition-colors shadow-2xs"
                  >
                    <span>{isArabic ? 'تشغيل المحاضرة' : 'Launch'}</span>
                    <ArrowRight size={13} className={isArabic ? 'rotate-180' : ''} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

