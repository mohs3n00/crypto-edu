import type { Question } from '../../types';

export interface ExamClueItem {
  triggerText: string;
  triggerTextAr?: string;
  concept: string;
  conceptAr?: string;
  explanation?: string;
  explanationAr?: string;
  distinction?: string;
  distinctionAr?: string;
}

export interface QuestionExamClues {
  primaryConcept: string;
  primaryConceptAr: string;
  clues: ExamClueItem[];
}

// Comprehensive verified exam clues organized by conceptual area
export const conceptExamCluesRegistry: Record<string, QuestionExamClues> = {
  // =========================================================================
  // CHAPTER 1: SECURITY GOALS, ATTACKS & MODELS
  // =========================================================================
  'confidentiality': {
    primaryConcept: 'Confidentiality (السرية والكتمان)',
    primaryConceptAr: 'سرية وكتمان البيانات',
    clues: [
      {
        triggerText: 'Unauthorized disclosure / release of private info',
        triggerTextAr: 'الكشف أو الإفشاء غير المصرح به للبيانات',
        concept: 'Data Confidentiality',
        conceptAr: 'سرية البيانات',
        explanation: 'Ensures private or sensitive information is not made available to unauthorized parties.',
        explanationAr: 'ضمان عدم إتاحة المعلومات الخاصة أو الحساسة للأطراف غير المصرح لها.',
        distinction: 'Protects privacy of content, unlike Integrity which protects accuracy.',
        distinctionAr: 'تحمي خصوصية المحتوى فقط، بخلاف السلامة التي تمنع التحريف والتعديل.',
      },
      {
        triggerText: 'Eavesdropping / monitoring network transmissions',
        triggerTextAr: 'التنصت ومراقبة حركة البيانات على الشبكة',
        concept: 'Passive Attack on Confidentiality',
        conceptAr: 'هجوم سلبي يستهدف السرية',
        explanation: 'Attacker reads or analyzes message traffic without modifying the data stream.',
        explanationAr: 'المهاجم يقرأ أو يحلل حركة الرسائل دون أي تعديل في سيل البيانات.',
        distinction: 'Passive attacks breach Confidentiality; they do NOT alter resources.',
        distinctionAr: 'الهجمات السلبية تنتهك السرية حصراً، ولا تعدل موارد النظام أبداً.',
      },
    ],
  },
  'integrity': {
    primaryConcept: 'Data Integrity (سلامة وتكامل البيانات)',
    primaryConceptAr: 'سلامة وتكامل البيانات',
    clues: [
      {
        triggerText: 'Unauthorized modification / alteration / deletion',
        triggerTextAr: 'التعديل أو التغيير أو الحذف غير المصرح به',
        concept: 'Data Integrity',
        conceptAr: 'سلامة وتكامل البيانات',
        explanation: 'Assures data is changed only in a specified and authorized manner.',
        explanationAr: 'ضمان قصر تعديل البيانات على الطرق المصرح بها ومن أشخاص مخولين فقط.',
        distinction: 'Distinguish from Confidentiality: integrity detects changes even if data is public.',
        distinctionAr: 'الفارق عن السرية: السلامة تكشف التغيير حتى لو كانت البيانات معلنة للجميع.',
      },
      {
        triggerText: 'Insertion, deletion, or reordering of messages',
        triggerTextAr: 'إدراج أو حذف أو إعادة ترتيب الرسائل',
        concept: 'Message Stream Modification (Active Attack)',
        conceptAr: 'تعديل سيل الرسائل (هجوم نشط)',
        explanation: 'An active attack violating integrity by tampering with transmitted data.',
        explanationAr: 'هجوم نشط ينتهك السلامة بالتلاعب بالبيانات المنقولة.',
        distinction: 'Integrity is checked using Cryptographic Hash Functions & MACs.',
        distinctionAr: 'تُحقق السلامة باستخدام دوال الهاش وأكواد التحقق MAC.',
      },
    ],
  },
  'availability': {
    primaryConcept: 'Availability (التوافرية والجاهزية)',
    primaryConceptAr: 'التوافرية وجاهزية الخدمة',
    clues: [
      {
        triggerText: 'Disruption of access / denial of service',
        triggerTextAr: 'تعطيل أو حجب الوصول إلى الخدمة والنظام',
        concept: 'Availability Breach / DoS',
        conceptAr: 'انتهاك التوافرية / هجوم حجب الخدمة',
        explanation: 'Assures systems work promptly and service is not denied to authorized users.',
        explanationAr: 'ضمان عمل الأنظمة بسرعة ودون حرمان المستخدمين الشرعيين من الخدمة.',
        distinction: 'Focuses on uptime and access rather than secret keys or encryption.',
        distinctionAr: 'تركز على استمرارية العمل والوصول وليس على سرية المفاتيح وتشفيرها.',
      },
    ],
  },
  'authentication': {
    primaryConcept: 'Authenticity & Authentication (المصادقة وإثبات الهوية)',
    primaryConceptAr: 'المصادقة والتحقق من الهوية',
    clues: [
      {
        triggerText: 'Verifying that users are who they say they are',
        triggerTextAr: 'التحقق من أن المستخدمين هم بالفعل من يدعون',
        concept: 'Entity Authentication (Authenticity)',
        conceptAr: 'المصادقة على هوية الكيان',
        explanation: 'Confirms identity of entities before granting access or processing requests.',
        explanationAr: 'التأكد من هوية الطرفين قبل منح الصلاحيات أو معالجة الطلبات.',
        distinction: 'Authenticity guarantees origin; Integrity guarantees content unchanged.',
        distinctionAr: 'المصادقة تضمن هوية المصدر؛ بينما السلامة تضمن عدم تغيير المحتوى.',
      },
      {
        triggerText: 'Input arrived from trusted source / genuine message',
        triggerTextAr: 'المدخلات أو الرسائل واردة من مصدر موثوق وحقيقي',
        concept: 'Data Origin Authentication',
        conceptAr: 'المصادقة على مصدر البيانات',
        explanation: 'Validates that a message genuinely originated from the claimed sender.',
        explanationAr: 'إثبات أن الرسالة صدرت بالفعل عن الجهة المزعومة دون انتحال.',
        distinction: 'Countered with digital signatures and HMAC.',
        distinctionAr: 'يتحقق عبر التوقيعات الرقمية وأكواد HMAC.',
      },
    ],
  },
  'non-repudiation': {
    primaryConcept: 'Non-repudiation (عدم الإنكار)',
    primaryConceptAr: 'خدمة عدم الإنكار',
    clues: [
      {
        triggerText: 'Prevents sender or receiver from denying transmitted message',
        triggerTextAr: 'منع المرسل أو المستقبل من إنكار إرسال أو استلام الرسالة',
        concept: 'Non-repudiation',
        conceptAr: 'عدم الإنكار',
        explanation: 'Provides proof of the origin and delivery of data so neither party can deny it.',
        explanationAr: 'تقديم دليل قطعي على إرسال واستلام البيانات يمنع أي طرف من التنصل منها.',
        distinction: 'Symmetric encryption CANNOT provide non-repudiation because both share the key; requires asymmetric digital signatures or notarization.',
        distinctionAr: 'التشفير المتماثل لا يوفر عدم الإنكار لاشتراك الطرفين بالمفتاح؛ يتطلب توقيعاً رقمياً أو توثيقاً.',
      },
    ],
  },
  'active-vs-passive': {
    primaryConcept: 'Active vs. Passive Attacks (الهجمات النشطة مقابل السلبية)',
    primaryConceptAr: 'تصنيف الهجمات: نشطة مقابل سلبية',
    clues: [
      {
        triggerText: 'Alter system resources or affect their operation',
        triggerTextAr: 'تعديل موارد النظام أو التأثير على تشغيلها',
        concept: 'Active Attack (هجوم نشط)',
        conceptAr: 'هجوم نشط / إيجابي',
        explanation: 'Involves modification of data stream or creation of false streams (masquerade, replay, DoS).',
        explanationAr: 'يتضمن تعديل سيل البيانات أو إنشاء تدفقات مزورة (انتحال، إعادة إرسال، تعطيل).',
        distinction: 'Goal is DETECTION and recovery (difficult to prevent).',
        distinctionAr: 'الهدف الأساسي هو الكشف والتعافي (صعب المنع التام).',
      },
      {
        triggerText: 'Learn or make use of info without affecting resources',
        triggerTextAr: 'الحصول على المعلومات أو استغلالها دون التأثير على النظام',
        concept: 'Passive Attack (هجوم سلبي)',
        conceptAr: 'هجوم سلبي',
        explanation: 'Nature of eavesdropping or traffic analysis. No modification occurs.',
        explanationAr: 'طبيعته التنصت أو تحليل أنماط الحركة. لا يحدث أي تعديل في البيانات.',
        distinction: 'Goal is PREVENTION through encryption (difficult to detect).',
        distinctionAr: 'الهدف الأساسي هو المنع بواسطة التشفير (صعب الكشف لعدم تركه أثراً).',
      },
      {
        triggerText: 'Passive capture followed by unauthorized retransmission',
        triggerTextAr: 'التقاط سلبي لوحدة البيانات ثم إعادة إرسالها لاحقاً لإحداث أثر غير مصرح به',
        concept: 'Replay Attack (Active Attack)',
        conceptAr: 'هجوم إعادة الإرسال (هجوم نشط)',
        explanation: 'Capturing valid data packets and replaying them later to deceive the receiver.',
        explanationAr: 'التقاط حزم صحيحة وإعادة إرسالها لاحقاً لخداع النظام (كإعادة طلب تحويل بنكي).',
        distinction: 'Even though capture is passive, retransmission makes it an ACTIVE attack.',
        distinctionAr: 'رغم أن الالتقاط سلبي، إلا أن إعادة البث تجعله هجوماً نشطاً.',
      },
    ],
  },
  'symmetric-vs-asymmetric': {
    primaryConcept: 'Symmetric vs. Asymmetric Encryption (التشفير المتماثل وغير المتماثل)',
    primaryConceptAr: 'المقارنة بين التشفير المتماثل والتشفير غير المتماثل',
    clues: [
      {
        triggerText: 'Same key used for encryption and decryption / shared secret',
        triggerTextAr: 'استخدام نفس المفتاح المشترك للتشفير وفك التشفير',
        concept: 'Symmetric (Conventional / One-Key) Encryption',
        conceptAr: 'التشفير المتماثل (التقليدي / مفتاح واحد)',
        explanation: 'Both communicating parties share a single private secret key beforehand.',
        explanationAr: 'يشترك الطرفان في مفتاح سري واحد متطابق مسبقاً قبل بدء الاتصال.',
        distinction: 'Requires secure key distribution channel; faster throughput than asymmetric.',
        distinctionAr: 'يتطلب قناة آمنة لتوزيع المفتاح؛ ولكنه أسرع بكثير من غير المتماثل.',
      },
      {
        triggerText: 'Public key and private key / two mathematically related keys',
        triggerTextAr: 'مفتاح عام ومفتاح خاص / زوج مفاتيح مرتبطة رياضياً',
        concept: 'Asymmetric (Public-Key) Encryption',
        conceptAr: 'التشفير غير المتماثل (المفتاح العام)',
        explanation: 'One key is published openly (public), the other is kept strictly secret (private).',
        explanationAr: 'مفتاح يُعلن للجميع (عام)، والمفتاح المقابل يُحفظ في سرية تامة (خاص).',
        distinction: 'Solves key distribution; enables digital signatures and non-repudiation.',
        distinctionAr: 'يحل معضلة توزيع المفاتيح؛ ويمكّن من التوقيع الرقمي وعدم الإنكار.',
      },
    ],
  },

  // =========================================================================
  // CHAPTER 2: NUMBER THEORY & ALGORITHMS
  // =========================================================================
  'divisibility-and-euclid': {
    primaryConcept: 'Divisibility & Euclidean Algorithm (قابلية القسمة وخوارزمية إقليدس)',
    primaryConceptAr: 'قابلية القسمة وخوارزمية إقليدس',
    clues: [
      {
        triggerText: 'b divides a / no remainder on division (a = mb)',
        triggerTextAr: 'b يقسم a / انعدام باقي القسمة (a = mb)',
        concept: 'Divisibility Condition (b | a)',
        conceptAr: 'شرط قابلية القسمة',
        explanation: 'Integer a is a multiple of non-zero integer b.',
        explanationAr: 'العدد a مضاعف صحيح للعدد غير الصفري b دون باقٍ.',
        distinction: 'Every non-zero integer divides 0 (b | 0), but 0 divides no non-zero number.',
        distinctionAr: 'أي عدد غير صفري يقسم الصفر (b | 0)، ولكن الصفر لا يقسم أي عدد.',
      },
      {
        triggerText: 'Largest integer dividing both a and b / gcd(a, b)',
        triggerTextAr: 'أكبر عدد صحيح يقسم كلاً من a و b',
        concept: 'Greatest Common Divisor (GCD)',
        conceptAr: 'القاسم المشترك الأكبر (GCD)',
        explanation: 'Calculated efficiently via repeated division: gcd(a, b) = gcd(b, a mod b).',
        explanationAr: 'يُحسب بكفاءة عبر القسمة المتكررة: gcd(a, b) = gcd(b, a mod b) حتى باقي الصفر.',
        distinction: 'If gcd(a, b) = 1, the two integers are Relatively Prime (Coprime).',
        distinctionAr: 'إذا كان gcd(a, b) = 1، فإن العددين أوليان نسبياً (Coprime).',
      },
      {
        triggerText: 'Finding linear combination as + bt = gcd(a, b) / multiplicative inverse',
        triggerTextAr: 'إيجاد التركيبة الخطية as + bt = gcd ومقلوب المعكوس الضربي',
        concept: 'Extended Euclidean Algorithm (Bézout Identity)',
        conceptAr: 'خوارزمية إقليدس الممتدة ومتطابقة بيزو',
        explanation: 'Computes Bézout coefficients (s, t) to find the modular inverse b^-1 mod n.',
        explanationAr: 'تحسب معاملي بيزو (s, t) للوصول للمعكوس الضربي المعياري.',
        distinction: 'Inverse b^-1 mod n exists IF AND ONLY IF gcd(b, n) = 1.',
        distinctionAr: 'المعكوس الضربي المعياري يوجد إذا وفقط إذا كان gcd(b, n) = 1.',
      },
    ],
  },
  'fermat-euler-crt': {
    primaryConcept: "Fermat's Theorem, Euler's Totient & CRT (مبرهنات فيرما وأويلر والباقي الصينية)",
    primaryConceptAr: 'مبرهنات فيرما وأويلر ومبرهنة الباقي الصينية',
    clues: [
      {
        triggerText: 'a^(p-1) = 1 (mod p) where p is prime and gcd(a, p) = 1',
        triggerTextAr: 'a^(p-1) يطابق 1 بمقياس p حيث p عدد أولي',
        concept: "Fermat's Little Theorem",
        conceptAr: 'مبرهنة فيرما الصغرى',
        explanation: 'Allows rapid reduction of high powers modulo prime p.',
        explanationAr: 'تتيح اختزال الأسس الكبيرة جداً بمقياس العدد الأولي p.',
        distinction: 'Requires p to be PRIME. If modulus n is composite, use Euler instead.',
        distinctionAr: 'تشترط أن يكون p أولياً. إذا كان المعيار مركباً، نستخدم أويلر بدلاً منها.',
      },
      {
        triggerText: 'Number of positive integers less than n relatively prime to n / ø(n)',
        triggerTextAr: 'عدد الأعداد الصحيحة الموجبة الأصغر من n والأولية نسبياً معه',
        concept: "Euler's Totient Function ø(n)",
        conceptAr: 'دالة أويلر للمؤشر ø(n)',
        explanation: 'For prime p: ø(p) = p - 1. For product of primes pq: ø(pq) = (p - 1)(q - 1).',
        explanationAr: 'للأولي: ø(p) = p - 1. لحاصل ضرب أوليين: ø(pq) = (p - 1)(q - 1).',
        distinction: 'Essential for RSA key generation: ed = 1 mod ø(n).',
        distinctionAr: 'حجر الأساس في توليد مفاتيح خوارزمية RSA: ed = 1 mod ø(n).',
      },
      {
        triggerText: 'Solving simultaneous linear congruences with pairwise coprime moduli',
        triggerTextAr: 'حل نظام معادلات التطابق الخطية المتزامنة بمعايير أولية نسبياً مثنى مثنى',
        concept: 'Chinese Remainder Theorem (CRT)',
        conceptAr: 'مبرهنة الباقي الصينية (CRT)',
        explanation: 'Guarantees a unique solution x modulo M = m1 * m2 * ... * mk.',
        explanationAr: 'تضمن حلاً فريداً x بمقياس حاصل ضرب المعايير M = m1 * m2 * ... * mk.',
        distinction: 'Moduli MUST be pairwise coprime: gcd(m_i, m_j) = 1 for all i ≠ j.',
        distinctionAr: 'تشترط أن تكون المعايير أولية نسبياً فيما بينها مثنى مثنى.',
      },
      {
        triggerText: 'Probabilistic primality test evaluating n - 1 = 2^k * q',
        triggerTextAr: 'اختبار أولية احتمالي يعتمد على تفكيك n - 1 إلى 2^k * q',
        concept: 'Miller-Rabin Primality Test',
        conceptAr: 'اختبار ميلر-رابين للأولية',
        explanation: 'Returns either composite or inconclusive (prime with high probability).',
        explanationAr: 'يحدد ما إذا كان العدد مركباً حتماً أو غير حاسم (أولي باحتمالية عالية جداً).',
        distinction: 'Deterministic primality achieved in polynomial time by AKS (2002).',
        distinctionAr: 'الاختبار الحتمي متعدد الحدود تحقق عام 2002 عبر خوارزمية AKS.',
      },
    ],
  },

  // =========================================================================
  // CHAPTER 3: CLASSICAL CIPHERS & CRYPTANALYSIS
  // =========================================================================
  'caesar-and-classical': {
    primaryConcept: 'Classical Substitution & Transposition (شفرات الاستبدال والتبديل الكلاسيكية)',
    primaryConceptAr: 'الشفرات الكلاسيكية: الاستبدال والتبديل',
    clues: [
      {
        triggerText: 'Shifting each letter by fixed displacement k (C = (P + k) mod 26)',
        triggerTextAr: 'إزاحة كل حرف بمقدار ثابت k (المعادلة: C = (P + k) mod 26)',
        concept: 'Caesar Cipher (Shift Cipher)',
        conceptAr: 'شفرة قيصر (شفرة الإزاحة)',
        explanation: 'Simplest monoalphabetic substitution. Only 25 possible secret keys.',
        explanationAr: 'أبسط شفرة استبدال أحادي. يوجد 25 مفتاحاً سرياً محتملاً فقط.',
        distinction: 'Easily broken by brute-force testing all 25 keys.',
        distinctionAr: 'تُكسر بسهولة تامة عبر هجوم القوة الغاشمة باختبار 25 مفتاحاً.',
      },
      {
        triggerText: 'Reflect the frequency data of the original alphabet / single letter frequencies',
        triggerTextAr: 'تعكس بيانات التكرار الإحصائي للأبجدية الأصلية',
        concept: 'Vulnerability of Monoalphabetic Ciphers',
        conceptAr: 'نقطة ضعف شفرات الاستبدال أحادية الأبجدية',
        explanation: 'Letters like E and T retain their high frequency in the ciphertext.',
        explanationAr: 'تحتفظ الحروف الأكثر تكراراً (مثل E و T) بقمم تكرارها في النص المشفر.',
        distinction: 'Countered by Polyalphabetic ciphers (Vigenère) and Polygraphic ciphers (Playfair, Hill).',
        distinctionAr: 'يتم التغلب عليها بالشفرات متعددة الأبجدية (فيجينير) ومتعددة الحروف (بليفير وهيل).',
      },
      {
        triggerText: '5x5 matrix of letters based on a keyword / digram pairs',
        triggerTextAr: 'مصفوفة أحرف 5×5 مبنية على كلمة مفتاحية / تشفير أزواج الحروف',
        concept: 'Playfair Cipher',
        conceptAr: 'شفرة بليفير',
        explanation: 'Treats pairs of letters (digrams) using row, column, and rectangle rules.',
        explanationAr: 'تشفّر أزواج الحروف (Digrams) بقواعد الصف والعمود والمستطيل.',
        distinction: 'I and J share a single cell; double identical letters in a pair are separated by filler X.',
        distinctionAr: 'الحرفان I و J يتشاركان خلية واحدة؛ وتُفصل الحروف المتطابقة في الزوج بحرف حشو X.',
      },
      {
        triggerText: 'Matrix multiplication modulo 26 / C = K · P mod 26',
        triggerTextAr: 'ضرب المصفوفات المعياري بمقياس 26 / المعادلة: C = K · P mod 26',
        concept: 'Hill Cipher',
        conceptAr: 'شفرة هيل المصفوفية',
        explanation: 'Polygraphic substitution using linear algebra and matrix inversion.',
        explanationAr: 'استبدال متعدد الحروف باستخدام الجبر الخطي ومعكوس المصفوفة.',
        distinction: 'Key matrix K is invertible IF AND ONLY IF gcd(det(K), 26) = 1.',
        distinctionAr: 'مصفوفة المفتاح K قابلة للانعكاس إذا وفقط إذا كان gcd(det(K), 26) = 1.',
      },
      {
        triggerText: 'Bitwise XOR with random key of equal length / unconditionally secure',
        triggerTextAr: 'عملية XOR مع مفتاح عشوائي مساوٍ لطول الرسالة / أمان تام مطلق',
        concept: 'One-Time Pad (OTP) / Vernam Cipher',
        conceptAr: 'لوحة المرة الواحدة / شفرة فيرنام',
        explanation: 'Only provably unbreakable cryptosystem (Shannon Perfect Secrecy).',
        explanationAr: 'النظام الوحيد المثبت أمانه المطلق رياضياً وفق نظرية شانون.',
        distinction: 'Key MUST be truly random, used only once, and as long as the message.',
        distinctionAr: 'يشترط أن يكون المفتاح عشوائياً تماماً، يُستخدم لمرة واحدة فقط، ومساوياً لطول الرسالة.',
      },
      {
        triggerText: 'Letters rearranged without altering identity (rail fence, row grid)',
        triggerTextAr: 'إعادة ترتيب مواقع الأحرف دون استبدالها (سياج السكة، الشبكة المستطيلة)',
        concept: 'Transposition (Permutation) Cipher',
        conceptAr: 'شفرة التبديل الموضعي',
        explanation: 'Performs permutation on positions of plaintext letters.',
        explanationAr: 'تُجري تبديلاً لمواقع الحروف دون تغيير أشكالها.',
        distinction: 'Letter frequencies match plaintext exactly; recognizes cipher by unchanged letter counts.',
        distinctionAr: 'تكرار الأحرف يطابق النص الصريح تماماً؛ وتُكشف بمطابقة تكرارات الحروف.',
      },
    ],
  },
  'attack-types': {
    primaryConcept: 'Cryptanalytic Attack Models (نماذج الهجمات وتحليل الشفرات)',
    primaryConceptAr: 'نماذج الهجمات وتحليل الشفرات',
    clues: [
      {
        triggerText: 'Opponent has only ciphertext / easiest to defend against',
        triggerTextAr: 'المهاجم يمتلك النص المشفر فقط / أسهل الهجمات في التصدي لها',
        concept: 'Ciphertext-Only Attack',
        conceptAr: 'هجوم النص المشفر فقط',
        explanation: 'Attacker has least amount of information; defends by large key space.',
        explanationAr: 'يمتلك المهاجم أقل قدر من المعلومات؛ ويُحبط بكبر مساحة المفاتيح.',
        distinction: 'Hardest for the cryptanalyst; easiest for defender.',
        distinctionAr: 'أصعب الهجمات على المحلل وأسهلها في الدفاع على النظام.',
      },
      {
        triggerText: 'Opponent has one or more plaintext-ciphertext pairs',
        triggerTextAr: 'المهاجم يمتلك زوجاً أو أكثر من النصوص الصريحة وما يقابلها من مشفرة',
        concept: 'Known-Plaintext Attack',
        conceptAr: 'هجوم النص الصريح المعلوم',
        explanation: 'Attacker deduces the secret key by analyzing known message pairs.',
        explanationAr: 'المحلل يستنتج المفتاح السري عبر دراسة أزواج الرسائل المعلومة لديه.',
        distinction: 'Hill cipher is easily broken by known plaintext via matrix inversion.',
        distinctionAr: 'شفرة هيل تُكسر بسهولة بهذا الهجوم عبر حل نظام معادلات المصفوفات.',
      },
      {
        triggerText: 'Trying every possible key until intelligible plaintext is obtained',
        triggerTextAr: 'تجربة جميع المفاتيح المحتملة حتى الحصول على نص صريح مفهوم',
        concept: 'Brute-Force (Exhaustive Key Search) Attack',
        conceptAr: 'هجوم القوة الغاشمة (البحث الشامل في المفاتيح)',
        explanation: 'Guaranteed to succeed given infinite time; prevented by large key length (>= 128 bits).',
        explanationAr: 'مضمون النجاح نظرياً عند توفر الوقت؛ ويُحبط بطول المفتاح الكافي (128 بت فأكثر).',
        distinction: 'One-Time Pad is immune to brute force; DES (56 bits) is vulnerable.',
        distinctionAr: 'لوحة المرة الواحدة محصنة ضده؛ بينما خوارزمية DES (56 بت) عرضة له.',
      },
    ],
  },

  // =========================================================================
  // CHAPTER 4: BLOCK CIPHERS & THE DATA ENCRYPTION STANDARD (DES)
  // =========================================================================
  'stream-vs-block': {
    primaryConcept: 'Stream vs. Block Ciphers (تشفير التدفق مقابل تشفير الكتل)',
    primaryConceptAr: 'تشفير التدفق مقابل تشفير الكتل',
    clues: [
      {
        triggerText: 'Encrypts digital data stream one bit or one byte at a time',
        triggerTextAr: 'تشفير سيل البيانات الرقمية بتاً واحداً أو بايتاً واحداً في كل مرة',
        concept: 'Stream Cipher',
        conceptAr: 'تشفير التدفق (Stream Cipher)',
        explanation: 'Combines continuous pseudorandom keystream with plaintext via XOR.',
        explanationAr: 'يدمج سيل مفاتيح عشوائي زائف مستمر مع النص الصريح عبر بوابة XOR.',
        distinction: 'Faster, less code; RC4, LFSR. No padding required.',
        distinctionAr: 'أسرع برمجياً ولا يتطلب حشواً للبيانات (Padding)؛ مثل خوارزمية RC4.',
      },
      {
        triggerText: 'Treats block of plaintext as a whole / produces block of equal length',
        triggerTextAr: 'معالجة كتلة من النص الصريح ككل متكامل / إنتاج كتلة مشفرة مساوية في الطول',
        concept: 'Block Cipher',
        conceptAr: 'تشفير الكتل (Block Cipher)',
        explanation: 'Processes fixed-size blocks (e.g., 64-bit in DES, 128-bit in AES).',
        explanationAr: 'يعالج كتل بيانات ذات حجم ثابت (مثل 64 بت في DES و 128 بت في AES).',
        distinction: 'Uses iterative rounds with substitution and permutation (SPN or Feistel).',
        distinctionAr: 'يستخدم دورات متكررة من الاستبدال والتبديل (شبكات SPN أو فايستل).',
      },
    ],
  },
  'feistel-and-des': {
    primaryConcept: 'Feistel Cipher & DES Architecture (شبكة فايستل وبنية خوارزمية DES)',
    primaryConceptAr: 'بنية شبكة فايستل وخوارزمية DES القياسية',
    clues: [
      {
        triggerText: 'Splits block into left and right halves / identical decryption with reversed keys',
        triggerTextAr: 'تقسيم الكتلة لنصفين أيمن وأيسر / فك التشفير متطابق مع عكس ترتيب المفاتيح',
        concept: 'Feistel Block Cipher Structure',
        conceptAr: 'بنية شبكة فايستل لتشفير الكتل',
        explanation: 'R_i = L_{i-1} XOR F(R_{i-1}, K_i) and L_i = R_{i-1}. Round function F need NOT be invertible.',
        explanationAr: 'النصف الأيمن مشتق من دالة F، وفك التشفير يستخدم نفس العتاد مع عكس المفاتيح فقط.',
        distinction: 'Function F does NOT need an inverse; Feistel handles reversibility automatically.',
        distinctionAr: 'دالة الدورة F لا تشترط أن تكون قابلة للعكس، فالشبكة نفسها تضمن قابلية الانعكاس.',
      },
      {
        triggerText: 'Dissipates statistical structure of plaintext across long range',
        triggerTextAr: 'تشتيت البنية الإحصائية للنص الصريح عبر مساحة واسعة من النص المشفر',
        concept: 'Diffusion (الانتشار)',
        conceptAr: 'خاصية الانتشار (Diffusion)',
        explanation: 'Each plaintext digit influences many ciphertext digits (achieved by permutations).',
        explanationAr: 'كل عنصر من النص الصريح يؤثر في العديد من عناصر النص المشفر (عبر التبديل P).',
        distinction: 'Diffusion spreads across blocks; Confusion obscures relationship with key.',
        distinctionAr: 'الانتشار يشتت إحصائيات النص الصريح؛ بينما الخلط يشوش العلاقة مع المفتاح.',
      },
      {
        triggerText: 'Makes relationship between statistics of ciphertext and key as complex as possible',
        triggerTextAr: 'جعل العلاقة بين إحصائيات النص المشفر ومفتاح التشفير معقدة إلى أقصى حد',
        concept: 'Confusion (الخلط والتشويش)',
        conceptAr: 'خاصية الخلط والتشويش (Confusion)',
        explanation: 'Achieved primarily through non-linear substitution boxes (S-boxes).',
        explanationAr: 'تتحقق جوهرياً عبر صناديق الاستبدال غير الخطية (S-boxes).',
        distinction: 'In DES, S-boxes are the ONLY non-linear element and source of confusion.',
        distinctionAr: 'في DES، صناديق S-boxes هي العنصر الوحيد غير الخطي ومصدر الخلط والتعقيد.',
      },
      {
        triggerText: '64-bit block / 56-bit key / 16 rounds of processing',
        triggerTextAr: 'كتلة بحجم 64 بت / مفتاح فعال 56 بت / 16 دورة معالجة',
        concept: 'Data Encryption Standard (DES)',
        conceptAr: 'معيار تشفير البيانات (DES)',
        explanation: 'FIPS 46 standard: 64-bit input key has 8 parity bits dropped via PC-1 to 56 bits.',
        explanationAr: 'معيار FIPS: مفتاح الدخل 64 بت، يُسقط منه 8 بتات تحقق ليصبح 56 بتاً فعالاً.',
        distinction: 'Block length is 64 bits; Key length is 56 bits (not 64!).',
        distinctionAr: 'فخ امتحاني متكرر: حجم الكتلة 64 بت؛ بينما طول المفتاح الفعال 56 بت (وليس 64).',
      },
      {
        triggerText: 'Non-linear 6-to-4 bit substitution / outer bits row, inner bits column',
        triggerTextAr: 'استبدال غير خطي من 6 بت إلى 4 بت / البتات الطرفية للصف والداخلية للعمود',
        concept: 'DES S-Box Operation',
        conceptAr: 'آلية عمل صناديق الاستبدال S-Box في DES',
        explanation: 'Bits 1 & 6 determine row (0-3); bits 2-5 determine column (0-15).',
        explanationAr: 'البتان الطرفيان الأول والسادس يحددان الصف (0-3)، والداخلية تحدد العمود (0-15).',
        distinction: 'Output is always 4 bits in binary (0-15).',
        distinctionAr: 'الناتج دائماً 4 بتات ثنائية تمثل القيمة العشرية (0-15).',
      },
      {
        triggerText: 'Small change in plaintext or key flips approximately 50% of ciphertext bits',
        triggerTextAr: 'تغيير بت واحد في النص الصريح أو المفتاح يقلب نحو 50% من بتات النص المشفر',
        concept: 'Avalanche Effect (خاصية الانهيار الجليدي)',
        conceptAr: 'خاصية الانهيار الجليدي (Avalanche Effect)',
        explanation: 'Strict Avalanche Criterion (SAC): ensures output bits change with probability 0.5.',
        explanationAr: 'معيار SAC يضمن تغير بتات الخرج باحتمال 0.5 عند تغيير بت دخل واحد.',
        distinction: 'Prevents statistical cryptanalysis and chosen-plaintext clustering.',
        distinctionAr: 'يمنع هجمات التحليل الإحصائي وتجميع النصوص الصريحة المختارة.',
      },
    ],
  },

  // =========================================================================
  // CHAPTER 7: BLOCK CIPHER OPERATION & MODES
  // =========================================================================
  'multiple-des-and-mitm': {
    primaryConcept: 'Multiple Encryption & Meet-in-the-Middle Attack (التشفير المتعدد وهجوم اللقاء في المنتصف)',
    primaryConceptAr: 'التشفير المتعدد وهجوم اللقاء في المنتصف',
    clues: [
      {
        triggerText: 'Double DES search space reduced from 2^112 to 2^57',
        triggerTextAr: 'تقليص مساحة البحث في Double DES من 2^112 إلى 2^57 عملية',
        concept: 'Meet-in-the-Middle (MitM) Attack',
        conceptAr: 'هجوم اللقاء في المنتصف (MitM)',
        explanation: 'Diffie-Hellman attack matching forward encryption X = E(K1, P) with backward decryption X = D(K2, C).',
        explanationAr: 'هجوم ديفي وهيلمان يطابق التشفير الأمامي من جهة مع فك التشفير العكسي من جهة أخرى.',
        distinction: 'Proves Double-DES is barely stronger than single DES (2^57 vs 2^56); requires Triple DES (3DES).',
        distinctionAr: 'يثبت أن التشفير المزدوج ليس أكثر أماناً من الأحادي؛ ولذا تم اللجوء للتشفير الثلاثي 3DES.',
      },
      {
        triggerText: 'Encrypt-Decrypt-Encrypt (EDE) sequence with 2 or 3 keys',
        triggerTextAr: 'تسلسل تشفير-فك-تشفير (EDE) باستخدام مفتاحين أو ثلاثة مفاتيح',
        concept: 'Triple DES (3DES / TDEA)',
        conceptAr: 'خوارزمية التشفير الثلاثي (3DES)',
        explanation: 'C = E(K3, D(K2, E(K1, P))). With K1 = K2, it collapses backward-compatibly to single DES.',
        explanationAr: 'معادلة EDE تضمن التوافق العكسي مع DES القديم عند اختيار K1 = K2.',
        distinction: 'Two-key 3DES has 112 bits; Three-key 3DES has 168 bits key length.',
        distinctionAr: '3DES بمفتاحين طول مفتاحه 112 بت؛ وبثلاثة مفاتيح طول مفتاحه 168 بت.',
      },
    ],
  },
  'modes-of-operation': {
    primaryConcept: 'Block Cipher Modes of Operation (أنماط تشغيل تشفير الكتل)',
    primaryConceptAr: 'أنماط تشغيل تشفير الكتل (ECB, CBC, CFB, OFB, CTR)',
    clues: [
      {
        triggerText: 'Each block encrypted independently / identical plaintext yields identical ciphertext',
        triggerTextAr: 'تشفير كل كتلة بشكل مستقل / نفس النص الصريح ينتج نفس النص المشفر دائماً',
        concept: 'Electronic Codebook (ECB) Mode',
        conceptAr: 'نمط دفتر الرموز الإلكتروني (ECB)',
        explanation: 'Simplest mode. Leaks data patterns and is vulnerable to cut-and-paste manipulation.',
        explanationAr: 'أبسط الأنماط. يسرب أنماط البيانات وعرضة لهجمات النسخ واللصق والتلاعب.',
        distinction: 'Only suitable for short messages (< 1 block), like sending a single key.',
        distinctionAr: 'صالح فقط للرسائل القصيرة جداً (أقل من كتلة واحدة) كنقل مفتاح تشفير مفرد.',
      },
      {
        triggerText: 'Plaintext XORed with preceding ciphertext block / Initialization Vector (IV)',
        triggerTextAr: 'دمج النص الصريح ببوابة XOR مع كتلة التشفير السابقة / متجه التهيئة IV',
        concept: 'Cipher Block Chaining (CBC) Mode',
        conceptAr: 'نمط ربط كتل الشفرات (CBC)',
        explanation: 'C_i = E(K, P_i XOR C_{i-1}). Random IV prevents identical ciphertexts for identical messages.',
        explanationAr: 'تعتمد كل كتلة على سابقتها عبر XOR مع IV عشوائي لمنع تطابق الشفرات.',
        distinction: 'Transmission error in C_i corrupts current block P_i and 1 bit in next block P_{i+1}.',
        distinctionAr: 'خطأ إرسال بت في الشفرة C_i يتلف الكتلة P_i كاملة وبت واحد في الكتلة التالية P_{i+1}.',
      },
      {
        triggerText: 'Feedback of ciphertext converts block cipher into stream cipher',
        triggerTextAr: 'تغذية راجعة لكتلة الشفرة تحول تشفير الكتل إلى تشفير تدفقي',
        concept: 'Cipher Feedback (CFB) Mode',
        conceptAr: 'نمط تغذية الشفرة الراجعة (CFB)',
        explanation: 'Generates keystream by encrypting previous ciphertext block: C_i = P_i XOR E(K, C_{i-1}).',
        explanationAr: 'يولد سيل المفاتيح بتشفير كتلة الشفرة السابقة، ثم دمجها مع النص الصريح بـ XOR.',
        distinction: 'Error in ciphertext propagates through the feedback shift register for 1 block.',
        distinctionAr: 'خطأ الإرسال يسري وينتشر عبر مسجل الإزاحة لمسافة كتلة كاملة.',
      },
      {
        triggerText: 'Feedback of output before XOR / bit transmission errors do NOT propagate',
        triggerTextAr: 'تغذية راجعة للمخرج قبل XOR / أخطاء بتات الإرسال لا تنتشر للكتل اللاحقة',
        concept: 'Output Feedback (OFB) Mode',
        conceptAr: 'نمط التغذية الراجعة للمخرجات (OFB)',
        explanation: 'O_i = E(K, O_{i-1}) and C_i = P_i XOR O_i. Keystream generated independently of message.',
        explanationAr: 'يولد سيل المفاتيح بشكل مستقل تماماً عن النص الصريح أو المشفر.',
        distinction: 'Bit errors in transmission affect ONLY that exact single bit in plaintext (No propagation).',
        distinctionAr: 'ميزة امتحانية كبرى: خطأ الإرسال يصيب البت نفسه فقط ولا يسري إلى الكتل التالية أبداً.',
      },
      {
        triggerText: 'Encrypts incrementing counter / parallel processing / high speed throughput',
        triggerTextAr: 'تشفير عداد تصاعدي / معالجة متوازية متزامنة / سرعة فائقة في العتاد',
        concept: 'Counter (CTR) Mode',
        conceptAr: 'نمط العداد (CTR Mode)',
        explanation: 'C_i = P_i XOR E(K, Counter_i). Allows arbitrary parallel encryption/decryption and random access.',
        explanationAr: 'تشفير قيمة العداد ثم دمجها مع النص، ويتيح المعالجة المتوازية لجميع الكتل دفعة واحدة.',
        distinction: 'Fastest mode in modern hardware; counter MUST never be reused with same key.',
        distinctionAr: 'أسرع الأنماط في المعالجات الحديثة؛ ويشترط عدم تكرار قيمة العداد مع نفس المفتاح نهائياً.',
      },
    ],
  },
};

// Smart resolver that matches question to relevant exam clues
export function getExamCluesForQuestion(question: Question): QuestionExamClues {
  const stem = (question.en?.stem || '').toLowerCase();
  const explanation = (question.explanation || '').toLowerCase();
  const qId = question.id.toLowerCase();
  const chapterId = question.chapterId.toLowerCase();

  // 1. Direct Question-specific pattern matching
  if (stem.includes('mode') || stem.includes('ecb') || stem.includes('cbc') || stem.includes('ofb') || stem.includes('cfb') || stem.includes('ctr') || stem.includes('initialization vector')) {
    return conceptExamCluesRegistry['modes-of-operation'];
  }

  if (stem.includes('double des') || stem.includes('triple des') || stem.includes('meet in the middle') || stem.includes('mitm') || stem.includes('2^57') || stem.includes('ede')) {
    return conceptExamCluesRegistry['multiple-des-and-mitm'];
  }

  if (stem.includes('feistel') || stem.includes('s-box') || stem.includes('diffusion') || stem.includes('confusion') || stem.includes('avalanche') || stem.includes('des') || stem.includes('56-bit') || stem.includes('64-bit')) {
    return conceptExamCluesRegistry['feistel-and-des'];
  }

  if (stem.includes('stream') && stem.includes('block')) {
    return conceptExamCluesRegistry['stream-vs-block'];
  }

  if (stem.includes('caesar') || stem.includes('playfair') || stem.includes('hill') || stem.includes('vigenere') || stem.includes('one-time pad') || stem.includes('vernam') || stem.includes('transposition') || stem.includes('monoalphabetic')) {
    return conceptExamCluesRegistry['caesar-and-classical'];
  }

  if (stem.includes('brute-force') || stem.includes('ciphertext only') || stem.includes('known plaintext') || stem.includes('chosen plaintext') || stem.includes('attack involves trying every possible key')) {
    return conceptExamCluesRegistry['attack-types'];
  }

  if (stem.includes('fermat') || stem.includes('euler') || stem.includes('totient') || stem.includes('chinese remainder') || stem.includes('crt') || stem.includes('miller-rabin') || stem.includes('prime')) {
    return conceptExamCluesRegistry['fermat-euler-crt'];
  }

  if (stem.includes('divis') || stem.includes('gcd') || stem.includes('euclidean') || stem.includes('modular') || stem.includes('remainder') || stem.includes('congruen')) {
    return conceptExamCluesRegistry['divisibility-and-euclid'];
  }

  if (stem.includes('active') || stem.includes('passive') || stem.includes('alter system') || stem.includes('eavesdropping') || stem.includes('replay') || stem.includes('masquerade') || stem.includes('traffic analysis')) {
    return conceptExamCluesRegistry['active-vs-passive'];
  }

  if (stem.includes('same key') || stem.includes('two keys') || stem.includes('symmetric') || stem.includes('asymmetric') || stem.includes('conventional') || stem.includes('public-key')) {
    return conceptExamCluesRegistry['symmetric-vs-asymmetric'];
  }

  if (stem.includes('authent') || stem.includes('verifying that users are who they say')) {
    return conceptExamCluesRegistry['authentication'];
  }

  if (stem.includes('integrity') || stem.includes('unauthorized modification') || stem.includes('altered') || stem.includes('tamper')) {
    return conceptExamCluesRegistry['integrity'];
  }

  if (stem.includes('availability') || stem.includes('denial of service') || stem.includes('dos') || stem.includes('disruption')) {
    return conceptExamCluesRegistry['availability'];
  }

  if (stem.includes('nonrepudiation') || stem.includes('non-repudiation') || stem.includes('denying a transmitted message')) {
    return conceptExamCluesRegistry['non-repudiation'];
  }

  if (stem.includes('confidentiality') || stem.includes('unauthorized disclosure') || stem.includes('secrecy')) {
    return conceptExamCluesRegistry['confidentiality'];
  }

  // 2. Chapter fallback
  if (chapterId === 'ch7') {
    return conceptExamCluesRegistry['modes-of-operation'];
  }
  if (chapterId === 'ch4') {
    return conceptExamCluesRegistry['feistel-and-des'];
  }
  if (chapterId === 'ch3') {
    return conceptExamCluesRegistry['caesar-and-classical'];
  }
  if (chapterId === 'ch2') {
    return conceptExamCluesRegistry['divisibility-and-euclid'];
  }

  // Default Chapter 1 fallback
  return conceptExamCluesRegistry['active-vs-passive'];
}

