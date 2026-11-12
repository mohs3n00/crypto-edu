import type { WorkedProblem } from '../problemSolving/types';
import type {
  ArtboardDeck,
  ArtboardSlide,
  ArtboardStepDetail,
  GivenParameterWithOrigin,
} from '../../types/artboard';
import { getConceptGroupForProblem } from './artboardConceptGroups';

/**
 * Maps raw problem source to the official 4-tier taxonomy required by user:
 * - Official Exam Question
 * - Question Bank
 * - Lecture Slide Example
 * - Generated Practice
 */
export function getSourceClassification(problem: WorkedProblem): {
  category: 'Official Exam Question' | 'Question Bank' | 'Lecture Slide Example' | 'Generated Practice';
  badgeClass: string;
  descriptionAr: string;
} {
  const ref = (problem.sourceRef || '').toLowerCase();
  const type = problem.sourceType;

  if (type === 'original-midterm' || ref.includes('midterm') || ref.includes('final') || ref.includes('exam')) {
    return {
      category: 'Official Exam Question',
      badgeClass: 'bg-[#222222] text-[#FFFFFF] border-[#222222]',
      descriptionAr: 'سؤال امتحان جامعي رسمي معتمد من أوراق الامتحانات السابقة',
    };
  }

  if (ref.includes('testbank') || ref.includes('test bank') || ref.includes('bank') || ref.includes('tb0')) {
    return {
      category: 'Question Bank',
      badgeClass: 'bg-[#444444] text-[#FFFFFF] border-[#444444]',
      descriptionAr: 'سؤال رسمي من بنوك الأسئلة المعتمدة للمقرر (Question Bank)',
    };
  }

  if (type === 'original-lecture' || ref.includes('slide') || ref.includes('stallings') || ref.includes('lecture')) {
    return {
      category: 'Lecture Slide Example',
      badgeClass: 'bg-[#ECEDEB] text-[#222222] border-[#D4D4D0]',
      descriptionAr: 'مثال مرجعي أصلي من سلايدات المحاضرات وكتاب ويليام ستالينجز',
    };
  }

  return {
    category: 'Generated Practice',
    badgeClass: 'bg-[#F7F7F5] text-[#505050] border-[#E2E2DF]',
    descriptionAr: 'مسألة تدريبية معيارية مولدة بنفس الأفكار لتثبيت مهارات الحل',
  };
}

/**
 * Extracts given parameters with pedagogical classification of their origins:
 * - Explicit: written directly in the question statement
 * - Derived: inferred from the rules of the cipher / algorithm
 * - Calculated: initial register or modulus state
 */
export function extractGivensWithOrigins(problem: WorkedProblem): GivenParameterWithOrigin[] {
  const baseParams = problem.givenParameters || [];
  return baseParams.map((param) => {
    let originType: 'explicit' | 'derived' | 'calculated' = 'explicit';
    let originExplanation = 'مذكور نصاً في صياغة السؤال';

    const lbl = (param.label || '').toLowerCase();
    const lblAr = param.labelAr || '';

    if (lbl.includes('mode') || lblAr.includes('نمط') || lblAr.includes('تشفير')) {
      originType = 'derived';
      originExplanation = 'مستنتج من طبيعة النظام التشفيري المطلوب في نص السؤال';
    } else if (lbl.includes('iv') || lbl.includes('register') || lblAr.includes('ابتدائي')) {
      originType = 'calculated';
      originExplanation = 'قيمة ابتدائية تحددها مواصفات الخوارزمية القياسية';
    } else if (param.extractedFromAr) {
      originExplanation = param.extractedFromAr;
    }

    return {
      label: param.label,
      value: param.value,
      labelAr: param.labelAr || param.label,
      meaningAr: param.labelAr || 'معطى حسابي أساسي للحل',
      originType,
      originExplanation,
    };
  });
}

/**
 * Determines the category of objective (حساب قيمة، إثبات، تشفير، فك تشفير، اختبار أولية)
 */
export function getProblemObjectiveCategory(problem: WorkedProblem): {
  typeAr: string;
  typeEn: string;
  descriptionAr: string;
} {
  const t = (problem.title + ' ' + problem.problem).toLowerCase();
  const tAr = problem.titleAr || '';

  if (t.includes('encrypt') || tAr.includes('تشفير') && !tAr.includes('فك')) {
    return {
      typeAr: 'عملية تشفير (Encryption)',
      typeEn: 'Encryption Transformation',
      descriptionAr: 'المطلوب تطبيق خوارزمية التشفير لتحويل النص الصريح إلى نص مشفر.',
    };
  }
  if (t.includes('decrypt') || tAr.includes('فك تشفير')) {
    return {
      typeAr: 'عملية فك تشفير (Decryption)',
      typeEn: 'Decryption & Plaintext Recovery',
      descriptionAr: 'المطلوب عكس العملية التشفيرية واسترجاع النص الصريح الأصلي.',
    };
  }
  if (t.includes('inverse') || tAr.includes('معكوس')) {
    return {
      typeAr: 'إيجاد معكوس ضربي معياري (Modular Multiplicative Inverse)',
      typeEn: 'Modular Multiplicative Inverse',
      descriptionAr: 'المطلوب إيجاد العدد الذي إذا ضُرب في المعطى كان الناتج 1 مقياس Modulus.',
    };
  }
  if (t.includes('gcd') || tAr.includes('قاسم')) {
    return {
      typeAr: 'حساب القاسم المشترك الأكبر (GCD Calculation)',
      typeEn: 'Greatest Common Divisor (GCD)',
      descriptionAr: 'المطلوب حساب أكبر عدد صحيح يقسم العددين معاً بدون باقي باستخدام القسمة الإقليدية.',
    };
  }
  if (t.includes('prime') || t.includes('miller') || tAr.includes('أولية') || tAr.includes('ميلر')) {
    return {
      typeAr: 'اختبار أولية عدد (Primality Testing)',
      typeEn: 'Primality Testing & Verification',
      descriptionAr: 'المطلوب اختبار ما إذا كان العدد أولياً أم مركباً وإثبات ذلك بالبرهان الرياضي.',
    };
  }
  if (t.includes('attack') || t.includes('brute') || tAr.includes('كسر') || tAr.includes('هجوم')) {
    return {
      typeAr: 'تحليل أمني وكسر شفرة (Cryptanalysis / Attack Complexity)',
      typeEn: 'Security Analysis & Attack Complexity',
      descriptionAr: 'المطلوب تقييم تعقيد كسر النظام واسترجاع المفتاح أو النص الأصلي.',
    };
  }

  return {
    typeAr: 'حساب قيمة عددية واستنتاج (Quantitative Cryptographic Evaluation)',
    typeEn: 'Quantitative Evaluation',
    descriptionAr: 'المطلوب حساب قيم رقمية دقيقة وتطبيق القوانين الرياضية الحاكمة.',
  };
}

/**
 * Builds foundational conceptual explanations from ground zero for beginners
 */
export function getFoundationalConcepts(problem: WorkedProblem): {
  headlineAr: string;
  concepts: { title: string; explanationAr: string; miniExample?: string }[];
} {
  const cat = problem.category;
  const pText = (problem.title + ' ' + problem.problem).toLowerCase();

  if (pText.includes('inverse') || pText.includes('550') || pText.includes('7^-1')) {
    return {
      headlineAr: 'المفاهيم الرياضية التأسيسية: الحساب المعياري والمعكوس الضربي من الصفر',
      concepts: [
        {
          title: 'ما هو المقياس (Modulus n)؟',
          explanationAr: 'هو نظام رياضي يعتمد على "باقي القسمة" مثل عقارب الساعة (مقياس 12). أي عدد نقسمه على n ونهتم بالباقي r فقط، حيث دائماً 0 ≤ r < n.',
          miniExample: '14 mod 12 = 2 (لأن 14 = 1 × 12 + 2)',
        },
        {
          title: 'ما معنى المعكوس الضربي العادي والمعياري؟',
          explanationAr: 'في الجبر العادي، معكوس العدد 5 هو 1/5 لأن 5 × (1/5) = 1. لكن في التشفير لا توجد كسور! المعكوس الضربي مقياس n هو عدد صحيح x يحقق: (a × x) mod n = 1.',
          miniExample: 'معكوس 3 مقياس 7 هو 5 لأن (3 × 5) = 15 = 2 × 7 + 1 ≡ 1 (mod 7).',
        },
        {
          title: 'الشرط الحاسم لوجود المعكوس: الأولية النسبية',
          explanationAr: 'يستحيل رياضياً وجود معكوس ضربي إلا إذا كان القاسم المشترك الأكبر gcd(a, n) = 1. إذا كان القاسم أكبر من 1، فلا يوجد معكوس إطلاقاً.',
          miniExample: 'العدد 8 ليس له معكوس مقياس 26 لأن gcd(8, 26) = 2 وليس 1.',
        },
      ],
    };
  }

  if (pText.includes('playfair')) {
    return {
      headlineAr: 'المفاهيم التأسيسية: شفرة بلايفير والاستبدال الثنائي للأزواج',
      concepts: [
        {
          title: 'فكرة التشفير الثنائي (Digram Substitution)',
          explanationAr: 'بدلاً من تشفير حرف بحرف (مما يسهل كسره بتحليل الترددات)، تشفر بلايفير حرفين معاً ككتلة واحدة في مصفوفة 5×5.',
        },
        {
          title: 'مصفوفة المفتاح 5×5 ودمج حرفي I/J',
          explanationAr: 'الأبجدية الإنجليزية 26 حرفاً، ومصفوفة 5×5 تتسع لـ 25 حرفاً فقط. لذلك يدمج الحرفان I و J في خلية واحدة مشتركة.',
        },
        {
          title: 'القواعد الثلاث الصارمة لتشفير أي زوج',
          explanationAr: '1. في نفس الصف: خذ الحرف الذي على اليمين مباشرة (مع الدوران لليسار). 2. في نفس العمود: خذ الحرف الذي تحته مباشرة. 3. في مستطيل: خذ الحرف في نفس صفك وفي عمود الحرف الآخر.',
        },
      ],
    };
  }

  if (pText.includes('hill')) {
    return {
      headlineAr: 'المفاهيم التأسيسية: شفرة هيل وجبر المصفوفات المعيارية',
      concepts: [
        {
          title: 'تحويل الحروف إلى متجهات عددية',
          explanationAr: 'كل حرف يقابله رقمه الأبجدي بدءاً من A=0 إلى Z=25. يتم تقسيم الرسالة إلى كتل طول كل منها m، وتمثل كمتجه عمودي P.',
          miniExample: 'SEC -> S=18, E=4, C=2 -> P = [18, 4, 2]^T',
        },
        {
          title: 'ضرب المصفوفات مقياس 26',
          explanationAr: 'يتم ضرب مصفوفة المفتاح K في متجه النص P، ثم نأخذ باقي القسمة على 26 لكل عنصر في المتجه الناتج: C = (K × P) mod 26.',
        },
        {
          title: 'شرط قابلية فك التشفير',
          explanationAr: 'لكي يمكن فك التشفير واسترجاع النص، يجب أن يكون لمصفوفة المفتاح معكوس K^-1 مقياس 26، وهذا يتطلب أن يكون المحدد gcd(det(K), 26) = 1.',
        },
      ],
    };
  }

  if (cat === 'block-cipher' || pText.includes('s-box') || pText.includes('feistel')) {
    return {
      headlineAr: 'المفاهيم التأسيسية: معمارية كتل فايستل وصناديق الاستبدال S-Boxes',
      concepts: [
        {
          title: 'معمارية شبكة فايستل (Feistel Network)',
          explanationAr: 'تقسم كتلة البيانات 64-بت إلى نصفين: أيسر L وأيمن R. في كل دورة يمر النصف الأيمن بدالة F مع المفتاح الفرعي ويُعمل له XOR مع الأيسر.',
        },
        {
          title: 'صناديق الاستبدال S-Boxes: قلب الأمان غير الخطي',
          explanationAr: 'صناديق S-Boxes هي المكون الوحيد غير الخطي في DES، وتحول كل 6 بتات دخل إلى 4 بتات خرج لتحقيق مبدأ التشويش (Confusion).',
        },
        {
          title: 'كيف نقرأ صندوق S-Box؟',
          explanationAr: 'البت الأول والأخير (الطرفيان) يحددان رقم الصف (من 0 إلى 3)، والبتات الأربعة الوسطى تحدد رقم العمود (من 0 إلى 15). تقاطع الصف والعمود هو الناتج.',
          miniExample: 'المدخل 101111: الطرفيان 11 (الصف 3)، والوسطى 0111 (العمود 7).',
        },
      ],
    };
  }

  if (cat === 'modes-operation') {
    return {
      headlineAr: 'المفاهيم التأسيسية: أنماط تشغيل كتل التشفير ومعايير الحشو',
      concepts: [
        {
          title: 'لماذا نحتاج إلى أنماط التشغيل (Modes of Operation)؟',
          explanationAr: 'خوارزميات الكتل مثل DES تشفر كتلة واحدة ثابتة (64 بت). لتشفير ملفات ورسائل أطول بأمان تام نحتاج لنمط تشغيل ينظم ترابط الكتل.',
        },
        {
          title: 'المتجه الابتدائي (Initialization Vector - IV)',
          explanationAr: 'كتلة عشوائية فريدة تُخلط مع أول كتلة في نمط CBC لضمان أن تشفير نفس الرسالة مرتين بمفتاح واحد ينتج شفرة مختلفة تماماً في كل مرة.',
        },
        {
          title: 'معيار حشو الكتل PKCS#7',
          explanationAr: 'إذا لم يكن طول الرسالة مضاعفاً لحجم الكتلة، تُضاف بايتات حشو. قيمة كل بايت تساوي تماماً عدد البايتات المضافة.',
          miniExample: 'إذا احتجنا حشو 5 بايتات، تكون القيمة المضافة هي: 0x05 0x05 0x05 0x05 0x05',
        },
      ],
    };
  }

  // Default Number Theory & Crypto General
  return {
    headlineAr: 'المفاهيم الرياضية والتشفيرية التأسيسية من الصفر',
    concepts: [
      {
        title: 'القوانين الحاكمة والرموز الرياضية',
        explanationAr: problem.governingFormula?.explanationAr || 'تطبيق القواعد الرياضية المعتمدة في المنهج الأكاديمي لحساب التحويلات التشفيرية خطوة بخطوة.',
      },
      {
        title: 'طبيعة المدخلات والمخرجات',
        explanationAr: 'كل متغير في المسألة يمثل قيمة محددة (مفتاح، نص، مقياس، أو أس)، ويجب الحفاظ على دقة التعويض العددي.',
      },
    ],
  };
}

/**
 * Transforms problem steps into rich 7-attribute pedagogical step details
 */
export function buildArtboardStepDetails(problem: WorkedProblem): ArtboardStepDetail[] {
  const steps = problem.steps || [];

  return steps.map((st, idx) => {
    const stepNum = idx + 1;
    const titleEn = st.titleEn || st.title || `Step ${stepNum}`;
    const titleAr = st.titleAr || `الخطوة ${stepNum}`;

    // 1. Operation description
    const operation = st.titleAr || st.titleEn || `تنفيذ الخطوة الرياضية رقم ${stepNum}`;

    // 2. Numbers used & origin
    const numbersUsed: { num: string; origin: string }[] = [];
    if (st.substitutionLatex || st.substitution) {
      const matchNums = (st.substitutionLatex || st.substitution || '').match(/\b\d+\b/g);
      if (matchNums) {
        const unique = Array.from(new Set(matchNums)).slice(0, 4);
        unique.forEach((n) => {
          let orig = 'مستخرج من معطيات المسألة';
          if (idx > 0) orig = 'ناتج مرحلي من الخطوة السابقة أو معطى أصلي';
          numbersUsed.push({ num: n, origin: orig });
        });
      }
    }
    if (numbersUsed.length === 0) {
      numbersUsed.push({ num: 'المعطيات المباشرة', origin: 'نص السؤال والمصفوفات المرجعية' });
    }

    // 3. Rationale
    const whyThisOperation =
      st.whyThisStepAr ||
      st.explanationAr ||
      `تطبيق القاعدة الرياضية الخاصة بالخطوة ${stepNum} للانتقال تدريجياً نحو الناتج النهائي المعتمد.`;

    // 4. Detailed calculation
    const detailedCalculation =
      st.calculationAr ||
      st.explanationAr ||
      st.substitutionLatex ||
      st.substitution ||
      'إجراء العمليات الحسابية المباشرة دون تخطي أو قفز.';

    // 5. Intermediate result
    const intermediateResult = st.intermediateResult || st.formula || `الناتج المرحلي للخطوة ${stepNum}`;

    // 6. Forward transition
    let forwardUse = `يتم استخدام ناتج هذه الخطوة كمدخل رئيسي في الخطوة ${stepNum + 1} لإكمال مسار الحل.`;
    if (idx === steps.length - 1) {
      forwardUse = 'هذا هو الناتج النهائي المطلوب في نص المسألة، والذي سنقوم بالتحقق الرياضي من صحته في السلايد التالية.';
    }

    return {
      stepNumber: stepNum,
      titleEn,
      titleAr,
      operation,
      numbersUsed,
      whyThisOperation,
      mathLatex: st.mathLatex || st.formula || '',
      substitutionLatex: st.substitutionLatex || st.substitution || '',
      detailedCalculation,
      intermediateResult,
      forwardUse,
      teacherTip: idx === 0 ? 'تأكد دائماً من صحة نقل الأرقام قبل بدء العمليات الحسابية.' : undefined,
    };
  });
}

/**
 * Builds the complete 10+ slide classroom deck for any WorkedProblem
 */
export function buildArtboardDeck(problem: WorkedProblem): ArtboardDeck {
  const sourceClassification = getSourceClassification(problem);
  const conceptGroup = getConceptGroupForProblem(problem.id);
  const stepDetails = buildArtboardStepDetails(problem);

  const slides: ArtboardSlide[] = [];
  let slideCounter = 1;

  // Slide 1: Introduction
  slides.push({
    id: `slide-${problem.id}-intro`,
    slideNumber: slideCounter++,
    type: 'intro',
    titleEn: 'Topic Introduction & Objectives',
    titleAr: 'مقدمة الدرس والأهداف التعليمية',
    subtitleEn: problem.title,
    subtitleAr: problem.titleAr,
  });

  // Slide 2: Original Question
  slides.push({
    id: `slide-${problem.id}-question`,
    slideNumber: slideCounter++,
    type: 'question',
    titleEn: 'Original Question Statement',
    titleAr: 'نص السؤال الأصلي بالإنجليزية والتوثيق الأكاديمي',
    subtitleEn: problem.sourceRef,
    subtitleAr: sourceClassification.descriptionAr,
  });

  // Slide 3: Understand the Question
  slides.push({
    id: `slide-${problem.id}-understanding`,
    slideNumber: slideCounter++,
    type: 'understanding',
    titleEn: 'Understand the Question Logic',
    titleAr: 'فهم نص السؤال وترجمته وتحليل المطلوب بالعربي',
    subtitleEn: 'Deconstructing the question requirements',
    subtitleAr: 'تفكيك الكلمات المفتاحية وتحديد نوع المطلوب بدقة',
  });

  // Slide 4: Extract Given Values
  slides.push({
    id: `slide-${problem.id}-givens`,
    slideNumber: slideCounter++,
    type: 'givens',
    titleEn: 'Extracting Given Parameters',
    titleAr: 'استخراج المعطيات وتحديد مصدر كل رقم',
    subtitleEn: 'Parameter extraction & origins table',
    subtitleAr: 'قاعدة المدرس: ممنوع ظهور أي رقم في الحل دون معرفة مصدره',
  });

  // Slide 5: What Do We Need?
  slides.push({
    id: `slide-${problem.id}-required`,
    slideNumber: slideCounter++,
    type: 'required',
    titleEn: 'Required Outcome Definition',
    titleAr: 'تحديد المطلوب النهائي وطريقة استنتاجه من الصياغة',
    subtitleEn: problem.requiredResult?.en || 'Target result',
    subtitleAr: problem.requiredResult?.ar || 'المطلوب النهائي',
  });

  // Slide 6: Foundational Concepts
  slides.push({
    id: `slide-${problem.id}-concepts`,
    slideNumber: slideCounter++,
    type: 'concepts',
    titleEn: 'Foundational Concepts from Scratch',
    titleAr: 'شرح المفاهيم التأسيسية الرياضية والتشفيرية من الصفر',
    subtitleEn: 'Underlying principles & micro examples',
    subtitleAr: 'بناء الأساس النظري والرياضي الذي يعتمد عليه الحل',
  });

  // Slide 7: Choose the Method
  slides.push({
    id: `slide-${problem.id}-method`,
    slideNumber: slideCounter++,
    type: 'method',
    titleEn: 'Method Selection & Keyword Clues',
    titleAr: 'اختيار طريقة الحل والعلامات الإرشادية والبدائل',
    subtitleEn: 'How did we know this method applies?',
    subtitleAr: 'كيف عرفنا الطريقة المناسبة وما هي الطرق البديلة؟',
  });

  // Slide 8: Understand the Formula
  slides.push({
    id: `slide-${problem.id}-formula`,
    slideNumber: slideCounter++,
    type: 'formula',
    titleEn: 'Governing Formula & Variable Anatomy',
    titleAr: 'تفكيك وفهم القانون وشروط تطبيقه',
    subtitleEn: problem.governingFormula?.name || 'Cryptographic Formula',
    subtitleAr: problem.governingFormula?.nameAr || 'القانون الرياضي الحاكم',
  });

  // Slides 9..K: Step-by-Step Solution
  stepDetails.forEach((step, idx) => {
    slides.push({
      id: `slide-${problem.id}-step-${idx + 1}`,
      slideNumber: slideCounter++,
      type: 'step',
      titleEn: `Step ${idx + 1}: ${step.titleEn}`,
      titleAr: `الخطوة ${idx + 1}: ${step.titleAr}`,
      subtitleEn: `Step ${idx + 1} of ${stepDetails.length}`,
      subtitleAr: `خطوة ${idx + 1} من إجمالي ${stepDetails.length} خطوات`,
      stepData: step,
      stepIndex: idx,
      totalSteps: stepDetails.length,
    });
  });

  // Slide Final: Final Result & Verification & Exam Model
  slides.push({
    id: `slide-${problem.id}-final`,
    slideNumber: slideCounter++,
    type: 'final',
    titleEn: 'Final Answer, Verification & Exam Model',
    titleAr: 'النتيجة النهائية والتحقق والنموذج الامتحاني المعتمد',
    subtitleEn: 'Double verification and exam trap prevention',
    subtitleAr: 'التأكد من صحة الحل وفخاخ الامتحانات وطريقة كتابة الإجابة النموذجية',
  });

  // Slide Practice: Interactive Student Practice Challenge
  slides.push({
    id: `slide-${problem.id}-practice`,
    slideNumber: slideCounter++,
    type: 'practice',
    titleEn: 'Practice Challenge & Skill Mastery',
    titleAr: 'التدريب التطبيقي وكشف الحل تدريجياً',
    subtitleEn: 'Apply what you learned on a fresh question',
    subtitleAr: 'اختبر فهمك لمسألة من نفس الفكرة للتأكد من إتقانك للحل',
  });

  return {
    problem,
    conceptGroup,
    slides,
    sourceClassification,
  };
}
