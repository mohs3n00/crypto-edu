# EDU — Missing Academic Content Discovery Report

## 1. Executive Summary

This report documents the detailed findings of the complete syllabus source audit comparing the original lecture materials:
- `Ch 1 information security.pdf` (28 pages)
- `Ch 2 Information Security.pdf` (34 pages)
- `Ch3.pptx` (34 slides)
- `Ch04.pptx` (23 slides)
- `Ch07-Crypto.pdf` (31 pages)

A total of **150 lecture pages and slides** were audited against the 50 curriculum lessons and supporting modules on the EDU website.

While the existing platform demonstrated strong architectural alignment with core concepts, the audit revealed **12 specific academic omissions and partial coverages** where official lecture tables, secondary definitions, criteria, and worked examples were omitted.

---

## 2. Itemized Inventory of Discovered Missing & Incomplete Content

### Item 1: Availability Service Definition & Dependencies
- **Source:** `Ch 1 information security.pdf`, Page 22.
- **Affected Lesson:** `ch1-l14` (`Data Integrity & Nonrepudiation Services`).
- **Deficiency:** Page 22 of Chapter 1 specifically defines the **Availability Service** under X.800, its role in addressing Denial of Service (DoS) attacks, and its dependency on proper resource management and Access Control services. `ch1-l14` covered Data Integrity and Nonrepudiation, but omitted Availability Service.
- **Academic Impact:** Midterm questions often ask which X.800 service directly addresses DoS attacks and how it relates to Access Control.
- **Recovery Requirement:** Add an explicit subsection for Availability Service in `ch1-l14`, explaining its purpose, protection against DoS, and reliance on resource management.

---

### Item 2: Table 1.3 Relationship Between Security Services & Mechanisms (X.800)
- **Source:** `Ch 1 information security.pdf`, Page 24 (Textbook Table 1.3).
- **Affected Lesson:** `ch1-l15` (`Specific vs Pervasive Security Mechanisms (X.800)`).
- **Deficiency:** While `ch1-l15` lists the 8 specific and 5 pervasive mechanisms, it omits the formal implementation matrix from Table 1.3 that maps which mechanisms implement each service.
- **Academic Impact:** Students are frequently tested on: *"Which mechanism is used to implement Nonrepudiation?"* (Answer: Digital Signature and Notarization) or *"Which service is implemented by Traffic Padding?"* (Answer: Traffic-Flow Confidentiality).
- **Recovery Requirement:** Add the full X.800 Service-to-Mechanism implementation matrix table into `ch1-l15` in both English and Arabic.

---

### Item 3: Table 2.3 Algebraic Axioms of Modular Arithmetic in $\mathbb{Z}_n$
- **Source:** `Ch 2 Information Security.pdf`, Page 22 (Textbook Table 2.3).
- **Affected Lesson:** `ch2-l6` (`Arithmetic Tables Modulo 8`).
- **Deficiency:** `ch2-l6` provides arithmetic tables for $\mathbb{Z}_8$, but omits the formal algebraic ring axioms presented on Page 22: Commutative laws, Associative laws, Distributive laws, Identities (0 and 1), Additive Inverse, and Multiplicative Inverse existence condition $\gcd(w, n) = 1$.
- **Academic Impact:** Establishes why $\mathbb{Z}_n$ is a commutative ring and why composite moduli create zero divisors.
- **Recovery Requirement:** Add Table 2.3 algebraic axioms to `ch2-l6`.

---

### Item 4: Primitive Roots & Discrete Logarithms (Tables 2.7 & 2.8)
- **Source:** `Ch 2 Information Security.pdf`, Pages 32-33.
- **Affected Lesson:** `ch2-l11` (`Chinese Remainder Theorem & Discrete Logarithms`).
- **Deficiency:** `ch2-l11` focuses primarily on CRT calculations, while the definition of **Primitive Roots (Generators)**, Table 2.7 (Powers of integers mod 19), and Table 2.8 (Discrete Logarithms mod 19) from the official lecture slides were only summarily mentioned without formal definitions, properties, or worked examples.
- **Academic Impact:** Discrete Logarithms are the fundamental one-way mathematical foundation for Diffie-Hellman Key Exchange and ElGamal Public-Key cryptography.
- **Recovery Requirement:** Restore formal definitions of Primitive Roots, Table 2.7 powers, and Table 2.8 Discrete Logarithm values in `ch2-l11`.

---

### Item 5: Slide 11 Multi-Algorithm Exhaustive Key Search Times
- **Source:** `Ch3.pptx`, Slide 11.
- **Affected Lesson:** `ch3-l2` (`Cryptographic Classification & Attack Types`).
- **Deficiency:** Slide 11 provides a comprehensive comparative benchmark of key spaces ($2^{32}$, $2^{56}$, $2^{128}$, $2^{168}$, $2^{192}$, $2^{256}$, $26!$) and the exact estimated time to break them at $10^9$ and $10^{13}$ decryptions/second. The website only had scattered key size mentions.
- **Academic Impact:** Visualizes why DES is broken by brute force while AES-128 is computationally secure.
- **Recovery Requirement:** Integrate Slide 11 brute-force key search comparison table into `ch3-l2`.

---

### Item 6: Three Enabling Characteristics for Caesar Brute Force
- **Source:** `Ch3.pptx`, Slide 16.
- **Affected Lesson:** `ch3-l3` (`Caesar Cipher & Brute-Force Key Exhaustion`).
- **Deficiency:** Slide 16 states three specific characteristics that make Caesar cipher vulnerable to brute force: 1. Encryption/decryption algorithms known; 2. Only 25 keys to try; 3. Language of plaintext is known and easily recognizable. The third point was missing.
- **Academic Impact:** Stallings emphasizes that brute force only succeeds when the decrypted plaintext is easily recognizable by the analyst.
- **Recovery Requirement:** Add the 3 enabling characteristics to `ch3-l3`.

---

### Item 7: Vigenère Autokey System Slide Worked Example
- **Source:** `Ch3.pptx`, Slide 28.
- **Affected Lesson:** `ch3-l7` (`Vigenère Cipher & Autokey System`).
- **Deficiency:** `ch3-l7` explained the theory of autokey, but omitted the exact slide example:
  - Key: `deceptivewearediscoveredsav`
  - Plaintext: `wearediscoveredsaveyourself`
  - Ciphertext: `ZICVTWQNGKZEIIGASXSTSLVVWLA`
- **Academic Impact:** Practical-first learning requires students to see how the plaintext seamlessly concatenates after the keyword to eliminate periodicity.
- **Recovery Requirement:** Add the complete Slide 28 worked example and calculation table to `ch3-l7`.

---

### Item 8: Table 4.1 4-bit Substitution Cipher Reversible Mapping
- **Source:** `Ch04.pptx`, Slide 7.
- **Affected Lesson:** `ch4-l2` (`General Substitution Mapping & Table 4.1`).
- **Deficiency:** Slide 7 presents Table 4.1 containing the exact 16-word input-to-output mapping and its inverse decryption table for the 4-bit block cipher of Figure 4.2. `ch4-l2` explained the decoder/encoder structure but omitted the actual 16-state numerical table.
- **Academic Impact:** Demonstrates why general block substitution requires $2^n$ unique states and how invertibility is enforced.
- **Recovery Requirement:** Add Table 4.1 mapping values and inverse table to `ch4-l2`.

---

### Item 9: Block Cipher Design Principles: Number of Rounds & Key Schedule
- **Source:** `Ch04.pptx`, Slides 20 & 22.
- **Affected Lessons:** `ch4-l5` and `ch4-l7`.
- **Deficiency:** Slides 20 and 22 formulate explicit design criteria:
  - Number of Rounds: Chosen so that known cryptanalysis requires greater effort than brute-force key search.
  - Key Schedule Algorithm: Must guarantee strict avalanche of key bits and rapid diffusion of key bits into round subkeys.
- **Academic Impact:** Direct examination questions on Feistel block cipher design criteria.
- **Recovery Requirement:** Add the design criteria for Number of Rounds and Key Schedule Algorithm to `ch4-l5` and `ch4-l7`.

---

### Item 10: Known-Plaintext Attack on Two-Key Triple-DES (Merkle-Hellman)
- **Source:** `Ch07-Crypto.pdf`, Page 7 (Figure 7.2).
- **Affected Lesson:** `ch7-l2` (`Triple-DES (3DES) EDE Architecture`).
- **Deficiency:** Page 7 details the Merkle-Hellman known-plaintext attack against Two-Key 3DES requiring $2^{120}$ operations and $2^{56}$ chosen plaintexts, providing the exact academic rationale for why Three-Key 3DES is preferred. This was omitted in `ch7-l2`.
- **Academic Impact:** Explains the transition from Two-Key 3DES (112 bits) to Three-Key 3DES (168 bits).
- **Recovery Requirement:** Add the Merkle-Hellman attack analysis and Three-Key rationale to `ch7-l2`.

---

### Item 11: Criteria for Evaluating Block Cipher Modes Superior to ECB
- **Source:** `Ch07-Crypto.pdf`, Page 17.
- **Affected Lesson:** `ch7-l3` (`Electronic Codebook (ECB) Mode & Cut-and-Paste`).
- **Deficiency:** Page 17 outlines the 4 formal evaluation criteria for selecting advanced modes: 1. Overhead; 2. Error recovery; 3. Error diffusion; 4. Security against pattern leakage.
- **Academic Impact:** Theoretical framework used by NIST to standardize CBC, CFB, OFB, and CTR.
- **Recovery Requirement:** Add the 4 mode evaluation criteria to `ch7-l3`.

---

### Item 12: Feedback Characteristics Summary Matrix of Modes of Operation
- **Source:** `Ch07-Crypto.pdf`, Page 30.
- **Affected Lesson:** `ch7-l6` (`CFB, OFB & Counter (CTR) Modes`).
- **Deficiency:** Page 30 provides a master comparison matrix across all 5 modes (ECB, CBC, CFB, OFB, CTR) covering block size, stream conversion, error extension, padding requirement, and parallelizability. The website discussed modes individually without this summary matrix.
- **Academic Impact:** Serves as the ultimate revision table for university examinations.
- **Recovery Requirement:** Add Page 30 feedback characteristics matrix into `ch7-l6`.

---

## 3. Summary of Recovery Plan

All 12 items will be integrated directly into their respective lessons in `crypto-edu/src/data/chapters/` while preserving:
1. Exact lecture terminology.
2. Symmetrical English and Arabic explanations.
3. Single-column card layout and soft monochrome styling.
4. Semantic highlighting on all newly added concepts and conditions.
