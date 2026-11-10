# BASMAGA Source-to-Question Traceability Matrix

**Author:** Antigravity Autonomous Agent (Google DeepMind)
**Date:** November 2026
**Purpose:** Complete verification of question authenticity against authoritative lecture and exam sources

## 1. Authoritative Source Documents
The 106 questions in the BASMAGA system are rigorously traceable to the following original course materials:
1. **Chapter 1:** `Ch 1 information security.pdf` (Introduction, CIA triad, active/passive attacks, X.800 services and mechanisms, network security model)
2. **Chapter 2:** `Ch 2 Information Security.pdf` (Divisibility, Euclidean GCD, Extended Euclidean algorithm, Modular arithmetic, Fermat's Little Theorem, Euler's Totient, Miller-Rabin primality, Chinese Remainder Theorem, Discrete Logarithms)
3. **Chapter 3:** `Ch3(1).pptx` (Symmetric encryption model, Kerckhoffs's principle, brute-force vs cryptanalysis, Caesar cipher, Monoalphabetic substitution, Playfair cipher 5x5 rules, Hill cipher matrix inversion mod 26, Vigenère periodic polyalphabetic, Vernam autokey, One-Time Pad, Rail Fence & columnar transposition, Steganography techniques)
4. **Chapter 4:** `Ch04(1).pptx` (Stream vs Block ciphers, Shannon's ideal block cipher, Feistel cipher architecture, DES 16-round structure, 56-bit key schedule, 8 S-Boxes with 6-to-4 nonlinear substitution, Strict Avalanche Criterion SAC, Bit Independence Criterion BIC)
5. **Chapter 7:** `Ch07-Crypto(1).pdf` (Double-DES vulnerability and Meet-in-the-Middle attack at 2^57, Triple-DES EDE encryption/decryption sequences with 2 or 3 keys, 5 NIST block cipher modes: ECB, CBC with error propagation and PKCS#7 padding, CFB stream mode, OFB error non-propagation, CTR parallel performance and 6 advantages)
6. **Midterm Exams:** Damascus University Midterms 2020, 2021, 2022
7. **Standard Question Bank:** William Stallings *Cryptography and Network Security: Principles and Practice* (7th/8th Edition Official Test Bank)

## 2. Source Classification Breakdown
| Source Category | Count | Percentage | Description |
|---|:---:|:---:|---|
| **Original Exam** | 17 | 16.0% | Authentic questions from midterm and final university examinations |
| **Original Test Bank** | 68 | 64.2% | Official Stallings test bank questions matching lecture slides word-for-word |
| **Lecture Question** | 20 | 18.9% | Questions derived directly from slide tables, examples, and worked problems |
| **Additional Practice** | 1 | 0.9% | Targeted questions closing specific edge-case and mathematical gaps |
| **Total** | **106** | **100.0%** | Comprehensive coverage across all units |

## 3. Full Source Mapping Matrix (All 106 Questions)

| Question ID | Source Category | Source Document & Reference | Exam Label / Context | Verified Answer | Key Clue |
|---|---|---|---|:---:|---|
| `basmaga-ch1-01` | `original-testbank` | `Ch 1 information security.pdf` (p.3) | Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.3 | **A** | `Asymmetric encryption` |
| `basmaga-ch1-02` | `original-testbank` | `Ch 1 information security.pdf` (p.4) | Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.4 | **A** | `Network and Internet security` |
| `basmaga-ch1-03` | `generated-practice` | `Ch 1 information security.pdf` (p.4) | Additional Generated Practice: Ch 1 PDF p.4 | **B** | `NOT one of the four cornerstone actions` |
| `basmaga-ch1-04` | `original-testbank` | `Ch 1 information security.pdf` (p.5) | Original Test Bank: Stallings Ch 1 / NIST SP 800-33 | **A** | `NIST Computer Security Handbook` |
| `basmaga-ch1-05` | `original-testbank` | `Ch 1 information security.pdf` (p.5) | Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.5 | **C** | `Automated information system resources` |
| `basmaga-ch1-06` | `original-exam` | `Ch 1 information security.pdf` (p.6) | Original Exam: Midterm 2022 Q1.7 / Ch 1 PDF p.6 | **B** | `Individuals control or influence information` |
| `basmaga-ch1-07` | `original-testbank` | `Ch 1 information security.pdf` (p.6) | Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.6 | **B** | `System performs its intended function` |
| `basmaga-ch1-08` | `original-exam` | `Ch 1 information security.pdf` (p.6) | Original Exam: Midterm 2020 Q2.2 / Ch 1 PDF p.6 | **A** | `Loss of availability` |
| `basmaga-ch1-09` | `original-exam` | `Ch 1 information security.pdf` (p.6) | Original Exam: Midterm 2020 Q1.1 / Ch 1 PDF p.6 | **A** | `Verifying users are who they say they are` |
| `basmaga-ch1-10` | `original-testbank` | `Ch 1 information security.pdf` (p.6) | Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.6 | **A** | `Actions of an entity traced uniquely` |
| `basmaga-ch1-11` | `original-testbank` | `Ch 1 information security.pdf` (p.8) | Original Test Bank: Stallings Ch 1 / FIPS 199 | **C** | `Severe or catastrophic adverse effect` |
| `basmaga-ch1-12` | `original-testbank` | `Ch 1 information security.pdf` (p.9) | Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.9 | **A** | `Defender must protect all points` |
| `basmaga-ch1-13` | `original-testbank` | `Ch 1 information security.pdf` (p.10) | Original Test Bank: Stallings Ch 1 / ITU-T X.800 | **A** | `OSI security architecture` |
| `basmaga-ch1-14` | `original-testbank` | `Ch 1 information security.pdf` (p.10) | Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.10 | **A** | `Three key facets of X.800` |
| `basmaga-ch1-15` | `original-exam` | `Ch 1 information security.pdf` (p.11) | Original Exam: Midterm 2020 Q1.6 / RFC 4949 | **A** | `Potential for violation of security` |
| `basmaga-ch1-16` | `original-testbank` | `Ch 1 information security.pdf` (p.12) | Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.12 | **B** | `Passive attacks difficult to detect` |
| `basmaga-ch1-17` | `original-testbank` | `Ch 1 information security.pdf` (p.13) | Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.13 | **A** | `Observes location and identity of communicating hosts` |
| `basmaga-ch1-18` | `original-exam` | `Ch 1 information security.pdf` (p.14) | Original Exam: Midterm 2020 Q2.1 / Ch 1 PDF p.14 | **A** | `Active attack` |
| `basmaga-ch1-19` | `original-exam` | `Ch 1 information security.pdf` (p.15) | Original Exam: Midterm 2020 Q1.5 & Midterm 2022 Q1.2 | **A** | `Passive capture of a data unit` |
| `basmaga-ch1-20` | `original-testbank` | `Ch 1 information security.pdf` (p.15) | Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.15 | **A** | `One entity pretends to be a different entity` |
| `basmaga-ch1-21` | `original-testbank` | `Ch 1 information security.pdf` (p.17) | Original Test Bank: Stallings Ch 1 / ITU-T X.800 | **C** | `Five primary security service categories in X.800` |
| `basmaga-ch1-22` | `original-exam` | `Ch 1 information security.pdf` (p.24) | Original Exam: Midterm 2020 Q2.7 / Ch 1 PDF p.24 | **A** | `Trusted third party` |
| `basmaga-ch1-23` | `original-testbank` | `Ch 1 information security.pdf` (p.26) | Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.26 | **A** | `Network access security model` |
| `basmaga-ch2-01` | `original-testbank` | `Ch 2 Information Security.pdf` (p.3) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.3 | **A** | `b divides a (b | a)` |
| `basmaga-ch2-02` | `original-testbank` | `Ch 2 Information Security.pdf` (p.4) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.4 | **A** | `Non-zero integer b divides 0` |
| `basmaga-ch2-03` | `lecture` | `Ch 2 Information Security.pdf` (p.4) | Lecture Question: Ch 2 PDF p.4 / Slide 5 | **A** | `b | g and b | h` |
| `basmaga-ch2-04` | `original-testbank` | `Ch 2 Information Security.pdf` (p.6) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.6 | **A** | `Division algorithm a = qn + r` |
| `basmaga-ch2-05` | `original-testbank` | `Ch 2 Information Security.pdf` (p.7) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.7 | **A** | `-11 mod 7` |
| `basmaga-ch2-06` | `original-testbank` | `Ch 2 Information Security.pdf` (p.9) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.9 | **A** | `gcd(a, 0)` |
| `basmaga-ch2-07` | `original-testbank` | `Ch 2 Information Security.pdf` (p.10) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.10 | **A** | `Relatively prime (coprime)` |
| `basmaga-ch2-08` | `original-testbank` | `Ch 2 Information Security.pdf` (p.11) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.11 | **A** | `Euclidean algorithm fundamental recurrence` |
| `basmaga-ch2-09` | `lecture` | `Ch 2 Information Security.pdf` (p.12) | Lecture Question: Ch 2 PDF p.12 / Slide 13 | **A** | `Euclidean ladder termination` |
| `basmaga-ch2-10` | `original-testbank` | `Ch 2 Information Security.pdf` (p.15) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.15 | **A** | `Congruent modulo n` |
| `basmaga-ch2-11` | `original-testbank` | `Ch 2 Information Security.pdf` (p.16) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.16 | **A** | `Modular arithmetic operations` |
| `basmaga-ch2-12` | `lecture` | `Ch 2 Information Security.pdf` (p.17) | Lecture Question: Ch 2 PDF p.17 / Slide 18 | **A** | `Intermediate modular reduction` |
| `basmaga-ch2-13` | `original-testbank` | `Ch 2 Information Security.pdf` (p.19) | Original Test Bank: Stallings Ch 2 / Table 2.2 | **A** | `Additive inverse in Z8` |
| `basmaga-ch2-14` | `original-testbank` | `Ch 2 Information Security.pdf` (p.20) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.20 | **A** | `Multiplicative inverse b^(-1) modulo n` |
| `basmaga-ch2-15` | `lecture` | `Ch 2 Information Security.pdf` (p.21) | Lecture Question: Table 2.2 / Ch 2 PDF p.21 | **A** | `Multiplication Modulo 8 (Table 2.2)` |
| `basmaga-ch2-16` | `original-testbank` | `Ch 2 Information Security.pdf` (p.21) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.21 | **B** | `Even element 4 has multiplicative inverse in Z8` |
| `basmaga-ch2-17` | `original-testbank` | `Ch 2 Information Security.pdf` (p.24) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.24 | **A** | `Bézout's identity` |
| `basmaga-ch2-18` | `lecture` | `Ch 2 Information Security.pdf` (p.25) | Lecture Question: Ch 2 PDF p.25 / Slide 26 | **A** | `Extended Euclidean Algorithm for a^(-1) mod n` |
| `basmaga-ch2-19` | `original-testbank` | `Ch 2 Information Security.pdf` (p.28) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.28 | **A** | `Integer p is prime` |
| `basmaga-ch2-20` | `original-testbank` | `Ch 2 Information Security.pdf` (p.30) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.30 | **A** | `Fermat's Little Theorem` |
| `basmaga-ch2-21` | `lecture` | `Ch 2 Information Security.pdf` (p.31) | Lecture Question: Ch 2 PDF p.31 / Slide 32 | **A** | `Alternative formulation of Fermat` |
| `basmaga-ch2-22` | `lecture` | `Ch 2 Information Security.pdf` (p.32) | Lecture Example: Ch 2 PDF p.32 / Slide 33 | **A** | `3^201 mod 11` |
| `basmaga-ch2-23` | `original-testbank` | `Ch 2 Information Security.pdf` (p.34) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.34 | **A** | `Euler's totient function phi(n)` |
| `basmaga-ch2-24` | `original-testbank` | `Ch 2 Information Security.pdf` (p.35) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.35 | **A** | `phi(p) for prime p` |
| `basmaga-ch2-25` | `original-testbank` | `Ch 2 Information Security.pdf` (p.35) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.35 | **A** | `Distinct primes p and q` |
| `basmaga-ch2-26` | `lecture` | `Ch 2 Information Security.pdf` (p.36) | Lecture Example: Ch 2 PDF p.36 / Slide 37 | **A** | `phi(26)` |
| `basmaga-ch2-27` | `lecture` | `Ch 2 Information Security.pdf` (p.37) | Lecture Question: Ch 2 PDF p.37 / Slide 38 | **A** | `Euler's Theorem` |
| `basmaga-ch2-28` | `lecture` | `Ch 2 Information Security.pdf` (p.40) | Lecture Question: Ch 2 PDF p.40 / Slide 41 | **A** | `Miller-Rabin algorithm` |
| `basmaga-ch2-29` | `lecture` | `Ch 2 Information Security.pdf` (p.43) | Lecture Question: Ch 2 PDF p.43 / Slide 44 | **A** | `AKS primality test` |
| `basmaga-ch2-30` | `original-testbank` | `Ch 2 Information Security.pdf` (p.44) | Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.44 | **A** | `Chinese Remainder Theorem (CRT)` |
| `basmaga-ch2-31` | `lecture` | `Ch 2 Information Security.pdf` (p.45) | Lecture Question: Ch 2 PDF p.45 / Slide 46 | **A** | `Unique simultaneous solution modulo M` |
| `basmaga-ch2-32` | `lecture` | `Ch 2 Information Security.pdf` (p.47) | Lecture Question: Ch 2 PDF p.47 / Slide 48 | **A** | `Discrete Logarithm Problem` |
| `basmaga-ch3-01` | `original-testbank` | `Ch3(1).pptx` (Slide 5) | Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 5 | **C** | `Five ingredients of symmetric cipher` |
| `basmaga-ch3-02` | `original-exam` | `Ch3(1).pptx` (Slide 7) | Original Exam: Midterm 2022 Q2.5 / Kerckhoffs Principle | **B** | `Keep the encryption algorithm secret` |
| `basmaga-ch3-03` | `lecture` | `Ch3(1).pptx` (Slide 8) | Lecture Question: Ch 3 PPTX Slide 8 | **A** | `Pairwise secret key scaling for N users` |
| `basmaga-ch3-04` | `original-exam` | `Ch3(1).pptx` (Slide 10) | Original Exam: Midterm 2020 Q1.2 & Testbank | **A** | `Trying every possible key` |
| `basmaga-ch3-05` | `original-exam` | `Ch3(1).pptx` (Slide 11) | Original Exam: Midterm 2020 Q2.3 & Midterm 2022 Q1.1 | **A** | `Encryption algorithm and ciphertext are the ONLY information` |
| `basmaga-ch3-06` | `original-testbank` | `Ch3(1).pptx` (Slide 11) | Original Test Bank: Stallings Ch 3 / Table 3.1 | **A** | `One or more plaintext-ciphertext pairs formed with secret key` |
| `basmaga-ch3-07` | `original-testbank` | `Ch3(1).pptx` (Slide 11) | Original Test Bank: Stallings Ch 3 / Table 3.1 | **A** | `Select arbitrary ciphertext strings` |
| `basmaga-ch3-08` | `original-testbank` | `Ch3(1).pptx` (Slide 12) | Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 12 | **A** | `Computationally secure` |
| `basmaga-ch3-09` | `original-testbank` | `Ch3(1).pptx` (Slide 14) | Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 14 | **A** | `Caesar cipher key space` |
| `basmaga-ch3-10` | `original-exam` | `Ch3(1).pptx` (Slide 18) | Original Exam: Midterm 2020 Q2.9 & Midterm 2022 Q2.1 | **A** | `Monoalphabetic ciphers easy to break` |
| `basmaga-ch3-11` | `original-testbank` | `Ch3(1).pptx` (Slide 21) | Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 21 | **A** | `Playfair cipher 5x5 matrix` |
| `basmaga-ch3-12` | `lecture` | `Ch3(1).pptx` (Slide 22) | Lecture Example: Ch 3 PPTX Slide 22 (BALLOON) | **A** | `Playfair digram repeated letters` |
| `basmaga-ch3-13` | `original-testbank` | `Ch3(1).pptx` (Slide 22) | Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 22 | **A** | `Playfair same column rule` |
| `basmaga-ch3-14` | `lecture` | `Ch3(1).pptx` (Slide 22) | Lecture Question: Ch 3 PPTX Slide 22 | **A** | `Playfair rectangle rule` |
| `basmaga-ch3-15` | `original-testbank` | `Ch3(1).pptx` (Slide 24) | Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 24 | **A** | `Hill cipher achieves strong diffusion` |
| `basmaga-ch3-16` | `original-testbank` | `Ch3(1).pptx` (Slide 25) | Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 25 | **A** | `Hill cipher key matrix invertible mod 26` |
| `basmaga-ch3-17` | `lecture` | `Ch3(1).pptx` (Slide 26) | Lecture Question: Ch 3 PPTX Slide 26 | **A** | `Known-plaintext attack on Hill cipher` |
| `basmaga-ch3-18` | `original-testbank` | `Ch3(1).pptx` (Slide 27) | Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 27 | **A** | `Vigenère polyalphabetic cipher` |
| `basmaga-ch3-19` | `lecture` | `Ch3(1).pptx` (Slide 28) | Lecture Question: Ch 3 PPTX Slide 28 | **A** | `Vigenère Autokey system` |
| `basmaga-ch3-20` | `original-testbank` | `Ch3(1).pptx` (Slide 30) | Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 30 | **A** | `One-Time Pad (OTP) unconditionally secure` |
| `basmaga-ch3-21` | `original-exam` | `Ch3(1).pptx` (Slide 31) | Original Exam: Midterm 2020 Q1.4 / Shannon Theorem | **A** | `NOT vulnerable to brute-force with infinite computing power` |
| `basmaga-ch3-22` | `original-testbank` | `Ch3(1).pptx` (Slide 32) | Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 32 | **A** | `Transposition ciphers` |
| `basmaga-ch4-01` | `original-testbank` | `Ch04(1).pptx` (Slide 4) | Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 4 | **B** | `Vast majority of network-based symmetric applications` |
| `basmaga-ch4-02` | `original-exam` | `Ch04(1).pptx` (Slide 5) | Original Exam: Midterm 2020 Q1.3 / Ch04(1).pptx Slide 5 | **A** | `Block of plaintext treated as a whole` |
| `basmaga-ch4-03` | `lecture` | `Ch04(1).pptx` (Slide 7) | Lecture Question: Table 4.1 / Ch04(1).pptx Slide 7 | **A** | `Ideal block cipher key size explosion` |
| `basmaga-ch4-04` | `original-testbank` | `Ch04(1).pptx` (Slide 9) | Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 9 | **A** | `Shannon's principle of Diffusion` |
| `basmaga-ch4-05` | `original-testbank` | `Ch04(1).pptx` (Slide 11) | Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 11 | **A** | `Feistel round left half output L_i` |
| `basmaga-ch4-06` | `original-exam` | `Ch04(1).pptx` (Slide 14) | Original Exam: Midterm 2022 Q2.3 / Ch04(1).pptx Slide 14 | **B** | `Feistel round function F must be reversible` |
| `basmaga-ch4-07` | `original-testbank` | `Ch04(1).pptx` (Slide 15) | Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 15 | **A** | `Increasing number of rounds in Feistel` |
| `basmaga-ch4-08` | `original-exam` | `Ch04(1).pptx` (Slide 17) | Original Exam: Midterm 2022 Q2.2 & Midterm 2020 Q1.10 | **B** | `DES block and key sizes` |
| `basmaga-ch4-09` | `original-testbank` | `Ch04(1).pptx` (Slide 18) | Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 18 | **B** | `Initial Permutation (IP) and IP^(-1) in DES` |
| `basmaga-ch4-10` | `original-exam` | `Ch04(1).pptx` (Slide 20) | Original Exam: Midterm 2020 Q1.8 & Q1.9 | **A** | `DES 16 rounds` |
| `basmaga-ch4-11` | `original-testbank` | `Ch04(1).pptx` (Slide 21) | Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 21 | **A** | `DES Expansion Permutation E` |
| `basmaga-ch4-12` | `original-testbank` | `Ch04(1).pptx` (Slide 22) | Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 22 | **A** | `DES S-box 6-bit input addressing` |
| `basmaga-ch4-13` | `original-exam` | `Ch04(1).pptx` (Slide 22) | Original Exam: Midterm 2020 Question [3] (3) | **A** | `S-box S2 input bits 101111` |
| `basmaga-ch4-14` | `original-testbank` | `Ch04(1).pptx` (Slide 25) | Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 25 | **A** | `Strict Avalanche Criterion (SAC)` |
| `basmaga-ch7-01` | `original-testbank` | `Ch07-Crypto(1).pdf` (p.3) | Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.3 | **B** | `Double-DES with two 56-bit keys` |
| `basmaga-ch7-02` | `original-testbank` | `Ch07-Crypto(1).pdf` (p.4) | Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.4 | **A** | `Meet-in-the-Middle attack on Double-DES` |
| `basmaga-ch7-03` | `original-testbank` | `Ch07-Crypto(1).pdf` (p.7) | Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.7 | **A** | `Triple-DES EDE sequence` |
| `basmaga-ch7-04` | `lecture` | `Ch07-Crypto(1).pdf` (p.7) | Lecture Question: Ch 7 PDF p.7 / Slide 8 | **A** | `Setting K1 equal to K2 in 3DES-EDE` |
| `basmaga-ch7-05` | `original-testbank` | `Ch07-Crypto(1).pdf` (p.8) | Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.8 | **A** | `Two-key Triple-DES (3DES-EDE2)` |
| `basmaga-ch7-06` | `original-testbank` | `Ch07-Crypto(1).pdf` (p.10) | Original Test Bank: Stallings Ch 7 / Table 7.1 | **A** | `Encrypts each 64-bit block independently` |
| `basmaga-ch7-07` | `original-testbank` | `Ch07-Crypto(1).pdf` (p.11) | Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.11 | **A** | `Cryptographic vulnerability of ECB` |
| `basmaga-ch7-08` | `original-testbank` | `Ch07-Crypto(1).pdf` (p.13) | Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.13 | **A** | `Cipher Block Chaining (CBC) mode input` |
| `basmaga-ch7-09` | `original-testbank` | `Ch07-Crypto(1).pdf` (p.14) | Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.14 | **A** | `CBC 1-bit transmission error propagation` |
| `basmaga-ch7-10` | `original-testbank` | `Ch07-Crypto(1).pdf` (p.16) | Original Test Bank: Stallings Ch 7 / PKCS#7 Standard | **A** | `PKCS#7 padding standard` |
| `basmaga-ch7-11` | `original-testbank` | `Ch07-Crypto(1).pdf` (p.16) | Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.16 | **A** | `Plaintext is exact multiple of block size` |
| `basmaga-ch7-12` | `original-testbank` | `Ch07-Crypto(1).pdf` (p.18) | Original Test Bank: Stallings Ch 7 / Table 7.1 | **A** | `Cipher Feedback (CFB) mode` |
| `basmaga-ch7-13` | `original-testbank` | `Ch07-Crypto(1).pdf` (p.20) | Original Test Bank: Stallings Ch 7 / Table 7.1 | **A** | `Output Feedback (OFB) mode` |
| `basmaga-ch7-14` | `original-testbank` | `Ch07-Crypto(1).pdf` (p.22) | Original Test Bank: Stallings Ch 7 / Table 7.1 | **A** | `Counter (CTR) mode decryption` |
| `basmaga-ch7-15` | `original-testbank` | `Ch07-Crypto(1).pdf` (p.23) | Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.23 | **A** | `Advantages of Counter (CTR) mode` |
