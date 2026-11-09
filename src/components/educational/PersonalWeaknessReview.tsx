import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, BookOpen, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useProgress } from '../../store/progressStore';
import { useUI } from '../../store/uiStore';
import { getQuestionById } from '../../data/questions';

interface WeaknessRecommendation {
  topicKey: string;
  topicTitle: string;
  topicTitleAr: string;
  missedCount: number;
  lessonPath: string;
  lessonTitle: string;
  recommendedReview: string;
  recommendedReviewAr: string;
  relatedFormulaId?: string;
  relatedTrapId?: string | number;
}

export default function PersonalWeaknessReview(): React.ReactElement {
  const { progress } = useProgress();
  const { language } = useUI();
  const isArabic = language === 'ar';

  const incorrectEntries = useMemo(() => {
    return Object.entries(progress.questionAnswers).filter(([, ans]) => !ans.correct);
  }, [progress.questionAnswers]);

  const recommendations = useMemo<WeaknessRecommendation[]>(() => {
    const topicMap: Record<string, { count: number; sampleQ: any }> = {};

    for (const [qId] of incorrectEntries) {
      const q = getQuestionById(qId);
      if (!q) continue;

      let topicKey = 'general';
      const stem = q.en.stem.toLowerCase();

      if (stem.includes('inverse') || stem.includes('multiplicative') || stem.includes('gcd') || stem.includes('coprime')) {
        topicKey = 'modular-inverse';
      } else if (stem.includes('cfb') || stem.includes('ofb') || stem.includes('ctr') || stem.includes('cbc') || stem.includes('ecb') || stem.includes('mode')) {
        topicKey = 'cipher-modes';
      } else if (stem.includes('hill') || stem.includes('matrix') || stem.includes('determinant')) {
        topicKey = 'hill-cipher';
      } else if (stem.includes('des') || stem.includes('s-box') || stem.includes('feistel') || stem.includes('avalanche')) {
        topicKey = 'des-feistel';
      } else if (stem.includes('fermat') || stem.includes('euler') || stem.includes('totient') || stem.includes('miller-rabin') || stem.includes('crt')) {
        topicKey = 'number-theory-theorems';
      } else if (stem.includes('threat') || stem.includes('attack') || stem.includes('service') || stem.includes('mechanism') || stem.includes('passive') || stem.includes('active')) {
        topicKey = 'security-concepts';
      } else {
        topicKey = `chapter-${q.chapterId}`;
      }

      if (!topicMap[topicKey]) {
        topicMap[topicKey] = { count: 0, sampleQ: q };
      }
      topicMap[topicKey].count += 1;
    }

    const recs: WeaknessRecommendation[] = [];

    if (topicMap['modular-inverse']) {
      recs.push({
        topicKey: 'modular-inverse',
        topicTitle: 'Modular Inverses & Extended Euclidean Algorithm',
        topicTitleAr: 'المعكوس الضربي المعياري وخوارزمية إقليدس الممتدة',
        missedCount: topicMap['modular-inverse'].count,
        lessonPath: '/learn/ch2/ch2-l7',
        lessonTitle: 'Extended Euclidean Algorithm (Table 2.4)',
        recommendedReview: 'Revisit the existence condition gcd(a, n) = 1 and practice the back-substitution vector ladder.',
        recommendedReviewAr: 'راجع شرط الوجود الحتمي gcd(a, n) = 1 وتمرن على جدول التعويض العكسي.',
        relatedFormulaId: 'f-modular-inverse',
        relatedTrapId: 5,
      });
    }

    if (topicMap['cipher-modes']) {
      recs.push({
        topicKey: 'cipher-modes',
        topicTitle: 'Block Cipher Modes & Error Propagation (CBC vs. OFB vs. CTR)',
        topicTitleAr: 'أنماط التشفير الكتلي وانتشار الأخطاء (CBC مقابل OFB و CTR)',
        missedCount: topicMap['cipher-modes'].count,
        lessonPath: '/learn/ch7/ch7-l4',
        lessonTitle: 'Cipher Block Chaining (CBC) & Error Proofs',
        recommendedReview: 'Review the 1-bit ciphertext error theorem and the difference between OFB keystream independence and CBC chaining.',
        recommendedReviewAr: 'راجع مبرهنة خطأ البت الواحد في النص المشفر والفارق بين استقلالية OFB وتتابع CBC.',
        relatedFormulaId: 'f-cbc-error',
        relatedTrapId: 22,
      });
    }

    if (topicMap['hill-cipher']) {
      recs.push({
        topicKey: 'hill-cipher',
        topicTitle: 'Hill Cipher Matrix Invertibility & Determinant Modulo 26',
        topicTitleAr: 'قابلية قلب مصفوفة سيفر هل والمحدد بمقياس 26',
        missedCount: topicMap['hill-cipher'].count,
        lessonPath: '/learn/ch3/ch3-l6',
        lessonTitle: 'Hill Cipher & Matrix Arithmetic Modulo 26',
        recommendedReview: 'Ensure gcd(det(K), 26) = 1. A non-zero determinant is NOT sufficient if it is divisible by 2 or 13.',
        recommendedReviewAr: 'تأكد دائماً من gcd(det(K), 26) = 1. المحدد غير الصفري لا يكفي إذا كان يقبل القسمة على 2 أو 13.',
        relatedFormulaId: 'f-hill-invertibility',
        relatedTrapId: 12,
      });
    }

    if (topicMap['des-feistel']) {
      recs.push({
        topicKey: 'des-feistel',
        topicTitle: 'DES Round Function, S-Box Indexing & Feistel Mechanics',
        topicTitleAr: 'دالة دورة DES، فهرسة صناديق S-Box، وبنية فايستل',
        missedCount: topicMap['des-feistel'].count,
        lessonPath: '/learn/ch4/ch4-l6',
        lessonTitle: 'DES S-Box S₂ Lookup & Examination Problem',
        recommendedReview: 'Practice the outer bits (b1, b6) for row and inner bits (b2, b3, b4, b5) for column selection.',
        recommendedReviewAr: 'تدرب على استخراج الصف من البتين الطرفيين (b1, b6) والعمود من البتات الأربعة الوسطى.',
        relatedFormulaId: 'f-des-sbox-lookup',
        relatedTrapId: 14,
      });
    }

    if (topicMap['number-theory-theorems']) {
      recs.push({
        topicKey: 'number-theory-theorems',
        topicTitle: 'Fermat & Euler Theorems, Primality & CRT',
        topicTitleAr: 'مبرهنات فيرما وأويلر، فحص الأولية، والباقي الصينية',
        missedCount: topicMap['number-theory-theorems'].count,
        lessonPath: '/learn/ch2/ch2-l9',
        lessonTitle: "Euler's Totient Function & Euler's Theorem",
        recommendedReview: 'Verify gcd(a, p) = 1 before applying Fermat, and check pairwise coprimality for Chinese Remainder Theorem.',
        recommendedReviewAr: 'تحقق من gcd(a, p) = 1 قبل تطبيق مبرهنة فيرما، وتأكد من الأولية النسبية أزواجاً في مبرهنة الباقي الصينية.',
        relatedFormulaId: 'f-fermat-little',
        relatedTrapId: 7,
      });
    }

    if (topicMap['security-concepts']) {
      recs.push({
        topicKey: 'security-concepts',
        topicTitle: 'Security Taxonomy: Attacks, Services & Mechanisms',
        topicTitleAr: 'تصنيف الأمان: الهجمات، الخدمات، والآليات (X.800)',
        missedCount: topicMap['security-concepts'].count,
        lessonPath: '/learn/ch1/ch1-l8',
        lessonTitle: 'OSI Security Architecture (X.800)',
        recommendedReview: 'Review the difference between Threats (potential), Attacks (actions), Services (goals), and Mechanisms (algorithms).',
        recommendedReviewAr: 'راجع الفروق الدقيقة بين التهديدات والعمليات الهجومية والخدمات الأمنية والآليات الخوارزمية.',
        relatedTrapId: 2,
      });
    }

    return recs;
  }, [incorrectEntries]);

  if (incorrectEntries.length === 0) {
    return (
      <div className="p-6 border border-[#E5E5E5] bg-[#FFFFFF] rounded-xl space-y-3 text-center max-w-2xl mx-auto">
        <div className="w-10 h-10 rounded-full border border-[#171717] bg-[#FAFAFA] flex items-center justify-center mx-auto text-[#171717]">
          <CheckCircle2 size={20} />
        </div>
        <h4 className="text-base font-bold text-[#171717]">
          {isArabic ? 'سجل الأخطاء نظيف وممتاز' : 'No Academic Weaknesses Detected'}
        </h4>
        <p className="text-xs text-[#525252] leading-relaxed">
          {isArabic
            ? 'كلما تدربت على بنك الأسئلة أو حل امتحانات الميدتيرم، سيقوم النظام تلقائياً بتحليل أي نقاط تحتاج مراجعة واقتراح تدريبات موجهة بهدوء.'
            : 'As you practice questions or complete midterm simulations, this system will calmly highlight recurring conceptual traps and guide your targeted revision.'}
        </p>
      </div>
    );
  }

  return (
    <div className="border border-[#171717] bg-[#FFFFFF] rounded-xl p-6 space-y-5 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded border border-[#171717] bg-[#171717] text-[#FFFFFF] flex items-center justify-center shrink-0">
            <Compass size={17} />
          </div>
          <div>
            <h4 className="text-base font-bold text-[#171717]">
              {isArabic ? 'خطة التدريب الموجه ومعالجة نقاط الضعف' : 'Targeted Concept Recommendations & Weakness Review'}
            </h4>
            <span className="text-xs text-[#525252] font-mono block">
              Based on {incorrectEntries.length} incorrect question attempts
            </span>
          </div>
        </div>
      </div>

      {/* Recommendations Cards */}
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div
            key={rec.topicKey}
            className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-lg space-y-3 hover:border-[#171717] transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#E5E5E5] pb-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase border border-[#171717] bg-[#171717] text-[#FFFFFF] px-2 py-0.5 rounded font-bold">
                  {rec.missedCount} Missed Questions
                </span>
                <h5 className="text-sm font-bold text-[#171717]">{rec.topicTitle}</h5>
              </div>
              {rec.topicTitleAr && (
                <span dir="rtl" className="text-xs font-serif font-bold text-[#525252]" style={{ fontFamily: 'var(--font-arabic)' }}>
                  {rec.topicTitleAr}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#171717] leading-relaxed">
              {isArabic ? rec.recommendedReviewAr : rec.recommendedReview}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <Link
                to={rec.lessonPath}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded hover:bg-[#333333] font-medium"
              >
                <BookOpen size={13} />
                <span>Revisit Lesson: {rec.lessonTitle}</span>
              </Link>

              {rec.relatedTrapId && (
                <Link
                  to={`/review?tab=traps#trap-${rec.relatedTrapId}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:border-[#171717] rounded font-medium"
                >
                  <Sparkles size={13} />
                  <span>Review Trap #{rec.relatedTrapId}</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

