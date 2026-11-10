# EDU — Semantic Highlighting Logic Audit & Architecture Report

## 1. Executive Summary

This audit documents the systematic overhaul of the semantic highlighting engine across the EDU university learning platform. 

The previous highlighting implementation suffered from high false-positive rates due to overly broad, single-word regular expressions, while simultaneously failing to highlight mission-critical academic definitions, mathematical conditions, distinctions, and exam recognition clues.

The new highlighting engine implements a **dual-tier semantic architecture**:
1. **Tier 1 (Explicit Semantic Annotations):** Standard markdown delimiters (`==phrase==` or `==role:phrase==`) for surgical, author-controlled emphasis in course cards, summaries, and distinction sections.
2. **Tier 2 (High-Precision Curated Phrase Engine):** A completely purged and restructured set of 126 multi-word bilingual semantic phrase rules across Chapters 1, 2, 3, 4, and 7, completely eliminating loose single-word triggers.

---

## 2. Flaws of the Legacy Highlighting Mechanism

### A. Indiscriminate Single-Word & Acronym Matching
The legacy `academicPhraseRules` contained 116 patterns, over **58% of which were single-word or short acronym regular expressions**. 

Examples of problematic legacy rules:
- `pattern: /\bavailability\b/gi`
- `pattern: /(?:التوافرية|التوافر|الجاهزية)/g`
- `pattern: /\bdata confidentiality\b/gi`
- `pattern: /\bdata integrity\b/gi`
- `pattern: /\bdes\b/gi`
- `pattern: /\biv\b/gi`
- `pattern: /\bconfusion\b/gi`
- `pattern: /\bdiffusion\b/gi`
- `pattern: /\bblock cipher\b/gi`
- `pattern: /\bstream cipher\b/gi`
- `pattern: /شفرة قيصر/g`
- `pattern: /شفرة بليفير/g`
- `pattern: /شفرة هيل/g`

#### The Problem:
Whenever standard explanatory text, section titles, or navigation labels contained the word "availability" (e.g., *"The system ensures high availability of web servers..."*) or "التوافر", the word was highlighted as a core exam concept. This caused extreme visual clutter, distracted students from actual definitions, and diluted the learning value of the textbook yellow marker (`#FFF1A6`).

### B. Missing Critical Conditions, Distinctions & Scopes
While common words were highlighted indiscriminately, **essential academic phrases that determine correct exam answers were completely missing from the rule database**:
- "single shared secret key" (Missing)
- "both encryption and decryption" (Missing)
- "mathematically linked key pair" (Missing)
- "data of ANY size" vs "SMALL blocks of data" (Missing)
- "too computationally slow for bulk data" (Missing)
- "if and only if gcd(a,n) = 1" (Missing)
- "the moduli must be pairwise relatively prime" (Missing)
- "provided that p does not divide a" (Missing)
- "does not require padding" (Missing)
- "same key and same IV must never be reused" (Missing)
- "XORs the plaintext with the previous ciphertext block" (Missing)

### C. Lack of Explicit Annotation Syntax
Authors had no way to explicitly mark a phrase for highlighting in content cards without adding another regex to the global rule engine, which created cross-chapter collisions and side effects.

---

## 3. New Architecture: Dual-Tier Semantic Highlighting

### Tier 1: Explicit Inline Semantic Markup (`HighlightedText.tsx`)

Authors can now annotate content directly in data structures or components using clean markdown-compatible markers:
- `==highlighted text==` (defaults to semantic role `concept`, or automatically inherits rule metadata if recognized).
- `==role:highlighted text==` where `role` is explicitly one of:
  - `concept` — Core Concept Definition
  - `action` — Defining Cryptographic Action / Operation
  - `condition` — Mandatory Mathematical or Algorithmic Condition
  - `distinction` — Exam Distinction & Scope Contrast
  - `exception` — Limitation, Restriction, or Negation
  - `target` — Target Resource or Cryptographic Digest

#### Parser Implementation:
```tsx
const EXPLICIT_MARK_REGEX = /==(?:(concept|action|target|condition|distinction|exception):)?([\s\S]+?)==/g;
```
- Plain text segments between explicit marks are processed by Tier 2 (Phrase Rules), ensuring non-overlapping, seamless rendering.
- Text inside explicit marks is cleanly extracted and wrapped in `<SemanticHighlight role={role} isArabic={isArabic}>`.

### Tier 2: Purged & Rebuilt Bilingual Phrase Engine (`phraseRules.ts`)

All loose single words and acronyms were removed. Every rule in `phraseRules.ts` now satisfies strict editorial criteria:
1. **Multi-Word Minimum:** Rules match meaningful phrases (minimum 2–3 words or exact mathematical formulas).
2. **Symmetric Bilingual Pairing:** For every English rule, an equivalent natural Arabic phrase rule is defined.
3. **Semantic Roles:** Explicitly labeled with `concept`, `action`, `condition`, `distinction`, `exception`, or `target`.
4. **Rich Metadata:** Linked to `keywordId`, `phraseLabelEn`, `phraseLabelAr`, `explanationEn`, and `explanationAr` for interactive popover display.

---

## 4. Component Integration Audit

The following shared educational components were verified and updated to utilize `<HighlightedText>`:

| Component | File Path | Integration Status |
|---|---|---|
| **FourCryptoAreas** | `src/components/educational/FourCryptoAreas.tsx` | Updated: Annotated meanings and distinctions for Symmetric, Asymmetric, Hash, and Authentication. |
| **DefinitionCard** | `src/components/educational/DefinitionCard.tsx` | Updated: Definitions and essential characteristics list items now use `HighlightedText`. |
| **ConceptCard** | `src/components/educational/ConceptCard.tsx` | Updated: Academic definitions, conceptual explanations, and key distinctions all wrapped in `HighlightedText`. |
| **FormulaBlock** | `src/components/educational/FormulaBlock.tsx` | Updated: Mathematical usage conditions and valid ranges wrapped in `HighlightedText`. |
| **ExamNoteCallout** | `src/components/educational/ExamNoteCallout.tsx` | Updated: Truth explanations in English and Arabic wrapped in `HighlightedText`. |
| **ExamTrapCard** | `src/components/educational/ExamTrapCard.tsx` | Updated: Academic truth, "why wrong" rationale, and required conditions wrapped in `HighlightedText`. |
| **InteractiveSolvingBoard** | `src/components/educational/InteractiveSolvingBoard.tsx` | Verified: Mathematical step explanations in active and overview modes use `HighlightedText`. |
| **AnswerExplanation** | `src/components/question/AnswerExplanation.tsx` | Updated: Question answer feedback rationales wrapped in `HighlightedText`. |
| **QuestionStatement** | `src/components/question/QuestionStatement.tsx` | Updated: Official question stems preserve exact wording while highlighting verified exam trigger phrases. |
| **BasmagaCard** | `src/components/basmaga/BasmagaCard.tsx` | Updated: English question stems and Arabic translations wrapped in `HighlightedText`. |
| **FormulaLibrary** | `src/pages/FormulaLibrary.tsx` | Updated: Formula descriptions and academic context wrapped in `HighlightedText`. |
| **Glossary** | `src/pages/Glossary.tsx` | Updated: Bilingual definitions and exam clues wrapped in `HighlightedText`. |

---

## 5. Visual & Theme Verification

- **Highlight Token:** Soft yellow background `#FFF1A6` with charcoal text `#222222` and bottom border `#E2C65A`.
- **Text Contrast:** Ratio exceeds 12.8:1, fully compliant with WCAG AAA for normal and large body text.
- **RTL Support:** Natural Arabic typography with Cairo font, proper line height (`leading-[1.8]`), and correct right-to-left layout.
- **LaTeX Safety:** Math expressions inside `$..$` are preserved without broken tags or disrupted symbols.

