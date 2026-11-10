# EDU — Interactive Learning Mode: Subsystem Architecture & System Design

## 1. Executive Summary & Mission

**Interactive Learning — التعلّم التفاعلي** is a dedicated primary destination inside the **EDU** cryptography learning platform. Designed as a digital classroom experience that fuses the pacing and visual clarity of professional PowerPoint slide lectures with active, exploratory web components, this subsystem enables fourth-year Computer Science students to study university lecture materials sequentially, visually, and practically.

Unlike static slide decks or text-heavy articles, the Interactive Learning subsystem features:
- **Presentation-Centric Canvas**: High-fidelity central presentation stage with minimal distraction and soft monochrome styling (`#F7F7F5`, `#FFFFFF`, `#222222`, `#E2E2DF`).
- **Declarative Slide Schema**: Strongly-typed slide models (`InteractiveSlide`) supporting 15 distinct pedagogical slide types.
- **Interactive Component Embedding**: Direct integration of scalable SVG/HTML interactive diagrams, step-by-step mathematical calculation players, and knowledge checks.
- **Bilingual Delivery**: Synchronized English technical terms and clear Arabic academic explanations.
- **Hardware-Friendly Controls**: Full keyboard navigation (Arrow keys, Spacebar, Page Up/Down, Fullscreen `F`, Escape), touch swipe gestures on mobile, slide jump drawers, and progress indicators.

---

## 2. Route Architecture & Navigation Integration

The feature is integrated as a top-level primary destination alongside Learn, Practice, Review, Basmaga, and Problem Solving:

```
┌─────────────────────────────────────────────────────────────┐
│                    Top Navigation Bar                       │
│  [EDU]   Learn | Practice | Review | Basmaga | Problems |   │
│          ★ Interactive (Lectures) • تعلّم تفاعلي            │
└─────────────────────────────────────────────────────────────┘
                               │
               ┌───────────────┴───────────────┐
               ▼                               ▼
       Route: /interactive         Route: /interactive/:chapterId/:lessonId
   (InteractiveHub - Lecture Catalog)   (InteractivePresentationViewer)
               │                               │
       Chapter & Topic Filter          PresentationStage Canvas
       Search & Lecture Selection       • Slide Viewport
       Progress & Duration Stats        • Keyboard & Touch Controller
                                        • Slide Overview Drawer
```

### Registered Routes (`src/router.tsx`)
1. `/interactive`: Main catalog hub displaying all 5 units, lesson cards, slide counts, estimated study times, and completion statuses.
2. `/interactive/:chapterId`: Filtered view focusing on a specific unit's lectures.
3. `/interactive/:chapterId/:lessonId`: The full-screen presentation player loading the synthesized slide deck for that specific lesson.

---

## 3. Subsystem Component Hierarchy

```
crypto-edu/src/
├── types/
│   └── interactive.ts                # TypeScript interfaces (InteractiveSlide, SlideType, etc.)
├── data/
│   └── interactive/
│       ├── diagramRegistry.tsx       # Dynamic diagram component mapper
│       └── slideBuilder.ts           # Declarative slide deck generator & cache
├── components/
│   └── interactive/
│       ├── PresentationStage.tsx     # Core presentation viewport, header & controls
│       ├── SlideOverviewModal.tsx    # Slide thumbnail drawer for random access
│       └── slides/
│           ├── SlideTitle.tsx        # Title slide with course badge, source, objectives
│           ├── SlideConcept.tsx      # Dual-language concept cards with distinction alerts
│           ├── SlideDefinition.tsx   # Formal definition card with academic scope
│           ├── SlideDiagram.tsx      # Interactive diagram player with controls
│           ├── SlideCalculation.tsx  # Step-by-step mathematical problem player
│           ├── SlideFormula.tsx      # KaTeX formula canvas with parameters & conditions
│           ├── SlideKnowledgeCheck.tsx # Interactive check with immediate feedback
│           └── SlideSummary.tsx      # Takeaways, completion tracker & next lecture link
└── pages/
    ├── InteractiveHub.tsx            # Unit & lecture selection catalog
    └── InteractivePresentationViewer.tsx # Presentation player page
```

---

## 4. Reusable Slide Types (`SlideType`)

The architecture defines 15 distinct slide types, each rendered with specialized layouts:

| Slide Type | Layout Role | Rendered Content & Interactions |
|:---|:---|:---|
| `title` | Presentation Cover | Large lecture title, university course badge, source slide citation, learning objectives checklist, start presentation button. |
| `definition` | Formal Academic Anchor | High-contrast definition card with authoritative wording in English and Arabic, scope, and prerequisites. |
| `concept` | Core Technical Principles | Dual-column English/Arabic cards, technical bullet points, and critical distinction alert boxes. |
| `diagram` | Architectural Exploration | Mounts interactive SVG diagrams (Security Pentagon, Network Security Model, Feistel, DES, Modes) with element clickability and tabs. |
| `calculation` | Step-by-Step Solver | Interactive mathematical player: Given values, formula selection, step-by-step navigation, intermediate result reveal, and final verification. |
| `formula` | Mathematical Formulation | Large centered KaTeX expression, parameter definitions table, theorem conditions, and modular arithmetic bounds. |
| `knowledge-check`| Formative Self-Assessment| Exam-style multiple choice question with selectable options, instant color-coded feedback (green/amber), and detailed academic rationales. |
| `summary` | Lecture Closure | Key takeaways checklist, "Mark Complete" study tracker integration, replay controls, and next lecture navigation. |

---

## 5. Keyboard, Mouse, and Touch Gesture Mapping

The presentation engine implements responsive, cross-platform controls:

| User Input | Context / Target | Action |
|:---|:---|:---|
| `ArrowRight` / `PageDown` | Presentation Canvas | Advance to the next slide. |
| `ArrowLeft` / `PageUp` | Presentation Canvas | Return to the previous slide. |
| `Space` | Presentation Canvas | Advance to the next slide. |
| `f` / `F` | Any non-input element | Toggle native browser fullscreen mode. |
| `Escape` | Overview open | Close slide overview drawer. |
| `Escape` | Fullscreen active | Exit fullscreen. |
| `Escape` | Default presentation | Exit presentation and return to `/interactive`. |
| Touch Swipe Left | Mobile / Tablet Viewport | Advance to the next slide. |
| Touch Swipe Right | Mobile / Tablet Viewport | Return to the previous slide. |
| Thumbnail Click | Slide Overview Drawer | Jump directly to selected slide number. |

> [!IMPORTANT]
> The keyboard event listener explicitly checks `event.target`. If the student is interacting with an `<input>`, `<textarea>`, `<select>`, or contenteditable field, keyboard event propagation is preserved without triggering slide transitions.

---

## 6. Progress Management & Storage

The Interactive Learning subsystem integrates with the existing frontend persistence model:
- Utilizes `useProgress()` from `src/store/progressStore.tsx`.
- On reaching the `summary` slide, students can trigger `markLessonComplete(lessonId)`, instantly updating localStorage key `crypto-edu:student-progress`.
- Completion badges and progress percentages are immediately reflected across TopNav, CourseSidebar, and the InteractiveHub catalog without requiring a backend server.

