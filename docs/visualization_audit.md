# EDU Platform — Comprehensive Educational Visualization Audit
**Document Version:** 1.0.0  
**Target Audience:** Fourth-Year Computer Science University Students  
**Subject:** Cryptography & Network Security (IS401)  
**Standard References:** William Stallings 7th/8th Edition, NIST SP 800-33, NIST SP 800-38A, FIPS 46-3, FIPS 197, RFC 4949, Official Midterm Exams (2020 & 2022)

---

## 1. Executive Summary

This audit assesses the educational quality, rendered physical dimensions, SVG `viewBox` coordinates, label readability, internal whitespace efficiency, and instructional value of all educational diagrams across the EDU platform.

### Core Problems Identified
1. **Thumbnail-Sized Illustrations in Full Cards:** In `FourCryptoAreas.tsx`, the four cryptographic areas (Symmetric, Asymmetric, Hash, Authentication) were rendered in miniature `w-36 h-12` (144px by 48px) SVG boxes with 6–7px text. Inside full-width desktop cards, this left over 75% of the visual space unused and forced students to squint at tiny labels.
2. **Missing Mind Maps for Conceptual Hierarchies:** Students preparing for final examinations need to see relationships, dependencies, and classifications (e.g., OSI Security Architecture, Number Theory dependency chain, Classical Cipher classification, DES internal architecture, and Block Cipher modes).
3. **Responsive Sizing Inconsistencies:** Some diagrams relied on fixed SVG sizes or small container wrappers that did not scale proportionally on wide screens.
4. **Lack of Keyword Association:** Visual labels did not visually link to core exam memory cues (e.g., `Shared Key → Symmetric`, `Unauthorized Disclosure → Confidentiality`).

---

## 2. Diagram-by-Diagram Audit Matrix

| Chapter & Lesson | Diagram Name & File | Type | Current Rendered Dim (Desktop) | Label Readability | Internal Whitespace | Assessment & Required Improvements | Status |
|---|---|---|---|---|---|---|---|
| **Ch 1 / L1** | Four Cryptographic Areas (`FourCryptoAreas.tsx`) | 4 Concept Cards | 144px × 48px (tiny `w-36 h-12`) | **Unreadable (6–7px text)** | Excessive (card empty around SVG) | **CRITICAL FIX:** Completely redesign all 4 SVGs to 780px × 180px with clear components, flow arrows, math formulas, and distinct keys. | **Fixing in Phase 2** |
| **Ch 1 / L3** | CIA Security Triad (`CiaTriadDiagram.tsx`) | Interactive Triad SVG | 650px × 340px | High (12–14px) | Balanced | **Adequate.** Add zoom controls and link to security objectives mind map. | **Upgraded** |
| **Ch 1 / L4** | Security Pentagon (`SecurityPentagonDiagram.tsx`) | Interactive Polygon | 480px × 360px | Good (11–13px) | Well-proportioned | **Adequate.** Add interactive detail drawer and touch optimization. | **Upgraded** |
| **Ch 1 / L8, L9** | Passive vs. Active Attacks (`PassiveActiveAttacksDiagram.tsx`) | Taxonomy & Threat Map | 950px × 380px | High (12–14px) | Well-proportioned | **Good.** Ensure full-width container on wide screens; add memory cues (`Observe → Passive`, `Alter → Active`). | **Upgraded** |
| **Ch 1 / L15** | Network Security Model (`NetworkSecurityModelDiagram.tsx`) | Architecture (Fig 1.2) | 960px × 360px | High (12–14px) | Good | **Good.** 4 fundamental design tasks clearly articulated; add zoom toolbar. | **Upgraded** |
| **Ch 2 / L3** | Euclidean Ladder & Extended Euclid (`EuclideanLadderDiagram.tsx`) | Process & Matrix Table | 850px × 380px | High (13–15px) | Balanced | **Good.** Interactive division ladder with quotient-remainder steps. | **Upgraded** |
| **Ch 2 / L8** | Chinese Remainder Theorem (`CrtWorkflowDiagram.tsx`) | 4-Step Process Flow | 880px × 360px | High (12–14px) | Balanced | **Good.** $M, M_i, M_i^{-1}, c_i$ steps clearly delineated. | **Upgraded** |
| **Ch 3 / L1** | Symmetric Cryptosystem Model (`SymmetricModelDiagram.tsx`) | Architecture (Fig 3.1) | 1240px × 260px | High (11–13px) | Balanced | **High Quality.** Clear secure channel for key $K$, insecure channel for $Y$, opponent node. | **Upgraded** |
| **Ch 3 / L3** | Caesar Shift Wheel (`CaesarWheelDiagram.tsx`) | Interactive Strip & Wheel | 800px × 280px | High (12–14px) | Balanced | **Good.** Interactive modulo 26 dual wheel and letter mapping. | **Upgraded** |
| **Ch 3 / L5** | Playfair 5×5 Matrix Rules (`PlayfairRulesDiagram.tsx`) | Interactive Matrix & Rules | 750px × 320px | High (12–14px) | Balanced | **Good.** MONARCHY keyword matrix with Same Row, Column, Rectangle highlights. | **Upgraded** |
| **Ch 4 / L3** | Feistel Network Architecture (`FeistelNetworkDiagram.tsx`) | Classical Feistel Structure | 460px × 520px | Good (11–13px) | Balanced | **Good.** Round function $F$, XOR invertibility proof, subkey order. | **Upgraded** |
| **Ch 4 / L4** | DES Overall Architecture (`DesArchitectureDiagram.tsx`) | 16-Round DES Pipeline | 950px × 460px | High (11–13px) | Balanced | **Good.** IP, 16 Feistel rounds, 32-bit halves, $IP^{-1}$, key schedule. | **Upgraded** |
| **Ch 4 / L5** | DES Round Function $F$ (`DesRoundFunctionDiagram.tsx`) | Internal Function $F$ | 920px × 420px | High (11–13px) | Balanced | **Good.** Expansion $E$ (32b $\to$ 48b), XOR with $K_i$, 8 S-Boxes, Permutation $P$. | **Upgraded** |
| **Ch 4 / L6** | Avalanche Effect Visualizer (`AvalancheEffectDiagram.tsx`) | Round Slider & Bit Deltas | 880px × 380px | High (12–14px) | Balanced | **Good.** Tables 4.3 & 4.4 avalanche cascading with SAC / BIC verification. | **Upgraded** |
| **Ch 7 / L1** | Double-DES Meet-in-the-Middle (`DoubleDesMitMDiagram.tsx`) | Attack Complexity Analysis | 950px × 380px | High (12–14px) | Balanced | **Good.** Table size $2^{56}$, attack time $2^{57} \ll 2^{112}$. | **Upgraded** |
| **Ch 7 / L2** | Block Cipher Modes (`BlockCipherModesDiagram.tsx`) | NIST SP 800-38A Modes | 1100px × 480px | High (11–13px) | Balanced | **High Quality.** ECB, CBC with 1-bit error propagation proof, CTR 6 advantages. | **Upgraded** |

---

## 3. Required Mind Map Catalog

The following interactive mind maps are required to address high-level relationships, classifications, and exam revision:

### Chapter 1: Computer & Network Security Concepts
1. **Security Objectives & Requirements Mind Map:** Central node `Computer & Network Security` $\to$ CIA Triad + Authenticity + Accountability + NIST Definitions.
2. **OSI Security Architecture Mind Map:** Central node `OSI Security Architecture (X.800)` $\to$ Security Attacks, Security Services, Security Mechanisms.
3. **Security Attacks Taxonomy Mind Map:** Central node `Security Attacks` $\to$ Passive (Release of Contents, Traffic Analysis) vs Active (Masquerade, Replay, Modification, DoS).
4. **X.800 Security Services Mind Map:** 5 primary services (Authentication, Access Control, Data Confidentiality, Data Integrity, Nonrepudiation) + 14 specific subservices.
5. **Security Mechanisms Mind Map:** Specific Mechanisms (Encipherment, Digital Signature, Access Control, Data Integrity, Authentication Exchange, Traffic Padding, Routing Control, Notarization) vs Pervasive Mechanisms (Trusted Functionality, Security Label, Event Detection, Security Audit Trail, Security Recovery).

### Chapter 2: Introduction to Number Theory
1. **Number Theory Academic Landscape Mind Map:** Divisibility $\to$ Euclidean Algorithm $\to$ Modular Arithmetic $\to$ Prime Numbers $\to$ Euler & Fermat Theorems $\to$ Discrete Logarithms.
2. **GCD & Euclidean Algorithms Mind Map:** Divisibility condition $\to$ $\gcd(a,b)$ $\to$ Relatively Prime ($\gcd=1$) $\to$ Euclidean Algorithm $\to$ Extended Euclidean $\to$ Modular Multiplicative Inverse.
3. **Modular Arithmetic Properties Mind Map:** Modulo definition, Congruence, Properties in $\mathbb{Z}_n$, Additive Inverses, Multiplicative Inverses, Reduced Residue System.
4. **Primes, Factorization & Theorems Mind Map:** Fundamental Theorem of Arithmetic $\to$ Fermat's Little Theorem ($a^{p-1} \equiv 1 \pmod p$) $\to$ Euler's Totient $\phi(n)$ $\to$ Euler's Generalization ($a^{\phi(n)} \equiv 1 \pmod n$) $\to$ Primality Testing (Miller-Rabin, AKS).
5. **Advanced Modular Algorithms Mind Map:** Chinese Remainder Theorem ($x \equiv \sum a_i M_i M_i^{-1} \pmod M$) $\to$ Modular Exponentiation $\to$ Primitive Roots $\to$ Discrete Logarithms.

### Chapter 3: Classical Encryption Techniques
1. **Classical Ciphers Classification Mind Map:** Substitution vs Transposition $\to$ Monoalphabetic vs Polyalphabetic $\to$ Product Ciphers $\to$ Steganography.
2. **Substitution Techniques Mind Map:** Caesar ($k=3$) $\to$ Monoalphabetic ($26!$) $\to$ Playfair ($5\times 5$ digraph) $\to$ Hill (Linear Algebra matrix) $\to$ Polyalphabetic (Vigenère, Autokey) $\to$ Vernam / One-Time Pad (Perfect Secrecy).
3. **Cryptanalysis & Attack Models Mind Map:** Ciphertext-Only, Known-Plaintext, Chosen-Plaintext, Chosen-Ciphertext $\to$ Brute Force vs Cryptanalysis $\to$ Frequency Analysis.
4. **Transposition Techniques Mind Map:** Rail Fence, Row-Column Permutation, Multiple Transposition, Route Ciphers.

### Chapter 4: Block Ciphers & DES
1. **Block Cipher Fundamentals Mind Map:** Stream vs Block Ciphers, Ideal Block Cipher ($2^n!$), Shannon's Principles (Confusion via Substitution, Diffusion via Permutation).
2. **Feistel Network Architecture Mind Map:** Reversible structure, Round Function $F$, Subkeys, XOR self-cancellation, Left/Right swap, Decryption key reversal.
3. **DES Architecture Mind Map:** 64-bit plaintext, Initial Permutation (IP), 16 Rounds, Function $F$ (Expansion $E$, XOR with 48-bit subkey, 8 S-Boxes, Permutation $P$), Key Schedule (PC-1, 28-bit circular shifts, PC-2), Inverse IP ($IP^{-1}$).
4. **DES Security & Avalanche Mind Map:** Strict Avalanche Criterion (SAC), Bit Independence Criterion (BIC), 56-bit key search ($2^{56}$), Timing Attacks, Differential Cryptanalysis defense.

### Chapter 5/7: Block Cipher Operations & Modes
1. **Multiple Encryption Mind Map:** Double DES, Meet-in-the-Middle Attack ($2^{57}$ vs $2^{112}$), Triple DES 2-Key & 3-Key, EDE Architecture.
2. **NIST SP 800-38A Modes Mind Map:** ECB, CBC (Chaining, IV, 1-bit error propagation), CFB, OFB, CTR (Counter, parallelization, precomputation, random access).

---

## 4. Minimum Dimensions & Legibility Standards

All platform visualizations must adhere to the following responsive design rules:
- **Font Sizes inside SVG:** Root node labels $\ge 13\text{px}$ bold; branch nodes $\ge 11\text{px}$; auxiliary annotations $\ge 10\text{px}$.
- **Line Weights:** Primary connector vectors $2\text{px}$ solid `#171717`; secondary/dashed control lines $1.5\text{px}$ dashed `#525252` or `#A3A3A3`.
- **Canvas aspect ratios:** Use `viewBox` coordinates with generous margins (minimum 15px padding inside viewBox borders).
- **Interactive Controls:** All mind maps and technical diagrams must include interactive zoom, pan, reset, and direct lesson navigation links.

