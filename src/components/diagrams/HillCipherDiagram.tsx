import React, { useState } from 'react';
import MathDisplay from '../ui/MathDisplay';

export default function HillCipherDiagram(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<'encryption' | 'inversion'>('encryption');

  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            Hill Cipher 2x2 Matrix Architecture &amp; Modulo 26 Inversion
          </h3>
          <p className="text-xs text-[#737373]">
            Polygraphic substitution via linear algebra: Matrix multiplication, determinant coprimality, and modular inverse
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          شفرة هيل المصفوفية والشرط الجبري لوجود المعكوس في الحقل المعياري 26
        </span>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setActiveTab('encryption')}
          className={`py-2 px-3 border rounded text-xs font-medium transition-all ${
            activeTab === 'encryption'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:bg-[#FAFAFA]'
          }`}
        >
          <span className="font-bold block text-sm">Matrix Encryption Pipeline</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">مسار التشفير وضرب المصفوفات</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('inversion')}
          className={`py-2 px-3 border rounded text-xs font-medium transition-all ${
            activeTab === 'inversion'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:bg-[#FAFAFA]'
          }`}
        >
          <span className="font-bold block text-sm">Matrix Inversion Condition &amp; adj(K)</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">شرط وجود المعكوس وحساب مصفوفة فك التشفير</span>
        </button>
      </div>

      {activeTab === 'encryption' ? (
        <div className="space-y-4">
          <div className="p-4 border border-[#171717] bg-[#FAFAFA] rounded-md text-center py-4">
            <MathDisplay
              latex="\mathbf{C} = \mathbf{K} \cdot \mathbf{P} \pmod{26} \iff \begin{pmatrix} C_1 \\ C_2 \end{pmatrix} = \begin{pmatrix} k_{11} & k_{12} \\ k_{21} & k_{22} \end{pmatrix} \begin{pmatrix} P_1 \\ P_2 \end{pmatrix} \pmod{26}"
              display
            />
          </div>

          <div className="p-4 border border-[#E5E5E5] bg-[#FFFFFF] rounded-md space-y-2">
            <span className="font-mono text-[10px] font-bold uppercase text-[#737373] block">
              Official Examination Problem Walkthrough (Plaintext "ME"):
            </span>
            <div className="font-mono text-xs space-y-1 text-[#171717]">
              <p>1. Plaintext Vector: M = 12, E = 4 ➔ P = [12, 4]ᵀ</p>
              <p>2. Key Matrix K: [[9, 4], [5, 7]]</p>
              <p>3. Row 1: C₁ = (9 × 12 + 4 × 4) = (108 + 16) = 124 ≡ 20 (mod 26) ➔ 'U'</p>
              <p>4. Row 2: C₂ = (5 × 12 + 7 × 4) = (60 + 28) = 88 ≡ 10 (mod 26) ➔ 'K'</p>
              <p className="font-bold text-[#171717] pt-1">5. Resulting Ciphertext: "UK"</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 border border-[#171717] bg-[#FAFAFA] rounded-md text-center py-4 space-y-3">
            <span className="font-mono text-[10px] font-bold uppercase text-[#737373] block">
              Mandatory Invertibility Condition:
            </span>
            <MathDisplay
              latex="\gcd(\det(\mathbf{K}), 26) = 1 \implies \mathbf{K}^{-1} = \det(\mathbf{K})^{-1} \cdot \text{adj}(\mathbf{K}) \pmod{26}"
              display
            />
          </div>

          <div className="p-4 border border-[#E5E5E5] bg-[#FFFFFF] rounded-md space-y-2 font-mono text-xs text-[#171717]">
            <span className="font-mono text-[10px] font-bold uppercase text-[#737373] block">
              Inverse Key Derivation for K = [[9, 4], [5, 7]]:
            </span>
            <p>1. Determinant: det(K) = (9)(7) - (4)(5) = 63 - 20 = 43 ≡ 17 (mod 26)</p>
            <p>2. Coprimality Check: gcd(17, 26) = 1 ✔ (Multiplicative inverse exists)</p>
            <p>3. Scalar Inverse: 17⁻¹ mod 26 = 23 (since 17 × 23 = 391 = 15(26) + 1 ≡ 1)</p>
            <p>4. Adjugate Matrix: adj(K) = [[7, -4], [-5, 9]] ≡ [[7, 22], [21, 9]] (mod 26)</p>
            <p className="font-bold text-[#171717] pt-1">
              5. Inverse Matrix K⁻¹ = 23 · [[7, 22], [21, 9]] ≡ [[5, 12], [15, 25]] (mod 26)
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

