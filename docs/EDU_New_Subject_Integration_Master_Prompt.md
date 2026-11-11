# EDU — Reusable New Subject Integration Master Prompt

## How to use
Attach this document together with **all original files for the new subject** (lecture PDFs, PowerPoints, Word files, tables, official exams, test banks, and any answer keys). Then instruct the coding agent to follow this brief. The agent must identify the subject and its real requirements from the attached sources; do not pre-assume that the subject is mathematical, theoretical, MCQ-based, or essay-based.

---

# MASTER INSTRUCTION

You are extending the existing **EDU University Study Platform** by adding a new academic subject using the attached source files. This is an addition to a multi-subject platform, not a replacement of the existing Cryptography subject or a redesign of the whole application.

Your job is to inspect the source material, identify how this subject is actually taught and examined, then integrate it into EDU in controlled phases. Preserve the platform's established learning experience while adapting the learning tools to the nature of this particular subject.

**Core rule: Adapt the learning method to the source material and its examination style. Never force every subject into the same question types or practical tools.**

## A. Non-negotiable EDU product requirements

### 1. Study is one complete, continuous subject document
- Add the subject as a selectable subject within the existing EDU subject architecture.
- Its primary **Study** destination must contain the entire subject curriculum in one continuous, vertically scrollable page.
- Preserve the source's natural chapter/unit/topic order using clear headings and section separators inside that page.
- Headings organize the document; they must not create a mandatory nested navigation hierarchy such as Chapter → Lesson → Subsection → separate page.
- Students must be able to study the whole subject without opening dozens of small lesson routes.
- A small in-page outline or jump navigation is acceptable, but it must jump to positions in the same document and remain unobtrusive.
- Do not split the subject into separate lesson pages for implementation convenience.

### 2. Concise but complete teaching content
- Treat EDU as an exam-focused interactive study memorandum, not a long online course full of repeated introductions.
- Preserve every unique examinable idea, definition, condition, exception, classification, argument, formula, procedure, comparison, example, and source-specific detail.
- Shorten wording and remove repetition, not knowledge.
- Use the shortest explanation that preserves the academic meaning and the lecturer's terminology.
- Do not repeat the same definition in the introduction, body, summary, and exam note unless each occurrence serves a genuinely different learning purpose.
- Do not add filler, decorative sections, generic conclusions, or unrelated textbook material.
- Do not lower the difficulty or simplify exam wording to an easier level than the supplied university sources.

### 3. Bilingual academic presentation
- Preserve the original academic language and terminology used in the sources, especially exact English technical terms where the course is taught or examined in English.
- Provide clear, concise Arabic explanations alongside the relevant English terms and content, consistent with the existing EDU bilingual experience.
- Keep translations academically accurate and natural; do not translate word-for-word when that damages the meaning.
- Do not write two long paragraphs that merely repeat the same explanation in different languages.
- Support correct RTL Arabic and LTR English rendering, including mixed-language lines, symbols, and formulas.
- A global interface-language switch must not remove the student's access to essential academic terminology or the bilingual learning support.

### 4. Readability and visual design
- Follow the existing EDU visual identity and soft-monochrome design system. Do not invent a new visual brand for the added subject.
- Use a **single-column layout** for educational explanation content. Do not place two explanation cards side by side just to compress the page.
- Use readable body text and comfortable line spacing. Never shrink explanation text to fit a card.
- Keep all headings and titles at their own fixed typographic sizes.
- Preserve the global **body-content font-size slider**: minimum 17px, maximum 24px, step 1px, default 19px. It controls explanation/body content only — not page titles, chapter headings, subheadings, card titles, slide titles, navigation, buttons, labels, or metadata. The preference persists across navigation and refresh.
- Let content containers grow vertically when the text size increases. Never clip, overlap, or hide text.
- Remove decorative illustrations that do not teach anything. Preserve meaningful source diagrams, process flowcharts, comparison tables, architectures, timelines, and concept maps when they add academic value.
- Do not force an illustration, diagram, formula, or animation into a topic that does not need one.

### 5. Semantic highlighting
- Highlight only phrases that genuinely help students recognize a definition, operation, condition, exception, negation, distinction, key comparison dimension, or exam trigger.
- Decide highlights by reading and understanding each actual paragraph. Do not rely on a small hardcoded keyword list or broad regex matching.
- Do not highlight generic words or entire paragraphs unnecessarily. Some paragraphs may need no highlighting.
- Where an English phrase is highlighted, highlight its corresponding meaningful Arabic phrase when the Arabic explanation expresses the same idea.
- Use the existing soft-yellow semantic highlight style. Preserve all original wording.

## B. Source-first academic analysis

### 1. Inspect every supplied source
- Inventory every attached file and identify its format, title, edition/version if stated, and role (lecture, textbook excerpt, exam, test bank, answer key, rubric, assignment, etc.).
- Read every PDF page and every PowerPoint slide. Inspect tables, diagrams, captions, footnotes, equations, figures, and embedded text — not only extracted paragraphs.
- Inspect every page of Word documents and every meaningful sheet/table in spreadsheets if provided.
- If a file cannot be opened or a page/slide is unreadable, record the exact file and location as a source gap. Do not claim to have inspected it.
- Treat lecture sources as the primary syllabus authority. Use official exams, test banks, answer keys, and rubrics to determine examination style and validate question forms/answers.
- Do not silently replace the lecturer's content with generic external knowledge. If sources conflict, record the conflict and resolve it only when source evidence supports a decision. Otherwise flag it for review.
- Do not invent missing information or present generated content as original source content.

### 2. Infer the subject's actual academic and examination profile

Before designing the content, analyze the supplied materials and determine which of the following are actually present and important:
- Conceptual/theoretical definitions and explanations.
- Classifications, properties, and terminology.
- Comparisons, similarities, differences, and evaluation criteria.
- Essay questions, discussion prompts, explain/justify questions, and structured written answers.
- Short-answer, fill-in-the-blank, listing, and definition questions.
- Multiple-choice and True/False questions.
- Mathematical/numerical problems, formulas, derivations, proofs, and calculations.
- Algorithms, procedures, workflows, case studies, scenarios, or applied tasks.
- Diagrams, models, architectures, tables, and visual interpretation.

Create an **Exam & Learning Profile** based on evidence from the actual exams and materials. Record the dominant question types, typical wording, expected answer depth, difficulty, mark allocation if available, and whether calculations, essays, comparisons, or practical tasks are required.

Do not assume all categories apply. Mark each category as **Core / Relevant / Not Applicable / Unclear** with source evidence. Build the subject experience around the applicable categories only.

## C. Flexible subject-specific learning design

### 1. Study page

Build one continuous Study page for the complete subject. Within it:
- Preserve the syllabus order and clear chapter/unit headings.
- Organize related ideas naturally without turning every small point into a separate card or route.
- Explain concepts concisely and accurately in the bilingual format.
- Include key conditions, exceptions, distinctions, and lecturer-specific terminology.
- Place useful diagrams, tables, examples, and contextual practice beside the relevant explanation.
- Do not create a formula section if the subject has no formulas. Do not invent calculations to make the page appear practical.
- If the subject is mostly theoretical, prioritize crisp definitions, structured concepts, relevant examples, categories, and comparisons.
- If the subject is mostly comparative, use accurate comparison tables and explicit comparison dimensions; do not bury differences in long paragraphs.
- If the subject contains essays or written responses, teach the structure and required points of a strong answer concisely.
- If the subject contains numerical or procedural problems, show worked examples with all necessary steps.

### 2. Central Questions tab

Add all relevant questions to the existing independent **Questions** destination, using shared question records and stable IDs. A question may also appear contextually in Study without creating a duplicate record.

Support only the question formats that the subject actually requires, which may include:
- MCQ and True/False.
- Fill in the blank and terminology/definition.
- Short-answer and listing questions.
- Compare/contrast questions.
- Explain, discuss, justify, evaluate, and essay questions.
- Case/scenario/application questions.
- Numerical, derivation, proof, algorithm-tracing, or practical problems.

Do not turn an essay-based subject into an MCQ-only bank. Do not turn a theory-only subject into a fabricated calculation bank. Do not omit essay or comparison questions when they are part of the actual assessment pattern.

### 3. BASMAGA — topic-by-topic exam recall

BASMAGA must cover the subject's **distinct examinable points**, not merely provide a few questions per chapter.
- Inspect the syllabus and split each topic into its distinct examinable facts, definitions, conditions, exceptions, distinctions, arguments, or procedures.
- Ensure every such point is tested by at least one suitable question. One question may cover multiple points only when they are genuinely assessed together.
- Use the actual language and difficulty of supplied lecture questions, test banks, exams, and source terminology.
- Prefer exact official questions where available; preserve official wording, options, order, source, year, and question number exactly.
- When no source question exists, create a clearly labeled **Generated Practice** item strictly supported by the source.
- BASMAGA's compact flow is: **Question → Answer format/options → Student response → Reveal correct answer/model response → Essential keywords/key points → Next question.**
- For MCQ, show choices and reveal the correct option after the attempt/reveal action.
- For True/False, show the two choices.
- For short-answer, reveal the expected term or concise answer.
- For essay/compare/discuss questions, reveal a concise answer structure, essential marking points, and a source-faithful model answer when supported. Do not reduce an essay task to a single keyword.
- For numerical/procedural questions, reveal the result and the essential solution steps, not an unexplained final number.
- Extract keywords from the actual question and model answer. Do not attach generic keywords unrelated to the wording.
- Avoid long repeated analysis, full academic essays, redundant exam traps, or explanations that simply repeat the answer.

### 4. Comparisons and essay-oriented subjects

When comparisons are important in the materials or exams:
- Identify the exact dimensions used by the lecturer (e.g., purpose, properties, advantages, limitations, process, outcome, assumptions, or use cases).
- Present the comparison in a readable table or structured contrast.
- Add compare/contrast exam questions that require the student to identify meaningful similarities and differences.
- Include common confusions only when the sources or question bank support them.

When essay or long-answer questions are important:
- Preserve the exam's command verbs (define, explain, discuss, compare, justify, evaluate, etc.).
- Teach a concise answer plan: opening definition/context, required points in a logical sequence, relevant evidence/examples, and a direct conclusion when appropriate.
- Provide model responses and marking-point checklists only when the sources or reliable course content support the expected answer.
- Do not fabricate marking rubrics or claim a model answer is official when no official solution is supplied.

### 5. Practical/problem-solving module — conditional

Create practical problem-solving content **only when the subject's sources contain calculations, algorithms, proofs, derivations, procedures, coding, or other practical tasks**.

When applicable, teach through the actual type of task:
1. Exam-style problem statement.
2. Extract the given information and identify where each value/condition comes from.
3. Identify the required method or concept.
4. Substitute values or execute the procedure.
5. Show every necessary intermediate step.
6. Present the final result.
7. Verify the result and mention a relevant common mistake only if useful.

If the subject has no mathematical or procedural problems, do not invent a Problem Solving section or fake practical exercises. Use the available space for the subject's genuine learning needs, such as essays, comparisons, case analysis, or conceptual application.

### 6. Interactive Learning / presentation mode — conditional and source-complete

Where the materials benefit from guided presentation, provide an independent **Interactive Learning** experience resembling a polished PowerPoint presentation:
- Navigate using Previous/Next buttons and keyboard arrows; support slide overview, progress, fullscreen, and touch navigation where appropriate.
- Use readable bilingual slides and meaningful transitions.
- Recreate useful diagrams as interactive SVG/HTML components when interaction adds learning value.
- Allow selecting diagram components, revealing relationships, stepping through processes, and replaying demonstrations when supported by the material.
- Use step-by-step mathematical/algorithmic demonstrations only when relevant.
- Do not use static screenshots as a substitute for a genuinely useful interactive diagram.
- Do not force animations or interactive diagrams into purely textual topics where they add no value.
- Every meaningful source page/slide must be represented in the presentation if this mode is implemented; a dense source slide may be split across multiple teaching slides.
- Clearly distinguish original source content from supplemental explanation or generated examples.

### 7. Review and retrieval practice — subject-aware

Build review activities around the subject's actual knowledge type:
- Terminology and concept recall for definition-heavy topics.
- Compare/contrast recall for comparison-heavy topics.
- Structured answer recall for essays and long answers.
- Conditions, steps, and sequences for procedural topics.
- Formula/value/method recall for quantitative topics, only when applicable.

Use concise hints and feedback. Do not force every subject into the same flashcard or formula-recall pattern.

## D. Phased implementation plan — mandatory execution order

**Do not implement everything in one uncontrolled batch. Complete these phases sequentially. Each phase has a clear deliverable and a verification gate. Do not skip a phase. Do not start coding content before the source inventory and coverage map are ready.**

### Phase 0 — Project safety and source intake
- Inspect the current repository, framework, routing, shared components, data model, tests, and current subject selector.
- Identify only the files supplied for this new subject; do not confuse them with existing subject sources.
- Record the current working-tree state and avoid overwriting unrelated work.
- Determine the new subject's likely title and identifier from the files.
- Make no destructive code or content changes in this phase.

**Gate:** Source inventory and project baseline exist; no existing subject has been modified.

### Phase 1 — Complete source inspection and exam-style profile
- Read every page/slide and inspect diagrams, tables, formulas, and other embedded content.
- Identify the actual syllabus order and all unique academic topics.
- Inspect official exams/test banks/answer keys to determine real question formats, wording, difficulty, and answer expectations.
- Classify subject requirements as Core / Relevant / Not Applicable / Unclear.
- Record unreadable, missing, or contradictory source material explicitly.

**Deliverables:** `docs/subjects/<subject-id>/source_inventory.md` and `exam_learning_profile.md`.

**Gate:** Every supplied file and every page/slide has a recorded inspection status. Do not proceed with unsupported assumptions.

### Phase 2 — Granular syllabus and coverage map
- Build a source-to-topic matrix covering every meaningful source item.
- Break topics into distinct examinable points, not only broad chapter titles.
- Map each point to its future Study location and applicable question/practice/diagram type.
- Identify repetitions, source conflicts, and genuine source gaps.
- Decide which optional modules are applicable and which must remain absent.

**Deliverables:** `docs/subjects/<subject-id>/syllabus_coverage_matrix.md` and `content_blueprint.md`.

**Gate:** No implementation until each source item has a planned destination or an explicitly documented reason why it is not applicable.

### Phase 3 — Build the unified Study page
- Register the new subject's structured content data.
- Build its complete curriculum as one continuous Study page in source order.
- Use headings as document structure, not nested lesson routes.
- Write concise bilingual content while preserving all unique source information.
- Add meaningful tables, diagrams, conditions, definitions, examples, and worked material as appropriate.
- Apply semantic highlighting after reading each content block.
- Respect the single-column layout and body-content font slider; never resize headings with the slider.

**Deliverable:** The complete, navigable Study document for the new subject.

**Gate:** Compare the rendered Study page against the Phase 2 matrix. Every planned academic item must be present before moving on.

### Phase 4 — Questions and BASMAGA
- Build the subject's centralized question bank.
- Use source questions exactly as written and label generated items clearly.
- Match the real exam's question formats, including essays/comparisons when applicable.
- Cover every distinct examinable point in BASMAGA with a suitable question.
- Implement the correct answer interaction for each question type (MCQ choices, T/F, short answer, essay model answer/marking points, calculation steps, etc.).
- Reuse question IDs across Study and Questions; do not duplicate records.

**Deliverables:** `question_coverage_matrix.md` and functional Questions/BASMAGA content.

**Gate:** Every examinable point is mapped to at least one suitable question; official wording and choices pass integrity checks.

### Phase 5 — Subject-specific learning tools
- Implement only the modules justified by the source/exam profile.
- Add Problem Solving only if numerical, procedural, algorithmic, proof, coding, or similar tasks exist.
- Add essay-answer training if written/long-answer questions exist.
- Add structured comparison practice if comparisons are important.
- Add interactive presentation slides and meaningful diagrams when beneficial and feasible.
- Add Review activities adapted to the subject's knowledge types.

**Gate:** Every implemented tool maps to real subject requirements. No empty, fabricated, or forced modules.

### Phase 6 — Integrate the new subject into EDU
- Add the new subject to the existing subject selector and shared navigation.
- Keep all existing subjects, routes, content, and preferences intact.
- Ensure each global destination filters or resolves content by the selected subject.
- Maintain frontend-only operation and use existing persistence patterns unless the architecture explicitly requires otherwise.
- Keep the new subject's data isolated through stable subject IDs and avoid hardcoding assumptions from Cryptography into shared components.
- Preserve the established design system, bilingual interface, single-column Study layout, semantic highlighting, and body-only font-size slider.

**Gate:** Switching subjects shows the correct material and does not leak questions, progress, or content from another subject.

### Phase 7 — Full academic and technical validation
- Re-read the original sources while checking the rendered website, not just source-code files.
- Verify each page/slide and each distinct examinable point against its mapped destination.
- Verify formulas, terminology, comparisons, essay answers, question answers, translations, and diagrams according to the applicable subject profile.
- Check original question wording/options and source attribution.
- Check all question interactions and progress behavior.
- Check Arabic RTL/English LTR, font slider scope, headings remaining fixed, mobile/tablet/desktop rendering, and page overflow.
- Run the existing tests, type checks, and production build.
- Fix issues discovered; do not merely list them as observations.

**Deliverables:** `final_coverage_validation.md`, `question_integrity_audit.md`, and `regression_test_report.md`.

**Gate:** Do not claim completion or deploy until every source item has a verified status and all relevant tests pass.

## E. Project safety and implementation boundaries

- Add the new subject without rewriting or damaging existing subjects.
- Prefer reusable multi-subject architecture over subject-specific hacks in shared UI.
- Do not delete old content until the new subject integration and existing-subject regression checks pass.
- Do not deploy, publish, or push to the main branch without explicit authorization.
- Do not claim a build, test, deployment, or source inspection succeeded unless it actually did.
- If a phase is blocked by an unreadable source or unresolved academic conflict, document the exact blocker and continue with independent work where safe.
- Keep each phase's changes and report distinct so failures can be isolated and rolled back.
- Do not ask the user to repeat information already available in the attached files. Ask only one focused question if a genuinely blocking ambiguity cannot be resolved from the sources.

## F. Required subject documentation

Store the new subject's audit documents in a dedicated folder such as `docs/subjects/<subject-id>/`:
- `source_inventory.md`
- `exam_learning_profile.md`
- `syllabus_coverage_matrix.md`
- `content_blueprint.md`
- `question_coverage_matrix.md`
- `interactive_content_inventory.md` (if applicable)
- `final_coverage_validation.md`
- `question_integrity_audit.md`
- `regression_test_report.md`

Reports must be concise, evidence-based, and traceable to exact filenames and page/slide numbers. Clearly distinguish **Covered**, **Partially Covered**, **Missing**, **Not Applicable**, and **Unclear**. Never report 100% coverage unless every relevant source item has been checked in the rendered product.

## FINAL PRODUCT PRINCIPLE

EDU is a multi-subject, exam-focused interactive study memorandum — not a conventional LMS.

One complete Study document per subject. A central question bank. BASMAGA that covers every examinable point. Practical problem-solving only when the subject requires it. Strong essay and comparison support when the exam requires it. Interactive presentations and diagrams when they genuinely improve understanding.

**Preserve the full academic content, remove repetition, adapt to the real examination style, and implement the new subject in controlled, verifiable phases without breaking what already works.**
