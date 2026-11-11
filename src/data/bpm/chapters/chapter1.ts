import type { Chapter } from '../../../types';

export const bpmChapter1: Chapter = {
  id: 'bpm-ch1',
  number: 1,
  title: 'Foundations of Business Process Management & Modeling',
  titleAr: 'مفاهيم وأسس إدارة ونمذجة عمليات الأعمال',
  description:
    'Origins and dual perspectives of BPM, the Canon HR digitization digital transformation case study, formal definitions of processes and BPM, Herbert Stachowiak’s general model theory, process blueprints vs. runtime instances, Mathias Weske’s 4-phase lifecycle, process hierarchy levels, and the enterprise technology stack.',
  descriptionAr:
    'الجذور التاريخية والرؤى المزدوجة لإدارة العمليات، دراسة حالة التحول الرقمي للموارد البشرية بشركة كانون، التعريفات الأكاديمية الدقيقة للعمليات وإدارتها، نظرية النمذجة لهربرت شتاخوفياك، مخططات العمليات وحالاتها التشغيلية، دورة حياة ويسكي الرباعية، مستويات هرمية العمليات، والطبقات التكنولوجية للمؤسسة الحديثة.',
  topics: [
    {
      id: 'bpm-ch1-t1',
      title: 'Course Identity, Historical Evolution & Perspectives',
      titleAr: 'هوية المقرر، التطور التاريخي ورؤى إدارة العمليات',
      lessons: [
        {
          id: 'bpm-ch1-l1',
          chapterId: 'bpm-ch1',
          topicId: 'bpm-ch1-t1',
          title: 'Historical Evolution & The Two Perspectives on BPM',
          titleAr: 'التطور التاريخي والرؤيتان المتكاملتان لإدارة العمليات',
          estimatedMinutes: 15,
          sourceRef: { file: 'BPM_L1.pdf', page: '3-8, 18' },
          objectives: [
            'Understand the academic objectives and future career paths for IS412 Business Process Management.',
            'Contrast the Business Administration perspective with the Computer Science perspective on BPM.',
            'Explain Adam Smith’s 1776 pin-maker division of labour as the economic origin of process decomposition.',
            'Analyze Rummler & Brache’s 1990 cross-functional model for managing the white space on organizational charts.',
          ],
          objectivesAr: [
            'استيعاب الأهداف الأكاديمية والمسارات المهنية لمقرر إدارة عمليات الأعمال (IS412).',
            'المقارنة بين منظور إدارة الأعمال ومنظور علوم الحاسب تجاه إدارة العمليات.',
            'شرح نموذج آدم سميث (1776) لتقسيم العمل في صناعة الدبابيس كأصل اقتصادي لتجزئة العمليات.',
            'تحليل نموذج راملر وبراش (1990) لإدارة المساحات البيضاء العابرة للإدارات الوظيفية.',
          ],
          content: {
            enDefinition:
              'Business Process Management (IS412) investigates systematic methods to analyze, redesign, and improve enterprise processes so they consistently meet customer needs and strategic business goals.',
            arExplanation:
              'يختص مقرر إدارة عمليات الأعمال (IS412) بدراسة الطرق المنهجية لتحليل، وإعادة تصميم، وتحسين عمليات المؤسسة لضمان تلبيتها المستمرة لاحتياجات العملاء وأهداف العمل الاستراتيجية.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Course Profile & Prerequisites (IS412 - Dr. Nissreen El-Saber):\n• Core Purpose: Analyze, redesign, and improve business processes to deliver lean and customer-focused value.\n• Core Tooling: Business Process Diagrams (BPDs) using BPMN standard notation and laboratory practice using BPM software (Signavio / Edraw).\n• Career Roles: Business Analysts, Project Managers, and IT enterprise architects.\n• Prerequisites: Systems Analysis and Design (IS201), Database Systems (IS200), Computer Programming II (CS102), and Computer Programming I (CS101).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الملف التعريفي للمقرر ومتطلباته (IS412 - د. نسرين الصابر):\n• الهدف الجوهري: تحليل وإعادة تصميم وتحسين العمليات لتقديم قيمة رشيقة تركز على العميل.\n• الأدوات العملية: مخططات العمليات (BPDs) بمعيار BPMN مع تطبيقات معملية على برمجيات BPM (مثل Signavio و Edraw).\n• الأدوار الوظيفية المستهدفة: محللو الأعمال (Business Analysts)، مديرو المشاريع (Project Managers)، وأخصائيو تقنية المعلومات.\n• المتطلبات السابقة: تحليل وتصميم النظم (IS201)، نظم قواعد البيانات (IS200)، البرمجة 2 (CS102)، والبرمجة 1 (CS101).',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The Two Perspectives on BPM:\n1. Business Administration Community: Focuses primarily on improving company operations, boosting productivity, lowering operational costs, eliminating bureaucratic delays, and enhancing customer satisfaction.\n2. Computer Science Community: Focuses primarily on providing robust, scalable, secure, and reliable software execution systems, workflow engines, service choreographies, and enterprise application integration (EAI).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'المنظوران المتكاملان لإدارة العمليات:\n1. منظور إدارة الأعمال: يركز بالأساس على تحسين كفاءة العمليات التشغيلية، رفع الإنتاجية، خفض التكاليف، التخلص من البيروقراطية، وإرضاء العملاء.\n2. منظور علوم الحاسب: يركز على بناء أنظمة برمجية قوية وقابلة للتوسع ومحركات تنفيذ تدفقات العمل (Workflow Engines) وتكامل تطبيقات المؤسسة (EAI).',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Historical Origins of Process Decomposition:\n• Adam Smith (1776, The Wealth of Nations): Demonstrated division of labour using a pin-maker workshop. The single trade of making a pin was divided into ~18 distinct physical operations (drawing wire, straightening, cutting, pointing, grinding top for head, three operations to make the head, attaching it, whitening, packaging). This division yielded exponential output gains.\n• Rummler & Brache (1990, Managing the White Space): Traditional organizational charts represent vertical functional silos (Department A, Department B, Department C). However, real work flows horizontally across these departments — from partners and suppliers (financial, HR, technology, materials) through cross-functional business processes to deliver final value to the customer. Managing this "white space" between silos is the central aim of BPM.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الأصول التاريخية وتجزئة العمليات:\n• آدم سميث (1776 - ثروة الأمم): قدّم نموذج تقسيم العمل من خلال ورشة صناعة الدبابيس؛ حيث قُسِّمت الحرفة إلى حوالي 18 عملية منفصلة ومحددة (سحب السلك، تقويمه، قطعه، شحذ سنه، تشكيل الرأس بثلاث خطوات، تثبيت الرأس، تبييض الدبابيس، وتعبئتها)، مما ضاعف الإنتاجية بآلاف المرات.\n• راملر وبراش (1990 - إدارة المساحة البيضاء): تعكس الهياكل التنظيمية التقليدية جزرًا رأسية معزولة (أقسام وظيفية A, B, C)، لكن القيمة الحقيقية تتدفق أفقيًا عبر تلك الأقسام من الموردين والشركاء (مواد، تكنولوجيا، مالية، كوادر) عبر العمليات العابرة للإدارات لتصل إلى العميل النهائي. تمثل إدارة هذه "المساحات البيضاء" غير الموثقة بين الأقسام جوهر فكر إدارة العمليات.',
              },
            ],
            examNotes: [
              'Frequent Exam Question: Remember that BPM combines BOTH perspectives: Business Administration (improving operations) AND Computer Science (robust and scalable software systems).',
              'Exam Trigger: Rummler & Brache 1990 emphasized managing the horizontal "white space" between vertical functional silos.',
            ],
            examNotesAr: [
              'سؤال امتحاني متكرر: تجمع إدارة العمليات بين رؤيتين متكاملتين: إدارة الأعمال (تحسين العمليات) وعلوم الحاسب (برمجيات قوية وقابلة للتوسع).',
              'مفتاح امتحاني: نموذج راملر وبراش (1990) ركّز على إدارة "المساحات البيضاء" الأفقية الفاصلة بين الإدارات الرأسية.',
            ],
            commonMistakes: [
              'Thinking BPM is purely a software programming task or purely a managerial philosophy; it is an integrated discipline joining business operations with IT software execution.',
            ],
          },
        },
      ],
    },
    {
      id: 'bpm-ch1-t2',
      title: 'Digital Transformation Case Study: Canon HR Digitization',
      titleAr: 'دراسة حالة التحول الرقمي: حوسبة الموارد البشرية بشركة كانون',
      lessons: [
        {
          id: 'bpm-ch1-l2',
          chapterId: 'bpm-ch1',
          topicId: 'bpm-ch1-t2',
          title: 'Canon HR Digitization Case Study & 4 Lifecycle Activities',
          titleAr: 'دراسة حالة التحول الرقمي لموارد كانون البشرية والأنشطة الأربعة',
          estimatedMinutes: 15,
          sourceRef: { file: 'BPM_L1.pdf', page: '9-17' },
          objectives: [
            'Analyze the real-world operational challenges of paper-based workflows at Canon Italy.',
            'Identify the software platform used to resolve the paper archive bottleneck (Canon HR Case Manager / Therefore™).',
            'Quantify the verified business benefits gained from digitizing 900 employee files.',
            'Map the four essential HR lifecycle activities: Recruiting, Onboarding, Managing, and Off-boarding.',
          ],
          objectivesAr: [
            'تحليل التحديات التشغيلية الواقعية للتعامل الورقي اليدوي في الموارد البشرية بشركة كانون إيطاليا.',
            'التعرف على المنظومة البرمجية المعتمدة لحل أزمة الأرشيف الورقي (Canon HR Case Manager / منصة Therefore™).',
            'حصر المكاسب التشغيلية المؤكدة الناتجة عن رقمنة 900 ملف موظف.',
            'تحديد الأنشطة الأربعة لدورة حياة الموارد البشرية: التوظيف، التهيئة، الإدارة، وإنهاء الخدمة.',
          ],
          content: {
            enDefinition:
              'The Canon HR Digitization case study demonstrates how migrating from manual paper archives to a digital workflow management system (Therefore™ Case Manager) transforms HR from a bureaucratic cost center into a lean, compliant, and strategic asset.',
            arExplanation:
              'توضح دراسة حالة كانون كيف نجح الانتقال من الأرشيف الورقي اليدوي إلى نظام رقمي لإدارة تدفقات العمل (Therefore™ Case Manager) في تحويل إدارة الموارد البشرية من مركز تكلفة بيروقراطي إلى إدارة رشيقة وممتثلة قانونيًا واستراتيجية.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The Operational Challenge at Canon Italy:\n• Problem: The HR team was burdened by manually managing paper employee records across 900 personnel files.\n• Symptoms: Searching, updating, and filing paper records was laborious, slow, costly, and prone to misplacement.\n• Business Impact: Paper archives made HR a bureaucratic cost center and distracted skilled HR professionals from high-value strategic tasks.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'التحدي التشغيلي في كانون إيطاليا:\n• المشكلة: غرق فريق الموارد البشرية في المعالجة اليدوية الورقية لملفات 900 موظف.\n• الأعراض: عمليات البحث والأرشفة اليدوية كانت مستنزفة للوقت والمال ومعرضة لفقدان المستندات.\n• الأثر على العمل: تحول القسم إلى مركز تكلفة بيروقراطي يستنزف الموارد ويعطل الموظفين عن مهام التطوير الاستراتيجي.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The Implemented Technological Solution:\n• Platform: Implemented the "Canon HR Case Manager", powered by the Therefore™ enterprise information management platform.\n• Architectural Capabilities: Fast, secure, and flexible document processing; electronic indexing, full-text searching, case history tracking, role-based access control, and automated workflow routing.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الحل التكنولوجي المطبق:\n• المنظومة: تطبيق "Canon HR Case Manager" المدعوم بمنصة إدارة معلومات المؤسسات Therefore™.\n• القدرات التقنية: معالجة سريعة ومرنة للمستندات، فهرسة إلكترونية ذكية، بحث في النصوص الكاملة، تتبع تاريخ الحالة، وصلاحيات وصول دقيقة.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Quantitative & Operational Benefits:\n1. 15% Reduction in Administrative Time: Drastically slashed hours spent on manual paperwork.\n2. Boosted Morale & Productivity: Staff could focus on employee relations and talent development.\n3. Enhanced Security & Full Compliance: Automated retention rules, complete audit trails, and instant compliance with labor data regulations.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'المكاسب التشغيلية والكمية المتحققة:\n1. خفض زمن الأعمال الإدارية بنسبة 15%: توفير هائل في ساعات العمل اليدوي الروتيني.\n2. تحسين الإنتاجية والروح المعنوية: تفرغ فريق العمل لتطوير المواهب وتحسين بيئة العمل.\n3. أمان فائق وامتثال قانوني كامل: حماية البيانات، سجلات تدقيق إلكترونية، ومطابقة تامة لمعايير حماية البيانات واللوائح المنظمة.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The 4 Core Canon HR Lifecycle Activities:\n1. Recruiting: New vacancy requests, CV screening, interview scheduling, and candidate selection.\n2. Onboarding: Streamlined digital enrollment contracts with reduced admin workload.\n3. Managing: Daily operational workflows including timesheets, payroll, expense claims, and contract renewals.\n4. Off-boarding: Exit interviews, pension processing, equipment return, and retirement settlements.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الأنشطة الأربعة لدورة حياة الموارد البشرية في كانون:\n1. التوظيف (Recruiting): طلبات الوظائف الجديدة، إدارة السير الذاتية، والاختيار والمقابلات.\n2. التهيئة والتعيين (Onboarding): إجراءات التسجيل الرقمي للموظف الجديد دون أعباء ورقية.\n3. إدارة الموظفين (Managing): سجلات الدوام، الرواتب والبدلات، المطالبات المالية، والعقود.\n4. إنهاء الخدمة (Off-boarding): إجراءات التقاعد، تسوية مستحقات نهاية الخدمة، وإخلاء الطرف.',
              },
            ],
            examNotes: [
              'Exact Exam Data Point: Canon HR digitization cut admin time by exactly 15% (not 50% or 5%).',
              'Four HR Activities Sequence: Recruiting -> Onboarding -> Managing -> Off-boarding.',
              'Software Recognition: The platform powering the solution is Therefore™ Case Manager.',
            ],
            examNotesAr: [
              'معلومة امتحانية دقيقة: أدت الحوسبة في كانون إلى خفض وقت المعاملات الإدارية بنسبة 15%.',
              'تسلسل مراحل الموارد البشرية الأربعة: التوظيف -> التهيئة والتعيين -> إدارة الموظفين -> إنهاء الخدمة والتقاعد.',
              'اسم البرنامج المعتمد في دراسة الحالة: منصة Therefore™ Case Manager.',
            ],
            commonMistakes: [
              'Confusing Onboarding (initial entry and contract setup) with Managing (ongoing day-to-day operations like timesheets and payroll).',
            ],
          },
        },
      ],
    },
    {
      id: 'bpm-ch1-t3',
      title: 'Definitional Rigor & The Essence of Modeling',
      titleAr: 'التعريفات الأكاديمية وجوهر نظرية النمذجة',
      lessons: [
        {
          id: 'bpm-ch1-l3',
          chapterId: 'bpm-ch1',
          topicId: 'bpm-ch1-t3',
          title: 'Formal Process Definitions & Herbert Stachowiak’s Model Theory',
          titleAr: 'التعريفات الرسمية للعمليات ونظرية هربرت شتاخوفياك في النمذجة',
          estimatedMinutes: 18,
          sourceRef: { file: 'BPM_L1.pdf', page: '19-23' },
          objectives: [
            'Memorize and analyze the authoritative definition of a Business Process according to Mathias Weske and ABPMP.',
            'Define Business Process Management (BPM) as a continuous management discipline.',
            'Explain Herbert Stachowiak’s three fundamental criteria of a model: Mapping, Reduction, and Pragmatism.',
            'Distinguish physical/object model abstraction from business process model abstraction.',
          ],
          objectivesAr: [
            'حفظ وتحليل التعريف الأكاديمي المعتمد لعملية الأعمال وفق كتاب ماتياس ويسكي ومنظمة ABPMP.',
            'تعريف إدارة عمليات الأعمال (BPM) كمنهجية وانضباط إداري مستمر.',
            'شرح معايير نظرية النمذجة الثلاثة لهربرت شتاخوفياك: التطابق، التخفيض، والبراغماتية.',
            'التمييز بين تجريد النماذج العينية/المادية ونمذجة تدفقات الأعمال.',
          ],
          content: {
            enDefinition:
              'A Business Process consists of a set of activities performed in coordination in an organizational and technical environment that jointly realize a business goal. A process is enacted by a single organization but may interact with processes in other organizations.',
            arExplanation:
              'تتكون عملية الأعمال من مجموعة أنشطة مترابطة تُنفَّذ بتنسيق متكامل في بيئة تنظيمية وتقنية لتحقيق هدف تجاري محدد. تنفذ كل عملية مؤسسة واحدة، ولكن يمكن أن تتفاعل وتتكامل مع عمليات تنفذها مؤسسات أخرى.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Authoritative Definition of BPM:\n"Business Process Management (BPM) includes concepts, methods, and techniques to support the design, administration, configuration, enactment, and analysis of business processes that deliver lean and customer-focused business processes."\nKey Characteristics:\n• Ongoing management discipline, not a one-time project.\n• Covers the complete end-to-end process lifecycle.\n• Aligns operational activities with top-level strategic enterprise goals.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'التعريف الأكاديمي المعتمد لإدارة عمليات الأعمال (BPM):\n"تتضمن إدارة عمليات الأعمال المفاهيم والأساليب والتقنيات التي تدعم تصميم وإدارة وضبط وتهيئة وتنفيذ وتحليل عمليات الأعمال لتقديم عمليات رشيقة تركز على العميل".\nأهم الخصائص:\n• انضباط إداري دائم ومستمر وليس مشروعًا ينتهي لمرة واحدة.\n• تغطي دورة حياة العمليات الشاملة من البداية حتى النهاية (End-to-End).\n• توائم الأنشطة التشغيلية مع الأهداف الاستراتيجية العليا للمؤسسة.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Herbert Stachowiak’s General Model Theory (1973):\nA model is the result of modeling and possesses three necessary features:\n1. Mapping Feature (Abbildungsmerkmal): A model is always an image or mapping of an original. The original may be currently existing, planned for the future, fictitious, or even another existing model.\n2. Reduction Feature (Verkürzungsmerkmal): A model never captures all attributes of the original; it selectively captures only those attributes relevant to the observer or purpose, omitting extraneous details.\n3. Pragmatic Feature (Pragmatisches Merkmal): A model serves a specific purpose, for specific human or machine users, within a specific timeframe.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'نظرية النمذجة العامة لهربرت شتاخوفياك (1973):\nالنموذج هو نتاج عملية النمذجة ويتصف بثلاث خصائص جوهرية لا غنى عنها:\n1. خاصية التطابق/التمثيل (Mapping): النموذج هو دائمًا تمثيل لأصل ما؛ وقد يكون هذا الأصل موجودًا بالفعل، أو مخططًا للمستقبل، أو افتراضيًا، أو حتى نموذجًا آخر.\n2. خاصية التخفيض/الاختزال (Reduction): لا يعكس النموذج كافة تفاصيل الأصل، بل يختزلها ويقتصر فقط على الخصائص ذات الصلة بالهدف، متجاهلاً التفاصيل غير المؤثرة.\n3. الخاصية البراغماتية/الغائية (Pragmatic): النموذج يخدم غرضًا محددًا، لمستخدمين معينين (بشر أو برمجيات)، وخلال فترة زمنية محددة.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Model Abstraction Examples from Lecture Slides:\n• Object Abstraction: Original NASA Space Shuttle -> Model Level 1: Lego toy shuttle (purpose: play/display) vs Model Level 2: Technical engineering blueprint (purpose: aerodynamics & mechanical maintenance).\n• Process Abstraction: Original 1950s typing office (real human operations) -> Model Level 1: Informal organizational flowchart vs Model Level 2: Formal BPMN specification with event triggers and decision gateways.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'أمثلة التجريد الواردة بالمحاضرة:\n• تجريد الكائنات: مكوك الفضاء الحقيقي -> نموذج مكعبات الليجو (لأغراض العرض والترفيه) مقابل المخطط الهندسي الدقيق (لأغراض الصيانة والديناميكا الهوائية).\n• تجريد العمليات: مكاتب الطباعة اليدوية القديمة -> المخطط الانسيابي غير الرسمي مقابل نموذج BPMN القياسي المعتمد على أحداث وبوابات قرار دقيقة.',
              },
            ],
            examNotes: [
              'Exam Question Trigger: Herbert Stachowiak’s 3 criteria of a model are: 1. Mapping of an original, 2. Reduction of attributes, 3. Pragmatic purpose.',
              'Original Can Be Fictitious: In Stachowiak’s theory, the original does NOT need to exist currently in reality — it may be planned or fictitious.',
            ],
            examNotesAr: [
              'مفتاح امتحاني هام: المعايير الثلاثة لنموذج شتاخوفياك هي: 1. تمثيل أصل (Mapping)، 2. التخفيض والاختزال (Reduction)، 3. الغرض البراغماتي (Pragmatic).',
              'نقطة امتحانية دقيقة: ليس بالضرورة أن يكون الأصل موجودًا على أرض الواقع في نظرية شتاخوفياك؛ بل قد يكون مستقبليًا أو افتراضيًا.',
            ],
            commonMistakes: [
              'Assuming a model must be 100% identical to reality. A model that duplicates all attributes is no longer a model; reduction is an essential feature.',
            ],
          },
        },
      ],
    },
    {
      id: 'bpm-ch1-t4',
      title: 'Process Models, Instances & The Enterprise Stack',
      titleAr: 'نماذج العمليات، حالاتها التشغيلية ومعمارية المؤسسة',
      lessons: [
        {
          id: 'bpm-ch1-l4',
          chapterId: 'bpm-ch1',
          topicId: 'bpm-ch1-t4',
          title: 'Process Models vs Instances, Weske Lifecycle & Enterprise Architecture',
          titleAr: 'نماذج العمليات مقابل حالاتها، دورة حياة ويسكي ومعمارية المؤسسة',
          estimatedMinutes: 20,
          sourceRef: { file: 'BPM_L1.pdf', page: '24-33' },
          objectives: [
            'Differentiate between a Business Process Model (blueprint) and a Business Process Instance (runtime case).',
            'Trace the step-by-step buyer and reseller interaction model.',
            'Explain Mathias Weske’s 4-phase Business Process Lifecycle.',
            'Deconstruct the hierarchical levels of business processes from business strategy to implementation.',
            'Analyze the enterprise BPM technology landscape from B2B processes down to databases.',
          ],
          objectivesAr: [
            'التمييز القاطع بين نموذج العملية (المخطط الهيكلي) وحالة العملية (حالة التشغيل الفعلية).',
            'تتبع خطوات التفاعل بين المشتري والبائع في نموذج الطلب القياسي.',
            'شرح دورة حياة ويسكي الرباعية لعمليات الأعمال (Design/Analysis, Configuration, Enactment, Evaluation).',
            'تفكيك المستويات الهرمية للعمليات من الاستراتيجية حتى التنفيذ الفعلي.',
            'تحليل معمارية تكنولوجيا BPM من مستوى B2B وحتى قواعد البيانات.',
          ],
          content: {
            enDefinition:
              'A Business Process Model consists of activity models and execution constraints acting as a blueprint, while a Business Process Instance represents a single concrete execution in the company’s daily operations.',
            arExplanation:
              'يمثل نموذج عملية الأعمال (Model) المخطط الهيكلي (Blueprint) الذي يحدد الأنشطة وقيود التنفيذ، بينما تمثل حالة العملية (Instance) تشغيلاً واقعيًا فرديًا محددًا داخل العمليات التشغيلية اليومية.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Model vs. Instance Blueprint Relationship:\n• Business Process Model: Defines what activities can occur, in what sequence, under what rules, and with what resources. It acts as an architectural blueprint.\n• Business Process Instance: A specific instance following that blueprint (e.g. Order #1042 placed by Alice on Monday). Each activity model in the blueprint spawns individual activity instances at runtime.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'علاقة المخطط الهيكلي بحالات التشغيل:\n• نموذج العملية (Process Model): يحدد الأنشطة وترتيبها وشروطها والموارد المطلوبة، ويعمل كـ "مخطط بناء" عام (Blueprint).\n• حالة العملية (Process Instance): تنفيذ واقعي محدد يتبع ذلك المخطط (مثل طلب الشراء رقم 1042 الخاص بالعميل أحمد).',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Buyer and Reseller Process Interaction (Weske Slides 25-27):\n1. Buyer sends an order message to the reseller.\n2. Reseller receives the order message in a Start Event; order info is extracted and processing starts.\n3. Reseller sends an invoice and ships the ordered products (in parallel).\n4. Buyer receives the invoice.\n5. Buyer settles the invoice.\n6. Buyer receives the ordered products.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'تفاعل عمليتي المشتري والبائع (ويسكي - الشرائح 25-27):\n1. يرسل المشتري رسالة طلب شراء إلى البائع.\n2. يستقبل البائع الرسالة في حدث بداية (Start Event)، وتُستخرج البيانات وتبدأ معالجة الطلب.\n3. يرسل البائع الفاتورة ويشحن المنتجات المطلوبة بالتوازي.\n4. يستلم المشتري الفاتورة.\n5. يسدد المشتري قيمة الفاتورة.\n6. يستلم المشتري المنتجات المشحونة.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Mathias Weske’s 4-Phase Process Lifecycle (Fig 1.5):\nCentered around "Administration and Stakeholders":\n1. Design & Analysis: Process identification, modeling, validation, simulation, and formal verification.\n2. Configuration: System selection, software implementation, testing, and deployment.\n3. Enactment: Day-to-day operation, real-time monitoring, and maintenance.\n4. Evaluation: Process mining and Business Activity Monitoring (BAM) to uncover bottlenecks and drive redesign.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'دورة حياة العمليات الرباعية لماتياس ويسكي (شكل 1.5):\nتتمحور حول "الإدارة وأصحاب المصلحة (Administration and Stakeholders)":\n1. التصميم والتحليل (Design & Analysis): تحديد العمليات، نمذجتها، محاكاتها، والتحقق الرياضي من صحتها.\n2. التهيئة والضبط (Configuration): اختيار الأنظمة البرمجية، التنفيذ، الاختبارات، والنشر التشغيلي.\n3. التنفيذ المباشر (Enactment): التشغيل الفعلي اليومي، المراقبة اللحظية، والصيانة.\n4. التقييم (Evaluation): تنقيب العمليات (Process Mining) والمراقبة التشغيلية (BAM) لاكتشاف الاختناقات.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Weske’s Hierarchy of Process Levels (Fig 1.6):\n• Top Level: Business Goals and Strategies (e.g., market expansion, 99.9% customer satisfaction).\n  ↓ (determines) ↑ (realizes)\n• Level 2: Organizational Business Processes (high-level cross-departmental descriptions).\n  ↓ (determines) ↑ (realizes)\n• Level 3: Operational Business Processes (detailed workflows with rules and logic).\n  ↓ (determines) ↑ (realizes)\n• Level 4: Implemented Business Processes (executable code, database calls, API integrations).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الهرمية الرأسية لمستويات العمليات (ويسكي شكل 1.6):\n• المستوى الأعلى: أهداف واستراتيجيات العمل (Business Goals and Strategies).\n  ↓ (تُحدد) ↑ (تُحقق)\n• المستوى الثاني: عمليات الأعمال التنظيمية (Organizational Business Processes).\n  ↓ (تُحدد) ↑ (تُحقق)\n• المستوى الثالث: عمليات الأعمال التشغيلية (Operational Business Processes).\n  ↓ (تُحدد) ↑ (تُحقق)\n• المستوى الرابع: عمليات الأعمال المنفذة تقنيًا (Implemented Business Processes).',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The BPM Technology Landscape (Fig 2.26):\n1. Business-to-Business (B2B) Processes: Inter-organizational collaborations across corporate boundaries.\n2. Human Interaction Workflows: Worklists and user interfaces where human staff perform assigned tasks.\n3. System Workflows / Composite Applications: Automated service orchestrations executing with minimal human intervention.\n4. Service Layer: Standardized service interfaces.\n5. Enterprise Application Integration (EAI): Middleware message brokers and EAI adapters.\n6. Enterprise Applications: Core transaction systems (ERP, SCM, CRM).\n7. Data Layer: Underpinning database management systems.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'معمارية تكنولوجيا BPM في المؤسسات (شكل 2.26):\n1. عمليات التجارة بين الشركات (B2B Processes): التعاون العابر لحدود المؤسسات.\n2. تدفقات العمل للتفاعل البشري (Human Interaction Workflows): واجهات وقوائم مهام الموظفين.\n3. تدفقات الأنظمة والتطبيقات المركبة (System Workflows): تكامل برمجيات آلي بالكامل.\n4. طبقة الخدمات (Service Layer): واجهات برمجة التطبيقات المعيارية.\n5. تكامل تطبيقات المؤسسة (EAI): وسائط الربط ومحولات EAI Adapters.\n6. تطبيقات المؤسسة الكبرى (Enterprise Applications): أنظمة ERP و SCM و CRM.\n7. طبقة البيانات (Data Layer): قواعد البيانات المركزية.',
              },
            ],
            examNotes: [
              'Frequent Exam Question: A process model acts as a "blueprint", while a process instance is a "concrete case".',
              'Weske Lifecycle Order: Design & Analysis -> Configuration -> Enactment -> Evaluation.',
              'Hierarchy Rule: Business goals "determine" processes; implemented processes "realize" business goals.',
            ],
            examNotesAr: [
              'سؤال امتحاني متكرر: يعمل نموذج العملية كـ "مخطط هيكلي Blueprint"، بينما تمثل حالة العملية "حالة تشغيلية واقعية Concrete Case".',
              'ترتيب دورة حياة ويسكي: التصميم والتحليل -> التهيئة والضبط -> التنفيذ المباشر -> التقييم.',
              'قاعدة الهرمية: الأهداف الاستراتيجية "تُحدد" العمليات، بينما العمليات المنفذة "تُحقق" أهداف المؤسسة.',
            ],
            commonMistakes: [
              'Confusing Human Workflows (involving people via user interfaces) with System Workflows (pure automated application integration without humans).',
            ],
          },
        },
      ],
    },
  ],
};

