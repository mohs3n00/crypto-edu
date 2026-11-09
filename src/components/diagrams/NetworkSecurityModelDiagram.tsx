import React, { useState } from 'react';

export default function NetworkSecurityModelDiagram(): React.ReactElement {
  const [activeTask, setActiveTask] = useState<number>(1);

  const tasks = [
    {
      num: 1,
      title: 'Design Security Algorithm',
      titleAr: 'تصميم خوارزمية الأمان',
      desc: 'Design an algorithm for performing the security-related transformation. The algorithm should be such that an opponent cannot defeat its purpose.',
      descAr: 'تصميم خوارزمية رياضية قوية لإجراء التحويل التشفيري بحيث يعجز المهاجم عن فكها أو الالتفاف حولها.',
    },
    {
      num: 2,
      title: 'Generate Secret Information',
      titleAr: 'توليد المعلومات السرية (المفاتيح)',
      desc: 'Generate the secret information (e.g. cryptographic keys) to be used with the algorithm.',
      descAr: 'إنشاء المفاتيح السرية العشوائية القوية التي تُستخدم بالتزامن مع الخوارزمية.',
    },
    {
      num: 3,
      title: 'Secure Key Distribution',
      titleAr: 'التوزيع والتبادل الآمن للمفاتيح',
      desc: 'Develop secure methods for the distribution and sharing of the secret information between sender and receiver without interception.',
      descAr: 'تطوير آليات وقنوات مؤمنة لمشاركة وتوزيع المفاتيح السرية بين الطرفين أو عبر طرف ثالث موثوق.',
    },
    {
      num: 4,
      title: 'Specify Security Protocol',
      titleAr: 'تحديد وتوصيف البروتوكول الأمني',
      desc: 'Specify a communication protocol to be used by the two principals that makes use of the security algorithm and the secret information.',
      descAr: 'تحديد بروتوكول اتصال موحد يحدد تسلسل تبادل الرسائل التشفيرية ورموز التحقق بين الطرفين.',
    },
  ];

  const currentTask = tasks.find((t) => t.num === activeTask) || tasks[0];

  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            Model for Network Security (Figure 1.2)
          </h3>
          <p className="text-xs text-[#737373]">
            Components and the Four Fundamental Tasks for securing network communication
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          نموذج أمن الشبكات والمهام الأساسية الأربع
        </span>
      </div>

      {/* SVG Diagram */}
      <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md overflow-x-auto flex justify-center">
        <svg
          viewBox="0 0 740 240"
          className="w-full max-w-[1240px] select-none text-[#171717]"
          style={{ minWidth: 620 }}
        >
          <defs>
            <marker
              id="net-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
            </marker>
          </defs>

          {/* Trusted Third Party Box (Top) */}
          <rect
            x="270"
            y="10"
            width="200"
            height="46"
            rx="4"
            fill="#FFFFFF"
            stroke="#171717"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <text x="370" y="28" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#171717">
            Trusted Third Party
          </text>
          <text x="370" y="44" textAnchor="middle" fontSize="10" fill="#525252">
            (e.g., Key Distribution Center / CA)
          </text>

          {/* Dotted Lines from Third Party to Sender & Receiver */}
          <path
            d="M 320 56 L 220 100"
            fill="none"
            stroke="#171717"
            strokeWidth="1.25"
            strokeDasharray="3 3"
            markerEnd="url(#net-arrow)"
          />
          <path
            d="M 420 56 L 520 100"
            fill="none"
            stroke="#171717"
            strokeWidth="1.25"
            strokeDasharray="3 3"
            markerEnd="url(#net-arrow)"
          />

          {/* Sender */}
          <rect x="20" y="105" width="80" height="44" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="60" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#171717">Sender</text>
          <text x="60" y="139" textAnchor="middle" fontSize="9" fill="#525252">المرسل</text>

          <line x1="100" y1="127" x2="140" y2="127" stroke="#171717" strokeWidth="1.5" markerEnd="url(#net-arrow)" />

          {/* Security Transformation (Encryption) */}
          <rect x="145" y="105" width="130" height="44" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="210" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#171717">Security Transform</text>
          <text x="210" y="139" textAnchor="middle" fontSize="9" fill="#525252">تحويل أمني (تشفير)</text>

          <line x1="275" y1="127" x2="310" y2="127" stroke="#171717" strokeWidth="1.5" markerEnd="url(#net-arrow)" />

          {/* Information Channel with Opponent */}
          <rect
            x="315"
            y="95"
            width="110"
            height="64"
            rx="4"
            fill="#FAFAFA"
            stroke="#171717"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
          <text x="370" y="115" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#171717">Insecure Channel</text>
          <text x="370" y="129" textAnchor="middle" fontSize="9" fill="#525252">قناة غير مؤمنة</text>

          {/* Opponent box */}
          <rect x="325" y="175" width="90" height="35" rx="3" fill="#171717" />
          <text x="370" y="192" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">Opponent</text>
          <text x="370" y="204" textAnchor="middle" fontSize="8" fill="#E5E5E5">مهاجم / متصنت</text>

          <line x1="370" y1="160" x2="370" y2="173" stroke="#171717" strokeWidth="1.25" strokeDasharray="2 2" markerEnd="url(#net-arrow)" />

          <line x1="425" y1="127" x2="460" y2="127" stroke="#171717" strokeWidth="1.5" markerEnd="url(#net-arrow)" />

          {/* Security Transformation (Decryption/Verification) */}
          <rect x="465" y="105" width="130" height="44" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="530" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#171717">Security Transform</text>
          <text x="530" y="139" textAnchor="middle" fontSize="9" fill="#525252">تحويل أمني (فك شفرة)</text>

          <line x1="595" y1="127" x2="635" y2="127" stroke="#171717" strokeWidth="1.5" markerEnd="url(#net-arrow)" />

          {/* Receiver */}
          <rect x="640" y="105" width="80" height="44" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="680" y="125" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#171717">Receiver</text>
          <text x="680" y="139" textAnchor="middle" fontSize="9" fill="#525252">المستقبل</text>
        </svg>
      </div>

      {/* Four Fundamental Tasks Interactive Selector */}
      <div className="space-y-3">
        <span className="font-mono text-xs uppercase font-bold text-[#737373] block tracking-wider">
          The Four Fundamental Security Design Tasks (المهام الأساسية الأربع):
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {tasks.map((t) => {
            const isSelected = activeTask === t.num;
            return (
              <button
                key={t.num}
                type="button"
                onClick={() => setActiveTask(t.num)}
                className={`p-3 border rounded text-left transition-all ${
                  isSelected
                    ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
                    : 'border-[#E5E5E5] bg-[#FFFFFF] hover:bg-[#FAFAFA] text-[#171717]'
                }`}
              >
                <div className="font-mono text-xs font-bold">Task {t.num}</div>
                <div className="text-xs font-semibold truncate mt-0.5">{t.title}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Task Details */}
        <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md space-y-2">
          <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
            <h4 className="text-sm font-bold text-[#171717]">
              Task {currentTask.num}: {currentTask.title}
            </h4>
            <span
              dir="rtl"
              className="text-xs font-semibold text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {currentTask.titleAr}
            </span>
          </div>
          <p className="text-sm text-[#171717] leading-relaxed">{currentTask.desc}</p>
          <p dir="rtl" className="text-xs text-[#525252] font-serif" style={{ fontFamily: 'var(--font-arabic)' }}>
            {currentTask.descAr}
          </p>
        </div>
      </div>
    </div>
  );
}

