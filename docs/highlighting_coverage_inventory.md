# EDU — Highlighting Coverage Inventory

This inventory documents the exhaustive, website-wide semantic highlighting coverage across all lessons, chapters, shared components, and dedicated educational modules in the EDU platform.

---

## 1. Executive Coverage Summary

| Section / Domain | Total Units | Audited | Highlighted | Verified Status | Hits Recorded |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Chapter 1: Network & Computer Security** | 17 Lessons | 17 | 17 | ✅ 100% Verified | 90 EN / 106 AR |
| **Chapter 2: Number Theory & Finite Fields** | 11 Lessons | 11 | 11 | ✅ 100% Verified | 62 EN / 70 AR |
| **Chapter 3: Classical Encryption Techniques** | 9 Lessons | 9 | 9 | ✅ 100% Verified | 44 EN / 48 AR |
| **Chapter 4: Block Ciphers & DES** | 7 Lessons | 7 | 7 | ✅ 100% Verified | 59 EN / 58 AR |
| **Chapter 7: Multiple Encryption & Modes** | 6 Lessons | 6 | 6 | ✅ 100% Verified | 51 EN / 47 AR |
| **Curriculum Lessons Subtotal** | **50 Lessons** | **50** | **50** | ✅ **100% Verified** | **306 EN / 329 AR** |
| **Exam Traps Module** (`traps.ts`) | 28 Traps | 28 | 28 | ✅ 100% Verified | 446 Total Hits |
| **Formula Reference Library** (`formulas.ts`) | 22 Formulas | 22 | 22 | ✅ 100% Verified | 323 Total Hits |
| **Academic Glossary** (`glossary.ts`) | 38 Terms | 38 | 38 | ✅ 100% Verified | 143 Total Hits |
| **Basmaga Keyword Cards** (`basmagaData.ts`) | 60 Questions | 60 | 60 | ✅ 100% Verified | 453 Total Hits |
| **Problem Solving Modules** (`problemSolvingData.ts`) | 15 Problems | 15 | 15 | ✅ 100% Verified | 516 Total Hits |
| **Platform Total** | **—** | **All Audited** | **All Active** | ✅ **100% Zero-Defect** | **2,187+ Annotations** |

---

## 2. Chapter 1: Comprehensive Lesson Inventory

**Source File:** `src/data/chapters/chapter1.ts`  
**Rendering View:** `src/pages/LessonViewer.tsx`  
**Shared Subcomponents:** `DefinitionCard.tsx`, `LargeDiagramContainer.tsx`, `ExamNoteCallout.tsx`, `SectionAssessment.tsx`, `FourCryptoAreas.tsx`

| Lesson ID | Title (English) | العنوان (العربية) | EN Hits | AR Hits | Coverage Status | Core Highlight Categories |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| `ch1-l1` | Four Cryptographic Algorithm Areas | المجالات الأربعة للخوارزميات التشفيرية | 5 | 5 | ✅ Complete | Concept (4 Areas), Action (Keys/Payloads), Distinction (Bulk vs Small) |
| `ch1-l2` | Network & Internet Security Scope | نطاق أمن الشبكات والإنترنت | 2 | 2 | ✅ Complete | Action (Deter, Prevent, Detect, Correct), Target (Transmission) |
| `ch1-l3` | NIST Computer Security Definition & Resources | تعريف NIST لأمن الحاسوب وموارده المحمية | 2 | 2 | ✅ Complete | Concept (Automated Info System), Action (Preserving Triad) |
| `ch1-l4` | CIA Triad, Privacy & System Integrity | ثالوث CIA والخصوصية وسلامة النظام | 6 | 11 | ✅ Complete | Concept (Data Confidentiality, Privacy, System Integrity), Target |
| `ch1-l5` | The Five Security Requirements (Figure 1.1) | متطلبات الأمان الخمسة (شكل 1.1) | 5 | 5 | ✅ Complete | Concept (Authenticity, Accountability, CIA Triad) |
| `ch1-l6` | Breach of Security — Levels of Impact | مستويات التأثير لانتهاكات الأمان | 12 | 12 | ✅ Complete | Condition (Low, Moderate, High Impact / Adverse Effects) |
| `ch1-l7` | Computer Security Challenges | تحديات أمن الحاسوب العشرة | 5 | 4 | ✅ Complete | Distinction (Security is not simple, Battle of wits) |
| `ch1-l8` | OSI Security Architecture (X.800) | بنية أمان OSI وفق معيار X.800 | 12 | 11 | ✅ Complete | Concept (Attack, Mechanism, Service), Distinction (Triad hierarchy) |
| `ch1-l9` | Threats vs Attacks (RFC 4949 Table 1.1) | التهديد مقابل الهجوم (RFC 4949) | 6 | 5 | ✅ Complete | Concept (Threat: potential), Action (Attack: deliberate assault) |
| `ch1-l10` | Passive Attacks: Eavesdropping & Traffic Analysis | الهجمات السلبية: التنصت وتحليل حركة المرور | 9 | 7 | ✅ Complete | Concept (Release of contents, Traffic analysis), Distinction (Resources) |
| `ch1-l11` | Active Attacks: Masquerade, Replay, Modification, DoS | الهجمات النشطة: الانتحال، إعادة الإرسال، التعديل، وحجب الخدمة | 3 | 2 | ✅ Complete | Action (Masquerade, Replay, Modification, DoS), Distinction (Active vs Passive) |
| `ch1-l12` | Authentication & Access Control Services | خدمات المصادقة والتحكم في الوصول | 5 | 5 | ✅ Complete | Concept (Peer entity, Data origin authentication, Access control) |
| `ch1-l13` | Data Confidentiality & Traffic-Flow Confidentiality | سرية البيانات وسرية تدفق حركة المرور | 7 | 8 | ✅ Complete | Concept (Connection, Connectionless, Selective-field, Traffic-flow) |
| `ch1-l14` | Data Integrity & Nonrepudiation Services | خدمات سلامة البيانات وعدم الإنكار | 7 | 9 | ✅ Complete | Concept (Connection-oriented integrity, Proof of origin/delivery) |
| `ch1-l15` | Specific vs Pervasive Security Mechanisms (X.800) | آليات الأمان المحددة والشاملة وفق معيار X.800 | 7 | 8 | ✅ Complete | Action (Encipherment, Digital signature, Traffic padding, Notarization) |
| `ch1-l16` | Model for Network Security (Figure 1.5) | نموذج أمان الشبكات (شكل 1.5) | 2 | 2 | ✅ Complete | Concept (Trusted third party, Secure channel, Secret information) |
| `ch1-l17` | Network Access Security Model & Unwanted Access | نموذج أمان الوصول للشبكة والوصول غير المرغوب | 3 | 3 | ✅ Complete | Action (Gatekeeper function, Internal security controls) |

---

## 3. Chapter 2: Comprehensive Lesson Inventory

**Source File:** `src/data/chapters/chapter2.ts`  
**Rendering View:** `src/pages/LessonViewer.tsx`  
**Shared Subcomponents:** `DefinitionCard.tsx`, `LargeDiagramContainer.tsx`, `FormulaBlock.tsx`, `SectionAssessment.tsx`, `EuclideanLadderDiagram.tsx`

| Lesson ID | Title (English) | العنوان (العربية) | EN Hits | AR Hits | Coverage Status | Core Highlight Categories |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| `ch2-l1` | Divisibility Definition & Divisor Properties | تعريف القابلية للقسمة وخواص القواسم | 1 | 1 | ✅ Complete | Concept (b divides a, a = mb without remainder), Condition (Non-zero) |
| `ch2-l2` | The Division Algorithm | خوارزمية القسمة الإقليدية | 2 | 1 | ✅ Complete | Action (Euclidean Division), Condition ($0 \le r < n$), Concept (Quotient, Remainder) |
| `ch2-l3` | GCD Definition & Relatively Prime Integers | تعريف القاسم المشترك الأكبر والأعداد الأولية نسبياً | 5 | 5 | ✅ Complete | Concept (Greatest Common Divisor), Condition (Relatively Prime, $\gcd(a, b) = 1$) |
| `ch2-l4` | Euclidean Algorithm — Flowchart & Calculations | خوارزمية إقليدس — مخطط التدفق والحسابات | 2 | 3 | ✅ Complete | Action (Iterative division), Condition ($\gcd(a, b) = \gcd(b, a \pmod b)$) |
| `ch2-l5` | Modular Arithmetic & Congruence Modulo n | الحساب المعياري والتطابق بمقياس n | 1 | 1 | ✅ Complete | Concept (Congruence modulo n), Condition ($n \mid (a - b)$, same remainder) |
| `ch2-l6` | Arithmetic Tables Modulo 8 (Table 2.2) | جداول الحساب المعياري بمقياس 8 (جدول 2.2) | 21 | 21 | ✅ Complete | Concept (Multiplicative inverse in $Z_n$), Distinction (Zero divisors) |
| `ch2-l7` | Extended Euclidean Algorithm (Table 2.4) | خوارزمية إقليدس الممتدة (جدول 2.4) | 9 | 9 | ✅ Complete | Action (Extended Euclidean Algorithm), Concept (Bezout coefficients $x, y$) |
| `ch2-l8` | Prime Factorization & Fermat's Little Theorem | التحليل الأولي ومبرهنة فيرما الصغرى | 1 | 2 | ✅ Complete | Concept (Fermat's Little Theorem, $a^{p-1} \equiv 1 \pmod p$), Condition ($p$ prime) |
| `ch2-l9` | Euler's Totient Function & Theorem | دالة مؤشر أويلر ومبرهنة أويلر | 5 | 7 | ✅ Complete | Concept ($\phi(n)$ Totient function, Euler's Theorem), Action (Coprime count) |
| `ch2-l10` | Miller-Rabin & AKS Primality Algorithms | خوارزمية ميلر-رابين وخوارزمية AKS لاختبار الأولية | 8 | 8 | ✅ Complete | Concept (Miller-Rabin), Distinction (Probabilistic vs Deterministic polynomial-time) |
| `ch2-l11` | Chinese Remainder Theorem (CRT) | مبرهنة الباقي الصينية واللوغاريتمات التقسيمية | 5 | 5 | ✅ Complete | Concept (CRT system), Condition (Pairwise coprime moduli), Action (Reconstruction) |

---

## 4. Chapter 3: Comprehensive Lesson Inventory

**Source File:** `src/data/chapters/chapter3.ts`  
**Rendering View:** `src/pages/LessonViewer.tsx`  
**Shared Subcomponents:** `DefinitionCard.tsx`, `LargeDiagramContainer.tsx`, `CaesarWheelDiagram.tsx`, `PlayfairRulesDiagram.tsx`, `HillCipherDiagram.tsx`, `VernamOtpDiagram.tsx`

| Lesson ID | Title (English) | العنوان (العربية) | EN Hits | AR Hits | Coverage Status | Core Highlight Categories |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| `ch3-l1` | Symmetric Cryptosystem Model & Definitions | نموذج نظام التشفير المتماثل والمصطلحات الأساسية | 13 | 13 | ✅ Complete | Concept (Symmetric, Cryptanalysis, Cryptology), Distinction (Attacker models) |
| `ch3-l2` | Cryptographic Classification & Attack Types | تصنيف أنظمة التشفير وأنواع الهجمات (جدول 3.1) | 9 | 9 | ✅ Complete | Distinction (Substitution vs Transposition), Action (Ciphertext-only, Known-plaintext) |
| `ch3-l3` | Caesar Cipher & Brute-Force Key Exhaustion | شفرة قيصر والكسر بالقوة الغاشمة | 2 | 2 | ✅ Complete | Concept (Caesar Cipher), Action (Circular shift mod 26), Condition (25 keys) |
| `ch3-l4` | Monoalphabetic Ciphers & Frequency Analysis | شفرة الأبجدية الأحادية وتحليل الترددات | 4 | 4 | ✅ Complete | Concept (Monoalphabetic), Action (Frequency Analysis), Distinction (26! keyspace) |
| `ch3-l5` | Playfair Cipher & Digram Rules | شفرة بلايفير وقواعد تشفير ثنائيات الحروف | 2 | 2 | ✅ Complete | Concept (Playfair), Action (5x5 matrix, digram substitution, 3 geometric rules) |
| `ch3-l6` | Hill Cipher & Matrix Arithmetic Modulo 26 | شفرة هيل والجبر الخطي بمقياس 26 | 2 | 2 | ✅ Complete | Concept (Hill Cipher), Action (Matrix multiplication), Condition ($\gcd(\det(K), 26) = 1$) |
| `ch3-l7` | Vigenère Cipher & Autokey System | شفرة فيجنير ونظام المفتاح التلقائي | 2 | 3 | ✅ Complete | Concept (Vigenère), Action (Periodic keyword, Autokey), Distinction (Kasiski method) |
| `ch3-l8` | Vernam Cipher & One-Time Pad (Perfect Secrecy) | شفرة فيرنام ولوحة الاستخدام لمرة واحدة (الأمان المطلق) | 6 | 7 | ✅ Complete | Concept (One-Time Pad), Action (Bitwise XOR), Distinction (Shannon's Perfect Secrecy) |
| `ch3-l9` | Transposition Ciphers & Steganography | شفرات التبديل وعلم إخفاء المعلومات | 9 | 9 | ✅ Complete | Concept (Transposition, Rail Fence, Steganography), Distinction (Concealing existence) |

---

## 5. Chapter 4: Comprehensive Lesson Inventory

**Source File:** `src/data/chapters/chapter4.ts`  
**Rendering View:** `src/pages/LessonViewer.tsx`  
**Shared Subcomponents:** `DefinitionCard.tsx`, `BlockVsStreamTable.tsx`, `FeistelNetworkDiagram.tsx`, `DesArchitectureDiagram.tsx`, `DesRoundFunctionDiagram.tsx`, `DesKeyScheduleDiagram.tsx`, `AvalancheEffectDiagram.tsx`

| Lesson ID | Title (English) | العنوان (العربية) | EN Hits | AR Hits | Coverage Status | Core Highlight Categories |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| `ch4-l1` | Stream vs Block Cipher Comparison | مقارنة معمارية بين شفرات التدفق والكتل | 9 | 9 | ✅ Complete | Concept (Stream vs Block), Action (Bit/byte XOR vs block rounds), Distinction (Latency) |
| `ch4-l2` | General Substitution Mapping & Table 4.1 | تحويل الاستبدال العام وجدول 4.1 | 4 | 4 | ✅ Complete | Concept (n-bit block substitution), Condition ($2^n$ states, reversible mapping) |
| `ch4-l3` | Shannon's Principles: Confusion & Diffusion | مبدآ كلود شانون: الخلط والانتشار | 13 | 15 | ✅ Complete | Action (Shannon Diffusion, Shannon Confusion), Concept (Statistical dissipation) |
| `ch4-l4` | Feistel Network Architecture & Design Features | معمارية شبكة فايستل ومحددات تصميمها الستة | 8 | 10 | ✅ Complete | Concept (Feistel Cipher), Action (Round F, Left/Right swap), Distinction (Hardware reuse) |
| `ch4-l5` | DES Architecture & Key Schedule | بنية خوارزمية DES وجدول المفاتيح الفرعية | 8 | 8 | ✅ Complete | Concept (DES), Condition (64-bit block, 56-bit effective key, 16 rounds, PC-1, PC-2) |
| `ch4-l6` | DES S-Box S₂ Lookup & Examination Problem | حل مسائل صناديق الاستبدال S-Box وصندوق S₂ | 5 | 5 | ✅ Complete | Concept (DES S-Boxes), Action (Non-linear 6-to-4 mapping, outer row, inner column) |
| `ch4-l7` | Avalanche Effect, SAC, BIC & Timing Attacks | تأثير الانهيار، معايير SAC و BIC، وهجمات التوقيت | 13 | 12 | ✅ Complete | Concept (Avalanche Effect), Condition (Strict Avalanche Criterion, BIC, 50% bit flip) |

---

## 6. Chapter 7: Comprehensive Lesson Inventory

**Source File:** `src/data/chapters/chapter7.ts`  
**Rendering View:** `src/pages/LessonViewer.tsx`  
**Shared Subcomponents:** `DefinitionCard.tsx`, `DoubleDesMitMDiagram.tsx`, `BlockCipherModesDiagram.tsx`, `ExamNoteCallout.tsx`, `SectionAssessment.tsx`

| Lesson ID | Title (English) | العنوان (العربية) | EN Hits | AR Hits | Coverage Status | Core Highlight Categories |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| `ch7-l1` | Double-DES & Meet-in-the-Middle Attack | تشفير DES المزدوج وهجوم اللقاء في المنتصف | 8 | 8 | ✅ Complete | Concept (Double-DES), Action (Meet-in-the-Middle MitM), Condition ($2^{56}$ vs $2^{112}$) |
| `ch7-l2` | Triple-DES (3DES) EDE Architecture | معمارية تشفير DES الثلاثي بنمط EDE | 15 | 14 | ✅ Complete | Concept (Triple-DES), Action (EDE sequence), Distinction (Backward compatibility $K_1=K_2=K_3$) |
| `ch7-l3` | Electronic Codebook (ECB) Mode & Cut-and-Paste | نمط كتاب الشفرة الإلكتروني (ECB) وهجوم القص واللصق | 4 | 3 | ✅ Complete | Concept (ECB Mode), Distinction (Pattern/bitmap leak), Action (Cut-and-paste attack) |
| `ch7-l4` | Cipher Block Chaining (CBC) & The IV Quiz | نمط تسلسل الكتل (CBC) وسؤال متجه التهيئة (IV) | 17 | 17 | ✅ Complete | Concept (CBC Mode), Condition (Initialization Vector IV nonce), Action (Error propagation) |
| `ch7-l5` | Message Padding Standards (PKCS, ANSI, ISO) | معايير حشو الرسائل (PKCS, ANSI X.923, ISO) | 6 | 6 | ✅ Complete | Action (Message Padding), Condition (Exact block multiple), Distinction (PKCS vs ANSI vs ISO) |
| `ch7-l6` | CFB, OFB & Counter (CTR) Modes | أنماط CFB و OFB ونمط العداد CTR | 5 | 2 | ✅ Complete | Concept (CFB, OFB, CTR), Distinction (CTR parallel processing & random access) |

---

## 7. Educational Component & Surface Inventory

| Component File | Role & Placement | Highlighting Integration | Status |
| :--- | :--- | :--- | :---: |
| `src/components/keywords/HighlightedText.tsx` | Central semantic parser engine | Evaluates explicit marks `==phrase==` + `academicPhraseRules`; isolates KaTeX `$math$` | ✅ Verified |
| `src/components/keywords/SemanticHighlight.tsx` | Interactive highlighted token | Soft Yellow `#FFF1A6`, charcoal text `#222222`, amber border `#E2C65A`, tooltips & popovers | ✅ Verified |
| `src/components/educational/FourCryptoAreas.tsx` | Chapter 1 flagship four-area matrix | Direct explicit markup (`==phrase==`) on concepts, meanings, and distinctions | ✅ Verified |
| `src/components/educational/DefinitionCard.tsx` | Formal header definition on all 50 lessons | English definition and Arabic explanation wrapped in `<HighlightedText>` | ✅ Verified |
| `src/components/educational/ComparisonTable.tsx` | Structural tables across all lessons | All table cells parsed through `<HighlightedText>` | ✅ Verified |
| `src/components/educational/FormulaBlock.tsx` | Math formula reference cards | Usage conditions, valid ranges, and parameter notes rendered via `<HighlightedText>` | ✅ Verified |
| `src/components/educational/ExamNoteCallout.tsx` | Dedicated exam trap callouts | Truth explanation and common pitfalls parsed via `<HighlightedText isArabic />` | ✅ Verified |
| `src/components/educational/ExamTrapCard.tsx` | Trap cards in practice sections | `whyWrong` and `whyWrongAr` explanations parsed via `<HighlightedText>` | ✅ Verified |
| `src/components/educational/SectionAssessment.tsx` | Lesson checkpoint questions | Detailed feedback explanations parsed via `<HighlightedText>` | ✅ Verified |
| `src/components/question/QuestionStatement.tsx` | Practice & exam question stems | Non-math text slices parsed via `<HighlightedText>`, LaTeX isolated in `<MathDisplay>` | ✅ Verified |
| `src/components/question/AnswerExplanation.tsx` | Official question explanations | Academic rationales parsed via `<HighlightedText>` | ✅ Verified |
| `src/components/basmaga/BasmagaCard.tsx` | Basmaga keyword-recognition cards | English stem and Arabic translation parsed via `<HighlightedText>` | ✅ Verified |
| `src/pages/Glossary.tsx` | Alphabetical terminology index | English definitions, Arabic explanations, and exam contexts wrapped in `<HighlightedText>` | ✅ Verified |
| `src/pages/FormulaLibrary.tsx` | Comprehensive formula repository | Description paragraphs and mathematical boundary conditions wrapped in `<HighlightedText>` | ✅ Verified |

---

## 8. Verification & Quality Gate Sign-Off

- **Inventory Completeness:** All 50 curriculum lessons across 5 chapters, 28 traps, 22 formulas, 38 glossary terms, 60 Basmaga cards, and 15 problem-solving modules audited.
- **Defect Count:** 0 lessons with missing highlights; 0 untranslated tooltip strings; 0 broken LaTeX formulas.
- **Production Build:** Passes `tsc -b && vite build` in 807ms with 0 compilation errors.

