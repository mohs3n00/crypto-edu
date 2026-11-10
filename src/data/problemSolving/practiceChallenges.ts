import type { StudentPracticeProblem } from './types';

export const practiceChallenges: Record<string, StudentPracticeProblem> = {
  // =========================================================================
  // CHAPTER 1 — SECURITY ARCHITECTURE & SERVICES
  // =========================================================================
  'prob-ch1-01': {
    questionEn:
      'A regional banking consortium connects N = 120 branches requiring pairwise confidential communication. (1) How many secret keys are needed if symmetric encryption is used? (2) How many total keys are needed if asymmetric public-key cryptography is used?',
    questionAr:
      'مجموعة مصرفية إقليمية تربط N = 120 فرعاً تتطلب اتصالات سرية ثنائية مباشرة. (1) كم مفتاحاً سرياً يلزم عند استخدام التشفير المتناظر؟ (2) وكم إجمالي المفاتيح عند استخدام التشفير غير المتناظر؟',
    options: [
      {
        key: 'A',
        textEn: 'Symmetric: 7,140 keys | Asymmetric: 240 keys',
        textAr: 'التشفير المتناظر: 7,140 مفتاحاً | غير المتناظر: 240 مفتاحاً',
      },
      {
        key: 'B',
        textEn: 'Symmetric: 14,280 keys | Asymmetric: 120 keys',
        textAr: 'التشفير المتناظر: 14,280 مفتاحاً | غير المتناظر: 120 مفتاحاً',
      },
      {
        key: 'C',
        textEn: 'Symmetric: 120 keys | Asymmetric: 240 keys',
        textAr: 'التشفير المتناظر: 120 مفتاحاً | غير المتناظر: 240 مفتاحاً',
      },
      {
        key: 'D',
        textEn: 'Symmetric: 7,200 keys | Asymmetric: 14,400 keys',
        textAr: 'التشفير المتناظر: 7,200 مفتاحاً | غير المتناظر: 14,400 مفتاحاً',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'For symmetric encryption: K_sym = N(N - 1) / 2 = 120 * 119 / 2 = 7,140 keys. For asymmetric encryption: K_asym = 2N = 2 * 120 = 240 keys (1 public + 1 private per branch).',
    explanationAr:
      'للتشفير المتناظر: K_sym = 120 × 119 ÷ 2 = 7,140 مفتاحاً سرياً. للتشفير غير المتناظر: K_asym = 2 × 120 = 240 مفتاحاً (زوج مفاتيح عام وخاص لكل فرع).',
    hintEn: 'Apply K_sym = N(N - 1) / 2 and K_asym = 2N.',
    hintAr: 'طبق قانون التوافيق الثنائية N(N-1)/2 للمتناظر، و 2N لغير المتناظر.',
  },

  'prob-ch1-02': {
    questionEn:
      'An adversary captures an authenticated financial transaction message and retransmits it multiple times to credit the destination account repeatedly without altering any bit of the message. According to X.800, which security mechanism directly counters this replay attack?',
    questionAr:
      'اعترض مهاجم رسالة تحويل مالي موثقة وأعاد إرسالها عدة مرات لحساب المستفيد دون تعديل أي بت فيها (Replay Attack). وفق معيار X.800، ما هي الآلية الأمنية التي تمنع هذا الهجوم مباشرة؟',
    options: [
      {
        key: 'A',
        textEn: 'Data origin authentication with sequence numbers and timestamps',
        textAr: 'توثيق أصل البيانات باستخدام أرقام التسلسل والطوابع الزمنية (Sequence numbers & Timestamps)',
      },
      {
        key: 'B',
        textEn: 'Traffic padding',
        textAr: 'حشو حركة البيانات (Traffic padding)',
      },
      {
        key: 'C',
        textEn: 'Passive monitoring and logging',
        textAr: 'المراقبة السلبية وتسجيل الأحداث',
      },
      {
        key: 'D',
        textEn: 'Routing control alone',
        textAr: 'التحكم في التوجيه فقط',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'A replay attack is an active integrity attack using valid captured data. It is defeated by data origin authentication incorporating monotonic sequence numbers, nonces, or cryptographic timestamps to detect duplicate transmissions.',
    explanationAr:
      'هجوم إعادة الإرسال (Replay) هو هجوم سلامة نشط باستخدام رسائل أصلية صالحة. يُحبط باستخدام آليات توثيق المصدر المزودة بأرقام تسلسلية تصاعدية أو قيم عشوائية (Nonces) أو طوابع زمنية لكشف التكرار.',
    hintEn: 'Check how university exams distinguish active replay attacks from passive eavesdropping.',
    hintAr: 'ميز بين هجمات إعادة الإرسال النشطة وآليات كشف التكرار كأرقام التسلسل.',
  },

  'prob-ch1-03': {
    questionEn:
      'Under RFC 4949 and university security taxonomy, if a database service has an unpatched SQL injection flaw in its input parser, this flaw is defined as a:',
    questionAr:
      'وفق معيار RFC 4949 وتصنيفات أمن المعلومات الجامعية، إذا كانت قاعدة البيانات تحتوي على ثغرة عدم تدقيق المدخلات (SQL Injection)، فإن هذا العيب البرمجي يُصنف بدقة كـ:',
    options: [
      {
        key: 'A',
        textEn: 'Vulnerability (a flaw or weakness in design or implementation)',
        textAr: 'ثغرة أمنية (Vulnerability: نقطة ضعف في التصميم أو التنفيذ)',
      },
      {
        key: 'B',
        textEn: 'Threat agent (the human attacker)',
        textAr: 'مصدر التهديد (Threat agent)',
      },
      {
        key: 'C',
        textEn: 'Security mechanism',
        textAr: 'آلية أمنية (Security mechanism)',
      },
      {
        key: 'D',
        textEn: 'Passive attack',
        textAr: 'هجوم سلبي (Passive attack)',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'A vulnerability is an internal flaw or weakness in system design, implementation, or operation. A threat is a potential circumstance that can exploit that vulnerability, and an attack is the actual execution.',
    explanationAr:
      'الثغرة (Vulnerability) هي نقطة ضعف ذاتية في تصميم النظام أو برمجته. التهديد (Threat) هو الخطر المحتمل الذي يستغلها، والهجوم (Attack) هو التنفيذ الفعلي.',
    hintEn: 'Distinguish weakness inside the system from external threats.',
    hintAr: 'فرق بين الضعف الداخلي في الكود (الثغرة) وبين الخطر الخارجي (التهديد).',
  },

  // =========================================================================
  // CHAPTER 2 — NUMBER THEORY & CLASSICAL CRYPTOGRAPHY MATHEMATICS
  // =========================================================================
  'prob-ch2-01': {
    questionEn:
      'Using the Euclidean Algorithm, compute the greatest common divisor gcd(12378, 3054). What is the exact value?',
    questionAr:
      'باستخدام خوارزمية إقليدس، احسب القاسم المشترك الأكبر gcd(12378, 3054). ما هي القيمة الدقيقة؟',
    options: [
      { key: 'A', textEn: 'gcd = 6', textAr: 'القاسم المشترك الأكبر = 6' },
      { key: 'B', textEn: 'gcd = 18', textAr: 'القاسم المشترك الأكبر = 18' },
      { key: 'C', textEn: 'gcd = 24', textAr: 'القاسم المشترك الأكبر = 24' },
      { key: 'D', textEn: 'gcd = 1', textAr: 'القاسم المشترك الأكبر = 1' },
    ],
    correctAnswer: 'A',
    explanationEn:
      'Steps: (1) 12378 = 4 * 3054 + 162; (2) 3054 = 18 * 162 + 138; (3) 162 = 1 * 138 + 24; (4) 138 = 5 * 24 + 18; (5) 24 = 1 * 18 + 6; (6) 18 = 3 * 6 + 0. The last non-zero remainder is 6.',
    explanationAr:
      'خطوات القسمة الإقليدية: 12378 = 4 × 3054 + 162؛ 3054 = 18 × 162 + 138؛ 162 = 1 × 138 + 24؛ 138 = 5 × 24 + 18؛ 24 = 1 × 18 + 6؛ 18 = 3 × 6 + 0. آخر باقٍ غير صفري هو 6.',
    hintEn: 'Continue successive division until remainder is 0; the last non-zero remainder is the gcd.',
    hintAr: 'استمر بالقسمة المتتالية حتى تصل لباقي 0؛ آخر باقٍ غير صفري هو الناتج.',
  },

  'prob-ch2-02': {
    questionEn:
      'Using the Extended Euclidean Algorithm, find the modular multiplicative inverse 23^{-1} mod 101.',
    questionAr:
      'باستخدام خوارزمية إقليدس الممتدة، احسب المعكوس الضربي المعياري 23^{-1} mod 101.',
    options: [
      { key: 'A', textEn: '22', textAr: '22' },
      { key: 'B', textEn: '79', textAr: '79' },
      { key: 'C', textEn: '44', textAr: '44' },
      { key: 'D', textEn: 'Does not exist', textAr: 'غير موجود' },
    ],
    correctAnswer: 'A',
    explanationEn:
      'Extended Euclidean steps: 101 = 4 * 23 + 9; 23 = 2 * 9 + 5; 9 = 1 * 5 + 4; 5 = 1 * 4 + 1. Back-substituting yields 1 = 22 * 23 - 5 * 101. Thus 23 * 22 = 506 = 5 * 101 + 1 = 1 mod 101. Inverse is 22.',
    explanationAr:
      'بتطبيق إقليدس الممتدة: 101 = 4 × 23 + 9؛ 23 = 2 × 9 + 5؛ 9 = 1 × 5 + 4؛ 5 = 1 × 4 + 1. بالتعويض العكسي نجد: 23 × 22 = 506 = 5 × 101 + 1 ≡ 1 mod 101. إذن المعكوس هو 22.',
    hintEn: 'Verify by multiplying: (23 * answer) mod 101 must equal 1.',
    hintAr: 'تحقق بضرب الناتج في 23: يجب أن يعطي الباقي 1 بمقياس 101.',
  },

  'prob-ch2-03': {
    questionEn:
      'In the ring Z_26, compute the modular inverse 11^{-1} mod 26 and determine if 14 has a modular inverse in Z_26.',
    questionAr:
      'في الحلقة Z_26، احسب المعكوس 11^{-1} mod 26 وحدد ما إذا كان للعدد 14 معكوس ضربي في Z_26.',
    options: [
      {
        key: 'A',
        textEn: '11^{-1} = 19 mod 26, and 14 has NO inverse because gcd(14, 26) = 2 != 1',
        textAr: '11^{-1} = 19 mod 26، والعدد 14 ليس له معكوس لأن gcd(14, 26) = 2 != 1',
      },
      {
        key: 'B',
        textEn: '11^{-1} = 7 mod 26, and 14^{-1} = 15 mod 26',
        textAr: '11^{-1} = 7 mod 26، ومعكوس 14 هو 15',
      },
      {
        key: 'C',
        textEn: '11^{-1} = 15 mod 26, and 14 has NO inverse',
        textAr: '11^{-1} = 15 mod 26، والعدد 14 ليس له معكوس',
      },
      {
        key: 'D',
        textEn: 'Neither 11 nor 14 has an inverse in Z_26',
        textAr: 'كلا العددين 11 و 14 ليس لهما معكوس في Z_26',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'Since gcd(11, 26) = 1, inverse exists: 11 * 19 = 209 = 8 * 26 + 1 = 1 mod 26. Since gcd(14, 26) = 2 != 1, 14 is not coprime to 26 and has no modular multiplicative inverse.',
    explanationAr:
      'بما أن gcd(11, 26) = 1، فالمعكوس موجود: 11 × 19 = 209 = 8 × 26 + 1 ≡ 1 mod 26. أما للعدد 14، فإن gcd(14, 26) = 2 != 1، فلا يقبل وجود معكوس ضربي.',
    hintEn: 'A number a has an inverse modulo m if and only if gcd(a, m) = 1.',
    hintAr: 'الشرط الرياضي اللازم والكافي لوجود معكوس ضربي هو gcd(a, m) = 1.',
  },

  'prob-ch2-04': {
    questionEn:
      'Calculate Euler’s totient function phi(n) for: (1) n = 43, (2) n = 77, and (3) n = 180.',
    questionAr:
      'احسب دالة أويلر للمؤشرات phi(n) للقيم التالية: (1) n = 43، (2) n = 77، و (3) n = 180.',
    options: [
      { key: 'A', textEn: 'phi(43) = 42, phi(77) = 60, phi(180) = 48', textAr: 'phi(43) = 42، phi(77) = 60، phi(180) = 48' },
      { key: 'B', textEn: 'phi(43) = 42, phi(77) = 76, phi(180) = 90', textAr: 'phi(43) = 42، phi(77) = 76، phi(180) = 90' },
      { key: 'C', textEn: 'phi(43) = 43, phi(77) = 60, phi(180) = 72', textAr: 'phi(43) = 43، phi(77) = 60، phi(180) = 72' },
      { key: 'D', textEn: 'phi(43) = 41, phi(77) = 54, phi(180) = 48', textAr: 'phi(43) = 41، phi(77) = 54، phi(180) = 48' },
    ],
    correctAnswer: 'A',
    explanationEn:
      '(1) 43 is prime -> phi(43) = 43 - 1 = 42. (2) 77 = 7 * 11 -> phi(77) = (7 - 1)(11 - 1) = 6 * 10 = 60. (3) 180 = 2^2 * 3^2 * 5^1 -> phi(180) = 180 * (1 - 1/2) * (1 - 1/3) * (1 - 1/5) = 180 * 1/2 * 2/3 * 4/5 = 48.',
    explanationAr:
      '(1) 43 أولي: phi(43) = 43 - 1 = 42. (2) 77 = 7 × 11: phi(77) = (7 - 1)(11 - 1) = 6 × 10 = 60. (3) 180 = 2^2 × 3^2 × 5^1: phi(180) = 180 × (1/2) × (2/3) × (4/5) = 48.',
    hintEn: 'For prime powers, phi(p^k) = p^k - p^{k-1}; for coprime products phi(pq) = (p-1)(q-1).',
    hintAr: 'استخدم خاصية الضرب لدالة أويلر phi(pq) = (p-1)(q-1) للأعداد الأولية.',
  },

  'prob-ch2-05': {
    questionEn:
      'Using Fermat’s Little Theorem, evaluate the remainder when 2^{103} is divided by 13 (i.e. 2^{103} mod 13).',
    questionAr:
      'باستخدام مبرهنة فيرما الصغرى، احسب باقي قسمة 2^{103} على 13 (أي 2^{103} mod 13).',
    options: [
      { key: 'A', textEn: '11', textAr: '11' },
      { key: 'B', textEn: '3', textAr: '3' },
      { key: 'C', textEn: '5', textAr: '5' },
      { key: 'D', textEn: '1', textAr: '1' },
    ],
    correctAnswer: 'A',
    explanationEn:
      'Since 13 is prime and gcd(2, 13) = 1, Fermat states 2^{12} = 1 mod 13. Exponent decomposition: 103 = 12 * 8 + 7. Thus 2^{103} = (2^{12})^8 * 2^7 = 1^8 * 128 mod 13. 128 = 9 * 13 + 11 = 11 mod 13.',
    explanationAr:
      'بما أن 13 أولي و gcd(2, 13) = 1، فإن 2^{12} ≡ 1 mod 13. تفكيك الأس: 103 = 12 × 8 + 7. إذن 2^{103} = (2^{12})^8 × 2^7 ≡ 1 × 128 mod 13. وبقسمة 128 على 13 نجد الباقي 11.',
    hintEn: 'Reduce the exponent modulo (p - 1) = 12.',
    hintAr: 'اختزل الأس الكبير بمقياس (p - 1) وهو 12.',
  },

  'prob-ch2-06': {
    questionEn:
      'Using Euler’s Theorem, evaluate 7^{82} mod 100.',
    questionAr:
      'باستخدام مبرهنة أويلر، احسب 7^{82} mod 100.',
    options: [
      { key: 'A', textEn: '49', textAr: '49' },
      { key: 'B', textEn: '1', textAr: '1' },
      { key: 'C', textEn: '7', textAr: '7' },
      { key: 'D', textEn: '43', textAr: '43' },
    ],
    correctAnswer: 'A',
    explanationEn:
      'gcd(7, 100) = 1. phi(100) = 100 * (1 - 1/2) * (1 - 1/5) = 40. By Euler: 7^{40} = 1 mod 100. Thus 7^{82} = (7^{40})^2 * 7^2 = (1)^2 * 49 = 49 mod 100.',
    explanationAr:
      'بما أن gcd(7, 100) = 1 و phi(100) = 40، فإن 7^{40} ≡ 1 mod 100. إذن 7^{82} = (7^{40})^2 × 7^2 ≡ 1 × 49 = 49 mod 100.',
    hintEn: 'Compute phi(100) = 40, then reduce exponent 82 mod 40 = 2.',
    hintAr: 'احسب phi(100) = 40 ثم اختزل الأس 82 mod 40 = 2.',
  },

  'prob-ch2-07': {
    questionEn:
      'Using the Square-and-Multiply algorithm, compute 5^{19} mod 119. What is the intermediate binary sequence and final result?',
    questionAr:
      'باستخدام خوارزمية التربيع والضرب (Square-and-Multiply)، احسب 5^{19} mod 119.',
    options: [
      {
        key: 'A',
        textEn: 'Result = 40 (Binary of 19 is 10011_2)',
        textAr: 'الناتج = 40 (التمثيل الثنائي للعدد 19 هو 10011_2)',
      },
      {
        key: 'B',
        textEn: 'Result = 25',
        textAr: 'الناتج = 25',
      },
      {
        key: 'C',
        textEn: 'Result = 86',
        textAr: 'الناتج = 86',
      },
      {
        key: 'D',
        textEn: 'Result = 1',
        textAr: 'الناتج = 1',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'Binary 19 = 10011_2. Repeated squaring: 5^1 = 5; 5^2 = 25; 5^4 = 25^2 = 625 = 30 mod 119; 5^8 = 30^2 = 900 = 67 mod 119; 5^{16} = 67^2 = 4489 = 86 mod 119. Multiply for bits=1: 5^{19} = 5^{16} * 5^2 * 5^1 = 86 * 25 * 5 = 10750 = 40 mod 119.',
    explanationAr:
      'تمثيل 19 ثنائياً: 10011_2. بالتربيع المتتالي: 5^1=5، 5^2=25، 5^4=30، 5^8=67، 5^{16}=86 بمقياس 119. بالضرب في الخانات المساوية 1: 5^{19} = 86 × 25 × 5 = 10750 ≡ 40 mod 119.',
    hintEn: 'Decompose 19 into powers of 2: 19 = 16 + 2 + 1.',
    hintAr: 'فكك الأس إلى مجموع قوى للعدد 2: 19 = 16 + 2 + 1.',
  },

  'prob-ch2-08': {
    questionEn:
      'In the Miller-Rabin Primality Test for n = 91 using base a = 2, what is the decomposition of n - 1 and the test verdict?',
    questionAr:
      'في اختبار ميلر-رابين لاحتمالية أولية العدد n = 91 باستخدام الأساس a = 2، ما هو تفكيك n - 1 ونتيجة الاختبار؟',
    options: [
      {
        key: 'A',
        textEn: '90 = 2^1 * 45 (k = 1, q = 45), 2^{45} mod 91 = 57 != 1 and != 90; therefore 91 is Composite',
        textAr: '90 = 2^1 × 45 (k = 1, q = 45) و 2^{45} mod 91 = 57 != 1 و != 90؛ إذن العدد 91 مؤلف (Composite)',
      },
      {
        key: 'B',
        textEn: '91 is Prime because 2^{90} mod 91 = 1',
        textAr: 'العدد 91 أولي لأن 2^{90} mod 91 = 1',
      },
      {
        key: 'C',
        textEn: 'Inconclusive; base 2 cannot determine primality of 91',
        textAr: 'النتيجة غير حاسمة؛ الأساس 2 لا يحدد',
      },
      {
        key: 'D',
        textEn: '90 = 2^2 * 22.5, invalid test setup',
        textAr: 'تفكيك غير صالح',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'Decompose n - 1 = 90 = 2^1 * 45, giving k = 1 and odd q = 45. Compute a^q mod n = 2^{45} mod 91 = 57. Since 57 != 1 and 57 != 90 (n - 1), and there are no further squarings (k = 1), 91 fails the test and is definitively composite (91 = 7 * 13).',
    explanationAr:
      'تفكيك n - 1 = 90 = 2^1 × 45، حيث k = 1 و q = 45 فردي. حساب a^q mod n = 2^{45} mod 91 = 57. بما أنه لا يساوي 1 ولا -1 (90)، وحيث انتهت خطوات التربيع، فالعدد 91 مركب ومؤلف قطعاً (91 = 7 × 13).',
    hintEn: 'If a^q != 1 and a^{2^j q} != -1 for all 0 <= j < k, n is composite.',
    hintAr: 'إذا لم تكن القيمة 1 أو -1 (n-1)، فالعدد مركب.',
  },

  'prob-ch2-09': {
    questionEn:
      'Using the Chinese Remainder Theorem (CRT), solve the system of congruences: x = 1 mod 3, x = 4 mod 5, x = 6 mod 7.',
    questionAr:
      'باستخدام مبرهنة الباقي الصينية (CRT)، أوجد حل نظام المعادلات: x ≡ 1 mod 3، x ≡ 4 mod 5، x ≡ 6 mod 7.',
    options: [
      { key: 'A', textEn: 'x = 34 mod 105', textAr: 'x ≡ 34 mod 105' },
      { key: 'B', textEn: 'x = 69 mod 105', textAr: 'x ≡ 69 mod 105' },
      { key: 'C', textEn: 'x = 19 mod 105', textAr: 'x ≡ 19 mod 105' },
      { key: 'D', textEn: 'x = 104 mod 105', textAr: 'x ≡ 104 mod 105' },
    ],
    correctAnswer: 'A',
    explanationEn:
      'M = 3 * 5 * 7 = 105. M_1 = 35 (inverse mod 3 is 2); M_2 = 21 (inverse mod 5 is 1); M_3 = 15 (inverse mod 7 is 1). x = (1 * 35 * 2 + 4 * 21 * 1 + 6 * 15 * 1) mod 105 = (70 + 84 + 90) = 244 = 34 mod 105. Check: 34 mod 3 = 1, 34 mod 5 = 4, 34 mod 7 = 6.',
    explanationAr:
      'M = 105. نجد M_1=35 ومعكوسه 2؛ M_2=21 ومعكوسه 1؛ M_3=15 ومعكوسه 1. إذن x = (1×35×2 + 4×21×1 + 6×15×1) = 244 ≡ 34 mod 105. بالتحقق: 34 mod 3 = 1، 34 mod 5 = 4، 34 mod 7 = 6.',
    hintEn: 'Compute M = 105, partial moduli M_i, and their modular inverses.',
    hintAr: 'احسب M = 105، ثم M_i لكل معادلة ومعكوساتها.',
  },

  'prob-ch2-10': {
    questionEn:
      'For the prime modulus p = 11, which integer among {2, 3, 4, 5} is a valid primitive root?',
    questionAr:
      'للمقياس الأولي p = 11، أي من الأعداد {2, 3, 4, 5} يعتبر جذراً أولياً (Primitive Root) صالحاً؟',
    options: [
      { key: 'A', textEn: '2 (its powers generate all 10 non-zero residues)', textAr: '2 (قواه تولد جميع البواقي غير الصفرية الـ 10)' },
      { key: 'B', textEn: '3 (order is 5 != 10)', textAr: '3 (رتبته 5 لا 10)' },
      { key: 'C', textEn: '4 (order is 5 != 10)', textAr: '4 (رتبته 5 لا 10)' },
      { key: 'D', textEn: '5 (order is 5 != 10)', textAr: '5 (رتبته 5 لا 10)' },
    ],
    correctAnswer: 'A',
    explanationEn:
      'For p = 11, phi(11) = 10. A primitive root must have order 10. Check powers of 2 mod 11: 2^1=2, 2^2=4, 2^3=8, 2^4=5, 2^5=10, 2^6=9, 2^7=7, 2^8=3, 2^9=6, 2^{10}=1. Powers generate all elements {1..10}. For 3, 4, 5, their order is 5.',
    explanationAr:
      'لـ p = 11، phi(11) = 10. الجذر الأولي يجب أن تكون رتبته 10 تماماً. قوى 2: 2, 4, 8, 5, 10, 9, 7, 3, 6, 1، تولد جميع الأعداد من 1 إلى 10 دون تكرار مبكر. أما 3 و 4 و 5 فرتبتها 5.',
    hintEn: 'A primitive root modulo p must have order exactly equal to p - 1.',
    hintAr: 'يجب أن تكون رتبة الجذر الأولي مساوية تماماً لـ p - 1.',
  },

  // =========================================================================
  // CHAPTER 3 — CLASSICAL CIPHERS & CRYPTANALYSIS
  // =========================================================================
  'prob-ch3-01': {
    questionEn:
      'Using the Caesar cipher with key k = 7, encrypt the plaintext word "EXAM". What is the resulting ciphertext?',
    questionAr:
      'باستخدام شفرة قيصر بمفتاح إزاحة k = 7، شفر كلمة النص الصريح "EXAM". ما هو النص المشفر الناتج؟',
    options: [
      { key: 'A', textEn: 'LEHT', textAr: 'LEHT' },
      { key: 'B', textEn: 'KDGQ', textAr: 'KDGQ' },
      { key: 'C', textEn: 'LFIU', textAr: 'LFIU' },
      { key: 'D', textEn: 'MDHT', textAr: 'MDHT' },
    ],
    correctAnswer: 'A',
    explanationEn:
      'C = (P + 7) mod 26: E(4) + 7 = 11 (L); X(23) + 7 = 30 = 4 mod 26 (E); A(0) + 7 = 7 (H); M(12) + 7 = 19 (T). Result is LEHT.',
    explanationAr:
      'القانون: C = (P + 7) mod 26. الحروف: E(4)+7=11 (L)؛ X(23)+7=30≡4 (E)؛ A(0)+7=7 (H)؛ M(12)+7=19 (T). الناتج هو LEHT.',
    hintEn: 'Convert letters to 0-25, add 7, and take mod 26.',
    hintAr: 'حول الحروف إلى أرقام (A=0 ... Z=25)، أضف 7 وخذ الباقي بمقياس 26.',
  },

  'prob-ch3-02': {
    questionEn:
      'Why can any Caesar cipher be broken almost instantly using exhaustive brute-force cryptanalysis on modern computers?',
    questionAr:
      'لماذا يمكن كسر أي نص مشفر بشفرة قيصر فورياً بالبحث الشامل (Brute-Force)؟',
    options: [
      {
        key: 'A',
        textEn: 'The key space has only 25 possible non-trivial shift keys (k in 1..25)',
        textAr: 'فضاء المفاتيح صغير جداً ويحتوي على 25 مفتاحاً محتملاً فقط (k من 1 إلى 25)',
      },
      {
        key: 'B',
        textEn: 'The encryption algorithm is secret',
        textAr: 'خوارزمية التشفير سرية',
      },
      {
        key: 'C',
        textEn: 'Caesar cipher uses 64-bit blocks',
        textAr: 'تستخدم كتل 64 بت',
      },
      {
        key: 'D',
        textEn: 'Because letters are transformed into non-invertible numbers',
        textAr: 'لأن الحروف تتحول لقيم غير قابلة للعكس',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'With only 26 letters in the alphabet, there are only 25 possible shifts (excluding k = 0). A cryptanalyst can test all 25 shifts and immediately recognize readable natural language.',
    explanationAr:
      'الأبجدية الإنجليزية تتكون من 26 حرفاً، مما يعني وجود 25 إزاحة ممكنة فقط. تجربة 25 احتمالاً تستغرق أجزاءً من الثانية ويتعرف المحلل على النص بمجرد ظهور لغة مفهومة.',
    hintEn: 'Count the number of possible shift values.',
    hintAr: 'احسب عدد قيم الإزاحة الممكنة في الأبجدية.',
  },

  'prob-ch3-03': {
    questionEn:
      'In the Playfair cipher, when two letters of a plaintext digraph appear in the same row of the 5x5 matrix, how are they encrypted?',
    questionAr:
      'في شفرة بلايفير (Playfair)، عندما يقع الحرفان في نفس الصف داخل المصفوفة 5×5، كيف يتم تشفيرهما؟',
    options: [
      {
        key: 'A',
        textEn: 'Each letter is replaced by the letter immediately to its right (wrapping around to the leftmost column if at the end)',
        textAr: 'يُستبدل كل حرف بالحرف الواقع إلى يمينه مباشرة في نفس الصف (مع الالتفاف لأول الصف عند الطرف)',
      },
      {
        key: 'B',
        textEn: 'Each letter is replaced by the letter immediately below it',
        textAr: 'يُستبدل بالحرف الواقع تحته مباشرة',
      },
      {
        key: 'C',
        textEn: 'The two letters are swapped',
        textAr: 'يتم تبديل موضعي الحرفين فقط',
      },
      {
        key: 'D',
        textEn: 'They form a rectangle and take opposite corner letters',
        textAr: 'يشكلان مستطيلاً وتؤخذ أركانه',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'Playfair rules: (1) Same row -> replace by letter to immediate right (circular wrap); (2) Same column -> replace by letter immediately below (circular wrap); (3) Rectangle -> replace by letters in the same row at the opposite corners.',
    explanationAr:
      'قواعد بلايفير: (1) نفس الصف -> الحرف إلى اليمين مباشرة؛ (2) نفس العمود -> الحرف إلى الأسفل مباشرة؛ (3) مستطيل -> حرفا الزوايا المقابلة في نفس الصف.',
    hintEn: 'Remember row rule: shift right.',
    hintAr: 'قاعدة الصف: الإزاحة نحو اليمين.',
  },

  'prob-ch3-04': {
    questionEn:
      'How does the Playfair cipher handle duplicate letters occurring in the same digraph (e.g. the letters "LL" in "BALLOON") during plaintext preparation?',
    questionAr:
      'كيف تتعامل شفرة بلايفير مع تكرار نفس الحرف في الزوج الواحد (مثل "LL" في كلمة "BALLOON") أثناء تجهيز النص؟',
    options: [
      {
        key: 'A',
        textEn: 'A filler letter (typically "X" or "Q") is inserted between the duplicate letters (forming "BA LX LO ON")',
        textAr: 'يتم إدراج حرف حشو فاصل (عادة "X" أو "Q") بين الحرفين المكررين لتصبح ("BA LX LO ON")',
      },
      {
        key: 'B',
        textEn: 'The second letter is deleted completely',
        textAr: 'يُحذف الحرف الثاني تماماً',
      },
      {
        key: 'C',
        textEn: 'The cipher skips encryption for duplicate pairs',
        textAr: 'تتجاهل الشفرة تشفير الأزواج المكررة',
      },
      {
        key: 'D',
        textEn: 'The entire word is encrypted with Caesar cipher instead',
        textAr: 'تُشفر الكلمة بشفرة قيصر كبديل',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'Playfair encrypts digraphs (pairs of distinct letters). When duplicate letters fall into the same pair, a filler letter ("X") must be inserted between them to separate them into distinct pairs.',
    explanationAr:
      'تشفر بلايفير أزواجاً من حرفين مختلفين. وإذا التقى حرفان متطابقان في زوج واحد، يُفصل بينهما بإدراج حرف حشو فاصل مثل X.',
    hintEn: 'Look for filler letter insertion.',
    hintAr: 'ابحث عن قاعدة إدراج حرف الحشو الفاصل X.',
  },

  'prob-ch3-05': {
    questionEn:
      'Given a 2x2 Hill Cipher key matrix K = [[3, 2], [5, 7]] and plaintext digraph "GO" (numerical vector P = [6, 14]), what is the ciphertext digraph?',
    questionAr:
      'باستخدام شفرة هيل (Hill Cipher) بالمصفوفة K = [[3, 2], [5, 7]] والنص "GO" (المتجه P = [6, 14])، ما هو النص المشفر الناتج؟',
    options: [
      { key: 'A', textEn: 'KG (C = [10, 6])', textAr: 'KG (المتجه C = [10, 6])' },
      { key: 'B', textEn: 'HI (C = [7, 8])', textAr: 'HI' },
      { key: 'C', textEn: 'ZA (C = [25, 0])', textAr: 'ZA' },
      { key: 'D', textEn: 'MN (C = [12, 13])', textAr: 'MN' },
    ],
    correctAnswer: 'A',
    explanationEn:
      'C = P * K mod 26: C_1 = (6 * 3 + 14 * 5) mod 26 = (18 + 70) = 88 = 10 mod 26 (K). C_2 = (6 * 2 + 14 * 7) mod 26 = (12 + 98) = 110 = 6 mod 26 (G). Ciphertext is "KG".',
    explanationAr:
      'الضرب المصفوفي بمقياس 26: C_1 = 6×3 + 14×5 = 88 ≡ 10 mod 26 (الحرف K). C_2 = 6×2 + 14×7 = 110 ≡ 6 mod 26 (الحرف G). النص المشفر هو KG.',
    hintEn: 'Compute row vector times matrix: [6, 14] * [[3, 2], [5, 7]] mod 26.',
    hintAr: 'اضرب متجه الصف في المصفوفة ثم اختزل كل عنصر بمقياس 26.',
  },

  'prob-ch3-06': {
    questionEn:
      'What is the exact mathematical condition required for a 2x2 Hill cipher key matrix K to be invertible modulo 26?',
    questionAr:
      'ما هو الشرط الرياضي الدقيق لكي تكون مصفوفة المفتاح K لشفرة هيل قابلة للعكس بمقياس 26؟',
    options: [
      {
        key: 'A',
        textEn: 'gcd(det(K), 26) = 1 (det(K) must be non-zero and coprime to 2 and 13)',
        textAr: 'gcd(det(K), 26) = 1 (يجب أن يكون المحدد أولياً نسبياً مع 26 ولا يقبل القسمة على 2 أو 13)',
      },
      {
        key: 'B',
        textEn: 'det(K) != 0 in real numbers only',
        textAr: 'det(K) != 0 في الأعداد الحقيقية فقط',
      },
      {
        key: 'C',
        textEn: 'All elements of K must be odd numbers',
        textAr: 'أن تكون جميع عناصر المصفوفة فردية',
      },
      {
        key: 'D',
        textEn: 'det(K) must equal 1 exactly',
        textAr: 'أن يساوي المحدد 1 تماماً',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'In modular matrix arithmetic, K is invertible if and only if its determinant det(K) has a modular multiplicative inverse modulo 26, which requires gcd(det(K), 26) = 1 (det(K) cannot be divisible by 2 or 13).',
    explanationAr:
      'تكون المصفوفة قابلة للعكس في الحسابيات المعيارية إذا وفقط إذا كان لمحددها معكوس ضربي مقياس 26، أي gcd(det(K), 26) = 1، فلا يكون المحدد زوجياً ولا مضاعفاً للعدد 13.',
    hintEn: 'Modular inverse of det(K) requires coprimality with 26.',
    hintAr: 'معكوس المحدد يتطلب أن يكون القاسم المشترك الأكبر مع 26 مساوياً لـ 1.',
  },

  'prob-ch3-07': {
    questionEn:
      'Why is the Hill cipher vulnerable to a Known-Plaintext Attack when an attacker intercepts m pairs of plaintext-ciphertext vectors?',
    questionAr:
      'لماذا تعد شفرة هيل عرضة تماماً لهجوم النص الصريح المعلوم (Known-Plaintext Attack)؟',
    options: [
      {
        key: 'A',
        textEn: 'Because encryption is purely linear: C = P * K mod 26, allowing key recovery via K = P^{-1} * C mod 26 if P is invertible',
        textAr: 'لأن الشفرة خطية تماماً: C = P × K mod 26، فيمكن استرجاع المفتاح بمعادلة خطية K = P^{-1} × C mod 26 إذا كانت P قابلة للعكس',
      },
      {
        key: 'B',
        textEn: 'Because the key is transmitted in plaintext',
        textAr: 'لأن المفتاح يُرسل بنص صريح',
      },
      {
        key: 'C',
        textEn: 'Because the key length is always 1 byte',
        textAr: 'لأن طول المفتاح بايت واحد دائماً',
      },
      {
        key: 'D',
        textEn: 'Because the alphabet size 26 is prime',
        textAr: 'لأن 26 عدد أولي',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'The Hill cipher is entirely linear. If an attacker knows m plaintext vectors and their corresponding ciphertext vectors such that the plaintext matrix P is invertible modulo 26, the attacker directly computes K = P^{-1} * C mod 26.',
    explanationAr:
      'شفرة هيل نظام خطي بالكامل. إذا علم المهاجم m من متجهات النص الصريح ومشفراتها بحيث تشكل مصفوفة P قابلة للعكس، يُحسب المفتاح مباشرة بضرب: K = P^{-1} × C mod 26.',
    hintEn: 'Linear systems can be solved directly by matrix inversion.',
    hintAr: 'الأنظمة الخطية تحل مباشرة بضرب معكوس مصفوفة النص الصريح في المشفر.',
  },

  'prob-ch3-08': {
    questionEn:
      'Using the polyalphabetic Vigenère cipher with repeating keyword "LEMON", encrypt the plaintext "ATTACK". What is the ciphertext?',
    questionAr:
      'باستخدام شفرة فيجنير المتعددة الأبجديات بالكلمة المفتاحية "LEMON" (مع تكرارها)، شفر النص "ATTACK". ما هو النص المشفر؟',
    options: [
      { key: 'A', textEn: 'LXFOPV', textAr: 'LXFOPV' },
      { key: 'B', textEn: 'LEMONA', textAr: 'LEMONA' },
      { key: 'C', textEn: 'KXENOU', textAr: 'KXENOU' },
      { key: 'D', textEn: 'MZGPRW', textAr: 'MZGPRW' },
    ],
    correctAnswer: 'A',
    explanationEn:
      'Align: P="ATTACK", K="LEMONL". Values: A(0)+L(11)=11 (L); T(19)+E(4)=23 (X); T(19)+M(12)=31=5 (F); A(0)+O(14)=14 (O); C(2)+N(13)=15 (P); K(10)+L(11)=21 (V). Result: LXFOPV.',
    explanationAr:
      'المحاذاة: النص ATTACK مع المفتاح LEMONL. الحسابات: A(0)+L(11)=L؛ T(19)+E(4)=X؛ T(19)+M(12)=31≡5 (F)؛ A(0)+O(14)=O؛ C(2)+N(13)=P؛ K(10)+L(11)=V. النص الناتج هو LXFOPV.',
    hintEn: 'Add corresponding letters mod 26: C_i = (P_i + K_i) mod 26.',
    hintAr: 'اجمع قيمة كل حرف من النص مع الحرف المقابل من المفتاح بمقياس 26.',
  },

  'prob-ch3-09': {
    questionEn:
      'If two different plaintext messages P_1 and P_2 are encrypted using the same One-Time Pad key K (C_1 = P_1 XOR K, C_2 = P_2 XOR K), what does XORing the two ciphertexts yield?',
    questionAr:
      'إذا شُفرت رسالتان P_1 و P_2 بنفس مفتاح لوحة المرة الواحدة K، فماذا ينتج عن إجراء عملية XOR بين النصين المشفرين C_1 XOR C_2؟',
    options: [
      {
        key: 'A',
        textEn: 'P_1 XOR P_2 (the key is eliminated, exposing statistical relationships between both plaintexts)',
        textAr: 'P_1 XOR P_2 (يُلغى المفتاح تماماً وينكشف الفرق الإحصائي بين النصين الصريحين)',
      },
      {
        key: 'B',
        textEn: 'The original key K',
        textAr: 'المفتاح الأصلي K',
      },
      {
        key: 'C',
        textEn: 'All zeros (00000000)',
        textAr: 'أصفار بالكامل',
      },
      {
        key: 'D',
        textEn: 'A completely uncrackable random stream',
        textAr: 'تدفق عشوائي يستحيل كسر شفرته',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'C_1 XOR C_2 = (P_1 XOR K) XOR (P_2 XOR K) = P_1 XOR P_2 XOR (K XOR K) = P_1 XOR P_2. The key cancels out completely, allowing frequency analysis and crib dragging to recover both plaintexts.',
    explanationAr:
      'C_1 ⊕ C_2 = (P_1 ⊕ K) ⊕ (P_2 ⊕ K) = P_1 ⊕ P_2 ⊕ (K ⊕ K) = P_1 ⊕ P_2. يلغي المفتاح نفسه، مما يكشف العلاقة بين النصين الصريحين ويمكن كسر الرسالتين.',
    hintEn: 'Remember that X XOR X = 0 in Boolean algebra.',
    hintAr: 'خاصية الجبر البوليني: K ⊕ K = 0.',
  },

  'prob-ch3-10': {
    questionEn:
      'Encrypt the plaintext "CRYPTOGRAPHY" using the Rail Fence transposition cipher of depth d = 2. What is the resulting ciphertext?',
    questionAr:
      'شفر النص "CRYPTOGRAPHY" باستخدام شفرة سياج السكة الحديدية (Rail Fence) بعمق d = 2. ما هو النص المشفر الناتج؟',
    options: [
      { key: 'A', textEn: 'CYTGAHRPORPY', textAr: 'CYTGAHRPORPY' },
      { key: 'B', textEn: 'RPORPYCYTGAH', textAr: 'RPORPYCYTGAH' },
      { key: 'C', textEn: 'CRYPTOGRAPHY', textAr: 'CRYPTOGRAPHY' },
      { key: 'D', textEn: 'CPYTOAGRRPHY', textAr: 'CPYTOAGRRPHY' },
    ],
    correctAnswer: 'A',
    explanationEn:
      'Write in 2 rails: Rail 1 (even positions 0, 2, 4, 6, 8, 10) takes C, Y, T, G, A, H -> "CYTGAH". Rail 2 (odd positions 1, 3, 5, 7, 9, 11) takes R, P, O, R, P, Y -> "RPORPY". Concatenating both rails yields "CYTGAHRPORPY".',
    explanationAr:
      'كتابة الحروف في صفين متبادلين: الصف الأول (المواقع الزوجية 0, 2, 4, 6, 8, 10): C, Y, T, G, A, H -> "CYTGAH". الصف الثاني (المواقع الفردية 1, 3, 5, 7, 9, 11): R, P, O, R, P, Y -> "RPORPY". بقراءة الصف الأول ثم الثاني نحصل على "CYTGAHRPORPY".',
    hintEn: 'Separate even-indexed characters into rail 1, and odd-indexed into rail 2.',
    hintAr: 'اجمع الحروف ذات المواقع الزوجية في سطر، والحروف الفردية في السطر التالي.',
  },

  // =========================================================================
  // CHAPTER 4 — BLOCK CIPHERS & DATA ENCRYPTION STANDARD (DES)
  // =========================================================================
  'prob-ch4-01': {
    questionEn:
      'Why is a classical Feistel block cipher guaranteed to be reversible during decryption, regardless of whether the round function F is invertible?',
    questionAr:
      'لماذا يُضمن فك تشفير شفرة فايستل (Feistel Cipher) بالعكس التام حتى لو لم تكن دالة الدورة F قابلة للعكس؟',
    options: [
      {
        key: 'A',
        textEn: 'Because the round function F is XORed with the data block (X XOR F XOR F = X); F is only evaluated in the forward direction during both encryption and decryption',
        textAr: 'لأن خرج دالة F يُدمج بعملية XOR التي تلغي نفسها (X ⊕ F ⊕ F = X)، ودالة F تُحسب بالاتجاه الأمامي في التشفير وفك التشفير على السواء',
      },
      {
        key: 'B',
        textEn: 'Because all mathematical functions in cryptography are invertible',
        textAr: 'لأن جميع الدوال في التشفير قابلة للعكس',
      },
      {
        key: 'C',
        textEn: 'Because the subkey is divided by 2',
        textAr: 'لأن المفتاح الفرعي يُقسم على 2',
      },
      {
        key: 'D',
        textEn: 'Because Feistel ciphers require asymmetric key pairs',
        textAr: 'لأن شفرات فايستل تستخدم مفاتيح عامة وخاصة',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'In a Feistel network, reversibility relies entirely on the self-inverting property of the XOR operation: R_{i-1} = L_i and L_{i-1} = R_i XOR F(L_i, K_i). The function F itself never needs to be inverted; it is simply evaluated with the same inputs.',
    explanationAr:
      'يعتمد الانعكاس في بنية فايستل على خاصية XOR العكسية الذاتية: L_{i-1} = R_i ⊕ F(L_i, K_i). دالة الدورة F لا تُعكس أبداً بل تُحسب بنفس الدخل في كلا الاتجاهين.',
    hintEn: 'Focus on the property: A XOR B XOR B = A.',
    hintAr: 'ركز على خاصية عملية XOR العكسية: A ⊕ B ⊕ B = A.',
  },

  'prob-ch4-02': {
    questionEn:
      'In the DES round function, when a 6-bit input 101110_2 enters an S-Box, what row and column are selected for lookup?',
    questionAr:
      'في صندوق الاستبدال (S-Box) لخوارزمية DES، عند إدخال 6 بتات بالقيمة 101110_2، ما هو الصف والعمود المحددان للبحث؟',
    options: [
      {
        key: 'A',
        textEn: 'Row = 2 (from outer bits 10_2), Column = 7 (from middle bits 0111_2)',
        textAr: 'الصف = 2 (من البتين الخارجيين 10_2)، والعمود = 7 (من البتات الأربعة الداخلية 0111_2)',
      },
      {
        key: 'B',
        textEn: 'Row = 1, Column = 14',
        textAr: 'الصف = 1، العمود = 14',
      },
      {
        key: 'C',
        textEn: 'Row = 3, Column = 6',
        textAr: 'الصف = 3، العمود = 6',
      },
      {
        key: 'D',
        textEn: 'Row = 0, Column = 15',
        textAr: 'الصف = 0، العمود = 15',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'In DES S-Boxes: outer bits (bit 1 and bit 6) specify the row: 1...0 -> 10_2 = 2. Middle four bits (bits 2, 3, 4, 5) specify the column: .0111. -> 0111_2 = 7.',
    explanationAr:
      'قاعدة صندوق S-Box في DES: البتان الخارجيان (الأول والسادس) يحددان الصف: 10_2 = 2. البتات الأربعة الوسطى تحدد العمود: 0111_2 = 7.',
    hintEn: 'Outer 2 bits give the row (0-3), middle 4 bits give the column (0-15).',
    hintAr: 'البتان الطرفيان يحددان الصف (0-3) والبتات الأربعة الداخلية تحدد العمود (0-15).',
  },

  'prob-ch4-03': {
    questionEn:
      'In the DES key schedule, what happens to the original 64-bit user key during the initial Permuted Choice 1 (PC-1) transformation?',
    questionAr:
      'في خوارزمية جدول مفاتيح DES، ماذا يحدث لمفتاح المستخدم المكون من 64 بت عند تطبيق جدول التبديل الأولي PC-1؟',
    options: [
      {
        key: 'A',
        textEn: '8 parity bits (bits 8, 16, 24, 32, 40, 48, 56, 64) are discarded, reducing the effective key to 56 bits split into two 28-bit halves (C_0 and D_0)',
        textAr: 'يتم استبعاد بتات التحقق من الزوجية الـ 8 (البتات 8، 16، 24، 32، 40، 48، 56، 64) ليتبقى 56 بت فعلي تُقسم لنصفين 28 بت لكل منهما (C_0 و D_0)',
      },
      {
        key: 'B',
        textEn: 'The key is expanded from 64 bits to 128 bits',
        textAr: 'يتم توسيع المفتاح إلى 128 بت',
      },
      {
        key: 'C',
        textEn: 'The key is XORed with a fixed initialization vector',
        textAr: 'يتم دمجه مع متجه ابتدائي',
      },
      {
        key: 'D',
        textEn: 'All 64 bits are retained without discarding any bit',
        textAr: 'يتم الإبقاء على كافة الـ 64 بت دون استبعاد',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'DES uses a 64-bit key input, but PC-1 discards every 8th bit used for odd-parity checking. This leaves 56 active key bits that are split into two 28-bit registers (C_0 and D_0).',
    explanationAr:
      'يستقبل DES مفتاحاً بطول 64 بت، لكن جدول PC-1 يستبعد البت الثامن من كل بايت (بتات التدقيق Parity)، ليبقى 56 بت فقط تُقسم إلى C_0 و D_0 (28 بت لكل منهما).',
    hintEn: 'Effective key size of DES is 56 bits because 8 parity bits are dropped.',
    hintAr: 'الطول الفعلي لمفتاح DES هو 56 بت بعد استبعاد 8 بتات فحص الزوجية.',
  },

  'prob-ch4-04': {
    questionEn:
      'Assuming a supercomputer cluster capable of testing 10^{13} keys per second, approximately how long would an exhaustive brute-force search take against single 56-bit DES versus 128-bit AES?',
    questionAr:
      'بافتراض حاسوب فائق يختبر 10^{13} مفتاحاً في الثانية، كم من الوقت يستغرق البحث الشامل لكسر مفتاح DES (56 بت) مقارنة بمفتاح AES (128 بت)؟',
    options: [
      {
        key: 'A',
        textEn: 'DES: ~2 hours (practical crack) | AES-128: ~10^{18} years (computationally infeasible)',
        textAr: 'خوارزمية DES: نحو ساعتين (كسر عملي ممكن) | خوارزمية AES-128: نحو 10^{18} سنة (مستحيل حسابياً)',
      },
      {
        key: 'B',
        textEn: 'DES: 50 years | AES-128: 100 years',
        textAr: 'DES: 50 سنة | AES-128: 100 سنة',
      },
      {
        key: 'C',
        textEn: 'Both take identical times because both are block ciphers',
        textAr: 'يستغرقان نفس الوقت تماماً',
      },
      {
        key: 'D',
        textEn: 'DES: 1 second | AES-128: 1 hour',
        textAr: 'DES: ثانية واحدة | AES-128: ساعة واحدة',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      '2^{56} approx 7.2 * 10^{16} keys / 10^{13} keys/sec = 7,200 seconds = 2 hours. For AES-128, 2^{128} approx 3.4 * 10^{38} keys / 10^{13} = 3.4 * 10^{25} seconds = 1.07 * 10^{18} years, proving 128-bit keys are secure against brute force.',
    explanationAr:
      'فضاء DES هو 2^{56} ≈ 7.2 × 10^{16}، بقسمته على 10^{13} يعطي 7200 ثانية (ساعتان فقط). أما AES-128 ففضاؤه 2^{128} ≈ 3.4 × 10^{38}، ويحتاج 10^{18} سنة، مما يبرهن استحالة كسره بالقوة الغاشمة.',
    hintEn: 'Compare 2^{56} to 2^{128}.',
    hintAr: 'قارن بين فضاء المفاتيح 2^{56} وفضاء 2^{128}.',
  },

  'prob-ch4-05': {
    questionEn:
      'What is the definition of the Strict Avalanche Criterion (SAC) in cryptographic S-Box and block cipher design?',
    questionAr:
      'ما هو التعريف الأكاديمي الدقيق لمعيار الانهيار الثلجي الصارم (Strict Avalanche Criterion - SAC) في تصميم خوارزميات التشفير؟',
    options: [
      {
        key: 'A',
        textEn: 'Whenever a single input bit is flipped, each output bit must change with a probability of exactly 0.5 (1/2)',
        textAr: 'عند تغيير بت واحد في المدخلات، يجب أن يتغير كل بت من المخرجات باحتمال يساوي 0.5 (النصف) تماماً',
      },
      {
        key: 'B',
        textEn: 'Whenever an input bit changes, all output bits must flip to 1',
        textAr: 'عند تغيير بت، يجب أن تنقلب جميع المخرجات إلى 1',
      },
      {
        key: 'C',
        textEn: 'Output bits must remain unchanged when key bits change',
        textAr: 'أن تظل المخرجات ثابتة دون تغيير',
      },
      {
        key: 'D',
        textEn: 'The cipher must run in constant time',
        textAr: 'أن تعمل الخوارزمية في زمن ثابت',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'Webster and Tavares (1985) introduced SAC: if any single input bit is inverted, each output bit should change with probability 1/2. This ensures maximum independence and non-linearity.',
    explanationAr:
      'معيار SAC ينص على أنه إذا قُلب بت واحد في الدخل، فإن كل بت في الخرج يتغير باحتمالية 0.5 تماماً، مما يحقق أعلى درجات العشوائية والاستقلالية الإحصائية.',
    hintEn: 'Probability must equal exactly 1/2 for every output bit.',
    hintAr: 'الاحتمالية يجب أن تكون مساوية لـ 0.5 (النصف) لكل بت مخرج.',
  },

  'prob-ch4-06': {
    questionEn:
      'According to Claude Shannon, which fundamental mechanisms achieve Confusion and Diffusion respectively in modern block ciphers like DES?',
    questionAr:
      'وفق مبادئ كلود شانون، ما هي الآليات التي تحقق كلاً من التشويش (Confusion) والانتشار (Diffusion) في خوارزميات كتل التشفير كـ DES؟',
    options: [
      {
        key: 'A',
        textEn: 'Confusion is achieved by non-linear substitution (S-Boxes); Diffusion is achieved by permutations and transpositions (P-Boxes)',
        textAr: 'يتحقق التشويش (Confusion) بالاستبدال غير الخطي (صناديق S-Boxes)؛ ويتحقق الانتشار (Diffusion) بالتباديل الموضعية (صناديق P-Boxes)',
      },
      {
        key: 'B',
        textEn: 'Confusion is achieved by XOR; Diffusion is achieved by parity checks',
        textAr: 'التشويش بعملية XOR والانتشار بفحص الزوجية',
      },
      {
        key: 'C',
        textEn: 'Both are achieved exclusively by expanding the key length',
        textAr: 'كلاهما يتحقق بزيادة طول المفتاح فقط',
      },
      {
        key: 'D',
        textEn: 'Confusion refers to error propagation, Diffusion refers to speed',
        textAr: 'التشويش يعني انتشار الخطأ والانتشار يعني السرعة',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'Confusion obscures the complex relationship between the key and the ciphertext (implemented by non-linear S-Boxes). Diffusion spreads the influence of each plaintext bit over many ciphertext bits (implemented by P-Box permutations).',
    explanationAr:
      'التشويش (Confusion) يعقد العلاقة الإحصائية بين المفتاح والنص المشفر عبر صناديق S-Box غير الخطية. الانتشار (Diffusion) ينشر تأثير كل بت صريح على بتات متعددة في المشفر عبر تباديل P-Box.',
    hintEn: 'Remember: Substitution = Confusion, Permutation = Diffusion.',
    hintAr: 'احفظ الربط الامتحاني: الاستبدال (S-Box) = تشويش، والتبديل (P-Box) = انتشار.',
  },

  // =========================================================================
  // CHAPTER 7 — BLOCK CIPHER OPERATION MODES & TRIPLE-DES
  // =========================================================================
  'prob-ch7-01': {
    questionEn:
      'Why does Double-DES (using two independent 56-bit keys K_1 and K_2) fail to provide 112 bits of security, and what is the exact complexity of the Meet-in-the-Middle attack against it?',
    questionAr:
      'لماذا يفشل التشفير المضاعف Double-DES في توفير أمان 112 بت، وما هو التعقيد الحسابي الدقيق لهجوم الالتقاء في المنتصف (Meet-in-the-Middle) ضده؟',
    options: [
      {
        key: 'A',
        textEn: 'Because an attacker computes intermediate values from both sides (X = E_{K_1}(P) and X = D_{K_2}(C)), reducing complexity to 2^{56} + 2^{56} = 2^{57} operations and 2^{56} storage',
        textAr: 'لأن المهاجم يحسب القيمة الوسيطة من الطرفين بالتوازي (X = E_{K_1}(P) و X = D_{K_2}(C))، مما يخفض التعقيد إلى 2^{57} عملية و 2^{56} سعة تخزين',
      },
      {
        key: 'B',
        textEn: 'Because both keys must be identical',
        textAr: 'لأن المفتاحين يجب أن يكونا متطابقين',
      },
      {
        key: 'C',
        textEn: 'Because DES cannot be run twice on the same block',
        textAr: 'لأنه لا يمكن تشغيل DES مرتين',
      },
      {
        key: 'D',
        textEn: 'Because the key size doubles to 112 bits which computers factor easily',
        textAr: 'لأن طول المفتاح يتضاعف',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'The Meet-in-the-Middle attack solves E_{K_1}(P) = D_{K_2}(C). By building a lookup table of all 2^{56} encryptions of P, the attacker tests 2^{56} decryptions of C for matches. Total time is 2^{57} operations rather than 2^{112}.',
    explanationAr:
      'يعتمد هجوم الالتقاء في المنتصف على حل المعادلة: E_{K_1}(P) = D_{K_2}(C). يبني المهاجم جدولاً بـ 2^{56} تشفيراً لـ P، ثم يختبر 2^{56} فك تشفير لـ C، فيصبح التعقيد 2^{56} + 2^{56} = 2^{57} فقط بدلاً من 2^{112}.',
    hintEn: 'Compare 2^{56} + 2^{56} = 2 * 2^{56} = 2^{57} to brute-force 2^{112}.',
    hintAr: 'تعقيد الهجوم هو 2^{56} + 2^{56} = 2^{57} عملية مع جدول تخزين 2^{56}.',
  },

  'prob-ch7-02': {
    questionEn:
      'In Triple-DES (3DES), why is the Encrypt-Decrypt-Encrypt (EDE) sequence used instead of three consecutive encryptions (EEE)?',
    questionAr:
      'في التشفير الثلاثي (Triple-DES)، لماذا تم اعتماد تسلسل (تشفير - فك تشفير - تشفير: EDE) بدلاً من التشفير المتتالي ثلاث مرات (EEE)؟',
    options: [
      {
        key: 'A',
        textEn: 'To provide backwards compatibility with single DES by simply setting K_1 = K_2 = K_3 (since E_K(D_K(E_K(P))) = E_K(P))',
        textAr: 'لتوفير التوافق العكسي التام مع DES المنفرد عند ضبط K_1 = K_2 = K_3 (لأن فك التشفير يلغي التشفير الأول: E_K(D_K(E_K(P))) = E_K(P))',
      },
      {
        key: 'B',
        textEn: 'Because decryption is 3 times faster than encryption',
        textAr: 'لأن فك التشفير أسرع بثلاث مرات',
      },
      {
        key: 'C',
        textEn: 'Because DES decryption produces double the ciphertext size',
        textAr: 'لأن فك التشفير يضاعف الحجم',
      },
      {
        key: 'D',
        textEn: 'To prevent memory leaks in hardware',
        textAr: 'لمنع تسريب الذاكرة في العتاد',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'If K_1 = K_2 = K_3 = K, the second stage (decryption) cancels out the first stage (encryption): D_K(E_K(P)) = P. The third stage encrypts P once: E_K(P). This allowed legacy systems using standard DES to communicate with new 3DES systems seamlessly.',
    explanationAr:
      'إذا تساوت المفاتيح K_1 = K_2 = K_3، فإن فك التشفير في المرحلة الثانية يلغي تشفير المرحلة الأولى: D_K(E_K(P)) = P، لتقوم المرحلة الثالثة بتشفير الناتج بمفتاح واحد E_K(P)، مما يتيح التوافق العكسي مع الأنظمة القديمة.',
    hintEn: 'When K1 = K2, E and D cancel out: D_K(E_K(P)) = P.',
    hintAr: 'عند تساوي المفاتيح، تلغي عملية فك التشفير التشفير السابق مباشرة.',
  },

  'prob-ch7-03': {
    questionEn:
      'What is the primary security flaw of Electronic Codebook (ECB) mode that makes it unsuitable for encrypting structured messages or bitmap images?',
    questionAr:
      'ما هو العيب الأمني الجوهري لنمط كتاب الشفرة الإلكتروني (ECB Mode) الذي يجعله غير صالح لتشفير الرسائل المنظمة أو الصور؟',
    options: [
      {
        key: 'A',
        textEn: 'Identical plaintext blocks are encrypted into identical ciphertext blocks under the same key, leaking data patterns and structure',
        textAr: 'كتل النص الصريح المتطابقة تُشفر إلى كتل متطابقة في النص المشفر تحت نفس المفتاح، مما يسرب أنماط وهيكل البيانات',
      },
      {
        key: 'B',
        textEn: 'It cannot be implemented in software',
        textAr: 'لا يمكن تطبيقه برمجياً',
      },
      {
        key: 'C',
        textEn: 'It requires an initialization vector (IV) that cannot be public',
        textAr: 'يتطلب متجهاً ابتدائياً يجب أن يبقى سرياً',
      },
      {
        key: 'D',
        textEn: 'A single transmission bit error corrupts all subsequent blocks forever',
        textAr: 'خطأ بت واحد يعطل كافة الكتل التالية للأبد',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'Because ECB encrypts each 64-bit block independently with no chaining, identical input blocks always produce identical output blocks. This pattern leakage reveals high-level structures (such as the famous Tux the Penguin image).',
    explanationAr:
      'نظراً لأن ECB يشفر كل كتلة باستقلالية تامة دون ربط، فإن الكتل المتماثلة في الدخل تنتج كتل متماثلة في الخرج دائماً، مما يكشف الأنماط الكلية للملفات (مثل صورة البطريق الشهيرة).',
    hintEn: 'Remember the ECB penguin: identical blocks produce identical ciphertexts.',
    hintAr: 'تذكر صورة البطريق: الكتل المتطابقة تعطي نصوصاً مشفرة متطابقة.',
  },

  'prob-ch7-04': {
    questionEn:
      'In Cipher Block Chaining (CBC) mode, how does decryption differ from encryption regarding parallel processing capability?',
    questionAr:
      'في نمط ربط كتل الشفرة (CBC Mode)، كيف يختلف فك التشفير عن التشفير من حيث إمكانية المعالجة المتوازية (Parallel Processing)؟',
    options: [
      {
        key: 'A',
        textEn: 'Decryption CAN be parallelized across all blocks (P_i = D_K(C_i) XOR C_{i-1}), whereas encryption CANNOT be parallelized because each block requires the previous ciphertext block C_{i-1}',
        textAr: 'فك التشفير يمكن موازاته بالكامل (P_i = D_K(C_i) ⊕ C_{i-1})، بينما التشفير لا يمكن موازاته لأن كل كتلة تحتاج المشفر السابق C_{i-1}',
      },
      {
        key: 'B',
        textEn: 'Encryption can be parallelized, but decryption must be sequential',
        textAr: 'التشفير يقبل الموازاة بينما فك التشفير تسلسلي فقط',
      },
      {
        key: 'C',
        textEn: 'Neither encryption nor decryption can ever be parallelized in CBC',
        textAr: 'كلاهما لا يمكن موازاته أبداً',
      },
      {
        key: 'D',
        textEn: 'Both encryption and decryption are fully parallelizable in CBC',
        textAr: 'كلاهما يقبل الموازاة بالكامل',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'During decryption, all ciphertext blocks C_i are already available. Each plaintext block P_i depends only on C_i and C_{i-1}, so all blocks can be decrypted simultaneously on multi-core processors. In contrast, encryption is sequential because C_i is needed to compute C_{i+1}.',
    explanationAr:
      'عند فك التشفير، تكون جميع كتل المشفر C_i متاحة مسبقاً. وتعتمد الكتلة P_i على C_i و C_{i-1} فقط، مما يتيح معالجة جميع الكتل بالتوازي. بينما في التشفير، يلزم انتظار كل كتلة مشفرة لتشفير التالية.',
    hintEn: 'In decryption, all C_i values are known upfront.',
    hintAr: 'في فك التشفير، تتوفر جميع كتل المشفر مقدماً مما يسمح بالموازاة.',
  },

  'prob-ch7-05': {
    questionEn:
      'If a 1-bit transmission error occurs in ciphertext block C_1 during transmission, what is the exact error propagation behavior in CBC mode versus Output Feedback (OFB) mode upon decryption?',
    questionAr:
      'إذا حدث خطأ في بت واحد أثناء نقل الكتلة المشفرة C_1، فما هو سلوك انتشار الخطأ الدقيق في نمط CBC مقارنة بنمط OFB عند فك التشفير؟',
    options: [
      {
        key: 'A',
        textEn: 'CBC: completely garbles P_1 and flips exactly 1 bit in P_2 (no further error) | OFB: flips only 1 bit in P_1 with zero error propagation to other blocks',
        textAr: 'نمط CBC: يشوه كتلة P_1 بالكامل ويقلب بت واحداً فقط في P_2 (ثم يتعافى) | نمط OFB: يقلب بت واحداً فقط في P_1 دون أي انتشار للكتل الأخرى',
      },
      {
        key: 'B',
        textEn: 'CBC has no errors; OFB garbles the entire file',
        textAr: 'CBC لا يتأثر بينما OFB يتشوه الملف كاملاً',
      },
      {
        key: 'C',
        textEn: 'Both corrupt all subsequent plaintext blocks until end of file',
        textAr: 'كلاهما يشوه جميع الكتل حتى نهاية الملف',
      },
      {
        key: 'D',
        textEn: 'CBC flips 1 bit; OFB completely garbles 2 blocks',
        textAr: 'CBC يقلب بتاً واحداً و OFB يشوه كتلتين',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'In CBC: P_1 = D_K(C_1) XOR IV (corrupted C_1 completely randomizes P_1 through the block cipher decryption), and P_2 = D_K(C_2) XOR C_1 (corrupted bit in C_1 directly flips the corresponding bit in P_2 via XOR). C_3 onwards are unaffected. In OFB: keystream is generated independently; a 1-bit ciphertext error flips only the corresponding 1 bit of plaintext.',
    explanationAr:
      'في CBC: P_1 = D_K(C_1) ⊕ IV (دخول البت الفاسد في دالة فك التشفير يشوه كتلة P_1 كاملة)، بينما P_2 = D_K(C_2) ⊕ C_1 (عملية XOR تقلب البت المقابل فقط في P_2). وتتعافى الكتل التالية. أما OFB، فتيار المفاتيح مستقل، وبالتالي الخطأ في بت واحد يقلب بت واحداً فقط في النص الصريح دون انتشار.',
    hintEn: 'CBC error is limited to 2 blocks; OFB acts like a stream cipher with 1-bit error localization.',
    hintAr: 'خطأ CBC محدود بكتلتين (تشوه الأولى وبت من الثانية)، بينما OFB موضعي في نفس البت فقط.',
  },

  'prob-ch7-06': {
    questionEn:
      'According to PKCS#7 padding standard, if a plaintext message of length 43 bytes is to be encrypted using an 8-byte (64-bit) block cipher, how many padding bytes are appended and what is the value of each padding byte?',
    questionAr:
      'وفق معيار الحشو PKCS#7، إذا كان طول الرسالة 43 بايتاً وسيجري تشفيرها بخوارزمية كتل بطول 8 بايت (64 بت)، كم بايت حشو يتم إضافته وما هي قيمة كل بايت حشو؟',
    options: [
      {
        key: 'A',
        textEn: '5 padding bytes, each containing the byte value 0x05',
        textAr: '5 بايتات حشو، قيمة كل بايت منها هي 0x05',
      },
      {
        key: 'B',
        textEn: '3 padding bytes, each containing the byte value 0x03',
        textAr: '3 بايتات حشو بقيمة 0x03',
      },
      {
        key: 'C',
        textEn: '8 padding bytes, each containing the byte value 0x00',
        textAr: '8 بايتات حشو بقيمة 0x00',
      },
      {
        key: 'D',
        textEn: 'No padding needed because 43 is prime',
        textAr: 'لا يلزم حشو لأن 43 عدد أولي',
      },
    ],
    correctAnswer: 'A',
    explanationEn:
      'Block size B = 8 bytes. 43 mod 8 = 3 bytes in the final partial block. Number of padding bytes required: pad_len = 8 - 3 = 5 bytes. In PKCS#7, every padding byte is filled with the integer value of the pad length itself: 0x05 (appended as 05 05 05 05 05).',
    explanationAr:
      'حجم الكتلة B = 8 بايت. 43 mod 8 = 3 بايتات في الكتلة الأخيرة. عدد بايتات الحشو المطلوبة = 8 - 3 = 5 بايتات. وفق معيار PKCS#7، يحمل كل بايت حشو قيمة عددية تساوي عدد بايتات الحشو نفسها (0x05)، فتضاف 5 بايتات كلها بالقيمة 05.',
    hintEn: 'Padding length = Block_size - (Length mod Block_size); each byte value equals pad length.',
    hintAr: 'طول الحشو = طول الكتلة - (طول الرسالة mod طول الكتلة)، وقيمة كل بايت تساوي عدد بايتات الحشو.',
  },
};

export function getPracticeChallenge(problemId: string): StudentPracticeProblem | undefined {
  return practiceChallenges[problemId];
}

