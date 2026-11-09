import React from 'react';

export default function DesKeyScheduleDiagram(): React.ReactElement {
  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            DES 16-Round Subkey Generation Schedule (FIPS 46-3)
          </h3>
          <p className="text-xs text-[#737373]">
            Key Schedule: 64-bit key ➔ PC-1 (56 bits) ➔ 28-bit Halves (C₀, D₀) ➔ Circular Left Shifts ➔ PC-2 (48-bit Kᵢ)
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          جدول توليد المفاتيح الفرعية في خوارزمية DES القياسية ومصفوفات التبديل
        </span>
      </div>

      {/* Pipeline SVG Diagram */}
      <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md overflow-x-auto flex justify-center">
        <svg viewBox="0 0 740 310" className="w-full max-w-[1240px] select-none text-[#171717]" style={{ minWidth: 620 }}>
          <defs>
            <marker id="ks-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
            </marker>
          </defs>

          {/* 64-bit Master Key */}
          <rect x="250" y="10" width="240" height="32" rx="3" fill="#171717" />
          <text x="370" y="31" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">
            64-bit Master Key (8 parity bits)
          </text>
          <line x1="370" y1="42" x2="370" y2="65" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ks-arr)" />

          {/* Permuted Choice 1 (PC-1) */}
          <rect x="250" y="67" width="240" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="370" y="88" textAnchor="middle" fontSize="11" fontWeight="bold">
            Permuted Choice 1 (PC-1) ➔ 56 bits
          </text>
          <line x1="370" y1="102" x2="370" y2="125" stroke="#171717" strokeWidth="1.5" />

          {/* Split into C0 and D0 */}
          <line x1="260" y1="125" x2="480" y2="125" stroke="#171717" strokeWidth="1.5" />
          <line x1="260" y1="125" x2="260" y2="145" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ks-arr)" />
          <line x1="480" y1="125" x2="480" y2="145" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ks-arr)" />

          <rect x="190" y="147" width="140" height="32" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="260" y="167" textAnchor="middle" fontSize="11" fontWeight="bold">C₀ (28 bits)</text>

          <rect x="410" y="147" width="140" height="32" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="480" y="167" textAnchor="middle" fontSize="11" fontWeight="bold">D₀ (28 bits)</text>

          {/* Circular Left Shift Block */}
          <line x1="260" y1="179" x2="260" y2="200" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ks-arr)" />
          <line x1="480" y1="179" x2="480" y2="200" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ks-arr)" />

          <rect x="180" y="202" width="160" height="35" rx="3" fill="#FAFAFA" stroke="#171717" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="260" y="223" textAnchor="middle" fontSize="10" fontWeight="bold">Left Shift (1 or 2 bits)</text>

          <rect x="400" y="202" width="160" height="35" rx="3" fill="#FAFAFA" stroke="#171717" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="480" y="223" textAnchor="middle" fontSize="10" fontWeight="bold">Left Shift (1 or 2 bits)</text>

          {/* Merge into PC-2 */}
          <line x1="260" y1="237" x2="260" y2="255" stroke="#171717" strokeWidth="1.5" />
          <line x1="480" y1="237" x2="480" y2="255" stroke="#171717" strokeWidth="1.5" />
          <line x1="260" y1="255" x2="370" y2="255" stroke="#171717" strokeWidth="1.5" />
          <line x1="480" y1="255" x2="370" y2="255" stroke="#171717" strokeWidth="1.5" />
          <line x1="370" y1="255" x2="370" y2="270" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ks-arr)" />

          <rect x="230" y="272" width="280" height="35" rx="3" fill="#171717" />
          <text x="370" y="294" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">
            Permuted Choice 2 (PC-2) ➔ Round Key Kᵢ (48 bits)
          </text>
        </svg>
      </div>

      {/* Shift Rules Table */}
      <div className="p-4 border border-[#171717] bg-[#FFFFFF] rounded-md space-y-3">
        <h4 className="font-bold text-xs font-mono uppercase text-[#171717]">
          Circular Left Shift Rule by Round Number (Stallings Table 4.2):
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
          <div className="p-2 border border-[#171717] bg-[#FFF1A6] rounded text-center">
            <span className="font-bold block">1-bit Shifts</span>
            <span>Rounds: 1, 2, 9, 16</span>
          </div>
          <div className="p-2 border border-[#E5E5E5] bg-[#FAFAFA] rounded text-center">
            <span className="font-bold block">2-bit Shifts</span>
            <span>Rounds: 3 to 8</span>
          </div>
          <div className="p-2 border border-[#E5E5E5] bg-[#FAFAFA] rounded text-center">
            <span className="font-bold block">2-bit Shifts</span>
            <span>Rounds: 10 to 15</span>
          </div>
          <div className="p-2 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-center">
            <span className="font-bold block">Total Shift Count</span>
            <span>4(1) + 12(2) = 28 bits</span>
          </div>
        </div>
        <p className="text-xs text-[#525252] pt-1">
          <strong>Exam Insight: </strong>Because each 28-bit half undergoes a total circular shift of 28 bits after 16 rounds, the key registers return exactly to their initial states (C₁₆ = C₀, D₁₆ = D₀). This symmetry enables identical decryption when keys are generated in reverse order!
        </p>
      </div>
    </div>
  );
}

