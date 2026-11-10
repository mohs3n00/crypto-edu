# EDU — Question Bank Integration & Academic Assessment Audit

## 1. Executive Summary

As part of the **Study-First Architecture**, the platform's question bank has been reorganized to balance two distinct student needs:
1. **Contextual Active Recall:** Immediate evaluation of concepts within the continuous Study Guide (`/study`) at the exact point of learning.
2. **Comprehensive Exam Testing:** A dedicated, multi-filter testing hub at `/questions` (aliased to `/practice`) for simulating full examinations and targeting specific weaknesses.

The unified question bank consists of **170 rigorously verified questions** (derived from the original 185-question dataset cataloged in university test banks, midterm papers, and supplementary problem sets) covering all five authoritative course units without omission.

---

## 2. Complete Question Bank Inventory & Distribution

### 2.1 Distribution by Dataset & Academic Unit

| Dataset File | Target Academic Unit | Question Sources | Total Count | Question Types Breakdown |
|---|---|---|---|---|
| `tb01.ts` | **Unit 1 (Chapter 1)**: Concepts | Official Stallings Test Bank | **45** | 15 True/False, 15 MCQ, 15 Short Answer |
| `tb03.ts` | **Unit 3 (Chapter 3)**: Classical Ciphers | Official Stallings Test Bank | **30** | 15 True/False, 15 MCQ |
| `tb04.ts` | **Unit 4 (Chapter 4)**: Block Ciphers & DES | Official Stallings Test Bank | **45** | 15 True/False, 15 Multiple Choice, 15 Short Answer |
| `midterms.ts` | **Units 1, 3, 4**: Midterm Exams | Official Midterm Exams (2020–2022) | **26** | 15 MCQ, 5 True/False, 5 Calculations, 1 Diagram Analysis |
| `suppCh2.ts` | **Unit 2 (Chapter 2)**: Number Theory | Curated Syllabus Problem Sets | **14** | 7 True/False, 7 MCQ |
| `suppCh7.ts` | **Unit 5 (Chapter 7)**: Modes & 3DES | Curated Syllabus Problem Sets | **10** | 6 True/False, 4 MCQ |
| **TOTAL** | **All 5 Authoritative Units** | **Official University & Bank Sets** | **170** | **100% Normalized & Audited** |

---

## 3. Two-Tier Question Integration Architecture

```
allQuestions (src/data/questions/index.ts)
│
├── Tier 1: In-Situ Contextual Learning (/study)
│   └── Filtered by topicId / chapterId
│   └── Rendered via StudyContextualQuestion.tsx
│   └── Triggered right after theory & formulas
│   └── In-line immediate feedback & exam explanation
│
└── Tier 2: Centralized Question Hub (/questions & /practice)
    └── Rendered via QuestionsHub.tsx
    └── Multi-dimensional filters (Unit, Source, Type, Difficulty, Status)
    └── Full text search across stems and explanations
    └── Paginated question cards with option selectors
    └── Integration with Exam Simulator (/exams) and Crypto Lab (/lab)
```

### 3.1 Tier 1: In-Situ Contextual Learning (`StudyContextualQuestion.tsx`)
In the unified Study Guide (`/study`), questions are not hidden behind a separate tab or navigation barrier. Instead, relevant questions are mapped directly to corresponding topics:
- **Immediate Active Recall:** Right after reading a concept (e.g. Euclidean Algorithm in Chapter 2, or Playfair digram rules in Chapter 3), students test their comprehension on a live card.
- **Single-Click Verification:** Clicking "تحقق من الإجابة • Verify Answer" provides instant color-coded visual feedback (Green for correct, Red for incorrect).
- **Authoritative Academic Explanation:** Displays the official textbook justification and clarifies why the distractors are wrong.
- **State Isolation:** Each contextual question card maintains its own local evaluation state, preventing unwanted layout reflows across the page.

### 3.2 Tier 2: Centralized Questions Hub (`QuestionsHub.tsx`)
The dedicated `/questions` destination serves as a comprehensive self-assessment workbench:
- **Unit Filtering:** Quick-toggle between Unit 1 (`ch1`), Unit 2 (`ch2`), Unit 3 (`ch3`), Unit 4 (`ch4`), and Unit 5 (`ch7`).
- **Source Filtering:** Distinguishes between Test Bank questions (`testbank`), Midterm Exam questions (`midterm`), and Supplementary exercises (`supplementary`).
- **Difficulty Badging:** Color-coded badges for Easy (Green), Medium (Amber), and Hard (Rose).
- **User Progress Tracking:** Tracks answered questions, correct counts, and provides filter toggles for Unanswered vs. Answered questions.
- **Search Capabilities:** Instant search filtering on Arabic and English question stems, choices, and explanations.

---

## 4. Normalization Pipeline (`questionNormalizer.ts`)

To ensure flawless interoperability between the continuous Study Guide and the Questions Hub, all questions pass through the `toNormalizedQuestionObject` pipeline:

1. **Option Formatting:** Converts legacy string options, indexed arrays, and letter-keyed objects (`{ A: '...', B: '...' }`) into uniform `{ id: string, text: string, textAr?: string }` structures.
2. **Type Normalization:** Harmonizes variant type strings (`'mcq'`, `'multiple-choice'`, `'tf'`, `'truefalse'`, `'true-false'`) into standardized canonical categories.
3. **Bilingual Completeness:** Ensures every question has English stems and explanations, with Arabic translations and exam tips.
4. **Answer Key Verification:** Validates that `correctAnswer` points to a valid option key or Boolean value, preventing unanswerable or ambiguous questions.

---

## 5. Academic Verification & Coverage Highlights

1. **Chapter 1 (Concepts):** Covers all 5 topics — CIA triad, NIST definitions, OSI security architecture (X.800), active vs. passive attacks, and network security models.
2. **Chapter 2 (Number Theory):** Exercises divisibility properties, Division Algorithm, Euclidean Algorithm, Extended Euclidean modular inverse, Fermat's Little Theorem, Euler's Totient function, and Chinese Remainder Theorem.
3. **Chapter 3 (Classical Ciphers):** Tests Caesar brute force, monoalphabetic frequency weaknesses, Playfair 5×5 rules, Hill cipher matrix arithmetic modulo 26, Vigenère polyalphabetic periods, and One-Time Pad Shannon secrecy.
4. **Chapter 4 (Block Ciphers & DES):** Examines Feistel network invertibility, Shannon confusion/diffusion, DES 16-round key schedule, S-box non-linearity (with Midterm 2020 S-box lookups), and the Strict Avalanche Criterion (SAC).
5. **Chapter 7 (Block Cipher Operation):** Covers Double-DES meet-in-the-middle attack ($2^{57}$ operations), Triple-DES (3DES) EDE backward compatibility, and NIST modes (ECB, CBC, CFB, OFB, CTR) with PKCS#7 padding.

---

## 6. Audit Conclusion

The question bank integration achieves 100% syllabus coverage across both contextual study and standalone testing modalities. The dual-tier architecture eliminates cognitive switching costs for students while maintaining full access to the complete 170-question university repository.

