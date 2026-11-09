import React from 'react';

export default function MillerRabinDiagram(): React.ReactElement {
  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            Miller-Rabin Probabilistic Primality Test Algorithm (Stallings Ch 2)
          </h3>
          <p className="text-xs text-[#737373]">
            Exact algorithmic decision flow: Factor n - 1 = 2ᵏq, test base a, evaluate inconclusive vs composite
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          خوارزمية ميلر-رابين لاختبار أولية الأعداد الكبيرة وتحديد المركب
        </span>
      </div>

      {/* Algorithmic Flowchart SVG */}
      <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md overflow-x-auto flex justify-center">
        <svg viewBox="0 0 760 330" className="w-full max-w-[1240px] select-none text-[#171717]" style={{ minWidth: 620 }}>
          <defs>
            <marker id="mr-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
            </marker>
          </defs>

          {/* Node 1: Start */}
          <rect x="280" y="10" width="200" height="35" rx="5" fill="#171717" />
          <text x="380" y="32" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">
            Input: Odd integer n &gt; 2
          </text>
          <line x1="380" y1="45" x2="380" y2="70" stroke="#171717" strokeWidth="1.5" markerEnd="url(#mr-arr)" />

          {/* Node 2: Factor n - 1 */}
          <rect x="250" y="72" width="260" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="380" y="93" textAnchor="middle" fontSize="11" fontWeight="bold">
            Write n - 1 = 2ᵏ · q (q is odd)
          </text>
          <line x1="380" y1="107" x2="380" y2="132" stroke="#171717" strokeWidth="1.5" markerEnd="url(#mr-arr)" />

          {/* Node 3: Choose base a */}
          <rect x="250" y="134" width="260" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="380" y="155" textAnchor="middle" fontSize="11" fontWeight="bold">
            Select random base a ∈ [2, n - 2]
          </text>
          <line x1="380" y1="169" x2="380" y2="195" stroke="#171717" strokeWidth="1.5" markerEnd="url(#mr-arr)" />

          {/* Decision 1: a^q mod n == 1 ? */}
          <polygon points="380,197 490,227 380,257 270,227" fill="#FAFAFA" stroke="#171717" strokeWidth="1.5" />
          <text x="380" y="231" textAnchor="middle" fontSize="10" fontWeight="bold">a^q ≡ 1 (mod n)?</text>

          {/* Yes Branch ➔ Inconclusive */}
          <line x1="270" y1="227" x2="160" y2="227" stroke="#171717" strokeWidth="1.5" markerEnd="url(#mr-arr)" />
          <text x="210" y="220" fontSize="10" fontWeight="bold">YES</text>
          <rect x="30" y="210" width="130" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="95" y="231" textAnchor="middle" fontSize="10" fontWeight="bold">Inconclusive (Prime?)</text>

          {/* No Branch ➔ Check j loop */}
          <line x1="380" y1="257" x2="380" y2="280" stroke="#171717" strokeWidth="1.5" markerEnd="url(#mr-arr)" />
          <text x="390" y="272" fontSize="10" fontWeight="bold">NO</text>

          {/* Decision 2: a^(2^j q) mod n == -1 ? */}
          <rect x="230" y="282" width="300" height="40" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="380" y="302" textAnchor="middle" fontSize="10" fontWeight="bold">
            Exists j ∈ [0, k-1] with a^(2^j · q) ≡ -1?
          </text>

          {/* From Node 2 to Inconclusive / Composite */}
          <line x1="230" y1="302" x2="95" y2="302" stroke="#171717" strokeWidth="1.5" />
          <line x1="95" y1="302" x2="95" y2="245" stroke="#171717" strokeWidth="1.5" markerEnd="url(#mr-arr)" />
          <text x="170" y="295" fontSize="10" fontWeight="bold">YES</text>

          <line x1="530" y1="302" x2="630" y2="302" stroke="#171717" strokeWidth="1.5" markerEnd="url(#mr-arr)" />
          <text x="560" y="295" fontSize="10" fontWeight="bold">NO</text>
          <rect x="630" y="282" width="115" height="40" rx="3" fill="#171717" />
          <text x="687" y="306" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">COMPOSITE</text>
        </svg>
      </div>

      {/* Worked Numerical Example (n = 221) */}
      <div className="p-4 border-2 border-[#171717] bg-[#FFFFFF] rounded-md space-y-3">
        <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
          <span className="font-mono text-xs font-bold text-[#171717] uppercase">
            Official Course Example: Testing n = 221 with base a = 2
          </span>
          <span className="font-mono text-xs text-[#737373]">Stallings Page 29</span>
        </div>
        <div className="font-mono text-xs space-y-1.5 text-[#171717]">
          <p>1. n - 1 = 220 = 2² × 55 ➔ k = 2, q = 55 (odd)</p>
          <p>2. Compute a^q mod n: 2⁵⁵ mod 221 ➔ 2⁵⁵ = (2¹¹)² × 2¹¹ ... ≡ 112 mod 221 (≠ 1 and ≠ 220)</p>
          <p>3. Check j = 1: a^(2¹ · q) = (2⁵⁵)² = 112² = 12544 ≡ 168 mod 221 (≠ 220 ≡ -1)</p>
          <p className="font-bold text-[#171717] pt-1">
            4. Conclusion: Loop ends without yielding -1 ➔ 221 is definitely COMPOSITE! (221 = 13 × 17).
          </p>
        </div>
      </div>
    </div>
  );
}
