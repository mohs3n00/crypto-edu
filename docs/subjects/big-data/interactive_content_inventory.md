# Big Data Analytics (IS445) — Interactive Content Inventory

This inventory documents all interactive software tools, mathematical calculators, diagram renderers, slide deck mappings, formulas, and worked problems implemented for Big Data Analytics.

---

## 1. Interactive Visualizers & Simulators

### A. `DbscanVisualizer` (`bigdata-dbscan-visualizer`)
- **Component File:** `src/components/diagrams/BigDataInteractiveDiagrams.tsx`
- **Slide Mapping:** Lesson `bd-ch5-l5` (Worked DBSCAN Problems & Tracing)
- **Features & Capabilities:**
  - **Coordinate Space:** SVG Cartesian coordinate grid (0 to 10 on both axes).
  - **Dynamic Parameters:**
    - `Epsilon (Eps)` slider: Range 0.8 to 3.0 (step 0.1, default 1.6).
    - `MinPts` slider: Range 2 to 5 (step 1, default 3).
  - **Real-Time Point Classifications:**
    - Green Nodes: Core points ($|N_\epsilon(P)| \ge MinPts$).
    - Amber Nodes: Border points ($|N_\epsilon(P)| < MinPts$ and touches $\ge 1$ Core point).
    - Red Dashed Nodes: Noise / Outliers (-1) (neither Core nor Border).
  - **Interactive Inspection:**
    - Clicking any node dynamically renders its blue $\epsilon$-radius circular boundary.
    - Draws dashed connecting lines to all neighbor nodes lying within $\le \epsilon$.
    - Displays an inspection card detailing point coordinates, neighbor set, neighbor count, qualification status, and verified academic rationale in Arabic and English.

### B. `KMeansCentroidCalculator` (`bigdata-kmeans-calculator`)
- **Component File:** `src/components/diagrams/BigDataInteractiveDiagrams.tsx`
- **Slide Mapping:** Lesson `bd-ch5-l2` (K-Means Algorithmic Mechanics & Centroid Recalculation)
- **Features & Capabilities:**
  - **Official Exam Problem Preset:** Loads the exact 7 points from Midterm 2025 Q2.6:
    - Cluster 1: $(2,4)$ and $(6,4) \implies C_1 = (4,4)$
    - Cluster 2: $(1,2)$ and $(3,2) \implies C_2 = (2,2)$
    - Cluster 3: $(5,7), (7,7), (9,7) \implies C_3 = (7,7)$
  - **Step-by-step arithmetic breakdown:** Displays exact summation and division equations:
    $$\text{Mean X} = \frac{\sum x_i}{n}, \quad \text{Mean Y} = \frac{\sum y_i}{n}$$
  - **Visual Verification Badge:** Confirms 100% exact match with the official exam answer key.

---

## 2. Mathematical Problem Solving Hub (6 Complete Worked Problems)

Cataloged in `src/data/bigdata/problems/workedProblems.ts` and rendered via `InteractiveSolvingBoard`:

1. **`bd-prob-01`: K-Means Centroid Recalculation (Midterm 2025 Q2.6)**
   - Inputs: 3 clusters with 7 points in 2D.
   - Steps: Summing coordinates, dividing by cluster point count $n$.
   - Output: $C_1 = (4,4), C_2 = (2,2), C_3 = (7,7)$.
2. **`bd-prob-02`: Min-Max Normalization to Range [0.0, 1.0]**
   - Inputs: $v = \$73,600$, $\min = \$12,000$, $\max = \$98,000$.
   - Steps: Numerator $(v - \min) = 61,600$; Denominator $(\max - \min) = 86,000$.
   - Output: $v' \approx 0.716$.
3. **`bd-prob-03`: Z-Score (Zero-Mean) Normalization**
   - Inputs: $v = \$73,600$, $\mu = \$54,000$, $\sigma = \$16,000$.
   - Steps: Deviation $(73,600 - 54,000) = 19,600$; Division by $\sigma = 16,000$.
   - Output: $v' = +1.225$.
4. **`bd-prob-04`: Normalization by Decimal Scaling**
   - Inputs: Range $[-986, 917]$, values $v_1 = -986, v_2 = 450$.
   - Steps: Max absolute value is 986; smallest integer $j$ such that $986/10^j < 1$ is $j=3$.
   - Output: $j=3, v_1' = -0.986, v_2' = +0.450$.
5. **`bd-prob-05`: Interquartile Range (IQR) Outlier Detection**
   - Inputs: 11 values $[5, 12, 15, 18, 22, 30, 35, 40, 43, 50, 95]$.
   - Steps: $Q_1 = 15, Q_3 = 43 \implies IQR = 28$. Fences: $[-27, 85]$.
   - Output: Outlier identified $= 95$.
6. **`bd-prob-06`: DBSCAN Distance Matrix & Point Classification Trace**
   - Inputs: 5 points with $Eps = 1.5, MinPts = 3$.
   - Steps: Euclidean distance calculations, neighbor counting $|N_\epsilon|$, Core/Border/Noise classification.
   - Output: $P_1, P_2, P_3, P_4 = \text{Core}$, $P_5 = \text{Noise (-1)}$.

---

## 3. Mathematical Formula Catalog (9 Verified Formulas)

Cataloged in `src/data/bigdata/formulas/index.ts` with complete KaTeX equations, variable dictionaries, preconditions, and worked examples:

| Formula ID | Name | LaTeX | Preconditions |
| :--- | :--- | :--- | :--- |
| `f-bd-minmax` | Min-Max Normalization | $v' = \frac{v - \min_A}{\max_A - \min_A}(\text{new\_max} - \text{new\_min}) + \text{new\_min}$ | $\max_A > \min_A$ |
| `f-bd-zscore` | Z-Score Normalization | $v' = \frac{v - \mu}{\sigma}$ | $\sigma > 0$ |
| `f-bd-decimal` | Decimal Scaling | $v' = \frac{v}{10^j}, \quad \max(\|v'\|) < 1$ | $j \in \mathbb{Z}^+$ |
| `f-bd-iqr` | IQR & Outlier Fences | $\text{IQR} = Q_3 - Q_1, \quad Q_1 - 1.5 \times \text{IQR}, \quad Q_3 + 1.5 \times \text{IQR}$ | $Q_3 \ge Q_1$ |
| `f-bd-euclidean` | Euclidean Distance | $d(\mathbf{p}, \mathbf{q}) = \sqrt{\sum_{i=1}^n (p_i - q_i)^2}$ | $n \ge 1$ |
| `f-bd-centroid` | K-Means Centroid | $\mathbf{c}_k = \frac{1}{\|C_k\|} \sum_{\mathbf{x} \in C_k} \mathbf{x} = \left(\frac{\sum x_i}{n}, \frac{\sum y_i}{n}\right)$ | $\|C_k\| > 0$ |
| `f-bd-wss` | Within-Cluster Sum of Squares (WSS) | $\text{WSS} = \sum_{k=1}^K \sum_{\mathbf{x} \in C_k} \|\mathbf{x} - \mathbf{c}_k\|^2$ | $K \ge 1$ |
| `f-bd-dbscan-core` | DBSCAN Core Point Condition | $\|N_\epsilon(P)\| = \|\{Q \in D \mid d(P, Q) \le \epsilon\}\| \ge \text{MinPts}$ | $\epsilon > 0, MinPts \ge 1$ |
| `f-bd-pearson` | Pearson Correlation Coefficient | $r_{A,B} = \frac{\sum (a_i - \bar{A})(b_i - \bar{B})}{(n-1)\sigma_A \sigma_B}$ | $\sigma_A, \sigma_B > 0$ |

---

## 4. BASMAGA Rapid Recall & Quick Reference (18 Cards)

Cataloged in `src/data/bigdata/basmaga/`:
- **18 High-Yield BASMAGA Cards:**
  - Highlighting trigger keywords, condition words, basmaga rules, quick reasonings, and exam traps.
- **18 Quick Reference Entries:**
  - Rapid search table with English and Arabic keywords, syllabus concepts, concise rules, and pitfall warnings.

