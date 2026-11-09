import re

ch1_examples = {
    'ch1-l1': r"""workedExamples: [
              {
                id: 'ex-four-crypto-areas-banking',
                title: 'Cryptographic Area Selection for Secure Online Banking',
                titleAr: 'اختيار المجال التشفيري المناسب في المعاملات المصرفية الإلكترونية',
                problem: 'An online banking customer transfers $10,000 to an international vendor. Identify which of the 4 cryptographic algorithm areas must protect each phase of the transaction.',
                problemAr: 'يقوم عميل بنك بتحويل مبلغ 10000 دولار إلى مورد دولي. حدد أياً من مجالات التشفير الأربعة يحمي كل مرحلة من مراحل المعاملة.',
                steps: [
                  {
                    stepNumber: 1,
                    label: 'Authentication Protocols Phase',
                    labelAr: 'مرحلة بروتوكولات المصادقة',
                    math: '\\text{Mutual Authentication: Customer} \\xleftrightarrow{\\text{TLS Handshake}} \\text{Bank Server}',
                    explanation: 'Authentication protocols verify the authentic identity of the bank to the user (preventing phishing) and authenticate user credentials (via 2FA/tokens).',
                    explanationAr: 'تثبت بروتوكولات المصادقة هوية الخادم للمستخدم وهوية المستخدم للخادم وتمنع هجمات التصيد.',
                    intermediateResult: 'Area 4: Authentication Protocols',
                  },
                  {
                    stepNumber: 2,
                    label: 'Asymmetric Encryption Phase',
                    labelAr: 'مرحلة التشفير اللاتناظري (المفتاح العام)',
                    math: '\\text{RSA / ECDHE Key Exchange: } K_{\\text{session}} \\text{ shared securely}',
                    explanation: 'Asymmetric encryption safely distributes an ephemeral symmetric session key across the untrusted Internet without a prior shared secret.',
                    explanationAr: 'يستخدم التشفير اللاتناظري لتبادل وتوزيع مفتاح الجلسة التناظري بأمان تام عبر الإنترنت.',
                    intermediateResult: 'Area 2: Asymmetric Encryption',
                  },
                  {
                    stepNumber: 3,
                    label: 'Symmetric Encryption Phase',
                    labelAr: 'مرحلة التشفير التناظري (المفتاح السري)',
                    math: 'C = E(K_{\\text{session}}, \\text{Account Payload})',
                    explanation: 'Symmetric encryption (AES-256) provides high-speed confidentiality for account numbers, balances, and wire details.',
                    explanationAr: 'يوفر التشفير التناظري سرية عالية السرعة لأرقام الحسابات والأرصدة وتفاصيل الحوالة.',
                    intermediateResult: 'Area 1: Symmetric Encryption',
                  },
                  {
                    stepNumber: 4,
                    label: 'Data Integrity Algorithms Phase',
                    labelAr: 'مرحلة خوارزميات سلامة البيانات والتوقيع',
                    math: '\\text{HMAC-SHA256} / \\text{Digital Signature on Amount } \\$10,000',
                    explanation: 'Data integrity algorithms (HMAC/SHA) guarantee that an attacker in the middle cannot alter $10,000 into $100,000 undetected.',
                    explanationAr: 'تضمن خوارزميات السلامة عدم إمكانية تعديل مبلغ الحوالة من قبل أي وسيط أثناء الإرسال.',
                    intermediateResult: 'Area 3: Data Integrity Algorithms',
                  },
                ],
                result: 'All 4 cryptographic areas operate in synergy to secure modern electronic financial transactions.',
                verification: 'Removing any single area leaves the system critically vulnerable to identity theft, interception, or unauthorized alteration.',
              },
            ],""",

    'ch1-l4': r"""workedExamples: [
              {
                id: 'ex-cia-triad-hospital',
                title: 'Hospital System Security Objective Breach Analysis (FIPS 199)',
                titleAr: 'تحليل انتهاك أهداف أمن المعلومات في مستشفى وفق معيار FIPS 199',
                problem: 'A ransomware attack encrypts an intensive care unit (ICU) patient monitoring database. Classify the breached security objective, its impact level (FIPS 199), and distinguish it from privacy loss.',
                problemAr: 'هجوم فدية شفر قاعدة بيانات مراقبة المرضى في العناية المركزة. صنف الهدف الأمني المنتهك ومستوى التأثير وفق FIPS 199 وميزه عن فقدان الخصوصية.',
                steps: [
                  {
                    stepNumber: 1,
                    label: 'Identify Breached Security Objective',
                    labelAr: 'تحديد الهدف الأمني المنتهك في ثالوث CIA',
                    math: '\\text{Breach} = \\text{Availability (الوفور والإتاحة)}',
                    explanation: 'Availability ensures timely and reliable access to and use of information. When doctors cannot access real-time vital stats, availability is completely denied.',
                    explanationAr: 'الوفور يضمن الوصول الموثوق وفي الوقت المناسب للمعلومات. تشفير البيانات منع الأطباء من الوصول إليها فوراً.',
                    intermediateResult: 'Primary Breach: Availability',
                  },
                  {
                    stepNumber: 2,
                    label: 'Evaluate FIPS 199 Potential Impact Level',
                    labelAr: 'تقييم مستوى التأثير الأكاديمي وفق FIPS 199',
                    math: '\\text{Impact} = \\text{HIGH (عالي الخطورة)}',
                    explanation: 'Under FIPS 199, an event that can result in severe loss of life or catastrophic degradation of mission capability is strictly rated as HIGH impact.',
                    explanationAr: 'بحسب FIPS 199، أي حدث يعرض حياة المرضى للخطر أو يشل المهمة الحيوية يصنف تأثيره كـ HIGH.',
                    intermediateResult: 'Impact Rating: High',
                  },
                  {
                    stepNumber: 3,
                    label: 'Contrast with Confidentiality / Privacy',
                    labelAr: 'المقارنة مع سرية البيانات والخصوصية',
                    math: '\\text{Privacy} = \\text{Unauthorized disclosure of personal health info (PHI)}',
                    explanation: 'If the attacker merely encrypted the files without exfiltrating or publishing them, Availability was catastrophically lost while Confidentiality remained unbreached.',
                    explanationAr: 'إذا شفرت البيانات دون تسريبها، فقد انهار الوفور تماماً بينما بقيت السرية غير مخترقة، مما يثبت استقلالية أهداف ثالوث CIA.',
                  },
                ],
                result: 'Objective Breached: Availability; FIPS 199 Impact: High; Demonstrates the independence of CIA components.',
                verification: 'Availability failure directly impairs patient life safety even when confidentiality is preserved.',
              },
            ],""",

    'ch1-l8': r"""workedExamples: [
              {
                id: 'ex-passive-attacks-defense',
                title: 'Passive Attacks Nature and Defense Doctrine (Prevention vs Detection)',
                titleAr: 'طبيعة الهجمات السلبية وعقيدة الدفاع: الوقاية مقابل الكشف',
                problem: 'Explain why passive attacks cannot be detected in transmission, and demonstrate how traffic analysis is mitigated using traffic padding.',
                problemAr: 'علل لماذا يستحيل كشف الهجمات السلبية في قناة الإرسال، ووضح كيف يتم إحباط تحليل حركة المرور بحشو البيانات.',
                steps: [
                  {
                    stepNumber: 1,
                    label: 'Nature of Passive Attacks (Eavesdropping & Traffic Analysis)',
                    labelAr: 'طبيعة الهجوم السلبي في خطوط الاتصال',
                    math: '\\Delta(\\text{Data}) = 0, \\quad \\Delta(\\text{State}) = 0 \\implies \\text{Inaudible / Invisible}',
                    explanation: 'Passive attacks do not alter the message, delete packets, or inject new data. The transmission channel remains physically unchanged, making real-time detection impossible.',
                    explanationAr: 'الهجوم السلبي يتنصت دون أي تعديل على الرسالة أو القناة، فلا يترك أي أثر فيزيائي يمكن لأجهزة الشبكة رصده.',
                    intermediateResult: 'Detection = Impossible',
                  },
                  {
                    stepNumber: 2,
                    label: 'Core Defense Doctrine: Prevention Over Detection',
                    labelAr: 'عقيدة الدفاع الرسمية: الوقاية وليس الكشف',
                    math: '\\text{Doctrine: } \\mathbf{Prevention} \\text{ (via strong encryption and traffic padding)}',
                    explanation: 'Because passive attacks cannot be detected, security engineering must focus 100% on PREVENTION (encipherment).',
                    explanationAr: 'نظراً لاستحالة الكشف، تركز هندسة أمن الشبكات بالكامل على الوقاية المسبقة بالتشفيـر القوي.',
                  },
                  {
                    stepNumber: 3,
                    label: 'Traffic Padding Mechanism Against Traffic Analysis',
                    labelAr: 'آلية حشو حركة المرور لمنع استنتاج الأنماط',
                    math: '\\text{Channel Rate} = C_0 \\; (\\text{constant rate continuous dummy stream})',
                    explanation: 'By continuously transmitting ciphertext dummy blocks at a constant bitrate regardless of actual user activity, adversaries cannot infer military or trade volume bursts.',
                    explanationAr: 'بإرسال تيار مشفر وهمي بمعدل ثابت مستمر، يستحيل على العدو استنتاج فترات الذروة أو مواقع القادة.',
                  },
                ],
                result: 'Passive attacks are undetectable in transmission; the fundamental defense is prevention via encryption and traffic padding.',
                verification: 'Official Stallings doctrine: "Passive attacks: prevention, not detection. Active attacks: detection and recovery."',
              },
            ],""",

    'ch1-l9': r"""workedExamples: [
              {
                id: 'ex-active-attacks-taxonomy',
                title: 'Active Attack Classification and Detection Architecture',
                titleAr: 'تصنيف الهجمات النشطة الأربعة ومعمارية كشفها',
                problem: 'Classify an attack where an adversary intercepts an encrypted payment instruction C, stores it, and re-transmits it three hours later to trigger a duplicate payment.',
                problemAr: 'صنف الهجوم الذي يقوم فيه المعتدي باعتراض أمر دفع مشفر C وتخزينه ثم إعادة إرساله بعد ثلاث ساعات لإجراء دفع مكرر، واذكر آلية صده.',
                steps: [
                  {
                    stepNumber: 1,
                    label: 'Identify Attack Category',
                    labelAr: 'تحديد فئة الهجوم من بين الهجمات النشطة الأربعة',
                    math: '\\text{Category: } \\mathbf{Replay Attack} \\; (\\text{إعادة الإرسال})',
                    explanation: 'The adversary does not need to decrypt or alter C. Merely capturing valid ciphertext and resending it constitutes an unauthorized active replay.',
                    explanationAr: 'لم يحتج المهاجم لفك تشفير الرسالة ولا تعديلها، بل قام بإعادة إرسال نفس الأمر الصالح لإحداث ضرر مالي.',
                    intermediateResult: 'Attack = Replay Attack',
                  },
                  {
                    stepNumber: 2,
                    label: 'Distinguish from Other 3 Active Attacks',
                    labelAr: 'التمييز عن الهجمات النشطة الثلاث الأخرى',
                    math: '\\begin{array}{ll} \\text{1. Masquerade:} & \\text{Pretending to be a different entity} \\\\ \\text{2. Modification:} & \\text{Altering message content or ordering} \\\\ \\text{3. Denial of Service:} & \\text{Disrupting access to servers or communications} \\end{array}',
                    explanation: 'A replay attack uses genuine, unmodified data transmitted out of temporal sequence.',
                    explanationAr: 'يتميز هجوم إعادة الإرسال بأنه يستخدم بيانات أصلية غير معدلة ولكن في غير توقيتها المصرح به.',
                  },
                  {
                    stepNumber: 3,
                    label: 'Defensive Countermeasure Specification',
                    labelAr: 'آلية الدفاع الهندسية المعتمدة',
                    math: '\\text{Defense: Sequential Nonces} \\; (N_i) \\; \\lor \\; \\text{Cryptographic Timestamps} \\; (T_i)',
                    explanation: 'Each message must carry a strictly increasing sequence number or authenticated timestamp. Stale or duplicate sequence numbers are instantly discarded by the receiver.',
                    explanationAr: 'تضمين رقم تسلسلي عشوائي غير مكرر (Nonce) أو ختم زمني مشفر، حيث يرفض المستقبل أي أمر مكرر فوراً.',
                  },
                ],
                result: 'Classification: Replay Attack; Countermeasure: Timestamps, sequence numbers, and freshness nonces.',
                verification: 'Active attacks are difficult to prevent completely; the goal is prompt detection and automated state recovery.',
              },
            ],""",

    'ch1-l16': r"""workedExamples: [
              {
                id: 'ex-net-sec-model-tasks',
                title: 'The 4 Fundamental Tasks in Designing Network Security Services (Figure 1.5)',
                titleAr: 'المهام الأربع الأساسية في تصميم خدمات أمن الشبكات (شكل 1.5)',
                problem: 'Detail the 4 sequential engineering tasks mandated by William Stallings Figure 1.5 model for designing any network security service.',
                problemAr: 'اشرح بالتفصيل المهام الهندسية الأربع المتتابعة التي يفرضها نموذج أمن الشبكات (شكل 1.5) لتصميم أي خدمة أمان.',
                steps: [
                  {
                    stepNumber: 1,
                    label: 'Task 1: Design a Transformation Algorithm',
                    labelAr: 'المهمة الأولى: تصميم خوارزمية التحويل',
                    math: 'T(P, K) \\to C \\quad \\text{such that opponent cannot invert without } K',
                    explanation: 'Design an encryption or hashing algorithm that transforms plaintext into a form incomprehensible to adversaries.',
                    explanationAr: 'تصميم خوارزمية رياضية تشفر النص الأصلي بحيث يستحيل على العدو فكها دون امتلاك المفتاح.',
                    intermediateResult: 'Task 1: Algorithm Design',
                  },
                  {
                    stepNumber: 2,
                    label: 'Task 2: Generate Secret Information (Keys)',
                    labelAr: 'المهمة الثانية: توليد المعلومات السرية (المفاتيح)',
                    math: 'K \\xleftarrow{\\text{TRNG / CSPRNG}} \\{0, 1\\}^{128} \\; (\\text{Cryptographically strong entropy})',
                    explanation: 'Generate the secret keys or parameters to be used in conjunction with the transformation algorithm.',
                    explanationAr: 'توليد المفاتيح السرية بعشوائية تامة وقوة إنتروبيا كافية لمنع التخمين.',
                    intermediateResult: 'Task 2: Key Generation',
                  },
                  {
                    stepNumber: 3,
                    label: 'Task 3: Develop Key Distribution & Sharing Methods',
                    labelAr: 'المهمة الثالثة: تطوير وسائل توزيع ومشاركة المفاتيح بأمان',
                    math: '\\text{Secure Channel / Diffie-Hellman / Public Key Infrastructure (PKI)}',
                    explanation: 'Develop robust protocols to safely distribute the secret key to legitimate communicating parties without interception.',
                    explanationAr: 'بناء وسيلة موثوقة لإيصال المفتاح للطرفين دون أن يتمكن المتنصت من معرفته.',
                    intermediateResult: 'Task 3: Key Distribution',
                  },
                  {
                    stepNumber: 4,
                    label: 'Task 4: Specify Operational Communication Protocol',
                    labelAr: 'المهمة الرابعة: تحديد بروتوكول الاتصال التشغيلي',
                    math: '\\text{Protocol Rules: Message sequencing, handshake, error handling, session termination}',
                    explanation: 'Specify the exact protocol to be used by the principals to achieve the security goal reliably.',
                    explanationAr: 'تحديد خطوات وإجراءات تبادل الرسائل والتحقق ومعالجة الأخطاء وإنهاء الجلسة.',
                    intermediateResult: 'Task 4: Protocol Specification',
                  },
                ],
                result: 'Any network security service fundamentally consists of: Algorithm, Keys, Distribution, and Protocol.',
                verification: 'Failing to execute any one of the 4 tasks completely breaks the security perimeter.',
              },
            ],"""
}

path = "e:/EDU/crypto-edu/src/data/chapters/chapter1.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

lessons = sorted(ch1_examples.keys())
for l_id in lessons:
    pos = text.find(f"id: '{l_id}'")
    if pos == -1:
        print(f"Lesson {l_id} not found in {path}!")
        continue

    next_pos = text.find("id: 'ch1-l", pos + 10)
    if next_pos == -1:
        next_pos = len(text)

    lesson_chunk = text[pos:next_pos]

    we_pattern = re.compile(r'workedExamples:\s*\[[\s\S]*?\],\s*examNotes:', re.MULTILINE)
    m = we_pattern.search(lesson_chunk)
    if m:
        replacement = ch1_examples[l_id] + "\n            examNotes:"
        new_chunk = lesson_chunk[:m.start()] + replacement + lesson_chunk[m.end():]
        text = text[:pos] + new_chunk + text[next_pos:]
        print(f"Cleanly enriched {l_id}")
    else:
        print(f"Pattern not found in {l_id}")

with open(path, "w", encoding="utf-8") as f:
    f.write(text)
print("Chapter 1 updated successfully.")

