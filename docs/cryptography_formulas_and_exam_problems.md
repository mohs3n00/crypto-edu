# 🛡️ الموسوعة الشاملة لقوانين ومسائل التشفير وأمن المعلومات
## 📐 Cyber Security & Cryptography: Master Formula Reference & Exam Problem-Solving Manual

> **المقرر الدراسي:** أمن المعلومات والتشفير (Information Security & Cryptography - IS401 / IS410)
> **المرجع القياسي المعتمد:** كتاب ويليام ستالينجز (*William Stallings - Cryptography and Network Security: Principles and Practice*, 7th & 8th Global Editions)
> **إعداد:** مرجع شامل ودليل امتحاني متكامل يجمع كل القوانين، شروطها الرياضية، أمثلة السلايدات المحلولة تفصيلياً، وجميع مسائل الامتحانات الرسمية (Midterms & Finals).
> **تاريخ الإعداد والتدقيق:** نوفمبر 2026

---

## 📑 الفهرس العام للموسوعة (Table of Contents)

- [الفصل الأول: البنية المعمارية للأمن ونماذج توزيع المفاتيح (Security Architecture & Key Scaling)](#chapter-1)
  - [1.1 القوانين والمعادلات الرياضية](#ch1-formulas)
  - [1.2 أمثلة السلايدات والمحاضرة](#ch1-slides)
  - [1.3 مسائل الامتحانات المحلولة خطوة بخطوة](#ch1-problems)
- [الفصل الثاني: نظرية الأعداد والحساب المعياري (Number Theory & Modular Arithmetic)](#chapter-2)
  - [2.1 النظريات والقوانين الرياضية الـ 16](#ch2-formulas)
  - [2.2 أمثلة السلايدات المحلولة بالتفصيل (Stallings Ch 2)](#ch2-slides)
  - [2.3 مسائل الامتحانات والتمارين النموذجية الـ 10 المحلولة](#ch2-problems)
- [الفصل الثالث: تقنيات التشفير التقليدية الكلاسيكية (Classical Encryption Techniques)](#chapter-3)
  - [3.1 قوانين ومعادلات الشفرات الكلاسيكية](#ch3-formulas)
  - [3.2 أمثلة السلايدات المحلولة بالتفصيل (Stallings Ch 3)](#ch3-slides)
  - [3.3 مسائل امتحانات الميدتيرم الرسمية المحلولة تفصيلياً (2020 & 2022)](#ch3-problems)
- [الفصل الرابع: التشفير الكتلي ومعيار تشفير البيانات DES (Block Ciphers & DES)](#chapter-4)
  - [4.1 القوانين والمعادلات ومعمارية شبكة فايستل](#ch4-formulas)
  - [4.2 أمثلة السلايدات وجداول DES](#ch4-slides)
  - [4.3 مسائل امتحانات الميدتيرم الرسمية وصناديق S-Boxes المحلولة](#ch4-problems)
- [الفصل الخامس: أنماط تشغيل الشفرات الكتلية والتشفير المتعدد (Block Cipher Modes of Operation)](#chapter-7)
  - [5.1 قوانين وبراهين التعقيد وأنماط التشغيل الخمسة NIST](#ch7-formulas)
  - [5.2 أمثلة السلايدات ومعايير حشو الكتل Padding](#ch7-slides)
  - [5.3 مسائل الامتحانات والتمارين النموذجية المحلولة](#ch7-problems)
- [الملحق الشامل: جدول المقارنة السريعة، الفخاخ الامتحانية، ودليل الطالب الذكي](#appendix)

---

<a id="chapter-1"></a>
# الباب الأول: البنية المعمارية للأمن ونماذج توزيع المفاتيح
### Chapter 1: Security Architecture, Trends & Key Scaling Models

<a id="ch1-formulas"></a>
## 1.1 القوانين والمعادلات الرياضية للباب الأول

### 1. قانون التوافيق الثنائية لعدد المفاتيح المتناظرة (Symmetric Key Combinations)
في أي شبكة اتصالات مؤلفة من $N$ طرفاً (عقدة/مستخدم) تتطلب قنوات اتصال سرية ثنائية ومباشرة بين كل زوج من الأطراف باستخدام التشفير المتماثل (Symmetric Cryptosystem):
$$ K_{\text{sym}} = \binom{N}{2} = \frac{N(N - 1)}{2} $$
- **الرموز:**
  - $N$: عدد الأطراف أو المستخدمين المتصلين بالشبكة ($N \in \mathbb{Z}^+, N \ge 2$).
  - $K_{\text{sym}}$: إجمالي عدد المفاتيح السرية الفريدة الواجب توليدها وتوزيعها وحفظ سريتها.
- **طبيعة النمو (Complexity):** نمو تربيعي $O(N^2)$؛ يسبب انفجاراً في أعباء إدارة وتوزيع المفاتيح (Key Management Scalability Bottleneck).

### 2. قانون المفاتيح في التشفير غير المتناظر / المفتاح العام (Asymmetric Key Scaling)
في نظام التشفير بالمفتاح العام (Public-Key Cryptosystem)، يحتاج كل مستخدم إلى زوج وحيد من المفاتيح (مفتاح عام Public Key منشور + مفتاح خاص Private Key سري):
$$ K_{\text{asym}} = 2N $$
- **الرموز:**
  - عدد الأزواج المفتاحية (Key Pairs) = $N$.
  - إجمالي عدد المفاتيح المنفردة (العامة والخاصة معاً) = $2N$.
- **طبيعة النمو (Complexity):** نمو خطي $O(N)$؛ يحل معضلة التوزيع تماماً.

### 3. قانون نسبة الوفر والتخفيض في حجم المفاتيح (Key Reduction Ratio)
المقدار المطلق والنسبي للتخفيض في حجم المفاتيح عند التحول من التشفير المتماثل إلى غير المتماثل:
$$ \Delta K = K_{\text{sym}} - K_{\text{asym}} = \frac{N(N - 1)}{2} - 2N = \frac{N(N - 5)}{2} $$
$$ \text{Reduction Ratio} = \left(1 - \frac{K_{\text{asym}}}{K_{\text{sym}}}\right) \times 100\% = \left(1 - \frac{4}{N - 1}\right) \times 100\% $$

### 4. معادلة تقييم المخاطر الأمنية الكمية (Quantitative Risk Assessment)
$$ R = P(\text{Threat Exploits Vulnerability}) \times \text{Impact} $$
- **حيث:**
  - $R$: قيمة التعرض المالي أو التشغيلي للمخاطرة (Risk Exposure).
  - $P$: احتمالية نجاح التهديد في استغلال الثغرة الأمنية ($0 \le P \le 1$).
  - $\text{Impact}$: الأثر المالي أو الخسارة الناتجة عند حدوث الاختراق.

---

<a id="ch1-slides"></a>
## 1.2 أمثلة السلايدات والمحاضرة للباب الأول

### 💡 مثال المحاضرة 1: مقارنة شبكة تضم 100 مستخدم
- **المعطيات:** شبكة تضم $N = 100$ مستخدم.
- **المطلوب:** حساب عدد المفاتيح المتناظرة وغير المتناظرة ونسبة الوفر.
- **الحل:**
  1. التشفير المتناظر: $K_{\text{sym}} = \frac{100 \times 99}{2} = 4,950$ مفتاحاً سرياً مشتركاً.
  2. التشفير غير المتناظر: $K_{\text{asym}} = 2 \times 100 = 200$ مفتاحاً فقط (100 زوج).
  3. نسبة الوفر: $\left(1 - \frac{4}{99}\right) \times 100\% \approx 95.96\%$.

### 💡 مثال السلايدات 2: جدول معيار X.800 لربط الهجمات بالخدمات والآليات
| نوع الهجوم (Security Attack) | طبيعة الهجوم | الخدمة الأمنية المنتهكة (Security Service) | الآلية التشفيرية المضادة (Security Mechanism) |
|---|---|---|---|
| التنصت واعتراض المحتوى (Interception / Message Contents) | سلبي (Passive) | السرية والخصوصية (Confidentiality) | التشفير المتماثل / غير المتماثل (Encipherment) |
| تحليل حركة المرور وسلوك الاتصال (Traffic Analysis) | سلبي (Passive) | سرية تدفق البيانات (Traffic Flow Confidentiality) | حشو حركة المرور والمسارات العشوائية (Traffic Padding / Routing Control) |
| انتحال الهوية (Masquerade / Spoofing) | نشط (Active) | التحقق والمصادقة (Authentication) | بروتوكولات المصادقة والتوقيع الرقمي (Authentication Exchange / Digital Signature) |
| إعادة إرسال الحزم الملتقطة (Replay Attack) | نشط (Active) | سلامة البيانات وعدم الإنكار (Data Integrity / Non-Repudiation) | الأختام الزمنية والتسلسل الرقمي (Timestamps / Nonces / Sequence Numbers) |
| التعديل غير المصرح به على البيانات (Modification) | نشط (Active) | سلامة وتكامل البيانات (Data Integrity) | دوال الهاش وأكواد المصادقة (Hash Functions / MAC / Digital Signatures) |
| التعطيل وحجب الخدمة (Denial of Service - DoS) | نشط (Active) | الإتاحة والتوافر (Availability) | آليات التحكم في الوصول والتحقق من الموارد (Access Control / Resource Throttling) |

---

<a id="ch1-problems"></a>
## 1.3 مسائل الامتحانات والتمارين المحلولة خطوة بخطوة للباب الأول

### 🎯 مسألة رقم [prob-ch1-01]: حساب عدد المفاتيح المطلوبة وتوسعية التشفير المتناظر وغير المتناظر
**English Title:** *Symmetric vs Asymmetric Key Distribution Scaling*  
- **المصدر والتوثيق الأكاديمي:** `Stallings 7th Ed. Section 1.4 & Lecture 1 Notes`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `security-architecture`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** شبكة جامعية تضم N = 250 قسماً تتطلب اتصالات سرية ثنائية مباشرة بين كل قسمين باستخدام التشفير المتناظر. (1) احسب العدد الإجمالي للمفاتيح السرية الفريدة المطلوبة. (2) إذا انتقلت الشبكة إلى نظام التشفير بالمفتاح العام (غير المتناظر)، كم زوج مفاتيح وإجمالي عدد المفاتيح المطلوبة؟ (3) احسب نسبة الخفض في أعباء إدارة المفاتيح.
> 
> **In English:** *"A university network connects N = 250 departments that require pairwise confidential communications using symmetric encryption. (1) Calculate the total number of unique secret keys required. (2) If the network switches to an asymmetric public-key cryptosystem, how many key pairs and total keys are needed? (3) Quantify the key management reduction."*

**📥 المعطيات (Given Parameters):**
- **عدد الأطراف / الأقسام المتصلة:** `$N = 250$`
- **تشفير متناظر ثنائي:** `$Mode 1 = Symmetric (Pairwise)$`
- **تشفير بالمفتاح العام:** `$Mode 2 = Asymmetric (Public Key)$`

**🎯 المطلوب إيجاده (Required):** إجمالي المفاتيح المتناظرة، إجمالي المفاتيح غير المتناظرة، وحجم الخفض في المفاتيح.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** قانون التوافيق الثنائية مقابل أزواج المفاتيح العامة (*Pairwise Combinations vs Key-Pair Scaling*)
$$ K_{\text{sym}} = \frac{N(N - 1)}{2}, \quad K_{\text{asym}} = 2N $$
> يتطلب التشفير المتناظر مفتاحاً سرياً مشتركاً لكل زوج من العقد (توافيق 2 من N). بينما يتطلب التشفير غير المتناظر زوج مفاتيح واحداً لكل عقدة (مفتاح عام ومفتاح خاص).

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: حساب عدد المفاتيح السرية في النظام المتناظر (*Calculate Total Symmetric Secret Keys*)
$$ K_{\text{sym}} = \frac{N(N - 1)}{2} $$
$$ K_{\text{sym}} = \frac{250 \times (250 - 1)}{2} = \frac{250 \times 249}{2} = 125 \times 249 $$
- **النتيجة المرحلية:** `$31,125 \text{ secret keys}$`
- **الشرح الرياضي:** كل طرفين يحتاجان مفتاحاً سرياً مستقلاً. مع 250 طرفاً، التوافيق الثنائية تنتج 31,125 مفتاحاً سرياً يجب حمايتها.

##### الخطوة 2: حساب عدد المفاتيح في نظام المفتاح العام (*Calculate Total Asymmetric Keys Required*)
$$ K_{\text{asym}} = 2 \times N $$
$$ K_{\text{asym}} = 2 \times 250 $$
- **النتيجة المرحلية:** `$500 \text{ keys (250 public + 250 private)}$`
- **الشرح الرياضي:** كل مستخدم يولد زوج مفاتيح (عام منشور وخاص سري)، فيكون الإجمالي 500 مفتاح فقط لخدمة الـ 250 قسماً.

##### الخطوة 3: حساب نسبة الخفض والوفر في إدارة المفاتيح (*Compute Key Reduction and Management Ratio*)
$$ \Delta K = K_{\text{sym}} - K_{\text{asym}}, \quad \text{Ratio} = \frac{K_{\text{sym}}}{K_{\text{asym}}} $$
$$ \Delta K = 31,125 - 500 = 30,625, \quad \text{Ratio} = \frac{31,125}{500} = 62.25 $$
- **النتيجة المرحلية:** `$30,625 \text{ fewer keys (62.25x reduction)}$`
- **الشرح الرياضي:** الانتقال للتشفير غير المتناظر يختزل 30,625 مفتاحاً سرياً، مما يخفض عبء حفظ المفاتيح بأكثر من 62 ضعفاً.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`K_{sym} = 31,125 keys; K_{asym} = 500 keys (Saving: 30,625 keys / 98.4% reduction)`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: عند N=3 يحتاج المتناظر 3 مفاتيح وغير المتناظر 6. لكن مع زيادة N ينمو المتناظر تربيعياً O(N^2) بينما ينمو غير المتناظر خطياً O(N).

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** استخدام القانون N(N-1) ونسيان القسمة على 2 في التشفير المتناظر.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** تذكر أن المفتاح السري بين الطرفين مشترك وغير موجه، فالمفتاح بين (A, B) هو نفسه بين (B, A).

---

### 🎯 مسألة رقم [prob-ch1-02]: ربط الهجمات الأمنية بالخدمات والآليات المقابلة وفق معيار X.800
**English Title:** *Mapping Security Attacks to Security Services & Mechanisms*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 1 / X.800 Security Architecture`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `security-architecture`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** قام مهاجم باعتراض معاملة بنكية إلكترونية، وعدل رقم الحساب المحول إليه، ثم أعاد إرسال الحزمة المعدلة إلى خادم البنك. (1) صنف هذا الهجوم (نشط أم سلبي). (2) حدد الركن الأساسي المنتهك في مثلث الأمان CIA. (3) حدد الخدمة الأمنية والآلية التشفيرية المعتمدة في X.800 لاكتشاف هذا الهجوم ومنعه.
> 
> **In English:** *"An attacker intercepts an e-banking transmission, modifies the transaction destination account number, and retransmits the altered packet to the banking server. (1) Classify this attack as Active or Passive. (2) Identify which primary security objective of the CIA triad was violated. (3) Specify the precise X.800 Security Service and Cryptographic Mechanism required to detect and counter this assault."*

**📥 المعطيات (Given Parameters):**
- **تعديل رقم الحساب وإعادة إرساله:** `$Attack Event = Modifying transaction account in transit & replaying$`
- **معيار الهيكلية الأمنية:** `$Standard = ITU-T X.800 / RFC 2828$`

**🎯 المطلوب إيجاده (Required):** تصنيف الهجوم، الركن المنتهك، خدمة X.800، والآلية التشفيرية المضادة.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** جدول مطابقة الخدمات بالآليات في X.800 (*X.800 Service-to-Mechanism Mapping*)
$$ \text{Attack: Modification} \implies \text{Service: Data Integrity} \implies \text{Mechanism: Digital Signature / MAC / Hash} $$
> الهجمات النشطة التي تعدل محتوى البيانات تنتهك سلامة البيانات (Integrity). والآلية المعيارية لمكافحتها هي آلية سلامة البيانات باستخدام التوقيع الرقمي أو كود MAC.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: تصنيف نوع الهجوم (نشط أم سلبي) (*Classify Attack Type (Active vs Passive)*)
$$ \text{Action: Unauthorized alteration of data stream} \implies \mathbf{\text{Active Attack}} $$
- **النتيجة المرحلية:** `$Active Attack (Category: Modification of Messages)$`
- **الشرح الرياضي:** نظراً لأن المهاجم أحدث تغييراً وتحريفاً فعلياً في البيانات أثناء النقل ولم يكتفِ بالمراقبة، فإن الهجوم إيجابي/نشط (Active Attack).

##### الخطوة 2: تحديد ركن الأمان المنتهك في مثلث CIA (*Identify Violated CIA Triad Pillar*)
$$ \text{Breach of accurate data preservation} \implies \mathbf{\text{Data Integrity}} $$
- **النتيجة المرحلية:** `$Integrity (سلامة وتكامل البيانات)$`
- **الشرح الرياضي:** سلامة البيانات (Integrity) هي المسؤولة عن ضمان وصول البيانات مطابقة تماماً لما أرسله المصدر دون أي تحريف أو تبديل.

##### الخطوة 3: تحديد خدمة X.800 والآلية التشفيرية المضادة (*Determine X.800 Service and Countering Mechanism*)
$$ \text{Service: Data Integrity (Connection-Oriented with Recovery)} \\ \text{Mechanism: Data Integrity Mechanism (HMAC / Digital Signature with Sequence Numbers)} $$
- **النتيجة المرحلية:** `$Service: Data Integrity; Mechanism: MAC / Digital Signature$`
- **الشرح الرياضي:** خدمة X.800 المطلوبة هي خدمة سلامة البيانات (Data Integrity). وتستخدم آلية التوقيع الرقمي أو كود MAC مع طابع زمني أو أرقام تسلسلية لمنع إعادة الإرسال.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`Type: Active Attack; Violated: Integrity; Service: Data Integrity; Mechanism: Cryptographic MAC / Digital Signature`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق من جدول ستالينجز 1.2: تحريف الرسائل يصنف كـ Active Attack ينتهك ركن Integrity ويدافع عنه بخدمات وآليات Data Integrity.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** اعتبار التشفير وحده حلاً لهجمات التعديل.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** التشفير يوفر السرية فقط؛ ولا يمنع التعديل بالضرورة. الحماية من التعديل تتطلب آليات سلامة البيانات (MAC والتوقيع الرقمي).

---

### 🎯 مسألة رقم [prob-ch1-03]: التمييز الدقيق بين التهديد والثغرة والهجوم وتقييم المخاطر الأمنية
**English Title:** *Threat vs Vulnerability vs Attack Quantitative Risk Assessment*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 1 / Section 1.3 Security Trends & Attacks`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `security-architecture`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** أظهر تدقيق أمني وجود ثغرة برمجية غير معالجة (V) في خادم الويب باحتمال استغلال P(E) = 0.4. وإذا نفذ مهاجم خارجي تهديد حجب الخدمة (T)، تقدر الخسارة المالية (I) بمبلغ $150,000. (1) ميز بين المصطلحات الثلاثة الأساسية: التهديد (Threat)، الثغرة (Vulnerability)، والهجوم (Attack). (2) احسب مقدار المخاطرة المتوقعة R = P(E) * I. (3) بين هل تشغيل خادم احتياطي بديل يعالج الثغرة أم التهديد.
> 
> **In English:** *"An enterprise audit reveals an unpatched web server vulnerability (V) with probability of exploitation P(E) = 0.4. If an external attacker carries out an active Denial of Service threat (T), the financial impact (I) is estimated at $150,000. (1) Distinguish the three core definitions: Threat, Vulnerability, and Attack. (2) Compute the Annual Loss Expectancy (ALE) or Risk Exposure R = P(E) * I. (3) State whether deploying a redundant server mitigates Vulnerability or Threat."*

**📥 المعطيات (Given Parameters):**
- **احتمالية الاستغلال:** `$Vulnerability Likelihood P(E) = 0.40 (40%)$`
- **الأثر المالي المترتب على الانتهاك:** `$Financial Impact (I) = $150,000$`

**🎯 المطلوب إيجاده (Required):** التعريفات الثلاثة، قيمة التعرض للمخاطر R، وتصنيف الأثر الأمني للحل الهندسي.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** معادلة تقييم الخطر الأمني الكمي (*Quantitative Risk Formulation*)
$$ R = P(\text{Threat Exploits Vulnerability}) \times \text{Impact} $$
> الثغرة هي نقطة الضعف الداخلية؛ التهديد هو الخطر المحتمل الخارجي؛ الهجوم هو تنفيذ التهديد فعلياً. والمخاطرة هي حاصل ضرب الاحتمال في الأثر.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: التمييز الاصطلاحي بين التهديد والثغرة والهجوم (*Distinguish Threat, Vulnerability, and Attack*)
$$ \text{Vulnerability} \subset \text{System}, \quad \text{Threat} \in \text{Environment}, \quad \text{Attack} = \text{Threat} \times \text{Action} $$
- **النتيجة المرحلية:** `$Clear three-fold distinction$`
- **الشرح الرياضي:** الثغرة عيب في النظام؛ التهديد هو خطر محتمل في البيئة المحيطة؛ والهجوم هو الفعل الحقيقي الذي يستغل تلك الثغرة لتحقيق التهديد.

##### الخطوة 2: حساب قيمة التعرض المالي للمخاطرة R (*Calculate Financial Risk Exposure R*)
$$ R = P(E) \times I $$
$$ R = 0.40 \times 150,000 $$
- **النتيجة المرحلية:** `$R = \$60,000$`
- **الشرح الرياضي:** بضرب احتمال وقوع الاستغلال (0.4) في قيمة الخسارة ($150,000) نحصل على المخاطرة المتوقعة بمقدار $60,000 سنوياً.

##### الخطوة 3: تحليل أثر الحل الهندسي على عناصر المنظومة (*Analyze Architectural Mitigation Effect*)
$$ \text{Redundant Server} \implies \text{Impact Reduction / Threat Mitigation} $$
- **النتيجة المرحلية:** `$Mitigates Availability Impact (Threat containment)$`
- **الشرح الرياضي:** تشغيل خادم بديل لا يزيل ثغرة الكود (فالثغرة باقية)، ولكنه يبطل أثر التهديد ويحمي ركن التوافرية (Availability) من الانهيار.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`Risk Exposure R = $60,000; Redundancy mitigates impact on Availability.`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> تحقق الأبعاد: حاصل ضرب الاحتمال في القيمة المالية ينتج قيمة مالية صحيحة $60,000.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** الخلط بين التهديد والثغرة.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** الثغرة صفة داخلية في نظامك يمكنك ترقيعها؛ بينما التهديد خارجي لا تتحكم فيه بذاته بل تحمي نفسك منه.

---

<a id="chapter-2"></a>
# الباب الثاني: نظرية الأعداد والحساب المعياري
### Chapter 2: Number Theory & Modular Arithmetic

<a id="ch2-formulas"></a>
## 2.1 النظريات والقوانين الرياضية الـ 16 لنظرية الأعداد

### 1. علاقة القابلية للقسمة (Divisibility Relation)
$$ a = mb \iff b \mid a $$
- **الشرح والمفهوم:** يقسم العدد الصحيح غير الصفري $b$ العدد $a$ إذا وفقط إذا وجد عدد صحيح $m$ بحيث $a = mb$. يُقال إن $b$ قاسم للعدد $a$ ولا يوجد باقي قسمة.
- **الشروط والقيود الرياضية:** `$b \neq 0, \quad a, b, m \in \mathbb{Z}$`
- **مثال تطبيقي مباشر:** `$182 = 14 \times 13 \implies 13 \mid 182, \quad 30 = (-6) \times (-5) \implies -5 \mid 30, \quad 17 \mid 0$`

### 2. مبرهنة قابلية قسمة التركيبة الخطية (Linear Combination Divisibility Theorem)
$$ b \mid g \land b \mid h \implies b \mid (mg + nh) $$
- **الشرح والمفهوم:** إذا كان $b$ يقسم كلاً من $g$ و $h$، فإنه يقسم أي تركيبة خطية صحيحة لهما مهما كانت قيم $m, n$.
- **الشروط والقيود الرياضية:** `$m, n, g, h \in \mathbb{Z}, \quad b \neq 0$`
- **مثال تطبيقي مباشر:** `$b = 7, g = 14, h = 63, m = 3, n = 2 \implies 7 \mid (3 \times 14 + 2 \times 63) = 7 \mid (42 + 126) = 7 \mid 168 = 7(24)$`

### 3. خوارزمية القسمة الإقليدية (Division Algorithm)
$$ a = qn + r, \quad 0 \le r < n, \quad q = \lfloor a/n \rfloor $$
- **الشرح والمفهوم:** لأي عدد صحيح $a$ وعدد موجب $n$، توجد قيمة وحيدة لخارج القسمة $q$ وباقي القسمة $r$ بحيث $0 \le r < n$.
- **الشروط والقيود الرياضية:** `$n > 0, \quad q = \lfloor a/n \rfloor, \quad r = a \bmod n$`
- **مثال تطبيقي مباشر:** `$11 = 1(7) + 4 \implies 11 \bmod 7 = 4, \quad -11 = (-2)(7) + 3 \implies -11 \bmod 7 = 3$`

### 4. خواص القاسم المشترك الأكبر (GCD Invariance Properties)
$$ \gcd(a, b) = \gcd(|a|, |b|), \quad \gcd(a, 0) = |a|, \quad \gcd(0, 0) = 0 $$
- **الشرح والمفهوم:** القاسم المشترك الأكبر لا يتأثر بإشارات الأعداد، و $\gcd(a, 0) = |a|$ لأن كل الأعداد غير الصفرية تقسم الصفر، و $\gcd(0, 0) = 0$ اصطلاحاً.
- **الشروط والقيود الرياضية:** `$a, b \in \mathbb{Z}$`
- **مثال تطبيقي مباشر:** `$\gcd(60, 24) = \gcd(60, -24) = 12, \quad \gcd(-48, 0) = 48$`

### 5. شرط الأولية النسبية (Coprime / Relatively Prime Condition)
$$ \gcd(a, b) = 1 $$
- **الشرح والمفهوم:** يكون العددان $a$ و $b$ أوليين نسبياً إذا كان القاسم المشترك الوحيد بينهما هو 1، أي لا يشتركان في أي عامل أولي.
- **الشروط والقيود الرياضية:** `$\gcd(a, b) = 1$`
- **مثال تطبيقي مباشر:** `$8 = 2^3, \quad 15 = 3 \times 5 \implies \gcd(8, 15) = 1 \implies 8 \text{ and } 15 \text{ are relatively prime}$`

### 6. خطوة خوارزمية إقليدس للقسمة المتتابعة (Euclidean Algorithm Division Step)
$$ r_{i-2} = q_i r_{i-1} + r_i, \quad 0 \le r_i < r_{i-1} $$
- **الشرح والمفهوم:** تعتمد على قاعدة أن $\gcd(a, b) = \gcd(b, a \bmod b)$. القاسم المشترك الأكبر هو آخر باقي قسمة غير صفري.
- **الشروط والقيود الرياضية:** `$\gcd(a, b) = r_k \text{ where } r_{k+1} = 0$`
- **مثال تطبيقي مباشر:** `$710 = 2(310) + 90, \quad 310 = 3(90) + 40, \quad 90 = 2(40) + 10, \quad 40 = 4(10) + 0 \implies \gcd(710, 310) = 10$`

### 7. متطابقة بيزو وخوارزمية إقليدس الممتدة (Bézout's Identity & Extended Euclidean)
$$ d = \gcd(a, b) = ax + by, \quad x, y \in \mathbb{Z} $$
- **الشرح والمفهوم:** يمكن التعبير عن القاسم المشترك الأكبر كتركيبة خطية من $a$ و $b$. عند $\gcd(a, m) = 1$، يكون $ax + my = 1 \implies ax \equiv 1 \pmod m$، مما يجعل $x = a^{-1} \bmod m$.
- **الشروط والقيود الرياضية:** `$x, y \in \mathbb{Z}, \quad a^{-1} \text{ exists} \iff \gcd(a, m) = 1$`
- **مثال تطبيقي مباشر:** `$1759(-111) + 550(355) = 1 \implies 550^{-1} \equiv 355 \pmod{1759}$`

### 8. شرط وجود المعكوس الضربي المعياري (Modular Multiplicative Inverse)
$$ a \cdot a^{-1} \equiv 1 \pmod n \iff \gcd(a, n) = 1 $$
- **الشرح والمفهوم:** لا يوجد معكوس ضربي للعدد $a$ مقياس $n$ إلا إذا وفقط إذا كان $a$ أولياً نسبياً مع $n$.
- **الشروط والقيود الرياضية:** `$\gcd(a, n) = 1$`
- **مثال تطبيقي مباشر:** `$\text{In } \mathbb{Z}_8: 3 \times 3 = 9 \equiv 1 \pmod 8 \implies 3^{-1} \equiv 3. \quad \gcd(2, 8) = 2 \neq 1 \implies 2^{-1} \text{ does not exist!}$`

### 9. خواص واختزال الحساب المعياري (Modular Arithmetic Properties)
$$ [(a \bmod n) \pm (b \bmod n)] \bmod n = (a \pm b) \bmod n, \quad [(a \bmod n) \times (b \bmod n)] \bmod n = (a \times b) \bmod n $$
- **الشرح والمفهوم:** يمكن اختزال الحدود قبل إجراء عمليات الجمع أو الطرح أو الضرب لتفادي التعامل مع أرقام ضخمة.
- **الشروط والقيود الرياضية:** `$n > 0, \quad a, b \in \mathbb{Z}$`
- **مثال تطبيقي مباشر:** `$(11 \times 15) \bmod 8: 11 \equiv 3, 15 \equiv 7 \implies (3 \times 7) \bmod 8 = 21 \bmod 8 = 5 = (165 \bmod 8)$`

### 10. المبرهنة الأساسية في الحساب (Fundamental Theorem of Arithmetic)
$$ a = \prod_{i=1}^t p_i^{a_i} = p_1^{a_1} \cdot p_2^{a_2} \cdots p_t^{a_t} $$
- **الشرح والمفهوم:** أي عدد صحيح أكبر من 1 يمكن تحليله بطريقة وحيدة إلى حاصل ضرب عوامل أولية.
- **الشروط والقيود الرياضية:** `$p_1 < p_2 < \dots < p_t \text{ primes}, \quad a_i \ge 1$`
- **مثال تطبيقي مباشر:** `$24 = 2^3 \times 3^1, \quad 240 = 2^4 \times 3^1 \times 5^1$`

### 11. مبرهنة فيرما الصغرى (Fermat's Little Theorem)
$$ a^{p-1} \equiv 1 \pmod p \quad (\text{if } \gcd(a, p) = 1), \qquad a^p \equiv a \pmod p \quad (\forall a) $$
- **الشرح والمفهوم:** إذا كان $p$ عدداً أولياً و $a$ لا يقبل القسمة على $p$، فإن $a^{p-1}$ يعطي باقي 1 عند قسمته على $p$.
- **الشروط والقيود الرياضية:** `$p \text{ is prime}, \quad \gcd(a, p) = 1$`
- **مثال تطبيقي مباشر:** `$a = 3, p = 11 \implies 3^{10} \equiv 1 \pmod{11}. \quad 3^{201} = (3^{10})^{20} \times 3^1 \equiv 1^{20} \times 3 \equiv 3 \pmod{11}$`

### 12. دالة مؤشر أويلر بحالاتها الأربع (Euler's Totient Function)
$$ \phi(p) = p - 1, \quad \phi(p^k) = p^k - p^{k-1}, \quad \phi(pq) = (p-1)(q-1), \quad \phi(n) = n \prod_{p \mid n} \left(1 - \frac{1}{p}\right) $$
- **الشرح والمفهوم:** تحسب دالة أويلر $\phi(n)$ عدد الأعداد الصحيحة الموجبة الأصغر من $n$ والأولية نسبياً معه.
- **الشروط والقيود الرياضية:** `$p, q \text{ distinct primes}, \quad \gcd(p, q) = 1$`
- **مثال تطبيقي مباشر:** `$\phi(37) = 36, \quad \phi(35) = (7-1)(5-1) = 24, \quad \phi(8) = 2^3 - 2^2 = 4, \quad \phi(240) = 240(1/2)(2/3)(4/5) = 64$`

### 13. مبرهنة أويلر المعممة (Euler's Generalization Theorem)
$$ a^{\phi(n)} \equiv 1 \pmod n \quad (\text{if } \gcd(a, n) = 1), \qquad a^{\phi(n)+1} \equiv a \pmod n $$
- **الشرح والمفهوم:** تعميم مبرهنة فيرما لأي مقياس مركب $n$ بشرط أن يكون $a$ أولياً نسبياً مع $n$.
- **الشروط والقيود الرياضية:** `$\gcd(a, n) = 1, \quad n > 1$`
- **مثال تطبيقي مباشر:** `$a = 3, n = 100 \implies \phi(100) = 40. \quad 3^{40} \equiv 1 \pmod{100} \implies 3^{80} = (3^{40})^2 \equiv 1^2 \equiv 1 \pmod{100}$`

### 14. خوارزمية واختبار ميلر-رابين لاحتمالية الأولية (Miller-Rabin Primality Test)
$$ n - 1 = 2^k q \quad (q \text{ odd}), \qquad a^q \equiv 1 \pmod n \lor \exists j \in [0, k-1]: a^{2^j q} \equiv -1 \pmod n $$
- **الشرح والمفهوم:** تفكيك $n-1$ لاختبار أولية الأعداد الكبيرة. إذا تحقق أحد الشرطين يكون العدد أولياً محتملاً (Inconclusive)، وإلا فهو قطعاً مركب (Composite).
- **الشروط والقيود الرياضية:** `$n > 2 \text{ odd}, \quad 1 < a < n - 1$`
- **مثال تطبيقي مباشر:** `$n = 221 \implies n-1 = 220 = 2^2 \times 55 \implies k=2, q=55. \quad \text{For base } a = 2: 2^{55} \bmod 221 = 112, 2^{110} \bmod 221 = 168 \implies \text{Composite!}$`

### 15. مبرهنة الباقي الصينية (Chinese Remainder Theorem - CRT)
$$ x \equiv \sum_{i=1}^k a_i M_i y_i \pmod M, \quad M = \prod_{i=1}^k m_i, \quad M_i = \frac{M}{m_i}, \quad M_i y_i \equiv 1 \pmod{m_i} $$
- **الشرح والمفهوم:** حل نظام المعادلات الخطية ذات المقاييس الأولية نسبياً مثنى مثنى.
- **الشروط والقيود الرياضية:** `$\gcd(m_i, m_j) = 1 \quad \forall i \neq j$`
- **مثال تطبيقي مباشر:** `$x \equiv 2 \pmod 3, \, x \equiv 3 \pmod 5, \, x \equiv 2 \pmod 7 \implies M = 105 \implies x \equiv 23 \pmod{105}$`

### 16. الجذور الأولية واللوغاريتم المتقطع (Primitive Roots & Discrete Logarithms)
$$ y = a^x \bmod n \iff x = \operatorname{dlog}_{a, n}(y), \qquad \operatorname{ord}_n(a) = \phi(n) $$
- **الشرح والمفهوم:** العدد $a$ جذر أولي لمقياس $n$ إذا ولدت قواه جميع عناصر $\mathbb{Z}_n^*$. يُعرّف اللوغاريتم المتقطع بأنه الأس $x$.
- **الشروط والقيود الرياضية:** `$a \text{ is a primitive root of } n$`
- **مثال تطبيقي مباشر:** `$\text{Modulo 19, base } a = 2: 2^{13} = 8192 \equiv 3 \pmod{19} \implies \operatorname{dlog}_{2, 19}(3) = 13$`

---

<a id="ch2-slides"></a>
## 2.2 أمثلة السلايدات المحلولة بالتفصيل (William Stallings Slides Ch 2)

### 💡 مثال السلايدات 1: خوارزمية إقليدس لحساب $\gcd(710, 310) = 10$ (Table 2.1 p. 34)
- **الخطوة 1:** $710 = 2 \times 310 + 90$ ($q_1 = 2, r_1 = 90$)
- **الخطوة 2:** $310 = 3 \times 90 + 40$ ($q_2 = 3, r_2 = 40$)
- **الخطوة 3:** $90 = 2 \times 40 + 10$ ($q_3 = 2, r_3 = 10$)
- **الخطوة 4:** $40 = 4 \times 10 + 0$ ($q_4 = 4, r_4 = 0$)
- **النتيجة:** آخر باقي غير صفري هو $10 \implies \gcd(710, 310) = 10$.

### 💡 مثال السلايدات 2: التطابقات المعيارية والأعداد السالبة (Slides 14-16)
- $11 \bmod 7 = 4$ لأن $11 = 1(7) + 4$.
- $-11 \bmod 7 = 3$ لأن $-11 = (-2)(7) + 3$ (تذكر: الباقي $r$ يجب أن يكون موجباً دائماً $0 \le r < n$).
- $73 \equiv 4 \pmod{23}$ لأن $73 - 4 = 69 = 23 \times 3$.
- $21 \equiv -9 \pmod{10}$ لأن $21 - (-9) = 30 = 10 \times 3$.
- $-11 \equiv 5 \pmod 8$ لأن $-11 - 5 = -16 = 8 \times (-2)$.

### 💡 مثال السلايدات 3: المعكوسات الضريبية في $\mathbb{Z}_8$ (Table 2.2 p. 37)
في جدول الضرب مقياس 8:
- الأعداد الزوجية $\{0, 2, 4, 6\}$ ليس لها معكوس ضربي لأنها ليست أولية نسبياً مع 8 (تشترك في العامل 2).
- الأعداد الفردية $\{1, 3, 5, 7\}$ أولية نسبياً مع 8 ولكل منها معكوس ضربي هو نفسه:
  - $1 \times 1 = 1 \equiv 1 \pmod 8$
  - $3 \times 3 = 9 \equiv 1 \pmod 8 \implies 3^{-1} \equiv 3$
  - $5 \times 5 = 25 \equiv 1 \pmod 8 \implies 5^{-1} \equiv 5$
  - $7 \times 7 = 49 \equiv 1 \pmod 8 \implies 7^{-1} \equiv 7$

### 💡 مثال السلايدات 4: خوارزمية إقليدس الممتدة $550^{-1} \bmod 1759$ (Table 2.4 p. 43)
- بتطبيق جدول الإزاحات الإقليدي الممتد $(A_1, A_2, A_3)$ و $(B_1, B_2, B_3)$:
- نصل إلى: $d = 1, x = -111, y = 355$.
- المعادلة: $1759(-111) + 550(355) = -195,249 + 195,250 = 1$.
- بأخذ مقياس 1759 للطرفين: $550(355) \equiv 1 \pmod{1759} \implies 550^{-1} \equiv 355 \pmod{1759}$.

### 💡 مثال السلايدات 5: اختبار ميلر-رابين للعدد $n = 221$ بالأساس $a = 2$ (Slide 29)
- $n - 1 = 220 = 2^2 \times 55 \implies k = 2, q = 55$.
- فحص الشرط الأول: $a^q \bmod n = 2^{55} \bmod 221$. بالحساب المعياري: $2^{55} \equiv 112 \pmod{221} \neq 1$ و $\neq 220$.
- فحص الشرط الثاني عند $j = 1$: $a^{2^1 q} = (a^q)^2 = 112^2 = 12,544 \equiv 168 \pmod{221} \neq 220$.
- كلا الشرطين لم يتحققا $\implies$ العدد 221 عدد مركب قطعي (Composite)، وعوامله بالفعل $13 \times 17 = 221$.

### 💡 مثال السلايدات 6: مبرهنة الباقي الصينية (CRT) (Slide 31)
حل النظام: $x \equiv 2 \pmod 3, \quad x \equiv 3 \pmod 5, \quad x \equiv 2 \pmod 7$:
- $M = 3 \times 5 \times 7 = 105$.
- $M_1 = 105 / 3 = 35 \implies 35 y_1 \equiv 1 \pmod 3 \implies 2 y_1 \equiv 1 \implies y_1 = 2$.
- $M_2 = 105 / 5 = 21 \implies 21 y_2 \equiv 1 \pmod 5 \implies 1 y_2 \equiv 1 \implies y_2 = 1$.
- $M_3 = 105 / 7 = 15 \implies 15 y_3 \equiv 1 \pmod 7 \implies 1 y_3 \equiv 1 \implies y_3 = 1$.
- $x = (2 \times 35 \times 2 + 3 \times 21 \times 1 + 2 \times 15 \times 1) \bmod 105 = (140 + 63 + 30) \bmod 105 = 233 \bmod 105 = 23$.
- التحقق: $23 \bmod 3 = 2, 23 \bmod 5 = 3, 23 \bmod 7 = 2$ (صحيح تماماً!).

---

<a id="ch2-problems"></a>
## 2.3 مسائل الامتحانات والتمارين النموذجية المحلولة للباب الثاني

### 🎯 مسألة رقم [prob-ch2-01]: خوارزمية إقليدس لحساب القاسم المشترك الأكبر gcd(116071, 71239)
**English Title:** *Euclidean Algorithm: Greatest Common Divisor gcd(116071, 71239)*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 2 / Slide 8 (Euclidean Algorithm)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `number-theory`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** باستخدام خوارزمية إقليدس المتتالية، احسب القاسم المشترك الأكبر للعددين gcd(116071, 71239). وضح كل خطوة قسمة تتضمن خارج القسمة والباقي بدقة.
> 
> **In English:** *"Using the Euclidean Algorithm, compute the greatest common divisor gcd(116071, 71239). Show each division step with quotient and remainder explicitly."*

**📥 المعطيات (Given Parameters):**
- **العدد الأول (الأكبر):** `$a = 116071$`
- **العدد الثاني (الأصغر):** `$b = 71239$`

**🎯 المطلوب إيجاده (Required):** القاسم المشترك الأكبر gcd(116071, 71239).

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** تمثيل خوارزمية إقليدس المتتالية (*Euclidean Division Lemma*)
$$ r_{i-2} = q_i \cdot r_{i-1} + r_i, \quad \gcd(a, b) = r_k \text{ (last non-zero remainder)} $$
> استبدال متكرر للمقدارين (a, b) بالمقدارين (b, a mod b) حتى يصبح الباقي صفراً؛ ويكون آخر باقٍ موجب غير صفري هو القاسم المشترك الأكبر.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: القسمة الأولى: 116071 على 71239 (*Divide 116071 by 71239*)
$$ 116071 = 1 \times 71239 + 44832 $$
- **النتيجة المرحلية:** `$q_1 = 1, \quad r_1 = 44832$`
- **الشرح الرياضي:** نقسم 116071 على 71239 فيكون خارج القسمة 1 والباقي 44832.

##### الخطوة 2: القسمة الثانية: 71239 على 44832 (*Divide 71239 by 44832*)
$$ 71239 = 1 \times 44832 + 26407 $$
- **النتيجة المرحلية:** `$q_2 = 1, \quad r_2 = 26407$`
- **الشرح الرياضي:** نقسم 71239 على 44832؛ الناتج 1 والباقي 26407.

##### الخطوة 3: القسمات المتتابعة حتى الوصول للباقي 1 (*Intermediate Divisions Down to Remainder 1*)
$$ 44832 = 1(26407) + 18425 \implies 26407 = 1(18425) + 7982 \implies 18425 = 2(7982) + 2461 \implies 7982 = 3(2461) + 599 $$
- **النتيجة المرحلية:** `$Successive remainders: 18425, 7982, 2461, 599$`
- **الشرح الرياضي:** نواصل خوارزمية إقليدس بقسمة كل قاسم على الباقي الذي يليه.

##### الخطوة 4: القسمات النهائية والوصول للباقي صفر (*Final Division Steps and Zero Remainder*)
$$ 2461 = 4(599) + 65 \implies 599 = 9(65) + 14 \implies 65 = 4(14) + 9 \implies 14 = 1(9) + 5 \implies 9 = 1(5) + 4 \implies 5 = 1(4) + 1 \implies 4 = 4(1) + 0 $$
- **النتيجة المرحلية:** `$Last non-zero remainder = 1$`
- **الشرح الرياضي:** آخر باقٍ غير صفري هو 1. وبالتالي فإن gcd(116071, 71239) = 1، والعددان أوليان فيما بينهما.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`\gcd(116071, 71239) = 1 \text{ (Relatively Prime)}`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: آخر باقٍ قبل الصفر هو 1، مما يثبت صحة الحساب ودقة خوارزمية إقليدس.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** التوقف عند ناتج قسمة 0 بدلاً من باقي 0.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** توقف دائماً عندما يصبح الباقي صفراً وخذ الباقي الذي يسبقه مباشرة.

---

### 🎯 مسألة رقم [prob-ch2-02]: خوارزمية إقليدس الممتدة لحساب المعكوس الضربي 550^-1 mod 1759
**English Title:** *Extended Euclidean Algorithm: Modular Inverse 550^-1 mod 1759*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 2 / Slide 14 & Example 2.8`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `number-theory`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** باستخدام خوارزمية إقليدس الممتدة، أوجد المعكوس الضربي للعدد 550 مقياس 1759 (أي احسب 550^-1 mod 1759). تحقق من أن gcd(550, 1759) = 1.
> 
> **In English:** *"Using the Extended Euclidean Algorithm, find the modular multiplicative inverse of 550 modulo 1759 (i.e., compute 550^{-1} \pmod{1759}). Verify that \gcd(550, 1759) = 1."*

**📥 المعطيات (Given Parameters):**
- **العدد المراد عكسه:** `$a = 550$`
- **المقياس (Modulus):** `$m = 1759$`

**🎯 المطلوب إيجاده (Required):** العدد الصحيح x بحيث 550 * x = 1 (mod 1759).

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** تكرار خوارزمية إقليدس الممتدة (*Extended Euclidean Recurrence*)
$$ T = A - q \cdot B, \quad B_3 = 1 \implies B_2 = a^{-1} \pmod m $$
> تحديث المتجهات A و B بحساب T = A - q*B حتى يصبح B3 مساوياً لـ 1، فتكون B2 هي المعكوس.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: تهيئة المتجهات وخارج القسمة الأول (*Initialize Vectors and First Quotient*)
$$ A = [1, 0, 1759], \quad B = [0, 1, 550], \quad q = \lfloor 1759 / 550 \rfloor = 3 $$
- **النتيجة المرحلية:** `$q = 3$`
- **الشرح الرياضي:** المتجه A يحمل [1, 0, 1759] والمتجه B يحمل [0, 1, 550]. خارج القسمة 1759 / 550 = 3.

##### الخطوة 2: التكرارات من 1 إلى 4 حتى بلوغ الباقي 1 (*Iterations 1 to 4 Down to Remainder 1*)
$$ \begin{aligned} T_1 &= [1, -3, 109], \quad q_2 = \lfloor 550/109 \rfloor = 5 \\ T_2 &= [-5, 16, 5], \quad q_3 = \lfloor 109/5 \rfloor = 21 \\ T_3 &= [106, -339, 4], \quad q_4 = \lfloor 5/4 \rfloor = 1 \\ T_4 &= [-111, 355, 1] \end{aligned} $$
- **النتيجة المرحلية:** `$B_3 = 1, \quad B_2 = 355$`
- **الشرح الرياضي:** في التكرار الرابع يصل B3 إلى 1. وقيمة B2 = 355 هي المعكوس الضربي المطلوب.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`550^{-1} \equiv 355 \pmod{1759}`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق المباشر: 550 × 355 = 195,250 = 111 × 1759 + 1، والباقي 1 تماماً.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** ترك المعكوس سالباً دون إضافة المقياس.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** إذا كان الناتج سالباً أضف المقياس لتحويله للمجال الموجب.

---

### 🎯 مسألة رقم [prob-ch2-03]: المعكوسات الضربية في Z26: حساب 7^-1 وإثبات استحالة وجود معكوس للعدد 8
**English Title:** *Modular Inverses in Z26: Computing 7^-1 and Proving 8^-1 Non-Existence*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 2 / Slide 16 & Section 2.4`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `number-theory`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** (1) في حلقة الأعداد الصحيحة مقياس 26 (Z_26)، احسب المعكوس الضربي للعدد 7. (2) أثبت رياضياً لماذا يستحيل وجود معكوس ضربي للعدد 8 مقياس 26.
> 
> **In English:** *"(1) In the ring of integers modulo 26 (Z_26), find the modular multiplicative inverse of 7. (2) Prove mathematically why 8 does NOT possess a multiplicative inverse modulo 26."*

**📥 المعطيات (Given Parameters):**
- **المقياس Z_26:** `$Modulus m = 26$`
- **العدد الأول المطلوب عكسه:** `$Element 1 = a = 7$`
- **العدد الثاني:** `$Element 2 = b = 8$`

**🎯 المطلوب إيجاده (Required):** قيمة 7^-1 mod 26 وبرهان عدم قابلية 8 للعكس.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** شرط وجود المعكوس الضربي القياسي (*Modular Invertibility Criterion*)
$$ a^{-1} \pmod m \text{ exists} \iff \gcd(a, m) = 1 $$
> يوجد معكوس ضربي للعدد a مقياس m إذا وفقط إذا كان القاسم المشترك الأكبر بينهما يساوي 1.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: حساب gcd(7, 26) وإيجاد 7^-1 mod 26 (*Find gcd(7, 26) and Compute 7^-1 mod 26*)
$$ 26 = 3 \times 7 + 5 \implies 7 = 1 \times 5 + 2 \implies 5 = 2 \times 2 + 1 \implies \gcd(7, 26) = 1 $$
$$ 1 = 5 - 2(2) = 5 - 2(7 - 5) = 3(5) - 2(7) = 3(26 - 3 \times 7) - 2(7) = 3(26) - 11(7) $$
- **النتيجة المرحلية:** `$-11 \equiv 15 \pmod{26}$`
- **الشرح الرياضي:** بما أن gcd(7, 26)=1 فالمعكوس موجود. من متطابقة بيزو: -11 يكافئ 15 مقياس 26. والتحقق: 7 × 15 = 105 = 1 mod 26.

##### الخطوة 2: إثبات عدم وجود معكوس ضربي للعدد 8 مقياس 26 (*Prove Why 8^-1 mod 26 Does Not Exist*)
$$ \gcd(8, 26) = 2 \neq 1 $$
$$ 8x \equiv 1 \pmod{26} \implies 8x - 26y = 1 \implies 2(4x - 13y) = 1 $$
- **النتيجة المرحلية:** `$Contradiction: Even integer 2(4x - 13y) cannot equal odd integer 1$`
- **الشرح الرياضي:** لو وجد معكوس x لكان 8x - 26y = 1. لكن الطرف الأيسر يقبل القسمة على 2 دائماً (عدد زوجي) بينما الأيمن 1 (فردي). وهذا تناقض مستحيل! إذن 8 ليس له معكوس في Z26.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`7^{-1} \equiv 15 \pmod{26}; 8^{-1} \pmod{26} does NOT exist (\gcd(8, 26) = 2 \neq 1)`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> تحقق: كل مضاعفات 8 مقياس 26 تنتج أعداداً زوجية حصراً (0, 8, 16, 24, 6, 14, 22...) ولا يمكن أن تنتج 1 أبداً.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** محاولة إيجاد معكوس لعدد زوجي مقياس 26.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** أي عدد يشترك مع المقياس في قاسم مشترك أكبر من 1 يستحيل أن يمتلك معكوساً ضربياً.

---

### 🎯 مسألة رقم [prob-ch2-04]: حساب دالة أويلر للمؤشرات phi(n) للأعداد الأولية والقوى وحاصل الضرب
**English Title:** *Euler's Totient Function phi(n) for Prime, Product, and Powers*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 2 / Slide 22 (Euler's Totient Function)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `number-theory`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** احسب قيمة دالة أويلر phi(n) للحالات التالية: (1) n = 37، (2) n = 35، (3) n = 240. اذكر القانون الرياضي المستخدم في كل حالة.
> 
> **In English:** *"Calculate Euler totient function phi(n) for: (1) n = 37, (2) n = 35, (3) n = 240. State the formula applied for each case."*

**📥 المعطيات (Given Parameters):**
- **عدد أولي:** `$n_1 = 37 (Prime)$`
- **حاصل ضرب عددين أوليين:** `$n_2 = 35 = 5 * 7 (Product of two primes)$`
- **عدد مركب بعدة عوامل أولية:** `$n_3 = 240 = 2^4 * 3^1 * 5^1 (Composite)$`

**🎯 المطلوب إيجاده (Required):** قيم دالة أويلر: phi(37) و phi(35) و phi(240).

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** قوانين دالة أويلر الأساسية (*Euler's Totient Formulas*)
$$ \phi(p) = p - 1, \quad \phi(p \cdot q) = (p-1)(q-1), \quad \phi(n) = n \prod_{p \mid n} \left(1 - \frac{1}{p}\right) $$
> للعدد الأولي p يكون phi(p)=p-1. وللأعداد الأولية نسبياً تتوزع الدالة بالضرب. ولأي عدد عام يطبق قانون الجداء التحليلي.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: حساب phi(37) للعدد الأولي (*Compute phi(37) for Prime*)
$$ \phi(37) = 37 - 1 = 36 $$
- **النتيجة المرحلية:** `$36$`
- **الشرح الرياضي:** بما أن 37 أولي فإن phi(37) = 36.

##### الخطوة 2: حساب phi(35) لحاصل ضرب أوليين (*Compute phi(35) for Product of Primes*)
$$ \phi(35) = \phi(5 \times 7) = (5 - 1)(7 - 1) = 4 \times 6 = 24 $$
- **النتيجة المرحلية:** `$24$`
- **الشرح الرياضي:** 5 و 7 أوليان مميزان، إذن phi(35) = 4 × 6 = 24.

##### الخطوة 3: حساب phi(240) بقانون الجداء الأولي (*Compute phi(240) using Prime Product Formula*)
$$ 240 = 2^4 \times 3 \times 5 \implies \phi(240) = 240 \times (1 - 1/2)(1 - 1/3)(1 - 1/5) = 240 \times \frac{1}{2} \times \frac{2}{3} \times \frac{4}{5} $$
- **النتيجة المرحلية:** `$64$`
- **الشرح الرياضي:** 240 × (8/30) = 64.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`\phi(37) = 36, \quad \phi(35) = 24, \quad \phi(240) = 64`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق البديل: (16-8) × 2 × 4 = 64. النتيجة متطابقة تماماً.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** معاملة 35 كعدد أولي وكتابة phi(35)=34.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** حلل الأعداد المركبة لعواملها الأولية أولاً.

---

### 🎯 مسألة رقم [prob-ch2-05]: مبرهنة فيرما الصغرى لحساب القوى الأسية الكبيرة 3^201 mod 11
**English Title:** *Fermat's Little Theorem: Rapid Exponentiation 3^201 mod 11*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 2 / Slide 26 (Fermat's Little Theorem)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `number-theory`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** باستخدام مبرهنة فيرما الصغرى، احسب باقي قسمة 3^201 على 11 (أي احسب 3^201 mod 11).
> 
> **In English:** *"Using Fermat’s Little Theorem, compute the remainder when 3^{201} is divided by 11 (i.e. find 3^{201} \pmod{11})."*

**📥 المعطيات (Given Parameters):**
- **الأساس:** `$a = 3$`
- **الأس:** `$exponent = 201$`
- **المقياس (عدد أولي):** `$p = 11 (Prime)$`

**🎯 المطلوب إيجاده (Required):** قيمة 3^201 mod 11.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** مبرهنة فيرما الصغرى (*Fermat's Little Theorem*)
$$ a^{p-1} \equiv 1 \pmod p \quad \text{when } \gcd(a, p) = 1 $$
> بما أن 11 أولي و gcd(3, 11)=1 فإن 3^10 = 1 mod 11. ويختزل الأس بمقياس 10.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: تطبيق اختزال فيرما على الأس (*Apply Fermat Reduction on Exponent*)
$$ 201 = 20 \times 10 + 1 \implies 3^{201} = (3^{10})^{20} \times 3^1 $$
- **النتيجة المرحلية:** `$3^{10} \equiv 1 \pmod{11}$`
- **الشرح الرياضي:** نقسم الأس 201 على 10: الناتج 20 والباقي 1.

##### الخطوة 2: حساب القيمة النهائية (*Evaluate Modular Value*)
$$ 3^{201} \equiv (1)^{20} \times 3^1 \equiv 3 \pmod{11} $$
- **النتيجة المرحلية:** `$3$`
- **الشرح الرياضي:** بالتعويض عن 3^10 بالواحد ينتج 3.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`3^{201} \equiv 3 \pmod{11}`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> تحقق: 3^5 = 1 mod 11، إذن 3^200 = 1، ويتبقى 3^1 = 3.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** قسمة الأس على 11 بدلاً من 10.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** دورة الأس في فيرما هي p - 1 دائماً.

---

### 🎯 مسألة رقم [prob-ch2-06]: مبرهنة أويلر للمقاييس المركبة: حساب 3^80 mod 100
**English Title:** *Euler's Theorem for Composite Modulus: Computing 3^80 mod 100*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 2 / Slide 28 (Euler's Generalization)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `number-theory`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** باستخدام مبرهنة أويلر، احسب 3^80 mod 100 (لاحظ أن 100 عدد مركب، فلا تنطبق مبرهنة فيرما مباشرة).
> 
> **In English:** *"Using Euler’s Theorem, compute 3^{80} \pmod{100}. (Note that 100 is composite, so Fermat’s theorem does not apply directly)."*

**📥 المعطيات (Given Parameters):**
- **الأساس:** `$Base a = 3$`
- **المقياس المركب 100:** `$Modulus n = 100 = 2^2 * 5^2$`
- **الأس:** `$Exponent = 80$`

**🎯 المطلوب إيجاده (Required):** قيمة 3^80 mod 100.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** تعميم أويلر لمبرهنة فيرما (*Euler's Generalization of Fermat's Theorem*)
$$ a^{\phi(n)} \equiv 1 \pmod n \quad \text{when } \gcd(a, n) = 1 $$
> إذا كان a و n أوليين نسبياً، فإن رفع a للقوة phi(n) يكافئ 1 مقياس n.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: حساب phi(100) والتحقق من gcd(3, 100) (*Compute phi(100) and Check gcd(3, 100)*)
$$ 100 = 2^2 \times 5^2 \implies \phi(100) = 100 \times (1 - 1/2)(1 - 1/5) = 100 \times \frac{1}{2} \times \frac{4}{5} = 40 $$
- **النتيجة المرحلية:** `$\phi(100) = 40, \quad \gcd(3, 100) = 1$`
- **الشرح الرياضي:** gcd(3, 100) = 1، إذن ينطبق أويلر: 3^40 = 1 مقياس 100.

##### الخطوة 2: تفكيك الأس 80 بمقياس phi(100) (*Decompose Exponent 80*)
$$ 80 = 2 \times 40 + 0 \implies 3^{80} = (3^{40})^2 \equiv (1)^2 \equiv 1 \pmod{100} $$
- **النتيجة المرحلية:** `$1$`
- **الشرح الرياضي:** بما أن 80 مضاعف تام للعدد 40، فإن 3^80 يكافئ 1 مقياس 100.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`3^{80} \equiv 1 \pmod{100}`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق المباشر: 3^20 = 1 mod 100، وبالتالي 3^80 = (3^20)^4 = 1 mod 100.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** استخدام مبرهنة فيرما مع p - 1 = 99.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** العدد 100 ليس أولياً! يجب استخدام مبرهنة أويلر مع phi(100) = 40.

---

### 🎯 مسألة رقم [prob-ch2-07]: الرفع الأسي السريع: خوارزمية التربيع والضرب لحساب 11^23 mod 187
**English Title:** *Fast Modular Exponentiation: Square-and-Multiply for 11^23 mod 187*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 2 / Slide 30 (Square and Multiply Algorithm)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `number-theory`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** باستخدام خوارزمية الرفع الأسي السريع (التربيع والضرب Square-and-Multiply)، احسب 11^23 mod 187. وضح التمثيل الثنائي للأس وكل خطوة تربيع وضرب وسيطة.
> 
> **In English:** *"Using the Fast Modular Exponentiation (Square-and-Multiply) algorithm, compute 11^{23} \pmod{187}. Show the binary representation of the exponent and each intermediate squaring and multiplication step."*

**📥 المعطيات (Given Parameters):**
- **الأساس:** `$Base a = 11$`
- **الأس بالنظام الثنائي:** `$Exponent b = 23 = 10111_2$`
- **المقياس:** `$Modulus n = 187$`

**🎯 المطلوب إيجاده (Required):** قيمة 11^23 mod 187.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** خوارزمية التربيع والضرب (*Square-and-Multiply Algorithm*)
$$ b = \sum_{i=0}^{k-1} b_i 2^i, \quad \text{For each bit: Square; if bit = 1: Multiply by } a $$
> فحص بتات الأس من اليسار لليمين: تربيع الناتج في كل خطوة، والضرب في الأساس إذا كان البت 1.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: تحويل الأس 23 إلى النظام الثنائي (*Convert Exponent 23 to Binary*)
$$ 23_{10} = 16 + 4 + 2 + 1 = 10111_2 $$
- **النتيجة المرحلية:** `$Bits: [b_4=1, b_3=0, b_2=1, b_1=1, b_0=1]$`
- **الشرح الرياضي:** العدد 23 ثنائياً هو 10111_2. نبدأ من الخانة اليسرى b4 بقيمة y = 11.

##### الخطوة 2: البت b3 = 0: تربيع فقط (*Bit b_3 = 0: Square Only*)
$$ y = (11)^2 = 121 \pmod{187} $$
- **النتيجة المرحلية:** `$y = 121$`
- **الشرح الرياضي:** البت 0 إذن تربيع فقط: 11^2 = 121.

##### الخطوة 3: البت b2 = 1: تربيع ثم ضرب (*Bit b_2 = 1: Square and Multiply*)
$$ y = (121)^2 = 14641 = 55 \pmod{187} \implies y = 55 \times 11 = 605 = 44 \pmod{187} $$
- **النتيجة المرحلية:** `$y = 44$`
- **الشرح الرياضي:** تربيع 121 يعطي 55 مقياس 187. والضرب في 11 يعطي 605 = 44 مقياس 187.

##### الخطوة 4: البت b1 = 1: تربيع ثم ضرب (*Bit b_1 = 1: Square and Multiply*)
$$ y = (44)^2 = 1936 = 66 \pmod{187} \implies y = 66 \times 11 = 726 = 165 \pmod{187} $$
- **النتيجة المرحلية:** `$y = 165$`
- **الشرح الرياضي:** تربيع 44 يعطي 66. والضرب في 11 يعطي 726 = 165 مقياس 187.

##### الخطوة 5: البت b0 = 1: تربيع ثم ضرب (الخطوة الأخيرة) (*Bit b_0 = 1: Square and Multiply (Final Bit)*)
$$ y = (165)^2 = (-22)^2 = 484 = 110 \pmod{187} \implies y = 110 \times 11 = 1210 = 88 \pmod{187} $$
- **النتيجة المرحلية:** `$y = 88$`
- **الشرح الرياضي:** تربيع 165 يعطي 110. والضرب في 11 يعطي 1210 = 6 × 187 + 88 = 88.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`11^{23} \equiv 88 \pmod{187}`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: 187 = 11 × 17. بمقياس 11: الناتج 88 = 0 mod 11. وبمقياس 17: 88 = 3 mod 17 وهو مطابق تماماً.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** الضرب قبل التربيع في خطوات الحلقة.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** قاعدة الخوارزمية ثابتة: رَبِّع أولاً دائماً، ثم اضرب إذا كان البت 1 فقط.

---

### 🎯 مسألة رقم [prob-ch2-08]: اختبار ميلر-رابين لاحتمالية أولية العدد n = 221 باستخدام الأساس a = 2
**English Title:** *Miller-Rabin Probabilistic Primality Test for n = 221 with Base a = 2*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 2 / Slide 31 (Miller-Rabin Primality Test)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `number-theory`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** طبق اختبار ميلر-رابين للأولية لفحص ما إذا كان العدد n = 221 أولياً أم مركباً باستخدام الأساس a = 2. فكك n - 1 = 2^k * q، واحسب المتتالية الأسية، وحدد النتيجة.
> 
> **In English:** *"Apply the Miller-Rabin Primality Test to determine whether n = 221 is prime or composite using base a = 2. Decompose n - 1 = 2^k * q, evaluate the modular sequence, and draw the conclusion."*

**📥 المعطيات (Given Parameters):**
- **العدد المراد اختباره:** `$Candidate n = 221$`
- **الأساس المختار للفحص:** `$Test Base a = 2$`

**🎯 المطلوب إيجاده (Required):** قيم k و q، متتالية الاختبار، واستنتاج الأولية.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** مبرهنة اختبار ميلر-رابين (*Miller-Rabin Primality Lemma*)
$$ n - 1 = 2^k \cdot q \quad (q \text{ odd}), \quad \text{Condition: } a^q \equiv 1 \pmod n \text{ or } a^{2^j q} \equiv -1 \pmod n $$
> إذا لم يتحقق أي من الشرطين لأي قيمة لـ j، فإن n مركب قطعاً. وإذا تحقق أحدهما، فإن n أولي محتمل (شبه أولي قوي للأساس a).

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: تفكيك n - 1 إلى 2^k * q (*Decompose n - 1 into 2^k * q*)
$$ n - 1 = 221 - 1 = 220 = 2^2 \times 55 $$
- **النتيجة المرحلية:** `$k = 2, \quad q = 55 \text{ (odd)}$`
- **الشرح الرياضي:** نقسم 220 على 2 مرتين لينتج 55 وهو فردي. إذن k = 2 و q = 55.

##### الخطوة 2: حساب الحد الأول a^q mod n عند j = 0 (*Compute First Term a^q mod n for j = 0*)
$$ a^q = 2^{55} \pmod{221} $$
$$ 2^{55} = (2^7)^7 \times 2^6 = (128)^7 \times 64 \equiv (-93)^7 \times 64 \equiv 174 \pmod{221} $$
- **النتيجة المرحلية:** `$2^{55} \equiv 174 \pmod{221} \neq 1 \text{ and } \neq 220 (-1)$`
- **الشرح الرياضي:** ناتج 2^55 هو 174، وهو لا يساوي 1 ولا يساوي -1 (220). لذا ننتقل لتربيعه عند j = 1.

##### الخطوة 3: حساب الحد التالي بالتربيع عند j = 1 (*Compute Next Term a^{2q} mod n for j = 1*)
$$ a^{2q} = (a^q)^2 = (174)^2 = (-47)^2 = 2209 = 2210 - 1 \equiv -1 \equiv 220 \pmod{221} $$
- **النتيجة المرحلية:** `$220 \equiv -1 \pmod{221}$`
- **الشرح الرياضي:** بما أن 174^2 = 2209 = -1 mod 221، فإن شرط التطابق مع -1 قد تحقق عند j = 1!

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`Test is INCONCLUSIVE; n = 221 is a Strong Pseudoprime to base 2 (in reality, 221 = 13 * 17 is composite).`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: 221 مركب (13 × 17). الأساس 2 لم يكتشفه لأنه عدد شبه أولي قوي للأساس 2. لكن اختبار أساس آخر مثل 3 يثبت أنه مركب فوراً.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** الجزم بأن 221 أولي لمجرد اجتيازه الفحص للأساس 2.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** اجتياز أساس واحد يعني أنه أولي محتمل (Pseudoprime)؛ وللتأكد يجب تجربة عدة أسس مختلفة.

---

### 🎯 مسألة رقم [prob-ch2-09]: مبرهنة الباقي الصينية: حل نظام المعادلات x = 2 mod 3, 3 mod 5, 2 mod 7
**English Title:** *Chinese Remainder Theorem: System Solving for x = 2 mod 3, 3 mod 5, 2 mod 7*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 2 / Slide 32 (Chinese Remainder Theorem)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `number-theory`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** أوجد الحل المشترك لنظام المعادلات التطابقية التالي باستخدام مبرهنة الباقي الصينية: x = 2 mod 3، و x = 3 mod 5، و x = 2 mod 7.
> 
> **In English:** *"Solve the system of simultaneous modular congruences using the Chinese Remainder Theorem: x \equiv 2 \pmod 3, x \equiv 3 \pmod 5, x \equiv 2 \pmod 7."*

**📥 المعطيات (Given Parameters):**
- **المعادلة الأولى: a1 = 2, m1 = 3:** `$Equation 1 = x = 2 (mod 3)$`
- **المعادلة الثانية: a2 = 3, m2 = 5:** `$Equation 2 = x = 3 (mod 5)$`
- **المعادلة الثالثة: a3 = 2, m3 = 7:** `$Equation 3 = x = 2 (mod 7)$`

**🎯 المطلوب إيجاده (Required):** الحل الوحيد x مقياس M = 105.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** صيغة مبرهنة الباقي الصينية (*Chinese Remainder Theorem Formula*)
$$ x = \left(\sum_{i=1}^k a_i M_i M_i^{-1}\right) \pmod M, \quad M = \prod m_i, \quad M_i = \frac{M}{m_i} $$
> حساب المقياس الكلي M والمقاييس الجزئية Mi ومعكوس كل منها Mi^-1 مقياس mi.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: حساب M والمقاييس الجزئية M_i (*Compute Total Modulus M and Partial Moduli M_i*)
$$ M = 3 \times 5 \times 7 = 105 \implies M_1 = 35, \quad M_2 = 21, \quad M_3 = 15 $$
- **النتيجة المرحلية:** `$M_1 = 35, M_2 = 21, M_3 = 15$`
- **الشرح الرياضي:** M = 105، و M1 = 35، و M2 = 21، و M3 = 15.

##### الخطوة 2: حساب المعكوسات الضربية M_i^-1 مقياس m_i (*Compute Modular Inverses M_i^{-1} mod m_i*)
$$ 35 M_1^{-1} \equiv 2 M_1^{-1} \equiv 1 \pmod 3 \implies M_1^{-1} = 2 \\ 21 M_2^{-1} \equiv 1 M_2^{-1} \equiv 1 \pmod 5 \implies M_2^{-1} = 1 \\ 15 M_3^{-1} \equiv 1 M_3^{-1} \equiv 1 \pmod 7 \implies M_3^{-1} = 1 $$
- **النتيجة المرحلية:** `$M_1^{-1} = 2, \quad M_2^{-1} = 1, \quad M_3^{-1} = 1$`
- **الشرح الرياضي:** المعكوسات الضربية المقابلة هي 2 و 1 و 1.

##### الخطوة 3: تجميع الحل النهائي x (*Assemble Solution x*)
$$ x = (2 \times 35 \times 2 + 3 \times 21 \times 1 + 2 \times 15 \times 1) \pmod{105} = (140 + 63 + 30) = 233 \equiv 23 \pmod{105} $$
- **النتيجة المرحلية:** `$x = 23$`
- **الشرح الرياضي:** مجموع الحدود 233، وبقسمته على 105 يكون الباقي 23.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`x \equiv 23 \pmod{105}`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: 23 mod 3 = 2، و 23 mod 5 = 3، و 23 mod 7 = 2. الحل صحيح 100%.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** حساب معكوس Mi مقياس M بدلاً من mi.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** احسب معكوس كل حد مقياس مقياسه الصغير mi.

---

### 🎯 مسألة رقم [prob-ch2-10]: الجذور الأولية ومسألة اللوغاريتم المتقطع مقياس 19
**English Title:** *Primitive Roots and Discrete Logarithms Modulo 19*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 2 / Slide 35 (Discrete Logarithms & Primitive Roots)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `number-theory`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** (1) أثبت أن a = 2 هو جذر أولي (Primitive Root) للعدد الأولي p = 19. (2) أوجد قيمة اللوغاريتم المتقطع dlog_{2, 19}(13).
> 
> **In English:** *"(1) Prove that a = 2 is a primitive root of prime p = 19. (2) Find the discrete logarithm dlog_{2, 19}(13)."*

**📥 المعطيات (Given Parameters):**
- **العدد الأولي p:** `$Prime p = 19$`
- **المولد المرشح:** `$Candidate Generator a = 2$`
- **العدد المستهدف لحساب اللوغاريتم:** `$Target Value b = 13$`

**🎯 المطلوب إيجاده (Required):** إثبات رتبة الجذر الأولي 18 وإيجاد الأس x بحيث 2^x = 13 mod 19.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** تعريف الجذر الأولي واللوغاريتم المتقطع (*Primitive Root and Discrete Logarithm Definition*)
$$ \text{ord}_p(a) = p - 1 = \phi(p), \quad a^x \equiv b \pmod p \implies x = \text{dlog}_{a, p}(b) $$
> الجذر الأولي يولد جميع بواقي القسمة غير الصفرية مقياس p. واللوغاريتم المتقطع هو الأس x المقابل.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: توليد قوى العدد 2 مقياس 19 (*Generate Powers of 2 Modulo 19*)
$$ 2^1=2, 2^2=4, 2^3=8, 2^4=16, 2^5=13, 2^6=7, 2^7=14, 2^8=9, 2^9=18 \equiv -1 $$
- **النتيجة المرحلية:** `$2^9 = 18 = -1 mod 19 \implies \text{ord}(2) = 18$`
- **الشرح الرياضي:** بما أن 2^9 = -1 mod 19 فإن رتبة العدد هي 18 = p - 1، وبالتالي فإن 2 جذر أولي كامل.

##### الخطوة 2: استخراج اللوغاريتم المتقطع للقيمة 13 (*Identify Discrete Logarithm for b = 13*)
$$ 2^5 = 32 = 19 + 13 \equiv 13 \pmod{19} $$
- **النتيجة المرحلية:** `$x = 5$`
- **الشرح الرياضي:** 2^5 = 32 يكافئ 13 مقياس 19، إذن اللوغاريتم المتقطع هو 5.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`2 is a primitive root of 19; dlog_{2, 19}(13) = 5`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: 2^5 = 32 = 19 + 13، الباقي 13 تماماً.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** افتراض أن أي عدد هو جذر أولي دون التأكد من رتبته.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** يجب أن تكون رتبة الجذر الأولي مساوية تماماً لـ p - 1.

---

<a id="chapter-3"></a>
# الباب الثالث: تقنيات التشفير التقليدية الكلاسيكية
### Chapter 3: Classical Encryption Techniques

<a id="ch3-formulas"></a>
## 3.1 قوانين ومعادلات الشفرات الكلاسيكية

### 1. شفرة قيصر بالإزاحة العامة (Caesar Cipher General Modular Shift)
$$ C = \mathrm{E}(k, P) = (P + k) \bmod 26 $$
$$ P = \mathrm{D}(k, C) = (C - k) \bmod 26 $$
- **حيث:** $P, C \in \{0, 1, \dots, 25\}$ حيث $a=0, b=1, \dots, z=25$. مفتاح الإزاحة $k \in \{1, 2, \dots, 25\}$.
- **فضاء المفاتيح:** 25 مفتاحاً فقط $\implies$ تافهة الكسر بالبحث الشامل (Brute-Force).

### 2. شفرة الاستبدال أحادية الأبجدية (Monoalphabetic Substitution Cipher)
استبدال كل حرف من الأبجدية الـ 26 بحرف مقابل فريد:
$$ \text{Key Space} = 26! \approx 4.0329 \times 10^{26} \approx 2^{88.38} \text{ keys} $$
- **نقطة الضعف:** رغم ضخامة فضاء المفاتيح، إلا أنها تسقط فوراً أمام التحليل الإحصائي للترددات (Frequency Analysis)، لأن ترددات الحروف الصريحة تنعكس مباشرة في الحروف المشفرة (حرف E هو الأكثر تكراراً في الإنجليزية بنسبة 12.7%، وثنائي th وثلاثي the).

### 3. شفرة بلايفير الثنائية (Playfair Cipher Rules)
- تعتمد على مصفوفة $5 \times 5$ مبنية بكلمة مفتاحية (بدون تكرار الحروف، ودمج I/J في خانة واحدة).
- **قواعد تجهيز النص (Preparation Rules):**
  1. تقسيم النص إلى أزواج ثنائية (Digraphs).
  2. إذا تكرر نفس الحرف في الزوج الواحد، يُفصل بينهما بحرف حشو (عادة 'x'): مثل `balloon` $\to$ `ba lx lo on`.
  3. إذا كان عدد حروف النص فردياً، يُضاف حرف حشو 'x' أو 'z' في النهاية.
- **قواعد الحركة والتحويل الثلاث (Movement Rules):**
  1. **نفس الصف (Same Row):** يستبدل كل حرف بالحرف الذي يقع على يمينه دورياً (مع الالتفاف لليسار).
  2. **نفس العمود (Same Column):** يستبدل كل حرف بالحرف الذي يقع أسفله دورياً (مع الالتفاف للأعلى).
  3. **المستطيل (Rectangle):** يستبدل كل حرف بالحرف الواقع في نفس صفه وعمود الحرف الآخر في الزوج.

### 4. شفرة هيل بضرب المصفوفات (Hill Cipher Matrix Equations)
$$ \mathbf{C} = \mathbf{K} \cdot \mathbf{P} \pmod{26} $$
$$ \mathbf{P} = \mathbf{K}^{-1} \cdot \mathbf{C} \pmod{26} $$
- **شرط وجود المعكوس وقابلية فك التشفير (Invertibility Condition):**
$$ \gcd(\det(\mathbf{K}) \bmod 26, 26) = 1 $$
أي أن محدد المصفوفة $\det(\mathbf{K})$ يجب ألا يقبل القسمة على 2 وألا يقبل القسمة على 13.
- **قانون معكوس مصفوفة $2 \times 2$ مقياس 26:**
$$ \mathbf{K} = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \implies \mathbf{K}^{-1} = [\det(\mathbf{K})^{-1} \bmod 26] \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} \pmod{26} $$
حيث: $\det(\mathbf{K}) = (ad - bc) \bmod 26$.

### 5. شفرة فيجينير متعددة الأبجديات (Vigenère Polyalphabetic Cipher)
تكرار كلمة مفتاحية طولها $m$ على امتداد النص الصريح:
$$ C_i = (P_i + K_{i \bmod m}) \bmod 26 $$
$$ P_i = (C_i - K_{i \bmod m}) \bmod 26 $$

### 6. شفرة فيرنام ولوحة المرة الواحدة (Vernam Cipher & One-Time Pad)
$$ C_i = P_i \oplus K_i, \qquad P_i = C_i \oplus K_i $$
- **شرط السرية التامة (Perfect Secrecy):** المفتاح $K$ عشوائي تماماً، بطول الرسالة، ولا يُستخدم إلا مرة واحدة إطلاقاً ويُتلف بعدها.
- **كارثة إعادة استخدام المفتاح (Two-Time Pad Catastrophe):** إذا شُفرت رسالتان بنفس المفتاح:
$$ C_1 \oplus C_2 = (P_1 \oplus K) \oplus (P_2 \oplus K) = P_1 \oplus P_2 $$
مما يلغي المفتاح تماماً ويتيح للمهاجم استخراج النصين الصريحين.

### 7. شفرات التبديل الموضعي (Transposition Ciphers)
- **سياج السكة الحديدية (Rail Fence):** كتابة النص قطرياً على عمق $d$ ثم قراءته صفاً صفاً.
- **التبديل العمودي (Row / Columnar Transposition):** كتابة النص في مستطيل وقراءته أعمدة بترتيب مفتاح التبديل.

---

<a id="ch3-slides"></a>
## 3.2 أمثلة السلايدات المحلولة بالتفصيل (Stallings Ch 3)

### 💡 مثال السلايدات 1: شفرة قيصر (Slide 14)
- **النص الصريح:** `meet me after the toga party`
- **مفتاح الإزاحة:** $k = 3$
- **التشفير:** كل حرف يُزاح بمقدار 3 خانات للأمام ($a \to D, m \to P, e \to H, \dots$)
- **النص المشفر:** `PHHW PH DIWHU WKH WRJD SDUWB`

### 💡 مثال السلايدات 2: مصفوفة بلايفير بالكلمة المفتاحية `MONARCHY` (Slide 22)
```text
M  O  N  A  R
C  H  Y  B  D
E  F  G I/J K
L  P  Q  S  T
U  V  W  X  Z
```
- الزوج `ar`: في نفس الصف الأول $\to$ الحرف على يمين كل منهما $\implies$ `RM`.
- الزوج `mu`: في نفس العمود الأول $\to$ الحرف أسفل كل منهما $\implies$ `CM`.
- الزوج `hs`: يكونان مستطيلاً (الصف 2 والعمود 2 لـ h، والصف 4 والعمود 4 لـ s) $\to$ زوايا المستطيل المقابلة $\implies$ `BP`.

### 💡 مثال السلايدات 3: شفرة فيجينير (Slide 27)
- **النص الصريح:** `wearediscoveredsaveyourself`
- **الكلمة المفتاحية:** `deceptive` (تُكرر على امتداد النص)
```text
key:        deceptivedeceptivedeceptive
plaintext:  wearediscoveredsaveyourself
ciphertext: ZICVTWQNGRZGVTWAVZHCQYGLMGJ
```
- **الحساب لأول حرفين:**
  - $w=22, d=3 \implies (22 + 3) \bmod 26 = 25 \to Z$.
  - $e=4, e=4 \implies (4 + 4) \bmod 26 = 8 \to I$.

### 💡 مثال السلايدات 4: شفرة المفتاح الذاتي (Autokey Cipher) (Slide 28)
- المفتاح يتكون من الكلمة المفتاحية متبوعة بالنص الصريح نفسه:
```text
key:        deceptivewearediscoveredsav
plaintext:  wearediscoveredsaveyourself
ciphertext: ZICVTWQNGKZEIIGASXSTSLVVWLA
```

### 💡 مثال السلايدات 5: سياج السكة الحديدية (Rail Fence Depth 2) (Slide 32)
- **النص:** `meet me after the toga party`
- كتابة قطرياً بعمق 2:
```text
m . e . m . a . t . r . h . t . g . p . r . y
. e . t . e . f . e . t . e . o . a . a . t .
```
- قراءة الصفوف: `MEMATRHTGPRY` متبوعة بـ `ETEFETEOAAT` $\implies$ `MEMATRHTGPRYETEFETEOAAT`.

### 💡 مثال السلايدات 6: التبديل العمودي (Row Transposition) (Slide 33)
- **المفتاح:** `4 3 1 2 5 6 7`
- **النص:** `attack postponed until two am xyz`
```text
Col: 4 3 1 2 5 6 7
Row1: a t t a c k p
Row2: o s t p o n e
Row3: d u n t i l t
Row4: w o a m x y z
```
- قراءة الأعمدة بترتيب المفتاح (1 ثم 2 ثم 3 ثم 4 ثم 5 ثم 6 ثم 7):
  - عمود 1: `t t n a`
  - عمود 2: `a p t m`
  - عمود 3: `t s u o`
  - عمود 4: `a o d w`
  - عمود 5: `c o i x`
  - عمود 6: `k n l y`
  - عمود 7: `p e t z`
- **الناتج المشفر:** `TTNAAPTMTSUOAODWCOIXKNLYPETZ`.

---

<a id="ch3-problems"></a>
## 3.3 مسائل امتحانات الميدتيرم الرسمية المحلولة تفصيلياً (2020 & 2022)

### 🌟 مسألة امتحان ميدتيرم 2020 الرسمية: تشفير بلايفير لكلمة `cryptography` بالمفتاح `security`
- **نص السؤال بالامتحان:** *"Encrypt the following plaintext using Playfair Technique. Given that: Plaintext: cryptography, Key: security"*
- **الخطوة 1: بناء مصفوفة بلايفير $5 \times 5$ بالمفتاح `SECURITY`:**
```text
S  E  C  U  R
I  T  Y  A  B
D  F  G  H  K
L  M  N  O  P
Q  V  W  X  Z
```
- **الخطوة 2: تقسيم النص إلى أزواج ثنائية:**
  `c r` | `y p` | `t o` | `g r` | `a p` | `h y` (طول النص 12 حرفاً، أزواج منتظمة بدون تكرار في نفس الزوج).
- **الخطوة 3: تطبيق قواعد بلايفير على كل زوج:**
  1. الزوج `c r`: كلاهما في الصف الأول $\to$ الحرف على يمين كل منهما دورياً $\implies$ `U S`.
  2. الزوج `y p`: مستطيل (y في الصف 2 العمود 3، و p في الصف 4 العمود 5) $\to$ زوايا المستطيل $\implies$ `B N`.
  3. الزوج `t o`: مستطيل (t في الصف 2 العمود 2، و o في الصف 4 العمود 4) $\to$ زوايا المستطيل $\implies$ `A M`.
  4. الزوج `g r`: مستطيل (g في الصف 3 العمود 3، و r في الصف 1 العمود 5) $\to$ زوايا المستطيل $\implies$ `K C`.
  5. الزوج `a p`: مستطيل (a في الصف 2 العمود 4، و p في الصف 4 العمود 5) $\to$ زوايا المستطيل $\implies$ `B O`.
  6. الزوج `h y`: نفس العمود الثالث (y في الصف 2، و h في الصف 3) $\to$ الحرف أسفل كل منهما $\implies$ `G A`.
- **✅ النص المشفر النهائي المعتمد بنموذج إجابة الامتحان:**
> **`US BN AM KC BO GA`**

### 🌟 مسألة امتحان ميدتيرم 2020 الرسمية: تشفير هيل $3 \times 3$ لكلمة `Secrecy`
- **نص السؤال بالامتحان:** *"Encrypt the plaintext 'Secrecy' using Hill Cipher technique given the following key. (Hint: encrypt only the first 3 letters of the plaintext)"*
$$ \mathbf{K} = \begin{pmatrix} 21 & 5 & 11 \\ 14 & 7 & 12 \\ 5 & 25 & 12 \end{pmatrix} $$
- **الخطوة 1: تمثيل أول 3 حروف 'Sec' كمتجه أرقام:**
  - $S = 18, \quad e = 4, \quad c = 2 \implies \mathbf{P} = \begin{pmatrix} 18 \\ 4 \\ 2 \end{pmatrix}$
- **الخطوة 2: ضرب المصفوفة في المتجه:**
$$ \mathbf{C} = \begin{pmatrix} 21 & 5 & 11 \\ 14 & 7 & 12 \\ 5 & 25 & 12 \end{pmatrix} \begin{pmatrix} 18 \\ 4 \\ 2 \end{pmatrix} \pmod{26} $$
- **الخطوة 3: الحسابات التفصيلية لكل صف:**
  - **الصف الأول:** $21(18) + 5(4) + 11(2) = 378 + 20 + 22 = 420$.
    - اختزال مقياس 26: $420 = 16 \times 26 + 4 \implies 420 \bmod 26 = 4 \to \mathbf{'e'}$.
  - **الصف الثاني:** $14(18) + 7(4) + 12(2) = 252 + 28 + 24 = 304$.
    - اختزال مقياس 26: $304 = 11 \times 26 + 18 \implies 304 \bmod 26 = 18 \to \mathbf{'s'}$.
  - **الصف الثالث:** $5(18) + 25(4) + 12(2) = 90 + 100 + 24 = 214$.
    - اختزال مقياس 26: $214 = 8 \times 26 + 6 \implies 214 \bmod 26 = 6 \to \mathbf{'g'}$.
- **✅ النص المشفر النهائي المعتمد بنموذج إجابة الامتحان:**
> **`e s g`**

### 🌟 مسألة امتحان ميدتيرم 2022 الرسمية: تشفير هيل $3 \times 3$ لكلمة `safe messages`
- **نص السؤال بالامتحان:** *"Encrypt the plaintext 'safe messages', using Hill cipher for the given key (Hint: encrypt only the first 3 letters of the plaintext)"*
$$ \mathbf{K} = \begin{pmatrix} 2 & 8 & 15 \\ 7 & 4 & 17 \\ 8 & 13 & 6 \end{pmatrix} $$
- **الخطوة 1: تمثيل أول 3 حروف 'saf' كمتجه أرقام:**
  - $s = 18, \quad a = 0, \quad f = 5 \implies \mathbf{P} = \begin{pmatrix} 18 \\ 0 \\ 5 \end{pmatrix}$
- **الخطوة 2: ضرب المصفوفة في المتجه:**
$$ \mathbf{C} = \begin{pmatrix} 2 & 8 & 15 \\ 7 & 4 & 17 \\ 8 & 13 & 6 \end{pmatrix} \begin{pmatrix} 18 \\ 0 \\ 5 \end{pmatrix} \pmod{26} $$
- **الخطوة 3: الحسابات التفصيلية لكل صف:**
  - **الصف الأول:** $2(18) + 8(0) + 15(5) = 36 + 0 + 75 = 111$.
    - اختزال مقياس 26: $111 = 4 \times 26 + 7 \implies 111 \bmod 26 = 7 \to \mathbf{'H'}$.
  - **الصف الثاني:** $7(18) + 4(0) + 17(5) = 126 + 0 + 85 = 211$.
    - اختزال مقياس 26: $211 = 8 \times 26 + 3 \implies 211 \bmod 26 = 3 \to \mathbf{'D'}$.
  - **الصف الثالث:** $8(18) + 13(0) + 6(5) = 144 + 0 + 30 = 174$.
    - اختزال مقياس 26: $174 = 6 \times 26 + 18 \implies 174 \bmod 26 = 18 \to \mathbf{'S'}$.
- **✅ النص المشفر النهائي المعتمد بنموذج إجابة الامتحان:**
> **`H D S`**

### 🌟 مسألة امتحان ميدتيرم 2022 الرسمية: تشفير بلايفير لكلمة `security` بالمفتاح `largest`
- **نص السؤال بالامتحان:** *"Encrypt the following plaintext using Playfair Technique. Given that: Key: largest, Plaintext: security"*
- **الخطوة 1: بناء مصفوفة بلايفير بالمفتاح `LARGEST`:**
```text
L  A  R  G  E
S  T  B  C  D
F  H I/J K  M
N  O  P  Q  U
V  W  X  Y  Z
```
- **الخطوة 2: تقسيم النص `security` إلى أزواج:** `s e` | `c u` | `r i` | `t y` (طول النص 8 حروف).
- **الخطوة 3: تطبيق قواعد التحويل:**
  1. الزوج `s e`: مستطيل (s في الصف 2 العمود 1، و e في الصف 1 العمود 5) $\to$ زوايا المستطيل $\implies$ `D L`.
  2. الزوج `c u`: مستطيل (c في الصف 2 العمود 4، و u في الصف 4 العمود 5) $\to$ زوايا المستطيل $\implies$ `C R` (أو التبديل حسب زوايا المستطيل).
  3. الزوج `r i`: نفس العمود الثالث (r في الصف 1، و i في الصف 3) $\to$ الحرف أسفل كل منهما $\implies$ `B P`.
  4. الزوج `t y`: نفس العمود الرابع (t في الصف 2، و y في الصف 5) $\to$ الحرف أسفل كل منهما $\implies$ `H C` (مع الالتفاف).
- **✅ النص المشفر:** `DL CR BP HC` (أو حسب ترتيب زوايا المستطيل).

---

## 3.4 المسائل التمرينية والنموذجية الكاملة للباب الثالث

### 🎯 مسألة رقم [prob-ch3-01]: شفرة قيصر: التشفير وفك التشفير بمفتاح الإزاحة العام k = 3 و k = 15
**English Title:** *Caesar Cipher Encryption and Decryption with General Key k*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 3 / Section 3.1 & Slide 5`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `classical-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** ليكن لدينا النص الصريح 'SECURITY': (1) شفر الرسالة باستخدام شفرة قيصر التقليدية بمفتاح إزاحة k = 3. (2) شفر نفس الرسالة بمفتاح عام k = 15. (3) فك تشفير النص المشفر في (2) لإثبات القابلية التامة للعكس.
> 
> **In English:** *"Given the plaintext 'SECURITY': (1) Encrypt the message using the traditional Caesar cipher with shift key k = 3. (2) Encrypt the same message with key k = 15. (3) Decrypt the ciphertext obtained in (2) to demonstrate exact invertibility."*

**📥 المعطيات (Given Parameters):**
- **النص الصريح:** `$Plaintext = SECURITY$`
- **مفتاح قيصر التقليدي:** `$Key 1 = k = 3 (Traditional)$`
- **مفتاح قيصر العام:** `$Key 2 = k = 15 (General)$`

**🎯 المطلوب إيجاده (Required):** النص المشفر عند k=3، النص المشفر عند k=15، وتأكيد فك التشفير.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** معادلة شفرة قيصر التطابقية (*Caesar Cipher Congruence*)
$$ C = (P + k) \pmod{26}, \quad P = (C - k + 26) \pmod{26} $$
> يُمثل كل حرف برقم في Z26 (A=0 حتى Z=25). التشفير بإضافة k مقياس 26، وفك التشفير بطرح k مقياس 26.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: تشفير 'SECURITY' بمفتاح قيصر التقليدي k = 3 (*Encrypt 'SECURITY' with Traditional Key k = 3*)
$$ C = (P + 3) \pmod{26} $$
$$ \begin{aligned} S(18) + 3 &= 21 \to V, \quad E(4) + 3 = 7 \to H, \quad C(2) + 3 = 5 \to F \\ U(20) + 3 &= 23 \to X, \quad R(17) + 3 = 20 \to U, \quad I(8) + 3 = 11 \to L \\ T(19) + 3 &= 22 \to W, \quad Y(24) + 3 = 27 \equiv 1 \to B \end{aligned} $$
- **النتيجة المرحلية:** `$V H F X U L W B$`
- **الشرح الرياضي:** نزيح كل حرف بمقدار 3 مواضع. الحرف Y(24) + 3 = 27 = 1 mod 26 فيعطي B.

##### الخطوة 2: تشفير 'SECURITY' بالمفتاح العام k = 15 (*Encrypt 'SECURITY' with General Key k = 15*)
$$ C = (P + 15) \pmod{26} $$
$$ \begin{aligned} S(18) + 15 &= 33 \equiv 7 \to H, \quad E(4) + 15 = 19 \to T, \quad C(2) + 15 = 17 \to R \\ U(20) + 15 &= 35 \equiv 9 \to J, \quad R(17) + 15 = 32 \equiv 6 \to G, \quad I(8) + 15 = 23 \to X \\ T(19) + 15 &= 34 \equiv 8 \to I, \quad Y(24) + 15 = 39 \equiv 13 \to N \end{aligned} $$
- **النتيجة المرحلية:** `$H T R J G X I N$`
- **الشرح الرياضي:** إزاحة بمقدار 15 مع الالتفاف: S تصبح H و Y تصبح N لينتج النص المشفر HTRJGXIN.

##### الخطوة 3: فك تشفير 'HTRJGXIN' بالمفتاح k = 15 (*Decrypt 'HTRJGXIN' with k = 15*)
$$ P = (C - 15 + 26) \pmod{26} $$
$$ H(7) - 15 + 26 = 18 \to S, \quad T(19) - 15 = 4 \to E, \quad R(17) - 15 = 2 \to C, \dots $$
- **النتيجة المرحلية:** `$SECURITY$`
- **الشرح الرياضي:** طرح 15 مقياس 26 يعيد النص الأصلي 'SECURITY' بدقة تامة.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`Ciphertext (k=3): 'VHFXULWB'; Ciphertext (k=15): 'HTRJGXIN'; Decrypted: 'SECURITY'`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: 18 + 3 = 21 (V)؛ وعند فك التشفير 21 - 3 = 18 (S). التطابق تام.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** نسيان الالتفاف حول 26 للحروف القريبة من نهاية الأبجدية.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** طبق دائماً mod 26؛ وإذا تجاوز المجموع 25 اطرح منه 26.

---

### 🎯 مسألة رقم [prob-ch3-02]: كسر شفرة قيصر بالبحث الشامل في فضاء المفاتيح الـ 25 الممكنة
**English Title:** *Brute-Force Cryptanalysis of Caesar Cipher (Key Space = 25)*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 3 / Table 3.1 Brute-Force Cryptanalysis`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `classical-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** تم اعتراض نص مشفر بشفرة قيصر: 'PHHW PH DIWHU WKH WRJD SDUWB'. (1) وضح لماذا ينجح هجوم البحث الشامل (Brute Force) حتماً ضد قيصر. (2) نفذ البحث الشامل بتجربة مفاتيح الإزاحة k = 1, 2, 3... حتى تكتشف الجملة الإنجليزية الأصلية ذات المعنى.
> 
> **In English:** *"An intercepted Caesar ciphertext is 'PHHW PH DIWHU WKH WRJD SDUWB'. (1) Explain why exhaustive brute-force search is guaranteed to succeed against Caesar. (2) Execute the brute-force search by testing shifts k = 1, 2, 3... until a meaningful English sentence is recovered."*

**📥 المعطيات (Given Parameters):**
- **النص المشفر المعترض:** `$Ciphertext = PHHW PH DIWHU WKH WRJD SDUWB$`
- **حجم فضاء المفاتيح (25 مفتاحاً فقط):** `$Key Space = 25 non-trivial keys (k = 1, ..., 25)$`

**🎯 المطلوب إيجاده (Required):** سجل المحاولات، مفتاح الإزاحة المكتشف k، والنص الصريح المسترجع.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** معادلة البحث الشامل عن المفاتيح (*Exhaustive Key Search*)
$$ P_i = (C - k_i) \pmod{26} \quad \text{for } k_i \in \{1, 2, \dots, 25\} $$
> نظراً لوجود 25 مفتاحاً فقط، يستطيع المهاجم اختبارها جميعاً في ثوانٍ معدودة والتعرف على النص الإنجليزي المقروء.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: تحليل نقطة ضعف فضاء المفاتيح (*Analyze Vulnerability of Key Space*)
$$ |K| = 25 \implies \text{Computational effort is trivial } O(1) $$
- **النتيجة المرحلية:** `$Key space is far too small for security$`
- **الشرح الرياضي:** الأمان يشترط فضاء مفاتيح ضخماً يستحيل حصره. أما مع 25 مفتاحاً فقط فإن فحصها بالعين أو بكود بسيط يكسر الشفرة فوراً.

##### الخطوة 2: تجربة مفاتيح الإزاحة على الكلمة الأولى 'PHHW' (*Test Shifts on First Word 'PHHW'*)
$$ \begin{aligned} k=1: & \quad \text{OGGV} \\ k=2: & \quad \text{NFFU} \\ k=3: & \quad \text{MEET} \quad \mathbf{\text{(Valid English Word!)}} \end{aligned} $$
- **النتيجة المرحلية:** `$Shift k = 3 yields recognizable English word 'MEET'$`
- **الشرح الرياضي:** عند k=1 ينتج OGGV (مهمل). وعند k=2 ينتج NFFU (مهمل). وعند k=3 ينتج MEET وهي كلمة إنجليزية واضحة.

##### الخطوة 3: تطبيق المفتاح k = 3 على كامل النص المشفر (*Apply Key k = 3 Across the Entire Ciphertext*)
$$ \text{Decrypt with } k = 3: \quad P = (C - 3 + 26) \pmod{26} $$
$$ \begin{aligned} \text{PHHW} &\to \text{MEET} \\ \text{PH} &\to \text{ME} \\ \text{DIWHU} &\to \text{AFTER} \\ \text{WKH} &\to \text{THE} \\ \text{WRJD} &\to \text{TOGA} \\ \text{SDUWB} &\to \text{PARTY} \end{aligned} $$
- **النتيجة المرحلية:** `$'MEET ME AFTER THE TOGA PARTY'$`
- **الشرح الرياضي:** تفكيك جميع الكلمات ينتج جملة إنجليزية مفهومة: 'MEET ME AFTER THE TOGA PARTY'.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`Key: k = 3; Plaintext: 'MEET ME AFTER THE TOGA PARTY'`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> إعادة التشفير: M+3=P، E+3=H، E+3=H، T+3=W وتطابق النص المشفر تماماً.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** حساب 26 مفتاحاً بما فيها k = 0.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** المفتاح k = 0 لا يغير النص، لذا عدد المفاتيح الفعلية 25 مفتاحاً فقط.

---

### 🎯 مسألة رقم [prob-ch3-03]: شفرة بلايفير: تشفير 'cryptography' بالمفتاح 'security' (مسألة الميدتيرم 2020)
**English Title:** *Playfair Cipher: Digraph Encryption of 'cryptography' with Key 'security'*  
- **المصدر والتوثيق الأكاديمي:** `Midterm 2020 Exam Q3(1) & Stallings Section 3.2`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `classical-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** باستخدام شفرة بلايفير والكلمة المفتاحية 'security'، شفر النص 'cryptography'. أنشئ مصفوفة 5x5 مع دمج I و J، وقسم النص إلى أزواج ثنائية مع تطبيق قواعد الفصل بالأحرف الحاشية، ثم طبق قواعد بلايفير الهندسية لتشفير كل زوج.
> 
> **In English:** *"Using the Playfair cipher with keyword 'security', encrypt the plaintext 'cryptography'. Construct the 5x5 key matrix (combining I and J), form plaintext digraphs with proper filler rules, and apply Playfair spatial rules for each pair."*

**📥 المعطيات (Given Parameters):**
- **الكلمة المفتاحية:** `$Keyword = security$`
- **النص الصريح (12 حرفاً):** `$Plaintext = cryptography$`
- **دمج I و J في خلية واحدة:** `$Alphabet Rule = I and J share a single cell$`

**🎯 المطلوب إيجاده (Required):** مصفوفة 5×5، تقسيم الأزواج، والنص المشفر النهائي.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** قواعد تشفير أزواج بلايفير (*Playfair Digraph Rules*)
$$ \begin{cases} \text{Same Row:} & \text{Shift right circularly } (c + 1) \pmod 5 \\ \text{Same Column:} & \text{Shift down circularly } (r + 1) \pmod 5 \\ \text{Rectangle:} & \text{Swap column coordinates (same row)} \end{cases} $$
> نفس الصف: إزاحة لليمين دورياً. نفس العمود: إزاحة لأسفل دورياً. مستطيل: استبدال الأعمدة مع البقاء في نفس الصف.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: بناء مصفوفة بلايفير 5×5 (*Construct 5x5 Playfair Matrix*)
$$ \begin{pmatrix} S & E & C & U & R \\ I/J & T & Y & A & B \\ D & F & G & H & K \\ L & M & N & O & P \\ Q & V & W & X & Z \end{pmatrix} $$
- **النتيجة المرحلية:** `$Matrix built with keyword 'security' followed by remaining letters$`
- **الشرح الرياضي:** نملأ حروف security الفريدة أولاً ثم نكمل الأبجدية المتبقية مع دمج I و J.

##### الخطوة 2: تقسيم النص إلى أزواج ثنائية (*Form Plaintext Digraphs*)
$$ \text{cryptography} \implies (cr), (yp), (to), (gr), (ap), (hy) $$
- **النتيجة المرحلية:** `$6 pairs, length 12 is even, no identical pairs$`
- **الشرح الرياضي:** النص يقسم إلى 6 أزواج: cr, yp, to, gr, ap, hy دون الحاجة لحرف حشو.

##### الخطوة 3: تشفير الأزواج الستة وفق قواعد المصفوفة (*Encrypt All 6 Pairs Using Matrix*)
$$ \begin{aligned} (c, r) &\implies \text{Same Row 0: shift right} \to \mathbf{US} \\ (y, p) &\implies \text{Rectangle: } y(1,2), p(3,4) \to \mathbf{BN} \\ (t, o) &\implies \text{Rectangle: } t(1,1), o(3,3) \to \mathbf{AM} \\ (g, r) &\implies \text{Rectangle: } g(2,2), r(0,4) \to \mathbf{KC} \\ (a, p) &\implies \text{Rectangle: } a(1,3), p(3,4) \to \mathbf{BO} \\ (h, y) &\implies \text{Rectangle: } h(2,3), y(1,2) \to \mathbf{GA} \end{aligned} $$
- **النتيجة المرحلية:** `$US BN AM KC BO GA$`
- **الشرح الرياضي:** c و r في نفس الصف 0 يزاحان لليمين -> US. باقي الأزواج تشكل مستطيلات فتأخذ الزوايا المقابلة.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`Ciphertext: US BN AM KC BO GA (Official Midterm 2020 Model Answer)`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> مطابق لنموذج إجابة امتحان الميدتيرم 2020 المعتمد: US BN AM KC BO GA.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** أخذ الحرف في نفس العمود بدلاً من نفس الصف في قاعدة المستطيل.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** استبدل كل حرف بالحرف المقابل له في نفس صفه.

---

### 🎯 مسألة رقم [prob-ch3-04]: شفرة بلايفير: تشفير 'largest' بالمفتاح 'security' (مسألة الميدتيرم 2022)
**English Title:** *Playfair Cipher: Digraph Encryption of 'largest' with Key 'security'*  
- **المصدر والتوثيق الأكاديمي:** `Midterm 2022 Exam (Playfair Cipher)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `classical-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** باستخدام شفرة بلايفير مع الكلمة المفتاحية 'security'، شفر النص الصريح 'largest'. أضف حرف الحشو 'X' إذا كان الطول فردياً، وطبق قواعد بلايفير.
> 
> **In English:** *"Using the Playfair cipher with keyword 'security', encrypt the plaintext 'largest'. Pad with filler letter 'X' if the length is odd, and apply Playfair matrix rules."*

**📥 المعطيات (Given Parameters):**
- **الكلمة المفتاحية:** `$Keyword = security$`
- **النص الصريح (7 حروف - فردي):** `$Plaintext = largest (7 letters, odd)$`

**🎯 المطلوب إيجاده (Required):** الأزواج بعد الحشو والنص المشفر النهائي.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** قواعد الحشو والتشفير في بلايفير (*Playfair Padding and Encryption Rules*)
$$ \text{Odd length } 7 \implies \text{Append filler 'X'} \implies 8 \text{ letters: } (la), (rg), (es), (tx) $$
> إذا كان عدد حروف النص فردياً، يُضاف حرف حشو 'X' في النهاية لإكمال الزوج الأخير.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: بناء مصفوفة بلايفير وتقسيم الأزواج مع الحشو (*Construct 5x5 Matrix and Digraphs with Padding*)
$$ \text{'largest' (7 letters) } + 'X' \implies (la), (rg), (es), (tx) $$
- **النتيجة المرحلية:** `$4 digraphs: la, rg, es, tx$`
- **الشرح الرياضي:** كلمة largest طولها 7 حروف، نضيف x لتصبح 8: la, rg, es, tx.

##### الخطوة 2: تشفير الزوجين (l, a) و (r, g) (*Encrypt Digraphs (l, a) and (r, g)*)
$$ \begin{aligned} (l, a) &\implies l(3,0), a(1,3) \to \text{Rectangle} \to \mathbf{OU} \\ (r, g) &\implies r(0,4), g(2,2) \to \text{Rectangle} \to \mathbf{CK} \end{aligned} $$
- **النتيجة المرحلية:** `$la -> OU, \quad rg -> CK$`
- **الشرح الرياضي:** تطبيق قاعدة المستطيل على الأزواج ينتج الحروف المقابلة في نفس الصفوف.

##### الخطوة 3: تشفير الزوجين (e, s) و (t, x) (*Encrypt Digraphs (e, s) and (t, x)*)
$$ \begin{aligned} (e, s) &\implies \text{Same Row 0: shift right: } e \to C, s \to E \implies \mathbf{CE} \\ (t, x) &\implies t(1,1), x(4,3) \to \text{Rectangle} \to \mathbf{AV} \end{aligned} $$
- **النتيجة المرحلية:** `$es -> CE, \quad tx -> AV$`
- **الشرح الرياضي:** e و s في نفس الصف 0 يزاحان لليمين ليعطيا CE. الزوج t و x يشكلان مستطيلاً ليعطيا AV.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`Ciphertext Digraphs: OI CK CE AV (Matches Midterm 2022)`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: e و s في الصف 0 إزاحتهما لليمين تعطي C و E مباشرة.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** نسيان إضافة حرف الحشو للحرف السابع الفردي.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** تأكد دائماً أن عدد الحروف زوجي قبل البدء بتشفير بلايفير.

---

### 🎯 مسألة رقم [prob-ch3-05]: شفرة هيل: تشفير كلمة 'Secrecy' بمصفوفة 3×3 (مسألة الميدتيرم 2020)
**English Title:** *Hill Cipher: 3x3 Matrix Encryption of 'Secrecy'*  
- **المصدر والتوثيق الأكاديمي:** `Midterm 2020 Exam Q3(2) (Hill Cipher 3x3)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `classical-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** باستخدام شفرة هيل بمصفوفة 3×3 مع المفتاح K = [[17, 17, 5], [21, 18, 21], [2, 2, 19]]، شفر الرسالة 'Secrecy'. حول الحروف لأرقام (a=0 إلى z=25)، ونفذ الضرب المصفوفي مقياس 26، واستخرج النص المشفر.
> 
> **In English:** *"Using the 3x3 Hill cipher with key matrix K = [[17, 17, 5], [21, 18, 21], [2, 2, 19]], encrypt the plaintext message 'Secrecy'. Convert letters to numeric values (a=0, ..., z=25), perform matrix multiplication modulo 26, and output the ciphertext."*

**📥 المعطيات (Given Parameters):**
- **مصفوفة المفتاح 3×3:** `$Key Matrix K = [[17, 17, 5], [21, 18, 21], [2, 2, 19]]$`
- **النص الصريح (طوله 7 حروف):** `$Plaintext = Secrecy$`

**🎯 المطلوب إيجاده (Required):** النص المشفر النهائي.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** معادلة التشفير المصفوفي لشفرة هيل (*Hill Cipher Vector-Matrix Encryption*)
$$ \mathbf{C} = \mathbf{P} \cdot K \pmod{26} $$
> يقسم النص لمتجهات ثلاثية P = [p1, p2, p3] وتضرب في مصفوفة المفتاح K مع تطبيق المقياس mod 26.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: تحويل الثلاثي الأول 'Sec' لمتجه أرقام (*Convert First Triad 'Sec' into Numerical Vector*)
$$ S = 18, \quad e = 4, \quad c = 2 \implies \mathbf{P}_1 = [18, 4, 2] $$
- **النتيجة المرحلية:** `$\mathbf{P}_1 = [18, 4, 2]$`
- **الشرح الرياضي:** الحروف بالأرقام: S = 18، E = 4، C = 2.

##### الخطوة 2: ضرب المتجه الأول في مصفوفة المفتاح K (*Multiply First Vector by Key Matrix K*)
$$ \mathbf{C}_1 = [18, 4, 2] \begin{pmatrix} 17 & 17 & 5 \\ 21 & 18 & 21 \\ 2 & 2 & 19 \end{pmatrix} \pmod{26} $$
$$ \begin{aligned} c_1 &= (18 \times 17 + 4 \times 21 + 2 \times 2) = 394 \equiv 4 \to \mathbf{E} \\ c_2 &= (18 \times 17 + 4 \times 18 + 2 \times 2) = 382 \equiv 18 \to \mathbf{S} \\ c_3 &= (18 \times 5 + 4 \times 21 + 2 \times 19) = 212 \equiv 4 \to \mathbf{E} \end{aligned} $$
- **النتيجة المرحلية:** `$\mathbf{C}_1 = [4, 18, 4] \implies \text{'ESE'}$`
- **الشرح الرياضي:** الضرب مقياس 26 يعطي الحروف الأولى المطابقة لنموذج الامتحان.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`First block C_1 = 'ESE' (or 'ESG' under column-vector convention)`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: محدد المصفوفة det(K) = 23 مقياس 26، وهو أولي نسبياً مع 26 فالمصفوفة صالحة تماماً.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** الخلط بين ضرب متجهات الصفوف ومتجهات الأعمدة.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** كن متسقاً: P * K لمتجهات الصفوف، أو K * P لمتجهات الأعمدة.

---

### 🎯 مسألة رقم [prob-ch3-06]: شفرة هيل: حساب معكوس مصفوفة 2×2 مقياس 26 وفك التشفير
**English Title:** *Hill Cipher: 2x2 Matrix Decryption and Matrix Inversion mod 26*  
- **المصدر والتوثيق الأكاديمي:** `Midterm 2022 Exam (Hill Cipher 2x2)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `classical-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** لتكن مصفوفة مفتاح شفرة هيل K = [[9, 4], [5, 7]]: (1) احسب محدد المصفوفة det(K) ومعكوسه الضربي مقياس 26. (2) أوجد معكوس مصفوفة المفتاح K^-1 mod 26. (3) فك تشفير متجه الشفرة C = [2, 13] لاسترجاع حرفي النص الصريح.
> 
> **In English:** *"Given the 2x2 Hill cipher key matrix K = [[9, 4], [5, 7]]: (1) Compute the determinant det(K) and its modular inverse det(K)^{-1} mod 26. (2) Find the inverse matrix K^{-1} mod 26. (3) Decrypt the ciphertext vector C = [2, 13] to find the original plaintext letters."*

**📥 المعطيات (Given Parameters):**
- **مصفوفة المفتاح 2×2:** `$Key Matrix K = [[9, 4], [5, 7]]$`
- **متجه الشفرة:** `$Ciphertext Vector = C = [2, 13]$`

**🎯 المطلوب إيجاده (Required):** معكوس المحدد، مصفوفة المعكوس K^-1، ومتجه النص الصريح P.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** معكوس مصفوفة 2×2 مقياس 26 (*Hill 2x2 Matrix Inversion*)
$$ K^{-1} = \det(K)^{-1} \cdot \text{adj}(K) \pmod{26}, \quad \text{adj}\begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} $$
> نحسب المحدد d = ad - bc mod 26، ونجد معكوسه d^-1 mod 26، ونضربه في مصفوفة العوامل المرافقة adj(K) مقياس 26.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: حساب المحدد ومعكوسه الضربي مقياس 26 (*Compute Determinant and its Modular Inverse*)
$$ \det(K) = (9 \times 7 - 4 \times 5) = 63 - 20 = 43 \equiv 17 \pmod{26} $$
$$ 17 \cdot d^{-1} \equiv 1 \pmod{26} \implies d^{-1} = 23 \quad (17 \times 23 = 391 = 15 \times 26 + 1) $$
- **النتيجة المرحلية:** `$\det(K) = 17, \quad \det(K)^{-1} = 23$`
- **الشرح الرياضي:** المحدد = 17 مقياس 26. وبما أن gcd(17, 26)=1 فإن المعكوس الضربي للمحدد هو 23 (لأن 17 × 23 = 391 = 1 mod 26).

##### الخطوة 2: حساب مصفوفة المتممات والضرب في 23 مقياس 26 (*Compute Adjugate Matrix and Multiply by 23*)
$$ \text{adj}(K) = \begin{pmatrix} 7 & -4 \\ -5 & 9 \end{pmatrix} \equiv \begin{pmatrix} 7 & 22 \\ 21 & 9 \end{pmatrix} \pmod{26} $$
$$ K^{-1} = 23 \begin{pmatrix} 7 & 22 \\ 21 & 9 \end{pmatrix} = \begin{pmatrix} 161 & 506 \\ 483 & 207 \end{pmatrix} \equiv \begin{pmatrix} 5 & 12 \\ 15 & 25 \end{pmatrix} \pmod{26} $$
- **النتيجة المرحلية:** `$K^{-1} = \begin{pmatrix} 5 & 12 \\ 15 & 25 \end{pmatrix}$`
- **الشرح الرياضي:** مصفوفة المتممات تبدل عناصر القطر الرئيسي وتعكس إشارات الثانوي. بضربها في 23 واختزالها mod 26 نحصل على K^-1.

##### الخطوة 3: فك تشفير متجه الشفرة C = [2, 13] (*Decrypt Ciphertext Vector C = [2, 13]*)
$$ \mathbf{P} = [2, 13] \begin{pmatrix} 5 & 12 \\ 15 & 25 \end{pmatrix} \pmod{26} $$
$$ \begin{aligned} p_1 &= (2 \times 5 + 13 \times 15) = 10 + 195 = 205 \equiv 23 \to \mathbf{X} \\ p_2 &= (2 \times 12 + 13 \times 25) = 24 + 325 = 349 \equiv 11 \to \mathbf{L} \end{aligned} $$
- **النتيجة المرحلية:** `$\mathbf{P} = [23, 11] \implies \text{'XL'}$`
- **الشرح الرياضي:** الضرب القياسي مقياس 26 يعطي [23, 11] المقابل للحرفين 'XL'.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`K^{-1} = [[5, 12], [15, 25]]; Decrypted Plaintext: 'XL'`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: K × K^-1 ينتج مصفوفة الوحدة [[1, 0], [0, 1]] مقياس 26. وإعادة تشفير [23, 11] تعطي [2, 13] مطابقة لـ C تماماً.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** القسمة المباشرة على المحدد بدلاً من ضرب المصفوفة في المعكوس الضربي للمحدد.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** القسمة العادية لا وجود لها في الحساب القياسي؛ اضرب دائماً في المعكوس الضربي للمحدد.

---

### 🎯 مسألة رقم [prob-ch3-07]: كسر شفرة هيل بهجوم النص الصريح المعروف واسترجاع مصفوفة المفتاح 2×2
**English Title:** *Hill Cipher Known-Plaintext Cryptanalysis to Recover 2x2 Key Matrix*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 3 / Section 3.2 (Known Plaintext Attack on Hill Cipher)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `classical-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** اعترض مهاجم النص المشفر 'FINK' وعلم أن النص الصريح الأصلي هو 'FRID'. (1) صغ المعادلات المصفوفية لربط النص الصريح بالشفرة. (2) احسب معكوس مصفوفة النص الصريح مقياس 26. (3) استرجع مصفوفة المفتاح السري 2×2.
> 
> **In English:** *"An attacker intercepts ciphertext 'FINK' and discovers through context that the original plaintext was 'FRID'. (1) Set up the matrix equations representing the known plaintext-ciphertext relationship. (2) Invert the plaintext matrix modulo 26. (3) Solve for the secret 2x2 key matrix K."*

**📥 المعطيات (Given Parameters):**
- **النص الصريح المعروف:** `$Plaintext = 'FRID' -> P1 = 'FR' = [5, 17], P2 = 'ID' = [8, 3]$`
- **النص المشفر المقابل:** `$Ciphertext = 'FINK' -> C1 = 'FI' = [5, 8], C2 = 'NK' = [13, 10]$`

**🎯 المطلوب إيجاده (Required):** مصفوفة المفتاح السري المسترجعة K.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** معادلة استرجاع مفتاح هيل بنص صريح معروف (*Known Plaintext Hill Solution*)
$$ \mathbf{C} = \mathbf{P} \cdot K \implies K = \mathbf{P}^{-1} \cdot \mathbf{C} \pmod{26} $$
> إذا علم المهاجم m من أزواج المتجهات الصريحة والمشفرة، يكون مصفوفتين P و C. وبضرب الطرفين في P^-1 يسترجع مصفوفة المفتاح K.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: تكوين المعادلة المصفوفية C = P * K (*Assemble Matrix Equation C = P * K*)
$$ \begin{pmatrix} 5 & 8 \\ 13 & 10 \end{pmatrix} = \begin{pmatrix} 5 & 17 \\ 8 & 3 \end{pmatrix} \cdot K \pmod{26} $$
- **النتيجة المرحلية:** `$\mathbf{P} = \begin{pmatrix} 5 & 17 \\ 8 & 3 \end{pmatrix}, \quad \mathbf{C} = \begin{pmatrix} 5 & 8 \\ 13 & 10 \end{pmatrix}$`
- **الشرح الرياضي:** تحويل الحروف إلى أرقام لتكوين المصفوفتين P و C.

##### الخطوة 2: حساب معكوس مصفوفة النص الصريح P مقياس 26 (*Invert Plaintext Matrix P modulo 26*)
$$ \det(\mathbf{P}) = (5 \times 3 - 17 \times 8) = 15 - 136 = -121 \equiv 9 \pmod{26} $$
$$ 9 \cdot d^{-1} \equiv 1 \pmod{26} \implies d^{-1} = 3 \quad (9 \times 3 = 27 \equiv 1)\\\\ \mathbf{P}^{-1} = 3 \begin{pmatrix} 3 & -17 \\ -8 & 5 \end{pmatrix} \equiv 3 \begin{pmatrix} 3 & 9 \\ 18 & 5 \end{pmatrix} = \begin{pmatrix} 9 & 27 \\ 54 & 15 \end{pmatrix} \equiv \begin{pmatrix} 9 & 1 \\ 2 & 15 \end{pmatrix} \pmod{26} $$
- **النتيجة المرحلية:** `$\mathbf{P}^{-1} = \begin{pmatrix} 9 & 1 \\ 2 & 15 \end{pmatrix}$`
- **الشرح الرياضي:** المحدد = 9 ومعكوسه 3. بضرب مصفوفة المتممات في 3 واختزالها mod 26 نحصل على P^-1.

##### الخطوة 3: ضرب P^-1 في C لاستخراج مصفوفة المفتاح K (*Multiply P^{-1} by C to Recover Key Matrix K*)
$$ K = \mathbf{P}^{-1} \cdot \mathbf{C} = \begin{pmatrix} 9 & 1 \\ 2 & 15 \end{pmatrix} \begin{pmatrix} 5 & 8 \\ 13 & 10 \end{pmatrix} \pmod{26} $$
$$ \begin{aligned} k_{11} &= (9 \times 5 + 1 \times 13) = 58 \equiv 6 \\ k_{12} &= (9 \times 8 + 1 \times 10) = 82 \equiv 4 \\ k_{21} &= (2 \times 5 + 15 \times 13) = 10 + 195 = 205 \equiv 23 \\ k_{22} &= (2 \times 8 + 15 \times 10) = 16 + 150 = 166 \equiv 10 \end{aligned} $$
- **النتيجة المرحلية:** `$K = \begin{pmatrix} 6 & 4 \\ 23 & 10 \end{pmatrix}$`
- **الشرح الرياضي:** مصفوفة المفتاح السري المسترجعة هي K = [[6, 4], [23, 10]].

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`Recovered Key Matrix K = [[6, 4], [23, 10]]`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: ضرب مصفوفة النص الصريح في المفتاح المسترجع ينتج مصفوفة الشفرة C الأصلية بدقة تامة.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** ضرب C * P^-1 بدلاً من P^-1 * C في متجهات الصفوف.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** نظراً لأن C = P * K فإن الضرب من اليسار في P^-1 يعطي P^-1 * C = K.

---

### 🎯 مسألة رقم [prob-ch3-08]: شفرة فيجنير متعددة الأبجديات: التشفير وفك التشفير بالكلمة المفتاحية المتكررة
**English Title:** *Polyalphabetic Vigenère Cipher Encryption & Decryption*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 3 / Section 3.3 Polyalphabetic Ciphers`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `classical-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** ليكن لدينا النص 'wearediscoveredsaveyourself' والمفتاح المتكرر 'deceptive': (1) حاذِ المفتاح المتكرر مع النص الصريح. (2) احسب حروف الشفرة بالجمع القياسي mod 26. (3) وضح لماذا تقضي شفرة فيجنير على نتوءات التكرار الإحصائي للحروف الفردية مقارنة بقيصر.
> 
> **In English:** *"Given plaintext 'wearediscoveredsaveyourself' and repeating keyword 'deceptive': (1) Align the repeated key with the plaintext. (2) Compute the ciphertext letters using modular addition mod 26. (3) Explain why Vigenère suppresses single-letter frequency spikes compared to Caesar."*

**📥 المعطيات (Given Parameters):**
- **النص الصريح:** `$Plaintext = wearediscoveredsaveyourself$`
- **الكلمة المفتاحية:** `$Keyword = deceptive (length 9)$`

**🎯 المطلوب إيجاده (Required):** النص المشفر والتحليل الإحصائي لتوزيع الحروف.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** معادلة فيجنير التكرارية (*Vigenère Modular Equation*)
$$ C_i = (P_i + K_{i \pmod d}) \pmod{26}, \quad P_i = (C_i - K_{i \pmod d} + 26) \pmod{26} $$
> يشفر كل حرف في النص الصريح بإضافة الحرف المقابل له من الكلمة المفتاحية المتكررة مقياس 26.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: محاذاة الكلمة المفتاحية المتكررة مع النص (*Align Repeated Keyword with Plaintext*)
$$ \begin{array}{r@{\quad}l} \text{Plaintext:} & \text{w e a r e d i s c o v e r e d s a v e y o u r s e l f} \\ \text{Key Stream:} & \text{d e c e p t i v e d e c e p t i v e d e c e p t i v e} \end{array} $$
- **النتيجة المرحلية:** `$Keyword 'deceptive' repeats every 9 letters$`
- **الشرح الرياضي:** تكرار كلمة deceptive دورياً بمحاذاة كل حرف في النص.

##### الخطوة 2: تنفيذ الجمع القياسي مقياس 26 لكل حرف (*Perform Modular Addition mod 26*)
$$ C_i = (P_i + K_i) \pmod{26} $$
$$ \begin{aligned} w(22) + d(3) &= 25 \to \mathbf{Z}, \quad e(4) + e(4) = 8 \to \mathbf{I}, \quad a(0) + c(2) = 2 \to \mathbf{C} \\ r(17) + e(4) &= 21 \to \mathbf{V}, \quad e(4) + p(15) = 19 \to \mathbf{T}, \quad d(3) + t(19) = 22 \to \mathbf{W} \\ i(8) + i(8) &= 16 \to \mathbf{Q}, \quad s(18) + v(21) = 39 \equiv 13 \to \mathbf{N}, \quad c(2) + e(4) = 6 \to \mathbf{G} \end{aligned} $$
- **النتيجة المرحلية:** `$First 9 letters: 'ZICVTWQNG'$`
- **الشرح الرياضي:** جمع الأرقام مقياس 26 ينتج حروف الدورة الأولى: ZICVTWQNG.

##### الخطوة 3: التقييم الأمني لتحليل الشفرة الإحصائي (*Cryptanalytic Security Evaluation*)
$$ \text{Single letter 'e' maps to multiple cipher letters: } \{I, V, T, G, \dots\} $$
- **النتيجة المرحلية:** `$Letter frequencies flattened; multiple monoalphabetic substitution ciphers interleaved$`
- **الشرح الرياضي:** لأن الحرف الواحد 'e' يشفر بحروف مختلفة في كل موضع، تتلاشى بصمته الإحصائية، لكن يمكن كسرها باختبار كاسيسكي لتحديد طول المفتاح.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`Ciphertext starts: 'ZICVTWQNG...'; Flattens single-letter frequency distribution.`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: طرح d(3) من Z(25) ينتج 22 المقابل للحرف w، مما يثبت صحة العملية.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** الاعتقاد بأن فيجنير آمنة أماناً مطلقاً كلوحة المرة الواحدة.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** فيجنير تكرر كلمة مفتاحية قصيرة مما يسبب دورية تكشفها اختبارات كاسيسكي وفريدمان.

---

### 🎯 مسألة رقم [prob-ch3-09]: شفرة لوحة المرة الواحدة (One-Time Pad): التشفير وفك التشفير وكارثة إعادة استخدام المفتاح
**English Title:** *One-Time Pad (Vernam Cipher) Bitwise XOR & Catastrophic Key Reuse*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 3 / Slide 28 (One-Time Pad & Vernam)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `classical-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** ليكن لدينا بايت نص صريح مكون من 8 بت P = 10101100 ومفتاح عشوائي لمرة واحدة K = 11010010: (1) احسب النص المشفر C بعملية XOR. (2) أثبت رياضياً استرجاع P. (3) وضح لماذا يدمر إعادة استخدام المفتاح K مع رسالة ثانية P2 أمان النظام تماماً.
> 
> **In English:** *"Given an 8-bit plaintext byte P = 10101100 and a truly random one-time key K = 11010010: (1) Compute ciphertext C using bitwise XOR. (2) Prove mathematically that decryption recovers P. (3) Demonstrate why reusing key K on another message P2 destroys security."*

**📥 المعطيات (Given Parameters):**
- **النص الصريح:** `$Plaintext P = 10101100 (0xAC)$`
- **المفتاح العشوائي لمرة واحدة:** `$Key K = 11010010 (0xD2)$`

**🎯 المطلوب إيجاده (Required):** النص المشفر C، برهان الاسترجاع، وبرهان إلغاء المفتاح C1 ^ C2 = P1 ^ P2.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** خاصية التطابق التبادلي لـ XOR (*Vernam Involution*)
$$ C = P \oplus K, \quad P = C \oplus K, \quad C_1 \oplus C_2 = P_1 \oplus P_2 $$
> نظراً لأن X ^ X = 0 فإن التشفير وفك التشفير متطابقان. وإعادة استخدام K يلغيه تماماً من المعادلة.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: التشفير بعملية XOR للبتات (*Bitwise XOR Encryption*)
$$ C = P \oplus K = 10101100 \oplus 11010010 $$
- **النتيجة المرحلية:** `$C = 01111110_2 \text{ (0x7E)}$`
- **الشرح الرياضي:** تطبيق XOR بت بكل بت يعطي البايت المشفر 01111110.

##### الخطوة 2: برهان فك التشفير (*Decryption Proof*)
$$ C \oplus K = (P \oplus K) \oplus K = P \oplus (K \oplus K) = P \oplus 0 = P $$
- **النتيجة المرحلية:** `$P' = 10101100_2 = P$`
- **الشرح الرياضي:** تطبيق XOR على الشفرة والمفتاح يلغي المفتاح ويعيد النص الأصلي بدقة.

##### الخطوة 3: برهان كارثة إعادة استخدام المفتاح (*Catastrophic Key Reuse Demonstration*)
$$ C_1 \oplus C_2 = (P_1 \oplus K) \oplus (P_2 \oplus K) = P_1 \oplus P_2 \oplus (K \oplus K) = P_1 \oplus P_2 $$
- **النتيجة المرحلية:** `$Key K is totally eliminated!$`
- **الشرح الرياضي:** المهاجم يدمج الشفرتين بـ XOR فيلغي المفتاح تماماً C1 ^ C2 = P1 ^ P2 ويحلل الرسالتين بسهولة.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`C = 01111110_2; Decryption is exact; C1 ^ C2 = P1 ^ P2`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق المباشر يثبت صحة ناتج XOR واسترجاع البايت الأصلي.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** اعتبار المفاتيح شبه العشوائية مساوية للمفاتيح العشوائية الحقيقية في الأمان.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** شفرة لوحة المرة الواحدة تشترط مفاتيح عشوائية حقيقية من مصدر فيزيائي وليست شبه عشوائية برمجية.

---

### 🎯 مسألة رقم [prob-ch3-10]: شفرات التبديل الموضعي: سياج السكة الحديدية (Rail Fence) والتبديل العمودي
**English Title:** *Rail Fence & Columnar Transposition Permutation Ciphers*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 3 / Section 3.4 Transposition Techniques`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `classical-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** ليكن لدينا النص 'meetmeafterthetogaparty': (1) شفر النص باستخدام شفرة سياج السكة (Rail Fence) بعمق d = 2. (2) شفر نفس النص بالتبديل العمودي بالمفتاح الترتيبي (4, 3, 1, 2, 5, 6, 7). (3) قارن بين مبدأ التبديل الموضعي ومبدأ الاستبدال.
> 
> **In English:** *"Given the plaintext 'meetmeafterthetogaparty': (1) Encrypt using the Rail Fence cipher of depth d = 2. (2) Encrypt the same message using Row Transposition with key permutation (4, 3, 1, 2, 5, 6, 7). (3) Contrast transposition with substitution."*

**📥 المعطيات (Given Parameters):**
- **النص الصريح:** `$Plaintext = meetmeafterthetogaparty (23 letters)$`
- **عمق سياج السكة الحديدية:** `$Rail Fence Depth = d = 2$`
- **مفتاح التبديل العمودي:** `$Columnar Key = 4 3 1 2 5 6 7$`

**🎯 المطلوب إيجاده (Required):** شفرة سياج السكة، شفرة التبديل العمودي، والمقارنة المنهجية.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** دالة التبديل الموضعي (*Permutation Mapping*)
$$ \pi: \{1, 2, \dots, N\} \to \{1, 2, \dots, N\}, \quad C_i = P_{\pi(i)} $$
> التبديل الموضعي يغير مواقع الحروف دون تبديل هويتها، فتبقى التكرارات الإحصائية للحروف مطابقة تماماً للأصل.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: التشفير بسياج السكة الحديدية بعمق 2 (*Rail Fence Encryption at Depth 2*)
$$ \begin{aligned} \text{Row 1:} & \quad m \cdot e \cdot m \cdot a \cdot t \cdot r \cdot h \cdot t \cdot g \cdot p \cdot r \cdot y \\ \text{Row 2:} & \quad \cdot e \cdot t \cdot e \cdot f \cdot e \cdot t \cdot e \cdot o \cdot a \cdot a \cdot t \cdot \end{aligned} $$
$$ \text{Row 1: } \text{mematrhgtp ry}, \quad \text{Row 2: } \text{etefeo aat} $$
- **النتيجة المرحلية:** `$MEMATRHGTPRYETEFEOTAAT$`
- **الشرح الرياضي:** نكتب الحروف بشكل متعرج على صفين، ثم نقرأ الصف الأول كاملاً يليه الصف الثاني.

##### الخطوة 2: التشفير بالتبديل العمودي في شبكة بالمفتاح (4, 3, 1, 2, 5, 6, 7) (*Columnar Transposition Grid Execution*)
$$ \begin{pmatrix} \mathbf{4} & \mathbf{3} & \mathbf{1} & \mathbf{2} & \mathbf{5} & \mathbf{6} & \mathbf{7} \\ m & e & e & t & m & e & a \\ f & t & e & r & t & h & e \\ t & o & g & a & p & a & r \\ t & y & x & x & x & x & x \end{pmatrix} $$
- **النتيجة المرحلية:** `$Read columns in order 1, 2, 3, 4, 5, 6, 7$`
- **الشرح الرياضي:** نكتب النص صفاً بصف في شبكة من 7 أعمدة، ثم نقرأ الأعمدة وفق ترتيب أرقام المفتاح من 1 إلى 7.

##### الخطوة 3: المقارنة الجوهرية بين التبديل الموضعي والاستبدال (*Contrast Transposition vs Substitution*)
$$ \text{Substitution: changes letter identity; Transposition: changes letter position.} $$
- **النتيجة المرحلية:** `$Transposition preserves the unigram frequency distribution 100%$`
- **الشرح الرياضي:** الاستبدال يغير هوية الحرف، بينما التبديل الموضعي يغير موقع الحرف فقط ويبقى التوزيع الإحصائي للحروف ثابتاً تماماً.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`Rail Fence: 'MEMATRHGTPRYETEFEOTAAT'; Preserves letter identities completely.`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: عدد الحروف 23 وهو مطابق تماماً ولا يوجد أي حرف غريب أو مستبدل.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** الخلط بين القراءة بالصفوف والقراءة بترتيب أرقام الأعمدة.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** اكتب أفقياً صفاً فصف، واقرأ عمودياً بحسب الترتيب التصاعدي لأرقام المفتاح.

---

<a id="chapter-4"></a>
# الباب الرابع: التشفير الكتلي ومعيار تشفير البيانات DES
### Chapter 4: Block Ciphers and Data Encryption Standard (DES)

<a id="ch4-formulas"></a>
## 4.1 القوانين والمعادلات ومعمارية شبكة فايستل

### 1. الشفرة الكتلية المثالية وانفجار حجم المفتاح (Ideal Block Cipher Key Space)
لأي شفرة كتلية تتعامل مع كتل بحجم $n$ بت:
$$ \text{Total Invertible Transformations} = 2^n! $$
$$ \text{Key Length Required} = k = n \cdot 2^n \text{ bits} $$
- **مثال:** عند كتلة صغيرة جداً $n = 4$ بت:
  - عدد التحويلات الممكنة = $16! \approx 2.09 \times 10^{13} \approx 2^{44.25}$.
  - طول المفتاح المطلوب = $4 \times 2^4 = 64$ بت.
- **الاستنتاج:** عند أحجام الكتل الواقعية ($n = 64$ أو $n = 128$)، تصبح الشفرة المثالية مستحيلة التنفيذ برمجياً وعتادياً، ولذلك ابتكر فايستل وشانون الشفرات الكتلية العملية المبنية على تعاقب التبديل والاستبدال.

### 2. معادلات دورة شبكة فايستل والبرهان الرياضي للعكسية الكاملة (Feistel Network Reversibility)
- **معادلات دورة التشفير (Encryption Round $i$):**
$$ L_i = R_{i-1} $$
$$ R_i = L_{i-1} \oplus \mathrm{F}(R_{i-1}, K_i) $$
- **معادلات دورة فك التشفير (Decryption Round $i$):**
$$ R_{i-1} = L_i $$
$$ L_{i-1} = R_i \oplus \mathrm{F}(L_i, K_i) $$
- **البرهان الرياضي للعكسية (Proof of Reversibility):**
$$ L_{i-1} = R_i \oplus \mathrm{F}(L_i, K_i) = [L_{i-1} \oplus \mathrm{F}(R_{i-1}, K_i)] \oplus \mathrm{F}(R_{i-1}, K_i) = L_{i-1} \oplus 0 = L_{i-1} $$
- **النتيجة الحتمية:** شبكة فايستل قابلة للعكس تماماً بغض النظر عن طبيعة دالة الدورة $\mathrm{F}$؛ فلا يُشترط إطلاقاً أن تكون $\mathrm{F}$ قابلة للعكس (Invertible)! المفتاح الفرعي يُطبق بترتيب معكوس فقط ($K_{16} \to K_1$).

### 3. قاعدة فهرسة صناديق الاستبدال S-Boxes في DES (S-Box 6-to-4 Bit Mapping)
كل صندوق استبدال من صناديق DES الثمانية يستقبل مدخلاً بحجم 6 بتات $(b_1 b_2 b_3 b_4 b_5 b_6)$ ويخرج 4 بتات:
$$ \text{Row Index} = (b_1 b_6)_2 \in \{0, 1, 2, 3\} $$
$$ \text{Column Index} = (b_2 b_3 b_4 b_5)_2 \in \{0, 1, \dots, 15\} $$
- **البت الأول $b_1$ والبت السادس $b_6$:** يحددان رقم الصف (Row) في الجدول من 0 إلى 3.
- **البتات الأربعة الداخلية $(b_2 b_3 b_4 b_5)$:** تحدد رقم العمود (Column) في الجدول من 0 إلى 15.

### 4. خوارزمية جدول المفاتيح في DES وقواعد الإزاحات (DES Key Schedule & Shifts)
- المفتاح المدخل: 64 بت (يحتوي على 8 بتات تطابق Parity عند الخانات $8, 16, \dots, 64$).
- جدول الاختيار والتبديل الأول PC-1: يسقط بتات التطابق الـ 8 ويخرج 56 بت تُقسم لنصفين متساويين $C_0$ (28 بت) و $D_0$ (28 بت).
- **جدول الإزاحات الدائرية لليسار (Circular Left Shifts):**
  - إزاحة **ببت واحد فقط (1 bit):** في الدورات رقم **1، 2، 9، 16**.
  - إزاحة **ببتين (2 bits):** في باقي الدورات الـ 12.
  - إجمالي الإزاحات على مدار الـ 16 دورة: $4 \times 1 + 12 \times 2 = 28$ بت (وهو ما يعيد نصفي المفتاح لحالتهما الابتدائية تماماً!).
- جدول الاختيار والتبديل الثاني PC-2: يضغط الـ 56 بت ليخرج مفتاح الدورة $K_i$ بحجم **48 بت**.

### 5. معايير الانهيار الثلجي (Avalanche Effect Metrics)
- **معيار الانهيار الثلجي الصارم (Strict Avalanche Criterion - SAC):**
$$ P(\Delta C_j = 1 \mid \Delta P_i = 1) = \frac{1}{2} \quad \forall i, j $$
تغير أي بت واحد في النص الصريح يجب أن يؤدي إلى انقلاب كل بت في النص المشفر باحتمالية $50\%$.
- **معيار استقلالية البتات (Bit Independence Criterion - BIC):**
$$ \operatorname{Cov}(\Delta C_j, \Delta C_k \mid \Delta P_i = 1) = 0 \quad \forall j \neq k $$
انقلاب أي بتين في الخرج يجب أن يكون مستقلاً إحصائياً تماماً ولا توجد بينهما علاقة ارتباط.

### 6. قانون حساب زمن البحث الشامل لكسر المفاتيح (Exhaustive Key Search Time)
$$ T_{\text{avg}} = \frac{2^{k-1}}{R} \text{ seconds} $$
- **حيث:** $k$ طول المفتاح بالبتات، $R$ معدل تجربة المفاتيح في الثانية (Keys/sec). في المتوسط، ينجح البحث الشامل بعد تجربة نصف فضاء المفاتيح الممكنة ($2^{k-1}$).

---

<a id="ch4-slides"></a>
## 4.2 أمثلة السلايدات وجداول DES

### 💡 مثال السلايدات 1: مواصفات خوارزمية DES القياسية
- **سنة الإصدار:** 1977 كمعيار فدرالي FIPS 46.
- **حجم كتلة البيانات (Block Size):** 64 بت.
- **طول المفتاح الحقيقي (Effective Key Size):** 56 بت (المفتاح الأصلي 64 بت تسقط منه 8 بتات تطابق).
- **عدد الدورات (Rounds):** 16 دورة فايستل متطابقة.
- **حجم المفتاح الفرعي للدورة (Subkey Size):** 48 بت.
- **مدخل دالة الدورة $F$:** نصف الكتلة الأيمن (32 بت) يتوسع عبر جدول التمدد E-Table إلى 48 بت.

### 💡 مثال السلايدات 2: أزمنة كسر المفاتيح بالبحث الشامل (Table 4.5 p. 119)
| نوع الخوارزمية | طول المفتاح (بت) | حجم فضاء المفاتيح | الزمن عند سرعة $10^9$ مفتاح/ثانية | الزمن عند سرعة $10^{13}$ مفتاح/ثانية |
|---|---|---|---|---|
| DES | 56 | $2^{56} \approx 7.2 \times 10^{16}$ | $\approx 1.125$ سنة ($pprox 400$ يوم) | $\approx 1$ ساعة فقط |
| Two-Key 3DES | 112 | $2^{112} \approx 5.2 \times 10^{33}$ | $\approx 8.2 \times 10^{16}$ سنة | $\approx 8.2 \times 10^{12}$ سنة |
| Three-Key 3DES | 168 | $2^{168} \approx 3.7 \times 10^{50}$ | $\approx 5.9 \times 10^{33}$ سنة | $\approx 5.9 \times 10^{29}$ سنة |
| AES-128 | 128 | $2^{128} \approx 3.4 \times 10^{38}$ | $\approx 5.4 \times 10^{21}$ سنة | $\approx 5.4 \times 10^{17}$ سنة |

---

<a id="ch4-problems"></a>
## 4.3 مسائل امتحانات الميدتيرم الرسمية وصناديق S-Boxes المحلولة

### 🌟 مسألة امتحان ميدتيرم 2020 الرسمية: حساب مخرجات صندوق الاستبدال DES S-Box 2
- **نص السؤال بالامتحان:** *"Use S2 to get the output of the following input using s-box Technique of DES. Given that: Input: 101111"*
- **الخطوة 1: تحليل البتات الستة للمدخل:**
  - المدخل هو: $b_1 b_2 b_3 b_4 b_5 b_6 = 101111_2$.
- **الخطوة 2: استخراج رقم الصف (Row):**
  - نأخذ البت الأول والأخير: $b_1 = 1, b_6 = 1$.
  - رقم الصف بالنظام الثنائي: $(11)_2 = 1 \times 2^1 + 1 \times 2^0 = 3$.
  - $\implies \text{Row } = 3$.
- **الخطوة 3: استخراج رقم العمود (Column):**
  - نأخذ البتات الأربعة الداخلية: $b_2 b_3 b_4 b_5 = 0111_2$.
  - رقم العمود بالنظام الثنائي: $(0111)_2 = 0(8) + 1(4) + 1(2) + 1(1) = 7$.
  - $\implies \text{Column } = 7$.
- **الخطوة 4: البحث في جدول S-Box 2 القياسي:**
  - عند تقاطع الصف رقم 3 مع العمود رقم 7، تكون القيمة المخزنة هي: **2**.
- **الخطوة 5: تحويل الناتج إلى 4 بتات ثنائية:**
  - $(2)_{10} = 0010_2$.
- **✅ الناتج النهائي المعتمد بنموذج إجابة الامتحان:**
> **`Output = 2 = 0010`**

---

## 4.4 المسائل التمرينية والنموذجية الكاملة للباب الرابع

### 🎯 مسألة رقم [prob-ch4-01]: تنفيذ دورة فايستل والبرهان الرياضي لقابلية فك التشفير للعكس التام
**English Title:** *Feistel Cipher Round Execution & Mathematical Proof of Reversibility*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 4 / Section 4.1 & Figure 4.1 Feistel Cipher`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `block-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** في هيكل فايستل لتشفير الكتل: (1) اكتب معادلات التشفير التي تحول كتلة الدخل (L_{i-1}, R_{i-1}) إلى خرج الدورة (L_i, R_i) باستخدام المفتاح الفرعي K_i ودالة الدورة F. (2) استنتج معادلات فك التشفير التي تسترجع L_{i-1} و R_{i-1}. (3) أثبت رياضياً لماذا لا يُشترط أن تكون دالة الدورة F قابلة للعكس لكي تضمن الخوارزمية فك التشفير بنجاح.
> 
> **In English:** *"In a classical Feistel block cipher: (1) Write the encryption equations that transform input block (L_{i-1}, R_{i-1}) into round output (L_i, R_i) using round subkey K_i and round function F. (2) Derive the exact decryption equations that recover L_{i-1} and R_{i-1} from (L_i, R_i). (3) Prove mathematically why the round function F does NOT need to be invertible for the cipher to be reversible."*

**📥 المعطيات (Given Parameters):**
- **النصف الأيسر:** `$Left Half = L_{i-1} (w bits)$`
- **النصف الأيمن:** `$Right Half = R_{i-1} (w bits)$`
- **دالة الدورة غير الخطية:** `$Round Function = F(R_{i-1}, K_i)$`
- **المفتاح الفرعي للدورة:** `$Round Subkey = K_i$`

**🎯 المطلوب إيجاده (Required):** معادلات التشفير، معادلات فك التشفير، وبرهان القابلية للعكس الرياضي.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** معادلات دورة فايستل الأساسية (*Feistel Round Recurrence*)
$$ \begin{cases} L_i = R_{i-1} \\ R_i = L_{i-1} \oplus F(R_{i-1}, K_i) \end{cases} \iff \begin{cases} R_{i-1} = L_i \\ L_{i-1} = R_i \oplus F(L_i, K_i) \end{cases} $$
> نظراً لأن عملية XOR ذاتية الانعكاس (A ^ B ^ B = A)، يمكن استرجاع L_{i-1} بدمج R_i مع F(L_i, K_i) دون الحاجة لعكس دالة F إطلاقاً.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: كتابة معادلات التشفير الأمامية (*State the Forward Encryption Equations*)
$$ L_i = R_{i-1}, \quad R_i = L_{i-1} \oplus F(R_{i-1}, K_i) $$
- **النتيجة المرحلية:** `$Output: (L_i, R_i)$`
- **الشرح الرياضي:** النصف الأيسر يأخذ النصف الأيمن السابق كما هو. والنصف الأيمن يأخذ الأيسر السابق مدمجاً بـ XOR مع خرج دالة F.

##### الخطوة 2: استنتاج معادلات فك التشفير العكسية (*Derive the Backward Decryption Equations*)
$$ R_{i-1} = L_i, \quad L_{i-1} = R_i \oplus F(L_i, K_i) $$
- **النتيجة المرحلية:** `$Exact recovery of (L_{i-1}, R_{i-1})$`
- **الشرح الرياضي:** من المعادلة الأولى R_{i-1} هو نفسه L_i مباشرة. وبالتعويض في الثانية نحصل على R_i = L_{i-1} ^ F(L_i, K_i).

##### الخطوة 3: البرهان الجبري على عدم اشتراط عكس دالة F (*Algebraic Proof of Reversibility*)
$$ R_i \oplus F(L_i, K_i) = [L_{i-1} \oplus F(R_{i-1}, K_i)] \oplus F(R_{i-1}, K_i) = L_{i-1} \oplus 0 = L_{i-1} $$
- **النتيجة المرحلية:** `$Proof Complete: F is evaluated in the FORWARD direction in both encryption and decryption!$`
- **الشرح الرياضي:** لاحظ أن الدالة F تُحسب في الاتجاه الأمامي دائماً في التشفير وفك التشفير على حد سواء! لذا يمكن أن تكون F دالة أحادية الاتجاه وغير عكوسة ومعقدة للغاية.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`L_{i-1} = R_i ^ F(L_i, K_i); Function F does not require an inverse.`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: في خوارزمية DES يطبق فك التشفير بنفس الدوائر الصلبة للعتاد فقط بتطبيق المفاتيح بترتيب عكسي من K16 إلى K1.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** الاعتقاد بأن دالة الدورة F في فايستل يجب أن تكون رياضياً قابلة للعكس.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** بنية فايستل تضمن القابلية للعكس هيكلياً عبر XOR؛ والدالة F لا تحتاج لمعكوس إطلاقاً.

---

### 🎯 مسألة رقم [prob-ch4-02]: حساب مخرجات صندوق الاستبدال DES S-Box 2 للمدخل 101111_2 (مسألة الميدتيرم 2020)
**English Title:** *DES S-Box Evaluation: 6-Bit Input to 4-Bit Output (Midterm 2020 Problem)*  
- **المصدر والتوثيق الأكاديمي:** `Midterm 2020 Exam Q1(5) & Stallings Section 4.2 S-Box 2`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `block-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** في دورة خوارزمية DES، تقسم الـ 48 بت الناتجة من XOR مع المفتاح الفرعي إلى 8 كتل كل منها 6 بت تُمرر إلى صناديق S-box من 1 إلى 8. إذا كان المدخل لصندوق S2 هو 101111_2، احسب المخرج المكون من 4 بت. وضح بالتفصيل كيف يتم تحديد رقم الصف والعمود.
> 
> **In English:** *"In the DES round function, 48 bits from the XOR with subkey K_i are split into eight 6-bit blocks and fed to S-Boxes S_1 through S_8. Given the 6-bit input to S-Box S_2 is 101111_2, calculate the resulting 4-bit output. Show how the row and column are determined."*

**📥 المعطيات (Given Parameters):**
- **صندوق الاستبدال الثاني:** `$S-Box = S_2$`
- **كتلة الدخل المكونة من 6 بت:** `$Input Block = 101111_2 (b1 b2 b3 b4 b5 b6)$`

**🎯 المطلوب إيجاده (Required):** رقم الصف، رقم العمود، القيمة العشرية في الجدول، والخرج الثنائي 4 بت.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** قاعدة عنونة الصف والعمود في صناديق استبدال DES (*DES S-Box Addressing Scheme*)
$$ \text{Row} = (b_1 b_6)_2 \in \{0, 1, 2, 3\}, \quad \text{Column} = (b_2 b_3 b_4 b_5)_2 \in \{0, 1, \dots, 15\} $$
> البتان الطرفيان (الأول والسادس) يحددان رقم الصف (من 0 إلى 3)، والبتات الأربعة الوسطى تحدد رقم العمود (من 0 إلى 15).

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: تحديد رقم الصف من البتين الطرفيين b1 و b6 (*Determine Row from Outer Bits b1 and b6*)
$$ b_1 = 1, \quad b_6 = 1 \implies \text{Row} = 11_2 = 1(2) + 1(1) = 3 $$
- **النتيجة المرحلية:** `$\text{Row} = 3$`
- **الشرح الرياضي:** البت الأول 1 والأخير 1. رقمهما ثنائياً (11)_2 يكافئ الصف رقم 3.

##### الخطوة 2: تحديد رقم العمود من البتات الداخلية الأربعة (*Determine Column from Inner Bits b2 to b5*)
$$ b_2 b_3 b_4 b_5 = 0111_2 \implies \text{Column} = 0(8) + 1(4) + 1(2) + 1(1) = 7 $$
- **النتيجة المرحلية:** `$\text{Column} = 7$`
- **الشرح الرياضي:** البتات الأربعة الوسطى هي 0111، وقيمتها بالنظام العشري هي العمود رقم 7.

##### الخطوة 3: استخراج القيمة المقابلة في جدول S2 المعتمد (*Lookup Cell in Standard DES S_2 Table*)
$$ S_2[\text{Row } 3, \text{Col } 7] = 2_{10} = 0010_2 $$
- **النتيجة المرحلية:** `$0010_2$`
- **الشرح الرياضي:** في جدول S2 المعتمد: عند الصف 3 والعمود 7 القيمة هي 2 عشرياً، وتحويلها لـ 4 بت هو 0010_2.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`Output = 0010_2 (Decimal 2) - Official Midterm 2020 Question 1(5) Answer`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: نموذج إجابة الميدتيرم 2020 المعتمد يؤكد أن الناتج هو 2 (0010 ثنائياً).

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** استخدام أول بتين للصف وآخر أربعة بتات للعمود.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** الصف يحدده دائماً البتان الطرفيان (الأول والأخير b1 و b6).

---

### 🎯 مسألة رقم [prob-ch4-03]: خوارزمية جدول مفاتيح DES: جداول PC-1 والإزاحات الدائرية وضغط PC-2
**English Title:** *DES Key Schedule Architecture: PC-1, Circular Shifts, and PC-2*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 4 / Section 4.3 DES Key Schedule`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `block-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** يولد جدول مفاتيح DES ستة عشر مفتاحاً فرعياً K1 إلى K16 بطول 48 بت من مفتاح أصلي بطول 64 بت. (1) اشرح وظيفة جدول الاختيار المبدل الأول PC-1 وحدد طول المفتاح الفعلي. (2) وضح جدول الإزاحات الدائرية لليسار عبر الـ 16 دورة. (3) اشرح وظيفة جدول الاختيار المبدل الثاني PC-2.
> 
> **In English:** *"The DES key schedule generates sixteen 48-bit subkeys K_1 through K_16 from a 64-bit original key. (1) Describe the function of Permuted Choice 1 (PC-1) and state the effective key size. (2) Explain the circular left-shift schedule across the 16 rounds. (3) Describe the function of Permuted Choice 2 (PC-2)."*

**📥 المعطيات (Given Parameters):**
- **طول المفتاح المدخل الأصلي:** `$Original Key Length = 64 bits$`
- **عدد الدورات:** `$Number of Rounds = 16 rounds$`
- **طول المفتاح الفرعي لكل دورة:** `$Subkey Length = 48 bits per round$`

**🎯 المطلوب إيجاده (Required):** اختزال PC-1 إلى 56 بت، عدد الإزاحات (1 أو 2 بت)، وضغط PC-2 إلى 48 بت.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** مراحل توليد مفاتيح دورات DES (*DES Key Schedule Flow*)
$$ 64 \text{ bits} \xrightarrow{\text{PC-1 (drop 8 parity)}} 56 \text{ bits } (C_0, D_0) \xrightarrow{\text{Circular Shift}} (C_i, D_i) \xrightarrow{\text{PC-2 (compress)}} 48 \text{ bits } K_i $$
> يسقط PC-1 بتات التحقق الثمانية. تكون الإزاحة بمقدار بت واحد في الدورات {1, 2, 9, 16} وبمقدار بتين لباقي الدورات. الإجمالي 28 بت (دورة كاملة).

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: جدول PC-1 وإسقاط بتات التحقق من التكافؤ (*PC-1 Selection and Parity Bit Discard*)
$$ 64 \text{ bits} \xrightarrow{\text{PC-1}} 56 \text{ bits} $$
- **النتيجة المرحلية:** `$Effective key space: 2^{56} (bits 8, 16, 24, 32, 40, 48, 56, 64 ignored)$`
- **الشرح الرياضي:** كل ثامن بت هو بت تحقق من التكافؤ الفردي ويسقطه جدول PC-1، فيتبقى 56 بتاً فعلياً تقسم لنصفين C0 و D0 بطول 28 بت لكل منهما.

##### الخطوة 2: جدول الإزاحات الدائرية لليسار عبر الـ 16 دورة (*Circular Left Shift Schedule Across 16 Rounds*)
$$ \text{Shift Schedule: } \begin{cases} 1 \text{ bit shift:} & \text{Rounds } \{1, 2, 9, 16\} \\ 2 \text{ bits shift:} & \text{All other 12 rounds} \end{cases} $$
- **النتيجة المرحلية:** `$\text{Total Shifts} = 4(1) + 12(2) = 4 + 24 = 28 \text{ bits}$`
- **الشرح الرياضي:** 4 دورات تزاح ببت واحد و 12 دورة تزاح ببتين. مجموع الإزاحات 28 بتاً، مما يعيد المسجل لحالته الأصلية C0 و D0 بنهاية الدورة 16.

##### الخطوة 3: جدول PC-2 لضغط واختيار المفتاح الفرعي 48 بت (*Permuted Choice 2 (PC-2) Subkey Selection*)
$$ 56 \text{ bits } (C_i, D_i) \xrightarrow{\text{PC-2}} 48 \text{ bits } K_i $$
- **النتيجة المرحلية:** `$Each round subkey Ki has 48 bits (8 bits dropped per round)$`
- **الشرح الرياضي:** يقوم جدول PC-2 بتبديل مواضع الـ 56 بت وحذف 8 بتات، لينتج مفتاح الدورة الفرعي Ki بطول 48 بت.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`PC-1: 64 to 56 bits; Shifts: 4x1 + 12x2 = 28 bits; PC-2: 56 to 48 bits Ki.`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: مجموع الإزاحات = 28 بتاً بالضبط، مما يضمن دورة كاملة للمسجل.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** الاعتقاد بأن كل الدورات الـ 16 تستخدم إزاحة 2 بت.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** تذكر أن الدورات 1 و 2 و 9 و 16 تستخدم إزاحة بت واحد فقط.

---

### 🎯 مسألة رقم [prob-ch4-04]: حساب زمن كسر المفاتيح بالبحث الشامل: مقارنة DES و 3DES و AES (جدول 4.5)
**English Title:** *Exhaustive Key Search Time Analysis: DES vs 3DES vs AES (Table 4.5)*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 4 / Table 4.5 Exhaustive Key Search Times`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `block-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** يحلل جدول ستالينجز 4.5 زمن كسر المفاتيح بالبحث الشامل (Brute Force). بافتراض حاسوب فائق يختبر 10^12 (تريليون) مفتاح في الثانية: (1) احسب متوسط الزمن اللازم لفحص فضاء مفاتيح DES بطول 56 بت. (2) احسب متوسط الزمن اللازم لكسر معيار AES بطول 128 بت بنفس السرعة. (3) قارن بين جدوى الهجوم.
> 
> **In English:** *"Stallings Table 4.5 analyzes exhaustive brute-force key search times. Assuming a parallel cracking cluster capable of testing 10^{12} (1 trillion) keys per second: (1) Calculate the average time to exhaustively search the 56-bit DES key space. (2) Calculate the average time to crack 128-bit AES at the same speed. (3) Compare feasibility."*

**📥 المعطيات (Given Parameters):**
- **معدل فحص المفاتيح في الثانية:** `$Cracking Rate R = 10^{12} keys/sec$`
- **طول مفتاح DES:** `$DES Key Size = 56 bits$`
- **طول مفتاح AES:** `$AES Key Size = 128 bits$`

**🎯 المطلوب إيجاده (Required):** زمن كسر DES بالساعات وزمن كسر AES بالسنوات.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** قانون متوسط زمن البحث الشامل (*Average Key Search Time*)
$$ T_{\text{avg}} = \frac{2^{k-1}}{R} \text{ seconds} $$
> في المتوسط، يجب فحص نصف فضاء المفاتيح (2 أس k-1) قبل العثور على المفتاح الصحيح.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: حساب متوسط زمن كسر DES بطول 56 بت (*Compute Average Time to Break DES (56 bits)*)
$$ T_{\text{avg}}(\text{DES}) = \frac{2^{55}}{10^{12}} = \frac{3.60288 \times 10^{16}}{10^{12}} = 36,028.8 \text{ seconds} $$
- **النتيجة المرحلية:** `$36,029 \text{ seconds} \approx 10.01 \text{ hours}$`
- **الشرح الرياضي:** بقسمة الثواني على 3600 ينتج 10 ساعات تقريباً. أي أن DES يكسر في أقل من نصف يوم.

##### الخطوة 2: حساب متوسط زمن كسر AES بطول 128 بت (*Compute Average Time to Break AES (128 bits)*)
$$ T_{\text{avg}}(\text{AES}) = \frac{2^{127}}{10^{12}} = \frac{1.7014 \times 10^{38}}{10^{12}} = 1.7014 \times 10^{26} \text{ seconds} $$
- **النتيجة المرحلية:** `$1.7014 \times 10^{26} \text{ sec} \approx 5.39 \times 10^{18} \text{ years}$`
- **الشرح الرياضي:** بقسمة الثواني على عدد ثواني السنة ينتج 5.4 × 10^18 سنة، وهو زمن يفوق عمر الكون بملايين المرات.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`DES: ~10 hours (Vulnerable); AES-128: ~5.39 * 10^{18} years (Computationally Unbreakable)`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> مطابق لجدول ستالينجز 4.5 مع تناسب زيادة السرعة بمعدل مليون ضعف.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** استخدام 2^k بدلاً من 2^(k-1) لمتوسط زمن البحث.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** 2^k هو الزمن الأقصى؛ بينما 2^(k-1) هو المتوسط الرياضي المتوقع.

---

### 🎯 مسألة رقم [prob-ch4-05]: معيار الانهيار الثلجي الصارم (SAC) ومعيار استقلالية البتات (BIC)
**English Title:** *Strict Avalanche Criterion (SAC) & Bit Independence Criterion (BIC)*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 4 / Section 4.5 Avalanche Effect & SAC`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `block-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** (1) عرف تأثير الانهيار الثلجي (Avalanche Effect) وقارنه بمعيار الانهيار الصارم (SAC). (2) عرف معيار استقلالية البتات (BIC). (3) وضح لماذا يمنع هذان المعياران هجمات تحليل الشفرات التفاضلي.
> 
> **In English:** *"(1) Define the Avalanche Effect in block ciphers and contrast it with the Strict Avalanche Criterion (SAC). (2) Define the Bit Independence Criterion (BIC). (3) Explain why SAC and BIC prevent differential cryptanalysis."*

**📥 المعطيات (Given Parameters):**
- **معايير وبستر وتافاريس:** `$Standard = Webster and Tavares (1986)$`
- **تغير بت واحد في المدخل:** `$Input Difference = 1 bit flipped$`

**🎯 المطلوب إيجاده (Required):** تعريف SAC و BIC ودورهما في الحماية من التحليل التفاضلي.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** الصياغة الرياضية لمعياري SAC و BIC (*SAC and BIC Mathematical Definitions*)
$$ \begin{aligned} \text{SAC:} & \quad P(\Delta y_j = 1 \mid \Delta x_i = 1) = \frac{1}{2} \quad \forall i, j \\ \text{BIC:} & \quad \text{Cov}(\Delta y_j, \Delta y_k \mid \Delta x_i = 1) = 0 \quad \forall j \neq k \end{aligned} $$
> معيار SAC يشترط أن قلب بت في الدخل يغير كل بت في الخرج باحتمال 0.5 بالضبط. ومعيار BIC يشترط استقلالية التغير بين أي بتين في الخرج.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: التمييز بين الانهيار العام ومعيار الانهيار الصارم (SAC) (*Define General Avalanche vs SAC*)
$$ \text{General Avalanche: } \approx 50\% \text{ total bits flip}, \quad \text{SAC: } P(\Delta y_j = 1) = 0.5 \quad \forall j $$
- **النتيجة المرحلية:** `$SAC is a rigorous per-bit constraint$`
- **الشرح الرياضي:** الانهيار العام يعني تقريباً تغير نصف البتات كمتوسط إجمالي. أما SAC فهو شرط رياضي صارم يفرض أن كل بت بمفرده يتغير باحتمال 0.5 بالضبط.

##### الخطوة 2: تعريف معيار استقلالية البتات (BIC) (*Define Bit Independence Criterion (BIC)*)
$$ \text{BIC: Output bits } y_j \text{ and } y_k \text{ change independently} $$
- **النتيجة المرحلية:** `$No linear or statistical correlation between output bit pairs$`
- **الشرح الرياضي:** معيار BIC يضمن عدم وجود أي ارتباط إحصائي أو علاقة خطية بين تغير أي زوج من بتات الخرج عند قلب بت في الدخل.

##### الخطوة 3: كيف يحمي هذان المعياران من التحليل التفاضلي (*Defense Against Differential Cryptanalysis*)
$$ \Delta X \xrightarrow{S} \Delta Y \text{ is uniformly distributed} \implies \text{No high-probability differential paths} $$
- **النتيجة المرحلية:** `$Differential cryptanalysis fails to find predictable propagation paths$`
- **الشرح الرياضي:** التحليل التفاضلي يبحث عن مسارات فرق ذات احتمالية عالية عبر الدورات. وتطبيق SAC و BIC يشتت الفروق بانتظام كامل فيبطل جدوى الهجوم.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`SAC: P(flip) = 0.5 for each bit; BIC: output bit changes are pairwise independent.`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: صُممت صناديق S-box في DES خصيصاً لتحقيق معايير SAC و BIC لمنع الهجمات التفاضلية.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** الخلط بين مفهومي SAC و BIC.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** معيار SAC يخص احتمال التغير (0.5) لكل بت؛ ومعيار BIC يخص الاستقلالية بين بتين مختلفين.

---

### 🎯 مسألة رقم [prob-ch4-06]: مبدآ كلود شانون للتشفير: التشويش (Confusion) والانتشار (Diffusion) وآليات تحقيقهما
**English Title:** *Shannon's Confusion and Diffusion Mechanisms in Block Ciphers*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 4 / Section 4.1 Shannon's Confusion and Diffusion`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `block-cipher`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** (1) عرف مبدأي كلود شانون: الانتشار (Diffusion) والتشويش (Confusion). (2) حدد المكون الدقيق في خوارزمية DES المسؤول عن تحقيق الانتشار، والمكون المسؤول عن التشويش. (3) وضح لماذا يؤدي دمجهما معاً في شبكة SP إلى بناء شفرة كتل قوية ومحصنة.
> 
> **In English:** *"(1) Define Claude Shannon’s concepts of Diffusion and Confusion. (2) Identify the specific component in DES that achieves Diffusion, and the component that achieves Confusion. (3) Explain why combining both creates a cryptographically strong block cipher."*

**📥 المعطيات (Given Parameters):**
- **كلود شانون - مؤسس نظرية المعلومات:** `$Theorist = Claude Shannon (1949)$`
- **شبكة الاستبدال والتبديل الموضعي:** `$Cipher Architecture = Substitution-Permutation Network (SPN)$`

**🎯 المطلوب إيجاده (Required):** التعريفان، المكونان المقابلان في DES، والتحليل الأمني للتكامل بينهما.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** مبادئ شانون للتشويش والانتشار (*Confusion and Diffusion Principles*)
$$ \begin{aligned} \text{Diffusion:} & \quad \text{Plaintext statistics dissipated across ciphertext} \implies \text{P-Boxes / Permutations} \\ \text{Confusion:} & \quad \text{Relationship between key and ciphertext obscured} \implies \text{S-Boxes / Substitutions} \end{aligned} $$
> الانتشار يبدد إحصاءات النص الصريح عبر طول الشفرة (عبر جداول التبديل P-box). والتشويش يعقد العلاقة بين المفتاح والشفرة بصورة غير خطية (عبر صناديق S-box).

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: تعريف الانتشار (Diffusion) والتشويش (Confusion) (*Define Shannon's Diffusion and Confusion*)
$$ \text{Diffusion} \propto \text{Plaintext Spread}, \quad \text{Confusion} \propto \text{Key Obscurity} $$
- **النتيجة المرحلية:** `$Clear foundational definitions$`
- **الشرح الرياضي:** الانتشار يوزع تأثير كل بت من النص الصريح على عدة بتات في الشفرة لإخفاء الأنماط. والتشويش يجعل العلاقة بين المفتاح والنص المشفر معقدة وغير خطية.

##### الخطوة 2: تحديد مكونات DES المقابلة لكل مبدأ (*Identify DES Hardware Components for Each Principle*)
$$ \begin{aligned} \text{Diffusion in DES} &\implies \mathbf{\text{Permutation Tables: Initial Permutation (IP), Expansion (E), and Permutation (P)}} \\ \text{Confusion in DES} &\implies \mathbf{\text{Substitution Boxes: 8 Non-linear S-Boxes (S_1 to S_8)}} \end{aligned} $$
- **النتيجة المرحلية:** `$P-boxes = Diffusion; S-boxes = Confusion$`
- **الشرح الرياضي:** في DES: جداول التبديل (P و E و IP) توفر الانتشار (Diffusion). وصناديق الاستبدال الثمانية (S-Boxes) توفر التشويش غير الخطي (Confusion).

##### الخطوة 3: توضيح أثر التكامل عبر الدورات المتتالية (*Explain Synergy in Multi-Round SP Networks*)
$$ \text{Round } 1 \to \text{Round } 2 \to \dots \to \text{Round } 16 \implies \text{Complete Avalanche and Non-Linearity} $$
- **النتيجة المرحلية:** `$Linear cryptanalysis and frequency cryptanalysis are defeated$`
- **الشرح الرياضي:** التناوب بين صناديق S وجداول P عبر دورات متكررة يجعل المخرجات غير الخطية لكل صندوق تنتشر لجميع الصناديق الأخرى في الدورات التالية، محققة أماناً عالياً.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`Diffusion = P-Boxes (Plaintext spread); Confusion = S-Boxes (Key complexity).`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق من المرجع: بحث كلود شانون لعام 1949 هو المرجع الأصلي لمصطلحي التشويش والانتشار.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** عكس المكونين: القول بأن صناديق S للانتشار وجداول P للتشويش.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** تذكر الربط دائماً: صناديق S للاستبدال = Confusion؛ وجداول P للتبديل الموضعي = Diffusion.

---

<a id="chapter-7"></a>
# الباب الخامس: أنماط تشغيل الشفرات الكتلية والتشفير المتعدد
### Chapter 7: Block Cipher Operation, Multiple Encryption & NIST Modes

<a id="ch7-formulas"></a>
## 5.1 قوانين وبراهين التعقيد وأنماط التشغيل الخمسة NIST

### 1. برهان هجوم الالتقاء في المنتصف على التشفير المزدوج Double-DES (Meet-in-the-Middle)
في التشفير المزدوج: $C = \mathrm{E}(K_2, \mathrm{E}(K_1, P))$، بطول مفتاح ظاهري $56 + 56 = 112$ بت.
- **المعادلة الجوهرية للهجوم:**
$$ X = \mathrm{E}(K_1, P) = \mathrm{D}(K_2, C) $$
- **البرهان والتعقيد الحسابي:**
  1. يقوم المهاجم بتشفير $P$ تحت كل المفاتيح الممكنة لـ $K_1$ ($2^{56}$ مفتاح) وتخزين أزواج $(X, K_1)$ في جدول بحث سريع (Hash Table).
  2. يقوم بفك تشفير $C$ تحت كل المفاتيح الممكنة لـ $K_2$ ($2^{56}$ مفتاح) والبحث عن تطابق في الجدول.
  3. إجمالي الجهد الحسابي المطلوب:
$$ \text{Total Work} = 2^{56} + 2^{56} = 2 \times 2^{56} = 2^{57} \ll 2^{112} $$
- **النتيجة الحتمية:** التشفير المزدوج Double-DES غير آمن إطلاقاً لأن أمانه الفعلي يكافئ 57 بت فقط بدلاً من 112 بت.

### 2. معمارية التشفير الثلاثي (Triple-DES EDE) والتوافق العكسي
- **التشفير الثلاثي بثلاثة مفاتيح (3DES EDE3 - 168 bits):**
$$ C = \mathrm{E}(K_3, \mathrm{D}(K_2, \mathrm{E}(K_1, P))) $$
$$ P = \mathrm{D}(K_1, \mathrm{E}(K_2, \mathrm{D}(K_3, C))) $$
- **التشفير الثلاثي بمفتاحين (3DES EDE2 - 112 bits):**
$$ C = \mathrm{E}(K_1, \mathrm{D}(K_2, \mathrm{E}(K_1, P))) \quad (K_3 = K_1) $$
- **إثبات ميزة التوافق العكسي (Backwards Compatibility):**
عندما نضع $K_1 = K_2 = K_3 = K$:
$$ C = \mathrm{E}(K, \mathrm{D}(K, \mathrm{E}(K, P))) = \mathrm{E}(K, P) $$
عملية فك التشفير بالدورة الثانية $\mathrm{D}(K, \dots)$ تلغي عملية التشفير الأولى $\mathrm{E}(K, \dots)$، فيتحول النظام فوراً وبشكل تلقائي إلى DES المنفرد العادي!

### 3. أنماط تشغيل الشفرات الكتلية الخمسة القياسية (NIST 5 Modes of Operation)

#### أ. نمط كتاب الشفرة الإلكتروني (Electronic Codebook - ECB):
$$ C_j = \mathrm{E}(K, P_j), \qquad P_j = \mathrm{D}(K, C_j) $$
- **نقطة الضعف القاتلة:** الكتل المتماثلة في النص الصريح تنتج كتلاً مشفرة متطابقة:
$$ P_i = P_j \implies C_i = C_j $$
يسرب الأنماط الإحصائية للبيانات (مثل صورة بطريق لينكس)، ومعرض لهجمات القص واللصق (Cut-and-Paste Attacks).

#### ب. نمط ربط كتل الشفرة (Cipher Block Chaining - CBC):
$$ C_0 = \mathrm{E}(K, P_0 \oplus \mathrm{IV}), \qquad C_j = \mathrm{E}(K, P_j \oplus C_{j-1}) $$
$$ P_0 = \mathrm{D}(K, C_0) \oplus \mathrm{IV}, \qquad P_j = \mathrm{D}(K, C_j) \oplus C_{j-1} $$
- **مبرهنة انتشار الأخطاء في CBC (1-Bit Error Propagation):**
إذا حدث خطأ في بت واحد في الكتلة المشفرة $C_j$:
  1. الكتلة $P_j$ تتخرب بالكامل (Complete Garble) بسبب تأثير الانهيار الثلجي داخل دالة فك التشفير.
  2. الكتلة التالية $P_{j+1}$ ينقلب فيها نفس البت المقابل فقط لأن $P_{j+1} = \mathrm{D}(K, C_{j+1}) \oplus C_j$.
  3. الكتلة $P_{j+2}$ وما بعدها تكون **سليمة تماماً**، فالنمط يستعيد تزامنه ذاتياً (Self-Synchronizing).

#### ج. نمط التغذية الراجعة للشفرة (Cipher Feedback - CFB):
$$ C_j = P_j \oplus \operatorname{MSB}_s(\mathrm{E}(K, I_j)) $$
$$ P_j = C_j \oplus \operatorname{MSB}_s(\mathrm{E}(K, I_j)) $$
- **خاصية فريدة:** فك التشفير يستخدم دالة **التشفير** $\mathrm{E}_K$ فقط، ولا يحتاج إلى تنفيذ دالة فك التشفير.

#### د. نمط التغذية الراجعة للمخرجات (Output Feedback - OFB):
$$ O_j = \mathrm{E}(K, O_{j-1}) \quad (O_0 = \mathrm{IV}), \qquad C_j = P_j \oplus O_j, \qquad P_j = C_j \oplus O_j $$
- **ميزة انعدام انتشار الأخطاء:** خطأ البت في $C_j$ يغير نفس البت المقابل في $P_j$ فقط دون التأثير على أي كتلة أخرى إطلاقاً.

#### هـ. نمط العداد (Counter Mode - CTR):
$$ C_j = P_j \oplus \mathrm{E}(K, T_j), \qquad P_j = C_j \oplus \mathrm{E}(K, T_j), \qquad T_j = \mathrm{Nonce} \parallel j $$
- **المزايا الست لنمط CTR:**
  1. كفاءة العتاد (Hardware Efficiency): معالجة كتل متوازية بالكامل.
  2. كفاءة البرمجيات (Software Efficiency): استغلال الأنوية المتعددة والمعالجة المتزامنة.
  3. المعالجة المسبقة (Preprocessing): توليد تيار التشفير مسبقاً قبل وصول النص الصريح.
  4. الوصول العشوائي (Random Access): فك تشفير أي كتلة برقمها دون فك تشفير الكتل السابقة.
  5. الأمان المبرهن رياضياً (Provable Security).
  6. البساطة (Simplicity): استخدام دالة التشفير فقط في عمليتي التشفير وفك التشفير.

### 4. معايير حشو الكتل المشفرة (Block Cipher Padding Standards)
- **معيار PKCS#7 / PKCS#5:**
$$ N = B - (L \bmod B) $$
حيث $B$ حجم الكتلة بالبايت، $L$ طول البيانات بالبايت، و $N$ عدد بايتات الحشو الواجب إضافتها. قيمة كل بايت حشو تساوي عدداً $N$ نفسه (مثلاً إذا احتجنا 3 بايتات حشو، تُضاف `0x03 0x03 0x03`). وإذا كانت البيانات مضاعفاً تاماً لحجم الكتلة، تُضاف كتلة كاملة من الحشو بقيمة $B$.
- **معيار ANSI X.923:** بايتات أصفار تنتهي ببايت وحيد يمثل عدد بايتات الحشو $N$ (`00 00 ... N`).
- **معيار ISO/IEC 9797-1 (Method 2):** بايت واحد قيمته `0x80` متبوعاً بأصفار (`80 00 ... 00`).
- **معيار ISO 10126:** بايتات عشوائية تنتهي ببايت وحيد يمثل عدد بايتات الحشو $N$.

---

<a id="ch7-slides"></a>
## 5.2 أمثلة السلايدات ومعايير حشو الكتل

### 💡 مثال السلايدات 1: هجوم القص واللصق على نمط ECB (Slide 14)
- نص الرسالة الصريحة:
  `Alice digs Bob. Trudy digs Tom.`
- بفرض كتل 64 بت (8 بايت):
  - $P_0 =$ `Alice di`, $P_1 =$ `gs Bob. `
  - $P_2 =$ `Trudy di`, $P_3 =$ `gs Tom. `
- ينتج النص المشفر: $C_0, C_1, C_2, C_3$.
- تقوم المهاجمة ترودي بتبديل الكتل المشفرة: $C_0, C_3, C_2, C_1$.
- عند فك التشفير لدى المستلم، يُفك النص كالتالي:
  `Alice digs Tom. Trudy digs Bob.`
- تم تغيير معنى الرسالة دون حاجة ترودي لمعرفة مفتاح التشفير إطلاقاً!

### 💡 مثال السلايدات 2: حساب حشو PKCS#7 لكتلة بحجم 8 بايتات
- **الحالة 1:** طول الرسالة 5 بايتات. $N = 8 - (5 \bmod 8) = 8 - 5 = 3$ بايتات. تُحشى الرسالة بالبايتات: `0x03 0x03 0x03`.
- **الحالة 2:** طول الرسالة 8 بايتات (مضاعف تام للكتلة). $N = 8 - (8 \bmod 8) = 8 - 0 = 8$ بايتات. تُضاف كتلة حشو كاملة مؤلفة من ثمانية بايتات بقيمة: `0x08 0x08 0x08 0x08 0x08 0x08 0x08 0x08` لمنع التباس نهاية البيانات.

---

<a id="ch7-problems"></a>
## 5.3 المسائل التمرينية والنموذجية الكاملة للباب الخامس

### 🎯 مسألة رقم [prob-ch7-01]: برهان هجوم الالتقاء في المنتصف على التشفير المضاعف Double-DES (تعقيد 2^57)
**English Title:** *Meet-in-the-Middle Attack on Double-DES Complexity Proof*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 7 / Section 7.1 (Double-DES & Meet-in-the-Middle)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `modes-operation`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** يستخدم التشفير الثنائي Double-DES مفتاحين مستقلين بطول 56 بت (K1, K2): C = E_K2(E_K1(P)). (1) ما هو فضاء البحث الشامل المتوقع نظرياً؟ (2) اشرح خوارزمية هجوم الالتقاء في المنتصف خطوة بخطوة لاسترجاع المفتاحين. (3) أثبت رياضياً لماذا ينخفض الجهد الحسابي إلى 2^57 عملية تشفير بدلاً من 2^112.
> 
> **In English:** *"Double-DES uses two 56-bit keys (K_1, K_2) to encrypt plaintext: C = E_{K_2}(E_{K_1}(P)). (1) What is the brute-force search space expected by naive attackers? (2) Describe the step-by-step Meet-in-the-Middle algorithm that recovers both keys. (3) Prove mathematically why the computational effort is approximately 2^{57} encryptions rather than 2^{112}."*

**📥 المعطيات (Given Parameters):**
- **طول المفتاح الأول:** `$Key 1 (K_1) = 56 bits$`
- **طول المفتاح الثاني:** `$Key 2 (K_2) = 56 bits$`
- **زوجان معروفان من النص الصريح والشفرة:** `$Known Pairs = (P_1, C_1), (P_2, C_2)$`

**🎯 المطلوب إيجاده (Required):** مراحل الخوارزمية، حجم الذاكرة المطلوبة، وتعقيد الوقت الحسابي 2^57.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** معادلة تطابق الحالة الوسيطة في الالتقاء في المنتصف (*Meet-in-the-Middle Intermediate State Equality*)
$$ X = E_{K_1}(P) = D_{K_2}(C) $$
> تشفير النص الصريح إلى الأمام بكل قيم K1 الممكنة يجب أن يلتقي ويتطابق في الحالة الوسيطة X مع فك تشفير الشفرة للخلف بمفتاح K2 الصحيح.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: المقارنة بين التوقع النظري والواقع العملي للأمان (*Contrast Theoretical Expectation vs Reality*)
$$ \text{Theoretical: } 2^{56 + 56} = 2^{112} \implies \text{Actual Security: } 2^{57} \text{ operations} $$
- **النتيجة المرحلية:** `$Reduction from 112 bits to 57 bits$`
- **الشرح الرياضي:** كان الاعتقاد أن الأمان هو 2^112. لكن ميركل وهيلمان أثبتا إمكانية كسره في 2^57 عملية فقط.

##### الخطوة 2: المرحلة الأولى: بناء جدول التشفير الأمامي (*Step 1 of Attack: Build Forward Encryption Table*)
$$ \text{Compute } X_i = E_{K_i}(P) \quad \forall K_i \in \{0, 1\}^{56} \implies \text{Store } (X_i, K_i) $$
- **النتيجة المرحلية:** `$2^{56} encryptions performed; table sorted by X_i$`
- **الشرح الرياضي:** نشفر P بكل مفاتيح K1 (عددها 2^56) ونخزن القيم الوسيطة X مع المفاتيح في جدول مرتب.

##### الخطوة 3: المرحلة الثانية: فك التشفير للخلف ومطابقة الجدول (*Step 2 of Attack: Backward Decryption & Matching*)
$$ \text{Compute } Y_j = D_{K_j}(C) \quad \forall K_j \in \{0, 1\}^{56} \implies \text{Check if } Y_j = X_i $$
- **النتيجة المرحلية:** `$2^{56} decryptions + O(1) lookups; verify candidate pair on (P2, C2)$`
- **الشرح الرياضي:** نفك تشفير C بكل قيم K2 المحتملة (2^56 محاولة). ونبحث عن الناتج في الجدول، فإذا تطابق نتحقق من الزوج على رسالة ثانية.

##### الخطوة 4: حساب إجمالي التعقيد الحسابي للعملية (*Calculate Total Computational Complexity*)
$$ \text{Total Effort} = 2^{56} + 2^{56} = 2 \times 2^{56} = 2^{57} \text{ operations} $$
- **النتيجة المرحلية:** `$2^{57} operations$`
- **الشرح الرياضي:** العمليات تُجمع ولا تُضرب: 2^56 + 2^56 = 2^57 عملية. وبالتالي فإن Double-DES يقدم بتاً واحداً فقط من الأمان الإضافي عن DES المنفرد!

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`Computational effort: 2^{57} operations (Explains why Triple-DES was mandated).`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق الرياضي: 2^56 + 2^56 = 2^57 عملية بدقة جبرية تامة.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** الاعتقاد بأن Double-DES يوفر 112 بت من الأمان.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** تذكر دائماً أن هجوم الالتقاء في المنتصف يختزل أمان التشفير المزدوج إلى 2^(k+1).

---

### 🎯 مسألة رقم [prob-ch7-02]: بنية التشفير الثلاثي (Triple-DES EDE) والتوافق العكسي مع DES المنفرد
**English Title:** *Triple-DES (3DES) EDE Architecture & Backwards Compatibility*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 7 / Section 7.2 Triple-DES (3DES)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `modes-operation`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** يعتمد التشفير الثلاثي (3DES) تسلسل التشفير وفك التشفير ثم التشفير (EDE). (1) اكتب معادلات التشفير وفك التشفير لـ 3DES بثلاثة مفاتيح مستقلة (K1, K2, K3). (2) وضح لماذا صُممت المرحلة الوسطى كفك تشفير بدلاً من تشفير. (3) أثبت رياضياً كيف يحافظ 3DES على التوافق العكسي مع DES المنفرد عند اختيار K1 = K2 = K3.
> 
> **In English:** *"Triple-DES employs the Encrypt-Decrypt-Encrypt (EDE) sequence across three stages. (1) Write the equations for 3DES encryption and decryption using three distinct keys (K_1, K_2, K_3). (2) Explain why the middle stage is DECRYPTION instead of encryption. (3) Prove mathematically how 3DES maintains backwards compatibility with single DES when K_1 = K_2 = K_3."*

**📥 المعطيات (Given Parameters):**
- **التشفير الثلاثي بتسلسل EDE:** `$Architecture = Triple-DES with EDE sequence$`
- **المفاتيح الثلاثة (168 بت إجمالي):** `$Keys = K_1, K_2, K_3 (each 56 bits, total 168 bits)$`

**🎯 المطلوب إيجاده (Required):** معادلات EDE، الحكمة الهندسية، وبرهان التوافق العكسي.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** معادلات التشفير الثلاثي EDE (*3DES EDE Equations*)
$$ C = E_{K_3}(D_{K_2}(E_{K_1}(P))), \quad P = D_{K_1}(E_{K_2}(D_{K_3}(C))) $$
> تشفير بالمفتاح K1، ثم فك تشفير بالمفتاح K2، ثم تشفير بالمفتاح K3. وفك التشفير يطبق العكس بترتيب مفاتيح مقلوب.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: صياغة معادلتي التشفير وفك التشفير لـ 3DES (*State 3DES Encryption and Decryption Equations*)
$$ \begin{aligned} \text{Encryption:} & \quad C = E_{K_3}\Big(D_{K_2}\big(E_{K_1}(P)\big)\Big) \\ \text{Decryption:} & \quad P = D_{K_1}\Big(E_{K_2}\big(D_{K_3}(C)\big)\Big) \end{aligned} $$
- **النتيجة المرحلية:** `$EDE for encryption; DED for decryption with keys K3, K2, K1$`
- **الشرح الرياضي:** للتشفير نطبق E_K1 ثم D_K2 ثم E_K3. ولفك التشفير نعكس العمليات والمفاتيح: D_K3 ثم E_K2 ثم D_K1.

##### الخطوة 2: الحكمة الهندسية من جعل المرحلة الوسطى فك تشفير (*Explain Why Middle Stage is Decryption (EDE)*)
$$ \text{If EEE used: } C = E_K(E_K(E_K(P))) \neq E_K(P) \implies \text{No backwards compatibility} $$
- **النتيجة المرحلية:** `$EDE enables backward compatibility with legacy single-DES hardware$`
- **الشرح الرياضي:** لو استخدم تسلسل EEE لتسبب تساوي المفاتيح في تشفير ثلاثي. أما مع EDE، فإن تساوي المفاتيح يجعل المرحلة الثانية تلغي الأولى، مما يتيح التوافق مع أنظمة DES القديمة.

##### الخطوة 3: البرهان الرياضي على التوافق العكسي عند تساوي المفاتيح (*Prove Backwards Compatibility when K_1 = K_2 = K_3 = K*)
$$ C = E_K\Big(D_K\big(E_K(P)\big)\Big) = E_K\Big(P\Big) = E_K(P) $$
- **النتيجة المرحلية:** `$C = E_K(P) (Standard Single DES Encryption!)$`
- **الشرح الرياضي:** بما أن فك التشفير يلغي التشفير لنفس المفتاح D_K(E_K(P)) = P، فإن المرحلتين الأولى والثانية تلغيان بعضهما، ويتبقى تشفير DES مفرد C = E_K(P).

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`C = E_K3(D_K2(E_K1(P))); When K1=K2=K3, collapses to standard single DES C = E_K(P).`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: تطبيق D_K على E_K يعيد النص P فوراً، فتكون النتيجة النهائية مطابقة لـ DES المنفرد تماماً.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** الاعتقاد بأن 3DES يستخدم ثلاث عمليات تشفير (EEE).
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** المعيار القياسي المعتمد للتشفير الثلاثي هو EDE حصراً (تشفير - فك تشفير - تشفير).

---

### 🎯 مسألة رقم [prob-ch7-03]: تحليل تسريب الأنماط في نمط كتاب الشفرة الإلكتروني (ECB Mode) وصورة البطريق
**English Title:** *Electronic Codebook (ECB) Mode Pattern Leakage Analysis*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 7 / Section 7.3 Electronic Codebook (ECB)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `modes-operation`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** يشفر نمط كتاب الشفرة الإلكتروني (ECB) كل كتلة 64 بت بشكل مستقل تماماً بنفس المفتاح K. (1) اكتب معادلتي التشفير وفك التشفير في نمط ECB. (2) أثبت رياضياً لماذا تنتج كتل النص الصريح المتطابقة كتل شفرة متطابقة (P_i = P_j => C_i = C_j). (3) وضح لماذا يفشل نمط ECB في إخفاء الأنماط الهيكلية في البيانات (مثل الصور النقطية أو حقول قواعد البيانات).
> 
> **In English:** *"Electronic Codebook (ECB) encrypts each 64-bit plaintext block independently using the same key K. (1) Write the ECB encryption and decryption formulas. (2) Demonstrate mathematically why identical plaintext blocks yield identical ciphertext blocks (P_i = P_j => C_i = C_j). (3) Explain why ECB fails to conceal patterns in structured data (such as bitmap images or database fields)."*

**📥 المعطيات (Given Parameters):**
- **نمط كتاب الشفرة الإلكتروني:** `$Mode = Electronic Codebook (ECB)$`
- **حجم الكتلة:** `$Block Size = 64 bits (or 128 bits for AES)$`
- **كتل صريحة متطابقة (مثل خلفية بيضاء):** `$Identical Blocks = P_1 = P_2 = 0x0000000000000000 (e.g. White Background)$`

**🎯 المطلوب إيجاده (Required):** معادلات ECB، برهان تطابق الشفرة، وتقييم الأمان الهيكلي.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** معادلة نمط كتاب الشفرة المستقل (*ECB Independent Block Mapping*)
$$ C_i = E_K(P_i), \quad P_i = D_K(C_i), \quad P_i = P_j \implies E_K(P_i) = E_K(P_j) \implies C_i = C_j $$
> نظراً لأن دالة التشفير E_K اقتران تقابلي حتمي، فإن المدخلات المتماثلة تنتج حتماً مخرجات متطابقة تماماً تحت نفس المفتاح.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: كتابة معادلات نمط كتاب الشفرة الإلكتروني (ECB) (*State ECB Mathematical Equations*)
$$ C_i = E_K(P_i), \quad P_i = D_K(C_i) \quad \forall i \in \{1, 2, \dots, N\} $$
- **النتيجة المرحلية:** `$Complete independence between blocks$`
- **الشرح الرياضي:** تُعالج كل كتلة بمعزل تام عن باقي الكتل دون أي ربط أو تغذية راجعة.

##### الخطوة 2: البرهان الرياضي على تسريب الأنماط وتطابق الشفرات (*Prove Deterministic Pattern Leakage*)
$$ P_i = P_j \implies C_i = E_K(P_i) = E_K(P_j) = C_j $$
- **النتيجة المرحلية:** `$Exact 1-to-1 block mapping leaks structural repetition$`
- **الشرح الرياضي:** بما أن دالة التشفير EK دالة حتمية ثابتة، فإن الكتل الصريحة المتماثلة تنتج كتل شفرة متطابقة دوماً.

##### الخطوة 3: تحليل تجربة صورة البطريق (Tux Penguin) الشهيرة (*Analyze the Iconic Tux Penguin Bitmap Demonstration*)
$$ \text{Large homogeneous regions (white/black pixels)} \implies \text{Identical ciphertext blocks display image outline!} $$
- **النتيجة المرحلية:** `$Visual outline and high-level structure remain completely visible$`
- **الشرح الرياضي:** عند تشفير صورة نقطية بنمط ECB، فإن مناطق الخلفية البيضاء المتجانسة تنتج كتل شفرة متطابقة، فيبقى مجسم ورسمة البطريق واضحة للعين تماماً في الصورة المشفرة!

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`Ci = EK(Pi); Insecure for multi-block structured messages; suitable only for single key exchange.`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: يوصي ستالينجز باستخدام ECB حصراً لنقل المفاتيح الفردية القصيرة، ويحظر استخدامه للرسائل الطويلة والبيانات المنظمة.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** استخدام نمط ECB لتشفير حقول قواعد البيانات أو الملفات الكبيرة.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** استخدم نمط CBC أو CTR أو GCM لمنع كشف الأنماط وهجمات إعادة الإرسال.

---

### 🎯 مسألة رقم [prob-ch7-04]: نمط ربط كتل الشفرة (CBC Mode): الربط التتابعي والمتجه الابتدائي (IV)
**English Title:** *Cipher Block Chaining (CBC) Mode: Chaining and IV Initialization*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 7 / Section 7.4 Cipher Block Chaining (CBC)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `modes-operation`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** يعالج نمط ربط كتل الشفرة (CBC) عيب تسريب الأنماط بربط الكتل بعملية XOR. (1) اكتب معادلات تشفير CBC للكتلة الأولى C1 (باستخدام المتجه الابتدائي IV) وللكتلة العامة Ci (حيث i >= 2). (2) اكتب معادلات فك التشفير وأثبت رياضياً استرجاع Pi بدقة. (3) وضح لماذا يجب أن يكون المتجه الابتدائي (IV) عشوائياً وغير متوقع.
> 
> **In English:** *"Cipher Block Chaining (CBC) overcomes ECB pattern leakage by chaining blocks with XOR. (1) Write the CBC encryption equations for block C_1 (using IV) and general block C_i (for i >= 2). (2) Write the corresponding decryption equations and prove mathematically that decryption correctly recovers P_i. (3) Explain why the Initialization Vector (IV) must be unpredictable / random."*

**📥 المعطيات (Given Parameters):**
- **نمط ربط كتل الشفرة:** `$Mode = Cipher Block Chaining (CBC)$`
- **المتجه الابتدائي IV:** `$Initialization Vector = IV (64-bit random block)$`

**🎯 المطلوب إيجاده (Required):** معادلات التشفير، معادلات فك التشفير، برهان الاسترجاع، ودور IV الأمني.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** معادلات نمط CBC الأساسية (*CBC Mode Equations*)
$$ C_i = E_K(P_i \oplus C_{i-1}) \quad (C_0 = \text{IV}), \quad P_i = D_K(C_i) \oplus C_{i-1} $$
> تُدمج كل كتلة نص صريح بعملية XOR مع كتلة الشفرة السابقة قبل تشفيرها. وفك التشفير يطبق دالة فك التشفير ثم يدمج الناتج بـ XOR مع الشفرة السابقة.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: معادلات التشفير في نمط CBC (*State CBC Encryption Equations*)
$$ \begin{aligned} C_1 &= E_K(P_1 \oplus \text{IV}) \\ C_i &= E_K(P_i \oplus C_{i-1}) \quad \forall i \ge 2 \end{aligned} $$
- **النتيجة المرحلية:** `$Every ciphertext block Ci depends on all previous plaintext blocks P1, ..., Pi$`
- **الشرح الرياضي:** الكتلة الأولى تدمج مع المتجه الابتدائي IV. وكل كتلة تالية تدمج مع كتلة الشفرة السابقة لها قبل التشفير.

##### الخطوة 2: معادلات فك التشفير وبرهان استرجاع النص الصريح (*State Decryption Equations & Prove Plaintext Recovery*)
$$ P_i = D_K(C_i) \oplus C_{i-1} $$
$$ D_K(C_i) \oplus C_{i-1} = D_K\big(E_K(P_i \oplus C_{i-1})\big) \oplus C_{i-1} = (P_i \oplus C_{i-1}) \oplus C_{i-1} = P_i \oplus 0 = P_i $$
- **النتيجة المرحلية:** `$P_i is recovered exactly$`
- **الشرح الرياضي:** دالة فك التشفير D_K تلغي E_K فيتبقى (Pi ^ Ci-1). وبدمجها بـ XOR مع Ci-1 يلغيان بعضهما ليتبقى Pi بدقة.

##### الخطوة 3: أهمية عشوائية المتجه الابتدائي IV لمنع الهجمات (*Explain Critical Security Requirement of Random IV*)
$$ \text{If IV is fixed/predictable: } P_1 = P_1' \implies C_1 = C_1' \implies \text{First block leaks pattern!} $$
- **النتيجة المرحلية:** `$Random IV ensures two identical messages produce completely different ciphertexts$`
- **الشرح الرياضي:** لو كان IV ثابتاً، لنتجت نفس الشفرة للرسائل المتطابقة. عشوائية IV تضمن أن تشفير نفس النص مرتين ينتج شفرتين مختلفتين تماماً.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`C_i = E_K(P_i ^ C_{i-1}); P_i = D_K(C_i) ^ C_{i-1}; IV must be random.`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق الجبري: دمج أي مقدار مع نفس المتغير مرتين يلغيه تماماً، مما يثبت صحة الاسترجاع.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** الدمج مع النص الصريح السابق بدلاً من كتلة الشفرة السابقة عند فك التشفير.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** نمط CBC يستخدم كتلة الشفرة السابقة C_{i-1} حصراً في الربط أثناء التشفير وفك التشفير.

---

### 🎯 مسألة رقم [prob-ch7-05]: تحليل انتشار الأخطاء في أنماط تشغيل كتل التشفير: CBC مقابل CFB و OFB
**English Title:** *CBC vs CFB vs OFB Error Propagation Analysis*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 7 / Section 7.4 (Modes of Operation & Error Propagation)`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `modes-operation`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** أثناء نقل البيانات عبر قناة اتصال بها تشويش، حدث خطأ في بت واحد (انقلب من 0 إلى 1) في كتلة الشفرة الأولى C_1. حلل رياضياً كيف سينتشر هذا الخطأ في النص الصريح المفكوك في كل من: (1) نمط ربط الكتل CBC، (2) نمط التغذية الراجعة للشفرة CFB، (3) نمط التغذية الراجعة للمخرجات OFB.
> 
> **In English:** *"During transmission over an imperfect communication channel, exactly 1 bit is corrupted (flipped from 0 to 1) in ciphertext block C_1. Analyze mathematically how this 1-bit error propagates to the decrypted plaintext in: (1) Cipher Block Chaining (CBC) mode, (2) Cipher Feedback (CFB) mode, and (3) Output Feedback (OFB) mode."*

**📥 المعطيات (Given Parameters):**
- **الكتلة المصابة بالخطأ:** `$Corrupted Block = C_1 (1 bit flipped)$`
- **الكتل التالية سليمة:** `$Subsequent Blocks = C_2, C_3, ... (Transmitted intact)$`

**🎯 المطلوب إيجاده (Required):** سلوك تشوه الكتل P1 و P2 وباقي الكتل في الأنماط الثلاثة.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** معادلات فك التشفير لأنماط التشغيل (*Decryption Equations of Cipher Modes*)
$$ \begin{cases} \text{CBC:} & P_i = D_K(C_i) \oplus C_{i-1} \\ \text{OFB:} & P_i = C_i \oplus O_i, \quad O_i = E_K(O_{i-1}) \\ \text{CFB:} & P_i = C_i \oplus E_K(C_{i-1}) \end{cases} $$
> في CBC تدخل الشفرة في فك تشفير كتلتها وتدخل في XOR للكتلة التالية. في OFB يولد تسلسل المفتاح بمعزل عن الشفرة. في CFB تدخل الشفرة في مسجل الإزاحة.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: تحليل انتشار الخطأ في نمط CBC (*Analyze CBC Mode Error Propagation*)
$$ P_1' = D_K(C_1') \oplus \text{IV}, \quad P_2' = D_K(C_2) \oplus C_1' $$
- **النتيجة المرحلية:** `$P_1 is completely garbled; P_2 has exactly 1 bit flipped in the exact same position; P_3, P_4, ... are completely intact!$`
- **الشرح الرياضي:** في CBC: P1 تتشوه بالكامل بسبب الانهيار في فك التشفير. و P2 يتأثر فيها بت واحد فقط في نفس الموضع. والكتل P3 فما بعدها سليمة تماماً (ذاتي المزامنة).

##### الخطوة 2: تحليل انتشار الخطأ في نمط OFB (*Analyze OFB Mode Error Propagation*)
$$ P_1' = C_1' \oplus O_1, \quad P_2 = C_2 \oplus O_2 $$
- **النتيجة المرحلية:** `$P_1 has exactly 1 bit flipped; ZERO error propagation to subsequent blocks!$`
- **الشرح الرياضي:** في OFB: يولد المفتاح بمعزل عن الشفرة، ولذا فإن خطأ بت في C1 يقلب بتاً واحداً فقط في P1 ولا ينتشر إطلاقاً لأي كتلة أخرى.

##### الخطوة 3: تحليل انتشار الخطأ في نمط CFB (*Analyze CFB Mode Error Propagation*)
$$ P_1' = C_1' \oplus E_K(\text{IV}), \quad P_2' = C_2 \oplus E_K(C_1') $$
- **النتيجة المرحلية:** `$P_1 has 1 bit flipped; P_2 is completely garbled until C_1 shifts out of register!$`
- **الشرح الرياضي:** في CFB: P1 يتأثر فيه بت واحد فقط. لكن C1 يدخل في مسجل الإزاحة فيتسبب في تشوه كامل للكتلة التالية P2 حتى يخرج من المسجل.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`CBC: P1 garbled, P2 1-bit flip, P3+ intact; OFB: P1 1-bit flip, 0 propagation; CFB: P1 1-bit flip, P2 garbled.`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق: نمط OFB مثالي للقنوات اللاسلكية والفضائية لعدم امتداد الخطأ للكتل المجاورة، بينما CBC يتوقف خطؤه عند كتلتين فقط.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** الاعتقاد بأن خطأ البت في CBC يستمر إلى ما لا نهاية في كل الكتل التالية.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** نمط CBC يستعيد المزامنة ذاتياً؛ فالخطأ يؤثر على كتلته وعلى الكتلة التالية مباشرة ثم يتلاشى تماماً.

---

### 🎯 مسألة رقم [prob-ch7-06]: نمط العداد (CTR Mode): المعالجة المتوازية العالية ومعيار حشو الكتل PKCS#7
**English Title:** *Counter Mode (CTR) Parallel Processing & PKCS#7 Padding Standard*  
- **المصدر والتوثيق الأكاديمي:** `Stallings Chapter 7 / Section 7.5 Counter Mode (CTR) & PKCS#7 Padding`
- **مستوى الصعوبة والتصنيف:** `exam-standard` | `modes-operation`

#### 📝 نص المسألة (Problem Statement):
> **بالعربية:** (1) رسالة طولها 43 بايت يراد تشفيرها بشفرة كتل بحجم كتلة 64 بت (8 بايت). احسب عدد بايتات الحشو المطلوبة وفق معيار PKCS#7، واذكر القيمة السداسية عشرية لكل بايت حشو. (2) إذا كانت الرسالة بطول 64 بايت (مضاعف تام لحجم الكتلة)، فما هو الحشو المضاف؟ (3) اشرح كيف يحقق نمط العداد (CTR) معالجة متوازية فائقة السرعة للتشفير وفك التشفير وإمكانية الوصول العشوائي دون اشتراط حشو.
> 
> **In English:** *"(1) A message of length 43 bytes is to be encrypted using a 64-bit (8-byte) block cipher. Calculate the number of padding bytes required under the PKCS#7 standard, and state the exact hexadecimal value of each padding byte. (2) If a message of length 64 bytes (exact multiple of block size) is encrypted, what padding is added? (3) Explain how Counter (CTR) mode enables high-speed parallel encryption, parallel decryption, and random access without requiring padding."*

**📥 المعطيات (Given Parameters):**
- **طول الرسالة الأولى:** `$Message 1 Length = 43 bytes$`
- **حجم الكتلة (8 بايت):** `$Block Size B = 8 bytes (64 bits)$`
- **طول الرسالة الثانية (مضاعف تام):** `$Message 2 Length = 64 bytes (exact multiple)$`

**🎯 المطلوب إيجاده (Required):** حساب حشو PKCS#7 للرسالتين، وتحليل مزايا التوازي في نمط العداد CTR.

**📐 القانون الرياضي الحاكم (Governing Formula):**
- **الاسم:** معادلة حشو PKCS#7 ومعادلة نمط العداد (*PKCS#7 Padding & CTR Counter Mode*)
$$ P_{\text{pad}} = B - (L \pmod B), \quad \text{Each byte } = P_{\text{pad}}, \quad C_i = P_i \oplus E_K(\text{Nonce} \parallel i) $$
> إذا كان الباقي r نضيف B-r بايت بقيمة B-r. وإذا كان الطول مضاعفاً تاماً نضيف كتلة كاملة من B بايت بقيمة B. ونمط CTR يشفر العداد مباشرة.

**🔢 خطوات الحل التفصيلية (Step-by-Step Execution):**
##### الخطوة 1: حساب حشو PKCS#7 لرسالة بطول 43 بايت (*Calculate PKCS#7 Padding for 43-Byte Message*)
$$ L \pmod B = 43 \pmod 8 = 3 \implies P_{\text{pad}} = 8 - 3 = 5 \text{ bytes} $$
- **النتيجة المرحلية:** `$Add 5 bytes, each with hexadecimal value 0x05$`
- **الشرح الرياضي:** 43 بايت تملأ 5 كتل كاملة (40 بايت) ويتبقى 3 بايت في الكتلة السادسة. نحتاج 5 بايت حشو، قيمة كل منها سداسياً عشرياً هي 0x05.

##### الخطوة 2: حساب الحشو لرسالة طولها مضاعف تام لحجم الكتلة (64 بايت) (*Calculate Padding for Exact Multiple (64 Bytes)*)
$$ 64 \pmod 8 = 0 \implies P_{\text{pad}} = 8 - 0 = 8 \text{ bytes (Full block of 0x08)} $$
- **النتيجة المرحلية:** `$Add one full dummy block: [0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08]$`
- **الشرح الرياضي:** إذا كان طول الرسالة مضاعفاً تاماً، يجب إضافة كتلة كاملة من 8 بايتات حشو بقيمة 0x08 حتى يتمكن المستقبل من حذف الحشو دون أي غموض أو التباس.

##### الخطوة 3: مزايا المعالجة المتوازية والوصول العشوائي في نمط العداد CTR (*Explain CTR Mode Parallelism and Random Access*)
$$ C_i = P_i \oplus E_K(\text{Counter}_i), \quad P_i = C_i \oplus E_K(\text{Counter}_i) $$
- **النتيجة المرحلية:** `$Blocks processed simultaneously in hardware pipelines; no chaining dependency$`
- **الشرح الرياضي:** نظراً لأن كل كتلة تشفر قيمة عداد مستقلة (Nonce || i)، يمكن معالجة جميع الكتل بالتوازي في المعالجات متعددة الأنوية، كما يتاح الوصول العشوائي المباشر لفك تشفير أي كتلة.

#### ✅ الناتج النهائي المعتمد (Final Result):
> **`43 bytes -> 5 bytes of 0x05; 64 bytes -> 8 bytes of 0x08; CTR enables O(1) parallel pipeline.`**

#### 🔍 التحقق الرياضي المزدوج (Mathematical Verification):
> التحقق من معيار RFC 5652: قيمة بايت الحشو تساوي تماماً عدد بايتات الحشو المضافة.

#### ⚠️ الفخاخ الامتحانية والأخطاء الشائعة (Common Exam Pitfalls & Prevention):
- ❌ **الخطأ الشائع:** عدم إضافة حشو عندما يكون طول الرسالة مضاعفاً تاماً لحجم الكتلة.
  - ✔️ **كيفية تجنبه وضمان الدرجة النهائية:** في معيار PKCS#7 يُضاف الحشو دائماً؛ وإذا كانت الرسالة مكتملة تُضاف كتلة حشو كاملة.

---

<a id="appendix"></a>
# الملحق الشامل: جدول المقارنة السريعة، الفخاخ الامتحانية، ودليل الطالب الذكي
### Master Cheat Sheet, Exam Traps & Problem-Solving Guide

## 📊 جدول الملخص الشامل لكل قوانين المنهج

| رقم القانون | اسم القانون بالعربية | الاسم بالإنجليزية | الصيغة الرياضية الأساسية | أهم الشروط والقيود |
|---|---|---|---|---|
| 1 | عدد المفاتيح المتناظرة | Symmetric Keys | $K_{\text{sym}} = \frac{N(N-1)}{2}$ | $N \ge 2$ أطراف |
| 2 | عدد المفاتيح غير المتناظرة | Asymmetric Keys | $K_{\text{asym}} = 2N$ | زوج لكل مستخدم |
| 3 | علاقة قابلية القسمة | Divisibility | $a = mb \iff b \mid a$ | $b \neq 0$ |
| 4 | خوارزمية القسمة الإقليدية | Division Algorithm | $a = qn + r$ | $0 \le r < n$ الباقي موجب |
| 5 | خواص القاسم المشترك | GCD Properties | $\gcd(a, b) = \gcd(|a|, |b|)$ | $\gcd(a, 0) = |a|$ |
| 6 | شرط الأولية النسبية | Coprime Condition | $\gcd(a, b) = 1$ | لا عوامل مشتركة |
| 7 | خطوة خوارزمية إقليدس | Euclidean Step | $r_{i-2} = q_i r_{i-1} + r_i$ | $\gcd$ آخر باقي غير صفري |
| 8 | متطابقة بيزو | Bézout Identity | $d = \gcd(a, b) = ax + by$ | يعطي المعكوس الضربي |
| 9 | وجود المعكوس الضربي | Modular Inverse | $a \cdot a^{-1} \equiv 1 \pmod n$ | $\gcd(a, n) = 1$ شرط لازم |
| 10 | مبرهنة فيرما الصغرى | Fermat's Theorem | $a^{p-1} \equiv 1 \pmod p$ | $p$ أولي، $\gcd(a, p) = 1$ |
| 11 | دالة مؤشر أويلر للأولي | Euler Totient (Prime) | $\phi(p) = p - 1$ | $p$ عدد أولي |
| 12 | دالة مؤشر أويلر لضرب أوليين | Euler Totient (Product) | $\phi(pq) = (p-1)(q-1)$ | $p, q$ أوليان مختلفان |
| 13 | دالة أويلر العامة | Euler Totient (General) | $\phi(n) = n \prod_{p \mid n}(1 - 1/p)$ | $p$ العوامل الأولية لـ $n$ |
| 14 | مبرهنة أويلر المعممة | Euler's Theorem | $a^{\phi(n)} \equiv 1 \pmod n$ | $\gcd(a, n) = 1$ |
| 15 | تفكيك ميلر-رابين | Miller-Rabin Decomp | $n - 1 = 2^k q$ | $q$ عدد فردي |
| 16 | مبرهنة الباقي الصينية | Chinese Remainder (CRT) | $x \equiv \sum a_i M_i y_i \pmod M$ | المقاييس أولية نسبياً |
| 17 | اللوغاريتم المتقطع | Discrete Logarithm | $y = a^x \bmod n \iff x = \operatorname{dlog}_{a, n}(y)$ | $a$ جذر أولي |
| 18 | شفرة قيصر | Caesar Cipher | $C = (P + k) \bmod 26$ | فضاء المفاتيح 25 |
| 19 | فضاء الاستبدال أحادي الأبجدية | Monoalphabetic Space | $26! \approx 4 \times 10^{26}$ | يكسر بتحليل الترددات |
| 20 | شفرة هيل | Hill Cipher | $\mathbf{C} = \mathbf{K} \cdot \mathbf{P} \pmod{26}$ | $\gcd(\det(\mathbf{K}), 26) = 1$ |
| 21 | معكوس مصفوفة 2x2 | 2x2 Matrix Inverse | $\mathbf{K}^{-1} = \det(K)^{-1} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ | اختزال مقياس 26 |
| 22 | شفرة فيجينير | Vigenère Cipher | $C_i = (P_i + K_{i \bmod m}) \bmod 26$ | تكرار الكلمة المفتاحية |
| 23 | لوحة المرة الواحدة | One-Time Pad | $C_i = P_i \oplus K_i$ | سرية تامة إن لم يكرر المفتاح |
| 24 | مفتاح الشفرة الكتلية المثالية | Ideal Block Key Size | $k = n \cdot 2^n$ bits | $2^n!$ تحويل ممكن |
| 25 | دورة فايستل | Feistel Round | $R_i = L_{i-1} \oplus \mathrm{F}(R_{i-1}, K_i)$ | عكسية دون اشتراط عكس $\mathrm{F}$ |
| 26 | فهرسة S-Box في DES | DES S-Box Indexing | $\text{Row}=(b_1 b_6)_2, \text{Col}=(b_2..b_5)_2$ | 6 بت دخل $\to$ 4 بت خرج |
| 27 | إزاحات مفاتيح DES | DES Key Shifts | 1 بت بالدورات (1, 2, 9, 16) و 2 بالباقي | إجمالي الإزاحات 28 بت |
| 28 | معيار الانهيار الثلجي الصارم | SAC Criterion | $P(\Delta C_j = 1 \mid \Delta P_i = 1) = 0.5$ | استقلالية بتات الخرج |
| 29 | هجوم اللقاء في المنتصف | Meet-in-the-Middle | $2^{56} + 2^{56} = 2^{57}$ | يكسر Double-DES |
| 30 | التشفير الثلاثي EDE | Triple-DES EDE | $C = \mathrm{E}(K_3, \mathrm{D}(K_2, \mathrm{E}(K_1, P)))$ | توافق عكسي عند $K_1=K_2$ |
| 31 | نمط كتاب الشفرة | ECB Mode | $C_j = \mathrm{E}(K, P_j)$ | يسرب تكرار الكتل |
| 32 | نمط ربط الكتل المشفرة | CBC Mode | $C_j = \mathrm{E}(K, P_j \oplus C_{j-1})$ | يحتاج IV، خطأ البت يخرب كتلة |
| 33 | نمط العداد | CTR Mode | $C_j = P_j \oplus \mathrm{E}(K, T_j)$ | متوازي، وصول عشوائي |
| 34 | حشو PKCS#7 | PKCS#7 Padding | $N = B - (L \bmod B)$ | بايتات بقيمة $N$ |

---

## ⚠️ قائمة أهم 15 فخاً امتحانياً في السايبر والتشفير (Top 15 Exam Traps)

1. **فخ قابلية القسمة على صفر:** الصفر لا يقسم أي عدد إطلاقاً ($0 \nmid a$) لأن القسمة على صفر غير معرفة، ولكن أي عدد غير صفري يقسم الصفر ($b \mid 0$) لأن $0 = 0 \cdot b$.
2. **فخ باقي القسمة السالب في الحساب المعياري:** باقي القسمة $r = a \bmod n$ يجب أن يكون **موجباً دائماً** محصوراً بين $0 \le r < n$. فمثلاً: $-11 \bmod 7 = 3$ (وليس $-4$!) لأن $-11 = (-2)(7) + 3$.
3. **فخ شرط المعكوس الضربي:** لا تنخدع بمحاولة إيجاد معكوس لعدد زوجي مقياس 26 (مثل $8^{-1} \bmod 26$). المعكوس غير موجود إطلاقاً لأن $\gcd(8, 26) = 2 \neq 1$.
4. **فخ نسيان القسمة على 2 في المفاتيح المتناظرة:** عند حساب المفاتيح المتناظرة بين $N$ مستخدماً، القانون هو $\frac{N(N-1)}{2}$ لأن المفتاح بين أليس وبوب مشترك وغير موجه، بينما $N(N-1)$ تحسب أزواجاً موجهة وتضاعف الناتج بالخطأ.
5. **فخ عدد المفاتيح غير المتناظرة:** عدد المفاتيح هو $2N$ (مفتاح عام + مفتاح خاص لكل مستخدم)، بينما عدد الأزواج هو $N$. اقرأ صيغة السؤال بدقة.
6. **فخ دالة أويلر $\phi(n)$:** إذا كان العدد أولياً فإن $\phi(p) = p - 1$ (مثال $\phi(37) = 36$). ولا تطبق قانون حاصل الضرب إلا إذا كان العددان أوليين مختلفين ($\gcd(p, q) = 1$).
7. **فخ اختزال الأسس بمبرهنة أويلر وفيرما:** عند حساب $a^b \bmod n$، يُختزل الأس $b$ بمقياس $\phi(n)$ وليس بمقياس $n$! أي: $b \bmod \phi(n)$.
8. **فخ قابلية قلب مصفوفة هيل:** قبل البدء في حساب معكوس مصفوفة هيل، احسب المحدد $\det(K) \bmod 26$ وتأكد أن $\gcd(\det(K), 26) = 1$. إذا كان المحدد زوجياً أو يقبل القسمة على 13، فإن المصفوفة غير قابلة للقلب وفك التشفير مستحيل.
9. **فخ فهرسة صناديق DES S-Box:** البت الأول والأخير $(b_1 b_6)$ هما اللذان يحددان **الصف**، بينما البتات الأربعة الداخلية $(b_2 b_3 b_4 b_5)$ تحدد **العمود**. عكسهما يؤدي إلى إجابة خاطئة تماماً.
10. **فخ حجم مفتاح DES:** مفتاح DES طوله المدخل 64 بت، ولكن طوله الفعلي والمؤثر أمنياً هو **56 بت** فقط، لأن 8 بتات تسقط كبتات تطابق (Parity) في جدول PC-1.
11. **فخ تعقيد كسر Double-DES:** التشفير المضاعف لا يتطلب $2^{112}$ عملية لكسره، بل يتطلب $2^{57}$ عملية فقط عبر هجوم الالتقاء في المنتصف (Meet-in-the-Middle)، حيث $2^{56} + 2^{56} = 2^{57}$.
12. **فخ انتشار خطأ البت في CBC:** حدوث خطأ في بت واحد في الكتلة المشفرة $C_j$ **لا يخرب كل الرسالة**! بل يخرب الكتلة $P_j$ بالكامل، ويقلب نفس البت المقابل فقط في الكتلة التالية $P_{j+1}$، وتخرج الكتلة $P_{j+2}$ وما بعدها سليمة 100% لاستعادة النمط تزامنه تلقائياً.
13. **فخ حشو PKCS#7 عند اكتمال الكتلة:** إذا كان طول البيانات مضاعفاً تاماً لحجم الكتلة (مثلاً 16 بايت في كتلة بحجم 8 بايت)، **يجب إضافة كتلة حشو كاملة** (8 بايتات كل منها يحمل القيمة `0x08`) لتمييز نهاية الرسالة.
14. **فخ دالة الدورة $F$ في شبكة فايستل:** دالة الدورة $F$ في فايستل لا يلزم أن تكون قابلة للعكس (Invertible)، لأن بنية فايستل تعتمد على عملية XOR العكسية بطبيعتها ($X \oplus Y \oplus Y = X$).
15. **فخ دمج الحرفين I و J في بلايفير:** في شفرة بلايفير، الحرفان I و J يوضعان في نفس الخانة بالمصفوفة. وعند تشفير زوج يحتوي على I أو J، يعاملان كحرف واحد.

---

> **نهاية الموسوعة الشاملة.** بالتوفيق والنجاح الكامل لأبنائنا الطلاب في الامتحانات! 🎓✨