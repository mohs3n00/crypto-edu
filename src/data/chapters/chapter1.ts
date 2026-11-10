import type { Chapter } from '../../types';

export const chapter1: Chapter = {
  id: 'ch1',
  number: 1,
  title: 'Computer and Network Security Concepts',
  titleAr: 'مفاهيم أمن الحاسوب والشبكات',
  description: 'Foundational principles of information security, the CIA triad, OSI security architecture, classification of attacks, security services and mechanisms (X.800), and network security models based on William Stallings 7th Edition.',
  descriptionAr: 'المبادئ الأساسية لأمن المعلومات، ثالوث CIA، بنية أمان OSI، تصنيف الهجمات السلبية والنشطة، خدمات وآليات الأمان وفق معيار X.800، ونماذج أمان الشبكات استناداً لكتاب ويليام ستالينجز الطبعة السابعة.',
  topics: [
    {
      id: 'ch1-t1',
      title: 'Cryptographic Algorithms & Network Security Definition',
      titleAr: 'الخوارزميات التشفيرية وتعريف أمن الشبكات',
      lessons: [
        {
          id: 'ch1-l1',
          chapterId: 'ch1',
          topicId: 'ch1-t1',
          title: 'Four Cryptographic Algorithm Areas',
          titleAr: 'المجالات الأربعة للخوارزميات التشفيرية',
          estimatedMinutes: 15,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '3' },
          objectives: [
            'Classify cryptographic algorithms and protocols into four core areas.',
            'Differentiate between concealing large data streams versus small blocks (keys/hashes).',
            'Recognize the distinct roles of data integrity algorithms and authentication protocols.',
          ],
          objectivesAr: [
            'تصنيف الخوارزميات والبروتوكولات التشفيرية إلى أربعة مجالات رئيسية.',
            'التمييز بين حماية كتل البيانات الكبيرة وتدفقاتها مقابل الكتل الصغيرة (المفاتيح وبصمات الهاش).',
            'التعرف على الأدوار المحددة لخوارزميات سلامة البيانات وبروتوكولات المصادقة.',
          ],
          content: {
            enDefinition: 'Cryptographic algorithms and protocols are grouped into four main areas based on their operational purpose and the data types they protect.',
            arExplanation: 'تُصنف الخوارزميات والبروتوكولات التشفيرية إلى أربعة مجالات رئيسية بحسب وظيفتها ونوعية البيانات التي تتولى حمايتها.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: 'Cryptographic algorithms operate together in modern secure protocols (e.g. TLS/HTTPS and IPsec):\n• Asymmetric Encryption: Exchanges session keys securely without prior shared secrets.\n• Symmetric Encryption: Encrypts high-volume application payloads with fast throughput.\n• Data Integrity Algorithms (hashes/MACs): Guarantees that packets are not modified in transit.\n• Authentication Protocols: Verifies communicating identities to prevent masquerade attacks.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: 'تتكامل المجالات التشفيرية الأربعة في بروتوكولات الأمان الحديثة (مثل HTTPS و IPsec):\n• التشفير غير المتماثل: يتولى تبادل مفاتيح الجلسات بأمان دون وسيط سري مسبق.\n• التشفير المتماثل: يتولى تشفير كتل وتدفقات البيانات الضخمة بسرعة وكفاءة فائقة.\n• خوارزميات السلامة (الهاش و MAC): تضمن عدم تعديل أو تلاعب بأي جزء من الرسالة المنقولة.\n• بروتوكولات المصادقة: تثبت هوية أطراف الاتصال وتمنع هجمات انتحال الشخصية.',
              },
            ],
            formulas: [],
            diagrams: [{ id: 'crypto-categories-diagram', type: 'svg', title: 'Four Cryptographic Areas', titleAr: 'المجالات التشفيرية الأربعة' }],
            workedExamples: [],
            examNotes: [
              'Frequent Exam Question: "Asymmetric encryption is used to conceal small blocks of data, such as encryption keys and hash function values" — Always contrast with Symmetric which handles any data size.',
            ],
            examNotesAr: [
              'سؤال امتحان متكرر: التشفير غير المتماثل مخصص للكتل الصغيرة (المفاتيح وقيم الهاش)، بينما التشفير المتماثل يعالج كتل وتدفقات بأي حجم.',
            ],
            commonMistakes: [
              'Believing asymmetric encryption is efficient for encrypting entire massive files or video streams (in reality, it is computationally too slow and only used for keys/signatures).',
            ],
            supplementaryNotes: [],
          },
          questions: [],
        },
        {
          id: 'ch1-l2',
          chapterId: 'ch1',
          topicId: 'ch1-t1',
          title: 'Network & Internet Security Scope',
          titleAr: 'نطاق أمن الشبكات والإنترنت',
          estimatedMinutes: 12,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '4' },
          objectives: [
            'Define network and Internet security according to official course lecture.',
            'Explain the four defensive actions: Deter, Prevent, Detect, and Correct.',
          ],
          objectivesAr: [
            'تعريف أمن الشبكات والإنترنت وفق نص المحاضرة الرسمية.',
            'شرح الإجراءات الدفاعية الأربعة: الردع، المنع، الاكتشاف، والتصحيح.',
          ],
          content: {
            enDefinition: 'The field of network and Internet security consists of measures to deter, prevent, detect, and correct security violations that involve the transmission of information.',
            arExplanation: 'يتألف مجال أمن الشبكات والإنترنت من الإجراءات والتدابير الهادفة إلى ردع، ومنع، واكتشاف، وتصحيح الانتهاكات الأمنية المصاحبة لنقل وتبادل المعلومات.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: 'The four cornerstones of transmission security:\n- Deter: Discouraging attackers before an attempt occurs (e.g., severe legal penalties, warning banners).\n- Prevent: Technical barriers blocking attacks from succeeding (e.g., strong firewalls, end-to-end encryption).\n- Detect: Identifying ongoing or completed attacks (e.g., intrusion detection systems, log analysis).\n- Correct: Recovering normal operation and repairing damage after a violation occurs (e.g., backups, automated failover).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: 'الركائز الدفاعية الأربع لأمن نقل المعلومات:\n- الردع (Deter): إحباط عزيمة المهاجمين قبل بدء الهجوم (مثل العقوبات القانونية والتحذيرات الصارمة).\n- المنع (Prevent): وضع حواجز تقنية تمنع نجاح الهجوم (مثل الجدران النارية والتشفير الشامل).\n- الاكتشاف (Detect): رصد الهجمات أثناء وقوعها أو عقب حدوثها (مثل أنظمة كشف التسلل IDS وتحليل السجلات).\n- التصحيح (Correct): استعادة العمل الطبيعي وإصلاح الأضرار الناتجة عن الانتهاك (مثل النسخ الاحتياطية واستعادة الأنظمة).',
              },
            ],
            formulas: [],
            diagrams: [],
            workedExamples: [],
            examNotes: [
              'Exam Recognition Clue: In testbank True/False items, all four actions (Deter, Prevent, Detect, Correct) must be present. If an option omits "Correct" or "Deter", mark it FALSE.',
            ],
            examNotesAr: [
              'دلالة امتحانية: في أسئلة الصواب والخطأ، يجب توافر الأفعال الأربعة معاً (الردع، المنع، الاكتشاف، التصحيح). حذف أي منها يجعل العبارة خاطئة.',
            ],
            commonMistakes: [
              'Omitting "Correct" or "Deter" from the four actions in essay/short answer questions.',
            ],
            supplementaryNotes: [],
          },
          questions: [],
        },
      ],
    },
    {
      id: 'ch1-t2',
      title: 'Computer Security Objectives & CIA Triad',
      titleAr: 'أهداف أمن الحاسوب وثالوث CIA',
      lessons: [
        {
          id: 'ch1-l3',
          chapterId: 'ch1',
          topicId: 'ch1-t2',
          title: 'NIST Computer Security Definition & Resources',
          titleAr: 'تعريف NIST لأمن الحاسوب وموارده المحمية',
          estimatedMinutes: 15,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '5' },
          objectives: [
            'State the NIST Computer Security Handbook definition verbatim.',
            'Enumerate the five categories of protected information system resources.',
          ],
          objectivesAr: [
            'حفظ نص تعريف معهد المعايير NIST لأمن الحاسوب حرفياً.',
            'تعداد الفئات الخمس للموارد المحمية في نظام المعلومات المؤتمت.',
          ],
          content: {
            enDefinition: 'NIST Computer Security Handbook: "The protection afforded to an automated information system in order to attain the applicable objectives of preserving the integrity, availability and confidentiality of information system resources."',
            arExplanation: 'دليل أمن الحاسوب لمعهد NIST: "الحماية الموفرة لنظام معلومات مؤتمت من أجل تحقيق الأهداف المطبقة المتمثلة في الحفاظ على سلامة وجاهزية وسرية موارد نظام المعلومات".',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: 'Protected information system resources explicitly include five areas:\n1. Hardware: Physical computer equipment, servers, processors, memory.\n2. Software: Operating systems, database engines, applications.\n3. Firmware: Microcode, BIOS/UEFI embedded programming.\n4. Information and Data: Databases, user files, transmission payloads.\n5. Telecommunications: Communication lines, routers, switches, wireless links.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: 'تشمل موارد نظام المعلومات المحمية خمسة مجالات منصوص عليها:\n1. العتاد الصلب (Hardware): الخوادم والأجهزة والمعالجات والذواكر.\n2. البرمجيات (Software): أنظمة التشغيل، التطبيقات، ومحركات قواعد البيانات.\n3. البرمجيات الثابتة (Firmware): شفرات BIOS/UEFI والبرمجيات المدمجة بالشرائح.\n4. المعلومات والبيانات (Information/Data): الملفات وقواعد البيانات والرسائل.\n5. الاتصالات عن بعد (Telecommunications): كابلات الشبكة، أجهزة التوجيه، والمفاتيح.',
              },
            ],
            formulas: [],
            diagrams: [],
            workedExamples: [],
            examNotes: [
              'Short Answer question 3 in ch01 testbank: Requires naming "computer security" as the defined term.',
            ],
            examNotesAr: [
              'سؤال نصي في بنك الأسئلة يطلب المصطلح المطابق لتعريف NIST -> المصطلح هو Computer Security.',
            ],
            commonMistakes: ['Forgetting that Firmware and Telecommunications are explicitly part of NIST resource scope.'],
            supplementaryNotes: [],
          },
          questions: [],
        },
        {
          id: 'ch1-l4',
          chapterId: 'ch1',
          topicId: 'ch1-t2',
          title: 'CIA Triad, Privacy & System Integrity',
          titleAr: 'ثالوث CIA والخصوصية وسلامة النظام',
          estimatedMinutes: 20,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '6' },
          objectives: [
            'Explain the difference between Data Confidentiality and Privacy.',
            'Differentiate between Data Integrity and System Integrity.',
            'Define Availability in terms of timely service access.',
          ],
          objectivesAr: [
            'شرح الفارق الدقيق بين سرية البيانات والخصوصية الفردية.',
            'التمييز بين سلامة البيانات وسلامة تشغيل النظام.',
            'تعريف التوافرية من حيث الاستجابة الفورية للمستخدمين المصرح لهم.',
          ],
          content: {
            enDefinition: 'The core security objectives comprise Confidentiality (Data Confidentiality + Privacy), Integrity (Data Integrity + System Integrity), and Availability.',
            arExplanation: 'تتألف الأهداف الأمنية الجوهرية من السرية (سرية البيانات + الخصوصية الفردية)، السلامة (سلامة البيانات + سلامة النظام)، والتوافرية.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: '• Confidentiality:\n  - Data confidentiality: Assures that private or confidential information is not made available or disclosed to unauthorized individuals.\n  - Privacy: Assures that individuals control or influence what information related to them may be collected and stored and by whom and to whom that information may be disclosed.\n\n• Integrity:\n  - Data integrity: Assures that information and programs are changed only in a specified and authorized manner.\n  - System integrity: Assures that a system performs its intended function in an unimpaired manner, free from deliberate or inadvertent unauthorized manipulation of the system.\n\n• Availability:\n  - Assures that systems work promptly and service is not denied to authorized users.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: '• السرية (Confidentiality):\n  - سرية البيانات (Data Confidentiality): تضمن عدم إفشاء المعلومات الخاصة لجهات غير مصرح لها.\n  - الخصوصية (Privacy): تضمن قدرة الأفراد على التحكم في ماهية المعلومات المجمعة عنهم، ومن يخزنها، ولمن تُكشف.\n\n• السلامة (Integrity):\n  - سلامة البيانات (Data Integrity): تضمن تعديل البرامج والمعلومات بطريقة مصرح بها ومحددة فقط.\n  - سلامة النظام (System Integrity): تضمن تشغيل النظام لوظائفه المصممة دون أي تلاعب متعمد أو عرضي.\n\n• التوافرية (Availability):\n  - تضمن عمل الأنظمة باستجابة فورية دون حرمان المستخدمين المصرح لهم من الخدمة.',
              },
            ],
            formulas: [],
            diagrams: [],
            workedExamples: [],
            examNotes: [
              'Hospital Patient Allergy records: Classic example requiring HIGH INTEGRITY (alteration can kill patient).',
              'Student grades under FERPA in US: Example of Privacy regulation.',
            ],
            examNotesAr: [
              'سجلات حساسية المرضى في المستشفيات: مثال امتحاني شهير للأصول التي تتطلب سلامة قصوى (High Integrity).',
              'بيانات درجات الطلاب: تخضع لقوانين الخصوصية (Privacy).',
            ],
            commonMistakes: [
              'Confusing Privacy (individual control over personal data) with Data Confidentiality (general unauthorized disclosure prevention).',
            ],
            supplementaryNotes: [],
          },
          questions: [],
        },
        {
          id: 'ch1-l5',
          chapterId: 'ch1',
          topicId: 'ch1-t2',
          title: 'The Five Security Requirements (Figure 1.1)',
          titleAr: 'متطلبات الأمان الخمسة (شكل 1.1)',
          estimatedMinutes: 20,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '7' },
          objectives: [
            'Identify all five security requirements in Stallings Figure 1.1.',
            'Explain why Authenticity and Accountability are essential extensions to CIA.',
          ],
          objectivesAr: [
            'تحديد المتطلبات الخمسة الواردة في الشكل 1.1 من كتاب ستالينجز.',
            'شرح سبب كون الموثوقية والمساءلة امتداداً إلزامياً لثالوث CIA التقليدي.',
          ],
          content: {
            enDefinition: 'Figure 1.1 extends the classical CIA triad into a pentagonal requirements model incorporating Authenticity and Accountability.',
            arExplanation: 'يوسع الشكل 1.1 ثالوث CIA التقليدي إلى نموذج خماسي يدمج الموثوقية (Authenticity) والمساءلة (Accountability).',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: 'Stallings Figure 1.1 illustrates the Five Essential Security Requirements guarding system data and services:\n1. Confidentiality: Preserves authorized restrictions on information access and disclosure, comprising Data Confidentiality and Privacy.\n2. Integrity: Guards against improper information modification or destruction, comprising Data Integrity and System Integrity.\n3. Availability: Ensures timely and reliable access to and use of information and services.\n4. Authenticity: Verifies that users are who they say they are and that each input arriving at the system came from a trusted source.\n5. Accountability: The requirement that actions of an entity can be traced uniquely to that entity, enabling fault isolation, deterrence, and intrusion detection.\n\nEssential Distinction (Accountability vs. Non-repudiation):\n• Accountability is an overarching organizational security requirement (tracked via audit logs and individual attribution).\n• Non-repudiation is a specific X.800 communication security service (addressed in Lesson ch1-l14) that prevents either sender or receiver from denying a transmitted or received message, relying technically on accountability and digital signatures.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: 'يوضح الشكل 1.1 لستالينجز المتطلبات الأمنية الخمسة الأساسية لحماية البيانات والخدمات:\n1. السرية (Confidentiality): حماية المعلومات من الكشف غير المصرح به (تشمل سرية البيانات والخصوصية الفردية).\n2. السلامة (Integrity): منع التعديل أو التخريب غير المصرح به (تشمل سلامة البيانات وسلامة تشغيل النظام).\n3. التوافرية (Availability): ضمان الجاهزية والاستجابة الفورية للنظام دون حرمان المستخدمين المصرح لهم.\n4. الموثوقية (Authenticity): التحقق من أن المستخدمين هم من يدعون حقاً، وأن كل مدخل وارد للنظام صادر من مصدر موثوق.\n5. المساءلة (Accountability): ربط أي إجراء بالمستخدم المسؤول عنه حصرياً عبر سجلات التدقيق والتتبع.\n\nالتمييز الأكاديمي الحاسم بين المساءلة وعدم الإنكار:\n• المساءلة (Accountability): مطلب ومبدأ أمني عام يضمن تتبع تصرفات كل كيان داخل النظام لردع المتسللين وعزل الأخطاء.\n• عدم الإنكار (Nonrepudiation): خدمة أمان اتصال محددة في معيار X.800 (تُدرس تفصيلاً في الدرس ch1-l14) تمنع أياً من طرفي الاتصال من إنكار إرسال أو استلام الرسالة، وتعتمد تقنياً على المساءلة والتوقيعات الرقمية.',
              },
            ],
            formulas: [],
            diagrams: [{ id: 'security-pentagon', type: 'interactive', title: 'Security Pentagon (Figure 1.1)', titleAr: 'مخطط متطلبات الأمان الخماسي' }],
            workedExamples: [],
            examNotes: [
              'Midterm 2020 Question [1] (1): "Verifying that users are who they say they are and that each input arriving at the system came from a trusted source is: Authenticity" (Choice A).',
            ],
            examNotesAr: [
              'سؤال نصي في ميدتيرم 2020: التحقق من هوية المستخدمين وصحة مصدر كل مدخل هو: Authenticity (الموثوقية).',
            ],
            commonMistakes: ['Selecting "Integrity" or "Credibility" instead of "Authenticity" for trusted source verification.'],
            supplementaryNotes: [],
          },
          questions: [],
        },
        {
          id: 'ch1-l6',
          chapterId: 'ch1',
          topicId: 'ch1-t2',
          title: 'Breach of Security — Levels of Impact',
          titleAr: 'مستويات التأثير لانتهاكات الأمان',
          estimatedMinutes: 15,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '8' },
          objectives: [
            'Distinguish the three breach impact levels: Low, Moderate, High.',
            'Identify consequences for operations, organizational assets, and individuals.',
          ],
          objectivesAr: [
            'التمييز بين مستويات تأثير الانتهاك الثلاثة: المنخفض، المتوسط، والعالي.',
            'تحديد العواقب على العمليات، أصول المؤسسة، والأفراد.',
          ],
          content: {
            enDefinition: 'FIPS PUB 199 defines three levels of security breach impact on organizational operations, assets, or individuals.',
            arExplanation: 'يحدد معيار FIPS 199 ثلاثة مستويات لتأثير انتهاكات الأمان على عمليات المؤسسة وأصولها وأفرادها.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: '• Low Impact: The loss could be expected to have a limited adverse effect on organizational operations, assets, or individuals (e.g., minor operational degradation, minor financial harm).\n• Moderate Impact: The loss could be expected to have a serious adverse effect (e.g., significant degradation in mission capability where organization can still perform primary functions but effectiveness is significantly reduced, significant financial loss, significant personal injury without loss of life).\n• High Impact: The loss could be expected to have a severe or catastrophic adverse effect (e.g., severe degradation or total inability to perform mission functions, major financial damage, loss of life or severe life-threatening injuries).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: '• تأثير منخفض (Low Impact): يُتوقع أن يكون للخسارة أثر سلبي محدود على العمليات أو الأصول أو الأفراد (انخفاض طفيف في الكفاءة أو ضرر مالي يسير).\n• تأثير متوسط (Moderate Impact): يُتوقع أن يكون للخسارة أثر سلبي خطير (تراجع كبير في القدرة التشغيلية مع استمرار القدرة على أداء المهام الرئيسية ولكن بفاعلية متدنية، أو خسائر مالية جسيمة).\n• تأثير عالي (High Impact): يُتوقع أن يكون للخسارة أثر كارثي أو حاد (عجز تام عن أداء الوظائف الرئيسية، خسائر مالية فادحة تهدد بقاء المنظمة، أو فقدان للأرواح وإصابات خطيرة).',
              },
            ],
            formulas: [],
            diagrams: [],
            workedExamples: [],
            examNotes: [
              'Multiple Choice question in testbank: "A moderate level breach could cause significant degradation in mission capability to an extent that primary functions can still be performed but effectiveness is significantly reduced" -> Moderate.',
            ],
            examNotesAr: [
              'سؤال متكرر: انخفاض كبير في كفاءة المهام مع استمرار القدرة على أداء الوظائف الأساسية بفعالية منخفضة هو: Moderate (متوسط).',
            ],
            commonMistakes: ['Confusing Moderate (can still perform primary functions) with High (catastrophic / inability to perform).'],
            supplementaryNotes: [],
          },
          questions: [],
        },
        {
          id: 'ch1-l7',
          chapterId: 'ch1',
          topicId: 'ch1-t2',
          title: 'Computer Security Challenges',
          titleAr: 'تحديات أمن الحاسوب العشرة',
          estimatedMinutes: 15,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '9' },
          objectives: [
            'Enumerate all 10 computer security challenges listed in the official lecture.',
            'Explain why security mechanisms are often perceived as impediments to usability.',
          ],
          objectivesAr: [
            'تعداد التحديات العشرة لأمن الحاسوب الواردة بالمحاضرة الرسمية.',
            'شرح سبب النظر إلى آليات الأمان في كثير من الأحيان كعائق أمام سهولة الاستخدام.',
          ],
          content: {
            enDefinition: 'Computer security involves complex trade-offs between design, psychology, monitoring, performance, and economics.',
            arExplanation: 'ينطوي أمن الحاسوب على موازنات معقدة بين التصميم الهندسي، السلوك البشري، المراقبة المستمرة، والأداء، والجدوى الاقتصادية.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: 'The 10 Challenges:\n1. Security is not simple.\n2. Potential attacks on the security features need to be considered.\n3. Procedures used to provide particular services are often counter-intuitive.\n4. It is necessary to decide where to use the various security mechanisms.\n5. Requires constant monitoring.\n6. Security is too often an afterthought.\n7. Security mechanisms typically involve more than a particular algorithm or protocol.\n8. Security is essentially a battle of wits between a perpetrator and the designer.\n9. Little benefit from security investment is perceived until a security failure occurs.\n10. Strong security is often viewed as an impediment to efficient and user-friendly operation.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: 'التحديات العشرة المنصوص عليها:\n1. الأمان ليس بالأمر البسيط أو السهل.\n2. يجب أخذ الهجمات المحتملة على ميزات الأمان ذاتها بعين الاعتبار.\n3. الإجراءات المتبعة لتوفير خدمات الأمان غالباً ما تكون غير بديهية (Counter-intuitive).\n4. من الضروري تحديد المواضع الصحيحة لاستخدام مختلف آليات الأمان.\n5. يتطلب الأمان مراقبة دائمة ومستمرة.\n6. غالباً ما يُعامل الأمان كفكرة لاحقة بعد بناء النظام (Afterthought).\n7. تشمل آليات الأمان ما هو أبعد من مجرد خوارزمية أو بروتوكول محدد.\n8. الأمان هو في جوهره صراع عقول ودهاء بين المهاجم ومصمم النظام.\n9. نادراً ما يُدرك العائد من الاستثمار في الأمان إلا بعد وقوع كارثة أو اختراق أمني.\n10. غالباً ما يُنظر إلى الأمان القوي كعائق ومثبط لسرعة وسهولة استخدام النظام.',
              },
            ],
            formulas: [],
            diagrams: [],
            workedExamples: [],
            examNotes: [
              'Challenge 8 ("battle of wits") and Challenge 10 ("impediment to user-friendly operation") are frequent exam choices.',
            ],
            examNotesAr: [
              'تحدي "صراع العقول" وتحدي "النظر للأمان كعائق للمستخدم" أسئلة اختيار من متعدد شائعة.',
            ],
            commonMistakes: [],
            supplementaryNotes: [],
          },
          questions: [],
        },
      ],
    },
    {
      id: 'ch1-t3',
      title: 'OSI Security Architecture & Attack Taxonomy',
      titleAr: 'بنية أمان OSI وتصنيف الهجمات',
      lessons: [
        {
          id: 'ch1-l8',
          chapterId: 'ch1',
          topicId: 'ch1-t3',
          title: 'OSI Security Architecture (X.800)',
          titleAr: 'بنية أمان OSI وفق معيار X.800',
          estimatedMinutes: 15,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '10' },
          objectives: [
            'Define Security Attack, Security Mechanism, and Security Service.',
            'Explain how services use mechanisms to counter attacks.',
          ],
          objectivesAr: [
            'تعريف الهجوم الأمني، الآلية الأمنية، والخدمة الأمنية.',
            'شرح كيف توظف الخدمات الأمنية الآليات المختلفة للتصدي للهجمات.',
          ],
          content: {
            enDefinition: 'ITU-T Recommendation X.800 defines the OSI Security Architecture as a systematic framework establishing three core concepts: Security Attacks, Security Mechanisms, and Security Services.',
            arExplanation: 'تعرف توصية ITU-T X.800 بنية أمان OSI كإطار منهجي منظم يرتكز على ثلاثة مفاهيم مترابطة: الهجوم الأمني، الآلية الأمنية، والخدمة الأمنية.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: '• Security Attack: Any action that compromises the security of information owned by an organization.\n• Security Mechanism: A process (or a device incorporating such a process) that is designed to detect, prevent, or recover from a security attack.\n• Security Service: A processing or communication service that enhances the security of the data processing systems and the information transfers of an organization. Services are intended to counter security attacks and make use of one or more security mechanisms.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: '• الهجوم الأمني (Security Attack): أي فعل أو إجراء ينتهك ويخل بأمن المعلومات التي تمتلكها المؤسسة.\n• الآلية الأمنية (Security Mechanism): عملية أو إجراء (أو جهاز يطبق هذه العملية) مصمم لكشف أو منع الهجوم الأمني أو التعافي منه.\n• الخدمة الأمنية (Security Service): خدمة معالجة أو اتصالات تعزز أمن أنظمة معالجة البيانات ونقل المعلومات في المنظمة، وتهدف لمواجهة الهجمات باستخدام آلية أو أكثر من آليات الأمان.',
              },
            ],
            formulas: [],
            diagrams: [],
            workedExamples: [],
            examNotes: [
              'Midterm 2022 Question (1) 3 & Question (2) 4: "OSI security architecture provides a systematic framework for defining security attacks, mechanisms, and services" -> TRUE.',
            ],
            examNotesAr: [
              'سؤال في ميدتيرم 2022: توفر بنية أمان OSI إطاراً منهجياً لتحديد الهجمات والآليات والخدمات -> صواب (True).',
            ],
            commonMistakes: ['Confusing Mechanism (e.g. encryption algorithm) with Service (e.g. confidentiality).'],
            supplementaryNotes: [],
          },
          questions: [],
        },
        {
          id: 'ch1-l9',
          chapterId: 'ch1',
          topicId: 'ch1-t3',
          title: 'Threats vs Attacks (RFC 4949 Table 1.1)',
          titleAr: 'التهديد مقابل الهجوم (RFC 4949)',
          estimatedMinutes: 15,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '11' },
          objectives: [
            'Define Threat and Attack according to RFC 4949.',
            'Differentiate potential harm (threat) from deliberate intelligent execution (attack).',
          ],
          objectivesAr: [
            'تعريف التهديد (Threat) والهجوم (Attack) وفق معيار RFC 4949.',
            'التمييز بين الضرر المحتمل الكامن (التهديد) والفعل العمدي الذكي المنفذ (الهجوم).',
          ],
          content: {
            enDefinition: 'RFC 4949 defines Threat as a potential for violation of security, whereas an Attack is an assault on system security resulting from an intelligent, deliberate act.',
            arExplanation: 'يعرف معيار RFC 4949 التهديد بأنه احتمالية كامنة لانتهاك الأمان، بينما الهجوم هو اعتداء فعلي ناتج عن فعل ذكي متعمد لاختراق النظام.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: '• Threat (A potential for violation of security): Exists when there is a circumstance, capability, action, or event that could breach security and cause harm. That is, a threat is a possible danger that might exploit a vulnerability.\n• Attack (An assault on system security): Derives from an intelligent act that is a deliberate attempt (especially in the sense of a method or technique) to evade security services and violate the security policy of a system.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: '• التهديد (Threat - خطر محتمل): وجود ظرف أو قدرة أو حدث قد يؤدي لخرق الأمان وإلحاق الضرر، وهو خطر كامن قد يستغل ثغرة أمنية.\n• الهجوم (Attack - اعتداء فعلي ناتج عن فعل ذكي): محاولة متعمدة ومدروسة للالتفاف على خدمات الأمان وانتهاك سياسة أمان النظام.',
              },
            ],
            formulas: [],
            diagrams: [],
            workedExamples: [],
            examNotes: [
              'Midterm 2020 Question [1] (6): "A(n) _____ is a potential for violation of security, which exists when there is a circumstance, capability, action or event that could breach security and cause harm." -> Threat.',
            ],
            examNotesAr: [
              'سؤال في ميدتيرم 2020: الوجود المحتمل لخطر أو ظرف قد يخترق النظام هو: Threat (التهديد).',
            ],
            commonMistakes: ['Selecting "Attack" when the question specifies "a potential for violation".'],
            supplementaryNotes: [],
          },
          questions: [],
        },
        {
          id: 'ch1-l10',
          chapterId: 'ch1',
          topicId: 'ch1-t3',
          title: 'Passive Attacks: Eavesdropping & Traffic Analysis',
          titleAr: 'الهجمات السلبية: التنصت وتحليل حركة المرور',
          estimatedMinutes: 15,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '13' },
          objectives: [
            'Define passive attacks under X.800 and RFC 4949.',
            'Explain the two types: Release of Message Contents and Traffic Analysis.',
          ],
          objectivesAr: [
            'تعريف الهجمات السلبية وفق معيار X.800 و RFC 4949.',
            'شرح النوعين الرئيسيين: كشف محتوى الرسائل وتحليل حركة المرور.',
          ],
          content: {
            enDefinition: 'A passive attack attempts to learn or make use of information from the system but does not affect system resources.',
            arExplanation: 'الهجوم السلبي هو محاولة لمعرفة المعلومات من النظام أو استغلالها دون تعديل بيانات النظام أو التأثير على موارده التشغيلية.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: 'Two types of passive attacks:\n1. Release of Message Contents: An opponent eavesdrops on telephone conversations, emails, or transmitted files containing sensitive or confidential info.\n2. Traffic Analysis: Even if message contents are masked with encryption, an opponent observes communication patterns: source and destination locations, frequency, length, and timing of messages to deduce military or commercial activity.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: 'نوعا الهجمات السلبية:\n1. كشف محتوى الرسائل (Release of Message Contents): تنصت المهاجم على المكالمات أو رسائل البريد الإلكتروني أو الملفات المرسلة للحصول على المعلومات الحساسة.\n2. تحليل حركة المرور (Traffic Analysis): حتى وإن كان محتوى الرسائل مشفراً، يقوم المهاجم بمراقبة نمط الاتصال: المصدر، الوجهة، تواتر وتوقيت وحجم الرسائل لاستنتاج معلومات استخباراتية أو تجارية.',
              },
            ],
            formulas: [],
            diagrams: [],
            workedExamples: [],
            examNotes: [
              'Passive attacks are in the nature of eavesdropping or monitoring. The goal is to obtain information. Emphasis is on PREVENTION (via encryption and traffic padding), because passive attacks are very difficult to detect.',
            ],
            examNotesAr: [
              'الهجمات السلبية من طبيعة التنصت؛ التركيز الأساسي في التصدي لها يكون على المنع (Prevention) بالتشفير، لصعوبة اكتشافها لعدم تركها أثراً.',
            ],
            commonMistakes: [],
            supplementaryNotes: [],
          },
          questions: [],
        },
        {
          id: 'ch1-l11',
          chapterId: 'ch1',
          topicId: 'ch1-t3',
          title: 'Active Attacks: Masquerade, Replay, Modification, DoS',
          titleAr: 'الهجمات النشطة: الانتحال، إعادة الإرسال، التعديل، وحجب الخدمة',
          estimatedMinutes: 20,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '14' },
          objectives: [
            'Define active attacks involving modification of data stream or false stream creation.',
            'Explain Masquerade, Replay, Modification of Messages, and Denial of Service.',
          ],
          objectivesAr: [
            'تعريف الهجمات النشطة التي تتضمن تعديل تدفق البيانات أو خلق تدفق زائف.',
            'شرح الأنواع الأربعة: انتحال الهوية، إعادة الإرسال، تعديل الرسائل، وحجب الخدمة.',
          ],
          content: {
            enDefinition: 'An active attack attempts to alter system resources or affect their operation, involving modification of the data stream or the creation of a false stream.',
            arExplanation: 'الهجوم النشط هو محاولة لتعديل موارد النظام أو التأثير على تشغيلها، ويتضمن إدخال تغييرات على تدفق البيانات أو إنشاء تدفق زائف.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: 'The four active attack types:\n1. Masquerade: Takes place when one entity pretends to be a different entity (e.g., authentication sequence captured and reused to gain unauthorized privileges).\n2. Replay: Involves the passive capture of a data unit and its subsequent retransmission to produce an unauthorized effect.\n3. Modification of Messages: Some portion of a legitimate message is altered, or messages are delayed or reordered to produce an unauthorized effect.\n4. Denial of Service (DoS): Prevents or inhibits the normal use or management of communications facilities.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: 'الأنواع الأربعة للهجمات النشطة:\n1. انتحال الهوية (Masquerade): تظاهر جهة معينة بأنها جهة أخرى مشروعة لكسب صلاحياتها.\n2. إعادة الإرسال (Replay): التقاط كتلة بيانات مشروعة سلبياً وإعادة إرسالها لاحقاً لإحداث تأثير غير مصرح به (كإعادة طلب تحويل مالي).\n3. تعديل الرسائل (Modification of Messages): تغيير جزء من رسالة مشروعة، أو تأخيرها أو التلاعب بترتيبها.\n4. حجب الخدمة (Denial of Service): منع أو إعاقة الاستخدام أو الإدارة الطبيعية لوسائل وخدمات الاتصال.',
              },
            ],
            formulas: [],
            diagrams: [],
            workedExamples: [],
            examNotes: [
              'Midterm 2022 Question (1) 2: "_____ involves the passive capture of a data unit and its subsequent retransmission to produce an unauthorized effect: Replay" (Choice B).',
              'Active attacks are difficult to prevent completely; emphasis is on DETECTION and RECOVERY.',
            ],
            examNotesAr: [
              'سؤال متكرر في امتحاني 2020 و 2022: التقاط كتلة بيانات سلبياً وإعادة إرسالها هو: Replay (إعادة الإرسال).',
              'يصعب منع الهجمات النشطة تماماً؛ التركيز الرئيسي يكون على الاكتشاف والتعافي (Detection & Recovery).',
            ],
            commonMistakes: ['Confusing Masquerade (pretending to be another) with Replay (retransmitting a captured packet).'],
            supplementaryNotes: [],
          },
          questions: [],
        },
      ],
    },
    {
      id: 'ch1-t4',
      title: 'Security Services & Security Mechanisms (X.800)',
      titleAr: 'خدمات وآليات الأمان وفق معيار X.800',
      lessons: [
        {
          id: 'ch1-l12',
          chapterId: 'ch1',
          topicId: 'ch1-t4',
          title: 'Authentication & Access Control Services',
          titleAr: 'خدمات المصادقة والتحكم في الوصول',
          estimatedMinutes: 15,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '17-18' },
          objectives: [
            'Distinguish Peer Entity Authentication from Data Origin Authentication.',
            'Explain how Access Control limits system access and requires prior authentication.',
          ],
          objectivesAr: [
            'التمييز بين مصادقة الكيان النظير (Peer Entity) ومصادقة منشأ البيانات (Data Origin).',
            'شرح كيف يقيد التحكم في الوصول الدخول للنظام واعتماده على المصادقة المسبقة.',
          ],
          content: {
            enDefinition: 'Authentication assures that a communication is authentic. Access Control limits and controls access to host systems and applications via communications links.',
            arExplanation: 'تضمن خدمة المصادقة أصالة الاتصال ومصداقيته. وتتولى خدمة التحكم في الوصول تقييد وإدارة الدخول إلى الأنظمة والتطبيقات عبر شبكات الاتصال.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: '• Peer Entity Authentication: Provides corroboration that the communicating entity is the one claimed. Used on association establishment.\n• Data Origin Authentication: Provides corroboration of the source of any given data unit in a connectionless transfer (does not protect against duplication or modification).\n• Access Control: The ability to limit and control the access to host systems and applications via communications links. Each entity must first be identified and authenticated before access rights are granted.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: '• مصادقة الكيان النظير (Peer Entity): التحقق من هوية الطرف الآخر المتصل أثناء جلسة الاتصال.\n• مصادقة منشأ البيانات (Data Origin): التحقق من صحة مصدر الرسالة في النقل عديم الاتصال (Connectionless) دون حماية من التكرار.\n• التحكم في الوصول (Access Control): القدرة على تحديد وتقييد الوصول إلى الخوادم والتطبيقات؛ وتتطلب تحديد هوية الكيان ومصادقته أولاً قبل منحه الصلاحيات.',
              },
            ],
            formulas: [],
            diagrams: [],
            workedExamples: [],
            examNotes: [
              'Testbank T/F: "Data origin authentication does not provide protection against the modification of data units." -> TRUE.',
            ],
            examNotesAr: [
              'سؤال بنك الأسئلة: مصادقة منشأ البيانات لا توفر حماية ضد تعديل كتل البيانات -> صواب (True).',
            ],
            commonMistakes: [],
            supplementaryNotes: [],
          },
          questions: [],
        },
        {
          id: 'ch1-l13',
          chapterId: 'ch1',
          topicId: 'ch1-t4',
          title: 'Data Confidentiality & Traffic-Flow Confidentiality',
          titleAr: 'سرية البيانات وسرية تدفق حركة المرور',
          estimatedMinutes: 15,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '19' },
          objectives: [
            'Enumerate the four X.800 Data Confidentiality service forms.',
            'Explain how traffic padding frustrates traffic analysis.',
          ],
          objectivesAr: [
            'تعداد صور خدمة سرية البيانات الأربع في معيار X.800.',
            'شرح دور حشو حركة المرور (Traffic Padding) في إحباط تحليل المرور.',
          ],
          content: {
            enDefinition: 'Data Confidentiality is the protection of transmitted data from passive attacks across four specific forms.',
            arExplanation: 'سرية البيانات هي حماية البيانات المنقولة عبر الشبكة من الهجمات السلبية وتأتي في أربع صور رئيسية.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: 'Four X.800 Confidentiality Services:\n1. Connection Confidentiality: Protects all user data on a connection.\n2. Connectionless Confidentiality: Protects all user data in a single data block.\n3. Selective-Field Confidentiality: Protects specified fields within user data on a connection or in a single data block.\n4. Traffic-Flow Confidentiality: Protects information that might be derived from observation of traffic flows.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: 'خدمات السرية الأربع وفق معيار X.800:\n1. سرية الاتصال الكامل (Connection Confidentiality): حماية جميع بيانات المستخدم عبر جلسة الاتصال.\n2. سرية الرسالة المنفردة (Connectionless Confidentiality): حماية بيانات المستخدم في كتلة بيانات واحدة.\n3. سرية حقول محددة (Selective-Field Confidentiality): حماية حقول معينة حساسة داخل الرسالة (كأرقام بطاقات الائتمان).\n4. سرية تدفق حركة المرور (Traffic-Flow Confidentiality): حماية المعلومات التي يمكن استنتاجها من مراقبة تدفق البيانات.',
              },
            ],
            formulas: [],
            diagrams: [],
            workedExamples: [],
            examNotes: [
              'Testbank MCQ 14: "The protection of the information that might be derived from observation of traffic flows is: traffic-flow confidentiality" (Choice C).',
            ],
            examNotesAr: [
              'سؤال في بنك الأسئلة: حماية المعلومات المستنبطة من مراقبة تدفق المرور تسمى: Traffic-Flow Confidentiality.',
            ],
            commonMistakes: [],
            supplementaryNotes: [],
          },
          questions: [],
        },
        {
          id: 'ch1-l14',
          chapterId: 'ch1',
          topicId: 'ch1-t4',
          title: 'Data Integrity, Nonrepudiation & Availability Services',
          titleAr: 'خدمات سلامة البيانات، عدم الإنكار، والتوافرية',
          estimatedMinutes: 15,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '20-22' },
          objectives: [
            'Distinguish Connection-Oriented Integrity (stream) from Connectionless Integrity (individual block).',
            'Differentiate Nonrepudiation of Origin from Nonrepudiation of Receipt.',
          ],
          objectivesAr: [
            'التمييز بين سلامة الاتصال المتسلسل (Stream) وسلامة الرسالة المنفردة (Connectionless).',
            'التفريق بين عدم إنكار المنشأ (من جانب المرسل) وعدم إنكار الاستلام (من جانب المستقبل).',
          ],
          content: {
            enDefinition: 'Data Integrity protects against unauthorized alteration, insertion, deletion, or reordering. Nonrepudiation prevents denial of transmitted messages.',
            arExplanation: 'تحمي سلامة البيانات من التعديل أو الإدراج أو الحذف أو إعادة الترتيب غير المصرح بها، بينما يمنع عدم الإنكار إنكار الرسائل المرسلة أو المستلمة.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: '• Connection-oriented integrity service: Deals with a stream of messages; assures messages are received as sent with no duplication, insertion, modification, reordering, or replays (with or without recovery).\n• Connectionless integrity service: Deals with individual messages, generally provides protection against message modification only.\n• Nonrepudiation of Origin: Receiver can prove that the alleged sender in fact sent the message.\n• Nonrepudiation of Destination: Sender can prove that the alleged receiver in fact received the message.\n• Availability Service: Protects a system to ensure its availability by addressing the security concerns raised by denial-of-service (DoS) attacks. It depends on proper management and control of system resources, thus relying directly on Access Control and other core security services.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: '• سلامة الاتصال المستمر (Connection-Oriented): تتعامل مع تدفق من الرسائل وتضمن استلامها دون تكرار أو إدراج أو تعديل أو إعادة ترتيب أو إعادة إرسال (مع أو بدون تعافٍ).\n• سلامة النقل المنفصل (Connectionless): تتعامل مع رسائل منفردة وتوفر عادة حماية ضد التعديل فقط.\n• عدم إنكار المنشأ (Nonrepudiation of Origin): تمكن المستقبل من إثبات أن المرسل هو من بعث بالرسالة فعلاً.\n• عدم إنكار الاستلام (Nonrepudiation of Destination): تمكن المرسل من إثبات أن المستقبل قد استلم الرسالة فعلياً.\n• خدمة التوافرية (Availability Service): خدمة أمان تضمن جاهزية النظام واستمرارية عمله وتتصدى مباشرة للمخاطر الناجمة عن هجمات حجب الخدمة (DoS). وتعتمد في تحقيق غايتها على الإدارة والتحكم السليم في الموارد، وترتبط ارتباطاً وثيقاً بخدمة التحكم في الوصول (Access Control).',
              },
            ],
            formulas: [],
            diagrams: [],
            workedExamples: [],
            examNotes: [
              'Midterm 2020 Question [2] 10: "Nonrepudiation prevents either sender or receiver from denying a transmitted message."',
            ],
            examNotesAr: [
              'سؤال إكمال فراغات بميدتيرم 2020: عدم الإنكار يمنع المرسل أو المستقبل من إنكار الرسالة المرسلة.',
            ],
            commonMistakes: [],
            supplementaryNotes: [],
          },
          questions: [],
        },
        {
          id: 'ch1-l15',
          chapterId: 'ch1',
          topicId: 'ch1-t4',
          title: 'Specific vs Pervasive Security Mechanisms (X.800)',
          titleAr: 'آليات الأمان المحددة والشاملة وفق معيار X.800',
          estimatedMinutes: 20,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '23-24' },
          objectives: [
            'List the eight Specific Security Mechanisms from Table 1.3.',
            'List the five Pervasive Security Mechanisms.',
            'Explain Traffic Padding, Routing Control, and Notarization.',
          ],
          objectivesAr: [
            'تعداد آليات الأمان الثماني المحددة الواردة في الجدول 1.3.',
            'تعداد آليات الأمان الشاملة (Pervasive) الخمس.',
            'شرح آليات حشو المرور، التحكم في التوجيه، والتوثيق المعتمد (Notarization).',
          ],
          content: {
            enDefinition: 'X.800 divides security mechanisms into Specific Mechanisms (implemented in specific protocol layers) and Pervasive Mechanisms (not tied to any particular layer).',
            arExplanation: 'يقسم معيار X.800 آليات الأمان إلى آليات محددة (تُطبق في طبقات بروتوكولية بعينها) وآليات شاملة (تسري على النظام ككل ولا ترتبط بطبقة واحدة).',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: 'Eight Specific Security Mechanisms:\n1. Encipherment: Mathematical algorithms transforming data into unreadable ciphertext.\n2. Digital Signatures: Cryptographic data appended to prove origin and integrity and protect against forgery.\n3. Access Controls: Mechanisms enforcing authorized access to resources.\n4. Data Integrity: Mechanisms ensuring data units are not modified or reordered.\n5. Authentication Exchange: Mutual credential verification protocols.\n6. Traffic Padding: Inserting bits into gaps to frustrate traffic analysis.\n7. Routing Control: Choosing physically secure routes for transmission.\n8. Notarization: Using a trusted third party to assure properties of data exchange.\n\nFive Pervasive Security Mechanisms:\n1. Trusted Functionality: Hardware/software perceived to be correct and secure.\n2. Security Labels: Designations bound to resources specifying security attributes.\n3. Event Detection: Detection of security-relevant events.\n4. Security Audit Trails: Data collected to facilitate independent security review.\n5. Security Recovery: Handling requests from event detection and recovery management.\n\nTable 1.3 Mapping of X.800 Security Services to Security Mechanisms:\n• Encipherment: Implements Data Confidentiality (Connection, Connectionless, Selective-Field), Traffic-Flow Confidentiality, Connection-Oriented Integrity, and Data Origin Authentication.\n• Digital Signatures: Implements Peer Entity Authentication, Data Origin Authentication, Data Integrity, and Nonrepudiation.\n• Access Controls: Implements Access Control Service.\n• Data Integrity Mechanisms: Implements Connection-Oriented Integrity and Connectionless Integrity.\n• Authentication Exchange: Implements Peer Entity Authentication.\n• Traffic Padding: Implements Traffic-Flow Confidentiality.\n• Routing Control: Implements Connection Confidentiality and Connectionless Confidentiality.\n• Notarization: Implements Nonrepudiation (Origin & Delivery).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: 'آليات الأمان المحددة الثماني:\n1. التشفير (Encipherment): خوارزميات رياضية لتحويل البيانات إلى نصوص غير مقروءة.\n2. التوقيعات الرقمية (Digital Signatures): بيانات تشفيرية تُلحق بالرسالة لإثبات المصدر والسلامة ومنع التزوير.\n3. التحكم في الوصول (Access Controls): آليات إنفاذ حقوق الوصول المصرح بها للموارد.\n4. سلامة البيانات (Data Integrity): آليات للتحقق من عدم تعديل كتل البيانات.\n5. تبادل المصادقة (Authentication Exchange): بروتوكولات لتبادل وثائق الهوية والتحقق منها.\n6. حشو حركة المرور (Traffic Padding): إدراج بتات إضافية لسد الفراغات وإحباط تحليل التدفق.\n7. التحكم في التوجيه (Routing Control): اختيار مسارات مادية آمنة للبيانات.\n8. التوثيق المعتمد (Notarization): استخدام طرف ثالث موثوق لتأكيد خصائص تبادل البيانات.\n\nآليات الأمان الشاملة الخمس:\n1. الوظائف الموثوقة (Trusted Functionality).\n2. ملصقات الأمان (Security Labels).\n3. رصد الأحداث (Event Detection).\n4. سجلات التدقيق الأمني (Security Audit Trails).\n5. التعافي الأمني (Security Recovery).\n\nجدول 1.3: مصفوفة ربط خدمات الأمان بآليات الأمان (معيار X.800):\n• التشفير (Encipherment): يحقق سرية البيانات (اتصال كامل، اتصال منفصل، حقول محددة)، سرية تدفق حركة المرور، سلامة الاتصال، ومصادقة منشأ البيانات.\n• التوقيعات الرقمية (Digital Signatures): تحقق مصادقة الكيان النظير، مصادقة منشأ البيانات، سلامة البيانات، وعدم الإنكار.\n• التحكم في الوصول (Access Controls): يحقق خدمة التحكم في الوصول.\n• آليات سلامة البيانات (Data Integrity): تحقق سلامة الاتصال المستمر والسلامة المنفصلة.\n• تبادل المصادقة (Authentication Exchange): يحقق مصادقة الكيان النظير.\n• حشو حركة المرور (Traffic Padding): يحقق سرية تدفق حركة المرور.\n• التحكم في التوجيه (Routing Control): يحقق سرية الاتصال المستمر والمنفصل.\n• التوثيق المعتمد (Notarization): يحقق خدمة عدم الإنكار (المنشأ والتسليم).',
              },
            ],
            formulas: [],
            diagrams: [],
            workedExamples: [],
            examNotes: [
              'Midterm 2020 Question [2] 7: "Notarization is the use of a trusted third party to assure certain properties of a data exchange."',
            ],
            examNotesAr: [
              'سؤال في ميدتيرم 2020: استخدام طرف ثالث موثوق لتأكيد خصائص البيانات يسمى: Notarization.',
            ],
            commonMistakes: ['Confusing Digital Signatures with Notarization (Notarization explicitly involves a third party).'],
            supplementaryNotes: [],
          },
          questions: [],
        },
      ],
    },
    {
      id: 'ch1-t5',
      title: 'Network Security Models & Threats',
      titleAr: 'نماذج أمان الشبكات والتهديدات',
      lessons: [
        {
          id: 'ch1-l16',
          chapterId: 'ch1',
          topicId: 'ch1-t5',
          title: 'Model for Network Security (Figure 1.2)',
          titleAr: 'نموذج أمان الشبكات (شكل 1.2)',
          estimatedMinutes: 15,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '25' },
          objectives: [
            'Identify all elements of the Network Security Model in Figure 1.2 (Slide 25).',
            'Explain the role of secret information and security-related transformations.',
          ],
          objectivesAr: [
            'تحديد كافة مكونات نموذج أمان الشبكات الواردة في الشكل 1.2 (شريحة 25).',
            'شرح دور المعلومات السرية (المفتاح) والتحويلات الأمنية.',
          ],
          content: {
            enDefinition: 'Figure 1.2 models the transmission of a message across an insecure channel where an opponent may intercept or modify communications.',
            arExplanation: 'يوضح الشكل 1.2 نموذج نقل رسالة عبر قناة اتصال غير آمنة في ظل وجود خصم أو مهاجم قد يعترض الاتصال أو يعدله.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: 'Key components of the model:\n- Sender & Recipient: The communicating principals.\n- Message: The plaintext to be delivered securely.\n- Security-related transformation: Encryption algorithm converting message into secure ciphertext.\n- Secret Information: Shared encryption key distributed via secure channel.\n- Information Channel: Public or insecure communication medium (Internet).\n- Opponent: Adversary attempting to read or alter messages.\n- Trusted Third Party: Key distribution center (KDC) or certification authority distributing keys and resolving disputes.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: 'المكونات الأساسية للنموذج:\n- المرسل والمستقبل: الطرفان الرئيسيان المتواصلان.\n- الرسالة: النص الصريح المراد إيصاله بأمان.\n- التحويل الأمني (Transformation): خوارزمية التشفير التي تحول الرسالة إلى نص مشفر آمن.\n- المعلومات السرية (Secret Info): مفتاح التشفير المشترك الموزع عبر قناة آمنة.\n- قناة نقل المعلومات: وسيط الاتصال العام أو غير الآمن (كالإنترنت).\n- الخصم (Opponent): المهاجم الذي يحاول قراءة الرسائل أو تعديلها.\n- الطرف الثالث الموثوق (Trusted Third Party): مركز توزيع المفاتيح أو جهة إصدار الشهادات.',
              },
            ],
            formulas: [],
            diagrams: [],
            workedExamples: [],
            examNotes: [
              'Testbank T/F 12: "All the techniques for providing security have two components: a security-related transformation on the information to be sent and some secret information shared by the two principals" -> TRUE.',
            ],
            examNotesAr: [
              'سؤال بنك الأسئلة: جميع تقنيات توفير الأمان ترتكز على مكونين: تحويل أمني ومعلومات سرية مشتركة -> صواب (True).',
            ],
            commonMistakes: [],
            supplementaryNotes: [],
          },
          questions: [],
        },
        {
          id: 'ch1-l17',
          chapterId: 'ch1',
          topicId: 'ch1-t5',
          title: 'Network Access Security Model & Unwanted Access (Figure 1.3)',
          titleAr: 'نموذج أمان الوصول للشبكة والوصول غير المرغوب (شكل 1.3)',
          estimatedMinutes: 15,
          sourceRef: { file: 'Ch 1 information security.pdf', page: '26-27' },
          objectives: [
            'Identify components of the Network Access Security Model in Figure 1.3 (Slide 26).',
            'Differentiate Information Access Threats from Service Threats.',
          ],
          objectivesAr: [
            'تحديد عناصر نموذج أمان الوصول إلى الشبكات (شكل 1.3 شريحة 26).',
            'التمييز بين تهديدات الوصول إلى المعلومات وتهديدات الخدمة.',
          ],
          content: {
            enDefinition: 'Figure 1.3 models defense against unauthorized access through an access channel into computing resources protected by gatekeeper functions and internal controls.',
            arExplanation: 'يوضح الشكل 1.3 نموذج الدفاع ضد محاولات الوصول غير المصرح بها عبر قنوات الاتصال إلى موارد الحاسوب المحمية بوظائف الحراسة والضوابط الداخلية.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content: '• Gatekeeper Function: Authentication mechanisms, firewalls, and login screens controlling the access channel.\n• Internal Security Controls: Access control lists, operating system permissions, antivirus, and audit tools protecting processes, memory, and data.\n• Information Access Threats: Intercept or modify data on behalf of users who should not have access to that data (e.g., trojans, spyware, snooping).\n• Service Threats: Exploit service flaws in computers to inhibit use by legitimate users (e.g., worms, crash exploits, DoS attacks).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content: '• وظيفة الحراسة (Gatekeeper Function): آليات التحقق من الهوية والجدران النارية التي تعترض قناة الدخول وتفحصها.\n• الضوابط الأمنية الداخلية (Internal Controls): صلاحيات نظام التشغيل ومضادات الفيروسات التي تحمي العمليات والذاكرة والملفات.\n• تهديدات الوصول إلى المعلومات (Information Access Threats): اعتراض أو تعديل البيانات لصالح مستخدمين غير مصرح لهم (مثل برامج التجسس وأحصنة طروادة).\n• تهديدات الخدمة (Service Threats): استغلال العيوب البرمجية في الخوادم والأجهزة لتعطيل استخدامها من قبل المستخدمين الشرعيين (مثل الفيروسات والديدان وحجب الخدمة).',
              },
            ],
            formulas: [],
            diagrams: [],
            workedExamples: [],
            examNotes: [
              'Testbank MCQ 12: "_____ threats exploit service flaws in computers to inhibit use by legitimate users." -> Service threats (Choice D).',
            ],
            examNotesAr: [
              'سؤال بنك الأسئلة: التهديدات التي تستغل العيوب البرمجية لمنع استخدام النظام من المستخدمين الشرعيين تسمى: Service threats.',
            ],
            commonMistakes: [],
            supplementaryNotes: [
              'Attack Surfaces and Attack Trees: Mentioned in Chapter 1 lecture summary slide, but detailed slides were not provided in the original 28-page lecture PDF. Supplemented in revision section.',
            ],
          },
          questions: [],
        },
      ],
    },
  ],
};

