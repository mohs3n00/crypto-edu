import type { Chapter } from '../../../types';

export const bpmChapter2: Chapter = {
  id: 'bpm-ch2',
  number: 2,
  title: 'BPM Architecture, Lifecycle & Organizational Governance',
  titleAr: 'معمارية دورة حياة إدارة العمليات والحوكمة التنظيمية',
  description:
    'Core distinctions between processes and projects, functional boundaries vs. end-to-end work, quality process metaphors (clean kitchen and Airbus), BPMS technology suites, 4 process components, 6-phase circular and spiral lifecycles, process classifications (Continuous vs. Ad Hoc, Simple vs. Complex), IT support case study, process ownership, and the spectrum of modeling standards.',
  descriptionAr:
    'الفروق الجوهرية بين العمليات والمشاريع، الحدود الوظيفية مقابل العمل المتكامل، استعارة جودة العمليات (المطبخ النظيف وطائرة الإيرباص)، حزم برمجيات BPMS، المكونات الأربعة للعملية، دورات الحياة السداسية الدائرية والحلزونية، تصنيفات العمليات (المستمرة مقابل العارضة، البسيطة مقابل المعقدة)، دراسة حالة الدعم الفني، ملكية العمليات، وطيف معايير النمذجة القياسية.',
  topics: [
    {
      id: 'bpm-ch2-t1',
      title: 'Core Concepts, Functions & Organizational Governance',
      titleAr: 'المفاهيم الجوهرية، الإدارات الوظيفية والحوكمة المؤسسية',
      lessons: [
        {
          id: 'bpm-ch2-l1',
          chapterId: 'bpm-ch2',
          topicId: 'bpm-ch2-t1',
          title: 'Process vs Project, End-to-End Scope & Governance Roles',
          titleAr: 'العملية مقابل المشروع، النطاق المتكامل وأدوار الحوكمة',
          estimatedMinutes: 18,
          sourceRef: { file: 'BPM_L2.pdf', page: '3-17' },
          objectives: [
            'Contrast processes with projects based on repeatability versus uniqueness.',
            'Explain how end-to-end business processes cut across traditional functional boundaries.',
            'Analyze the quality process metaphor ("Clean Kitchen" & "Airbus Aircraft").',
            'Define Business Process Management Suites (BPMS) and new organizational roles.',
          ],
          objectivesAr: [
            'المقارنة الدقيقة بين العمليات والمشاريع بناءً على معيار التكرارية مقابل التفرد.',
            'شرح كيفية اختراق العمليات المتكاملة (End-to-End) للحواجز الوظيفية التقليدية.',
            'تحليل استعارة جودة العمليات (المطبخ النظيف وبرمجيات طائرات الإيرباص).',
            'تعريف حزم إدارة العمليات (BPMS) والأدوار التنظيمية الجديدة.',
          ],
          content: {
            enDefinition:
              'A process is a repetitive collection of interrelated tasks aimed at achieving a continuing goal, whereas a project is a unique, one-off endeavor with a defined beginning and end undertaken to create a specific deliverable.',
            arExplanation:
              'العملية (Process) هي مجموعة متكررة ومستمرة من المهام المترابطة الهادفة لتحقيق هدف عمل دائم، بينما المشروع (Project) هو مسعى فريد من نوعه له بداية ونهاية محددتان يُنفذ لتحقيق هدف خاص لمرة واحدة.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Core Contrast: Process vs. Project:\n• Defining Characteristic: Repeatability vs. Uniqueness.\n• Process: Repetitive, structured, predictable, ongoing lifecycle (e.g., invoice processing, loan origination, customer onboarding).\n• Project: Unique, non-repetitive, temporary team structure, fixed deadline, and discrete budget (e.g., launching a new satellite, migrating to a new data center).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'المقارنة الجوهرية: العملية مقابل المشروع:\n• المعيار الحاسم: التكرارية (Repeatability) مقابل التفرد (Uniqueness).\n• العملية (Process): نشاط متكرر، منظم، يمكن التنبؤ به، ذو طبيعة مستمرة (مثل: صرف الرواتب، معالجة الفواتير، فتح الحسابات البنكية).\n• المشروع (Project): مسعى فريد غير متكرر، بفريق عمل مؤقت، وميزانية محددة وتاريخ بداية ونهاية واضحين (مثل: بناء مقر جديد، أو تدشين قمر صناعي).',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Addresses End-to-End Work vs. Functional Boundaries:\n• Business Functions: Grouped by homogeneous skill sets or operational domains (e.g., Sales, Finance, Legal, Manufacturing). Functions operate in vertical silos and lack defined inputs/outputs.\n• Business Processes: Focus on the cross-functional flow of activities from the initial customer trigger to the final delivery of value. Processes possess explicitly defined inputs, rules, actors, and outputs.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'العمل المتكامل (End-to-End) في مواجهة الجزر الوظيفية:\n• الوظائف التنظيمية (Functions): تتجمع حول مهارات متجانسة أو تخصصات وظيفية محددة (مثل: المبيعات، المالية، التصنيع)، وتعمل كجزر رأسية معزولة تفتقر لمدخلات ومخرجات واضحة المعالم.\n• عمليات الأعمال (Processes): تركز على التدفق الأفقي الشامل للأنشطة من لحظة طلب العميل وحتى تسليم القيمة، وتمتلك مدخلات ومخرجات ومسؤوليات وقواعد عمل محددة بدقة.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The Quality Process Metaphor ("The Bottom Line" - Slides 3-7):\n• Kitchen Metaphor: A clean kitchen does not necessarily guarantee tasty food, but we would much rather eat food prepared in a clean kitchen than a dirty one.\n• Aircraft Metaphor: Good processes do not guarantee 100% bug-free software, but passengers would much rather fly on an Airbus powered by software from a mature, certified aerospace engineering corporation than from an unvetted small development shop.\n• Conclusion: Disciplined process management ensures qualitative processes, which fundamentally decreases the risk of delivering defective or low-quality products.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'استعارة جودة العمليات ("خلاصة القول" - الشرائح 3-7):\n• استعارة المطبخ: المطبخ النظيف لا يضمن بالضرورة طعامًا لذيذًا، لكننا حتمًا نفضل تناول طعام عادي من مطبخ نظيف على تناول طعام من مطبخ متسخ.\n• استعارة الطيران: اتباع منهجيات دقيقة لا يضمن استحالة وجود أخطاء برمجية، لكن المسافرين يفضلون ركوب طائرة إيرباص تعمل ببرمجيات شركة هندسية عريقة على ركوب طائرة طورت برمجياتها ورشة صغيرة غير معتمدة.\n• الخلاصة: تضمن إدارة العمليات وجود "عمليات ذات جودة عالية"، مما يقلل بدرجة هائلة من مخاطر إنتاج منتجات معيبة أو رديئة.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Management Discipline & BPMS Technology Suites:\n• Enabling Technology is meaningless without the underlying management discipline and governance frameworks to exploit it.\n• Business Process Management Suites (BPMS): Integrated software suites combining visual modeling, simulation, workflow execution engines, business rule engines (BRE), process monitoring, and real-time BAM reporting.\n• Organizational Commitment & Governance: Managing end-to-end processes across department lines introduces new organizational roles: Process Owners, Process Designers, and Process Architects.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الانضباط الإداري وحزم برمجيات BPMS:\n• التكنولوجيا التمكينية لا قيمة لها دون انضباط إداري وحوكمة مؤسسية قادرة على الاستفادة منها.\n• حزم إدارة العمليات (BPMS): منصات برمجية متكاملة تجمع بين النمذجة المرئية، والمحاكاة، ومحركات تنفيذ تدفقات العمل، ومحركات قواعد العمل، ومراقبة مؤشرات الأداء (BAM).\n• الالتزام المؤسسي وأدوار الحوكمة: يتطلب تطبيق BPM استحداث أدوار ومسؤوليات جديدة عابرة للإدارات: مالك العملية (Process Owner)، ومصمم العملية (Process Designer)، ومعماري العمليات (Process Architect).',
              },
            ],
            examNotes: [
              'Frequent Exam Question: The defining characteristic of process vs project is repeatability vs uniqueness.',
              'Exam Trap: Technology alone is meaningless without the management discipline and governance to exploit it.',
              'Efficiency vs Effectiveness: Efficiency is "doing the thing right" (speed/cost); Effectiveness is "doing the right thing" (achieving the strategic goal).',
            ],
            examNotesAr: [
              'سؤال امتحاني متكرر: المعيار الحاسم للتفرقة بين العملية والمشروع هو التكرارية مقابل التفرد (Repeatability vs. Uniqueness).',
              'فخ امتحاني: التكنولوجيا وحدها لا قيمة لها بدون وجود الانضباط الإداري والحوكمة المنظمة.',
              'الكفاءة مقابل الفاعلية: الكفاءة (Efficiency) تعني "أداء العمل بطريقة صحيحة"، والفاعلية (Effectiveness) تعني "أداء العمل الصحيح المستهدف".',
            ],
            commonMistakes: [
              'Confusing business functions (silo departments like Accounting) with business processes (cross-functional value chains like Order-to-Cash).',
            ],
          },
        },
      ],
    },
    {
      id: 'bpm-ch2-t2',
      title: 'Business Process Anatomy & Multi-Stage Lifecycle Models',
      titleAr: 'تشريح عملية الأعمال ودورات الحياة المتعددة',
      lessons: [
        {
          id: 'bpm-ch2-l2',
          chapterId: 'bpm-ch2',
          topicId: 'bpm-ch2-t2',
          title: 'The 4 Components & 6-Phase Circular & Spiral Lifecycles',
          titleAr: 'المكونات الأربعة ودورات الحياة السداسية الدائرية والحلزونية',
          estimatedMinutes: 20,
          sourceRef: { file: 'BPM_L2.pdf', page: '18-29' },
          objectives: [
            'Identify and analyze the 4 foundational components of any business process: Input, Process Activities, Output, and People.',
            'Memorize the 6 distinct phases of the circular BPM lifecycle in strict sequential order.',
            'Explain the spiral lifecycle model representing continuous iterative refinement and organizational maturity.',
            'Examine the 10 organizational maturity dimensions that influence BPM adoption.',
          ],
          objectivesAr: [
            'تحديد وتحليل المكونات الأربعة الأساسية لأي عملية: المدخلات، الأنشطة، المخرجات، والكوادر البشرية.',
            'حفظ المراحل الست لدورة حياة BPM الدائرية بترتيبها المنطقي الدقيق.',
            'شرح النموذج الحلزوني (Spiral Model) الذي يعكس التحسين المستمر والنضج المؤسسي.',
            'استعراض الأبعاد العشرة للنضج المؤسسي المؤثرة في نجاح إدارة العمليات.',
          ],
          content: {
            enDefinition:
              'A business process is composed of four fundamental elements — Input, Process, Output, and People — and evolves through a continuous 6-phase lifecycle: Planning, Analysis, Design, Implementation, Monitoring, and Refinement.',
            arExplanation:
              'تتكون عملية الأعمال من أربعة عناصر أساسية: المدخلات، الأنشطة، المخرجات، والكوادر البشرية؛ وتتطور عبر دورة حياة سداسية مستمرة: التخطيط، التحليل، التصميم، التنفيذ، المراقبة، والتحسين.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The 4 Foundational Components of a Business Process:\n1. Input: What initiates the work. Raw materials, digital documents, customer service requests, transaction events, or automated triggers.\n2. Process Activities: The logical flow of sequential or parallel tasks performed to transform inputs into meaningful outcomes.\n3. Output: What results from the work. Delivered products, completed services, approved decisions, or transformed data states.\n4. People / Roles: The human workers, teams, supervisors, and automated software agents responsible for executing and managing tasks.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'المكونات الأربعة الأساسية لعملية الأعمال:\n1. المدخلات (Input): ما يطلق العمل؛ مثل المواد الخام، المستندات الرقمية، طلبات العملاء، أو إشارات وأحداث الأنظمة.\n2. أنشطة العملية (Process Activities): التدفق المنطقي للمهام المتتالية أو المتوازية لتحويل المدخلات إلى مخرجات ذات قيمة.\n3. المخرجات (Output): النتيجة النهائية للعمل؛ كمنتج جاهز، خدمة مكتملة، قرار موافقة معتمد، أو بيانات مُعالجة.\n4. الكوادر البشرية والأدوار (People): الموظفون والمديرون والأنظمة البرمجية المسند إليهم تنفيذ الأنشطة ومتابعتها.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The 6-Phase Circular BPM Lifecycle (Slide 23):\n1. Process Planning and Strategy: Aligning organizational strategy with customer expectations; prioritizing high-impact processes.\n2. Analysis of Business Processes: Gathering qualitative and quantitative data to fully understand the baseline "As-Is" process state.\n3. Design and Modelling of Business Processes: Re-engineering workflows, removing bottlenecks, and formalizing the target "To-Be" models.\n4. Process Implementation: Executing the design via workflow software, integration adapters, organizational restructuring, and user training.\n5. Process Monitoring and Controlling: Measuring live KPIs, tracking cycle times, costs, and quality compliance.\n6. Process Refinement: Iterative optimization based on real-world performance feedback.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'المراحل الست لدورة حياة BPM الدائرية (شريحة 23):\n1. تخطيط العمليات والاستراتيجية (Planning & Strategy): مواءمة استراتيجية المؤسسة مع توقعات العملاء وتحديد العمليات ذات الأولوية.\n2. تحليل عمليات الأعمال (Analysis): جمع البيانات ودراسة الوضع الحالي للعملية القائمة (As-Is) بدقة.\n3. تصميم ونمذجة العمليات (Design & Modelling): إعادة هندسة مسار العمل وتصميم نموذج المستقبل المستهدف (To-Be) الخالي من الاختناقات.\n4. تنفيذ العمليات (Implementation): إطلاق النموذج عبر البرمجيات وتدريب الموظفين وإجراءات التغيير المؤسسي.\n5. مراقبة وضبط العمليات (Monitoring & Controlling): تتبع الأداء الفعلي لحظيًا وقياس مؤشرات الأداء (KPIs) والتكاليف والزمن.\n6. تحسين وتدقيق العمليات (Refinement): إدخال تعديلات تحسينية مستمرة بناءً على نتائج المراقبة.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The Spiral Iterative Lifecycle (Slide 24):\n• BPM is not a closed single loop that ends after phase 6. Rather, it expands outward as an iterative spiral.\n• With each complete revolution of Planning -> Analysis -> Design -> Implementation -> Monitoring -> Refinement, the organization achieves higher operational maturity, higher quality, lower error rates, and increased agility.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'النموذج الحلزوني التكراري (شريحة 24):\n• لا تمثل إدارة العمليات حلقة مغلقة تنتهي باكتمال الدورة الأولى، بل تتوسع كحلزون تصاعدي مستمر.\n• مع كل دورة جديدة تعبر (التخطيط -> التحليل -> التصميم -> التنفيذ -> المراقبة -> التحسين)، ترتقي المؤسسة إلى مستوى أعلى من النضج التشغيلي وخفض الأخطاء وسرعة الاستجابة.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The 10 Organizational Maturity & Environmental Factors:\nCulture and Strategy, Methodology, Information Technology, Process Alignment, Process Awareness, Process Measures, Process Sponsorship, Process Responsibility, Process Definition, and Organisation.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'العوامل البيئية العشرة للنضج المؤسسي:\nالثقافة والاستراتيجية، المنهجية، تكنولوجيا المعلومات، مواءمة العمليات، الوعي بالعمليات، مقاييس الأداء، الرعاية والتمويل، تحديد المسؤوليات، تعريف العمليات، والبنية التنظيمية.',
              },
            ],
            examNotes: [
              'Sequential Lifecycle Order: 1. Planning -> 2. Analysis -> 3. Design -> 4. Implementation -> 5. Monitoring -> 6. Refinement.',
              'Workflow Quiz Question Connection: If a workflow defines tasks, people, and policies but omits what starts the work or what the final result is, it is missing INPUTS and OUTPUTS.',
            ],
            examNotesAr: [
              'ترتيب دورة الحياة السداسية: 1. التخطيط -> 2. التحليل -> 3. التصميم -> 4. التنفيذ -> 5. المراقبة -> 6. التحسين.',
              'سؤال كويز رسمي: إذا حدد توثيق تدفق العمل المهام والأفراد والسياسات لكنه لم يحدد ما يطلق العمل وما هي النتيجة النهائية، فهو يفتقر إلى المدخلات والمخرجات (Inputs & Outputs).',
            ],
            commonMistakes: [
              'Believing BPM implementation stops once the process is deployed and monitored; continuous improvement means refinement triggers new analysis cycles.',
            ],
          },
        },
      ],
    },
    {
      id: 'bpm-ch2-t3',
      title: 'Process Classifications & IT Request Case Analysis',
      titleAr: 'تصنيفات العمليات ودراسة حالة طلب الدعم الفني',
      lessons: [
        {
          id: 'bpm-ch2-l3',
          chapterId: 'bpm-ch2',
          topicId: 'bpm-ch2-t3',
          title: 'Continuous vs Ad Hoc, Simple vs Complex & IT Support Workflow',
          titleAr: 'العمليات المستمرة مقابل العارضة، البسيطة مقابل المعقدة، وحالة الدعم الفني',
          estimatedMinutes: 20,
          sourceRef: { file: 'BPM_L2.pdf', page: '30-34' },
          objectives: [
            'Compare Continuous processes with Ad Hoc processes across characteristics and lecture examples.',
            'Contrast Simple processes with Complex processes across steps, participants, systems, and rules.',
            'Analyze the end-to-end IT Department Support Request workflow case study (Appian).',
            'Trace the decision gateway threshold rule (<$100 auto-approval vs >=$100 manager review).',
          ],
          objectivesAr: [
            'المقارنة الشاملة بين العمليات المستمرة والعمليات العارضة (Ad Hoc) بخصائصها وأمثلتها.',
            'التمييز بين العمليات البسيطة والعمليات المعقدة وفق عدد الخطوات والمشاركين والأنظمة وقواعد العمل.',
            'تحليل دراسة حالة تدفق طلبات الدعم الفني لقسم تكنولوجيا المعلومات (Appian).',
            'تتبع قاعدة بوابة القرار المالية (أقل من 100 دولار موافقة تلقائية مقابل 100 فأكثر مراجعة المدير).',
          ],
          content: {
            enDefinition:
              'Processes are categorized by predictability into Continuous (predictable, repeatable, uninterrupted) versus Ad Hoc (unpredictable, variable, spontaneous), and by operational scale into Simple versus Complex.',
            arExplanation:
              'تُصنف العمليات بحسب قابليتها للتنبؤ إلى عمليات مستمرة (يمكن التنبؤ بها، متكررة، غير منقطعة) وعمليات عارضة (غير متوقعة، متغيرة، تلقائية)، وبحسب نطاقها التشغيلي إلى بسيطة ومعقدة.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Comparison 1: Continuous vs. Ad Hoc Processes (Slide 30 Table):\n• Continuous Processes:\n  - Characteristics: Highly predictable, strictly repeatable, uninterrupted execution schedule.\n  - Example: Payroll Process (occurs consistently on fixed calendar dates, e.g. the 15th and 30th of every month).\n• Ad Hoc Processes:\n  - Characteristics: Unpredictable initiation, highly variable execution steps, spontaneous occurrence.\n  - Example: Expense Report (submitted spontaneously after a client dinner or an irregular conference).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'المقارنة الأولى: العمليات المستمرة مقابل العمليات العارضة (جدول شريحة 30):\n• العمليات المستمرة (Continuous):\n  - الخصائص: متوقعة بدقة، متكررة بانتظام، تسير وفق جدول تشغيلي دوري غير منقطع.\n  - المثال المعتمد: صرف الرواتب (Payroll Process) في مواعيد ثابتة كـ 15 و 30 من كل شهر.\n• العمليات العارضة (Ad Hoc):\n  - الخصائص: غير متوقعة الحدوث، متغيرة المسارات، وتحدث تلقائيًا عند الحاجة.\n  - المثال المعتمد: تقارير نفقات ومصروفات السفر والاجتماعات غير المنتظمة (Expense Reports).',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Comparison 2: Simple vs. Complex Processes (Slide 31 Table):\n• Simple Processes:\n  - Characteristics: Minimal steps, very few participants, single IT system, minimal or no business rules.\n  - Example: Vacation Request (submitted by employee, approved or denied by immediate supervisor).\n• Complex Processes:\n  - Characteristics: Multiple sequential and parallel steps, numerous cross-department participants, multiple disparate software systems, multi-tiered nested business rules.\n  - Example: Deduction Management (evaluating complex tax conditions, thresholds, wage garnishments, and multi-variable logic).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'المقارنة الثانية: العمليات البسيطة مقابل العمليات المعقدة (جدول شريحة 31):\n• العمليات البسيطة (Simple):\n  - الخصائص: خطوات قليلة جدًا، مشاركون محدودون، نظام برمجي واحد، قواعد قرار شبه منعدمة أو بسيطة للغاية.\n  - المثال المعتمد: طلب إجازة (Vacation Request) ينتهي بموافقة أو رفض مباشر من المدير.\n• العمليات المعقدة (Complex):\n  - الخصائص: خطوات متعددة ومتوازية، مشاركون كثر، أنظمة برمجية متباينة، وقواعد عمل مركبة.\n  - المثال المعتمد: إدارة الاستقطاعات والخصومات المالية (Deduction Management) المحكومة بقواعد متعددة الشروط والنسب.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Case Study: End-to-End IT Support Request (Slide 33):\nDemonstrates all 4 process components in action using an Appian portal:\n1. Input: Requester submits an online support ticket for a broken device (e.g. damaged iPad).\n2. People / Actors: Requester, IT Group, Department Manager, and IT Hardware Specialist.\n3. Process Routing:\n   - Start -> Ticket assigned to IT Group.\n   - Decision Gateway Threshold Rule: Cost evaluation.\n   - Path A (Cost < $100): Automatically routed to "Approve" -> IT Specialist issues hardware -> End.\n   - Path B (Cost >= $100): Routed to "Manager Review". If Manager approves -> "Approve" -> Issue Hardware -> End; If Manager denies -> Automated "Send Email" notification to requester -> End.\n4. Output: Replacement/repaired hardware delivered to employee + BAM analytics dashboard (pie chart tracking support ticket volumes and equipment failure trends).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'دراسة حالة: طلب الدعم الفني الشامل (شريحة 33):\nتطبيق عملي للمكونات الأربعة للعملية عبر بوابة برمجية (Appian):\n1. المدخلات (Input): يقدم الموظف تذكرة دعم فني إلكترونية لجهاز معطل (مثل جهاز لوحي iPad).\n2. المشاركون (People): الموظف مقدم الطلب، فريق IT، المدير المباشر، وأخصائي العتاد الفني.\n3. مسار العملية وقواعد البوابة:\n   - البداية -> إسناد التذكرة لفريق تكنولوجيا المعلومات.\n   - بوابة اتخاذ القرار المالي (معيار 100 دولار):\n     - المسار أ (التكلفة أقل من 100 دولار): اعتماد فوري تلقائي -> تسليم العتاد للموظف -> انتهاء.\n     - المسار ب (التكلفة 100 دولار أو أكثر): توجيه التذكرة لـ "مراجعة المدير". إن وافق -> اعتماد -> تسليم العتاد -> انتهاء؛ وإن رفض -> إرسال بريد إلكتروني بالرفض -> انتهاء.\n4. المخرجات (Output): تسليم جهاز بديل صالح للعمل + لوحة مؤشرات تحليلية تراقب حجم الأعطال.',
              },
            ],
            examNotes: [
              'Exact Example Match: Payroll = Continuous process; Expense Report = Ad Hoc process.',
              'Exact Example Match: Vacation Request = Simple process; Deduction Management = Complex process.',
              'Threshold Rule in IT Request: Purchases under $100 bypass manager review; $100 and above mandate manager approval.',
            ],
            examNotesAr: [
              'مطابقة امتحانية دقيقة: صرف الرواتب = عملية مستمرة؛ تقرير المصروفات = عملية عارضة (Ad Hoc).',
              'مطابقة امتحانية دقيقة: طلب الإجازة = عملية بسيطة؛ إدارة الاستقطاعات = عملية معقدة.',
              'معيار دراسة حالة IT: المشتريات الأقل من 100 دولار تعتمد تلقائيًا؛ و 100 دولار فأكثر تستلزم موافقة المدير.',
            ],
            commonMistakes: [
              'Believing Ad Hoc processes cannot be managed or automated; they can be supported with flexible workflow tools, but their timing and paths cannot be rigidly scheduled like payroll.',
            ],
          },
        },
      ],
    },
    {
      id: 'bpm-ch2-t4',
      title: 'Process Ownership & The Modeling Standards Spectrum',
      titleAr: 'ملكية العمليات، أهداف النمذجة وطيف المعايير القياسية',
      lessons: [
        {
          id: 'bpm-ch2-l4',
          chapterId: 'bpm-ch2',
          topicId: 'bpm-ch2-t4',
          title: 'Process Ownership, Artifact Hierarchy & Standards Spectrum',
          titleAr: 'ملكية العمليات، تدرج التوثيق وطيف معايير النمذجة',
          estimatedMinutes: 18,
          sourceRef: { file: 'BPM_L2.pdf', page: '35-42' },
          objectives: [
            'Define the role, responsibilities, and cross-functional authority of the Process Owner.',
            'Differentiate between Process Diagrams, Process Maps, and Process Models.',
            'Summarize the core benefits and primary purposes of process modeling.',
            'Survey the spectrum of process modeling standards (BPMN, Flowcharting, EPC, UML, SIPOC, IDEF-0).',
          ],
          objectivesAr: [
            'تعريف دور مالك العملية (Process Owner) ومسؤولياته وصلاحياته العابرة للقطاعات.',
            'التمييز بين مخططات العمليات (Diagrams)، وخرائط العمليات (Maps)، ونماذج العمليات (Models).',
            'تلخيص الأهداف والفوائد التشغيلية الجوهرية لنمذجة العمليات.',
            'استعراض طيف معايير النمذجة المعترف بها (BPMN, Flowcharting, EPC, UML, SIPOC, IDEF-0).',
          ],
          content: {
            enDefinition:
              'A Process Owner is a manager with end-to-end accountability for the performance, optimization, and governance of a business process, bridging the gap between isolated department managers.',
            arExplanation:
              'مالك العملية (Process Owner) هو مسؤول إداري يمتلك السلطة والمسؤولية الشاملة عن أداء العملية وتحسينها وحوكمتها عبر كافة الإدارات الوظيفية، لردم الفجوة بين مديري الأقسام المنفصلين.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The Role and Accountability of the Process Owner:\n• Cross-Functional Authority: Traditional managers control vertical departments (e.g. Head of Accounting). The Process Owner governs the horizontal process that travels through multiple departments.\n• Core Responsibilities: Measuring performance metrics, allocating resources, managing process improvements, resolving cross-departmental friction, and maintaining regulatory compliance.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'دور ومسؤوليات مالك العملية (Process Owner):\n• صلاحيات عابرة للإدارات: يتحكم المدير التقليدي في إدارته الرأسية (مثل مدير الحسابات)، بينما يشرف مالك العملية على تدفق العمل الأفقي الذي يمر بعدة إدارات.\n• المسؤوليات الأساسية: قياس مؤشرات الأداء، تخصيص الموارد، قيادة مبادرات التحسين، حل النزاعات بين الأقسام، وضمان الامتثال للسياسات.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Hierarchy of Process Artifacts (Slide 37):\n1. Process Diagrams: High-level visual sketches depicting basic activities with minimal notation rigor.\n2. Process Maps: Detailed visual representations showing actors, roles, responsibilities, and routing flows.\n3. Process Models: Mathematically and semantically formal representations with rigorous execution constraints that can be simulated, tested, and transformed into executable software (e.g. BPEL).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'تدرج وثائق تمثيل العمليات (شريحة 37):\n1. مخططات العمليات (Process Diagrams): رسومات بصرية عامة وسريعة للمهام الأساسية دون قيود صياغة معقدة.\n2. خرائط العمليات (Process Maps): تمثيلات بصرية تفصيلية توضح المسارات والمسؤوليات والأدوار المحددة.\n3. نماذج العمليات (Process Models): تمثيلات دقيقة ذات دلالات رياضية وقواعد واضحة قابلة للمحاكاة والتحويل لبرمجيات تنفيذية (مثل BPEL).',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Purposes & Benefits of Process Modeling (Slides 39-40):\n• Descriptive Sufficiency: "Objective is to create a representation of the process that describes it accurately and sufficiently for the task at hand." Models are simplified representations that facilitate understanding.\n• Fast and Cost-Effective: Modeling on software is far faster, easier, and less expensive than making disruptive trial-and-error changes on live operational lines.\n• Baseline for Measurement: Provides an objective baseline to measure cycle times, cost, and capacity.\n• Facilitates Simulation: Allows organizations to test "what-if" scenarios, detect bottlenecks, and evaluate the impact of proposed changes before implementation.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'أهداف وفوائد نمذجة العمليات (الشرائح 39-40):\n• كفاية الوصف: الهدف هو إنشاء تمثيل يصف العملية بدقة وكفاية للغرض المطلوب دون إفراط.\n• السرعة والجدوى الاقتصادية: النمذجة على الشاشة أسرع وأسهل بكثير وأقل تكلفة من التعديل العشوائي على خطوط الإنتاج الحية.\n• خط أساس للقياس (Baseline): توفر مرجعًا موضوعيًا لقياس زمن الإنجاز والتكاليف واستغلال الموارد.\n• تمكين المحاكاة (Simulation): تتيح للمؤسسة تجربة سيناريوهات "ماذا لو؟"، ورصد الاختناقات المحتملة قبل الاستثمار في النظم الجديدة.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The Spectrum of Modeling Standards and Notations (Slide 41):\n• BPMN (Business Process Model and Notation): The global OMG standard; rich semantics, mapped to BPEL.\n• Flowcharting: Simple chronological step-by-step boxes.\n• EPC (Event-driven Process Chain): Used extensively in enterprise ERP environments (SAP).\n• Value Chain: Michael Porter’s high-level strategic categorization of primary and support activities.\n• UML (Unified Modeling Language): Activity and sequence diagrams tailored for software engineering.\n• IDEF-0: Functional decomposition method for manufacturing and enterprise systems.\n• LOVEM-E: Line of Visibility Engineering Method for front-office/back-office interactions.\n• SIPOC: High-level table summarizing Suppliers, Inputs, Process, Outputs, and Customers.\n• Systems Dynamics & Value Stream Mapping: Lean manufacturing tools for lead time analysis.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'طيف معايير نمذجة العمليات (شريحة 41):\n• BPMN: المعيار العالمي الأول المدعوم من منظمة OMG، ويتميز بدقة دلالاته وإمكانية تحويله إلى كود تنفيذي (BPEL).\n• المخططات الانسيابية (Flowcharting): أشكال تقليدية لتتبع المسار المنطقي للخطوات.\n• سلاسل العمليات المقادة بالأحداث (EPC): معيار واسع الانتشار خاصة في بيئات أنظمة SAP.\n• سلاسل القيمة (Value Chain): نموذج مايكل بورتر الاستراتيجي لتصنيف الأنشطة الأساسية والداعمة.\n• لغة النمذجة الموحدة (UML): مخططات الأنشطة والتتابع الموجهة لهندسة البرمجيات.\n• IDEF-0: منهجية تحليل وتفكيك وظائف النظم المعقدة.\n• LOVEM-E: طريقة هندسية لتوضيح خط الرؤية بين خدمات العميل والعمليات الخلفية.\n• SIPOC: جدول تلخيصي يربط الموردين والمدخلات والعملية والمخرجات والعملاء.\n• خرائط تدفق القيمة (Value Stream Mapping): أداة تصنيع رشيق (Lean) لتحليل أوقات الانتظار والهدر.',
              },
            ],
            examNotes: [
              'Frequent Exam Question: BPMN can output directly to BPEL (Business Process Execution Language), the standard executable language for Web Services.',
              'A Model is Never 100% Complete: The objective of a model is descriptive sufficiency for the task at hand, not total replication of every physical molecule.',
            ],
            examNotesAr: [
              'سؤال امتحاني متكرر: يمكن تحويل مخططات BPMN مباشرة إلى لغة BPEL التنفيذية المخصصة لتشغيل خدمات الويب.',
              'النموذج ليس مطابقًا كليًا للواقع: الهدف هو وصف العملية بدقة كافية للغرض المستهدف (Descriptive Sufficiency).',
            ],
            commonMistakes: [
              'Thinking BPMN is the only modeling notation that exists; remember EPC, UML, Flowcharting, and IDEF-0 are also recognized industry standards.',
            ],
          },
        },
      ],
    },
  ],
};

