import type { BasmagaQuestion } from './types';

export const basmagaQuestions: BasmagaQuestion[] = [
  {
    "id": "basmaga-ch1-01",
    "chapterId": "ch1",
    "topicId": "ch1-t1",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.3",
    "type": "true-false",
    "questionEn": "Asymmetric encryption algorithms are typically used to conceal small blocks of data, such as encryption keys and hash function values, rather than large data streams.",
    "questionAr": "تُستخدم خوارزميات التشفير غير المتماثل عادةً لحجب وتشفير كتل البيانات الصغيرة، مثل مفاتيح التشفير وقيم دوال الهاش، وليس تدفقات البيانات الضخمة.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Classification of Asymmetric Encryption for small blocks (keys/hashes) vs Symmetric Encryption for large data payloads.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.3"
    },
    "importantKeywords": [
      {
        "en": "Asymmetric encryption",
        "ar": "التشفير غير المتماثل",
        "role": "trigger"
      },
      {
        "en": "Small blocks of data",
        "ar": "كتل بيانات صغيرة",
        "role": "condition"
      },
      {
        "en": "Encryption keys and hash values",
        "ar": "مفاتيح التشفير وقيم الهاش",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "When the question describes encrypting small blocks (keys or hashes), choose Asymmetric encryption. If large streams or bulk payloads, choose Symmetric.",
      "ar": "عندما يذكر السؤال تشفير كتل صغيرة (مفاتيح أو قيم هاش)، اختر التشفير غير المتماثل. إذا كانت تدفقات ضخمة، اختر المتماثل.",
      "targetConcept": "Asymmetric Encryption (Small Blocks)",
      "targetConceptAr": "التشفير غير المتماثل للكتل الصغيرة"
    },
    "quickReasoning": {
      "en": "Asymmetric algorithms are computationally heavy and optimized for keys/hashes, while symmetric ciphers encrypt bulk data.",
      "ar": "الخوارزميات غير المتماثلة معقدة حسابياً ومخصصة لحماية المفاتيح والهاش، بينما التشفير المتماثل يعالج البيانات الضخمة."
    },
    "relatedLessonId": "ch1-l1"
  },
  {
    "id": "basmaga-ch1-02",
    "chapterId": "ch1",
    "topicId": "ch1-t1",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.4",
    "type": "true-false",
    "questionEn": "The field of network and Internet security consists of measures to deter, prevent, detect, and correct security violations that involve the transmission of information.",
    "questionAr": "يتألف مجال أمن الشبكات والإنترنت من الإجراءات والتدابير الهادفة إلى ردع، ومنع، واكتشاف، وتصحيح الانتهاكات الأمنية المصاحبة لنقل المعلومات.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Authoritative definition of network and Internet security covering the 4 defensive actions.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.4"
    },
    "importantKeywords": [
      {
        "en": "Network and Internet security",
        "ar": "أمن الشبكات والإنترنت",
        "role": "trigger"
      },
      {
        "en": "Deter, prevent, detect, and correct",
        "ar": "ردع، ومنع، واكتشاف، وتصحيح",
        "role": "condition"
      },
      {
        "en": "Transmission of information",
        "ar": "نقل المعلومات",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "All four actions (Deter, Prevent, Detect, Correct) must be present in the definition of transmission security.",
      "ar": "يجب توافر الإجراءات الأربعة معاً (الردع، المنع، الاكتشاف، التصحيح) في تعريف أمن نقل المعلومات.",
      "targetConcept": "Four Defensive Actions (Deter/Prevent/Detect/Correct)",
      "targetConceptAr": "الإجراءات الدفاعية الأربعة"
    },
    "quickReasoning": {
      "en": "This is the literal syllabus definition of network security in Chapter 1.",
      "ar": "هذا هو التعريف الحرفي المعتمد لأمن الشبكات في المحاضرة الأولى."
    },
    "relatedLessonId": "ch1-l2"
  },
  {
    "id": "basmaga-ch1-03",
    "chapterId": "ch1",
    "topicId": "ch1-t1",
    "sourceType": "generated-practice",
    "sourceLabel": "Additional Generated Practice: Ch 1 PDF p.4",
    "type": "mcq",
    "questionEn": "Which of the following is NOT one of the four cornerstone defensive actions in network and transmission security?",
    "questionAr": "أيٌّ مما يلي لا يُعد من الإجراءات الدفاعية الأربعة الأساسية في أمن الشبكات ونقل المعلومات؟",
    "options": [
      {
        "key": "A",
        "textEn": "Deter",
        "textAr": "الردع"
      },
      {
        "key": "B",
        "textEn": "Infiltrate",
        "textAr": "التسلل والاختراق"
      },
      {
        "key": "C",
        "textEn": "Detect",
        "textAr": "الاكتشاف"
      },
      {
        "key": "D",
        "textEn": "Correct",
        "textAr": "التصحيح والتعافي"
      }
    ],
    "correctAnswer": "B",
    "academicPoint": "Distinguishing defensive cornerstones (Deter, Prevent, Detect, Correct) from offensive operations.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.4"
    },
    "importantKeywords": [
      {
        "en": "NOT one of the four cornerstone actions",
        "ar": "ليس من الإجراءات الأربعة الأساسية",
        "role": "trigger"
      },
      {
        "en": "Network security defensive actions",
        "ar": "الإجراءات الدفاعية لأمن الشبكات",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Defensive pillars are Deter, Prevent, Detect, Correct. Anything offensive like Infiltrate or Intercept is false.",
      "ar": "الأركان الدفاعية هي الردع، المنع، الاكتشاف، التصحيح. أي مصطلح هجومي مثل التسلل هو خيار خاطئ.",
      "targetConcept": "Defensive Pillars (Infiltrate is Not One)",
      "targetConceptAr": "استبعاد العمليات الهجومية من التدابير الدفاعية"
    },
    "quickReasoning": {
      "en": "Infiltration is an offensive attack technique, not a defensive measure.",
      "ar": "التسلل هو تقنية هجومية وليس تدبيراً دفاعياً."
    },
    "relatedLessonId": "ch1-l2"
  },
  {
    "id": "basmaga-ch1-04",
    "chapterId": "ch1",
    "topicId": "ch1-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 1 / NIST SP 800-33",
    "type": "mcq",
    "questionEn": "The NIST Computer Security Handbook defines computer security as the protection afforded to an automated information system in order to attain the applicable objectives of preserving:",
    "questionAr": "يُعرّف دليل أمن الحاسوب الصادر عن NIST أمن الحاسوب بأنه الحماية الممنوحة لنظام معلومات آلي لتحقيق الأهداف المنطبقة في الحفاظ على:",
    "options": [
      {
        "key": "A",
        "textEn": "Integrity, Availability, and Confidentiality",
        "textAr": "السلامة، والتوافرية، والسرية (ثالوث CIA)"
      },
      {
        "key": "B",
        "textEn": "Throughput, Latency, and Scalability",
        "textAr": "معدل النقل، والتأخير، وقابلية التوسع"
      },
      {
        "key": "C",
        "textEn": "Cost, Redundancy, and Backup Speed",
        "textAr": "التكلفة، والوفرة، وسرعة النسخ الاحتياطي"
      },
      {
        "key": "D",
        "textEn": "Bandwidth, Encryption, and Compression",
        "textAr": "سعة النطاق، والتشفير، والضغط"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "NIST SP 800-33 definition of computer security anchored to the CIA Triad.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.5"
    },
    "importantKeywords": [
      {
        "en": "NIST Computer Security Handbook",
        "ar": "دليل NIST لأمن الحاسوب",
        "role": "trigger"
      },
      {
        "en": "Preserving integrity, availability, confidentiality",
        "ar": "الحفاظ على السلامة والتوافرية والسرية",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "When asked about NIST computer security objectives, always look for the core CIA triad (Confidentiality, Integrity, Availability).",
      "ar": "عند السؤال عن أهداف أمن الحاسوب لدى NIST، ابحث دائماً عن ثالوث CIA (السرية، السلامة، التوافرية).",
      "targetConcept": "CIA Triad (NIST SP 800-33)",
      "targetConceptAr": "ثالوث CIA وفق تعريف NIST"
    },
    "quickReasoning": {
      "en": "NIST defines security around preserving the three core CIA pillars.",
      "ar": "تبني NIST تعريفها لأمن الحاسوب حول الحفاظ على أركان ثالوث CIA الثلاثة."
    },
    "relatedLessonId": "ch1-l3"
  },
  {
    "id": "basmaga-ch1-05",
    "chapterId": "ch1",
    "topicId": "ch1-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.5",
    "type": "mcq",
    "questionEn": "Which of the following is considered an automated information system resource subject to computer security protection?",
    "questionAr": "أيٌّ مما يلي يُعتبر من موارد نظام المعلومات الآلي الخاضعة لحماية أمن الحاسوب؟",
    "options": [
      {
        "key": "A",
        "textEn": "Hardware, software, and firmware only",
        "textAr": "العتاد المادي، والبرمجيات، والبرمجيات الدائمة فقط"
      },
      {
        "key": "B",
        "textEn": "Information, data, and telecommunications only",
        "textAr": "المعلومات، والبيانات، والاتصالات عن بعد فقط"
      },
      {
        "key": "C",
        "textEn": "Hardware, software, firmware, information/data, and telecommunications",
        "textAr": "العتاد، والبرمجيات، والبرمجيات الدائمة، والبيانات، والاتصالات"
      },
      {
        "key": "D",
        "textEn": "Office furniture and peripheral packaging",
        "textAr": "الأثاث المكتبي وتغليف الملحقات"
      }
    ],
    "correctAnswer": "C",
    "academicPoint": "Comprehensive scope of automated information system resources under NIST guidelines.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.5"
    },
    "importantKeywords": [
      {
        "en": "Automated information system resources",
        "ar": "موارد نظام المعلومات الآلي",
        "role": "trigger"
      },
      {
        "en": "Hardware, software, firmware, data, telecommunications",
        "ar": "العتاد والبرمجيات والبيانات والاتصالات",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "System resources include both physical computing elements (hardware/firmware/software) and communication elements (data/telecommunications).",
      "ar": "تشمل موارد النظام كلاً من العناصر الحوسبية (عتاد/برمجيات) وعناصر الاتصال والبيانات.",
      "targetConcept": "Protected System Resources",
      "targetConceptAr": "الموارد المحمية لنظام المعلومات"
    },
    "quickReasoning": {
      "en": "NIST lists hardware, software, firmware, information/data, and telecommunications facilities as protected assets.",
      "ar": "تحدد معايير NIST العتاد والبرمجيات والبيانات وشبكات الاتصال كأصول تخضع للحماية."
    },
    "relatedLessonId": "ch1-l3"
  },
  {
    "id": "basmaga-ch1-06",
    "chapterId": "ch1",
    "topicId": "ch1-t2",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2022 Q1.7 / Ch 1 PDF p.6",
    "type": "mcq",
    "questionEn": "Assuring that individuals control or influence what information related to them may be collected and stored, and by whom, is the official definition of:",
    "questionAr": "ضمان تحكّم الأفراد أو تأثيرهم في طبيعة المعلومات المتعلقة بهم التي يجوز جمعها وتخزينها، ومن يحق له ذلك، هو التعريف المعتمد لـ:",
    "options": [
      {
        "key": "A",
        "textEn": "Data confidentiality",
        "textAr": "سرية البيانات"
      },
      {
        "key": "B",
        "textEn": "Privacy",
        "textAr": "الخصوصية"
      },
      {
        "key": "C",
        "textEn": "Availability",
        "textAr": "التوافرية"
      },
      {
        "key": "D",
        "textEn": "System integrity",
        "textAr": "سلامة النظام"
      }
    ],
    "correctAnswer": "B",
    "academicPoint": "Distinction between Privacy (individual control over personal data) and Data Confidentiality (preventing unauthorized disclosure).",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.6"
    },
    "importantKeywords": [
      {
        "en": "Individuals control or influence information",
        "ar": "تحكم الأفراد بالمعلومات المتعلقة بهم",
        "role": "trigger"
      },
      {
        "en": "Collected and stored and by whom",
        "ar": "جمعها وتخزينها ومن يملكها",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "When individuals control their own personal data collection, it is Privacy. When technical systems prevent unauthorized disclosure, it is Data Confidentiality.",
      "ar": "عندما يتعلق الأمر بتحكم الشخص ببياناته الشخصية، فهذه خصوصية (Privacy). وعندما يتعلق بمنع إفشاء البيانات لغير المصرح لهم، فهذه سرية البيانات (Data Confidentiality).",
      "targetConcept": "Privacy vs Data Confidentiality",
      "targetConceptAr": "الخصوصية مقابل سرية البيانات"
    },
    "quickReasoning": {
      "en": "Privacy explicitly pertains to individual control over personal data collection and dissemination.",
      "ar": "الخصوصية ترتبط حصرياً بحق الفرد في التحكم في جمع معلوماته وتداولها."
    },
    "relatedLessonId": "ch1-l4"
  },
  {
    "id": "basmaga-ch1-07",
    "chapterId": "ch1",
    "topicId": "ch1-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.6",
    "type": "mcq",
    "questionEn": "Assuring that a system performs its intended function in an unimpaired manner, free from deliberate or inadvertent unauthorized manipulation, is:",
    "questionAr": "ضمان أداء النظام لوظيفته المحددة بصورة سليمة، دون أي تلاعب متعمد أو غير مقصود غير مصرح به، يُعرَّف بأنه:",
    "options": [
      {
        "key": "A",
        "textEn": "Data integrity",
        "textAr": "سلامة وتكامل البيانات"
      },
      {
        "key": "B",
        "textEn": "System integrity",
        "textAr": "سلامة وتكامل النظام"
      },
      {
        "key": "C",
        "textEn": "Availability",
        "textAr": "التوافرية"
      },
      {
        "key": "D",
        "textEn": "Authenticity",
        "textAr": "الموثوقية والمصادقة"
      }
    ],
    "correctAnswer": "B",
    "academicPoint": "Distinction between System Integrity (unimpaired functional execution) and Data Integrity (unauthorized modification of files/messages).",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.6"
    },
    "importantKeywords": [
      {
        "en": "System performs its intended function",
        "ar": "أداء النظام لوظيفته المحددة",
        "role": "trigger"
      },
      {
        "en": "Unimpaired manner",
        "ar": "بصورة سليمة غير معطلة",
        "role": "condition"
      },
      {
        "en": "Free from unauthorized manipulation",
        "ar": "خالٍ من التلاعب غير المصرح به",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "System performing intended function = System integrity. Information/programs changed only with authorization = Data integrity.",
      "ar": "أداء النظام لوظيفته المقصودة = سلامة النظام. تعديل البرامج والمعلومات بتفويض فقط = سلامة البيانات.",
      "targetConcept": "System Integrity vs Data Integrity",
      "targetConceptAr": "سلامة النظام مقابل سلامة البيانات"
    },
    "quickReasoning": {
      "en": "System integrity focuses on operational execution without manipulation, distinct from stored data integrity.",
      "ar": "سلامة النظام تركز على كفاءة التنفيذ التشغيلي دون تلاعب، بخلاف سلامة البيانات المخزنة."
    },
    "relatedLessonId": "ch1-l4"
  },
  {
    "id": "basmaga-ch1-08",
    "chapterId": "ch1",
    "topicId": "ch1-t2",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2020 Q2.2 / Ch 1 PDF p.6",
    "type": "true-false",
    "questionEn": "A loss of availability is the disruption of access to or use of information or an information system.",
    "questionAr": "فقدان التوافرية يعني انقطاع وتعطل الوصول إلى المعلومات أو استخدامها أو استخدام نظام المعلومات.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "FIPS 199 / Stallings definition of loss of availability.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.6"
    },
    "importantKeywords": [
      {
        "en": "Loss of availability",
        "ar": "فقدان التوافرية",
        "role": "trigger"
      },
      {
        "en": "Disruption of access to or use of information",
        "ar": "انقطاع الوصول إلى المعلومات أو استخدامها",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Disruption of access or service denial always signals Availability.",
      "ar": "انقطاع الوصول أو حجب الخدمة يشير مباشرة إلى التوافرية (Availability).",
      "targetConcept": "Availability Definition",
      "targetConceptAr": "تعريف التوافرية"
    },
    "quickReasoning": {
      "en": "Disruption of timely, reliable access is the exact definition of an availability breach.",
      "ar": "انقطاع الوصول الموثوق وفي الوقت المناسب هو التعريف الدقيق لانتهاك التوافرية."
    },
    "relatedLessonId": "ch1-l4"
  },
  {
    "id": "basmaga-ch1-09",
    "chapterId": "ch1",
    "topicId": "ch1-t2",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2020 Q1.1 / Ch 1 PDF p.6",
    "type": "mcq",
    "questionEn": "Verifying that users are who they say they are and that each input arriving at the system came from a trusted source is classified as:",
    "questionAr": "التحقق من أن المستخدمين هم بالفعل من يدعون وأن كل مدخل واصل إلى النظام قد أتى من مصدر موثوق يُصنف على أنه:",
    "options": [
      {
        "key": "A",
        "textEn": "Authenticity",
        "textAr": "الموثوقية والمصادقة"
      },
      {
        "key": "B",
        "textEn": "Accountability",
        "textAr": "المحاسبية وقابلية التتبع"
      },
      {
        "key": "C",
        "textEn": "Integrity",
        "textAr": "سلامة البيانات"
      },
      {
        "key": "D",
        "textEn": "Confidentiality",
        "textAr": "السرية"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Verification of user claims and genuine input origin as the core definition of Authenticity.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.6"
    },
    "importantKeywords": [
      {
        "en": "Verifying users are who they say they are",
        "ar": "التحقق من أن المستخدمين هم من يدعون",
        "role": "trigger"
      },
      {
        "en": "Input arriving from a trusted source",
        "ar": "مدخل واصل من مصدر موثوق",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Verifying identity or confirming source authenticity = Authenticity (Authentication).",
      "ar": "إثبات الهوية المزعومة وموثوقية المصدر = المصادقة والموثوقية (Authenticity).",
      "targetConcept": "Authenticity",
      "targetConceptAr": "المصادقة وإثبات الموثوقية"
    },
    "quickReasoning": {
      "en": "Authenticity ensures communicating entities and incoming data streams are genuine.",
      "ar": "تضمن المصادقة أن أطراف الاتصال والبيانات الواردة حقيقية وصادرة من المصدر الموثوق المزعوم."
    },
    "relatedLessonId": "ch1-l4"
  },
  {
    "id": "basmaga-ch1-10",
    "chapterId": "ch1",
    "topicId": "ch1-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.6",
    "type": "mcq",
    "questionEn": "The security goal that requires the actions of an entity to be traced uniquely to that entity, supporting nonrepudiation and fault isolation, is:",
    "questionAr": "الهدف الأمني الذي يتطلب تتبع وتنسيب أفعال أي كيان بشكل فريد إليه، بما يدعم عدم الإنكار وعزل الأعطال، هو:",
    "options": [
      {
        "key": "A",
        "textEn": "Accountability",
        "textAr": "المحاسبية وقابلية التتبع"
      },
      {
        "key": "B",
        "textEn": "Availability",
        "textAr": "التوافرية"
      },
      {
        "key": "C",
        "textEn": "Authenticity",
        "textAr": "الموثوقية"
      },
      {
        "key": "D",
        "textEn": "Privacy",
        "textAr": "الخصوصية"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Accountability definition requiring unique tracing of entity actions.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.6"
    },
    "importantKeywords": [
      {
        "en": "Actions of an entity traced uniquely",
        "ar": "تتبع وتنسيب أفعال الكيان بشكل فريد",
        "role": "trigger"
      },
      {
        "en": "Nonrepudiation and fault isolation",
        "ar": "عدم الإنكار وعزل الأعطال",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Tracing actions uniquely to an entity (via audit logs/digital signatures) = Accountability.",
      "ar": "تتبع الأفعال لفاعلها بشكل فريد عبر السجلات = المحاسبية (Accountability).",
      "targetConcept": "Accountability",
      "targetConceptAr": "المحاسبية وقابلية التتبع"
    },
    "quickReasoning": {
      "en": "Accountability provides the audit trail necessary to prove which entity took a given action.",
      "ar": "توفر المحاسبية مسار التدقيق الضروري لإثبات مسؤولية الكيان عن أفعاله."
    },
    "relatedLessonId": "ch1-l4"
  },
  {
    "id": "basmaga-ch1-11",
    "chapterId": "ch1",
    "topicId": "ch1-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 1 / FIPS 199",
    "type": "mcq",
    "questionEn": "According to FIPS 199, a security breach that causes a severe or catastrophic adverse effect on organizational operations, organizational assets, or individuals is defined as:",
    "questionAr": "وفق معيار FIPS 199، الانتهاك الأمني الذي يتسبب في أثر سلبي جسيم أو كارثي على العمليات أو أصول المؤسسة أو الأفراد يُصنف على أنه:",
    "options": [
      {
        "key": "A",
        "textEn": "Low impact",
        "textAr": "تأثير منخفض"
      },
      {
        "key": "B",
        "textEn": "Moderate impact",
        "textAr": "تأثير متوسط"
      },
      {
        "key": "C",
        "textEn": "High impact",
        "textAr": "تأثير مرتفع (عالي)"
      },
      {
        "key": "D",
        "textEn": "Negligible impact",
        "textAr": "تأثير مهمل"
      }
    ],
    "correctAnswer": "C",
    "academicPoint": "FIPS 199 definition of High Level of Impact (catastrophic / severe damage).",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.8"
    },
    "importantKeywords": [
      {
        "en": "Severe or catastrophic adverse effect",
        "ar": "أثر سلبي جسيم أو كارثي",
        "role": "trigger"
      },
      {
        "en": "FIPS 199 level of impact",
        "ar": "مستوى التأثير وفق FIPS 199",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Limited = Low. Serious = Moderate. Severe or Catastrophic = High.",
      "ar": "محدود = منخفض (Low). خطير = متوسط (Moderate). جسيم أو كارثي = مرتفع (High).",
      "targetConcept": "High Level of Impact",
      "targetConceptAr": "مستوى التأثير المرتفع"
    },
    "quickReasoning": {
      "en": "FIPS 199 explicitly maps 'severe or catastrophic' harm to High impact.",
      "ar": "يربط معيار FIPS 199 الأثر الجسيم أو الكارثي بمستوى التأثير العالي."
    },
    "relatedLessonId": "ch1-l6"
  },
  {
    "id": "basmaga-ch1-12",
    "chapterId": "ch1",
    "topicId": "ch1-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.9",
    "type": "true-false",
    "questionEn": "One fundamental challenge of computer security is that the defender must protect all potential weak points, while the attacker only needs to find a single vulnerability.",
    "questionAr": "أحد التحديات الأساسية في أمن الحاسوب هو أن المدافع يجب عليه حماية جميع نقاط الضعف المحتملة، بينما يحتاج المهاجم إلى إيجاد ثغرة واحدة فقط للنجاح.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Asymmetry of defensive vs offensive workload in computer security challenges.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.9"
    },
    "importantKeywords": [
      {
        "en": "Defender must protect all points",
        "ar": "المدافع يجب أن يحمي كافة النقاط",
        "role": "condition"
      },
      {
        "en": "Attacker only needs to find a single vulnerability",
        "ar": "المهاجم يحتاج ثغرة واحدة فقط",
        "role": "trigger"
      }
    ],
    "basmagaRule": {
      "en": "Asymmetry of defense: Defense requires complete coverage; offense requires only one successful exploit.",
      "ar": "عدم تناظر الدفاع: الدفاع يتطلب تغطية تامة، بينما الهجوم يكتفي باكتشاف ثغرة وحيدة.",
      "targetConcept": "Defense Asymmetry Challenge",
      "targetConceptAr": "تحدي عدم تناظر الدفاع والهجوم"
    },
    "quickReasoning": {
      "en": "This asymmetry is one of Stallings' key computer security management challenges.",
      "ar": "هذا التباين يمثل أحد أبرز تحديات إدارة أمن الحاسوب العشرة في الكتاب."
    },
    "relatedLessonId": "ch1-l7"
  },
  {
    "id": "basmaga-ch1-13",
    "chapterId": "ch1",
    "topicId": "ch1-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 1 / ITU-T X.800",
    "type": "true-false",
    "questionEn": "The OSI security architecture provides a systematic framework for defining security requirements and characterizing approaches to satisfying them.",
    "questionAr": "توفر بنية أمان OSI إطاراً منهجياً لتحديد متطلبات الأمان وتوصيف المناهج والحلول اللازمة لتحقيقها.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "OSI Security Architecture (ITU-T X.800) primary mission statement.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.10"
    },
    "importantKeywords": [
      {
        "en": "OSI security architecture",
        "ar": "بنية أمان OSI",
        "role": "trigger"
      },
      {
        "en": "Systematic framework",
        "ar": "إطار منهجي منظم",
        "role": "condition"
      },
      {
        "en": "Defining security requirements",
        "ar": "تحديد متطلبات الأمان",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Systematic framework for security requirements = OSI Security Architecture (ITU-T X.800).",
      "ar": "الإطار المنهجي لمتطلبات الأمان = بنية أمان OSI (معيار X.800).",
      "targetConcept": "OSI Security Architecture (X.800)",
      "targetConceptAr": "بنية أمان OSI وفق معيار X.800"
    },
    "quickReasoning": {
      "en": "ITU-T Recommendation X.800 established this systematic framework.",
      "ar": "توصية الاتحاد الدولي للاتصالات X.800 وضعت هذا الإطار المنهجي المعتمد."
    },
    "relatedLessonId": "ch1-l8"
  },
  {
    "id": "basmaga-ch1-14",
    "chapterId": "ch1",
    "topicId": "ch1-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.10",
    "type": "mcq",
    "questionEn": "The OSI security architecture (X.800) focuses on three key facets of information security: security attacks, security mechanisms, and:",
    "questionAr": "تركز بنية أمان OSI (معيار X.800) على ثلاثة جوانب محورية في أمن المعلومات: الهجمات الأمنية، وآليات الأمان، و:",
    "options": [
      {
        "key": "A",
        "textEn": "Security services",
        "textAr": "خدمات الأمان"
      },
      {
        "key": "B",
        "textEn": "Security policies",
        "textAr": "سياسات الأمان"
      },
      {
        "key": "C",
        "textEn": "Security budgets",
        "textAr": "ميزانيات الأمان"
      },
      {
        "key": "D",
        "textEn": "Security certifications",
        "textAr": "شهادات الأمان"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "The three core facets of X.800: Attacks, Mechanisms, and Services.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.10"
    },
    "importantKeywords": [
      {
        "en": "Three key facets of X.800",
        "ar": "الأوجه الثلاثة الرئيسية لمعيار X.800",
        "role": "trigger"
      },
      {
        "en": "Security attacks, security mechanisms, security services",
        "ar": "هجمات وآليات وخدمات الأمان",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "X.800 triad: Security Attacks + Security Mechanisms + Security Services.",
      "ar": "أركان X.800 الثلاثة: هجمات الأمان + آليات الأمان + خدمات الأمان.",
      "targetConcept": "Three Facets of X.800",
      "targetConceptAr": "الأوجه الثلاثة لمعيار X.800"
    },
    "quickReasoning": {
      "en": "Services implement policies using mechanisms to counter attacks in the X.800 model.",
      "ar": "الخدمات تطبق السياسات عبر الآليات لصد الهجمات في نموذج X.800."
    },
    "relatedLessonId": "ch1-l8"
  },
  {
    "id": "basmaga-ch1-15",
    "chapterId": "ch1",
    "topicId": "ch1-t3",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2020 Q1.6 / RFC 4949",
    "type": "mcq",
    "questionEn": "Under RFC 4949, a(n) __________ is a potential for violation of security, whereas a(n) __________ is an assault on system security that derives from an intelligent threat.",
    "questionAr": "وفق وثيقة RFC 4949، يُعد __________ احتمالية أو إمكانية لانتهاك الأمان، بينما يُعد __________ اعتداءً فعلياً على أمن النظام ينبع من تهديد ذكي:",
    "options": [
      {
        "key": "A",
        "textEn": "Threat, Attack",
        "textAr": "تهديد (Threat)، هجوم (Attack)"
      },
      {
        "key": "B",
        "textEn": "Attack, Threat",
        "textAr": "هجوم (Attack)، تهديد (Threat)"
      },
      {
        "key": "C",
        "textEn": "Vulnerability, Incident",
        "textAr": "ثغرة، حادث أمني"
      },
      {
        "key": "D",
        "textEn": "Mechanism, Service",
        "textAr": "آلية، خدمة"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Distinction between Threat (potential violation) and Attack (deliberate executed assault).",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.11"
    },
    "importantKeywords": [
      {
        "en": "Potential for violation of security",
        "ar": "احتمالية أو إمكانية لانتهاك الأمان",
        "role": "trigger"
      },
      {
        "en": "Assault on system security deriving from threat",
        "ar": "اعتداء فعلي ينبع من تهديد ذكي",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Potential = Threat. Deliberate execution/assault = Attack.",
      "ar": "الاحتمالية الكامنة = تهديد (Threat). الاعتداء الفعلي المنفذ = هجوم (Attack).",
      "targetConcept": "Threat vs Attack (RFC 4949)",
      "targetConceptAr": "التهديد مقابل الهجوم"
    },
    "quickReasoning": {
      "en": "RFC 4949 defines a threat as potential danger, and an attack as the deliberate action executing that danger.",
      "ar": "تعرف RFC 4949 التهديد بالخطر الكامن، بينما الهجوم هو الفعل العمدي لتنفيذ ذلك الخطر."
    },
    "relatedLessonId": "ch1-l9"
  },
  {
    "id": "basmaga-ch1-16",
    "chapterId": "ch1",
    "topicId": "ch1-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.12",
    "type": "mcq",
    "questionEn": "Why are passive attacks fundamentally difficult to detect in network communications?",
    "questionAr": "لماذا يصعب اكتشاف الهجمات السلبية جوهرياً في شبكات الاتصال؟",
    "options": [
      {
        "key": "A",
        "textEn": "Because they alter data in transit instantly",
        "textAr": "لأنها تعدل البيانات المنقولة لحظياً"
      },
      {
        "key": "B",
        "textEn": "Because they do not involve any alteration of the data",
        "textAr": "لأنها لا تتضمن أي تعديل أو تغيير على البيانات المنقولة"
      },
      {
        "key": "C",
        "textEn": "Because firewalls automatically hide them",
        "textAr": "لأن الجدران النارية تخفيها تلقائياً"
      },
      {
        "key": "D",
        "textEn": "Because they only target offline storage",
        "textAr": "لأنها تستهدف التخزين المنفصل فقط"
      }
    ],
    "correctAnswer": "B",
    "academicPoint": "Core characteristic of passive attacks: eavesdropping without altering transmission payloads.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.12"
    },
    "importantKeywords": [
      {
        "en": "Passive attacks difficult to detect",
        "ar": "الهجمات السلبية يصعب اكتشافها",
        "role": "trigger"
      },
      {
        "en": "Do not involve alteration of data",
        "ar": "لا تتضمن أي تعديل على البيانات",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Passive attacks do NOT alter data (hence hard to detect, but prevented via encryption). Active attacks DO alter data (easy to detect, hard to prevent).",
      "ar": "الهجمات السلبية لا تعدل البيانات (لذا يصعب كشفها وتُمنع بالتشفير). الهجمات النشطة تعدل البيانات (يسهل كشفها ويصعب منعها).",
      "targetConcept": "Passive Attack Properties",
      "targetConceptAr": "خصائص الهجمات السلبية"
    },
    "quickReasoning": {
      "en": "Since passive attacks merely observe transmissions without touching bits, no traces or corruption are left on the wire.",
      "ar": "نظراً لأن الهجمات السلبية تكتفي بالتنصت دون تغيير أي بت، فإنها لا تترك أي أثر تشويه على خط الاتصال."
    },
    "relatedLessonId": "ch1-l10"
  },
  {
    "id": "basmaga-ch1-17",
    "chapterId": "ch1",
    "topicId": "ch1-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.13",
    "type": "mcq",
    "questionEn": "When an adversary is unable to read encrypted messages but observes the location and identity of communicating hosts, message frequency, and message length, the attack is:",
    "questionAr": "عندما يعجز المهاجم عن قراءة الرسائل المشفرة ولكنه يراقب مواقع وهوية الأطراف المتصلة وتكرار الرسائل وأطوالها، فإن هذا الهجوم يُصنف:",
    "options": [
      {
        "key": "A",
        "textEn": "Traffic analysis",
        "textAr": "تحليل حركة المرور (Traffic analysis)"
      },
      {
        "key": "B",
        "textEn": "Release of message contents",
        "textAr": "إفشاء محتوى الرسالة"
      },
      {
        "key": "C",
        "textEn": "Masquerade",
        "textAr": "انتحال الشخصية"
      },
      {
        "key": "D",
        "textEn": "Denial of service",
        "textAr": "حجب الخدمة"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Definition of Traffic Analysis as an observation-based passive attack.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.13"
    },
    "importantKeywords": [
      {
        "en": "Observes location and identity of communicating hosts",
        "ar": "مراقبة موقع وهوية الأطراف المتصلة",
        "role": "trigger"
      },
      {
        "en": "Message frequency and length",
        "ar": "تكرار الرسائل وأطوالها",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Observing patterns, frequency, or volume without reading payload contents = Traffic Analysis.",
      "ar": "مراقبة أنماط وتكرار وحجم الرسائل دون قراءة المحتوى = تحليل حركة المرور (Traffic Analysis).",
      "targetConcept": "Traffic Analysis (Passive)",
      "targetConceptAr": "تحليل حركة المرور (هجوم سلبي)"
    },
    "quickReasoning": {
      "en": "Traffic analysis deduces communication characteristics without decrypting payload content.",
      "ar": "يستنتج تحليل حركة المرور طبيعة الاتصالات من خصائص الحزم الخارجية دون الحاجة لفك التشفير."
    },
    "relatedLessonId": "ch1-l10"
  },
  {
    "id": "basmaga-ch1-18",
    "chapterId": "ch1",
    "topicId": "ch1-t3",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2020 Q2.1 / Ch 1 PDF p.14",
    "type": "true-false",
    "questionEn": "An active attack attempts to alter system resources or affect their operation.",
    "questionAr": "يحاول الهجوم النشط تعديل موارد النظام أو التأثير على تشغيلها وأدائها.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Definition of Active Attacks altering resources or operations.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.14"
    },
    "importantKeywords": [
      {
        "en": "Active attack",
        "ar": "الهجوم النشط",
        "role": "trigger"
      },
      {
        "en": "Alter system resources or affect operation",
        "ar": "تعديل موارد النظام أو التأثير على التشغيل",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Altering resources, modifying data, or disrupting operation = Active Attack.",
      "ar": "تعديل الموارد، تحريف البيانات، أو تعطيل التشغيل = هجوم نشط (Active Attack).",
      "targetConcept": "Active Attack Definition",
      "targetConceptAr": "تعريف الهجوم النشط"
    },
    "quickReasoning": {
      "en": "Active attacks directly intervene in data streams or system behavior.",
      "ar": "تتدخل الهجمات النشطة بشكل مباشر في تدفقات البيانات وسلوك الأنظمة."
    },
    "relatedLessonId": "ch1-l11"
  },
  {
    "id": "basmaga-ch1-19",
    "chapterId": "ch1",
    "topicId": "ch1-t3",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2020 Q1.5 & Midterm 2022 Q1.2",
    "type": "mcq",
    "questionEn": "_____ involves the passive capture of a data unit and its subsequent retransmission to produce an unauthorized effect.",
    "questionAr": "يتضمن _____ التقاطاً سلبياً لوحدة بيانات ومن ثم إعادة إرسالها لاحقاً لإحداث أثر غير مصرح به:",
    "options": [
      {
        "key": "A",
        "textEn": "Replay",
        "textAr": "إعادة الإرسال (Replay)"
      },
      {
        "key": "B",
        "textEn": "Masquerade",
        "textAr": "الانتحال (Masquerade)"
      },
      {
        "key": "C",
        "textEn": "Modification of messages",
        "textAr": "تعديل الرسائل"
      },
      {
        "key": "D",
        "textEn": "Traffic analysis",
        "textAr": "تحليل حركة المرور"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Replay attack mechanism: passive capture followed by unauthorized delayed retransmission.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.15"
    },
    "importantKeywords": [
      {
        "en": "Passive capture of a data unit",
        "ar": "التقاط سلبي لوحدة بيانات",
        "role": "trigger"
      },
      {
        "en": "Subsequent retransmission",
        "ar": "إعادة إرسال لاحقة",
        "role": "condition"
      },
      {
        "en": "Unauthorized effect",
        "ar": "أثر غير مصرح به",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Passive capture followed by subsequent retransmission = Replay attack.",
      "ar": "التقاط سلبي متبوع بإعادة إرسال لاحقة للرسالة = هجوم إعادة الإرسال (Replay).",
      "targetConcept": "Replay Attack",
      "targetConceptAr": "هجوم إعادة الإرسال"
    },
    "quickReasoning": {
      "en": "Replay attacks re-inject valid past captured tokens to fraudulently repeat an action.",
      "ar": "يقوم هجوم إعادة الإرسال بإعادة حقن حزم سابقة صحيحة لتكرار عملية بشكل غير مصرح به."
    },
    "relatedLessonId": "ch1-l11"
  },
  {
    "id": "basmaga-ch1-20",
    "chapterId": "ch1",
    "topicId": "ch1-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.15",
    "type": "mcq",
    "questionEn": "An active attack in which one entity pretends to be a different entity is formally termed:",
    "questionAr": "الهجوم النشط الذي يتظاهر فيه كيان ما بأنه كيان مختلف تماماً يُسمى رسمياً:",
    "options": [
      {
        "key": "A",
        "textEn": "Masquerade",
        "textAr": "انتحال الشخصية (Masquerade)"
      },
      {
        "key": "B",
        "textEn": "Replay",
        "textAr": "إعادة الإرسال"
      },
      {
        "key": "C",
        "textEn": "Denial of service",
        "textAr": "حجب الخدمة"
      },
      {
        "key": "D",
        "textEn": "Sniffing",
        "textAr": "التجسس على الحزم"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Definition of Masquerade active attack.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.15"
    },
    "importantKeywords": [
      {
        "en": "One entity pretends to be a different entity",
        "ar": "تظاهر كيان بأنه كيان مختلف",
        "role": "trigger"
      }
    ],
    "basmagaRule": {
      "en": "Pretending to be another identity = Masquerade.",
      "ar": "ادعاء هوية أخرى والتظاهر بها = انتحال الشخصية (Masquerade).",
      "targetConcept": "Masquerade Attack",
      "targetConceptAr": "هجوم انتحال الشخصية"
    },
    "quickReasoning": {
      "en": "Masquerading involves forging credentials to impersonate an authorized user.",
      "ar": "الانتحال يتضمن تزييف بيانات الاعتماد لتقمص شخصية مستخدم مصرح له."
    },
    "relatedLessonId": "ch1-l11"
  },
  {
    "id": "basmaga-ch1-21",
    "chapterId": "ch1",
    "topicId": "ch1-t4",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 1 / ITU-T X.800",
    "type": "mcq",
    "questionEn": "Which of the following is NOT one of the five primary security service categories defined in X.800?",
    "questionAr": "أيٌّ مما يلي لا يُعد من فئات خدمات الأمان الخمس الرئيسية المحددة في معيار X.800؟",
    "options": [
      {
        "key": "A",
        "textEn": "Authentication",
        "textAr": "المصادقة"
      },
      {
        "key": "B",
        "textEn": "Access Control",
        "textAr": "التحكم في الوصول"
      },
      {
        "key": "C",
        "textEn": "Traffic Compression",
        "textAr": "ضغط حركة المرور"
      },
      {
        "key": "D",
        "textEn": "Nonrepudiation",
        "textAr": "عدم الإنكار"
      }
    ],
    "correctAnswer": "C",
    "academicPoint": "The 5 primary X.800 service categories: Authentication, Access Control, Confidentiality, Integrity, Nonrepudiation.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.17"
    },
    "importantKeywords": [
      {
        "en": "Five primary security service categories in X.800",
        "ar": "فئات خدمات الأمان الخمس في X.800",
        "role": "trigger"
      },
      {
        "en": "NOT a security service",
        "ar": "ليست خدمة أمان",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "X.800 services are: Authentication, Access Control, Data Confidentiality, Data Integrity, Nonrepudiation. Compression is a network optimization, not security.",
      "ar": "خدمات X.800 هي: المصادقة، التحكم بالوصول، السرية، السلامة، عدم الإنكار. الضغط هو تحسين شبكي وليس خدمة أمان.",
      "targetConcept": "X.800 Five Service Categories",
      "targetConceptAr": "فئات خدمات الأمان الخمس في X.800"
    },
    "quickReasoning": {
      "en": "Compression is a performance enhancement, completely outside X.800 security classifications.",
      "ar": "ضغط البيانات هو تحسين لأداء النقل وليس خدمة أمنية في X.800."
    },
    "relatedLessonId": "ch1-l12"
  },
  {
    "id": "basmaga-ch1-22",
    "chapterId": "ch1",
    "topicId": "ch1-t4",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2020 Q2.7 / Ch 1 PDF p.24",
    "type": "mcq",
    "questionEn": "The use of a trusted third party to assure certain properties of a data exchange, such as time or delivery confirmation, is formally classified under X.800 as:",
    "questionAr": "استخدام طرف ثالث موثوق لتأكيد خصائص معينة لتبادل البيانات، مثل التوقيت أو إثبات التسليم، يُصنف في X.800 على أنه:",
    "options": [
      {
        "key": "A",
        "textEn": "Notarization",
        "textAr": "التوثيق المعتمد (Notarization)"
      },
      {
        "key": "B",
        "textEn": "Traffic padding",
        "textAr": "حشو حركة المرور"
      },
      {
        "key": "C",
        "textEn": "Routing control",
        "textAr": "التحكم في التوجيه"
      },
      {
        "key": "D",
        "textEn": "Data integrity",
        "textAr": "سلامة البيانات"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "X.800 definition of Notarization mechanism using a trusted third party.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.24"
    },
    "importantKeywords": [
      {
        "en": "Trusted third party",
        "ar": "طرف ثالث موثوق",
        "role": "trigger"
      },
      {
        "en": "Assure properties of data exchange",
        "ar": "تأكيد خصائص تبادل البيانات",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Trusted third party assuring exchange properties (timestamping/delivery) = Notarization.",
      "ar": "الطرف الثالث الموثوق لتأكيد خصائص التبادل كالتوقيت = التوثيق المعتمد (Notarization).",
      "targetConcept": "Notarization Mechanism",
      "targetConceptAr": "آلية التوثيق المعتمد"
    },
    "quickReasoning": {
      "en": "Notarization provides legal/third-party proof of exchange parameters like timestamps.",
      "ar": "التوثيق يوفر إثباتاً قانونياً عبر طرف ثالث لخصائص الرسالة مثل الأختام الزمنية."
    },
    "relatedLessonId": "ch1-l15"
  },
  {
    "id": "basmaga-ch1-23",
    "chapterId": "ch1",
    "topicId": "ch1-t5",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 1 / Ch 1 PDF p.26",
    "type": "mcq",
    "questionEn": "In the network access security model (Figure 1.3), which defensive component acts as the external barrier blocking unauthorized intruders before they reach internal resources?",
    "questionAr": "في نموذج أمان الوصول للشبكة (شكل 1.3)، أي مكون دفاعي يعمل كحاجز خارجي يصد المتسللين غير المصرح لهم قبل وصولهم للموارد الداخلية؟",
    "options": [
      {
        "key": "A",
        "textEn": "Gatekeeper function",
        "textAr": "وظيفة حارس البوابة (Gatekeeper function)"
      },
      {
        "key": "B",
        "textEn": "Internal security controls",
        "textAr": "ضوابط الأمان الداخلية"
      },
      {
        "key": "C",
        "textEn": "Trusted third party",
        "textAr": "الطرف الثالث الموثوق"
      },
      {
        "key": "D",
        "textEn": "Information transform",
        "textAr": "تحويل المعلومات"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Network Access Security Model (Figure 1.3): Gatekeeper function (firewalls/passwords) vs Internal Security Controls.",
    "sourceRef": {
      "file": "Ch 1 information security.pdf",
      "pageOrSlide": "p.26"
    },
    "importantKeywords": [
      {
        "en": "Network access security model",
        "ar": "نموذج أمان الوصول للشبكة",
        "role": "trigger"
      },
      {
        "en": "External barrier blocking unauthorized entry",
        "ar": "حاجز خارجي يصد الدخول غير المصرح به",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "External perimeter filter/login/firewall = Gatekeeper. Internal antivirus/audit = Internal security controls.",
      "ar": "حاجز الدخول الخارجي وجدار الحماية = حارس البوابة (Gatekeeper). برامج الفحص والتدقيق بالداخل = ضوابط داخلية.",
      "targetConcept": "Gatekeeper Function (Fig 1.3)",
      "targetConceptAr": "وظيفة حارس البوابة في نموذج الوصول"
    },
    "quickReasoning": {
      "en": "The Gatekeeper function inspects credentials and packet headers at the system perimeter.",
      "ar": "تتولى وظيفة حارس البوابة فحص الهويات والترويسات عند محيط النظام الخارجي."
    },
    "relatedLessonId": "ch1-l17"
  },
  {
    "id": "basmaga-ch2-01",
    "chapterId": "ch2",
    "topicId": "ch2-t1",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.3",
    "type": "mcq",
    "questionEn": "An integer b divides an integer a (written b | a) if and only if there exists an integer m such that:",
    "questionAr": "يقسم العدد الصحيح b العدد الصحيح a (ويُكتب b | a) إذا وفقط إذا وجد عدد صحيح m بحيث:",
    "options": [
      {
        "key": "A",
        "textEn": "a = mb with b != 0",
        "textAr": "a = mb مع b لا يساوي 0"
      },
      {
        "key": "B",
        "textEn": "b = ma with a != 0",
        "textAr": "b = ma مع a لا يساوي 0"
      },
      {
        "key": "C",
        "textEn": "a + b = m",
        "textAr": "a + b = m"
      },
      {
        "key": "D",
        "textEn": "a / b has a remainder of 1",
        "textAr": "باقي قسمة a على b يساوي 1"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Formal definition of divisibility in number theory: b | a iff a = mb with non-zero b.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.3"
    },
    "importantKeywords": [
      {
        "en": "b divides a (b | a)",
        "ar": "b يقسم a",
        "role": "trigger"
      },
      {
        "en": "a = mb with b != 0",
        "ar": "a = mb مع عدم انعدام b",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Divisor goes on the right of m: b | a means a = mb (a is the multiple, b is the divisor).",
      "ar": "المقسوم هو الناتج: b | a يعني أن a = mb (أي a هو المضاعف و b هو القاسم غير الصفري).",
      "targetConcept": "Divisibility Definition",
      "targetConceptAr": "تعريف قابلية القسمة"
    },
    "quickReasoning": {
      "en": "By definition, b divides a if a is an integer multiple of b, with b non-zero.",
      "ar": "بحسب التعريف، يقسم b العدد a إذا كان a مضاعفاً صحيحاً لـ b، وبشرط ألا يكون b صفراً."
    },
    "relatedLessonId": "ch2-l1"
  },
  {
    "id": "basmaga-ch2-02",
    "chapterId": "ch2",
    "topicId": "ch2-t1",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.4",
    "type": "true-false",
    "questionEn": "Any non-zero integer b divides 0 (written b | 0).",
    "questionAr": "أي عدد صحيح غير صفري b يقسم الصفر (ويُكتب b | 0).",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Divisibility property of zero: for any non-zero b, b | 0 because 0 = 0 * b.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.4"
    },
    "importantKeywords": [
      {
        "en": "Non-zero integer b divides 0",
        "ar": "عدد صحيح غير صفري يقسم 0",
        "role": "trigger"
      },
      {
        "en": "b | 0",
        "ar": "b يقسم 0",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Any number divides 0 because 0 = 0 * b. But 0 divides NO non-zero number (division by 0 undefined).",
      "ar": "أي عدد غير صفري يقسم الصفر لأن 0 = 0 * b. ولكن الصفر لا يقسم أي عدد (القسمة على صفر غير معرفة).",
      "targetConcept": "Divisibility of Zero (b | 0)",
      "targetConceptAr": "قسمة الصفر على الأعداد غير الصفرية"
    },
    "quickReasoning": {
      "en": "Since 0 = (0)(b), the quotient is the integer 0, which satisfies the divisibility theorem.",
      "ar": "بما أن 0 = (0)(b)، فإن ناتج القسمة هو العدد الصحيح 0، مما يحقق شرط القسمة."
    },
    "relatedLessonId": "ch2-l1"
  },
  {
    "id": "basmaga-ch2-03",
    "chapterId": "ch2",
    "topicId": "ch2-t1",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Ch 2 PDF p.4 / Slide 5",
    "type": "true-false",
    "questionEn": "If b | g and b | h, then b divides any linear combination (mg + nh) for all arbitrary integers m and n.",
    "questionAr": "إذا كان b يقسم g وكان b يقسم h، فإن b يقسم أي تركيبة خطية (mg + nh) لأي أعداد صحيحة اختيارية m و n.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Divisor Property 5: linear combination preservation b | (mg + nh).",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.4"
    },
    "importantKeywords": [
      {
        "en": "b | g and b | h",
        "ar": "b يقسم g و h",
        "role": "condition"
      },
      {
        "en": "b divides linear combination (mg + nh)",
        "ar": "b يقسم التركيبة الخطية (mg + nh)",
        "role": "trigger"
      }
    ],
    "basmagaRule": {
      "en": "Common divisor property: if b divides two numbers, it divides any linear combination of them.",
      "ar": "خاصية القاسم المشترك: إذا كان b يقسم عددين، فإنه يقسم أي تركيبة خطية ناتجة عنهما.",
      "targetConcept": "Linear Combination Divisibility",
      "targetConceptAr": "قابلية قسمة التراكيب الخطية"
    },
    "quickReasoning": {
      "en": "Factoring gives mg + nh = m(b * k1) + n(b * k2) = b(m*k1 + n*k2), proving b is a factor.",
      "ar": "بإخراج العامل المشترك: mg + nh = b(m*k1 + n*k2)، وهو مضاعف صحيح للعدد b."
    },
    "relatedLessonId": "ch2-l1"
  },
  {
    "id": "basmaga-ch2-04",
    "chapterId": "ch2",
    "topicId": "ch2-t1",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.6",
    "type": "mcq",
    "questionEn": "In the division algorithm a = qn + r, what constraint must the remainder r strictly satisfy?",
    "questionAr": "في خوارزمية القسمة a = qn + r، ما هو الشرط الحازم الذي يجب أن يحققه باقي القسمة r؟",
    "options": [
      {
        "key": "A",
        "textEn": "0 <= r < n",
        "textAr": "0 <= r < n (غير سالب وأصغر تماماً من n)"
      },
      {
        "key": "B",
        "textEn": "-n < r <= 0",
        "textAr": "-n < r <= 0"
      },
      {
        "key": "C",
        "textEn": "0 < r <= n",
        "textAr": "0 < r <= n"
      },
      {
        "key": "D",
        "textEn": "r can be any integer",
        "textAr": "يمكن لـ r أن يكون أي عدد صحيح"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Division algorithm uniqueness condition: 0 <= r < n with positive divisor n.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.6"
    },
    "importantKeywords": [
      {
        "en": "Division algorithm a = qn + r",
        "ar": "خوارزمية القسمة a = qn + r",
        "role": "trigger"
      },
      {
        "en": "Constraint on remainder r",
        "ar": "شرط باقي القسمة r",
        "role": "condition"
      },
      {
        "en": "0 <= r < n",
        "ar": "0 <= r < n",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Remainder r is ALWAYS non-negative and strictly smaller than divisor n: 0 <= r < n.",
      "ar": "باقي القسمة r غير سالب أبداً وأصغر تماماً من القاسم الموجب n: 0 <= r < n.",
      "targetConcept": "Division Algorithm Remainder Condition",
      "targetConceptAr": "شرط باقي خوارزمية القسمة"
    },
    "quickReasoning": {
      "en": "The remainder must be in the range [0, n - 1] to ensure uniqueness of quotient and remainder.",
      "ar": "يجب أن يقع الباقي في المجال [0, n - 1] لضمان وحدانية ناتج وباقي القسمة."
    },
    "relatedLessonId": "ch2-l2"
  },
  {
    "id": "basmaga-ch2-05",
    "chapterId": "ch2",
    "topicId": "ch2-t1",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.7",
    "type": "mcq",
    "questionEn": "Which of the following expressions correctly computes -11 mod 7 according to the division algorithm?",
    "questionAr": "أيٌّ من التعبيرات التالية يمثل الحساب الصحيح لـ -11 mod 7 وفق خوارزمية القسمة؟",
    "options": [
      {
        "key": "A",
        "textEn": "3 (since -11 = (-2)(7) + 3)",
        "textAr": "3 (لأن -11 = (-2)(7) + 3)"
      },
      {
        "key": "B",
        "textEn": "-4 (since -11 = (-1)(7) - 4)",
        "textAr": "-4 (لأن -11 = (-1)(7) - 4)"
      },
      {
        "key": "C",
        "textEn": "4",
        "textAr": "4"
      },
      {
        "key": "D",
        "textEn": "-3",
        "textAr": "-3"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Correct handling of negative dividends under division algorithm enforcing 0 <= r < n.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.7"
    },
    "importantKeywords": [
      {
        "en": "-11 mod 7",
        "ar": "-11 بمقياس 7",
        "role": "trigger"
      },
      {
        "en": "Negative dividend",
        "ar": "المقسوم السالب",
        "role": "condition"
      },
      {
        "en": "r must be non-negative (r = 3)",
        "ar": "الباقي موجب (r = 3)",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Negative dividends: Add modulus until positive. -11 + 7 = -4, -4 + 7 = 3. Never allow negative remainder.",
      "ar": "في الأعداد السالبة: أضف المقياس حتى يصبح موجباً: -11 + 7 = -4، ثم -4 + 7 = 3. لا تختر الباقي السالب أبداً.",
      "targetConcept": "Negative Dividend Modulo",
      "targetConceptAr": "حساب باقي القسمة للأعداد السالبة"
    },
    "quickReasoning": {
      "en": "-11 = (-2)*7 + 3 satisfies 0 <= 3 < 7. Choosing -4 violates the remainder condition.",
      "ar": "المعادلة -11 = (-2)*7 + 3 تحقق الشرط 0 <= 3 < 7، بينما اختيار -4 ينتهك شرط إيجابية الباقي."
    },
    "relatedLessonId": "ch2-l2"
  },
  {
    "id": "basmaga-ch2-06",
    "chapterId": "ch2",
    "topicId": "ch2-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.9",
    "type": "mcq",
    "questionEn": "For any non-zero integer a, what is the value of gcd(a, 0)?",
    "questionAr": "لأي عدد صحيح غير صفري a، ما هي قيمة gcd(a, 0)؟",
    "options": [
      {
        "key": "A",
        "textEn": "|a|",
        "textAr": "|a| (القيمة المطلقة للعدد a)"
      },
      {
        "key": "B",
        "textEn": "0",
        "textAr": "0"
      },
      {
        "key": "C",
        "textEn": "1",
        "textAr": "1"
      },
      {
        "key": "D",
        "textEn": "Undefined",
        "textAr": "غير معرفة"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Axiom of GCD with zero: gcd(a, 0) = |a|, while gcd(0, 0) is undefined.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.9"
    },
    "importantKeywords": [
      {
        "en": "gcd(a, 0)",
        "ar": "القاسم المشترك الأكبر مع الصفر",
        "role": "trigger"
      },
      {
        "en": "Non-zero integer a",
        "ar": "عدد صحيح غير صفري a",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "gcd(a, 0) is always the positive magnitude |a|. Only gcd(0, 0) is undefined.",
      "ar": "قيمة gcd(a, 0) تساوي دائماً القيمة المطلقة الموجبة |a|. فقط gcd(0, 0) غير معرفة.",
      "targetConcept": "GCD with Zero Axiom",
      "targetConceptAr": "خاصية القاسم المشترك الأكبر مع الصفر"
    },
    "quickReasoning": {
      "en": "Every number divides 0, so the largest positive divisor of both a and 0 is |a|.",
      "ar": "بما أن كل الأعداد تقسم الصفر، فإن أكبر قاسم مشترك موجب بين a و 0 هو |a|."
    },
    "relatedLessonId": "ch2-l3"
  },
  {
    "id": "basmaga-ch2-07",
    "chapterId": "ch2",
    "topicId": "ch2-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.10",
    "type": "true-false",
    "questionEn": "Two positive integers a and b can be relatively prime (coprime) even if both are composite numbers.",
    "questionAr": "يمكن لعددين موجبين a و b أن يكونا أوليين نسبياً (coprime) حتى لو كان كلاهما عددين مركبين وغير أوليين.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Relatively prime condition: gcd(a, b) = 1 does not require a or b to be prime individually (e.g. gcd(8, 15) = 1).",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.10"
    },
    "importantKeywords": [
      {
        "en": "Relatively prime (coprime)",
        "ar": "أوليان نسبياً",
        "role": "trigger"
      },
      {
        "en": "Both are composite numbers",
        "ar": "كلاهما عددان مركبان",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Coprime means gcd(a, b) = 1. Numbers themselves do not have to be prime (e.g., 8 and 15 are composite but gcd(8, 15) = 1).",
      "ar": "الأولية النسبية تعني gcd(a, b) = 1 فقط، ولا تشترط أولية الأعداد بذاتها (مثال: 8 و 15 مركبان ولكن gcd(8, 15) = 1).",
      "targetConcept": "Relatively Prime Composites",
      "targetConceptAr": "الأولية النسبية للأعداد المركبة"
    },
    "quickReasoning": {
      "en": "8 = 2^3 and 15 = 3 * 5 share no common factors other than 1, so gcd(8, 15) = 1.",
      "ar": "العددان 8 و 15 مركبان ولكنهما لا يشتركان بأي عامل أولي سوى 1، فيكون gcd(8, 15) = 1."
    },
    "relatedLessonId": "ch2-l3"
  },
  {
    "id": "basmaga-ch2-08",
    "chapterId": "ch2",
    "topicId": "ch2-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.11",
    "type": "mcq",
    "questionEn": "The Euclidean algorithm computes the greatest common divisor gcd(a, b) based on which fundamental recurrence?",
    "questionAr": "تحسب خوارزمية إقليدس القاسم المشترك الأكبر gcd(a, b) بالاعتماد على أي علاقة عودية أساسية؟",
    "options": [
      {
        "key": "A",
        "textEn": "gcd(a, b) = gcd(b, a mod b)",
        "textAr": "gcd(a, b) = gcd(b, a mod b)"
      },
      {
        "key": "B",
        "textEn": "gcd(a, b) = gcd(a - b, a + b)",
        "textAr": "gcd(a, b) = gcd(a - b, a + b)"
      },
      {
        "key": "C",
        "textEn": "gcd(a, b) = a * b / (a mod b)",
        "textAr": "gcd(a, b) = a * b / (a mod b)"
      },
      {
        "key": "D",
        "textEn": "gcd(a, b) = gcd(a, b - 1)",
        "textAr": "gcd(a, b) = gcd(a, b - 1)"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Euclidean theorem: gcd(a, b) = gcd(b, a mod b).",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.11"
    },
    "importantKeywords": [
      {
        "en": "Euclidean algorithm fundamental recurrence",
        "ar": "العلاقة العودية الأساسية لخوارزمية إقليدس",
        "role": "trigger"
      },
      {
        "en": "gcd(b, a mod b)",
        "ar": "gcd(b, a mod b)",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Euclidean reduction step: Replace (a, b) with (b, a mod b) repeatedly.",
      "ar": "خطوة اختزال إقليدس: استبدل الزوج (a, b) بالزوج (b, a mod b) بشكل متكرر.",
      "targetConcept": "Euclidean Reduction Recurrence",
      "targetConceptAr": "علاقة الاختزال في خوارزمية إقليدس"
    },
    "quickReasoning": {
      "en": "Any common divisor of a and b also divides r = a mod b, keeping the GCD invariant.",
      "ar": "أي قاسم مشترك للعددين a و b يقسم أيضاً الباقي r = a mod b، مما يحافظ على قيمة الـ GCD."
    },
    "relatedLessonId": "ch2-l4"
  },
  {
    "id": "basmaga-ch2-09",
    "chapterId": "ch2",
    "topicId": "ch2-t2",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Ch 2 PDF p.12 / Slide 13",
    "type": "mcq",
    "questionEn": "In the division ladder of the Euclidean algorithm, when does the execution terminate and what is the resulting GCD?",
    "questionAr": "في سلسلة قسمات خوارزمية إقليدس، متى يتوقف التنفيذ وما هي قيمة القاسم المشترك الأكبر الناتجة؟",
    "options": [
      {
        "key": "A",
        "textEn": "Stops when remainder is 0; GCD is the last non-zero remainder",
        "textAr": "يتوقف عندما يصبح الباقي 0؛ والـ GCD هو آخر باقٍ غير صفري"
      },
      {
        "key": "B",
        "textEn": "Stops when quotient is 1; GCD is the quotient",
        "textAr": "يتوقف عندما يصبح الناتج 1؛ والـ GCD هو الناتج"
      },
      {
        "key": "C",
        "textEn": "Stops when remainder is 1; GCD is always 1",
        "textAr": "يتوقف عندما يصبح الباقي 1؛ والـ GCD دائماً 1"
      },
      {
        "key": "D",
        "textEn": "Stops after exactly 3 steps",
        "textAr": "يتوقف دائماً بعد 3 خطوات"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Termination condition of Euclidean algorithm: stop at remainder 0; GCD is the previous non-zero remainder.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.12"
    },
    "importantKeywords": [
      {
        "en": "Euclidean ladder termination",
        "ar": "توقف سلسلة قسمات إقليدس",
        "role": "trigger"
      },
      {
        "en": "Last non-zero remainder",
        "ar": "آخر باقٍ غير صفري",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Stop when remainder r_i = 0. The GCD is the remainder immediately above it (the last non-zero remainder).",
      "ar": "توقف عندما يصبح الباقي 0. ويكون القاسم المشترك الأكبر هو الباقي الذي يسبقه مباشرة (آخر باقٍ غير صفري).",
      "targetConcept": "Euclidean Ladder Termination",
      "targetConceptAr": "شرط توقف خوارزمية إقليدس"
    },
    "quickReasoning": {
      "en": "When a mod b = 0, gcd(b, 0) = b, which is the last non-zero remainder of the ladder.",
      "ar": "عندما يصبح a mod b = 0، فإن gcd(b, 0) = b، وهو آخر باقٍ غير صفري في الجدول."
    },
    "relatedLessonId": "ch2-l4"
  },
  {
    "id": "basmaga-ch2-10",
    "chapterId": "ch2",
    "topicId": "ch2-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.15",
    "type": "mcq",
    "questionEn": "Two integers a and b are said to be congruent modulo n (written a = b mod n) if and only if:",
    "questionAr": "يُقال عن عددين صحيحين a و b أنهما متطابقان بمقياس n إذا وفقط إذا كان:",
    "options": [
      {
        "key": "A",
        "textEn": "n divides (a - b)",
        "textAr": "n يقسم الفرق (a - b)"
      },
      {
        "key": "B",
        "textEn": "(a - b) divides n",
        "textAr": "(a - b) يقسم n"
      },
      {
        "key": "C",
        "textEn": "a + b = n",
        "textAr": "a + b = n"
      },
      {
        "key": "D",
        "textEn": "a * b = n",
        "textAr": "a * b = n"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Formal definition of modular congruence: a = b (mod n) iff n | (a - b).",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.15"
    },
    "importantKeywords": [
      {
        "en": "Congruent modulo n",
        "ar": "متطابقان بمقياس n",
        "role": "trigger"
      },
      {
        "en": "n divides (a - b)",
        "ar": "n يقسم (a - b)",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Congruence definition: The modulus n must divide the difference (a - b). (a mod n = b mod n).",
      "ar": "تعريف التطابق المعياري: المقياس n يجب أن يقسم الفرق (a - b).",
      "targetConcept": "Modular Congruence Definition",
      "targetConceptAr": "تعريف التطابق المعياري"
    },
    "quickReasoning": {
      "en": "a = b mod n means a and b have the same remainder upon division by n, so (a - b) is a multiple of n.",
      "ar": "التطابق يعني تماثل باقي قسمة a و b على n، مما يجعل الفرق بينهما مضاعفاً يقبل القسمة على n."
    },
    "relatedLessonId": "ch2-l5"
  },
  {
    "id": "basmaga-ch2-11",
    "chapterId": "ch2",
    "topicId": "ch2-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.16",
    "type": "true-false",
    "questionEn": "Modular arithmetic operations (addition, subtraction, multiplication) satisfy the commutative, associative, and distributive algebraic properties.",
    "questionAr": "تحقق عمليات الحساب المعياري (الجمع، الطرح، الضرب) الخصائص الجبرية التبديلية والتجميعية والتوزيعية.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Preservation of ordinary arithmetic ring properties under modular arithmetic.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.16"
    },
    "importantKeywords": [
      {
        "en": "Modular arithmetic operations",
        "ar": "عمليات الحساب المعياري",
        "role": "trigger"
      },
      {
        "en": "Commutative, associative, and distributive",
        "ar": "تبديلية وتجميعية وتوزيعية",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Modular arithmetic behaves like ordinary arithmetic: Commutative, Associative, Distributive laws all hold.",
      "ar": "يتصرف الحساب المعياري كالحساب العادي: الخصائص التبديلية والتجميعية والتوزيعية محققة بالكامل.",
      "targetConcept": "Modular Algebraic Laws",
      "targetConceptAr": "الخصائص الجبرية للحساب المعياري"
    },
    "quickReasoning": {
      "en": "The integers modulo n form a commutative ring, preserving these algebraic properties.",
      "ar": "تشكل الأعداد بمقياس n حلقة تبديلية، مما يحافظ على صحة هذه الخصائص الجبرية."
    },
    "relatedLessonId": "ch2-l5"
  },
  {
    "id": "basmaga-ch2-12",
    "chapterId": "ch2",
    "topicId": "ch2-t3",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Ch 2 PDF p.17 / Slide 18",
    "type": "mcq",
    "questionEn": "What does the intermediate modular reduction property (a * b) mod n = [(a mod n) * (b mod n)] mod n allow cryptographers to do during massive exponentiation calculations?",
    "questionAr": "ما الذي تتيحه خاصية الاختزال المعياري الوسيط أثناء حساب الأسس الضخمة في التشفير؟",
    "options": [
      {
        "key": "A",
        "textEn": "Reduce intermediate results modulo n at each step, preventing huge numbers",
        "textAr": "اختزال النتائج الوسيطة بالمقياس n عند كل خطوة، مما يمنع تضخم الأرقام"
      },
      {
        "key": "B",
        "textEn": "Eliminate the need for prime numbers entirely",
        "textAr": "إلغاء الحاجة للأعداد الأولية تماماً"
      },
      {
        "key": "C",
        "textEn": "Decrypt ciphertext without a private key",
        "textAr": "فك التشفير دون الحاجة لمفتاح خاص"
      },
      {
        "key": "D",
        "textEn": "Convert asymmetric ciphers into block ciphers",
        "textAr": "تحويل التشفير غير المتماثل إلى شفرات كتل"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Practical computational utility of intermediate modular reduction in preventing integer overflow.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.17"
    },
    "importantKeywords": [
      {
        "en": "Intermediate modular reduction",
        "ar": "الاختزال المعياري الوسيط",
        "role": "trigger"
      },
      {
        "en": "Prevent huge numbers / overflow",
        "ar": "منع تضخم الأرقام وتجاوز الذاكرة",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Intermediate reduction allows computing modulo n after every single multiplication step to keep values under n.",
      "ar": "يتيح الاختزال المعياري الوسيط تطبيق mod n عقب كل ضربة جزئية للحفاظ على الأرقام صغيرة ومضبوطة.",
      "targetConcept": "Intermediate Reduction Utility",
      "targetConceptAr": "فائدة الاختزال المعياري الوسيط"
    },
    "quickReasoning": {
      "en": "Reducing at each step bounds numbers strictly below n, enabling fast modular exponentiation.",
      "ar": "اختزال الأعداد عند كل خطوة يبقيها محصورة تحت n، مما يتيح رفع الأسس بسرعة وكفاءة حاسوبية."
    },
    "relatedLessonId": "ch2-l5"
  },
  {
    "id": "basmaga-ch2-13",
    "chapterId": "ch2",
    "topicId": "ch2-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Table 2.2",
    "type": "mcq",
    "questionEn": "What is the unique additive inverse of 6 in the residue group Z8 (modulo 8 arithmetic)?",
    "questionAr": "ما هو المعكوس الجمعي الفريد للعدد 6 في مجموعة البواقي Z8 (الحساب بمقياس 8)؟",
    "options": [
      {
        "key": "A",
        "textEn": "2 (since (6 + 2) mod 8 = 0)",
        "textAr": "2 (لأن (6 + 2) mod 8 = 0)"
      },
      {
        "key": "B",
        "textEn": "6",
        "textAr": "6"
      },
      {
        "key": "C",
        "textEn": "-6",
        "textAr": "-6"
      },
      {
        "key": "D",
        "textEn": "Does not exist",
        "textAr": "غير موجود"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Additive inverse definition in Zn: -w = (n - w) mod n; 8 - 6 = 2.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.19"
    },
    "importantKeywords": [
      {
        "en": "Additive inverse in Z8",
        "ar": "المعكوس الجمعي في Z8",
        "role": "trigger"
      },
      {
        "en": "Inverse of 6 is 2",
        "ar": "معكوس 6 هو 2",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Additive inverse in Zn is always n - w: In Z8, the inverse of 6 is 8 - 6 = 2. Sum must equal 0 mod n.",
      "ar": "المعكوس الجمعي في Zn هو دائماً n - w: في Z8، معكوس 6 هو 8 - 6 = 2، بحيث يكون المجموع 0.",
      "targetConcept": "Additive Inverse in Zn",
      "targetConceptAr": "المعكوس الجمعي في Zn"
    },
    "quickReasoning": {
      "en": "(6 + 2) mod 8 = 8 mod 8 = 0, satisfying the additive identity.",
      "ar": "(6 + 2) mod 8 = 8 mod 8 = 0، وهو المحايد الجمعي."
    },
    "relatedLessonId": "ch2-l6"
  },
  {
    "id": "basmaga-ch2-14",
    "chapterId": "ch2",
    "topicId": "ch2-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.20",
    "type": "mcq",
    "questionEn": "A modular multiplicative inverse b^(-1) modulo n exists if and only if:",
    "questionAr": "يوجد المعكوس الضربي المعياري b^(-1) بمقياس n إذا وفقط إذا كان:",
    "options": [
      {
        "key": "A",
        "textEn": "gcd(b, n) = 1 (b and n are relatively prime)",
        "textAr": "gcd(b, n) = 1 (العددان أوليان نسبياً)"
      },
      {
        "key": "B",
        "textEn": "b is a prime number",
        "textAr": "b عدداً أولياً"
      },
      {
        "key": "C",
        "textEn": "b is smaller than n/2",
        "textAr": "b أصغر من n/2"
      },
      {
        "key": "D",
        "textEn": "n is a multiple of b",
        "textAr": "n مضاعفاً لـ b"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Invertibility condition in modular arithmetic: multiplicative inverse exists iff gcd(b, n) = 1.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.20"
    },
    "importantKeywords": [
      {
        "en": "Multiplicative inverse b^(-1) modulo n",
        "ar": "المعكوس الضربي بمقياس n",
        "role": "trigger"
      },
      {
        "en": "gcd(b, n) = 1",
        "ar": "gcd(b, n) = 1",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Multiplicative inverse exists IF AND ONLY IF gcd(number, modulus) = 1.",
      "ar": "المعكوس الضربي يوجد إذا وفقط إذا كان القاسم المشترك بين العدد والمقياس يساوي 1: gcd(b, n) = 1.",
      "targetConcept": "Multiplicative Invertibility Criterion",
      "targetConceptAr": "معيار وجود المعكوس الضربي"
    },
    "quickReasoning": {
      "en": "Bézout's identity bx + ny = 1 holds if and only if gcd(b, n) = 1, yielding bx = 1 mod n.",
      "ar": "متطابقة بيزو bx + ny = 1 تتحقق حصرياً إذا كان gcd(b, n) = 1، مما يعطي bx = 1 mod n."
    },
    "relatedLessonId": "ch2-l6"
  },
  {
    "id": "basmaga-ch2-15",
    "chapterId": "ch2",
    "topicId": "ch2-t3",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Table 2.2 / Ch 2 PDF p.21",
    "type": "mcq",
    "questionEn": "Based on Stallings Table 2.2 (Multiplication Modulo 8), which subset of elements in Z8 possesses a multiplicative inverse?",
    "questionAr": "استناداً إلى جدول ستالينجز 2.2 (الضرب بمقياس 8)، أي مجموعة جزئية من عناصر Z8 تمتلك معكوساً ضربياً؟",
    "options": [
      {
        "key": "A",
        "textEn": "{1, 3, 5, 7} (the odd elements coprime to 8)",
        "textAr": "{1, 3, 5, 7} (العناصر الفردية الأولية نسبياً مع 8)"
      },
      {
        "key": "B",
        "textEn": "{0, 2, 4, 6} (the even elements)",
        "textAr": "{0, 2, 4, 6} (العناصر الزوجية)"
      },
      {
        "key": "C",
        "textEn": "All non-zero elements {1, 2, 3, 4, 5, 6, 7}",
        "textAr": "كافة العناصر غير الصفرية"
      },
      {
        "key": "D",
        "textEn": "Only element 1",
        "textAr": "العنصر 1 فقط"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Invertible elements in Z8 are exactly the reduced residue system coprime to 8: {1, 3, 5, 7}.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.21"
    },
    "importantKeywords": [
      {
        "en": "Multiplication Modulo 8 (Table 2.2)",
        "ar": "جدول الضرب بمقياس 8",
        "role": "trigger"
      },
      {
        "en": "Possesses a multiplicative inverse in Z8",
        "ar": "يمتلك معكوساً ضربياً في Z8",
        "role": "condition"
      },
      {
        "en": "{1, 3, 5, 7}",
        "ar": "{1, 3, 5, 7}",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "In Z8, only elements coprime to 8 ({1, 3, 5, 7}) have inverses (each is its own inverse: w * w = 1 mod 8).",
      "ar": "في Z8، فقط العناصر الفردية الأولية مع 8 ({1, 3, 5, 7}) تملك معكوساً (وكل منها معكوس لنفسه).",
      "targetConcept": "Z8 Multiplicative Inverses (Table 2.2)",
      "targetConceptAr": "المعكوسات الضربية في Z8"
    },
    "quickReasoning": {
      "en": "1*1=1, 3*3=9=1, 5*5=25=1, 7*7=49=1 mod 8. Even numbers share factor 2 with 8 and have no inverse.",
      "ar": "مربعات 1، 3، 5، 7 كلها تعطي 1 mod 8، بينما الأعداد الزوجية تشترك في العامل 2 مع 8 ولا تملك معكوساً."
    },
    "relatedLessonId": "ch2-l6"
  },
  {
    "id": "basmaga-ch2-16",
    "chapterId": "ch2",
    "topicId": "ch2-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.21",
    "type": "true-false",
    "questionEn": "In modular arithmetic modulo 8, the even element 4 has a multiplicative inverse because 4 * 2 = 8 = 0.",
    "questionAr": "في الحساب بمقياس 8، يمتلك العنصر الزوجي 4 معكوساً ضربياً لأن 4 * 2 = 8 = 0.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "B",
    "academicPoint": "Even elements in Z8 are zero-divisors and cannot have multiplicative inverses.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.21"
    },
    "importantKeywords": [
      {
        "en": "Even element 4 has multiplicative inverse in Z8",
        "ar": "العنصر الزوجي 4 له معكوس ضربي في Z8",
        "role": "trigger"
      },
      {
        "en": "False (gcd(4, 8) = 4 != 1)",
        "ar": "خطأ (gcd(4, 8) = 4 != 1)",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Multiplicative inverse requires result 1 mod n, not 0! If product equals 0, they are zero divisors, having NO inverse.",
      "ar": "المعكوس الضربي يجب أن يعطي 1 وليس 0! إذا كان الناتج 0 فهما قواسم صفرية ولا يوجد لهما معكوس.",
      "targetConcept": "Zero Divisors vs Multiplicative Inverses",
      "targetConceptAr": "القواسم الصفرية وغياب المعكوس"
    },
    "quickReasoning": {
      "en": "Multiplicative inverse requires 4 * x = 1 mod 8. Since gcd(4, 8) = 4 != 1, no inverse exists.",
      "ar": "المعكوس يتطلب 4 * x = 1 mod 8. وبما أن gcd(4, 8) = 4 != 1، فمن المستحيل وجود معكوس."
    },
    "relatedLessonId": "ch2-l6"
  },
  {
    "id": "basmaga-ch2-17",
    "chapterId": "ch2",
    "topicId": "ch2-t4",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.24",
    "type": "mcq",
    "questionEn": "Bézout's identity guarantees that for any integers a and b, there exist integers x and y such that:",
    "questionAr": "تضمن متطابقة بيزو (Bézout's identity) أنه لأي عددين صحيحين a و b، يوجد عددان صحيحان x و y بحيث:",
    "options": [
      {
        "key": "A",
        "textEn": "ax + by = gcd(a, b)",
        "textAr": "ax + by = gcd(a, b)"
      },
      {
        "key": "B",
        "textEn": "ax - by = 0",
        "textAr": "ax - by = 0"
      },
      {
        "key": "C",
        "textEn": "a / x = b / y",
        "textAr": "a / x = b / y"
      },
      {
        "key": "D",
        "textEn": "ax + by = a * b",
        "textAr": "ax + by = a * b"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Bézout's Identity: gcd(a, b) expressed as integer linear combination ax + by.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.24"
    },
    "importantKeywords": [
      {
        "en": "Bézout's identity",
        "ar": "متطابقة بيزو",
        "role": "trigger"
      },
      {
        "en": "ax + by = gcd(a, b)",
        "ar": "ax + by = gcd(a, b)",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Bézout's identity expresses GCD as a linear combination: ax + by = gcd(a, b).",
      "ar": "متطابقة بيزو تعبر عن الـ GCD كتركيبة خطية صحيحة: ax + by = gcd(a, b).",
      "targetConcept": "Bézout's Identity",
      "targetConceptAr": "متطابقة بيزو"
    },
    "quickReasoning": {
      "en": "The Extended Euclidean Algorithm calculates the exact coefficients x and y.",
      "ar": "خوارزمية إقليدس الممتدة تحسب المعاملين x و y بدقة لتحقيق هذه المتطابقة."
    },
    "relatedLessonId": "ch2-l7"
  },
  {
    "id": "basmaga-ch2-18",
    "chapterId": "ch2",
    "topicId": "ch2-t4",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Ch 2 PDF p.25 / Slide 26",
    "type": "mcq",
    "questionEn": "When applying the Extended Euclidean Algorithm to compute a^(-1) mod n (where gcd(a, n) = 1), what does the resulting coefficient x in ax + ny = 1 represent?",
    "questionAr": "عند تطبيق خوارزمية إقليدس الممتدة لحساب a^(-1) mod n (حيث gcd(a, n) = 1)، ماذا يمثل المعامل الناتج x في المعادلة ax + ny = 1؟",
    "options": [
      {
        "key": "A",
        "textEn": "The modular multiplicative inverse a^(-1) mod n",
        "textAr": "المعكوس الضربي المعياري a^(-1) mod n"
      },
      {
        "key": "B",
        "textEn": "The greatest common divisor of a and n",
        "textAr": "القاسم المشترك الأكبر لـ a و n"
      },
      {
        "key": "C",
        "textEn": "The quotient of n divided by a",
        "textAr": "ناتج قسمة n على a"
      },
      {
        "key": "D",
        "textEn": "The remainder of a divided by n",
        "textAr": "باقي قسمة a على n"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Extended Euclidean Algorithm mapping: ax + ny = 1 implies ax = 1 mod n, so a^(-1) = x mod n.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.25"
    },
    "importantKeywords": [
      {
        "en": "Extended Euclidean Algorithm for a^(-1) mod n",
        "ar": "خوارزمية إقليدس الممتدة لحساب المعكوس",
        "role": "trigger"
      },
      {
        "en": "Coefficient x in ax + ny = 1",
        "ar": "المعامل x في ax + ny = 1",
        "role": "condition"
      },
      {
        "en": "Multiplicative inverse",
        "ar": "المعكوس الضربي",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "In ax + ny = 1, taking mod n eliminates ny (ny = 0 mod n), leaving ax = 1 mod n. Thus x IS the inverse!",
      "ar": "في ax + ny = 1، بأخذ mod n يختفي الحد ny، فيتبقى ax = 1 mod n. إذاً x هو المعكوس الضربي المطلوب!",
      "targetConcept": "Extended Euclidean Modular Inverse",
      "targetConceptAr": "حساب المعكوس بخوارزمية إقليدس الممتدة"
    },
    "quickReasoning": {
      "en": "Modulo n, ny vanishes to 0, which makes ax congruent to 1, proving x is the modular inverse.",
      "ar": "بمقياس n، ينعدم ny ليصبح صفراً، فتتحول المعادلة إلى ax = 1 mod n، مما يثبت أن x هو المعكوس."
    },
    "relatedLessonId": "ch2-l7"
  },
  {
    "id": "basmaga-ch2-19",
    "chapterId": "ch2",
    "topicId": "ch2-t5",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.28",
    "type": "mcq",
    "questionEn": "By official mathematical definition, an integer p is prime if:",
    "questionAr": "وفق التعريف الرياضي المعتمد، يُعد العدد الصحيح p أولياً إذا كان:",
    "options": [
      {
        "key": "A",
        "textEn": "p > 1 and its only positive divisors are 1 and p",
        "textAr": "p > 1 وقواسمه الموجبة الوحيدة هي 1 و p فقط"
      },
      {
        "key": "B",
        "textEn": "p >= 1 and it cannot be divided by 2",
        "textAr": "p >= 1 ولا يقبل القسمة على 2"
      },
      {
        "key": "C",
        "textEn": "p is an odd integer",
        "textAr": "p عدداً فردياً"
      },
      {
        "key": "D",
        "textEn": "p can be factored into two smaller positive integers",
        "textAr": "p يمكن تحليله إلى حاصل ضرب عددين موجبين أصغر منه"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Definition of Prime Numbers: integer p > 1 whose only divisors are 1 and p (1 is NOT prime).",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.28"
    },
    "importantKeywords": [
      {
        "en": "Integer p is prime",
        "ar": "العدد الصحيح p أولي",
        "role": "trigger"
      },
      {
        "en": "p > 1",
        "ar": "p أكبر تماماً من 1",
        "role": "condition"
      },
      {
        "en": "Only positive divisors are 1 and p",
        "ar": "قواسمه الموجبة هي 1 ونفسه فقط",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Prime condition requires p > 1 (the number 1 is NEITHER prime nor composite).",
      "ar": "شرط العدد الأولي يفرض أن يكون p > 1 (العدد 1 ليس أولياً ولا مركباً).",
      "targetConcept": "Prime Number Definition",
      "targetConceptAr": "تعريف العدد الأولي"
    },
    "quickReasoning": {
      "en": "Primes must be strictly greater than 1, with no factors other than 1 and themselves.",
      "ar": "الأعداد الأولية أكبر تماماً من 1 ولا تقبل القسمة إلا على 1 ونفسها فقط."
    },
    "relatedLessonId": "ch2-l10"
  },
  {
    "id": "basmaga-ch2-20",
    "chapterId": "ch2",
    "topicId": "ch2-t5",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.30",
    "type": "mcq",
    "questionEn": "If p is a prime number and a is a positive integer not divisible by p (gcd(a, p) = 1), Fermat's Little Theorem states that:",
    "questionAr": "إذا كان p عدداً أولياً وكان a عدداً صحيحاً موجباً لا يقبل القسمة على p، فإن مبرهنة فيرما الصغرى تنص على أن:",
    "options": [
      {
        "key": "A",
        "textEn": "a^(p-1) = 1 mod p",
        "textAr": "a^(p-1) = 1 mod p"
      },
      {
        "key": "B",
        "textEn": "a^p = 1 mod p",
        "textAr": "a^p = 1 mod p"
      },
      {
        "key": "C",
        "textEn": "a^(p+1) = 1 mod p",
        "textAr": "a^(p+1) = 1 mod p"
      },
      {
        "key": "D",
        "textEn": "(p-1)^a = 1 mod p",
        "textAr": "(p-1)^a = 1 mod p"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Fermat's Little Theorem (Form 1): a^(p-1) = 1 (mod p) when gcd(a, p) = 1.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.30"
    },
    "importantKeywords": [
      {
        "en": "Fermat's Little Theorem",
        "ar": "مبرهنة فيرما الصغرى",
        "role": "trigger"
      },
      {
        "en": "p is prime and gcd(a, p) = 1",
        "ar": "p أولي و gcd(a, p) = 1",
        "role": "condition"
      },
      {
        "en": "a^(p-1) = 1 mod p",
        "ar": "a^(p-1) = 1 mod p",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Fermat Form 1: Exponent is p - 1, result is 1 mod p. Condition: a not divisible by p.",
      "ar": "صيغة فيرما الأولى: الأس هو p - 1 والناتج 1 mod p. الشرط: a لا يقبل القسمة على p.",
      "targetConcept": "Fermat's Little Theorem (Form 1)",
      "targetConceptAr": "مبرهنة فيرما الصغرى (الصيغة الأولى)"
    },
    "quickReasoning": {
      "en": "Multiplying residue set by a permutes the residues, yielding a^(p-1) = 1 mod p.",
      "ar": "ضرب عناصر بواقي p في a يعيد ترتيبها ذاتها، وبإلغاء المضروب ينتج a^(p-1) = 1 mod p."
    },
    "relatedLessonId": "ch2-l10"
  },
  {
    "id": "basmaga-ch2-21",
    "chapterId": "ch2",
    "topicId": "ch2-t5",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Ch 2 PDF p.31 / Slide 32",
    "type": "mcq",
    "questionEn": "The alternative formulation of Fermat's Little Theorem that holds for ALL integers a without requiring gcd(a, p) = 1 is:",
    "questionAr": "الصيغة البديلة لمبرهنة فيرما الصغرى الصالحة لجميع الأعداد الصحيحة a دون اشتراط كون gcd(a, p) = 1 هي:",
    "options": [
      {
        "key": "A",
        "textEn": "a^p = a mod p",
        "textAr": "a^p = a mod p"
      },
      {
        "key": "B",
        "textEn": "a^(p-1) = a mod p",
        "textAr": "a^(p-1) = a mod p"
      },
      {
        "key": "C",
        "textEn": "p^a = a mod p",
        "textAr": "p^a = a mod p"
      },
      {
        "key": "D",
        "textEn": "a^p = 1 mod p",
        "textAr": "a^p = 1 mod p"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Fermat's Little Theorem (Form 2): a^p = a (mod p) holds unconditionally for prime p.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.31"
    },
    "importantKeywords": [
      {
        "en": "Alternative formulation of Fermat",
        "ar": "الصيغة البديلة لمبرهنة فيرما",
        "role": "trigger"
      },
      {
        "en": "Holds for all integers a",
        "ar": "صالحة لكافة الأعداد a",
        "role": "condition"
      },
      {
        "en": "a^p = a mod p",
        "ar": "a^p = a mod p",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Fermat Form 2: Exponent is p, result is a mod p. Valid for ALL integers (even multiples of p, since 0^p = 0).",
      "ar": "صيغة فيرما الثانية: الأس هو p والناتج a mod p. صالحة دائماً لكل الأعداد (حتى مضاعفات p لأن 0^p = 0).",
      "targetConcept": "Fermat's Little Theorem (Form 2)",
      "targetConceptAr": "مبرهنة فيرما الصغرى (الصيغة الشاملة)"
    },
    "quickReasoning": {
      "en": "Multiplying both sides of a^(p-1) = 1 by a yields a^p = a mod p, which trivially holds for a = 0 as well.",
      "ar": "بضرب طرفي الصيغة الأولى في a ينتج a^p = a mod p، وهي صحيحة حتى إذا كان a يقبل القسمة على p."
    },
    "relatedLessonId": "ch2-l10"
  },
  {
    "id": "basmaga-ch2-22",
    "chapterId": "ch2",
    "topicId": "ch2-t5",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Example: Ch 2 PDF p.32 / Slide 33",
    "type": "mcq",
    "questionEn": "Under Fermat's Little Theorem, computing 3^201 mod 11 simplifies the exponent 201 by taking 201 mod (11 - 1) = 201 mod 10 = 1, resulting in:",
    "questionAr": "وفق مبرهنة فيرما الصغرى، اختزال حساب 3^201 بمقياس 11 يتم بحساب الأس 201 mod 10 = 1، مما يعطي:",
    "options": [
      {
        "key": "A",
        "textEn": "3^1 mod 11 = 3",
        "textAr": "3^1 mod 11 = 3"
      },
      {
        "key": "B",
        "textEn": "3^0 mod 11 = 1",
        "textAr": "3^0 mod 11 = 1"
      },
      {
        "key": "C",
        "textEn": "9",
        "textAr": "9"
      },
      {
        "key": "D",
        "textEn": "10",
        "textAr": "10"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Exponent reduction under Fermat: a^k mod p = a^(k mod (p-1)) mod p.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.32"
    },
    "importantKeywords": [
      {
        "en": "3^201 mod 11",
        "ar": "3^201 بمقياس 11",
        "role": "trigger"
      },
      {
        "en": "Exponent reduction modulo (p - 1)",
        "ar": "اختزال الأس بمقياس (p - 1)",
        "role": "condition"
      },
      {
        "en": "Result is 3",
        "ar": "الناتج هو 3",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Exponent reduction rule: Modulo prime p, reduce exponent modulo (p - 1): 201 mod 10 = 1 -> 3^1 = 3.",
      "ar": "قاعدة اختزال الأس: بمقياس عدد أولي p، يُختزل الأس بمقياس (p - 1): 201 mod 10 = 1، فيكون 3^1 = 3.",
      "targetConcept": "Fermat Exponent Reduction",
      "targetConceptAr": "اختزال الأسس بمبرهنة فيرما"
    },
    "quickReasoning": {
      "en": "3^201 = (3^10)^20 * 3^1 = (1)^20 * 3 = 3 mod 11.",
      "ar": "3^201 = (3^10)^20 * 3^1 = (1)^20 * 3 = 3 بمقياس 11."
    },
    "relatedLessonId": "ch2-l10"
  },
  {
    "id": "basmaga-ch2-23",
    "chapterId": "ch2",
    "topicId": "ch2-t5",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.34",
    "type": "mcq",
    "questionEn": "What does Euler's totient function phi(n) count for a positive integer n?",
    "questionAr": "ما الذي تحسبه دالة أويلر المؤشرة phi(n) لعدد صحيح موجب n؟",
    "options": [
      {
        "key": "A",
        "textEn": "The number of positive integers less than n that are relatively prime to n",
        "textAr": "عدد الأعداد الصحيحة الموجبة الأصغر من n والأولية نسبياً معه"
      },
      {
        "key": "B",
        "textEn": "The count of all prime numbers less than n",
        "textAr": "عدد كافة الأعداد الأولية الأصغر من n"
      },
      {
        "key": "C",
        "textEn": "The sum of all divisors of n",
        "textAr": "مجموع كافة قواسم العدد n"
      },
      {
        "key": "D",
        "textEn": "The total number of even numbers up to n",
        "textAr": "العدد الإجمالي للأعداد الزوجية حتى n"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Definition of Euler's totient function phi(n).",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.34"
    },
    "importantKeywords": [
      {
        "en": "Euler's totient function phi(n)",
        "ar": "دالة أويلر المؤشرة phi(n)",
        "role": "trigger"
      },
      {
        "en": "Integers less than n relatively prime to n",
        "ar": "أعداد أصغر من n وأولية نسبياً معه",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "phi(n) = Count of numbers k in [1, n-1] with gcd(k, n) = 1.",
      "ar": "phi(n) = عدد الأعداد k في المجال [1, n-1] التي تحقق gcd(k, n) = 1.",
      "targetConcept": "Euler Totient Function Definition",
      "targetConceptAr": "تعريف دالة أويلر المؤشرة"
    },
    "quickReasoning": {
      "en": "By definition, phi(n) measures the size of the multiplicative group modulo n.",
      "ar": "بحسب التعريف، تقيس phi(n) عدد العناصر التي تمتلك معكوساً ضربياً بمقياس n."
    },
    "relatedLessonId": "ch2-l10"
  },
  {
    "id": "basmaga-ch2-24",
    "chapterId": "ch2",
    "topicId": "ch2-t5",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.35",
    "type": "mcq",
    "questionEn": "For any prime number p, what is the value of Euler's totient function phi(p)?",
    "questionAr": "لأي عدد أولي p، ما هي قيمة دالة أويلر المؤشرة phi(p)؟",
    "options": [
      {
        "key": "A",
        "textEn": "p - 1",
        "textAr": "p - 1"
      },
      {
        "key": "B",
        "textEn": "p",
        "textAr": "p"
      },
      {
        "key": "C",
        "textEn": "p + 1",
        "textAr": "p + 1"
      },
      {
        "key": "D",
        "textEn": "p / 2",
        "textAr": "p / 2"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Totient formula for prime p: phi(p) = p - 1.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.35"
    },
    "importantKeywords": [
      {
        "en": "phi(p) for prime p",
        "ar": "قيمة phi(p) لعدد أولي",
        "role": "trigger"
      },
      {
        "en": "p - 1",
        "ar": "p - 1",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "For prime p, every number from 1 to p-1 is coprime to p, so phi(p) = p - 1.",
      "ar": "لأي عدد أولي p، كافة الأعداد من 1 إلى p-1 أولية معه، فيكون phi(p) = p - 1.",
      "targetConcept": "Totient of Prime",
      "targetConceptAr": "مؤشر أويلر للأعداد الأولية"
    },
    "quickReasoning": {
      "en": "A prime shares no factors with any number less than itself, so all p - 1 integers qualify.",
      "ar": "العدد الأولي لا يشترك في أي قاسم مع أي عدد أصغر منه، فجميع الأعداد الـ p - 1 أولية معه."
    },
    "relatedLessonId": "ch2-l10"
  },
  {
    "id": "basmaga-ch2-25",
    "chapterId": "ch2",
    "topicId": "ch2-t5",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.35",
    "type": "mcq",
    "questionEn": "If p and q are two distinct prime numbers, what is the value of phi(p * q)?",
    "questionAr": "إذا كان p و q عددين أوليين مختلفين، فما هي قيمة phi(p * q)؟",
    "options": [
      {
        "key": "A",
        "textEn": "(p - 1) * (q - 1)",
        "textAr": "(p - 1) * (q - 1)"
      },
      {
        "key": "B",
        "textEn": "(p - 1) + (q - 1)",
        "textAr": "(p - 1) + (q - 1)"
      },
      {
        "key": "C",
        "textEn": "p * q - 1",
        "textAr": "p * q - 1"
      },
      {
        "key": "D",
        "textEn": "phi(p) + phi(q)",
        "textAr": "phi(p) + phi(q)"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Multiplicative property of Euler's totient function for product of distinct primes.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.35"
    },
    "importantKeywords": [
      {
        "en": "Distinct primes p and q",
        "ar": "عددان أوليان مختلفان p و q",
        "role": "condition"
      },
      {
        "en": "phi(pq) = (p - 1)(q - 1)",
        "ar": "phi(pq) = (p - 1)(q - 1)",
        "role": "trigger"
      }
    ],
    "basmagaRule": {
      "en": "Euler Totient product formula: For distinct primes, phi(pq) = phi(p) * phi(q) = (p - 1)(q - 1). Core of RSA!",
      "ar": "قاعدة ضرب مؤشر أويلر: للأعداد الأولية المختلفة، phi(pq) = (p - 1)(q - 1). وهي أساس خوارزمية RSA!",
      "targetConcept": "Totient Product of Primes",
      "targetConceptAr": "مؤشر أويلر لحاصل ضرب عددين أوليين"
    },
    "quickReasoning": {
      "en": "Since gcd(p, q) = 1, phi is strictly multiplicative: phi(pq) = (p-1)(q-1).",
      "ar": "نظراً لكون gcd(p, q) = 1، فإن دالة أويلر ضربية: phi(pq) = (p-1)(q-1)."
    },
    "relatedLessonId": "ch2-l10"
  },
  {
    "id": "basmaga-ch2-26",
    "chapterId": "ch2",
    "topicId": "ch2-t5",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Example: Ch 2 PDF p.36 / Slide 37",
    "type": "mcq",
    "questionEn": "What is the value of Euler's totient function for the English alphabet size n = 26, where 26 = 2 * 13?",
    "questionAr": "ما هي قيمة دالة أويلر لحجم الأبجدية الإنجليزية n = 26، حيث 26 = 2 * 13؟",
    "options": [
      {
        "key": "A",
        "textEn": "phi(26) = (2 - 1) * (13 - 1) = 1 * 12 = 12",
        "textAr": "phi(26) = (2 - 1) * (13 - 1) = 1 * 12 = 12"
      },
      {
        "key": "B",
        "textEn": "phi(26) = 25",
        "textAr": "phi(26) = 25"
      },
      {
        "key": "C",
        "textEn": "phi(26) = 13",
        "textAr": "phi(26) = 13"
      },
      {
        "key": "D",
        "textEn": "phi(26) = 24",
        "textAr": "phi(26) = 24"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Calculation of phi(26) = phi(2) * phi(13) = 12; foundational to Hill/Affine cipher invertibility.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.36"
    },
    "importantKeywords": [
      {
        "en": "phi(26)",
        "ar": "قيمة phi(26)",
        "role": "trigger"
      },
      {
        "en": "26 = 2 * 13",
        "ar": "26 = 2 * 13",
        "role": "condition"
      },
      {
        "en": "phi(26) = 12",
        "ar": "الناتج 12",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "phi(26) = (2 - 1) * (13 - 1) = 12. Exactly 12 integers in 1..26 are coprime to 26.",
      "ar": "phi(26) = (2 - 1) * (13 - 1) = 12. يوجد بالضبط 12 عدداً أولياً نسبياً مع 26 في الأبجدية.",
      "targetConcept": "Totient of 26 Calculation",
      "targetConceptAr": "حساب مؤشر أويلر للعدد 26"
    },
    "quickReasoning": {
      "en": "Factoring 26 into primes 2 and 13 gives phi(26) = 1 * 12 = 12.",
      "ar": "بتحليل 26 لعواملها الأولية 2 و 13 ينتج phi(26) = (2-1)*(13-1) = 12."
    },
    "relatedLessonId": "ch2-l10"
  },
  {
    "id": "basmaga-ch2-27",
    "chapterId": "ch2",
    "topicId": "ch2-t5",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Ch 2 PDF p.37 / Slide 38",
    "type": "mcq",
    "questionEn": "Euler's Theorem states that for every pair of relatively prime integers a and n (gcd(a, n) = 1):",
    "questionAr": "تنص مبرهنة أويلر على أنه لأي عددين أوليين نسبياً a و n (أي gcd(a, n) = 1):",
    "options": [
      {
        "key": "A",
        "textEn": "a^phi(n) = 1 mod n",
        "textAr": "a^phi(n) = 1 mod n"
      },
      {
        "key": "B",
        "textEn": "a^n = 1 mod phi(n)",
        "textAr": "a^n = 1 mod phi(n)"
      },
      {
        "key": "C",
        "textEn": "a^(n-1) = 1 mod n",
        "textAr": "a^(n-1) = 1 mod n"
      },
      {
        "key": "D",
        "textEn": "phi(a^n) = 1",
        "textAr": "phi(a^n) = 1"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Euler's Theorem: generalisation of Fermat's Little Theorem for composite moduli n.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.37"
    },
    "importantKeywords": [
      {
        "en": "Euler's Theorem",
        "ar": "مبرهنة أويلر",
        "role": "trigger"
      },
      {
        "en": "gcd(a, n) = 1",
        "ar": "gcd(a, n) = 1",
        "role": "condition"
      },
      {
        "en": "a^phi(n) = 1 mod n",
        "ar": "a^phi(n) = 1 mod n",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Euler's Theorem: a^phi(n) = 1 mod n. (If n is prime, phi(n) = n - 1, matching Fermat!).",
      "ar": "مبرهنة أويلر: a^phi(n) = 1 mod n. (إذا كان n أولياً فإن phi(n) = n - 1 وهي مبرهنة فيرما!).",
      "targetConcept": "Euler's Theorem",
      "targetConceptAr": "مبرهنة أويلر العامة"
    },
    "quickReasoning": {
      "en": "Euler's theorem extends Fermat's theorem to all moduli n, prime or composite, as long as gcd(a, n) = 1.",
      "ar": "تعمم مبرهنة أويلر نظرية فيرما على أي مقياس n مركباً كان أو أولياً، بشرط كونه أولياً نسبياً مع a."
    },
    "relatedLessonId": "ch2-l10"
  },
  {
    "id": "basmaga-ch2-28",
    "chapterId": "ch2",
    "topicId": "ch2-t6",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Ch 2 PDF p.40 / Slide 41",
    "type": "mcq",
    "questionEn": "The Miller-Rabin algorithm is categorized as which type of primality test?",
    "questionAr": "تُصنف خوارزمية ميلر-رابين على أنها أي نوع من اختبارات الأولية؟",
    "options": [
      {
        "key": "A",
        "textEn": "Probabilistic primality test",
        "textAr": "اختبار أولية احتمالي (Probabilistic)"
      },
      {
        "key": "B",
        "textEn": "Deterministic primality test",
        "textAr": "اختبار أولية قطعي وحتمي (Deterministic)"
      },
      {
        "key": "C",
        "textEn": "Exact prime factorization algorithm",
        "textAr": "خوارزمية تحليل دقيق إلى عوامل أولية"
      },
      {
        "key": "D",
        "textEn": "Discrete logarithm solver",
        "textAr": "خوارزمية حل اللوغاريتم التقسيمي"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Classification of Miller-Rabin as a fast probabilistic polynomial-time primality test.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.40"
    },
    "importantKeywords": [
      {
        "en": "Miller-Rabin algorithm",
        "ar": "خوارزمية ميلر-رابين",
        "role": "trigger"
      },
      {
        "en": "Probabilistic primality test",
        "ar": "اختبار أولية احتمالي",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Miller-Rabin = Probabilistic (fast, repeated with multiple bases a). AKS = Deterministic.",
      "ar": "ميلر-رابين = احتمالية (سريعة وتُكرر بعدة أسس a). بينما خوارزمية AKS = حتمية وقطعية.",
      "targetConcept": "Miller-Rabin Classification",
      "targetConceptAr": "تصنيف خوارزمية ميلر-رابين"
    },
    "quickReasoning": {
      "en": "Miller-Rabin quickly proves composite numbers with 100% certainty, but primes with bounded error 1/4^t.",
      "ar": "تثبت ميلر-رابين الأعداد المركبة بيقين 100%، بينما تعلن الأولية باحتمال خطأ يتضاءل أسياً مع التكرار."
    },
    "relatedLessonId": "ch2-l10"
  },
  {
    "id": "basmaga-ch2-29",
    "chapterId": "ch2",
    "topicId": "ch2-t6",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Ch 2 PDF p.43 / Slide 44",
    "type": "true-false",
    "questionEn": "The AKS primality test (2002) is a deterministic, polynomial-time algorithm that proves whether an integer is prime without relying on any unproven mathematical conjectures.",
    "questionAr": "يُعد اختبار AKS للأولية (2002) خوارزمية قطعية وحتمية تعمل في زمن حدودي وتثبت ما إذا كان العدد أولياً دون الاعتماد على أي فرضيات رياضية غير مبرهنة.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "AKS algorithm characteristics: deterministic, unconditional, polynomial-time.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.43"
    },
    "importantKeywords": [
      {
        "en": "AKS primality test",
        "ar": "اختبار AKS للأولية",
        "role": "trigger"
      },
      {
        "en": "Deterministic, polynomial-time algorithm",
        "ar": "خوارزمية قطعية في زمن حدودي",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "AKS algorithm = Deterministic polynomial time. First unconditionally proven algorithm in history.",
      "ar": "خوارزمية AKS = حتمية في زمن حدودي، وهي أول خوارزمية قطعية مثبتة في التاريخ.",
      "targetConcept": "AKS Primality Algorithm",
      "targetConceptAr": "خوارزمية AKS القطعية للأولية"
    },
    "quickReasoning": {
      "en": "Agrawal, Kayal, and Saxena proved primality testing is deterministically in P.",
      "ar": "أثبت العلماء أغراوال وكايال وساكسينا أن تحديد الأولية مسألة حتمية قابلة للحل في زمن حدودي."
    },
    "relatedLessonId": "ch2-l10"
  },
  {
    "id": "basmaga-ch2-30",
    "chapterId": "ch2",
    "topicId": "ch2-t6",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 2 / Ch 2 PDF p.44",
    "type": "mcq",
    "questionEn": "The Chinese Remainder Theorem (CRT) requires that all individual moduli m1, m2, ..., mk must satisfy which condition?",
    "questionAr": "تشترط مبرهنة الباقي الصينية (CRT) أن تحقق جميع المقاييس الفردية m1, m2, ..., mk أي شرط؟",
    "options": [
      {
        "key": "A",
        "textEn": "They must be pairwise relatively prime (gcd(mi, mj) = 1 for all i != j)",
        "textAr": "يجب أن تكون أولية نسبياً فيما بينها مثنى مثنى"
      },
      {
        "key": "B",
        "textEn": "They must all be even numbers",
        "textAr": "يجب أن تكون جميعها أعداداً زوجية"
      },
      {
        "key": "C",
        "textEn": "They must be identical multiples of each other",
        "textAr": "يجب أن تكون مضاعفات لبعضها البعض"
      },
      {
        "key": "D",
        "textEn": "They must all be smaller than 10",
        "textAr": "يجب أن تكون كلها أصغر من 10"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Chinese Remainder Theorem condition: pairwise coprime moduli gcd(mi, mj) = 1.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.44"
    },
    "importantKeywords": [
      {
        "en": "Chinese Remainder Theorem (CRT)",
        "ar": "مبرهنة الباقي الصينية",
        "role": "trigger"
      },
      {
        "en": "Pairwise relatively prime moduli",
        "ar": "مقاييس أولية نسبياً مثنى مثنى",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "CRT core requirement: All moduli MUST be pairwise relatively prime: gcd(mi, mj) = 1 for all i != j.",
      "ar": "الشرط الجوهري لمبرهنة الباقي الصينية: يجب أن تكون المقاييس أولية نسبياً مثنى مثنى: gcd(mi, mj) = 1.",
      "targetConcept": "CRT Pairwise Coprime Condition",
      "targetConceptAr": "شرط الأولية النسبية لمقاييس CRT"
    },
    "quickReasoning": {
      "en": "Pairwise coprimality ensures inverses Mi^(-1) mod mi exist to construct the unique solution.",
      "ar": "الأولية النسبية تضمن وجود المعكوسات الضربية Mi^(-1) mod mi لبناء الحل الوحيد."
    },
    "relatedLessonId": "ch2-l11"
  },
  {
    "id": "basmaga-ch2-31",
    "chapterId": "ch2",
    "topicId": "ch2-t6",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Ch 2 PDF p.45 / Slide 46",
    "type": "true-false",
    "questionEn": "Under the Chinese Remainder Theorem, a system of congruences x = ai mod mi has a unique simultaneous solution modulo M, where M = m1 * m2 * ... * mk.",
    "questionAr": "وفق مبرهنة الباقي الصينية، يمتلك نظام التطابقات x = ai mod mi حلاً متزامناً وحيداً بمقياس M، حيث M = m1 * m2 * ... * mk.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Uniqueness of CRT solution modulo M = product of moduli.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.45"
    },
    "importantKeywords": [
      {
        "en": "Unique simultaneous solution modulo M",
        "ar": "حل متزامن وحيد بمقياس M",
        "role": "trigger"
      },
      {
        "en": "M = m1 * m2 * ... * mk",
        "ar": "M = حاصل ضرب المقاييس",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "CRT guarantees a UNIQUE solution modulo the product M = product(mi).",
      "ar": "تضمن مبرهنة الباقي الصينية وجود حل وحيد بمقياس حاصل ضرب كافة المقاييس M.",
      "targetConcept": "CRT Solution Uniqueness",
      "targetConceptAr": "وحدانية حل مبرهنة الباقي الصينية"
    },
    "quickReasoning": {
      "en": "The mapping between Z_M and the Cartesian product of Z_mi is an isomorphism.",
      "ar": "التحويل بين Z_M والضرب الديكارتي لحلقات البواقي هو تماثل أحادي شامل (Isomorphism)."
    },
    "relatedLessonId": "ch2-l11"
  },
  {
    "id": "basmaga-ch2-32",
    "chapterId": "ch2",
    "topicId": "ch2-t6",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Ch 2 PDF p.47 / Slide 48",
    "type": "mcq",
    "questionEn": "Why is the Discrete Logarithm Problem (finding x such that a^x = b mod p) considered a one-way function suitable for public-key cryptography?",
    "questionAr": "لماذا تُعتبر مسألة اللوغاريتم التقسيمي (إيجاد x بحيث a^x = b mod p) دالة أحادية الاتجاه ملائمة للتشفير بالمفتاح العام؟",
    "options": [
      {
        "key": "A",
        "textEn": "Computing a^x mod p is computationally fast, but computing the logarithm x from b is intractable for large primes",
        "textAr": "حساب a^x mod p سريع وسهل، بينما إيجاد الأس x من الناتج b معقد ومستحيل عملياً للأعداد الأولية الضخمة"
      },
      {
        "key": "B",
        "textEn": "Because logarithms only exist for negative numbers",
        "textAr": "لأن اللوغاريتمات توجد للأعداد السالبة فقط"
      },
      {
        "key": "C",
        "textEn": "Because discrete logarithms always equal 1",
        "textAr": "لأن اللوغاريتم التقسيمي يساوي 1 دائماً"
      },
      {
        "key": "D",
        "textEn": "Because modular exponentiation is linear and easily inverted",
        "textAr": "لأن الرفع لأسس معيارية عملية خطية وسهلة العكس"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Computational hardness asymmetry of the Discrete Logarithm Problem in public key cryptography.",
    "sourceRef": {
      "file": "Ch 2 Information Security.pdf",
      "pageOrSlide": "p.47"
    },
    "importantKeywords": [
      {
        "en": "Discrete Logarithm Problem",
        "ar": "مسألة اللوغاريتم التقسيمي",
        "role": "trigger"
      },
      {
        "en": "One-way function",
        "ar": "دالة أحادية الاتجاه",
        "role": "condition"
      },
      {
        "en": "Exponentiation is easy, logarithm is intractable",
        "ar": "الرفع لأسس سهل واللوغاريتم مستحيل عملياً",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Discrete Logarithm = Asymmetric trapdoor. Forward exponentiation (a^x mod p) is fast; inverse log (find x) is intractable.",
      "ar": "اللوغاريتم التقسيمي = دالة أحادية الاتجاه. حساب الأس إلى الأمام سريع، بينما إيجاد الأس المعكوس x مستحيل عملياً.",
      "targetConcept": "Discrete Logarithm Hardness",
      "targetConceptAr": "صعوبة مسألة اللوغاريتم التقسيمي"
    },
    "quickReasoning": {
      "en": "No polynomial-time algorithm exists on classical computers to invert discrete logs for large prime fields.",
      "ar": "لا توجد خوارزمية في زمن حدودي على الحواسيب التقليدية لحساب اللوغاريتم التقسيمي للأعداد الأولية الضخمة."
    },
    "relatedLessonId": "ch2-l11"
  },
  {
    "id": "basmaga-ch3-01",
    "chapterId": "ch3",
    "topicId": "ch3-t1",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 5",
    "type": "mcq",
    "questionEn": "Which of the following is NOT one of the five essential ingredients of a symmetric cipher model?",
    "questionAr": "أيٌّ مما يلي لا يُعد من المكونات الخمسة الأساسية لنموذج التشفير المتماثل؟",
    "options": [
      {
        "key": "A",
        "textEn": "Plaintext",
        "textAr": "النص الصريح (Plaintext)"
      },
      {
        "key": "B",
        "textEn": "Secret Key",
        "textAr": "المفتاح السري (Secret Key)"
      },
      {
        "key": "C",
        "textEn": "Public Directory Authority",
        "textAr": "هيئة الدليل العام (Public Directory Authority)"
      },
      {
        "key": "D",
        "textEn": "Decryption Algorithm",
        "textAr": "خوارزمية فك التشفير (Decryption Algorithm)"
      }
    ],
    "correctAnswer": "C",
    "academicPoint": "Five ingredients of symmetric encryption: Plaintext, Encryption Algorithm, Secret Key, Ciphertext, Decryption Algorithm.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 5"
    },
    "importantKeywords": [
      {
        "en": "Five ingredients of symmetric cipher",
        "ar": "المكونات الخمسة للتشفير المتماثل",
        "role": "trigger"
      },
      {
        "en": "NOT an ingredient",
        "ar": "ليس من المكونات",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Symmetric model has 5 ingredients: Plaintext, Key, Encryption algorithm, Ciphertext, Decryption algorithm. Public directories belong to asymmetric crypto.",
      "ar": "النموذج المتماثل يحتوي 5 عناصر: نص صريح، مفتاح، خوارزمية تشفير، نص مشفر، خوارزمية فك تشفير. الأدلة العامة تخص التشفير غير المتماثل.",
      "targetConcept": "Five Ingredients of Symmetric Cipher",
      "targetConceptAr": "المكونات الخمسة لنموذج التشفير المتماثل"
    },
    "quickReasoning": {
      "en": "Public directories are used in asymmetric public-key systems, not in classical symmetric models.",
      "ar": "تُستخدم الأدلة العامة ومراكز الشهادات في التشفير غير المتماثل وليس في نموذج التشفير المتماثل التقليدي."
    },
    "relatedLessonId": "ch3-l1"
  },
  {
    "id": "basmaga-ch3-02",
    "chapterId": "ch3",
    "topicId": "ch3-t1",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2022 Q2.5 / Kerckhoffs Principle",
    "type": "true-false",
    "questionEn": "When using symmetric encryption, it is very important to keep the encryption algorithm secret.",
    "questionAr": "عند استخدام التشفير المتماثل، من المهم جداً الحفاظ على سرية خوارزمية التشفير ذاتها.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "B",
    "academicPoint": "Kerckhoffs' Principle: security must rely exclusively on key secrecy, not algorithm secrecy.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 7"
    },
    "importantKeywords": [
      {
        "en": "Keep the encryption algorithm secret",
        "ar": "الحفاظ على سرية خوارزمية التشفير",
        "role": "trigger"
      },
      {
        "en": "Kerckhoffs Principle",
        "ar": "مبدأ كيرشوف",
        "role": "concept"
      },
      {
        "en": "False (only the key must be secret)",
        "ar": "خطأ (فقط المفتاح يجب أن يكون سرياً)",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Kerckhoffs' Principle: Assume the algorithm is completely public. ONLY the key must remain secret!",
      "ar": "مبدأ كيرشوف: يُفترض أن الخوارزمية معلنة وعامة بالكامل. فقط المفتاح السري هو ما يجب كتمانه!",
      "targetConcept": "Kerckhoffs' Principle",
      "targetConceptAr": "مبدأ كيرشوف وسرية المفتاح"
    },
    "quickReasoning": {
      "en": "Open algorithms allow public cryptanalysis and standard adoption; hiding algorithms is fragile security by obscurity.",
      "ar": "الخوارزميات المفتوحة تسمح بالتدقيق والتحليل العالمي، بينما الاعتماد على إخفاء الخوارزمية أسلوب أمني فاشل."
    },
    "relatedLessonId": "ch3-l1"
  },
  {
    "id": "basmaga-ch3-03",
    "chapterId": "ch3",
    "topicId": "ch3-t1",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Ch 3 PPTX Slide 8",
    "type": "mcq",
    "questionEn": "In a secure network of N = 100 users where every pair of users must communicate with an independent secret key, how many total pairwise symmetric keys are required?",
    "questionAr": "في شبكة آمنة تضم N = 100 مستخدم حيث يتواصل كل زوج بمفتاح سري مستقل، كم عدد المفاتيح السرية الإجمالية المطلوبة؟",
    "options": [
      {
        "key": "A",
        "textEn": "N(N - 1) / 2 = 100 * 99 / 2 = 4,950 keys",
        "textAr": "N(N - 1) / 2 = 100 * 99 / 2 = 4,950 مفتاحاً"
      },
      {
        "key": "B",
        "textEn": "100 keys",
        "textAr": "100 مفتاح"
      },
      {
        "key": "C",
        "textEn": "10,000 keys",
        "textAr": "10,000 مفتاح"
      },
      {
        "key": "D",
        "textEn": "200 keys",
        "textAr": "200 مفتاح"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Pairwise symmetric key distribution scaling formula: N(N - 1) / 2.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 8"
    },
    "importantKeywords": [
      {
        "en": "Pairwise secret key scaling for N users",
        "ar": "توزيع المفاتيح الزوجية لـ N مستخدم",
        "role": "trigger"
      },
      {
        "en": "N(N - 1) / 2",
        "ar": "N(N - 1) / 2",
        "role": "concept"
      },
      {
        "en": "4,950 keys for N = 100",
        "ar": "4,950 مفتاح لـ 100 مستخدم",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Pairwise symmetric key formula is always n(n - 1) / 2: For 100 users -> 100 * 99 / 2 = 4950 keys.",
      "ar": "معادلة عدد المفاتيح الزوجية هي دائماً n(n - 1) / 2: لـ 100 مستخدم -> 100 * 99 / 2 = 4950 مفتاحاً.",
      "targetConcept": "Pairwise Key Scaling Formula",
      "targetConceptAr": "معادلة تدرج المفاتيح الزوجية"
    },
    "quickReasoning": {
      "en": "Combinations C(100, 2) = 100*99/2 = 4,950 pairwise connections.",
      "ar": "التوافيق C(100, 2) = 100*99/2 = 4,950 قناة اتصال ثنائية."
    },
    "relatedLessonId": "ch3-l1"
  },
  {
    "id": "basmaga-ch3-04",
    "chapterId": "ch3",
    "topicId": "ch3-t1",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2020 Q1.2 & Testbank",
    "type": "mcq",
    "questionEn": "A _____ attack involves trying every possible key until an intelligible translation of the ciphertext into plaintext is obtained.",
    "questionAr": "يتضمن هجوم _____ تجربة كل مفتاح ممكن حتى الحصول على ترجمة مفهومة وواضحة للنص المشفر إلى نص صريح:",
    "options": [
      {
        "key": "A",
        "textEn": "Brute-force",
        "textAr": "القوة العمياء / الشاملة (Brute-force)"
      },
      {
        "key": "B",
        "textEn": "Cryptanalysis",
        "textAr": "تحليل الشفرات (Cryptanalysis)"
      },
      {
        "key": "C",
        "textEn": "Differential attack",
        "textAr": "الهجوم التفاضلي"
      },
      {
        "key": "D",
        "textEn": "Man-in-the-middle",
        "textAr": "رجل في المنتصف"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Definition of Brute-Force Key Exhaustion Attack.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 10"
    },
    "importantKeywords": [
      {
        "en": "Trying every possible key",
        "ar": "تجربة كل مفتاح ممكن",
        "role": "trigger"
      },
      {
        "en": "Until intelligible translation is obtained",
        "ar": "حتى الحصول على ترجمة مفهومة",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Trying every possible key = Brute-force attack. Exploiting math/statistical characteristics = Cryptanalysis.",
      "ar": "تجربة كافة المفاتيح الممكنة واحداً تلو الآخر = هجوم القوة العمياء (Brute-force). استغلال الرياضيات واللغة = تحليل الشفرات.",
      "targetConcept": "Brute-Force Attack",
      "targetConceptAr": "هجوم القوة العمياء"
    },
    "quickReasoning": {
      "en": "Brute-force exhaustively searches through the entire key space.",
      "ar": "يبحث هجوم القوة العمياء بصورة شاملة في كامل مساحة المفاتيح المتاحة."
    },
    "relatedLessonId": "ch3-l2"
  },
  {
    "id": "basmaga-ch3-05",
    "chapterId": "ch3",
    "topicId": "ch3-t1",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2020 Q2.3 & Midterm 2022 Q1.1",
    "type": "mcq",
    "questionEn": "When the encryption algorithm and the ciphertext are the ONLY information available to the cryptanalyst, the cryptanalytic attack model is classified as:",
    "questionAr": "عندما تكون خوارزمية التشفير والنص المشفر فقط هما المعلومات الوحيدة المتاحة لمحلل الشفرات، فإن نموذج الهجوم يُصنف على أنه:",
    "options": [
      {
        "key": "A",
        "textEn": "Ciphertext-only",
        "textAr": "النص المشفر فقط (Ciphertext-only)"
      },
      {
        "key": "B",
        "textEn": "Known-plaintext",
        "textAr": "النص الصريح المعلوم (Known-plaintext)"
      },
      {
        "key": "C",
        "textEn": "Chosen-plaintext",
        "textAr": "النص الصريح المختار (Chosen-plaintext)"
      },
      {
        "key": "D",
        "textEn": "Chosen-ciphertext",
        "textAr": "النص المشفر المختار (Chosen-ciphertext)"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Table 3.1: Ciphertext-only attack definition (only algorithm and ciphertext known).",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 11"
    },
    "importantKeywords": [
      {
        "en": "Encryption algorithm and ciphertext are the ONLY information",
        "ar": "الخوارزمية والنص المشفر فقط هما المتاحان",
        "role": "trigger"
      },
      {
        "en": "Ciphertext-only",
        "ar": "النص المشفر فقط",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Only ciphertext available = Ciphertext-only attack (hardest for cryptanalyst).",
      "ar": "المتاح هو النص المشفر فقط = هجوم النص المشفر فقط (Ciphertext-only)، وهو أصعب سيناريو للمهاجم.",
      "targetConcept": "Ciphertext-Only Attack (Table 3.1)",
      "targetConceptAr": "هجوم النص المشفر فقط"
    },
    "quickReasoning": {
      "en": "Under Table 3.1, Ciphertext-only provides zero plaintext samples to the analyst.",
      "ar": "وفق جدول 3.1، لا يمتلك المحلل في هذا النموذج أي عينات نصوص صريحة."
    },
    "relatedLessonId": "ch3-l2"
  },
  {
    "id": "basmaga-ch3-06",
    "chapterId": "ch3",
    "topicId": "ch3-t1",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 3 / Table 3.1",
    "type": "mcq",
    "questionEn": "When an adversary possesses the encryption algorithm, the ciphertext to be decoded, and one or more plaintext-ciphertext pairs formed with the secret key, the attack is:",
    "questionAr": "عندما يمتلك المهاجم خوارزمية التشفير، والنص المشفر المراد حله، وزوجاً أو أكثر من النصوص الصريحة والمشفرة المكونة بنفس المفتاح السري، يُصنف الهجوم بأنه:",
    "options": [
      {
        "key": "A",
        "textEn": "Known-plaintext",
        "textAr": "النص الصريح المعلوم (Known-plaintext)"
      },
      {
        "key": "B",
        "textEn": "Ciphertext-only",
        "textAr": "النص المشفر فقط"
      },
      {
        "key": "C",
        "textEn": "Chosen-plaintext",
        "textAr": "النص الصريح المختار"
      },
      {
        "key": "D",
        "textEn": "Brute-force",
        "textAr": "القوة العمياء"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Table 3.1: Known-plaintext attack definition (adversary has existing plaintext-ciphertext pairs).",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 11"
    },
    "importantKeywords": [
      {
        "en": "One or more plaintext-ciphertext pairs formed with secret key",
        "ar": "أزواج سابقة من النصوص الصريحة والمشفرة",
        "role": "trigger"
      },
      {
        "en": "Known-plaintext",
        "ar": "النص الصريح المعلوم",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Possessing previously captured plaintext-ciphertext pairs = Known-plaintext attack.",
      "ar": "امتلاك عينات وأزواج سابقة من نصوص صريحة وما يقابلها مشفراً = هجوم النص الصريح المعلوم (Known-plaintext).",
      "targetConcept": "Known-Plaintext Attack",
      "targetConceptAr": "هجوم النص الصريح المعلوم"
    },
    "quickReasoning": {
      "en": "The analyst knows past plaintext-ciphertext correspondences, which severely undermines linear ciphers like Hill.",
      "ar": "يعرف المحلل أزواج سابقة متطابقة، مما يسهل كسر الشفرات الخطية مثل شفرة هيل."
    },
    "relatedLessonId": "ch3-l2"
  },
  {
    "id": "basmaga-ch3-07",
    "chapterId": "ch3",
    "topicId": "ch3-t1",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 3 / Table 3.1",
    "type": "mcq",
    "questionEn": "If an adversary can select arbitrary ciphertext strings and feed them into a decryption machine to obtain the decrypted plaintexts, this attack model is:",
    "questionAr": "إذا تمكن المهاجم من اختيار نصوص مشفرة عشوائية وتمريرها إلى جهاز فك التشفير للحصول على النصوص الصريحة الناتجة، فإن هذا النموذج يُسمى:",
    "options": [
      {
        "key": "A",
        "textEn": "Chosen-ciphertext",
        "textAr": "النص المشفر المختار (Chosen-ciphertext)"
      },
      {
        "key": "B",
        "textEn": "Chosen-plaintext",
        "textAr": "النص الصريح المختار"
      },
      {
        "key": "C",
        "textEn": "Known-plaintext",
        "textAr": "النص الصريح المعلوم"
      },
      {
        "key": "D",
        "textEn": "Ciphertext-only",
        "textAr": "النص المشفر فقط"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Table 3.1: Chosen-ciphertext attack definition (access to decryption oracle).",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 11"
    },
    "importantKeywords": [
      {
        "en": "Select arbitrary ciphertext strings",
        "ar": "اختيار نصوص مشفرة يحددها المهاجم",
        "role": "trigger"
      },
      {
        "en": "Feed into decryption machine",
        "ar": "تمريرها لجهاز فك التشفير",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Attacker chooses ciphertext and gets decrypted plaintext = Chosen-ciphertext. Attacker chooses plaintext and gets encrypted ciphertext = Chosen-plaintext.",
      "ar": "المهاجم يختار النص المشفر ويحصل على فك تشفيره = Chosen-ciphertext. المهاجم يختار النص الصريح ويحصل على تشفيره = Chosen-plaintext.",
      "targetConcept": "Chosen-Ciphertext Attack",
      "targetConceptAr": "هجوم النص المشفر المختار"
    },
    "quickReasoning": {
      "en": "The adversary has active access to a decryption oracle.",
      "ar": "يمتلك المهاجم وصولاً لجهاز أو خادم فك تشفير يعمل كـ Oracle."
    },
    "relatedLessonId": "ch3-l2"
  },
  {
    "id": "basmaga-ch3-08",
    "chapterId": "ch3",
    "topicId": "ch3-t1",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 12",
    "type": "mcq",
    "questionEn": "An encryption scheme is defined as computationally secure if it satisfies which of the following criteria?",
    "questionAr": "تُعرف خوارزمية التشفير بأنها آمنة حسابياً (computationally secure) إذا حققت أي معيار من المعايير التالية؟",
    "options": [
      {
        "key": "A",
        "textEn": "Cost of breaking cipher exceeds info value, OR time required exceeds info lifetime",
        "textAr": "تكلفة كسر الشفرة تتجاوز قيمة المعلومة، أو الزمن المطلوب لكسرها يتجاوز فترة صلاحية المعلومة المفيدة"
      },
      {
        "key": "B",
        "textEn": "The key is 1024 bits long",
        "textAr": "طول المفتاح 1024 بت"
      },
      {
        "key": "C",
        "textEn": "The ciphertext contains absolutely zero information about plaintext",
        "textAr": "النص المشفر لا يحتوي على أي معلومة إطلاقاً عن النص الصريح"
      },
      {
        "key": "D",
        "textEn": "The algorithm was authored by Claude Shannon",
        "textAr": "الخوارزمية طورها كلود شانون"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Definition of Computational Security vs Unconditional Security.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 12"
    },
    "importantKeywords": [
      {
        "en": "Computationally secure",
        "ar": "آمن حسابياً",
        "role": "trigger"
      },
      {
        "en": "Cost exceeds value OR time exceeds lifetime",
        "ar": "التكلفة تتجاوز القيمة أو الوقت يتجاوز الصلاحية",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Computational security: Cost > Value OR Time > Lifetime. Zero info regardless of computing power = Unconditional security.",
      "ar": "الأمان الحسابي: التكلفة > القيمة، أو الوقت > الصلاحية. انعدام المعلومة نهائياً حتى مع حواسيب لامتناهية = الأمان المطلق.",
      "targetConcept": "Computational Security Criteria",
      "targetConceptAr": "معيار الأمان الحسابي"
    },
    "quickReasoning": {
      "en": "Computational security acknowledges an attack is mathematically possible, but practically unaffordable.",
      "ar": "يعترف الأمان الحسابي بإمكانية الكسر نظرياً، لكنه يجعله غير مجدٍ أو مستحيلاً من حيث التكلفة والزمن."
    },
    "relatedLessonId": "ch3-l2"
  },
  {
    "id": "basmaga-ch3-09",
    "chapterId": "ch3",
    "topicId": "ch3-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 14",
    "type": "mcq",
    "questionEn": "What is the effective key space size of the classical Caesar substitution cipher (excluding the trivial shift of k = 0)?",
    "questionAr": "ما هو حجم مساحة المفاتيح الفعالة لشفرة قيصر الاستبدالية الكلاسيكية (باستثناء الإزاحة الصفرية k = 0)؟",
    "options": [
      {
        "key": "A",
        "textEn": "25 keys",
        "textAr": "25 مفتاحاً"
      },
      {
        "key": "B",
        "textEn": "26 keys",
        "textAr": "26 مفتاحاً"
      },
      {
        "key": "C",
        "textEn": "26! keys",
        "textAr": "26! مفتاحاً"
      },
      {
        "key": "D",
        "textEn": "2^56 keys",
        "textAr": "2^56 مفتاحاً"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Caesar cipher formula C = (p + k) mod 26 and its key space of 25 non-trivial shifts.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 14"
    },
    "importantKeywords": [
      {
        "en": "Caesar cipher key space",
        "ar": "مساحة مفاتيح شفرة قيصر",
        "role": "trigger"
      },
      {
        "en": "25 keys",
        "ar": "25 مفتاحاً",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Caesar key space is 25 (k in 1..25). k = 0 produces no encryption, leaving only 25 useful keys.",
      "ar": "مساحة مفاتيح قيصر هي 25 مفتاحاً فقط (k من 1 إلى 25). المفتاح k = 0 يبقي النص كما هو.",
      "targetConcept": "Caesar Keyspace (25)",
      "targetConceptAr": "مساحة مفاتيح شفرة قيصر"
    },
    "quickReasoning": {
      "en": "With only 25 possible keys, Caesar is effortlessly broken by testing all 25 shifts by hand.",
      "ar": "بـ 25 مفتاحاً فقط، تُكسر شفرة قيصر فوراً بتجربة الإزاحات يدوياً."
    },
    "relatedLessonId": "ch3-l3"
  },
  {
    "id": "basmaga-ch3-10",
    "chapterId": "ch3",
    "topicId": "ch3-t2",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2020 Q2.9 & Midterm 2022 Q2.1",
    "type": "true-false",
    "questionEn": "Monoalphabetic ciphers are easy to break because they reflect the frequency data of the original alphabet.",
    "questionAr": "شفرات الاستبدال أحادي الأبجدية (Monoalphabetic ciphers) سهلة الكسر لأنها تعكس الخصائص والتوزيعات التكرارية للأبجدية الأصلية.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Vulnerability of monoalphabetic substitution ciphers to single-letter frequency analysis despite 26! keyspace.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 18"
    },
    "importantKeywords": [
      {
        "en": "Monoalphabetic ciphers easy to break",
        "ar": "شفرات الاستبدال الأحادي سهلة الكسر",
        "role": "trigger"
      },
      {
        "en": "Reflect frequency data of original alphabet",
        "ar": "تعكس بيانات التكرار للأبجدية الأصلية",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Monoalphabetic has 26! keys, BUT preserves single-letter frequencies (E, T, A, O, N), making it easy to break.",
      "ar": "الاستبدال الأحادي يملك 26! مفتاحاً، لكنه يحافظ على التكرار الحرفي (E هو الأكثر تكراراً)، فيُكسر بسهولة تامة.",
      "targetConcept": "Monoalphabetic Frequency Weakness",
      "targetConceptAr": "نقطة ضعف الاستبدال الأحادي في التحليل التكراري"
    },
    "quickReasoning": {
      "en": "Each plaintext letter maps to a fixed ciphertext letter, preserving the statistical frequency peaks of natural language.",
      "ar": "كل حرف صريح يُستبدل دوماً بنفس الحرف المشفر، مما يحفظ قمم التوزيع التكراري للغة الأصلية."
    },
    "relatedLessonId": "ch3-l4"
  },
  {
    "id": "basmaga-ch3-11",
    "chapterId": "ch3",
    "topicId": "ch3-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 21",
    "type": "mcq",
    "questionEn": "In the 5x5 matrix construction of the classical Playfair cipher, which two letters are conventionally assigned to share a single cell?",
    "questionAr": "في بناء مصفوفة 5×5 لشفرة بلايفير الكلاسيكية، أي حرفين يشتركان تقليدياً في خانة واحدة بالمصفوفة؟",
    "options": [
      {
        "key": "A",
        "textEn": "I and J",
        "textAr": "I و J"
      },
      {
        "key": "B",
        "textEn": "U and V",
        "textAr": "U و V"
      },
      {
        "key": "C",
        "textEn": "P and Q",
        "textAr": "P و Q"
      },
      {
        "key": "D",
        "textEn": "X and Z",
        "textAr": "X و Z"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Playfair 5x5 matrix construction: 25 cells for 26 letters; I and J occupy the same cell.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 21"
    },
    "importantKeywords": [
      {
        "en": "Playfair cipher 5x5 matrix",
        "ar": "مصفوفة شفرة بلايفير 5×5",
        "role": "trigger"
      },
      {
        "en": "Two letters share a single cell",
        "ar": "حرفان يشتركان في خانة واحدة",
        "role": "condition"
      },
      {
        "en": "I and J",
        "ar": "I و J",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Playfair 5x5 grid has 25 cells for 26 letters -> I and J are combined into one cell.",
      "ar": "مصفوفة بلايفير 5×5 تحتوي 25 خانة لـ 26 حرفاً -> يُدمج الحرفان I و J في خانة واحدة.",
      "targetConcept": "Playfair Matrix (I/J Shared)",
      "targetConceptAr": "مصفوفة بلايفير (دمج I و J)"
    },
    "quickReasoning": {
      "en": "Combining I and J allows fitting the 26-letter alphabet into a 5x5 grid.",
      "ar": "دمج I و J يمكن من استيعاب أبجدية الـ 26 حرفاً داخل شبكة أبعادها 5×5."
    },
    "relatedLessonId": "ch3-l5"
  },
  {
    "id": "basmaga-ch3-12",
    "chapterId": "ch3",
    "topicId": "ch3-t2",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Example: Ch 3 PPTX Slide 22 (BALLOON)",
    "type": "mcq",
    "questionEn": "When preparing plaintext for encryption in the Playfair cipher, how are repeated letters appearing in the same pair (such as LL in BALLOON) handled?",
    "questionAr": "عند تجهيز النص الصريح للتشفير في شفرة بلايفير، كيف يتم التعامل مع تكرار الحروف في الزوج الواحد (مثل LL في كلمة BALLOON)؟",
    "options": [
      {
        "key": "A",
        "textEn": "A filler letter (typically 'x') is inserted between them: BA LX LO ON",
        "textAr": "يتم إدراج حرف حشو (عادة 'x') بينهما: فتصبح BA LX LO ON"
      },
      {
        "key": "B",
        "textEn": "The second letter is deleted completely",
        "textAr": "يُحذف الحرف الثاني تماماً"
      },
      {
        "key": "C",
        "textEn": "The word is rejected by the cipher",
        "textAr": "ترفض الخوارزمية الكلمة"
      },
      {
        "key": "D",
        "textEn": "The letters are encrypted individually as single letters",
        "textAr": "يُشفر كل حرف منفرداً كحرف أحادي"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Playfair digram preparation rule: inserting filler 'x' between repeated letters in a pair.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 22"
    },
    "importantKeywords": [
      {
        "en": "Playfair digram repeated letters",
        "ar": "تكرار الحروف في زوج بلايفير",
        "role": "trigger"
      },
      {
        "en": "Filler letter 'x' inserted",
        "ar": "إدراج حرف حشو 'x'",
        "role": "concept"
      },
      {
        "en": "BALLOON -> BA LX LO ON",
        "ar": "BALLOON -> BA LX LO ON",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Playfair repeated letter rule: If letters in a pair are identical, insert filler 'x' between them (BALLOON -> BA LX LO ON).",
      "ar": "قاعدة التكرار في بلايفير: إذا تكرر الحرفان في نفس الزوج، أدرج حرف حشو 'x' بينهما (مثل BA LX LO ON).",
      "targetConcept": "Playfair Repeated Letter Rule (Filler x)",
      "targetConceptAr": "قاعدة بلايفير للحروف المكررة (حرف الحشو x)"
    },
    "quickReasoning": {
      "en": "Pairs of identical letters would cause encryption rules to fail, so a filler letter is required.",
      "ar": "تكرار الحرفين في الزوج الواحد يعطل تطبيق قواعد المصفوفة، لذا يجب الفصل بحرف حشو."
    },
    "relatedLessonId": "ch3-l5"
  },
  {
    "id": "basmaga-ch3-13",
    "chapterId": "ch3",
    "topicId": "ch3-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 22",
    "type": "mcq",
    "questionEn": "In the Playfair cipher, if two plaintext letters in a pair fall in the SAME COLUMN of the 5x5 matrix, what is the encryption rule?",
    "questionAr": "في شفرة بلايفير، إذا وقع الحرفان في نفس العمود بمصفوفة 5×5، فما هي قاعدة التشفير المطبقة؟",
    "options": [
      {
        "key": "A",
        "textEn": "Each letter is replaced by the letter immediately BELOW it (wrapping to top)",
        "textAr": "يُستبدل كل حرف بالحرف الذي يقع تحته مباشرة (مع الالتفاف لأعلى العمود)"
      },
      {
        "key": "B",
        "textEn": "Each letter is replaced by the letter to its right",
        "textAr": "يُستبدل كل حرف بالحرف الواقع إلى يمينه"
      },
      {
        "key": "C",
        "textEn": "The letters swap places with each other",
        "textAr": "يتبادل الحرفان موقعيهما"
      },
      {
        "key": "D",
        "textEn": "Each letter is replaced by the letter immediately above it",
        "textAr": "يُستبدل بالحرف الواقع فوقه"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Playfair encryption rule for same column: shift down circularly.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 22"
    },
    "importantKeywords": [
      {
        "en": "Playfair same column rule",
        "ar": "قاعدة العمود الواحد في بلايفير",
        "role": "trigger"
      },
      {
        "en": "Immediately BELOW it (shift down)",
        "ar": "الواقع تحته مباشرة (إزاحة لأسفل)",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Playfair rules: Same Row -> Right. Same Column -> Below (Down). Rectangle -> Opposing corner in same row.",
      "ar": "قواعد بلايفير: نفس الصف -> يمين. نفس العمود -> أسفل (تحت). المستطيل -> الزاوية المقابلة في نفس الصف.",
      "targetConcept": "Playfair Same Column Rule",
      "targetConceptAr": "قاعدة العمود الواحد في بلايفير"
    },
    "quickReasoning": {
      "en": "Letters in the same column shift circularly downward.",
      "ar": "تنزاح حروف العمود الواحد دورياً نحو الأسفل."
    },
    "relatedLessonId": "ch3-l5"
  },
  {
    "id": "basmaga-ch3-14",
    "chapterId": "ch3",
    "topicId": "ch3-t2",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Ch 3 PPTX Slide 22",
    "type": "mcq",
    "questionEn": "In the Playfair cipher, if two letters in a pair define a RECTANGLE (neither same row nor same column), what is the encryption rule?",
    "questionAr": "في شفرة بلايفير، إذا شكل الحرفان زوايا مستطيل (ليسا في نفس الصف ولا نفس العمود)، فما هي قاعدة التشفير؟",
    "options": [
      {
        "key": "A",
        "textEn": "Each letter is replaced by the letter on the same row in the column of the other letter",
        "textAr": "يُستبدل كل حرف بالحرف الواقع في نفس صفه ولكن في عمود الحرف الآخر"
      },
      {
        "key": "B",
        "textEn": "Both letters are shifted diagonally by 2 positions",
        "textAr": "يُزاح الحرفان قطرياً بمقدار خانتين"
      },
      {
        "key": "C",
        "textEn": "The entire matrix is rotated 90 degrees",
        "textAr": "تُدار المصفوفة بأكملها 90 درجة"
      },
      {
        "key": "D",
        "textEn": "The letters are inverted modulo 26",
        "textAr": "يُعكس الحرفان معيارياً بمقياس 26"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Playfair rectangle encryption rule: swap with corner letters along the horizontal axis.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 22"
    },
    "importantKeywords": [
      {
        "en": "Playfair rectangle rule",
        "ar": "قاعدة المستطيل في بلايفير",
        "role": "trigger"
      },
      {
        "en": "Same row, column of the other letter",
        "ar": "نفس الصف وعمود الحرف الآخر",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Rectangle rule: Stay on your own row, move to the column of your partner.",
      "ar": "قاعدة المستطيل: ابقَ في نفس صفك، وانتقل إلى عمود الحرف الشريك.",
      "targetConcept": "Playfair Rectangle Rule",
      "targetConceptAr": "قاعدة المستطيل في بلايفير"
    },
    "quickReasoning": {
      "en": "Horizontal replacement across the rectangle corners guarantees unambiguous decryption.",
      "ar": "الاستبدال الأفقي عبر زوايا المستطيل يضمن إمكانية فك التشفير دون لبس."
    },
    "relatedLessonId": "ch3-l5"
  },
  {
    "id": "basmaga-ch3-15",
    "chapterId": "ch3",
    "topicId": "ch3-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 24",
    "type": "mcq",
    "questionEn": "The Hill cipher achieves strong diffusion and resists single-letter frequency analysis because it:",
    "questionAr": "تحقق شفرة هيل (Hill cipher) انتشاراً وتشتيتاً قوياً وتقاوم تحليل التكرار الأحادي لأنها:",
    "options": [
      {
        "key": "A",
        "textEn": "Encrypts blocks of m letters simultaneously using linear algebra modulo 26",
        "textAr": "تشفر كتل من m حرفاً في آن واحد باستخدام الجبر الخطي والمصفوفات بمقياس 26"
      },
      {
        "key": "B",
        "textEn": "Uses a 128-bit secret key",
        "textAr": "تستخدم مفتاحاً سرياً بطول 128 بت"
      },
      {
        "key": "C",
        "textEn": "Permutes the bits inside a Feistel network",
        "textAr": "تبدل البتات داخل شبكة فايستل"
      },
      {
        "key": "D",
        "textEn": "Eliminates all vowels from the ciphertext",
        "textAr": "تحذف حروف العلة من النص المشفر"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Hill Cipher polygraphic block encryption model C = P * K mod 26.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 24"
    },
    "importantKeywords": [
      {
        "en": "Hill cipher achieves strong diffusion",
        "ar": "شفرة هيل تحقق انتشاراً قوياً",
        "role": "trigger"
      },
      {
        "en": "Encrypts blocks of m letters simultaneously",
        "ar": "تشفر كتل من m حرفاً في وقت واحد",
        "role": "concept"
      },
      {
        "en": "C = P * K mod 26",
        "ar": "C = P * K mod 26",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Hill cipher = Polygraphic matrix cipher (C = P * K mod 26). Encrypts m letters together, disguising frequencies.",
      "ar": "شفرة هيل = شفرة مصفوفات متعددة الحروف (C = P * K mod 26). تشفر كتل m حرفاً معاً مما يخفي التكرار الفردي.",
      "targetConcept": "Hill Cipher Block Model",
      "targetConceptAr": "نموذج شفرة هيل الكتلية المصفوفية"
    },
    "quickReasoning": {
      "en": "Operating on vectors of m letters diffuses single-letter statistics across m-gram frequencies.",
      "ar": "العمل على متجهات بطول m حرف يشتت الإحصاءات الفردية عبر تكرارات الحزم المتعددة."
    },
    "relatedLessonId": "ch3-l6"
  },
  {
    "id": "basmaga-ch3-16",
    "chapterId": "ch3",
    "topicId": "ch3-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 25",
    "type": "mcq",
    "questionEn": "Under the Hill cipher, a key matrix K is invertible modulo 26 if and only if its determinant det(K) satisfies which condition?",
    "questionAr": "في شفرة هيل، تكون مصفوفة المفتاح K قابلة للعكس بمقياس 26 إذا وفقط إذا كان محددها det(K) يحقق أي شرط؟",
    "options": [
      {
        "key": "A",
        "textEn": "gcd(det(K), 26) = 1 (det(K) is not divisible by 2 or 13)",
        "textAr": "gcd(det(K), 26) = 1 (المحدد لا يقبل القسمة على 2 أو 13)"
      },
      {
        "key": "B",
        "textEn": "det(K) = 0",
        "textAr": "det(K) = 0"
      },
      {
        "key": "C",
        "textEn": "det(K) is an even number",
        "textAr": "det(K) عدداً زوجياً"
      },
      {
        "key": "D",
        "textEn": "det(K) = 26",
        "textAr": "det(K) = 26"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Hill Cipher key invertibility condition: gcd(det(K), 26) = 1.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 25"
    },
    "importantKeywords": [
      {
        "en": "Hill cipher key matrix invertible mod 26",
        "ar": "مصفوفة مفتاح هيل قابلة للعكس بمقياس 26",
        "role": "trigger"
      },
      {
        "en": "gcd(det(K), 26) = 1",
        "ar": "gcd(det(K), 26) = 1",
        "role": "condition"
      },
      {
        "en": "det(K) not divisible by 2 or 13",
        "ar": "المحدد لا يقبل القسمة على 2 أو 13",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Hill matrix is invertible mod 26 IF AND ONLY IF gcd(det(K), 26) = 1 (det must be odd and not divisible by 13).",
      "ar": "مصفوفة هيل قابلة للعكس إذا وفقط إذا كان gcd(det(K), 26) = 1 (المحدد فردي ولا يقبل القسمة على 13).",
      "targetConcept": "Hill Key Invertibility Condition",
      "targetConceptAr": "شرط قابلية عكس مفتاح شفرة هيل"
    },
    "quickReasoning": {
      "en": "To invert K = det(K)^(-1) * adj(K) mod 26, the scalar det(K)^(-1) exists only if coprime to 26.",
      "ar": "لحساب مقلوب المصفوفة، يجب أن يتوفر مقلوب المحدد det(K)^(-1) mod 26، وهو مشروط بكونه أولياً نسبياً مع 26."
    },
    "relatedLessonId": "ch3-l6"
  },
  {
    "id": "basmaga-ch3-17",
    "chapterId": "ch3",
    "topicId": "ch3-t2",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Ch 3 PPTX Slide 26",
    "type": "mcq",
    "questionEn": "How many linearly independent plaintext-ciphertext vector pairs of length m are required to completely break an m x m Hill cipher under a known-plaintext attack?",
    "questionAr": "كم عدد أزواج المتجهات المستقلة خطياً بطول m (نص صريح ومشفر) المطلوبة لكسر شفرة هيل m×m تماماً تحت هجوم النص الصريح المعلوم؟",
    "options": [
      {
        "key": "A",
        "textEn": "m linearly independent pairs",
        "textAr": "m من الأزواج المستقلة خطياً"
      },
      {
        "key": "B",
        "textEn": "26 pairs",
        "textAr": "26 زوجاً"
      },
      {
        "key": "C",
        "textEn": "2^m pairs",
        "textAr": "2^m زوجاً"
      },
      {
        "key": "D",
        "textEn": "Only 1 single character",
        "textAr": "حرف واحد فقط"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Known-plaintext attack on Hill cipher: recovering K via K = P^(-1) * C mod 26 using m pairs.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 26"
    },
    "importantKeywords": [
      {
        "en": "Known-plaintext attack on Hill cipher",
        "ar": "هجوم النص الصريح المعلوم على شفرة هيل",
        "role": "trigger"
      },
      {
        "en": "m linearly independent pairs",
        "ar": "m من الأزواج المستقلة خطياً",
        "role": "concept"
      },
      {
        "en": "K = P^(-1) * C mod 26",
        "ar": "K = P^(-1) * C mod 26",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Hill cipher is completely vulnerable to Known-Plaintext Attack: Exactly m independent pairs solve K = P^(-1) * C.",
      "ar": "شفرة هيل تنهار تماماً أمام هجوم النص الصريح المعلوم: m من الأزواج المستقلة كافية لحساب K = P^(-1) * C.",
      "targetConcept": "Hill Known-Plaintext Vulnerability",
      "targetConceptAr": "ضعف شفرة هيل أمام النص الصريح المعلوم"
    },
    "quickReasoning": {
      "en": "Because Hill is a purely linear system, m vector equations form an invertible square matrix P.",
      "ar": "نظراً لأن شفرة هيل نظام خطي بالكامل، فإن m من المتجهات تكون مصفوفة مربعة P يمكن عكسها بسهولة."
    },
    "relatedLessonId": "ch3-l6"
  },
  {
    "id": "basmaga-ch3-18",
    "chapterId": "ch3",
    "topicId": "ch3-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 27",
    "type": "mcq",
    "questionEn": "How does the Vigenère polyalphabetic cipher disguise single-letter frequency distribution compared to monoalphabetic ciphers?",
    "questionAr": "كيف تخفي شفرة فيجينير (Vigenère) متعددة الأبجديات التوزيع التكراري للأحرف مقارنة بالاستبدال الأحادي؟",
    "options": [
      {
        "key": "A",
        "textEn": "By using multiple Caesar ciphers in sequence, so the same plaintext letter maps to different ciphertext letters",
        "textAr": "باستخدام عدة شفرات قيصر متتالية، بحيث يُشفر نفس الحرف الصريح إلى أحرف مشفرة مختلفة حسب موقعه"
      },
      {
        "key": "B",
        "textEn": "By encrypting bits with 64-bit S-boxes",
        "textAr": "بتشفير البتات عبر صناديق S-box بطول 64 بت"
      },
      {
        "key": "C",
        "textEn": "By reversing the entire plaintext message",
        "textAr": "بعكس ترتيب حروف الرسالة بالكامل"
      },
      {
        "key": "D",
        "textEn": "By replacing all letters with numbers",
        "textAr": "باستبدال كافة الحروف بأرقام"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Vigenère Polyalphabetic Cipher mechanics: multiple substitution alphabets flattening frequency curves.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 27"
    },
    "importantKeywords": [
      {
        "en": "Vigenère polyalphabetic cipher",
        "ar": "شفرة فيجينير متعددة الأبجديات",
        "role": "trigger"
      },
      {
        "en": "Multiple Caesar ciphers",
        "ar": "شفرات قيصر متعددة",
        "role": "condition"
      },
      {
        "en": "Same letter maps to different letters",
        "ar": "الحرف الواحد يُشفر لأحرف مختلفة",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Polyalphabetic = Many Caesar ciphers controlled by repeating key. Flattens letter frequency distribution.",
      "ar": "متعدد الأبجديات = عدة شفرات قيصر محكومة بمفتاح دوري، مما يسوي منحنى تكرار الحروف الفردية.",
      "targetConcept": "Vigenère Polyalphabetic Mechanics",
      "targetConceptAr": "آلية شفرة فيجينير متعددة الأبجديات"
    },
    "quickReasoning": {
      "en": "Periodic key shifts each letter by a different amount, breaking fixed letter-to-letter mappings.",
      "ar": "المفتاح الدوري يزيح كل موضع حرف بقيمة مختلفة، مما يكسر التطابق الأحادي الثابت."
    },
    "relatedLessonId": "ch3-l7"
  },
  {
    "id": "basmaga-ch3-19",
    "chapterId": "ch3",
    "topicId": "ch3-t3",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Ch 3 PPTX Slide 28",
    "type": "mcq",
    "questionEn": "How does the Vigenère Autokey system attempt to eliminate the vulnerability of keyword periodicity?",
    "questionAr": "كيف تحاول شفرة المفتاح التلقائي (Autokey) التغلب على ثغرة تكرار ودورية المفتاح؟",
    "options": [
      {
        "key": "A",
        "textEn": "By appending the plaintext itself after the initial keyword to form a non-repeating key",
        "textAr": "بإلحاق النص الصريح نفسه بعد الكلمة المفتاحية الأولية لتكوين مفتاح ممتد غير دوري"
      },
      {
        "key": "B",
        "textEn": "By multiplying the key by 26 at each step",
        "textAr": "بضرب المفتاح في 26 عند كل خطوة"
      },
      {
        "key": "C",
        "textEn": "By using random numbers generated by radioactive decay",
        "textAr": "باستخدام أرقام عشوائية من الانحلال الإشعاعي"
      },
      {
        "key": "D",
        "textEn": "By hashing the ciphertext using SHA-256",
        "textAr": "بتطبيق خوارزمية الهاش SHA-256 على النص المشفر"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Vigenère Autokey running-key construction: keyword prepended to plaintext.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 28"
    },
    "importantKeywords": [
      {
        "en": "Vigenère Autokey system",
        "ar": "شفرة المفتاح التلقائي Autokey",
        "role": "trigger"
      },
      {
        "en": "Appending plaintext after initial keyword",
        "ar": "إلحاق النص الصريح بعد المفتاح",
        "role": "concept"
      },
      {
        "en": "Non-repeating key",
        "ar": "مفتاح غير دوري",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Autokey: Keyword + Plaintext itself = Running key. Eliminates short periodic loops, but word structures leak.",
      "ar": "المفتاح التلقائي: الكلمة المفتاحية + النص الصريح نفسه = المفتاح الممتد. يلغي الدورية القصيرة لكنه يسرب بنية الكلمات.",
      "targetConcept": "Autokey Cipher Construction",
      "targetConceptAr": "بناء شفرة المفتاح التلقائي"
    },
    "quickReasoning": {
      "en": "Using the plaintext as the continuation of the key creates a keystream as long as the message.",
      "ar": "استخدام النص الصريح كامتداد للمفتاح ينشئ تدفق مفاتيح بطول الرسالة دون تكرار دوري للمفتاح القصير."
    },
    "relatedLessonId": "ch3-l7"
  },
  {
    "id": "basmaga-ch3-20",
    "chapterId": "ch3",
    "topicId": "ch3-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 30",
    "type": "true-false",
    "questionEn": "The Vernam cipher / One-Time Pad is unconditionally secure if and only if the key is truly random, as long as the message, used only once, and kept completely secret.",
    "questionAr": "يُعد تشفير فيرنام / لوحة المرة الواحدة (One-Time Pad) آمناً أماناً مطلقاً إذا وفقط إذا كان المفتاح عشوائياً حقاً، وبنفس طول الرسالة، ويُستخدم لمرة واحدة فقط ثم يُتلف.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Conditions for unconditional security in Vernam Cipher / One-Time Pad (OTP).",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 30"
    },
    "importantKeywords": [
      {
        "en": "One-Time Pad (OTP) unconditionally secure",
        "ar": "لوحة المرة الواحدة آمنة أماناً مطلقاً",
        "role": "trigger"
      },
      {
        "en": "Truly random, as long as message, used once",
        "ar": "عشوائي حقاً، بطول الرسالة، يستخدم مرة واحدة",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "One-Time Pad (OTP) = Unconditionally secure. Requirements: Truly random, Length = Message, Used once and destroyed.",
      "ar": "لوحة المرة الواحدة (OTP) = أمان مطلق (Unconditional). الشروط: عشوائي حقيقي، طوله = طول الرسالة، لمرة واحدة فقط.",
      "targetConcept": "One-Time Pad Unconditional Security",
      "targetConceptAr": "الأمان المطلق للوحة المرة الواحدة"
    },
    "quickReasoning": {
      "en": "Under these four conditions, ciphertext contains statistically zero information about the plaintext.",
      "ar": "تحت هذه الشروط الأربعة، لا يقدم النص المشفر أي معلومة إحصائية على الإطلاق عن النص الأصلي."
    },
    "relatedLessonId": "ch3-l8"
  },
  {
    "id": "basmaga-ch3-21",
    "chapterId": "ch3",
    "topicId": "ch3-t3",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2020 Q1.4 / Shannon Theorem",
    "type": "mcq",
    "questionEn": "Which of the following cryptosystems is NOT vulnerable to brute-force key search attacks even with infinite computing power and unlimited time?",
    "questionAr": "أيٌّ من أنظمة التشفير التالية لا يمكن كسره بهجمات القوة العمياء حتى مع توفر قوة حاسوبية لامتناهية وزمن غير محدود؟",
    "options": [
      {
        "key": "A",
        "textEn": "One-Time Pad (OTP)",
        "textAr": "لوحة المرة الواحدة (One-Time Pad)"
      },
      {
        "key": "B",
        "textEn": "DES with 56-bit key",
        "textAr": "خوارزمية DES بمفتاح 56 بت"
      },
      {
        "key": "C",
        "textEn": "Triple-DES (3DES)",
        "textAr": "خوارزمية Triple-DES"
      },
      {
        "key": "D",
        "textEn": "Playfair cipher",
        "textAr": "شفرة بلايفير"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Claude Shannon's Perfect Secrecy theorem: OTP cannot be broken by brute force because all plaintexts are equally likely.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 31"
    },
    "importantKeywords": [
      {
        "en": "NOT vulnerable to brute-force with infinite computing power",
        "ar": "لا يُكسر بالقوة العمياء حتى مع حواسيب خارقة",
        "role": "trigger"
      },
      {
        "en": "One-Time Pad (OTP)",
        "ar": "لوحة المرة الواحدة",
        "role": "concept"
      },
      {
        "en": "Perfect Secrecy",
        "ar": "السرية التامة لشانون",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Immune to infinite computing power = One-Time Pad (Shannon's perfect secrecy: P(M|C) = P(M)).",
      "ar": "منيع ضد القوة الحاسوبية اللانهائية = لوحة المرة الواحدة (سرية شانون المطلقة: P(M|C) = P(M)).",
      "targetConcept": "Shannon Perfect Secrecy (OTP)",
      "targetConceptAr": "السرية التامة لشانون (لوحة المرة الواحدة)"
    },
    "quickReasoning": {
      "en": "Every potential plaintext of the same length is produced by some key with equal probability, leaving no clue.",
      "ar": "كل نص صريح محتمل بنفس الطول يمكن إنتاجه بمفتاح ما وبنفس الاحتمالية تماماً، مما يستحيل معه الترجيح."
    },
    "relatedLessonId": "ch3-l8"
  },
  {
    "id": "basmaga-ch3-22",
    "chapterId": "ch3",
    "topicId": "ch3-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 3 / Ch3(1).pptx Slide 32",
    "type": "true-false",
    "questionEn": "In transposition ciphers, the letter frequencies of the ciphertext are identical to the letter frequencies of the original plaintext.",
    "questionAr": "في شفرات التبديل الموضعي (Transposition ciphers)، تكون التكرارات الحرفية في النص المشفر مطابقة تماماً لتكرارات النص الصريح الأصلي.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Key diagnostic property of Transposition ciphers: letters are rearranged, preserving natural language letter frequencies.",
    "sourceRef": {
      "file": "Ch3(1).pptx",
      "pageOrSlide": "Slide 32"
    },
    "importantKeywords": [
      {
        "en": "Transposition ciphers",
        "ar": "شفرات التبديل الموضعي",
        "role": "trigger"
      },
      {
        "en": "Letter frequencies are identical",
        "ar": "التكرارات الحرفية متطابقة تماماً",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Transposition reorders positions without changing letters -> Letter frequencies stay 100% IDENTICAL.",
      "ar": "التبديل يغير مواقع الحروف دون تبديل هويتها -> التكرارات الحرفية تبقى متطابقة بنسبة 100%.",
      "targetConcept": "Transposition Frequency Invariance",
      "targetConceptAr": "ثبات التكرار في شفرات التبديل"
    },
    "quickReasoning": {
      "en": "Since no character substitutions occur, a frequency count matches English text, revealing a transposition cipher.",
      "ar": "لعدم حدوث أي استبدال للحروف، يتطابق توزيع التكرار مع اللغة الأصلية مما يفضح نوع الشفرة فوراً."
    },
    "relatedLessonId": "ch3-l9"
  },
  {
    "id": "basmaga-ch4-01",
    "chapterId": "ch4",
    "topicId": "ch4-t1",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 4",
    "type": "true-false",
    "questionEn": "The vast majority of network-based symmetric cryptographic applications make use of stream ciphers.",
    "questionAr": "الغالبية العظمى من تطبيقات التشفير المتماثل القائمة على الشبكات تستخدم شفرات التدفق (Stream ciphers).",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "B",
    "academicPoint": "Prevalence of Block Ciphers (AES, 3DES) over Stream Ciphers in network security protocols.",
    "sourceRef": {
      "file": "Ch04(1).pptx",
      "pageOrSlide": "Slide 4"
    },
    "importantKeywords": [
      {
        "en": "Vast majority of network-based symmetric applications",
        "ar": "الغالبية العظمى من التطبيقات المتماثلة الشبكية",
        "role": "trigger"
      },
      {
        "en": "Make use of stream ciphers",
        "ar": "تستخدم شفرات التدفق",
        "role": "condition"
      },
      {
        "en": "False (they use block ciphers)",
        "ar": "خطأ (تستخدم شفرات الكتل)",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Vast majority of network applications use BLOCK ciphers (AES, DES), NOT stream ciphers. Mark False if it says stream ciphers.",
      "ar": "الغالبية الساحقة من تطبيقات الشبكات تستخدم شفرات الكتل (Block ciphers) مثل AES و DES، وليس شفرات التدفق.",
      "targetConcept": "Block Cipher Network Dominance",
      "targetConceptAr": "هيمنة شفرات الكتل في تطبيقات الشبكات"
    },
    "quickReasoning": {
      "en": "Block ciphers are far more versatile and form the core of TLS, IPsec, and SSH.",
      "ar": "شفرات الكتل أكثر تنوعاً وتشكل النواة الأساسية لبروتوكولات TLS و IPsec و SSH."
    },
    "relatedLessonId": "ch4-l1"
  },
  {
    "id": "basmaga-ch4-02",
    "chapterId": "ch4",
    "topicId": "ch4-t1",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2020 Q1.3 / Ch04(1).pptx Slide 5",
    "type": "mcq",
    "questionEn": "A _____ cipher is one in which a block of plaintext is treated as a whole and used to produce a ciphertext block of equal length.",
    "questionAr": "تُعرف شفرة _____ بأنها الشفرة التي يتم فيها التعامل مع كتلة من النص الصريح ككل متكامل لإنتاج كتلة مشفرة مساوية لها في الطول:",
    "options": [
      {
        "key": "A",
        "textEn": "Block",
        "textAr": "الكتل (Block)"
      },
      {
        "key": "B",
        "textEn": "Stream",
        "textAr": "التدفق (Stream)"
      },
      {
        "key": "C",
        "textEn": "Substitution",
        "textAr": "الاستبدال"
      },
      {
        "key": "D",
        "textEn": "Transposition",
        "textAr": "التبديل"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Definition of Block Cipher: processing fixed-size plaintext blocks into equal-length ciphertext blocks.",
    "sourceRef": {
      "file": "Ch04(1).pptx",
      "pageOrSlide": "Slide 5"
    },
    "importantKeywords": [
      {
        "en": "Block of plaintext treated as a whole",
        "ar": "كتلة من النص الصريح تُعالج ككل متكامل",
        "role": "trigger"
      },
      {
        "en": "Ciphertext block of equal length",
        "ar": "كتلة مشفرة متساوية في الطول",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Plaintext treated as a block producing equal-length ciphertext block = Block Cipher.",
      "ar": "معالجة النص ككتلة واحدة لإنتاج كتلة مشفرة بنفس الطول = شفرة الكتل (Block cipher).",
      "targetConcept": "Block Cipher Definition",
      "targetConceptAr": "تعريف شفرة الكتل"
    },
    "quickReasoning": {
      "en": "Block ciphers operate on n-bit blocks producing n-bit outputs.",
      "ar": "تعمل شفرات الكتل على كتل بطول n بت لتنتج مخرجات مشفرة بطول n بت."
    },
    "relatedLessonId": "ch4-l1"
  },
  {
    "id": "basmaga-ch4-03",
    "chapterId": "ch4",
    "topicId": "ch4-t1",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Table 4.1 / Ch04(1).pptx Slide 7",
    "type": "mcq",
    "questionEn": "Why is an ideal, general reversible substitution block cipher with a block size of n = 64 bits completely impractical to implement in practice?",
    "questionAr": "لماذا يستحيل عملياً تطبيق شفرة كتل مثالية ذات استبدال عكوس عام بحجم كتلة n = 64 بت؟",
    "options": [
      {
        "key": "A",
        "textEn": "Because it requires a key size of k = n * 2^n = 64 * 2^64 bits (~10^21 bits), which cannot be stored or exchanged",
        "textAr": "لأنها تتطلب مفتاحاً بطول k = n * 2^n = 64 * 2^64 بت (~10^21 بت)، وهو ما يستحيل تخزينه أو تبادله"
      },
      {
        "key": "B",
        "textEn": "Because 64-bit blocks cannot be decrypted by Feistel networks",
        "textAr": "لأن الكتل بطول 64 بت لا يمكن فك تشفيرها بشبكات فايستل"
      },
      {
        "key": "C",
        "textEn": "Because 64 is not a prime number",
        "textAr": "لأن 64 ليس عدداً أولياً"
      },
      {
        "key": "D",
        "textEn": "Because it produces odd parity bits",
        "textAr": "لأنها تنتج بتات تماثل فردية"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Ideal block cipher key size derivation: k = n * 2^n bits (Table 4.1).",
    "sourceRef": {
      "file": "Ch04(1).pptx",
      "pageOrSlide": "Slide 7"
    },
    "importantKeywords": [
      {
        "en": "Ideal block cipher key size explosion",
        "ar": "انفجار حجم مفتاح شفرة الكتل المثالية",
        "role": "trigger"
      },
      {
        "en": "k = n * 2^n bits",
        "ar": "k = n * 2^n بت",
        "role": "condition"
      },
      {
        "en": "64 * 2^64 bits (~10^21 bits)",
        "ar": "64 * 2^64 بت",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Ideal block cipher formula: Key length = n * 2^n bits. For 64-bit block -> ~10^21 bits (impossible to store).",
      "ar": "معادلة شفرة الكتل المثالية: طول المفتاح = n * 2^n بت. لكتلة 64 بت -> 10^21 بت (يستحيل تخزينه).",
      "targetConcept": "Ideal Block Cipher Key Explosion (Table 4.1)",
      "targetConceptAr": "انفجار مفتاح شفرة الكتل المثالية (جدول 4.1)"
    },
    "quickReasoning": {
      "en": "Specifying an arbitrary permutation of 2^64 states requires storing the mapping for every input, which is astronomical.",
      "ar": "تحديد تبديل عشوائي لـ 2^64 حالة يتطلب تخزين جدول كامل لكل مدخل، وهو حجم يفوق سعة كوكب الأرض."
    },
    "relatedLessonId": "ch4-l2"
  },
  {
    "id": "basmaga-ch4-04",
    "chapterId": "ch4",
    "topicId": "ch4-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 9",
    "type": "mcq",
    "questionEn": "In Claude Shannon's cryptographic design principles, what is the core role of DIFFUSION?",
    "questionAr": "في مبادئ التصميم التشفيري لكلود شانون، ما هو الدور الجوهري لمبدأ الانتشار (Diffusion)؟",
    "options": [
      {
        "key": "A",
        "textEn": "Spreading the statistical influence of individual plaintext digits across many ciphertext digits (via permutation)",
        "textAr": "نشر وتشتيت الأثر الإحصائي لحروف النص الصريح عبر العديد من حروف النص المشفر (عبر التبديل)"
      },
      {
        "key": "B",
        "textEn": "Making the relationship between the key and ciphertext as complex as possible",
        "textAr": "جعل العلاقة بين المفتاح والنص المشفر معقدة وغير خطية"
      },
      {
        "key": "C",
        "textEn": "Compressing data before transmission",
        "textAr": "ضغط البيانات قبل إرسالها"
      },
      {
        "key": "D",
        "textEn": "Generating 48-bit subkeys from PC-1",
        "textAr": "توليد مفاتيح فرعية بطول 48 بت"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Shannon's Confusion (complex key-ciphertext relation via substitution) vs Diffusion (spreading plaintext statistics via permutation).",
    "sourceRef": {
      "file": "Ch04(1).pptx",
      "pageOrSlide": "Slide 9"
    },
    "importantKeywords": [
      {
        "en": "Shannon's principle of Diffusion",
        "ar": "مبدأ الانتشار لشانون",
        "role": "trigger"
      },
      {
        "en": "Spreading statistical influence of plaintext",
        "ar": "نشر الأثر الإحصائي للنص الصريح",
        "role": "concept"
      },
      {
        "en": "Achieved via permutation",
        "ar": "يتحقق بواسطة التبديل Permutation",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Diffusion = Spread plaintext statistics (Permutation/P-box). Confusion = Make key relationship complex (Substitution/S-box).",
      "ar": "الانتشار (Diffusion) = تشتيت إحصاءات النص الصريح (تبديل/P-box). الخلط (Confusion) = تعقيد علاقة المفتاح (تعويض/S-box).",
      "targetConcept": "Shannon Confusion vs Diffusion",
      "targetConceptAr": "الخلط والانتشار لكلود شانون"
    },
    "quickReasoning": {
      "en": "Diffusion ensures each plaintext bit affects many ciphertext bits, flattening statistical frequencies.",
      "ar": "يضمن الانتشار تأثير كل بت صريح في عدد كبير من بتات النص المشفر، مما يلغي الخصائص الإحصائية."
    },
    "relatedLessonId": "ch4-l3"
  },
  {
    "id": "basmaga-ch4-05",
    "chapterId": "ch4",
    "topicId": "ch4-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 11",
    "type": "mcq",
    "questionEn": "In round i of a Feistel cipher network, what is the exact formula for the left half output L_i?",
    "questionAr": "في الجولة i من شبكة فايستل، ما هي المعادلة الدقيقة للخرج الأيسر L_i؟",
    "options": [
      {
        "key": "A",
        "textEn": "L_i = R_{i-1}",
        "textAr": "L_i = R_{i-1} (النصف الأيمن للجولة السابقة)"
      },
      {
        "key": "B",
        "textEn": "L_i = L_{i-1} XOR K_i",
        "textAr": "L_i = L_{i-1} XOR K_i"
      },
      {
        "key": "C",
        "textEn": "L_i = F(R_{i-1}, K_i)",
        "textAr": "L_i = F(R_{i-1}, K_i)"
      },
      {
        "key": "D",
        "textEn": "L_i = R_{i-1} XOR L_{i-1}",
        "textAr": "L_i = R_{i-1} XOR L_{i-1}"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Feistel round equations: L_i = R_{i-1} and R_i = L_{i-1} XOR F(R_{i-1}, K_i).",
    "sourceRef": {
      "file": "Ch04(1).pptx",
      "pageOrSlide": "Slide 11"
    },
    "importantKeywords": [
      {
        "en": "Feistel round left half output L_i",
        "ar": "الخرج الأيسر للجولة L_i في فايستل",
        "role": "trigger"
      },
      {
        "en": "L_i = R_{i-1}",
        "ar": "L_i = R_{i-1}",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Feistel halves swap: L_i is simply R_{i-1}. Only the right half R_i undergoes the XOR with F(R_{i-1}, K_i).",
      "ar": "تبادل نصفي فايستل: النصف الأيسر الجديد L_i هو ببساطة R_{i-1}. فقط النصف الأيمن R_i يخضع للـ XOR مع دالة F.",
      "targetConcept": "Feistel Round Half Swapping",
      "targetConceptAr": "تبادل نصفي شبكة فايستل"
    },
    "quickReasoning": {
      "en": "In Feistel ciphers, the right half passes unmodified to become the left half of the next round.",
      "ar": "في شبكات فايستل، ينتقل النصف الأيمن دون تعديل ليصبح هو النصف الأيسر للجولة التالية."
    },
    "relatedLessonId": "ch4-l4"
  },
  {
    "id": "basmaga-ch4-06",
    "chapterId": "ch4",
    "topicId": "ch4-t2",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2022 Q2.3 / Ch04(1).pptx Slide 14",
    "type": "true-false",
    "questionEn": "The heart of a Feistel block cipher is the round function F, which must be mathematically reversible to allow decryption.",
    "questionAr": "قلب شفرة الكتل فايستل هو دالة الجولة F، والتي يجب أن تكون قابلة للعكس رياضياً لإتاحة فك التشفير.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "B",
    "academicPoint": "Feistel decryption invertibility: function F does NOT need to be invertible because XOR self-inverts.",
    "sourceRef": {
      "file": "Ch04(1).pptx",
      "pageOrSlide": "Slide 14"
    },
    "importantKeywords": [
      {
        "en": "Feistel round function F must be reversible",
        "ar": "دالة فايستل F يجب أن تكون قابلة للعكس",
        "role": "trigger"
      },
      {
        "en": "False (F does NOT need to be reversible)",
        "ar": "خطأ (لا تشترط عكوسية دالة F)",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Feistel brilliance: Round function F DOES NOT NEED TO BE INVERTIBLE! The XOR property A XOR B XOR B = A cancels it out.",
      "ar": "عبقرية فايستل: دالة الجولة F لا تشترط العكوسية أبداً! لأن خاصية XOR الذاتية (A XOR B XOR B = A) تلغي تأثيرها تلقائياً.",
      "targetConcept": "Feistel F Function Invertibility",
      "targetConceptAr": "عدم اشتراط عكوسية دالة فايستل F"
    },
    "quickReasoning": {
      "en": "Decryption recalculates F with the same input, and XOR cancels the term regardless of F's internal invertibility.",
      "ar": "إجراء فك التشفير يعيد حساب نفس قيمة F، ويلغيها عامل الـ XOR دون حاجة لحساب معكوس F الداخلي."
    },
    "relatedLessonId": "ch4-l4"
  },
  {
    "id": "basmaga-ch4-07",
    "chapterId": "ch4",
    "topicId": "ch4-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 15",
    "type": "mcq",
    "questionEn": "In the structural design of a Feistel cipher, increasing the number of rounds produces which tradeoff?",
    "questionAr": "في التصميم البنيوي لشفرة فايستل، ما هي المقايضة الناتجة عن زيادة عدد الجولات؟",
    "options": [
      {
        "key": "A",
        "textEn": "Greater cryptographic security, but slower encryption throughput",
        "textAr": "أمان تشفيري أعلى، ولكن بسرعة تشفير أبطأ"
      },
      {
        "key": "B",
        "textEn": "Lower security, but faster execution",
        "textAr": "أمان أقل وبسرعة أعلى"
      },
      {
        "key": "C",
        "textEn": "Doubling of block size",
        "textAr": "مضاعفة حجم الكتلة تلقائياً"
      },
      {
        "key": "D",
        "textEn": "Elimination of subkey scheduling",
        "textAr": "إلغاء جدول توليد المفاتيح"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Feistel design tradeoff: security vs performance scaling with number of rounds.",
    "sourceRef": {
      "file": "Ch04(1).pptx",
      "pageOrSlide": "Slide 15"
    },
    "importantKeywords": [
      {
        "en": "Increasing number of rounds in Feistel",
        "ar": "زيادة عدد الجولات في فايستل",
        "role": "trigger"
      },
      {
        "en": "Greater security, slower execution",
        "ar": "أمان أكبر، تنفيذ أبطأ",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "More rounds = Higher security (avalanche spreads deeper), but Slower software/hardware throughput.",
      "ar": "جولات أكثر = أمان تشفيري أعلى (انتشار أعمق)، ولكن بسرعة تنفيذ وإنجاز أبطأ.",
      "targetConcept": "Feistel Number of Rounds Tradeoff",
      "targetConceptAr": "مقايضة عدد جولات فايستل"
    },
    "quickReasoning": {
      "en": "Typical block ciphers use 16 rounds (like DES) to balance cryptanalytic resistance with throughput.",
      "ar": "تعتمد الشفرات القياسية 16 جولة (مثل DES) للموازنة بين مقاومة التحليل وسرعة المعالجة."
    },
    "relatedLessonId": "ch4-l4"
  },
  {
    "id": "basmaga-ch4-08",
    "chapterId": "ch4",
    "topicId": "ch4-t3",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2022 Q2.2 & Midterm 2020 Q1.10",
    "type": "true-false",
    "questionEn": "The Data Encryption Standard (DES) uses a 56-bit block and a 64-bit key.",
    "questionAr": "يستخدم معيار تشفير البيانات (DES) كتلة بطول 56 بت ومفتاحاً بطول 64 بت.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "B",
    "academicPoint": "DES fundamental parameters: 64-bit plaintext block size and 56-bit effective secret key.",
    "sourceRef": {
      "file": "Ch04(1).pptx",
      "pageOrSlide": "Slide 17"
    },
    "importantKeywords": [
      {
        "en": "DES block and key sizes",
        "ar": "أبعاد كتلة ومفتاح DES",
        "role": "trigger"
      },
      {
        "en": "56-bit block and 64-bit key",
        "ar": "كتلة 56 ومفتاح 64",
        "role": "condition"
      },
      {
        "en": "False (Reversed: 64-bit block, 56-bit key)",
        "ar": "خطأ (معكوسة: كتلة 64 بت، مفتاح 56 بت)",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "DES Trap: The prompt swaps numbers! DES has a 64-bit BLOCK and a 56-bit EFFECTIVE KEY (8 parity bits discarded).",
      "ar": "فخ امتحاني: السؤال يعكس الأرقام! خوارزمية DES تملك كتلة 64 بت ومفتاحاً فعلياً بطول 56 بت.",
      "targetConcept": "DES Block & Key Sizes (64-bit block, 56-bit key)",
      "targetConceptAr": "أبعاد كتلة ومفتاح DES الحقيقية"
    },
    "quickReasoning": {
      "en": "DES block is 64 bits. Key input is 64 bits, but 8 parity bits are stripped by PC-1, leaving a 56-bit key.",
      "ar": "كتلة DES هي 64 بت، ومفتاحها الفعلي 56 بت بعد استبعاد 8 بتات تماثل في جدول PC-1."
    },
    "relatedLessonId": "ch4-l5"
  },
  {
    "id": "basmaga-ch4-09",
    "chapterId": "ch4",
    "topicId": "ch4-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 18",
    "type": "true-false",
    "questionEn": "The Initial Permutation (IP) and Inverse Initial Permutation (IP^(-1)) in DES contribute significantly to the cipher's mathematical strength against linear cryptanalysis.",
    "questionAr": "يسهم التبديل الأولي (IP) ومعكوس التبديل الأولي (IP^(-1)) في خوارزمية DES بشكل كبير في القوة الرياضية للشفرة ضد التحليل الخطي.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "B",
    "academicPoint": "Initial Permutation (IP) and IP^(-1) have no cryptographic strength; purely legacy hardware wiring.",
    "sourceRef": {
      "file": "Ch04(1).pptx",
      "pageOrSlide": "Slide 18"
    },
    "importantKeywords": [
      {
        "en": "Initial Permutation (IP) and IP^(-1) in DES",
        "ar": "التبديل الأولي ومعكوسه في DES",
        "role": "trigger"
      },
      {
        "en": "Contribute significantly to cryptographic strength",
        "ar": "يسهمان بقوة في الأمان التشفيري",
        "role": "condition"
      },
      {
        "en": "False (No cryptographic significance)",
        "ar": "خطأ (لا قيمة تشفيرية لهما)",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "IP and IP^(-1) have NO cryptographic significance! They are fixed unkeyed bit permutations used for 1970s hardware loading.",
      "ar": "التبديل الأولي ومعكوسه ليس لهما أي قيمة تشفيرية! هما مجرد إعادة ترتيب ثابتة للأسلاك لتسهيل التحميل في عتاد السبعينات.",
      "targetConcept": "DES Initial Permutation Significance",
      "targetConceptAr": "عدم الجدوى التشفيرية للتبديل الأولي في DES"
    },
    "quickReasoning": {
      "en": "IP and IP^(-1) are exact inverses with no key dependence, providing zero security against attacks.",
      "ar": "IP و IP^(-1) دالتان متعاكستان تماماً ومستقلتان عن المفتاح، ولا تضيفان أي مناعة ضد الهجمات."
    },
    "relatedLessonId": "ch4-l5"
  },
  {
    "id": "basmaga-ch4-10",
    "chapterId": "ch4",
    "topicId": "ch4-t3",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2020 Q1.8 & Q1.9",
    "type": "mcq",
    "questionEn": "Under the DES subkey generation schedule, how many total rounds are executed, and by how many bits are the key halves circular left-shifted in rounds 1, 2, 9, and 16?",
    "questionAr": "وفق جدول توليد المفاتيح الفرعية في DES، كم عدد الجولات الإجمالية، وبكم بت تتم الإزاحة الدائرية لليسار لنصفي المفتاح في الجولات 1، 2، 9، 16؟",
    "options": [
      {
        "key": "A",
        "textEn": "16 rounds; shifted by 1 bit",
        "textAr": "16 جولة؛ وتتم الإزاحة بمقدار 1 بت"
      },
      {
        "key": "B",
        "textEn": "16 rounds; shifted by 2 bits",
        "textAr": "16 جولة؛ وتتم الإزاحة بمقدار 2 بت"
      },
      {
        "key": "C",
        "textEn": "12 rounds; shifted by 1 bit",
        "textAr": "12 جولة؛ وتتم الإزاحة بمقدار 1 بت"
      },
      {
        "key": "D",
        "textEn": "32 rounds; shifted by 4 bits",
        "textAr": "32 جولة؛ وتتم الإزاحة بمقدار 4 بت"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "DES subkey schedule parameters: 16 rounds total; rounds 1, 2, 9, 16 shift by 1 bit; all other 12 rounds shift by 2 bits.",
    "sourceRef": {
      "file": "Ch04(1).pptx",
      "pageOrSlide": "Slide 20"
    },
    "importantKeywords": [
      {
        "en": "DES 16 rounds",
        "ar": "16 جولة في DES",
        "role": "trigger"
      },
      {
        "en": "Rounds 1, 2, 9, 16 shifted by 1 bit",
        "ar": "الجولات 1، 2، 9، 16 تُزاح بمقدار 1 بت",
        "role": "condition"
      },
      {
        "en": "Other rounds shifted by 2 bits",
        "ar": "باقي الجولات تُزاح بـ 2 بت",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "DES key schedule memory code: 16 rounds. Rounds 1, 2, 9, 16 shift by 1 bit. All other rounds shift by 2 bits.",
      "ar": "شفرة حفظ جدول DES: إجمالي 16 جولة. الجولات (1، 2، 9، 16) إزاحتها 1 بت فقط. باقي الجولات إزاحتها 2 بت.",
      "targetConcept": "DES Key Schedule Shifts",
      "targetConceptAr": "إزاحات جدول مفاتيح DES"
    },
    "quickReasoning": {
      "en": "Sum of shifts: 4*1 + 12*2 = 4 + 24 = 28 bits, restoring halves to their initial state after 16 rounds.",
      "ar": "مجموع الإزاحات: 4*1 + 12*2 = 28 بت، مما يعيد نصفي المفتاح لوضعهما الأصلي بعد 16 جولة."
    },
    "relatedLessonId": "ch4-l5"
  },
  {
    "id": "basmaga-ch4-11",
    "chapterId": "ch4",
    "topicId": "ch4-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 21",
    "type": "mcq",
    "questionEn": "In the DES round function F, the 32-bit right half R_{i-1} is expanded by the Expansion Permutation (E) to what bit length before XORing with the subkey K_i?",
    "questionAr": "في دالة الجولة F لخوارزمية DES، يتم توسيع النصف الأيمن R_{i-1} البالغ 32 بت عبر جدول التوسيع (E) إلى أي طول قبل إجراء XOR مع المفتاح الفرعي K_i؟",
    "options": [
      {
        "key": "A",
        "textEn": "48 bits",
        "textAr": "48 بت"
      },
      {
        "key": "B",
        "textEn": "56 bits",
        "textAr": "56 بت"
      },
      {
        "key": "C",
        "textEn": "64 bits",
        "textAr": "64 بت"
      },
      {
        "key": "D",
        "textEn": "32 bits",
        "textAr": "32 بت"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "DES Expansion Permutation E expands 32 bits to 48 bits to match round subkey length.",
    "sourceRef": {
      "file": "Ch04(1).pptx",
      "pageOrSlide": "Slide 21"
    },
    "importantKeywords": [
      {
        "en": "DES Expansion Permutation E",
        "ar": "جدول التوسيع E في DES",
        "role": "trigger"
      },
      {
        "en": "32 bits expanded to 48 bits",
        "ar": "توسيع 32 بت إلى 48 بت",
        "role": "concept"
      },
      {
        "en": "Matches 48-bit subkey K_i",
        "ar": "يطابق المفتاح الفرعي بطول 48 بت",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Expansion table E expands 32 bits -> 48 bits (to match the 48-bit subkey output from PC-2).",
      "ar": "جدول التوسيع E يحول 32 بت -> 48 بت (ليتطابق مع المفتاح الفرعي البالغ 48 بت الخارج من PC-2).",
      "targetConcept": "DES Expansion Permutation (32 to 48 bits)",
      "targetConceptAr": "جدول التوسيع في DES"
    },
    "quickReasoning": {
      "en": "Duplicating 16 bits expands the 32-bit vector to 48 bits to undergo bitwise XOR with subkey K_i.",
      "ar": "تكرار 16 بتاً يرفع المتجه من 32 إلى 48 بتاً ليتطابق مع أبعاد المفتاح الفرعي K_i."
    },
    "relatedLessonId": "ch4-l5"
  },
  {
    "id": "basmaga-ch4-12",
    "chapterId": "ch4",
    "topicId": "ch4-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 22",
    "type": "mcq",
    "questionEn": "In a DES Substitution Box (S-box), how are the row and column selected from the 6-bit input block?",
    "questionAr": "في صندوق الاستبدال (S-box) بخوارزمية DES، كيف يتم اختيار الصف والعمود من كتلة الدخل البالغة 6 بتات؟",
    "options": [
      {
        "key": "A",
        "textEn": "The outer 2 bits (bits 1 and 6) select the row; the middle 4 bits (bits 2, 3, 4, 5) select the column",
        "textAr": "البتان الخارجيان (1 و 6) يحددان الصف؛ والبتات الأربعة الداخلية (2، 3، 4، 5) تحدد العمود"
      },
      {
        "key": "B",
        "textEn": "The first 3 bits select the row; the last 3 bits select the column",
        "textAr": "البتات الثلاثة الأولى تحدد الصف، والبتات الثلاثة الأخيرة تحدد العمود"
      },
      {
        "key": "C",
        "textEn": "The middle 2 bits select the row; the outer 4 bits select the column",
        "textAr": "البتان الأوسطان يحددان الصف، والبتات الأربعة الخارجية تحدد العمود"
      },
      {
        "key": "D",
        "textEn": "The row is always 0; all 6 bits select the column",
        "textAr": "الصف دائماً 0، وكافة البتات تحدد العمود"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "DES S-box addressing: 6 bits in -> 4 bits out; outer bits (1, 6) give row (0-3), inner bits (2, 3, 4, 5) give col (0-15).",
    "sourceRef": {
      "file": "Ch04(1).pptx",
      "pageOrSlide": "Slide 22"
    },
    "importantKeywords": [
      {
        "en": "DES S-box 6-bit input addressing",
        "ar": "عنونة دخل صندوق S-box ذي الـ 6 بتات",
        "role": "trigger"
      },
      {
        "en": "Outer 2 bits (1 and 6) select row",
        "ar": "البتان الخارجيان يحددان الصف",
        "role": "condition"
      },
      {
        "en": "Inner 4 bits (2, 3, 4, 5) select column",
        "ar": "البتات الأربعة الداخلية تحدد العمود",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "DES S-Box Rule: Outer bits (ends) = Row (2 bits -> 4 rows). Inner bits (middle) = Column (4 bits -> 16 columns). Output is 4 bits.",
      "ar": "قاعدة صندوق S-box: الأطراف (الخارجيان) = الصف (بتان -> 4 صفوف). الوسط (الداخليات) = العمود (4 بتات -> 16 عموداً). الخرج 4 بت.",
      "targetConcept": "DES S-Box Row/Column Selection",
      "targetConceptAr": "تحديد صف وعمود صندوق S-box"
    },
    "quickReasoning": {
      "en": "Bits 1 and 6 form a 2-bit row index (0-3), and bits 2-5 form a 4-bit column index (0-15).",
      "ar": "البتان 1 و 6 يعطيان رقماً ثنائياً من 0 إلى 3 للصف، والبتات 2-5 تعطي رقماً من 0 إلى 15 للعمود."
    },
    "relatedLessonId": "ch4-l6"
  },
  {
    "id": "basmaga-ch4-13",
    "chapterId": "ch4",
    "topicId": "ch4-t3",
    "sourceType": "original-exam",
    "sourceLabel": "Original Exam: Midterm 2020 Question [3] (3)",
    "type": "mcq",
    "questionEn": "In DES, using S-box S2 with input bits 101111, which row and column are accessed?",
    "questionAr": "في خوارزمية DES، عند استخدام صندوق الاستبدال S2 مع كتلة الدخل 101111، أي صف وأي عمود يتم الوصول إليهما؟",
    "options": [
      {
        "key": "A",
        "textEn": "Row 3 (binary 11) and Column 7 (binary 0111)",
        "textAr": "الصف 3 (ثنائي 11) والعمود 7 (ثنائي 0111)"
      },
      {
        "key": "B",
        "textEn": "Row 1 and Column 15",
        "textAr": "الصف 1 والعمود 15"
      },
      {
        "key": "C",
        "textEn": "Row 2 and Column 8",
        "textAr": "الصف 2 والعمود 8"
      },
      {
        "key": "D",
        "textEn": "Row 0 and Column 14",
        "textAr": "الصف 0 والعمود 14"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Official Midterm 2020 S-box calculation: input 101111 has outer bits 11 (row 3) and inner bits 0111 (col 7).",
    "sourceRef": {
      "file": "Ch04(1).pptx",
      "pageOrSlide": "Slide 22"
    },
    "importantKeywords": [
      {
        "en": "S-box S2 input bits 101111",
        "ar": "دخل صندوق S2 بتات 101111",
        "role": "trigger"
      },
      {
        "en": "Outer bits 1...1 = row 3",
        "ar": "البتان الخارجيان 11 = صف 3",
        "role": "condition"
      },
      {
        "en": "Inner bits .0111. = col 7",
        "ar": "البتات الداخلية 0111 = عمود 7",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "For 101111: First bit = 1, Last bit = 1 -> Row is 11 (decimal 3). Middle 4 bits = 0111 -> Column is decimal 7.",
      "ar": "للعدد 101111: البت الأول 1 والأخير 1 -> الصف 11 (عشري 3). البتات الأربعة الوسطى 0111 -> العمود عشري 7.",
      "targetConcept": "DES S-Box Calculation (Midterm 2020)",
      "targetConceptAr": "مسألة حساب صندوق S-box في امتحان 2020"
    },
    "quickReasoning": {
      "en": "Outer bits 11 = 3 in decimal; middle bits 0111 = 7 in decimal.",
      "ar": "البتان الخارجيان 11 بالنظام العشري هما 3، والوسطى 0111 بالنظام العشري هي 7."
    },
    "relatedLessonId": "ch4-l6"
  },
  {
    "id": "basmaga-ch4-14",
    "chapterId": "ch4",
    "topicId": "ch4-t3",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 4 / Ch04(1).pptx Slide 25",
    "type": "mcq",
    "questionEn": "The Strict Avalanche Criterion (SAC) in modern block cipher and S-box design specifies that if any single input bit is inverted, each output bit should invert with what probability?",
    "questionAr": "ينص معيار الانهيار الصارم (SAC) في تصميم شفرات الكتل وصناديق S-box على أنه إذا تم عكس بت دخل وحيد، يجب أن ينعكس كل بت خرج باحتمالية قدرها:",
    "options": [
      {
        "key": "A",
        "textEn": "0.5 (exactly 50% probability)",
        "textAr": "0.5 (باحتمال 50% بالضبط)"
      },
      {
        "key": "B",
        "textEn": "1.0 (always inverts)",
        "textAr": "1.0 (ينعكس دائماً)"
      },
      {
        "key": "C",
        "textEn": "0.0 (never inverts)",
        "textAr": "0.0 (لا ينعكس أبداً)"
      },
      {
        "key": "D",
        "textEn": "0.25",
        "textAr": "0.25"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Strict Avalanche Criterion (SAC) mathematical condition: P(change) = 0.5 for all output bits.",
    "sourceRef": {
      "file": "Ch04(1).pptx",
      "pageOrSlide": "Slide 25"
    },
    "importantKeywords": [
      {
        "en": "Strict Avalanche Criterion (SAC)",
        "ar": "معيار الانهيار الصارم SAC",
        "role": "trigger"
      },
      {
        "en": "Inverting single input bit",
        "ar": "عكس بت دخل وحيد",
        "role": "condition"
      },
      {
        "en": "Probability 0.5",
        "ar": "احتمال 0.5 (النصف)",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Strict Avalanche Criterion (SAC) ALWAYS means probability 0.5 (50% flip). Uncorrelated randomness.",
      "ar": "معيار الانهيار الصارم (SAC) يعني دائماً احتمالية قدرها 0.5 (50% تغير)، مما يحاكي العشوائية المثالية.",
      "targetConcept": "Strict Avalanche Criterion (SAC)",
      "targetConceptAr": "معيار الانهيار الصارم (احتمال 0.5)"
    },
    "quickReasoning": {
      "en": "A 0.5 probability ensures outputs are statistically independent of any single input bit flip.",
      "ar": "احتمال 0.5 يضمن استقلال بتات الخرج إحصائياً عن أي تغيير في بتات الدخل."
    },
    "relatedLessonId": "ch4-l7"
  },
  {
    "id": "basmaga-ch7-01",
    "chapterId": "ch7",
    "topicId": "ch7-t1",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.3",
    "type": "true-false",
    "questionEn": "Double-DES with two independent 56-bit keys provides an effective security level equivalent to a 112-bit key against cryptanalytic attacks.",
    "questionAr": "يوفر التشفير المزدوج Double-DES بمفتاحين مستقلين بطول 56 بت مستوى أمان فعلياً يكافئ مفتاحاً بطول 112 بت ضد هجمات تحليل الشفرات.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "B",
    "academicPoint": "Insecurity of Double-DES: Meet-in-the-Middle attack reduces work factor from 2^112 to 2^57.",
    "sourceRef": {
      "file": "Ch07-Crypto(1).pdf",
      "pageOrSlide": "p.3"
    },
    "importantKeywords": [
      {
        "en": "Double-DES with two 56-bit keys",
        "ar": "Double-DES بمفتاحين 56 بت",
        "role": "trigger"
      },
      {
        "en": "Equivalent to 112-bit key",
        "ar": "يكافئ مفتاحاً بطول 112 بت",
        "role": "condition"
      },
      {
        "en": "False (vulnerable to Meet-in-the-Middle, cost 2^57)",
        "ar": "خطأ (عرضة لهجوم اللقاء في المنتصف بتكلفة 2^57)",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Double-DES DOES NOT provide 112-bit security! The Meet-in-the-Middle attack breaks it in only 2^57 operations.",
      "ar": "التشفير المزدوج Double-DES لا يوفر أمان 112 بت أبداً! هجوم اللقاء في المنتصف يكسره بتكلفة 2^57 عملية فقط.",
      "targetConcept": "Double-DES Vulnerability (False 112-bit Security)",
      "targetConceptAr": "وهم أمان الـ 112 بت في Double-DES"
    },
    "quickReasoning": {
      "en": "The Meet-in-the-Middle attack exploits intermediate value matching, reducing 2^112 to roughly 2^57.",
      "ar": "يستغل هجوم اللقاء في المنتصف مطابقة القيمة الوسيطة، مما يخفض التعقيد الحسابي من 2^112 إلى 2^57 تقريباً."
    },
    "relatedLessonId": "ch7-l1"
  },
  {
    "id": "basmaga-ch7-02",
    "chapterId": "ch7",
    "topicId": "ch7-t1",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.4",
    "type": "mcq",
    "questionEn": "In a Meet-in-the-Middle attack on Double-DES (C = E_K2(E_K1(P))), what intermediate mathematical value is matched to expose the secret keys?",
    "questionAr": "في هجوم اللقاء في المنتصف ضد Double-DES (المعادل لـ C = E_K2(E_K1(P)))، ما هي القيمة الرياضية الوسيطة التي تتم مطابقتها لكشف المفاتيح؟",
    "options": [
      {
        "key": "A",
        "textEn": "X = E_K1(P) matches X = D_K2(C)",
        "textAr": "X = E_K1(P) يطابق X = D_K2(C)"
      },
      {
        "key": "B",
        "textEn": "P XOR C",
        "textAr": "P XOR C"
      },
      {
        "key": "C",
        "textEn": "K1 + K2 mod 56",
        "textAr": "K1 + K2 mod 56"
      },
      {
        "key": "D",
        "textEn": "IP(P) matches IP^(-1)(C)",
        "textAr": "IP(P) يطابق IP^(-1)(C)"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Meet-in-the-Middle intermediate condition: E_K1(P) = D_K2(C).",
    "sourceRef": {
      "file": "Ch07-Crypto(1).pdf",
      "pageOrSlide": "p.4"
    },
    "importantKeywords": [
      {
        "en": "Meet-in-the-Middle attack on Double-DES",
        "ar": "هجوم اللقاء في المنتصف على Double-DES",
        "role": "trigger"
      },
      {
        "en": "Intermediate value matched",
        "ar": "مطابقة القيمة الوسيطة",
        "role": "condition"
      },
      {
        "en": "E_K1(P) = D_K2(C)",
        "ar": "تشفير الصريح بمفتاح 1 يساوي فك المشفر بمفتاح 2",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Meet-in-the-Middle meets halfway: Forward encryption E_K1(P) equals backward decryption D_K2(C).",
      "ar": "اللقاء في المنتصف: التشفير للأمام E_K1(P) يلتقي مع فك التشفير للخلف D_K2(C) في نقطة وسطى X.",
      "targetConcept": "Meet-in-the-Middle Intermediate Condition",
      "targetConceptAr": "شرط التطابق الوسيط في هجوم اللقاء في المنتصف"
    },
    "quickReasoning": {
      "en": "By storing all 2^56 values of E_K1(P) in a hash table and decrypting C with candidate K2, a match identifies candidate keys.",
      "ar": "تخزين 2^56 قيمة لـ E_K1(P) في جدول ومطابقتها مع فك تشفير C يحدد المفاتيح الصحيحة بكفاءة O(2^56)."
    },
    "relatedLessonId": "ch7-l1"
  },
  {
    "id": "basmaga-ch7-03",
    "chapterId": "ch7",
    "topicId": "ch7-t1",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.7",
    "type": "mcq",
    "questionEn": "Triple-DES utilizes an Encrypt-Decrypt-Encrypt (EDE) sequence rather than Encrypt-Encrypt-Encrypt (EEE) primarily to:",
    "questionAr": "تستخدم خوارزمية Triple-DES تسلسل تشفير-فك-تشفير (EDE) بدلاً من تشفير-تشفير-تشفير (EEE) لسبب رئيسي هو:",
    "options": [
      {
        "key": "A",
        "textEn": "Preserve backward compatibility with single DES by setting identical keys (K1 = K2)",
        "textAr": "الحفاظ على التوافق العكسي مع نظام DES الأحادي القديم بتعيين مفاتيح متطابقة (K1 = K2)"
      },
      {
        "key": "B",
        "textEn": "Double the block size from 64 to 128 bits",
        "textAr": "مضاعفة حجم الكتلة من 64 إلى 128 بت"
      },
      {
        "key": "C",
        "textEn": "Prevent differential cryptanalysis completely",
        "textAr": "منع التحليل التفاضلي تماماً"
      },
      {
        "key": "D",
        "textEn": "Eliminate the need for S-box non-linearity",
        "textAr": "إلغاء الحاجة لصناديق الاستبدال S-box"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Purpose of 3DES EDE architecture: backward compatibility with single DES.",
    "sourceRef": {
      "file": "Ch07-Crypto(1).pdf",
      "pageOrSlide": "p.7"
    },
    "importantKeywords": [
      {
        "en": "Triple-DES EDE sequence",
        "ar": "تسلسل EDE في Triple-DES",
        "role": "trigger"
      },
      {
        "en": "Encrypt-Decrypt-Encrypt",
        "ar": "تشفير - فك تشفير - تشفير",
        "role": "condition"
      },
      {
        "en": "Backward compatibility with single DES",
        "ar": "التوافق العكسي مع DES الأحادي",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Why EDE instead of EEE? Backward compatibility with single DES! Setting K1 = K2 = K3 cancels the first two steps.",
      "ar": "لماذا نستخدم EDE وليس EEE؟ للتوافق العكسي مع DES الأحادي! جعل K1 = K2 يلغي أول خطوتين.",
      "targetConcept": "3DES EDE Backward Compatibility",
      "targetConceptAr": "التوافق العكسي لمعمارية 3DES EDE"
    },
    "quickReasoning": {
      "en": "When K1 = K2, E_K1 and D_K1 cancel out: E_K3(D_K1(E_K1(P))) = E_K3(P), operating as single DES.",
      "ar": "عندما يتطابق K1 مع K2، تلغي الدالتان بعضهما: E_K3(D_K1(E_K1(P))) = E_K3(P) فيعمل النظام كـ DES أحادي."
    },
    "relatedLessonId": "ch7-l2"
  },
  {
    "id": "basmaga-ch7-04",
    "chapterId": "ch7",
    "topicId": "ch7-t1",
    "sourceType": "lecture",
    "sourceLabel": "Lecture Question: Ch 7 PDF p.7 / Slide 8",
    "type": "true-false",
    "questionEn": "In Triple-DES with two keys (3DES-EDE2), setting key K1 equal to key K2 produces standard single DES encryption with key K3.",
    "questionAr": "في تشفير Triple-DES بمفتاحين (3DES-EDE2)، يؤدي تعيين المفتاح K1 مساوياً للمفتاح K2 إلى إنتاج تشفير DES أحادي قياسي بالمفتاح K3.",
    "options": [
      {
        "key": "A",
        "textEn": "True",
        "textAr": "صواب"
      },
      {
        "key": "B",
        "textEn": "False",
        "textAr": "خطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Mathematical proof of 3DES cancellation: D_K1(E_K1(P)) = P.",
    "sourceRef": {
      "file": "Ch07-Crypto(1).pdf",
      "pageOrSlide": "p.7"
    },
    "importantKeywords": [
      {
        "en": "Setting K1 equal to K2 in 3DES-EDE",
        "ar": "جعل K1 مساوياً لـ K2 في 3DES-EDE",
        "role": "trigger"
      },
      {
        "en": "Produces single DES encryption",
        "ar": "ينتج تشفير DES أحادي",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "K1 = K2 in EDE: E_K1 followed by D_K1 is identity function P -> Result is simply E_K3(P).",
      "ar": "K1 = K2 في نمط EDE: التشفير يتبعه فك التشفير بالمفتاح ذاته يعيد النص الصريح P، فيتبقى تشفير أحادي بـ K3.",
      "targetConcept": "3DES Identity Cancellation",
      "targetConceptAr": "خاصية إلغاء العمليات في 3DES"
    },
    "quickReasoning": {
      "en": "Decryption is the exact mathematical inverse of encryption under the same key.",
      "ar": "فك التشفير هو المعكوس الرياضي الدقيق لعملية التشفير تحت المفتاح نفسه."
    },
    "relatedLessonId": "ch7-l2"
  },
  {
    "id": "basmaga-ch7-05",
    "chapterId": "ch7",
    "topicId": "ch7-t1",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.8",
    "type": "mcq",
    "questionEn": "Two-key Triple-DES (3DES-EDE2, where K1 = K3) utilizes what total effective key length?",
    "questionAr": "يستخدم تشفير Triple-DES بمفتاحين (3DES-EDE2، حيث K1 = K3) ما هو الطول الإجمالي الفعال للمفتاح؟",
    "options": [
      {
        "key": "A",
        "textEn": "112 bits (2 * 56 bits)",
        "textAr": "112 بت (2 * 56 بت)"
      },
      {
        "key": "B",
        "textEn": "168 bits (3 * 56 bits)",
        "textAr": "168 بت (3 * 56 بت)"
      },
      {
        "key": "C",
        "textEn": "56 bits",
        "textAr": "56 بت"
      },
      {
        "key": "D",
        "textEn": "128 bits",
        "textAr": "128 بت"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Two-key 3DES has 112 bits (2 x 56), while Three-key 3DES has 168 bits (3 x 56).",
    "sourceRef": {
      "file": "Ch07-Crypto(1).pdf",
      "pageOrSlide": "p.8"
    },
    "importantKeywords": [
      {
        "en": "Two-key Triple-DES (3DES-EDE2)",
        "ar": "Triple-DES بمفتاحين",
        "role": "trigger"
      },
      {
        "en": "Total effective key length is 112 bits",
        "ar": "الطول الإجمالي 112 بت",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "3DES Key Lengths: 2-key 3DES = 112 bits (2 * 56). 3-key 3DES = 168 bits (3 * 56).",
      "ar": "أطوال مفاتيح 3DES: بمفتاحين = 112 بت (2 * 56). بثلاثة مفاتيح = 168 بت (3 * 56).",
      "targetConcept": "3DES Key Lengths (112 vs 168 bits)",
      "targetConceptAr": "أطوال مفاتيح 3DES (112 مقابل 168 بت)"
    },
    "quickReasoning": {
      "en": "Two independent 56-bit DES keys yield 56 + 56 = 112 bits of key material.",
      "ar": "مفتاحان مستقلان من مفاتيح DES بطول 56 بت يمنحان 56 + 56 = 112 بت من مادة المفاتيح."
    },
    "relatedLessonId": "ch7-l2"
  },
  {
    "id": "basmaga-ch7-06",
    "chapterId": "ch7",
    "topicId": "ch7-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 7 / Table 7.1",
    "type": "mcq",
    "questionEn": "Which standard block cipher mode of operation encrypts each 64-bit plaintext block independently using the exact same secret key?",
    "questionAr": "أي نمط من أنماط تشغيل الشفرات الكتلية القياسية يقوم بتشفير كل كتلة صريحة 64 بت بشكل مستقل تماماً باستخدام نفس المفتاح السري؟",
    "options": [
      {
        "key": "A",
        "textEn": "Electronic Codebook (ECB)",
        "textAr": "كتاب الشفرة الإلكتروني (Electronic Codebook - ECB)"
      },
      {
        "key": "B",
        "textEn": "Cipher Block Chaining (CBC)",
        "textAr": "تسلسل كتل الشفرة (CBC)"
      },
      {
        "key": "C",
        "textEn": "Cipher Feedback (CFB)",
        "textAr": "التغذية الراجعة للشفرة (CFB)"
      },
      {
        "key": "D",
        "textEn": "Counter (CTR)",
        "textAr": "نمط العداد (CTR)"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Definition of Electronic Codebook (ECB) mode: independent encryption of blocks with same key.",
    "sourceRef": {
      "file": "Ch07-Crypto(1).pdf",
      "pageOrSlide": "p.10"
    },
    "importantKeywords": [
      {
        "en": "Encrypts each 64-bit block independently",
        "ar": "يشفر كل كتلة 64 بت بشكل مستقل",
        "role": "trigger"
      },
      {
        "en": "Exact same key",
        "ar": "نفس المفتاح بالضبط",
        "role": "condition"
      },
      {
        "en": "Electronic Codebook (ECB)",
        "ar": "كتاب الشفرة الإلكتروني ECB",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "Independent block encryption with same key = ECB (Electronic Codebook). Simple, but leaks data patterns.",
      "ar": "تشفير الكتل بشكل مستقل بنفس المفتاح = نمط ECB. بسيط، لكنه يسرب أنماط وتكرارات البيانات.",
      "targetConcept": "ECB Mode Independent Blocks",
      "targetConceptAr": "استقلالية الكتل في نمط ECB"
    },
    "quickReasoning": {
      "en": "ECB maps each block directly through the cipher with no chaining or randomization.",
      "ar": "يمرر نمط ECB كل كتلة مباشرة عبر الشفرة دون أي ربط تسلسلي أو تشويش عشوائي."
    },
    "relatedLessonId": "ch7-l3"
  },
  {
    "id": "basmaga-ch7-07",
    "chapterId": "ch7",
    "topicId": "ch7-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.11",
    "type": "mcq",
    "questionEn": "What is the primary cryptographic vulnerability of Electronic Codebook (ECB) mode when encrypting structured messages or bitmap images?",
    "questionAr": "ما هي الثغرة التشفيرية الأساسية لنمط كتاب الشفرة الإلكتروني (ECB) عند تشفير الرسائل المنظمة أو الصور النقطية؟",
    "options": [
      {
        "key": "A",
        "textEn": "Identical plaintext blocks always produce identical ciphertext blocks, leaking structural patterns",
        "textAr": "الكتل الصريحة المتطابقة تنتج دائماً كتلاً مشفرة متطابقة، مما يسرب الأنماط البنيوية والتكرارات"
      },
      {
        "key": "B",
        "textEn": "Bit errors in transmission propagate infinitely to all subsequent blocks",
        "textAr": "أخطاء البتات تنتشر بشكل لا نهائي إلى كافة الكتل التالية"
      },
      {
        "key": "C",
        "textEn": "It cannot be implemented in software",
        "textAr": "لا يمكن تنفيذه برمجياً"
      },
      {
        "key": "D",
        "textEn": "It requires asymmetric private keys",
        "textAr": "يتطلب مفاتيح خاصة غير متماثلة"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "ECB identical block pattern leakage vulnerability and susceptibility to cut-and-paste attacks.",
    "sourceRef": {
      "file": "Ch07-Crypto(1).pdf",
      "pageOrSlide": "p.11"
    },
    "importantKeywords": [
      {
        "en": "Cryptographic vulnerability of ECB",
        "ar": "الثغرة التشفيرية لنمط ECB",
        "role": "trigger"
      },
      {
        "en": "Identical plaintext blocks produce identical ciphertext blocks",
        "ar": "الكتل المتطابقة تنتج كتلاً مشفرة متطابقة",
        "role": "concept"
      },
      {
        "en": "Leaking structural patterns",
        "ar": "تسريب الأنماط الهيكلية",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "ECB Flaw: Same plaintext block -> SAME ciphertext block! Enables pattern leakage (e.g. ECB Tux penguin) and cut-and-paste attacks.",
      "ar": "عيب ECB القاتل: نفس الكتلة الصريحة -> نفس الكتلة المشفرة بالضبط! مما يسرب الأنماط (صورة البطريق) ويتيح هجمات القص واللصق.",
      "targetConcept": "ECB Pattern Leakage Weakness",
      "targetConceptAr": "تسريب الأنماط في نمط ECB"
    },
    "quickReasoning": {
      "en": "Deterministic block mapping preserves repeating block patterns across messages.",
      "ar": "التطابق الحتمي للكتل يحفظ تكرار الأنماط والكتل المتشابهة عبر الرسائل."
    },
    "relatedLessonId": "ch7-l3"
  },
  {
    "id": "basmaga-ch7-08",
    "chapterId": "ch7",
    "topicId": "ch7-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.13",
    "type": "mcq",
    "questionEn": "In Cipher Block Chaining (CBC) mode, what is the exact input fed into the block encryption algorithm for block i?",
    "questionAr": "في نمط تسلسل كتل الشفرة (CBC)، ما هو المدخل الفعلي الذي يُمرر إلى خوارزمية تشفير الكتلة للكتلة i؟",
    "options": [
      {
        "key": "A",
        "textEn": "P_i XOR C_{i-1} (the XOR of current plaintext and previous ciphertext block)",
        "textAr": "P_i XOR C_{i-1} (ناتج XOR بين النص الصريح الحالي والكتلة المشفرة السابقة)"
      },
      {
        "key": "B",
        "textEn": "P_i XOR K_i",
        "textAr": "P_i XOR K_i"
      },
      {
        "key": "C",
        "textEn": "Only P_i directly without modification",
        "textAr": "P_i مباشرة دون أي تعديل"
      },
      {
        "key": "D",
        "textEn": "E_K(C_{i-1})",
        "textAr": "E_K(C_{i-1})"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "CBC encryption equation: C_i = E_K(P_i XOR C_{i-1}) with C_0 = IV.",
    "sourceRef": {
      "file": "Ch07-Crypto(1).pdf",
      "pageOrSlide": "p.13"
    },
    "importantKeywords": [
      {
        "en": "Cipher Block Chaining (CBC) mode input",
        "ar": "مدخل التشفير في نمط CBC",
        "role": "trigger"
      },
      {
        "en": "P_i XOR C_{i-1}",
        "ar": "P_i XOR C_{i-1}",
        "role": "concept"
      },
      {
        "en": "XOR of current plaintext and previous ciphertext",
        "ar": "XOR بين النص الصريح الحالي والكتلة المشفرة السابقة",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "CBC chaining: Current plaintext P_i is XORed with previous ciphertext C_{i-1} before encryption. C_0 is the IV.",
      "ar": "تسلسل CBC: يُدمج النص الصريح الحالي P_i عبر XOR مع المشفر السابق C_{i-1} قبل التشفير، و C_0 هو متجه التهيئة IV.",
      "targetConcept": "CBC Chaining Equation",
      "targetConceptAr": "معادلة تسلسل نمط CBC"
    },
    "quickReasoning": {
      "en": "Chaining ensures identical plaintext blocks produce distinct ciphertext blocks depending on preceding ciphertexts.",
      "ar": "التسلسل يضمن أن الكتل الصريحة المتماثلة تنتج كتلاً مشفرة مختلفة تماماً حسب تاريخ الكتل السابقة."
    },
    "relatedLessonId": "ch7-l4"
  },
  {
    "id": "basmaga-ch7-09",
    "chapterId": "ch7",
    "topicId": "ch7-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.14",
    "type": "mcq",
    "questionEn": "In Cipher Block Chaining (CBC) mode, if a 1-bit transmission error occurs in ciphertext block C_i on the wire, how does it affect decryption?",
    "questionAr": "في نمط تسلسل كتل الشفرة (CBC)، إذا وقع خطأ في بت واحد أثناء إرسال الكتلة المشفرة C_i على خط الاتصال، كيف يؤثر ذلك على فك التشفير؟",
    "options": [
      {
        "key": "A",
        "textEn": "Block P_i is completely scrambled, exactly 1 bit is inverted in P_{i+1}, and subsequent blocks decrypt perfectly",
        "textAr": "تتشوه الكتلة P_i بالكامل، وينعكس بت واحد مطابق في P_{i+1}، وتُفك باقي الكتل اللاحقة بشكل سليم تماماً"
      },
      {
        "key": "B",
        "textEn": "All subsequent plaintext blocks in the entire message are permanently corrupted",
        "textAr": "تفسد كافة الكتل الصريحة اللاحقة في الرسالة بالكامل بصورة دائمة"
      },
      {
        "key": "C",
        "textEn": "Only 1 bit is flipped in P_i with zero effect on P_{i+1}",
        "textAr": "ينقلب بت واحد فقط في P_i دون أي أثر على P_{i+1}"
      },
      {
        "key": "D",
        "textEn": "The secret key is permanently destroyed",
        "textAr": "يُدمر المفتاح السري نهائياً"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "CBC 1-bit error propagation: complete corruption of P_i, identical single bit flip in P_{i+1}, self-recovering for P_{i+2 onwards}.",
    "sourceRef": {
      "file": "Ch07-Crypto(1).pdf",
      "pageOrSlide": "p.14"
    },
    "importantKeywords": [
      {
        "en": "CBC 1-bit transmission error propagation",
        "ar": "انتشار خطأ البت الواحد في CBC",
        "role": "trigger"
      },
      {
        "en": "P_i is completely scrambled",
        "ar": "P_i تتشوه بالكامل",
        "role": "condition"
      },
      {
        "en": "1 bit flipped in P_{i+1}, self-recovering afterwards",
        "ar": "بت واحد ينقلب في P_{i+1} ثم يتعافى ذاتياً",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "CBC Error Propagation: Corrupted ciphertext C_i destroys P_i completely (avalanche in D_K), flips 1 bit in P_{i+1} (XOR), and STOPs there!",
      "ar": "انتشار الخطأ في CBC: تشوه C_i يدمر P_i بالكامل، ويقلب بت واحد مطابق في P_{i+1}، ويتوقف عند هذا الحد (يتعافى ذاتياً).",
      "targetConcept": "CBC Error Propagation (Self-Recovering)",
      "targetConceptAr": "انتشار الأخطاء في نمط CBC والتعافي الذاتي"
    },
    "quickReasoning": {
      "en": "Decryption equation P_{i+1} = D_K(C_{i+1}) XOR C_i shows C_i only affects P_i and P_{i+1}.",
      "ar": "معادلة فك التشفير P_{i+1} = D_K(C_{i+1}) XOR C_i تثبت أن C_i يؤثر في P_i و P_{i+1} فقط ولا يتعداهما."
    },
    "relatedLessonId": "ch7-l4"
  },
  {
    "id": "basmaga-ch7-10",
    "chapterId": "ch7",
    "topicId": "ch7-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 7 / PKCS#7 Standard",
    "type": "mcq",
    "questionEn": "Under the PKCS#7 message padding standard, if a plaintext requires N bytes of padding to fill the final block, what value is assigned to each of those N padding bytes?",
    "questionAr": "وفق معيار حشو الرسائل PKCS#7، إذا كان النص الصريح يحتاج إلى N بايت من الحشو لإكمال الكتلة الأخيرة، فما هي القيمة المعينة لكل بايت من تلك البايتات الـ N؟",
    "options": [
      {
        "key": "A",
        "textEn": "The byte value N (e.g., if 3 bytes are needed, append 0x03 0x03 0x03)",
        "textAr": "القيمة البايتية N (مثلاً إذا احتجنا 3 بايتات، يُضاف 0x03 0x03 0x03)"
      },
      {
        "key": "B",
        "textEn": "All zeros (0x00)",
        "textAr": "أصفار دائماً (0x00)"
      },
      {
        "key": "C",
        "textEn": "Random cryptographic noise",
        "textAr": "ضجيج تشفيري عشوائي"
      },
      {
        "key": "D",
        "textEn": "All ones (0xFF)",
        "textAr": "وحدات دائماً (0xFF)"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "PKCS#7 padding value assignment: appends N bytes each having value N.",
    "sourceRef": {
      "file": "Ch07-Crypto(1).pdf",
      "pageOrSlide": "p.16"
    },
    "importantKeywords": [
      {
        "en": "PKCS#7 padding standard",
        "ar": "معيار الحشو PKCS#7",
        "role": "trigger"
      },
      {
        "en": "N bytes of padding",
        "ar": "N بايت من الحشو",
        "role": "condition"
      },
      {
        "en": "Each byte has value N",
        "ar": "كل بايت يحمل القيمة N",
        "role": "concept"
      }
    ],
    "basmagaRule": {
      "en": "PKCS#7 Rule: The padding bytes contain their own count! Need 4 bytes? Pad with 0x04 0x04 0x04 0x04.",
      "ar": "قاعدة PKCS#7: بايتات الحشو تحمل قيمة عددها! تحتاج 4 بايتات؟ أضف 0x04 0x04 0x04 0x04.",
      "targetConcept": "PKCS#7 Padding Value Rule",
      "targetConceptAr": "قاعدة قيم بايتات الحشو في PKCS#7"
    },
    "quickReasoning": {
      "en": "Storing the count allows the receiver to inspect the last byte and strip exactly that many bytes unambiguously.",
      "ar": "تخزين العدد داخل البايت يتيح للمستلم فحص آخر بايت وحذف ذلك العدد من البايتات بدقة ودون لبس."
    },
    "relatedLessonId": "ch7-l5"
  },
  {
    "id": "basmaga-ch7-11",
    "chapterId": "ch7",
    "topicId": "ch7-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.16",
    "type": "mcq",
    "questionEn": "Under PKCS#7 padding, what happens if the plaintext message length is ALREADY an exact multiple of the block size (e.g. exactly 64 bits)?",
    "questionAr": "وفق معيار الحشو PKCS#7، ماذا يحدث إذا كان طول النص الصريح مضاعفاً تاماً لحجم الكتلة بالفعل (مثلاً 64 بت بالضبط)؟",
    "options": [
      {
        "key": "A",
        "textEn": "A full additional dummy block of padding is appended (e.g. 8 bytes of 0x08)",
        "textAr": "تتم إضافة كتلة حشو كاملة إضافية (مثلاً 8 بايتات كل منها يحمل القيمة 0x08)"
      },
      {
        "key": "B",
        "textEn": "No padding is added at all",
        "textAr": "لا يُضاف أي حشو إطلاقاً"
      },
      {
        "key": "C",
        "textEn": "Only 1 single byte of 0x00 is added",
        "textAr": "يُضاف بايت واحد بقيمة 0x00"
      },
      {
        "key": "D",
        "textEn": "The message is rejected as an error",
        "textAr": "تُرفض الرسالة كخطأ"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "PKCS#7 full-block padding rule for exact block multiples to ensure unambiguous de-padding.",
    "sourceRef": {
      "file": "Ch07-Crypto(1).pdf",
      "pageOrSlide": "p.16"
    },
    "importantKeywords": [
      {
        "en": "Plaintext is exact multiple of block size",
        "ar": "النص الصريح مضاعف تام لحجم الكتلة",
        "role": "trigger"
      },
      {
        "en": "Full additional block of padding appended",
        "ar": "إضافة كتلة حشو كاملة إضافية",
        "role": "concept"
      },
      {
        "en": "8 bytes of 0x08 for 64-bit block",
        "ar": "8 بايتات بقيمة 0x08 لكتلة 64 بت",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "PKCS#7 Full Block Trap: Even if message aligns perfectly, you MUST add a whole dummy block (8 bytes of 0x08) to remove ambiguity!",
      "ar": "فخ PKCS#7: حتى لو كانت الرسالة مكتملة الكتل تماماً، يجب إضافة قالب حشو كامل إضافي (8 بايتات 0x08) لمنع اللبس!",
      "targetConcept": "PKCS#7 Full Block Padding Rule",
      "targetConceptAr": "قاعدة الكتلة الكاملة في حشو PKCS#7"
    },
    "quickReasoning": {
      "en": "Without the dummy block, a receiver could mistake valid message payload ending in 0x01 as padding and delete it.",
      "ar": "بدون القالب الإضافي، قد يظن المستلم أن بيانات الرسالة الأصلية المنتهية بـ 0x01 هي حشو ويحذفها بالخطأ."
    },
    "relatedLessonId": "ch7-l5"
  },
  {
    "id": "basmaga-ch7-12",
    "chapterId": "ch7",
    "topicId": "ch7-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 7 / Table 7.1",
    "type": "mcq",
    "questionEn": "In Cipher Feedback (CFB) mode, how is the block cipher converted into a stream cipher to encrypt real-time character streams?",
    "questionAr": "في نمط التغذية الراجعة للشفرة (CFB)، كيف يتم تحويل شفرة الكتل إلى شفرة تدفق لتشفير سيل الحروف اللحظي؟",
    "options": [
      {
        "key": "A",
        "textEn": "Previous ciphertext segments are fed back into a shift register which is encrypted to generate keystream bits",
        "textAr": "يتم إرجاع مقاطع النص المشفر السابقة إلى سجل إزاحة يُشفر لإنتاج بتات تدفق المفتاح"
      },
      {
        "key": "B",
        "textEn": "The key is incremented by 1 for each character",
        "textAr": "يُزاد المفتاح بمقدار 1 لكل حرف"
      },
      {
        "key": "C",
        "textEn": "The block size is dynamically reduced to 8 bits",
        "textAr": "يُقلص حجم الكتلة ديناميكياً إلى 8 بتات"
      },
      {
        "key": "D",
        "textEn": "Decryption is eliminated completely",
        "textAr": "تُلغى عملية فك التشفير تماماً"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "CFB operational mechanism: ciphertext feedback into shift register; self-synchronizing stream mode.",
    "sourceRef": {
      "file": "Ch07-Crypto(1).pdf",
      "pageOrSlide": "p.18"
    },
    "importantKeywords": [
      {
        "en": "Cipher Feedback (CFB) mode",
        "ar": "نمط التغذية الراجعة للشفرة CFB",
        "role": "trigger"
      },
      {
        "en": "Previous ciphertext fed back into shift register",
        "ar": "تغذية راجعة للمشفر السابق في سجل الإزاحة",
        "role": "concept"
      },
      {
        "en": "Stream cipher conversion",
        "ar": "التحويل لشفرة تدفق",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "Cipher Feedback (CFB): Feedback comes from CIPHERTEXT. Self-synchronizing, but bit errors in ciphertext propagate.",
      "ar": "التغذية الراجعة للشفرة (CFB): التغذية الراجعة مصدرها النص المشفر. متزامن ذاتياً، لكن أخطاء البتات تنتشر.",
      "targetConcept": "CFB Mode Mechanics",
      "targetConceptAr": "آلية عمل نمط CFB"
    },
    "quickReasoning": {
      "en": "Encrypting the shift register containing past ciphertext produces the next pseudorandom mask.",
      "ar": "تشفير سجل الإزاحة الحاوي على المشفر السابق يولد قناع المفتاح للبتات القادمة."
    },
    "relatedLessonId": "ch7-l6"
  },
  {
    "id": "basmaga-ch7-13",
    "chapterId": "ch7",
    "topicId": "ch7-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 7 / Table 7.1",
    "type": "mcq",
    "questionEn": "Which stream mode of a block cipher does NOT suffer from error propagation (a 1-bit ciphertext error affects ONLY that exact 1 bit in decrypted plaintext)?",
    "questionAr": "أي نمط تدفقي لشفرات الكتل لا يعاني من انتشار الأخطاء (حيث يؤثر خطأ البت الواحد في النص المشفر على نفس ذلك البت فقط في النص المفكوك)؟",
    "options": [
      {
        "key": "A",
        "textEn": "Output Feedback (OFB)",
        "textAr": "التغذية الراجعة للمخرجات (Output Feedback - OFB)"
      },
      {
        "key": "B",
        "textEn": "Cipher Block Chaining (CBC)",
        "textAr": "تسلسل كتل الشفرة (CBC)"
      },
      {
        "key": "C",
        "textEn": "Cipher Feedback (CFB)",
        "textAr": "التغذية الراجعة للشفرة (CFB)"
      },
      {
        "key": "D",
        "textEn": "Electronic Codebook (ECB)",
        "textAr": "كتاب الشفرة الإلكتروني (ECB)"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "OFB keystream generation independence from ciphertext: feedback is from encryption output, eliminating error propagation.",
    "sourceRef": {
      "file": "Ch07-Crypto(1).pdf",
      "pageOrSlide": "p.20"
    },
    "importantKeywords": [
      {
        "en": "Output Feedback (OFB) mode",
        "ar": "نمط التغذية الراجعة للمخرجات OFB",
        "role": "trigger"
      },
      {
        "en": "NO error propagation",
        "ar": "انعدام انتشار الأخطاء",
        "role": "concept"
      },
      {
        "en": "1-bit ciphertext error affects only 1-bit in plaintext",
        "ar": "خطأ البت الواحد يؤثر في بت واحد فقط",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "OFB advantage: Feedback taken from OUTPUT of cipher, NOT ciphertext! Transmission bit errors DO NOT PROPAGATE (ideal for noisy satellite links).",
      "ar": "ميزة نمط OFB: التغذية الراجعة تؤخذ من مخرجات التشفير وليس من المشفر! أخطاء البتات لا تنتشر أبداً (مثالي للقنوات الفضائية المشوشة).",
      "targetConcept": "OFB Zero Error Propagation",
      "targetConceptAr": "انعدام انتشار الأخطاء في نمط OFB"
    },
    "quickReasoning": {
      "en": "Because the keystream is generated independently of the ciphertext, a flipped ciphertext bit flips only that one bit upon XOR.",
      "ar": "لأن تدفق المفاتيح يتولد باستقلال تام عن النص المشفر، فإن انقلاب أي بت مشفر ينقلب مقابله فقط عند الـ XOR دون تلويث التالي."
    },
    "relatedLessonId": "ch7-l6"
  },
  {
    "id": "basmaga-ch7-14",
    "chapterId": "ch7",
    "topicId": "ch7-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 7 / Table 7.1",
    "type": "mcq",
    "questionEn": "In Counter (CTR) mode, what mathematical operation is performed to DECRYPT a ciphertext block C_i?",
    "questionAr": "في نمط العداد (Counter - CTR)، ما هي العملية الرياضية التي تُجرى لفك تشفير كتلة مشفرة C_i؟",
    "options": [
      {
        "key": "A",
        "textEn": "P_i = C_i XOR E_K(T_i) (XOR with the encrypted counter using the ENCRYPTION function)",
        "textAr": "P_i = C_i XOR E_K(T_i) (XOR مع العداد المشفر باستخدام دالة التشفير نفسها)"
      },
      {
        "key": "B",
        "textEn": "P_i = D_K(C_i) XOR T_i",
        "textAr": "P_i = D_K(C_i) XOR T_i"
      },
      {
        "key": "C",
        "textEn": "P_i = D_K(C_i XOR T_i)",
        "textAr": "P_i = D_K(C_i XOR T_i)"
      },
      {
        "key": "D",
        "textEn": "P_i = C_i - T_i mod 64",
        "textAr": "P_i = C_i - T_i mod 64"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "CTR decryption: P_i = C_i XOR E_K(T_i); decryption uses the block cipher ENCRYPTION algorithm.",
    "sourceRef": {
      "file": "Ch07-Crypto(1).pdf",
      "pageOrSlide": "p.22"
    },
    "importantKeywords": [
      {
        "en": "Counter (CTR) mode decryption",
        "ar": "فك التشفير في نمط العداد CTR",
        "role": "trigger"
      },
      {
        "en": "P_i = C_i XOR E_K(T_i)",
        "ar": "P_i = C_i XOR E_K(T_i)",
        "role": "concept"
      },
      {
        "en": "Uses ENCRYPTION function for decryption",
        "ar": "يستخدم دالة التشفير ذاتها لفك التشفير",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "CTR Decryption Rule: You NEVER use the decryption algorithm! Encrypt the counter E_K(T_i), then XOR with ciphertext C_i.",
      "ar": "قاعدة فك تشفير CTR: لا نستخدم خوارزمية فك التشفير أبداً! بل نشفر العداد E_K(T_i) ونعمل XOR مع المشفر C_i.",
      "targetConcept": "CTR Mode Decryption Equation",
      "targetConceptAr": "معادلة فك تشفير نمط العداد CTR"
    },
    "quickReasoning": {
      "en": "XORing with E_K(T_i) twice restores P_i: (P_i XOR E_K(T_i)) XOR E_K(T_i) = P_i.",
      "ar": "تطبيق XOR مرتين مع E_K(T_i) يعيد النص الأصلي P_i بفضل خواص الـ XOR المتماثلة."
    },
    "relatedLessonId": "ch7-l6"
  },
  {
    "id": "basmaga-ch7-15",
    "chapterId": "ch7",
    "topicId": "ch7-t2",
    "sourceType": "original-testbank",
    "sourceLabel": "Original Test Bank: Stallings Ch 7 / Ch07-Crypto(1).pdf p.23",
    "type": "mcq",
    "questionEn": "Which of the following is considered one of the primary architectural advantages of Counter (CTR) mode over CBC mode?",
    "questionAr": "أيٌّ مما يلي يُعتبر من المزايا البنيوية الرئيسية لنمط العداد (CTR) مقارنة بنمط CBC؟",
    "options": [
      {
        "key": "A",
        "textEn": "Parallel processing of multiple blocks simultaneously and random access to arbitrary blocks",
        "textAr": "إمكانية المعالجة المتوازية لعدة كتل في نفس الوقت، والوصول العشوائي لأي كتلة دون معالجة الكتل السابقة"
      },
      {
        "key": "B",
        "textEn": "Total immunity to known-plaintext attacks",
        "textAr": "مناعة تامة ضد هجمات النص الصريح المعلوم"
      },
      {
        "key": "C",
        "textEn": "Elimination of secret keys",
        "textAr": "إلغاء الحاجة للمفاتيح السرية"
      },
      {
        "key": "D",
        "textEn": "Doubling of effective key length",
        "textAr": "مضاعفة طول المفتاح الفعلي"
      }
    ],
    "correctAnswer": "A",
    "academicPoint": "Six advantages of CTR mode: Hardware efficiency, Software efficiency, Parallel processing, Preprocessing, Random access, Simplicity.",
    "sourceRef": {
      "file": "Ch07-Crypto(1).pdf",
      "pageOrSlide": "p.23"
    },
    "importantKeywords": [
      {
        "en": "Advantages of Counter (CTR) mode",
        "ar": "مزايا نمط العداد CTR",
        "role": "trigger"
      },
      {
        "en": "Parallel processing and random access",
        "ar": "معالجة متوازية ووصول عشوائي للكتل",
        "role": "concept"
      },
      {
        "en": "Preprocessing of keystream",
        "ar": "الحساب المسبق لتدفق المفاتيح",
        "role": "condition"
      }
    ],
    "basmagaRule": {
      "en": "CTR core advantages: Parallelism (both encrypt and decrypt) + Random access to any block + Preprocessing.",
      "ar": "أبرز مزايا نمط CTR: المعالجة المتوازية للكتل + الوصول العشوائي لأي كتلة + التجهيز المسبق لتدفق التشفير.",
      "targetConcept": "CTR Mode Architectural Advantages",
      "targetConceptAr": "المزايا البنيوية لنمط العداد CTR"
    },
    "quickReasoning": {
      "en": "Because blocks do not depend on preceding ciphertexts, different processor cores can encrypt/decrypt different blocks in parallel.",
      "ar": "لأن الكتل لا تعتمد على بعضها، تستطيع المعالجات متعددة الأنوية تشفير وفك كتل مختلفة بالتوازي وبكفاءة قصوى."
    },
    "relatedLessonId": "ch7-l6"
  }
];
