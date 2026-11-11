# Big Data Analytics (IS445) — Question Coverage Matrix

This matrix maps all 60 questions implemented across the central question bank, official midterm simulator, and practice sets.

---

## 1. Summary Statistics

| Source Category | Count | Types | Target Exam Coverage |
| :--- | :---: | :--- | :--- |
| **Official Midterm 2025** | 12 | 4 Written Essay + 8 MCQ | Official 2025 Exam Paper (15 Marks) |
| **Preprocessing Quiz (tb01)** | 15 | MCQ & True/False | Cleansing, IQR Outliers, Normalization |
| **Lifecycle & Ecosystem Quiz (tb03)** | 15 | MCQ & True/False | 4 V's, Structures, Repositories, 6 Phases, EDA |
| **Clustering & DBSCAN Quiz (tb04)** | 18 | MCQ & True/False | K-Means 4-Steps, Centroids, DBSCAN Core/Border/Noise |
| **Total Questions** | **60** | **4 Written + 50 MCQ + 6 T/F** | **100% Midterm Syllabus Coverage** |

---

## 2. Official Midterm 2025 Exam Paper Mapping (15 Marks Verbatim)

| ID | Exam No. | Section | Question Stem (Summary) | Type | Marks | Chapter/Lesson | Source Ref |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- | :--- |
| `bd-mid25-w01` | Q1.1 | Written | What is an analytic sandbox? | Short Answer | 1.75 | `bd-ch1-l2` | Module 1 Slides 30-33 |
| `bd-mid25-w02` | Q1.2 | Written | Explain difference between BI and Data Science | Short Answer | 1.75 | `bd-ch1-l4` | Module 1 Slides 36-39 |
| `bd-mid25-w03` | Q1.3 | Written | Challenges of traditional analytical architecture | Short Answer | 1.75 | `bd-ch1-l3` | Module 1 Slides 27-29 |
| `bd-mid25-w04` | Q1.4 | Written | Difference between EDA, Preprocessing & Feature Eng. | Short Answer | 1.75 | `bd-ch4-l3` | analyzing & exploring Slide 16-19 |
| `bd-mid25-mcq01` | Q2.1 | MCQ | Retailer analyzing last quarter sales (Descriptive) | MCQ | 1.0 | `bd-ch1-l4` | Module 1 Slide 37 |
| `bd-mid25-mcq02` | Q2.2 | MCQ | Stakeholders identified in which phase? (Discovery) | MCQ | 1.0 | `bd-ch2-l1` | Module 2 Slide 8-12 |
| `bd-mid25-mcq03` | Q2.3 | MCQ | Key purpose of pilot in Phase 6 (Real ROI safely) | MCQ | 1.0 | `bd-ch2-l4` | Module 2 Slide 36-39 |
| `bd-mid25-mcq04` | Q2.4 | MCQ | Detecting letters in zip code (Validation) | MCQ | 1.0 | `bd-ch3-l3` | data cleansing P01 Page 22-26 |
| `bd-mid25-mcq05` | Q2.5 | MCQ | `Student_ID` vs `Roll_No` (Entity Identification) | MCQ | 1.0 | `bd-ch3-l4` | integration & norm P02 Slide 4-6 |
| `bd-mid25-mcq06` | Q2.6 | MCQ | Centroid recalculation: C1=(4,4), C2=(2,2), C3=(7,7) | MCQ / Math | 1.0 | `bd-ch5-l2` | Module 4 Slides 14-17 |
| `bd-mid25-mcq07` | Q2.7 | MCQ | Rationale for feature scaling in K-Means (Equal weights) | MCQ | 1.0 | `bd-ch5-l2` | Module 4 Slides 18-20 |
| `bd-mid25-mcq08` | Q2.8 | MCQ | Customer segmentation without labels (K-Means) | MCQ | 1.0 | `bd-ch5-l1` | Module 4 Slides 10-12 |

---

## 3. Data Preprocessing & Cleansing Quiz Mapping (15 Questions)

| ID | Topic | Question Core | Difficulty | Type | Lesson | Source Ref |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `bd-prep-q01` | Missing Values | Mode imputation for categorical values | Medium | MCQ | `bd-ch3-l1` | P01 Page 14 |
| `bd-prep-q02` | Outliers | IQR Lower Fence formula: Q1 - 1.5 * IQR | Medium | MCQ | `bd-ch3-l2` | P01 Page 30-34 |
| `bd-prep-q03` | Outliers | Outliers should NOT be automatically deleted | Easy | T/F | `bd-ch3-l2` | P01 Page 35 |
| `bd-prep-q04` | Cleansing | Validation (syntax/rules) vs Standardization (formats) | Hard | MCQ | `bd-ch3-l3` | P01 Page 22-26 |
| `bd-prep-q05` | Integration | Entity Identification: disparate attribute names | Medium | MCQ | `bd-ch3-l4` | P02 Slide 4-6 |
| `bd-prep-q06` | Integration | Data Value Conflict: USD vs GBP currency units | Medium | MCQ | `bd-ch3-l4` | P02 Slide 7-9 |
| `bd-prep-q07` | Normalization | Min-Max calculation: $73,600 mapped to [0, 1] = 0.716 | Hard | MCQ | `bd-ch3-l5` | P02 Slide 12 |
| `bd-prep-q08` | Normalization | Z-Score calculation: $73,600 with μ=54k, σ=16k = +1.225 | Hard | MCQ | `bd-ch3-l5` | P02 Slide 14 |
| `bd-prep-q09` | Normalization | Decimal Scaling: range [-986, 917] requires j=3, -0.986 | Medium | MCQ | `bd-ch3-l5` | P02 Slide 16 |
| `bd-prep-q10` | Normalization | Min-Max sensitivity to extreme outliers (False) | Medium | T/F | `bd-ch3-l5` | P02 Slide 13 |
| `bd-prep-q11` | Noisy Data | Binning: smoothing by bin means, medians, boundaries | Medium | MCQ | `bd-ch3-l2` | P01 Page 28 |
| `bd-prep-q12` | Integration | Pearson correlation r = 0 means no linear relation | Medium | MCQ | `bd-ch3-l4` | P02 Slide 10 |
| `bd-prep-q13` | Missing Values | Ignoring tuple when class label is missing in large data | Easy | MCQ | `bd-ch3-l1` | P01 Page 12 |
| `bd-prep-q14` | Outliers | Numerical IQR problem: Q1=20, Q3=50 -> [-25, 95] | Medium | MCQ | `bd-ch3-l2` | P01 Page 32 |
| `bd-prep-q15` | Cleansing | Formatting phone numbers is Standardization, not Validation | Easy | T/F | `bd-ch3-l3` | P01 Page 25 |

---

## 4. Lifecycle & Ecosystem Quiz Mapping (15 Questions)

| ID | Topic | Question Core | Difficulty | Type | Lesson | Source Ref |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `bd-life-q01` | 4 V's | Veracity addresses trustworthiness and data noise | Easy | MCQ | `bd-ch1-l1` | Module 1 Slide 12 |
| `bd-life-q02` | Structures | Server clickstream logs = Quasi-structured | Medium | MCQ | `bd-ch1-l1` | Module 1 Slide 14 |
| `bd-life-q03` | Repositories | Analytic Sandbox: isolated exploratory sandbox | Medium | MCQ | `bd-ch1-l2` | Module 1 Slide 31 |
| `bd-life-q04` | Architecture | EDW bottleneck: IT queues, rigid schema-on-write | Hard | MCQ | `bd-ch1-l3` | Module 1 Slide 28 |
| `bd-life-q05` | BI vs DS | BI = Retrospective structured; DS = Predictive multi-structured | Medium | MCQ | `bd-ch1-l4` | Module 1 Slide 38 |
| `bd-life-q06` | Lifecycle | Phase 1 (Discovery): stakeholders & hypotheses | Easy | MCQ | `bd-ch2-l1` | Module 2 Slide 9 |
| `bd-life-q07` | Lifecycle | ELT paradigm: load raw first, transform on demand | Medium | MCQ | `bd-ch2-l2` | Module 2 Slide 17 |
| `bd-life-q08` | Lifecycle | Phase 3 (Model Planning): algorithm selection | Medium | MCQ | `bd-ch2-l3` | Module 2 Slide 21 |
| `bd-life-q09` | Lifecycle | Phase 4 (Model Building): execution on training data | Medium | MCQ | `bd-ch2-l3` | Module 2 Slide 26 |
| `bd-life-q10` | Lifecycle | Phase 6 (Operationalize): pilot deployment benefits | Medium | MCQ | `bd-ch2-l4` | Module 2 Slide 37 |
| `bd-life-q11` | Triad | EDA (diagnose) vs Prep (clean) vs Feature Eng (create) | Hard | MCQ | `bd-ch4-l3` | exploring Slide 17 |
| `bd-life-q12` | EDA | Anscombe's Quartet: identical stats, wildly different plots | Medium | MCQ | `bd-ch4-l1` | exploring Slide 7 |
| `bd-life-q13` | EDA | Hexbin plots solve massive overplotting in 2D | Medium | MCQ | `bd-ch4-l2` | exploring Slide 14 |
| `bd-life-q14` | Analytics | Retail historical profit = Descriptive Analytics | Easy | MCQ | `bd-ch1-l4` | Module 1 Slide 37 |
| `bd-life-q15` | Lifecycle | Phase 5 (Communicate): translating model to ROI narrative | Medium | MCQ | `bd-ch2-l4` | Module 2 Slide 32 |

---

## 5. Clustering & DBSCAN Quiz Mapping (18 Questions)

| ID | Topic | Question Core | Difficulty | Type | Lesson | Source Ref |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `bd-clust-q01` | K-Means | Unsupervised customer segmentation without labels | Easy | MCQ | `bd-ch5-l1` | Module 4 Slide 10 |
| `bd-clust-q02` | K-Means | Feature scaling gives equal weight in Euclidean distance | Medium | MCQ | `bd-ch5-l2` | Module 4 Slide 18 |
| `bd-clust-q03` | K-Means | Centroid calculation: C1=(4,4), C2=(2,2), C3=(7,7) | Hard | MCQ | `bd-ch5-l2` | Module 4 Slide 16 |
| `bd-clust-q04` | K-Means | Elbow method: bend in WSS curve | Medium | MCQ | `bd-ch5-l3` | Module 4 Slide 19 |
| `bd-clust-q05` | K-Means | K-Means fails on concentric rings or spiral shapes (False) | Medium | T/F | `bd-ch5-l3` | Module 4 Slide 20 |
| `bd-clust-q06` | DBSCAN | Two foundational parameters: Eps (ε) and MinPts | Easy | MCQ | `bd-ch5-l4` | Module 4 Slide 21 |
| `bd-clust-q07` | DBSCAN | Core point definition: \|N_ε(P)\| >= MinPts | Medium | MCQ | `bd-ch5-l4` | Module 4 Slide 22 |
| `bd-clust-q08` | DBSCAN | Border point definition: < MinPts but touches Core | Medium | MCQ | `bd-ch5-l4` | Module 4 Slide 22 |
| `bd-clust-q09` | DBSCAN | Noise point definition: neither Core nor Border (-1) | Medium | MCQ | `bd-ch5-l4` | Module 4 Slide 23 |
| `bd-clust-q10` | DBSCAN | Point with count < MinPts and no Core neighbor = Noise | Hard | MCQ | `bd-ch5-l5` | Module 4 Slide 23 |
| `bd-clust-q11` | DBSCAN | Directly density-reachable: P is Core and Q in N_ε(P) | Hard | MCQ | `bd-ch5-l4` | Module 4 Slide 22 |
| `bd-clust-q12` | DBSCAN | DBSCAN does NOT require user to specify K (True) | Medium | T/F | `bd-ch5-l4` | Module 4 Slide 21 |
| `bd-clust-q13` | DBSCAN | Limitation: cannot handle varying densities across regions | Hard | MCQ | `bd-ch5-l5` | Module 4 Slide 23 |
| `bd-clust-q14` | Compare | K-Means (spherical, forces outliers) vs DBSCAN (arbitrary, isolates noise) | Medium | MCQ | `bd-ch5-l6` | Module 4 Slide 23 |
| `bd-clust-q15` | K-Means | Random initialization causes different runs to reach local minima | Medium | MCQ | `bd-ch5-l2` | Module 4 Slide 15 |
| `bd-clust-q16` | K-Means | Stopping condition: centroid stabilization or max iterations | Medium | MCQ | `bd-ch5-l2` | Module 4 Slide 16 |
| `bd-clust-q17` | DBSCAN | Density-connectivity is symmetric via common core point O (True) | Easy | T/F | `bd-ch5-l4` | Module 4 Slide 22 |
| `bd-clust-q18` | K-Means | Unscaled salary ($20k-$200k) causes >99.9% dominance over frequency | Hard | MCQ | `bd-ch5-l2` | Module 4 Slide 18 |

