import React, { useState } from 'react';

export default function NetworkAccessSecurityDiagram(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<'model' | 'threats'>('model');
  const [selectedThreat, setSelectedThreat] = useState<'info' | 'service'>('info');

  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            Network Access Security Model (Figure 1.3)
          </h3>
          <p className="text-xs text-[#737373]">
            Gatekeeper perimeter, Internal Security Controls, and Unwanted Access Threats
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          نموذج أمان الوصول للشبكة وتصنيف التهديدات (شكل 1.3)
        </span>
      </div>

      {/* View Switcher */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setActiveTab('model')}
          className={`py-2 px-3 border rounded text-xs font-medium transition-all ${
            activeTab === 'model'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:bg-[#FAFAFA]'
          }`}
        >
          <span className="font-bold block text-sm">Access Security Model Architecture</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">
            معمارية نموذج حراسة الوصول والضوابط الداخلية
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('threats')}
          className={`py-2 px-3 border rounded text-xs font-medium transition-all ${
            activeTab === 'threats'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:bg-[#FAFAFA]'
          }`}
        >
          <span className="font-bold block text-sm">Two Unwanted Access Threats</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">
            تهديدات الوصول للمعلومات مقابل تهديدات الخدمة
          </span>
        </button>
      </div>

      {activeTab === 'model' ? (
        /* Architecture SVG Diagram */
        <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md overflow-x-auto flex flex-col items-center">
          <svg
            viewBox="0 0 740 220"
            className="w-full max-w-[1240px] select-none text-[#171717]"
            style={{ minWidth: 620 }}
          >
            <defs>
              <marker
                id="acc-arr"
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

            {/* Opponent Block (Left) */}
            <rect x="20" y="40" width="130" height="90" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="85" y="70" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#171717">
              Opponent
            </text>
            <text x="85" y="88" textAnchor="middle" fontSize="9" fill="#525252">
              (e.g., hacker,
            </text>
            <text x="85" y="102" textAnchor="middle" fontSize="9" fill="#525252">
              software virus, worm)
            </text>
            <text x="85" y="120" textAnchor="middle" fontSize="8" fill="#737373" fontStyle="italic">
              خصم / برمجيات خبيثة
            </text>

            {/* Access Channel Arrow */}
            <line x1="150" y1="85" x2="260" y2="85" stroke="#171717" strokeWidth="2" markerEnd="url(#acc-arr)" />
            <text x="205" y="75" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#171717">
              Access channel
            </text>
            <text x="205" y="105" textAnchor="middle" fontSize="8" fill="#737373">
              قناة الاتصال / الوصول
            </text>

            {/* Gatekeeper Barrier (Center) */}
            <rect
              x="270"
              y="20"
              width="130"
              height="140"
              rx="4"
              fill="#FFFFFF"
              stroke="#171717"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <rect x="280" y="30" width="110" height="26" rx="2" fill="#171717" />
            <text x="335" y="47" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">
              Gatekeeper function
            </text>
            <text x="335" y="75" textAnchor="middle" fontSize="9" fill="#171717" fontWeight="500">
              User Login / Passwords
            </text>
            <text x="335" y="90" textAnchor="middle" fontSize="9" fill="#171717" fontWeight="500">
              Firewall Filtering
            </text>
            <text x="335" y="105" textAnchor="middle" fontSize="9" fill="#171717" fontWeight="500">
              Biometric Checks
            </text>
            <text x="335" y="130" textAnchor="middle" fontSize="8" fill="#525252">
              بوابة حراسة الدخول
            </text>

            {/* Arrow from Gatekeeper into Information System */}
            <line x1="400" y1="85" x2="445" y2="85" stroke="#171717" strokeWidth="2" markerEnd="url(#acc-arr)" />

            {/* Information System Container (Right) */}
            <rect
              x="455"
              y="15"
              width="265"
              height="170"
              rx="6"
              fill="#FAFAFA"
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text x="587" y="38" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#171717">
              Information System / Computing Resources
            </text>

            {/* Sub-blocks inside Information System */}
            <rect x="470" y="50" width="115" height="42" rx="3" fill="#FFFFFF" stroke="#E5E5E5" />
            <text x="527" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#171717">
              Processes & Software
            </text>
            <text x="527" y="82" textAnchor="middle" fontSize="8" fill="#737373">
              العمليات والبرامج
            </text>

            <rect x="595" y="50" width="115" height="42" rx="3" fill="#FFFFFF" stroke="#E5E5E5" />
            <text x="652" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#171717">
              Data & Storage
            </text>
            <text x="652" y="82" textAnchor="middle" fontSize="8" fill="#737373">
              قواعد البيانات والملفات
            </text>

            <rect x="470" y="100" width="240" height="40" rx="3" fill="#FFFFFF" stroke="#E5E5E5" />
            <text x="590" y="117" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#171717">
              Hardware (Processor, Memory, I/O)
            </text>
            <text x="590" y="131" textAnchor="middle" fontSize="8" fill="#737373">
              الموارد الحاسوبية المادية
            </text>

            <rect x="470" y="148" width="240" height="28" rx="2" fill="#E5E5E5" />
            <text x="590" y="166" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#171717">
              Internal security controls (OS permissions, AV, audit)
            </text>
          </svg>

          <p className="text-xs text-[#525252] mt-2 text-center" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
            الشكل 1.3: نموذج أمان الوصول للشبكة يوضح جدار الحراسة الفاصل والضوابط الأمنية الداخلية الحامية للموارد.
          </p>
        </div>
      ) : (
        /* Threats Comparison View */
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setSelectedThreat('info')}
              className={`p-3 border rounded text-left transition-all ${
                selectedThreat === 'info'
                  ? 'border-[#171717] bg-[#FAFAFA]'
                  : 'border-[#E5E5E5] bg-[#FFFFFF] hover:bg-[#FAFAFA]'
              }`}
            >
              <span className="font-bold text-xs block text-[#171717]">1. Information Access Threats</span>
              <span className="text-[11px] text-[#525252] font-serif block" dir="rtl">
                تهديدات الوصول إلى المعلومات
              </span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedThreat('service')}
              className={`p-3 border rounded text-left transition-all ${
                selectedThreat === 'service'
                  ? 'border-[#171717] bg-[#FAFAFA]'
                  : 'border-[#E5E5E5] bg-[#FFFFFF] hover:bg-[#FAFAFA]'
              }`}
            >
              <span className="font-bold text-xs block text-[#171717]">2. Service Threats</span>
              <span className="text-[11px] text-[#525252] font-serif block" dir="rtl">
                تهديدات تعطيل الخدمة
              </span>
            </button>
          </div>

          {selectedThreat === 'info' ? (
            <div className="p-4 border border-[#171717] bg-[#FAFAFA] rounded-md space-y-2">
              <h4 className="font-bold text-xs uppercase text-[#171717]">
                Information Access Threats (Lecture Slide 27 Definition):
              </h4>
              <p className="text-xs text-[#525252] leading-relaxed">
                Intercept or modify data on behalf of users who should not have access to that data.
              </p>
              <div className="pt-2 border-t border-[#E5E5E5] text-xs space-y-1">
                <p><strong>Primary Examples:</strong> Trojan horses, spyware, unauthorized snooping, packet sniffers.</p>
                <p><strong>Defensive Countermeasure:</strong> Encryption, fine-grained access control lists, OS file permissions.</p>
                <p dir="rtl" className="font-serif text-[#525252] pt-1">
                  التعريف: اعتراض أو تعديل البيانات لصالح مستخدمين غير مصرح لهم بالوصول إليها.
                </p>
              </div>
            </div>
          ) : (
            <div className="p-4 border border-[#171717] bg-[#FAFAFA] rounded-md space-y-2">
              <h4 className="font-bold text-xs uppercase text-[#171717]">
                Service Threats (Lecture Slide 27 Definition):
              </h4>
              <p className="text-xs text-[#525252] leading-relaxed">
                Exploit service flaws in computers to inhibit use by legitimate users.
              </p>
              <div className="pt-2 border-t border-[#E5E5E5] text-xs space-y-1">
                <p><strong>Primary Examples:</strong> Denial-of-Service (DoS) floods, logic bombs, crash exploits, virus/worm resource exhaustion.</p>
                <p><strong>Official Exam Question:</strong> <em>"_____ threats exploit service flaws in computers to inhibit use by legitimate users."</em> ➔ <strong>Service threats</strong>.</p>
                <p dir="rtl" className="font-serif text-[#525252] pt-1">
                  التعريف: استغلال العيوب والثغرات في الخوادم والأجهزة لمنع استخدامها من قبل المستخدمين الشرعيين.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

