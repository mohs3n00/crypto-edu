import { academicKeywords } from './keywordDatabase';
import type { AcademicKeyword, RecallExercise, RecallOption, MatchingPair } from './types';

export interface ConfusedPairDefinition {
  id1: string;
  id2: string;
  titleEn: string;
  titleAr: string;
  explanationEn: string;
  explanationAr: string;
}

export const FAMOUS_CONFUSED_PAIRS: ConfusedPairDefinition[] = [
  {
    id1: 'unauthorized-disclosure',
    id2: 'unauthorized-modification',
    titleEn: 'Confidentiality vs Data Integrity',
    titleAr: 'السرية (Confidentiality) مقابل سلامة البيانات (Integrity)',
    explanationEn:
      'Confidentiality protects data against UNAUTHORIZED DISCLOSURE (reading/leaking by eavesdroppers). Integrity protects data against UNAUTHORIZED MODIFICATION (altering, deleting, or injecting data).',
    explanationAr:
      'السرية (Confidentiality) تحمي من الكشف والإفشاء غير المصرح به (قراءة وتصنت)؛ بينما سلامة البيانات (Integrity) تحمي من التعديل والعبث والحذف غير المصرح به.',
  },
  {
    id1: 'passive-attack',
    id2: 'active-attack',
    titleEn: 'Passive Attack vs Active Attack',
    titleAr: 'الهجوم السلبي (Passive) مقابل الهجوم النشط (Active)',
    explanationEn:
      'Passive attacks observe or monitor system data without affecting system resources (focus is on PREVENTION via encryption). Active attacks alter system resources or disrupt operations (focus is on DETECTION and recovery).',
    explanationAr:
      'الهجوم السلبي يراقب ويتنصت دون تعديل الموارد (التركيز على المنع بالتشفير)؛ بينما الهجوم النشط يعدل الموارد أو يعطلها (التركيز على الكشف الفوري والتعافي).',
  },
  {
    id1: 'confusion-principle',
    id2: 'diffusion-principle',
    titleEn: 'Confusion vs Diffusion (Shannon Principles)',
    titleAr: 'الخلط (Confusion) مقابل الانتشار (Diffusion) - مبادئ شانون',
    explanationEn:
      'Confusion obscures the complex relationship between the key and ciphertext (implemented via non-linear S-Boxes). Diffusion spreads the statistical structure of plaintext across the entire ciphertext (implemented via P-Boxes).',
    explanationAr:
      'الخلط (Confusion) يعقد العلاقة بين بتات المفتاح والنص المشفر عبر صناديق التعويض S-Boxes؛ بينما الانتشار (Diffusion) يشتت إحصائيات النص الصريح عبر النص المشفر بواسطة صناديق التبديل P-Boxes.',
  },
  {
    id1: 'ecb-pattern-leakage',
    id2: 'cbc-error-propagation',
    titleEn: 'ECB Pattern Leakage vs CBC Error Propagation',
    titleAr: 'تسريب أنماط ECB مقابل انتشار أخطاء CBC',
    explanationEn:
      'ECB encrypts blocks independently, meaning identical plaintexts always produce identical ciphertexts. CBC chains blocks with XOR; a 1-bit ciphertext error completely corrupts the current block but flips only 1 bit in the next block, stopping error propagation thereafter.',
    explanationAr:
      'وضع ECB يشفر الكتل باستقلالية تامة فيكرر الأنماط؛ بينما وضع CBC يربط الكتل عبر XOR، وخطأ البت الواحد يفسد الكتلة الحالية ويقلب بتاً واحداً في التالية فقط ثم يتوقف.',
  },
  {
    id1: 'fermat-little-theorem',
    id2: 'euler-theorem-condition',
    titleEn: "Fermat's Little Theorem vs Euler's Totient Theorem",
    titleAr: 'مبرهنة فيرما الصغرى مقابل مبرهنة أويلر العامة',
    explanationEn:
      "Fermat's Little Theorem strictly requires p to be a PRIME number: a^(p-1) = 1 (mod p) where gcd(a, p) = 1. Euler's Totient Theorem generalizes this to ANY modulus n (prime or composite): a^phi(n) = 1 (mod n) provided gcd(a, n) = 1.",
    explanationAr:
      'مبرهنة فيرما تشترط حصرياً أن يكون المقياس p أولياً: a^(p-1) ≡ 1 mod p؛ بينما مبرهنة أويلر تعمم العلاقة على أي مقياس مركب أو أولي n بشرط وحيد هو gcd(a,n)=1: a^φ(n) ≡ 1 mod n.',
  },
  {
    id1: 'multiplicative-inverse-condition',
    id2: 'coprime-integers',
    titleEn: 'Multiplicative Inverse Existence Condition vs Coprimality',
    titleAr: 'شرط وجود المعكوس الضربي والأعداد الأولية نسبياً',
    explanationEn:
      'A modular multiplicative inverse a^(-1) mod n exists IF AND ONLY IF gcd(a, n) = 1. If gcd(a, n) > 1, no inverse exists in the finite ring Z_n because multiples of a share a common factor with n.',
    explanationAr:
      'يوجد معكوس ضربي modulo n إذا وفقط إذا كان gcd(a, n) = 1. إذا كان القاسم المشترك أكبر من 1 يستحيل وجود المعكوس لأن مضاعفات a ستشترك في عوامل مع مقياس الحلقة.',
  },
];

// Helper to determine chapter ID from relatedLessonId
export function getKeywordChapterId(kw: AcademicKeyword): string {
  if (kw.chapterId) return kw.chapterId;
  if (kw.relatedLessonId) {
    const match = kw.relatedLessonId.match(/^(ch\d+)/);
    if (match) return match[1];
  }
  return 'ch1';
}

// Chapter Title Helper
export function getChapterName(chapterId: string, isArabic = false): string {
  switch (chapterId) {
    case 'ch1':
      return isArabic ? 'الفصل 1: الهجمات والخدمات الأمنية' : 'Chapter 1: Security Attacks & Services';
    case 'ch2':
      return isArabic ? 'الفصل 2: الحساب المعياري ونظرية الأعداد' : 'Chapter 2: Modular Arithmetic & Number Theory';
    case 'ch3':
      return isArabic ? 'الفصل 3: تقنيات التشفير الكلاسيكي' : 'Chapter 3: Classical Encryption Techniques';
    case 'ch4':
      return isArabic ? 'الفصل 4: تشفير الكتل ومعيار DES' : 'Chapter 4: Block Ciphers & Data Encryption Standard';
    case 'ch7':
      return isArabic ? 'الفصل 7: أنماط تشغيل الكتل والتشفير المتعدد' : 'Chapter 7: Block Cipher Operations & Multiple Encryption';
    default:
      return isArabic ? 'مقرر التشفير وأمن الشبكات' : 'Cryptography & Network Security';
  }
}

// =========================================================================
// TYPE A: KEYWORD -> CONCEPT RECOGNITION
// =========================================================================
export function generateKeywordToConcept(
  kw: AcademicKeyword,
  allKeywords: AcademicKeyword[]
): RecallExercise {
  const chapterId = getKeywordChapterId(kw);
  const correctOption: RecallOption = {
    id: `opt-correct-${kw.id}`,
    textEn: kw.explanationEn,
    textAr: kw.explanationAr,
    isCorrect: true,
    relatedKeywordId: kw.id,
  };

  // Find 3 distractors: prefer same chapter or confusedWith
  const distractors: AcademicKeyword[] = [];
  if (kw.confusedWith && kw.confusedWith.length > 0) {
    for (const cid of kw.confusedWith) {
      const found = allKeywords.find((k) => k.id === cid);
      if (found && found.id !== kw.id && !distractors.some((d) => d.id === found.id)) {
        distractors.push(found);
      }
    }
  }

  // Same chapter keywords
  const sameChapter = allKeywords.filter(
    (k) => k.id !== kw.id && getKeywordChapterId(k) === chapterId && !distractors.some((d) => d.id === k.id)
  );
  for (const k of sameChapter) {
    if (distractors.length >= 3) break;
    distractors.push(k);
  }

  // Fallback to other keywords
  const others = allKeywords.filter(
    (k) => k.id !== kw.id && !distractors.some((d) => d.id === k.id)
  );
  for (const k of others) {
    if (distractors.length >= 3) break;
    distractors.push(k);
  }

  const options: RecallOption[] = [
    correctOption,
    ...distractors.slice(0, 3).map((d, idx) => ({
      id: `opt-distractor-${kw.id}-${idx}`,
      textEn: d.explanationEn,
      textAr: d.explanationAr,
      isCorrect: false,
      relatedKeywordId: d.id,
      feedbackEn: `This definition actually belongs to "${d.termEn}".`,
      feedbackAr: `هذا التعريف ينتمي في الواقع إلى مصطلح "${d.termAr}".`,
    })),
  ].sort(() => Math.random() - 0.5);

  const contextHintEn = `${getChapterName(chapterId, false)} (${kw.category.toUpperCase()})`;
  const contextHintAr = `${getChapterName(chapterId, true)} (تصنيف: ${kw.category})`;

  const memoryCueEn = kw.memoryCue
    ? `Memory Association Trigger: "${kw.memoryCue.triggerEn}"`
    : `Focus on the core academic purpose of "${kw.termEn}".`;
  const memoryCueAr = kw.memoryCue
    ? `مفتاح الربط الذهني: "${kw.memoryCue.triggerAr}"`
    : `ركز على الوظيفة أو الغرض الأكاديمي الأساسي لمصطلح "${kw.termAr}".`;

  const distinctionHintEn = kw.memoryCue
    ? `Target Concept: Points directly toward "${kw.memoryCue.targetEn}".`
    : `Distinguish this from active modifications or structural permutations.`;
  const distinctionHintAr = kw.memoryCue
    ? `الهدف المرتبط: يتجه نحو "${kw.memoryCue.targetAr}".`
    : `ميز بين هذا المفهوم وبين التعديلات النشطة أو التبديلات الموضعية.`;

  return {
    id: `recall-a-${kw.id}`,
    type: 'keyword-to-concept',
    chapterId,
    relatedKeywordId: kw.id,
    relatedLessonId: kw.relatedLessonId,
    promptEn: 'Which academic definition or core cryptographic concept corresponds to this keyword?',
    promptAr: 'أي من المفاهيم أو التعريفات الأكاديمية التالية يطابق هذه الكلمة المفتاحية بدقة؟',
    highlightedTermEn: kw.termEn,
    highlightedTermAr: kw.termAr,
    options,
    hints: [contextHintEn, memoryCueEn, distinctionHintEn],
    hintsAr: [contextHintAr, memoryCueAr, distinctionHintAr],
    explanationEn: kw.explanationEn,
    explanationAr: kw.explanationAr,
  };
}

// =========================================================================
// TYPE B: CONCEPT -> KEYWORD RECOGNITION
// =========================================================================
export function generateConceptToKeyword(
  kw: AcademicKeyword,
  allKeywords: AcademicKeyword[]
): RecallExercise {
  const chapterId = getKeywordChapterId(kw);
  const correctOption: RecallOption = {
    id: `opt-correct-${kw.id}`,
    textEn: kw.termEn,
    textAr: kw.termAr,
    isCorrect: true,
    relatedKeywordId: kw.id,
  };

  const distractors: AcademicKeyword[] = [];
  if (kw.confusedWith && kw.confusedWith.length > 0) {
    for (const cid of kw.confusedWith) {
      const found = allKeywords.find((k) => k.id === cid);
      if (found && found.id !== kw.id && !distractors.some((d) => d.id === found.id)) {
        distractors.push(found);
      }
    }
  }

  const sameChapter = allKeywords.filter(
    (k) => k.id !== kw.id && getKeywordChapterId(k) === chapterId && !distractors.some((d) => d.id === k.id)
  );
  for (const k of sameChapter) {
    if (distractors.length >= 3) break;
    distractors.push(k);
  }

  const others = allKeywords.filter(
    (k) => k.id !== kw.id && !distractors.some((d) => d.id === k.id)
  );
  for (const k of others) {
    if (distractors.length >= 3) break;
    distractors.push(k);
  }

  const options: RecallOption[] = [
    correctOption,
    ...distractors.slice(0, 3).map((d, idx) => ({
      id: `opt-distractor-${kw.id}-${idx}`,
      textEn: d.termEn,
      textAr: d.termAr,
      isCorrect: false,
      relatedKeywordId: d.id,
      feedbackEn: `Incorrect. "${d.termEn}" refers to: ${d.explanationEn.slice(0, 80)}...`,
      feedbackAr: `غير صحيح. مصطلح "${d.termAr}" يعني: ${d.explanationAr.slice(0, 80)}...`,
    })),
  ].sort(() => Math.random() - 0.5);

  const contextHintEn = `${getChapterName(chapterId, false)} (${kw.category.toUpperCase()})`;
  const contextHintAr = `${getChapterName(chapterId, true)} (تصنيف: ${kw.category})`;

  const memoryCueEn = kw.memoryCue
    ? `Memory Trigger: "${kw.memoryCue.triggerEn}"`
    : `Identify the academic term that directly encapsulates this behavior.`;
  const memoryCueAr = kw.memoryCue
    ? `مفتاح التذكر: "${kw.memoryCue.triggerAr}"`
    : `حدد المصطلح الأكاديمي الذي يلخص هذا السلوك بدقة.`;

  const distinctionHintEn = kw.memoryCue
    ? `Target Key Phrase: "${kw.memoryCue.targetEn}"`
    : `Check if this involves data observation, mathematical invertibility, or structural diffusion.`;
  const distinctionHintAr = kw.memoryCue
    ? `العبارة المستهدفة: "${kw.memoryCue.targetAr}"`
    : `تحقق مما إذا كان المفهوم يتعلق بالمراقبة السلبية، أو القابلية للعكس، أو الانتشار الهيكلي.`;

  return {
    id: `recall-b-${kw.id}`,
    type: 'concept-to-keyword',
    chapterId,
    relatedKeywordId: kw.id,
    relatedLessonId: kw.relatedLessonId,
    promptEn: 'Which specific academic keyword corresponds to the following definition?',
    promptAr: 'أي من الكلمات المفتاحية الأكاديمية التالية تطابق التعريف والوظيفة الموضحة أدناه؟',
    highlightedTermEn: kw.explanationEn,
    highlightedTermAr: kw.explanationAr,
    options,
    hints: [contextHintEn, memoryCueEn, distinctionHintEn],
    hintsAr: [contextHintAr, memoryCueAr, distinctionHintAr],
    explanationEn: `"${kw.termEn}" is defined as: ${kw.explanationEn}`,
    explanationAr: `يُعرف مصطلح "${kw.termAr}" بأنه: ${kw.explanationAr}`,
  };
}

// =========================================================================
// TYPE C: COMPLETE THE MISSING KEYWORD
// =========================================================================
export function generateMissingKeyword(
  kw: AcademicKeyword,
  allKeywords: AcademicKeyword[]
): RecallExercise {
  const chapterId = getKeywordChapterId(kw);

  let sentenceEn = kw.missingSentenceEn;
  let sentenceAr = kw.missingSentenceAr;

  if (!sentenceEn) {
    sentenceEn = `In cryptography, [______] is defined as: ${kw.explanationEn}`;
  }
  if (!sentenceAr) {
    sentenceAr = `في أمن المعلومات والتشفير، يُعرّف [______] بأنه: ${kw.explanationAr}`;
  }

  const correctOption: RecallOption = {
    id: `opt-correct-${kw.id}`,
    textEn: kw.termEn,
    textAr: kw.termAr,
    isCorrect: true,
    relatedKeywordId: kw.id,
  };

  const distractors: AcademicKeyword[] = [];
  const sameChapter = allKeywords.filter(
    (k) => k.id !== kw.id && getKeywordChapterId(k) === chapterId
  );
  for (const k of sameChapter) {
    if (distractors.length >= 3) break;
    distractors.push(k);
  }
  const others = allKeywords.filter(
    (k) => k.id !== kw.id && !distractors.some((d) => d.id === k.id)
  );
  for (const k of others) {
    if (distractors.length >= 3) break;
    distractors.push(k);
  }

  const options: RecallOption[] = [
    correctOption,
    ...distractors.slice(0, 3).map((d, idx) => ({
      id: `opt-distractor-${kw.id}-${idx}`,
      textEn: d.termEn,
      textAr: d.termAr,
      isCorrect: false,
      relatedKeywordId: d.id,
      feedbackEn: `Inserting "${d.termEn}" is incorrect because it deals with ${d.category}.`,
      feedbackAr: `وضع "${d.termAr}" غير صحيح لأنه يختص بـ ${d.category}.`,
    })),
  ].sort(() => Math.random() - 0.5);

  return {
    id: `recall-c-${kw.id}`,
    type: 'missing-keyword',
    chapterId,
    relatedKeywordId: kw.id,
    relatedLessonId: kw.relatedLessonId,
    promptEn: 'Select the missing academic term to complete the authoritative definition statement:',
    promptAr: 'اختر المصطلح الأكاديمي المفقود لإكمال نص التعريف العلمي المعتمد:',
    highlightedTermEn: sentenceEn,
    highlightedTermAr: sentenceAr,
    options,
    hints: [
      `${getChapterName(chapterId, false)}`,
      kw.memoryCue?.triggerEn || 'Analyze the context surrounding the blank space.',
      kw.memoryCue?.targetEn || 'Focus on the formal academic term.',
    ],
    hintsAr: [
      `${getChapterName(chapterId, true)}`,
      kw.memoryCue?.triggerAr || 'حلل السياق المحيط بالفراغ المتروك.',
      kw.memoryCue?.targetAr || 'ركز على المصطلح الأكاديمي الدقيق.',
    ],
    explanationEn: `The completed statement correctly reads: "${sentenceEn.replace('[______]', kw.termEn)}"`,
    explanationAr: `النص الصحيح بعد الإكمال: "${sentenceAr.replace('[______]', kw.termAr)}"`,
  };
}

// =========================================================================
// TYPE D: MATCH KEYWORDS WITH CONCEPTS (4-PAIR INTERACTIVE MATCHING)
// =========================================================================
export function generateMatchingExercise(
  keywords: AcademicKeyword[],
  chapterFilter = 'all'
): RecallExercise {
  let pool = keywords;
  if (chapterFilter !== 'all') {
    const filtered = keywords.filter((k) => getKeywordChapterId(k) === chapterFilter);
    if (filtered.length >= 4) pool = filtered;
  }

  const selected = [...pool].sort(() => Math.random() - 0.5).slice(0, 4);
  const chapterId = chapterFilter !== 'all' ? chapterFilter : getKeywordChapterId(selected[0]);

  const matchingPairs: MatchingPair[] = selected.map((k) => ({
    id: k.id,
    keywordEn: k.termEn,
    keywordAr: k.termAr,
    conceptEn: k.explanationEn.length > 90 ? k.explanationEn.slice(0, 87) + '...' : k.explanationEn,
    conceptAr: k.explanationAr.length > 90 ? k.explanationAr.slice(0, 87) + '...' : k.explanationAr,
  }));

  return {
    id: `recall-d-match-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    type: 'matching',
    chapterId,
    relatedKeywordId: selected[0].id,
    promptEn: 'Match each highlighted academic keyword on the left with its authentic concept on the right:',
    promptAr: 'قم بمطابقة كل كلمة مفتاحية على اليمين مع المفهوم الأكاديمي الدقيق المطابق لها:',
    matchingPairs,
    options: [], // Handled interactively by Matching component
    hints: [
      `Matching set contains concepts from ${getChapterName(chapterId, false)}`,
      'Read both terms and concepts thoroughly before making pairs.',
      'Tap a term, then tap its corresponding definition to connect them.',
    ],
    hintsAr: [
      `المجموعة تحتوي على مصطلحات ومفاهيم من ${getChapterName(chapterId, true)}`,
      'اقرأ المصطلحات والتعريفات بعناية قبل التوصيل.',
      'اضغط على المصطلح ثم اضغط على التعريف المطابق لتثبيت الرابط.',
    ],
    explanationEn: 'Review the verified pairings carefully to reinforce your memory associations.',
    explanationAr: 'راجع أزواج التوصيل المكتملة لترسيخ الروابط الذهنية الأكاديمية.',
  };
}

// =========================================================================
// TYPE E: MATHEMATICAL CONDITION RECOGNITION
// =========================================================================
export function generateMathConditionExercise(
  kw: AcademicKeyword,
  _allKeywords?: AcademicKeyword[]
): RecallExercise {
  const chapterId = getKeywordChapterId(kw);

  let latexPrompt = kw.mathConditionLatex || '\\gcd(a, n) = 1';
  let conditionEn = 'gcd(a, n) = 1';
  let conditionAr = 'gcd(a, n) = 1 (أوليان نسبياً)';

  if (kw.id === 'fermat-little-theorem') {
    latexPrompt = 'a^{p-1} \\equiv 1 \\pmod p';
    conditionEn = 'p is prime and gcd(a, p) = 1 (p does not divide a)';
    conditionAr = 'p عدد أولي و gcd(a, p) = 1 (العدد p لا يقسم a)';
  } else if (kw.id === 'euler-theorem-condition') {
    latexPrompt = 'a^{\\phi(n)} \\equiv 1 \\pmod n';
    conditionEn = 'gcd(a, n) = 1 holds for any modulus n (prime or composite)';
    conditionAr = 'gcd(a, n) = 1 لأي مقياس n (سواء كان أولياً أو مركباً)';
  } else if (kw.id === 'crt-pairwise-coprime') {
    latexPrompt = 'x \\equiv a_i \\pmod{m_i} \\quad (i = 1, \\dots, k)';
    conditionEn = 'Moduli are pairwise relatively prime: gcd(m_i, m_j) = 1 for all i ≠ j';
    conditionAr = 'المقاييس أولية نسبياً مثنى مثنى: gcd(m_i, m_j) = 1 لكل i ≠ j';
  } else if (kw.id === 'multiplicative-inverse-condition') {
    latexPrompt = 'a \\cdot b \\equiv 1 \\pmod n \\iff b = a^{-1} \\pmod n';
    conditionEn = 'gcd(a, n) = 1 (Relatively prime to modulus)';
    conditionAr = 'gcd(a, n) = 1 (العدد والمقياس أوليان نسبياً)';
  } else if (kw.id === 'hill-cipher-invertibility') {
    latexPrompt = 'K^{-1} = \\det(K)^{-1} \\cdot \\text{adj}(K) \\pmod{26}';
    conditionEn = 'gcd(det(K), 26) = 1 and det(K) ≠ 0';
    conditionAr = 'gcd(det(K), 26) = 1 ومحدد المصفوفة لا يساوي صفراً';
  }

  const options: RecallOption[] = [
    {
      id: `opt-e-correct-${kw.id}`,
      textEn: conditionEn,
      textAr: conditionAr,
      isCorrect: true,
      feedbackEn: 'Correct! This condition is mathematically necessary and sufficient.',
      feedbackAr: 'صحيح! هذا الشرط الرياضي ضروري وكافٍ لصحة العملية الرياضية.',
    },
    {
      id: `opt-e-trap1-${kw.id}`,
      textEn: 'a must be strictly greater than n (a > n)',
      textAr: 'أن يكون a أكبر تماماً من المقياس n (a > n)',
      isCorrect: false,
      feedbackEn: 'Incorrect trap. The magnitude of a is irrelevant; modular reduction applies.',
      feedbackAr: 'فخ امتحانات شائع! مقدار a غير مؤثر؛ الحساب المعياري يخفض القيم تلقائياً.',
    },
    {
      id: `opt-e-trap2-${kw.id}`,
      textEn: 'Both a and n must be prime numbers',
      textAr: 'أن يكون كل من a و n عددين أوليين حتماً',
      isCorrect: false,
      feedbackEn: 'Incorrect. Only coprimality gcd(a,n)=1 is required, not individual primality.',
      feedbackAr: 'خطأ! الشرط هو الأولية النسبية gcd(a,n)=1، ولا يشترط أن يكون أحدهما أولياً بذاته.',
    },
    {
      id: `opt-e-trap3-${kw.id}`,
      textEn: 'n must be an even integer (n mod 2 = 0)',
      textAr: 'أن يكون المقياس n عدداً زوجياً (n mod 2 = 0)',
      isCorrect: false,
      feedbackEn: 'Incorrect. Parity does not guarantee invertibility or theorem validity.',
      feedbackAr: 'خطأ! الزوجية لا تضمن وجود المعكوس أو صحة المبرهنة.',
    },
  ].sort(() => Math.random() - 0.5);

  return {
    id: `recall-e-${kw.id}`,
    type: 'math-condition',
    chapterId,
    relatedKeywordId: kw.id,
    relatedLessonId: kw.relatedLessonId,
    promptEn: 'What essential mathematical condition MUST be satisfied for this theorem or formula to hold?',
    promptAr: 'ما هو الشرط الرياضي الجبري الجوهري الذي يجب تحققه لصحة هذه الصيغة أو المبرهنة؟',
    latexPrompt,
    highlightedTermEn: kw.termEn,
    highlightedTermAr: kw.termAr,
    options,
    hints: [
      `${getChapterName(chapterId, false)}: Number Theory & Modular Properties`,
      kw.memoryCue?.triggerEn || 'Think about greatest common divisor (GCD) and prime factors.',
      kw.memoryCue?.targetEn || 'Focus on gcd(a, n) = 1.',
    ],
    hintsAr: [
      `${getChapterName(chapterId, true)}: نظرية الأعداد والخصائص المعيارية`,
      kw.memoryCue?.triggerAr || 'فكر في القاسم المشترك الأكبر (GCD) والعوامل الأولية.',
      kw.memoryCue?.targetAr || 'ركز على شرط الأولية النسبية gcd(a, n) = 1.',
    ],
    explanationEn: kw.explanationEn,
    explanationAr: kw.explanationAr,
  };
}

// =========================================================================
// TYPE F: EXAM TRIGGER RECOGNITION
// =========================================================================
export function generateExamTriggerExercise(
  kw: AcademicKeyword,
  allKeywords: AcademicKeyword[]
): RecallExercise {
  const chapterId = getKeywordChapterId(kw);

  let stemEn = kw.examTriggerPromptEn;
  let stemAr = kw.examTriggerPromptAr;

  if (!stemEn) {
    if (kw.id === 'unauthorized-disclosure') {
      stemEn =
        'University Exam Scenario: An unauthorized outside party intercepts and reads credit card numbers sent over an unencrypted Wi-Fi hotspot. What security goal was breached?';
      stemAr =
        'سيناريو امتحان جامعي: طرف غير مخول يتنصت على بطاقات ائتمانية ويقرأ أرقامها عبر نقطة Wi-Fi غير مشفرة. ما الهدف الأمني الذي تم انتهاكه؟';
    } else if (kw.id === 'unauthorized-modification') {
      stemEn =
        'University Exam Scenario: An attacker alters the beneficiary account number inside a bank wire transfer packet while in transit. Which security pillar was compromised?';
      stemAr =
        'سيناريو امتحان جامعي: مهاجم يعبث برقم الحساب المستفيد داخل حوالة مصرفية أثناء انتقالها في الشبكة. أي ركن أمني تم اختراقه؟';
    } else if (kw.id === 'traffic-analysis') {
      stemEn =
        'University Exam Scenario: All message payloads are encrypted with AES-256, yet an attacker observes packet transmission frequencies and burst lengths to deduce military headquarters communication. What attack is this?';
      stemAr =
        'سيناريو امتحان جامعي: حمولة الرسائل مشفرة بالكامل بـ AES-256، ومع ذلك يراقب المهاجم توقيت وأحجام الحزم ليستنتج خطط العمليات. ما اسم هذا الهجوم؟';
    } else if (kw.id === 'ecb-pattern-leakage') {
      stemEn =
        'University Exam Scenario: An engineer encrypts an uncompressed bitmap image of the company logo. The ciphertext still clearly displays the outline of the logo. Which encryption mode caused this flaw?';
      stemAr =
        'سيناريو امتحان جامعي: مهندس يشفر صورة رقمية Bitmap غير مضغوطة لشعار الشركة، فيظهر مخطط الشعار بوضوح في النص المشفر الناتج. أي نمط تشفير تسبب في هذه الثغرة؟';
    } else if (kw.id === 'meet-in-the-middle-complexity') {
      stemEn =
        'University Exam Scenario: In Double-DES with two 56-bit keys (total 112 bits), what is the effective work factor to break the cipher using Meet-in-the-Middle attack?';
      stemAr =
        'سيناريو امتحان جامعي: في التشفير الثنائي Double-DES بمفتاحين طول كل منهما 56 بت (112 بت إجمالي)، ما هو تعقيد الكسر الفعلي باستخدام هجوم الالتقاء في المنتصف؟';
    } else {
      stemEn = `University Exam Scenario: A student is asked to identify the cryptographic mechanism that solves: "${kw.explanationEn}"`;
      stemAr = `سيناريو امتحان جامعي: طُلب من الطالب تحديد الآلية التشفيرية التي تعالج: "${kw.explanationAr}"`;
    }
  }

  const correctOption: RecallOption = {
    id: `opt-f-correct-${kw.id}`,
    textEn: kw.termEn,
    textAr: kw.termAr,
    isCorrect: true,
    relatedKeywordId: kw.id,
    feedbackEn: 'Exact exam match! This is the precise academic concept tested in university exams.',
    feedbackAr: 'تطابق امتحاني دقيق! هذا هو المصطلح والمفهوم المستهدف تماماً في الامتحانات الأكاديمية.',
  };

  const distractors: AcademicKeyword[] = [];
  if (kw.confusedWith && kw.confusedWith.length > 0) {
    for (const cid of kw.confusedWith) {
      const found = allKeywords.find((k) => k.id === cid);
      if (found && found.id !== kw.id && !distractors.some((d) => d.id === found.id)) {
        distractors.push(found);
      }
    }
  }
  const sameChapter = allKeywords.filter(
    (k) => k.id !== kw.id && getKeywordChapterId(k) === chapterId && !distractors.some((d) => d.id === k.id)
  );
  for (const k of sameChapter) {
    if (distractors.length >= 3) break;
    distractors.push(k);
  }
  const others = allKeywords.filter((k) => k.id !== kw.id && !distractors.some((d) => d.id === k.id));
  for (const k of others) {
    if (distractors.length >= 3) break;
    distractors.push(k);
  }

  const options: RecallOption[] = [
    correctOption,
    ...distractors.slice(0, 3).map((d, idx) => ({
      id: `opt-f-distractor-${kw.id}-${idx}`,
      textEn: d.termEn,
      textAr: d.termAr,
      isCorrect: false,
      relatedKeywordId: d.id,
      feedbackEn: `Incorrect choice. "${d.termEn}" applies to a different threat or mechanism.`,
      feedbackAr: `خيار غير صحيح. مصطلح "${d.termAr}" ينطبق على تهديد أو آلية مختلفة.`,
    })),
  ].sort(() => Math.random() - 0.5);

  return {
    id: `recall-f-${kw.id}`,
    type: 'exam-trigger',
    chapterId,
    relatedKeywordId: kw.id,
    relatedLessonId: kw.relatedLessonId,
    promptEn: 'Identify the exact academic concept / attack / mechanism triggered by this examination clue:',
    promptAr: 'حدد المفهوم الأكاديمي أو الهجوم أو الآلية المستهدفة بدقة في إشارة الامتحان التالية:',
    highlightedTermEn: stemEn,
    highlightedTermAr: stemAr,
    options,
    hints: [
      `${getChapterName(chapterId, false)} Examination Test Bank`,
      kw.memoryCue?.triggerEn || 'Notice the signature symptom described in the exam scenario.',
      kw.memoryCue?.targetEn || 'Direct match with the academic memory cue.',
    ],
    hintsAr: [
      `بنك أسئلة امتحانات ${getChapterName(chapterId, true)}`,
      kw.memoryCue?.triggerAr || 'لاحظ العَرَض أو السلوك المميز الموصوف في السيناريو.',
      kw.memoryCue?.targetAr || 'مطابقة مباشرة مع مفتاح التذكر الأكاديمي.',
    ],
    explanationEn: kw.explanationEn,
    explanationAr: kw.explanationAr,
    sourceExamRef: 'Midterm / Final Examination Test Bank',
  };
}

// =========================================================================
// SESSION GENERATOR
// =========================================================================

export interface RecallSessionFilter {
  chapterId?: string; // 'all' | 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch7'
  mode?: 'all' | 'due' | 'confused' | 'math' | 'exam' | 'matching';
  targetPair?: [string, string];
  dueKeywordIds?: string[];
}

export function createRecallSession(
  filter: RecallSessionFilter = {},
  count = 10
): RecallExercise[] {
  const { chapterId = 'all', mode = 'all', targetPair, dueKeywordIds = [] } = filter;

  // 1. Target Confused Pair Session
  if (targetPair && targetPair.length === 2) {
    const kw1 = academicKeywords.find((k) => k.id === targetPair[0]);
    const kw2 = academicKeywords.find((k) => k.id === targetPair[1]);
    const pairKeywords = [kw1, kw2].filter(Boolean) as AcademicKeyword[];

    if (pairKeywords.length === 2) {
      return [
        generateKeywordToConcept(pairKeywords[0], academicKeywords),
        generateConceptToKeyword(pairKeywords[1], academicKeywords),
        generateMissingKeyword(pairKeywords[0], academicKeywords),
        generateExamTriggerExercise(pairKeywords[1], academicKeywords),
        generateMatchingExercise(academicKeywords, getKeywordChapterId(pairKeywords[0])),
      ];
    }
  }

  // 2. Filter Pool
  let pool = [...academicKeywords];
  if (chapterId !== 'all') {
    pool = pool.filter((k) => getKeywordChapterId(k) === chapterId);
  }

  if (mode === 'due' && dueKeywordIds.length > 0) {
    const dueSet = new Set(dueKeywordIds);
    const duePool = pool.filter((k) => dueSet.has(k.id));
    if (duePool.length > 0) pool = duePool;
  }

  if (mode === 'math') {
    const mathPool = pool.filter(
      (k) =>
        k.category === 'condition' ||
        ['fermat-little-theorem', 'euler-theorem-condition', 'crt-pairwise-coprime', 'multiplicative-inverse-condition', 'hill-cipher-invertibility'].includes(k.id)
    );
    if (mathPool.length > 0) pool = mathPool;
  }

  // Shuffle pool
  const shuffledKeywords = [...pool].sort(() => Math.random() - 0.5);
  const exercises: RecallExercise[] = [];

  let idx = 0;
  while (exercises.length < count && idx < shuffledKeywords.length * 2) {
    const kw = shuffledKeywords[idx % shuffledKeywords.length];
    const cycle = Math.floor(idx / shuffledKeywords.length);

    if (mode === 'math') {
      exercises.push(generateMathConditionExercise(kw, academicKeywords));
    } else if (mode === 'exam') {
      exercises.push(generateExamTriggerExercise(kw, academicKeywords));
    } else if (mode === 'matching') {
      exercises.push(generateMatchingExercise(academicKeywords, chapterId));
    } else {
      // Balanced rotation across A, B, C, E, F
      const typeIndex = (idx + cycle) % 5;
      if (typeIndex === 0) {
        exercises.push(generateKeywordToConcept(kw, academicKeywords));
      } else if (typeIndex === 1) {
        exercises.push(generateConceptToKeyword(kw, academicKeywords));
      } else if (typeIndex === 2) {
        exercises.push(generateMissingKeyword(kw, academicKeywords));
      } else if (typeIndex === 3) {
        if (kw.category === 'condition') {
          exercises.push(generateMathConditionExercise(kw, academicKeywords));
        } else {
          exercises.push(generateExamTriggerExercise(kw, academicKeywords));
        }
      } else {
        exercises.push(generateExamTriggerExercise(kw, academicKeywords));
      }
    }
    idx++;
  }

  // Insert 1 interactive matching exercise in standard sessions
  if (exercises.length >= 4 && mode === 'all') {
    exercises[Math.floor(exercises.length / 2)] = generateMatchingExercise(
      academicKeywords,
      chapterId
    );
  }

  return exercises.slice(0, count);
}
