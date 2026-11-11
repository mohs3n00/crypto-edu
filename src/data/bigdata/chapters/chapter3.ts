import type { Chapter } from '../../../types';

export const bigDataChapter3: Chapter = {
  id: 'bd-ch3',
  number: 3,
  title: 'Data Preprocessing: Cleansing, Integration & Normalization',
  titleAr: 'معالجة البيانات الأولية: التنظيف، التكامل، والتطبيع',
  description:
    'Core data conditioning methods: handling missing values (default, mean, median, mode, random), outlier detection using Inter-Quartile Range (IQR, Q1, Q2, Q3, outlier boundaries), smoothing noisy data (validation rules, standardization, inconsistency resolution), data integration challenges (Entity Identification Problem, Redundancy via Pearson correlation, Data Value Conflicts, Duplication), and mathematical normalization techniques (Min-Max, Z-Score, Decimal Scaling) with complete worked problems.',
  descriptionAr:
    'الأساليب المنهجية لتكييف وتنقية البيانات: معالجة القيم المفقودة (القيم الافتراضية، المتوسط الحسابي، الوسيط، المنوال، والقيم العشوائية)، كشف القيم الشاذة والمتطرفة باستخدام المدى الربيعي (IQR وحساب Q1 و Q2 و Q3 وحدود الاستبعاد)، تنعيم البيانات المشوشة وقواعد التحقق (Validation) وحل التناقضات، تحديات تكامل البيانات (مشكلة تحديد الكيان Entity Identification، التكرار الفائض عبر ارتباط بيرسون، وتضارب القيم)، وطرق التطبيع الرياضي الكاملة (Min-Max و Z-Score والتقسيم العشري Decimal Scaling) مع مسائل محلولة خطوة بخطوة.',
  topics: [
    {
      id: 'bd-ch3-t1',
      title: 'Data Cleansing & Missing Value Imputation',
      titleAr: 'تنظيف البيانات ومعالجة القيم المفقودة',
      lessons: [
        {
          id: 'bd-ch3-l1',
          chapterId: 'bd-ch3',
          topicId: 'bd-ch3-t1',
          title: 'Data Cleansing & Missing Value Imputation',
          titleAr: 'تنظيف البيانات واستراتيجيات تعويض القيم المفقودة',
          estimatedMinutes: 20,
          sourceRef: { file: 'data cleansing P01.pdf', page: 'Pages 2-23' },
          objectives: [
            'Identify the 4 primary reasons data requires cleansing: Incomplete, Noisy, Outliers, Inconsistent.',
            'Explain the causes of incomplete/missing data.',
            'Apply the 4 methods to handle missing values: Default, Mean/Median/Mode, Random, and Record Elimination.',
            'Determine when to use Mean (symmetric) vs Median (skewed) vs Mode (categorical).',
          ],
          objectivesAr: [
            'تحديد الأسباب الأربعة الرئيسية لتنظيف البيانات: النقص، التشويش، القيم الشاذة، والتناقض.',
            'شرح الأسباب التقنية والبشرية لتولد القيم المفقودة (Missing Data).',
            'تطبيق الاستراتيجيات الأربع للتعامل مع القيم المفقودة: القيمة الافتراضية، مقاييس النزعة المركزية، القيم العشوائية، وحذف السجل.',
            'تحديد متى يُستخدم المتوسط (للتوزيع المتماثل) مقابل الوسيط (للتوزيع الملتوي) والمنوال (للمتغيرات الفئوية).',
          ],
          content: {
            enDefinition:
              'Data Cleansing is the systematic process of identifying, correcting, or eliminating incomplete, incorrect, inaccurate, or irrelevant parts of data to ensure the dataset meets high quality and integrity standards required for statistical modeling.',
            arExplanation:
              'تنظيف البيانات (Data Cleansing) هو العملية المنهجية لفحص واكتشاف وتصحيح أو إزالة السجلات غير المكتملة، أو المشوشة، أو غير الدقيقة، أو المتناقضة، لضمان استيفاء البيانات لمعايير الجودة العالية المطلوبة للنمذجة الإحصائية وتعلم الآلة.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The 4 Main Data Quality Issues in Raw Data:\n1. Incomplete Data: Missing attribute values or lack of recorded observations (e.g., equipment sensor malfunction, user refusal to disclose income, data entry misunderstanding).\n2. Noisy Data: Erroneous, distorted, or corrupted values (e.g., faulty instruments, typos, data entry format bugs).\n3. Outliers: Extreme data points that deviate substantially from the expected distribution of the overall dataset.\n4. Inconsistent Data: Conflicting discrepancies between related fields (e.g., Area Code does not match City, Total_Price != Quantity * Unit_Price).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'مشكلات جودة البيانات الأربع الأساسية:\n1. البيانات غير المكتملة (Incomplete): غياب قيم لحقول معينة أو إغفال تسجيل السجلات (بسبب تعطل المجسات، أو امتناع المستخدم عن إدخال الراتب، أو سوء فهم مدخل البيانات).\n2. البيانات المشوشة (Noisy): قيم غير صحيحة أو محرفة ناتجة عن أخطاء إدخال بشرية أو أجهزة قياس معطوبة.\n3. القيم الشاذة (Outliers): نقاط بيانات متطرفة تشذ جذرياً عن التوزيع الطبيعي المتوقع لبقية العينة.\n4. البيانات المتناقضة (Inconsistent): وجود تضارب بين الحقول المرتبطة (مثل رمز الهاتف لا يطابق اسم المدينة، أو إجمالي السعر لا يساوي الكمية × سعر الوحدة).',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Strategies for Handling Missing Values:\n• Method 1: Replace with Default Value (e.g., replace missing marital status with "Single" or missing credit score with baseline 0).\n• Method 2: Mean Imputation (for symmetric numerical fields; Mean = sum of values / n).\n• Method 3: Median Imputation (for skewed numerical fields with extreme values; Median is the middle ordered value).\n• Method 4: Mode Imputation (for categorical/discrete fields; Mode is the most frequently occurring category).\n• Method 5: Random Value Imputation (replace missing values with random selections drawn from the empirical distribution).\n• Method 6: Record Deletion (ignore the tuple; acceptable only when the dataset is massive and missingness is completely random).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'استراتيجيات معالجة القيم المفقودة:\n• الطريقة 1: التعويض بقيمة افتراضية (Default Value) ثابتة محددة مسبقاً وفق سياسة العمل.\n• الطريقة 2: التعويض بالمتوسط الحسابي (Mean) للحقول الرقمية ذات التوزيع الطبيعي المتماثل.\n• الطريقة 3: التعويض بالوسيط الحسابي (Median) للحقول الرقمية الملتوية التي تحوي قيماً متطرفة.\n• الطريقة 4: التعويض بالمنوال (Mode) للحقول الفئوية/النصية، وهو الفئة الأكثر تكراراً.\n• الطريقة 5: التعويض العشوائي (Random Values) بأخذ قيم عشوائية من نفس التوزيع الإحصائي للحقل.\n• الطريقة 6: حذف السجل بالكامل (Deletion)، وتستخدم بحذر وفقط عندما تكون العينة ضخمة ونسبة الفقد ضئيلة جداً وعشوائية.',
              },
            ],
          },
          examNotes:
            'Exam Note: Remember the distinction between Mean, Median, and Mode: Use Mean for symmetric numbers, Median when outliers skew the mean, and Mode for categorical fields.',
          examNotesAr:
            'ملاحظة امتحانية: تذكر معيار الاختيار: استخدم المتوسط (Mean) للأرقام المتماثلة، والوسيط (Median) إذا وجدت قيم شاذة تؤثر على المتوسط، والمنوال (Mode) للحقول الفئوية والنصية.',
        },
      ],
    },
    {
      id: 'bd-ch3-t2',
      title: 'Outlier Detection via Inter-Quartile Range (IQR)',
      titleAr: 'كشف القيم الشاذة باستخدام المدى الربيعي (IQR)',
      lessons: [
        {
          id: 'bd-ch3-l2',
          chapterId: 'bd-ch3',
          topicId: 'bd-ch3-t2',
          title: 'Outlier Detection via Inter-Quartile Range (IQR)',
          titleAr: 'كشف القيم الشاذة عبر المدى الربيعي (IQR) والمسائل الحسابية',
          estimatedMinutes: 25,
          sourceRef: { file: 'data cleansing P01.pdf', page: 'Pages 24-33' },
          objectives: [
            'Define Quartiles: First Quartile (Q1), Median (Q2), and Third Quartile (Q3).',
            'Calculate the Inter-Quartile Range: IQR = Q3 - Q1.',
            'Formulate the mathematical outlier detection fences: [Q1 - 1.5*IQR, Q3 + 1.5*IQR].',
            'Execute step-by-step numerical worked examples to identify outliers.',
          ],
          objectivesAr: [
            'تعريف الربيعيات الإحصائية: الربيع الأول (Q1)، الوسيط (Q2)، والربيع الثالث (Q3).',
            'حساب المدى الربيعي: IQR = Q3 - Q1.',
            'تطبيق حدود استبعاد القيم الشاذة رياضياً: [Q1 - 1.5*IQR, Q3 + 1.5*IQR].',
            'حل المسائل الحسابية خطوة بخطوة لاستخراج القيم الشاذة من مجموعات البيانات.',
          ],
          content: {
            enDefinition:
              'The Inter-Quartile Range (IQR) method is a robust statistical technique for detecting outliers that is resistant to extreme values. A data point x is classified as an outlier if x < Q1 - 1.5 * IQR or x > Q3 + 1.5 * IQR.',
            arExplanation:
              'طريقة المدى الربيعي (IQR) هي أسلوب إحصائي قوي ومرن لكشف القيم الشاذة لا يتأثر بالقيم المتطرفة. تُصنَّف نقطة البيانات بأنها قيمة شاذة (Outlier) إذا كانت قيمتها أصغر من الحد الأدنى (Q1 - 1.5 * IQR) أو أكبر من الحد الأعلى (Q3 + 1.5 * IQR).',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Mathematical Definitions:\n• First Quartile (Q1): The 25th percentile; 25% of data items lie below Q1.\n• Second Quartile (Q2): The 50th percentile; identical to the Median.\n• Third Quartile (Q3): The 75th percentile; 75% of data items lie below Q3.\n• Inter-Quartile Range: IQR = Q3 - Q1.\n• Lower Outlier Boundary (Inner Fence): Lower Bound = Q1 - (1.5 * IQR).\n• Upper Outlier Boundary (Inner Fence): Upper Bound = Q3 + (1.5 * IQR).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'التعريفات والقوانين الرياضية:\n• الربيع الأول (Q1): المئين الـ 25؛ يقع 25% من البيانات تحته.\n• الربيع الثاني (Q2): المئين الـ 50؛ وهو الوسيط (Median) للبيانات المرتبة.\n• الربيع الثالث (Q3): المئين الـ 75؛ يقع 75% من البيانات تحته.\n• المدى الربيعي (IQR): IQR = Q3 - Q1.\n• الحد الأدنى للقيم الشاذة: Lower Bound = Q1 - (1.5 * IQR).\n• الحد الأعلى للقيم الشاذة: Upper Bound = Q3 + (1.5 * IQR).',
              },
            ],
          },
          formulas: [
            {
              name: 'Inter-Quartile Range (IQR)',
              latex: '\\text{IQR} = Q_3 - Q_1',
              description: 'Spread of the middle 50% of ordered observations.',
              descriptionAr: 'الفارق الإحصائي بين الربيع الثالث والربيع الأول للبيانات المرتبة.',
            },
            {
              name: 'Outlier Lower Boundary',
              latex: '\\text{Lower Bound} = Q_1 - 1.5 \\times \\text{IQR}',
              description: 'Values strictly less than this threshold are low outliers.',
              descriptionAr: 'أي قيمة أقل قطباً من هذا الحد تُعتبر قيمة شاذة منخفضة.',
            },
            {
              name: 'Outlier Upper Boundary',
              latex: '\\text{Upper Bound} = Q_3 + 1.5 \\times \\text{IQR}',
              description: 'Values strictly greater than this threshold are high outliers.',
              descriptionAr: 'أي قيمة أكبر قطباً من هذا الحد تُعتبر قيمة شاذة مرتفعة.',
            },
          ],
          workedExamples: [
            {
              title: 'Official Lecture Example 1: Odd-Length Dataset (N = 11)',
              titleAr: 'مثال المحاضرة المحلول رقم 1: عينة فردية الطول (N = 11)',
              problemText:
                'Given the dataset: 6, 47, 49, 15, 42, 41, 7, 39, 43, 40, 36. Compute Q1, Q2, Q3, IQR, and find all outliers.',
              problemTextAr:
                'معطى مجموعة البيانات التالية: 6, 47, 49, 15, 42, 41, 7, 39, 43, 40, 36. احسب الربيعيات Q1 و Q2 و Q3 والمدى IQR وحدد القيم الشاذة إن وجدت.',
              steps: [
                {
                  stepNumber: 1,
                  action: 'Order the dataset in ascending order',
                  actionAr: 'ترتيب مجموعة البيانات تصاعدياً',
                  math: '\\text{Ordered: } 6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49 \\quad (N = 11)',
                  explanation: 'Sorting is required before computing percentiles.',
                  explanationAr: 'الترتيب التصاعدي خطوة إلزامية لحساب الوسيط والربيعيات.',
                },
                {
                  stepNumber: 2,
                  action: 'Find Q2 (Median)',
                  actionAr: 'حساب الربيع الثاني Q2 (الوسيط)',
                  math: 'Q_2 = \\text{Median} = \\text{Value at position } \\frac{11+1}{2} = 6^{\\text{th}} \\text{ item} = 40',
                  explanation: 'The middle item separates the lower and upper halves.',
                  explanationAr: 'العنصر السادس هو القيمة الوسطى تماماً ويساوي 40.',
                },
                {
                  stepNumber: 3,
                  action: 'Compute Q1 (Median of lower half) and Q3 (Median of upper half)',
                  actionAr: 'حساب Q1 (وسيط النصف الأدنى) و Q3 (وسيط النصف الأعلى)',
                  math: '\\text{Lower Half: } 6, 7, 15, 36, 39 \\implies Q_1 = 15 \\\\\n\\text{Upper Half: } 41, 42, 43, 47, 49 \\implies Q_3 = 43',
                  explanation: 'Median of the 5 lower values is 15; median of the 5 upper values is 43.',
                  explanationAr: 'وسيط القيم الخمس الدنيا هو 15، ووسيط القيم الخمس العليا هو 43.',
                },
                {
                  stepNumber: 4,
                  action: 'Calculate IQR and Boundary Fences',
                  actionAr: 'حساب المدى الربيعي وحدود الاستبعاد',
                  math: '\\text{IQR} = Q_3 - Q_1 = 43 - 15 = 28 \\\\\n\\text{Lower Bound} = Q_1 - 1.5 \\times 28 = 15 - 42 = -27 \\\\\n\\text{Upper Bound} = Q_3 + 1.5 \\times 28 = 43 + 42 = 85',
                  explanation: 'Valid non-outlier range is [-27, 85].',
                  explanationAr: 'النطاق الطبيعي المقبول هو [-27, 85].',
                },
                {
                  stepNumber: 5,
                  action: 'Conclude outlier presence',
                  actionAr: 'استخلاص القيم الشاذة',
                  math: '\\forall x \\in \\text{Data}: -27 \\le x \\le 85 \\implies \\text{No Outliers Exist}',
                  explanation: 'All values fall within [-27, 85], so there are no outliers in this sample.',
                  explanationAr: 'كافة القيم تقع داخل النطاق، وبالتالي لا توجد قيم شاذة في هذه العينة.',
                },
              ],
            },
            {
              title: 'Official Lecture Example 2: Outlier Detection on Salary Dataset',
              titleAr: 'مثال المحاضرة المحلول رقم 2: اكتشاف القيم الشاذة في بيانات الرواتب',
              problemText:
                'Given the salary data: 75000, -40000, 10000000, 50000, 99999. Detect all outliers using IQR.',
              problemTextAr:
                'معطى بيانات الرواتب التالية: 75000, -40000, 10000000, 50000, 99999. حدد القيم الشاذة باستخدام أسلوب المدى الربيعي.',
              steps: [
                {
                  stepNumber: 1,
                  action: 'Order dataset ascending',
                  actionAr: 'الترتيب التصاعدي للبيانات',
                  math: '\\text{Ordered: } -40000, 50000, 75000, 99999, 10000000 \\quad (N = 5)',
                  explanation: 'Dataset arranged from lowest to highest.',
                  explanationAr: 'ترتيب القيم من الأصغر إلى الأكبر.',
                },
                {
                  stepNumber: 2,
                  action: 'Find Q1, Q2, and Q3',
                  actionAr: 'حساب الربيعيات Q1 و Q2 و Q3',
                  math: 'Q_2 = 75000 \\\\\nQ_1 = \\frac{-40000 + 50000}{2} = 5000 \\\\\nQ_3 = \\frac{99999 + 10000000}{2} = 5049999.5',
                  explanation: 'Median is 75000. Lower half midpoint gives Q1; upper half midpoint gives Q3.',
                  explanationAr: 'الوسيط هو 75000، ومنتصف النصف الأدنى يعطي Q1 = 5000، ومنتصف النصف الأعلى يعطي Q3 = 5049999.5.',
                },
                {
                  stepNumber: 3,
                  action: 'Compute IQR and Detection Fences',
                  actionAr: 'حساب IQR والحدود الشاذة',
                  math: '\\text{IQR} = Q_3 - Q_1 = 5049999.5 - 5000 = 5044999.5 \\\\\n\\text{Lower Bound} = 5000 - 1.5 \\times 5044999.5 = -7562499.25 \\\\\n\\text{Upper Bound} = 5049999.5 + 1.5 \\times 5044999.5 = 12617498.75',
                  explanation: 'Checking observations: -40000 > Lower Bound and 10000000 < Upper Bound.',
                  explanationAr: 'بمقارنة القيم، نجد أن جميعها تقع ضمن الحدود المقبولة رياضياً نتيجة التباين الضخم لـ Q3.',
                },
              ],
            },
          ],
          examNotes:
            'Exam Note: Follow the 4-step sequence: (1) Sort, (2) Find Q2 (median), (3) Find Q1 and Q3, (4) Calculate IQR = Q3 - Q1 and fences Q1 - 1.5*IQR and Q3 + 1.5*IQR.',
          examNotesAr:
            'ملاحظة امتحانية: التزم بالخطوات الأربع: (1) رتب تصاعدياً، (2) احسب Q2 (الوسيط)، (3) احسب Q1 و Q3، (4) طبق IQR = Q3 - Q1 وحدد الحدود Q1 - 1.5*IQR و Q3 + 1.5*IQR.',
        },
      ],
    },
    {
      id: 'bd-ch3-t3',
      title: 'Smoothing Noisy Data & Validation Rules',
      titleAr: 'تنعيم البيانات المشوشة وقواعد التحقق (Validation)',
      lessons: [
        {
          id: 'bd-ch3-l3',
          chapterId: 'bd-ch3',
          topicId: 'bd-ch3-t3',
          title: 'Smoothing Noisy Data & Validation Rules',
          titleAr: 'تنعيم البيانات المشوشة وقواعد التحقق والتناقض',
          estimatedMinutes: 20,
          sourceRef: { file: 'data cleansing P01.pdf', page: 'Pages 34-43', originalNumber: '2025 Q2.4' },
          objectives: [
            'Define Noisy Data and cite common causes of noise.',
            'Differentiate between Validation and Standardization.',
            'Identify validation rules in data cleansing (Midterm 2025 Q2.4).',
            'Explain Data Inconsistency and describe reconciliation procedures.',
          ],
          objectivesAr: [
            'تعريف البيانات المشوشة (Noisy Data) وحصر أسباب التشويش الشائعة.',
            'التمييز بين التحقق من صحة القواعد (Validation) والتوحيد القياسي (Standardization).',
            'تحديد أمثلة قواعد التحقق في تنقية البيانات (سؤال الميدتيرم 2025 س2.4).',
            'شرح تناقض البيانات (Data Inconsistency) وكيفية معالجته.',
          ],
          content: {
            enDefinition:
              'Smoothing Noisy Data involves inspecting data for entry errors and applying validation rules (verifying format and domain constraints) and standardization (uniform encoding and representation) to eliminate noise and inconsistencies.',
            arExplanation:
              'تنعيم البيانات المشوشة (Smoothing Noisy Data) يشمل فحص السجلات بحثاً عن أخطاء الإدخال وتطبيق قواعد التحقق (Validation Rules للتأكد من مطابقة شروط النطاق والنوع) وقواعد التوحيد القياسي (Standardization لتوحيد الصيغ والترميز) لإزالة التناقضات والتشويش.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Causes of Noisy Data:\n• Faulty data collection hardware or sensor failure.\n• Human data-entry errors (e.g., swapping first name and last name).\n• Transmission errors across network interfaces.\n• Technology limitations in parsing unstructured input.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'أسباب تشويش البيانات:\n• تعطل أو خلل في مجسات وأجهزة جمع البيانات.\n• أخطاء إدخال بشرية (مثل التبديل بين الاسم واللقب).\n• أخطاء أثناء نقل البيانات عبر الشبكات.\n• قيود تقنية في قراءة واستخلاص البيانات غير المهيكلة.',
              },
              {
                type: 'callout',
                lang: 'en',
                content:
                  'Official Exam MCQ Focus (Midterm 2025 - Q2.4: "Which of the following is an example of validation during data cleansing?"):\n• Options:\n  A) Ensuring all names are in uppercase (Standardization)\n  B) Detecting if a zip code contains letters (Validation - Correct Answer!)\n  C) Converting dates to a consistent format (Standardization)\n  D) Replacing null values with the mean (Missing Value Imputation)\n• Correct Answer: B. Detecting if a zip code contains letters.\n• Academic Rationale: Validation tests whether data complies with explicit domain logic/syntax constraints (a 5-digit zip code can only be numeric). Converting case or date formats is Standardization, and replacing nulls is Imputation.',
              },
              {
                type: 'callout',
                lang: 'ar',
                content:
                  'سؤال الميدتيرم المباشر (ميدتيرم 2025 س2.4):\n• نص السؤال: أي مما يلي يُعد مثالاً على التحقق (Validation) أثناء تنظيف البيانات؟\n• الخيارات:\n  أ) التأكد من أن جميع الأسماء مكتوبة بأحرف كبيرة (توحيد قياسي Standardization)\n  ب) اكتشاف ما إذا كان الرمز البريدي يحوي أحرفاً أبجدية (تحقق Validation - الإجابة الصحيحة!)\n  ج) تحويل التواريخ لصيغة موحدة (توحيد قياسي Standardization)\n  د) استبدال القيم الفارغة بالمتوسط (تعويض قيم مفقودة Imputation)\n• الإجابة الصحيحة: ب. اكتشاف ما إذا كان الرمز البريدي يحوي أحرفاً أبجدية.\n• التعليل الأكاديمي: التحقق يختبر مطابقة القيمة للشروط المنطقية للنطاق (الرمز البريدي يجب أن يتكون من 5 أرقام ولا يحوي حروفاً). أما تحويل حالة الأحرف أو صيغ التواريخ فيُصنف كتوحيد قياسي، واستبدال الفارغ هو تعويض.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Data Inconsistency:\nOccurs when different data items contain discrepancies across related fields. Example: Total_Price does not equal (Quantity * Unit_Price), or a Customer Address has City="Cairo" with Area_Code="03" (Alexandria). Resolved through referential integrity checks and domain cross-validation.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'تناقض البيانات (Data Inconsistency):\nيحدث عند وجود تعارض بين حقول بيانية مرتبطة منطقياً. مثال: أن يكون حقل "إجمالي السعر" لا يساوي (الكمية × سعر الوحدة)، أو أن يكون عنوان العميل مسجلاً بمدينة "القاهرة" بينما رمز المنطقة هو "03" (الخاص بالإسكندرية). يُعالج ذلك بفحص التكامل المرجعي والتحقق التبادلي.',
              },
            ],
          },
          examNotes:
            'Exam Note: Memorize the critical distinction tested in Midterm 2025 Q2.4: Validation = checking logical/syntax rules (e.g. zip code has no letters); Standardization = uniform formats (e.g. uppercase, date format YYYY-MM-DD).',
          examNotesAr:
            'ملاحظة امتحانية: احفظ الفارق الجوهري المعتمد في امتحان 2025 (س2.4): التحقق (Validation) هو فحص الشروط المنطقية (مثل خلو الرمز البريدي من الحروف)، بينما التوحيد (Standardization) هو توحيد شكل العرض (مثل جعل النص كبيراً أو توحيد صيغة التاريخ).',
        },
      ],
    },
    {
      id: 'bd-ch3-t4',
      title: 'Data Integration Challenges & Normalization',
      titleAr: 'تحديات تكامل البيانات وطرق التطبيع الرياضي',
      lessons: [
        {
          id: 'bd-ch3-l4',
          chapterId: 'bd-ch3',
          topicId: 'bd-ch3-t4',
          title: 'Data Integration Challenges & Entity Identification',
          titleAr: 'تحديات تكامل البيانات ومشكلة تحديد الكيان (Entity Identification)',
          estimatedMinutes: 20,
          sourceRef: { file: 'integration and normalization P02.pptx', page: 'Slides 4-12', originalNumber: '2025 Q2.5' },
          objectives: [
            'Define Data Integration and explain why it is crucial in data warehousing.',
            'Analyze the 4 core integration issues: Entity Identification, Redundancy, Data Value Conflicts, Duplication.',
            'Master the Entity Identification Problem (Midterm 2025 Q2.5).',
            'Explain how Pearson correlation analysis detects redundant attributes.',
          ],
          objectivesAr: [
            'تعريف تكامل البيانات (Data Integration) وتوضيح أهميته في مستودعات البيانات.',
            'تحليل المشكلات الأربع الكبرى لتكامل البيانات: مشكلة تحديد الكيان، التكرار الفائض، تضارب القيم، والازدواجية.',
            'إتقان مفهوم مشكلة تحديد الكيان (Entity Identification Problem) المعتمد في ميدتيرم 2025 (س2.5).',
            'شرح كيفية استخدام تحليل ارتباط بيرسون لكشف المتغيرات التكرارية الفائضة.',
          ],
          content: {
            enDefinition:
              'Data Integration is the process of merging heterogeneous data from multiple disparate sources into a unified, coherent data store, which introduces challenges including entity identification, attribute redundancy, value conflicts, and record duplication.',
            arExplanation:
              'تكامل البيانات (Data Integration) هو عملية دمج البيانات غير المتجانسة القادمة من مصادر متباينة متعددة في مستودع بيانات موحد ومتماسك، وهو ما يثير تحديات تقنية رئيسية تشمل مطابقة الكيانات، والتكرار الفائض، وتضارب القيم، وازدواجية السجلات.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The 4 Main Issues in Data Integration:\n1. Entity Identification Problem: Occurs when attributes from different data sources have different column names but represent the exact same real-world entity (e.g., Source A uses "Student_ID" and Source B uses "Roll_No").\n2. Redundancy: An attribute is redundant if it can be derived from another attribute (e.g., Annual_Salary derived from Monthly_Salary). Detected using Pearson Correlation Analysis ($r_{A,B}$).\n3. Data Value Conflicts: The same entity attribute has conflicting values due to differences in representation, scale, or measurement units (e.g., metric vs. imperial units, USD vs. EUR).\n4. Duplication: Two or more identical record rows exist for the same unique entity.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'المشكلات الأربع الأساسية في تكامل البيانات:\n1. مشكلة تحديد الكيان (Entity Identification Problem): تحدث عندما تختلف أسماء الحقول القادمة من مصادر مختلفة رغم أنها تعبر عن الكيان الواقعي ذاته (مثل وجود "Student_ID" في المصدر أ و "Roll_No" في المصدر ب).\n2. التكرار الفائض (Redundancy): يكون المتغير فائضاً إذا أمكن اشتقاقه بالكامل من متغير آخر (مثل الراتب السنوي المشتق من الراتب الشهري)، ويُكتشف عبر تحليل ارتباط بيرسون ($r_{A,B}$).\n3. تضارب قيم البيانات (Data Value Conflicts): اختلاف قيم نفس السمة للكيان ذاته نتيجة اختلاف وحدات القياس (النظام المتري مقابل الإمبراطوري) أو العملات (الدولار مقابل اليورو).\n4. ازدواجية السجلات (Duplication): وجود سجلين متطابقين تماماً أو أكثر لنفس الكيان.',
              },
              {
                type: 'callout',
                lang: 'en',
                content:
                  'Official Exam MCQ Focus (Midterm 2025 - Q2.5):\n• Scenario: "You are integrating data from two different sources. Source A contains an attribute \'Student_ID,\' and Source B contains \'Roll_No.\' Upon analysis, you find that these attributes represent the same entity. What issue are you addressing in this scenario?"\n• Options: A) Data Duplication | B) Entity Identification Problem | C) Data Value Conflicts | D) Correlation Analysis\n• Correct Answer: B. Entity Identification Problem.\n• Academic Explanation: Matching equivalent attributes with disparate naming conventions across heterogeneous schemas is the textbook definition of the Entity Identification Problem.',
              },
              {
                type: 'callout',
                lang: 'ar',
                content:
                  'سؤال الميدتيرم المباشر (ميدتيرم 2025 س2.5):\n• السيناريو: "تقوم بدمج بيانات من مصدرين مختلفين؛ يحوي المصدر (أ) سمة باسم \'Student_ID\' بينما يحوي المصدر (ب) سمة باسم \'Roll_No\'. وبالتحليل وجدت أنهما يمثلان نفس الكيان. ما المشكلة التي تعالجها في هذا السيناريو؟"\n• الخيارات: أ) ازدواجية البيانات | ب) مشكلة تحديد الكيان (Entity Identification Problem) | ج) تضارب القيم | د) تحليل الارتباط\n• الإجابة الصحيحة: ب. مشكلة تحديد الكيان (Entity Identification Problem).\n• التعليل الأكاديمي: مطابقة الحقول ذات التسميات المختلفة التي تمثل نفس الشيء في الواقع هو التعريف الحرفي لمشكلة تحديد الكيان.',
              },
            ],
          },
          examNotes:
            'Exam Note: Midterm 2025 Q2.5 tested this exact scenario. Always link "Student_ID vs Roll_No" or disparate column names for the same entity to "Entity Identification Problem".',
          examNotesAr:
            'ملاحظة امتحانية: ورد هذا السؤال بسيناريو متطابق في ميدتيرم 2025 (س2.5). اربط دائماً بين اختلاف تسميات الحقول لنفس الكيان (مثل Student_ID مقابل Roll_No) ومصطلح "Entity Identification Problem".',
        },
        {
          id: 'bd-ch3-l5',
          chapterId: 'bd-ch3',
          topicId: 'bd-ch3-t4',
          title: 'Data Normalization: Min-Max, Z-Score & Decimal Scaling',
          titleAr: 'تطبيع البيانات: التحويل الأدنى-الأعلى (Min-Max)، الدرجة المعيارية (Z-Score)، والتقسيم العشري',
          estimatedMinutes: 25,
          sourceRef: { file: 'integration and normalization P02.pptx', page: 'Slides 13-19' },
          objectives: [
            'Define Data Normalization and explain why scaling attributes prevents distance distortion.',
            'Apply Min-Max Normalization to map values into an arbitrary target range [new_min, new_max].',
            'Apply Z-Score Normalization based on mean and standard deviation.',
            'Apply Normalization by Decimal Scaling using powers of 10.',
            'Solve step-by-step mathematical problems for all three normalization formulas.',
          ],
          objectivesAr: [
            'تعريف تطبيع البيانات (Data Normalization) وشرح أهمية القياس الموحد لتفادي تشوه المسافات.',
            'تطبيق تطبيع Min-Max لتحويل القيم لنطاق مستهدف محدد مثل [0.0, 1.0].',
            'تطبيق تطبيع الدرجة المعيارية (Z-Score) استناداً للمتوسط والانحراف المعياري.',
            'تطبيق التطبيع بالتقسيم العشري (Decimal Scaling) باستخدام قوى العدد 10.',
            'حل المسائل الحسابية الرياضية لكافة طرق التطبيع خطوة بخطوة.',
          ],
          content: {
            enDefinition:
              'Data Normalization is the mathematical transformation of numerical attribute values into a specified, bounded range (such as [0.0, 1.0] or [-1.0, 1.0]), preventing attributes with massive initial magnitudes from dominating distance-based algorithms.',
            arExplanation:
              'تطبيع البيانات (Data Normalization) هو التحويل الرياضي لقيم السمات الرقمية إلى نطاق محدد وموحد (مثل [0.0, 1.0] أو [-1.0, 1.0])، مما يمنع الحقول ذات الأرقام الكبيرة من الهيمنة غير العادلة على حساب المسافات في خوارزميات التعلم الآلي مثل K-Means و KNN.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The 3 Fundamental Normalization Methods:\n1. Min-Max Normalization: Performs a linear mapping from original range [min_A, max_A] to [new_min_A, new_max_A]. Preserves exact linear relationships.\n2. Z-Score (Zero-Mean) Normalization: Scales values based on mean (mu) and standard deviation (sigma). Useful when min/max are unknown or outliers severely distort boundaries.\n3. Decimal Scaling Normalization: Normalizes by moving the decimal point of values by j positions, where j is the smallest integer such that max(|v\'|) < 1.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الطرق الثلاث الأساسية لتطبيع البيانات:\n1. تحويل Min-Max: تحويل خطي ينقل القيم من النطاق الأصلي [min, max] إلى النطاق الجديد المستهدف [new_min, new_max]، محتفظاً بالنسب الخطية الأصلية.\n2. تحويل Z-Score (الدرجة المعيارية): يعتمد على المتوسط الحسابي والانحراف المعياري، وهو ممتاز عند وجود قيم شاذة متطرفة أو عدم معرفة الحدين الأدنى والأعلى بدقة.\n3. التقسيم العشري (Decimal Scaling): يحرك الفاصلة العشرية بمقدار j خانات بحيث تصبح القيمة المطلقة العظمى أصغر من 1.',
              },
            ],
          },
          formulas: [
            {
              name: 'Min-Max Normalization Formula',
              latex: "v' = \\frac{v - \\min_A}{\\max_A - \\min_A} (\\text{new\\_max}_A - \\text{new\\_min}_A) + \\text{new\\_min}_A",
              description: 'Maps original value v to target range [new_min_A, new_max_A].',
              descriptionAr: 'ينقل القيمة v خطياً إلى النطاق الجديد المحدد.',
            },
            {
              name: 'Z-Score Normalization Formula',
              latex: "v' = \\frac{v - \\bar{A}}{\\sigma_A}",
              description: 'Transforms value v to standard normal distribution with mean 0 and std 1.',
              descriptionAr: 'يحول القيمة v لتوزيع معياري بمتوسط 0 وانحراف معياري 1.',
            },
            {
              name: 'Decimal Scaling Formula',
              latex: "v' = \\frac{v}{10^j} \\quad \\text{where } j = \\lceil \\log_{10}(\\max(|A|)) \\rceil",
              description: 'Divides by 10^j where j is smallest integer such that max(|v\'|) < 1.',
              descriptionAr: 'يقسم على 10^j حيث j هو أصغر عدد صحيح يجعل أكبر قيمة مطلقة أقل من 1.',
            },
          ],
          workedExamples: [
            {
              title: 'Official Lecture Problem 1: Min-Max Normalization',
              titleAr: 'مسألة المحاضرة المحلولة 1: تحويل Min-Max',
              problemText:
                'Suppose that the minimum and maximum values for income are $12,000 and $98,000. Map an income of $73,600 to the range [0.0, 1.0].',
              problemTextAr:
                'افترض أن الحد الأدنى والأعلى للدخل هما 12000 دولار و 98000 دولار. طَبِّق تحويل Min-Max على دخل مقداره 73600 دولار في النطاق المستهدف [0.0, 1.0].',
              steps: [
                {
                  stepNumber: 1,
                  action: 'Identify given parameters',
                  actionAr: 'تحديد المعطيات',
                  math: 'v = 73600, \\quad \\min_A = 12000, \\quad \\max_A = 98000, \\quad \\text{new\\_min} = 0.0, \\quad \\text{new\\_max} = 1.0',
                  explanation: 'Extract all original and target boundaries.',
                  explanationAr: 'استخراج القيم الأصلية وحدود النطاق المستهدف.',
                },
                {
                  stepNumber: 2,
                  action: 'Substitute into Min-Max formula',
                  actionAr: 'التعويض في قانون Min-Max',
                  math: "v' = \\frac{73600 - 12000}{98000 - 12000} (1.0 - 0.0) + 0.0 = \\frac{61600}{86000} (1.0) = 0.716",
                  explanation: '61600 / 86000 gives exactly 0.716.',
                  explanationAr: 'قسمة 61600 على 86000 تعطي الناتج الدقيق 0.716.',
                },
                {
                  stepNumber: 3,
                  action: 'Verify boundary condition',
                  actionAr: 'التحقق من صحة النطاق',
                  math: "0.0 \\le 0.716 \\le 1.0 \\implies \\text{Valid Normalization}",
                  explanation: 'Normalized value falls properly within [0.0, 1.0].',
                  explanationAr: 'القيمة الناتجة تقع بشكل صحيح داخل النطاق المستهدف.',
                },
              ],
            },
            {
              title: 'Official Lecture Problem 2: Z-Score Normalization',
              titleAr: 'مسألة المحاضرة المحلولة 2: تحويل Z-Score',
              problemText:
                'Suppose that the mean and standard deviation of income are $54,000 and $16,000. Normalize an income of $73,600 using Z-Score.',
              problemTextAr:
                'افترض أن المتوسط الحسابي والانحراف المعياري للدخل هما 54000 دولار و 16000 دولار. احسب القيمة المعيارية لدخل مقداره 73600 دولار.',
              steps: [
                {
                  stepNumber: 1,
                  action: 'Identify given parameters',
                  actionAr: 'تحديد المعطيات',
                  math: 'v = 73600, \\quad \\bar{A} = 54000, \\quad \\sigma_A = 16000',
                  explanation: 'Identify target value, mean, and standard deviation.',
                  explanationAr: 'استخراج القيمة المستهدفة والمتوسط والانحراف المعياري.',
                },
                {
                  stepNumber: 2,
                  action: 'Substitute into Z-score formula',
                  actionAr: 'التعويض في قانون Z-score',
                  math: "v' = \\frac{v - \\bar{A}}{\\sigma_A} = \\frac{73600 - 54000}{16000} = \\frac{19600}{16000} = 1.225",
                  explanation: '19600 / 16000 equals exactly 1.225 standard deviations above the mean.',
                  explanationAr: 'الناتج هو 1.225، مما يعني أن هذا الدخل يرتفع بمقدار 1.225 انحراف معياري عن المتوسط.',
                },
              ],
            },
            {
              title: 'Official Lecture Problem 3: Normalization by Decimal Scaling',
              titleAr: 'مسألة المحاضرة المحلولة 3: التطبيع بالتقسيم العشري',
              problemText:
                'Let the values of attribute A range from -986 to 917. Normalize the values using decimal scaling.',
              problemTextAr:
                'لتكن قيم السمة A تتراوح بين -986 و 917. طَبِّق طريقة التقسيم العشري على هذه البيانات.',
              steps: [
                {
                  stepNumber: 1,
                  action: 'Find maximum absolute value',
                  actionAr: 'تحديد أكبر قيمة مطلقة',
                  math: '\\max(|A|) = \\max(|-986|, |917|) = 986',
                  explanation: 'Find the absolute largest magnitude.',
                  explanationAr: 'أكبر قيمة مطلقة هي 986.',
                },
                {
                  stepNumber: 2,
                  action: 'Determine scaling power j',
                  actionAr: 'تحديد أس التقسيم j',
                  math: '10^{j-1} \\le 986 < 10^j \\implies 100 \\le 986 < 1000 \\implies j = 3',
                  explanation: 'Divide by 10^3 = 1000 so that 986/1000 = 0.986 < 1.',
                  explanationAr: 'نحتاج للقسمة على 1000 (أي 10 أس 3)، وبالتالي j = 3.',
                },
                {
                  stepNumber: 3,
                  action: 'Compute normalized values for bounds',
                  actionAr: 'حساب القيم المعيارية للحدود',
                  math: "v'_{-986} = \\frac{-986}{1000} = -0.986, \\quad v'_{917} = \\frac{917}{1000} = 0.917",
                  explanation: 'All transformed values now strictly fall within range (-1, 1).',
                  explanationAr: 'كافة القيم بعد التحويل تقع داخل النطاق المحدد (-1, 1).',
                },
              ],
            },
          ],
          examNotes:
            'Exam Note: Normalization problems are common numerical exam questions. Practice Min-Max, Z-score, and Decimal scaling calculation steps carefully.',
          examNotesAr:
            'ملاحظة امتحانية: مسائل التطبيع شائعة في الامتحانات. تدرب جيداً على خطوات التعويض في القوانين الثلاثة (Min-Max و Z-Score والتقسيم العشري).',
        },
      ],
    },
  ],
};
