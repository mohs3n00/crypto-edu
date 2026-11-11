import type { Chapter } from '../../../types';

export const bigDataChapter2: Chapter = {
  id: 'bd-ch2',
  number: 2,
  title: 'The Data Analytics Lifecycle',
  titleAr: 'دورة حياة تحليلات البيانات',
  description:
    'The 6 iterative phases of the Data Analytics Lifecycle: Phase 1 (Discovery: problem framing, resource audit, stakeholder mapping, hypotheses), Phase 2 (Data Preparation: sandbox ingestion, ELT vs ETL, conditioning), Phase 3 (Model Planning: EDA, variable and algorithm selection), Phase 4 (Model Building: training, testing, execution), Phase 5 (Communicate Results: 4 stakeholder deliverables, success/failure assessment), and Phase 6 (Operationalize: technical deployment, pilot project execution).',
  descriptionAr:
    'المراحل الست التكرارية لدورة حياة تحليلات البيانات: المرحلة 1 (الاستكشاف: تأطير المشكلة، حصر الموارد، خريطة أصحاب المصلحة، والفرضيات)، المرحلة 2 (إعداد البيانات: تجهيز الحاوية التحليلية، ELT مقابل ETL، والتكييف)، المرحلة 3 (تخطيط النماذج: استكشاف المتغيرات واختيار الخوارزميات)، المرحلة 4 (بناء النماذج: التدريب، الاختبار، والتنفيذ)، المرحلة 5 (إيصال النتائج: مخرجات أصحاب المصلحة وتقييم النجاح والفشل)، والمرحلة 6 (التشغيل الفعلي: النشر التقني وتنفيذ المشروعات التجريبية Pilots).',
  topics: [
    {
      id: 'bd-ch2-t1',
      title: 'Lifecycle Overview & Phase 1: Discovery',
      titleAr: 'نظرة عامة على دورة الحياة والمرحلة الأولى: الاستكشاف',
      lessons: [
        {
          id: 'bd-ch2-l1',
          chapterId: 'bd-ch2',
          topicId: 'bd-ch2-t1',
          title: 'Lifecycle Overview & Phase 1: Discovery',
          titleAr: 'نظرة عامة على دورة حياة التحليلات والمرحلة 1: الاستكشاف (Discovery)',
          estimatedMinutes: 20,
          sourceRef: { file: 'Module 2_DA Lifecycle.pptx', page: 'Slides 4-13', originalNumber: '2025 Q2.2' },
          objectives: [
            'Explain why a structured, cyclic lifecycle is essential for big data analytics projects.',
            'Analyze the activities of Phase 1: Discovery.',
            'Identify key stakeholders and articulate their roles and interests in the project.',
            'Explain how business problems are reframed into analytical hypotheses.',
          ],
          objectivesAr: [
            'شرح أهمية اتباع دورة حياة تكرارية ومنهجية في مشاريع تحليلات البيانات الضخمة.',
            'تحليل الأنشطة والمهام الرئيسية للمرحلة الأولى: الاستكشاف (Discovery).',
            'تحديد أصحاب المصلحة المعنيين (Stakeholders) ودوافعهم وأدوارهم في المشروع.',
            'شرح كيفية إعادة صياغة مشاكل الأعمال إلى فرضيات تحليلية قابلة للاختبار.',
          ],
          content: {
            enDefinition:
              'The Data Analytics Lifecycle is an iterative, six-phase methodology designed specifically for big data projects to guide data science teams from initial business problem framing through data preparation, modeling, and operational enterprise deployment.',
            arExplanation:
              'دورة حياة تحليلات البيانات (Data Analytics Lifecycle) هي منهجية تكرارية مؤلفة من ست مراحل، مصممة خصيصاً لمشاريع البيانات الضخمة لتوجيه فرق علم البيانات من مرحلة التأطير الأولي لمشكلة الأعمال، مروراً بإعداد البيانات والنمذجة الرياضية، وحتى النشر والتشغيل المؤسسي الفعلي.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Core Characteristics of the Lifecycle:\n• Cyclic and Non-Linear: Teams frequently iterate back to earlier phases (e.g., discovering in Model Building that additional data conditioning is required in Phase 2).\n• Multi-Disciplinary Collaboration: Involves business sponsors, domain specialists, data engineers, and data scientists.\n• Hypothesis-Driven: Focuses on testing measurable business assumptions rather than arbitrary data mining.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'السمات الجوهرية لدورة الحياة:\n• دورية وتكرارية غير خطية: تعود الفرق التحليلية باستمرار للمراحل السابقة (مثل العودة من مرحلة بناء النموذج إلى إعداد البيانات لاكتشاف نقص أو شوائب).\n• تعاون عابر للتخصصات: تجمع بين رعاة الأعمال، والخبراء المتخصصين، ومهندسي البيانات، وعلماء البيانات.\n• موجهة بالفرضيات: تركز على اختبار فرضيات قابلة للقياس تدعم أهداف العمل، وليست مجرد تنقيب عشوائي في البيانات.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Activities of Phase 1: Discovery:\n1. Learn the Business Domain: Review relevant industry context, competitive landscape, and previous historical attempts.\n2. Assess Available Resources: Evaluate the team (skills), compute technology, data assets, and time budget.\n3. Frame the Business Problem: Reframe executive pain-points into well-defined analytical questions.\n4. Formulate Initial Hypotheses (IH): Develop testable, actionable statements that the analytics model will confirm or refute.\n5. Identify Key Stakeholders and Their Interests: Map out who sponsors, funds, uses, and benefits from the solution (Midterm 2025 Q2.2 Correct Answer).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'أنشطة المرحلة الأولى: الاستكشاف (Discovery):\n1. دراسة مجال الأعمال (Business Domain): فحص السياق المؤسسي وتجارب المنافسين والمشاريع السابقة.\n2. تقييم الموارد المتاحة (Resources): تدقيق كفاءات الفريق، البنية التكنولوجية، الأصول البيانية، والجدول الزمني.\n3. تأطير مشكلة الأعمال: تحويل التحديات الإدارية الغامضة إلى أسئلة تحليلية محددة وقابلة للحل.\n4. صياغة الفرضيات الأولية (Initial Hypotheses): وضع افتراضات عمل قابلة للاختبار والقياس الإحصائي.\n5. تحديد أصحاب المصلحة المعنيين واهتماماتهم (Identify Key Stakeholders & Their Interests): تحديد رعاة المشروع، والمستخدمين، والمستفيدين من الحل النهائي (الإجابة الصحيحة لسؤال الميدتيرم 2025 س2.2).',
              },
            ],
          },
          examNotes:
            'Exam Note: Midterm 2025 Q2.2 directly asked: "Identify key stakeholders and their interests in the project belong to __ phase" -> Answer: Discovery.',
          examNotesAr:
            'ملاحظة امتحانية: ورد هذا السؤال نصاً في امتحان الميدتيرم 2025 (س2.2): "تحديد أصحاب المصلحة واهتماماتهم في المشروع يتبع لأي مرحلة؟" -> الإجابة: مرحلة الاستكشاف (Discovery).',
        },
      ],
    },
    {
      id: 'bd-ch2-t2',
      title: 'Phase 2: Data Preparation & The Analytic Sandbox',
      titleAr: 'المرحلة الثانية: إعداد وتجهيز البيانات والحاوية التحليلية',
      lessons: [
        {
          id: 'bd-ch2-l2',
          chapterId: 'bd-ch2',
          topicId: 'bd-ch2-t2',
          title: 'Phase 2: Data Preparation & ELT Ingestion',
          titleAr: 'المرحلة 2: إعداد البيانات وتحميل ELT في الحاوية التحليلية',
          estimatedMinutes: 20,
          sourceRef: { file: 'Module 2_DA Lifecycle.pptx', page: 'Slides 14-19' },
          objectives: [
            'Analyze why Phase 2 typically consumes the largest portion of project time (~50-80%).',
            'Explain the role of the Analytic Sandbox in Phase 2.',
            'Contrast the ELT (Extract, Load, Transform) paradigm with traditional ETL.',
            'Define Data Conditioning and describe initial survey/sanity checks.',
          ],
          objectivesAr: [
            'تفسير سبب استهلاك المرحلة الثانية لأكبر حصة من زمن المشروع التحليلي (ما بين 50% إلى 80%).',
            'شرح الدور المحوري للحاوية التحليلية (Analytic Sandbox) في مرحلة إعداد البيانات.',
            'المقارنة بين نموذج ELT الحديث (استخراج - تحميل - تحويل) ونموذج ETL التقليدي.',
            'تعريف تكييف البيانات (Data Conditioning) وتدقيقها الاستطلاعي الأولي.',
          ],
          content: {
            enDefinition:
              'Phase 2 (Data Preparation) is the most resource-intensive phase of the lifecycle, dedicated to provisioning the analytic sandbox, executing high-throughput ELT data ingestion, conditioning and cleaning variables, and performing initial sanity checks on data distributions.',
            arExplanation:
              'المرحلة الثانية (إعداد البيانات - Data Preparation) هي أكثر مراحل دورة الحياة استهلاكاً للوقت والجهد، وتختص بتهيئة الحاوية التحليلية، وتنفيذ سحب وتحميل البيانات بنموذج ELT، وتكييف وتنظيف المتغيرات، وإجراء التدقيق الاستطلاعي الأولي لسلامة توزيع البيانات.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Core Activities in Phase 2 (Data Preparation):\n1. Prepare the Analytic Sandbox: Data engineer provisions an isolated environment with high bandwidth, massive storage, and in-database analytics capabilities.\n2. Perform ELT (Extract, Load, Transform): Data is extracted from source systems, loaded directly into the sandbox in raw format, and then transformed inside the sandbox using parallel processing engines.\n3. Data Conditioning: Cleansing dirty data, normalizing formats, handling missing values, standardizing dates, and converting types.\n4. Survey and Visualize: Performing initial sanity checks (summary statistics, missingness rate, distribution histograms) to verify data integrity.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الأنشطة المحورية في المرحلة 2 (إعداد البيانات):\n1. تجهيز الحاوية التحليلية (Analytic Sandbox): قيام مهندس البيانات بتوفير بيئة عمل معزولة بمساحات تخزين ضخمة وأدوات حوسبة متوازية.\n2. تنفيذ مسار ELT (استخراج، تحميل، ثم تحويل): استخراج البيانات من مصادرها، وتحميلها بحالتها الخام مباشرة في الحاوية التحليلية، ثم تحويلها داخلياً عبر محركات المعالجة المتوازية.\n3. تكييف البيانات (Data Conditioning): تنقية الشوائب، معالجة القيم المفقودة، توحيد صيغ التواريخ، ومطابقة أنواع الحقول.\n4. المسح والاستكشاف الأولي: حساب الإحصاءات الملخصة، ومعدل الفقد، ورسم التوزيعات للتأكد من سلامة العينة قبل النمذجة.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Why ELT is Superior to ETL for Big Data Science:\n• Traditional ETL: Transforms data outside the database before loading. Discards non-conforming raw data, is slow, and limits flexibility.\n• Modern ELT: Loads raw data first into the sandbox, preserving full fidelity. Transformations are executed inside parallel compute clusters (e.g., SQL, Hadoop, Spark) whenever needed.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'أفضلية نموذج ELT على نموذج ETL التقليدي في البيانات الضخمة:\n• نموذج ETL التقليدي: يقوم بتحويل البيانات خارج قاعدة البيانات قبل التحميل، مما يؤدي لاستبعاد البيانات الخام غير المطابقة، ويتميز بالبطء وتقييد المرونة.\n• نموذج ELT الحديث: يُحمّل البيانات الخام بأمان أولاً داخل الحاوية التحليلية محتفظاً بكامل تفاصيلها الأصلية، ثم ينفذ التحويلات برمجياً داخل المنظومة المتوازية كلما تطلبت التجارب ذلك.',
              },
            ],
          },
          examNotes:
            'Exam Note: Data Preparation is universally recognized as the most time-consuming phase of any data science project (often estimated at 50% to 80% of project effort).',
          examNotesAr:
            'ملاحظة امتحانية: مرحلة إعداد البيانات (Phase 2) هي المرحلة الأكثر استهلاكاً لوقت وجهد فرق التحليلات (تستغرق عادة من 50% إلى 80% من إجمالي زمن المشروع).',
        },
      ],
    },
    {
      id: 'bd-ch2-t3',
      title: 'Phase 3 & 4: Model Planning & Model Building',
      titleAr: 'المرحلتان 3 و 4: تخطيط النماذج وبناؤها',
      lessons: [
        {
          id: 'bd-ch2-l3',
          chapterId: 'bd-ch2',
          topicId: 'bd-ch2-t3',
          title: 'Model Planning & Model Building Mechanics',
          titleAr: 'المرحلة 3 (تخطيط النموذج) والمرحلة 4 (بناء النموذج وتنفيذه)',
          estimatedMinutes: 20,
          sourceRef: { file: 'Module 2_DA Lifecycle.pptx', page: 'Slides 20-30' },
          objectives: [
            'Differentiate between Phase 3 (Model Planning) and Phase 4 (Model Building).',
            'Explain Exploratory Data Analysis (EDA) and variable selection techniques in Phase 3.',
            'Explain dataset splitting into Training, Testing, and Validation subsets in Phase 4.',
            'Analyze candidate algorithm selection based on business objectives and data structure.',
          ],
          objectivesAr: [
            'التمييز بين المرحلة 3 (تخطيط النماذج) والمرحلة 4 (بناء وتدريب النماذج).',
            'شرح الاستكشاف الأولي للبيانات (EDA) وتقنيات اختيار المتغيرات المؤثرة في مرحلة التخطيط.',
            'شرح تقسيم البيانات إلى مجموعات تدريب (Training) واختبار (Testing) في مرحلة البناء.',
            'تحليل معايير اختيار الخوارزميات المناسبة استناداً لأهداف العمل وهيكل البيانات.',
          ],
          content: {
            enDefinition:
              'Phase 3 (Model Planning) identifies the input variables, exploratory relationships, and candidate algorithms best suited to the business problem, while Phase 4 (Model Building) executes the analytical algorithms on training data and evaluates model performance against holdout test datasets.',
            arExplanation:
              'تختص المرحلة 3 (تخطيط النماذج - Model Planning) بتحديد المتغيرات المدخلة، وفهم العلاقات والارتباطات الإحصائية، واختيار الخوارزميات المرشحة، بينما تختص المرحلة 4 (بناء النماذج - Model Building) بتدريب الخوارزميات الرياضية فعلياً على بيانات التدريب، وتقييم دقة النموذج على بيانات الاختبار المنعزلة.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Phase 3: Model Planning Core Tasks:\n1. Exploratory Data Analysis (EDA): Visually and statistically inspect relationships between explanatory variables and target outcomes.\n2. Variable Selection: Filter out redundant, collinear, or uninformative features to reduce dimensionality.\n3. Model Selection: Choose appropriate algorithm families (e.g., K-Means for customer segmentation, Logistic Regression for binary churn prediction, Linear Regression for numerical forecasting).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'المهام المحورية للمرحلة 3 (تخطيط النماذج):\n1. الاستكشاف الأولي للبيانات (EDA): الفحص البصري والإحصائي للعلاقات بين المتغيرات المستقلة والنتائج المستهدفة.\n2. اختيار المتغيرات (Variable Selection): استبعاد الحقول الفائضة أو شديدة الارتباط التبادلي لتقليل الأبعاد وتحسين الكفاءة.\n3. اختيار نوع النموذج: انتقاء عائلات الخوارزميات الملائمة (مثل K-Means لتجزئة العملاء، والانحدار اللوجستي للتنبؤ بترك الخدمة، والانحدار الخطي لتوقع المبيعات).',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Phase 4: Model Building Core Tasks:\n1. Partition Data: Split sanitized dataset into Training Set (~70-80%) and Test/Validation Set (~20-30%).\n2. Execute Models: Train candidate algorithms on the training data using statistical packages (R, Python, Spark MLlib).\n3. Hyperparameter Tuning: Adjust algorithm parameters to optimize accuracy, minimize error, and prevent overfitting.\n4. Model Evaluation: Score models against the unseen holdout test dataset using robust metrics (Accuracy, ROC/AUC, RMSE, WSS).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'المهام المحورية للمرحلة 4 (بناء النماذج):\n1. تقسيم البيانات: فصل البيانات المنقاة إلى مجموعة تدريب (~70-80%) ومجموعة اختبار وتحقق منعزلة (~20-30%).\n2. تدريب النماذج: تشغيل الخوارزميات على بيانات التدريب باستخدام المكتبات المتقدمة (R, Python, Spark MLlib).\n3. ضبط المعاملات (Hyperparameter Tuning): معايرة معلمات الخوارزمية لرفع الدقة وتقليل الخطأ وتجنب فرط التخصيص (Overfitting).\n4. تقييم النموذج: قياس أداء النموذج على بيانات الاختبار التي لم يرها مسبقاً بمقاييس دقيقة (مثل الدقة، منحنى ROC، ومتوسط مربعات الخطأ).',
              },
            ],
          },
          examNotes:
            'Exam Note: Remember the strict division: Variable and algorithm selection occur in Phase 3 (Model Planning), while executing and training the algorithms occurs in Phase 4 (Model Building).',
          examNotesAr:
            'ملاحظة امتحانية: ميز بدقة: اختيار المتغيرات والخوارزميات يتم في المرحلة 3 (تخطيط النماذج)، بينما التنفيذ الفعلي وتدريب الخوارزميات يتم في المرحلة 4 (بناء النماذج).',
        },
      ],
    },
    {
      id: 'bd-ch2-t4',
      title: 'Phase 5 & 6: Communicate Results & Operationalize',
      titleAr: 'المرحلتان 5 و 6: إيصال النتائج والتشغيل الفعلي للمشاريع',
      lessons: [
        {
          id: 'bd-ch2-l4',
          chapterId: 'bd-ch2',
          topicId: 'bd-ch2-t4',
          title: 'Phase 5 & 6: Deliverables & Running a Pilot',
          titleAr: 'المرحلة 5 (إيصال النتائج) والمرحلة 6 (التشغيل وتنفيذ المشاريع التجريبية)',
          estimatedMinutes: 20,
          sourceRef: { file: 'Module 2_DA Lifecycle.pptx', page: 'Slides 31-39', originalNumber: '2025 Q2.3' },
          objectives: [
            'Analyze Phase 5: Communicate Results and articulate the 4 core stakeholder deliverables.',
            'Evaluate project success or failure objectively against initial hypotheses.',
            'Explain Phase 6: Operationalize and describe enterprise deployment artifacts.',
            'Master the definition and core purpose of running a pilot in Phase 6.',
          ],
          objectivesAr: [
            'تحليل المرحلة 5 (إيصال النتائج) وصياغة المخرجات الأربعة المخصصة لأصحاب المصلحة.',
            'تقييم نجاح أو تعثر المشروع التحليلي بموضوعية استناداً للفرضيات الأولية.',
            'شرح المرحلة 6 (التشغيل - Operationalize) ومخرجات النشر البرمجي والتقني للمؤسسة.',
            'إتقان تعريف والهدف الجوهري من تشغيل مشروع تجريبي (Pilot) في المرحلة السادسة.',
          ],
          content: {
            enDefinition:
              'Phase 5 (Communicate Results) assesses whether the project succeeded or failed against the initial hypotheses and communicates findings to all stakeholder groups, while Phase 6 (Operationalize) transitions the analytical model into enterprise production, creating technical documentation, automated pipelines, and running a pilot to assess real-world business performance.',
            arExplanation:
              'تختص المرحلة 5 (إيصال النتائج - Communicate Results) بتقييم مدى تحقق الفرضيات الأولية وتوصيل النتائج لفئات أصحاب المصلحة، بينما تختص المرحلة 6 (التشغيل - Operationalize) بنقل النموذج التحليلي لبيئة الإنتاج المؤسسي الفعلية، وتوفير الوثائق التقنية، وتشغيل مشروع تجريبي مصغر (Pilot) لقياس العائد والأداء على أرض الواقع.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Phase 5: The 4 Core Stakeholder Deliverables:\n1. Executive Presentation for Project Sponsors: Focuses on the "big picture", ROI, operational impact, and strategic recommendations.\n2. Business Analyst Report: Detailed statistical dashboards, predictive KPIs, and process improvement implications.\n3. Data Engineer Pipeline Documentation: Architectural code, ETL/ELT pipelines, API endpoints, and data refresh schedules.\n4. Data Scientist Technical Appendix: Mathematical formulations, model assumptions, cross-validation metrics, and failure diagnostics.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'المرحلة 5: المخرجات الأربعة الأساسية لأصحاب المصلحة:\n1. عرض تنفيذي لرعاة المشروع (Project Sponsors): يركز على الصورة الكلية، والعائد على الاستثمار (ROI)، والتوصيات الاستراتيجية.\n2. تقرير محللي الأعمال: يوضح المؤشرات التنبؤية، والنتائج التشغيلية، ومقترحات تحسين العمليات.\n3. وثائق مهندسي البيانات: يشرح خطوط تدفق البيانات، وبرمجيات الربط (APIs)، وجداول التحديث الدوري.\n4. الملحق الفني لعلماء البيانات: يوثق الصيغ الرياضية، وافتراضات النموذج، ومقاييس التحقق، وتحليل الأخطاء.',
              },
              {
                type: 'callout',
                lang: 'en',
                content:
                  'Official Exam MCQ Focus (Midterm 2025 - Q2.3: "What is the purpose of running a pilot in the Operationalize phase?"):\n• Question Stem: What is the purpose of running a pilot in the Operationalize phase?\n• Options: A. To gather initial data for exploration | B. To identify errors in the raw data | C. To assess the model’s real-world performance and benefits | D. To create visualizations for stakeholders.\n• Correct Answer: C. To assess the model’s real-world performance and benefits.\n• Academic Explanation: A pilot exposes the analytical model to actual enterprise traffic at a controlled, small scale to validate financial benefits and operational robustness before full organization-wide deployment.',
              },
              {
                type: 'callout',
                lang: 'ar',
                content:
                  'سؤال الميدتيرم المباشر (ميدتيرم 2025 س2.3):\n• نص السؤال: ما هو الغرض من تشغيل مشروع تجريبي (Pilot) في مرحلة التشغيل (Operationalize)؟\n• الخيارات: أ. جمع البيانات الأولية | ب. تحديد الأخطاء في البيانات الخام | ج. تقييم أداء النموذج وفوائده على أرض الواقع | د. إنشاء رسومات بيانية.\n• الإجابة الصحيحة: ج. تقييم أداء النموذج وفوائده على أرض الواقع (To assess the model’s real-world performance and benefits).\n• التعليل الأكاديمي: يتيح المشروع التجريبي المصغر تعريض النموذج لظروف العمل الفعلية على نطاق محدود للتأكد من جدواه المالية ودقته التشغيلية قبل التعميم الشامل.',
              },
            ],
          },
          examNotes:
            'Exam Note: Midterm 2025 Q2.3 tested the purpose of running a pilot in Phase 6: always answer "To assess the model’s real-world performance and benefits".',
          examNotesAr:
            'ملاحظة امتحانية: سؤال الميدتيرم 2025 س2.3 اختبر مباشرة الغرض من الـ Pilot في المرحلة السادسة: الإجابة دائماً "تقييم أداء النموذج وفوائده الواقعية (Real-world performance and benefits)".',
        },
      ],
    },
  ],
};
