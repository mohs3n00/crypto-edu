# EDU — University Cryptography Learning Platform
### منصة التعليم الأكاديمي لمادة التشفير وأمن المعلومات

منصة تعليمية متكاملة لطلاب كلية الحاسبات والمعلومات (السنة الرابعة)، مصممة لدراسة ومراجعة منهج التشفير وأمن المعلومات (Cryptography & Information Security) وفق أحدث معايير التعليم التفاعلي والاسترجاع النشط (Active Recall).

---

## 🌐 الرابط المباشر (Live Deployment)

- **Cloudflare Pages Production URL:** [https://crypto-edu.pages.dev](https://crypto-edu.pages.dev)
- **Deployment Preview:** [https://379f6ef9.crypto-edu.pages.dev](https://379f6ef9.crypto-edu.pages.dev)

---

## 🚀 المميزات الرئيسية (Core Features)

1. **تغطية أكاديمية شاملة (Full Academic Coverage):**
   - الفصول الدراسية: الفصل الأول، الثاني، الثالث، الرابع، والسابع.
   - قوانين ونظريات رياضية دقيقة مع شروحات خطوة بخطوة باللغتين العربية والإنجليزية.

2. **الرسوم التوضيحية والخرائط الذهنية التفاعلية (Interactive Diagrams & Mind Maps):**
   - محاكيات حية لخوارزميات التشفير الكلاسيكية والحديثة (Caesar, Playfair, Hill, Vigenère, Vernam OTP, DES Key Schedule, Modes of Operation: ECB/CBC/CFB/OFB/CTR, Euclidean Ladder, Extended Euclidean, Fermat/Euler, Miller-Rabin, Chinese Remainder Theorem).
   - خرائط ذهنية تفاعلية تعرض العلاقات المفاهيمية بين النظريات والهجمات والتطبيقات.

3. **نظام استرجاع الكلمات المفتاحية (Keyword Recall System):**
   - نظام تدريبي مخصص يربط المصطلحات الأكاديمية بالتعريفات والشروط الرياضية ومؤشرات أسئلة الامتحانات عبر 6 أنماط تدريب مختلفة.

4. **المساعد الذكي السياقي (Contextual AI Help):**
   - إمكانية تحديد أي جزء أو نص أو معادلة والاستعانة بالمساعد الذكي (ChatGPT / Gemini) مع توجيه دقيق للأسئلة.

5. **بنك الأسئلة والامتحانات السابقة (Question Bank & Exam Traps):**
   - أسئلة الصواب والخطأ، الاختيار من متعدد، وحسابات رياضية مع توضيح فخاخ الامتحانات الجامعية الشائعة (Exam Traps).

---

## 🛠 التقنيات المستخدمة (Tech Stack)

- **Frontend:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS (تصميم أكاديمي أحادي اللون Monochrome)
- **Math Rendering:** KaTeX
- **Icons:** Lucide React
- **Deployment:** Cloudflare Pages (Wrangler CLI)
- **CI/CD & Source Control:** GitHub CLI (`gh`)

---

## 📦 التشغيل المحلي (Local Development)

```bash
# تثبيت التبعيات
npm install

# تشغيل خادم التطوير
npm run dev

# بناء النسخة الإنتاجية
npm run build

# النشر على Cloudflare Pages
npx wrangler pages deploy dist --project-name=crypto-edu
```
