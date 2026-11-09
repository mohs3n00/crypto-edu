import type { AIHelpContext } from '../types/ai';

export function buildConceptPrompt(context: AIHelpContext): string {
  const subject = context.subjectName || 'Cryptography & Network Security (IS401)';
  const chapter = context.chapterName || context.chapterTitle || 'Course Unit';
  const lesson = context.lessonTitle || 'Current Lesson';
  const section = context.sectionTitle || 'Educational Section';
  const content = context.selectedText || context.sectionContent || context.content || 'No text selected.';

  return `You are an experienced university-level Computer Science and Cryptography instructor.

I am studying the following material inside EDU.

Subject: ${subject}
Chapter: ${chapter}
Lesson: ${lesson}
Section: ${section}

The exact content I do not fully understand is:

"${content.trim()}"

Please explain this exact material carefully and in depth.

Requirements:
1. Explain the academic idea without skipping important details.
2. Maintain balanced Arabic and English explanations.
3. Preserve the original English technical terminology.
4. Explain each important term and its relationship to the other concepts.
5. Break down difficult sentences into understandable steps.
6. Use relevant examples from Computer Science and Cryptography.
7. Include a simple technical diagram or structured visual explanation when appropriate.
8. Do not oversimplify the academic difficulty.
9. Explain common misunderstandings and possible university examination traps.
10. End with two challenging university-level practice questions, one MCQ and one True/False, without immediately revealing the answers.

If the provided text does not include enough context, clearly identify what is missing instead of inventing information.`;
}

export function buildMathPrompt(context: AIHelpContext): string {
  const subject = context.subjectName || 'Cryptography & Network Security (IS401)';
  const chapter = context.chapterName || context.chapterTitle || 'Number Theory & Modular Arithmetic';
  const lesson = context.lessonTitle || 'Mathematical Calculation';
  const topic = context.topic || context.sectionTitle || 'Derivation & Proof';
  const formula = context.selectedText || context.formulaOrProblem || context.sectionContent || context.content || 'Mathematical problem';

  return `You are a university mathematics and cryptography instructor.

I need help understanding the following mathematical content from my EDU lesson.

Subject: ${subject}
Chapter: ${chapter}
Lesson: ${lesson}
Topic: ${topic}

Selected formula or problem:

${formula.trim()}

Explain:

1. Every symbol and variable.
2. The mathematical conditions required.
3. Why this formula or method is used.
4. Every calculation step.
5. The intermediate values.
6. The final result.
7. An independent verification of the result.
8. Common mistakes students make in examination calculations.

Use proper mathematical notation.

Show matrices and equations in readable mathematical formatting.

Maintain a balanced Arabic-English teaching style.

Do not skip intermediate calculations or replace the solution with a final answer.

Include one additional university-level exercise at a comparable difficulty.`;
}

export function buildDiagramPrompt(context: AIHelpContext): string {
  const subject = context.subjectName || 'Cryptography & Network Security (IS401)';
  const chapter = context.chapterName || context.chapterTitle || 'Course Architecture & Cryptosystem Models';
  const lesson = context.lessonTitle || 'Current Lesson';
  const diagramTitle = context.diagramTitle || context.sectionTitle || 'Technical Architectural Diagram';
  const diagramDetails = context.diagramDescription || context.sectionContent || context.content || context.selectedText || 'Diagram architecture and flow of information.';

  return `You are a university-level instructor.

Help me understand this educational diagram from my EDU course.

Subject: ${subject}
Chapter: ${chapter}
Lesson: ${lesson}
Diagram title: ${diagramTitle}

Diagram labels and available description:

${diagramDetails.trim()}

Explain:

1. The purpose of the entire diagram.
2. The function of every labeled component.
3. The direction of information flow.
4. The relationship between the components.
5. What happens at every stage.
6. How the diagram relates to the corresponding academic concept.
7. What students should recognize when this diagram appears in a university examination.

Use balanced Arabic and English explanations.

Do not invent missing labels or steps.`;
}

export function buildAIPrompt(context: AIHelpContext): string {
  switch (context.promptType) {
    case 'math':
      return buildMathPrompt(context);
    case 'diagram':
      return buildDiagramPrompt(context);
    case 'concept':
    default:
      return buildConceptPrompt(context);
  }
}
