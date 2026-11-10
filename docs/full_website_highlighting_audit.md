# EDU — Full Website-Wide Semantic Highlighting Audit

This document presents the detailed, content-driven academic audit of the semantic highlighting system implemented across the entire EDU platform. It analyzes the specific concepts, operations, mathematical conditions, and distinctions highlighted throughout the 50 curriculum lessons and all supporting modules.

---

## 1. Highlighting Taxonomy & Semantic Roles

The semantic highlighting engine categorizes highlighted phrases into five rigorous academic roles:

| Semantic Role | Academic Purpose | Typical Linguistic Trigger (EN) | Typical Linguistic Trigger (AR) | UI Indicator |
| :--- | :--- | :--- | :--- | :--- |
| **`concept`** | Formal technical concept or definition | *"is defined as"*, *"model"*, *"standard"* | *"تُعرّف بأنها"*, *"معيار"*, *"نموذج"* | Core Concept (مفهوم جوهري معتمد) |
| **`action`** | Defining operational behavior or transform | *"encrypts"*, *"permutes"*, *"iterates"* | *"يشفر"*, *"يبدل"*, *"يكرر القسمة"* | Defining Action (إجراء تشغيلي محدد) |
| **`condition`** | Mathematical constraint, range, or bound | *"if and only if"*, *"0 <= r < n"*, *"gcd = 1"* | *"إذا وفقط إذا"*, *"أوليان نسبياً"* | Mandatory Condition (شرط جبري لازم) |
| **`distinction`** | Critical contrast or exam trap clue | *"unlike"*, *"whereas"*, *"vulnerable to"* | *"بخلاف"*, *"بينما"*, *"يسقط أمام"* | Exam Distinction (تمييز امتحاني دقيق) |
| **`exception`** | Limitation, constraint, or negative case | *"does not protect"*, *"zero divisor"* | *"لا يحمي من"*, *"قاسم صفري"* | Limitation / Exception (استثناء أو قيد مانع) |

---

## 2. Chapter 1: Network & Computer Security Concepts (17 Lessons)

### 2.1 Lesson ch1-l1: Four Cryptographic Algorithm Areas
- **Source:** Stallings 8th Ed., Chapter 1, p. 3.
- **Core Concepts:** Symmetric Encryption, Asymmetric Encryption, Data Integrity, Authentication Protocols.
- **Semantic Annotations:**
  - `concept`: *"four main areas"* ⇄ *"أربعة مجالات رئيسية"*
  - `concept`: *"single shared secret key"* ⇄ *"مفتاح سري واحد مشترك"*
  - `action`: *"both encryption and decryption"* ⇄ *"للتشفير وفك التشفير"*
  - `distinction`: *"data of ANY size"* ⇄ *"بيانات بأي حجم"*
  - `distinction`: *"SMALL blocks of data"* ⇄ *"كتل صغيرة من البيانات"*
  - `action`: *"too computationally slow for bulk data"* ⇄ *"بطيء حسابياً للبيانات الضخمة"*
- **Exam Trigger Rationale:** Midterm exams consistently test the operational contrast: Symmetric handles bulk payloads of arbitrary size, whereas Asymmetric is reserved for key exchanges and digital signatures.

### 2.2 Lesson ch1-l2: Network & Internet Security Scope
- **Source:** Stallings 7th/8th Ed., Chapter 1, p. 4.
- **Core Concepts:** Defensive actions on data in transit.
- **Semantic Annotations:**
  - `action`: *"deter, prevent, detect, and correct"* ⇄ *"ردع، ومنع، واكتشاف، وتصحيح"*
  - `target`: *"transmission of information"* ⇄ *"نقل وتبادل المعلومات"*
- **Exam Trigger Rationale:** Four exact verbs from William Stallings that define transmission security measures.

### 2.3 Lesson ch1-l3: NIST Computer Security Definition & Resources
- **Source:** NIST Computer Security Handbook / SP 800-33.
- **Core Concepts:** Automated Information System protection.
- **Semantic Annotations:**
  - `concept`: *"automated information system"* ⇄ *"نظام معلومات مؤتمت"*
  - `action`: *"preserving the integrity, availability and confidentiality"* ⇄ *"الحفاظ على سلامة وجاهزية وسرية"*
- **Exam Trigger Rationale:** Exact definition tested in university multiple-choice questions regarding system assets (Hardware, Software, Data, Personnel, Telecommunications).

### 2.4 Lesson ch1-l4: CIA Triad, Privacy & System Integrity
- **Source:** RFC 4949 & NIST SP 800-33.
- **Core Concepts:** Triad pillars and extensions.
- **Semantic Annotations:**
  - `concept`: *"Data Confidentiality"* ⇄ *"سرية البيانات"*
  - `concept`: *"Privacy"* ⇄ *"الخصوصية الفردية"*
  - `concept`: *"Data Integrity"* ⇄ *"سلامة البيانات"*
  - `concept`: *"System Integrity"* ⇄ *"سلامة النظام"*
  - `concept`: *"Availability"* ⇄ *"التوافرية"*
  - `distinction`: *"unauthorized disclosure"* ⇄ *"إفشاء غير مصرح به"*
  - `distinction`: *"unauthorized modification"* ⇄ *"تعديل غير مصرح به"*
- **Exam Trigger Rationale:** Distinguishing Data Integrity (protecting information content) from System Integrity (protecting operational functions from manipulation).

### 2.5 Lesson ch1-l5: The Five Security Requirements (Figure 1.1)
- **Source:** Stallings Figure 1.1.
- **Core Concepts:** Pentagon security model (CIA + Authenticity + Accountability).
- **Semantic Annotations:**
  - `concept`: *"Authenticity"* ⇄ *"الموثوقية"*
  - `concept`: *"Accountability"* ⇄ *"المساءلة"*
  - `action`: *"verifying communicating identities"* ⇄ *"التحقق من هوية أطراف الاتصال"*
- **Exam Trigger Rationale:** Identifies the two extensions added by Stallings to form the 5 security requirements.

### 2.6 Lesson ch1-l6: Breach of Security — Levels of Impact
- **Source:** FIPS PUB 199.
- **Core Concepts:** Security impact taxonomy.
- **Semantic Annotations:**
  - `condition`: *"Low Impact"* / *"limited adverse effect"* ⇄ *"تأثير منخفض"* / *"أثر سلبي محدود"*
  - `condition`: *"Moderate Impact"* / *"serious adverse effect"* ⇄ *"تأثير متوسط"* / *"أثر سلبي جسيم"*
  - `condition`: *"High Impact"* / *"catastrophic adverse effect"* ⇄ *"تأثير مرتفع"* / *"أثر جسيم كارثي"*
- **Exam Trigger Rationale:** FIPS 199 exact terminology matching loss levels with organizational adverse effects.

### 2.7 Lesson ch1-l7: Computer Security Challenges
- **Source:** Stallings Chapter 1, Section 1.2.
- **Core Concepts:** Architectural and operational trade-offs.
- **Semantic Annotations:**
  - `distinction`: *"security is not simple"* ⇄ *"الأمان ليس بالأمر البسيط"*
  - `distinction`: *"battle of wits"* ⇄ *"صراع دهاء ومعركة عقول"*
- **Exam Trigger Rationale:** Exam questions testing why security designs fail when treated as an afterthought.

### 2.8 Lesson ch1-l8: OSI Security Architecture (X.800)
- **Source:** ITU-T Recommendation X.800.
- **Core Concepts:** Systematic security framework.
- **Semantic Annotations:**
  - `concept`: *"Security Attack"* ⇄ *"الهجوم الأمني"*
  - `concept`: *"Security Mechanism"* ⇄ *"الآلية الأمنية"*
  - `concept`: *"Security Service"* ⇄ *"الخدمة الأمنية"*
  - `distinction`: *"Security attack, security mechanism, and security service"* ⇄ *"الهجوم الأمني، والآلية، والخدمة"*
- **Exam Trigger Rationale:** Core tripartite architecture of ITU-T X.800; tested on every midterm.

### 2.9 Lesson ch1-l9: Threats vs Attacks (RFC 4949 Table 1.1)
- **Source:** RFC 4949 Internet Security Glossary.
- **Core Concepts:** Potential hazard vs deliberate execution.
- **Semantic Annotations:**
  - `concept`: *"potential for violation of security"* ⇄ *"احتمالية كامنة لانتهاك الأمان"*
  - `action`: *"assault on system security"* ⇄ *"اعتداء فعلي ناتج عن فعل ذكي متعمد"*
- **Exam Trigger Rationale:** A Threat is a *potential* risk; an Attack is an *active assault*.

### 2.10 Lesson ch1-l10: Passive Attacks
- **Source:** RFC 4949 / X.800.
- **Core Concepts:** Release of message contents & traffic analysis.
- **Semantic Annotations:**
  - `concept`: *"release of message contents"* ⇄ *"كشف محتويات الرسائل"*
  - `concept`: *"traffic analysis"* ⇄ *"تحليل حركة المرور"*
  - `distinction`: *"does not affect system resources"* ⇄ *"دون تعديل بيانات النظام أو التأثير على موارده"*
- **Exam Trigger Rationale:** Passive attacks do not alter data and are virtually undetectable; prevention via encryption is the only defense.

### 2.11 Lesson ch1-l11: Active Attacks
- **Source:** RFC 4949 / X.800.
- **Core Concepts:** Masquerade, Replay, Modification, Denial of Service.
- **Semantic Annotations:**
  - `action`: *"Masquerade"* ⇄ *"انتحال الهوية"*
  - `action`: *"Replay attack"* ⇄ *"هجوم إعادة الإرسال"*
  - `action`: *"Modification of messages"* ⇄ *"تعديل الرسائل"*
  - `action`: *"Denial of Service"* ⇄ *"حجب الخدمة"*
- **Exam Trigger Rationale:** Active attacks alter system resources or create false streams; detection and recovery are the primary defense strategies.

### 2.12 Lessons ch1-l12 to ch1-l17: Services & Mechanisms
- **ch1-l12:** `peer entity authentication` ⇄ `مصادقة الكيان النظير`; `data origin authentication` ⇄ `مصادقة منشأ البيانات`.
- **ch1-l13:** `Connection Confidentiality` ⇄ `سرية الاتصال الكامل`; `Traffic-Flow Confidentiality` ⇄ `سرية تدفق حركة المرور`.
- **ch1-l14:** `Connection-oriented integrity` ⇄ `سلامة الاتصال المستمر`; `Nonrepudiation` ⇄ `عدم الإنكار`.
- **ch1-l15:** `traffic padding` ⇄ `حشو حركة المرور`; `encipherment` ⇄ `التشفير`; `digital signature` ⇄ `التوقيع الرقمي`.
- **ch1-l16:** `trusted third party` ⇄ `طرف ثالث موثوق`; `secure channel` ⇄ `قناة آمنة`.
- **ch1-l17:** `gatekeeper function` ⇄ `وظيفة الحراسة`; `internal security controls` ⇄ `الضوابط الأمنية الداخلية`.

---

## 3. Chapter 2: Number Theory & Finite Fields (11 Lessons)

### 3.1 Lesson ch2-l1: Divisibility Definition
- **Concept:** $b \mid a$ ($b$ divides $a$ if $a = mb$).
- **Highlights:** `b divides a` ⇄ `العدد b يقسم العدد a`; `non-zero integer` ⇄ `عدد صحيح غير صفري`.

### 3.2 Lesson ch2-l2: The Division Algorithm
- **Condition:** Given $a \in \mathbb{Z}$ and positive $n$, unique $q, r$ exist such that $a = qn + r$ where $0 \le r < n$.
- **Highlights:** `division algorithm` ⇄ `خوارزمية القسمة الإقليدية`; `0 <= r < n` ⇄ `0 <= r < n`.

### 3.3 Lesson ch2-l3: GCD & Relatively Prime
- **Condition:** $\gcd(a, b) = 1$ is the definition of coprime integers.
- **Highlights:** `greatest common divisor` ⇄ `القاسم المشترك الأكبر`; `relatively prime` ⇄ `أوليان نسبياً`.

### 3.4 Lesson ch2-l4: Euclidean Algorithm
- **Action:** Iterative reduction: $\gcd(a, b) = \gcd(b, a \bmod b)$.
- **Highlights:** `Euclidean Algorithm` ⇄ `خوارزمية إقليدس`; `repeated division with remainder` ⇄ `القسمة المتكررة مع الباقي`.

### 3.5 Lesson ch2-l5: Modular Congruence
- **Concept:** $a \equiv b \pmod n \iff n \mid (a - b)$.
- **Highlights:** `congruent modulo n` ⇄ `تطابق بمقياس n`; `same remainder` ⇄ `نفس باقي القسمة`.

### 3.6 Lesson ch2-l6: Arithmetic Tables Modulo 8
- **Distinction:** In $\mathbb{Z}_n$, multiplicative inverse exists iff $\gcd(w, n) = 1$. Even numbers in $\mathbb{Z}_8$ are Zero Divisors.
- **Highlights:** `multiplicative inverse` ⇄ `المعكوس الضربي المعياري`; `Zero Divisors` ⇄ `قواسم الصفر (Zero Divisors)`.

### 3.7 Lesson ch2-l7: Extended Euclidean Algorithm
- **Action:** Computes $ax + by = \gcd(a, b)$ finding modular multiplicative inverse.
- **Highlights:** `Extended Euclidean Algorithm` ⇄ `خوارزمية إقليدس الممتدة`; `Bezout coefficients` ⇄ `معاملا بيزو`.

### 3.8 Lesson ch2-l8: Fermat's Little Theorem
- **Condition:** $p$ prime, $\gcd(a, p) = 1 \implies a^{p-1} \equiv 1 \pmod p$.
- **Highlights:** `Fermat's Little Theorem` ⇄ `مبرهنة فيرما الصغرى`; `p is prime` ⇄ `عدداً أولياً`.

### 3.9 Lesson ch2-l9: Euler's Totient Function & Theorem
- **Concept:** $\phi(n)$ counts coprimes up to $n$. $\gcd(a, n) = 1 \implies a^{\phi(n)} \equiv 1 \pmod n$.
- **Highlights:** `Euler's Totient Function` ⇄ `دالة مؤشر أويلر φ(n)`; `Euler's Theorem` ⇄ `مبرهنة أويلر المعيارية`.

### 3.10 Lesson ch2-l10: Miller-Rabin & AKS Primality
- **Distinction:** Miller-Rabin is probabilistic; AKS (2002) is deterministic polynomial-time.
- **Highlights:** `Miller-Rabin test` ⇄ `اختبار ميلر-رابين للأولية`; `deterministic polynomial-time` ⇄ `خوارزمية حتمية ذات وقت متعدد الحدود`.

### 3.11 Lesson ch2-l11: Chinese Remainder Theorem (CRT)
- **Condition:** Pairwise coprime moduli yield unique solution modulo $M = \prod m_i$.
- **Highlights:** `Chinese Remainder Theorem` ⇄ `مبرهنة الباقي الصينية`; `pairwise coprime` ⇄ `أولية نسبياً مثنى مثنى`.

---

## 4. Chapter 3: Classical Encryption Techniques (9 Lessons)

### 4.1 Lesson ch3-l1: Symmetric Cryptosystem Model
- **Concept:** Five ingredients (Plaintext, Ciphertext, Secret Key, Encryption Algorithm, Decryption Algorithm).
- **Highlights:** `Symmetric Encryption` ⇄ `التشفير المتماثل`; `Cryptanalysis` ⇄ `تحليل الشفرات`.

### 4.2 Lesson ch3-l2: Cryptographic Classification
- **Distinction:** Substitution vs Transposition; Stream vs Block; Single Key vs Two Keys.
- **Highlights:** `Substitution vs Transposition` ⇄ `الاستبدال مقابل التبديل الموضعي`; `Ciphertext-only` ⇄ `هجوم النص المشفر فقط`.

### 4.3 Lesson ch3-l3: Caesar Cipher
- **Condition:** Keyspace is strictly 25 keys ($k \in \{1..25\}$).
- **Highlights:** `Caesar Cipher` ⇄ `شفرة قيصر`; `brute-force exhaustion` ⇄ `الكسر بالقوة الغاشمة`.

### 4.4 Lesson ch3-l4: Monoalphabetic Substitution
- **Distinction:** Keyspace is $26! \approx 4 \times 10^{26}$, yet easily broken by frequency analysis because letter frequencies are preserved.
- **Highlights:** `Monoalphabetic Substitution Cipher` ⇄ `شفرة الاستبدال أحادية الأبجدية`; `frequency analysis` ⇄ `تحليل الترددات الإحصائي`.

### 4.5 Lesson ch3-l5: Playfair Cipher
- **Action:** 5x5 key matrix; encrypts digrams using 3 geometric rules (Same Row $\to$ right mod 5, Same Column $\to$ down mod 5, Rectangle $\to$ swap column coordinates).
- **Highlights:** `Playfair Cipher` ⇄ `شفرة بلايفير`; `digram substitution` ⇄ `تشفير ثنائيات الحروف`.

### 4.6 Lesson ch3-l6: Hill Cipher
- **Condition:** $C = K \cdot P \pmod{26}$. Invertible if and only if $\gcd(\det(K), 26) = 1$.
- **Highlights:** `Hill Cipher` ⇄ `شفرة هيل`; `matrix multiplication modulo 26` ⇄ `ضرب المصفوفات بمعيار 26`.

### 4.7 Lesson ch3-l7: Vigenère Cipher & Autokey
- **Action:** Polyalphabetic periodic key; broken by Kasiski examination. Autokey breaks periodicity.
- **Highlights:** `Vigenère Cipher` ⇄ `شفرة فيجنير`; `autokey system` ⇄ `نظام المفتاح التلقائي`.

### 4.8 Lesson ch3-l8: Vernam Cipher & One-Time Pad
- **Distinction:** Only cipher exhibiting Perfect Secrecy (Shannon 1949). Requires truly random key as long as message, used once.
- **Highlights:** `One-Time Pad` ⇄ `لوحة الاستخدام لمرة واحدة (OTP)`; `Perfect Secrecy` ⇄ `الأمان المطلق (غير المشروط)`.

### 4.9 Lesson ch3-l9: Transposition Ciphers & Steganography
- **Distinction:** Transposition rearranges order (Rail fence, Row transposition). Steganography conceals the existence of the message.
- **Highlights:** `Transposition Cipher` ⇄ `شفرة التبديل الموضعي`; `Steganography` ⇄ `علم إخفاء المعلومات`.

---

## 5. Chapter 4: Block Ciphers & Data Encryption Standard (7 Lessons)

### 5.1 Lesson ch4-l1: Stream vs Block Ciphers
- **Distinction:** Stream encrypts bit/byte continuously (low latency); Block encrypts fixed-size blocks (e.g. 64/128 bits).
- **Highlights:** `Stream Cipher` ⇄ `شفرة التدفق`; `Block Cipher` ⇄ `شفرة الكتل`.

### 5.2 Lesson ch4-l2: General Block Substitution
- **Concept:** $n$-bit to $n$-bit reversible substitution table ($2^n$ states).
- **Highlights:** `n-bit block substitution` ⇄ `استبدال الكتل بطول n بت`.

### 5.3 Lesson ch4-l3: Claude Shannon's Diffusion & Confusion
- **Action:** Diffusion dissipates plaintext statistical structure across ciphertext; Confusion complicates the key-ciphertext relationship.
- **Highlights:** `Diffusion` ⇄ `الانتشار (تشتيت البنية الإحصائية)`; `Confusion` ⇄ `الخلط والتشويش (تعقيد علاقة المفتاح)`.

### 5.4 Lesson ch4-l4: Feistel Network Architecture
- **Concept:** Splits data into $L$ and $R$ halves; $L_i = R_{i-1}$, $R_i = L_{i-1} \oplus F(R_{i-1}, K_i)$. Decryption is identical with reversed subkeys.
- **Highlights:** `Feistel Cipher Network` ⇄ `شبكة فايستل التشفيرية`; `identical hardware/software for encryption and decryption` ⇄ `تطابق عتاد وبرمجيات التشفير وفك التشفير`.

### 5.5 Lesson ch4-l5: DES Architecture & Key Schedule
- **Condition:** 64-bit plaintext, 56-bit effective key (8 parity bits discarded by PC-1), 16 Feistel rounds.
- **Highlights:** `Data Encryption Standard (DES)` ⇄ `معيار تشفير البيانات DES`; `56-bit effective key` ⇄ `مفتاح فعلي بطول 56 بت`.

### 5.6 Lesson ch4-l6: DES S-Box S₂ Lookup
- **Action:** Eight non-linear S-boxes mapping 6 bits $\to$ 4 bits. Outer bits $(b_1, b_6)$ select row (0..3); inner bits $(b_2..b_5)$ select column (0..15).
- **Highlights:** `DES S-Boxes` ⇄ `صناديق الاستبدال S-Boxes في DES`; `outer bits determine row` ⇄ `البتان الخارجيان يحددان الصف`.

### 5.7 Lesson ch4-l7: Avalanche Effect, SAC & BIC
- **Condition:** Flipping 1 bit in plaintext or key flips $\approx 50\%$ of ciphertext bits.
- **Highlights:** `Avalanche Effect` ⇄ `تأثير الانهيار الجليدي`; `Strict Avalanche Criterion` ⇄ `معيار الانهيار الصارم SAC`.

---

## 6. Chapter 7: Multiple Encryption & Block Cipher Modes (6 Lessons)

### 6.1 Lesson ch7-l1: Double-DES & Meet-in-the-Middle Attack
- **Distinction:** Double-DES has 112-bit key but only $2^{57}$ operations security due to Diffie-Hellman MitM attack: $E(K_1, P) = D(K_2, C)$.
- **Highlights:** `Double-DES` ⇄ `تشفير DES المزدوج`; `Meet-in-the-Middle Attack` ⇄ `هجوم اللقاء في المنتصف (Meet-in-the-Middle)`.

### 6.2 Lesson ch7-l2: Triple-DES (3DES) EDE Architecture
- **Action:** Encrypt-Decrypt-Encrypt sequence: $C = E(K_3, D(K_2, E(K_1, P)))$. Backward compatible with single DES when $K_1 = K_2 = K_3$.
- **Highlights:** `Triple-DES (3DES)` ⇄ `تشفير DES الثلاثي (3DES)`; `Encrypt-Decrypt-Encrypt` ⇄ `نمط التشفير وفك التشفير والتشفير (EDE)`.

### 6.3 Lesson ch7-l3: Electronic Codebook (ECB) Mode
- **Distinction:** Encrypts each block independently. Identical plaintext blocks produce identical ciphertext blocks, leaking bitmap patterns; vulnerable to Cut-and-Paste attacks.
- **Highlights:** `Electronic Codebook (ECB) Mode` ⇄ `نمط كتاب الشفرة الإلكتروني (ECB)`; `cut-and-paste attack` ⇄ `هجوم القص واللصق`.

### 6.4 Lesson ch7-l4: Cipher Block Chaining (CBC) Mode
- **Action:** $C_j = E(K, [C_{j-1} \oplus P_j])$. Requires unpredictable Initialization Vector (IV nonce). 1-bit transmission error corrupts current block and flips corresponding bit in next block.
- **Highlights:** `Cipher Block Chaining (CBC) Mode` ⇄ `نمط تسلسل الكتل المشفرة (CBC)`; `Initialization Vector (IV)` ⇄ `متجه التهيئة (IV)`.

### 6.5 Lesson ch7-l5: Message Padding Standards
- **Condition:** Block ciphers require exact multiples of block size. Final block padded via PKCS#5/#7, ANSI X.923, ISO 10126, or Zero padding.
- **Highlights:** `Message Padding` ⇄ `حشو الرسائل القياسي`; `PKCS` ⇄ `معيار حشو PKCS`.

### 6.6 Lesson ch7-l6: CFB, OFB & Counter (CTR) Modes
- **Distinction:** CFB and OFB convert block ciphers into stream ciphers. CTR mode encrypts sequential counters, offering high multi-core parallel speed and random access.
- **Highlights:** `Counter (CTR) Mode` ⇄ `نمط العداد CTR`; `parallel processing of blocks` ⇄ `يتيح المعالجة المتوازية للكتل`; `random access` ⇄ `الوصول العشوائي المباشر للكتل المشفرة`.

---

## 7. Negative Filters & Anti-Clutter Guardrails

To prevent conversational highlighting clutter, the rule engine enforces strict negative constraints:

1. **No Single Generic Words:** Isolated occurrences of `"key"`, `"attack"`, `"algorithm"`, `"data"`, `"system"`, `"مفتاح"`, `"هجوم"`, `"نظام"`, `"بيانات"` are NEVER highlighted on their own. They must be part of an authoritative compound phrase (e.g., `"single shared secret key"`, `"active attack"`, `"division algorithm"`).
2. **No Grammatical Connectors:** Words like `"and"`, `"or"`, `"the"`, `"في"`, `"من"`, `"على"` are never standalone targets.
3. **LaTeX Boundary Isolation:** Characters inside LaTeX delimiters (`$...$` and `$$...$$`) are protected from keyword regex matching.
4. **Collision Resolution:** When two phrase rules overlap (e.g. `"DES"` vs `"Data Encryption Standard (DES)"`), the parser always selects the longest matching phrase.

---

## 8. Audit Conclusion

The entire academic corpus of EDU has been inspected and annotated. Every single one of the 50 lessons possesses verified bilingual semantic highlights. Key conditions, mathematical requirements, and exam traps are visually distinct and interactive, providing fourth-year Computer Science students with an optimal university exam preparation environment.
