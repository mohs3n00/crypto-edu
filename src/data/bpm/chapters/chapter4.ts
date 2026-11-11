import type { Chapter } from '../../../types';

export const bpmChapter4: Chapter = {
  id: 'bpm-ch4',
  number: 4,
  title: 'Workflow Management, Execution Architectures & Enterprise Tools',
  titleAr: 'إدارة تدفقات العمل، معمارية التنفيذ وأدوات الإدارة الحديثة',
  description:
    'Workflow definitions and the 4-step design method, WfMS capabilities (Design, Run, Monitor), departmental workflows (Lead-to-order in Sales), KPIs (Cycle Time vs. Cost), WfMC Reference Model and its 5 WAPI interfaces, workflow engine vs. WAPI, process instance lifecycle states, IPO-based (WPDL, PIF, PSL) vs. constraint-based (GPSG) languages, advanced workflow patterns (AND, XOR, OR, 2-out-of-3 join, Discriminator), and strategic enterprise management tools (SWOT, Balanced Scorecard, OKRs, Lean vs. Six Sigma, Porter’s Five Forces, Scrum, PDCA).',
  descriptionAr:
    'تعريفات تدفق العمل ومنهجية التصميم الرباعية، قدرات نظم WfMS (التصميم، التشغيل، المراقبة)، تطبيقات الإدارات (من العميل المحتمل للطلب في المبيعات)، مؤشرات الأداء (زمن الدورة مقابل التكلفة)، النموذج المرجعي WfMC وواجهات WAPI الخمس، محرك التدفق مقابل WAPI، حالات دورة حياة الحالات، لغات الوصف القائمة على المدخلات/المخرجات (WPDL, PIF, PSL) مقابل لغات القيود (GPSG)، أنماط تدفق العمل المتقدمة (AND, XOR, OR, 2-out-of-3 join, Discriminator)، وأدوات الإدارة الاستراتيجية (SWOT، بطاقة الأداء المتوازن، OKRs، لين مقابل ستة سيجما، قوى بورتر الخمس، سكرام، ودورة PDCA).',
  topics: [
    {
      id: 'bpm-ch4-t1',
      title: 'Workflow Methodology, Implementation & Performance KPIs',
      titleAr: 'منهجية تدفق العمل، استراتيجية التطبيق ومؤشرات الأداء',
      lessons: [
        {
          id: 'bpm-ch4-l1',
          chapterId: 'bpm-ch4',
          topicId: 'bpm-ch4-t1',
          title: 'Workflow Definition, 4-Step Design Method & Performance Metrics',
          titleAr: 'تعريف تدفق العمل، منهجية التصميم الرباعية ومقاييس الأداء',
          estimatedMinutes: 20,
          sourceRef: { file: 'Business Workflow Management Questions.pdf', page: '1-4' },
          objectives: [
            'Define a workflow as the partial or complete automation of a business process.',
            'Master the 4-step workflow design method (Identify Goals, Map Bottlenecks, Design Improved, Test & Implement).',
            'Identify departmental workflow applications, such as Lead-to-Order in Sales.',
            'Evaluate WfMS capabilities: Design, Run, and Monitor.',
            'Differentiate Cycle Time KPI from Cost KPI, and analyze continuous improvement lifecycle.',
          ],
          objectivesAr: [
            'تعريف تدفق العمل (Workflow) كأتمتة جزئية أو كاملة لعملية الأعمال.',
            'إتقان خطوات منهجية تصميم تدفق العمل الأربعة (تحديد الأهداف، حصر الاختناقات، التصميم المحسن، والاختبار والتنفيذ).',
            'تحديد تطبيقات تدفقات العمل في الإدارات (مثل تدفق Lead-to-Order في إدارة المبيعات).',
            'تقييم قدرات نظم إدارة تدفق العمل الثلاث: التصميم، التشغيل، والمراقبة.',
            'المقارنة الدقيقة بين مؤشر زمن الدورة (Cycle Time) ومؤشر التكلفة (Cost)، وفهم دورة التحسين المستمر.',
          ],
          content: {
            enDefinition:
              'A Workflow is the automation of a business process, in whole or in part, where documents, information, or tasks are passed among participants according to procedural rules, managed by a Workflow Management System (WfMS).',
            arExplanation:
              'تدفق العمل (Workflow) هو أتمتة عملية الأعمال كليًا أو جزئيًا؛ حيث تُمرَّر المستندات أو البيانات أو المهام بين المشاركين وفق قواعد وإجراءات محددة، وتتم إدارته عبر نظام إدارة تدفق العمل (WfMS).',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The 4-Step Workflow Design Method:\n• Step 1: Identify Goals and Requirements: Establish expected operational outcomes, scope, compliance criteria, and business goals.\n• Step 2: Map and Find Bottlenecks: Document the current baseline, mark where work waits or fails, and directly consult the staff performing the daily work.\n• Step 3: Design the Improved Workflow: Re-engineer paths, automate rules, eliminate redundancies, and establish parallel processing where applicable.\n• Step 4: Test and Implement: Pilot testing in a sandbox, user acceptance testing, followed by staged organizational rollout.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'منهجية تصميم تدفق العمل في 4 خطوات:\n• الخطوة 1: تحديد الأهداف والمتطلبات: صياغة النتائج المستهدفة، نطاق العمل، شروط الامتثال، وغايات المؤسسة.\n• الخطوة 2: رسم المسار ورصد الاختناقات: توثيق الوضع الحالي، تحديد أين يتعطل العمل أو يتأخر، واستشارة الموظفين الميدانيين القائمين بالعمل مباشرة.\n• الخطوة 3: تصميم تدفق العمل المحسن: إعادة هندسة المسار، أتمتة القواعد، إزالة التكرار، وتفعيل المعالجة المتوازية.\n• الخطوة 4: الاختبار والتنفيذ: إجراء تجارب تشغيلية تجريبية (Pilot Test)، واختبارات قبول المستخدمين، ثم الإطلاق المؤسسي المنظم.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'WfMS Three Core Capabilities:\n1. Design: Tools to build workflow schemas, model activity sequences, and establish business rules.\n2. Run: The execution environment that instantiates processes, routes tasks to worklists, and coordinates resources.\n3. Monitor: Tracks real-time workflow status, alerts on delayed activities, tracks bottlenecks, and generates executive audit reports.\n• Diagnostic Note: If tasks are assigned automatically but managers cannot identify delayed activities or generate progress reports, management must focus on improving the MONITOR capability.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'القدرات الثلاث الأساسية لنظام إدارة تدفق العمل (WfMS):\n1. التصميم (Design): أدوات بناء هياكل تدفق العمل، ونمذجة ترتيب الأنشطة، وتحديد قواعد العمل.\n2. التشغيل (Run): بيئة التشغيل الفعلية التي تنشئ حالات العمل وتسند المهام لقوائم الموظفين وتنسق الموارد.\n3. المراقبة (Monitor): تتبع حالة تدفق العمل لحظيًا، والتنبيه بالمهام المتأخرة، ورصد الاختناقات، وتوليد التقارير الإدارية.\n• ملحوظة تشخيصية امتحانية: إذا كانت المهام تُسند آليًا بنجاح لكن المديرين عاجزون عن معرفة الأنشطة المتأخرة أو الحصول على تقارير، فالخلل يكمن في قدرة "المراقبة Monitor".',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Department Application & Implementation Strategy:\n• Lead-to-Order Workflow: Typically applied in the SALES department to manage customer prospects from initial qualification to executed purchase orders.\n• Implementation Strategy Best Practice: Never attempt enterprise-wide big-bang automation. Best practice is to START WITH ONE WORKFLOW, communicate transparently, and thoroughly train employees before expanding.\n• Automation Criteria: Ideal for repetitive, rules-based, predictable tasks; creative, unpredictable tasks require human judgment.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'تطبيقات الإدارات واستراتيجية التطبيق المثلى:\n• تدفق "من العميل المحتمل للطلب" (Lead to order): يطبق بالأساس في إدارة المبيعات (Sales) لإدارة العملاء المحتملين حتى توقيع أمر الشراء.\n• استراتيجية التطبيق المثلى: تجنب التحول الشامل المفاجئ للمؤسسة؛ بل ابدأ بتدفق عمل واحد فقط (Start with one workflow)، مع التواصل الفعال وتدريب الموظفين بعناية قبل التوسع.\n• معايير الأتمتة: تكون الأتمتة مثالية للمهام المتكررة المحكومة بقواعد واضحة؛ بينما تتطلب المهام الإبداعية غير المتوقعة تدخلاً وتقديرًا بشريًا.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Workflow Performance KPIs & Continuous Improvement:\n• Cycle Time KPI: Measures the total elapsed time required to complete a case from start to finish.\n• Cost KPI: Measures the monetary expenditure associated with each completed case.\n• Exam Reverse Trap: Cycle time measures TIME; Cost measures EXPENDITURE. Swapping them is a frequent exam trap.\n• Continuous Improvement Lifecycle: Continuous workflow improvement is an ongoing cycle and is NEVER considered complete after the first improvement or measurement.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'مؤشرات الأداء (KPIs) ودورة التحسين المستمر:\n• مؤشر زمن الدورة (Cycle Time): يقيس الوقت الإجمالي المستغرق لإنجاز الحالة من البداية للنهاية.\n• مؤشر التكلفة (Cost): يقيس النفقات والمصروفات المالية المصاحبة لكل حالة مكتملة.\n• فخ امتحاني معكوس: زمن الدورة يقيس "الزمن"، والتكلفة تقيس "المال"؛ وعكسهما في السؤال عبارة خاطئة قطعًا.\n• التحسين المستمر: التحسين المستمر للعمليات هو دورة دائمة لا تنتهي، ولا يُعتبر مكتملاً بمجرد قياس المؤشرات أو تطبيق أول تحسين.',
              },
            ],
            examNotes: [
              'Exact Quiz Question: During which step should an organization mark where work waits or fails and consult staff? Step 2: Map and Find Bottlenecks.',
              'Exact Quiz Question: "Lead to order" workflow belongs to the SALES department.',
              'Exact Quiz Question: A recruitment background check and interview running simultaneously before a hiring decision is a PARALLEL workflow.',
              'Continuous Improvement is NOT complete after the first improvement (False).',
            ],
            examNotesAr: [
              'سؤال كويز رسمي: في أي خطوة تُحدد أماكن تعطل العمل وتتم استشارة الموظفين؟ الخطوة 2: رسم المسار ورصد الاختناقات.',
              'سؤال كويز رسمي: تدفق "Lead to order" ينتمي لإدارة المبيعات (Sales).',
              'سؤال كويز رسمي: فحص السوابق والمقابلة اللذان يبدآن معًا ويجب اكتمالهما قبل التوظيف يمثلان تدفقًا متوازيًا (Parallel).',
              'التحسين المستمر لا ينتهي أبدًا بعد أول تحسين (خطأ).',
            ],
            commonMistakes: [
              'Confusing Step 1 (identifying strategic goals) with Step 2 (consulting staff to find actual operational bottlenecks).',
            ],
          },
        },
      ],
    },
    {
      id: 'bpm-ch4-t2',
      title: 'Execution Architectures & The WfMC Reference Model',
      titleAr: 'معماريات التنفيذ والنموذج المرجعي لتحالف WfMC',
      lessons: [
        {
          id: 'bpm-ch4-l2',
          chapterId: 'bpm-ch4',
          topicId: 'bpm-ch4-t2',
          title: 'WfMC Reference Architecture, 5 WAPI Interfaces & Lifecycle States',
          titleAr: 'النموذج المرجعي WfMC، واجهات WAPI الخمس وحالات دورة حياة العملية',
          estimatedMinutes: 20,
          sourceRef: { file: 'Quiz on Tools for Building Business Processes.pdf', page: '1-4' },
          objectives: [
            'Explain the Workflow Management Coalition (WfMC) Reference Model architecture.',
            'Identify the Workflow Engine as the execution environment for workflow instances.',
            'Differentiate between the Workflow Engine and the Workflow Application Programming Interface (WAPI).',
            'Master the 5 standard WfMC interfaces surrounding the enactment service.',
            'Classify the 5 runtime process instance states (Inactive, Active, Suspended, Completed, Terminated).',
            'Contrast IPO-based languages (WPDL, PIF, PSL) with constraint-based languages (GPSG).',
          ],
          objectivesAr: [
            'شرح معمارية النموذج المرجعي لتحالف إدارة تدفق العمل (WfMC Reference Model).',
            'تحديد محرك تدفق العمل (Workflow Engine) كبيئة التنفيذ التشغيلية لحالات العمل.',
            'التمييز القاطع بين محرك التدفق (Engine) وواجهات البرمجة المعيارية (WAPI).',
            'حفظ الواجهات المعيارية الخمس لتحالف WfMC المحيطة بخدمة التنفيذ.',
            'تصنيف حالات دورة حياة حالة العملية الخمس (Inactive, Active, Suspended, Completed, Terminated).',
            'المقارنة بين لغات الوصف القائمة على المدخلات/المخرجات (WPDL, PIF, PSL) ولغات القيود (GPSG).',
          ],
          content: {
            enDefinition:
              'The WfMC Reference Model defines an architectural framework where the Workflow Enactment Service (Workflow Engine) connects to external definition tools, client apps, invoked services, peer engines, and administration monitors via 5 standardized WAPI interfaces.',
            arExplanation:
              'يحدد النموذج المرجعي لتحالف WfMC إطارًا معماريًا قياسيًا يربط خدمة تنفيذ تدفق العمل (المحرك Workflow Engine) بأدوات التعريف، وتطبيقات العملاء، والبرمجيات الخارجية، والمحركات الأخرى، وأدوات المراقبة عبر خمس واجهات WAPI معيارية.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Workflow Engine vs. WAPI:\n• Workflow Engine: The software engine that provides the runtime execution environment for a workflow instance. It interprets process definitions, creates and controls process instances, assigns work items, and invokes external applications.\n• WAPI (Workflow Application Programming Interface): The standardized set of APIs and interchange protocols through which external systems and tools interact with the Workflow Enactment Service.\n• Exam Trap: The workflow engine and the WAPI are NOT the same thing. The engine executes; WAPI provides the interface.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'محرك تدفق العمل مقابل واجهات WAPI:\n• محرك تدفق العمل (Workflow Engine): المنظومة البرمجية التي توفر بيئة التنفيذ التشغيلية لحالة العمل؛ يفسر تعريفات العمليات، وينشئ حالات العمل، ويسند المهام، ويستدعي التطبيقات.\n• واجهات WAPI (Workflow Application Programming Interface): حزمة واجهات برمجة التطبيقات المعيارية التي تتيح للأنظمة الخارجية التواصل مع خدمة التنفيذ.\n• فخ امتحاني: محرك التدفق و WAPI ليسا شيئًا واحدًا؛ المحرك ينفذ، و WAPI هي الواجهات التي تربطه بالعالم الخارجي.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The 5 WfMC Reference Model Interfaces:\n• Center: Workflow Enactment Service (Workflow Engine).\n1. Interface 1: Process Definition Import/Export (connects to Process Definition Tools).\n2. Interface 2: Workflow Client Applications (connects to end-user worklist handlers).\n3. Interface 3: Invoked Applications (connects to external legacy systems, DBs, and Web services).\n4. Interface 4: Inter-Engine Communication (connects to peer workflow engines in other departments/enterprises).\n5. Interface 5: Administration and Monitoring Tools (connects to management consoles and BAM reporting).\n• Exam Trap: The WfMC model has FIVE interfaces, NOT three.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الواجهات الخمس للنموذج المرجعي WfMC:\n• المركز: خدمة تنفيذ تدفق العمل (Workflow Engine).\n1. الواجهة 1 (Interface 1): استيراد وتصدير تعريفات العمليات (مع أدوات تصميم العمليات).\n2. الواجهة 2 (Interface 2): تطبيقات عملاء تدفق العمل (قوائم مهام الموظفين).\n3. الواجهة 3 (Interface 3): التطبيقات المستدعاة (الأنظمة الموروثة، قواعد البيانات، وخدمات الويب).\n4. الواجهة 4 (Interface 4): الاتصال بين المحركات المتعددة (التعاون مع محركات تدفق عمل أخرى).\n5. الواجهة 5 (Interface 5): أدوات الإدارة والمراقبة (لوحات التحكم ومراقبة الأداء BAM).\n• فخ امتحاني: يحتوي النموذج المرجعي على خمس واجهات (5 Interfaces) وليس ثلاث واجهات.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The 5 Process Instance Lifecycle States:\n1. Inactive: The process instance has been created and initialized in the database, but is waiting to be started.\n2. Active: The process instance is currently executing tasks in the workflow engine.\n3. Suspended: The instance execution is paused temporarily (e.g. pending an audit or missing prerequisite); its full state is preserved and can be resumed later.\n4. Completed: The instance has finished all execution paths normally and terminated successfully.\n5. Terminated: The instance was forcibly aborted or canceled before normal completion.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الحالات الخمس لدورة حياة حالة العملية (Process Instance States):\n1. خاملة / غير نشطة (Inactive): تم إنشاء حالة العملية وتهيئتها بقاعدة البيانات، وتنتظر إطلاق إشارة البدء.\n2. نشطة (Active): العملية تعمل وتنفذ مهامها فعليًا داخل محرك التدفق.\n3. معلقة / موقوفة مؤقتًا (Suspended): العملية متوقفة مؤقتًا مع حفظ كامل حالتها، ويمكن استئنافها لاحقًا.\n4. مكتملة (Completed): أتمت العملية كافة مساراتها بنجاح وبصورة طبيعية.\n5. مجهضة / منهية قسرًا (Terminated): تم إلغاء العملية أو إيقافها قسرًا قبل وصولها للنهاية الطبيعية.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Process Specification Languages (IPO vs. Constraint):\n• IPO-Based Languages (Input-Process-Output):\n  - WPDL (Workflow Process Definition Language): WfMC XML-based format for process definitions.\n  - PIF (Process Interchange Format): Early standard for exchanging process descriptions.\n  - PSL (Process Specification Language, NIST standard): A common exchange format enabling diverse process software applications to communicate.\n• Constraint-Based Languages:\n  - GPSG (Generalized Process Specification Grammar): Specifies processes through formal constraints (order, deadlines, durations) rather than rigid step-by-step token flows.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'لغات توصيف العمليات (القائمة على المدخلات/المخرجات مقابل لغات القيود):\n• لغات مبنية على المدخلات والعمليات والمخرجات (IPO-Based):\n  - لغة WPDL: لغة تعريف العمليات الصادرة عن تحالف WfMC.\n  - لغة PIF: نسق تبادل العمليات بين البرمجيات المختلفة.\n  - لغة PSL (صادرة عن معهد NIST): نسق تبادل مشترك يتيح للتطبيقات المتباينة التواصل وفهم العمليات المشتركة.\n• لغات مبنية على القيود (Constraint-Based):\n  - قواعد GPSG: تعرّف العمليات من خلال قيود زمنية وتتابعية صارمة (الترتيب، المواعيد النهائية، والمدد الزمنية) بدلاً من التدفق الخطي الجامد.',
              },
            ],
            examNotes: [
              'Exact Quiz Question: Which component is the execution environment for a workflow instance? The Workflow Engine.',
              'Exact Quiz Question: What does WAPI stand for? Workflow Application Programming Interface.',
              'Exact Quiz Question: Which state describes a process that is paused and can be resumed later? Suspended.',
              'Exact Quiz Question: The WfMC reference model connects through FIVE interfaces, not three (False).',
              'Exact Quiz Question: WPDL, PIF and PSL are IPO-based, while GPSG is constraint-based (True).',
            ],
            examNotesAr: [
              'سؤال كويز رسمي: ما المكون الذي يمثل بيئة التنفيذ لحالة تدفق العمل؟ محرك تدفق العمل (Workflow Engine).',
              'سؤال كويز رسمي: ماذا يعني اختصار WAPI؟ واجهة برمجة تطبيقات تدفق العمل (Workflow Application Programming Interface).',
              'سؤال كويز رسمي: ما الحالة التي تصف عملية موقوفة مؤقتًا ويمكن استئنافها لاحقًا؟ الحالة المعلقة (Suspended).',
              'سؤال كويز رسمي: يربط نموذج WfMC خدمة التنفيذ عبر 5 واجهات وليس 3 (خطأ).',
              'سؤال كويز رسمي: WPDL و PIF و PSL لغات قائمة على IPO، بينما GPSG قائمة على القيود (صح).',
            ],
            commonMistakes: [
              'Confusing Inactive (created, waiting to start) with Suspended (already started, but paused mid-execution).',
            ],
          },
        },
      ],
    },
    {
      id: 'bpm-ch4-t3',
      title: 'Workflow Control-Flow Patterns & Routing Logic',
      titleAr: 'أنماط التحكم في تدفق العمل ومنطق التوجيه المتقدم',
      lessons: [
        {
          id: 'bpm-ch4-l3',
          chapterId: 'bpm-ch4',
          topicId: 'bpm-ch4-t3',
          title: 'Advanced Workflow Patterns & Real-World Routing Scenarios',
          titleAr: 'أنماط تدفق العمل المتقدمة وسيناريوهات التوجيه الواقعية',
          estimatedMinutes: 20,
          sourceRef: { file: 'Quiz on Tools for Building Business Processes.pdf', page: '2-4' },
          objectives: [
            'Master the foundational workflow patterns: Sequence, Parallel Split (AND-split), Synchronization (AND-join), Exclusive Choice (XOR-split), Simple Merge (XOR-join), and Multi-Choice (OR-split).',
            'Explain the advanced N-out-of-M Join pattern (e.g. 2-out-of-3 join).',
            'Analyze the Discriminator (DIS) pattern and how it handles first-arrival continuation.',
            'Apply workflow patterns to exam case studies: Travel Booking (parallel join) and Invoice Approval (XOR-split).',
          ],
          objectivesAr: [
            'إتقان أنماط تدفق العمل الأساسية: التتابع، تفريع التوازي AND، دمج التوازي AND، تفريع الاستبعاد XOR، دمج XOR، والتفريع الشامل OR.',
            'شرح نمط الدمج المركب N من أصل M (مثل دمج 2 من أصل 3).',
            'تحليل نمط المميز (Discriminator - DIS) وسلوكه في المتابعة عند وصول أول مسار.',
            'تطبيق أنماط التدفق على حالات الامتحان: حجز السفر (دمج متوازي) واعتماد الفواتير (تفريع XOR).',
          ],
          content: {
            enDefinition:
              'Workflow Patterns represent formalized, language-independent abstractions of recurrent routing requirements in business process automation, spanning basic branching up to advanced synchronizations like N-out-of-M joins and Discriminators.',
            arExplanation:
              'تمثل أنماط تدفق العمل (Workflow Patterns) تجريدات قياسية مستقلة عن لغات البرمجة تصف المتطلبات المتكررة لتوجيه مسارات العمل، بدءًا من التفريع البسيط وحتى المزامنة المتقدمة كدمج N من أصل M ونمط المميّز.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Core Workflow Routing Patterns:\n1. Sequence: An activity is enabled after the completion of a previous activity.\n2. Parallel Split (AND-split): Activates all outgoing branches concurrently.\n3. Synchronization (AND-join): Waits until all incoming branches complete before continuing.\n4. Exclusive Choice (XOR-split): Chooses exactly one outgoing branch based on evaluated conditions.\n5. Simple Merge (XOR-join): Merges alternative branches without any waiting; each incoming token triggers continuation.\n6. Multi-Choice (OR-split): Evaluates conditions to activate one, several, or all outgoing branches.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'أنماط توجيه تدفق العمل الأساسية:\n1. التتابع (Sequence): يُفعَّل النشاط التالي فور اكتمال النشاط السابق مباشرة.\n2. تفريع التوازي (AND-split): يُفعّل كافة المسارات الخارجة بالتزامن في وقت واحد.\n3. دمج التوازي / المزامنة (AND-join): ينتظر اكتمال كافة المسارات المتوازية القادمة قبل السماح بالمتابعة.\n4. الاختيار الحصري (XOR-split): يختار مسارًا واحدًا فقط بناءً على تحقق شرط محدد.\n5. الدمج البسيط (XOR-join): يدمج المسارات البديلة دون أي انتظار؛ أي تدفق قادم يمر فورًا.\n6. الاختيار المتعدد (OR-split): يقيّم الشروط ليطلق التدفق في مسار واحد، أو عدة مسارات، أو كافة المسارات.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Advanced Workflow Patterns:\n1. N-out-of-M Join (e.g., 2-out-of-3 Join):\n   - When M parallel branches are running, execution continues as soon as any N branches complete.\n   - Example: In a 2-out-of-3 join, as soon as ANY TWO of the three branches have completed, the workflow proceeds immediately without waiting for the third branch.\n2. Discriminator (DIS):\n   - When multiple parallel branches converge at a discriminator, the FIRST completed branch triggers the continuation of the workflow once.\n   - Subsequent completions of the remaining branches are ignored for that instance until all branches complete and reset.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'أنماط تدفق العمل المتقدمة:\n1. دمج N من أصل M (مثل دمج 2 من أصل 3):\n   - عندما تعمل M مسارات متوازية، يُسمح بمتابعة سير العمل فور اكتمال أي N مسارات منها.\n   - مثال: في دمج 2 من أصل 3 (2-out-of-3 join)، بمجرد اكتمال أي مسارين من المسارات الثلاثة، يستمر العمل فورًا دون انتظار المسار الثالث.\n2. المميّز (Discriminator - DIS):\n   - عند التقاء عدة مسارات متوازية عند بوابة المميز، فإن اكتمال أول مسار فقط يطلق متابعة سير العمل لمرة واحدة.\n   - يتم تجاهل اكتمال المسارات الأخرى المتبقية لنفس الحالة حتى تكتمل جميعها ويُعاد ضبط البوابة.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Real-World Exam Case Studies:\n• Travel Booking Case: A travel reservation requires booking a flight, a hotel room, and a rental car. All three activities are handled in parallel (AND-split) and MUST ALL be done before the transaction completes or is committed/aborted (AND-join).\n• Invoice Approval Case: An accounts payable workflow receives an invoice and asks the condition "Is the invoice valid?". If valid, it proceeds to approval; if invalid, it proceeds to correction. Because exactly one alternative route is selected, this is an XOR-SPLIT.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'دراسات حالة امتحانية واقعية:\n• حالة حجز السفر (Travel Booking): يتطلب حجز الرحلة حجز فندق، وتذكرة طيران، وتأجير سيارة. تُنفذ الأنشطة الثلاثة بالتوازي (AND-split) ويجب اكتمالها جميعًا قبل إنهاء المعاملة أو اعتمادها (AND-join).\n• حالة اعتماد الفواتير (Invoice Approval): يستقبل قسم الحسابات فاتورة ويطرح شرط "هل الفاتورة صحيحة؟". إن كانت صحيحة تُعتمد، وإن كانت خاطئة تُحال للتصحيح. ونظرًا لاختيار بديل واحد فقط، فهذا النمط هو تفريع استبعاد حصري (XOR-split).',
              },
            ],
            examNotes: [
              'Exact Quiz Question: When does a 2-out-of-3 join allow the workflow to continue? When any two of the three branches have completed.',
              'Exact Quiz Question: In the invoice approval example ("Is the invoice valid?"), which pattern is used? XOR-split.',
              'Exact Quiz Question: In travel booking, hotel, flight and car are handled in parallel and must all be done before transaction ends (True).',
              'Exact Quiz Question: With a discriminator (DIS), the first completed branch triggers continuation once (True).',
            ],
            examNotesAr: [
              'سؤال كويز رسمي: متى يسمح دمج 2 من أصل 3 لتدفق العمل بالاستمرار؟ عند اكتمال أي مسارين من المسارات الثلاثة.',
              'سؤال كويز رسمي: في مثال اعتماد الفاتورة ("هل الفاتورة صحيحة؟")، ما النمط المستخدم؟ تفريع XOR (XOR-split).',
              'سؤال كويز رسمي: في حجز السفر، الفندق والطيران والسيارة تنفذ بالتوازي ويجب اكتمالها جميعًا قبل إنهاء المعاملة (صح).',
              'سؤال كويز رسمي: في نمط المميز (DIS)، أول مسار يكتمل يطلق المتابعة لمرة واحدة (صح).',
            ],
            commonMistakes: [
              'Confusing an XOR-split (selects only 1 path) with an OR-split (can select 1, several, or all paths).',
            ],
          },
        },
      ],
    },
    {
      id: 'bpm-ch4-t4',
      title: 'Strategic Business Management Tools & Frameworks',
      titleAr: 'أدوات وأطر الإدارة الاستراتيجية للأعمال ومقارنات الجودة',
      lessons: [
        {
          id: 'bpm-ch4-l4',
          chapterId: 'bpm-ch4',
          topicId: 'bpm-ch4-t4',
          title: 'Strategic Tools, Software vs Methods & Quality Paradigms',
          titleAr: 'الأدوات الاستراتيجية، البرمجيات مقابل الأساليب ونماذج الجودة',
          estimatedMinutes: 20,
          sourceRef: { file: 'Business Management Tools Quiz.pdf', page: '1-3' },
          objectives: [
            'Distinguish software management tools (Trello, Jira) from actual management methods (Scrum, Kanban).',
            'Analyze SWOT Analysis and identify its core limitation (lack of prioritization).',
            'Master the 4 balanced perspectives of the Balanced Scorecard (Kaplan & Norton).',
            'Define OKRs (Objectives and Key Results) as measurable outcome tracking.',
            'Contrast Lean (waste removal) with Six Sigma (variation and defect reduction).',
            'Evaluate Porter’s Five Forces, Agile/Scrum sprints, and the PDCA cycle along with their documented limitations.',
          ],
          objectivesAr: [
            'التمييز بين أدوات البرمجيات (Trello, Jira) وأساليب ومنهجيات الإدارة الفعلية (Scrum, Kanban).',
            'تحليل نموذج SWOT وتحديد عيبه الجوهري (غياب ترتيب الأولويات).',
            'إتقان المحاور الأربعة المتوازنة لبطاقة الأداء المتوازن (Balanced Scorecard).',
            'تعريف نموذج OKRs (الأهداف والنتائج الرئيسية) لقياس المخرجات الملموسة.',
            'المقارنة الصارمة بين منهجية لين (إزالة الهدر) وستة سيجما (تقليل التباين والعيوب).',
            'تقييم قوى بورتر الخمس، سبرنتات أجايل وسكرام، ودورة PDCA مع حصر أوجه القصور لكل منها.',
          ],
          content: {
            enDefinition:
              'Strategic Business Management Tools encompass structural frameworks (SWOT, Balanced Scorecard, OKRs, Porter’s Five Forces) and operational quality paradigms (Lean, Six Sigma, Agile/Scrum, PDCA) that guide process alignment.',
            arExplanation:
              'تضم أدوات الإدارة الاستراتيجية الأطر الهيكلية (SWOT، بطاقة الأداء المتوازن، OKRs، قوى بورتر الخمس) ونماذج الجودة التشغيلية (لين، ستة سيجما، أجايل/سكرام، ودورة PDCA) التي توجه ضبط العمليات نحو أهداف المؤسسة.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Software Applications vs. Management Methods:\n• Tools: Applications like Trello, Jira, Asana, and Monday.com are SOFTWARE TOOLS. They provide boards, cards, and tracking interfaces.\n• Methods: Scrum, Kanban, Lean, and XP are the underlying MANAGEMENT METHODS and philosophies.\n• Exam Rule: Apps like Trello and Jira are NOT the management methods themselves; they are software tools that support the methods.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'تطبيقات البرمجيات مقابل أساليب الإدارة:\n• الأدوات (Tools): برمجيات مثل Trello و Jira و Asana هي أدوات برمجية داعمة توفر لوحات وبطاقات رقمية.\n• الأساليب والمنهجيات (Methods): سكرام (Scrum)، وكانبان (Kanban)، ولين (Lean) هي أساليب وفلسفات إدارة العمل.\n• قاعدة امتحانية: برامج مثل تريلو وجيرا ليست هي أساليب الإدارة نفسها، بل هي أدوات برمجية تدعم تطبيق أساليب مثل سكرام أو كانبان.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'SWOT Analysis:\n• Internal Dimensions: Strengths (S) and Weaknesses (W).\n• External Dimensions: Opportunities (O) and Threats (T).\n• Major Limitation: Lists factors comprehensively but provides NO built-in mechanism for setting priorities or choosing which item to tackle first.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'تحليل SWOT:\n• الأبعاد الداخلية: نقاط القوة (Strengths) ونقاط الضعف (Weaknesses).\n• الأبعاد الخارجية: الفرص المتاحة (Opportunities) والتهديدات المحتملة (Threats).\n• القصور الجوهري: يسرد العوامل في قوائم لكنه يفتقر إلى آلية مدمجة لتحديد وترتيب الأولويات.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The Balanced Scorecard (Kaplan & Norton):\n• Core Philosophy: Rejects focusing exclusively on short-term financial accounting metrics.\n• The 4 Balanced Perspectives:\n  1. Financial Perspective: How do we look to shareholders? (Revenue, ROI).\n  2. Customer Perspective: How do customers see us? (Satisfaction, retention).\n  3. Internal Business Processes: What must we excel at? (Cycle time, quality, bottlenecks).\n  4. Learning and Growth: Can we continue to improve and create value? (Staff training, culture, IT).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'بطاقة الأداء المتوازن (Balanced Scorecard):\n• الفلسفة: ترفض الاقتصار على النتائج المالية الضيقة؛ وتقيس أداء المؤسسة عبر 4 محاور متوازنة:\n  1. المنظور المالي (Financial): كيف يرانا المساهمون والمستثمرون؟\n  2. منظور العملاء (Customer): كيف يرانا العملاء ومستوى رضاهم؟\n  3. منظور العمليات الداخلية (Internal Processes): في أي عمليات تشغيلية يجب أن نتفوق؟\n  4. منظور التعلم والنمو (Learning and Growth): كيف نطور قدرات الكوادر والأنظمة المؤسسية؟',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'OKRs (Objectives and Key Results):\n• Objective: Qualitative, inspirational goal describing WHAT the organization seeks to achieve.\n• Key Results: Concrete, quantitative, measurable outcomes that verify WHETHER the objective was achieved.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'منظومة OKRs (الأهداف والنتائج الرئيسية):\n• الأهداف (Objectives): غايات نوعية ملهمة تصف "ماذا" نريد تحقيقه.\n• النتائج الرئيسية (Key Results): مخرجات كمية ومقاييس رقمية ملموسة تثبت "هل" تحقق الهدف أم لا.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Lean vs. Six Sigma (The Classic Exam Reverse Trap):\n• LEAN: Focuses primarily on REMOVING WASTE (Muda), eliminating non-value-adding steps, and accelerating workflow speed.\n• SIX SIGMA: Focuses primarily on REDUCING VARIATION AND DEFECTS using statistical measurement and the DMAIC cycle (Define, Measure, Analyze, Improve, Control).\n• Exam Trap: Statements claiming "Lean reduces variation while Six Sigma removes waste" are FALSE. It is the exact reverse!',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'لين مقابل ستة سيجما (الفخ الامتحاني المعكوس الشهير):\n• لين (Lean): يهدف أساسًا إلى إزالة الهدر والأنشطة عديمة الفائدة (Waste Removal) وتسريع تدفق العمل.\n• ستة سيجما (Six Sigma): يهدف أساسًا إلى تقليل التباين والعيوب الإحصائية (Reduce Variation & Defects) عبر دورة DMAIC.\n• فخ امتحاني: الادعاء بأن "لين يقلل التباين وستة سيجما تزيل الهدر" عبارة خاطئة قطعًا؛ فالعكس هو الصحيح!',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Strategic Competitive & Operational Tools:\n• Porter’s Five Forces: Evaluates industry attractiveness via: (1) Rivalry among existing competitors, (2) Threat of new entrants, (3) Threat of substitutes, (4) Supplier bargaining power, and (5) Buyer bargaining power. Limitation: Weak in fast-changing digital platform ecosystems.\n• Agile / Scrum: Delivers work in short, time-boxed iterations called "sprints". Limitation: Difficult to execute when project scope and budget are strictly fixed.\n• PDCA Cycle (Plan, Do, Check, Act): Tests small iterative changes. Limitation: An operational execution feedback mechanism; provides no strategic direction on its own.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الأدوات التنافسية والتشغيلية وأوجه القصور:\n• قوى بورتر الخمس: تقيس جاذبية الصناعة عبر: حدة المنافسة، تهديد الداخلين الجدد، البدائل، قوة الموردين، وقوة المشترين. القصور: نموذج ثابت يضعف في بيئات الاقتصاد الرقمي السريعة.\n• أجايل / سكرام: ينجز العمل في دورات تكرارية قصيرة تسمى سبرنتات (Sprints). القصور: يصعب تطبيقه عندما يكون النطاق والميزانية ثابتين وصارمين.\n• دورة PDCA (خطط، نفذ، افحص، تصرف): مناسبة لاختبار التغييرات التشغيلية الصغيرة. القصور: آلية تنفيذ تشغيلية لا تعطي أي توجه استراتيجي بمفردها.',
              },
            ],
            examNotes: [
              'Exact Quiz Question: Apps like Trello and Jira are the management methods themselves? False. Software supports methods, but is not the method itself.',
              'Exact Quiz Question: The Balanced Scorecard focuses only on financial results? False. It uses 4 views: financial, customer, internal processes, learning and growth.',
              'Exact Quiz Question: Which tool judges industry attractiveness through rivalry, entrants, substitutes, supplier/buyer power? Porter’s Five Forces.',
              'Exact Quiz Question: Which approach delivers work in short iterations called sprints? Agile / Scrum.',
              'Exact Quiz Question: A team tests a small change, checks result, then adopts/adjusts/drops. Which tool fits best? PDCA.',
              'Exact Quiz Question: What are the limits? SWOT lists factors without setting priorities.',
            ],
            examNotesAr: [
              'سؤال كويز رسمي: برامج مثل تريلو وجيرا هي أساليب الإدارة نفسها؟ خطأ، هي برمجيات تدعم الأساليب وليست الأسلوب ذاته.',
              'سؤال كويز رسمي: بطاقة الأداء المتوازن تركز فقط على النتائج المالية؟ خطأ، تشمل 4 محاور متوازنة.',
              'سؤال كويز رسمي: ما الأداة التي تقيم جاذبية الصناعة عبر المنافسة والبدائل وقوة الموردين والمشترين؟ قوى بورتر الخمس.',
              'سؤال كويز رسمي: ما النهج الذي يقسم العمل لسبرنتات تكرارية قصيرة؟ أجايل / سكرام.',
              'سؤال كويز رسمي: اختبار تغيير صغير، فحص النتيجة، ثم اعتماده أو تعديله؟ دورة PDCA.',
              'سؤال كويز رسمي: أوجه القصور: تحليل SWOT يسرد العوامل دون ترتيب الأولويات.',
            ],
            commonMistakes: [
              'Thinking Six Sigma removes waste and Lean fixes defects; remember LEAN = Waste, SIX SIGMA = Defects & Variation.',
            ],
          },
        },
      ],
    },
  ],
};

