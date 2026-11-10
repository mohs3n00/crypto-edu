import React, { useState } from 'react';
import MathDisplay from '../ui/MathDisplay';

interface FermatEulerDiagramProps {
  initialTheorem?: 'fermat' | 'euler';
}

export default function FermatEulerDiagram({ initialTheorem = 'fermat' }: FermatEulerDiagramProps): React.ReactElement {
  const [selectedTheorem, setSelectedTheorem] = useState<'fermat' | 'euler'>(initialTheorem);

  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            {selectedTheorem === 'fermat'
              ? "Fermat's Little Theorem (Stallings Ch 2 / Slide 26)"
              : "Euler's Generalization & Totient Function φ(n) (Stallings Ch 2 / Slide 27-28)"}
          </h3>
          <p className="text-xs text-[#737373]">
            {selectedTheorem === 'fermat'
              ? "Conditions: p is Prime, gcd(a, p) = 1. Reduces exponents via a^(p-1) ≡ 1 (mod p)."
              : "Conditions: Modulus n is composite, gcd(a, n) = 1. Reduces exponents via a^φ(n) ≡ 1 (mod n)."}
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          {selectedTheorem === 'fermat'
            ? 'مبرهنة فيرما الصغرى (المقياس الأولي p)'
            : 'دالة مؤشر أويلر ومبرهنة أويلر المعممة (المقياس n)'}
        </span>
      </div>

      {/* Theorem Switcher Tabs */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setSelectedTheorem('fermat')}
          className={`py-2 px-3 border rounded text-xs font-medium transition-all ${
            selectedTheorem === 'fermat'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:bg-[#FAFAFA]'
          }`}
        >
          <span className="font-bold block text-sm">Fermat's Little Theorem</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">
            مبرهنة فيرما الصغرى (المقياس الأولي p)
          </span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedTheorem('euler')}
          className={`py-2 px-3 border rounded text-xs font-medium transition-all ${
            selectedTheorem === 'euler'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:bg-[#FAFAFA]'
          }`}
        >
          <span className="font-bold block text-sm">Euler's Generalization &amp; φ(n)</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">
            مبرهنة أويلر ودالة مؤشر أويلر (المقياس المركب n)
          </span>
        </button>
      </div>

      {/* Theorem Content Panel */}
      {selectedTheorem === 'fermat' ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-[#171717] bg-[#FAFAFA] rounded-md space-y-2">
              <span className="font-mono text-[10px] font-bold uppercase text-[#737373] block">
                Primary Condition &amp; Congruence:
              </span>
              <div className="text-center py-2">
                <MathDisplay latex="a^{p-1} \equiv 1 \pmod{p} \quad \text{where } p \in \mathbb{P}, \; \gcd(a, p) = 1" display />
              </div>
              <p className="text-xs text-[#525252] leading-relaxed">
                Alternative form valid for <em>all</em> integers a: <code className="font-mono font-bold">aᵖ ≡ a (mod p)</code>.
              </p>
            </div>

            <div className="p-4 border border-[#E5E5E5] bg-[#FFFFFF] rounded-md space-y-2">
              <span className="font-mono text-[10px] font-bold uppercase text-[#737373] block">
                Official Exam Example (3²⁰¹ mod 11):
              </span>
              <div className="font-mono text-xs space-y-1 text-[#171717]">
                <p>1. Modulus p = 11 (prime), a = 3 ➔ gcd(3, 11) = 1</p>
                <p>2. By Fermat: 3¹⁰ ≡ 1 (mod 11)</p>
                <p>3. Exponent decomposition: 201 = 20 × 10 + 1</p>
                <p className="font-bold text-[#171717] pt-1">
                  4. 3²⁰¹ = (3¹⁰)²⁰ × 3¹ ≡ 1²⁰ × 3 ≡ 3 (mod 11)
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 border border-[#E5E5E5] bg-[#FAFAFA] rounded">
              <span className="font-bold block font-mono text-[11px]">Prime Modulus p:</span>
              <p className="text-sm font-bold font-mono py-1">φ(p) = p - 1</p>
              <span className="text-[11px] text-[#525252]">e.g. φ(11) = 10, φ(13) = 12</span>
            </div>

            <div className="p-3 border border-[#E5E5E5] bg-[#FAFAFA] rounded">
              <span className="font-bold block font-mono text-[11px]">Product of Primes pq:</span>
              <p className="text-sm font-bold font-mono py-1">φ(pq) = (p - 1)(q - 1)</p>
              <span className="text-[11px] text-[#525252]">e.g. φ(21) = 2 × 6 = 12</span>
            </div>

            <div className="p-3 border border-[#E5E5E5] bg-[#FAFAFA] rounded">
              <span className="font-bold block font-mono text-[11px]">Prime Power pᵏ:</span>
              <p className="text-sm font-bold font-mono py-1">φ(pᵏ) = pᵏ - pᵏ⁻¹</p>
              <span className="text-[11px] text-[#525252]">e.g. φ(8) = 8 - 4 = 4</span>
            </div>
          </div>

          <div className="p-4 border border-[#171717] bg-[#FAFAFA] rounded-md space-y-2">
            <span className="font-mono text-[10px] font-bold uppercase text-[#737373] block">
              Euler's Theorem Form &amp; Reduction:
            </span>
            <div className="text-center py-2">
              <MathDisplay latex="a^{\phi(n)} \equiv 1 \pmod{n} \quad \text{provided } \gcd(a, n) = 1" display />
            </div>
            <div className="font-mono text-xs text-[#171717] border-t border-[#E5E5E5] pt-2">
              <strong>Official Lecture Example: </strong>
              <span>7¹²⁰ mod 100 ➔ n = 100 = 2² × 5² ➔ φ(100) = (4 - 2)(25 - 5) = 2 × 20 = 40.</span>
              <span className="block font-bold">Since gcd(7, 100) = 1 ➔ 7⁴⁰ ≡ 1 (mod 100) ➔ 7¹²⁰ = (7⁴⁰)³ ≡ 1³ ≡ 1 (mod 100).</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
