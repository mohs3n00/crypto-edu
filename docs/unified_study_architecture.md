# EDU — Unified Study-First Architecture & Engineering Specification

## 1. Executive Summary & The Study-First Philosophy

The **EDU** platform has undergone a fundamental architectural transformation, transitioning from a conventional LMS (Learning Management System) into a unified, interactive university study guide and exam reference platform.

### The Problem With Traditional LMS Architecture
Traditional online courses fragment educational content across deep nested hierarchies:
$$\text{Course} \longrightarrow \text{Chapters} \longrightarrow \text{Lessons} \longrightarrow \text{Subsections} \longrightarrow \text{Individual Webpages}$$

For university cryptography and network security students preparing for midterms and final exams, this fragmentation creates severe cognitive friction:
1. **Context Loss:** Students cannot easily cross-reference related concepts (e.g., Euclidean Algorithm in Chapter 2 with Hill Cipher matrix modular inversions in Chapter 3).
2. **Navigation Fatigue:** Reviewing a single chapter required loading and clicking through 10–20 separate URLs, waiting for component re-mounts, and losing scroll position.
3. **Passive Reading vs. Active Recall:** Questions were segregated into separate "quizzes" rather than being encountered in context right after the academic rule is explained.

### The Study-First Solution
Under the **Study-First Architecture**, the entire university syllabus is rendered as **ONE continuous, vertically scrollable, interactive Study Guide** at `/study` (and the platform root `/`):
- All 5 authoritative units are presented in their exact academic sequence:
  - **Unit 1 (Chapter 1):** Computer and Network Security Concepts (`Ch 1 information security.pdf`)
  - **Unit 2 (Chapter 2):** Introduction to Number Theory (`Ch 2 Information Security.pdf`)
  - **Unit 3 (Chapter 3):** Classical Encryption Techniques (`Ch3(1).pptx`)
  - **Unit 4 (Chapter 4):** Block Ciphers and the Data Encryption Standard (`Ch04(1).pptx`)
  - **Unit 5 (Chapter 7):** Block Cipher Operation (`Ch07-Crypto(1).pdf`)
- *Academic Integrity Note:* No intermediary chapters (e.g. Chapter 5 or 6) are invented or inserted; the curriculum faithfully preserves the professor's syllabus ordering.
- Every section contains complete definitions, bilingual (English & Arabic) explanations, rendered KaTeX mathematical formulas, step-by-step worked examples, interactive SVG diagrams, and **contextual practice questions embedded directly within the topic flow**.

---

## 2. Component Hierarchy & System Architecture

The unified Study Guide is architected as a modular component hierarchy in `src/components/study/`:

```
StudyGuide (/study & /)
│
├── TopNav (Primary Destinations: Study, Questions, Review, Basmaga, Problems, Interactive)
├── CourseSidebar (Dynamic In-Page Table of Contents with smooth anchor scrolling)
│
└── Main Content Container
    │
    ├── StudyJumpBar (Sticky navigation bar: Unit pills, search filter, scroll-to-top)
    │
    └── StudyChapterSection (Repeated for Units 1, 2, 3, 4, 7)
        │   • Chapter header, official syllabus citation, stats badge, overview
        │
        └── StudyTopicSection (Repeated for all syllabus topics within each chapter)
            │   • Topic title (EN/AR), lesson container
            │
            ├── StudyLessonContent (Repeated for each lesson in topic)
            │   ├── Academic Concept Header (Title, metadata, estimated study time)
            │   ├── Formal Definition & Bilingual Explanations (EN + AR)
            │   ├── Single-Column Structured Paragraphs & Rule Lists
            │   ├── Exam Traps & Alerts (Callout banners with exam triggers)
            │   ├── StudyFormulaCard (KaTeX display, parameter breakdown, conditions)
            │   ├── StudyWorkedExampleCard (Step-by-step calculations with verification)
            │   ├── StudyDiagramCard (Integrated interactive SVG diagrams via DiagramRenderer)
            │   └── Interactive Presentation CTA (Direct launch of digital classroom slide deck)
            │
            └── Contextual Training Section
                └── StudyContextualQuestion (Embedded test bank & exam questions for immediate recall)
```

---

## 3. Core Component Specifications

### 3.1 `StudyGuide.tsx` (`src/pages/StudyGuide.tsx`)
- **Role:** Main page orchestrator.
- **Data Source:** Pulls verified course content directly from `src/data/chapters/index.ts` (`courseData.chapters`) and the complete question bank from `src/data/questions/index.ts` (`allQuestions`).
- **Functionality:**
  - Synchronizes URL hash targets (e.g., `#ch2`, `#ch3-t2`) on page load and window scroll.
  - Implements real-time keyword filtering across all topics and lessons with highlight matching.
  - Coordinates active chapter tracking to keep the `StudyJumpBar` indicators in sync.

### 3.2 `StudyJumpBar.tsx` (`src/components/study/StudyJumpBar.tsx`)
- **Role:** Sticky floating navigation bar mounted below the main top navigation.
- **Functionality:**
  - Displays quick-jump pill buttons for all 5 units:
    - `Unit 1 • المفاهيم` (`#ch1`)
    - `Unit 2 • نظرية الأعداد` (`#ch2`)
    - `Unit 3 • الشفرات الكلاسيكية` (`#ch3`)
    - `Unit 4 • تشفير الكتل وDES` (`#ch4`)
    - `Unit 5 • أنماط التشغيل و3DES` (`#ch7`)
  - Provides a global live search input to instantly filter the continuous curriculum by concept, keyword, or acronym (e.g., `DES`, `GCD`, `CTR`, `Playfair`).
  - Features an instant "Scroll to Top" action with smooth animation.

### 3.3 `StudyChapterSection.tsx` & `StudyTopicSection.tsx`
- **Role:** Structural containers providing academic hierarchy without page fragmentation.
- **Visual Distinction:**
  - Distinctive colored top-border accents for each chapter (Blue, Emerald, Violet, Amber, Rose).
  - Explicit university citation badges (e.g., `Source: Ch 2 Information Security.pdf (Slides 1–48)`).
  - Progress counters displaying the number of lessons, diagrams, formulas, and questions in that unit.

### 3.4 `StudyLessonContent.tsx`
- **Role:** Renders the rich academic lesson content using single-column, distraction-free cards.
- **Academic Preservation:**
  - Formal academic definitions in English, accompanied by natural Arabic pedagogical explanations.
  - Bulleted breakdown of essential conditions, criteria, and principles.
  - Callout banners for **Exam Alerts** (highlighting specific testbank triggers) and **Common Mistakes**.
  - Direct deep-link CTA button: `"افتح الدرس في التعلّم التفاعلي • Open Interactive Lecture"` routing to `/interactive/:chapterId/:lessonId`.

### 3.5 Math, Example & Diagram Cards
- **`StudyFormulaCard.tsx`:** Renders mathematical formulas using KaTeX (`react-katex`) with styled parameter descriptions and domain constraints (e.g., $gcd(a, n) = 1$, $0 \le r < n$).
- **`StudyWorkedExampleCard.tsx`:** Provides collapsible/expandable step-by-step problem solvers, displaying intermediate modular arithmetic values, state tables, and sanity checks.
- **`StudyDiagramCard.tsx`:** Integrates the platform's 27 SVG diagrams through `DiagramRenderer`, offering zoom controls and interactive inspection modes.

### 3.6 Contextual Practice: `StudyContextualQuestion.tsx`
- **Role:** Embedded active learning component placed at the conclusion of relevant topics.
- **Behavior:**
  - Pulls matching questions dynamically from `allQuestions` by matching `chapterId` and topic taxonomy.
  - Students can select an option and click "تحقق من الإجابة • Verify Answer" without leaving their reading position.
  - Instantly reveals whether the selection is correct, highlighting the authoritative academic explanation and exam reasoning.

---

## 4. In-Page Smooth Scrolling & Navigation Mechanics

The unified Study Guide eliminates traditional page transitions in favor of native, high-performance in-page scrolling:

1. **Hash Anchor Mapping:**
   - Every chapter has an ID anchor: `id="ch1"`, `id="ch2"`, `id="ch3"`, `id="ch4"`, `id="ch7"`.
   - Every topic has an ID anchor: `id="ch1-t1"`, `id="ch2-t3"`, etc.
2. **`CourseSidebar.tsx` Integration:**
   - The sidebar has been updated from a router link list to a Table of Contents (TOC).
   - When a student clicks a chapter or topic in the sidebar:
     - If already on `/study`, it smoothly scrolls the document using `element.scrollIntoView({ behavior: 'smooth', block: 'start' })`.
     - If currently on another page (e.g., `/questions` or `/review`), it navigates to `/study#${targetId}`, where `StudyGuide` auto-scrolls to the target upon mount.
3. **Scroll Offset Management:**
   - Sticky headers (`TopNav` + `StudyJumpBar`) occupy approximately 120px of vertical viewport height.
   - All anchor sections utilize CSS `scroll-margin-top: 140px` to prevent headers from obscuring the top of the target section.

---

## 5. Decoupled Centralized Questions Bank (`/questions`)

While active learning questions are embedded contextually in the Study Guide, students also require a dedicated, comprehensive testing center.

The **Questions Hub** (`/questions`, aliased to `/practice`) provides:
- Complete question inventory (185 questions from test banks, past midterms, and supplementary sets).
- Multi-dimensional filtering:
  - **By Unit:** Unit 1 (Concepts), Unit 2 (Number Theory), Unit 3 (Classical Ciphers), Unit 4 (Block Ciphers & DES), Unit 5 (Block Cipher Modes & 3DES).
  - **By Question Source:** Test Bank, Midterm Exams, Supplementary.
  - **By Question Type:** Multiple Choice (MCQ), True/False, Short Answer / Practical.
  - **By Difficulty:** Easy, Medium, Hard.
  - **By User Status:** Unanswered, Correct, Incorrect (persisted in local state).
- Direct access to the **Exam Simulator** (`/exams`) and **Interactive Crypto Lab** (`/lab`).

---

## 6. Layout & Readability Engineering

1. **Single-Column Full-Width Flow:**
   - Replaced fragmented multi-column cards with full-width vertical cards (`max-w-4xl mx-auto`).
   - Line lengths are optimized for reading comfort (60–80 characters per line) with generous line heights (`leading-relaxed`).
2. **Bilingual Typography & RTL Support:**
   - English terms and code identifiers are set in monospace and clean sans-serif typography with LTR directionality.
   - Arabic explanations are styled with proper RTL direction, balanced margins, and legible font weights.
3. **Performance Optimization:**
   - Pre-rendered static structures with lazy rendering for diagrams.
   - Minimal re-renders through targeted component state isolation.
   - Vite bundle transformation completes in ~1.0s with zero runtime bottlenecks.

---

## 7. Verification & Operational Status

- **Primary Route:** `/` and `/study` render `StudyGuide.tsx`.
- **Legacy Route Aliases:** `/learn`, `/learn/:chapterId`, and `/learn/:chapterId/:lessonId` seamlessly redirect to `/study`.
- **Questions Route:** `/questions` and `/practice` render `QuestionsHub.tsx`.
- **Build Status:** Verified passing with `tsc -b && vite build` (2,229 modules transformed, 0 errors) and `oxlint` (0 errors).

