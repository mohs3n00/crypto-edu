# Content Blueprint & Pedagogical Design: Big Data Analytics (IS445)

## 1. Blueprint Architecture & Non-Negotiables

In strict adherence to the **EDU Master Integration Prompt (Sections A, C & D)**:
1. **Single Continuous Vertical Document:** The primary study experience lives at `/study` as one vertically scrollable curriculum document with in-page jump navigation.
2. **Dual Bilingual Presentation:** Original English technical terms (e.g. *Analytic Sandbox*, *Entity Identification Problem*, *Core Point*, *Border Point*, *Min-Max Normalization*) paired with concise, academically accurate Arabic explanations.
3. **Written Exam Blueprints:** For all written/essay topics (tested in Midterm 2025 Q1), the content provides an explicit "Exam Essay Blueprint" containing the exact structured bullet points required for full marks.
4. **Step-by-Step Worked Problems:** Complete worked numerical solutions using KaTeX display math with given data, formula, substitution, calculation, and final result verification.
5. **Soft-Yellow Semantic Highlighting:** Only key definitions, conditions, triggers, and formulas are highlighted using the platform standard soft-yellow highlight.

---

## 2. Unit Content Blueprints

### Unit 1: Introduction to Big Data & Analytic Ecosystem (`bd-ch1`)
- **Lesson 1.1:** Definitions of Big Data, 4 V's (Volume, Velocity, Variety, Veracity), 4 Data Structures (Structured, Semi-Structured, Quasi-Structured, Unstructured).
- **Lesson 1.2:** Evolution of Data Repositories. **Written Exam Blueprint 1: What is an Analytic Sandbox?** (Dedicated workspace, loaded with multi-source raw data, high compute resources, isolation from production, schema-on-read flexibility).
- **Lesson 1.3:** Traditional Analytical Architecture vs Modern Ecosystem. **Written Exam Blueprint 2: Challenges of Traditional Architecture for Data Scientists** (High-value data is hard to reach/extract, rigid schema-on-write constraints, IT request queue latency, lack of iterative compute capacity).
- **Lesson 1.4:** **Written Exam Blueprint 3: BI vs Data Science Comparison Matrix** (Retrospective vs Forward-looking; Structured vs Any data format; Standard reporting vs Machine learning; Metrics vs Hypotheses).

### Unit 2: The Data Analytics Lifecycle (`bd-ch2`)
- **Lesson 2.1:** The 6-Phase Lifecycle Overview & Cyclic Feedback.
- **Lesson 2.2:** Phase 1: Discovery. Problem framing, assessing resources, identifying key stakeholders and their interests (Midterm 2025 Q2.2), formulating initial hypotheses.
- **Lesson 2.3:** Phase 2: Data Preparation. Provisioning the Analytic Sandbox, ELT vs ETL paradigm, data conditioning and cleaning.
- **Lesson 2.4:** Phase 3 & 4: Model Planning (EDA, variable selection, algorithm selection) & Model Building (training, testing, evaluation).
- **Lesson 2.5:** Phase 5 & 6: Communicate Results & Operationalize. Assessing success/failure, 4 core deliverables, **running a pilot deployment** to assess real-world performance and benefits before full rollout (Midterm 2025 Q2.3).

### Unit 3: Data Preprocessing: Cleansing, Integration & Normalization (`bd-ch3`)
- **Lesson 3.1:** Data Cleansing & Missing Value Imputation (Default values, Mean, Median, Mode, Random).
- **Lesson 3.2:** **Worked Problem: Outlier Detection via Inter-Quartile Range (IQR):**
  - Formula: $IQR = Q_3 - Q_1$, $\text{Lower} = Q_1 - 1.5 \times IQR$, $\text{Upper} = Q_3 + 1.5 \times IQR$.
  - Step-by-step worked numerical calculation with step breakdown.
- **Lesson 3.3:** Smoothing Noisy Data & Validation Rules (e.g. detecting if a zip code contains letters - Midterm 2025 Q2.4), standardization, inconsistency.
- **Lesson 3.4:** Data Integration Challenges:
  - **Entity Identification Problem:** Attributes representing the same entity with different names (e.g. `Student_ID` vs `Roll_No` - Midterm 2025 Q2.5).
  - Redundancy & Pearson Correlation ($r_{A,B}$).
  - Data Value Conflicts & Duplication.
- **Lesson 3.5:** **Worked Problem: Normalization Calculations:**
  - Min-Max Normalization: $v' = \frac{v - \min_A}{\max_A - \min_A} (\text{new\_max}_A - \text{new\_min}_A) + \text{new\_min}_A$.
  - Z-Score Normalization: $v' = \frac{v - \bar{A}}{\sigma_A}$.
  - Decimal Scaling: $v' = \frac{v}{10^j}$.
  - Complete worked numerical examples for each formula.

### Unit 4: Exploratory Data Analysis & Analytical Distinctions (`bd-ch4`)
- **Lesson 4.1:** Why Visualize Before Analyzing? Anscombe's Quartet.
- **Lesson 4.2:** Examining Single Variable Distributions (histograms, density plots, log transformations, saturated data).
- **Lesson 4.3:** Analyzing Two-Variable Relationships (scatterplots, hexbins for overplotting, pairs plot).
- **Lesson 4.4:** **Written Exam Blueprint 4: EDA vs Data Preprocessing vs Feature Engineering** (Definitive 3-way academic comparison with role, timing, and goal of each).

### Unit 5: Unsupervised Clustering: K-Means & DBSCAN (`bd-ch5`)
- **Lesson 5.1:** Clustering Foundations & The K-Means 4-Step Algorithm.
- **Lesson 5.2:** **Worked Problem: K-Means Centroid Recalculation:**
  - Formula: $\vec{C}_k = (\frac{1}{N}\sum x_i, \frac{1}{N}\sum y_i)$.
  - Step-by-step worked calculation from Midterm 2025 Q2.6:
    - $C_1 = \{(2,2), (4,4), (6,6)\} \to (4,4)$
    - $C_2 = \{(0,4), (4,0)\} \to (2,2)$
    - $C_3 = \{(5,5), (9,9)\} \to (7,7)$
  - Feature Scaling necessity (Midterm 2025 Q2.7), Choosing $K$ via WSS and Elbow curve, Customer segmentation use case (Midterm 2025 Q2.8), Strengths and Cautions.
- **Lesson 5.3:** DBSCAN Foundations: Density-Based Philosophy, Parameters $\epsilon$ (Eps) and $MinPts$, $\epsilon$-neighborhood $N_\epsilon(p)$.
- **Lesson 5.4:** Point Classifications:
  - **Core Point:** $|N_\epsilon(p)| \ge MinPts$.
  - **Border Point:** $|N_\epsilon(p)| < MinPts$, but within $\epsilon$ of a core point.
  - **Noise Point:** Neither core nor border.
  - Directly density-reachable, density-reachable, density-connected.
- **Lesson 5.5:** **Worked Problem: Complete DBSCAN Algorithm & Distance Matrix Calculation:**
  - Given 7 points with $\epsilon = 1.5$ and $MinPts = 3$:
  - Distance matrix computation, neighborhood expansion, core/border/noise labeling, and cluster synthesis.
- **Lesson 5.6:** Comprehensive Comparative Analysis: K-Means vs DBSCAN.

---

## 3. Interactive Visualizers & Simulation Tools

1. **`DbscanVisualizer`:**
   - 2D Canvas where points can be placed or selected from preset datasets.
   - Interactive sliders for $\epsilon$ (Eps) radius and $MinPts$.
   - Live color-coded rendering of **Core Points (Green)**, **Border Points (Yellow)**, and **Noise Points (Red)** with $\epsilon$-radius circles.
   - Real-time display of point neighborhood counts and resulting cluster assignments.

2. **`KMeansCentroidCalculator`:**
   - Interactive observation input table for $K$ clusters.
   - Live centroid computation showing exact intermediate arithmetic steps ($\sum x / N, \sum y / N$).
   - Direct verification against exam problems (e.g. Midterm 2025 Q2.6).

