# Mathematical Formula Coverage & Verification Audit

**Platform:** EDU — University Learning Platform (IS401)  
**Standard References:** William Stallings 7th/8th Ed., Official Lecture Notes, Exam Papers.  
**Audited Date:** 2026-11-09  
**Coverage Standard:** Every mathematical formula from the lecture slides and textbook chapters must be cataloged, implemented in LaTeX, verified for boundary conditions, and mapped to its website location.

---

## Complete Formula Inventory

| Formula ID | Name & Description | Mathematical Expression | Conditions & Assumptions | Website Location | Verification Status |
|---|---|---|---|---|---|
| `f-divisibility` | Divisibility Relation | $a = mb \iff b \mid a$ | $b \neq 0, a, b, m \in \mathbb{Z}$ | `ch2-l1`, `formulas.ts` | Verified ($13 \mid 182$) |
| `f-div-linear-comb` | Linear Combination Divisibility | $b \mid g \land b \mid h \implies b \mid (mg + nh)$ | $m, n, g, h \in \mathbb{Z}, b \neq 0$ | `ch2-l1`, `formulas.ts` | Verified ($7 \mid (3\cdot 14 + 2\cdot 63)$) |
| `f-division-algo` | Division Algorithm | $a = qn + r, \quad 0 \le r < n$ | $n > 0, q = \lfloor a/n \rfloor$ | `ch2-l2`, `formulas.ts` | Verified ($-11 = (-2)(7) + 3$) |
| `f-gcd-properties` | GCD Sign & Zero Invariance | $\gcd(a, b) = \gcd(\|a\|, \|b\|), \gcd(a, 0) = \|a\|, \gcd(0, 0) = 0$ | $a, b \in \mathbb{Z}$ | `ch2-l3`, `formulas.ts` | Verified (Stallings p. 32) |
| `f-coprime` | Coprime / Relatively Prime Condition | $\gcd(a, b) = 1$ | $a, b$ share no common prime factors | `ch2-l3`, `formulas.ts` | Verified ($\gcd(8, 15) = 1$) |
| `f-euclidean-step` | Euclidean Division Step | $r_{i-1} = q_i r_i + r_{i+1}$ | $0 \le r_{i+1} < r_i$ | `ch2-l4`, `formulas.ts` | Verified ($\gcd(710, 310) = 10$) |
| `f-modular-congruence` | Modular Congruence Equivalence | $a \equiv b \pmod n \iff n \mid (a - b)$ | $n > 0, a, b \in \mathbb{Z}$ | `ch2-l5`, `formulas.ts` | Verified ($73 \equiv 4 \pmod{23}$) |
| `f-mod-addition` | Modular Addition Reduction | $[(a \bmod n) + (b \bmod n)] \bmod n = (a + b) \bmod n$ | $n > 0$ | `ch2-l5`, `formulas.ts` | Verified ($11 + 15 \equiv 2 \pmod 8$) |
| `f-mod-multiplication` | Modular Multiplication Reduction | $[(a \bmod n) \times (b \bmod n)] \bmod n = (a \times b) \bmod n$ | $n > 0$ | `ch2-l5`, `formulas.ts` | Verified ($11 \times 15 \equiv 5 \pmod 8$) |
| `f-modular-inverse` | Modular Multiplicative Inverse | $a \cdot a^{-1} \equiv 1 \pmod n$ | $\gcd(a, n) = 1$ strictly required | `ch2-l6`, `formulas.ts` | Verified ($3 \times 3 \equiv 1 \pmod 8$) |
| `f-bezout-extended-euclid` | Bézout's Identity / Extended Euclidean | $d = \gcd(a, b) = ax + by$ | $x, y \in \mathbb{Z}$ | `ch2-l7`, `formulas.ts` | Verified ($1759(-111) + 550(355) = 1$) |
| `f-prime-factorization` | Fundamental Theorem of Arithmetic | $a = \prod_{i=1}^t p_i^{a_i}$ | $p_i$ distinct primes, $a_i > 0$ | `ch2-l8`, `formulas.ts` | Verified ($24 = 2^3 \times 3^1$) |
| `f-fermat-little` | Fermat's Little Theorem | $a^{p-1} \equiv 1 \pmod p$ | $p$ prime, $\gcd(a, p) = 1$ | `ch2-l8`, `formulas.ts` | Verified ($3^{10} \equiv 1 \pmod{11}$) |
| `f-fermat-alt` | Fermat's Theorem Alternative Form | $a^p \equiv a \pmod p$ | $p$ prime, holds for any integer $a$ | `ch2-l8`, `formulas.ts` | Verified ($2^5 = 32 \equiv 2 \pmod 5$) |
| `f-euler-totient-product` | Euler's Totient Product Formula | $\phi(n) = n \prod_{p \mid n} \left(1 - \frac{1}{p}\right)$ | $p$ ranges over distinct prime factors | `ch2-l9`, `formulas.ts` | Verified ($\phi(26) = 26(1/2)(12/13) = 12$) |
| `f-euler-totient-prime-power` | Totient of Prime Power | $\phi(p^k) = p^k - p^{k-1} = p^{k-1}(p - 1)$ | $p$ prime, $k \ge 1$ | `ch2-l9`, `formulas.ts` | Verified ($\phi(8) = 2^2(1) = 4$) |
| `f-euler-totient-multiplicative` | Totient Multiplicative Property | $\phi(pq) = \phi(p)\phi(q) = (p - 1)(q - 1)$ | $\gcd(p, q) = 1$ | `ch2-l9`, `formulas.ts` | Verified ($\phi(21) = 2 \times 6 = 12$) |
| `f-euler-theorem` | Euler's Theorem | $a^{\phi(n)} \equiv 1 \pmod n$ | $\gcd(a, n) = 1$ | `ch2-l9`, `formulas.ts` | Verified ($7^{120} \equiv 1 \pmod{100}$) |
| `f-euler-theorem-alt` | Euler's Theorem Alternative Form | $a^{\phi(n)+1} \equiv a \pmod n$ | $\gcd(a, n) = 1$ | `ch2-l9`, `formulas.ts` | Verified |
| `f-miller-rabin-decomp` | Miller-Rabin Decomposition | $n - 1 = 2^k q$ | $n > 2$ odd, $q$ odd, $k \ge 1$ | `ch2-l10`, `formulas.ts` | Verified ($220 = 2^2 \times 55$) |
| `f-miller-rabin-test` | Miller-Rabin Primality Test Conditions | $a^q \equiv 1 \pmod n \lor \exists j \in [0, k-1]: a^{2^j q} \equiv -1 \pmod n$ | $1 < a < n - 1$ | `ch2-l10`, `formulas.ts` | Verified ($n=221, a=2$ composite) |
| `f-crt` | Chinese Remainder Theorem System | $x \equiv \sum_{i=1}^k a_i M_i y_i \pmod M$ | $\gcd(m_i, m_j) = 1, M = \prod m_i, y_i = M_i^{-1} \bmod m_i$ | `ch2-l11`, `formulas.ts` | Verified ($x \equiv 23 \pmod{105}$) |
| `f-discrete-log` | Discrete Logarithm Definition | $y = a^x \bmod n \implies x = \operatorname{dlog}_{a, n}(y)$ | $a$ is primitive root of $n$ | `ch2-l11`, `formulas.ts` | Verified ($\operatorname{dlog}_{2, 19}(3) = 13$) |
| `f-discrete-log-mult` | Discrete Logarithm Product Rule | $\operatorname{dlog}_{a, n}(xy) = [\operatorname{dlog}_{a, n}(x) + \operatorname{dlog}_{a, n}(y)] \bmod \phi(n)$ | $\gcd(x, n) = \gcd(y, n) = 1$ | `ch2-l11`, `formulas.ts` | Verified Modulo $\phi(19)=18$ |
| `f-symmetric-model` | Symmetric Cryptosystem | $Y = \mathrm{E}(K, X), \quad X = \mathrm{D}(K, Y)$ | Shared secret key $K$ | `ch3-l1`, `formulas.ts` | Verified (Kerckhoffs's principle) |
| `f-pairwise-keys` | Key Distribution Pairwise Scaling | $K = \frac{N(N - 1)}{2}$ | $N$ communicating participants | `ch3-l1`, `formulas.ts` | Verified ($N=100 \implies K=4950$) |
| `f-caesar-enc` | Caesar Cipher Encryption | $C = (P + K) \bmod 26$ | $P, C \in [0, 25], K \in [1, 25]$ | `ch3-l3`, `formulas.ts` | Verified ($P=19 (\text{T}), K=3 \implies C=22 (\text{W})$) |
| `f-caesar-dec` | Caesar Cipher Decryption | $P = (C - K) \bmod 26$ | Add 26 if $(C - K) < 0$ | `ch3-l3`, `formulas.ts` | Verified |
| `f-monoalphabetic-keys` | Monoalphabetic Key Space | $26! \approx 4.0329 \times 10^{26}$ | Bijective mapping over 26 letters | `ch3-l4`, `formulas.ts` | Verified ($pprox 88$ bits entropy) |
| `f-hill-enc` | Hill Cipher Encryption | $\mathbf{C} = \mathbf{K} \cdot \mathbf{P} \pmod{26}$ | $\mathbf{K}$ is $m \times m$ matrix | `ch3-l6`, `formulas.ts` | Verified ($m=2$ matrix multiplication) |
| `f-hill-dec` | Hill Cipher Decryption | $\mathbf{P} = \mathbf{K}^{-1} \cdot \mathbf{C} \pmod{26}$ | $\mathbf{K}^{-1}$ must exist modulo 26 | `ch3-l6`, `formulas.ts` | Verified |
| `f-hill-invertibility` | Hill Matrix Invertibility Condition | $\gcd(\det(\mathbf{K}), 26) = 1$ | $\det(\mathbf{K}) \neq 0 \land \det(\mathbf{K}) \notin \{2, 13\}$ | `ch3-l6`, `formulas.ts` | Verified ($\det(K)=1 \implies$ invertible) |
| `f-hill-2x2-inverse` | Hill 2x2 Matrix Inversion Formula | $\mathbf{K}^{-1} = \det(\mathbf{K})^{-1} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} \pmod{26}$ | Modulo 26 reduction of entries | `ch3-l6`, `formulas.ts` | Verified (Midterm 2022 calculation) |
| `f-vigenere-enc` | Vigenère Cipher Encryption | $C_i = (P_i + K_{i \bmod m}) \bmod 26$ | Key of length $m$ repeated | `ch3-l7`, `formulas.ts` | Verified ("deceptive" + "crypto") |
| `f-vigenere-dec` | Vigenère Cipher Decryption | $P_i = (C_i - K_{i \bmod m}) \bmod 26$ | Modulo 26 reduction | `ch3-l7`, `formulas.ts` | Verified |
| `f-vernam-xor` | Vernam / One-Time Pad Stream XOR | $C_i = P_i \oplus K_i, \quad P_i = C_i \oplus K_i$ | $K_i$ truly random, used only once | `ch3-l8`, `formulas.ts` | Verified (Shannon perfect secrecy) |
| `f-ideal-block-keys` | Ideal Block Cipher Key Length | $2^n!, \quad k = n \cdot 2^n \text{ bits}$ | $n$-bit block substitution | `ch4-l2`, `formulas.ts` | Verified ($n=4 \implies 16! \approx 2^{44}, k=64$) |
| `f-feistel-enc` | Feistel Round Encryption | $L_i = R_{i-1}, \quad R_i = L_{i-1} \oplus \mathrm{F}(R_{i-1}, K_i)$ | Valid for any round function $\mathrm{F}$ | `ch4-l4`, `formulas.ts` | Verified (Invertibility proof) |
| `f-feistel-dec` | Feistel Round Decryption | $R_{i-1} = L_i, \quad L_{i-1} = R_i \oplus \mathrm{F}(L_i, K_i)$ | Subkeys applied in reverse $K_{16} \to K_1$ | `ch4-l4`, `formulas.ts` | Verified |
| `f-des-sac` | Strict Avalanche Criterion (SAC) | $P(\Delta C_j = 1 \mid \Delta P_i = 1) = \frac{1}{2}$ | Independent over all input bits | `ch4-l7`, `formulas.ts` | Verified (Webster & Tavares 1986) |
| `f-des-sbox-lookup` | DES S-Box Indexing Procedure | $\text{Row} = (b_1 b_6)_2, \quad \text{Col} = (b_2 b_3 b_4 b_5)_2$ | 6-bit input $\to$ 4-bit output | `ch4-l6`, `formulas.ts` | Verified ($101111_2 \to \text{Row 3, Col 1} \to 2$) |
| `f-double-des` | Double-DES Encryption | $C = \mathrm{E}(K_2, \mathrm{E}(K_1, P))$ | Effective key length 112 bits | `ch7-l1`, `formulas.ts` | Verified |
| `f-mitm-work` | Meet-in-the-Middle Complexity | $\mathrm{E}(K_1, P) = \mathrm{D}(K_2, C) \implies 2^{56} + 2^{56} = 2^{57}$ | Requires $2^{56} \times 64$ bits memory | `ch7-l1`, `formulas.ts` | Verified ($2^{57} \ll 2^{112}$) |
| `f-triple-des-ede3` | Triple-DES (3DES) Three-Key EDE | $C = \mathrm{E}(K_3, \mathrm{D}(K_2, \mathrm{E}(K_1, P)))$ | Key length 168 bits | `ch7-l2`, `formulas.ts` | Verified |
| `f-triple-des-ede2` | Triple-DES (3DES) Two-Key EDE | $C = \mathrm{E}(K_1, \mathrm{D}(K_2, \mathrm{E}(K_1, P)))$ | Key length 112 bits ($K_3 = K_1$) | `ch7-l2`, `formulas.ts` | Verified |
| `f-ecb` | Electronic Codebook (ECB) Mode | $C_j = \mathrm{E}(P_j, K), \quad P_j = \mathrm{D}(C_j, K)$ | Independent 64-bit blocks | `ch7-l3`, `formulas.ts` | Verified (Insecure repetition) |
| `f-cbc-enc` | CBC Mode Encryption | $C_0 = \mathrm{E}(P_0 \oplus IV, K), \quad C_j = \mathrm{E}(P_j \oplus C_{j-1}, K)$ | $IV$ must be random / unpredictable | `ch7-l4`, `formulas.ts` | Verified |
| `f-cbc-dec` | CBC Mode Decryption | $P_0 = \mathrm{D}(C_0, K) \oplus IV, \quad P_j = \mathrm{D}(C_j, K) \oplus C_{j-1}$ | Parallelizable decryption | `ch7-l4`, `formulas.ts` | Verified |
| `f-cbc-error` | CBC 1-Bit Error Propagation Proof | $\Delta C_j \implies P_j \text{ corrupted}, P_{j+1} \oplus \Delta C_j$ | Self-synchronizing at $P_{j+2}$ | `ch7-l4`, `formulas.ts` | Verified (1-bit error theorem) |
| `f-pad-pkcs7` | PKCS#7 Padding Standard | $\text{Byte value } = N, \quad 1 \le N \le B$ | Full block of $B$ bytes if aligned | `ch7-l5`, `formulas.ts` | Verified |
| `f-pad-ansi-x923` | ANSI X.923 Padding Standard | $00 \dots 00 \, N$ | Final byte is pad count | `ch7-l5`, `formulas.ts` | Verified |
| `f-pad-iso-9797` | ISO/IEC 9797-1 Padding (Method 2) | $80 \, 00 \dots 00$ | Bit 1 followed by zeros | `ch7-l5`, `formulas.ts` | Verified |
| `f-pad-iso-10126` | ISO 10126 Padding Standard | $R_1 R_2 \dots R_{N-1} \, N$ | Random bytes ended with count | `ch7-l5`, `formulas.ts` | Verified |
| `f-cfb-enc` | Cipher Feedback (CFB) Encryption | $C_j = P_j \oplus \operatorname{MSB}_s(\mathrm{E}(I_j, K))$ | $s$-bit stream cipher mode | `ch7-l6`, `formulas.ts` | Verified |
| `f-cfb-dec` | Cipher Feedback (CFB) Decryption | $P_j = C_j \oplus \operatorname{MSB}_s(\mathrm{E}(I_j, K))$ | Uses block cipher Encryption | `ch7-l6`, `formulas.ts` | Verified |
| `f-ofb` | Output Feedback (OFB) Mode | $O_j = \mathrm{E}(O_{j-1}, K), \, C_j = P_j \oplus O_j, \, P_j = C_j \oplus O_j$ | Keystream independent of plaintext | `ch7-l6`, `formulas.ts` | Verified (No error extension) |
| `f-ctr` | Counter (CTR) Mode | $C_j = P_j \oplus \mathrm{E}(T_j, K), \quad T_j = T_0 + j$ | Nonce + counter never repeated | `ch7-l6`, `formulas.ts` | Verified (Fully parallelizable) |
