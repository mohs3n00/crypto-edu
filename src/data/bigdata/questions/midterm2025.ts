import type { Question } from '../../../types';

export const midterm2025Questions: Question[] = [
  // ==========================================================
  // Q1: Answer the following question (7 marks) - Written / Essay
  // ==========================================================
  {
    id: 'bd-mid25-w01',
    chapterId: 'bd-ch1',
    topicId: 'bd-ch1-t2',
    type: 'shortanswer',
    difficulty: 'medium',
    source: 'original-mid22', // Official Exam Source
    originalNumber: 'Q1.1',
    en: {
      stem: 'What is an analytic sandbox?',
      hint: 'Focus on isolation from production, data assets included, and who uses it.',
    },
    ar: {
      stem: 'ما هي الحاوية التحليلية (Analytic Sandbox)؟',
      hint: 'ركز على العزل عن بيئة الإنتاج، طبيعة البيانات المجمعة، والغرض التحليلي لعلماء البيانات.',
    },
    answer: {
      correct:
        'An analytic sandbox is an isolated, dedicated, scalable workspace that brings together data extracts from multiple enterprise sources and external raw data, enabling data scientists to explore, transform, and model data without impacting production operational environments.',
      explanation:
        'Key Points for Full Marks:\n1. Dedicated/isolated workspace specifically for data science teams.\n2. Contains multi-source data assets (structured, raw, semi-structured, and external feeds).\n3. High-performance compute capacity.\n4. Safe environment for exploratory modeling without impacting production transactional databases.',
      explanationAr:
        'عناصر الإجابة النموذجية للدرجة الكاملة:\n1. بيئة عمل معزولة ومخصصة حصرياً لفرق علم البيانات.\n2. تجمع أصول بيانات من مصادر متعددة داخل المؤسسة وخارجها (بيانات خام، مهيكلة، وغير مهيكلة).\n3. توفر قدرات حوسبة متقدمة.\n4. بيئة آمنة للتجريب والاستكشاف الخوارزمي دون التأثير على قواعد بيانات الإنتاج والتشغيل.',
    },
    explanation:
      'An analytic sandbox provides an unconstrained workspace for data scientists loaded with multi-source raw data and high compute, separated from production OLTP systems.',
    explanationAr:
      'الحاوية التحليلية توفر مساحة استكشافية غير مقيدة لعلماء البيانات تحوي بيانات خام من مصادر متعددة وحوسبة فائقة، معزولة تماماً عن أنظمة الإنتاج التشغيلية.',
    relatedLessonId: 'bd-ch1-l2',
  },
  {
    id: 'bd-mid25-w02',
    chapterId: 'bd-ch1',
    topicId: 'bd-ch1-t4',
    type: 'shortanswer',
    difficulty: 'medium',
    source: 'original-mid22',
    originalNumber: 'Q1.2',
    en: {
      stem: 'Explain the difference between Business Intelligence (BI) and Data Science.',
      hint: 'Compare time horizon, data formats, questions asked, and analytical complexity.',
    },
    ar: {
      stem: 'وضح الفارق بين ذكاء الأعمال (Business Intelligence) وعلم البيانات (Data Science).',
      hint: 'قارن من حيث الأفق الزمني، تنسيقات البيانات، طبيعة الأسئلة، والأدوات المستخدمة.',
    },
    answer: {
      correct:
        'BI is retrospective and descriptive, analyzing clean structured historical data to answer "What happened?" using dashboards and static reports. Data Science is forward-looking and predictive, leveraging raw multi-structured data to answer "Why did it happen? What will happen?" using machine learning and advanced statistical models.',
      explanation:
        'Comparison Matrix:\n• Time Horizon: BI looks backwards (historical/past); Data Science looks forward (future predictive).\n• Data Structure: BI uses clean tabular structured data (EDW); Data Science uses any format (unstructured, semi-structured, raw).\n• Questions: BI asks "What happened? When?"; Data Science asks "Why? What will happen? How to optimize?".\n• Methods: BI uses simple aggregations (SUM, AVG); Data Science uses machine learning algorithms (clustering, regression, neural networks).',
      explanationAr:
        'مصفوفة المقارنة للدرجة الكاملة:\n• الأفق الزمني: ذكاء الأعمال ينظر للماضي (استرجاعي/تاريخي)؛ علم البيانات ينظر للمستقبل (تنبؤي).\n• هيكل البيانات: ذكاء الأعمال يعتمد على بيانات مهيكلة وجداول منقاة؛ علم البيانات يستوعب كافة التنسيقات الخام.\n• الأسئلة: ذكاء الأعمال يسأل "ماذا حدث ومتى؟"؛ علم البيانات يسأل "لماذا حدث وماذا سيحدث لاحقاً؟".\n• الأساليب: ذكاء الأعمال يستخدم التجميع البسيط (SUM, AVG)؛ علم البيانات يستخدم خوارزميات تعلم الآلة والنمذجة الرياضية.',
    },
    explanation:
      'BI focuses on descriptive reporting of structured historical data, while Data Science focuses on predictive modeling and machine learning using multi-structured data.',
    explanationAr:
      'يركز ذكاء الأعمال على التقارير الوصفية للبيانات المهيكلة الماضية، بينما يركز علم البيانات على النمذجة التنبؤية والتعلم الآلي على البيانات المتنوعة.',
    relatedLessonId: 'bd-ch1-l4',
  },
  {
    id: 'bd-mid25-w03',
    chapterId: 'bd-ch1',
    topicId: 'bd-ch1-t3',
    type: 'shortanswer',
    difficulty: 'hard',
    source: 'original-mid22',
    originalNumber: 'Q1.3',
    en: {
      stem: 'Describe the challenges of the current analytical architecture for Data Scientists.',
      hint: 'Mention data accessibility, schema rigidity, IT request queues, and compute power limitations.',
    },
    ar: {
      stem: 'اشرح التحديات التي تفرضها المعمارية التحليلية التقليدية الحالية على علماء البيانات.',
      hint: 'اذكر صعوبة الوصول للبيانات الخام، صلابة المخطط المسبق، طوابير طلبات الـ IT، وقصور قدرات المعالجة.',
    },
    answer: {
      correct:
        'Current traditional analytical architectures present 4 major challenges: (1) High-value data is hard to reach because ETL discards raw/unstructured data; (2) Rigid schema-on-write constraints restrict exploratory modeling; (3) Heavy IT request queues cause weeks/months of delay; (4) Enterprise warehouses are optimized for SQL reporting, lacking compute capacity for iterative machine learning.',
      explanation:
        'Key Challenges for Full Marks:\n1. High-value raw and unstructured data is filtered out by batch ETL and never enters the EDW.\n2. Schema-on-write requires predefined tabular formats, blocking rapid exploration.\n3. IT request backlogs create massive delays when requesting new data variables.\n4. Inadequate compute capacity for training complex statistical and machine learning algorithms.',
      explanationAr:
        'التحديات الأربعة للدرجة الكاملة:\n1. صعوبة الوصول للبيانات الخام عالية القيمة نتيجة استبعاد خطوط ETL التقليدية لها قبل التخزين.\n2. قيود المخطط المسبق عند الكتابة (Schema-on-write) التي تفرض قوالب جدولية صارمة تعيق التجريب.\n3. طوابير وتأخيرات طلبات تقنية المعلومات (IT Queues) التي تستغرق أسابيع وأشهراً لإضافة حقول جديدة.\n4. عدم ملاءمة مستودعات البيانات التقليدية لتشغيل خوارزميات تعلم الآلة والحوسبة الإحصائية التكرارية.',
    },
    explanation:
      'Traditional EDW architectures filter out raw data, impose rigid schemas, create long IT queue delays, and lack scalable compute for machine learning.',
    explanationAr:
      'المعمارية التقليدية تستبعد البيانات غير المهيكلة، وتفرض مخططات صلبة، وتخلق طوابير انتظار طويلة للـ IT، وتعجز عن تلبية الحوسبة المتوازية لتعلم الآلة.',
    relatedLessonId: 'bd-ch1-l3',
  },
  {
    id: 'bd-mid25-w04',
    chapterId: 'bd-ch4',
    topicId: 'bd-ch4-t3',
    type: 'shortanswer',
    difficulty: 'hard',
    source: 'original-mid22',
    originalNumber: 'Q1.4',
    en: {
      stem: 'Explain the difference between EDA, data preprocessing, and feature engineering.',
      hint: 'Define the purpose, nature (observational vs corrective vs creative), and operations of each.',
    },
    ar: {
      stem: 'وضح الفارق الجوهري بين استكشاف البيانات (EDA)، المعالجة الأولية (Data Preprocessing)، وهندسة السمات (Feature Engineering).',
      hint: 'حدد الهدف وطبيعة العمل والعمليات المنفذة في كل مرحلة من المراحل الثلاث.',
    },
    answer: {
      correct:
        'EDA is diagnostic visual/statistical inspection to understand distributions, anomalies, and correlations without altering data. Data Preprocessing is corrective cleaning, imputation, and normalization to transform raw dirty data into usable input. Feature Engineering is the creative creation of new predictive attributes from existing data to enhance model performance.',
      explanation:
        'Three-Way Distinction:\n• Exploratory Data Analysis (EDA): Observational & diagnostic. Visualizes distributions, checks assumptions, detects outliers (histograms, scatterplots, summary stats). Does not modify data.\n• Data Preprocessing: Corrective & restorative. Handles missing values, removes noise, resolves inconsistencies, and normalizes scales (Min-Max, Z-score).\n• Feature Engineering: Creative & model-centric. Generates new explanatory variables from existing attributes (ratios, interaction terms, binning, one-hot encoding) to maximize predictive accuracy.',
      explanationAr:
        'المقارنة الثلاثية للدرجة الكاملة:\n• استكشاف البيانات (EDA): تشخيصي وملاحظاتي. يفحص التوزيعات بصرياً ويكتشف الشوائب والارتباطات دون تعديل مسار البيانات.\n• معالجة البيانات الأولية (Data Preprocessing): علاجي وتصحيحي. ينظف البيانات، ويعوض القيم المفقودة، ويزيل التناقضات، ويطبع المقاييس (Min-Max, Z-score).\n• هندسة السمات (Feature Engineering): إبداعي موجه للنموذج. يبتكر سمات ومتغيرات تنبؤية جديدة مشتقة من البيانات (مثل النسب، الترميز الأحادي، وتجميع الفئات) لرفع دقة النموذج.',
    },
    explanation:
      'EDA inspects data properties; Preprocessing cleans and normalizes data; Feature Engineering creates new predictive features to boost model performance.',
    explanationAr:
      'الاستكشاف (EDA) يفحص خصائص البيانات؛ المعالجة الأولية تنظف وتطبع القيم؛ وهندسة السمات تبتكر متغيرات جديدة لرفع دقة النموذج.',
    relatedLessonId: 'bd-ch4-l4',
  },

  // ==========================================================
  // Q2: Choose the correct answer (8 marks) - MCQs
  // ==========================================================
  {
    id: 'bd-mid25-mcq01',
    chapterId: 'bd-ch1',
    topicId: 'bd-ch1-t4',
    type: 'mcq',
    difficulty: 'easy',
    source: 'original-mid22',
    originalNumber: 'Q2.1',
    en: {
      stem: 'Which of the following is an example of descriptive analytics?',
      options: [
        'A company uses AI to suggest products to customers.',
        'A retailer analyzes sales reports from the last quarter.',
        'A bank forecasts next month’s loan approvals.',
        'A logistic firm optimizes its delivery routes.',
      ],
      hint: 'Descriptive analytics looks backward at historical data to answer "What happened?".',
    },
    ar: {
      stem: 'أي مما يلي يُعد مثالاً على التحليلات الوصفية (Descriptive Analytics)؟',
      options: [
        'شركة تستخدم الذكاء الاصطناعي لاقتراح منتجات للعملاء.',
        'متجر تجزئة يحلل تقارير المبيعات للربع الأخير من العام.',
        'بنك يتنبأ بحجم الموافقات على القروض للشهر القادم.',
        'شركة لوجستية تقوم بتحسين مسارات التوصيل الخاصة بها لحظياً.',
      ],
      hint: 'التحليلات الوصفية تنظر للماضي لتجيب عن سؤال: "ماذا حدث؟".',
    },
    correctAnswer: 1, // Option B
    answer: {
      correct: 'A retailer analyzes sales reports from the last quarter.',
      explanation:
        'Analyzing past sales reports is descriptive ("What happened?"). AI product suggestions is predictive/recommender; forecasting loans is predictive; optimizing delivery routes is prescriptive.',
      explanationAr:
        'تحليل تقارير المبيعات للربع الماضي يصف ما حدث تاريخياً فهو تحليل وصفي (Descriptive). اقتراح المنتجات والتنبؤ بالقروض هما تحليلات تنبؤية (Predictive)، وتحسين المسارات هو تحليل توجيهي (Prescriptive).',
    },
    explanation:
      'Descriptive analytics describes past performance from historical data, such as reviewing last quarter’s sales reports.',
    explanationAr:
      'تصف التحليلات الوصفية الأداء التاريخي السابق، مثل مراجعة تقارير مبيعات الربع الماضي.',
    relatedLessonId: 'bd-ch1-l4',
  },
  {
    id: 'bd-mid25-mcq02',
    chapterId: 'bd-ch2',
    topicId: 'bd-ch2-t1',
    type: 'mcq',
    difficulty: 'easy',
    source: 'original-mid22',
    originalNumber: 'Q2.2',
    en: {
      stem: 'Identify key stakeholders and their interests in the project belongs to which phase?',
      options: [
        'Data preparation',
        'Discovery',
        'Operationalization',
        'Model planning',
      ],
      hint: 'This activity is executed at the very start of the lifecycle when framing the business problem.',
    },
    ar: {
      stem: 'تحديد أصحاب المصلحة الرئيسيين واهتماماتهم في المشروع يتبع لأي مرحلة؟',
      options: [
        'إعداد البيانات (Data preparation)',
        'الاستكشاف (Discovery)',
        'التشغيل (Operationalization)',
        'تخطيط النموذج (Model planning)',
      ],
      hint: 'يتم هذا النشاط في بداية دورة الحياة أثناء تأطير المشكلة ودراسة مجال العمل.',
    },
    correctAnswer: 1, // Option B
    answer: {
      correct: 'Discovery',
      explanation:
        'Phase 1: Discovery involves learning the business domain, assessing resources, framing the problem, and identifying key stakeholders and their interests.',
      explanationAr:
        'تتضمن المرحلة الأولى (الاستكشاف Discovery): دراسة مجال العمل، وتقييم الموارد، وتأطير المشكلة، وتحديد أصحاب المصلحة المعنيين واهتماماتهم.',
    },
    explanation:
      'Identifying stakeholders and their interests is a core milestone of Phase 1: Discovery in the Data Analytics Lifecycle.',
    explanationAr:
      'تحديد أصحاب المصلحة ودوافعهم هو أحد الأنشطة المحورية للمرحلة الأولى: الاستكشاف (Discovery).',
    relatedLessonId: 'bd-ch2-l1',
  },
  {
    id: 'bd-mid25-mcq03',
    chapterId: 'bd-ch2',
    topicId: 'bd-ch2-t4',
    type: 'mcq',
    difficulty: 'medium',
    source: 'original-mid22',
    originalNumber: 'Q2.3',
    en: {
      stem: 'What is the purpose of running a pilot in the Operationalize phase?',
      options: [
        'To gather initial data for exploration',
        'To identify errors in the raw data',
        'To assess the model’s real-world performance and benefits',
        'To create visualizations for stakeholders',
      ],
      hint: 'A pilot tests the model in a live environment at small scale before enterprise-wide rollout.',
    },
    ar: {
      stem: 'ما هو الغرض من تشغيل مشروع تجريبي (Pilot) في مرحلة التشغيل (Operationalize)؟',
      options: [
        'جمع البيانات الأولية للاستكشاف',
        'تحديد الأخطاء في البيانات الخام',
        'تقييم أداء النموذج وفوائده على أرض الواقع',
        'إنشاء رسومات بيانية لأصحاب المصلحة',
      ],
      hint: 'يختبر المشروع التجريبي أداء النموذج في بيئة العمل الفعلية على نطاق محدود قبل التعميم الشامل.',
    },
    correctAnswer: 2, // Option C
    answer: {
      correct: 'To assess the model’s real-world performance and benefits',
      explanation:
        'In Phase 6 (Operationalize), running a small-scale pilot project assesses the model’s actual business impact, financial ROI, and technical reliability under real operational conditions before full deployment.',
      explanationAr:
        'في المرحلة 6 (التشغيل Operationalize)، يساعد تشغيل مشروع تجريبي مصغر (Pilot) على قياس الأداء الحقيقي للنموذج والتأكد من جدواه وعوائده المالية في بيئة العمل الواقعية قبل التعميم الشامل.',
    },
    explanation:
      'Running a pilot in Phase 6 validates model performance and business benefits in a live operational setting.',
    explanationAr:
      'تشغيل مشروع تجريبي (Pilot) في المرحلة السادسة يهدف لتقييم الأداء والفوائد الواقعية للنموذج في بيئة التشغيل الفعلية.',
    relatedLessonId: 'bd-ch2-l4',
  },
  {
    id: 'bd-mid25-mcq04',
    chapterId: 'bd-ch3',
    topicId: 'bd-ch3-t3',
    type: 'mcq',
    difficulty: 'medium',
    source: 'original-mid22',
    originalNumber: 'Q2.4',
    en: {
      stem: 'Which of the following is an example of validation during data cleansing?',
      options: [
        'Ensuring all names are in uppercase',
        'Detecting if a zip code contains letters',
        'Converting dates to a consistent format',
        'Replacing null values with the mean',
      ],
      hint: 'Validation tests whether data values conform to logical or syntax rules.',
    },
    ar: {
      stem: 'أي مما يلي يُعد مثالاً على التحقق (Validation) أثناء تنظيف البيانات؟',
      options: [
        'التأكد من أن جميع الأسماء مكتوبة بأحرف كبيرة',
        'اكتشاف ما إذا كان الرمز البريدي يحوي أحرفاً أبجدية',
        'تحويل التواريخ إلى صيغة موحدة ومتسقة',
        'استبدال القيم الفارغة بالمتوسط الحسابي',
      ],
      hint: 'يختبر التحقق مطابقة البيانات للقواعد المنطقية وشروط النطاق المحددة للحقل.',
    },
    correctAnswer: 1, // Option B
    answer: {
      correct: 'Detecting if a zip code contains letters',
      explanation:
        'Validation checks domain and syntax constraints (a zip code can only contain digits). Converting case or date formats is Standardization, and replacing nulls is Imputation.',
      explanationAr:
        'التحقق (Validation) يفحص قيود النطاق والبنية المنطقية للحقل (الرمز البريدي رقمي ولا يجوز أن يحوي حروفاً). أما توحيد حالة الأحرف أو صيغ التواريخ فهو توحيد قياسي (Standardization)، واستبدال القيم الفارغة هو تعويض (Imputation).',
    },
    explanation:
      'Validation verifies that data conforms to allowable syntax and domain rules (e.g., zip codes must only be digits).',
    explanationAr:
      'التحقق يتأكد من التزام البيانات بالقواعد المنطقية المسموحة (مثل خلو الرمز البريدي من الحروف).',
    relatedLessonId: 'bd-ch3-l3',
  },
  {
    id: 'bd-mid25-mcq05',
    chapterId: 'bd-ch3',
    topicId: 'bd-ch3-t4',
    type: 'mcq',
    difficulty: 'medium',
    source: 'original-mid22',
    originalNumber: 'Q2.5',
    en: {
      stem: 'You are integrating data from two different sources. Source A contains an attribute "Student_ID," and Source B contains "Roll_No." Upon analysis, you find that these attributes represent the same entity. What issue are you addressing in this scenario?',
      options: [
        'Data Duplication',
        'Entity Identification Problem',
        'Data Value Conflicts',
        'Correlation Analysis',
      ],
      hint: 'Different attribute names representing the same real-world entity across disparate schemas.',
    },
    ar: {
      stem: 'تقوم بدمج بيانات من مصدرين مختلفين؛ يحوي المصدر (أ) سمة باسم "Student_ID" بينما يحوي المصدر (ب) سمة باسم "Roll_No". وبالتحليل وجدت أن السمتين تمثلان نفس الكيان. ما المشكلة التي تعالجها في هذا السيناريو؟',
      options: [
        'ازدواجية البيانات (Data Duplication)',
        'مشكلة تحديد الكيان (Entity Identification Problem)',
        'تضارب قيم البيانات (Data Value Conflicts)',
        'تحليل الارتباط (Correlation Analysis)',
      ],
      hint: 'اختلاف أسماء الحقول القادمة من مصادر متباينة رغم أنها تمثل نفس الكيان الواقعي.',
    },
    correctAnswer: 1, // Option B
    answer: {
      correct: 'Entity Identification Problem',
      explanation:
        'The Entity Identification Problem occurs when attributes from different data sources have different column names (Student_ID vs Roll_No) but represent the exact same real-world entity.',
      explanationAr:
        'تحدث مشكلة تحديد الكيان (Entity Identification Problem) عندما تختلف مسميات الحقول في المصادر المختلفة (مثل Student_ID و Roll_No) رغم أنها تعبر عن الكيان الحقيقي ذاته.',
    },
    explanation:
      'Matching disparate attribute names that refer to the same real-world entity is the Entity Identification Problem.',
    explanationAr:
      'مطابقة أسماء الحقول المختلفة التي تشير لنفس الكيان الواقعي هي مشكلة تحديد الكيان.',
    relatedLessonId: 'bd-ch3-l4',
  },
  {
    id: 'bd-mid25-mcq06',
    chapterId: 'bd-ch5',
    topicId: 'bd-ch5-t1',
    type: 'mcq',
    difficulty: 'hard',
    source: 'original-mid22',
    originalNumber: 'Q2.6',
    en: {
      stem: 'Assume you want to cluster 7 observations into 3 clusters using the K-Means clustering algorithm. After the first iteration, clusters C1, C2, C3 have following observations:\nC1: {(2,2), (4,4), (6,6)}\nC2: {(0,4), (4,0)}\nC3: {(5,5), (9,9)}\nWhat will be the cluster centroids if you want to proceed with the second iteration?',
      options: [
        'C1:(4,4), C2:(2,2), C3:(7,7)',
        'C1:(6,6), C2:(4,4), C3:(9,9)',
        'C1:(2,2), C2:(0,0), C3:(5,5)',
        'None of these',
      ],
      hint: 'Compute arithmetic mean: C_k = (sum(x)/N, sum(y)/N) for each cluster.',
    },
    ar: {
      stem: 'افترض أنك تريد تجميع 7 مشاهدات في 3 مجموعات باستخدام خوارزمية K-Means. بعد التكرار الأول، تشكلت المجموعات C1 و C2 و C3 على النحو التالي:\nC1: {(2,2), (4,4), (6,6)}\nC2: {(0,4), (4,0)}\nC3: {(5,5), (9,9)}\nما هي إحداثيات مراكز المجموعات لمتابعة التكرار الثاني؟',
      options: [
        'C1:(4,4), C2:(2,2), C3:(7,7)',
        'C1:(6,6), C2:(4,4), C3:(9,9)',
        'C1:(2,2), C2:(0,0), C3:(5,5)',
        'لا شيء مما سبق',
      ],
      hint: 'احسب المتوسط الحسابي لإحداثيات س وإحداثيات ص لكل مجموعة: (مجموع س / العدد، مجموع ص / العدد).',
    },
    correctAnswer: 0, // Option A
    answer: {
      correct: 'C1:(4,4), C2:(2,2), C3:(7,7)',
      explanation:
        'Calculation:\n• C1: Mean x = (2+4+6)/3 = 12/3 = 4; Mean y = (2+4+6)/3 = 12/3 = 4 -> C1 = (4, 4)\n• C2: Mean x = (0+4)/2 = 4/2 = 2; Mean y = (4+0)/2 = 4/2 = 2 -> C2 = (2, 2)\n• C3: Mean x = (5+9)/2 = 14/2 = 7; Mean y = (5+9)/2 = 14/2 = 7 -> C3 = (7, 7)\nThus: C1:(4,4), C2:(2,2), C3:(7,7).',
      explanationAr:
        'خطوات الحل الحسابي:\n• مركز C1: متوسط س = (2+4+6)/3 = 4؛ متوسط ص = (2+4+6)/3 = 4 -> المركز هو (4, 4)\n• مركز C2: متوسط س = (0+4)/2 = 2؛ متوسط ص = (4+0)/2 = 2 -> المركز هو (2, 2)\n• مركز C3: متوسط س = (5+9)/2 = 7؛ متوسط ص = (5+9)/2 = 7 -> المركز هو (7, 7)\nإذن المراكز هي: C1:(4,4), C2:(2,2), C3:(7,7).',
    },
    explanation:
      'Centroids are computed as the mean coordinate of points: C1=(4,4), C2=(2,2), C3=(7,7).',
    explanationAr:
      'تُحسب المراكز كمتوسط إحداثيات النقاط: C1=(4,4), C2=(2,2), C3=(7,7).',
    relatedLessonId: 'bd-ch5-l2',
  },
  {
    id: 'bd-mid25-mcq07',
    chapterId: 'bd-ch5',
    topicId: 'bd-ch5-t1',
    type: 'mcq',
    difficulty: 'medium',
    source: 'original-mid22',
    originalNumber: 'Q2.7',
    en: {
      stem: 'Feature scaling is an important step before applying the K-Mean algorithm. What is the reason behind this?',
      options: [
        'In distance calculation, it will give the same weights for all features',
        'You always get the same clusters. If you use or don’t use feature scaling',
        'In Manhattan distance, it is an important step, but in Euclidean distance, it is not',
        'None of these',
      ],
      hint: 'Features with larger absolute ranges will dominate Euclidean distance calculations.',
    },
    ar: {
      stem: 'يُعد القياس الموحد للسمات (Feature Scaling) خطوة بالغة الأهمية قبل تطبيق خوارزمية K-Means. ما السبب وراء ذلك؟',
      options: [
        'في حساب المسافات، يعطي نفس الوزن النسبي لكافة المتغيرات',
        'تحصل دائماً على نفس المجموعات سواء استخدمت قياس السمات أم لم تستخدمه',
        'يُعد خطوة هامة في مسافة مانهاتن فقط، لكنه غير مهم في المسافة الإقليدية',
        'لا شيء مما سبق',
      ],
      hint: 'السمات ذات النطاقات العددية الكبيرة تطغى على حسابات المسافة الإقليدية إذا لم تُطبع.',
    },
    correctAnswer: 0, // Option A
    answer: {
      correct: 'In distance calculation, it will give the same weights for all features',
      explanation:
        'Because K-Means uses Euclidean distance, unscaled features with large numerical magnitudes (e.g. Salary in thousands) will mathematically dominate features with smaller scales (e.g. Age 20-70). Feature scaling standardizes variance so all features carry proportional weight in distance calculations.',
      explanationAr:
        'نظراً لأن K-Means تعتمد على المسافة الإقليدية، فإن السمات ذات القيم العددية الكبيرة (مثل الراتب بالآلاف) تطغى تماماً على السمات ذات النطاق الأصغر (مثل العمر 20-70). القياس الموحد يوحد التباين ليعطي كل متغير وزناً عادلاً ومتكافئاً.',
    },
    explanation:
      'Feature scaling ensures all attributes contribute equally to the Euclidean distance metric.',
    explanationAr:
      'القياس الموحد يضمن مساهمة متكافئة لجميع السمات في حساب المسافة الإقليدية.',
    relatedLessonId: 'bd-ch5-l2',
  },
  {
    id: 'bd-mid25-mcq08',
    chapterId: 'bd-ch5',
    topicId: 'bd-ch5-t1',
    type: 'mcq',
    difficulty: 'easy',
    source: 'original-mid22',
    originalNumber: 'Q2.8',
    en: {
      stem: 'Which of the following is an appropriate use case for K-Means clustering?',
      options: [
        'Predicting stock prices based on historical data',
        'Grouping customers based on purchase behavior',
        'Performing text classification with labeled data',
        'Building a recommendation system',
      ],
      hint: 'K-Means is an unsupervised method for discovering natural groups in unlabeled data.',
    },
    ar: {
      stem: 'أي مما يلي يُعد مجال تطبيق ملائم لخوارزمية K-Means؟',
      options: [
        'التنبؤ بأسعار الأسهم استناداً للبيانات التاريخية',
        'تجميع العملاء استناداً لسلوكيات الشراء (Customer Segmentation)',
        'تصنيف النصوص باستخدام بيانات معلمة مسبقاً (Labeled Data)',
        'بناء نظام توصية للمستخدمين',
      ],
      hint: 'خوارزمية K-Means هي أسلوب غير خاضع للإشراف لاكتشاف المجموعات الطبيعية في البيانات غير المصنفة.',
    },
    correctAnswer: 1, // Option B
    answer: {
      correct: 'Grouping customers based on purchase behavior',
      explanation:
        'Customer segmentation (grouping customers by purchasing habits) is the canonical use case for unsupervised clustering. Stock price prediction is regression, labeled text classification is supervised learning, and recommender systems use collaborative filtering.',
      explanationAr:
        'تجزئة العملاء (تجميعهم حسب عادات الشراء) هي التطبيق النموذجي الكلاسيكي للتجميع غير الخاضع للإشراف. التنبؤ بالأسهم انحدار، وتصنيف النصوص المعلمة تصنيف خاضع للإشراف، وأنظمة التوصية تعتمد على الفلترة التشاركية.',
    },
    explanation:
      'Grouping customers by purchase behavior is the primary exploratory use case for K-Means clustering.',
    explanationAr:
      'تجزئة العملاء حسب سلوك الشراء هو التطبيق الاستكشافي الأبرز لخوارزمية K-Means.',
    relatedLessonId: 'bd-ch5-l2',
  },
];

