# Multi-Subject Regression Test Report

This report documents the verification tests conducted to guarantee that the existing subjects in the EDU Platform—**Cryptography & Network Security (IS401)** and **Business Process Management (IS412)**—remain 100% intact without regressions, broken dependencies, or state leakage following the integration of **Big Data Analytics (IS445)**.

---

## 1. Subject Registry Audit

- **Registry File:** `src/data/subjects/index.ts`
- **Registered Subjects:**
  1. `cryptography` (IS401, Year 4 CS, 5 Chapters, 185 Questions, 52 Formulas, 17 Worked Problems)
  2. `bpm` (IS412, Year 4 IS, 4 Chapters, 71 Questions, 0 Formulas, 18 BASMAGA Cards)
  3. `big-data` (IS445, Year 4 IS, 5 Chapters, 60 Questions, 9 Formulas, 6 Worked Problems, 18 BASMAGA Cards)

### Verification Results:
| Subject ID | Function Call | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| `cryptography` | `getSubjectById('cryptography')` | Returns IS401 Subject | Returns IS401 Subject | PASSED |
| `bpm` | `getSubjectById('bpm')` | Returns IS412 Subject | Returns IS412 Subject | PASSED |
| `big-data` | `getSubjectById('big-data')` | Returns IS445 Subject | Returns IS445 Subject | PASSED |
| `cryptography` | `getSubjectQuestions('cryptography')` | 185 Questions | 185 Questions | PASSED |
| `bpm` | `getSubjectQuestions('bpm')` | 71 Questions | 71 Questions | PASSED |
| `big-data` | `getSubjectQuestions('big-data')` | 60 Questions | 60 Questions | PASSED |
| `cryptography` | `getSubjectWorkedProblems('cryptography')` | 17 Problems | 17 Problems | PASSED |
| `big-data` | `getSubjectWorkedProblems('big-data')` | 6 Problems | 6 Problems | PASSED |
| `cryptography` | `getSubjectFormulas('cryptography')` | 52 Formulas | 52 Formulas | PASSED |
| `big-data` | `getSubjectFormulas('big-data')` | 9 Formulas | 9 Formulas | PASSED |

---

## 2. Hub-Level Navigation & Subject Isolation

### A. Study Guide (`/study`)
- Switching to `cryptography` renders the continuous 5-chapter Cryptography study guide.
- Switching to `bpm` renders the 4-chapter BPM study guide with BPMN diagrams.
- Switching to `big-data` renders the 5-unit Big Data Analytics curriculum up to DBSCAN.
- Verified: Font-size slider, jump navigation bar, and semantic highlights function across all three subjects.

### B. Questions Hub (`/questions`)
- Filter dropdown dynamically switches sources:
  - Cryptography: `TB01`, `TB03`, `TB04`, `Midterm 2022`, `Midterm 2020`.
  - BPM: `Quiz 1`, `Quiz 2`, `Quiz 3`, `Curriculum Practice`.
  - Big Data: `Midterm 2025`, `Preprocessing Quiz`, `Lifecycle Quiz`, `Clustering Quiz`.
- Question pagination, difficulty filter, and answer reveals verified.

### C. Exam Simulator (`/exams`)
- Active subject detection renders tailored cards:
  - Cryptography: Model 1 (Midterm 2022) & Model 2 (Midterm 2020).
  - BPM: Official Quizzes Midterm (49 Q) & Comprehensive Midterm (71 Q).
  - Big Data: Official Midterm 2025 (Written & MCQ, 12 Q, 15 Marks) & Full Curriculum Midterm (60 Q).
- Timed exam engine, flag system, question palette, and result calculation verified.

### D. Problem Solving Hub (`/problem-solving`)
- Cryptography: Renders 17 step-by-step number theory, classical cipher, and block cipher problems.
- BPM: Cleanly displays informational redirection banner explaining that BPM exams are 100% MCQ & T/F with no numerical problem solving.
- Big Data: Renders 6 worked algorithmic problems (K-Means Centroids, Min-Max, Z-Score, Decimal Scaling, IQR Outliers, DBSCAN Distance Matrix).

### E. Review Hub (`/review`)
- Formulas Tab:
  - Cryptography: 52 verified KaTeX formulas across Units 2, 3, 4, 7.
  - BPM: Formula tab hidden (defaults to Glossary tab).
  - Big Data: 9 verified KaTeX formulas across Units 3 and 5.
- Coverage indicator dynamically adapts to active subject.

---

## 3. Build & Static Analysis Verification

- **TypeScript Compilation (`tsc -b`):** 0 Errors.
- **Vite Production Bundler:** 2261 modules transformed, 0 errors, built in 1.11s.
- **OxLint (`oxlint`):** 0 Errors across all 243 source files.

---

## 4. Conclusion

The multi-subject architecture maintains strict boundaries, zero regression, and total backward compatibility.

