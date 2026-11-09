# EDU — Global Diagram Duplication Audit & Academic Visualization Inventory

**Document Version:** 1.0.0  
**Target Audience:** Fourth-Year Computer Science University Students  
**Subject:** Cryptography & Network Security (IS401)  
**Standard References:** William Stallings (7th & 8th Editions), FIPS PUB 46-3, FIPS 197, NIST SP 800-38A, RFC 4949, ITU-T X.800

---

## 1. Executive Summary & Root Cause Analysis

During this comprehensive duplication audit, an inventory of every technical diagram, illustration, and interactive mind map across all 50 lessons of the EDU platform was conducted.

### Core Problems Identified in the Previous Implementation
1. **Substring Over-Matching in `LessonViewer.tsx`:**
   - The conditional check `lesson.id.includes('ch1-l1')` matched not only lesson `ch1-l1`, but also `ch1-l10`, `ch1-l11`, `ch1-l12`, `ch1-l13`, `ch1-l14`, `ch1-l15`, `ch1-l16`, and `ch1-l17`! Consequently, the Four Cryptographic Algorithm Areas diagram was displayed across **nine consecutive lessons** in Chapter 1.
   - The conditional check `lesson.id.includes('attack')` triggered `PassiveActiveAttacksDiagram` (a Chapter 1 taxonomy diagram) on unrelated attack lessons across Chapters 3, 4, and 7.
2. **Repeated Generic Diagrams:**
   - `EuclideanLadderDiagram` was displayed repeatedly across `ch2-l2`, `ch2-l3`, `ch2-l4`, and `ch2-l7`.
   - `BlockCipherModesDiagram` was dumped in its entirety across three separate lessons (`ch7-l3`, `ch7-l4`, `ch7-l6`) without pedagogical focus.
   - `CaesarWheelDiagram` rendered on both `ch3-l2` (Attack Types) and `ch3-l3` (Caesar Cipher).
3. **Missing Mechanism-Specific Diagrams:**
   - Classical ciphers such as the Hill Cipher, Vigenère Cipher, and Vernam / One-Time Pad had no dedicated technical diagrams.
   - Crucial algorithms such as Extended Euclidean back-substitution, Fermat/Euler exponent reduction, Miller-Rabin primality flow, and the DES Key Schedule lacked mechanism-specific illustrations.
4. **Mind Map Duplication Overload:**
   - The mind map selector matched any lesson listed anywhere in the node tree (`mm.rootNode.children?.some(c => c.lessonId === lesson.id)`), causing parent mind maps (like `ch7-modes` and `ch2-overview`) to repeat up to 6 times across consecutive lessons.

### Architectural Solution Implemented
- Every technical diagram has been restricted to its exact, authoritative lesson ID using strict equality (`lesson.id === 'chX-lY'`).
- 7 new academically specific diagram components were built (`ExtendedEuclideanDiagram`, `FermatEulerDiagram`, `MillerRabinDiagram`, `HillCipherDiagram`, `VigenereDiagram`, `VernamOtpDiagram`, `DesKeyScheduleDiagram`, `AsymmetricVsSymmetricDiagram`).
- `BlockCipherModesDiagram` was expanded to cover all 5 NIST modes (adding CFB and OFB) and equipped with contextual `initialMode` props (`ecb` on `ch7-l3`, `cbc` with error simulation on `ch7-l4`, and `ctr` on `ch7-l6`).
- Mind maps are now assigned exclusively to their canonical root topic lessons (`mm.rootNode.lessonId === lesson.id`), appearing exactly once per topic.

---

## 2. Diagram Classification Taxonomy

All diagrams are classified under four rigorous academic categories:

| Category | Description | Policy & Action |
| :--- | :--- | :--- |
| **Category A** | **Identical Diagram Repeated Unnecessarily** | Eliminate repetition; assign to single canonical lesson; provide contextual links elsewhere. |
| **Category B** | **Shared Structure, Different Concepts** | Decouple into separate, accurate diagrams reflecting differing mechanisms. |
| **Category C** | **Same Diagram with Different Educational Focus** | Reuse shared component only with distinct contextual state props (e.g. `initialMode`). |
| **Category D** | **Generic Decorative Diagrams** | Replace with rigorous, academically specific mechanism diagrams. |

---

## 3. Comprehensive Diagram Inventory (All 50 Lessons)

| Diagram ID & Component | Chapter & Topic | Lesson ID & Title | Academic Purpose & Key Components | Source Reference | Previous Reuse Status | Audit Assessment & Action Taken |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `crypto-areas`<br>`FourCryptoAreas.tsx` | Ch 1: Overview<br>`ch1-t1` | `ch1-l1`: Four Cryptographic Areas | 4 areas: Symmetric, Asymmetric, Data Integrity, Authentication protocols. | Stallings 8th Ed. Page 3 | **Repeated in 9 lessons** (`ch1-l10` to `ch1-l17`) due to `'ch1-l1'` substring match. | **Category A Fix:** Restricted strictly to `lesson.id === 'ch1-l1'`. Eliminated from 8 unrelated lessons. |
| `asym-vs-sym`<br>`AsymmetricVsSymmetricDiagram.tsx` | Ch 1: Scope<br>`ch1-t1` | `ch1-l2`: Network Security Scope | Contrasts single shared key $K$ vs. key pair ($PU, PR$) for Secrecy ($PU_B$) vs. Authentication ($PR_A$). | Stallings Fig 1.2 | **None (Was Missing)** | **Category B New:** Created dedicated comparative architecture diagram for `ch1-l2`. |
| `cia-triad`<br>`CiaTriadDiagram.tsx` | Ch 1: Objectives<br>`ch1-t2` | `ch1-l3`: NIST Computer Security Definition | Core triad: Confidentiality, Integrity, Availability + Authenticity & Accountability. | NIST SP 800-33 / RFC 4949 | Overlapped onto `ch1-l4`. | **Category A Fix:** Restricted to canonical definition lesson `ch1-l3`. |
| `security-pentagon`<br>`SecurityPentagonDiagram.tsx` | Ch 1: Requirements<br>`ch1-t2` | `ch1-l5`: Five Security Requirements | 5 pillars: Confidentiality, Integrity, Availability, Authenticity, Non-repudiation. | Stallings Fig 1.1 | Mismapped to `ch1-l4`. | **Category A Fix:** Remapped to correct lesson `ch1-l5` (Figure 1.1). |
| `passive-active-attacks`<br>`PassiveActiveAttacksDiagram.tsx` | Ch 1: Attacks<br>`ch1-t3` | `ch1-l10`: Passive Attacks<br>`ch1-l11`: Active Attacks | Taxonomy: Eavesdropping, Traffic Analysis vs Masquerade, Replay, Modification, DoS. | RFC 4949 / X.800 Table 1.1 | Fired on any lesson with `'attack'` in ID. | **Category A Fix:** Restricted exclusively to `ch1-l10` and `ch1-l11`. |
| `network-security-model`<br>`NetworkSecurityModelDiagram.tsx` | Ch 1: Models<br>`ch1-t5` | `ch1-l16`: Network Security Model<br>`ch1-l17`: Network Access Model | Sender, Receiver, Security transformation, Trusted Third Party (KDC/CA), Opponent. | Stallings Fig 1.5 & Fig 1.6 | Failed to render due to broken condition. | **Category A Fix:** Corrected check to `ch1-l16` and `ch1-l17`. |
| `euclidean-ladder`<br>`EuclideanLadderDiagram.tsx` | Ch 2: Divisibility<br>`ch2-t2` | `ch2-l4`: Euclidean Algorithm | Step ladder for division algorithm: $a = qn + r$ until remainder zero ($\gcd(710, 310)$). | Stallings Table 2.1 | Repeated on `ch2-l2`, `ch2-l3`, `ch2-l4`, `ch2-l7`. | **Category A Fix:** Restricted exclusively to `ch2-l4`. |
| `extended-euclidean`<br>`ExtendedEuclideanDiagram.tsx` | Ch 2: Inverses<br>`ch2-t4` | `ch2-l7`: Extended Euclidean Algorithm | Bézout identity $as + bt = \gcd(a, b) = 1$, 3-column tracking, modular inverse ($550^{-1} \equiv 355 \pmod{1759}$). | Stallings Table 2.4 | **None (Was Missing)** — Replaced by generic ladder. | **Category B New:** Created dedicated Extended Euclidean diagram for `ch2-l7`. |
| `fermat-euler`<br>`FermatEulerDiagram.tsx` | Ch 2: Theorems<br>`ch2-t5` | `ch2-l8`: Fermat's Theorem<br>`ch2-l9`: Euler's Totient & Theorem | Conditions $p \in \mathbb{P}$, $\gcd(a,n)=1$, exponent reduction, $\phi(n)$ calculation rules. | Stallings Ch 2 Slides 26-28 | **None (Was Missing)** | **Category B New:** Created dedicated interactive theorem visualizer for `ch2-l8` & `ch2-l9`. |
| `miller-rabin`<br>`MillerRabinDiagram.tsx` | Ch 2: Primality<br>`ch2-t6` | `ch2-l10`: Miller-Rabin & AKS Primality | Algorithmic flow: $n-1 = 2^k q$, base $a$, checking $a^q \equiv 1$ or $a^{2^j q} \equiv -1$, composite vs inconclusive. | Stallings Ch 2 Slide 29 | Mismapped to CRT workflow diagram. | **Category B New:** Created dedicated Miller-Rabin decision tree for `ch2-l10`. |
| `crt-workflow`<br>`CrtWorkflowDiagram.tsx` | Ch 2: Congruences<br>`ch2-t6` | `ch2-l11`: Chinese Remainder Theorem | 4-step workflow: coprimality check, $M = \prod m_i$, $M_i = M/m_i$, inverses $y_i$, $x \equiv \sum a_i M_i y_i \pmod M$. | Stallings Ch 2 Slide 31 | Fired on `ch2-l10` (Miller-Rabin). | **Category A Fix:** Restricted exclusively to `ch2-l11`. |
| `symmetric-model`<br>`SymmetricModelDiagram.tsx` | Ch 3: Model<br>`ch3-t1` | `ch3-l1`: Symmetric Cryptosystem Model | 5 components: Plaintext $X$, Key $K$, Ciphertext $Y$, Encryption $E$, Decryption $D$, secure channel. | Stallings Fig 3.1 | None (Properly located). | **Preserved:** Authoritative model in `ch3-l1`. |
| `caesar-wheel`<br>`CaesarWheelDiagram.tsx` | Ch 3: Substitution<br>`ch3-t2` | `ch3-l3`: Caesar Cipher | Modulo 26 shift wheel: $C = (P + 3) \bmod 26$, brute-force key exhaustion table. | Stallings Fig 3.3 | Repeated on `ch3-l2` (Attack Types). | **Category A Fix:** Restricted exclusively to `ch3-l3`. |
| `playfair-rules`<br>`PlayfairRulesDiagram.tsx` | Ch 3: Substitution<br>`ch3-t2` | `ch3-l5`: Playfair Cipher | $5 \times 5$ matrix keyword "MONARCHY", Same Row (shift right), Same Column (shift down), Rectangle rule. | Stallings Page 74 | None (Properly located). | **Preserved:** Authoritative model in `ch3-l5`. |
| `hill-cipher`<br>`HillCipherDiagram.tsx` | Ch 3: Substitution<br>`ch3-t2` | `ch3-l6`: Hill Cipher | Matrix multiplication $\mathbf{C} = \mathbf{K} \cdot \mathbf{P} \pmod{26}$, $\det(\mathbf{K})$, coprimality condition $\gcd(\det(\mathbf{K}), 26)=1$, adjugate inversion. | Stallings Ch 3 Slide 24 | **None (Was Missing)** | **Category B New:** Created dedicated Hill matrix encryption and inversion diagram for `ch3-l6`. |
| `vigenere`<br>`VigenereDiagram.tsx` | Ch 3: Polyalphabetic<br>`ch3-t3` | `ch3-l7`: Vigenère Cipher & Autokey | Plaintext, repeated key alignment, modular addition $C_i = (P_i + K_i) \pmod{26}$, autokey non-periodicity. | Stallings Ch 3 Slides 26-28 | **None (Was Missing)** | **Category B New:** Created dedicated Vigenère and Autokey alignment diagram for `ch3-l7`. |
| `vernam-otp`<br>`VernamOtpDiagram.tsx` | Ch 3: Perfect Secrecy<br>`ch3-t3` | `ch3-l8`: Vernam Cipher & One-Time Pad | Bitwise XOR $C_i = P_i \oplus K_i$, $P_i = C_i \oplus K_i$, Shannon unconditional security, key reuse flaw. | Shannon 1949 / Stallings Slide 30 | **None (Was Missing)** | **Category B New:** Created dedicated bitwise XOR and perfect secrecy diagram for `ch3-l8`. |
| `block-vs-stream`<br>`BlockVsStreamTable` | Ch 4: Comparison<br>`ch4-t1` | `ch4-l1`: Stream vs Block Ciphers | Comparison of Stream (bit/byte XOR, LFSR, continuous) vs Block (64/128b blocks, Feistel/SPN, diffusion/confusion). | NIST SP 800-38A | Fired on `ch3-l3` due to title match. | **Category A Fix:** Restricted exclusively to `ch4-l1`. |
| `feistel-network`<br>`FeistelNetworkDiagram.tsx` | Ch 4: Feistel<br>`ch4-t2` | `ch4-l4`: Feistel Network Architecture | Left/Right halves, Round function $F$, subkey $K_i$, XOR, cross-swap, identical decryption proof. | Horst Feistel / Stallings Fig 4.3 | Overlapped onto `ch4-l2` and `ch4-l3`. | **Category A Fix:** Restricted exclusively to `ch4-l4`. |
| `des-architecture`<br>`DesArchitectureDiagram.tsx` | Ch 4: DES Pipeline<br>`ch4-t3` | `ch4-l5`: DES Architecture | 16-round Feistel structure, 64-bit plaintext, IP, 48-bit subkeys, 32-bit swap, $IP^{-1}$. | FIPS PUB 46-3 | Overlapped onto `ch4-l3` and `ch4-l4`. | **Category A Fix:** Assigned as primary architecture diagram in `ch4-l5`. |
| `des-key-schedule`<br>`DesKeyScheduleDiagram.tsx` | Ch 4: Key Schedule<br>`ch4-t3` | `ch4-l5`: DES Architecture & Key Schedule | 64b $\to$ PC-1 (56b) $\to$ $C_0, D_0$ (28b each) $\to$ 16 rounds of 1b/2b circular shifts $\to$ PC-2 $\to$ 48b subkeys. | FIPS PUB 46-3 / Table 4.2 | **None (Was Missing)** | **Category B New:** Created dedicated Key Schedule pipeline for `ch4-l5`. |
| `des-round-function`<br>`DesRoundFunctionDiagram.tsx` | Ch 4: Round F<br>`ch4-t3` | `ch4-l6`: DES S-Box Lookup & Round F | 32-bit input, Expansion $E$ (32 $\to$ 48b), XOR with $K_i$, 8 S-boxes ($6 \to 4$), Permutation $P$. | FIPS PUB 46-3 | Overlapped onto `ch4-l5`. | **Category A Fix:** Restricted exclusively to `ch4-l6`. |
| `avalanche-effect`<br>`AvalancheEffectDiagram.tsx` | Ch 4: Strength<br>`ch4-t3` | `ch4-l7`: Avalanche Effect, SAC, BIC | 1-bit input/key difference cascading to $\approx 50\%$ bit flips after round 16, SAC and BIC tests. | FIPS PUB 46-3 / Table 4.3 & 4.4 | Overlapped onto `ch4-l5` and `ch4-l6`. | **Category A Fix:** Restricted exclusively to `ch4-l7`. |
| `double-des-mitm`<br>`DoubleDesMitMDiagram.tsx` | Ch 7: Multiple Enc<br>`ch7-t1` | `ch7-l1`: Double-DES & Meet-in-the-Middle | Intermediate state match $X = E(K_1, P) = D(K_2, C)$, table size $2^{56}$, attack operations $2^{57} \ll 2^{112}$. | Diffie & Hellman 1977 | None (Properly located). | **Preserved:** Authoritative model in `ch7-l1`. |
| `block-cipher-modes`<br>`BlockCipherModesDiagram.tsx` | Ch 7: Modes<br>`ch7-t2` | `ch7-l3`: ECB Mode<br>`ch7-l4`: CBC Mode<br>`ch7-l6`: Stream Modes (CTR/CFB/OFB) | NIST SP 800-38A 5 modes: ECB (cut-and-paste), CBC (chaining & error simulation), CFB, OFB, CTR. | NIST SP 800-38A / Table 7.1 | Rendered identically on `ch7-l3`, `ch7-l4`, `ch7-l6`. | **Category C Fix:** Expanded with CFB/OFB; parameterized via `initialMode`: `ecb` on `ch7-l3`, `cbc` on `ch7-l4`, `ctr` on `ch7-l6`. |

---

## 4. Mind Map Inventory & Single-Overview Allocation

| Mind Map ID | Title | Canonical Root Lesson | Assigned Reason |
| :--- | :--- | :--- | :--- |
| `ch1-overview` | Computer & Network Security Objectives Overview | `ch1-l1` | High-level synthesis of NIST definitions, CIA triad, and 5 security requirements. |
| `ch1-osi` | OSI Security Architecture (ITU-T X.800) | `ch1-l8` | Authoritative mapping of Attacks, Services, and Mechanisms. |
| `ch1-attacks` | Security Attacks Taxonomy: Passive vs. Active | `ch1-l10` | Structural classification of security threats into passive and active vectors. |
| `ch1-services` | X.800 Security Services Taxonomy | `ch1-l12` | Breakdown of the 5 primary security services and their 14 specific subservices. |
| `ch1-mechanisms` | Specific vs. Pervasive Security Mechanisms | `ch1-l15` | Structural distinction between layer-specific algorithms and pervasive mechanisms. |
| `ch2-overview` | Number Theory Foundations for Cryptography | `ch2-l1` | Complete mathematical dependency chain: divisibility $\to$ primes $\to$ modular groups. |
| `ch2-gcd-euclid` | GCD and Euclidean Algorithms Dependency Chain | `ch2-l3` | Conceptual bridge connecting divisibility, coprimality, and Euclidean ladders. |
| `ch3-overview` | Classical Encryption Techniques Classification | `ch3-l1` | Master taxonomy: Substitution vs. Transposition, Monoalphabetic vs. Polyalphabetic. |
| `ch3-substitution` | Substitution Ciphers Detailed Taxonomy | `ch3-l2` | Progressive classification from Caesar to Hill, Vigenère, and Vernam OTP. |
| `ch4-fundamentals` | Block Cipher Principles & Shannon Design Criteria | `ch4-l1` | Core theoretical foundation: Stream vs. Block, Ideal Cipher, Confusion and Diffusion. |
| `ch4-des-architecture` | Data Encryption Standard (DES) Architecture Pipeline | `ch4-l4` | Complete architectural pipeline: Feistel rounds, Key Schedule, Round Function F. |
| `ch7-multiple-encryption` | Multiple Encryption & Meet-in-the-Middle Attack | `ch7-l1` | Analytical framework: Double DES vulnerability, MitM attack, Triple DES EDE. |
| `ch7-modes` | NIST SP 800-38A Modes of Operation Taxonomy | `ch7-l3` | Master comparative overview of the 5 operational modes for block ciphers. |

---

## 5. Verification & Quality Assurance Summary

1. **Zero Unintended Diagram Overlaps:** Substring-matching bugs eliminated; every lesson renders either exactly one specific diagram or no diagram if the topic is purely conceptual.
2. **Every Distinct Mechanism Has a Unique Visual:**
   - Hill Cipher $\to$ Matrix multiplication & adjugate inversion.
   - Vigenère Cipher $\to$ Repeated keyword & autokey alignment table.
   - Vernam / OTP $\to$ Bit-level XOR & perfect secrecy proof.
   - Extended Euclidean $\to$ Bézout identity tracking ladder.
   - Fermat & Euler $\to$ Exponent reduction & totient calculation.
   - Miller-Rabin $\to$ Algorithmic primality decision flowchart.
   - DES Key Schedule $\to$ PC-1, circular left shift rules, PC-2 subkey pipeline.
   - Modes $\to$ Contextualized views for ECB, CBC (with 1-bit error simulation), CFB, OFB, and CTR.
3. **Responsive & Accessible Rendering:** All SVG diagrams utilize relative `viewBox` coordinates, responsive containers (`LargeDiagramContainer`), font sizes $\ge 10\text{px}$, and strict monochrome styling.

