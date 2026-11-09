import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarClock,
  Clock,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  ArrowRight,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { useProgress } from '../../store/progressStore';
import { useUI } from '../../store/uiStore';
import TopicMasteryBadge from './TopicMasteryBadge';
import type { TopicReviewRecord } from '../../types';

export interface ReviewDueTopicsProps {
  className?: string;
}

export default function ReviewDueTopics({
  className = '',
}: ReviewDueTopicsProps): React.ReactElement {
  const { progress } = useProgress();
  const { language } = useUI();
  const isArabic = language === 'ar';

  const allReviews = useMemo<TopicReviewRecord[]>(() => {
    return Object.values(progress.topicReviews || {});
  }, [progress.topicReviews]);

  const now = Date.now();

  // Categorize reviews
  const dueTopics = useMemo(() => {
    return allReviews.filter((r) => r.nextReviewDate <= now);
  }, [allReviews, now]);

  const needsReviewTopics = useMemo(() => {
    return allReviews.filter((r) => r.masteryState === 'needs-review' && r.nextReviewDate > now);
  }, [allReviews, now]);

  const inProgressTopics = useMemo(() => {
    return allReviews.filter(
      (r) => (r.masteryState === 'studying' || r.masteryState === 'improving') && r.nextReviewDate > now
    );
  }, [allReviews, now]);

  const masteredTopics = useMemo(() => {
    return allReviews.filter((r) => r.masteryState === 'mastered');
  }, [allReviews]);

  const formatDaysUntil = (timestamp: number): string => {
    const diffHours = Math.round((timestamp - now) / (1000 * 60 * 60));
    if (diffHours <= 0) return isArabic ? 'مستحق الآن' : 'Due Now';
    const diffDays = Math.ceil(diffHours / 24);
    if (diffDays === 1) return isArabic ? 'غداً' : 'Tomorrow';
    return isArabic ? `خلال ${diffDays} أيام` : `In ${diffDays} days`;
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header Banner */}
      <div className="p-5 border-2 border-[#171717] bg-[#FAFAFA] rounded-xl space-y-2">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#171717] uppercase tracking-wider">
          <CalendarClock size={16} />
          <span>{isArabic ? 'نظام التكرار المتباعد وجدولة المراجعة' : 'Spaced Repetition & Retention Queue'}</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#171717]">
          {isArabic ? 'الموضوعات المستحقة للمراجعة والترسيخ' : 'Topics Due for Spaced Review & Retention'}
        </h3>
        <p className="text-xs sm:text-sm text-[#525252] leading-relaxed max-w-3xl">
          {isArabic
            ? 'يقوم النظام بجدولة مراجعة المفاهيم تلقائياً بفترات متباعدة (يوم، 3 أيام، أسبوع، أسبوعين، وشهر) استناداً إلى دقة إجاباتك، لضمان استقرار المعرفة في الذاكرة طويلة المدى قبل الامتحانات النهائية.'
            : 'Topics are scheduled automatically across expanding recall intervals (1, 3, 7, 14, 30 days) based on your assessment performance to guarantee long-term retention before university examinations.'}
        </p>
      </div>

      {/* Due for Review Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
          <h4 className="text-base font-bold text-[#171717] flex items-center gap-2">
            <Clock size={16} />
            <span>{isArabic ? 'مستحق للمراجعة اليوم' : 'Due for Active Recall Today'}</span>
            <span className="font-mono text-xs px-2 py-0.5 rounded border border-[#171717] bg-[#171717] text-[#FFFFFF]">
              {dueTopics.length}
            </span>
          </h4>
        </div>

        {dueTopics.length === 0 ? (
          <div className="p-6 border border-[#E5E5E5] bg-[#FFFFFF] rounded-lg text-center space-y-2">
            <CheckCircle2 size={24} className="mx-auto text-[#171717]" />
            <p className="text-sm font-semibold text-[#171717]">
              {isArabic ? 'لا توجد موضوعات مستحقة للمراجعة حالياً' : 'All topics are up to date!'}
            </p>
            <p className="text-xs text-[#525252]">
              {isArabic
                ? 'استمر في دراسة الدروس الجديدة وحل اختبارات الاستيعاب لتفعيل جدول التكرار المتباعد.'
                : 'Continue studying new lesson modules or test your knowledge in the Question Bank.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {dueTopics.map((topic) => (
              <div
                key={topic.topicId}
                className="p-5 border-2 border-[#171717] bg-[#FFFFFF] rounded-lg space-y-3 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded">
                      {topic.chapterId.toUpperCase()}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-[#171717] px-2 py-0.5 border border-[#171717] bg-[#FAFAFA] rounded">
                      {isArabic ? 'مستحق للمراجعة' : 'Due for Review'}
                    </span>
                  </div>

                  <h5 className="text-[16px] font-bold text-[#171717] leading-snug">
                    {topic.topicTitle}
                  </h5>
                  {topic.topicTitleAr && (
                    <p
                      dir="rtl"
                      className="text-xs font-serif text-[#525252]"
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      {topic.topicTitleAr}
                    </p>
                  )}

                  <p className="text-xs text-[#525252] leading-relaxed">
                    {isArabic
                      ? `مراجعة قصيرة مدتها 5 دقائق ستثبت المفهوم في الذاكرة (آخر نتيجة: ${topic.lastScore}%).`
                      : `A short 5-minute retrieval session will reinforce this topic (last score: ${topic.lastScore}%).`}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F2F2F2] flex items-center justify-between">
                  <TopicMasteryBadge state={topic.masteryState} />
                  {topic.lessonId && (
                    <Link
                      to={`/learn/${topic.chapterId}/${topic.lessonId}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] hover:underline"
                    >
                      <span>{isArabic ? 'مراجعة الدرس الآن' : 'Review Lesson'}</span>
                      <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Topics Needing Reinforcement Section */}
      {needsReviewTopics.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
            <h4 className="text-base font-bold text-[#171717] flex items-center gap-2">
              <AlertTriangle size={16} />
              <span>{isArabic ? 'موضوعات بحاجة لتعزيز الاستيعاب' : 'Topics Needing Reinforcement'}</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded border border-[#E5E5E5] bg-[#FAFAFA] text-[#525252]">
                {needsReviewTopics.length}
              </span>
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {needsReviewTopics.map((topic) => (
              <div
                key={topic.topicId}
                className="p-5 border border-[#E5E5E5] bg-[#FAFAFA] rounded-lg space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 border border-[#E5E5E5] bg-[#FFFFFF] text-[#525252] rounded">
                      {topic.chapterId.toUpperCase()}
                    </span>
                    <span className="font-mono text-[11px] text-[#737373]">
                      Next: {formatDaysUntil(topic.nextReviewDate)}
                    </span>
                  </div>

                  <h5 className="text-[15px] font-bold text-[#171717]">
                    {topic.topicTitle}
                  </h5>

                  <p className="text-xs text-[#525252] leading-relaxed">
                    {isArabic
                      ? 'تم تسجيل أخطاء في التقييم الأخير. يُنصح بإعادة قراءة الأمثلة المحلولة والتأصيل الأكاديمي.'
                      : 'Incorrect attempts were recorded. Re-checking the step-by-step worked calculations is advised.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between">
                  <TopicMasteryBadge state={topic.masteryState} />
                  {topic.lessonId && (
                    <Link
                      to={`/learn/${topic.chapterId}/${topic.lessonId}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] hover:underline"
                    >
                      <span>{isArabic ? 'فتح الدرس' : 'Re-open Lesson'}</span>
                      <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mastered Topics Summary */}
      {masteredTopics.length > 0 && (
        <div className="p-4 border border-[#E5E5E5] bg-[#FFFFFF] rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-[#171717]" />
            <span className="text-sm font-bold text-[#171717]">
              {isArabic
                ? `الموضوعات المتقنة بالكامل (${masteredTopics.length})`
                : `Mastered Topics (${masteredTopics.length})`}
            </span>
          </div>
          <span className="text-xs font-mono text-[#525252]">
            {isArabic ? 'اجتازت 3 مراجعات متتالية بنجاح' : 'Passed 3 consecutive spaced intervals'}
          </span>
        </div>
      )}
    </div>
  );
}

