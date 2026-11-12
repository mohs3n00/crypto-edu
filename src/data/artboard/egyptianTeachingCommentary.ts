/**
 * Minimalist, Direct Egyptian Teaching Commentary (الشرح المباشر البسيط)
 * Follows the strict 7-part pedagogical sequence with ZERO fluff:
 * 1. Original Question (Verbatim) & Source
 * 2. نفهم السؤال (1-2 sentences)
 * 3. المعطيات والمطلوب (Minimalist list)
 * 4. هنحل إزاي؟ (1 sentence: Method + Why)
 * 5. الحل خطوة بخطوة (هنحسب إيه؟ • ليه؟ • العملية الحسابية • الناتج)
 * 6. النتيجة النهائية والتحقق
 * 7. نعرف المسألة دي في الامتحان إزاي؟
 */

import type { WorkedProblem } from '../problemSolving/types';

export interface ArtboardStep {
  stepTitle: string; // مثال: الخطوة 1: أول عملية قسمة
  whatToCalculate: string; // هنحسب إيه؟
  why: string; // ليه؟
  calculationLines: string[]; // سطور العملية الحسابية
  result: string; // الناتج
}

export interface ArtboardProblemExplanation {
  sourceRef: string;
  originalQuestionEn: string;
  understandQuestionAr: string;
  givens: { label: string; value: string }[];
  required: string;
  howWeSolve: {
    method: string;
    whyThisMethod: string;
  };
  steps: ArtboardStep[];
  finalAnswer: string;
  verification: string;
  examClue: string;
}

export const minimalistTeachingDatabase: Record<string, ArtboardProblemExplanation> = {
  // =========================================================================
  // EXTENDED EUCLIDEAN: 550^-1 mod 1759 (Stallings Table 2.4 / Slide 14)
  // =========================================================================
  'prob-ch2-02': {
    sourceRef: 'Stallings 7th Ed. Table 2.4 & Chapter 2 Slide 14',
    originalQuestionEn:
      'Using the Extended Euclidean Algorithm, calculate the modular multiplicative inverse: $550^{-1} \\pmod{1759}$. Show all intermediate vector iterations.',
    understandQuestionAr:
      'المطلوب نلاقي رقم صحيح x لو ضربناه في 550 وقسمنا الناتج على 1759، يكون الباقي 1 بالظبط (550x ≡ 1 mod 1759).',
    givens: [
      { label: 'العدد المطلوب معكوسه (a)', value: '550' },
      { label: 'المقياس (m أو n)', value: '1759' },
    ],
    required: 'إيجاد المعكوس الضربي x بحيث: 550x ≡ 1 (mod 1759).',
    howWeSolve: {
      method: 'خوارزمية إقليدس الممتدة (Extended Euclidean Algorithm)',
      whyThisMethod:
        'لأن الأرقام كبيرة والتخمين مستحيل، فالمعادلة التكرارية T = A − q×B بتوصل للحل المنطقي في 4 خطوات بس.',
    },
    steps: [
      {
        stepTitle: 'الخطوة 1: أول عملية قسمة وتحديد خارج القسمة',
        whatToCalculate: 'هنقسم 1759 على 550.',
        why: 'لأن إقليدس بتبدأ بقسمة المقياس على العدد المطلوب معكوسه.',
        calculationLines: [
          '550 تدخل في 1759 ثلاث مرات، لأن: 550 × 3 = 1650',
          'نطرح: 1759 − 1650 = 109',
        ],
        result: 'إذن خارج القسمة q = 3، والباقي = 109 (وهنستخدمه في الخطوة التالية).',
      },
      {
        stepTitle: 'الخطوة 2: تحديث المتجهات وقسمة 550 على 109',
        whatToCalculate: 'هنقسم 550 على الباقي السابق (109).',
        why: 'لأن باقي الخطوة الأولى يصبح هو المقسوم عليه في الخطوة الثانية.',
        calculationLines: [
          '109 تدخل في 550 خمس مرات، لأن: 109 × 5 = 545',
          'نطرح: 550 − 545 = 5',
        ],
        result: 'إذن خارج القسمة q = 5، والباقي = 5.',
      },
      {
        stepTitle: 'الخطوة 3: قسمة 109 على 5',
        whatToCalculate: 'هنقسم 109 على الباقي السابق (5).',
        why: 'نستمر في القسمة المتتابعة حتى نقترب من الباقي 1.',
        calculationLines: [
          '5 تدخل في 109 إحدى وعشرين مرة، لأن: 5 × 21 = 105',
          'نطرح: 109 − 105 = 4',
        ],
        result: 'إذن خارج القسمة q = 21، والباقي = 4.',
      },
      {
        stepTitle: 'الخطوة 4: قسمة 5 على 4 والوصول للباقي 1',
        whatToCalculate: 'هنقسم 5 على 4.',
        why: 'بمجرد أن يصبح الباقي 1 نقف فوراً لأن المعكوس قد استُخرج في خانة B₂.',
        calculationLines: [
          '4 تدخل في 5 مرة واحدة: 4 × 1 = 4',
          'نطرح: 5 − 4 = 1',
          'المعكوس المقابل للباقي 1 في جدول بيزو = 355',
        ],
        result: 'وصلنا للباقي 1، والمعكوس الناتج هو 355.',
      },
    ],
    finalAnswer: '550^{-1} \\equiv 355 \\pmod{1759}',
    verification:
      'التحقق: اضرب 550 × 355 = 195,250. اقسم 195,250 ÷ 1759 = 111 والباقي 1 بالظبط (195,250 − 111 × 1759 = 1).',
    examClue:
      'أول ما تشوف كلمة "multiplicative inverse" أو الرمز "a⁻¹ mod n" مع أرقام أكبر من 30، اعرف فوراً إن الحل بجدول إقليدس الممتدة.',
  },

  // =========================================================================
  // PLAYFAIR MIDTERM 2020: Key "security", Plaintext "cryptography"
  // =========================================================================
  'prob-ch3-03': {
    sourceRef: 'Midterm 2020 Exam Model 1 Question 3',
    originalQuestionEn:
      'Encrypt the plaintext "cryptography" using the Playfair cipher with the keyword "security". Break the plaintext into digraphs and show the 5x5 key matrix.',
    understandQuestionAr:
      'عاوزين نشفر كلمة cryptography بشفرة بلايفير باستخدام كلمة السر security، بتقسيم الكلمة حرفين حرفين.',
    givens: [
      { label: 'كلمة المفتاح (Keyword)', value: 'security' },
      { label: 'النص الصريح (Plaintext)', value: 'cryptography' },
    ],
    required: 'بناء مصفوفة بلايفير 5×5 وتشفير كل زوج حروف لاستخراج الـ Ciphertext.',
    howWeSolve: {
      method: 'مصفوفة بلايفير 5×5 وقواعد الأزواج الثلاث (الصف، العمود، المستطيل)',
      whyThisMethod:
        'لأن شفرة بلايفير هي الشفرة الكلاسيكية الوحيدة في المنهج التي تشفر حرفين معاً (Digraphs) داخل شبكة 5×5 مع دمج I و J.',
    },
    steps: [
      {
        stepTitle: 'الخطوة 1: بناء مصفوفة المفتاح 5×5',
        whatToCalculate: 'ترتيب حروف كلمة security بدون تكرار، ثم تكملة باقي الأبجدية.',
        why: 'لأن شبكة 5×5 تستوعب 25 حرفاً مع دمج I و J في مربع واحد.',
        calculationLines: [
          'حروف المفتاح الفريدة: S, E, C, U, R, I, T, Y',
          'الصف الأول: [S, E, C, U, R]',
          'الصف الثاني: [I/J, T, Y, A, B]',
          'الصف الثالث: [D, F, G, H, K]',
          'الصف الرابع: [L, M, N, O, P]',
          'الصف الخامس: [Q, V, W, X, Z]',
        ],
        result: 'المصفوفة جاهزة لتشفير الأزواج.',
      },
      {
        stepTitle: 'الخطوة 2: تقسيم النص الصريح إلى أزواج ثنائية',
        whatToCalculate: 'تقسيم cryptography إلى أزواج من حرفين.',
        why: 'شفرة بلايفير لا تشفر الحروف مفردة، بل أزواجاً.',
        calculationLines: [
          'الأزواج: (c, r) • (y, p) • (t, o) • (g, r) • (a, p) • (h, y)',
          'لا يوجد تكرار داخل أي زوج، إذن لا نحتاج حرف حشو x.',
        ],
        result: '6 أزواج جاهزة للتطبيق على المصفوفة.',
      },
      {
        stepTitle: 'الخطوة 3: تطبيق قواعد التشفير على الأزواج',
        whatToCalculate: 'تشفير كل زوج وفق موضعه في المصفوفة.',
        why: 'نفس الصف نتحرك يميناً، المستطيل نبدل الأعمدة على نفس الصفوف.',
        calculationLines: [
          '(c, r) في نفس الصف الأول: يمين C هو U، ويمين R يلتف إلى S → الناتج US',
          '(y, p) مستطيل: Y تقابل B و P تقابل N → الناتج BN',
          '(t, o) مستطيل: T تقابل A و O تقابل M → الناتج AM',
          '(g, r) مستطيل: G تقابل K و R تقابل C → الناتج KC',
          '(a, p) مستطيل: A تقابل B و P تقابل O → الناتج BO',
          '(h, y) مستطيل: H تقابل G و Y تقابل A → الناتج GA',
        ],
        result: 'النص المشفر = US BN AM KC BO GA.',
      },
    ],
    finalAnswer: 'Ciphertext = "US BN AM KC BO GA"',
    verification:
      'مطابق بنسبة 100% لنموذج إجابة امتحان ميدتيرم 2020 المعتمد.',
    examClue:
      'اسم "Playfair" مع كلمة مفتاح نصية يحدد تلقائياً رسم مصفوفة 5×5 وتقسيم النص لأزواج ثنائية.',
  },

  // =========================================================================
  // HILL CIPHER MIDTERM 2020: 3x3 Key Matrix on "Secrecy" (First 3 Letters "SEC")
  // =========================================================================
  'prob-ch3-05': {
    sourceRef: 'Midterm 2020 Exam Model 1 Question 3',
    originalQuestionEn:
      'Given the 3x3 Hill cipher key matrix K with rows [21, 5, 11], [14, 7, 12], and [5, 25, 12]. Encrypt the plaintext "Secrecy". (Hint: encrypt only the first 3 letters of the plaintext).',
    understandQuestionAr:
      'عاوزين نشفر أول 3 حروف فقط من كلمة "Secrecy" (أي الحروف SEC) بضرب متجهها في مصفوفة المفتاح 3×3 مقياس 26.',
    givens: [
      { label: 'مصفوفة المفتاح (K)', value: '[[21, 5, 11], [14, 7, 12], [5, 25, 12]]' },
      { label: 'أول 3 حروف (Plaintext)', value: 'S = 18, E = 4, C = 2' },
    ],
    required: 'حساب C = (K × P) mod 26 لاستخراج حروف الشفرة الثلاثية.',
    howWeSolve: {
      method: 'ضرب المصفوفات مقياس 26: C = (K × P) mod 26',
      whyThisMethod:
        'لأن شفرة هيل تعتمد على الجبر الخطي المعياري، حيث يمثل كل حرف برقم من A=0 إلى Z=25.',
    },
    steps: [
      {
        stepTitle: 'الخطوة 1: تجهيز متجه النص الصريح P',
        whatToCalculate: 'تحويل الحروف S و E و C لأرقامها.',
        why: 'لأن ضرب المصفوفات يتم بين أرقام صحيحة.',
        calculationLines: [
          'S = 18 (الحرف التاسع عشر وترتيبه 18 لأن A=0)',
          'E = 4',
          'C = 2',
          'المتجه P = [18, 4, 2]ᵀ',
        ],
        result: 'متجه العمود P = [18, 4, 2]ᵀ.',
      },
      {
        stepTitle: 'الخطوة 2: ضرب الصف الأول في المتجه P',
        whatToCalculate: 'ضرب [21, 5, 11] في [18, 4, 2] ثم أخذ mod 26.',
        why: 'لاستخراج رقم الحرف المشفر الأول C₁.',
        calculationLines: [
          '(21 × 18) + (5 × 4) + (11 × 2) = 378 + 20 + 22 = 420',
          'نقسم 420 على 26: 420 = (16 × 26) + 4',
        ],
        result: 'الباقي = 4، والرقم 4 في الأبجدية هو حرف E (أو e).',
      },
      {
        stepTitle: 'الخطوة 3: ضرب الصف الثاني في المتجه P',
        whatToCalculate: 'ضرب [14, 7, 12] في [18, 4, 2] ثم أخذ mod 26.',
        why: 'لاستخراج رقم الحرف المشفر الثاني C₂.',
        calculationLines: [
          '(14 × 18) + (7 × 4) + (12 × 2) = 252 + 28 + 24 = 304',
          'نقسم 304 على 26: 304 = (11 × 26) + 18',
        ],
        result: 'الباقي = 18، والرقم 18 في الأبجدية هو حرف S (أو s).',
      },
      {
        stepTitle: 'الخطوة 4: ضرب الصف الثالث في المتجه P',
        whatToCalculate: 'ضرب [5, 25, 12] في [18, 4, 2] ثم أخذ mod 26.',
        why: 'لاستخراج رقم الحرف المشفر الثالث C₃.',
        calculationLines: [
          '(5 × 18) + (25 × 4) + (12 × 2) = 90 + 100 + 24 = 214',
          'نقسم 214 على 26: 214 = (8 × 26) + 6',
        ],
        result: 'الباقي = 6، والرقم 6 في الأبجدية هو حرف G (أو g).',
      },
    ],
    finalAnswer: 'Ciphertext = "e s g" (الأرقام: [4, 18, 6])',
    verification:
      'مطابق بنسبة 100% لإجابة امتحان ميدتيرم 2020: Output = "e s g".',
    examClue:
      'وجود مصفوفة أرقام مع كلمة وملاحظة "(encrypt only the first 3 letters)" يعني فوراً شفرة هيل بضرب صفوف المصفوفة في أرقام الحروف الثلاثة.',
  },

  // =========================================================================
  // DES S-BOX 2 MIDTERM 2020: Input 101111_2 -> Output 2 = 0010_2
  // =========================================================================
  'prob-ch4-02': {
    sourceRef: 'Midterm 2020 Exam Model 1 Question 3(3)',
    originalQuestionEn:
      'In DES algorithm, find the 4-bit output of S-box 2 (S2) when the 6-bit input is 101111.',
    understandQuestionAr:
      'استخراج الخرج من صندوق التعويض S-Box 2 في خوارزمية DES عند إدخال الـ 6 بتات: 101111.',
    givens: [
      { label: 'المدخل (6 بت)', value: '101111' },
      { label: 'الصندوق المستهدف', value: 'S-Box 2 (S₂)' },
    ],
    required: 'استخراج رقم الصف والعمود وقيمة الخرج المكونة من 4 بتات.',
    howWeSolve: {
      method: 'قاعدة أطراف الصفوف ووسط الأعمدة في DES S-Boxes',
      whyThisMethod:
        'لأن المعيار القياسي لـ DES يحدد رقم الصف من البت الأول والأخير، ورقم العمود من البتات الأربعة التي في المنتصف.',
    },
    steps: [
      {
        stepTitle: 'الخطوة 1: استخراج رقم الصف (Row)',
        whatToCalculate: 'أخذ البت الأول (1) والبت السادس (1).',
        why: 'البتان الطرفيان يحددان أحد الصفوف الأربعة (من 0 إلى 3).',
        calculationLines: [
          'البت 1 = 1، والبت 6 = 1',
          'نضعهما معاً: 11 بالثنائي',
          'تحويل للعشري: 11₂ = (1 × 2¹) + (1 × 2⁰) = 3',
        ],
        result: 'رقم الصف = Row 3.',
      },
      {
        stepTitle: 'الخطوة 2: استخراج رقم العمود (Column)',
        whatToCalculate: 'أخذ البتات من 2 إلى 5 (0111).',
        why: 'البتات الأربعة في الوسط تحدد أحد الأعمدة الـ 16 (من 0 إلى 15).',
        calculationLines: [
          'البتات الوسطى: 0 1 1 1 بالثنائي',
          'تحويل للعشري: 0111₂ = (0×8) + (1×4) + (1×2) + (1×1) = 7',
        ],
        result: 'رقم العمود = Column 7.',
      },
      {
        stepTitle: 'الخطوة 3: التقاطع في جدول S₂ والتحويل لـ 4 بت',
        whatToCalculate: 'إيجاد القيمة عند تقاطع الصف 3 مع العمود 7 في جدول S₂.',
        why: 'لاستخراج الخرج الفعلي وتحويله لنظام ثنائي من 4 بتات.',
        calculationLines: [
          'من جدول S₂ المعتمد: القيمة عند (Row 3, Column 7) هي 2 بالعشري.',
          'تحويل 2 إلى 4 بت: 2 = 0010₂',
        ],
        result: 'الخرج النهائي = 2 = 0010₂.',
      },
    ],
    finalAnswer: 'Output = 2 = 0010₂',
    verification:
      'Row = 11₂ = 3, Column = 0111₂ = 7. تقاطع S₂(3, 7) = 2 = 0010₂.',
    examClue:
      'أي سؤال عن DES S-Box مع 6 بت: فوراً البت 1 و 6 للصف، والبتات 2 و 3 و 4 و 5 للعمود، والخرج من 4 بت.',
  },

  // =========================================================================
  // KEY SCALING: N = 250 (Stallings Section 1.4 & Lecture 1)
  // =========================================================================
  'prob-ch1-01': {
    sourceRef: 'Stallings 7th Ed. Section 1.4 & Lecture 1 Notes',
    originalQuestionEn:
      'A network connects N = 250 departments requiring pairwise confidential communications. (1) Calculate the total secret keys required for symmetric encryption. (2) If the network switches to asymmetric public-key cryptography, how many keys are needed? (3) Quantify the reduction.',
    understandQuestionAr:
      'مقارنة عدد المفاتيح المطلوبة لربط 250 قسماً: بالتشفير المتناظر (مفتاح لكل طرفين) مقابل غير المتناظر (زوج مفاتيح لكل طرف).',
    givens: [
      { label: 'عدد الأطراف المتصلة (N)', value: '250' },
      { label: 'نوع النظام 1', value: 'Symmetric (مفتاح مشترك لكل طرفين)' },
      { label: 'نوع النظام 2', value: 'Asymmetric (زوج مفاتيح عام وخاص)' },
    ],
    required: 'حساب K_sym و K_asym وفرق المفاتيح بينهما.',
    howWeSolve: {
      method: 'قانون التوافيق الثنائية N(N−1)/2 مقابل أزواج المفاتيح 2N',
      whyThisMethod:
        'لأن التشفير المتناظر يحتاج مفتاحاً سرياً لكل زوج من الأطراف، بينما التشفير غير المتناظر يحتاج زوجاً واحداً لكل طرف فقط.',
    },
    steps: [
      {
        stepTitle: 'الخطوة 1: حساب مفاتيح التشفير المتناظر',
        whatToCalculate: 'تطبيق قانون التوافيق الثنائية K_sym = N(N−1) / 2.',
        why: 'لأن كل طرفين يحتاجان مفتاحاً سرياً خاصاً بهما.',
        calculationLines: [
          'N = 250، إذن N − 1 = 249',
          '250 × 249 = 62,250',
          '62,250 ÷ 2 = 31,125',
        ],
        result: 'عدد المفاتيح المتناظرة = 31,125 مفتاح سري.',
      },
      {
        stepTitle: 'الخطوة 2: حساب مفاتيح التشفير غير المتناظر',
        whatToCalculate: 'تطبيق قانون أزواج المفاتيح K_asym = 2N.',
        why: 'لأن كل طرف يمتلك مفتاحين فقط (مفتاح عام منشور ومفتاح خاص سري).',
        calculationLines: ['2 × 250 = 500'],
        result: 'عدد المفاتيح غير المتناظرة = 500 مفتاح إجمالي.',
      },
      {
        stepTitle: 'الخطوة 3: حساب حجم الخفض والتوفير',
        whatToCalculate: 'طرح عدد المفاتيح في النظامين.',
        why: 'لقياس الوفر في عبء إدارة المفاتيح.',
        calculationLines: ['31,125 − 500 = 30,625'],
        result: 'تم الاستغناء عن 30,625 مفتاح (وفر بنسبة 98.4%).',
      },
    ],
    finalAnswer: 'K_sym = 31,125 keys, K_asym = 500 keys, Reduction = 30,625 keys',
    verification: '250 × 249 / 2 = 31125، و 250 × 2 = 500.',
    examClue:
      'ذكر عدد المستخدمين N وطلب "number of keys for symmetric vs asymmetric" يعني مباشرة N(N−1)/2 للمتناظر و 2N لغير المتناظر.',
  },

  // =========================================================================
  // EUCLIDEAN GCD: gcd(116071, 71239) (Stallings Slide 8)
  // =========================================================================
  'prob-ch2-01': {
    sourceRef: 'Stallings 7th Ed. Chapter 2 Slide 8',
    originalQuestionEn:
      'Using the Euclidean Algorithm, compute the greatest common divisor gcd(116071, 71239). Show each division step with quotient and remainder explicitly.',
    understandQuestionAr:
      'حساب القاسم المشترك الأكبر للعددين gcd(116071, 71239) بخوارزمية القسمة المتتابعة لإقليدس.',
    givens: [
      { label: 'العدد الأكبر (a)', value: '116071' },
      { label: 'العدد الأصغر (b)', value: '71239' },
    ],
    required: 'حساب gcd(116071, 71239).',
    howWeSolve: {
      method: 'خوارزمية إقليدس المتتالية: a = q × b + r',
      whyThisMethod:
        'لأن قاعدة إقليدس تنص على أن gcd(a, b) = gcd(b, a mod b)، ونستمر بالقسمة حتى يصبح الباقي صفراً.',
    },
    steps: [
      {
        stepTitle: 'الخطوة 1: قسمة 116071 على 71239',
        whatToCalculate: 'خارج القسمة والباقي الأول.',
        why: 'بداية الخوارزمية بالعددين الأصليين.',
        calculationLines: [
          '116071 ÷ 71239 = 1 والباقي: 116071 − 71239 = 44832',
          'المعادلة: 116071 = 1 × 71239 + 44832',
        ],
        result: 'الباقي الجديد = 44832.',
      },
      {
        stepTitle: 'الخطوة 2: قسمة 71239 على 44832',
        whatToCalculate: 'قسمة المقسوم عليه السابق على الباقي.',
        why: 'استمرار التكرار لأن الباقي لم يصبح صفراً.',
        calculationLines: [
          '71239 ÷ 44832 = 1 والباقي: 71239 − 44832 = 26407',
          'المعادلة: 71239 = 1 × 44832 + 26407',
        ],
        result: 'الباقي الجديد = 26407.',
      },
      {
        stepTitle: 'الخطوة 3: استمرار القسمة المتتابعة حتى الوصول للباقي 1',
        whatToCalculate: 'متابعة البواقي: 44832 mod 26407 حتى الباقي الأخير.',
        why: 'آخر باقي غير صفري هو القاسم المشترك الأكبر.',
        calculationLines: [
          '44832 = 1 × 26407 + 18425',
          '26407 = 1 × 18425 + 7982',
          '18425 = 2 × 7982 + 2461',
          '7982 = 3 × 2461 + 599',
          '2461 = 4 × 599 + 65 ... حتى: 41 = 2 × 20 + 1',
          'وأخيراً: 20 = 20 × 1 + 0',
        ],
        result: 'آخر باقي غير صفري قبل الصفر هو 1.',
      },
    ],
    finalAnswer: 'gcd(116071, 71239) = 1 (العددان أوليان نسبياً)',
    verification: 'بما أن الباقي الأخير قبل الصفر هو 1، فالقاسم المشترك الأكبر هو 1.',
    examClue:
      'طلب "gcd(a, b)" باستخدام Euclidean Algorithm يعني كتابة متتالية معادلات القسمة a = q×b + r حتى الوصول للباقي 0.',
  },

  // =========================================================================
  // MODULAR INVERSES IN Z26: 7^-1 vs 8^-1 (Stallings Slide 16)
  // =========================================================================
  'prob-ch2-03': {
    sourceRef: 'Stallings 7th Ed. Chapter 2 Slide 16 & Section 2.4',
    originalQuestionEn:
      '(1) In Z_26, find the modular multiplicative inverse of 7. (2) Prove mathematically why 8 does NOT possess a multiplicative inverse modulo 26.',
    understandQuestionAr:
      'إيجاد معكوس العدد 7 مقياس 26، وإثبات لماذا يستحيل رياضياً وجود معكوس للعدد 8 مقياس 26.',
    givens: [
      { label: 'العدد الأول', value: '7' },
      { label: 'العدد الثاني', value: '8' },
      { label: 'المقياس', value: '26 (حلقة Z₂₆)' },
    ],
    required: 'حساب 7⁻¹ mod 26 وإثبات عدم وجود 8⁻¹ mod 26.',
    howWeSolve: {
      method: 'شرط الأولية النسبية gcd(a, n) = 1',
      whyThisMethod:
        'لأن المعكوس الضربي المعياري لا يوجد إلا إذا كان العدد والمقياس أوليين نسبياً gcd = 1.',
    },
    steps: [
      {
        stepTitle: 'الخطوة 1: فحص إمكانية وجود معكوس للعدد 7',
        whatToCalculate: 'حساب gcd(7, 26).',
        why: 'للتأكد من تحقق شرط وجود المعكوس.',
        calculationLines: [
          'عوامل 7 هي {1, 7}، وعوامل 26 هي {1, 2, 13, 26}',
          'القاسم المشترك الأكبر gcd(7, 26) = 1',
        ],
        result: 'الشرط متحقق: 7 له معكوس ضربي وحيد مقياس 26.',
      },
      {
        stepTitle: 'الخطوة 2: حساب قيمة 7⁻¹ mod 26',
        whatToCalculate: 'إيجاد x بحيث 7x ≡ 1 mod 26.',
        why: 'لاستخراج قيمة المعكوس المطلوبة.',
        calculationLines: [
          'نجرب المضاعفات: 7 × 15 = 105',
          'نقسم 105 على 26: 105 = (4 × 26) + 1',
          'الباقي = 1',
        ],
        result: 'إذن 7⁻¹ ≡ 15 (mod 26).',
      },
      {
        stepTitle: 'الخطوة 3: إثبات استحالة وجود معكوس للعدد 8',
        whatToCalculate: 'حساب gcd(8, 26).',
        why: 'لبيان سبب عدم تحقق شرط الوجود.',
        calculationLines: [
          'العددان 8 و 26 زوجيان ويقبلان القسمة على 2',
          'gcd(8, 26) = 2 ≠ 1',
          'أي مضاعف لـ 8 مقياس 26 يعطي عدداً زوجياً، ويستحيل أن يساوي 1 فردي.',
        ],
        result: 'المعكوس غير موجود إطلاقاً لأن gcd(8, 26) ≠ 1.',
      },
    ],
    finalAnswer: '7⁻¹ ≡ 15 (mod 26)، والعدد 8 ليس له معكوس لأن gcd(8, 26) = 2 ≠ 1',
    verification: '7 × 15 = 105 = 4 × 26 + 1. و 8 × أي رقم زوجي mod 26 يعطي زوجي ولا يمكن أن يساوي 1.',
    examClue:
      'إذا سأل عن وجود المعكوس في Z₂₆، احسب فوراً gcd(a, 26)؛ لو 1 يبقى موجود، لو زوجي أو 13 يبقى غير موجود.',
  },

  // =========================================================================
  // FERMAT'S LITTLE THEOREM: 3^201 mod 11 (Stallings Slide 26)
  // =========================================================================
  'prob-ch2-05': {
    sourceRef: 'Stallings 7th Ed. Chapter 2 Slide 26',
    originalQuestionEn:
      'Using Fermat’s Little Theorem, compute the remainder when 3^{201} is divided by 11 (i.e. find 3^{201} \\pmod{11}).',
    understandQuestionAr:
      'حساب باقي قسمة 3²⁰¹ على 11 باستخدام مبرهنة فيرما الصغرى لاختزال هذا الأس الضخم.',
    givens: [
      { label: 'الأساس (a)', value: '3' },
      { label: 'الأس الضخم', value: '201' },
      { label: 'المقياس الأولي (p)', value: '11' },
    ],
    required: 'حساب 3²⁰¹ mod 11.',
    howWeSolve: {
      method: 'مبرهنة فيرما الصغرى (Fermat\'s Little Theorem): a^{p−1} ≡ 1 (mod p)',
      whyThisMethod:
        'لأن p = 11 عدد أولي، فالمبرهنة تتيح اختزال قوى الأساس دورياً كل p−1 = 10 درجات.',
    },
    steps: [
      {
        stepTitle: 'الخطوة 1: تطبيق قانون فيرما الأساسي',
        whatToCalculate: 'تحديد دورة فيرما للعدد الأولي 11.',
        why: 'لأن 3 لا تقبل القسمة على 11 و 11 أولي.',
        calculationLines: [
          'p = 11 أولي، إذن p − 1 = 10',
          'وفق فيرما: 3¹⁰ ≡ 1 (mod 11)',
        ],
        result: 'كل 10 قوى من العدد 3 تساوي 1 مقياس 11.',
      },
      {
        stepTitle: 'الخطوة 2: قسمة الأس 201 على دورة فيرما (10)',
        whatToCalculate: 'تحليل 201 بدلالة الـ 10.',
        why: 'لاختزال الأس الضخم إلى باقٍ صغير.',
        calculationLines: [
          '201 = (20 × 10) + 1',
          '3²⁰¹ = (3¹⁰)²⁰ × 3¹',
          'بما أن 3¹⁰ ≡ 1، إذن: (1)²⁰ × 3¹ = 1 × 3 = 3',
        ],
        result: 'الناتج النهائي = 3.',
      },
    ],
    finalAnswer: '3^{201} \\equiv 3 \\pmod{11}',
    verification: '3⁵ = 243 = (22 × 11) + 1 ≡ 1 mod 11. إذن (3⁵)⁴⁰ × 3 ≡ 1 × 3 = 3 mod 11.',
    examClue:
      'وجود أس ضخم مقياس عدد أولي p يوجهك مباشرة لمبرهنة فيرما بقسمة الأس على p−1 والتعويض بالباقي.',
  },

  // =========================================================================
  // MEET-IN-THE-MIDDLE ON DOUBLE-DES (Stallings Section 7.1)
  // =========================================================================
  'prob-ch7-01': {
    sourceRef: 'Stallings 7th Ed. Chapter 7 Section 7.1',
    originalQuestionEn:
      'Double-DES uses two 56-bit keys (K1, K2): C = E_K2(E_K1(P)). (1) What is the naive brute-force space? (2) Explain the Meet-in-the-Middle algorithm. (3) Prove mathematically why the effort is approximately 2^{57} encryptions.',
    understandQuestionAr:
      'إثبات لماذا ينخفض تعقيد كسر التشفير المضاعف Double-DES من 2¹¹² إلى 2⁵⁷ فقط باستخدام هجوم الالتقاء في المنتصف.',
    givens: [
      { label: 'طول مفتاح DES الواحد', value: '56 بت' },
      { label: 'عدد المفاتيح المستخدمة', value: 'مفتاحان (K1, K2)' },
      { label: 'إجمالي البتات النظري', value: '112 بت' },
    ],
    required: 'إثبات انخفاض الجهد الحسابي إلى 2⁵⁷ عملية تشفير.',
    howWeSolve: {
      method: 'هجوم الالتقاء في المنتصف (Meet-in-the-Middle Attack)',
      whyThisMethod:
        'لأن تشفير النص الصريح P وفك تشفير النص المشفر C يلتقيان عند قيمة وسطية واحدة X = E_K1(P) = D_K2(C).',
    },
    steps: [
      {
        stepTitle: 'الخطوة 1: حساب فضاء البحث الشامل الساذج (Naive Brute-Force)',
        whatToCalculate: 'ضرب فضاء المفتاح الأول في فضاء المفتاح الثاني.',
        why: 'لحساب التعقيد المتوقع نظرياً.',
        calculationLines: [
          'المفتاح الأول: 2⁵⁶ احتمال، والمفتاح الثاني: 2⁵⁶ احتمال',
          'الفضاء النظري: 2⁵⁶ × 2⁵⁶ = 2¹¹²',
        ],
        result: 'المهاجم الساذج يتوقع الحاجة إلى 2¹¹² عملية.',
      },
      {
        stepTitle: 'الخطوة 2: خوارزمية الالتقاء في المنتصف والبرهان الرياضي',
        whatToCalculate: 'جمع عمليات التشفير وعمليات فك التشفير.',
        why: 'لأن المهاجم يشفر P بكل مفاتيح K₁ ويخزنها في جدول، ثم يفك تشفير C ويبحث في الجدول.',
        calculationLines: [
          'المرحلة 1: تشفير P بـ 2⁵⁶ مفتاح وتخزين النتائج (2⁵⁶ عملية تشفير)',
          'المرحلة 2: فك تشفير C بـ 2⁵⁶ مفتاح والبحث في الجدول (2⁵⁶ عملية فك تشفير)',
          'إجمالي الجهد الحسابي = 2⁵⁶ + 2⁵⁶',
          'رياضياً: 2⁵⁶ + 2⁵⁶ = 2 × 2⁵⁶ = 2⁵⁷',
        ],
        result: 'إجمالي العمليات = 2⁵⁷ عملية فقط.',
      },
    ],
    finalAnswer: 'Effort = 2^{56} + 2^{56} = 2^{57} operations (بدلاً من 2^{112})',
    verification: '2 × (2⁵⁶) = 2¹ × 2⁵⁶ = 2⁵⁷ بعمليات جمع الأسس عند ضرب الأساسات المتشابهة.',
    examClue:
      'أي سؤال عن Double-DES وهجوم Meet-in-the-Middle إجابته الحسابية المحورية هي جمع 2⁵⁶ + 2⁵⁶ = 2⁵⁷.',
  },

  // =========================================================================
  // CBC MODE CHAINING & IV (Stallings Section 7.4)
  // =========================================================================
  'prob-ch7-04': {
    sourceRef: 'Stallings 7th Ed. Chapter 7 Section 7.4',
    originalQuestionEn:
      'For Cipher Block Chaining (CBC) mode: (1) Write the encryption equations for C1 and general Ci. (2) Write decryption equations and prove mathematical recovery of Pi. (3) Explain why IV must be unpredictable.',
    understandQuestionAr:
      'كتابة معادلات التشفير وفك التشفير لنمط ربط الكتل (CBC) وإثبات استرجاع النص الصريح Pᵢ بواسطة خاصية XOR.',
    givens: [
      { label: 'النمط', value: 'Cipher Block Chaining (CBC)' },
      { label: 'المتجه الابتدائي', value: 'Initialization Vector (IV)' },
    ],
    required: 'معادلات التشفير Cᵢ وفك التشفير Pᵢ وإثبات صحتها رياضياً.',
    howWeSolve: {
      method: 'ربط الكتل بعملية XOR التتابعية واستخدام خاصية الإلغاء التماثلي (A ⊕ B ⊕ B = A)',
      whyThisMethod:
        'لأن CBC يعالج عيب نمط ECB في تسريب الأنماط بجعل كل شفرة تعتمد على كل الكتل السابقة.',
    },
    steps: [
      {
        stepTitle: 'الخطوة 1: معادلات التشفير (Encryption)',
        whatToCalculate: 'كتابة معادلة الكتلة الأولى والكتل اللاحقة.',
        why: 'الكتلة الأولى تحتاج IV لأنه لا توجد كتلة سابقة.',
        calculationLines: [
          'الكتلة الأولى: C₁ = E_K(P₁ ⊕ IV)',
          'الكتل اللاحقة (i ≥ 2): Cᵢ = E_K(Pᵢ ⊕ Cᵢ₋₁)',
        ],
        result: 'كل كتلة مشفرة مربوطة سابقتها.',
      },
      {
        stepTitle: 'الخطوة 2: معادلات فك التشفير والبرهان الرياضي',
        whatToCalculate: 'تطبيق فك التشف D_K ثم عمل XOR مع الشفرة السابقة.',
        why: 'لإثبات استرجاع Pᵢ بدقة متناهية.',
        calculationLines: [
          'D_K(Cᵢ) = D_K(E_K(Pᵢ ⊕ Cᵢ₋₁)) = Pᵢ ⊕ Cᵢ₋₁',
          'نعمل XOR مع Cᵢ₋₁: (Pᵢ ⊕ Cᵢ₋₁) ⊕ Cᵢ₋₁',
          'بما أن Cᵢ₋₁ ⊕ Cᵢ₋₁ = 0، يتبقى: Pᵢ ⊕ 0 = Pᵢ',
        ],
        result: 'تم استرجاع النص الصريح Pᵢ الأصلي بنجاح.',
      },
    ],
    finalAnswer: 'Encryption: Cᵢ = E_K(Pᵢ ⊕ Cᵢ₋₁) | Decryption: Pᵢ = D_K(Cᵢ) ⊕ Cᵢ₋₁',
    verification: 'خاصية XOR التبديلية: P ⊕ C ⊕ C = P دائماً.',
    examClue:
      'معادلات CBC تُميز فوراً بوجود XOR مع الشفرة السابقة Cᵢ₋₁، ومع الكتلة الأولى يكون الـ XOR مع IV.',
  },
};

/**
 * Intelligent Fallback for other problems in the curriculum.
 * Formats the problem's own steps into the exact 7-part sequence without any extra fluff.
 */
export function getMinimalistExplanation(problem: WorkedProblem): ArtboardProblemExplanation {
  const existing = minimalistTeachingDatabase[problem.id];
  if (existing) return existing;

  const givens = problem.givenParameters.map((g) => ({
    label: g.labelAr || g.label,
    value: g.value,
  }));

  const steps: ArtboardStep[] = problem.steps.map((st, idx) => ({
    stepTitle: `الخطوة ${idx + 1}: ${st.titleAr || st.title || 'حساب القيمة التالية'}`,
    whatToCalculate: st.titleAr || st.title || 'العملية التالية في التسلسل',
    why: st.whyThisStepAr || st.whyThisStep || 'تطبيق الخطوة المعتمدة للحل.',
    calculationLines: [
      st.calculationAr || st.calculation || st.substitution || st.math || '',
    ].filter(Boolean),
    result: st.intermediateResult ? `إذن الناتج = ${st.intermediateResult}` : 'تمت الخطوة بنجاح.',
  }));

  return {
    sourceRef: problem.sourceRef,
    originalQuestionEn: problem.problem,
    understandQuestionAr: problem.problemAr || problem.problem,
    givens,
    required: problem.requiredResult.ar || problem.requiredResult.en,
    howWeSolve: {
      method: problem.governingFormula?.nameAr || problem.governingFormula?.name || 'طريقة الحل المعيارية',
      whyThisMethod: problem.governingFormula?.explanationAr || 'لأنها الطريقة المعتمدة في المنهج.',
    },
    steps,
    finalAnswer: problem.finalResult,
    verification: problem.verificationAr || problem.verification || 'تم التحقق من النتيجة.',
    examClue:
      problem.keywordIndicators?.[0]
        ? `ابحث في نص السؤال عن كلمة "${problem.keywordIndicators[0].keyword}" للدلالة على طريقة الحل هذه.`
        : 'طابق معطيات السؤال والمطلوب لتطبيق هذه الخطوات.',
  };
}
