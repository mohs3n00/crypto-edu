import type { Chapter } from '../../../types';

export const bpmChapter3: Chapter = {
  id: 'bpm-ch3',
  number: 3,
  title: 'BPMN 2.0 Syntax, Semantics & Collaborative Modeling',
  titleAr: 'معيار نمذجة العمليات BPMN 2.0 والنمذجة التعاونية',
  description:
    'Comprehensive standard BPMN 2.0 notation, the 4 foundational element categories (Flow Objects, Connecting Objects, Swimlanes, Artifacts), Catching vs. Throwing events, Tasks vs. Sub-Processes vs. Transactions, Gateway branching semantics (XOR, AND, OR, Event-Based), Boundary Timer Events (Leave Request Approval), Swimlanes (Pools vs. Lanes), Customer-Vendor lunch ordering collaboration, and Mathias Weske’s Reseller-Buyer choreography models.',
  descriptionAr:
    'المعيار القياسي الشامل BPMN 2.0، الفئات الأربع الأساسية (عناصر التدفق، عناصر الربط، مسارات السباحة، والمصنوعات الملحقة)، أحداث الالتقاط مقابل الإطلاق، المهام والعمليات الفرعية والمعاملات، بوابات التوجيه (XOR, AND, OR, Event-Based)، أحداث التوقيت على الحدود (اعتماد الإجازات)، الأحواض والممرات، تعاون العميل والمورد في طلب الغداء، ونماذج كوريغرافيا المشتري والبائع لماتياس ويسكي.',
  topics: [
    {
      id: 'bpm-ch3-t1',
      title: 'Structural Taxonomy, Events & Activity Hierarchy',
      titleAr: 'التصنيف الهيكلي، دلالات الأحداث وتدرج الأنشطة',
      lessons: [
        {
          id: 'bpm-ch3-l1',
          chapterId: 'bpm-ch3',
          topicId: 'bpm-ch3-t1',
          title: 'BPMN Element Taxonomy, Catching/Throwing Events & Activities',
          titleAr: 'تصنيف عناصر BPMN، أحداث الالتقاط والإطلاق وتدرج الأنشطة',
          estimatedMinutes: 20,
          sourceRef: { file: 'BPM_L2.pdf, Sem_Process_Modeling_with_BPMN_13-14.pdf', page: 'L2: 43-44; Seminar: 13-26' },
          objectives: [
            'Classify the 4 foundational BPMN element groups: Flow Objects, Connecting Objects, Swimlanes, and Artifacts.',
            'Differentiate between Catching events (incoming triggers) and Throwing events (outgoing emissions).',
            'Contrast the three event lifecycle positions: Start Events, Intermediate Events, and End Events.',
            'Distinguish Tasks, Sub-Processes, and Transactions within the activity hierarchy.',
          ],
          objectivesAr: [
            'تصنيف المجموعات الأربع الأساسية لعناصر BPMN: عناصر التدفق، عناصر الربط، ممرات السباحة، والمصنوعات.',
            'التمييز بين أحداث الالتقاط (Catching - استقبال) وأحداث الإطلاق (Throwing - إرسال).',
            'المقارنة بين المواضع الثلاثة للأحداث في دورة العملية: البداية، الوسيطة، والنهاية.',
            'التفريق الدقيق بين المهام الفردية (Tasks)، والعمليات الفرعية (Sub-Processes)، والمعاملات (Transactions).',
          ],
          content: {
            enDefinition:
              'BPMN 2.0 (Business Process Model and Notation) is an OMG standard providing a rich graphical notation composed of Flow Objects, Connecting Objects, Swimlanes, and Artifacts to specify executable business processes.',
            arExplanation:
              'يُعد معيار BPMN 2.0 لغة النمذجة الرسومية القياسية العالمية المعتمدة من منظمة OMG، والتي تتألف من أربع فئات رئيسية (عناصر التدفق، عناصر الربط، ممرات السباحة، والمصنوعات) لنمذجة عمليات الأعمال القابلة للتنفيذ.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The 4 Foundational BPMN Element Groups (Taxonomy Tree - Slide 43):\n1. Flow Objects: The primary graphical elements that define the operational behavior of a business process: Events, Activities, and Gateways.\n2. Connecting Objects: The lines that connect flow objects to one another: Sequence Flows, Message Flows, and Associations.\n3. Swimlanes: Visual containers that organize and categorize activities: Pools (external participants) and Lanes (internal roles/departments).\n4. Artifacts: Visual elements that supply supplemental information without altering token flow: Data Objects, Groups, and Text Annotations.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'المجموعات الأربع الأساسية لعناصر BPMN (شجرة التصنيف - شريحة 43):\n1. عناصر التدفق (Flow Objects): العناصر الرسومية الجوهرية المحددة لسلوك العملية: الأحداث (Events)، والأنشطة (Activities)، والبوابات (Gateways).\n2. عناصر الربط (Connecting Objects): الخطوط التي تربط عناصر التدفق ببعضها: تدفق التسلسل (Sequence Flow)، تدفق الرسائل (Message Flow)، والارتباطات (Associations).\n3. ممرات السباحة (Swimlanes): الحاويات التنظيمية البصرية للأنشطة: الأحواض (Pools) للمشاركين المستقلين، والممرات (Lanes) للأدوار والأقسام الداخلية.\n4. المصنوعات الملحقة (Artifacts): عناصر توفر معلومات إيضاحية داعمة دون أن تؤثر على سير التدفق: كائنات البيانات (Data Objects)، المجموعات (Groups)، والشروح النصية (Annotations).',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Events: Semantics & Classifications:\nAn event denotes something that happens during the course of a business process, affecting the flow and usually having a cause or an impact.\n• Lifecycle Position:\n  - Start Event (thin single circle): Initiates a process instance.\n  - Intermediate Event (double thin circle): Occurs between start and end.\n  - End Event (thick single circle): Concludes a process path or whole instance.\n• Directional Behavior:\n  - Catching Events (unfilled icon): Waiting for a trigger to arrive from the outside environment (e.g. receiving a message, timer expiration).\n  - Throwing Events (filled/black icon): Emitting a result, signal, or message to an external participant.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الأحداث: دلالاتها وتصنيفاتها:\nالحدث هو شيء يقع أثناء سير العملية فيؤثر على مسارها، ويكون ناتجًا عن سبب أو يؤدي لنتيجة.\n• الموضع في دورة حياة العملية:\n  - حدث البداية (Start Event): دائرة رفيعة مفردة تطلق بداية تشغيل العملية.\n  - حدث وسيط (Intermediate Event): دائرة مزدوجة رفيعة يقع أثناء سير العمل بين البداية والنهاية.\n  - حدث النهاية (End Event): دائرة مفردة سميكة تنهي مسار العملية أو تشغيلها بالكامل.\n• السلوك الاتجاهي للحدث:\n  - حدث التقاط (Catching - أيقونة بيضاء مفرغة): ينتظر وصول إشارة أو رسالة من الخارج (مثل استقبال رسالة أو انتهاء مؤقت زمني).\n  - حدث إطلاق (Throwing - أيقونة سوداء مصمتة): يصدر إشارة أو رسالة موجهة لطرف خارجي عند وصول التدفق إليه.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Activities: The Spectrum of Work:\nAn activity represents work performed within a process.\n• Task: An atomic unit of work that cannot or is not broken down to a further level of detail (rounded rectangle).\n• Sub-Process: A compound activity that hides or reveals an internal sub-level of detailed business process flow (denoted with a small "+" marker at the bottom).\n• Transaction: A specialized sub-process with double-line border where all contained activities must be treated as a single ACID-like transaction (all activities succeed together, or if any fails, compensation rollback is triggered).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الأنشطة: طيف تنفيذ الأعمال:\nيمثل النشاط العمل المنجز داخل العملية.\n• المهمة (Task): وحدة عمل ذرية (Atomic) لا تتجزأ لمستوى أدنى في المخطط (مستطيل ذو زوايا دائرية).\n• العملية الفرعية (Sub-Process): نشاط مركب يخفي أو يظهر تفاصيل مسار داخلي إضافي (تُميز بعلامة "+" في أسفل المستطيل).\n• المعاملة (Transaction): عملية فرعية ذات إطار مزدوج تعامل كافة أنشطتها كوحدة واحدة غير قابلة للتجزئة (إما أن تكتمل جميعها بنجاح، أو تُلغى جميعها وتُعوض كليًا في حال فشل أي جزء منها).',
              },
            ],
            examNotes: [
              'Frequent Exam Question: Gateways control branching and merging; Sequence Flow shows the order of activities.',
              'Catching vs Throwing: Catching events react to incoming triggers; Throwing events generate outputs.',
              'Transaction Border: Transactions feature a double line boundary to signify all-or-nothing completion.',
            ],
            examNotesAr: [
              'سؤال امتحاني متكرر: البوابات (Gateways) تتحكم في التفريع والدمج، بينما تدفق التسلسل يوضح الترتيب الزمني للأنشطة.',
              'الالتقاط مقابل الإطلاق: أحداث الالتقاط تتفاعل مع المثيرات الواردة، بينما أحداث الإطلاق تولد إشارات صادرة.',
              'إطار المعاملات: تُميز المعاملات (Transactions) بإطار مزدوج للإشارة إلى وجوب اكتمال كافة أنشطتها كوحدة واحدة.',
            ],
            commonMistakes: [
              'Confusing an intermediate catch event (waiting for an external message) with an intermediate throw event (actively sending out a message).',
            ],
          },
        },
      ],
    },
    {
      id: 'bpm-ch3-t2',
      title: 'Gateways, Branching Semantics & Boundary Events',
      titleAr: 'البوابات المنطقية، دلالات التفريع وأحداث الحدود',
      lessons: [
        {
          id: 'bpm-ch3-l2',
          chapterId: 'bpm-ch3',
          topicId: 'bpm-ch3-t2',
          title: 'Gateway Types, Branching Rules & Boundary Timer Case Study',
          titleAr: 'أنواع البوابات، قواعد التفريع ودراسة حالة مؤقت الحدود',
          estimatedMinutes: 20,
          sourceRef: { file: 'BPM_L2.pdf, Sem_Process_Modeling_with_BPMN_13-14.pdf', page: 'L2: 44-45; Seminar: 30-52' },
          objectives: [
            'Compare the token routing semantics of Exclusive (XOR), Parallel (AND), and Inclusive (OR) gateways.',
            'Explain how Event-Based Gateways defer branch selection until an external event fires.',
            'Analyze Boundary Events attached to activity perimeters (Interrupting vs. Non-Interrupting).',
            'Trace the Employee-Manager Leave Request process with a 1-day boundary timer auto-rejection.',
          ],
          objectivesAr: [
            'المقارنة بين دلالات توجيه التدفق في بوابات الاختيار الحصري (XOR)، والتوازي (AND)، والشمول (OR).',
            'شرح كيفية تأجيل بوابة القرار المعتمدة على الأحداث (Event-Based) للاختيار حتى وقوع أول حدث خارجي.',
            'تحليل أحداث الحدود (Boundary Events) المثبتة على حواف الأنشطة (المقاطعة وغير المقاطعة).',
            'تتبع عملية اعتماد إجازة الموظف المزودة بمؤقت حدودي (يوم واحد) لإرسال رفض تلقائي.',
          ],
          content: {
            enDefinition:
              'Gateways control the divergence and convergence of sequence flows based on conditions or events, while Boundary Events attach to activity borders to catch asynchronous interrupts such as timeouts.',
            arExplanation:
              'تتحكم البوابات المنطقية (Gateways) في تفريع ودمج مسارات التدفق بناءً على الشروط أو الأحداث، بينما تثبت أحداث الحدود على أطر الأنشطة لاعتراضها في حال وقوع ظروف طارئة مثل انتهاء المهلة الزمنية.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Core Gateway Types and Routing Rules:\n1. Exclusive Gateway (XOR, marker: "X" or blank):\n   - XOR-Split: Evaluates mutual-exclusive conditions and routes the token down EXACTLY ONE outgoing branch.\n   - XOR-Join: Merges alternative branches without waiting; any incoming token immediately passes through.\n2. Parallel Gateway (AND, marker: "+"):\n   - AND-Split: Unconditionally creates concurrent tokens on ALL outgoing branches simultaneously.\n   - AND-Join: Synchronizes parallel branches; WAITS until tokens from ALL incoming branches arrive before continuing.\n3. Inclusive Gateway (OR, marker: "O"):\n   - OR-Split: Evaluates non-exclusive conditions and activates ONE OR MORE branches where conditions evaluate to true.\n   - OR-Join: Synchronizes all active branches; waits for all paths activated in the corresponding split before proceeding.\n4. Event-Based Gateway (marker: pentagon inside double circle):\n   - Routes flow based on whichever external event (e.g. Message vs Timer) occurs first. The first event to occur consumes the token and cancels the other paths.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'أنواع البوابات الرئيسية وقواعد توجيه التدفق:\n1. بوابة الاستبعاد الحصري (Exclusive XOR - علامة "X" أو معين فارغ):\n   - تفريع XOR: يقيّم الشروط الحصرية ويوجه التدفق عبر مسار واحد فقط لا غير.\n   - دمج XOR: يدمج المسارات البديلة دون انتظار؛ أي تدفق قادم يمر فورًا.\n2. بوابة التوازي (Parallel AND - علامة "+"):\n   - تفريع AND: يطلق تدفقات متزامنة في كافة المسارات الخارجة بلا شروط.\n   - دمج AND: يزامن المسارات المتوازية؛ ينتظر وصول كافة المسارات القادمة قبل المتابعة.\n3. بوابة الشمول (Inclusive OR - علامة دائرة "O"):\n   - تفريع OR: يقيّم شروطًا غير حصرية ويطلق التدفق في مسار واحد أو أكثر مما تحققت شروطه.\n   - دمج OR: يزامن فقط المسارات التي انطلقت بالفعل في تفريع OR السابق.\n4. بوابة اتخاذ القرار بالحدث (Event-Based Gateway):\n   - تعتمد على وقوع أحداث خارجية (مثل استقبال رسالة أو مؤقت زمني)؛ أول حدث يقع هو الذي يُفعّل مساره وتُلغى المسارات الأخرى.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Boundary Events & The Leave Approval Case Study (Slide 45):\n• Concept: Boundary events are attached to the outer boundary of an activity. An interrupting boundary event halts the activity immediately if triggered.\n• Case Structure:\n  - Two Swimlanes: Employee Lane and Manager Lane.\n  - Employee requests leave -> Sends message to Manager.\n  - Manager executes "Request processing" task.\n  - Attached Boundary Timer Event: Configured with a "1 day" duration.\n  - Normal Flow: If Manager reviews within 1 day, flow hits an Exclusive Gateway (Approved -> send approval message throw event; Rejected -> send rejection message throw event).\n  - Timeout Flow: If Manager fails to review within 1 day, the boundary timer interrupts the task, fires immediately, and triggers "Auto send rejection message" throw event.\n  - All outcomes converge to End Event.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'أحداث الحدود ودراسة حالة اعتماد الإجازات (شريحة 45):\n• المفهوم: تثبت أحداث الحدود على الإطار الخارجي للنشاط؛ وإذا كان الحدث مقاطعًا، فإنه يوقف النشاط فورًا بمجرد وقوعه.\n• سيناريو دراسة الحالة:\n  - مساران وظيفيان: مسار الموظف (Employee) ومسار المدير (Manager).\n  - يطلب الموظف إجازة -> تصل رسالة للمدير.\n  - يبدأ المدير نشاط "معالجة الطلب" (Request processing).\n  - حدث توقيت على الحدود (Boundary Timer): محدد بمهلة "يوم واحد" (1 day).\n  - المسار الطبيعي: إذا بتّ المدير في الطلب خلال يوم، يصل التدفق لبوابة حصرية (موافقة -> إرسال رسالة قبول؛ رفض -> إرسال رسالة رفض).\n  - مسار انتهاء المهلة: إذا مضى يوم دون رد، يقاطع المؤقت النشاط تلقائيًا ويوجه التدفق لنشاط "إرسال رسالة رفض تلقائي" (Auto send rejection message).\n  - تلتقي كافة المسارات في حدث النهاية.',
              },
            ],
            examNotes: [
              'Exact Quiz Question: What does an AND-split do? Activates ALL outgoing branches.',
              'Exact Quiz Question: What does an XOR-split do? Chooses EXACTLY ONE route based on a condition.',
              'Exact Quiz Question: What does an OR-split do? May activate one or several branches.',
              'Exact Quiz Question: An AND-join waits for ALL required branches before continuing (True).',
            ],
            examNotesAr: [
              'سؤال كويز رسمي: ماذا تفعل بوابة تفريع AND؟ تفعّل كافة المسارات الخارجة بالتوازي.',
              'سؤال كويز رسمي: ماذا تفعل بوابة تفريع XOR؟ تختار مسارًا واحدًا فقط بناءً على شرط.',
              'سؤال كويز رسمي: ماذا تفعل بوابة تفريع OR؟ قد تفعّل مسارًا واحدًا أو عدة مسارات.',
              'سؤال كويز رسمي: بوابة دمج AND تنتظر اكتمال كافة المسارات القادمة قبل المتابعة (صح).',
            ],
            commonMistakes: [
              'Thinking an XOR-split can activate multiple branches if multiple conditions evaluate to true; by definition, XOR is strictly exclusive and selects only one path.',
            ],
          },
        },
      ],
    },
    {
      id: 'bpm-ch3-t3',
      title: 'Swimlanes & Collaborative Orchestration',
      titleAr: 'ممرات السباحة والتنسيق التعاوني بين المؤسسات',
      lessons: [
        {
          id: 'bpm-ch3-l3',
          chapterId: 'bpm-ch3',
          topicId: 'bpm-ch3-t3',
          title: 'Pools, Lanes & Customer-Vendor Collaboration Case',
          titleAr: 'الأحواض والممرات ونموذج التعاون بين العميل والمورد لطلب الغداء',
          estimatedMinutes: 20,
          sourceRef: { file: 'BPM_L2.pdf, Sem_Process_Modeling_with_BPMN_13-14.pdf', page: 'L2: 44, 46; Seminar: 53-60' },
          objectives: [
            'Differentiate between Pools (independent participants) and Lanes (sub-partitions within a pool).',
            'Enforce the strict rule governing Sequence Flows (inside pools) versus Message Flows (across pools).',
            'Trace the Customer-Vendor lunch/pizza ordering collaboration model.',
            'Analyze the Event-Based Gateway handling the 60-minute hunger timer versus meal receipt.',
          ],
          objectivesAr: [
            'التمييز بين الأحواض (Pools للمشاركين المستقلين) والممرات (Lanes للتقسيم الداخلي للوظائف).',
            'تطبيق القاعدة الصارمة لتدفق التسلسل (داخل الحوض فقط) مقابل تدفق الرسائل (عابر للأحواض فقط).',
            'تتبع نموذج التعاون التفاعلي لطلب الغداء بين العميل والمورد.',
            'تحليل بوابة الأحداث التي توازن بين مؤقت الجوع (60 دقيقة) واستلام الوجبة.',
          ],
          content: {
            enDefinition:
              'Pools represent independent business entities or participants, Lanes represent internal roles within a pool, and Message Flows connect disparate pools without crossing internal sequence flows.',
            arExplanation:
              'تمثل الأحواض (Pools) كيانات أو مؤسسات تجارية مستقلة، وتمثل الممرات (Lanes) الأدوار الوظيفية داخل الحوض، بينما تربط تدفقات الرسائل (Message Flows) بين الأحواض دون أن تتقاطع مع تدفقات التسلسل الداخلية.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Pools vs. Lanes Structural Rules:\n• Pool: Represents a participant (a company, business partner, or external system). A pool contains an independent process flow.\n• Lane: Used to organize and categorize activities within a single pool according to departmental roles, internal positions, or systems (e.g. Sales, Warehouse, Accounting).\n• Crucial Flow Rule:\n  - Sequence Flows CANNOT cross pool boundaries. Sequence flow only moves within the same pool.\n  - Message Flows (dashed lines with open circles) are the ONLY mechanism to communicate across pool boundaries.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'القواعد الهيكلية للأحواض والممرات:\n• الحوض (Pool): يمثل كيانًا مستقلاً (شركة، شريك تجاري، أو نظام خارجي) ويحتوي على تدفق عملية مستقل بالكامل.\n• الممر (Lane): يُستخدم لتنظيم وتصنيف الأنشطة داخل الحوض الواحد وفق الأدوار الوظيفية (مثل: المبيعات، المخزن، الحسابات).\n• القاعدة الصارمة للتدفقات:\n  - خطوط تدفق التسلسل (Sequence Flow) يستحيل أن تعبر حدود الحوض، وتتحرك فقط داخل الحوض الواحد.\n  - خطوط تدفق الرسائل (Message Flow - خطوط متقطعة بدائرة مفتوحة) هي الوسيلة الوحيدة للاتصال وتبادل البيانات عبر حدود الأحواض.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Case Study: Customer & Vendor Collaboration (Slide 46):\n• Customer Pool:\n  - Select food -> Order food -> Emits Message Flow to Vendor.\n  - Event-Based Gateway: Waits concurrently for two events:\n    1. "Lunch received" Intermediate Message Event (normal flow).\n    2. "60 min" Intermediate Timer Event (exception flow).\n  - If 60 min passes before food arrives: Customer throws message "Ask for lunch" to Vendor -> loops back to wait.\n  - When lunch arrives: Pay lunch -> Eat lunch -> End.\n• Vendor Pool (3 Lanes: Clerk, Cook, Delivery boy):\n  - Clerk: Receives order message -> AND-split:\n    - Branch 1: Cook prepares lunch -> Delivery boy delivers lunch -> Collects payment -> End.\n    - Branch 2 (Loop): Clerk catches "Impatient customer" message from customer -> Executes "Calm customer" -> loops to wait for further inquiries.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'دراسة حالة: التعاون بين العميل والمورد في طلب الغداء (شريحة 46):\n• حوض العميل (Customer Pool):\n  - اختيار الطعام -> طلب الطعام -> إرسال تدفق رسائل للمورد.\n  - بوابة معتمدة على الأحداث (Event-Based Gateway) تنتظر حدوث أحد أمرين بالتوازي:\n    1. حدث رسالة "استلام الغداء" (Lunch received - المسار الطبيعي).\n    2. حدث مؤقت "60 دقيقة" (60 min timer - مسار التأخير).\n  - إن مضت 60 دقيقة دون وصول الطعام: يرسل العميل رسالة "استعجال الغداء" (Ask for lunch) لموظف المورد ثم يعود للانتظار.\n  - عند استلام الغداء: دفع الحساب -> تناول الغداء -> انتهاء.\n• حوض المورد (Vendor Pool - مقسم لثلاثة ممرات: الموظف، الطاهي، وعامل التوصيل):\n  - الموظف (Clerk): يستقبل الطلب -> بوابة توازي (AND-split):\n    - المسار الأول: الطاهي يُعد الوجبة -> عامل التوصيل يسلم الوجبة ويستلم الثمن -> انتهاء.\n    - المسار الثاني (حلقة): الموظف يستقبل رسائل العميل الغاضب (Impatient customer) -> يقوم بـ "تهدئة العميل" (Calm customer) ويظل جاهزًا.',
              },
            ],
            examNotes: [
              'Frequent Exam Distinction: Sequence flow shows activity order inside a pool; Message flow shows messages across organizational boundaries.',
              'Swimlanes Taxonomy: Pools represent major participants; Lanes organize activities within a pool according to function or role.',
            ],
            examNotesAr: [
              'تمييز امتحاني متكرر: تدفق التسلسل يحدد الترتيب داخل الحوض الواحد؛ تدفق الرسائل يمثل الرسائل عبر حدود المؤسسات.',
              'تصنيف مسارات السباحة: الأحواض تمثل المشاركين الرئيسيين؛ الممرات تنظم الأنشطة داخل الحوض حسب الدور أو الوظيفة.',
            ],
            commonMistakes: [
              'Drawing a sequence flow line crossing from one pool into another pool; this is an absolute syntactic error in BPMN (must use Message Flow).',
            ],
          },
        },
      ],
    },
    {
      id: 'bpm-ch3-t4',
      title: 'Practicing BPMN & Process Choreography',
      titleAr: 'تطبيقات عملية ونمذجة الكوريغرافيا بين المؤسسات',
      lessons: [
        {
          id: 'bpm-ch3-l4',
          chapterId: 'bpm-ch3',
          topicId: 'bpm-ch3-t4',
          title: 'Mathias Weske Ordering Models & Choreography Diagrams',
          titleAr: 'نماذج الطلب لماتياس ويسكي ومخططات الكوريغرافيا والأدوات',
          estimatedMinutes: 20,
          sourceRef: { file: '3- BPM_L3.pdf', page: '1-7' },
          objectives: [
            'Analyze Mathias Weske’s Fig 1.1 Simple Ordering Process of Reseller.',
            'Analyze Mathias Weske’s Fig 1.2 Ordering Process of a Buyer.',
            'Trace Mathias Weske’s Fig 1.3 Interacting Business Processes forming Process Choreography.',
            'Contrast Fig 1.3 with Fig 1.4 Variant showing sequential reseller execution.',
            'Identify enterprise software tools used for BPMN modeling (Signavio, Edraw).',
          ],
          objectivesAr: [
            'تحليل شكل 1.1 لماتياس ويسكي: عملية الطلب للبائع باستخدام بوابات التوازي.',
            'تحليل شكل 1.2 لماتياس ويسكي: عملية الطلب للمشتري بالتوازي.',
            'تتبع شكل 1.3: كوريغرافيا التفاعل التكاملي بين عمليتي المشتري والبائع.',
            'مقارنة الكوريغرافيا مع المتغير المتتالي للبائع في شكل 1.4 (Reseller-A).',
            'التعرف على الأدوات البرمجية المتخصصة لنمذجة BPMN (مثل Signavio و Edraw).',
          ],
          content: {
            enDefinition:
              'Process Choreography models the multi-party interaction and message sequence between autonomous business processes (e.g. Buyer and Reseller) without exposing their internal private workflows.',
            arExplanation:
              'كوريغرافيا العمليات (Process Choreography) هي نمذجة التفاعل وتبادل الرسائل بين عمليات مستقلة لمؤسسات متعددة (مثل المشتري والبائع) دون كشف تفاصيل سير العمليات الداخلية الخاصة بكل طرف.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Weske Fig 1.1: Simple Ordering Process of Reseller:\n• Participant: Reseller (Pool).\n• Initiation: Message Start Event labeled "Receive Order".\n• Step 1: "Check Order" activity.\n• Parallel Split (AND-split):\n  - Branch A: "Send Invoice" -> "Receive Payment".\n  - Branch B: "Ship Products".\n• Parallel Join (AND-join): Synchronizes invoice payment and product shipping.\n• Step 2: "Archive Order" activity.\n• Termination: None End Event.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'شكل 1.1 لويسكي: عملية الطلب لدى البائع (Reseller):\n• المشارك: حوض البائع (Reseller).\n• البداية: حدث بداية رسائلي (Message Start Event) بعنوان "استلام الطلب" (Receive Order).\n• الخطوة 1: نشاط "فحص الطلب" (Check Order).\n• بوابة توازي (AND-split):\n  - المسار أ: "إرسال الفاتورة" -> "استلام الدفع".\n  - المسار ب: "شحن المنتجات".\n• بوابة دمج توازي (AND-join): تزامن وتنتظر سداد الفاتورة وشحن المنتجات معًا.\n• الخطوة 2: نشاط "أرشفة الطلب" (Archive Order).\n• النهاية: حدث نهاية عادي.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Weske Fig 1.2: Ordering Process of a Buyer:\n• Participant: Buyer (Pool).\n• Initiation: None Start Event.\n• Step 1: "Place Order" activity.\n• Parallel Split (AND-split):\n  - Branch A: "Receive Invoice" -> "Settle Invoice".\n  - Branch B: "Receive Products".\n• Parallel Join (AND-join): Waits until invoice is settled and products are received.\n• Termination: None End Event.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'شكل 1.2 لويسكي: عملية الطلب لدى المشتري (Buyer):\n• المشارك: حوض المشتري (Buyer).\n• البداية: حدث بداية عادي.\n• الخطوة 1: نشاط "تقديم الطلب" (Place Order).\n• بوابة توازي (AND-split):\n  - المسار أ: "استلام الفاتورة" -> "سداد الفاتورة".\n  - المسار ب: "استلام المنتجات".\n• بوابة دمج توازي (AND-join): تنتظر سداد الفاتورة واستلام المنتجات معًا.\n• النهاية: حدث نهاية عادي.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Weske Fig 1.3: Interacting Business Processes Form Process Choreography:\n• Two distinct Pools: Buyer and Reseller.\n• 4 Cross-Pool Message Flows:\n  1. From Buyer "Place Order" to Reseller "Receive Order" message start event.\n  2. From Reseller "Send Invoice" to Buyer "Receive Invoice" task.\n  3. From Buyer "Settle Invoice" to Reseller "Receive Payment" task.\n  4. From Reseller "Ship Products" to Buyer "Receive Products" task.\n• Both processes execute their internal tasks concurrently while remaining perfectly synchronized via message flows.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'شكل 1.3 لويسكي: كوريغرافيا العمليات المتفاعلة بين المشتري والبائع:\n• حوضان مستقلان: المشتري (Buyer) والبائع (Reseller).\n• 4 تدفقات رسائل عابرة للأحواض:\n  1. من نشاط المشتري "تقديم الطلب" إلى حدث بداية البائع "استلام الطلب".\n  2. من نشاط البائع "إرسال الفاتورة" إلى نشاط المشتري "استلام الفاتورة".\n  3. من نشاط المشتري "سداد الفاتورة" إلى نشاط البائع "استلام الدفع".\n  4. من نشاط البائع "شحن المنتجات" إلى نشاط المشتري "استلام المنتجات".\n• تنفذ كلتا العمليتين مساراتهما بالتوازي مع التناغم اللحظي عبر تبادل الرسائل.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Weske Fig 1.4: Variant with Sequential Reseller Execution:\n• Reseller-A variant executes sequentially: Receive Order -> Check Order -> Send Invoice -> Receive Payment -> Ship Products -> End.\n• Notice: Products are only shipped AFTER payment is received. The external choreography remains valid and matches the Buyer’s expectations, demonstrating process encapsulation and flexibility.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'شكل 1.4 لويسكي: المتغير المتتالي للبائع (Reseller-A):\n• ينفذ البائع خطواته بتتابع خطي: استلام الطلب -> فحص الطلب -> إرسال الفاتورة -> استلام الدفع -> شحن المنتجات -> انتهاء.\n• ملاحظة: لا تُشحن المنتجات إلا بعد استلام الدفع أولاً؛ ويظل التفاعل الخارجي مع المشتري سليمًا وصحيحًا تمامًا، مما يعكس مرونة واستقلالية كل طرف.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Recommended Modeling Software Tools (Lecture 3 Slide 7):\n• Signavio (SAP Signavio Process Manager): Cloud-based enterprise platform for collaborative BPMN modeling, simulation, and process mining.\n• Edraw (EdrawMax): Visual diagramming suite supporting BPMN 2.0 export for enterprise presentations.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'برمجيات النمذجة المعتمدة في المقرر (المحاضرة 3 شريحة 7):\n• منصة Signavio (المملوكة لشركة SAP): منصة سحابية رائدة للنمذجة التعاونية والمحاكاة وتنقيب العمليات بمعيار BPMN 2.0.\n• برنامج Edraw (EdrawMax): برنامج تصميم رسومي متقدم يدعم معايير BPMN وعروض PowerPoint التقديمية.',
              },
            ],
            examNotes: [
              'Frequent Exam Question: Can a BPMN diagram be executed directly without any workflow software or configuration? NO (False). A BPMN diagram is only a visual model; execution requires workflow software, engine, and configuration.',
              'Choreography Key Point: Message flows connect interacting tasks across pools, while sequence flows govern order within each pool.',
            ],
            examNotesAr: [
              'سؤال كويز رسمي: هل يمكن تنفيذ مخطط BPMN مباشرة دون برمجيات تدفق عمل أو تهيئة تقنية؟ لا (خطأ)، المخطط نموذج بصري فقط، والتنفيذ يتطلب محرك تدفق عمل وإعدادات تقنية.',
              'نقطة جوهرية في الكوريغرافيا: تدفقات الرسائل تربط المهام عبر الأحواض، بينما تدفقات التسلسل تحكم الخطوات داخل الحوض الواحد.',
            ],
            commonMistakes: [
              'Thinking that a reseller must execute tasks in parallel just because the buyer does; as Fig 1.4 shows, internal implementations can differ as long as external message contracts are honored.',
            ],
          },
        },
      ],
    },
  ],
};

