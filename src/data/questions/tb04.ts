import type { Question } from '../../types';

export const questionsTb04: Question[] = [
  // --- TRUE / FALSE (15 Questions) ---
  {
    id: 'tf-01',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'true-false',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l1',
    en: {
      stem: 'The vast majority of network-based symmetric cryptographic applications make use of stream ciphers.',
      options: ['True', 'False'],
    },
    ar: {
      stem: 'الغالبية العظمى من تطبيقات التشفير المتماثل القائمة على الشبكات تستخدم شفرات التدفق (Stream Ciphers).',
      options: ['صواب', 'خطأ'],
    },
    correctAnswer: 1, // False
    explanation: 'False. The vast majority of network-based symmetric cryptographic applications make use of block ciphers, such as AES and Triple-DES.',
    explanationAr: 'خطأ. الغالبية الساحقة من تطبيقات التشفير المتماثل الشبكية تعتمد على شفرات الكتل (Block Ciphers) مثل AES و 3DES، وليس شفرات التدفق.',
  },
  {
    id: 'tf-02',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'true-false',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: "The Feistel cipher structure, based on Shannon's proposal of 1945, dates back over a quarter of a century and is the structure used by many significant symmetric block ciphers currently in use.",
      options: ['True', 'False'],
    },
    ar: {
      stem: 'بنية تشفير فايستل (Feistel)، المبنية على اقتراح شانون لعام 1945، يعود تاريخها لأكثر من ربع قرن وهي البنية المستخدمة في العديد من شفرات الكتل المتماثلة الهامة المستخدمة حالياً.',
      options: ['صواب', 'خطأ'],
    },
    correctAnswer: 0, // True
    explanation: "True. Feistel cipher structure realizes Claude Shannon's concept of product ciphers (combining substitution and permutation / confusion and diffusion) and is used in DES, Blowfish, RC5, and many others.",
    explanationAr: 'صواب. بنية فايستل تطبق مفهوم شانون لشفرات الضرب (تبادل التعويض والتبديل / الخلط والتشتيت) وهي أساس DES والعديد من الشفرات المتماثلة.',
  },
  {
    id: 'tf-03',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'true-false',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l4',
    en: {
      stem: 'DES uses a 56-bit block and a 64-bit key.',
      options: ['True', 'False'],
    },
    ar: {
      stem: 'تستخدم خوارزمية DES كتلة بيانات بحجم 56 بت ومفتاحاً بحجم 64 بت.',
      options: ['صواب', 'خطأ'],
    },
    correctAnswer: 1, // False
    explanation: 'False. DES uses a 64-bit block size and a 56-bit effective key length (the provided key is 64 bits, but 8 bits are parity bits, resulting in 56 active key bits).',
    explanationAr: 'خطأ. العكس هو الصحيح: حجم كتلة DES هو 64 بت، بينما طول المفتاح الفعلي هو 56 بت (حيث يُدخل مفتاح 64 بت ولكن 8 بتات منها تُستخدم كبتات تحقق من التماثل parity bits).',
  },
  {
    id: 'tf-04',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'true-false',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l1',
    en: {
      stem: 'If the bit-stream generator is a key-controlled algorithm the two users only need to share the generating key and then each can produce the keystream.',
      options: ['True', 'False'],
    },
    ar: {
      stem: 'إذا كان مولد تدفق البتات خوارزمية متحكم بها بواسطة مفتاح، فإن المستخدمين يحتاجان فقط إلى مشاركة مفتاح التوليد وعندها يستطيع كل منهما إنتاج تدفق المفاتيح.',
      options: ['صواب', 'خطأ'],
    },
    correctAnswer: 0, // True
    explanation: 'True. In pseudorandom stream ciphers, the pseudorandom keystream generator produces an identical keystream at both ends when seeded with the same shared secret key.',
    explanationAr: 'صواب. في شفرات التدفق شبه العشوائية، يحتاج الطرفان فقط لتبادل المفتاح السري المشترك لتوليد نفس تدفق المفتاح (keystream) المتطابق في الطرفين.',
  },
  {
    id: 'tf-05',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'true-false',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'A problem with the ideal block cipher using a small block size is that it is vulnerable to a statistical analysis of the plaintext.',
      options: ['True', 'False'],
    },
    ar: {
      stem: 'المشكلة في شفرة الكتلة المثالية (ideal block cipher) عند استخدام حجم كتلة صغير هي أنها تكون عرضة للتحليل الإحصائي للنص الصريح.',
      options: ['صواب', 'خطأ'],
    },
    correctAnswer: 0, // True
    explanation: 'True. If the block size is small (e.g. 4 or 8 bits), an ideal block cipher is equivalent to a classical monoalphabetic substitution cipher, allowing frequency analysis of plaintext blocks.',
    explanationAr: 'صواب. إذا كان حجم الكتلة صغيراً (مثل 4 أو 8 بتات)، فإنها تكافئ تشفير الاستبدال أحادي الأبجدية، مما يجعلها عرضة للتحليل الإحصائي لتردد الكتل.',
  },
  {
    id: 'tf-06',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'true-false',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'Confusion seeks to make the statistical relationship between the plaintext and ciphertext as complex as possible in order to thwart attempts to deduce the key.',
      options: ['True', 'False'],
    },
    ar: {
      stem: 'يسعى الخلط (Confusion) إلى جعل العلاقة الإحصائية بين النص المشفر ومفتاح التشفير معقدة قدر الإمكان لإحباط محاولات استنتاج المفتاح.',
      options: ['صواب', 'خطأ'],
    },
    correctAnswer: 0, // True
    explanation: 'True. Shannon defined confusion as making the relationship between the encryption key and the ciphertext statistics as complex as possible.',
    explanationAr: 'صواب. الخلط (Confusion) يهدف لجعل العلاقة الإحصائية بين المفتاح والنص المشفر في غاية التعقيد لمنع المهاجم من استنتاج المفتاح.',
  },
  {
    id: 'tf-07',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'true-false',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'All other things being equal, smaller block sizes mean greater security.',
      options: ['True', 'False'],
    },
    ar: {
      stem: 'مع تساوي جميع العوامل الأخرى، فإن أحجام الكتل الأصغر تعني أماناً أكبر.',
      options: ['صواب', 'خطأ'],
    },
    correctAnswer: 1, // False
    explanation: 'False. Larger block sizes mean greater security (but at the expense of reduced encryption/decryption speed). 64 bits was historical standard; modern standard is 128 bits.',
    explanationAr: 'خطأ. الكتل الأكبر حجماً توفر أماناً أكبر (على حساب سرعة المعالجة). الحجم القياسي المعاصر هو 128 بت بدلاً من 64 بت.',
  },
  {
    id: 'tf-08',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'true-false',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l5',
    en: {
      stem: 'Greater complexity in the subkey generation algorithm should lead to greater difficulty of cryptanalysis.',
      options: ['True', 'False'],
    },
    ar: {
      stem: 'التعقيد الأكبر في خوارزمية توليد المفاتيح الفرعية (subkey generation) يؤدي إلى صعوبة أكبر في تحليل الشفرة.',
      options: ['صواب', 'خطأ'],
    },
    correctAnswer: 0, // True
    explanation: 'True. In Feistel design principles, a complex key schedule makes it much harder for cryptanalysts to deduce the master key or exploit subkey symmetries.',
    explanationAr: 'صواب. زيادة تعقيد جدولة المفاتيح الفرعية تزيد من مناعة النظام ضد هجمات تحليل الشفرات واستغلال التناظرات.',
  },
  {
    id: 'tf-09',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'true-false',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'Fast software encryption/decryption and ease of analysis are two considerations in the design of a Feistel cipher.',
      options: ['True', 'False'],
    },
    ar: {
      stem: 'سرعة التشفير/فك التشفير برمجياً وسهولة التحليل هما اعتباران هامان في تصميم شفرة فايستل.',
      options: ['صواب', 'خطأ'],
    },
    correctAnswer: 0, // True
    explanation: 'True. Feistel cipher design considerations explicitly include: fast software encryption/decryption, ease of analysis (to prove cryptographic strength), large block size, key size, and number of rounds.',
    explanationAr: 'صواب. اعتبارات تصميم فايستل تشمل السرعة البرمجية وسهولة التحليل الرياضي للتحقق من قوة الشفرة وعدم وجود ثغرات خفية.',
  },
  {
    id: 'tf-10',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'true-false',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l4',
    en: {
      stem: 'A prime concern with DES has been its vulnerability to brute-force attack because of its relatively short key length.',
      options: ['True', 'False'],
    },
    ar: {
      stem: 'كان القلق الأساسي بشأن DES هو قابليته للتأثر بهجمات القوة الغاشمة (Brute-Force) بسبب قصر طول المفتاح نسبياً.',
      options: ['صواب', 'خطأ'],
    },
    correctAnswer: 0, // True
    explanation: 'True. A 56-bit key provides 2^56 ≈ 7.2 × 10^16 possible keys, which was proven vulnerable to brute-force in 1998 by the EFF DES Cracker in under 3 days.',
    explanationAr: 'صواب. المفتاح بطول 56 بت (حوالي 72 كوادريليون احتمال) أصبح عرضة للكسر بالبحث الشامل في غضون أيام وساعات باستخدام عتاد مخصص.',
  },
  {
    id: 'tf-11',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'true-false',
    difficulty: 'hard',
    relatedLessonId: 'ch4-l6',
    en: {
      stem: 'One criteria for an S-box is: "If two inputs to an S-box differ in exactly one bit, the outputs must also differ in exactly one bit."',
      options: ['True', 'False'],
    },
    ar: {
      stem: 'أحد معايير صناديق S-box هو: "إذا اختلف مدخلان لصندوق S-box في بت واحد بالضبط، فيجب أن يختلف المخرجان في بت واحد بالضبط أيضاً".',
      options: ['صواب', 'خطأ'],
    },
    correctAnswer: 1, // False
    explanation: 'False. S-boxes are designed to maximize non-linearity and diffusion. If two inputs differ by 1 bit, the outputs must differ by AT LEAST two bits (Strict Avalanche Criterion requires outputs to change with probability 0.5).',
    explanationAr: 'خطأ. معيار تصميم S-box ينص على أنه إذا اختلف الإدخال في بت واحد، يجب أن يختلف الإخراج في بتين على الأقل (وليس بت واحد)، تحقيقاً لخاصية الانهيار والتشتيت غير الخطي.',
  },
  {
    id: 'tf-12',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'true-false',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l6',
    en: {
      stem: 'The heart of a Feistel block cipher is the function F, which relies on the use of S-boxes.',
      options: ['True', 'False'],
    },
    ar: {
      stem: 'قلب شفرة كتلة فايستل هو الدالة F، والتي تعتمد على استخدام صناديق الاستبدال (S-boxes).',
      options: ['صواب', 'خطأ'],
    },
    correctAnswer: 0, // True
    explanation: 'True. The round function F provides the non-linear confusion element in a Feistel cipher, and its non-linearity is provided by the S-boxes.',
    explanationAr: 'صواب. الدالة F هي جوهر شفرة فايستل لأنها العنصر الوحيد غير الخطي (الذي يوفر الخلط Confusion) بالاعتماد المباشر على S-boxes.',
  },
  {
    id: 'tf-13',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'true-false',
    difficulty: 'hard',
    relatedLessonId: 'ch4-l7',
    en: {
      stem: 'The strict avalanche criterion and the bit independence criterion appear to weaken the effectiveness of the confusion function.',
      options: ['True', 'False'],
    },
    ar: {
      stem: 'يبدو أن معيار الانهيار الصارم (SAC) ومعيار استقلالية البتات (BIC) يضعفان من فعالية دالة الخلط (Confusion).',
      options: ['صواب', 'خطأ'],
    },
    correctAnswer: 1, // False
    explanation: 'False. SAC and BIC strengthen the confusion and diffusion effectiveness of S-boxes and the overall cipher.',
    explanationAr: 'خطأ. معيارا SAC و BIC يعززان ويقويان دالة الخلط والتشتيت، ويضمنان عدم وجود علاقات إحصائية خطية بين بتات الإدخال والإخراج.',
  },
  {
    id: 'tf-14',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'true-false',
    difficulty: 'hard',
    relatedLessonId: 'ch4-l6',
    en: {
      stem: 'An advantage of key-dependent S-boxes is that because they are not fixed, it is impossible to analyze the S-boxes ahead of time to look for weaknesses.',
      options: ['True', 'False'],
    },
    ar: {
      stem: 'من مزايا صناديق S-box المعتمدة على المفتاح (key-dependent) أنه نظراً لكونها غير ثابتة، يستحيل تحليل صناديق S-box مسبقاً للبحث عن نقاط ضعف.',
      options: ['صواب', 'خطأ'],
    },
    correctAnswer: 0, // True
    explanation: 'True. Key-dependent S-boxes (like in Blowfish or CAST-128) vary with each key, preventing pre-computed differential or linear cryptanalysis attacks against fixed tables.',
    explanationAr: 'صواب. عندما تتولد صناديق S-box ديناميكياً من المفتاح، لا يمكن للمهاجم تحليل الجداول ثنائية الأبعاد مسبقاً لهندسة هجمات تفاضلية جاهزة.',
  },
  {
    id: 'tf-15',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'true-false',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l6',
    en: {
      stem: 'The key schedule algorithm is more popular and has received more attention than S-box design.',
      options: ['True', 'False'],
    },
    ar: {
      stem: 'خوارزمية جدولة المفاتيح أكثر شعبية وحظيت باهتمام بحثي أكبر مقارنة بتصميم صناديق S-box.',
      options: ['صواب', 'خطأ'],
    },
    correctAnswer: 1, // False
    explanation: 'False. S-box design has received far more intense research and attention than key schedule algorithms, because S-boxes supply the vital non-linearity of the cipher.',
    explanationAr: 'خطأ. تصميم صناديق S-box نال الحصة الأكبر والأعمق من الأبحاث في تاريخ التشفير المتماثل مقارنة بجدولة المفاتيح، لأنها مصدر اللاخطية الوحيد.',
  },

  // --- MULTIPLE CHOICE (15 Questions) ---
  {
    id: 'mc-01',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'multiple-choice',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l4',
    en: {
      stem: 'DES exhibits the classic __________ block cipher structure, which consists of a number of identical rounds of processing.',
      options: ['Feistel', 'SAC', 'Shannon', 'Rendell'],
    },
    ar: {
      stem: 'تتميز خوارزمية DES ببنية شفرة الكتل الكلاسيكية من طراز __________، والتي تتكون من عدد من الجولات المتطابقة.',
      options: ['فايستل (Feistel)', 'معيار الانهيار (SAC)', 'شانون (Shannon)', 'ريندل (Rendell)'],
    },
    correctAnswer: 0, // Feistel
    explanation: 'DES is a 16-round Feistel cipher structure where each round processes half the data with function F and swaps halves.',
    explanationAr: 'تتبع DES بنية فايستل (Feistel) المكونة من 16 جولة متطابقة تعتمد على تقسيم الكتلة لنصفين وتطبيق دالة الجولة والتبديل.',
  },
  {
    id: 'mc-02',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'multiple-choice',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'A sequence of plaintext elements is replaced by a __________ of that sequence which means that no elements are added, deleted or replaced in the sequence, but rather the order in which the elements appear in the sequence is changed.',
      options: ['permutation', 'diffusion', 'stream', 'substitution'],
    },
    ar: {
      stem: 'يتم استبدال متتالية من عناصر النص الصريح بـ __________ لتلك المتتالية، مما يعني عدم إضافة أو حذف أو تبديل أي عنصر، وإنما يتم تغيير ترتيب ظهور العناصر فقط.',
      options: ['تبديل الموضع (permutation)', 'تشتيت (diffusion)', 'تدفق (stream)', 'تعويض (substitution)'],
    },
    correctAnswer: 0, // permutation
    explanation: 'A permutation rearranges the positions of elements without changing their identity or introducing new elements.',
    explanationAr: 'التبديل (Permutation/Transposition) يعيد ترتيب مواضع الرموز أو البتات دون تغيير قيمتها أو إدخال قيم جديدة.',
  },
  {
    id: 'mc-03',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'multiple-choice',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l1',
    en: {
      stem: 'A __________ cipher is one that encrypts a digital data stream one bit or one byte at a time.',
      options: ['product', 'block', 'key', 'stream'],
    },
    ar: {
      stem: 'شفرة __________ هي التي تشفر تدفق البيانات الرقمية بت واحد أو بايت واحد في كل مرة.',
      options: ['الضرب (product)', 'الكتلة (block)', 'المفتاح (key)', 'التدفق (stream)'],
    },
    correctAnswer: 3, // stream
    explanation: 'A stream cipher processes continuous input elements bit-by-bit or byte-by-byte, XORing each with a keystream digit.',
    explanationAr: 'شفرة التدفق (Stream Cipher) تعالج البيانات عنصراً بعنصر (بت أو بايت) بالتسلسل عن طريق عملية XOR مع تدفق المفتاح.',
  },
  {
    id: 'mc-04',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'multiple-choice',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'The vast majority of network-based symmetric cryptographic applications make use of ________ ciphers.',
      options: ['linear', 'block', 'permutation', 'stream'],
    },
    ar: {
      stem: 'تعتمد الغالبية العظمى من تطبيقات التشفير المتماثل الشبكية على شفرات ________ .',
      options: ['الخطية (linear)', 'الكتل (block)', 'التبديل (permutation)', 'التدفق (stream)'],
    },
    correctAnswer: 1, // block
    explanation: 'Block ciphers (e.g. AES, 3DES) are the fundamental workhorse of modern network protocols (TLS, IPsec, SSH).',
    explanationAr: 'شفرات الكتل (Block ciphers) تمثل الأساس لمعظم بروتوكولات تأمين الشبكات مثل TLS و IPsec.',
  },
  {
    id: 'mc-05',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'multiple-choice',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'A __________ cipher is one in which a block of plaintext is treated as a whole and used to produce a ciphertext block of equal length.',
      options: ['bit', 'product', 'stream', 'block'],
    },
    ar: {
      stem: 'شفرة __________ هي التي يتم فيها التعامل مع كتلة من النص الصريح ككل متكامل لإنتاج كتلة نص مشفر ذات طول مساوٍ.',
      options: ['البت (bit)', 'الضرب (product)', 'التدفق (stream)', 'الكتلة (block)'],
    },
    correctAnswer: 3, // block
    explanation: 'Definition of a block cipher: plaintext is divided into fixed-size blocks (e.g., 64 or 128 bits) and each is encrypted into an equal-length ciphertext block.',
    explanationAr: 'تعريف شفرة الكتلة: يتم تقسيم النص لكتل ذات حجم محدد (مثل 64 أو 128 بت) وتشفر كل كتلة كوحدة واحدة لإنتاج كتلة مشفرة بنفس الحجم.',
  },
  {
    id: 'mc-06',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'multiple-choice',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: '__________ is when each plaintext element or group of elements is uniquely replaced by a corresponding ciphertext element or group of elements.',
      options: ['Substitution', 'Diffusion', 'Streaming', 'Permutation'],
    },
    ar: {
      stem: '__________ هو استبدال كل عنصر أو مجموعة عناصر من النص الصريح بعنصر أو مجموعة عناصر مقابلة في النص المشفر بشكل فريد.',
      options: ['التعويض (Substitution)', 'التشتيت (Diffusion)', 'التدفق (Streaming)', 'التبديل (Permutation)'],
    },
    correctAnswer: 0, // Substitution
    explanation: 'Substitution replaces plaintext symbols with ciphertext symbols while retaining their original sequence order.',
    explanationAr: 'التعويض (Substitution) يستبدل كل رمز أو بت برمز أو بت آخر وفق خريطة تشفير محددة.',
  },
  {
    id: 'mc-07',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'multiple-choice',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'Key sizes of __________ or less are now considered to be inadequate.',
      options: ['128 bits', '32 bits', '16 bits', '64 bits'],
    },
    ar: {
      stem: 'تعتبر أطوال المفاتيح البالغة __________ أو أقل غير كافية أمنياً في الوقت الحالي.',
      options: ['128 بت', '32 بت', '16 بت', '64 بت'],
    },
    correctAnswer: 3, // 64 bits
    explanation: 'Key sizes of 64 bits or less (such as DES 56-bit) can be cracked by brute-force attacks with specialized modern hardware.',
    explanationAr: 'أطوال المفاتيح التي تبلغ 64 بت أو أقل (مثل مفتاح DES ذي الـ 56 بت) تعتبر غير كافية ويمكن كسرها بالقوة الغاشمة.',
  },
  {
    id: 'mc-08',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'multiple-choice',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'Feistel proposed that we can approximate the ideal block cipher by utilizing the concept of a __________ cipher, which is the execution of two or more simple ciphers in sequence in such a way that the final result or product is cryptographically stronger than any of the component ciphers.',
      options: ['linear', 'permutation', 'differential', 'product'],
    },
    ar: {
      stem: 'اقترح فايستل إمكانية التقريب لشفرة الكتلة المثالية باستخدام مفهوم شفرة __________، وهي تنفيذ شفرتين بسيطتين أو أكثر على التوالي بحيث يكون الناتج النهائي أقوى تشفيرياً من أي شفرة مفردة.',
      options: ['الخطية (linear)', 'التبديل (permutation)', 'التفاضلية (differential)', 'الضرب (product)'],
    },
    correctAnswer: 3, // product
    explanation: 'Claude Shannon introduced "Product Ciphers" which alternate substitution and permutation. Feistel practicalized this concept.',
    explanationAr: 'شفرة الضرب (Product Cipher) تدمج شفرات تعويض وتبديل متعاقبة بحيث تصبح النتيجة النهائية عصية على التحليل الإحصائي.',
  },
  {
    id: 'mc-09',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'multiple-choice',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l6',
    en: {
      stem: 'The criteria used in the design of the __________ focused on the design of the S-boxes and on the P function that takes the output of the S-boxes.',
      options: ['Avalanche Attack', 'Data Encryption Standard', 'Product Cipher', 'Substitution Key'],
    },
    ar: {
      stem: 'المعايير المستخدمة في تصميم __________ ركزت بشكل أساسي على تصميم صناديق S-boxes والدالة P التي تأخذ مخرجاتها.',
      options: ['هجوم الانهيار', 'معيار تشفير البيانات (DES)', 'شفرة الضرب', 'مفتاح الاستبدال'],
    },
    correctAnswer: 1, // Data Encryption Standard
    explanation: 'The NSA and IBM criteria used in designing the Data Encryption Standard (DES) focused strictly on S-box non-linearity and P-box permutation diffusion.',
    explanationAr: 'معايير تصميم معيار تشفير البيانات (DES) ركزت تحديداً على معايير صارمة في بناء S-boxes ومصفوفة التبديل P-box لمنع كسر الشفرة.',
  },
  {
    id: 'mc-10',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'multiple-choice',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'The greater the number of rounds, the __________ it is to perform cryptanalysis.',
      options: ['easier', 'less difficult', 'equally difficult', 'harder'],
    },
    ar: {
      stem: 'كلما زاد عدد الجولات، كلما كان تحليل الشفرة (cryptanalysis) __________ .',
      options: ['أسهل', 'أقل صعوبة', 'متساوي الصعوبة', 'أكثر صعوبة (أصعب)'],
    },
    correctAnswer: 3, // harder
    explanation: 'More rounds increase confusion and diffusion exponentially, making differential and linear cryptanalysis exponentially harder.',
    explanationAr: 'زيادة عدد جولات التشفير تزيد من تعقيد العلاقات الرياضية وتجعل تحليل الشفرة واستخراج المفتاح أصعب بكثير.',
  },
  {
    id: 'mc-11',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'multiple-choice',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'The function F provides the element of __________ in a Feistel cipher.',
      options: ['clarification', 'alignment', 'confusion', 'stability'],
    },
    ar: {
      stem: 'توفر الدالة F عنصر __________ في شفرة فايستل.',
      options: ['التوضيح (clarification)', 'المحاذاة (alignment)', 'الخلط (confusion)', 'الاستقرار (stability)'],
    },
    correctAnswer: 2, // confusion
    explanation: 'The round function F uses non-linear S-boxes to provide confusion (obscuring the relationship between plaintext and key).',
    explanationAr: 'الدالة F توفر عنصر الخلط (Confusion) عبر استبدالات غير خطية معقدة بالاعتماد على صناديق S-boxes والمفتاح الفرعي.',
  },
  {
    id: 'mc-12',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'multiple-choice',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l4',
    en: {
      stem: 'One of the most intense areas of research in the field of symmetric block ciphers is __________ design.',
      options: ['S-box', 'F-box', 'E-box', 'D-box'],
    },
    ar: {
      stem: 'أحد أكثر مجالات البحث كثافة في مجال شفرات الكتل المتماثلة هو تصميم __________ .',
      options: ['صناديق S-box', 'صناديق F-box', 'صناديق التوسيع E-box', 'صناديق D-box'],
    },
    correctAnswer: 0, // S-box
    explanation: 'S-box (Substitution Box) design is the primary research frontier because it provides the only non-linear component in block ciphers.',
    explanationAr: 'تصميم صناديق الاستبدال (S-boxes) نال النصيب الأكبر من الأبحاث نظراً لأنه المكون غير الخطي الوحيد الذي يقف سداً أمام الهجمات الرياضية.',
  },
  {
    id: 'mc-13',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'multiple-choice',
    difficulty: 'hard',
    relatedLessonId: 'ch4-l8',
    en: {
      stem: 'Mister and Adams proposed that all linear combinations of S-box columns should be _________ which are a special class of Boolean functions that are highly nonlinear according to certain mathematical criteria.',
      options: ['horizontal functions', 'angular functions', 'bent functions', 'vertical functions'],
    },
    ar: {
      stem: 'اقترح مستر وآدامز (Mister and Adams) أن تكون جميع التركيبات الخطية لأعمدة S-box عبارة عن _________، وهي فئة خاصة من الدوال البولية (Boolean functions) شديدة اللاخطية وفقاً لمعايير رياضية محددة.',
      options: ['دوال أفقية', 'دوال زاوية', 'دوال منحنية (bent functions)', 'دوال عمودية'],
    },
    correctAnswer: 2, // bent functions
    explanation: 'Bent functions are Boolean functions whose Walsh transform is flat, maximizing distance from all affine functions and resisting linear cryptanalysis.',
    explanationAr: 'الدوال المنحنية (Bent functions) هي دوال بوليانية تحقق أقصى درجات اللاخطية وتبتعد لأقصى حد عن الدوال الخطية مما يحصنها ضد التحليل الخطي.',
  },
  {
    id: 'mc-14',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'multiple-choice',
    difficulty: 'hard',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'The Nyberg approach that is more or less a manual approach with only simple mathematics to support it is __________ .',
      options: ['human-made', 'random', 'math-made', 'random with testing'],
    },
    ar: {
      stem: 'منهج نايبرغ (Nyberg approach) الذي يعتبر إلى حد ما منهجاً يدوياً مدعوماً برياضيات بسيطة فقط هو __________ .',
      options: ['صنع بشري (human-made)', 'عشوائي (random)', 'صنع رياضي (math-made)', 'عشوائي مع الاختبار (random with testing)'],
    },
    correctAnswer: 3, // random with testing
    explanation: 'Nyberg classified S-box generation into: random, random with testing, human-made, and math-made. Random with testing generates random entries and tests for criteria (SAC, non-linearity).',
    explanationAr: 'صنفت نايبرغ طرق بناء S-box، والمنهج المسمى "عشوائي مع الاختبار" (random with testing) يعتمد على توليد جداول عشوائية ثم فحص استيفائها للشروط يدوياً/برمجياً.',
  },
  {
    id: 'mc-15',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'multiple-choice',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'Allowing for the maximum number of possible encryption mappings from the plaintext block is referred to by Feistel as the __________ .',
      options: ['ideal substitution cipher', 'round function', 'ideal block cipher', 'diffusion cipher'],
    },
    ar: {
      stem: 'السماح بالحد الأقصى الممكن من تعيينات التشفير لكتلة النص الصريح هو ما أطلق عليه فايستل اسم __________ .',
      options: ['شفرة الاستبدال المثالية', 'دالة الجولة', 'شفرة الكتلة المثالية (ideal block cipher)', 'شفرة التشتيت'],
    },
    correctAnswer: 2, // ideal block cipher
    explanation: 'An ideal block cipher allows any of the (2^n)! reversible mappings for an n-bit block, maximizing entropy but requiring an infeasible key size of n·2^n bits.',
    explanationAr: 'شفرة الكتلة المثالية (Ideal block cipher) تسمح بجميع التبديلات الممكنة لكتلة بطول n بت (أي !2ⁿ تبديل)، وهو النموذج النظري الأمثل الذي تقارن به الشفرات.',
  },

  // --- SHORT ANSWER (15 Questions) ---
  {
    id: 'sa-01',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'short-answer',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l3',
    en: {
      stem: 'A __________ Cipher is an encryption/decryption scheme in which a block of plaintext is treated as a whole and used to produce a ciphertext block of equal length.',
    },
    ar: {
      stem: 'شفرة __________ هي مخطط تشفير/فك تشفير يتم فيه التعامل مع كتلة من النص الصريح ككل متكامل لإنتاج كتلة نص مشفر ذات طول مساوٍ.',
    },
    correctAnswer: 'Block',
    explanation: 'A Block Cipher encrypts data in fixed-size blocks (e.g. 64 or 128 bits) as whole units.',
    explanationAr: 'شفرة الكتلة (Block Cipher) تعالج البيانات في كتل ثابتة الحجم كوحدة واحدة.',
  },
  {
    id: 'sa-02',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'short-answer',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: '__________ seeks to make the relationship between the statistics of the ciphertext and the value of the encryption key as complex as possible so that even if the attacker can get some handle on the statistics of the ciphertext, the way in which the key was used to produce that ciphertext is so complex it is difficult to deduce the key.',
    },
    ar: {
      stem: 'يسعى __________ إلى جعل العلاقة بين إحصائيات النص المشفر وقيمة مفتاح التشفير معقدة قدر الإمكان بحيث يصعب استنتاج المفتاح حتى لو حصل المهاجم على إحصائيات النص المشفر.',
    },
    correctAnswer: 'Confusion',
    explanation: 'Confusion obscures the connection between the ciphertext and key (typically achieved via complex substitution / S-boxes).',
    explanationAr: 'الخلط (Confusion) يخفي العلاقة الإحصائية بين مفتاح التشفير وكتل النص المشفر.',
  },
  {
    id: 'sa-03',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'short-answer',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: "Many block ciphers have a __________ structure which consists of a number of identical rounds of processing and in each round a substitution is performed on one half of the data being processed, followed by a permutation that interchanges the two halves.",
    },
    ar: {
      stem: 'تحتوي العديد من شفرات الكتل على بنية __________ التي تتكون من عدد من الجولات المتطابقة، وفي كل جولة يتم إجراء استبدال على أحد نصفي البيانات يليه تبديل بين النصفين.',
    },
    correctAnswer: 'Feistel',
    explanation: 'The Feistel structure splits the block into left and right halves, applies round function F to one half with a subkey, XORs with the other half, and swaps halves.',
    explanationAr: 'بنية فايستل (Feistel) تقسم الكتلة لنصفين وتنفذ دورات تعويض وتبديل متعاقبة.',
  },
  {
    id: 'sa-04',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'short-answer',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: "Feistel is a practical application of a proposal by Claude Shannon to develop a product cipher that alternates confusion and __________ functions.",
    },
    ar: {
      stem: 'تعتبر بنية فايستل تطبيقاً عملياً لاقتراح كلود شانون لتطوير شفرة ضرب تتناوب فيها دوال الخلط (Confusion) ودوال __________ .',
    },
    correctAnswer: 'diffusion',
    explanation: 'Shannon proposed alternating confusion (substitution) and diffusion (permutation) functions in product ciphers.',
    explanationAr: 'شانون اقترح شفرات الضرب التي تتبادل فيها دوال الخلط (Confusion) ودوال التشتيت (Diffusion).',
  },
  {
    id: 'sa-05',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'short-answer',
    difficulty: 'hard',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'The guaranteed __________ criterion is defined as: "An S-box satisfies GA of order y if, for a 1-bit input change, at least y output bits change."',
    },
    ar: {
      stem: 'يُعرَّف معيار __________ المضمون (Guaranteed GA) بأنه: "يستوفي صندوق S-box معيار GA من الرتبة y إذا أدى تغيير بت واحد في الإدخال إلى تغيير y من بتات الإخراج على الأقل".',
    },
    correctAnswer: 'avalanche',
    explanation: 'Guaranteed Avalanche (GA) criterion ensures minimum number of bit flips in the output upon a single input bit change.',
    explanationAr: 'معيار الانهيار المضمون (Guaranteed Avalanche Criterion) يضمن تغيراً أدنى من بتات الإخراج عند تغيير بت إدخال واحد.',
  },
  {
    id: 'sa-06',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'short-answer',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'In __________ the statistical structure of the plaintext is dissipated into long-range statistics of the ciphertext. This is achieved by having each plaintext digit affect the value of many ciphertext digits.',
    },
    ar: {
      stem: 'في __________ تتبدد البنية الإحصائية للنص الصريح في إحصائيات واسعة المدى للنص المشفر، ويتحقق ذلك من خلال جعل كل رمز صريح يؤثر على قيم العديد من رموز النص المشفر.',
    },
    correctAnswer: 'diffusion',
    explanation: 'Diffusion spreads out the influence of individual plaintext symbols across the entire ciphertext block.',
    explanationAr: 'التشتيت (Diffusion) ينشر تأثير كل بت أو رمز من النص الصريح على مساحة واسعة من النص المشفر.',
  },
  {
    id: 'sa-07',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'short-answer',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'The most widely used encryption scheme is based on the __________ adopted in 1977 by the National Bureau of Standards as Federal Information Processing Standard 46.',
    },
    ar: {
      stem: 'اعتمد أكثر أنظمة التشفير استخداماً في التاريخ على __________ الذي تم تبنيه عام 1977 من قِبل المكتب الوطني للمعايير كمعيار فيدرالي لمعالجة المعلومات FIPS 46.',
    },
    correctAnswer: 'DES',
    explanation: 'DES (Data Encryption Standard) was adopted as FIPS 46 in 1977.',
    explanationAr: 'معيار تشفير البيانات DES اعتمد كمعيار FIPS 46 في عام 1977.',
  },
  {
    id: 'sa-08',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'short-answer',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'A change in one bit of the plaintext or one bit of the key should produce a change in many bits of the ciphertext. This is referred to as the __________ effect.',
    },
    ar: {
      stem: 'يجب أن يؤدي التغيير في بت واحد من النص الصريح أو بت واحد من المفتاح إلى تغيير في العديد من بتات النص المشفر. يُشار إلى هذا باسم تأثير __________ .',
    },
    correctAnswer: 'avalanche',
    explanation: 'The Avalanche Effect requires that a small change in input produces a catastrophic, pseudo-random change in output (ideally ~50% of bits change).',
    explanationAr: 'تأثير الانهيار (Avalanche effect) يعني أن تغييراً طفيفاً في المدخلات يولد تغيراً كبيراً وشبه عشوائي في المخرجات.',
  },
  {
    id: 'sa-09',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'short-answer',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l4',
    en: {
      stem: 'Two areas of concern regarding the level of security provided by DES are the nature of the algorithm and the __________ .',
    },
    ar: {
      stem: 'مجالان من مجالات القلق فيما يتعلق بمستوى الأمان الذي يوفره DES هما طبيعة الخوارزمية و __________ .',
    },
    correctAnswer: 'key size',
    explanation: 'The primary vulnerabilities of DES were its short 56-bit key size and potential hidden backdoors in its classified S-boxes.',
    explanationAr: 'القلق الرئيسي حول DES كان يتركز على حجم المفتاح (56 بت) وطبيعة الخوارزمية وتصميم S-boxes.',
  },
  {
    id: 'sa-10',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'short-answer',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l3',
    en: {
      stem: 'A __________ attack exploits the fact that an encryption or decryption algorithm often takes slightly different amounts of time on different inputs.',
    },
    ar: {
      stem: 'يستغل هجوم __________ حقيقة أن خوارزمية التشفير أو فك التشفير تستغرق غالباً مقادير مختلفة قليلاً من الوقت مع المدخلات المختلفة.',
    },
    correctAnswer: 'timing',
    explanation: 'A timing attack is a side-channel attack that deduces secret keys by measuring the exact computational execution time.',
    explanationAr: 'هجوم التوقيت (Timing attack) هو هجوم عبر القنوات الجانبية يقيس زمن التنفيذ الدقيق لاستنتاج بتات المفتاح.',
  },
  {
    id: 'sa-11',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'short-answer',
    difficulty: 'hard',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: 'The __________ criterion states that output bits j and k should change independently when any single input bit i is inverted for all i, j and k.',
    },
    ar: {
      stem: 'ينص معيار __________ على أن بتي الإخراج j و k يجب أن يتغيرا بشكل مستقل عن بعضهما عند قلب أي بت إدخال مفرد i، وذلك لجميع قيم i و j و k.',
    },
    correctAnswer: 'BIC',
    explanation: 'The Bit Independence Criterion (BIC) ensures that output bits do not exhibit pairwise statistical dependence upon input bit flips.',
    explanationAr: 'معيار استقلالية البتات (Bit Independence Criterion - BIC) يضمن عدم وجود ترابط إحصائي بين أي زوج من بتات الإخراج.',
  },
  {
    id: 'sa-12',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'short-answer',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l2',
    en: {
      stem: "The __________ cipher structure, which dates back over a quarter century and which, in turn, is based on Shannon's proposal of 1945, is the structure used by many significant symmetric block ciphers currently in use.",
    },
    ar: {
      stem: 'بنية تشفير __________، التي يعود تاريخها لأكثر من ربع قرن والمبنية بدورها على اقتراح شانون لعام 1945، هي البنية المستخدمة في العديد من شفرات الكتل المتماثلة الهامة حالياً.',
    },
    correctAnswer: 'Feistel',
    explanation: 'Feistel cipher structure named after Horst Feistel of IBM.',
    explanationAr: 'بنية فايستل (Feistel) المبتكرة من قِبل هورست فايستل في شركة IBM.',
  },
  {
    id: 'sa-13',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'short-answer',
    difficulty: 'medium',
    relatedLessonId: 'ch4-l5',
    en: {
      stem: 'The cryptographic strength of a Feistel cipher derives from three aspects of the design: the function F, the key schedule algorithm, and the __________ .',
    },
    ar: {
      stem: 'تستمد القوة التشفيرية لشفرة فايستل من ثلاثة جوانب في التصميم: الدالة F، وخوارزمية جدولة المفاتيح، و __________ .',
    },
    correctAnswer: 'number of rounds',
    explanation: 'Feistel cryptographic strength stems from: function F, key schedule, and the number of rounds (e.g. 16 rounds in DES).',
    explanationAr: 'قوة فايستل تستند إلى: دالة الجولة F، وخوارزمية جدولة المفاتيح، وعدد الجولات (Number of rounds).',
  },
  {
    id: 'sa-14',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'short-answer',
    difficulty: 'hard',
    relatedLessonId: 'ch4-l6',
    en: {
      stem: 'The __________ criterion states that any output bit j of an S-box should change with probability 1/2 when any single input bit i is inverted for all i,j.',
    },
    ar: {
      stem: 'ينص معيار __________ على أن أي بت إخراج j في صندوق S-box يجب أن يتغير باحتمالية 1/2 عند قلب أي بت إدخال مفرد i، وذلك لجميع قيم i و j.',
    },
    correctAnswer: 'SAC',
    explanation: 'The Strict Avalanche Criterion (SAC) requires that each output bit flips with exactly p = 0.5 when any single input bit is flipped.',
    explanationAr: 'معيار الانهيار الصارم (Strict Avalanche Criterion - SAC) يفرض تغير بت الإخراج باحتمال النصف بالضبط (1/2) عند عكس أي بت إدخال.',
  },
  {
    id: 'sa-15',
    chapterId: 'ch4',
    source: 'tb04',
    type: 'short-answer',
    difficulty: 'easy',
    relatedLessonId: 'ch4-l4',
    en: {
      stem: 'Two alternatives to DES are AES and __________ .',
    },
    ar: {
      stem: 'بديلان رئيسيان لـ DES هما AES و __________ .',
    },
    correctAnswer: 'Triple DES',
    explanation: 'Triple DES (3DES) and the Advanced Encryption Standard (AES) replaced single DES.',
    explanationAr: 'البديلان القياسيان لـ DES هما Triple DES (3DES) و AES.',
  },
];

