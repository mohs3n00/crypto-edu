export type TranslationKey =
  // Top Navigation & Subject
  | 'platformTitle'
  | 'platformSubtitle'
  | 'mySubjects'
  | 'selectSubject'
  | 'availableSubjects'
  | 'continueLearning'
  | 'overallProgress'
  | 'viewCourse'
  | 'close'
  | 'learn'
  | 'practice'
  | 'review'
  | 'curriculum'
  | 'lessonsCount'
  | 'chaptersCount'
  // Learn / Subject Home
  | 'learningPath'
  | 'lastVisited'
  | 'resumeLesson'
  | 'courseOutline'
  | 'objectives'
  | 'readTime'
  | 'minutes'
  | 'chapter'
  | 'lesson'
  | 'topics'
  | 'status'
  | 'completed'
  | 'inProgress'
  | 'notStarted'
  | 'nextLesson'
  | 'prevLesson'
  | 'markComplete'
  | 'markIncomplete'
  | 'bilingualView'
  | 'enOnly'
  | 'arOnly'
  // Practice Hub
  | 'practiceHubTitle'
  | 'practiceHubSubtitle'
  | 'modeQuestions'
  | 'modeExams'
  | 'modeLab'
  | 'allChapters'
  | 'allSources'
  | 'allTypes'
  | 'allDifficulties'
  | 'searchQuestions'
  | 'filterByChapter'
  | 'mcq'
  | 'trueFalse'
  | 'calcProblem'
  | 'checkAnswer'
  | 'reset'
  | 'viewOriginalEnglish'
  | 'viewArabicTranslation'
  | 'correctAnswer'
  | 'incorrectAnswer'
  | 'academicExplanation'
  | 'sourceReference'
  | 'flagForReview'
  | 'unflag'
  | 'submitExam'
  | 'timeRemaining'
  | 'examCompleted'
  | 'yourScore'
  | 'reviewAnswers'
  | 'questionOf'
  // Review Hub
  | 'reviewHubTitle'
  | 'reviewHubSubtitle'
  | 'tabFormulas'
  | 'tabGlossary'
  | 'tabTraps'
  | 'tabMindMaps'
  | 'tabRecall'
  | 'tabMistakes'
  | 'searchFormulas'
  | 'copyLatex'
  | 'latexCopied'
  | 'searchGlossary'
  | 'term'
  | 'definition'
  | 'examPitfalls'
  | 'trapStatement'
  | 'truthExplanation'
  | 'mistakesNotebook'
  | 'retryQuestion'
  | 'noMistakesYet'
  | 'bookmarks'
  // General & Shared
  | 'search'
  | 'language'
  | 'english'
  | 'arabic'
  | 'back'
  | 'verified'
  | 'universityLevel'
  | 'examTarget'
  | 'study'
  | 'studyDesc'
  | 'questionsTab'
  | 'interactiveLearning'
  | 'interactiveLearningDesc';

export const translations: Record<TranslationKey, { en: string; ar: string }> = {
  // Top Navigation & Subject
  platformTitle: {
    en: 'EDU',
    ar: 'EDU',
  },
  platformSubtitle: {
    en: 'University Learning Platform',
    ar: 'المنصة الأكاديمية الجامعية',
  },
  mySubjects: {
    en: 'My Subjects',
    ar: 'المواد الدراسية',
  },
  selectSubject: {
    en: 'Select Subject',
    ar: 'اختر المادة الدراسية',
  },
  availableSubjects: {
    en: 'Available Subjects',
    ar: 'المقررات الدراسية المتاحة',
  },
  continueLearning: {
    en: 'Continue Learning',
    ar: 'متابعة التعلم',
  },
  overallProgress: {
    en: 'Overall Progress',
    ar: 'نسبة الإنجاز الكلية',
  },
  viewCourse: {
    en: 'View Course',
    ar: 'عرض المقرر',
  },
  close: {
    en: 'Close',
    ar: 'إغلاق',
  },
  learn: {
    en: 'Learn',
    ar: 'التعلم',
  },
  practice: {
    en: 'Practice',
    ar: 'التدريب والتمارين',
  },
  review: {
    en: 'Review',
    ar: 'المراجعة والملخصات',
  },
  curriculum: {
    en: 'Curriculum',
    ar: 'المنهج الدراسي',
  },
  lessonsCount: {
    en: 'Lessons',
    ar: 'درساً',
  },
  chaptersCount: {
    en: 'Chapters',
    ar: 'أبواب',
  },

  // Learn / Subject Home
  learningPath: {
    en: 'Learning Journey',
    ar: 'مسار التعلم الأكاديمي',
  },
  lastVisited: {
    en: 'Last Visited Lesson',
    ar: 'آخر درس تم فتحه',
  },
  resumeLesson: {
    en: 'Resume Lesson',
    ar: 'متابعة الدرس',
  },
  courseOutline: {
    en: 'Course Content & Chapters',
    ar: 'محتوى المقرر والأبواب الدراسية',
  },
  objectives: {
    en: 'Learning Objectives',
    ar: 'أهداف التعلم الأكاديمية',
  },
  readTime: {
    en: 'Estimated Time',
    ar: 'الوقت التقديري',
  },
  minutes: {
    en: 'min',
    ar: 'دقيقة',
  },
  chapter: {
    en: 'Chapter',
    ar: 'الباب',
  },
  lesson: {
    en: 'Lesson',
    ar: 'الدرس',
  },
  topics: {
    en: 'Topics',
    ar: 'الموضوعات',
  },
  status: {
    en: 'Status',
    ar: 'الحالة',
  },
  completed: {
    en: 'Completed',
    ar: 'مكتمل',
  },
  inProgress: {
    en: 'In Progress',
    ar: 'قيد التقدم',
  },
  notStarted: {
    en: 'Not Started',
    ar: 'لم يبدأ بعد',
  },
  nextLesson: {
    en: 'Next Lesson',
    ar: 'الدرس التالي',
  },
  prevLesson: {
    en: 'Previous Lesson',
    ar: 'الدرس السابق',
  },
  markComplete: {
    en: 'Mark as Completed',
    ar: 'تحديد كمكتمل',
  },
  markIncomplete: {
    en: 'Mark as Incomplete',
    ar: 'إلغاء الاكتمال',
  },
  bilingualView: {
    en: 'Bilingual (عربي / EN)',
    ar: 'ثنائي اللغة (عربي / EN)',
  },
  enOnly: {
    en: 'English Only',
    ar: 'الإنجليزية فقط',
  },
  arOnly: {
    en: 'العربية فقط',
    ar: 'العربية فقط',
  },

  // Practice Hub
  practiceHubTitle: {
    en: 'Unified Practice & Assessment Environment',
    ar: 'مركز التدريب والاختبارات الموحد',
  },
  practiceHubSubtitle: {
    en: 'Select your preferred chapter and practice mode: question bank, timed mock exams, or interactive cipher calculations.',
    ar: 'اختر الباب المطلوب ونمط التدريب: بنك الأسئلة الشامل، الامتحانات التجريبية المحددة بوقت، أو مختبر الحسابات التفاعلي.',
  },
  modeQuestions: {
    en: 'Question Bank (156 Questions)',
    ar: 'بنك الأسئلة (156 سؤالاً)',
  },
  modeExams: {
    en: 'Timed Exam Simulator',
    ar: 'محاكي الامتحانات المؤقتة',
  },
  modeLab: {
    en: 'Interactive Cipher Workstations',
    ar: 'مختبر التشفير والحسابات',
  },
  allChapters: {
    en: 'All Chapters',
    ar: 'جميع الأبواب',
  },
  allSources: {
    en: 'All Sources',
    ar: 'جميع المصادر',
  },
  allTypes: {
    en: 'All Question Types',
    ar: 'جميع أنواع الأسئلة',
  },
  allDifficulties: {
    en: 'All Difficulties',
    ar: 'جميع المستويات',
  },
  searchQuestions: {
    en: 'Search questions by keyword or topic...',
    ar: 'بحث في الأسئلة بالكلمات المفتاحية أو الموضوع...',
  },
  filterByChapter: {
    en: 'Filter by Chapter:',
    ar: 'تصفية بحسب الباب:',
  },
  mcq: {
    en: 'Multiple Choice',
    ar: 'اختيار من متعدد',
  },
  trueFalse: {
    en: 'True / False',
    ar: 'صواب أو خطأ',
  },
  calcProblem: {
    en: 'Calculation Problem',
    ar: 'مسألة حسابية تطبيقية',
  },
  checkAnswer: {
    en: 'Submit Answer',
    ar: 'تحقق من الإجابة',
  },
  reset: {
    en: 'Try Again',
    ar: 'إعادة المحاولة',
  },
  viewOriginalEnglish: {
    en: 'View Original English',
    ar: 'عرض النص الإنجليزي الأصلي',
  },
  viewArabicTranslation: {
    en: 'View Arabic Translation',
    ar: 'عرض الترجمة العربية',
  },
  correctAnswer: {
    en: 'Correct Answer',
    ar: 'إجابة صحيحة',
  },
  incorrectAnswer: {
    en: 'Incorrect Answer',
    ar: 'إجابة غير صحيحة',
  },
  academicExplanation: {
    en: 'Official Academic Explanation',
    ar: 'الشرح والتعليل الأكاديمي المعتمد',
  },
  sourceReference: {
    en: 'Exam Source Reference',
    ar: 'مرجع السؤال في الامتحانات والمقرر',
  },
  flagForReview: {
    en: 'Flag for Review',
    ar: 'تحديد للمراجعة لاحقاً',
  },
  unflag: {
    en: 'Unflag',
    ar: 'إلغاء التحديد',
  },
  submitExam: {
    en: 'Submit & End Exam',
    ar: 'إنهاء وتسليم الامتحان',
  },
  timeRemaining: {
    en: 'Time Remaining',
    ar: 'الوقت المتبقي',
  },
  examCompleted: {
    en: 'Examination Completed',
    ar: 'تم إنهاء الامتحان بنجاح',
  },
  yourScore: {
    en: 'Your Examination Score',
    ar: 'نتيجتك الأكاديمية',
  },
  reviewAnswers: {
    en: 'Review All Answers',
    ar: 'مراجعة جميع الإجابات والتعليلات',
  },
  questionOf: {
    en: 'Question',
    ar: 'السؤال',
  },

  // Review Hub
  reviewHubTitle: {
    en: 'Unified Revision & Exam Preparation Suite',
    ar: 'مركز المراجعة والتحضير النهائي للامتحانات',
  },
  reviewHubSubtitle: {
    en: 'Consolidated reference formulas, bilingual dictionary, official exam traps, and targeted mistake remediation.',
    ar: 'مرجع القوانين والمعادلات الرياضية، قاموس المصطلحات، أفخاخ الامتحانات الرسمية، وكشكول تصحيح الأخطاء.',
  },
  tabFormulas: {
    en: 'Formulas & Equations',
    ar: 'القوانين والمعادلات',
  },
  tabGlossary: {
    en: 'Bilingual Glossary',
    ar: 'معجم المصطلحات',
  },
  tabTraps: {
    en: 'Exam Pitfalls & Traps',
    ar: 'أفخاخ الامتحانات الشائعة',
  },
  tabMindMaps: {
    en: 'Concept Mind Maps',
    ar: 'الخرائط الذهنية للعلاقات',
  },
  tabRecall: {
    en: 'Keyword Recall',
    ar: 'استرجاع الكلمات المفتاحية',
  },
  tabMistakes: {
    en: 'Mistakes Notebook',
    ar: 'كشكول معالجة الأخطاء',
  },
  searchFormulas: {
    en: 'Search formulas, symbols, or topics...',
    ar: 'بحث في القوانين والرموز الرياضية...',
  },
  copyLatex: {
    en: 'Copy LaTeX',
    ar: 'نسخ كود LaTeX',
  },
  latexCopied: {
    en: 'Copied!',
    ar: 'تم النسخ!',
  },
  searchGlossary: {
    en: 'Search terms in Arabic or English...',
    ar: 'بحث في المصطلحات بالعربية أو الإنجليزية...',
  },
  term: {
    en: 'Term',
    ar: 'المصطلح',
  },
  definition: {
    en: 'Definition',
    ar: 'التعريف الأكاديمي',
  },
  examPitfalls: {
    en: 'Official Examination Pitfalls',
    ar: 'أفخاخ امتحانية شائعة يجب الحذر منها',
  },
  trapStatement: {
    en: 'Common False Assumption (Exam Trap):',
    ar: 'الافتراض الخاطئ الشائع (فخ امتحاني):',
  },
  truthExplanation: {
    en: 'Verified Academic Doctrine:',
    ar: 'الحقيقة الأكاديمية المعتمدة:',
  },
  mistakesNotebook: {
    en: 'Targeted Mistake Remediation',
    ar: 'معالجة الأخطاء ونقاط الضعف السابقة',
  },
  retryQuestion: {
    en: 'Retry Question',
    ar: 'أعد الإجابة للتحقق',
  },
  noMistakesYet: {
    en: 'No recorded mistakes yet! All answered questions are correct.',
    ar: 'لا توجد أخطاء مسجلة حالياً! جميع إجاباتك السابقة صحيحة.',
  },
  bookmarks: {
    en: 'Bookmarked Items',
    ar: 'العناصر المحفوظة',
  },

  // General & Shared
  search: {
    en: 'Search',
    ar: 'بحث',
  },
  language: {
    en: 'Language',
    ar: 'اللغة',
  },
  english: {
    en: 'English',
    ar: 'English',
  },
  arabic: {
    en: 'العربية',
    ar: 'العربية',
  },
  back: {
    en: 'Back',
    ar: 'رجوع',
  },
  verified: {
    en: 'Verified Solution',
    ar: 'حل معتمد ومتحقق منه',
  },
  universityLevel: {
    en: 'Year 4 — Computer Science',
    ar: 'الفرقة الرابعة — علوم الحاسب',
  },
  study: {
    en: 'Study',
    ar: 'الدراسة',
  },
  studyDesc: {
    en: 'Complete 5-unit university curriculum in one unified study guide',
    ar: 'المنهج الجامعي الكامل في مذكرة دراسية واحدة وشاملة',
  },
  questionsTab: {
    en: 'Questions',
    ar: 'الأسئلة',
  },
  examTarget: {
    en: 'University Final Examination Preparation',
    ar: 'الاستعداد للامتحانات النهائية الجامعية',
  },
  interactiveLearning: {
    en: 'Interactive Learning',
    ar: 'التعلّم التفاعلي',
  },
  interactiveLearningDesc: {
    en: 'PowerPoint-style digital classroom with interactive diagrams and step-by-step calculations',
    ar: 'محاضرات رقمية تفاعلية بنمط العروض التقديمية مع مخططات تفاعلية وحل مسائل خطوة بخطوة',
  },
};

export function getTranslation(key: TranslationKey, lang: 'en' | 'ar'): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] || entry['en'];
}

