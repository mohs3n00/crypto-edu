import React, { useState } from 'react';
import { Cpu, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import MathDisplay from '../ui/MathDisplay';

interface CrtItem {
  a: number;
  m: number;
}

export default function CrtWorkflowDiagram(): React.ReactElement {
  const [selectedPreset, setSelectedPreset] = useState<number>(0);

  const presets = [
    {
      title: 'Stallings Textbook / Midterm Standard Example',
      equations: [
        { a: 2, m: 3 },
        { a: 3, m: 5 },
        { a: 2, m: 7 },
      ],
      description: 'System: x ≡ 2 (mod 3), x ≡ 3 (mod 5), x ≡ 2 (mod 7)',
    },
    {
      title: 'Faculty Lecture Slide 2.9 Example',
      equations: [
        { a: 1, m: 5 },
        { a: 2, m: 7 },
        { a: 3, m: 9 },
      ],
      description: 'System: x ≡ 1 (mod 5), x ≡ 2 (mod 7), x ≡ 3 (mod 9)',
    },
  ];

  const current = presets[selectedPreset];
  const { equations } = current;

  // Extended Euclidean inverse finder
  const modInverse = (a: number, m: number): number => {
    let m0 = m;
    let y = 0, x = 1;
    if (m === 1) return 0;
    let aVal = ((a % m) + m) % m;
    while (aVal > 1) {
      if (m === 0) return 1; // guard
      const q = Math.floor(aVal / m);
      let t = m;
      m = aVal % m;
      aVal = t;
      t = y;
      y = x - q * y;
      x = t;
    }
    if (x < 0) x += m0;
    return x;
  };

  // Step 1: M = product of m_i
  const M = equations.reduce((acc, eq) => acc * eq.m, 1);

  // Step 2 & 3: M_i = M / m_i, y_i = M_i^(-1) mod m_i
  const details = equations.map((eq, i) => {
    const Mi = M / eq.m;
    const yi = modInverse(Mi, eq.m);
    const term = eq.a * Mi * yi;
    return {
      index: i + 1,
      a: eq.a,
      m: eq.m,
      Mi,
      yi,
      term,
    };
  });

  // Step 4: x = sum(term) mod M
  const totalSum = details.reduce((acc, d) => acc + d.term, 0);
  const xResult = ((totalSum % M) + M) % M;

  return (
    <div className="border-2 border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-4 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded border border-[#171717] bg-[#171717] text-[#FFFFFF] flex items-center justify-center shrink-0">
            <Cpu size={18} />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#737373] block">
              Section 2.7 / University Computational Blueprint
            </span>
            <h3 className="text-lg font-bold text-[#171717] tracking-tight">
              Chinese Remainder Theorem (CRT) Step-by-Step Derivation
            </h3>
          </div>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-2">
          {presets.map((pr, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPreset(idx)}
              className={`px-3 py-1.5 text-xs font-mono border rounded transition-colors ${
                selectedPreset === idx
                  ? 'border-[#171717] bg-[#171717] text-[#FFFFFF] font-bold'
                  : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:border-[#171717]'
              }`}
            >
              Preset {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Preset Problem Statement */}
      <div className="bg-[#FAFAFA] border border-[#171717] p-4 rounded-md space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase text-[#171717]">
            {current.title}
          </span>
          <span className="text-xs font-mono text-[#737373]">Pairwise Coprime Moduli Required</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-mono font-bold text-[#171717]">
          {equations.map((eq, idx) => (
            <div key={idx} className="px-3 py-1 bg-[#FFFFFF] border border-[#E5E5E5] rounded">
              <MathDisplay latex={`x \\equiv ${eq.a} \\pmod{${eq.m}}`} inline />
            </div>
          ))}
        </div>
      </div>

      {/* 4-Step Analytical Workflow */}
      <div className="space-y-4">
        {/* Step 1 */}
        <div className="border border-[#E5E5E5] rounded-md p-4 bg-[#FFFFFF] space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-[#171717] text-[#FFFFFF] text-xs font-mono font-bold flex items-center justify-center">
              1
            </span>
            <span className="text-xs font-mono font-bold uppercase text-[#171717]">
              Step 1: Compute Moduli Product (M)
            </span>
          </div>
          <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded font-mono text-sm text-[#171717]">
            <MathDisplay
              latex={`M = \\prod_{i=1}^{${equations.length}} m_i = ${equations.map((e) => e.m).join(' \\times ')} = ${M}`}
            />
          </div>
        </div>

        {/* Step 2 & 3: Component Matrices */}
        <div className="border border-[#E5E5E5] rounded-md p-4 bg-[#FFFFFF] space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-[#171717] text-[#FFFFFF] text-xs font-mono font-bold flex items-center justify-center">
              2
            </span>
            <span className="text-xs font-mono font-bold uppercase text-[#171717]">
              Steps 2 & 3: Compute Mᵢ and Modular Inverses yᵢ = Mᵢ⁻¹ mod mᵢ
            </span>
          </div>

          <div className="overflow-x-auto border border-[#171717] rounded">
            <table className="w-full text-xs font-mono border-collapse text-left">
              <thead>
                <tr className="bg-[#171717] text-[#FFFFFF] border-b border-[#171717]">
                  <th className="p-2.5 border-r border-[#333333] text-center w-12">i</th>
                  <th className="p-2.5 border-r border-[#333333]">Given aᵢ</th>
                  <th className="p-2.5 border-r border-[#333333]">Modulus mᵢ</th>
                  <th className="p-2.5 border-r border-[#333333]">Mᵢ = M / mᵢ</th>
                  <th className="p-2.5 border-r border-[#333333]">Inverse Condition</th>
                  <th className="p-2.5 border-r border-[#333333] font-bold text-center">yᵢ = Mᵢ⁻¹ mod mᵢ</th>
                  <th className="p-2.5 font-bold">Term: cᵢ = aᵢ · Mᵢ · yᵢ</th>
                </tr>
              </thead>
              <tbody>
                {details.map((d) => (
                  <tr key={d.index} className="border-b border-[#E5E5E5] hover:bg-[#FAFAFA]">
                    <td className="p-2.5 border-r border-[#E5E5E5] text-center text-[#737373]">
                      {d.index}
                    </td>
                    <td className="p-2.5 border-r border-[#E5E5E5] font-bold text-[#171717]">
                      a_{d.index} = {d.a}
                    </td>
                    <td className="p-2.5 border-r border-[#E5E5E5] text-[#525252]">
                      m_{d.index} = {d.m}
                    </td>
                    <td className="p-2.5 border-r border-[#E5E5E5] font-bold text-[#171717]">
                      {M} / {d.m} = {d.Mi}
                    </td>
                    <td className="p-2.5 border-r border-[#E5E5E5] text-[#525252]">
                      ({d.Mi} · y_{d.index}) ≡ 1 (mod {d.m})
                    </td>
                    <td className="p-2.5 border-r border-[#E5E5E5] text-center font-bold text-[#171717] bg-[#FAFAFA]">
                      {d.yi}
                    </td>
                    <td className="p-2.5 font-mono font-bold text-[#171717]">
                      {d.a} × {d.Mi} × {d.yi} = <span className="underline">{d.term}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Step 4 */}
        <div className="border border-[#E5E5E5] rounded-md p-4 bg-[#FFFFFF] space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-[#171717] text-[#FFFFFF] text-xs font-mono font-bold flex items-center justify-center">
              3
            </span>
            <span className="text-xs font-mono font-bold uppercase text-[#171717]">
              Step 4: Sum Terms and Reduce Modulo M
            </span>
          </div>

          <div className="p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded space-y-2 text-xs font-mono">
            <p className="text-[#171717]">
              Sum of weighted terms: <MathDisplay latex={`\\sum c_i = ${details.map((d) => d.term).join(' + ')} = ${totalSum}`} inline />
            </p>
            <p className="text-[#171717] font-bold">
              Unique solution modulo {M}:
            </p>
            <div className="p-2 bg-[#FFFFFF] border border-[#171717] rounded text-center">
              <MathDisplay
                latex={`x \\equiv \\left( \\sum_{i=1}^{${equations.length}} a_i M_i y_i \\right) \\pmod M = ${totalSum} \\pmod{${M}} = ${xResult}`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Definitive Result Callout */}
      <div className="p-4 border-2 border-[#171717] bg-[#171717] text-[#FFFFFF] rounded flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A3A3] block font-bold">
            Canonical CRT Solution / Ø§Ù„Ø­Ù„ Ø§Ù„Ù…Ø¹ØªÙ…Ø¯:
          </span>
          <span className="text-xl font-bold font-mono">
            x ≡ {xResult} (mod {M})
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono border border-[#525252] px-3 py-1.5 rounded bg-[#333333]">
          <CheckCircle2 size={15} />
          <span>Unique in Range [0, {M - 1}]</span>
        </div>
      </div>

      {/* Independent Verification Box */}
      <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md space-y-2 text-xs font-mono">
        <span className="font-bold text-[#171717] block uppercase flex items-center gap-1.5">
          <ShieldCheck size={14} />
          <span>Independent Proof of Correctness:</span>
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {equations.map((eq, idx) => {
            const remainder = xResult % eq.m;
            const matches = remainder === eq.a;
            return (
              <div
                key={idx}
                className="p-2 border border-[#E5E5E5] bg-[#FFFFFF] rounded flex items-center justify-between"
              >
                <span>
                  {xResult} mod {eq.m} = <span className="font-bold">{remainder}</span>
                </span>
                <span className="font-bold text-[#171717]">
                  {matches ? '✓ Matches' : '✗ Failed'}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

