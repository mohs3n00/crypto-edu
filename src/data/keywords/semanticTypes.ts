export type SemanticRole =
  | 'concept'       // Core technical concept being defined
  | 'action'        // Defining operation or behavior (what it does)
  | 'target'        // Object, resource, data type, or entity affected
  | 'condition'     // Mandatory mathematical restriction or existence condition
  | 'distinction'   // Critical contrast distinguishing from another concept
  | 'exception';    // Negative condition, exception, or limitation

export interface SemanticAnnotation {
  id: string;
  phraseEn: string;
  phraseAr: string;
  role: SemanticRole;
  keywordId?: string;           // Links to academicKeywords & Keyword Recall
  explanationEn: string;
  explanationAr: string;
  relatedConceptEn?: string;    // Associated core concept (e.g., Confidentiality)
  relatedConceptAr?: string;
  chapterId: 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch7';
  priority?: number;           // Higher priority matched first (longer phrases)
  tags?: string[];
}

