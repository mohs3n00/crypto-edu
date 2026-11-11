# Source Material Inventory: Big Data Analytics (IS445)

## 1. Document Overview

- **Subject Name:** Big Data Analytics / تحليلات البيانات الضخمة
- **Course Code:** IS445 / IS422
- **Institution:** Zagazig University, Faculty of Computers and Informatics, Information Systems Department (Fourth Year, 2025)
- **Primary Syllabus Authority:** EMC Education Services (*Data Science and Big Data Analytics: Discovering, Analyzing, Visualizing and Presenting Data*) & Department Lectures/Sections
- **Scope Mandate (User Specified):**
  > *"محتوى الميد ان شاءالله لحد مسائل ال DBSCAN"*
  > *"بالنسبه لشكل الامتحان احتمال يبقى في جزء صغير MCQ و جزء Written"*
- **Inventory Completion Date:** November 2026

---

## 2. Source Files Inventory Table

| File Name | Format | Size | Total Pages / Slides | Role & Category | Specific Scope & Examinable Topics |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Module 1_Intro to BDA.pptx` | PowerPoint Presentation | 7.02 MB | 43 Slides | Core Lecture | Definition of Big Data, 4 V's (Volume, Velocity, Variety, Veracity), 4 Data Structures (Structured, Semi-Structured, Quasi-Structured, Unstructured), Data Repositories evolution (Spreadsheets, Data Marts, EDW, Analytic Sandbox), Business drivers, Traditional Analytical Architecture vs New Ecosystem, Data Science vs Business Intelligence (BI), Core Roles (Data Scientist, BI Analyst, Data Engineer, DBA). |
| `Module 2_DA Lifecycle.pptx` | PowerPoint Presentation | 2.88 MB | 41 Slides | Core Lecture | Data Analytics Lifecycle 6 Phases (Discovery, Data Prep, Model Planning, Model Building, Communicate Results, Operationalize). Key stakeholder identification, hypothesis formulation, analytic sandbox setup, ELT vs ETL, data conditioning, running pilots. |
| `data cleansing P01.pdf` | PDF Document | 929 KB | 43 Pages | Applied & Lab Slides | Reasons for dirty data (incomplete, noisy, inconsistent, outliers). Imputation methods (default, mean, median, mode, random). Outlier detection using Inter-Quartile Range (IQR, $Q_1, Q_2, Q_3$, lower/upper bounds). Smoothing noisy data (validation rules, standardization). Data inconsistency. |
| `integration and normalization P02.pptx` | PowerPoint Presentation | 1.34 MB | 19 Slides | Applied & Lab Slides | Data integration challenges: Entity Identification Problem (e.g. `Student_ID` vs `Roll_No`), Redundancy & Correlation Analysis (Pearson $r_{A,B}$), Data Value Conflicts, Duplication. Data Normalization: Min-Max Normalization, Z-Score Normalization, Decimal Scaling. |
| `analyzing and exploring.pptx` | PowerPoint Presentation | 1.22 MB | 20 Slides | Core Lecture | Review of Basic Data Analytic Methods (Module 3). Anscombe's Quartet (visualize before analyzing). Distribution of single variables (hist, density, log transformation, outliers). Relationships between two variables (scatterplots, hexbin overplotting, pairs plot, time series). Data exploration vs Presentation. |
| `Module 4_Theory and Methods.pptx` | PowerPoint Presentation | 5.38 MB | 169 Slides (Midterm Scope: Slides 8–23) | Core Lecture & Algorithms | Module 4: Advanced Analytics Theory and Methods. Midterm scope covers Clustering Foundations & K-Means: unsupervised learning, similarity/distance, 4-step K-Means algorithm, centroid calculation, WSS & Elbow method, pair-wise diagnostics, feature scaling necessity, customer segmentation use cases, strengths & cautions. (Post-midterm topics: Apriori, Regressions, Classifiers, Time Series, NLP). |
| `Mid 2025.jpg` | High-Resolution Image | 269 KB | 1 Page | Official Midterm Exam Paper | Actual 2025 Midterm Exam: **Question 1 (Written - 7 Marks):** Analytic sandbox definition, BI vs Data Science distinction, Analytical architecture challenges, EDA vs Preprocessing vs Feature Engineering. **Question 2 (MCQ - 8 Marks):** Descriptive analytics, Discovery phase stakeholders, Operationalize pilot purpose, Cleansing validation rule, Entity identification problem, K-Means centroid calculation numerical problem, Feature scaling rationale, Customer segmentation use case. |

---

## 3. Completeness & Gap Declaration

- **Direct Inspection:** All 7 files (335 slides/pages + 1 complete official exam paper) were read and verified via programmatic extraction and direct image analysis.
- **DBSCAN Inclusion:** As explicitly requested by the student and required by faculty curriculum for clustering before the midterm cut-off, complete theory, definitions (Core, Border, Noise, $\epsilon$, $MinPts$), density reachability/connectivity, algorithm steps, and worked numerical distance-matrix problems are fully included.
- **Midterm Cut-Off Boundary:** Topics following Clustering in Module 4 (Association Rules / Apriori, Linear Regression, Logistic Regression, Decision Trees, Time Series, Text Analysis) belong strictly to the Final Exam curriculum and are excluded from the Midterm study guide to ensure zero student distraction.

