# EDU — Semantic Highlighting Coverage by Chapter & Concept

This document details the complete coverage of semantic highlighting rules across all curriculum chapters and learning modules. Every rule is engineered to highlight phrases that **determine student comprehension or exam answer accuracy**.

---

## 1. Summary of Coverage

| Chapter | Topic Focus | Rules (EN + AR) | Primary Semantic Roles |
|---|---|---:|---|
| **Chapter 1** | Attacks, Services, Mechanisms, CIA Triad | 52 rules (26 pairs) | Definitions, Scopes, Actions, Distinctions |
| **Chapter 2** | Number Theory, Inverses, Primes, CRT | 18 rules (9 pairs) | Conditions, Exceptions, Algebraic Actions |
| **Chapter 3** | Classical Ciphers (Caesar, Playfair, Hill, OTP) | 20 rules (10 pairs) | Frequency Distinctions, Matrix Conditions |
| **Chapter 4** | Block Ciphers, Stream Ciphers, DES, Feistel | 14 rules (7 pairs) | Block vs Stream, Shannon Diffusion/Confusion |
| **Chapter 7** | Double/Triple DES, Modes (ECB, CBC, CFB, OFB, CTR) | 22 rules (11 pairs) | Mode Vulnerabilities, Padding, IV Conditions |
| **Total** | **All 5 Core Syllabus Chapters** | **126 Curated Rules** | **Zero False-Positive Single Words** |

---

## 2. Chapter 1: Security Attacks, Services & Mechanisms

| English Semantic Phrase | Arabic Semantic Phrase | Role | Concept Association | Exam Significance |
|---|---|---|---|---|
| `single shared secret key` | `مفتاح سري واحد مشترك` | `concept` | Symmetric Encryption | Fundamental definition: distinguishes from 2-key asymmetric systems. |
| `both encryption and decryption` | `للتشفير وفك التشفير` | `action` | Symmetric Encryption | Operational identity: same key reverses the cipher. |
| `mathematically linked key pair` | `زوج مفاتيح مرتبط رياضياً` | `concept` | Asymmetric Encryption | Core public-key definition: two distinct, mathematically connected keys. |
| `public key for encryption/verification` | `مفتاح عام للتشفير والتحقق` | `action` | Public Key Cryptography | Defines the open operational role of the public key. |
| `private key for decryption/signing` | `مفتاح خاص لفك التشفير أو التوقيع` | `action` | Private Key Cryptography | Defines the secret operational role of the private key. |
| `data of ANY size` | `بيانات بأي حجم` | `distinction` | Symmetric Scope | Scope distinction: symmetric handles bulk files and continuous streams. |
| `SMALL blocks of data` | `كتل صغيرة من البيانات` | `distinction` | Asymmetric Scope | Scope restriction: asymmetric is strictly for session keys and hash digests. |
| `too computationally slow for bulk data` | `بطيء حسابياً للبيانات الضخمة` | `exception` | Asymmetric Limitation | Major exam question: why asymmetric ciphers are not used for bulk disk encryption. |
| `arbitrary-length input data into a fixed-length cryptographic digest` | `البيانات بأي طول إلى بصمة رقمية ثابتة الطول` | `action` | Hash Functions | Exact mathematical behavior of cryptographic compression. |
| `fixed-length cryptographic digest` | `بصمة رقمية ثابتة الطول` | `target` | Hash Digest | Key output term for integrity verification. |
| `unauthorized modification (Integrity)` | `التعديل غير المصرح به (السلامة)` | `distinction` | Data Integrity | Identifies what integrity protects against (active tampering). |
| `not unauthorized reading (Confidentiality)` | `ليس من القراءة أو الإفشاء (السرية)` | `distinction` | Integrity vs Confidentiality | Critical exam distinction: hashes do not provide confidentiality. |
| `verify the claimed identity` | `التحقق من الهوية المزعومة` | `action` | Authentication | The foundational goal of authentication protocols. |
| `WHO is communicating and trusted origin` | `هوية المتصل وموثوقية المصدر` | `distinction` | Entity vs Data Origin Auth | Distinguishes entity authenticity from message privacy. |
| `preventing masquerade and replay attacks` | `منع هجمات انتحال الشخصية وإعادة الإرسال` | `distinction` | Authentication Defense | Active attacks neutralized by authentication protocols. |
| `changed only in a specified and authorized manner` | `تغييرها فقط بطريقة مصرح بها` | `condition` | NIST Data Integrity | Verbatim NIST definition condition for data integrity. |
| `not made available or disclosed to unauthorized individuals` | `عدم إفشاؤها لأشخاص غير مصرح لهم` | `exception` | NIST Confidentiality | Verbatim NIST definition requirement for confidentiality. |
| `timely and reliable access to information` | `الوصول الموقوت والموثوق إلى المعلومات` | `distinction` | NIST Availability | Verbatim NIST definition criterion for availability. |
| `disruption of access to or use of information` | `تعطيل أو حجب الوصول إلى المعلومات` | `distinction` | Denial of Service | Hallmark exam phrase indicating an availability attack. |
| `alter system resources or affect their operation` | `تعديل موارد النظام أو التأثير على تشغيلها` | `action` | Active Attacks | Definitive criterion separating active attacks from passive attacks. |
| `learn or make use of information from the system but does not affect` | `استغلال المعلومات دون التأثير على موارد النظام` | `distinction` | Passive Attacks | Definitive criterion separating passive attacks from active attacks. |
| `passive capture of a data unit and its subsequent retransmission` | `التقاط سلبي لوحدة البيانات ثم إعادة إرسالها لاحقاً` | `distinction` | Replay Attack | Textbook definition of replay attacks in university exams. |
| `prevents either sender or receiver from denying a transmitted message` | `منع المرسل أو المستقبل من إنكار إرسال أو استلام الرسالة` | `distinction` | Non-repudiation | Cardinal definition of non-repudiation service. |
| `actions can be traced to an entity` | `تتبع الإجراءات بشكل فريد إلى الكيان` | `distinction` | Accountability | Cardinal definition of accountability. |
| `traffic patterns` | `أنماط حركة المرور` | `target` | Traffic Analysis | The exact target observed during traffic analysis attacks. |
| `trying every possible key until an intelligible translation` | `تجربة جميع المفاتيح المحتملة حتى الوصول إلى ترجمة مفهومة` | `action` | Brute-force Attack | Textbook definition of exhaustive keyspace search. |

---

## 3. Chapter 2: Number Theory & Cryptographic Mathematics

| English Semantic Phrase | Arabic Semantic Phrase | Role | Concept Association | Exam Significance |
|---|---|---|---|---|
| `if and only if gcd(a,n) = 1` | `إذا وفقط إذا كان gcd(a,n) = 1` | `condition` | Modular Inverse | The single most tested mathematical condition in Chapter 2. |
| `the moduli must be pairwise relatively prime` | `أن تكون المعاملات أولية نسبياً فيما بينها` | `condition` | Chinese Remainder Theorem | Mandatory requirement for CRT to yield a unique simultaneous solution. |
| `provided that p does not divide a` | `بشرط ألا يقسم p العدد a` | `exception` | Fermat's Little Theorem | Classic exam trap: theorem identity fails if p divides a. |
| `remainder must be strictly less than the divisor` | `الباقي أصغر تماماً من القاسم` | `condition` | Division Algorithm | Uniqueness condition for integer quotient and remainder: `0 <= r < n`. |
| `computes gcd and expresses it as a linear combination` | `حساب القاسم المشترك الأكبر وكتابته كتركيبة خطية` | `action` | Extended Euclidean | Identifies Bézout identity computation for finding modular inverses. |
| `composite with high probability` / `definitely composite` | `مركب قطعاً` | `distinction` | Miller-Rabin Test | Decisive outcome when test finds a witness against primality. |
| `inconclusive` | `النتيجة غير حاسمة` | `exception` | Miller-Rabin Test | Outcome when test passes one round; does NOT prove certainty without repeats. |
| `has a multiplicative inverse if and only if` | `له معكوس ضربي إذا وفقط إذا` | `condition` | Multiplicative Inverses | Exam stem trigger for invertibility questions in modular arithmetic. |

---

## 4. Chapter 3: Classical Encryption Techniques

| English Semantic Phrase | Arabic Semantic Phrase | Role | Concept Association | Exam Significance |
|---|---|---|---|---|
| `shifts each letter by a fixed number of positions` | `إزاحة كل حرف بعدد ثابت من المواقع` | `action` | Caesar Cipher | Core substitution action defining the Caesar shift algorithm. |
| `frequencies of letter pairs` | `تكرار أزواج الحروف` | `distinction` | Playfair Cipher | Playfair cryptanalysis requires digram analysis rather than single letters. |
| `single letter frequencies are masked` | `حجب التكرارات الفردية للحروف` | `distinction` | Playfair Cryptanalysis | Why simple frequency counts fail against the Playfair 5x5 matrix. |
| `matrix must be invertible modulo 26` | `المصفوفة يجب أن تكون قابلة للعكس بمقياس 26` | `condition` | Hill Cipher Decryption | Key matrix must possess an inverse modulo 26 to decrypt ciphertext. |
| `gcd(det(K), 26) = 1` | `gcd(det(K), 26) = 1` | `condition` | Hill Key Determinant | Determinant must not be divisible by 2 or 13. |
| `frequency distribution of single letters is flattened` | `تسوية التوزيع التكراري للحروف` | `distinction` | Polyalphabetic Ciphers | Hallmark property of polyalphabetic substitution like Vigenère. |
| `key length must be equal to message length` | `طول المفتاح مساوٍ لطول الرسالة` | `condition` | One-Time Pad | First mandatory condition for Vernam perfect secrecy. |
| `used only once and never reused` | `يستخدم لمرة واحدة فقط ولا يتكرر أبداً` | `condition` | One-Time Pad | Second mandatory condition: key reuse catastrophically breaks OTP. |
| `statistically unbreakable and mathematically secure` | `غير قابل للكسر إحصائياً وآمن رياضياً تماماً` | `distinction` | Shannon Perfect Secrecy | Only cipher provably secure against unlimited computing power. |
| `rearranges the order of plaintext letters without altering` | `إعادة ترتيب مواضع الحروف دون تغيير هويتها` | `action` | Transposition Ciphers | Distinguishes transposition from substitution ciphers. |

---

## 5. Chapter 4: Block Ciphers & Data Encryption Standard (DES)

| English Semantic Phrase | Arabic Semantic Phrase | Role | Concept Association | Exam Significance |
|---|---|---|---|---|
| `encrypts one block of data at a time` | `تشفير كتلة كاملة من البيانات في المرة الواحدة` | `action` | Block Cipher Principle | Defining execution mode of block ciphers. |
| `encrypts continuous data streams one bit or byte at a time` | `تشفير تدفقات البيانات بتاً أو بايتاً في كل مرة` | `action` | Stream Cipher Principle | Defining execution mode of stream ciphers. |
| `statistical structure of the plaintext is dissipated` | `تبديد البنية الإحصائية للنص الأصلي` | `action` | Shannon Diffusion | Core definition of diffusion in block cipher design. |
| `relationship between key and ciphertext is made as complex as possible` | `جعل العلاقة بين المفتاح والنص المشفر بالغة التعقيد` | `action` | Shannon Confusion | Core definition of confusion in block cipher design. |
| `only non-linear component in DES` | `المكون غير الخطي الوحيد في خوارزمية DES` | `distinction` | DES S-Boxes | Vital exam question: without S-boxes, DES collapses to a linear equation system. |
| `small change in plaintext or key produces a significant change` | `تغيير طفيف في النص الأصلي أو المفتاح ينتج تغييراً هائلاً` | `distinction` | Avalanche Effect | Quantitative metric: ~50% output bit flip from single bit change. |
| `reversible regardless of whether the round function is invertible` | `قابلة للعكس دائماً بصرف النظر عن كون دالة الجولة قابلة للعكس أم لا` | `distinction` | Feistel Network | Architectural elegance: Feistel decryption works even if F is non-invertible. |

---

## 6. Chapter 7: Advanced Block Ciphers & Modes of Operation

| English Semantic Phrase | Arabic Semantic Phrase | Role | Concept Association | Exam Significance |
|---|---|---|---|---|
| `vulnerable to meet-in-the-middle attack` | `عرضة لهجوم اللقاء في المنتصف` | `exception` | Double DES Flaw | Why Double DES fails to double the effective security. |
| `effective security is only 56 bits` | `مستوى الأمان الفعلي يعادل 56 بتاً فقط` | `distinction` | Double DES Security | Crucial exam trap: 2x56-bit keys yield only 2^56 difficulty, not 2^112. |
| `identical plaintext blocks produce identical ciphertext blocks` | `كتل النص الأصلي المتطابقة تنتج كتل نص مشفر متطابقة` | `exception` | ECB Mode Flaw | The cardinal vulnerability of Electronic Codebook mode. |
| `does not conceal data patterns` | `لا يخفي أنماط وهياكل البيانات` | `exception` | ECB Visual Leakage | Why ECB fails for images or repetitive database columns. |
| `suitable only for transmitting small blocks such as encryption keys` | `مناسب فقط لنقل الكتل الصغيرة مثل مفاتيح التشفير` | `distinction` | ECB Valid Application | The only course-approved application of ECB mode. |
| `XORs the plaintext with the previous ciphertext block` | `دمج النص الأصلي بعملية XOR مع كتلة الشفرة السابقة` | `action` | CBC Chaining | Defining mechanism of Cipher Block Chaining. |
| `initialization vector must be known to both sender and receiver` | `متجه التهيئة يجب أن يكون معلوماً للطرفين` | `condition` | IV Sharing Requirement | IV need not be secret, but must be shared and authentic. |
| `same key and same IV must never be reused` | `عدم تكرار نفس المفتاح ونفس IV مطلقاً` | `condition` | Stream Mode Security | Reusing IV in OFB or CTR causes catastrophic keystream reuse. |
| `does not require padding` | `لا يتطلب أي حشو للبيانات` | `distinction` | Stream Modes (CFB/OFB/CTR) | Stream modes preserve exact plaintext byte count. |
| `allows parallel processing of blocks` | `يتيح المعالجة المتوازية للكتل` | `distinction` | Counter (CTR) Mode | CTR throughput advantage over chained modes. |
| `random access to encrypted blocks` | `الوصول العشوائي المباشر للكتل المشفرة` | `distinction` | CTR Random Access | Ideal for file systems and database block retrieval. |

