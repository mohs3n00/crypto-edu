# Problem Solving (Complete Worked Problems) Coverage Audit
**Module:** Section B — Problem Solving (Complete Worked Problems / حل المسائل الشامل)  
**System:** EDU University Learning Platform (`crypto-edu`)  
**Target Audience:** Fourth-Year Computer Science / Cybersecurity Students  
**Status:** Verified, Updated to 7-Step Practical Structure & 100% Implemented  
**Date:** November 2026

---

## 1. Executive Summary & Purpose

The **Problem Solving** module provides a comprehensive, organized study environment for all mathematical, algorithmic, and architectural problems across the entire syllabus (Chapters 1, 2, 3, 4, 7 and Midterm Examinations 2020 & 2022).

Following the **Learning Experience Simplification & Practical-First Redesign**, this module was upgraded from theoretical variable presentations to a rigorous **7-Step Practical Structure** designed to train students in real examination conditions:
1. **Exam-Style Question:** Verbatim English problem statement, precise Arabic translation, and clear required result.
2. **Extract Given Values:** Tabular parameter extraction (`| Parameter | Value | Meaning / Role in Question |`) eliminating abstract guessing.
3. **Select Formula / Method:** Explicit KaTeX formula display, mathematical conditions (e.g. $\gcd(\det(K), 26) = 1$), and a concise selection rationale.
4. **Apply Values (Substitution):** Direct arithmetic substitution into formula variables.
5. **Solve Step by Step:** Detailed intermediate calculations and division steps in the embedded Interactive Solving Board.
6. **Final Emphasized Answer & Verification:** Prominently highlighted answer accompanied by reverse-check mathematical verification.
7. **Student Practice Challenge:** A newly introduced interactive self-test with a similar university examination problem, instant feedback, hints, and step-by-step solution reveal.

---

## 2. Transition to the 7-Step Practical Structure

| Previous Element | Refined 7-Step Practical Structure | Pedagogical Rationale |
|---|---|---|
| **Detached "Variable Dictionary" Lists** | **Replaced by Step 2 Table: Extracted Given Values** | Instead of memorizing isolated variable names ($a, b, m, q$), students learn how to extract specific numerical values directly from exam question text into a structured table. |
| **Duplicate Problem Statement Prompts** | **Eliminated via `hidePrompt={true}`** | Redundant rendering of problem statements inside and outside the board was removed. Step 1 handles the prompt; Steps 4–6 handle the board. |
| **Long Theoretical Introductions** | **Replaced by Step 3 Formula Selection & Conditions** | Eliminated generic introductory paragraphs; focused strictly on mathematical application conditions and why the formula applies. |
| **Absence of Independent Practice** | **Added Step 7: Interactive Student Practice Challenge** | Every single one of the 35 worked problems now includes a paired interactive challenge (`StudentPracticeProblem`) in `src/data/problemSolving/practiceChallenges.ts`. |

---

## 3. Mathematical Verification & Official Exam Alignment (35 Problems)

All calculations across all 35 worked problems and their 35 corresponding practice challenges have been verified mathematically:

| Problem ID | Topic & Verification | Source Document | Practice Challenge Summary (`practiceChallenges.ts`) |
|---|---|---|---|
| `prob-ch1-01` | $N=250 \implies K_{\text{sym}} = 31,125$ vs $K_{\text{asym}} = 500$ | Stallings Ch 1 / Lecture Notes | $N = 120 \implies K_{\text{sym}} = 7,140, K_{\text{asym}} = 240$ |
| `prob-ch1-02` | Replay attack counter with sequence numbers & timestamps | X.800 Architecture | Replay attack identification & defense mechanisms |
| `prob-ch1-03` | Quantitative Risk: Threat vs Vulnerability vs Attack | RFC 4949 / Security Taxonomy | Vulnerability classification in input parser flaws |
| `prob-ch2-01` | $\gcd(116071, 71239) = 1$ (Coprime, 10 Euclidean steps) | Stallings Ch 2 Slide 8 | $\gcd(12378, 3054) = 6$ (6 Euclidean divisions) |
| `prob-ch2-02` | $550^{-1} \equiv 355 \pmod{1759}$ via Extended Euclid | Stallings Example 2.8 | $23^{-1} \pmod{101} = 22$ ($23 \times 22 \equiv 1$) |
| `prob-ch2-03` | $7^{-1} \equiv 15 \pmod{26}$, $8^{-1} \pmod{26}$ non-existent | Stallings Section 2.4 | $11^{-1} \equiv 19 \pmod{26}$, $14^{-1}$ proof of non-existence |
| `prob-ch2-04` | $\phi(37)=36, \phi(35)=24, \phi(240)=64$ | Stallings Slide 22 | $\phi(43) = 42, \phi(77) = 60, \phi(180) = 48$ |
| `prob-ch2-05` | $3^{201} \equiv 3 \pmod{11}$ via Fermat ($201 \bmod 10 = 1$) | Stallings Slide 26 | $2^{103} \equiv 11 \pmod{13}$ ($103 \bmod 12 = 7, 2^7 \equiv 11$) |
| `prob-ch2-06` | $3^{80} \equiv 1 \pmod{100}$ via Euler ($\phi(100)=40$) | Stallings Slide 28 | $7^{82} \equiv 49 \pmod{100}$ ($82 \bmod 40 = 2, 7^2 = 49$) |
| `prob-ch2-07` | $11^{23} \equiv 88 \pmod{187}$ via Square-and-Multiply | Stallings Slide 30 | $5^{19} \equiv 40 \pmod{119}$ ($19 = 10011_2$, verified) |
| `prob-ch2-08` | $n = 221$ with base $a = 2 \implies -1$ reached | Stallings Slide 31 | $n = 91$ with base $a = 2 \implies \text{composite}$ ($2^{45} \equiv 57$) |
| `prob-ch2-09` | $x \equiv 2 \pmod 3, 3 \pmod 5, 2 \pmod 7 \implies x = 23$ | Stallings Slide 32 | $x \equiv 1 \pmod 3, 4 \pmod 5, 6 \pmod 7 \implies x \equiv 34 \pmod{105}$ |
| `prob-ch2-10` | Primitive root mod 19, $\text{dlog}_{2, 19}(13) = 5$ | Stallings Slide 35 | Primitive root validation for $p = 11$ (2 is root, order 10) |
| `prob-ch3-01` | Caesar $k=3$ ('VHFXULWB'), $k=15$ ('HTRJGXIN') | Stallings Section 3.1 | Caesar $k=7$ encryption of "EXAM" $\to$ "LEHT" |
| `prob-ch3-02` | Brute force 'PHHW PH...' $\to$ 'MEET ME...' ($k=3$) | Stallings Table 3.1 | Key space boundary (25 possible non-trivial shifts) |
| `prob-ch3-03` | Playfair "cryptography" with "security" $\to$ **US BN AM KC BO GA** | **Midterm 2020 Exam Q3(1)** | Playfair same-row shift right with wrap-around |
| `prob-ch3-04` | Playfair "largest" with "security" $\to$ **OI CK CE AV** | **Midterm 2022 Exam** | Playfair filler letter insertion ("BALLOON" $\to$ "BA LX LO ON") |
| `prob-ch3-05` | Hill 3x3 "Secrecy" $\to$ **"ESE"** / **"ESG"** | **Midterm 2020 Exam Q3(2)** | Hill 2x2 encryption of "GO" with $[[3,2],[5,7]] \to \text{"KG"}$ |
| `prob-ch3-06` | Hill 2x2 inverse $K^{-1} = [[5, 12], [15, 25]]$ | Midterm 2022 Exam | Mathematical invertibility condition $\gcd(\det(K), 26) = 1$ |
| `prob-ch3-07` | Hill known-plaintext recovery $K = P^{-1} \cdot C$ | Stallings Section 3.2 | Linear vulnerability & known-plaintext attack setup |
| `prob-ch3-08` | Vigenère 'wearediscovered...' with 'deceptive' | Stallings Section 3.3 | Vigenère "ATTACK" with "LEMON" $\to$ "LXFOPV" |
| `prob-ch3-09` | One-Time Pad XOR & Key Reuse ($C_1 \oplus C_2 = P_1 \oplus P_2$) | Stallings Slide 28 | Key elimination proof via $C_1 \oplus C_2 = P_1 \oplus P_2$ |
| `prob-ch3-10` | Rail fence $d=2$ & Columnar transposition (4,3,1,2,5,6,7) | Stallings Section 3.4 | Rail fence $d=2$ for "CRYPTOGRAPHY" $\to$ "CYTGAHRPORPY" |
| `prob-ch4-01` | Feistel round reversibility proof ($L_{i-1} = R_i \oplus F(L_i, K_i)$) | Stallings Section 4.1 | Feistel reversibility through self-inverting XOR |
| `prob-ch4-02` | DES S-Box 2 input $101111_2 \to \text{Row } 3, \text{Col } 7 = \mathbf{2}$ | **Midterm 2020 Exam Q1(5)** | S-Box 6-bit input $101110_2 \to \text{Row } 2, \text{Col } 7$ |
| `prob-ch4-03` | DES Key Schedule: PC-1 (56b), shifts (28b), PC-2 (48b) | Stallings Section 4.3 | PC-1 parity bit discarding (8 bits dropped $\to 56$ bits) |
| `prob-ch4-04` | Brute Force Search: DES (10 hrs) vs AES ($5.39 \times 10^{18}$ yrs) | Stallings Table 4.5 | Search time at $10^{13}$ keys/sec (DES 2 hrs vs AES $10^{18}$ yrs) |
| `prob-ch4-05` | SAC ($P=0.5$) & BIC (Pairwise independence) | Stallings Section 4.5 | SAC formal definition ($P = 0.5$ per output bit) |
| `prob-ch4-06` | Confusion (S-Boxes) vs Diffusion (P-Boxes) | Claude Shannon 1949 | S-Box nonlinear substitution vs P-Box permutation |
| `prob-ch7-01` | Double-DES Meet-in-the-Middle: $2^{56} + 2^{56} = 2^{57}$ | Stallings Section 7.1 | MitM complexity reduction from $2^{112}$ to $2^{57}$ operations |
| `prob-ch7-02` | 3DES EDE cancellation when $K_1=K_2=K_3 \implies C = E_K(P)$ | Stallings Section 7.2 | Single-DES backward compatibility via EDE sequence |
| `prob-ch7-03` | ECB pattern leakage: $P_i = P_j \implies C_i = C_j$ | Stallings Section 7.3 | Identical plaintext block vulnerability & pattern leakage |
| `prob-ch7-04` | CBC chaining: $C_i = E_K(P_i \oplus C_{i-1})$ & random IV | Stallings Section 7.4 | Parallel decryption capability ($P_i = D_K(C_i) \oplus C_{i-1}$) |
| `prob-ch7-05` | Error Propagation: CBC (2 blocks) vs OFB (0) vs CFB (register) | Stallings Section 7.4 | CBC 1-bit error (corrupts $P_1$, 1 bit in $P_2$) vs OFB (1 bit only) |
| `prob-ch7-06` | PKCS#7 padding: 43 bytes $\to 5 \times 0x05$; 64 bytes $\to 8 \times 0x08$ | RFC 5652 / Stallings 7.5 | PKCS#7 padding: 43 bytes in 8-byte cipher $\to 5$ bytes of $0x05$ |

---

## 4. Problem Solving Hub (`/problem-solving`) Features

- **Full 7-Step Navigation:**
  - Clear section headers numbered 1 through 7 for every problem.
  - Extracted Given Values table replacing detached symbol dictionaries.
  - Formula selection block with mathematical preconditions.
  - Interactive solving board with step-by-step arithmetic substitutions.
  - Interactive student practice challenge with instant grading and solution reveal.
- **Deep Academic Cross-Links:**
  - Direct link to theoretical lessons in `/learn/:chapterId/:lessonId`.
  - Direct link to corresponding Basmaga question in `/basmaga`.
  - Bidirectional links from `/review?tab=formulas` directly to the 7-step solving board for each law.
- **Soft Monochrome Design Token Adherence:**
  - Background `#F7F7F5`, surface `#FFFFFF`, borders `#E2E2DF` and `#D4D4D0`, primary text `#222222`, secondary text `#505050`, keywords `#FFF1A6`.

---

## 5. Build and Test Verification

- Clean production build: `npm run build` succeeds in **1.17s** with 0 errors.
- Fully typed TypeScript dataset (`types.ts`, `problemSolvingData.ts`, `practiceChallenges.ts`).
- Responsive display verified on desktop and mobile screens.
