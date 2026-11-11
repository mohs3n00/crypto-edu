import type { Chapter } from '../../../types';

export const bigDataChapter1: Chapter = {
  id: 'bd-ch1',
  number: 1,
  title: 'Introduction to Big Data Analytics & The Data Ecosystem',
  titleAr: 'مقدمة في تحليلات البيانات الضخمة والمعماريات التحليلية',
  description:
    'Definitions of Big Data, the 4 V’s (Volume, Velocity, Variety, Veracity), the 4 fundamental data structures, evolution of data repositories (Spreadsheets, Data Marts, EDW, Analytic Sandboxes), traditional analytical architecture bottlenecks, the modern Big Data ecosystem, Business Intelligence (BI) vs. Data Science comparison, and core analytics team roles.',
  descriptionAr:
    'مفهوم وتعريف البيانات الضخمة، الأبعاد الأربعة (الحجم، السرعة، التنوع، الموثوقية)، الأنواع الأربعة لهياكل البيانات، تطور مستودعات البيانات (الجداول الممتدة، أسواق البيانات، المستودعات المركزية EDW، والحاويات التحليلية Analytic Sandboxes)، اختناقات المعمارية التقليدية، مقارنة ذكاء الأعمال (BI) بعلم البيانات (Data Science)، والأدوار الأساسية في فرق العمل التحليلية.',
  topics: [
    {
      id: 'bd-ch1-t1',
      title: 'Big Data Concepts, 4 V’s & Data Structures',
      titleAr: 'مفاهيم البيانات الضخمة، أبعادها الأربعة وهياكل البيانات',
      lessons: [
        {
          id: 'bd-ch1-l1',
          chapterId: 'bd-ch1',
          topicId: 'bd-ch1-t1',
          title: 'Big Data Definition, Growth & The 4 V’s',
          titleAr: 'تعريف البيانات الضخمة، نموها وأبعادها الأربعة (4 V’s)',
          estimatedMinutes: 20,
          sourceRef: { file: 'Module 1_Intro to BDA.pptx', page: 'Slides 10-14' },
          objectives: [
            'Define Big Data and identify what characteristics make data "Big".',
            'Quantify global data volume growth from 0.8 ZB (2009) to 35.2 ZB (2020).',
            'Analyze the 4 V’s of Big Data: Volume, Velocity, Variety, and Veracity.',
            'Differentiate between Structured, Semi-Structured, Quasi-Structured, and Unstructured data.',
          ],
          objectivesAr: [
            'تعريف البيانات الضخمة وتحديد السمات التي تجعل البيانات توصف بأنها "ضخمة".',
            'تحديد حجم نمو البيانات العالمي من 0.8 زيتابايت (2009) إلى 35.2 زيتابايت (2020).',
            'تحليل الأبعاد الأربعة للبيانات الضخمة: الحجم، السرعة، التنوع، والموثوقية.',
            'التمييز بين البيانات المهيكلة، شبه المهيكلة، شبه المنظمة (Quasi)، وغير المهيكلة.',
          ],
          content: {
            enDefinition:
              'Big Data refers to datasets whose scale, distribution, diversity, and timeliness exceed the capabilities of traditional relational database systems and tools, requiring new architectures, parallel computing engines, and analytic sandboxes to extract meaningful business value.',
            arExplanation:
              'تُعرَّف البيانات الضخمة (Big Data) بأنها مجموعات البيانات التي يتجاوز حجمها وتوزيعها وتنوعها وسرعة تدفقها قدرات نظم قواعد البيانات العلائقية التقليدية، مما يتطلب معماريات حديثة، ومحركات حوسبة متوازية، وبيئات تحليلية مرنة (Analytic Sandboxes) لاستخراج قيمة عملية للأعمال.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Core Drivers of Big Data Explosion:\n• Massive Data Growth: Digital universe grew by a factor of 44x from 2009 (0.8 Zettabytes) to 2020 (35.2 Zettabytes).\n• Unstructured Growth: 80% to 90% of all future data generated is unstructured (video, audio, text, sensor feeds), rendering traditional tabular databases insufficient.\n• Emerging Data Sources: Mobile devices, smart meters, social networks, RFID tags, medical imaging, and pervasive IoT telemetry.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'محركات انفجار البيانات الضخمة:\n• النمو الهائل للحجم: تضاعف حجم العالم الرقمي بمقدار 44 ضعفاً من 2009 (0.8 زيتابايت) إلى 2020 (35.2 زيتابايت).\n• هيمنة البيانات غير المهيكلة: ما بين 80% إلى 90% من البيانات المتولدة حديثاً هي بيانات غير مهيكلة (فيديو، صوت، نصوص، مجسات)، مما يجعل قواعد البيانات الجدولية التقليدية عاجزة عن معالجتها.\n• المصادر المستحدثة: الأجهزة الذكية، العدادات الذكية، شبكات التواصل الاجتماعي، علامات RFID، والتصوير الطبي الدقيق.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The 4 V’s of Big Data:\n1. Volume: The massive scale and sheer quantity of data (terabytes, petabytes, exabytes, zettabytes).\n2. Velocity: The rapid frequency and real-time generation and processing speed (batch vs. streaming telemetry).\n3. Variety: The extreme diversity of data formats and structural types.\n4. Veracity: The trustworthiness, data quality, bias, and noise in raw data sources.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الأبعاد الأربعة الجوهرية (The 4 V’s):\n1. الحجم (Volume): المقياس الهائل للبيانات وضخامتها (تيرابايت، بيتابايت، إكسابايت، زيتابايت).\n2. السرعة (Velocity): وتيرة التوليد الفورية وسرعة المعالجة اللحظية لتدفق البيانات (Streaming).\n3. التنوع (Variety): الاختلاف الواسع في تنسيقات البيانات وهياكلها ومصادرها.\n4. الموثوقية (Veracity): درجة جودة البيانات وصحتها وخلوها من الضوضاء والتشويش والتحيز.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The Four Main Types of Data Structures:\n• Structured Data: Predefined schema, tabular rows and columns (e.g., RDBMS, SQL tables, OLAP cubes). Accounts for ~10-20% of data.\n• Semi-Structured Data: Does not conform to rigid tabular relations but contains internal tags and markup markers (e.g., XML, JSON, CSV).\n• Quasi-Structured Data: Erratic format that contains implicit structure but requires significant transformation to convert to tabular format (e.g., Web clickstream logs, server access logs).\n• Unstructured Data: Zero predefined schema or conceptual structure (e.g., PDF documents, email bodies, call-center audio recordings, video surveillance, radiology scans). Accounts for ~80-90% of enterprise data.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الأنواع الأربعة لهياكل البيانات:\n• بيانات مهيكلة (Structured): تتبع مخططاً مسبقاً في صفوف وأعمدة جدولية (مثل جداول SQL وقواعد البيانات العلائقية RDBMS ومكعبات OLAP)، وتشكل 10-20% من البيانات.\n• بيانات شبه مهيكلة (Semi-Structured): لا تلتزم بجداول صارمة لكنها تحتوي على وسوم وتنسيقات هرمية ذاتية التوصيف (مثل XML و JSON).\n• بيانات شبه منظمة (Quasi-Structured): تفتقر للتنسيق الصارم لكنها تحوي أنماطاً دلالية تحتاج معالجة لاستخراجها (مثل سجلات نقرات الويب Clickstream Logs وسجلات الخوادم).\n• بيانات غير مهيكلة (Unstructured): خالية تماماً من أي مخطط أو هيكل مسبق (مثل ملفات PDF، نصوص رسائل البريد، المكالمات الصوتية، مقاطع الفيديو، والصور الطبية)، وتشكل 80-90% من مجمل البيانات.',
              },
            ],
          },
          examNotes:
            'Exam Note: 80% to 90% of all future data growth is unstructured. Make sure you can classify clickstream logs as quasi-structured, JSON as semi-structured, and RDBMS as structured.',
          examNotesAr:
            'ملاحظة امتحانية: تمثل البيانات غير المهيكلة 80% إلى 90% من حجم البيانات المتنامية. احفظ تصنيف سجلات النقر (Clickstream) كبيانات شبه منظمة (Quasi)، وملفات JSON كشبه مهيكلة، وجداول RDBMS كمهيكلة.',
        },
      ],
    },
    {
      id: 'bd-ch1-t2',
      title: 'Evolution of Repositories & The Analytic Sandbox',
      titleAr: 'تطور مستودعات البيانات والحاويات التحليلية',
      lessons: [
        {
          id: 'bd-ch1-l2',
          chapterId: 'bd-ch1',
          topicId: 'bd-ch1-t2',
          title: 'Data Repositories & The Analytic Sandbox',
          titleAr: 'مستودعات البيانات ومفهوم الحاوية التحليلية (Analytic Sandbox)',
          estimatedMinutes: 20,
          sourceRef: { file: 'Module 1_Intro to BDA.pptx', page: 'Slides 15-16', originalNumber: '2025 Q1.1' },
          objectives: [
            'Trace the evolutionary progression of analytical data repositories.',
            'Define an Analytic Sandbox and its role in modern data science initiatives.',
            'Contrast local spreadsheets and departmental data marts with enterprise sandboxes.',
            'Master the model answer for Midterm Written Question 1.1.',
          ],
          objectivesAr: [
            'تتبع التطور التاريخي لمستودعات البيانات من الجداول إلى الحاويات التحليلية.',
            'تعريف الحاوية التحليلية (Analytic Sandbox) ودورها في مشاريع علم البيانات الحديثة.',
            'المقارنة بين الجداول الممتدة المحلية وأسواق البيانات والمستودعات المؤسسية.',
            'إتقان صياغة الإجابة النموذجية للسؤال المقالي الأول في امتحان الميدتيرم 2025.',
          ],
          content: {
            enDefinition:
              'An Analytic Sandbox is an isolated, dedicated, high-performance data workspace that brings together data extracts from multiple enterprise sources and external feeds, enabling data scientists to explore, transform, and model data without impacting production operational environments.',
            arExplanation:
              'الحاوية التحليلية (Analytic Sandbox) هي بيئة عمل مخصصة ومعزولة وذات أداء حسابي عالٍ، تُجمع فيها مقتطفات البيانات من مصادر المؤسسة المتعددة والمصادر الخارجية، مما يتيح لعلماء البيانات استكشاف وتحويل ونمذجة البيانات بحرية دون التأثير على بيئات التشغيل والإنتاج الفعلية (Production Systems).',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Evolution of Analytical Data Repositories:\n1. Spreadsheets & Low-Volume Databases: Local desktop silos (Excel, Access). Fragile, lack concurrency, manual copy-pasting, version chaos.\n2. Departmental Data Marts: Subject-oriented subsets built for specific business units (e.g., Marketing Data Mart). Creates fragmented "islands of data".\n3. Enterprise Data Warehouses (EDW): Centralized, highly governed, relational repository providing a "single version of truth". Excellent for reporting, but too rigid for ad-hoc exploration.\n4. Analytic Sandboxes: Modern scalable workspaces provisioned with high-performance compute (Hadoop, in-database analytics) for unconstrained data exploration.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'التطور التاريخي لمستودعات البيانات التحليلية:\n1. الجداول الممتدة وقواعد البيانات المحلية: جزر بيانات منعزلة (Excel, Access)، تعاني من فوضى الإصدارات، وغياب التزامن، والقص واللصق اليدوي.\n2. أسواق البيانات (Data Marts): مستودعات موجهة لأقسام محددة (مثل سوق بيانات التسويق)، مما يخلق "جزراً معزولة" وتضارباً في الأرقام.\n3. مستودعات البيانات المركزية (EDW): بنية مركزية خاضعة لحوكمة صارمة تقدم "حقيقة واحدة للمؤسسة"، ممتازة للتقارير الثابتة، لكنها بالغة الصرامة والبطء في التجريب الاستكشافي.\n4. الحاويات التحليلية (Analytic Sandboxes): بيئات عمل حديثة مزودة بقدرات حوسبة فائقة لمعالجة البيانات الضخمة والتجريب الخوارزمي بحرية تامة.',
              },
              {
                type: 'callout',
                lang: 'en',
                content:
                  'Official Exam Written Model Answer (Midterm 2025 - Q1.1: "What is an analytic sandbox?"):\n• Definition: An isolated, scalable analytical workspace provided specifically for data science teams.\n• Key Characteristic 1: Gathers assets from multiple enterprise sources, including raw, semi-structured, and external data.\n• Key Characteristic 2: Provides massive computing resources and advanced analytical tooling (R, Python, MADlib, SQL).\n• Key Characteristic 3: Safe experimentation without impacting production OLTP databases or requiring rigid schema-on-write constraints.',
              },
              {
                type: 'callout',
                lang: 'ar',
                content:
                  'الإجابة النموذجية للسؤال المقالي (ميدتيرم 2025 - س1.1: "What is an analytic sandbox?"):\n• التعريف: بيئة عمل تحليلية معزولة وقابلة للتوسع مخصصة حصرياً لفرق علم البيانات.\n• الخاصية الأولى: تجمع البيانات من مصادر متعددة داخل المؤسسة وخارجها، بما فيها البيانات الخام وغير المهيكلة.\n• الخاصية الثانية: توفر قدرات حوسبة متقدمة وأدوات تحليل متطورة (مثل R و Python و MADlib و SQL).\n• الخاصية الثالثة: تتيح التجريب والاستكشاف الخوارزمي الآمن دون المساس بأنظمة الإنتاج ودون قيود المخططات الصارمة.',
              },
            ],
          },
          examNotes:
            'Exam Note: This is an exact written question from the 2025 Midterm Exam (Q1.1). Remember the 3 key pillars: Isolation from production, multi-source raw ingestion, and dedicated compute for iterative exploration.',
          examNotesAr:
            'ملاحظة امتحانية: هذا السؤال ورد حرفياً في امتحان الميدتيرم 2025 (س1.1). ركّز على الأركان الثلاثة: العزل عن أنظمة الإنتاج، استيعاب البيانات الخام المتعددة، والحوسبة المخصصة للتجريب.',
        },
      ],
    },
    {
      id: 'bd-ch1-t3',
      title: 'Architectures & Ecosystems: Traditional vs Modern',
      titleAr: 'المعماريات التحليلية: التقليدية مقابل منظومة البيانات الحديثة',
      lessons: [
        {
          id: 'bd-ch1-l3',
          chapterId: 'bd-ch1',
          topicId: 'bd-ch1-t3',
          title: 'Analytical Architecture Bottlenecks for Data Science',
          titleAr: 'تحديات المعمارية التحليلية التقليدية لعلماء البيانات',
          estimatedMinutes: 20,
          sourceRef: { file: 'Module 1_Intro to BDA.pptx', page: 'Slides 21-24', originalNumber: '2025 Q1.3' },
          objectives: [
            'Analyze the structure of a typical legacy enterprise analytical architecture.',
            'Identify why traditional architectures fail to support modern data science workflows.',
            'Articulate the 4 core architectural challenges examined in Midterm 2025 Q1.3.',
            'Explain the paradigm shift from Schema-on-Write (ETL) to Schema-on-Read (ELT).',
          ],
          objectivesAr: [
            'تحليل هيكل المعمارية التحليلية التقليدية في المؤسسات الكبرى.',
            'تحديد أسباب فشل المعماريات التقليدية في دعم متطلبات علم البيانات الحديث.',
            'صياغة التحديات الأربعة الكبرى للمعماريات التقليدية المعتمدة في امتحان ميدتيرم 2025 (س1.3).',
            'شرح التحول الجوهري من المخطط عند الكتابة (ETL) إلى المخطط عند القراءة (ELT).',
          ],
          content: {
            enDefinition:
              'A typical analytical architecture routes transactional operational data through batch ETL pipelines into a central EDW and departmental marts for reporting, but creates structural bottlenecks for data scientists who require rapid access to raw, multi-format, high-volume data.',
            arExplanation:
              'تقوم المعمارية التحليلية التقليدية بنقل البيانات التشغيلية عبر خطوط معالجة مجمعة (Batch ETL) إلى مستودع مركزي (EDW) وأسواق بيانات لإنتاج التقارير الثابتة، مما يخلق اختناقات هيكلية أمام علماء البيانات الذين يحتاجون وصولاً سريعاً ومباشراً للبيانات الخام غير المقيدة بمخططات مسبقة.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The Traditional Enterprise Architecture Flow:\n1. Operational Data Sources: OLTP databases, ERP systems, CRM transactions.\n2. Batch ETL Pipeline: Extract, Transform (conform to rigid schema), and Load.\n3. Enterprise Data Warehouse (EDW): Cleansed and aggregated relational storage.\n4. Departmental Data Marts: Narrow slices created for specific business functions.\n5. Presentation Layer: Static dashboards, KPI scorecards, and historical batch reports.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'مسار المعمارية التقليدية في المؤسسات:\n1. مصادر البيانات التشغيلية: قواعد بيانات المعاملات (OLTP)، نظم تخطيط الموارد (ERP)، وإدارة العملاء (CRM).\n2. خط معالجة ETL الدفعي: الاستخراج، التحويل (بالمطابقة مع مخطط صلب مسبق)، ثم التحميل.\n3. مستودع البيانات المركزي (EDW): تخزين علائقي موحد ومجمع للبيانات المنقاة.\n4. أسواق البيانات (Data Marts): شرائح مخصصة لوظائف معينة (المبيعات، المالية).\n5. طبقة العرض: لوحات تحكم ثابتة، بطاقات أداء، وتقارير دورية ماضية.',
              },
              {
                type: 'callout',
                lang: 'en',
                content:
                  'Official Exam Written Model Answer (Midterm 2025 - Q1.3: "Describe the challenges of the current analytical architecture for Data Scientists"):\n1. High-Value Data is Hard to Reach: Valuable unstructured and raw data never makes it into the EDW because ETL filters it out.\n2. Rigid Schema-on-Write Constraints: Data must fit into predefined relational models before it can be loaded, blocking exploratory variable testing.\n3. Heavy IT Bottlenecks & Request Queues: Adding new data sources or modifying attributes requires formal IT change tickets taking weeks or months.\n4. Inadequate Compute for Advanced Algorithms: EDWs are optimized for SQL aggregate queries (SUM, AVG), not for iterative statistical training, matrix algebra, and machine learning.',
              },
              {
                type: 'callout',
                lang: 'ar',
                content:
                  'الإجابة النموذجية للسؤال المقالي (ميدتيرم 2025 - س1.3: "Describe the challenges of the current analytical architecture for Data Scientists"):\n1. صعوبة الوصول للبيانات عالية القيمة: البيانات الخام وغير المهيكلة لا تصل للمستودع (EDW) لأن خطوط ETL تستبعدها أثناء التنقية المسبقة.\n2. قيود المخطط المسبق عند الكتابة (Schema-on-Write): اشتراط مطابقة البيانات لمخطط علائقي قبل تحميلها يعيق استكشاف وتجربة متغيرات جديدة.\n3. طوابير طلبات تقنية المعلومات الطويلة: يتطلب طلب إضافة مصدر بيانات جديد أو تعديل حقل دورة برمجية تستغرق أسابيع أو أشهراً.\n4. عجز قدرات المعالجة عن تشغيل الخوارزميات المتقدمة: مستودعات EDW مصممة لاستعلامات التجميع السريعة (SQL Aggregates)، وليس للتدريب الإحصائي التكراري والحوسبة الرياضية المعقدة.',
              },
            ],
          },
          examNotes:
            'Exam Note: Midterm 2025 Q1.3 tested this exact topic. Always state the 4 challenges: (1) Hard to reach data, (2) Schema-on-write rigidity, (3) IT queue delays, and (4) Inadequate compute for ML.',
          examNotesAr:
            'ملاحظة امتحانية: ورد هذا السؤال في امتحان الميدتيرم 2025 (س1.3). احرص على ذكر التحديات الأربعة: (1) صعوبة الوصول للبيانات الخام، (2) صلابة المخطط المسبق، (3) بطء طلبات الـ IT، و (4) ضعف قدرة المعالجة الخوارزمية.',
        },
      ],
    },
    {
      id: 'bd-ch1-t4',
      title: 'Business Intelligence vs Data Science & Core Roles',
      titleAr: 'ذكاء الأعمال مقابل علم البيانات والأدوار الوظيفية',
      lessons: [
        {
          id: 'bd-ch1-l4',
          chapterId: 'bd-ch1',
          topicId: 'bd-ch1-t4',
          title: 'Business Intelligence (BI) vs. Data Science',
          titleAr: 'المقارنة الجوهرية: ذكاء الأعمال (BI) مقابل علم البيانات (Data Science)',
          estimatedMinutes: 20,
          sourceRef: { file: 'Module 1_Intro to BDA.pptx', page: 'Slides 25-33', originalNumber: '2025 Q1.2, Q2.1' },
          objectives: [
            'Master the comprehensive comparison between Business Intelligence and Data Science.',
            'Categorize analytics types: Descriptive vs. Predictive vs. Prescriptive.',
            'Identify the primary roles in a modern data analytics ecosystem.',
            'Formulate the complete answer for Midterm Written Question 1.2.',
          ],
          objectivesAr: [
            'إتقان المقارنة الشاملة بين ذكاء الأعمال (BI) وعلم البيانات (Data Science).',
            'تصنيف مستويات التحليل: الوصفي (Descriptive)، التنبؤي (Predictive)، والتوجيهي (Prescriptive).',
            'تحديد الأدوار الرئيسية لأعضاء فريق التحليلات المتقدمة.',
            'صياغة الإجابة النموذجية للسؤال المقالي الثاني في امتحان الميدتيرم 2025 (س1.2).',
          ],
          content: {
            enDefinition:
              'Business Intelligence (BI) focuses on retrospective, descriptive reporting of structured historical data to track known business metrics, whereas Data Science leverages advanced statistical modeling, machine learning, and raw multi-structured data to predict future outcomes and optimize decision-making.',
            arExplanation:
              'يركز ذكاء الأعمال (BI) على التقارير الوصفية الاسترجاعية للبيانات التاريخية المهيكلة لتتبع مؤشرات الأداء المعروفة ("ماذا حدث؟")، بينما يعتمد علم البيانات (Data Science) على النمذجة الإحصائية المتقدمة وتعلم الآلة والبيانات الخام بمختلف أشكالها للتنبؤ بالمستقبل وتوجيه القرارات المثلى ("ماذا سيحدث ولماذا؟").',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Comparison Matrix: Business Intelligence vs. Data Science:\n• Time Horizon: BI looks backwards to the past (Historical); Data Science looks forward to the future (Predictive/Prescriptive).\n• Data Formats: BI uses structured, clean tabular data (Relational/EDW); Data Science uses any format (structured, semi-structured, raw text, streaming sensor feeds).\n• Questions Asked: BI answers "What happened? How many? When?"; Data Science answers "Why did it happen? What will happen next? What is the best action?".\n• Core Tools: BI uses SQL, Tableau, PowerBI, MicroStrategy; Data Science uses R, Python, Hadoop, Spark, TensorFlow, Machine Learning algorithms.\n• Analytical Complexity: BI uses simple aggregations (SUM, AVG, MIN, MAX); Data Science uses clustering, regressions, decision trees, neural networks.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'مصفوفة المقارنة الجوهرية (ميدتيرم 2025 س1.2):\n• الأفق الزمني: ذكاء الأعمال ينظر للماضي (استرجاعي/تاريخي)؛ علم البيانات ينظر للمستقبل (تنبؤي/استشرافي).\n• تنسيق البيانات: ذكاء الأعمال يعتمد على بيانات مهيكلة وجداول منقاة؛ علم البيانات يستوعب كافة التنسيقات (نصوص خام، وسائط، تدفقات مجسات).\n• الأسئلة المطروحة: ذكاء الأعمال يسأل "ماذا حدث؟ وكم الكمية؟ ومتى؟"؛ علم البيانات يسأل "لماذا حدث ذلك؟ وماذا سيحدث لاحقاً؟ وما هو أفضل قرار؟".\n• الأدوات المستخدمة: ذكاء الأعمال يعتمد على SQL و Tableau و PowerBI؛ علم البيانات يعتمد على R و Python و Spark وخوارزميات تعلم الآلة.\n• التعقيد التحليلي: ذكاء الأعمال يقوم على استعلامات تجميعية بسيطة؛ علم البيانات يوظف التجميع والتصنيف والانحدار والشبكات العصبية.',
              },
              {
                type: 'callout',
                lang: 'en',
                content:
                  'Analytics Spectrum (Midterm 2025 - Q2.1 Focus):\n• Descriptive Analytics: "What happened?" (e.g., A retailer analyzes sales reports from the last quarter - Midterm 2025 Q2.1 Correct Answer).\n• Predictive Analytics: "What will happen?" (e.g., Forecasting next month’s loan approvals or customer churn probability).\n• Prescriptive Analytics: "How can we make it happen / What is the optimal decision?" (e.g., Dynamic real-time delivery route optimization).',
              },
              {
                type: 'callout',
                lang: 'ar',
                content:
                  'أطياف التحليلات ومستوياتها (سؤال الميدتيرم 2025 س2.1):\n• التحليلات الوصفية (Descriptive): "ماذا حدث؟" (مثال: متجر يحلل تقارير مبيعات الربع الأخير من العام - الإجابة الصحيحة لسؤال الميدتيرم 2025 س2.1).\n• التحليلات التنبؤية (Predictive): "ماذا سيحدث؟" (مثال: التنبؤ بحجم الموافقات على القروض للشهر القادم أو احتمالية مغادرة العملاء).\n• التحليلات التوجيهية (Prescriptive): "كيف نوجه القرار للأمثل؟" (مثال: تحسين المسارات اللوجستية وتوزيع الشحنات لحظياً).',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Core Roles in the Analytics Team:\n1. Business User: Domain expert who sponsors the project, defines business requirements, and consumes actionable insights.\n2. BI Analyst: Designs structured operational reports, standard dashboards, and tracks historical KPIs.\n3. Data Engineer: Builds scalable data pipelines (ETL/ELT), provisions sandbox environments, and prepares raw data infrastructure.\n4. Database Administrator (DBA): Manages production database health, backup, concurrency, security, and query tuning.\n5. Data Scientist: Reframes business problems as analytical challenges, designs hypotheses, builds and tests machine learning models, and discovers deep predictive patterns.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الأدوار الأساسية في فريق التحليلات المتقدمة:\n1. مستخدم الأعمال (Business User): الخبير المتخصص الذي يرعى المشروع ويحدد الأهداف التشغيلية ويستفيد من المخرجات.\n2. محلل ذكاء الأعمال (BI Analyst): يصمم التقارير الدورية ولوحات التحكم التفاعلية ويتابع مؤشرات الأداء (KPIs).\n3. مهندس البيانات (Data Engineer): يبني خطوط سحب ونقل البيانات (Pipelines)، ويهيئ الحاوية التحليلية وبنية البيانات الضخمة.\n4. مدير قواعد البيانات (DBA): يدير أمان وجاهزية قواعد البيانات التشغيلية وضبط أدائها وصلاحياتها.\n5. عالم البيانات (Data Scientist): يعيد صياغة تحديات الأعمال في قالب تحليلي، ويصيغ الفرضيات، ويبني ويدرب نماذج تعلم الآلة التنبؤية.',
              },
            ],
          },
          examNotes:
            'Exam Note: Midterm 2025 tested this in two places: Q1.2 (Written: Difference between BI and Data Science) and Q2.1 (MCQ: Identifying descriptive analytics as analyzing sales reports from the last quarter).',
          examNotesAr:
            'ملاحظة امتحانية: اختبر امتحان الميدتيرم 2025 هذا المحتوى في موضعين: س1.2 (مقالي: الفرق بين BI وعلم البيانات) وس2.1 (اختياري: مثال التحليلات الوصفية هو تحليل تقارير مبيعات الربع الماضي).',
        },
      ],
    },
  ],
};
