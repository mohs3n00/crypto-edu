# Syllabus Coverage Matrix: Big Data Analytics (IS445)

## 1. Curriculum Architecture & Midterm Mapping

The Big Data Analytics curriculum has been systematically mapped into **5 cohesive academic units** (23 lessons) covering 100% of the midterm scope up to and including **DBSCAN Clustering Calculations**:

| Unit ID | Unit Title (EN) | Unit Title (AR) | Lessons Count | Source Authority References |
| :--- | :--- | :--- | :--- | :--- |
| **`bd-ch1`** | Unit 1: Introduction to Big Data & Analytic Ecosystem | الوحدة الأولى: مقدمة في تحليلات البيانات الضخمة والمعماريات التحليلية | 4 Lessons | `Module 1_Intro to BDA.pptx` (Slides 1–43); Midterm 2025 Q1.1, Q1.2, Q1.3 |
| **`bd-ch2`** | Unit 2: The Data Analytics Lifecycle | الوحدة الثانية: دورة حياة تحليلات البيانات | 4 Lessons | `Module 2_DA Lifecycle.pptx` (Slides 1–41); Midterm 2025 Q2.2, Q2.3 |
| **`bd-ch3`** | Unit 3: Data Preprocessing: Cleansing, Integration & Normalization | الوحدة الثالثة: معالجة البيانات الأولية: التنظيف، التكامل، والتطبيع | 5 Lessons | `data cleansing P01.pdf` (Pages 1–43); `integration and normalization P02.pptx` (Slides 1–19); Midterm 2025 Q2.4, Q2.5 |
| **`bd-ch4`** | Unit 4: Exploratory Data Analysis & Analytical Distinctions | الوحدة الرابعة: استكشاف البيانات بصرياً والفروق التحليلية الجوهرية | 4 Lessons | `analyzing and exploring.pptx` (Slides 1–20); Midterm 2025 Q1.4 |
| **`bd-ch5`** | Unit 5: Unsupervised Clustering: K-Means & DBSCAN | الوحدة الخامسة: التجميع غير الخاضع للإشراف: خوارزميات K-Means و DBSCAN | 6 Lessons | `Module 4_Theory and Methods.pptx` (Slides 8–23); Midterm 2025 Q2.6, Q2.7, Q2.8; University DBSCAN Curriculum Specifications |

---

## 2. Granular Lesson-by-Lesson Mapping

### Unit 1: Introduction to Big Data & Analytic Ecosystem (`bd-ch1`)
- **`bd-ch1-l1`: Definition of Big Data, The 4 V's & 4 Data Structures**
  - Definition of Big Data (Scale, diversity, velocity, distributed nature).
  - The 4 V's: Volume (0.8 ZB in 2009 to 35.2 ZB in 2020), Velocity, Variety, Veracity.
  - The 4 Data Structures: Structured (RDBMS, OLAP), Semi-Structured (XML, JSON), Quasi-Structured (Web Clickstream logs), Unstructured (Text, PDF, Images, Video - 80-90% of data growth).
- **`bd-ch1-l2`: Evolution of Data Repositories & The Analytic Sandbox**
  - The analyst perspective on data repositories: Spreadsheets → Data Marts → Enterprise Data Warehouses (EDW) → Analytic Sandboxes.
  - Definition of an **Analytic Sandbox** (Written Exam Focus): High-performance isolated workspace, containing data extracts, raw multi-source data, supporting heavy ad-hoc exploratory analytics without impacting production OLTP systems.
- **`bd-ch1-l3`: Traditional Analytical Architecture vs Modern Big Data Ecosystem**
  - Architecture of typical enterprise analytical systems (ETL pipelines, staging tables, core EDW, departmental data marts, static BI reports).
  - The 4 Core Architectural Challenges for Data Scientists (Written Exam Focus): High-value data is hard to reach/extract, rigid schema-on-write constraints, IT request queue latency (weeks/months), lack of compute capacity for iterative algorithmic training.
- **`bd-ch1-l4`: Business Intelligence (BI) vs Data Science & Core Roles**
  - Comprehensive comparison matrix:
    - Focus: BI is retrospective/descriptive ("What happened?"); Data Science is forward-looking/predictive ("What will happen? Why?").
    - Data: BI uses structured/historical data; Data Science uses raw, multi-structured data.
    - Questions: BI answers predefined KPI queries; Data Science discovers hidden patterns and tests hypotheses.
  - Core team roles: Business User, BI Analyst, Data Engineer, Database Administrator (DBA), Data Scientist.

### Unit 2: The Data Analytics Lifecycle (`bd-ch2`)
- **`bd-ch2-l1`: Lifecycle Overview & Phase 1: Discovery**
  - Characteristics of the lifecycle: Cyclic, iterative, adaptive, 6 distinct phases.
  - Phase 1 (Discovery): Problem framing, assessing team/technical resources, identifying key stakeholders and their interests (Midterm 2025 Q2.2), formulating initial hypotheses (IH), developing domain expertise.
- **`bd-ch2-l2`: Phase 2: Data Preparation & Sandbox Ingestion**
  - Extract, Load, and Transform (ELT) paradigm vs traditional ETL.
  - Provisioning and populating the Analytic Sandbox.
  - Data conditioning, cleaning, transformation, and sanity checking.
- **`bd-ch2-l3`: Phase 3 & 4: Model Planning & Model Building**
  - Phase 3 (Model Planning): Exploratory data analysis (EDA), variable selection, candidate algorithm selection.
  - Phase 4 (Model Building): Splitting into training, testing, and validation sets; executing models; tuning hyperparameters.
- **`bd-ch2-l4`: Phase 5 & 6: Communicate Results & Operationalize**
  - Phase 5 (Communicate Results): Assessing project success vs failure against initial hypotheses; 4 core deliverables for executive sponsors, project managers, data engineers, and data scientists.
  - Phase 6 (Operationalize): Delivering final code, technical documentation, deploying models into production, **running a pilot deployment** to assess real-world performance and business benefits before full enterprise rollout (Midterm 2025 Q2.3).

### Unit 3: Data Preprocessing: Cleansing, Integration & Normalization (`bd-ch3`)
- **`bd-ch3-l1`: Data Cleansing & Missing Value Imputation**
  - Reasons for dirty data: Incomplete, noisy, outlier-prone, inconsistent.
  - Imputation techniques: Default values, Mean imputation (for symmetric numeric), Median imputation (for skewed numeric), Mode imputation (for categorical variables), Random sampling imputation.
- **`bd-ch3-l2`: Outlier Detection via Inter-Quartile Range (IQR)**
  - Definition of Quartiles ($Q_1, Q_2, Q_3$).
  - Calculating IQR: $IQR = Q_3 - Q_1$.
  - Outlier threshold fences: Lower Bound $= Q_1 - 1.5 \times IQR$, Upper Bound $= Q_3 + 1.5 \times IQR$.
  - Step-by-step worked mathematical examples with odd and even length datasets.
- **`bd-ch3-l3`: Smoothing Noisy Data, Validation Rules & Inconsistency**
  - Causes of noisy data (faulty instruments, human data-entry error).
  - Validation rules: Checking logical/domain constraints (e.g. detecting if a zip code contains letters - Midterm 2025 Q2.4; age $\ge 0$).
  - Standardization: Uniform date/time formats (ISO 8601), standardizing abbreviations and codes.
  - Inconsistency resolution: Reconciling contradictory redundant fields (e.g. `Total_Price != Quantity * Unit_Price`).
- **`bd-ch3-l4`: Data Integration Challenges: Identification, Redundancy & Conflicts**
  - **Entity Identification Problem:** Attributes from different sources representing the same real-world entity with different names (e.g. `Student_ID` vs `Roll_No` - Midterm 2025 Q2.5).
  - Redundancy detection via Pearson Correlation Coefficient $r_{A,B}$ (positive correlation $r > 0$, negative $r < 0$, independent $r = 0$).
  - Data Value Conflicts (representation, scale, unit discrepancies).
  - Duplication resolution.
- **`bd-ch3-l5`: Data Normalization: Min-Max, Z-Score & Decimal Scaling**
  - Formula 1 (Min-Max): $v' = \frac{v - \min_A}{\max_A - \min_A} (\text{new\_max}_A - \text{new\_min}_A) + \text{new\_min}_A$.
  - Formula 2 (Z-Score): $v' = \frac{v - \bar{A}}{\sigma_A}$.
  - Formula 3 (Decimal Scaling): $v' = \frac{v}{10^j}$ where $j = \lceil \log_{10}(\max(|A|)) \rceil$.
  - Step-by-step worked numerical calculation problems for each formula.

### Unit 4: Exploratory Data Analysis & Analytical Distinctions (`bd-ch4`)
- **`bd-ch4-l1`: Why Visualize Before Analyzing? Anscombe's Quartet**
  - The moral of visualization: Summary statistics (mean, variance, correlation, linear regression) can be identical while datasets have completely different underlying patterns.
- **`bd-ch4-l2`: Examining Single Variable Distributions & Transformations**
  - Low-volume vs high-volume inspection (histograms, kernel density plots, box plots).
  - Logarithmic transformations for highly skewed distributions.
  - Detecting dirty data signatures and saturated variables (artificial floor/ceiling caps).
- **`bd-ch4-l3`: Analyzing Two-Variable Relationships & Overplotting**
  - Visualizing continuous-continuous relationships (scatterplots).
  - Handling high-volume overplotting via hexbin plots and alpha blending.
  - Multi-variable pairs plots (Iris dataset).
- **`bd-ch4-l4`: High-Yield Distinction: EDA vs Data Preprocessing vs Feature Engineering**
  - Definitive 3-way academic comparison (Midterm 2025 Q1.4):
    - *EDA:* Visual and statistical discovery of patterns, distributions, and hypotheses without altering the data pipeline.
    - *Data Preprocessing:* Cleaning, handling missing values, filtering outliers, and normalizing data to make it usable.
    - *Feature Engineering:* Transforming and combining existing raw features into new, mathematically predictive inputs tailored to machine learning models.
  - Data exploration (analyst-facing) vs Data presentation (stakeholder-facing).

### Unit 5: Unsupervised Clustering: K-Means & DBSCAN (`bd-ch5`)
- **`bd-ch5-l1`: Clustering Foundations & The K-Means 4-Step Algorithm**
  - Unsupervised learning concept: Distance as the inverse of similarity.
  - The 4-step iterative K-Means algorithm:
    1. Select $K$ random initial centroids.
    2. Assign each point to the nearest centroid via Euclidean distance.
    3. Recompute centroids as the mean of all points assigned to that cluster.
    4. Repeat until centroid assignments no longer change.
- **`bd-ch5-l2`: K-Means Centroid Recalculation, Feature Scaling & Choosing K**
  - Centroid update formula: $\vec{C}_k = (\frac{1}{N}\sum x_i, \frac{1}{N}\sum y_i)$ (Fully worked numerical problem matching Midterm 2025 Q2.6!).
  - Feature Scaling necessity: Equalizing weights in Euclidean distance calculations (Midterm 2025 Q2.7).
  - Determining $K$: Within-Sum-of-Squares (WSS) and the "Elbow" curve heuristic.
  - Diagnostics: Pair-wise plots, cluster balance.
  - Application use cases: Customer segmentation by purchase patterns (Midterm 2025 Q2.8).
  - Reasons to choose (+) and cautions (-): Sensitivity to initial seeds, assumption of spherical clusters, forces outliers into clusters.
- **`bd-ch5-l3`: DBSCAN Foundations: Density-Based Philosophy, Eps & MinPts**
  - Core philosophy: Clusters are continuous dense regions separated by sparse regions of low density.
  - Overcoming K-Means flaws: Discovers arbitrary non-spherical shapes; does not force outliers into clusters.
  - Two fundamental parameters:
    - $\epsilon$ (Eps): The radius defining the neighborhood of a point.
    - $MinPts$: The minimum number of points required within the $\epsilon$-neighborhood.
  - Definition of $\epsilon$-neighborhood: $N_\epsilon(p) = \{q \in D \mid \text{dist}(p, q) \le \epsilon\}$.
- **`bd-ch5-l4`: Point Classifications: Core, Border, and Noise Points**
  - **Core Point:** A point $p$ where $|N_\epsilon(p)| \ge MinPts$.
  - **Border Point:** A point $p$ where $|N_\epsilon(p)| < MinPts$, but $p \in N_\epsilon(q)$ for some core point $q$.
  - **Noise Point (Outlier):** A point $p$ that is neither a core point nor a border point ($|N_\epsilon(p)| < MinPts$ and not in neighborhood of any core point).
  - Reachability definitions: Directly density-reachable, Density-reachable, Density-connected.
- **`bd-ch5-l5`: Worked DBSCAN Problems: Distance Matrix & Step-by-Step Tracing**
  - Step-by-step algorithm walkthrough.
  - **Worked Problem 1 (Comprehensive 2D Dataset):** Given 7 points with $\epsilon = 1.5$ and $MinPts = 3$:
    - Step 1: Pairwise Euclidean distance matrix computation.
    - Step 2: Enumeration of $N_\epsilon(P_i)$ for all points.
    - Step 3: Classification into Core, Border, and Noise.
    - Step 4: Cluster synthesis and noise isolation.
  - **Worked Problem 2 (1D Linear Coordinate Trace):** Rapid exam calculation method for density clustering.
- **`bd-ch5-l6`: Comparative Analysis: K-Means vs DBSCAN**
  - Comprehensive comparison matrix:
    - Number of clusters: Pre-specified $K$ vs Automatically discovered.
    - Cluster shapes: Spherical/convex only vs Arbitrary and irregular shapes.
    - Handling of noise/outliers: Highly sensitive (assigns all) vs Robust (explicit noise detection).
    - Parameter sensitivity: Choice of $K$ vs Choice of $\epsilon$ and $MinPts$.
    - Performance on varying densities: K-Means handles varying densities better; DBSCAN struggles when clusters have drastically different densities.

