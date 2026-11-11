# Interactive Content & Pedagogical Visualizers Inventory: IS412 Business Process Management

## 1. Executive Summary & Design Principles

In strict accordance with the **EDU Platform Master Integration Brief (Rule C1 & Core Rule)**:
> *"Adapt the learning method to the source material and its examination style. Never force every subject into the same question types or practical tools. Do not create a formula section if the subject has no formulas. Do not invent calculations to make the page appear practical."*

The subject **IS412: Business Process Management** contains **zero numerical calculation problems, zero formulas, and zero mathematical derivations**. The university lectures (Dr. Nissreen El-Saber, Autumn 2022) and official test banks/quizzes focus exclusively on **conceptual frameworks, lifecycles, enterprise case studies, and BPMN 2.0 visual control-flow patterns**.

Therefore, rather than inventing artificial calculators, the interactive layer for IS412 is centered on **interactive semantic visualizers, control-flow gateway token simulators, and multi-party choreography simulators** directly aligned with the official syllabus and Andrea Marrella's BPMN 2.0 seminar (`Sem_Process_Modeling_with_BPMN_13-14.pdf`) and Mathias Weske's textbook models (`3- BPM_L3.pdf`).

---

## 2. Interactive Tool Registry

| Tool Identifier | Component Name | Syllabus Mapping | Source Evidence | Interactive Capabilities |
| :--- | :--- | :--- | :--- | :--- |
| `bpm-gateway-simulator` | `BpmGatewaySimulator` | Unit 3, Lesson 2 (`bpm-ch3-l2`) & Lesson 4 (`bpm-ch3-l4`) | `Sem_Process_Modeling_with_BPMN_13-14.pdf` (Slides 27–42, 60–75); `BPM_L2.pdf` (Slide 37) | Interactive branch token toggling, live gateway evaluation (AND, XOR, OR, 2-of-3 Complex Join, Discriminator), academic explanations |
| `bpm-choreography-viewer` | `BpmChoreographyViewer` | Unit 4, Lesson 3 (`bpm-ch4-l3`) & Unit 1, Lesson 4 (`bpm-ch1-l4`) | `3- BPM_L3.pdf` (Figures 1.1, 1.2, 1.3, 1.4); `BPM_L2.pdf` (Slides 44–46) | Step-by-step interactive 4-step sequence (Order Request, Stock Check, Parallel Invoice/Shipping, Order Archival), role perspective switching (Buyer, Reseller, Choreography) |

---

## 3. Tool Specifications & Technical Architecture

### 3.1 BPMN 2.0 Gateway Token Simulator (`BpmGatewaySimulator`)
- **File Location:** `src/components/diagrams/BpmInteractiveDiagrams.tsx`
- **Registered Identifier:** `bpm-gateway-simulator` (via `src/data/interactive/diagramRegistry.tsx`)
- **Supported Gateway Modes:**
  1. **Exclusive Gateway (XOR - Diverging & Converging):** Exactly one branch is chosen based on condition; for join, passes token on first incoming branch without waiting.
  2. **Parallel Gateway (AND - Fork & Join / Concurrency):** Diverging activates all outgoing branches concurrently; Converging acts as a synchronizer waiting for ALL incoming branches to carry a token before firing.
  3. **Inclusive Gateway (OR - Inclusive Decision & Synchronization):** One or more conditions evaluate to true; the join waits for all active paths produced by the corresponding inclusive fork.
  4. **Complex Gateway (2-of-3 Join & Discriminator):** Specialized pattern where 2 out of 3 tokens trigger continuation, demonstrating advanced WfMC/BPMN 2.0 workflow patterns.
- **Interactive State Controls:**
  - Dynamic button toggle for each incoming branch (`Branch A`, `Branch B`, `Branch C`).
  - Active visual token badge (`● Active Token` vs `○ Inactive Branch`).
  - Real-time Gateway Output Status indicator (Evaluating conditions, Fired/Waiting).
  - Academic callout box dynamically explaining the exact execution semantics and university exam trap for the active configuration.

### 3.2 Multi-Party Collaboration & Choreography Simulator (`BpmChoreographyViewer`)
- **File Location:** `src/components/diagrams/BpmInteractiveDiagrams.tsx`
- **Registered Identifier:** `bpm-choreography-viewer` (via `src/data/interactive/diagramRegistry.tsx`)
- **Source Authority:** Mathias Weske, *Business Process Management: Concepts, Languages, Architectures*, Chapter 1 (Figures 1.1, 1.2, 1.3, 1.4) as excerpted in `3- BPM_L3.pdf`.
- **Supported Perspectives:**
  1. **Reseller Process View (Fig 1.1):** Internal workflow with parallel fork for Invoice Generation and Product Dispatch.
  2. **Buyer Ordering Process View (Fig 1.2):** Customer perspective sending order, waiting for invoice, making payment, receiving goods.
  3. **Choreography Diagram (Fig 1.3):** Cross-organizational interactions without revealing internal private process implementations.
- **Interactive Stepper:**
  - Step 1: Customer submits purchase order (Message Flow across pools).
  - Step 2: Reseller executes `Check Order` task.
  - Step 3: Parallel Gateway (AND) forks into `Send Invoice → Receive Payment` and `Ship Products`.
  - Step 4: Parallel Gateway joins and executes `Archive Order` to terminate process.

---

## 4. Integration into Slide Decks & Presentation Viewer

The interactive diagrams are seamlessly bound to the digital classroom presentation engine in `src/data/interactive/slideBuilder.ts`:

```typescript
// Lesson: Advanced Gateways & Workflow Patterns (bpm-ch3-l2)
if (lessonId === 'bpm-ch3-l2') {
  deck.slides.push({
    id: `${lessonId}-slide-sim`,
    title: 'Interactive BPMN Gateway Simulator',
    titleAr: 'محاكي بوابات اتخاذ القرار التفاعلي في BPMN',
    type: 'diagram',
    interactiveDiagramId: 'bpm-gateway-simulator',
    content: 'Experiment with token propagation across XOR, AND, and OR gateways...',
    contentAr: 'جرّب سريان علامات التمييز (Tokens) عبر بوابات XOR و AND و OR...',
  });
}
```

---

## 5. Non-Applicable Elements Rationale

1. **No Formula Section:** Adhering strictly to Rule C1, the `Formulas` tab in `ReviewHub.tsx` is automatically hidden when `bpm` is the active course.
2. **No Fake Numerical Problems:** The `Problems` tab in `TopNav.tsx` is cleanly hidden for `bpm`. If accessed directly via `/problem-solving`, a courteous academic memorandum informs the student that IS412 is purely conceptual and procedural, redirecting them to the 71-question Question Bank.
3. **No Arbitrary Animations:** All visual diagrams correspond to verified source artifacts (Weske figures, BPMN 2.0 specifications, and Canon HR business architecture).

