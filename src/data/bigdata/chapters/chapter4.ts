import type { Chapter } from '../../../types';

export const bigDataChapter4: Chapter = {
  id: 'bd-ch4',
  number: 4,
  title: 'Exploratory Data Analysis & Analytical Distinctions',
  titleAr: 'استكشاف البيانات بصرياً والفروق التحليلية الجوهرية',
  description:
    'Principles of Exploratory Data Analysis (EDA): the moral of Anscombe’s Quartet (why visualize before analyzing), univariate distributions (histograms, kernel density plots, log transformations, saturated variables), bivariate relationships (scatterplots, hexbin handling for overplotting, pairs plots), and the definitive academic comparison between EDA, Data Preprocessing, and Feature Engineering (Midterm 2025 Q1.4).',
  descriptionAr:
    'أسس ومنهجيات استكشاف البيانات بصرياً (EDA): الحكمة الإحصائية لرباعية أنسكومب (لماذا يجب التصوير البصري قبل التحليل الرياضي)، فحص توزيع المتغير الفردي (المدرج التكراري، كثافة التوزيع، التحويل اللوغاريتمي، والبيانات المشبعة)، تحليل العلاقات الثنائية (الانتشار، معالجة التكدس السداسي Hexbin، ومصفوفات الأزواج)، والمقارنة الأكاديمية الشاملة بين الاستكشاف (EDA) والمعالجة الأولية (Preprocessing) وهندسة السمات (Feature Engineering) المعتمدة في ميدتيرم 2025 (س1.4).',
  topics: [
    {
      id: 'bd-ch4-t1',
      title: 'Visualization Foundations & Anscombe’s Quartet',
      titleAr: 'أسس التصوير البصري ورباعية أنسكومب (Anscombe’s Quartet)',
      lessons: [
        {
          id: 'bd-ch4-l1',
          chapterId: 'bd-ch4',
          topicId: 'bd-ch4-t1',
          title: 'Anscombe’s Quartet: Visualize Before Analyzing',
          titleAr: 'رباعية أنسكومب: حتمية الرؤية البصرية قبل التحليل الإحصائي',
          estimatedMinutes: 20,
          sourceRef: { file: 'analyzing and exploring.pptx', page: 'Slides 1-5' },
          objectives: [
            'Explain the fundamental principle: "Visualize Before Analyzing".',
            'Analyze Anscombe’s Quartet and its critical implications for data scientists.',
            'Demonstrate how identical summary statistics can hide radically different real-world distributions.',
            'Contrast statistical metrics (mean, std, correlation) with visual pattern discovery.',
          ],
          objectivesAr: [
            'شرح القاعدة الإحصائية الذهبية: "التصوير البصري قبل التحليل الرياضي".',
            'تحليل رباعية أنسكومب (Anscombe’s Quartet) وأبعادها المنهجية في علم البيانات.',
            'إثبات كيف يمكن للإحصاءات الملخصة المتطابقة أن تخفي توزيعات واقعية شديدة التباين.',
            'المقارنة بين الاكتفاء بالمقاييس الرقمية والاكتشاف البصري للأنماط والعلاقات.',
          ],
          content: {
            enDefinition:
              'Anscombe’s Quartet is a famous statistical demonstration consisting of four distinct datasets that possess identical summary statistics (means, variances, correlations, and linear regression lines) yet display radically different geometric patterns, proving that visual exploration is mandatory prior to analytical modeling.',
            arExplanation:
              'رباعية أنسكومب (Anscombe’s Quartet) هي تجربة إحصائية شهيرة تتألف من أربع مجموعات بيانية مختلفة تماماً، تمتلك مقاييس إحصائية ملخصة متطابقة تماماً (نفس المتوسط الحسابي، نفس التباين، نفس معامل الارتباط، ونفس خط الانحدار الخطي)، ورغم ذلك تظهر عند رسمها أشكالاً وتوزيعات هندسية متباينة جذرياً، مما يثبت حتمية الفحص البصري قبل الشروع في النمذجة التحليلية.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The Story of Anscombe’s Quartet:\n• Created by statistician Francis Anscombe in 1973.\n• Four artificial datasets (I, II, III, IV), each with 11 (x, y) coordinate pairs.\n• All four datasets share identical numerical properties:\n  - Mean of x = 9.0, Mean of y = 7.5\n  - Variance of x = 11.0, Variance of y = 4.125\n  - Correlation between x and y = 0.816\n  - Linear regression line: y = 3.00 + 0.500x\n• Yet when graphed:\n  - Dataset 1 shows a clean linear relationship with scatter.\n  - Dataset 2 shows a smooth quadratic/curvilinear curve.\n  - Dataset 3 shows a strict linear relationship distorted by a single extreme outlier.\n  - Dataset 4 shows points clustered vertically at x=8 with a single extreme point at x=19.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'قصة ونتائج رباعية أنسكومب:\n• صممها عالم الإحصاء فرانسيس أنسكومب عام 1973.\n• تتكون من 4 مجموعات بيانات مستقلة، كل منها يحوي 11 نقطة (س، ص).\n• تشترك المجموعات الأربع في إحصاءات ملخصة متطابقة تماماً:\n  - متوسط س = 9.0، ومتوسط ص = 7.5\n  - تباين س = 11.0، وتباين ص = 4.125\n  - معامل الارتباط بين س وص = 0.816\n  - معادلة خط الانحدار: ص = 3.00 + 0.500 س\n• لكن عند رسمها بيانياً:\n  - المجموعة الأولى: علاقة خطية طبيعية مع بعض التشتت.\n  - المجموعة الثانية: علاقة منحنية تربيعية واضحة لا تصلح لها النماذج الخطية.\n  - المجموعة الثالثة: علاقة خطية ممتازة شوهتها نقطة شاذة واحدة (Outlier).\n  - المجموعة الرابعة: نقاط متكدسة رأسياً عند س=8 ونقطة وحيدة متطرفة عند س=19 هي التي صَنَعت خط الانحدار بالكامل.',
              },
              {
                type: 'callout',
                lang: 'en',
                content:
                  'The Academic Moral:\nNever rely purely on summary statistics (mean, variance, correlation). Two variables with a high correlation of 0.816 might be a curve, a cluster of points with a leverage outlier, or a true linear pattern. Always graph your data first!',
              },
              {
                type: 'callout',
                lang: 'ar',
                content:
                  'العبرة الأكاديمية والامتحانية:\nلا تعتمد مطلقاً على الأرقام والإحصاءات الملخصة وحدها؛ فوجود ارتباط مرتفع (0.816) قد يخفي علاقة منحنية، أو نقطة شاذة وحيدة صنعت الارتباط، أو توزيعاً رأسياً مشوهاً. ارسم البيانات بصرياً قبل أن تبدأ أي نمذجة!',
              },
            ],
          },
          examNotes:
            'Exam Note: Anscombe’s Quartet proves that relying solely on statistical summaries can lead to catastrophic modeling errors because summary statistics cannot reveal structural geometric shapes, curves, or leverage outliers.',
          examNotesAr:
            'ملاحظة امتحانية: تثبت رباعية أنسكومب أن الاكتفاء بالإحصاءات الملخصة قد يقود لقرارات كارثية لأن الأرقام تعجز عن كشف الأنماط المنحنية والنقاط الشاذة المؤثرة.',
        },
      ],
    },
    {
      id: 'bd-ch4-t2',
      title: 'Univariate & Bivariate Exploration Techniques',
      titleAr: 'تقنيات فحص المتغيرات الأحادية والثنائية',
      lessons: [
        {
          id: 'bd-ch4-l2',
          chapterId: 'bd-ch4',
          topicId: 'bd-ch4-t2',
          title: 'Univariate Distributions & Transformations',
          titleAr: 'فحص توزيع المتغير الفردي والتحويلات اللوغاريتمية',
          estimatedMinutes: 20,
          sourceRef: { file: 'analyzing and exploring.pptx', page: 'Slides 6-10' },
          objectives: [
            'Select appropriate visualizations for single variable distributions (histograms, density plots).',
            'Explain the purpose and mathematical benefit of logarithmic transformations for skewed data.',
            'Detect dirty data signatures and "saturated" variables in distributions.',
          ],
          objectivesAr: [
            'اختيار الرسم البياني المناسب للمتغير الفردي (المدرج التكراري hist، ورسم الكثافة density).',
            'شرح الهدف والفائدة الرياضية للتحويل اللوغاريتمي (Log Transformation) للبيانات الملتوية.',
            'اكتشاف بصمات البيانات المشوشة وظاهرة "تشبع البيانات" (Saturated Data).',
          ],
          content: {
            enDefinition:
              'Univariate Exploration investigates the range, central tendency, spread, skewness, and presence of anomalies in a single attribute before modeling, employing histograms, density curves, and mathematical transformations (such as log10) to stabilize variance.',
            arExplanation:
              'استكشاف المتغير الفردي (Univariate Exploration) يهدف إلى فحص المدى، والنزعة المركزية، والانتشار، والالتواء، واكتشاف الشوائب لسمة بيانية واحدة قبل النمذجة، عبر المدرجات التكرارية ومنحنيات الكثافة، مع تطبيق التحويلات الرياضية كاللوغاريتم لعلاج الالتواء الشديد.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Core Visualization Tools for Single Variables:\n• Low-Volume Data: plot(sort(x)) – displays empirical cumulative distribution.\n• Histograms: hist(x) – groups continuous data into bins, revealing multimodality and gaps.\n• Kernel Density Plots: plot(density(x)) – smooth continuous estimation of probability distribution.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'أدوات التصوير الأساسية للمتغير الفردي:\n• للبيانات محدودة الحجم: plot(sort(x)) لعرض التوزيع التراكمي للقيم المرتبة.\n• المدرج التكراري: hist(x) لتقسيم القيم إلى فترات توضح القمم والتجاويف في التوزيع.\n• منحنى الكثافة: plot(density(x)) لتقديم تقدير ناعم ومستمر لدالة الكثافة الاحتمالية.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Handling Skewed Distributions & Saturated Data:\n• Logarithmic Transformations: If a variable has a very wide range or is severely right-skewed (e.g., Household Income, Website Pageviews), computing log(x) compresses extreme spreads and yields a near-normal distribution.\n• Saturated Data: Occurs when an artificial boundary caps observations (e.g., an application recording customer age only up to 99, or loan records capped at 10 years). Visible as an abrupt spike at the extreme end of a histogram.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'التعامل مع الالتواء الشديد وتشبع البيانات:\n• التحويل اللوغاريتمي: إذا كان مدى المتغير بالغ الاتساع أو ملتوياً بشدة لليمين (مثل دخل الأسر أو عدد زوار المواقع)، فإن حساب log(x) يقلص الفروق الهائلة ويقرب التوزيع من التوزيع الطبيعي المتماثل.\n• البيانات المشبعة (Saturated Data): تحدث عند وجود سقف أو أرضية مصطنعة في النظام (مثل نظام مصرفي يسجل الحد الأقصى لعمر القرض 10 سنوات رغم وجود قروض أطول)، وتظهر بصرياً في المدرج التكراري كعمود ضخم ومفاجئ عند الحافة القصوى.',
              },
            ],
          },
          examNotes:
            'Exam Note: When asked what to do if a single variable is very wide or severely skewed, the standard data science answer is: "Try computing the logarithm (log transformation)".',
          examNotesAr:
            'ملاحظة امتحانية: إذا جاء سؤال حول كيفية معالجة متغير ذي مدى شديد الاتساع أو التواء حاد، فالإجابة القياسية هي: "تطبيق التحويل اللوغاريتمي (Log Transformation)".',
        },
        {
          id: 'bd-ch4-l3',
          chapterId: 'bd-ch4',
          topicId: 'bd-ch4-t2',
          title: 'Bivariate Relationships & Hexbin Overplotting',
          titleAr: 'تحليل العلاقات الثنائية ومعالجة تكدس النقاط (Overplotting)',
          estimatedMinutes: 20,
          sourceRef: { file: 'analyzing and exploring.pptx', page: 'Slides 11-17' },
          objectives: [
            'Examine relationships between two continuous variables using scatterplots.',
            'Identify the challenge of Overplotting in high-volume Big Data.',
            'Apply Hexagonal Binning (Hexbin) plots and alpha transparency to resolve overplotting.',
            'Use pairs plots to explore multi-variable relationships simultaneously.',
          ],
          objectivesAr: [
            'فحص العلاقات بين متغيرين مستمرين باستخدام مخططات الانتشار (Scatterplots).',
            'تحديد معضلة تكدس النقاط (Overplotting) عند التعامل مع أحجام البيانات الضخمة.',
            'تطبيق التجميع السداسي (Hexbin Plots) والشفافية لحل مشكلة التكدس وإظهار الكثافة.',
            'استخدام مصفوفات الأزواج (Pairs Plots) لاستكشاف العلاقات المتعددة في آن واحد.',
          ],
          content: {
            enDefinition:
              'Bivariate Exploration analyzes the functional relationship between two variables (linear, quadratic, exponential, or clustering), employing scatterplots for small datasets and Hexagonal Binning (Hexbin) plots for high-volume Big Data to overcome visual overplotting.',
            arExplanation:
              'استكشاف المتغيرات الثنائية (Bivariate Exploration) يختص بفحص طبيعة العلاقة الرياضية بين متغيرين (خطية، تربيعية، أسية، أو تجميعية)، باستخدام مخططات الانتشار للعينات العادية، وتقنية التجميع السداسي (Hexagonal Binning) للبيانات الضخمة لحل مشكلة تراكب وتكدس النقاط.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The Challenge of Overplotting in Big Data:\nWhen plotting millions of observations on a standard 2D scatterplot, data points overlap completely, forming a solid dark blob that obscures underlying data density, cluster centers, and distribution gradients.\n\nSolutions to Overplotting:\n1. Alpha Blending: Adding transparency so overlapping points appear progressively darker.\n2. Hexagonal Binning (Hexbin): Divides the 2D plane into regular hexagons and colors each hexagon based on the count of observations falling inside it (2D histogram).\n3. Semi-log and Log-log plots: Uncovers power-law or exponential relationships.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'معضلة تكدس النقاط (Overplotting) في البيانات الضخمة:\nعند رسم ملايين السجلات في مخطط انتشار اعتيادي، تتراكم النقاط فوق بعضها لتشكل كتلة سوداء مصمتة تحجب الكثافة الحقيقية للبيانات ومراكز التجمعات والتدرجات الإحصائية.\n\nحلول مشكلة التكدس في علم البيانات:\n1. الشفافية (Alpha Blending): جعل النقاط شبه شفافة بحيث تصبح المناطق الأكثر كثافة أغمق لوناً.\n2. التجميع السداسي (Hexagonal Binning): تقسيم المستوى الإحداثي إلى خلايا سداسية منتظمة وتلوين كل خلية بحسب عدد النقاط الواقعة بداخلها (مدرج تكراري ثنائي الأبعاد).\n3. المخططات اللوغاريتمية (Semi-log و Log-log): لكشف العلاقات الأسية والنمو المتسارع.',
              },
            ],
          },
          examNotes:
            'Exam Note: Hexbin plots solve the overplotting problem by replacing individual overlapping points with shaded hexagonal bins representing local point counts.',
          examNotesAr:
            'ملاحظة امتحانية: مخططات Hexbin تعالج مشكلة تكدس النقاط (Overplotting) باستبدال النقاط المتراكمة بخلايا سداسية ملونة تعبر عن كثافة وعدد النقاط في كل منطقة.',
        },
      ],
    },
    {
      id: 'bd-ch4-t3',
      title: 'High-Yield Analytical Distinctions',
      titleAr: 'الفروق التحليلية الجوهرية (أسئلة المقالي المعتمدة)',
      lessons: [
        {
          id: 'bd-ch4-l4',
          chapterId: 'bd-ch4',
          topicId: 'bd-ch4-t3',
          title: 'EDA vs. Data Preprocessing vs. Feature Engineering',
          titleAr: 'المقارنة الحاسمة: الاستكشاف (EDA) مقابل المعالجة الأولية مقابل هندسة السمات',
          estimatedMinutes: 20,
          sourceRef: { file: 'analyzing and exploring.pptx', page: 'Slides 18-20', originalNumber: '2025 Q1.4' },
          objectives: [
            'Articulate the precise differences between EDA, Data Preprocessing, and Feature Engineering.',
            'Explain the unique purpose, timing, and deliverables of each analytical stage.',
            'Contrast Data Exploration (analyst-facing) with Data Presentation (stakeholder-facing).',
            'Master the complete model answer for Midterm 2025 Written Question 1.4.',
          ],
          objectivesAr: [
            'صياغة الفروق الدقيقة بين استكشاف البيانات (EDA) ومعالجتها الأولية وهندسة السمات.',
            'شرح الهدف والتوقيت والمخرجات الفريدة لكل مرحلة من المراحل الثلاث.',
            'المقارنة بين استكشاف البيانات (الموجه للمحلل) وعرض البيانات (الموجه للإدارة).',
            'إتقان الإجابة النموذجية للسؤال المقالي الرابع في امتحان الميدتيرم 2025 (س1.4).',
          ],
          content: {
            enDefinition:
              'EDA is the visual and statistical understanding of raw data properties without altering the pipeline; Data Preprocessing is the cleaning, imputation, and normalization that makes data usable; Feature Engineering is the creation of new, domain-driven predictive attributes to enhance model performance.',
            arExplanation:
              'استكشاف البيانات (EDA) هو الفحص البصري والإحصائي لفهم خواص وتوزيعات البيانات دون تعديل مسارها؛ والمعالجة الأولية (Data Preprocessing) هي التنقية والتعويض والتطبيع لجعل البيانات صالحة للاستخدام؛ بينما هندسة السمات (Feature Engineering) هي الابتكار والتحويل الرياضي لسمات جديدة مشتقة لتعزيز القوة التنبؤية للنماذج.',
            sections: [
              {
                type: 'callout',
                lang: 'en',
                content:
                  'Official Exam Written Model Answer (Midterm 2025 - Q1.4: "Explain the difference between EDA, data preprocessing, and feature engineering"):\n\n1. Exploratory Data Analysis (EDA):\n• Purpose: Understand data distributions, detect anomalies, check assumptions, and discover hidden correlations.\n• Nature: Purely diagnostic and observational (analyst-facing); does NOT modify the data pipeline.\n• Core Tools: Histograms, scatterplots, boxplots, summary statistics (mean, median, IQR).\n\n2. Data Preprocessing:\n• Purpose: Transform raw, dirty data into a clean, consistent, and structured format suitable for algorithms.\n• Nature: Corrective and restorative; directly alters or filters the dataset.\n• Core Operations: Handling missing values (imputation), removing outliers, smoothing noisy data, entity resolution, and normalization (Min-Max, Z-score).\n\n3. Feature Engineering:\n• Purpose: Create brand-new explanatory variables from existing data to maximize machine learning model accuracy.\n• Nature: Creative, domain-knowledge driven, and model-centric.\n• Core Operations: Combining variables (ratios, differences), binning continuous numbers into categories, one-hot encoding, polynomial features, and text tokenization.',
              },
              {
                type: 'callout',
                lang: 'ar',
                content:
                  'الإجابة النموذجية للسؤال المقالي (ميدتيرم 2025 - س1.4: "Explain the difference between EDA, data preprocessing, and feature engineering"):\n\n1. الاستكشاف الأولي للبيانات (EDA):\n• الهدف: الفهم البصري والإحصائي لتوزيعات البيانات، واكتشاف الأنماط والارتباطات والعيوب.\n• الطبيعة: تشخيصية وملاحظاتية (موجهة للمحلل)؛ لا تعدل أو تغير بيانات المسار الأصلي.\n• الأدوات: المدرجات التكرارية، مخططات الانتشار، الصناديق الإحصائية، والمقاييس الوصفية.\n\n2. معالجة البيانات الأولية (Data Preprocessing):\n• الهدف: تحويل البيانات الخام المشوشة إلى بيانات منقاة ومتسقة وصالحة للمدخلات الخوارزمية.\n• الطبيعة: تصحيحية وعلاجية؛ تعدل السجلات وتفلتر العينات.\n• العمليات: تعويض القيم المفقودة، إزالة الشوائب، حل التناقضات، والتطبيع (Min-Max, Z-score).\n\n3. هندسة السمات (Feature Engineering):\n• الهدف: ابتكار وإنشاء متغيرات تنبؤية جديدة كلياً مشتقة من البيانات لرفع دقة النموذج.\n• الطبيعة: إبداعية تعتمد على فهم مجال العمل (Domain Knowledge) واحتياجات الخوارزمية.\n• العمليات: دمج المتغيرات (حساب النسب والفروق)، تقسيم الأرقام لفئات (Binning)، والترميز الأحادي (One-Hot Encoding).',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Data Exploration vs. Data Presentation:\n• Data Exploration (Analyst-Facing): Fast, iterative, unpolished charts and summaries. Used by the data scientist to discover insights, test hypotheses, and uncover anomalies.\n• Data Presentation (Stakeholder-Facing): Highly polished, clear, executive dashboards and visual stories. Used to communicate actionable findings, business ROI, and strategic recommendations to non-technical leaders.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'استكشاف البيانات مقابل عرض البيانات:\n• استكشاف البيانات (موجه للمحلل): رسومات سريعة وغير مصقولة، تهدف إلى البحث عن الأنماط واختبار الفرضيات واكتشاف المشكلات التقنية.\n• عرض البيانات (موجه لأصحاب القرار): رسومات ولوحات تحكم مصقولة واضحة تركز على الصورة الكلية والأثر المالي وقرارات الأعمال المباشرة للمديرين.',
              },
            ],
          },
          examNotes:
            'Exam Note: Midterm 2025 Q1.4 specifically examined this 3-way distinction. Structure your answer using the 3 clear headings: (1) EDA, (2) Preprocessing, and (3) Feature Engineering with their purpose, nature, and operations.',
          examNotesAr:
            'ملاحظة امتحانية: ورد هذا السؤال نصاً في امتحان الميدتيرم 2025 (س1.4). احرص على تقسيم إجابتك لثلاثة أقسام واضحة: (1) EDA، (2) المعالجة الأولية، و (3) هندسة السمات، مع ذكر الهدف والأمثلة لكل منها.',
        },
      ],
    },
  ],
};
