import React, { useState } from 'react';
import FeistelRoundVisualizer from '../tools/FeistelRoundVisualizer';

export default function FeistelNetworkDiagram(): React.ReactElement {
  const [viewMode, setViewMode] = useState<'interactive' | 'schematic'>('interactive');
  const [isDecryption, setIsDecryption] = useState<boolean>(false);
  const currentRound = 1;

  return (
    <div className="border border-neutral-gray p-4 sm:p-6 bg-white rounded-xl my-6 space-y-4">
      {/* View Mode Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-neutral-gray">
        <div>
          <h4 className="text-base font-bold text-near-black">
            Classical Feistel Network Round Architecture
          </h4>
          <span className="source-badge">Midterm 2022 Question [3] (A) / Stallings Fig 4.3</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex p-0.5 bg-[#F7F7F5] rounded-lg border border-[#E2E2DF] text-xs">
            <button
              onClick={() => setViewMode('interactive')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
                viewMode === 'interactive'
                  ? 'bg-[#222222] text-white shadow-xs'
                  : 'text-[#505050] hover:text-[#222222]'
              }`}
            >
              8-Bit Interactive Stepper
            </button>
            <button
              onClick={() => setViewMode('schematic')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all ${
                viewMode === 'schematic'
                  ? 'bg-[#222222] text-white shadow-xs'
                  : 'text-[#505050] hover:text-[#222222]'
              }`}
            >
              Textbook Schematic (64-bit)
            </button>
          </div>
        </div>
      </div>

      <p className="text-xs text-dark-gray" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
        رسم المخطط البياني لشبكة فايستل الكلاسيكية (سؤال امتحان الميدتيرم 2022 - السؤال الثالث أ) مع المحاكي التفاعلي لخطوات الدورة الواحدة
      </p>

      {/* Mode 1: 8-Bit Interactive Stepper */}
      {viewMode === 'interactive' && (
        <div className="pt-2">
          <FeistelRoundVisualizer />
        </div>
      )}

      {/* Mode 2: Textbook Schematic */}
      {viewMode === 'schematic' && (
        <div className="space-y-4 pt-2">
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsDecryption(false)}
              className={`btn text-xs ${!isDecryption ? 'btn-primary' : 'btn-secondary'}`}
            >
              Encryption Flow (K₁ → K₁₆)
            </button>
            <button
              onClick={() => setIsDecryption(true)}
              className={`btn text-xs ${isDecryption ? 'btn-primary' : 'btn-secondary'}`}
            >
              Decryption Flow (K₁₆ → K₁)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* SVG Diagram */}
            <div className="flex justify-center bg-near-white p-4 rounded border border-neutral-gray">
              <svg viewBox="0 0 360 480" className="w-full max-w-[460px] select-none font-mono">
                {/* Top Plaintext Block */}
                <rect x="50" y="20" width="260" height="36" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" rx="2" />
                <text x="180" y="42" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#000000">
                  64-bit {isDecryption ? 'Ciphertext Block' : 'Plaintext Block'}
                </text>

                {/* Split arrows to L0 and R0 */}
                <path d="M 115 56 L 115 90" stroke="#000000" strokeWidth="1.5" markerEnd="url(#arrow)" />
                <path d="M 245 56 L 245 90" stroke="#000000" strokeWidth="1.5" markerEnd="url(#arrow)" />

                {/* L0 and R0 boxes */}
                <rect x="70" y="90" width="90" height="30" fill="#FAFAFA" stroke="#000000" strokeWidth="1.5" rx="2" />
                <text x="115" y="110" textAnchor="middle" fontSize="11" fontWeight="bold">
                  {isDecryption ? 'L₁₆ (32-bit)' : 'L₀ (32-bit)'}
                </text>

                <rect x="200" y="90" width="90" height="30" fill="#FAFAFA" stroke="#000000" strokeWidth="1.5" rx="2" />
                <text x="245" y="110" textAnchor="middle" fontSize="11" fontWeight="bold">
                  {isDecryption ? 'R₁₆ (32-bit)' : 'R₀ (32-bit)'}
                </text>

                {/* Function F Box */}
                <rect x="180" y="160" width="80" height="40" fill="#FFFFFF" stroke="#000000" strokeWidth="2" rx="3" />
                <text x="220" y="184" textAnchor="middle" fontSize="12" fontWeight="bold">
                  F(R, K)
                </text>

                {/* Right half going to F */}
                <path d="M 245 120 L 245 160" stroke="#000000" strokeWidth="1.5" />

                {/* Subkey input arrow */}
                <path d="M 330 180 L 260 180" stroke="#000000" strokeWidth="1.5" />
                <text x="315" y="172" textAnchor="middle" fontSize="10" fontWeight="bold">
                  {isDecryption ? 'K₁₆' : `K_${currentRound}`}
                </text>

                {/* XOR Circle */}
                <circle cx="115" cy="180" r="14" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
                <line x1="105" y1="180" x2="125" y2="180" stroke="#000000" strokeWidth="1.5" />
                <line x1="115" y1="170" x2="115" y2="190" stroke="#000000" strokeWidth="1.5" />

                {/* F output to XOR */}
                <path d="M 180 180 L 129 180" stroke="#000000" strokeWidth="1.5" />

                {/* Left half through XOR */}
                <path d="M 115 120 L 115 166" stroke="#000000" strokeWidth="1.5" />
                <path d="M 115 194 L 115 240" stroke="#000000" strokeWidth="1.5" />

                {/* R0 crossing to become L1 */}
                <path d="M 245 120 L 245 240" stroke="#000000" strokeWidth="1.5" />

                {/* Cross-swap lines */}
                <path d="M 115 240 L 245 300" stroke="#525252" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 245 240 L 115 300" stroke="#525252" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* L1 and R1 boxes */}
                <rect x="70" y="300" width="90" height="30" fill="#FAFAFA" stroke="#000000" strokeWidth="1.5" rx="2" />
                <text x="115" y="320" textAnchor="middle" fontSize="11" fontWeight="bold">
                  {isDecryption ? 'L₁₅ = R₁₆' : 'L₁ = R₀'}
                </text>

                <rect x="200" y="300" width="90" height="30" fill="#FAFAFA" stroke="#000000" strokeWidth="1.5" rx="2" />
                <text x="245" y="320" textAnchor="middle" fontSize="11" fontWeight="bold">
                  {isDecryption ? 'R₁₅ = L₁₆ ⊕ F' : 'R₁ = L₀ ⊕ F'}
                </text>

                {/* Dots for rounds */}
                <circle cx="115" cy="355" r="2.5" fill="#525252" />
                <circle cx="115" cy="365" r="2.5" fill="#525252" />
                <circle cx="115" cy="375" r="2.5" fill="#525252" />
                <circle cx="245" cy="355" r="2.5" fill="#525252" />
                <circle cx="245" cy="365" r="2.5" fill="#525252" />
                <circle cx="245" cy="375" r="2.5" fill="#525252" />

                {/* Output Block */}
                <rect x="50" y="410" width="260" height="36" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" rx="2" />
                <text x="180" y="432" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#000000">
                  64-bit {isDecryption ? 'Plaintext Block' : 'Ciphertext Block'}
                </text>

                {/* Connecting lines to output */}
                <path d="M 115 385 L 115 410" stroke="#000000" strokeWidth="1.5" />
                <path d="M 245 385 L 245 410" stroke="#000000" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Explanation & University Exam Points */}
            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 bg-near-white border border-neutral-gray rounded space-y-2">
                <div className="font-bold uppercase tracking-wider text-black text-sm">
                  Feistel Round Equations
                </div>
                <div className="p-2 bg-white rounded border border-light-gray font-bold">
                  L_i = R_{'{i-1}'}
                </div>
                <div className="p-2 bg-white rounded border border-light-gray font-bold">
                  R_i = L_{'{i-1}'} ⊕ F(R_{'{i-1}'}, K_i)
                </div>
              </div>

              <div className="p-4 border border-dark-gray rounded bg-white space-y-2">
                <div className="font-bold text-black uppercase tracking-wider text-xs">
                  Midterm Examination Drawing Rubric:
                </div>
                <ul className="list-disc list-inside space-y-1 text-dark-gray font-sans">
                  <li>64-bit data input partitioned into two equal 32-bit halves (Left L and Right R).</li>
                  <li>Round function F applied to Right half using round key K_i.</li>
                  <li>Bitwise XOR (⊕) between output of F and Left half.</li>
                  <li>Cross-over interchange (swap) between halves after each round.</li>
                  <li>Identical structure for decryption with subkeys supplied in reverse order: K₁₆, K₁₅, ..., K₁.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
