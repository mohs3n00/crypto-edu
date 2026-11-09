# EDU — Comprehensive Source Coverage Matrix & Lecture Mapping

**Document Version:** 1.0.0  
**Target Audience:** Fourth-Year Computer Science University Students  
**Subject:** Cryptography & Network Security (IS401)  
**Standard References:** William Stallings 7th & 8th Editions, FIPS 46-3, NIST SP 800-38A, ITU-T X.800, RFC 4949  
**Source Directory:** `e:\EDU\source-files\`

---

## 1. Executive Summary

This matrix establishes the definitive, page-by-page mapping between the official university lecture materials (`source-files/*.pdf`, `*.pptx`) and the active EDU course curriculum across all five chapters.

**Audit Verification Rule:** Every slide, table, formula, and theorem from the source lectures must have a direct, verified representation in the platform without omissions or unauthorized substitutions.

---

## 2. Chapter 1: Computer and Network Security Concepts
**Primary Source:** `Ch 1 information security.pdf` (28 Pages/Slides) | **Test Bank:** `ch01-testbank.pdf`

| Source Page / Slide | Official Lecture Subtopic & Core Concepts | Course Lesson Mapping | Status & Verified Content |
| :--- | :--- | :--- | :--- |
| **Pages 1–2** | Title & Chapter Overview | `ch1-l1`: Four Cryptographic Areas | **Complete:** Contextual introduction. |
| **Page 3** | Cryptographic Algorithms & Protocols (4 Areas: Symmetric, Asymmetric, Data Integrity, Authentication) | `ch1-l1`: Four Cryptographic Areas | **Complete:** Classified by data size (large streams vs small keys/hashes). |
| **Page 4** | Network & Internet Security Scope (Measures to deter, prevent, detect, and correct violations) | `ch1-l2`: Network & Internet Security Scope | **Complete:** Scope across communication links and subnetworks. |
| **Page 5** | NIST Computer Security Definition (NIST SP 800-33 / FIPS 199) | `ch1-l3`: NIST Computer Security Definition | **Complete:** Authoritative NIST quote and automated system protection. |
| **Pages 6–7** | Computer Security Objectives (CIA Triad: Data Confidentiality, Privacy, Data Integrity, System Integrity, Availability) | `ch1-l4`: CIA Triad, Privacy & System Integrity | **Complete:** Explicit distinctions between Data vs System Integrity and Confidentiality vs Privacy. |
| **Page 8** | Breach of Security — Levels of Impact (Low, Moderate, High Impact definitions based on FIPS PUB 199) | `ch1-l6`: Breach of Security — Levels of Impact | **Complete:** FIPS 199 loss impact thresholds for mission capability and assets. |
| **Page 9** | Computer Security Challenges (Security is not simple, complex trade-offs, attackers need one hole, psychological barrier) | `ch1-l7`: Computer Security Challenges | **Complete:** 10 core engineering and management challenges. |
| **Page 10** | OSI Security Architecture (ITU-T X.800: Systematic approach to security requirements) | `ch1-l8`: OSI Security Architecture (X.800) | **Complete:** Three branches: Attacks, Services, Mechanisms. |
| **Page 11** | Table 1.1: Threats and Attacks (RFC 4949 definitions) | `ch1-l9`: Threats vs Attacks (Table 1.1) | **Complete:** Threat (potential danger) vs Attack (deliberate attempt). |
| **Pages 12–13** | Passive Attacks (Release of Message Contents, Traffic Analysis) | `ch1-l10`: Passive Attacks | **Complete:** Emphasizes prevention via encryption rather than detection. |
| **Page 14** | Active Attacks (Masquerade, Replay, Modification of Messages, Denial of Service) | `ch1-l11`: Active Attacks | **Complete:** Emphasizes detection and recovery since prevention is infeasible. |
| **Pages 15–16** | Security Services Definition & Table 1.2 Overview | `ch1-l12`: Authentication & Access Control | **Complete:** ITU-T X.800 5 main service categories. |
| **Pages 17–18** | Authentication (Peer entity, Data origin) & Access Control Services | `ch1-l12`: Authentication & Access Control | **Complete:** Entity authentication and resource limiting. |
| **Page 19** | Data Confidentiality Services (Connection, Connectionless, Selective-field, Traffic-flow) | `ch1-l13`: Data Confidentiality | **Complete:** Transmitted data protection and traffic masking. |
| **Pages 20–21** | Data Integrity (Connection with/without recovery, Selective field) & Nonrepudiation (Origin, Destination) | `ch1-l14`: Data Integrity & Nonrepudiation | **Complete:** Undetected modification defense and proof of delivery/origin. |
| **Page 22** | Availability Service (Ensuring authorized accessibility upon request) | `ch1-l14`: Data Integrity & Nonrepudiation | **Complete:** DoS mitigation and service continuity. |
| **Pages 23–24** | Security Mechanisms (X.800 Table 1.3: Specific Mechanisms vs Pervasive Mechanisms) | `ch1-l15`: Specific vs Pervasive Mechanisms | **Complete:** Specific (Encipherment, Signatures) vs Pervasive (Audit, Labels). |
| **Page 25** | Model for Network Security (Stallings Figure 1.5: Secret key, Security transformation, Insecure channel, Opponent) | `ch1-l16`: Model for Network Security | **Complete:** 4 foundational design tasks for security services. |
| **Pages 26–27** | Network Access Security Model (Stallings Figure 1.6: Gatekeeper, Internal resources, Unwanted access, Viruses) | `ch1-l17`: Network Access Security Model | **Complete:** Perimeter defense, user authentication, and software filters. |
| **Page 28** | Chapter Summary | `ch1-l1` to `ch1-l17` | **Complete:** Synthesized in chapter review. |

---

## 2. Chapter 2: Introduction to Number Theory
**Primary Source:** `Ch 2 Information Security.pdf` (34 Pages/Slides) | **Supplements:** `suppCh2.ts`

| Source Page / Slide | Official Lecture Subtopic & Core Concepts | Course Lesson Mapping | Status & Verified Content |
| :--- | :--- | :--- | :--- |
| **Pages 1–2** | Title & Introduction to Number Theory | `ch2-l1`: Divisibility Definition | **Complete:** Mathematical roadmap. |
| **Pages 3–5** | Divisibility ($b \mid a \iff a = mb$) & 5 Divisor Properties ($b \mid 0$, transitivity, linear combination) | `ch2-l1`: Divisibility Definition & Properties | **Complete:** All 5 properties verified with linear combination formula $b \mid (mg + nh)$. |
| **Pages 6–7** | The Division Algorithm ($a = qn + r$ with $0 \le r < n$) & Negative Dividends | `ch2-l2`: The Division Algorithm | **Complete:** Negative dividend calculation ($-11 \bmod 7 = 3$, floor $q = -2$). |
| **Pages 8–10** | Greatest Common Divisor ($\gcd(a, b)$) & Relatively Prime Integers ($\gcd(a, b) = 1$) | `ch2-l3`: GCD & Relatively Prime | **Complete:** Formal definitions, coprimality of composite pairs ($\gcd(8, 15) = 1$). |
| **Pages 11–13** | Euclidean Algorithm Flowchart & Table 2.1 Division Ladder ($\gcd(710, 310) = 10$) | `ch2-l4`: Euclidean Algorithm | **Complete:** Forward ladder with termination at remainder zero. |
| **Pages 14–18** | Modular Arithmetic, Modulo Operator ($a \bmod n$), Congruence Modulo $n$, and 7 Core Properties | `ch2-l5`: Modular Arithmetic & Congruence | **Complete:** Congruence equivalence relations, algebraic laws in $\mathbb{Z}_n$. |
| **Pages 19–22** | Table 2.2(a-c): Arithmetic Tables in $\mathbb{Z}_8$ & Table 2.3: Ring/Field Properties | `ch2-l6`: Arithmetic Tables in $\mathbb{Z}_8$ | **Complete:** Complete addition, multiplication, and additive/multiplicative inverse tables in $\mathbb{Z}_8$. |
| **Page 23** | Table 2.4: Extended Euclidean Algorithm ($as + bt = \gcd(a, b)$ and Modular Inverses) | `ch2-l7`: Extended Euclidean Algorithm | **Complete:** 3-column table tracking Bézout coefficients; inverse $550^{-1} \bmod 1759 = 355$. |
| **Pages 24–25** | Prime Numbers, Fundamental Theorem of Arithmetic & Table 2.5: Primes Under 2000 | `ch2-l8`: Fermat's Little Theorem | **Complete:** Unique prime factorization and prime tables. |
| **Page 26** | Fermat's Little Theorem ($a^{p-1} \equiv 1 \pmod p$ and $a^p \equiv a \pmod p$) | `ch2-l8`: Fermat's Little Theorem | **Complete:** Both theorem forms; exponent reduction example ($3^{201} \bmod 11 = 3$). |
| **Pages 27–28** | Euler's Totient Function $\phi(n)$, Table 2.6, and Euler's Theorem ($a^{\phi(n)} \equiv 1 \pmod n$) | `ch2-l9`: Euler Totient Function & Theorem | **Complete:** Rules for $\phi(p), \phi(pq), \phi(p^k)$; lecture example ($7^{120} \bmod 100 = 1$). |
| **Page 29** | Miller-Rabin Probabilistic Primality Algorithm (Factoring $n-1 = 2^k q$, testing base $a$) | `ch2-l10`: Miller-Rabin & AKS Primality | **Complete:** Decision flow; numerical example ($n=221, a=2 \implies$ composite). |
| **Page 30** | Deterministic Primality Testing (AKS Algorithm 2002: Polynomial time $O((\log n)^{12})$) | `ch2-l10`: Miller-Rabin & AKS Primality | **Complete:** Agrawal-Kayal-Saxena historical theorem. |
| **Page 31** | Chinese Remainder Theorem (CRT: Reconstructing $x \bmod M$ from simultaneous congruences) | `ch2-l11`: CRT & Discrete Logarithms | **Complete:** Canonical 4-step algorithm; coprimality check; system solution. |
| **Pages 32–33** | Table 2.7 & 2.8: Powers of Integers Modulo 19, Primitive Roots, and Discrete Logarithms | `ch2-l11`: CRT & Discrete Logarithms | **Complete:** Primitive root generators ($g=2, 3, 10, 13, 14, 15$), discrete logarithm tables. |
| **Page 34** | Chapter Summary | `ch2-l1` to `ch2-l11` | **Complete:** Full number theory synthesis. |

---

## 3. Chapter 3: Classical Encryption Techniques
**Primary Source:** `Ch3.pptx` (34 Slides) | **Test Bank:** `ch03-testbank.pdf`

| Source Slide | Official Lecture Subtopic & Core Concepts | Course Lesson Mapping | Status & Verified Content |
| :--- | :--- | :--- | :--- |
| **Slides 1–2** | Title & Overview | `ch3-l1`: Symmetric Cryptosystem Model | **Complete:** Historical context. |
| **Slides 3–6** | Symmetric Cipher Definitions & Figure 3.1 Components ($X, K, Y, E, D$) | `ch3-l1`: Symmetric Cryptosystem Model | **Complete:** Five components and dual security requirements. |
| **Slide 7** | Cryptographic System Dimensions (Type of operations, Number of keys, Processing style) | `ch3-l2`: Cryptographic Classification | **Complete:** Substitution/Transposition, Secret/Public, Stream/Block. |
| **Slides 8–10** | Cryptanalysis vs Brute Force, Table 3.1: Types of Attacks (COA, KPA, CPA, CCA) | `ch3-l2`: Cryptographic Classification | **Complete:** Complete 5 attack models; Unconditional vs Computational security. |
| **Slides 11–12** | Brute-Force Key Exhaustion & Strong Encryption Criteria | `ch3-l2`: Cryptographic Classification | **Complete:** Key space analysis. |
| **Slides 13–15** | Substitution Technique, Caesar Cipher Algorithm ($C = (P + 3) \bmod 26$) | `ch3-l3`: Caesar Cipher | **Complete:** Mathematical mapping, encryption of "TREATY", brute-force table. |
| **Slides 16–17** | Figure 3.3 Frequency of English Letters & Figure 3.4 Compressed Text | `ch3-l4`: Monoalphabetic Ciphers | **Complete:** Natural English letter frequency distribution (ETAOIN SHRDLU). |
| **Slides 18–20** | Monoalphabetic Substitution Cipher (26! keyspace) and Frequency Cryptanalysis | `ch3-l4`: Monoalphabetic Ciphers | **Complete:** Contrast between astronomical key space ($26! \approx 4 \times 10^{26}$) and trivial frequency cryptanalysis. |
| **Slides 21–23** | Playfair Cipher, 5x5 Key Matrix ("MONARCHY"), 3 Digram Transformation Rules | `ch3-l5`: Playfair Cipher | **Complete:** Duplicate filler ('X'), Same Row, Same Column, Rectangle rules; "BALLOON" $\to$ "IBSUPPNA". |
| **Slide 24** | Hill Cipher (Lester Hill 1929: Polygraphic substitution, linear algebra mod 26) | `ch3-l6`: Hill Cipher | **Complete:** Matrix multiplication $\mathbf{C} = \mathbf{K}\mathbf{P}$, invertibility condition $\gcd(\det(\mathbf{K}), 26)=1$, inverse matrix calculation. |
| **Slide 25** | Polyalphabetic Ciphers General Principle | `ch3-l7`: Vigenère Cipher & Autokey | **Complete:** Multiple monoalphabetic mappings. |
| **Slides 26–27** | Vigenère Cipher (Tableau, periodic keyword, letter addition formula) | `ch3-l7`: Vigenère Cipher & Autokey | **Complete:** Full alignment table, modular addition ($C_i = (P_i + K_i) \bmod 26$), Kasiski periodicity vulnerability. |
| **Slide 28** | Vigenère Autokey System (Key concatenated with plaintext) | `ch3-l7`: Vigenère Cipher & Autokey | **Complete:** Elimination of simple periodicity while preserving language frequency vulnerabilities. |
| **Slide 29** | Vernam Cipher (Gilbert Vernam 1917: Bitwise XOR operation) | `ch3-l8`: Vernam Cipher & One-Time Pad | **Complete:** Bit-level XOR logic $C_i = P_i \oplus K_i$. |
| **Slides 30–31** | One-Time Pad (Joseph Mauborgne: Random key, perfect secrecy, practical flaws) | `ch3-l8`: Vernam Cipher & One-Time Pad | **Complete:** Shannon proof of unconditional security; key distribution and key reuse flaws. |
| **Slide 32** | Rail Fence Cipher (Simplest transposition: Zigzag depth write, row read) | `ch3-l9`: Transposition Ciphers | **Complete:** Depth-2 zigzag permutation. |
| **Slide 33** | Row Transposition Cipher (Rectangular grid permutation with numerical key) | `ch3-l9`: Transposition Ciphers | **Complete:** Columnar permutation; multiple transposition rounds. |
| **Slide 34** | Summary of Classical Techniques | `ch3-l1` to `ch3-l9` | **Complete:** Master taxonomy. |

---

## 4. Chapter 4: Block Ciphers and DES
**Primary Source:** `Ch04.pptx` (23 Slides) | **Test Bank:** `ch04-testbank.pdf`

| Source Slide | Official Lecture Subtopic & Core Concepts | Course Lesson Mapping | Status & Verified Content |
| :--- | :--- | :--- | :--- |
| **Slides 1–2** | Title & Overview | `ch4-l1`: Stream vs Block Ciphers | **Complete:** Block cipher foundations. |
| **Slides 3–5** | Stream Ciphers (continuous keystream) vs Block Ciphers (fixed 64/128-bit blocks) | `ch4-l1`: Stream vs Block Ciphers | **Complete:** Architectural table comparing memory, latency, and error propagation. |
| **Slides 6–7** | General n-bit Substitution & Table 4.1: Ideal Block Cipher Key Space Explosion | `ch4-l2`: General Substitution & Table 4.1 | **Complete:** Mathematical proof: 4-bit requires 64-bit key; 64-bit requires $2^{70}$-bit key ($10^{21}$ bits), necessitating Feistel product ciphers. |
| **Slide 8** | Feistel Cipher Concept (Horst Feistel 1973: Product cipher alternating substitution and permutation) | `ch4-l4`: Feistel Network Architecture | **Complete:** Reversible round equations $L_i = R_{i-1}$, $R_i = L_{i-1} \oplus F(R_{i-1}, K_i)$. |
| **Slide 9** | Shannon's Principles: Confusion (Ciphertext-to-Key) and Diffusion (Plaintext-to-Ciphertext) | `ch4-l3`: Shannon Confusion & Diffusion | **Complete:** Dissipating statistical structure (Diffusion via P-box/Expansion) vs Non-linear algebraic complexity (Confusion via S-boxes). |
| **Slides 10–12** | Feistel Cipher Design Features (Block size, Key size, Round count, Subkey algorithm, Round F) | `ch4-l4`: Feistel Network Architecture | **Complete:** 6 design parameters; mathematical proof of identical decryption with reversed subkeys. |
| **Slides 13–15** | Data Encryption Standard (DES / DEA): 64-bit block, 56-bit effective key, 16 rounds | `ch4-l5`: DES Architecture & Key Schedule | **Complete:** Initial Permutation (IP), 16 Feistel rounds, 32-bit swap, Inverse Initial Permutation ($IP^{-1}$). |
| **Slide 15 (Table 4.2)** | DES Key Schedule: Permuted Choice 1 (PC-1), Circular Left Shifts, Permuted Choice 2 (PC-2) | `ch4-l5`: DES Architecture & Key Schedule | **Complete:** Shift rules (1-bit in rounds 1, 2, 9, 16; 2-bit in others; 28-bit full cycle return). |
| **Slide 16 (Table 4.3)** | DES Round Function F, Expansion E (32 $\to$ 48 bits), 8 S-Boxes ($6 \to 4$ bits), Permutation P | `ch4-l6`: DES S-Box Lookup & Round F | **Complete:** Exact S-box calculation (Midterm 2020 problem $101111 \to$ Row 3, Col 7). |
| **Slides 17–18** | Avalanche Effect Demonstration (Table 4.4 Plaintext delta, Table 4.5 Key delta) | `ch4-l7`: Avalanche Effect, SAC, BIC | **Complete:** Strict Avalanche Criterion (SAC: flipping 1 bit flips $\approx 50\%$ ciphertext bits); Bit Independence Criterion (BIC). |
| **Slide 19** | Strength of DES: 56-bit key search ($2^{56} \approx 7.2 \times 10^{16}$), EFF Deep Crack, Timing attacks | `ch4-l7`: Avalanche Effect, SAC, BIC | **Complete:** Brute-force feasibility; timing attacks; differential and linear cryptanalysis resilience. |
| **Slides 20–22** | Block Cipher Design Principles: Number of rounds, S-box design criteria, Key schedule design | `ch4-l4`, `ch4-l7` | **Complete:** Nyberg criteria; S-box non-linearity properties. |
| **Slide 23** | Chapter Summary | `ch4-l1` to `ch4-l7` | **Complete:** Full Feistel/DES synthesis. |

---

## 5. Chapter 7: Block Cipher Operation
**Primary Source:** `Ch07-Crypto.pdf` (31 Pages/Slides) | **Supplements:** `suppCh7.ts`

| Source Page / Slide | Official Lecture Subtopic & Core Concepts | Course Lesson Mapping | Status & Verified Content |
| :--- | :--- | :--- | :--- |
| **Pages 1–3** | Chapter Title & Scope | `ch7-l1`: Double-DES & MitM Attack | **Complete:** Contextual introduction. |
| **Pages 4–5** | Double-DES ($C = E(K_2, E(K_1, P))$) & Meet-in-the-Middle Attack (Diffie-Hellman 1977) | `ch7-l1`: Double-DES & MitM Attack | **Complete:** Matching intermediate states $X = E(K_1, P) = D(K_2, C)$; table size $2^{56}$; time $2^{57} \ll 2^{112}$. |
| **Pages 6–8** | Triple-DES (3DES): Two-Key ($3\text{TDES}_{2\text{K}}$) and Three-Key ($3\text{TDES}_{3\text{K}}$) EDE Sequence | `ch7-l2`: Triple-DES EDE Architecture | **Complete:** Encrypt-Decrypt-Encrypt sequence; single-DES backward compatibility when $K_1 = K_2 = K_3$. |
| **Pages 9–11** | Multiple Blocks Encryption: Introduction to Block Cipher Modes of Operation (Table 7.1) | `ch7-l3`: Electronic Codebook (ECB) Mode | **Complete:** NIST SP 800-38A overview. |
| **Pages 12–16** | Electronic Codebook (ECB) Mode: Formulation, Identical block pattern leak, Cut-and-paste attacks | `ch7-l3`: Electronic Codebook (ECB) Mode | **Complete:** Notation $C_i = E(K, P_i)$; vulnerability on structured files; single-value transmission use case. |
| **Page 17** | Criteria and Properties for Evaluating Modes of Operation | `ch7-l3` to `ch7-l6` | **Complete:** Error propagation, parallelizability, precomputation, padding needs. |
| **Pages 18–22** | Cipher Block Chaining (CBC) Mode: Chaining mechanism, Initialization Vector (IV), Error propagation limits | `ch7-l4`: Cipher Block Chaining (CBC) | **Complete:** $C_i = E(K, P_i \oplus C_{i-1})$; IV role; 1-bit error in $C_1$ destroys $P_1$, flips 1 bit in $P_2$, recovers at $P_3$. |
| **Page 23** | Message Padding Standards (PKCS#7, ANSI X9.23, ISO/IEC 7816-4) & Mandatory Full Padding Block | `ch7-l5`: Message Padding Standards | **Complete:** Padding bytes calculation; full dummy block rule when message is exact multiple of block size. |
| **Pages 24–26** | Cipher Feedback (CFB) Mode: Stream conversion, Shift register, Error propagation limits | `ch7-l6`: CFB, OFB & Counter (CTR) Modes | **Complete:** Stream mode; error propagation across $1 + \lceil b/s \rceil$ blocks. |
| **Page 27** | Output Feedback (OFB) Mode: Encryption output feedback, Complete absence of error propagation | `ch7-l6`: CFB, OFB & Counter (CTR) Modes | **Complete:** Stream keystream generation; 1-bit error in $C_i$ affects ONLY 1 bit in $P_i$. |
| **Pages 28–30** | Counter (CTR) Mode: Formulation ($C_i = P_i \oplus E(K, \text{Nonce} \parallel i)$), 6 Core Advantages | `ch7-l6`: CFB, OFB & Counter (CTR) Modes | **Complete:** Hardware/Software parallelism, precomputation, random access, provable security, simplicity (encryption only). |
| **Page 31** | Chapter Summary | `ch7-l1` to `ch7-l6` | **Complete:** Full modes of operation synthesis. |

---

## 6. Audit Conclusion
**100% of all 150 slides and pages across Chapters 1, 2, 3, 4, and 7 are fully represented** in the EDU platform. No formula, theorem, example, or examination trap from the official faculty slides has been omitted.

