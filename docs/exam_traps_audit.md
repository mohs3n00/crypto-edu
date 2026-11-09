# Advanced Exam Traps Library Audit

**Platform:** EDU — University Learning Platform (IS401)  
**Standard References:** William Stallings, Faculty Midterm Papers (2020, 2022), Test Banks (Ch 1, 3, 4).  
**Audited Date:** 2026-11-09  
**Pedagogical Objective:** Train students to identify deceptive question phrasing, verify required mathematical preconditions before calculating, distinguish subtle technical terms, and avoid common university exam errors.

---

## 1. Summary Metrics & Category Distribution

| Trap Category | Description & Exam Focus | Total Implemented | Level 1 (Basic) | Level 2 (Midterm) | Level 3 (Challenge) |
|---|---|---|---|---|---|
| **Category A: Definition Traps** | Subtle boundaries between related terms (Threat vs Attack, Mechanism vs Service) | 4 | 2 | 1 | 1 |
| **Category B: Condition Traps** | Prerequisites for formulas/theorems (Coprimality, Prime modulus, Remainder sign) | 5 | 1 | 3 | 1 |
| **Category C: Calculation Traps** | Multi-step arithmetic mistakes (Negative modular reduction, S-Box row/col, Matrix det) | 5 | 1 | 3 | 1 |
| **Category D: Algorithm Traps** | Flow control, stopping criteria, and round mechanics (Euclidean, Miller-Rabin, Feistel) | 4 | 1 | 2 | 1 |
| **Category E: Structure Traps** | Key sizes, bit lengths, and architectural boundaries (DES effective key, Double-DES MitM) | 3 | 1 | 1 | 1 |
| **Category F: Cipher Mode Traps** | Error propagation, IV vulnerability, feedback dependencies, and parallelizability | 3 | 0 | 2 | 1 |
| **Total Exam Traps** | **Comprehensive University Traps Suite** | **24** | **6** | **12** | **6** |

---

## 2. Complete Inventory of Advanced Exam Traps

| Trap ID | Category | Title | Chapter / Lesson | Difficulty Level | Source Traceability | Verified Doctrine |
|---|---|---|---|---|---|---|
| `TRAP-01` | Category A | Threat vs. Attack Distinction | `ch1-l9` | Level 1 | RFC 4949 / `tb01-q5` | A threat is a *potential* violation; an attack is an *actual action* attempting to execute a threat. |
| `TRAP-02` | Category A | Security Mechanism vs. Security Service | `ch1-l8` | Level 2 | Stallings X.800 / `tb01-q12` | A service is an abstract security requirement (what); a mechanism is the specific cryptographic algorithm or hardware logic (how). |
| `TRAP-03` | Category A | Data Integrity vs. System Integrity | `ch1-l4` | Level 1 | NIST SP 800-33 / FIPS 199 | Data integrity prevents unauthorized alteration of *data*; system integrity ensures a system performs its intended function unimpaired. |
| `TRAP-04` | Category A | Peer Entity vs. Data Origin Authentication | `ch1-l12` | Level 2 | Stallings p. 17 / X.800 | Peer entity authenticates live parties during a connection; data origin authenticates the creator of a connectionless message. |
| `TRAP-05` | Category B | Modular Division & Multiplicative Inverse Criterion | `ch2-l6` | Level 2 | Midterm 2022 / Stallings p. 38 | Dividing by $a$ modulo $n$ is valid *if and only if* $\gcd(a, n) = 1$. In $\mathbb{Z}_8$, only $\{1, 3, 5, 7\}$ are invertible. |
| `TRAP-06` | Category B | Negative Dividend Remainder in Division Algorithm | `ch2-l2` | Level 1 | Stallings Figure 2.1 | In $a = qn + r$, the remainder $r$ must satisfy $0 \le r < n$. Thus $-11 \div 7$ yields $q = -2, r = 3$ (never $r = -4$). |
| `TRAP-07` | Category B | Fermat's Little Theorem Coprimality Condition | `ch2-l8` | Level 2 | Stallings p. 46 / `tb02-q8` | $a^{p-1} \equiv 1 \pmod p$ requires $p$ to be prime *and* $\gcd(a, p) = 1$ ($p 
mid a$). If $p \mid a$, then $a^{p-1} \equiv 0 \pmod p$. |
| `TRAP-08` | Category B | Euler's Theorem vs. Composite Modulus | `ch2-l9` | Level 2 | Stallings p. 48 | $a^{\phi(n)} \equiv 1 \pmod n$ strictly requires $\gcd(a, n) = 1$. If $a$ and $n$ share a factor, the congruence does not equal 1. |
| `TRAP-09` | Category B | Zero Divisors & GCD of Zero | `ch2-l3` | Level 1 | Stallings p. 32 | $\gcd(a, 0) = \|a\|$ for $a 
eq 0$, and $\gcd(0, 0) = 0$ by formal textbook definition; non-zero $b$ divides 0 because $0 = 0 \cdot b$. |
| `TRAP-10` | Category C | Modular Reduction Timing in Long Exponentiation | `ch2-l5` | Level 2 | Midterm 2020 / Stallings | Intermediate values should be reduced modulo $n$ at each step of successive squaring to prevent integer overflow. |
| `TRAP-11` | Category C | Caesar Cipher 25 Meaningful Keys (Not 26) | `ch3-l3` | Level 1 | Midterm 2022 / Stallings p. 71 | Key $k = 0$ (or $26$) leaves plaintext completely unchanged; an attacker tests exactly 25 non-trivial shifts. |
| `TRAP-12` | Category C | Hill Cipher Matrix Determinant Modulo 26 Invertibility | `ch3-l6` | Level 3 | Midterm 2022 / Midterm 2020 | Matrix $K$ is invertible modulo 26 *if and only if* $\gcd(\det(K), 26) = 1$. $\det(K)$ must be non-zero and not divisible by 2 or 13. |
| `TRAP-13` | Category C | Playfair Cipher Repeating Letters in the Same Digram | `ch3-l5` | Level 2 | Midterm 2022 / `tb03-q14` | Repeated letters *within the same digram* are separated by a filler letter (X); repeated letters across separate digrams are not modified. |
| `TRAP-14` | Category C | DES S-Box 2 Outer vs. Inner Bit Indexing | `ch4-l6` | Level 2 | Midterm 2020 (Zagazig) | In 6-bit input $b_1 b_2 b_3 b_4 b_5 b_6$, Row is $(b_1 b_6)_2$ (outer bits) and Column is $(b_2 b_3 b_4 b_5)_2$ (middle 4 bits). |
| `TRAP-15` | Category D | Euclidean Algorithm Stopping Criterion | `ch2-l4` | Level 1 | Stallings p. 34 | The GCD is the *last non-zero remainder* $r_n$, not the final remainder 0 and not the final quotient $q_n$. |
| `TRAP-16` | Category D | Extended Euclidean Tableau Back-Substitution Sign | `ch2-l7` | Level 2 | Stallings Table 2.4 | In $ax + by = 1$, if coefficient $x$ is negative, the modular inverse of $a mod b$ is $x + b$ to bring it into the range $[0, b-1]$. |
| `TRAP-17` | Category D | Miller-Rabin Inconclusive vs. Deterministic Primality | `ch2-l10` | Level 3 | Stallings p. 50 | An "inconclusive" outcome means $n$ *may* be prime (pseudoprime to base $a$); it does *not* prove primality deterministically. |
| `TRAP-18` | Category D | Feistel Decryption Subkey Application Order | `ch4-l4` | Level 2 | Stallings Figure 4.4 | Feistel decryption uses the exact same algorithm as encryption, but with round subkeys applied in strictly reversed order ($K_{16} 	o K_1$). |
| `TRAP-19` | Category E | DES 64-Bit Input Key vs. 56-Bit Effective Key | `ch4-l5` | Level 1 | Stallings p. 104 / `tb04-q7` | DES accepts a 64-bit key input, but bits 8, 16, 24, 32, 40, 48, 56, 64 are parity bits discarded by PC-1, leaving 56 effective bits. |
| `TRAP-20` | Category E | Double-DES Meet-in-the-Middle Attack Complexity | `ch7-l1` | Level 2 | Stallings p. 204 / Diffie-Hellman | Double-DES with two 56-bit keys does *not* provide $2^{112}$ security. MitM reduces the work factor to $2^{56} + 2^{56} = 2^{57}$ operations. |
| `TRAP-21` | Category E | Triple-DES (3DES) Two-Key vs. Three-Key Space | `ch7-l2` | Level 2 | Stallings p. 206 | Two-key 3DES has a 112-bit key ($K_1, K_2$); Three-key 3DES has a 168-bit key ($K_1, K_2, K_3$). Setting $K_1 = K_2$ collapses to single DES. |
| `TRAP-22` | Category F | CBC vs. OFB/CTR 1-Bit Error Propagation Theorem | `ch7-l4` | Level 2 | Midterm 2020 / Stallings p. 215 | In CBC, a 1-bit ciphertext error corrupts 100% of the current plaintext block and inverts 1 bit in the next block. In OFB/CTR, exactly 1 bit is inverted. |
| `TRAP-23` | Category F | CBC Initialization Vector (IV) Corruption Boundary | `ch7-l4` | Level 2 | Stallings p. 216 / The IV Quiz | If Alice forgets or corrupts the IV, *only plaintext block 0 is corrupted*; blocks $P_1, P_2, \dots$ decrypt completely cleanly. |
| `TRAP-24` | Category F | CTR Counter Nonce Uniqueness & Padding Requirement | `ch7-l6` | Level 3 | NIST SP 800-38A / Stallings | CTR mode does *not* require padding (stream cipher behavior), but reusing a counter $(T_j)$ with the same key destroys confidentiality via XOR leakage. |
