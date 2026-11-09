export type AIProvider = 'chatgpt' | 'gemini';

export type AIPromptType = 'concept' | 'math' | 'diagram';

export interface AIHelpContext {
  promptType: AIPromptType;
  subjectName?: string;
  chapterName?: string;
  chapterTitle?: string;
  lessonTitle?: string;
  sectionTitle?: string;
  topic?: string;
  selectedText?: string;
  sectionContent?: string;
  content?: string;
  formulaOrProblem?: string;
  diagramTitle?: string;
  diagramDescription?: string;
  language?: 'ar' | 'en';
}

export interface AIToastState {
  show: boolean;
  messageEn: string;
  messageAr: string;
  provider: AIProvider;
}

export interface GeminiModalState {
  isOpen: boolean;
  prompt: string;
  contextTitle?: string;
  contextTitleAr?: string;
}
