import React, { useState, useMemo } from 'react';
import MathDisplay from '../ui/MathDisplay';

export default function EuclideanTool(): React.ReactElement {
  const [numA, setNumA] = useState(1759);
  const [numB, setNumB] = useState(550);
  const [activeTab, setActiveTab] = useState<'extended' | 'basic'>('extended');

  // Euclidean steps: a = q*b + r
  const euclideanSteps = useMemo(() => {
    let a = Math.abs(numA);
    let b = Math.abs(numB);
    if (b > a) {
      const temp = a;
      a = b;
      b = temp;
    }

    const rows: { step: number; a: number; b: number; q: number; r: number; equation: string }[] = [];
    let step = 1;

    while (b > 0) {
      const q = Math.floor(a / b);
      const r = a % b;
      rows.push({
        step,
        a,
        b,
        q,
        r,
        equation: `${a} = ${q} \\times ${b} + ${r}`,
      });
      a = b;
      b = r;
      step++;
    }

    return {
      gcd: a,
      rows,
    };
  }, [numA, numB]);

  // Extended Euclidean steps (Stallings Table 2.4 format)
  // Computes gcd(a, b) = d = ax + by
  const extendedSteps = useMemo(() => {
    const a0 = Math.abs(numA);
    const b0 = Math.abs(numB);

    // Initial table setup
    // rows store: [q, r1, r2, r, x1, x2, x, y1, y2, y]
    let r1 = a0;
    let r2 = b0;
    let x1 = 1;
    let x2 = 0;
    let y1 = 0;
    let y2 = 1;

    const rows: {
      step: number;
      q: number;
      r1: number;
      r2: number;
      r: number;
      x1: number;
      x2: number;
      x: number;
      y1: number;
      y2: number;
      y: number;
    }[] = [];

    let step = 1;

    while (r2 > 0) {
      const q = Math.floor(r1 / r2);
      const r = r1 - q * r2;
      const x = x1 - q * x2;
      const y = y1 - q * y2;

      rows.push({
        step,
        q,
        r1,
        r2,
        r,
        x1,
        x2,
        x,
        y1,
        y2,
        y,
      });

      r1 = r2;
      r2 = r;
      x1 = x2;
      x2 = x;
      y1 = y2;
      y2 = y;
      step++;
    }

    // Result gcd is r1, bezout coefficients are x1 and y1
    const gcdVal = r1;
    const bezoutX = x1;
    const bezoutY = y1;
    const verified = a0 * bezoutX + b0 * bezoutY === gcdVal;

    // Modular inverse of b modulo a (if gcd === 1)
    let invBModA: number | null = null;
    if (gcdVal === 1) {
      invBModA = ((bezoutY % a0) + a0) % a0;
    }

    return {
      gcdVal,
      bezoutX,
      bezoutY,
      verified,
      invBModA,
      rows,
    };
  }, [numA, numB]);

  return (
    <div className="space-y-6">
      <div className="border border-neutral-gray p-6 bg-white rounded">
        <h3 className="text-xl font-semibold text-near-black mb-1">
          Euclidean & Extended Euclidean Algorithm Lab
        </h3>
        <p className="text-sm text-dark-gray" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
          خوارزمية إقليدس وإقليدس الممتدة: حساب القاسم المشترك الأكبر، معاملات بيزو (Bézout)، والمعكوس الضربي المعياري
        </p>

        {/* Presets */}
        <div className="flex flex-wrap gap-2 my-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-dark-gray self-center mr-1">
            Lecture Presets:
          </span>
          <button
            onClick={() => {
              setNumA(1759);
              setNumB(550);
              setActiveTab('extended');
            }}
            className="btn btn-secondary text-xs"
          >
            Table 2.4: 1759 & 550 (x=-111, y=355)
          </button>
          <button
            onClick={() => {
              setNumA(710);
              setNumB(310);
              setActiveTab('basic');
            }}
            className="btn btn-secondary text-xs"
          >
            Figure 2.3: 710 & 310 (gcd=10)
          </button>
          <button
            onClick={() => {
              setNumA(1160718174);
              setNumB(316258250);
              setActiveTab('basic');
            }}
            className="btn btn-secondary text-xs"
          >
            Table 2.1: Large Example (gcd=1078)
          </button>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
              Integer a (العدد الأول)
            </label>
            <input
              type="number"
              value={numA}
              onChange={(e) => setNumA(parseInt(e.target.value, 10) || 0)}
              className="w-full p-2 border border-neutral-gray rounded font-mono text-sm bg-near-white focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
              Integer b (العدد الثاني)
            </label>
            <input
              type="number"
              value={numB}
              onChange={(e) => setNumB(parseInt(e.target.value, 10) || 0)}
              className="w-full p-2 border border-neutral-gray rounded font-mono text-sm bg-near-white focus:outline-none focus:border-black"
            />
          </div>
        </div>

        {/* Mode tabs */}
        <div className="flex border-b border-neutral-gray mb-4">
          <button
            onClick={() => setActiveTab('extended')}
            className={`py-2 px-4 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'extended'
                ? 'border-black text-black'
                : 'border-transparent text-medium-gray hover:text-dark-gray'
            }`}
          >
            Extended Euclidean (الممتدة: المعاملات والمعكوس)
          </button>
          <button
            onClick={() => setActiveTab('basic')}
            className={`py-2 px-4 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'basic'
                ? 'border-black text-black'
                : 'border-transparent text-medium-gray hover:text-dark-gray'
            }`}
          >
            Standard Euclidean (الأساسية: خطوات القسمة)
          </button>
        </div>

        {/* Content based on tab */}
        {activeTab === 'extended' ? (
          <div>
            {/* Summary card */}
            <div className="p-4 bg-near-white border border-neutral-gray rounded space-y-2 font-mono text-sm mb-4">
              <div className="flex justify-between items-center">
                <span>Greatest Common Divisor d = gcd({numA}, {numB}):</span>
                <span className="font-bold text-base text-black">{extendedSteps.gcdVal}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Bézout Identity: d = ax + by:</span>
                <span className="font-semibold text-black">
                  {numA}({extendedSteps.bezoutX}) + {numB}({extendedSteps.bezoutY}) = {extendedSteps.gcdVal}
                </span>
              </div>
              {extendedSteps.invBModA !== null && (
                <div className="flex justify-between items-center pt-2 border-t border-neutral-gray">
                  <span>Modular Inverse ({numB}⁻¹ mod {numA}):</span>
                  <span className="font-bold text-base text-black bg-white px-2 py-0.5 rounded border border-neutral-gray">
                    {extendedSteps.invBModA}
                  </span>
                </div>
              )}
            </div>

            {/* Extended table */}
            <h4 className="text-xs font-semibold uppercase tracking-wider text-dark-gray mb-2">
              Step-by-Step Extended Tableau (جدول خوارزمية إقليدس الممتدة)
            </h4>
            <div className="overflow-x-auto border border-neutral-gray rounded">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-near-black text-white">
                  <tr>
                    <th className="p-2">Step</th>
                    <th className="p-2">q</th>
                    <th className="p-2">r₁</th>
                    <th className="p-2">r₂</th>
                    <th className="p-2">r</th>
                    <th className="p-2">x₁</th>
                    <th className="p-2">x₂</th>
                    <th className="p-2">x</th>
                    <th className="p-2">y₁</th>
                    <th className="p-2">y₂</th>
                    <th className="p-2">y</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-gray bg-white">
                  {extendedSteps.rows.map((row) => (
                    <tr key={row.step} className="hover:bg-near-white">
                      <td className="p-2 font-bold text-medium-gray">{row.step}</td>
                      <td className="p-2">{row.q}</td>
                      <td className="p-2">{row.r1}</td>
                      <td className="p-2">{row.r2}</td>
                      <td className="p-2 font-bold">{row.r}</td>
                      <td className="p-2">{row.x1}</td>
                      <td className="p-2">{row.x2}</td>
                      <td className="p-2">{row.x}</td>
                      <td className="p-2">{row.y1}</td>
                      <td className="p-2">{row.y2}</td>
                      <td className="p-2">{row.y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Standard Euclidean division rows */
          <div>
            <div className="p-4 bg-near-white border border-neutral-gray rounded flex justify-between items-center font-mono text-sm mb-4">
              <span>Final Result: gcd({numA}, {numB})</span>
              <span className="font-bold text-lg text-black">{euclideanSteps.gcd}</span>
            </div>

            <h4 className="text-xs font-semibold uppercase tracking-wider text-dark-gray mb-2">
              Division with Remainder Sequence (خطوات القسمة المتتالية a = qb + r)
            </h4>
            <div className="space-y-2">
              {euclideanSteps.rows.map((row) => (
                <div
                  key={row.step}
                  className="p-3 bg-white border border-light-gray rounded flex items-center justify-between font-mono text-xs hover:bg-near-white"
                >
                  <span className="text-medium-gray font-semibold w-16">Step {row.step}:</span>
                  <div className="flex-1 px-4">
                    <MathDisplay latex={row.equation} />
                  </div>
                  <span className="text-dark-gray">
                    Remainder r = <strong className="text-black">{row.r}</strong>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

