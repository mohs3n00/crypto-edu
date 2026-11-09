import React, { useState } from 'react';
import { Layers, ArrowDown, Calculator, CheckCircle2, RotateCcw } from 'lucide-react';
import MathDisplay from '../ui/MathDisplay';

interface EuclidStep {
  step: number;
  a: number;
  b: number;
  q: number;
  r: number;
}

interface ExtStep {
  step: number;
  q: number;
  a1: number;
  a2: number;
  a3: number;
  b1: number;
  b2: number;
  b3: number;
}

export default function EuclideanLadderDiagram(): React.ReactElement {
  const [inputA, setInputA] = useState<number>(710);
  const [inputB, setInputB] = useState<number>(310);
  const [activeTab, setActiveTab] = useState<'standard' | 'extended'>('standard');

  // Compute Standard Euclidean steps
  const computeEuclidSteps = (initialA: number, initialB: number): EuclidStep[] => {
    let a = Math.abs(initialA);
    let b = Math.abs(initialB);
    if (a < b) {
      const temp = a;
      a = b;
      b = temp;
    }
    const steps: EuclidStep[] = [];
    let stepNum = 1;

    while (b > 0) {
      const q = Math.floor(a / b);
      const r = a % b;
      steps.push({ step: stepNum, a, b, q, r });
      a = b;
      b = r;
      stepNum++;
      if (stepNum > 50) break; // safety guard
    }
    return steps;
  };

  // Compute Extended Euclidean steps
  const computeExtendedSteps = (initialA: number, initialB: number): { steps: ExtStep[]; gcd: number; inverse: number | null } => {
    let a = Math.abs(initialA);
    let b = Math.abs(initialB);
    const swapped = a < b;
    if (swapped) {
      const temp = a;
      a = b;
      b = temp;
    }

    let a1 = 1, a2 = 0, a3 = a;
    let b1 = 0, b2 = 1, b3 = b;

    const steps: ExtStep[] = [
      { step: 0, q: 0, a1, a2, a3, b1, b2, b3 }
    ];

    let stepNum = 1;
    while (b3 > 0) {
      const q = Math.floor(a3 / b3);
      const t1 = a1 - q * b1;
      const t2 = a2 - q * b2;
      const t3 = a3 - q * b3;

      steps.push({
        step: stepNum,
        q,
        a1: b1,
        a2: b2,
        a3: b3,
        b1: t1,
        b2: t2,
        b3: t3,
      });

      a1 = b1;
      a2 = b2;
      a3 = b3;
      b1 = t1;
      b2 = t2;
      b3 = t3;

      stepNum++;
      if (stepNum > 50) break;
    }

    const gcd = a3;
    let inverse: number | null = null;
    if (gcd === 1) {
      inverse = ((a2 % a) + a) % a;
    }

    return { steps, gcd, inverse };
  };

  const euclidSteps = computeEuclidSteps(inputA, inputB);
  const gcdResult = euclidSteps.length > 0 ? (euclidSteps[euclidSteps.length - 1].r === 0 ? euclidSteps[euclidSteps.length - 1].b : euclidSteps[euclidSteps.length - 1].r) : inputA;
  const { steps: extSteps, inverse: extInverse } = computeExtendedSteps(inputA, inputB);

  const presets = [
    { label: 'gcd(710, 310)', a: 710, b: 310, desc: 'Stallings Ch 2 Example' },
    { label: 'gcd(1759, 550)', a: 1759, b: 550, desc: 'Exam Modular Inverse' },
    { label: 'gcd(252, 105)', a: 252, b: 105, desc: 'Faculty Lecture Slide' },
    { label: 'gcd(11, 7)', a: 11, b: 7, desc: 'Small Prime Pair' },
  ];

  return (
    <div className="border-2 border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-4 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded border border-[#171717] bg-[#171717] text-[#FFFFFF] flex items-center justify-center shrink-0">
            <Layers size={18} />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#737373] block">
              Figure 2.2 / Interactive Mathematical Architecture
            </span>
            <h3 className="text-lg font-bold text-[#171717] tracking-tight">
              Euclidean & Extended Euclidean Algorithm Ladder
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1 border border-[#171717] rounded p-1 bg-[#FAFAFA]">
          <button
            onClick={() => setActiveTab('standard')}
            className={`px-3 py-1 text-xs font-mono font-bold rounded transition-colors ${
              activeTab === 'standard' ? 'bg-[#171717] text-[#FFFFFF]' : 'text-[#525252] hover:text-[#171717]'
            }`}
          >
            Standard Euclid
          </button>
          <button
            onClick={() => setActiveTab('extended')}
            className={`px-3 py-1 text-xs font-mono font-bold rounded transition-colors ${
              activeTab === 'extended' ? 'bg-[#171717] text-[#FFFFFF]' : 'text-[#525252] hover:text-[#171717]'
            }`}
          >
            Extended (Inverses)
          </button>
        </div>
      </div>

      {/* Preset Buttons & Custom Input */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#FAFAFA] border border-[#E5E5E5] p-3 rounded">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-bold text-[#737373] uppercase">Curriculum Presets:</span>
          {presets.map((pr, idx) => (
            <button
              key={idx}
              onClick={() => {
                setInputA(pr.a);
                setInputB(pr.b);
              }}
              className={`px-2.5 py-1 text-xs font-mono border rounded transition-colors ${
                inputA === pr.a && inputB === pr.b
                  ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
                  : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:border-[#171717]'
              }`}
            >
              {pr.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs font-mono font-bold text-[#171717]">a =</label>
          <input
            type="number"
            value={inputA}
            onChange={(e) => setInputA(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-20 px-2 py-1 text-xs font-mono border border-[#171717] rounded bg-[#FFFFFF]"
          />
          <label className="text-xs font-mono font-bold text-[#171717]">b =</label>
          <input
            type="number"
            value={inputB}
            onChange={(e) => setInputB(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-20 px-2 py-1 text-xs font-mono border border-[#171717] rounded bg-[#FFFFFF]"
          />
        </div>
      </div>

      {/* Mathematical Principle Callout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono bg-[#FFFFFF] border border-[#E5E5E5] p-3 rounded">
        <div>
          <span className="font-bold text-[#171717] block mb-1">Division Algorithm Theorem:</span>
          <p className="text-[#525252]">
            For any non-negative integer <span className="font-bold">a</span> and positive integer <span className="font-bold">b</span>, there exist unique integers <span className="font-bold">q</span> and <span className="font-bold">r</span> such that:
          </p>
          <div className="my-1 text-center font-bold text-[#171717]">
            <MathDisplay latex="a = q \cdot b + r \quad \text{where } 0 \le r < b" />
          </div>
        </div>
        <div>
          <span className="font-bold text-[#171717] block mb-1">Euclidean Recurrence:</span>
          <p className="text-[#525252]">
            At every iteration: <MathDisplay latex="\gcd(a, b) = \gcd(b, a \bmod b) = \gcd(b, r)" inline />. The ladder terminates when remainder <MathDisplay latex="r = 0" inline />, and the last non-zero remainder is the greatest common divisor!
          </p>
        </div>
      </div>

      {/* Standard Euclidean Table */}
      {activeTab === 'standard' && (
        <div className="space-y-4">
          <div className="overflow-x-auto border border-[#171717] rounded">
            <table className="w-full text-xs font-mono border-collapse text-left">
              <thead>
                <tr className="bg-[#171717] text-[#FFFFFF] border-b border-[#171717]">
                  <th className="p-2.5 border-r border-[#333333] text-center w-14">Step</th>
                  <th className="p-2.5 border-r border-[#333333]">Dividend (a)</th>
                  <th className="p-2.5 border-r border-[#333333]">Divisor (b)</th>
                  <th className="p-2.5 border-r border-[#333333] text-center">Quotient (q)</th>
                  <th className="p-2.5 border-r border-[#333333] text-center">Remainder (r)</th>
                  <th className="p-2.5">Division Identity / Equation</th>
                </tr>
              </thead>
              <tbody>
                {euclidSteps.map((st, idx) => {
                  const isLast = idx === euclidSteps.length - 1;
                  return (
                    <tr
                      key={st.step}
                      className={`border-b border-[#E5E5E5] transition-colors ${
                        isLast ? 'bg-[#FAFAFA] font-bold' : 'hover:bg-[#FAFAFA]'
                      }`}
                    >
                      <td className="p-2.5 border-r border-[#E5E5E5] text-center text-[#737373]">
                        {st.step}
                      </td>
                      <td className="p-2.5 border-r border-[#E5E5E5] font-bold text-[#171717]">
                        {st.a}
                      </td>
                      <td className="p-2.5 border-r border-[#E5E5E5] font-bold text-[#171717]">
                        {st.b}
                      </td>
                      <td className="p-2.5 border-r border-[#E5E5E5] text-center text-[#525252]">
                        {st.q}
                      </td>
                      <td className="p-2.5 border-r border-[#E5E5E5] text-center font-bold">
                        <span
                          className={`px-2 py-0.5 rounded ${
                            st.r === 0
                              ? 'border border-[#171717] bg-[#171717] text-[#FFFFFF]'
                              : isLast
                              ? 'border border-[#171717] bg-[#E5E5E5] text-[#171717]'
                              : 'text-[#171717]'
                          }`}
                        >
                          {st.r}
                        </span>
                      </td>
                      <td className="p-2.5 font-mono text-[#171717]">
                        <span className="font-bold">{st.a}</span> = ({st.q} × <span className="font-bold">{st.b}</span>) +{' '}
                        <span className="font-bold underline">{st.r}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Result Banner */}
          <div className="p-4 border-2 border-[#171717] bg-[#171717] text-[#FFFFFF] rounded flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A3A3] block font-bold">
                Computed Greatest Common Divisor / Ø§Ù„Ù‚Ø§Ø³Ù… Ø§Ù„Ù…Ø´ØªØ±Ùƒ Ø§Ù„Ø£ÙƒØ¨Ø±:
              </span>
              <span className="text-xl font-bold font-mono">
                gcd({inputA}, {inputB}) = {gcdResult}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono border border-[#525252] px-3 py-1.5 rounded bg-[#333333]">
              <CheckCircle2 size={15} />
              <span>
                {gcdResult === 1
                  ? 'Relatively Prime / coprime (Ø£ÙˆÙ„ÙŠØ§Ù† Ù†Ø³Ø¨ÙŠØ§Ù‹)'
                  : `Composite Divisor (${gcdResult})`}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Extended Euclidean Table */}
      {activeTab === 'extended' && (
        <div className="space-y-4">
          <div className="p-3 border border-[#E5E5E5] bg-[#FAFAFA] rounded text-xs space-y-1">
            <span className="font-mono font-bold text-[#171717] uppercase block">
              Bézout Identity & Modular Inverse Algorithm (Stallings Table 2.4):
            </span>
            <p className="text-[#525252] font-mono leading-relaxed">
              Maintains invariant vectors <MathDisplay latex="(A_1, A_2, A_3)" inline /> and <MathDisplay latex="(B_1, B_2, B_3)" inline /> such that <MathDisplay latex="A_1 a + A_2 b = A_3" inline /> and <MathDisplay latex="B_1 a + B_2 b = B_3" inline />. When <MathDisplay latex="B_3 = 0" inline />, <MathDisplay latex="A_3 = \gcd(a, b)" inline /> and <MathDisplay latex="A_2 \equiv b^{-1} \pmod a" inline />.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#171717] rounded">
            <table className="w-full text-xs font-mono border-collapse text-left">
              <thead>
                <tr className="bg-[#171717] text-[#FFFFFF] border-b border-[#171717]">
                  <th className="p-2 border-r border-[#333333] text-center w-12">Step</th>
                  <th className="p-2 border-r border-[#333333] text-center w-12">q</th>
                  <th className="p-2 border-r border-[#333333] text-center">A1</th>
                  <th className="p-2 border-r border-[#333333] text-center">A2</th>
                  <th className="p-2 border-r border-[#333333] text-center font-bold">A3</th>
                  <th className="p-2 border-r border-[#333333] text-center">B1</th>
                  <th className="p-2 border-r border-[#333333] text-center font-bold">B2</th>
                  <th className="p-2 text-center font-bold">B3</th>
                </tr>
              </thead>
              <tbody>
                {extSteps.map((row, idx) => {
                  const isEnd = idx === extSteps.length - 1;
                  return (
                    <tr
                      key={idx}
                      className={`border-b border-[#E5E5E5] ${
                        isEnd ? 'bg-[#FAFAFA] font-bold' : 'hover:bg-[#FAFAFA]'
                      }`}
                    >
                      <td className="p-2 border-r border-[#E5E5E5] text-center text-[#737373]">{row.step}</td>
                      <td className="p-2 border-r border-[#E5E5E5] text-center">{idx === 0 ? '—' : row.q}</td>
                      <td className="p-2 border-r border-[#E5E5E5] text-center">{row.a1}</td>
                      <td className="p-2 border-r border-[#E5E5E5] text-center">{row.a2}</td>
                      <td className="p-2 border-r border-[#E5E5E5] text-center font-bold text-[#171717]">{row.a3}</td>
                      <td className="p-2 border-r border-[#E5E5E5] text-center">{row.b1}</td>
                      <td className="p-2 border-r border-[#E5E5E5] text-center font-bold text-[#171717]">{row.b2}</td>
                      <td className="p-2 text-center font-bold text-[#171717]">{row.b3}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Inverse Result Callout */}
          <div className="p-4 border-2 border-[#171717] bg-[#171717] text-[#FFFFFF] rounded flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A3A3] block font-bold">
                Modular Multiplicative Inverse / Ø§Ù„Ù…Ø¹ÙƒÙˆØ³ Ø§Ù„Ø¶Ø±Ø¨ÙŠ Ø§Ù„Ù…Ø¹ÙŠØ§Ø±ÙŠ:
              </span>
              <span className="text-xl font-bold font-mono">
                {extInverse !== null ? (
                  <>{inputB}⁻¹ mod {inputA} = {extInverse}</>
                ) : (
                  <>NO INVERSE EXISTS (gcd ≠ 1)</>
                )}
              </span>
            </div>
            {extInverse !== null && (
              <div className="text-xs font-mono border border-[#525252] px-3 py-1.5 rounded bg-[#333333]">
                Verification: ({inputB} × {extInverse}) mod {inputA} = {(inputB * extInverse) % inputA}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

