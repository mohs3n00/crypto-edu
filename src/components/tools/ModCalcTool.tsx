import React, { useState, useMemo } from 'react';

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

const modInverse = (a: number, m: number): number => {
  let [m0, x0, x1] = [m, 0, 1];
  let aVal = ((a % m) + m) % m;
  if (m === 1) return 0;
  while (aVal > 1) {
    const q = Math.floor(aVal / m0);
    let t = m0;
    m0 = aVal % m0;
    aVal = t;
    t = x0;
    x0 = x1 - q * x0;
    x1 = t;
  }
  if (x1 < 0) x1 += m;
  return x1;
};

export default function ModCalcTool(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<'ops' | 'totient' | 'crt'>('crt');

  // Basic modular arithmetic state
  const [opA, setOpA] = useState(11);
  const [opB, setOpB] = useState(15);
  const [opMod, setOpMod] = useState(8);

  // Totient state
  const [totientN, setTotientN] = useState(35);

  // CRT state: x = a_i (mod m_i)
  const [crtRows, setCrtRows] = useState([
    { a: 2, m: 3 },
    { a: 3, m: 5 },
    { a: 2, m: 7 },
  ]);

  // Basic ops calculations
  const basicOps = useMemo(() => {
    const n = Math.max(1, opMod);
    const aMod = ((opA % n) + n) % n;
    const bMod = ((opB % n) + n) % n;
    const add = (aMod + bMod) % n;
    const sub = ((aMod - bMod) % n + n) % n;
    const mul = (aMod * bMod) % n;

    // Modular exponentiation (opA^opB mod n)
    let pow = 1;
    let base = aMod;
    let exp = Math.max(0, opB);
    while (exp > 0) {
      if (exp % 2 === 1) pow = (pow * base) % n;
      base = (base * base) % n;
      exp = Math.floor(exp / 2);
    }

    return { aMod, bMod, add, sub, mul, pow };
  }, [opA, opB, opMod]);

  // Euler Totient calculation
  const totientResult = useMemo(() => {
    const n = Math.max(1, totientN);
    const factors: { prime: number; power: number }[] = [];
    let rem = n;

    for (let d = 2; d * d <= rem; d++) {
      if (rem % d === 0) {
        let count = 0;
        while (rem % d === 0) {
          count++;
          rem /= d;
        }
        factors.push({ prime: d, power: count });
      }
    }
    if (rem > 1) {
      factors.push({ prime: rem, power: 1 });
    }

    // phi(n) = n * prod(1 - 1/p)
    let phi = n;
    for (const f of factors) {
      phi = Math.floor((phi * (f.prime - 1)) / f.prime);
    }

    // Find coprimes
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const coprimes: number[] = [];
    for (let i = 1; i <= n; i++) {
      if (gcd(i, n) === 1) coprimes.push(i);
    }

    return {
      n,
      factors,
      phi,
      coprimes,
    };
  }, [totientN]);

  // CRT calculation
  const crtResult = useMemo(() => {
    // Check if moduli are pairwise coprime
    let pairwiseCoprime = true;
    for (let i = 0; i < crtRows.length; i++) {
      for (let j = i + 1; j < crtRows.length; j++) {
        if (gcd(crtRows[i].m, crtRows[j].m) !== 1) {
          pairwiseCoprime = false;
        }
      }
    }

    const M = crtRows.reduce((acc, row) => acc * row.m, 1);

    const steps = crtRows.map((row, idx) => {
      const partialM = Math.floor(M / row.m);
      const inv = modInverse(partialM, row.m);
      const term = row.a * partialM * inv;
      return {
        idx: idx + 1,
        a_i: row.a,
        m_i: row.m,
        M_i: partialM,
        invM_i: inv,
        term,
      };
    });

    const sumTerms = steps.reduce((acc, s) => acc + s.term, 0);
    const solution = ((sumTerms % M) + M) % M;

    return {
      pairwiseCoprime,
      M,
      steps,
      sumTerms,
      solution,
    };
  }, [crtRows]);

  const updateCrtRow = (index: number, field: 'a' | 'm', val: number) => {
    const copy = [...crtRows];
    copy[index] = { ...copy[index], [field]: Math.max(1, val) };
    setCrtRows(copy);
  };

  return (
    <div className="space-y-6">
      <div className="border border-neutral-gray p-6 bg-white rounded">
        <h3 className="text-xl font-semibold text-near-black mb-1">
          Modular Arithmetic, Totient & CRT Lab
        </h3>
        <p className="text-sm text-dark-gray" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
          مختبر الحساب المعياري: العمليات المعيارية، دالة مؤشر أويلر φ(n)، وحل مبرهنة الباقي الصينية (CRT)
        </p>

        {/* Tab switch */}
        <div className="flex border-b border-neutral-gray my-4">
          <button
            onClick={() => setActiveTab('crt')}
            className={`py-2 px-4 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'crt'
                ? 'border-black text-black'
                : 'border-transparent text-medium-gray hover:text-dark-gray'
            }`}
          >
            Chinese Remainder Theorem (CRT)
          </button>
          <button
            onClick={() => setActiveTab('totient')}
            className={`py-2 px-4 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'totient'
                ? 'border-black text-black'
                : 'border-transparent text-medium-gray hover:text-dark-gray'
            }`}
          >
            Euler's Totient φ(n)
          </button>
          <button
            onClick={() => setActiveTab('ops')}
            className={`py-2 px-4 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'ops'
                ? 'border-black text-black'
                : 'border-transparent text-medium-gray hover:text-dark-gray'
            }`}
          >
            Modular Arithmetic Operations
          </button>
        </div>

        {/* Tab 1: CRT */}
        {activeTab === 'crt' && (
          <div className="space-y-4">
            <div className="p-3 bg-near-white border border-neutral-gray rounded text-xs space-y-1">
              <div className="font-semibold uppercase tracking-wider text-dark-gray">
                Simultaneous Congruence System: x ≡ a_i (mod m_i)
              </div>
              <p className="text-dark-gray">
                Requires moduli to be pairwise relatively prime: gcd(m_i, m_j) = 1 for all i ≠ j.
              </p>
            </div>

            {/* Congruences input table */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold uppercase tracking-wider text-dark-gray">
                  Congruences:
                </label>
                <button
                  onClick={() =>
                    setCrtRows([
                      { a: 2, m: 3 },
                      { a: 3, m: 5 },
                      { a: 2, m: 7 },
                    ])
                  }
                  className="btn btn-secondary text-xs"
                >
                  Reset to Textbook Example (x ≡ 23 mod 105)
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {crtRows.map((row, i) => (
                  <div key={i} className="p-3 border border-neutral-gray rounded bg-near-white font-mono text-xs">
                    <div className="font-bold text-black mb-2">Equation {i + 1}</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-12 text-medium-gray">Remainder a_{i + 1}:</span>
                        <input
                          type="number"
                          value={row.a}
                          onChange={(e) => updateCrtRow(i, 'a', parseInt(e.target.value, 10) || 0)}
                          className="w-16 p-1 border border-neutral-gray rounded font-bold bg-white text-center"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-12 text-medium-gray">Modulus m_{i + 1}:</span>
                        <input
                          type="number"
                          value={row.m}
                          onChange={(e) => updateCrtRow(i, 'm', parseInt(e.target.value, 10) || 1)}
                          className="w-16 p-1 border border-neutral-gray rounded font-bold bg-white text-center"
                        />
                      </div>
                      <div className="text-[11px] text-dark-gray pt-1 border-t border-light-gray">
                        x ≡ {row.a} (mod {row.m})
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Validation badge */}
            <div className="text-xs font-mono">
              Status:{' '}
              {crtResult.pairwiseCoprime ? (
                <span className="text-black font-semibold bg-near-white px-2 py-0.5 rounded border border-black">
                  ✓ Pairwise Coprime: Moduli are valid for CRT
                </span>
              ) : (
                <span className="text-dark-gray font-semibold bg-light-gray px-2 py-0.5 rounded border border-dashed border-dark-gray">
                  ⚠️ Error: Moduli are NOT pairwise coprime!
                </span>
              )}
            </div>

            {/* Detailed calculation table */}
            <div className="border border-neutral-gray rounded overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-near-black text-white">
                  <tr>
                    <th className="p-2">i</th>
                    <th className="p-2">a_i</th>
                    <th className="p-2">m_i</th>
                    <th className="p-2">M_i = M/m_i</th>
                    <th className="p-2">M_i⁻¹ (mod m_i)</th>
                    <th className="p-2">Product Term (a_i · M_i · M_i⁻¹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-gray bg-white">
                  {crtResult.steps.map((s) => (
                    <tr key={s.idx} className="hover:bg-near-white">
                      <td className="p-2 font-bold text-medium-gray">{s.idx}</td>
                      <td className="p-2">{s.a_i}</td>
                      <td className="p-2 font-bold">{s.m_i}</td>
                      <td className="p-2">
                        {crtResult.M} / {s.m_i} = <strong>{s.M_i}</strong>
                      </td>
                      <td className="p-2 font-bold">{s.invM_i}</td>
                      <td className="p-2 bg-light-gray">
                        {s.a_i} × {s.M_i} × {s.invM_i} = <strong>{s.term}</strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Final reconstruction result */}
            <div className="p-4 bg-near-white border border-neutral-gray rounded font-mono text-sm space-y-1">
              <div className="flex justify-between items-center">
                <span>Total Modulus M = m₁ · m₂ · m₃:</span>
                <span className="font-bold">{crtResult.M}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sum of Terms Σ(a_i · M_i · M_i⁻¹):</span>
                <span>{crtResult.sumTerms}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-neutral-gray font-bold text-base text-black">
                <span>Unique Solution x = ({crtResult.sumTerms}) mod {crtResult.M}:</span>
                <span className="bg-white px-3 py-1 rounded border border-black">
                  x = {crtResult.solution}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Totient */}
        {activeTab === 'totient' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
                  Enter Integer n:
                </label>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={totientN}
                  onChange={(e) => setTotientN(parseInt(e.target.value, 10) || 1)}
                  className="w-full p-2 border border-neutral-gray rounded font-mono text-base font-bold bg-near-white focus:outline-none focus:border-black"
                />
              </div>

              <div className="p-4 bg-near-white border border-neutral-gray rounded flex items-center justify-between font-mono">
                <div>
                  <div className="text-xs text-medium-gray">Result Value:</div>
                  <div className="text-xl font-bold text-black">φ({totientResult.n}) = {totientResult.phi}</div>
                </div>
                <div className="text-xs text-dark-gray">
                  {totientResult.factors.map((f) => `${f.prime}^${f.power}`).join(' × ')}
                </div>
              </div>
            </div>

            <div className="p-4 border border-neutral-gray rounded bg-white">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-dark-gray mb-2">
                All Coprime Integers ≤ {totientResult.n} ({totientResult.coprimes.length} values):
              </h4>
              <div className="flex flex-wrap gap-1 max-h-40 overflow-y-auto font-mono text-xs">
                {totientResult.coprimes.map((c) => (
                  <span key={c} className="p-1 border border-neutral-gray rounded bg-near-white">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Basic Ops */}
        {activeTab === 'ops' && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
                  Operand a:
                </label>
                <input
                  type="number"
                  value={opA}
                  onChange={(e) => setOpA(parseInt(e.target.value, 10) || 0)}
                  className="w-full p-2 border border-neutral-gray rounded font-mono text-sm bg-near-white text-center"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
                  Operand b:
                </label>
                <input
                  type="number"
                  value={opB}
                  onChange={(e) => setOpB(parseInt(e.target.value, 10) || 0)}
                  className="w-full p-2 border border-neutral-gray rounded font-mono text-sm bg-near-white text-center"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
                  Modulus n:
                </label>
                <input
                  type="number"
                  min="1"
                  value={opMod}
                  onChange={(e) => setOpMod(parseInt(e.target.value, 10) || 1)}
                  className="w-full p-2 border border-neutral-gray rounded font-mono text-sm bg-near-white text-center font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              <div className="p-3 border border-neutral-gray rounded bg-near-white text-center">
                <div className="text-medium-gray mb-1">({opA} + {opB}) mod {opMod}</div>
                <div className="text-lg font-bold text-black">{basicOps.add}</div>
              </div>
              <div className="p-3 border border-neutral-gray rounded bg-near-white text-center">
                <div className="text-medium-gray mb-1">({opA} - {opB}) mod {opMod}</div>
                <div className="text-lg font-bold text-black">{basicOps.sub}</div>
              </div>
              <div className="p-3 border border-neutral-gray rounded bg-near-white text-center">
                <div className="text-medium-gray mb-1">({opA} × {opB}) mod {opMod}</div>
                <div className="text-lg font-bold text-black">{basicOps.mul}</div>
              </div>
              <div className="p-3 border border-neutral-gray rounded bg-near-white text-center">
                <div className="text-medium-gray mb-1">({opA}^{opB}) mod {opMod}</div>
                <div className="text-lg font-bold text-black">{basicOps.pow}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

