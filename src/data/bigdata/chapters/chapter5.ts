import type { Chapter } from '../../../types';

export const bigDataChapter5: Chapter = {
  id: 'bd-ch5',
  number: 5,
  title: 'Unsupervised Clustering: K-Means & DBSCAN',
  titleAr: 'التجميع غير الخاضع للإشراف: خوارزميات K-Means و DBSCAN',
  description:
    'Comprehensive unsupervised clustering: similarity vs. distance metrics, the 4-step K-Means algorithm, centroid recalculation mathematics (Midterm 2025 Q2.6), feature scaling necessity (Midterm 2025 Q2.7), choosing K via WSS and Elbow curve, customer segmentation use cases (Midterm 2025 Q2.8), DBSCAN density-based philosophy, parameters Eps (ε) and MinPts, point classifications (Core, Border, Noise points), density-reachability and density-connectivity, complete step-by-step worked DBSCAN numerical problems with distance matrices, and K-Means vs. DBSCAN comparative evaluation.',
  descriptionAr:
    'المنهج الشامل لخوارزميات التجميع غير الخاضع للإشراف: مقاييس الشبه والمسافة، خوارزمية K-Means الرباعية، حساب مراكز المجموعات رياضياً (سؤال الميدتيرم 2025 س2.6)، حتمية القياس الموحد للسمات Feature Scaling (سؤال الميدتيرم 2025 س2.7)، اختيار K عبر مجموع المربعات الداخلي WSS ومنحنى الكوع، مجالات التطبيق مثل تجزئة العملاء (سؤال الميدتيرم 2025 س2.8)، أسس خوارزمية DBSCAN القائمة على الكثافة، المعاملات Eps و MinPts، تصنيف النقاط (نقاط أساسية Core، نقاط حدودية Border، ونقاط ضوضاء وشواذ Noise)، مفاهيم الوصولية والترابط بالكثافة، مسائل حسابية كاملة محلولة خطوة بخطوة لخوارزمية DBSCAN بمصفوفات المسافات الإقليدية، ومقارنة شاملة بين K-Means و DBSCAN.',
  topics: [
    {
      id: 'bd-ch5-t1',
      title: 'K-Means Algorithm & Centroid Mathematics',
      titleAr: 'خوارزمية K-Means والحسابات الرياضية للمراكز',
      lessons: [
        {
          id: 'bd-ch5-l1',
          chapterId: 'bd-ch5',
          topicId: 'bd-ch5-t1',
          title: 'Clustering Fundamentals & The K-Means 4-Step Algorithm',
          titleAr: 'أسس التجميع وخوارزمية K-Means ذات الخطوات الأربع',
          estimatedMinutes: 20,
          sourceRef: { file: 'Module 4_Theory and Methods.pptx', page: 'Slides 8-16' },
          objectives: [
            'Define Unsupervised Clustering and explain distance as the inverse of similarity.',
            'Explain why numerical attributes and distance metrics are required for K-Means.',
            'Execute the 4-step iterative K-Means clustering algorithm.',
            'Explain termination conditions when cluster record assignments stabilize.',
          ],
          objectivesAr: [
            'تعريف التجميع غير الخاضع للإشراف وفهم مفهوم المسافة كمعكوس رياضي للتشابه.',
            'شرح سبب اشتراط البيانات الرقمية وتحديد مقياس مسافة واضح لتشغيل K-Means.',
            'تنفيذ الخطوات الأربع التكرارية لخوارزمية K-Means.',
            'تحديد شرط التوقف (Termination Condition) عند استقرار تعيينات النقاط للمراكز.',
          ],
          content: {
            enDefinition:
              'Clustering is an unsupervised machine learning method that partitions unlabeled data points into groups such that points within the same cluster are highly similar to each other, while points in different clusters are distinctly dissimilar.',
            arExplanation:
              'التجميع (Clustering) هو خوارزمية تعلم آلي غير خاضع للإشراف (Unsupervised Learning) تقوم بتقسيم نقاط البيانات غير المصنفة إلى مجموعات متجانسة، بحيث تكون العناصر داخل نفس المجموعة شديدة التشابه والتقارب، بينما تكون العناصر في المجموعات المختلفة شديدة التباين والتباعد.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Core Properties of K-Means Clustering:\n• Type: Unsupervised, partitioning clustering algorithm.\n• Input Requirement: Numerical data. Categorical data (e.g., Yes/No, Gender M/F) cannot be directly clustered with standard K-Means because Euclidean distance is undefined on qualitative categories.\n• Distance Metric: Typically standard Euclidean distance: d(p, q) = sqrt(sum((p_i - q_i)^2)).\n• Output: Coordinates of K cluster centroids and assignment tags for each input record.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الخصائص الجوهرية لخوارزمية K-Means:\n• النوع: خوارزمية تجميع غير خاضعة للإشراف تعتمد على تجزئة البيانات.\n• متطلبات المدخلات: بيانات رقمية حصراً؛ لا يمكن استخدام المتغيرات الفئوية (مثل نعم/لا أو الجنس ذكر/أنثى) مباشرة لأن المسافة الإقليدية غير معرفة على الحقول الوصفية.\n• مقياس المسافة: المسافة الإقليدية القياسية (Euclidean Distance).\n• المخرجات: إحداثيات مراكز المجموعات الـ K (Centroids) وعلامة انتماء كل سجل لمجموعته.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The 4-Step K-Means Iterative Algorithm:\n1. Step 1 (Initialization): Choose the number of clusters K; then select K initial random centroids in the feature space.\n2. Step 2 (Assignment): Assign each observation record to the cluster associated with the closest centroid based on minimum Euclidean distance.\n3. Step 3 (Centroid Update): Recalculate the centroid of each cluster as the arithmetic mean of all records currently assigned to that cluster.\n4. Step 4 (Convergence): Repeat Steps 2 and 3 iteratively until record assignments no longer change (convergence).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الخطوات الأربع التكرارية لخوارزمية K-Means:\n1. الخطوة 1 (التهيئة): تحديد عدد المجموعات المطلوب K، ثم اختيار K مراكز أولية عشوائية في فضاء البيانات.\n2. الخطوة 2 (التعيين): إلحاق وتعيين كل نقطة بيانية إلى المجموعة التابعة لأقرب مركز منها بناءً على أقل مسافة إقليدية.\n3. الخطوة 3 (تحديث المراكز): إعادة حساب إحداثيات مركز كل مجموعة كمتوسط حسابي لجميع النقاط المعينة لتلك المجموعة.\n4. الخطوة 4 (التقارب والاستقرار): تكرار الخطوتين 2 و 3 حتى تثبت التعيينات ولا تنتقل أي نقطة من مجموعة لأخرى.',
              },
            ],
          },
          examNotes:
            'Exam Note: Slide 20 explicitly asks: "The attributes of a dataset are purchase decision (Yes/No), Gender (M/F), and income. Can you use K-Means?" -> Answer: NO, because K-Means requires numerical data to calculate Euclidean distance.',
          examNotesAr:
            'ملاحظة امتحانية: تطرح شريحة 20 سؤالاً صريحاً: "إذا كانت بياناتك تحوي قرار الشراء (نعم/لا) والنوع (ذكر/أنثى)، فهل يمكنك استخدام K-Means؟" -> الإجابة: لا، لأن K-Means تشترط بيانات رقمية لحساب المسافات.',
        },
        {
          id: 'bd-ch5-l2',
          chapterId: 'bd-ch5',
          topicId: 'bd-ch5-t1',
          title: 'K-Means Centroid Recalculation & Feature Scaling',
          titleAr: 'حساب مراكز K-Means وحتمية القياس الموحد واختيار K',
          estimatedMinutes: 25,
          sourceRef: { file: 'Module 4_Theory and Methods.pptx', page: 'Slides 17-21', originalNumber: '2025 Q2.6, Q2.7, Q2.8' },
          objectives: [
            'Calculate cluster centroids mathematically as the arithmetic mean of coordinates.',
            'Master the exact Midterm 2025 Q2.6 centroid calculation problem.',
            'Explain why Feature Scaling is mandatory before applying K-Means (Midterm 2025 Q2.7).',
            'Explain how to pick K using Within-Sum-of-Squares (WSS) and the Elbow method.',
            'Identify customer segmentation as the prime use case for K-Means (Midterm 2025 Q2.8).',
          ],
          objectivesAr: [
            'حساب إحداثيات مراكز المجموعات رياضياً كمتوسط حسابي لإحداثيات النقاط التابعة لها.',
            'إتقان حل مسألة حساب المراكز الواردة نصاً في امتحان ميدتيرم 2025 (س2.6).',
            'شرح سبب حتمية القياس الموحد للسمات (Feature Scaling) قبل تشغيل K-Means (ميدتيرم 2025 س2.7).',
            'شرح كيفية اختيار K المثلى عبر مجموع المربعات الداخلي (WSS) ومنحنى الكوع (Elbow Method).',
            'تحديد تجزئة العملاء (Customer Segmentation) كأفضل تطبيق لـ K-Means (ميدتيرم 2025 س2.8).',
          ],
          content: {
            enDefinition:
              'A Centroid is the multi-dimensional arithmetic mean vector representing the center of all points in a cluster. Because Euclidean distance treats all dimensions equally, Feature Scaling is mandatory prior to clustering to prevent high-magnitude features from dominating the distance metric.',
            arExplanation:
              'مركز المجموعة (Centroid) هو المتجه الحسابي الذي يمثل المتوسط الرياضي لجميع النقاط المنتمية لتلك المجموعة. ونظراً لأن المسافة الإقليدية تعامل كافة المحاور بتساوٍ رياضي، فإن القياس الموحد للسمات (Feature Scaling) يُعد خطوة إجبارية قبل التجميع لمنع المتغيرات ذات الأرقام الضخمة من الهيمنة غير العادلة على حساب المسافات.',
            sections: [
              {
                type: 'callout',
                lang: 'en',
                content:
                  'Official Exam Problem (Midterm 2025 - Q2.6):\n• Scenario: "Assume you want to cluster 7 observations into 3 clusters using the K-Means clustering algorithm. After the first iteration, clusters C1, C2, C3 have following observations:\n  C1: {(2,2), (4,4), (6,6)}\n  C2: {(0,4), (4,0)}\n  C3: {(5,5), (9,9)}\nWhat will be the cluster centroids if you want to proceed with the second iteration?"\n• Options:\n  A. C1:(4,4), C2:(2,2), C3:(7,7) (Correct Answer!)\n  B. C1:(6,6), C2:(4,4), C3:(9,9)\n  C. C1:(2,2), C2:(0,0), C3:(5,5)\n  D. None of these',
              },
              {
                type: 'callout',
                lang: 'ar',
                content:
                  'مسألة الميدتيرم الرسمية المحلولة (ميدتيرم 2025 س2.6):\n• نص المسألة: "تريد تجميع 7 مشاهدات في 3 مجموعات باستخدام خوارزمية K-Means. بعد التكرار الأول، تشكلت المجموعات التالية:\n  C1: {(2,2), (4,4), (6,6)}\n  C2: {(0,4), (4,0)}\n  C3: {(5,5), (9,9)}\nما هي إحداثيات مراكز المجموعات لمتابعة التكرار الثاني؟"\n• الخيارات:\n  أ) C1:(4,4), C2:(2,2), C3:(7,7) (الإجابة الصحيحة!)\n  ب) C1:(6,6), C2:(4,4), C3:(9,9)\n  ج) C1:(2,2), C2:(0,0), C3:(5,5)\n  د) لا شيء مما سبق',
              },
              {
                type: 'callout',
                lang: 'en',
                content:
                  'Official Exam MCQ Focus: Feature Scaling (Midterm 2025 - Q2.7):\n• Question Stem: "Feature scaling is an important step before applying the K-Mean algorithm. What is the reason behind this?"\n• Correct Answer: A. In distance calculation, it will give the same weights for all features.\n• Academic Rationale: Without scaling, an attribute like Income ($10,000–$100,000) produces massive squared differences that drown out attributes like Age (20–70). Feature scaling normalizes variance so all dimensions contribute proportionally to distance.',
              },
              {
                type: 'callout',
                lang: 'ar',
                content:
                  'سؤال الميدتيرم حول القياس الموحد للسمات (ميدتيرم 2025 س2.7):\n• نص السؤال: "يُعد القياس الموحد للسمات (Feature Scaling) خطوة بالغة الأهمية قبل تطبيق K-Means، ما السبب وراء ذلك؟"\n• الإجابة الصحيحة: أ. في حساب المسافات، يعطي نفس الوزن النسبي لكافة المتغيرات (In distance calculation, it will give the same weights for all features).\n• التعليل الأكاديمي: بدون التطبيع والقياس الموحد، فإن متغيراً مثل الدخل بالآلاف يولد فروقاً تربيعية هائلة تطغى على متغيرات مثل العمر (20-70 سنة)، مما يجعل الخوارزمية تتجاهل بقية السمات تماماً.',
              },
              {
                type: 'callout',
                lang: 'en',
                content:
                  'Official Exam MCQ Focus: Use Cases (Midterm 2025 - Q2.8):\n• Question Stem: "Which of the following is an appropriate use case for K-Means clustering?"\n• Correct Answer: B. Grouping customers based on purchase behavior.\n• Academic Rationale: Predicting stock prices is regression, text classification is supervised learning, and recommender systems use collaborative filtering. Customer segmentation is the classic textbook exploratory clustering task.',
              },
              {
                type: 'callout',
                lang: 'ar',
                content:
                  'سؤال الميدتيرم حول مجالات التطبيق (ميدتيرم 2025 س2.8):\n• نص السؤال: "أي مما يلي يُعد مجال تطبيق ملائم لخوارزمية K-Means؟"\n• الإجابة الصحيحة: ب. تجميع العملاء استناداً لسلوكيات الشراء (Grouping customers based on purchase behavior).\n• التعليل الأكاديمي: التنبؤ بأسعار الأسهم هو انحدار، وتصنيف النصوص هو تعلم خاضع للإشراف، وأنظمة التوصية تعتمد على الفلترة التشاركية. بينما تجزئة العملاء هي التطبيق النموذجي للتجميع غير الخاضع للإشراف.',
              },
            ],
          },
          formulas: [
            {
              name: 'Cluster Centroid Mathematical Formula',
              latex: '\\vec{C}_k = \\left( \\frac{1}{|C_k|} \\sum_{p \\in C_k} x_p, \\; \\frac{1}{|C_k|} \\sum_{p \\in C_k} y_p \\right)',
              description: 'Coordinates of centroid C_k are the arithmetic mean of all points assigned to cluster C_k.',
              descriptionAr: 'إحداثيات المركز C_k هي المتوسط الحسابي لإحداثيات النقاط التابعة للمجموعة C_k.',
            },
            {
              name: 'Within-Sum-of-Squares (WSS)',
              latex: '\\text{WSS} = \\sum_{k=1}^K \\sum_{p \\in C_k} \\|p - \\vec{C}_k\\|^2',
              description: 'Total squared Euclidean distance from points to their assigned cluster centroids.',
              descriptionAr: 'مجموع مربعات المسافات الإقليدية بين النقاط ومراكز مجموعاتها التابعة.',
            },
          ],
          workedExamples: [
            {
              title: 'Official Midterm 2025 Problem: Centroid Recalculation Step-by-Step',
              titleAr: 'حل مسألة امتحان الميدتيرم 2025 س2.6 خطوة بخطوة',
              problemText:
                'Given clusters: C1 = {(2,2), (4,4), (6,6)}, C2 = {(0,4), (4,0)}, C3 = {(5,5), (9,9)}. Calculate the centroids for the next iteration.',
              problemTextAr:
                'معطى المجموعات: C1 = {(2,2), (4,4), (6,6)}، C2 = {(0,4), (4,0)}، C3 = {(5,5), (9,9)}. احسب مراكز المجموعات للتكرار الثاني.',
              steps: [
                {
                  stepNumber: 1,
                  action: 'Calculate Centroid for Cluster C1',
                  actionAr: 'حساب مركز المجموعة الأولى C1',
                  math: 'C_1 = \\left( \\frac{2 + 4 + 6}{3}, \\frac{2 + 4 + 6}{3} \\right) = \\left( \\frac{12}{3}, \\frac{12}{3} \\right) = (4, 4)',
                  explanation: 'Sum x-coordinates (2+4+6=12) and y-coordinates (2+4+6=12) and divide by 3 observations.',
                  explanationAr: 'جمع إحداثيات س (12) وص (12) والقسمة على عدد النقاط (3) ينتج المركز (4, 4).',
                },
                {
                  stepNumber: 2,
                  action: 'Calculate Centroid for Cluster C2',
                  actionAr: 'حساب مركز المجموعة الثانية C2',
                  math: 'C_2 = \\left( \\frac{0 + 4}{2}, \\frac{4 + 0}{2} \\right) = \\left( \\frac{4}{2}, \\frac{4}{2} \\right) = (2, 2)',
                  explanation: 'Sum x-coordinates (0+4=4) and y-coordinates (4+0=4) and divide by 2 observations.',
                  explanationAr: 'جمع إحداثيات س (4) وص (4) والقسمة على عدد النقاط (2) ينتج المركز (2, 2).',
                },
                {
                  stepNumber: 3,
                  action: 'Calculate Centroid for Cluster C3',
                  actionAr: 'حساب مركز المجموعة الثالثة C3',
                  math: 'C_3 = \\left( \\frac{5 + 9}{2}, \\frac{5 + 9}{2} \\right) = \\left( \\frac{14}{2}, \\frac{14}{2} \\right) = (7, 7)',
                  explanation: 'Sum x-coordinates (5+9=14) and y-coordinates (5+9=14) and divide by 2 observations.',
                  explanationAr: 'جمع إحداثيات س (14) وص (14) والقسمة على عدد النقاط (2) ينتج المركز (7, 7).',
                },
                {
                  stepNumber: 4,
                  action: 'Match with Exam Options',
                  actionAr: 'المطابقة مع خيارات الامتحان',
                  math: '\\text{Result: } C_1:(4,4), \\; C_2:(2,2), \\; C_3:(7,7) \\implies \\text{Option A is Correct}',
                  explanation: 'Exact match with Option A on Midterm 2025 examination paper.',
                  explanationAr: 'مطابقة تامة للخيار (أ) في ورقة امتحان الميدتيرم الرسمية لعام 2025.',
                },
              ],
            },
          ],
          examNotes:
            'Exam Note: To find centroids, never overcomplicate: add all x values and divide by count, then add all y values and divide by count.',
          examNotesAr:
            'ملاحظة امتحانية: لحساب المراكز، اجمع إحداثيات س واقسم على عدد نقاط المجموعة، واجمع إحداثيات ص واقسم على عدد النقاط.',
        },
      ],
    },
    {
      id: 'bd-ch5-t2',
      title: 'DBSCAN Density-Based Clustering & Problem Solving',
      titleAr: 'خوارزمية DBSCAN القائمة على الكثافة وحل المسائل الرياضية',
      lessons: [
        {
          id: 'bd-ch5-l3',
          chapterId: 'bd-ch5',
          topicId: 'bd-ch5-t2',
          title: 'DBSCAN Foundations: Density Philosophy, Eps & MinPts',
          titleAr: 'أسس خوارزمية DBSCAN: مفهوم الكثافة والمعاملات Eps و MinPts',
          estimatedMinutes: 20,
          sourceRef: { file: 'DBSCAN Curriculum Specifications', originalNumber: 'User Midterm Scope Mandate' },
          objectives: [
            'Explain the fundamental limitations of K-Means that motivated density-based clustering.',
            'Define DBSCAN (Density-Based Spatial Clustering of Applications with Noise).',
            'Define the parameter Eps (ε) and the Eps-neighborhood of a point.',
            'Define the parameter MinPts and explain density thresholds.',
          ],
          objectivesAr: [
            'شرح عيوب وقصور K-Means التي أدت لابتكار خوارزميات التجميع بالكثافة.',
            'تعريف خوارزمية DBSCAN (التجميع المكاني القائم على الكثافة مع عزل الضوضاء).',
            'تعريف نصف القطر Eps (ε) ومحيط الجوار لنقطة البيانات.',
            'تعريف معامل الحد الأدنى للنقاط MinPts ومفهوم عتبة الكثافة.',
          ],
          content: {
            enDefinition:
              'DBSCAN (Density-Based Spatial Clustering of Applications with Noise) is an unsupervised clustering algorithm that defines clusters as continuous dense regions of points separated by low-density regions, capable of discovering arbitrary non-spherical shapes and explicitly isolating noise outliers.',
            arExplanation:
              'خوارزمية DBSCAN (التجميع المكاني القائم على الكثافة للتطبيقات ذات الضوضاء) هي خوارزمية تجميع غير خاضعة للإشراف، تُعرّف المجموعات بأنها مناطق متصلة عالية الكثافة من النقاط تفصل بينها مناطق منخفضة الكثافة، وتتميز بقدرتها الفائقة على اكتشاف تجمعات ذات أشكال هندسية عشوائية غير كروية، وعزل النقاط الشاذة والضوضاء صراحة.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Why K-Means Fails on Complex Real-World Data:\n1. Fixed Number of Clusters: K-Means forces the user to guess K in advance.\n2. Spherical Assumption: K-Means assumes clusters are convex/globular balls of equal variance; it fails completely on concentric circles, rings, spirals, or crescent shapes.\n3. Outlier Vulnerability: K-Means assigns EVERY single outlier to a cluster, pulling centroids away from true cluster centers.\n\nDBSCAN Overcomes All Three:\n• Discovers the number of clusters automatically.\n• Finds clusters of arbitrary and irregular shapes.\n• Explicitly identifies outliers as "Noise" (-1) without corrupting clusters.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'لماذا تفشل خوارزمية K-Means في البيانات المعقدة؟\n1. اشتراط تحديد K مسبقاً: تجبر المستخدم على تخمين عدد المجموعات مسبقاً.\n2. افتراض الشكل الكروي المنتظم: تفترض K-Means أن المجموعات كروية ومحدبة ومتساوية الحجم؛ وتفشل تماماً في اكتشاف الدوائر متحدة المركز، أو الأشكال الحلزونية، أو الهلالية.\n3. الحساسية الشديدة للقيم الشاذة: تجبر K-Means كل نقطة شاذة على الانتماء لمجموعة، مما يسحب المركز بعيداً عن موضعه الحقيقي.\n\nتتفوق خوارزمية DBSCAN في التغلب على هذه العيوب الثلاثة:\n• تكتشف عدد المجموعات تلقائياً.\n• تكتشف تجمعات ذات أشكال عشوائية وغير منتظمة.\n• تعزل النقاط الشاذة صراحة وتصنفها كـ "ضوضاء" (Noise) دون تشويه المجموعات.',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The Two Core Parameters of DBSCAN:\n1. Eps (Epsilon, ε): The maximum radius distance defining the neighborhood around any point p.\n   - Eps-Neighborhood: N_eps(p) = { q in D | dist(p, q) <= eps }.\n2. MinPts: The minimum number of points (including the point p itself) that must reside within N_eps(p) for p to be considered a dense Core Point.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'المعاملان الجوهريان لخوارزمية DBSCAN:\n1. إبسيلون (Eps أو ε): أقصى مسافة تحدد نصف قطر جوار النقطة p (أي دائرة نصف قطرها ε حول p).\n   - محيط الجوار: N_eps(p) = { كل نقطة q تبعد عن p بمسافة أقل من أو تساوي ε }.\n2. الحد الأدنى للنقاط (MinPts): أقل عدد من النقاط (شاملاً النقطة p نفسها) يجب أن يتواجد داخل محيط الجوار N_eps(p) لاعتبار النقطة مركزاً عالي الكثافة (Core Point).',
              },
            ],
          },
          examNotes:
            'Exam Note: DBSCAN requires exactly TWO parameters: Eps (distance radius ε) and MinPts (density threshold). It does NOT require specifying K.',
          examNotesAr:
            'ملاحظة امتحانية: تتطلب خوارزمية DBSCAN معاملين فقط هما: Eps (نصف القطر ε) و MinPts (الحد الأدنى للنقاط). ولا تتطلب تحديد عدد المجموعات K مسبقاً.',
        },
        {
          id: 'bd-ch5-l4',
          chapterId: 'bd-ch5',
          topicId: 'bd-ch5-t2',
          title: 'Point Classifications: Core, Border, and Noise Points',
          titleAr: 'تصنيف النقاط في DBSCAN: النقاط الأساسية، الحدودية، والضوضاء',
          estimatedMinutes: 20,
          sourceRef: { file: 'DBSCAN Curriculum Specifications', originalNumber: 'Exam Key Definitions' },
          objectives: [
            'Classify any given data point into Core, Border, or Noise based on Eps and MinPts.',
            'Define Directly Density-Reachable, Density-Reachable, and Density-Connected.',
            'Explain why clusters in DBSCAN are maximal sets of density-connected points.',
          ],
          objectivesAr: [
            'تصنيف أي نقطة بيانية معطاة إلى نقطة أساسية (Core)، أو حدودية (Border)، أو ضوضاء (Noise).',
            'تعريف الوصولية المباشرة بالكثافة، والوصولية بالكثافة، والترابط بالكثافة.',
            'شرح كيف تتشكل المجموعات في DBSCAN كأقصى مجموعة مترابطة بالكثافة.',
          ],
          content: {
            enDefinition:
              'In DBSCAN, every data point is classified into one of three categories: a Core Point (has at least MinPts in its ε-neighborhood), a Border Point (has fewer than MinPts but lies within ε of a core point), or a Noise Point (neither core nor border).',
            arExplanation:
              'في خوارزمية DBSCAN، تُصنف كل نقطة إلى إحدى فئات ثلاث: نقطة أساسية Core (تحوي في جوارها عدداً لا يقل عن MinPts)، أو نقطة حدودية Border (تحوي أقل من MinPts لكنها تقع داخل جوار نقطة أساسية)، أو نقطة ضوضاء Noise (ليست أساسية ولا حدودية).',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'The 3 Point Classifications:\n1. Core Point: Point p is a core point if |N_eps(p)| >= MinPts. Core points form the dense interior of a cluster.\n2. Border Point: Point p is a border point if |N_eps(p)| < MinPts, but p is within distance eps of at least one core point q (p in N_eps(q)). Border points form the outer perimeter of a cluster.\n3. Noise Point (Outlier): Point p is a noise point if |N_eps(p)| < MinPts and p is NOT within distance eps of ANY core point. Labeled as cluster -1.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'الفئات الثلاث لتصنيف النقاط:\n1. نقطة أساسية (Core Point): النقطة p تكون أساسية إذا كان عدد جيرانها |N_eps(p)| >= MinPts. تمثل النقاط الأساسية قلب وداخل المجموعة الكثيفة.\n2. نقطة حدودية (Border Point): النقطة p تكون حدودية إذا كان عدد جيرانها |N_eps(p)| < MinPts، ولكنها تقع داخل جوار نقطة أساسية q واحدة على الأقل. تمثل النقاط الحدودية الإطار الخارجي للمجموعة.\n3. نقطة ضوضاء / شاذة (Noise Point): النقطة p تكون ضوضاء إذا كان عدد جيرانها |N_eps(p)| < MinPts ولا تقع في جوار أي نقطة أساسية إطلاقاً. تُعطى وسم المجموعة (-1).',
              },
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Density Reachability Relationships:\n• Directly Density-Reachable: Point p is directly density-reachable from point q if p is in N_eps(q) and q is a Core Point (asymmetric: core points can reach border points, but border points cannot reach core points).\n• Density-Reachable: A point p is density-reachable from q if there is a chain of points p1, p2, ..., pn with p1=q and pn=p such that each p_{i+1} is directly density-reachable from p_i.\n• Density-Connected: Point p is density-connected to point q if there exists a third point o such that both p and q are density-reachable from o (symmetric relationship).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'علاقات الوصولية والترابط بالكثافة:\n• الوصول المباشر بالكثافة (Directly Density-Reachable): النقطة p يمكن الوصول إليها مباشرة من q إذا كانت p داخل جوار q وكانت q نقطة أساسية (علاقة غير متماثلة؛ فالنقطة الأساسية تصل للحدودية، لكن الحدودية لا تصل للأساسية).\n• الوصولية بالكثافة (Density-Reachable): يمكن الوصول من q إلى p إذا وجدت سلسلة نقاط p1, p2, ..., pn بحيث تكون كل نقطة قابلة للوصول المباشر من سابقتها.\n• الترابط بالكثافة (Density-Connected): النقطتان p و q مترابطتان بالكثافة إذا وجدت نقطة ثالثة o يمكن الوصول منها إلى كل من p و q (علاقة متماثلة تشكل المجموعة الكاملة).',
              },
            ],
          },
          examNotes:
            'Exam Note: A border point cannot reach other points because it is not a Core point. A cluster consists of all core points that are density-connected, plus all border points reachable from them.',
          examNotesAr:
            'ملاحظة امتحانية: النقطة الحدودية لا تستطيع التوسع أو الوصول لنقاط أخرى لأنها ليست نقطة أساسية. تتكون المجموعة من جميع النقاط الأساسية المترابطة بالكثافة مضافاً إليها النقاط الحدودية التابعة لها.',
        },
        {
          id: 'bd-ch5-l5',
          chapterId: 'bd-ch5',
          topicId: 'bd-ch5-t2',
          title: 'Worked DBSCAN Problems: Distance Matrix & Step-by-Step Tracing',
          titleAr: 'حل مسائل DBSCAN: مصفوفة المسافات وخطوات التتبع خطوة بخطوة',
          estimatedMinutes: 30,
          sourceRef: { file: 'DBSCAN Examination Exercises', originalNumber: 'Crucial Midterm Problem Solving' },
          objectives: [
            'Construct a pairwise Euclidean distance matrix for coordinate datasets.',
            'Compute the ε-neighborhood for every point using a distance matrix.',
            'Systematically label points as Core, Border, or Noise.',
            'Synthesize final cluster assignments and identify isolated outliers.',
          ],
          objectivesAr: [
            'بناء مصفوفة المسافات الإقليدية التبادلية لإحداثيات النقاط.',
            'استخراج محيط الجوار (ε-Neighborhood) لكل نقطة بالاستعانة بمصفوفة المسافات.',
            'تصنيف النقاط منهجياً إلى أساسية (Core)، حدودية (Border)، وشاذة (Noise).',
            'استخلاص المجموعات النهائية الناتجة وتحديد نقاط الضوضاء المعزولة بدقة.',
          ],
          content: {
            enDefinition:
              'Solving a DBSCAN numerical problem involves computing the pairwise Euclidean distance matrix between all observations, evaluating the count of neighbors within radius ε against MinPts, classifying each point into Core/Border/Noise, and chaining density-connected core points into final clusters.',
            arExplanation:
              'حل مسائل خوارزمية DBSCAN الحسابية يتطلب بناء مصفوفة المسافات الإقليدية بين كافة النقاط، ثم مقارنة عدد الجيران الواقعين داخل نصف القطر ε مع الحد الأدنى MinPts، لتصنيف كل نقطة إلى أساسية أو حدودية أو ضوضاء، ثم ربط النقاط الأساسية المترابطة بالكثافة في مجموعات نهائية.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Standard Step-by-Step Algorithm for Solving DBSCAN Numerical Problems:\n1. Step 1: Calculate the Pairwise Distance Matrix using Euclidean distance: d(A, B) = sqrt((x_A - x_B)^2 + (y_A - y_B)^2).\n2. Step 2: For each point P_i, find all points P_j where d(P_i, P_j) <= eps (always include P_i itself; distance to itself is 0).\n3. Step 3: Count the neighbors: Count = |N_eps(P_i)|.\n4. Step 4: Classify Core Points: If Count >= MinPts, mark as CORE.\n5. Step 5: Classify Border Points: If Count < MinPts, check if any neighbor in N_eps(P_i) is a CORE point. If yes, mark as BORDER.\n6. Step 6: Classify Noise: If Count < MinPts and NO neighbor is a core point, mark as NOISE (-1).\n7. Step 7: Form Clusters: Connect all core points that are within eps of each other (density-reachable) into Cluster 1, Cluster 2, etc., and attach border points to the respective core point’s cluster.',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'المنهجية القياسية لحل مسائل DBSCAN الحسابية في الامتحانات:\n1. الخطوة 1: حساب مصفوفة المسافات الإقليدية التبادلية بين كل نقطتين: d = sqrt((x1-x2)^2 + (y1-y2)^2).\n2. الخطوة 2: لكل نقطة، استخراج كافة النقاط التي تبعد عنها بمسافة <= eps (مع احتساب النقطة نفسها دائماً لأن المسافة بينها وبين نفسها صفر).\n3. الخطوة 3: عد الجيران: Count = |N_eps(P)|.\n4. الخطوة 4: تحديد النقاط الأساسية (Core): إذا كان Count >= MinPts، تُصنف النقطة كنقطة أساسية (CORE).\n5. الخطوة 5: تحديد النقاط الحدودية (Border): إذا كان Count < MinPts وكان أحد جيرانها نقطة أساسية CORE، تُصنف كنقطة حدودية (BORDER).\n6. الخطوة 6: تحديد الضوضاء (Noise): إذا كان Count < MinPts ولم يكن أي من جيرانها نقطة أساسية، تُصنف كضوضاء (NOISE).\n7. الخطوة 7: تكوين المجموعات: دمج النقاط الأساسية المتجاورة معاً في نفس المجموعة، وإلحاق النقاط الحدودية بمجموعة النقطة الأساسية التابعة لها.',
              },
            ],
          },
          formulas: [
            {
              name: 'Pairwise 2D Euclidean Distance',
              latex: 'd(P_1, P_2) = \\sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}',
              description: 'Straight-line metric distance between two coordinate points.',
              descriptionAr: 'المسافة الإقليدية المستقيمة بين نقطتين في المستوى ثنائي الأبعاد.',
            },
            {
              name: 'Core Point Criterion',
              latex: '|N_\\epsilon(P)| \\ge \\text{MinPts} \\implies P \\in \\text{Core Points}',
              description: 'Condition for point P to be classified as a dense Core Point.',
              descriptionAr: 'الشرط الحتمي لتصنيف النقطة P كنقطة أساسية عالية الكثافة.',
            },
          ],
          workedExamples: [
            {
              title: 'Comprehensive University Exam Problem: DBSCAN Classification on 7 Points',
              titleAr: 'مسألة امتحانية نموذجية شاملة: تتبع خوارزمية DBSCAN على 7 نقاط',
              problemText:
                'Given 7 observations: P1(1,1), P2(1,2), P3(2,1), P4(2,2), P5(8,8), P6(8,9), P7(20,20). Set parameters Eps = 1.5 and MinPts = 3. Classify all points into Core, Border, or Noise, and determine the resulting clusters.',
              problemTextAr:
                'معطى 7 نقاط بيانية: P1(1,1), P2(1,2), P3(2,1), P4(2,2), P5(8,8), P6(8,9), P7(20,20). معاملات الخوارزمية: Eps = 1.5 و MinPts = 3. صنف كل نقطة إلى (أساسية، حدودية، ضوضاء)، وحدد المجموعات الناتجة.',
              steps: [
                {
                  stepNumber: 1,
                  action: 'Compute pairwise distances for Cluster 1 candidates (P1, P2, P3, P4)',
                  actionAr: 'حساب المسافات الإقليدية للمجموعة الأولى (P1, P2, P3, P4)',
                  math: 'd(P_1, P_2) = \\sqrt{(1-1)^2 + (1-2)^2} = 1.0 \\\\\nd(P_1, P_3) = \\sqrt{(1-2)^2 + (1-1)^2} = 1.0 \\\\\nd(P_1, P_4) = \\sqrt{(1-2)^2 + (1-2)^2} = \\sqrt{2} \\approx 1.414 \\le 1.5 \\\\\nd(P_2, P_3) = \\sqrt{(1-2)^2 + (2-1)^2} = \\sqrt{2} \\approx 1.414 \\le 1.5 \\\\\nd(P_2, P_4) = \\sqrt{(1-2)^2 + (2-2)^2} = 1.0 \\\\\nd(P_3, P_4) = \\sqrt{(2-2)^2 + (1-2)^2} = 1.0',
                  explanation: 'All pairwise distances between P1, P2, P3, and P4 are <= 1.5 (either 1.0 or 1.414).',
                  explanationAr: 'كافة المسافات التبادلية بين النقاط الأربع الأولى أقل من أو تساوي 1.5.',
                },
                {
                  stepNumber: 2,
                  action: 'Compute pairwise distances for P5, P6, and P7',
                  actionAr: 'حساب المسافات للنقاط P5 و P6 و P7',
                  math: 'd(P_5, P_6) = \\sqrt{(8-8)^2 + (8-9)^2} = 1.0 \\le 1.5 \\\\\nd(P_5, P_1) = \\sqrt{(8-1)^2 + (8-1)^2} = \\sqrt{98} \\approx 9.9 > 1.5 \\\\\nd(P_7, P_i) \\ge \\sqrt{(20-8)^2 + (20-8)^2} = \\sqrt{288} \\approx 17.0 > 1.5',
                  explanation: 'P5 and P6 are close to each other (dist=1.0) but far from P1-P4. P7 is isolated (dist >= 17).',
                  explanationAr: 'النقطتان P5 و P6 متقاربتان (مسافة 1.0)، لكنهما بعيدتان جداً عن بقية النقاط. والنقطة P7 معزولة تماماً.',
                },
                {
                  stepNumber: 3,
                  action: 'Determine Eps-Neighborhood N_eps(P_i) for each point',
                  actionAr: 'تحديد محيط الجوار N_eps لكل نقطة',
                  math: 'N_{1.5}(P_1) = \\{P_1, P_2, P_3, P_4\\} \\implies |N| = 4 \\\\\nN_{1.5}(P_2) = \\{P_1, P_2, P_3, P_4\\} \\implies |N| = 4 \\\\\nN_{1.5}(P_3) = \\{P_1, P_2, P_3, P_4\\} \\implies |N| = 4 \\\\\nN_{1.5}(P_4) = \\{P_1, P_2, P_3, P_4\\} \\implies |N| = 4 \\\\\nN_{1.5}(P_5) = \\{P_5, P_6\\} \\implies |N| = 2 \\\\\nN_{1.5}(P_6) = \\{P_5, P_6\\} \\implies |N| = 2 \\\\\nN_{1.5}(P_7) = \\{P_7\\} \\implies |N| = 1',
                  explanation: 'Remember to always include the point itself in its neighborhood count.',
                  explanationAr: 'تذكر دائماً احتساب النقطة نفسها ضمن قائمة جيرانها.',
                },
                {
                  stepNumber: 4,
                  action: 'Apply Core, Border, and Noise classification rules (MinPts = 3)',
                  actionAr: 'تطبيق قواعد التصنيف (الحد الأدنى MinPts = 3)',
                  math: 'P_1, P_2, P_3, P_4: \\text{Count} = 4 \\ge 3 \\implies \\mathbf{CORE} \\\\\nP_5, P_6: \\text{Count} = 2 < 3, \\text{ and neither has a Core neighbor} \\implies \\mathbf{NOISE} \\\\\nP_7: \\text{Count} = 1 < 3, \\text{ and no Core neighbor} \\implies \\mathbf{NOISE}',
                  explanation: 'P1, P2, P3, P4 are Core points. P5 and P6 fail MinPts=3 and have no Core neighbor, so they are Noise! P7 is Noise.',
                  explanationAr: 'النقاط P1 و P2 و P3 و P4 نقاط أساسية (CORE). النقطتان P5 و P6 تحويان 2 جيران فقط (أقل من 3) وليس لديهما جار أساسي، إذن هما ضوضاء (NOISE)! والنقطة P7 ضوضاء.',
                },
                {
                  stepNumber: 5,
                  action: 'Synthesize Final Clustering Output',
                  actionAr: 'استخلاص المجموعات والنتائج النهائية',
                  math: '\\text{Cluster 1} = \\{P_1, P_2, P_3, P_4\\} \\\\\n\\text{Noise Points} = \\{P_5, P_6, P_7\\}',
                  explanation: 'DBSCAN creates exactly 1 cluster and labels 3 points as noise.',
                  explanationAr: 'تنتج الخوارزمية مجموعة واحدة متصلة {P1, P2, P3, P4}، وتصنف النقاط {P5, P6, P7} كضوضاء.',
                },
              ],
            },
          ],
          examNotes:
            'Exam Note: In DBSCAN problems, if a point has count < MinPts, check its neighbors: if at least one neighbor is CORE, it is a BORDER point; if none of its neighbors are core, it is NOISE.',
          examNotesAr:
            'ملاحظة امتحانية: في مسائل DBSCAN، إذا كان عدد جيران النقطة أقل من MinPts، افحص جيرانها: إذا كان أحدهم CORE تصبح BORDER، وإذا لم يكن أي منهم CORE تصبح NOISE.',
        },
        {
          id: 'bd-ch5-l6',
          chapterId: 'bd-ch5',
          topicId: 'bd-ch5-t2',
          title: 'Comparative Analysis: K-Means vs. DBSCAN',
          titleAr: 'المقارنة الشاملة: خوارزمية K-Means مقابل خوارزمية DBSCAN',
          estimatedMinutes: 20,
          sourceRef: { file: 'Module 4 & DBSCAN Comparative Theory', originalNumber: 'High-Yield Comparison Table' },
          objectives: [
            'Compare K-Means and DBSCAN across 7 core analytical dimensions.',
            'Explain how each algorithm handles noise and outliers.',
            'Contrast spherical/globular cluster assumptions with arbitrary density shapes.',
            'Analyze computational complexity and parameter sensitivity for both methods.',
          ],
          objectivesAr: [
            'المقارنة بين K-Means و DBSCAN عبر 7 أبعاد تحليلية مقارنة شاملة.',
            'شرح كيفية تعامل كل خوارزمية مع القيم الشاذة والضوضاء.',
            'المقارنة بين افتراض الأشكال الكروية واكتشاف التجمعات ذات الأشكال الهندسية المعقدة.',
            'تحليل التعقيد الحسابي وحساسية المعاملات لكلتا الطريقتين.',
          ],
          content: {
            enDefinition:
              'K-Means is a centroid-based partitioning algorithm that requires pre-specifying K and assumes spherical clusters, whereas DBSCAN is a density-based algorithm that automatically discovers arbitrary cluster shapes and explicitly isolates noise outliers using parameters Eps and MinPts.',
            arExplanation:
              'خوارزمية K-Means هي خوارزمية تجزئة قائمة على المراكز تفترض أشكالاً كروية وتشترط تحديد K مسبقاً، بينما خوارزمية DBSCAN هي خوارزمية قائمة على الكثافة تكتشف أشكال المجموعات العشوائية تلقائياً وتعزل النقاط الشاذة صراحة باستخدام المعاملين Eps و MinPts.',
            sections: [
              {
                type: 'paragraph',
                lang: 'en',
                content:
                  'Comprehensive Comparison: K-Means vs. DBSCAN:\n\n1. Number of Clusters:\n• K-Means: Must be specified by the user in advance (K).\n• DBSCAN: Discovered automatically based on data density.\n\n2. Cluster Geometry & Shapes:\n• K-Means: Assumes convex, spherical, or globular clusters of similar size.\n• DBSCAN: Can discover clusters of arbitrary, non-linear, and irregular shapes (e.g., spirals, concentric rings).\n\n3. Handling of Noise & Outliers:\n• K-Means: Highly sensitive; forces every single outlier into the nearest cluster, skewing centroids.\n• DBSCAN: Highly robust; explicitly identifies and isolates outliers as "Noise" (cluster -1).\n\n4. Required Input Parameters:\n• K-Means: K (number of clusters).\n• DBSCAN: Eps (distance radius ε) and MinPts (minimum neighborhood points).\n\n5. Computational Complexity:\n• K-Means: O(I * K * n * d) – fast and scalable to very large datasets.\n• DBSCAN: O(n * log n) with spatial index (R-tree/k-d tree) or O(n^2) without spatial index.\n\n6. Limitations & Weaknesses:\n• K-Means: Struggles with non-spherical clusters, varying cluster sizes, and outliers.\n• DBSCAN: Struggles when datasets have varying densities (a single global Eps cannot capture both dense and sparse clusters) and suffers in very high dimensions (Curse of Dimensionality).',
              },
              {
                type: 'paragraph',
                lang: 'ar',
                content:
                  'مصفوفة المقارنة الشاملة: K-Means مقابل DBSCAN:\n\n1. عدد المجموعات:\n• K-Means: يشترط أن يحدده المستخدم مسبقاً (K).\n• DBSCAN: تكتشف عدد المجموعات تلقائياً استناداً لكثافة البيانات.\n\n2. أشكال وهندسة المجموعات:\n• K-Means: تفترض مجموعات كروية ومحدبة متقاربة الحجم.\n• DBSCAN: قادرة على اكتشاف أشكال هندسية عشوائية ومعقدة (مثل الحلقات المتداخلة والأشكال الحلزونية والهلالية).\n\n3. التعامل مع الضوضاء والشواذ:\n• K-Means: شديدة الحساسية للشواذ؛ تجبر كل نقطة شاذة على الدخول في مجموعة مما يشوه المراكز.\n• DBSCAN: بالغة القوة والمناعة ضد الشواذ؛ تعزل النقاط المتطرفة صراحة وتصنفها كضوضاء (Noise).\n\n4. المعاملات المطلوبة:\n• K-Means: تتطلب تحديد K فقط.\n• DBSCAN: تتطلب تحديد نصف القطر Eps والحد الأدنى للنقاط MinPts.\n\n5. التعقيد الحسابي:\n• K-Means: O(I * K * n) سريعة جداً وقابلة للتوسع في البيانات المليونية.\n• DBSCAN: O(n log n) باستخدام فهارس مكانية أو O(n^2) للمصفوفة الكاملة.\n\n6. العيوب والقيود:\n• K-Means: تفشل في الأشكال غير الكروية ومع وجود الشواذ.\n• DBSCAN: تعاني عندما تحوي البيانات كثافات متفاوتة (فلا يصلح نصف قطر Eps موحد للمناطق الكثيفة والمناطق الأقل كثافة معاً)، وتتأثر بلعنة الأبعاد (Curse of Dimensionality).',
              },
            ],
          },
          examNotes:
            'Exam Note: High-probability exam question: "Compare K-Means and DBSCAN in terms of cluster shapes, outlier handling, and parameters." Memorize the 6 comparison dimensions.',
          examNotesAr:
            'ملاحظة امتحانية: سؤال مقارنة متكرر في الامتحانات: "قارن بين K-Means و DBSCAN من حيث شكل المجموعات، التعامل مع الشواذ، والمعاملات المطلوبة." احفظ أبعاد المقارنة الستة جيداً.',
        },
      ],
    },
  ],
};
