# Visual Content Audit: Removed Artwork vs. Preserved Technical Diagrams

## Executive Summary

The visual cleanup of EDU established a strict pedagogical criterion for all imagery, SVGs, and diagram components: **Educational functionality over decorative overhead**. 

Every visual element on the platform was audited. Decorative illustrations, non-functional artwork, and visual elements that merely repeated surrounding text were stripped. Conversely, all genuine cryptographic process flowcharts, protocol interaction models, state machines, mathematical trees, and comparative matrices were meticulously preserved and aligned with the **Soft Monochrome** design palette.

---

## 1. Visual Elements Removed (Zero Educational Loss)

The following visual elements were removed because they added visual noise, increased vertical scrolling, and failed to communicate any distinct technical information:

| Visual Element | Location | Nature of Visual | Reason for Removal | Code / Size Impact |
|---|---|---|---|---|
| **Decorative Computer & Lock SVGs** | `FourCryptoAreas.tsx` | Static vector paths showing desktop monitors, generic padlocks, and curved aesthetic arrows. | Pure decoration; did not explain mathematical key exchange, block ciphers, or hashing algorithms. | **~400 lines of SVG code eliminated**; component reduced from 543 to 152 lines. |
| **Inline Duplicate Mind Map Embed** | `LessonViewer.tsx` (lines 547–555) | Full interactive concept graph embedded directly in the middle of lesson body. | Redundantly displayed the exact same topics listed in the syllabus and topic cards, pushing core formulas down by 500px. | **~500px vertical page length eliminated**; mind maps remain fully accessible in the dedicated Review Hub (`/review?tab=mindmaps`). |
| **Decorative Category Icons & Badges** | `LessonViewer.tsx` header | Generic visual status icons and redundant decorative tags. | Cluttered the lesson header without aiding navigation or conceptual understanding. | Streamlined lesson header to title, timing, and official curriculum source reference. |
| **Repeated Arrow Drawings** | Classical Ciphers section | Static unidirectional SVG arrows between text paragraphs. | Replaced by clean typography and structured KaTeX formulas ($P \to C$). | Cleaner DOM hierarchy, reduced rendering latency. |

---

## 2. Preserved Technical Diagrams Inventory (24 High-Yield Assets)

The platform preserves 24 comprehensive, mathematically and cryptographically rigorous interactive diagrams and simulators. Each diagram directly reflects the official curriculum diagrams from **William Stallings (Cryptography and Network Security, 7th Edition)**, **NIST SP 800-38A**, **RFC 4949**, or **FIPS 46-3**.

### Table of Preserved Technical Diagrams

| # | Diagram Component | Academic / Standard Reference | Educational Justification & Core Teaching Role | Soft Monochrome Styling |
|---|---|---|---|---|
| **1** | [`PassiveActiveAttacksDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/PassiveActiveAttacksDiagram.tsx) | RFC 4949 / Stallings Fig 1.3 | **Attack Classification**: Contrasts passive attacks (Release of message contents, Traffic analysis) with active attacks (Masquerade, Replay, Modification, Denial of Service). | Neutral borders (`#E2E2DF`), dark charcoal emphasis (`#222222`), muted descriptions (`#686868`). |
| **2** | [`SymmetricModelDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/SymmetricModelDiagram.tsx) | Stallings Fig 2.1 | **Five Ingredients of Symmetric Encryption**: Visually traces $X \to E(K, X) = Y \to D(K, Y) = X$ through secure key channel vs insecure transmission channel. | Clean white surfaces (`#FFFFFF`), crisp mathematical notation. |
| **3** | [`SecurityPentagonDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/SecurityPentagonDiagram.tsx) | RFC 4949 / FIPS 199 / ITU-T X.800 | **Security Objectives Architecture**: Interactively connects Confidentiality, Integrity, and Availability with Authenticity and Accountability. | Soft hover states (`#ECEDEB`), academic keyword accents (`#FFF1A6`). |
| **4** | [`FourCryptoAreas.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/FourCryptoAreas.tsx) | University Syllabus Core Map | **4-Part Cryptographic Taxonomy**: Structured matrix classifying Symmetric, Asymmetric, Data Integrity, and Authentication Protocols with real-world applications. | Pure white cards (`#FFFFFF`), subtle borders (`#E2E2DF`), high contrast text (`#222222`). |
| **5** | [`PlayfairRulesDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/PlayfairRulesDiagram.tsx) | Classical Ciphers / 5x5 Matrix | **Three Playfair Geometric Rules**: Visualizes row shift, column shift, and rectangle corner swap on a $5 \times 5$ grid (with I/J combined). | Interactive matrix grid, clear cell coordinates, bold result callout. |
| **6** | [`FeistelStructureDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/FeistelStructureDiagram.tsx) | Stallings Fig 3.3 | **Feistel Encryption/Decryption Architecture**: Shows left/right 32-bit halves, round function $F(R_{i-1}, K_i)$, and XOR cross-over ensuring reversibility. | Directional flow connectors, step-by-step round progression. |
| **7** | [`FeistelRoundsDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/FeistelRoundsDiagram.tsx) | Horst Feistel Design Principles | **16-Round Data Flow**: Illustrates subkey schedule application ($K_1$ to $K_{16}$) and the final swap operation. | Compact vertical layout, expandable round inspect panels. |
| **8** | [`DesStructureDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/DesStructureDiagram.tsx) | FIPS 46-3 / Stallings Fig 3.4 | **DES Overall Pipeline**: Initial Permutation ($IP$), 16 rounds of Feistel, 32-bit swap, and Inverse Initial Permutation ($IP^{-1}$). | Clear bit-length labels ($64 \to 32/32 \to 64$), verified against standard. |
| **9** | [`DesKeyScheduleDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/DesKeyScheduleDiagram.tsx) | FIPS 46-3 / Stallings Fig 3.6 | **Key Generation Sub-system**: 64-bit key input, parity bit drop via $PC\text{-}1$ (56 bits), circular left shifts (1 or 2 bits), and subkey compression via $PC\text{-}2$ (48 bits). | Shift-table matrix, step-by-step round inspection. |
| **10** | [`DesSBoxDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/DesSBoxDiagram.tsx) | FIPS 46-3 / S-Box Lookups | **Non-Linear Substitution**: Visualizes how 48-bit XOR output splits into eight 6-bit inputs ($S_1 \dots S_8$), using bits 1 & 6 for row and 2–5 for column. | Interactive bit selector, highlighted matrix intersection. |
| **11** | [`ModesComparisonDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/ModesComparisonDiagram.tsx) | NIST SP 800-38A Table 7.1 | **Five NIST Modes Overview**: High-density interactive matrix comparing ECB, CBC, CFB, OFB, and CTR across 7 technical dimensions. | Responsive Soft Monochrome comparison table with sticky headers. |
| **12** | [`EcbModeDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/EcbModeDiagram.tsx) | NIST SP 800-38A / ECB | **Electronic Codebook**: Demonstrates deterministic block-by-block encryption and visual pattern leakage (ECB penguin vulnerability). | Clear plaintext-ciphertext alignment, vulnerability warning. |
| **13** | [`CbcModeDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/CbcModeDiagram.tsx) | NIST SP 800-38A / CBC | **Cipher Block Chaining**: Step-by-step IV injection, ciphertext feedback chaining ($C_i = E(K, P_i \oplus C_{i-1})$), and 1-block error propagation. | Chaining vectors with highlighted propagation boundaries. |
| **14** | [`CfbModeDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/CfbModeDiagram.tsx) | NIST SP 800-38A / CFB | **Cipher Feedback Mode**: Stream cipher simulation generating pseudo-random keystream from prior ciphertext blocks with shift register feedback. | Register shift visualization with clear bit-width notation. |
| **15** | [`OfbModeDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/OfbModeDiagram.tsx) | NIST SP 800-38A / OFB | **Output Feedback Mode**: Internal keystream feedback ($I_j = E(K, I_{j-1})$) completely independent of plaintext/ciphertext, preventing error extension. | Decoupled stream generation loop, error isolation indicator. |
| **16** | [`CtrModeDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/CtrModeDiagram.tsx) | NIST SP 800-38A / CTR | **Counter Mode**: Parallel block encryption of incremented counter values ($T_i$) followed by XOR with plaintext, enabling random access. | Parallel encryption columns, high-throughput indicators. |
| **17** | [`DoubleDesMitmDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/DoubleDesMitmDiagram.tsx) | Diffie & Hellman / Stallings Fig 7.1 | **Meet-in-the-Middle Attack**: Visualizes forward encryption table $\{E(K_1, P)\}$ colliding with backward decryption $\{D(K_2, C)\}$ at $2^{57}$ ops. | Forward and backward arrows converging on intermediate state $M$. |
| **18** | [`TripleDesEdeDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/TripleDesEdeDiagram.tsx) | FIPS 46-3 / Stallings Fig 7.2 | **3DES EDE Architecture**: Visualizes Encrypt-Decrypt-Encrypt sequence and backward compatibility collapse to Single-DES when $K_1 = K_2$. | Dynamic mode toggle (2-Key vs 3-Key vs Single-DES fallback). |
| **19** | [`VernamOtpDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/VernamOtpDiagram.tsx) | Gilbert Vernam / Shannon (1949) | **One-Time Pad Perfect Secrecy**: Traces bitwise XOR with truly random, single-use key stream equal in length to the plaintext ($H(M|C) = H(M)$). | Interactive XOR truth table, key reuse vulnerability alert. |
| **20** | [`VigenereDiagram.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/VigenereDiagram.tsx) | Polyalphabetic Substitution | **Vigenère Tableau & Periodic Shifts**: Traces key repetition alignment above plaintext characters and intersection with the Vigenère square. | Interactive row/column highlighter and Kasiski test explanation. |
| **21** | [`BlockVsStreamTable.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/BlockVsStreamTable.tsx) | Stallings Chapter 3 | **Comparative Matrix**: Compact side-by-side evaluation of block size, latency, error propagation, buffering, and algorithm examples. | Clean table styling, high contrast headers, Soft Monochrome borders. |
| **22** | [`InteractiveMindMap.tsx`](file:///e:/EDU/crypto-edu/src/components/mindmaps/InteractiveMindMap.tsx) | Complete Course Knowledge Graph | **Hierarchical Course Mind Map**: Multi-level visual graph of all 5 chapters, 18 topics, and 50 lessons, located in Review Hub. | Smooth zoom/pan canvas, keyword filters, collapsible subtrees. |
| **23** | [`InteractiveSolvingBoard.tsx`](file:///e:/EDU/crypto-edu/src/components/educational/InteractiveSolvingBoard.tsx) | Pedagogical Engine | **Step-by-Step Mathematical Board**: Interactive workspace displaying problem definition, extracted values, formulas, intermediate steps, and final verified answer. | Classroom blackboard feel, step navigation pills, LaTeX equations. |
| **24** | **Interactive Cryptographic Simulators** | Practical Laboratory Suite | **8 Hands-on Calculation Engines**: CaesarTool, PlayfairTool, HillTool, VigenereTool, ModCalcTool, EuclideanTool, DesSBoxTool, ModesSimulator. | Real-time computation, parameter input fields, step log inspect. |

---

## 3. Pedagogical Distinction: Why These 24 Were Preserved

Unlike generic decorative artwork, every preserved diagram satisfies three non-negotiable educational criteria:
1. **Dynamic State Representation**: Shows mathematical or structural state transitions that cannot be adequately grasped through static prose alone (e.g., Feistel round crossing, DES key left shifts).
2. **Direct Exam Alignment**: Directly reflects questions asked on the university midterm exams (e.g., identifying 3DES backward compatibility, calculating MITM operations, tracing DES S-box outputs).
3. **Interactive Investigation**: Enables students to alter parameters (keys, plaintexts, shift values) and observe live cryptographic output, reinforcing practical understanding over rote memorization.

