import type { Lesson, Question, WorkedExample, Formula, ContentSection } from '../../types';
import type {
  InteractiveSlide,
  InteractiveLessonDeck,
  SlideKnowledgeCheck,
  SlideWorkedExample,
  SlideFormula,
} from '../../types/interactive';
import { getLessonById, getChapterById, getAdjacentLessons, getAllLessons } from '../chapters';

// Diagram mapping by lesson ID
export const LESSON_DIAGRAM_MAP: Record<string, { diagramId: string; props?: Record<string, any>; caption: string; captionAr: string }> = {
  'ch1-l3': {
    diagramId: 'cia-triad',
    caption: 'The CIA Triad Architecture (Confidentiality, Integrity, Availability)',
    captionAr: 'معمارية ثالوث أمن المعلومات CIA (السرية، السلامة، التوافرية)',
  },
  'ch1-l5': {
    diagramId: 'security-pentagon',
    caption: 'Stallings Figure 1.1: Five Essential Security Requirements (CIA + Authenticity & Accountability)',
    captionAr: 'شكل 1.1 لستالينجز: المتطلبات الأمنية الخمسة الأساسية (CIA بالإضافة للموثوقية والمساءلة)',
  },
  'ch1-l10': {
    diagramId: 'passive-active-attacks',
    caption: 'Taxonomy of Security Attacks: Passive vs. Active Threats (RFC 4949)',
    captionAr: 'تصنيف الهجمات الأمنية: الهجمات السلبية مقابل النشطة',
  },
  'ch1-l11': {
    diagramId: 'passive-active-attacks',
    caption: 'Active Attacks Taxonomy: Masquerade, Replay, Modification, and Denial of Service',
    captionAr: 'تصنيف الهجمات النشطة: انتحال الشخصية، إعادة الإرسال، التعديل، وحجب الخدمة',
  },
  'ch1-l16': {
    diagramId: 'network-security-model',
    caption: 'Stallings Figure 1.2: Model for Network Security Architecture',
    captionAr: 'شكل 1.2 لستالينجز: نموذج أمان الشبكات والبيئة الأمنية العامة',
  },
  'ch1-l17': {
    diagramId: 'network-access-security',
    caption: 'Stallings Figure 1.3: Network Access Security Model & Unwanted Access Threats',
    captionAr: 'شكل 1.3 لستالينجز: نموذج أمان الوصول إلى الشبكات وتهديدات الوصول غير المرغوب',
  },
  'ch2-l4': {
    diagramId: 'euclidean-ladder',
    caption: 'Euclidean Algorithm Division Ladder (gcd(710, 310))',
    captionAr: 'سلم قسمة خوارزمية إقليدس لحساب القاسم المشترك الأكبر',
  },
  'ch2-l7': {
    diagramId: 'extended-euclidean',
    caption: 'Extended Euclidean Algorithm Execution Table (Multiplicative Inverses)',
    captionAr: 'جدول تنفيذ خوارزمية إقليدس الموسعة لحساب المعكوس الضربي المعياري',
  },
  'ch2-l8': {
    diagramId: 'fermat-theorem',
    props: { initialTheorem: 'fermat' },
    caption: "Fermat's Little Theorem: Conditions, Modular Reduction, and Worked Exponents",
    captionAr: 'مبرهنة فيرما الصغرى: الشروط والاختزال المعياري وحساب الأسس',
  },
  'ch2-l9': {
    diagramId: 'euler-theorem',
    props: { initialTheorem: 'euler' },
    caption: "Euler's Totient Function φ(n) Rules & Generalization for Composite Moduli",
    captionAr: 'قواعد دالة مؤشر أويلر ومبرهنة أويلر المعممة للأعداد المركبة',
  },
  'ch2-l10': {
    diagramId: 'miller-rabin',
    caption: 'Miller-Rabin Probabilistic Primality Testing Algorithm Flowchart',
    captionAr: 'مخطط سير عمليات خوارزمية ميلر-رابين لاختبار أولية الأعداد الكبيرة',
  },
  'ch2-l11': {
    diagramId: 'crt-workflow',
    caption: 'Chinese Remainder Theorem (CRT) Simultaneous System Reconstruction',
    captionAr: 'مخطط إعادة بناء حل مبرهنة الباقي الصينية لنظام المعادلات المعيارية',
  },
  'ch3-l1': {
    diagramId: 'symmetric-model',
    caption: 'Stallings Figure 3.1: Simplified Model of Conventional / Symmetric Encryption',
    captionAr: 'شكل 3.1 لستالينجز: النموذج المبسط للتشفير المتماثل / التقليدي',
  },
  'ch3-l2': {
    diagramId: 'asymmetric-vs-symmetric',
    caption: 'Cryptographic Classification Dimension 2: Symmetric vs. Asymmetric Architectures',
    captionAr: 'البعد الثاني لتصنيف التشفير: التشفير المتماثل مقابل التشفير غير المتماثل',
  },
  'ch3-l3': {
    diagramId: 'caesar-wheel',
    caption: 'Caesar Cipher Modular Shift Wheel (Z_26 Alphabet Mapping)',
    captionAr: 'عجلة الإزاحة المعيارية لشفرة قيصر (المجال المعياري Z26)',
  },
  'ch3-l5': {
    diagramId: 'playfair-rules',
    caption: 'Playfair 5x5 Key Matrix & Digram Substitution Geometric Rules',
    captionAr: 'مصفوفة مفتاح بلايفير 5×5 والقواعد الهندسية لاستبدال الحروف الثنائية',
  },
  'ch3-l6': {
    diagramId: 'hill-cipher',
    caption: 'Hill Cipher Matrix Multiplication and Modulo 26 Inversion Matrix',
    captionAr: 'ضرب مصفوفات سيفر هيل وحساب معكوس المصفوفة بمقياس 26',
  },
  'ch3-l7': {
    diagramId: 'vigenere-cipher',
    caption: 'Polyalphabetic Vigenère Tableau and Repeating Key Stream Alignment',
    captionAr: 'جدول فيجينير المتعدد وتكرار المفتاح لمحاذاة الحروف',
  },
  'ch3-l8': {
    diagramId: 'vernam-otp',
    caption: 'Vernam Cipher & One-Time Pad (XOR Operation & Perfect Secrecy Conditions)',
    captionAr: 'شفرة فيرنام ولوحة المرة الواحدة (عملية XOR وشروط السرية المطلقة)',
  },
  'ch4-l4': {
    diagramId: 'feistel-network',
    caption: 'Classical Feistel Network 16-Round Architecture & Decryption Symmetry',
    captionAr: 'الهيكلية الكلاسيكية لشبكة فايستل وتماثل خطوات فك التشفير',
  },
  'ch4-l5': {
    diagramId: 'des-architecture',
    caption: 'Data Encryption Standard (DES): Overall 16-Round Feistel Flow and Key Schedule',
    captionAr: 'خوارزمية DES القياسية: التدفق العام لـ 16 دورة وجدول توليد المفاتيح',
  },
  'ch4-l6': {
    diagramId: 'des-round-function',
    caption: 'DES Round Function F and 6-to-4 Bit S-Box Substitution Lookup',
    captionAr: 'دالة الدورة F في DES والبحث في صناديق الاستبدال S-Boxes من 6 إلى 4 بت',
  },
  'ch4-l7': {
    diagramId: 'avalanche-effect',
    caption: 'Strict Avalanche Criterion (SAC) & Bit Independence Criterion (BIC)',
    captionAr: 'معيار الانهيار الصارم SAC واستقلالية البتات BIC في الشفرات الكتلية',
  },
  'ch7-l1': {
    diagramId: 'double-des-mitm',
    caption: 'Double-DES Encryption and the Meet-in-the-Middle Attack (2^57 vs 2^112)',
    captionAr: 'التشفير المزدوج Double-DES وهجوم اللقاء في المنتصف',
  },
  'ch7-l3': {
    diagramId: 'modes-ecb',
    caption: 'Electronic Codebook (ECB) Mode: Independent Block Encryption & Cut-and-Paste Vulnerability',
    captionAr: 'نمط كتاب الشفرة الإلكتروني (ECB): التشفير المستقل وثغرة القص واللصق',
  },
  'ch7-l4': {
    diagramId: 'modes-cbc',
    caption: 'Cipher Block Chaining (CBC) Mode: Feedback Chaining, IV Initialization & Error Propagation',
    captionAr: 'نمط ربط كتل الشفرة (CBC): التغذية الراجعة وشعاع الابتداء وانتشار الأخطاء',
  },
  'ch7-l6': {
    diagramId: 'modes-ctr',
    caption: 'Stream-Like Block Cipher Modes: Counter (CTR), CFB & OFB Parallel Processing',
    captionAr: 'أنماط الشفرات الكتلية الشبيهة بالانسيابية: نمط العداد CTR ونمط التغذية الراجعة',
  },
};

function extractSectionContent(content: string | string[] | any): string {
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) return content.join('\n');
  return '';
}

/**
 * Builds a structured, complete interactive slide deck for a given lesson
 */
export function buildSlidesForLesson(lesson: Lesson): InteractiveLessonDeck {
  const chapter = getChapterById(lesson.chapterId);
  const chapterNumber = chapter?.number ?? 1;
  const chapterTitle = chapter?.title ?? 'Cryptography & Network Security';
  const chapterTitleAr = chapter?.titleAr ?? 'أمن المعلومات وتشفير البيانات';

  const slides: InteractiveSlide[] = [];
  const srcRef = lesson.sourceRef || {
    file: `Ch ${chapterNumber}`,
    page: '1',
  };

  const defaultBadge = `Unit ${chapterNumber}`;
  const defaultBadgeAr = `الوحدة ${chapterNumber}`;

  // ==========================================
  // SLIDE 1: Title Slide (Presentation Overview)
  // ==========================================
  slides.push({
    id: `${lesson.id}-s1`,
    lessonId: lesson.id,
    chapterId: lesson.chapterId,
    slideNumber: 1,
    totalSlides: 1,
    type: 'title',
    title: lesson.title,
    titleAr: lesson.titleAr,
    subtitle: `${chapterTitle} • University CS Curriculum`,
    subtitleAr: `${chapterTitleAr} • المنهج الجامعي المعتمد`,
    sourceRef: srcRef,
    badge: defaultBadge,
    badgeAr: defaultBadgeAr,
    bulletPoints: lesson.objectives.map((obj, i) => ({
      en: obj,
      ar: lesson.objectivesAr[i] || obj,
      emphasis: i === 0,
    })),
    enDefinition: `Estimated study duration: ${lesson.estimatedMinutes} minutes. Covers authoritative lecture materials.`,
    arExplanation: `المدة التقديرية للدراسة: ${lesson.estimatedMinutes} دقيقة. تغطي شرائح المحاضرة الرسمية بدقة أكاديمية كاملة.`,
  });

  // ==========================================
  // SLIDE 2: Core Concept & Formal Definition
  // ==========================================
  const enDef = lesson.content?.enDefinition || lesson.contentEn || 'Core academic concept definition.';
  const arDef = lesson.content?.arExplanation || lesson.contentAr || 'شرح المفهوم الأكاديمي الأساسي.';

  slides.push({
    id: `${lesson.id}-s2`,
    lessonId: lesson.id,
    chapterId: lesson.chapterId,
    slideNumber: 2,
    totalSlides: 1,
    type: 'definition',
    title: `Core Concept: ${lesson.title}`,
    titleAr: `المفهوم الأساسي: ${lesson.titleAr}`,
    sourceRef: srcRef,
    badge: 'Definition',
    badgeAr: 'المفهوم والتعريف',
    enDefinition: enDef,
    arExplanation: arDef,
  });

  // ==========================================
  // SLIDES 3+: Content Sections Breakdown
  // ==========================================
  const sections: ContentSection[] = lesson.content?.sections || [];
  let enSectionText = '';
  let arSectionText = '';

  for (let idx = 0; idx < sections.length; idx++) {
    const s = sections[idx];
    if (s.lang === 'en') {
      enSectionText = extractSectionContent(s.content);
    } else if (s.lang === 'ar') {
      arSectionText = extractSectionContent(s.content);
      if (enSectionText || arSectionText) {
        const rawBulletsEn = enSectionText
          .split('\n')
          .filter((line) => line.trim().startsWith('•') || line.trim().match(/^\d+\./))
          .map((line) => line.replace(/^[•\d.]\s*/, '').trim());

        const rawBulletsAr = arSectionText
          .split('\n')
          .filter((line) => line.trim().startsWith('•') || line.trim().match(/^\d+\./))
          .map((line) => line.replace(/^[•\d.]\s*/, '').trim());

        const bulletPoints = rawBulletsEn.slice(0, 5).map((enB, bIdx) => ({
          en: enB,
          ar: rawBulletsAr[bIdx] || enB,
        }));

        slides.push({
          id: `${lesson.id}-s${slides.length + 1}`,
          lessonId: lesson.id,
          chapterId: lesson.chapterId,
          slideNumber: slides.length + 1,
          totalSlides: 1,
          type: 'concept',
          title: `Key Principles & Technical Scope`,
          titleAr: `المبادئ والضوابط التقنية`,
          sourceRef: srcRef,
          badge: 'Detailed Study',
          badgeAr: 'دراسة تفصيلية',
          enDefinition: enSectionText,
          arExplanation: arSectionText,
          bulletPoints: bulletPoints.length > 0 ? bulletPoints : undefined,
        });

        enSectionText = '';
        arSectionText = '';
      }
    }
  }

  if (enSectionText) {
    slides.push({
      id: `${lesson.id}-s${slides.length + 1}`,
      lessonId: lesson.id,
      chapterId: lesson.chapterId,
      slideNumber: slides.length + 1,
      totalSlides: 1,
      type: 'concept',
      title: 'Detailed Technical Analysis',
      titleAr: 'التحليل التقني للمفهوم',
      sourceRef: srcRef,
      badge: 'Analysis',
      badgeAr: 'تحليل',
      enDefinition: enSectionText,
      arExplanation: 'تفاصيل ومحددات تشغيلية معتمدة.',
    });
  }

  // ==========================================
  // SLIDE: Interactive Diagram (if assigned)
  // ==========================================
  const diagInfo = LESSON_DIAGRAM_MAP[lesson.id];
  if (diagInfo) {
    slides.push({
      id: `${lesson.id}-s${slides.length + 1}`,
      lessonId: lesson.id,
      chapterId: lesson.chapterId,
      slideNumber: slides.length + 1,
      totalSlides: 1,
      type: 'diagram',
      title: `Interactive Architecture: ${lesson.title}`,
      titleAr: `المخطط التفاعلي: ${lesson.titleAr}`,
      sourceRef: srcRef,
      badge: 'Interactive Diagram',
      badgeAr: 'مخطط تفاعلي',
      diagramId: diagInfo.diagramId,
      diagramProps: diagInfo.props,
      diagramCaption: diagInfo.caption,
      diagramCaptionAr: diagInfo.captionAr,
      enDefinition: diagInfo.caption,
      arExplanation: diagInfo.captionAr,
    });
  }

  // ==========================================
  // SLIDES: Mathematical Formulas
  // ==========================================
  const formulas: Formula[] = lesson.content?.formulas || lesson.formulas || [];
  for (const f of formulas) {
    const slideForm: SlideFormula = {
      latex: f.latex,
      explanationEn: f.explanation || f.name || 'Formula definition',
      explanationAr: f.explanationAr || f.nameAr || 'الصيغة الرياضية المعتمدة',
      parameters: f.variables
        ? Object.entries(f.variables).map(([k, v]: [string, any]) => ({
            symbol: k,
            meaning: typeof v === 'string' ? v : v?.meaning || k,
            meaningAr: typeof v === 'object' && v?.meaningAr ? v.meaningAr : '',
          }))
        : undefined,
      conditions: f.conditions?.map((c: any, cIdx: number) => ({
        en: typeof c === 'string' ? c : c?.en || '',
        ar: (f.conditionsAr && f.conditionsAr[cIdx]) || (typeof c === 'object' && c?.ar) || '',
      })),
    };

    slides.push({
      id: `${lesson.id}-s${slides.length + 1}`,
      lessonId: lesson.id,
      chapterId: lesson.chapterId,
      slideNumber: slides.length + 1,
      totalSlides: 1,
      type: 'formula',
      title: `Mathematical Formulation: ${f.name || f.label || 'Equation'}`,
      titleAr: `الصياغة الرياضية: ${f.nameAr || f.labelAr || 'المعادلة'}`,
      sourceRef: srcRef,
      badge: 'Mathematical Foundation',
      badgeAr: 'الأساس الرياضي والمعياري',
      formula: slideForm,
      enDefinition: f.explanation || f.name || 'Formula definition',
      arExplanation: f.explanationAr || f.nameAr || 'الصيغة الرياضية المعتمدة',
    });
  }

  // ==========================================
  // SLIDES: Worked Examples & Interactive Calculations
  // ==========================================
  const workedExamples: WorkedExample[] = lesson.content?.workedExamples || lesson.workedExamples || [];
  for (const ex of workedExamples) {
    const slideExample: SlideWorkedExample = {
      id: ex.id,
      problem: ex.problem || ex.title,
      problemAr: ex.problemAr || ex.titleAr || ex.title,
      steps: (ex.steps || []).map((st, stepIdx) => ({
        stepNumber: st.stepNumber ?? stepIdx + 1,
        label: st.label || st.title || `Step ${stepIdx + 1}`,
        labelAr: st.labelAr || st.titleAr || `الخطوة ${stepIdx + 1}`,
        math: st.math || st.formula || st.calculation,
        explanation: st.explanation,
        explanationAr: st.explanationAr || '',
        intermediateResult: st.intermediateResult,
      })),
      result: ex.result || 'Solved successfully',
      resultAr: ex.result || 'تم الحل بنجاح',
      verification: ex.verification,
      verificationAr: ex.verificationAr,
    };

    slides.push({
      id: `${lesson.id}-s${slides.length + 1}`,
      lessonId: lesson.id,
      chapterId: lesson.chapterId,
      slideNumber: slides.length + 1,
      totalSlides: 1,
      type: 'calculation',
      title: `Worked Problem: ${ex.title}`,
      titleAr: `مسألة نموذجية محلولة: ${ex.titleAr || ex.title}`,
      sourceRef: srcRef,
      badge: 'Step-by-Step Problem Solving',
      badgeAr: 'خطوات الحل النموذجية',
      workedExample: slideExample,
      enDefinition: ex.problem || ex.title,
      arExplanation: ex.problemAr || ex.titleAr || ex.title,
    });
  }

  // ==========================================
  // SLIDE: Exam Traps & Common Misconceptions
  // ==========================================
  const examNotes = lesson.content?.examNotes || lesson.examNotes;
  const examNotesAr = lesson.content?.examNotesAr || lesson.examNotesAr;
  if (examNotes || examNotesAr) {
    const enText = Array.isArray(examNotes) ? examNotes.join('\n\n• ') : examNotes || '';
    const arText = Array.isArray(examNotesAr) ? examNotesAr.join('\n\n• ') : examNotesAr || '';

    slides.push({
      id: `${lesson.id}-s${slides.length + 1}`,
      lessonId: lesson.id,
      chapterId: lesson.chapterId,
      slideNumber: slides.length + 1,
      totalSlides: 1,
      type: 'concept',
      title: 'Exam Traps & Crucial Distinctions',
      titleAr: 'فخاخ الامتحانات والتمييزات الدقيقة',
      sourceRef: srcRef,
      badge: 'Exam Alert',
      badgeAr: 'تنبيه امتحاني حاسم',
      enDefinition: `Crucial exam recognition pointers:\n• ${enText}`,
      arExplanation: `نقاط تركيز واستنتاج امتحانية:\n• ${arText}`,
      importantDistinction: {
        en: enText,
        ar: arText,
      },
    });
  }

  // ==========================================
  // SLIDE: Knowledge Check (Interactive Question)
  // ==========================================
  const questions: Question[] = lesson.questions || lesson.practiceQuestions || [];
  if (questions.length > 0) {
    const q = questions[0];
    const enStem = q.en?.stem || 'Question';
    const arStem = q.ar?.stem || enStem;
    const enOpts = q.en?.options || [];
    const arOpts = q.ar?.options || enOpts;
    const correctVal = q.answer?.correct ?? q.correctAnswer;

    const knowledgeCheck: SlideKnowledgeCheck = {
      id: q.id,
      question: enStem,
      questionAr: arStem,
      options: enOpts.map((optText, optIdx) => {
        const isCorrect =
          typeof correctVal === 'number'
            ? correctVal === optIdx
            : typeof correctVal === 'string'
            ? correctVal === String.fromCharCode(65 + optIdx) || correctVal === optText
            : false;

        return {
          text: optText,
          textAr: arOpts[optIdx] || optText,
          isCorrect,
        };
      }),
      explanation: q.explanation || q.answer?.explanation || 'Exam question explanation.',
      explanationAr: q.explanationAr || q.answer?.explanationAr || 'شرح الإجابة النموذجية للسؤال.',
      officialExamTrap: q.source?.includes('tb') || q.source?.includes('mid'),
    };

    slides.push({
      id: `${lesson.id}-s${slides.length + 1}`,
      lessonId: lesson.id,
      chapterId: lesson.chapterId,
      slideNumber: slides.length + 1,
      totalSlides: 1,
      type: 'knowledge-check',
      title: 'Quick Knowledge Check',
      titleAr: 'اختبار الفهم السريع',
      sourceRef: srcRef,
      badge: 'Interactive Check',
      badgeAr: 'تطبيق مباشر',
      knowledgeCheck,
      enDefinition: enStem,
      arExplanation: arStem,
    });
  }

  // ==========================================
  // SLIDE: Lecture Summary & Completion
  // ==========================================
  const adj = getAdjacentLessons(lesson.id);
  slides.push({
    id: `${lesson.id}-s${slides.length + 1}`,
    lessonId: lesson.id,
    chapterId: lesson.chapterId,
    slideNumber: slides.length + 1,
    totalSlides: 1,
    type: 'summary',
    title: `Lecture Complete: ${lesson.title}`,
    titleAr: `اكتملت المحاضرة: ${lesson.titleAr}`,
    sourceRef: srcRef,
    badge: 'Completion',
    badgeAr: 'خاتمة المحاضرة',
    summary: {
      takeaways: [
        {
          en: `Mastered the core concepts of ${lesson.title}.`,
          ar: `إتقان المفاهيم والضوابط الأساسية لدرس ${lesson.titleAr}.`,
        },
        {
          en: `Verified against official slide reference (${srcRef.file}, slide/p. ${srcRef.page || srcRef.slide}).`,
          ar: `تم التحقق والمطابقة مع مرجع المحاضرة (${srcRef.file}، شريحة/صفحة ${srcRef.page || srcRef.slide}).`,
        },
        {
          en: 'Ready for active practice questions and exam recall exercises.',
          ar: 'جاهز للانتقال لبنك الأسئلة وتمارين الاسترجاع والمحاكاة الامتحانية.',
        },
      ],
      nextLessonId: adj.next?.id,
      nextLessonTitle: adj.next?.title,
      nextLessonTitleAr: adj.next?.titleAr,
    },
    enDefinition: `Congratulations! You have completed the interactive lecture for ${lesson.title}.`,
    arExplanation: `تهانينا! لقد أنهيت بنجاح دراسة المحاضرة التفاعلية لدرس ${lesson.titleAr}.`,
  });

  // Final pass: Update totalSlides and slideNumber across all slides
  const total = slides.length;
  slides.forEach((sl, idx) => {
    sl.slideNumber = idx + 1;
    sl.totalSlides = total;
  });

  return {
    lessonId: lesson.id,
    chapterId: lesson.chapterId,
    title: lesson.title,
    titleAr: lesson.titleAr,
    estimatedMinutes: lesson.estimatedMinutes,
    sourceRef: srcRef,
    slides,
    totalSlides: total,
  };
}

/**
 * Registry cache to avoid rebuilding slide decks on every re-render
 */
const deckCache: Record<string, InteractiveLessonDeck> = {};

export function getInteractiveDeck(lessonId: string): InteractiveLessonDeck | undefined {
  if (deckCache[lessonId]) {
    return deckCache[lessonId];
  }
  const lesson = getLessonById(lessonId);
  if (!lesson) return undefined;
  const deck = buildSlidesForLesson(lesson);
  deckCache[lessonId] = deck;
  return deck;
}

export function getAllInteractiveDecks(): InteractiveLessonDeck[] {
  const allLessons = getAllLessons();
  return allLessons.map((l) => getInteractiveDeck(l.id)!);
}
