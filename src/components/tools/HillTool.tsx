import React, { useState, useMemo } from 'react';
import MathDisplay from '../ui/MathDisplay';

export default function HillTool(): React.ReactElement {
  const [matrixSize, setMatrixSize] = useState<2 | 3>(3);
  // Default to Midterm 2022 problem
  const [matrix3x3, setMatrix3x3] = useState<number[][]>([
    [2, 8, 15],
    [7, 4, 17],
    [8, 13, 6],
  ]);
  const [matrix2x2, setMatrix2x2] = useState<number[][]>([
    [9, 4],
    [5, 7],
  ]);
  const [plaintext, setPlaintext] = useState('safe messages');
  const [activePreset, setActivePreset] = useState<'mid22' | 'mid20' | 'hill2x2'>('mid22');

  const currentMatrix = matrixSize === 3 ? matrix3x3 : matrix2x2;

  // Clean and prepare input blocks
  const cleanInput = useMemo(() => {
    return plaintext.toUpperCase().replace(/[^A-Z]/g, '');
  }, [plaintext]);

  // Compute determinant for 2x2 and 3x3 mod 26
  const determinant = useMemo(() => {
    if (matrixSize === 2) {
      const [a, b] = currentMatrix[0];
      const [c, d] = currentMatrix[1];
      const det = a * d - b * c;
      return ((det % 26) + 26) % 26;
    } else {
      const m = currentMatrix;
      const det =
        m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) -
        m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) +
        m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
      return ((det % 26) + 26) % 26;
    }
  }, [currentMatrix, matrixSize]);

  // Check gcd(det, 26) === 1
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const isKeyInvertible = gcd(determinant, 26) === 1;

  // Form blocks and calculate step by step
  const calculationSteps = useMemo(() => {
    const blocks: {
      blockChars: string;
      vector: number[];
      rawProducts: number[];
      modProducts: number[];
      outChars: string;
      lines: string[];
    }[] = [];

    // Pad if not multiple of matrixSize
    let padded = cleanInput;
    const rem = padded.length % matrixSize;
    if (rem !== 0) {
      padded += 'X'.repeat(matrixSize - rem);
    }

    for (let i = 0; i < padded.length; i += matrixSize) {
      const chunk = padded.slice(i, i + matrixSize);
      const vec = chunk.split('').map((c) => c.charCodeAt(0) - 65);

      const raw: number[] = [];
      const mod: number[] = [];
      const lines: string[] = [];

      for (let r = 0; r < matrixSize; r++) {
        let sum = 0;
        const terms: string[] = [];
        for (let c = 0; c < matrixSize; c++) {
          const prod = currentMatrix[r][c] * vec[c];
          sum += prod;
          terms.push(`${currentMatrix[r][c]} \\times ${vec[c]}`);
        }
        const reduced = ((sum % 26) + 26) % 26;
        raw.push(sum);
        mod.push(reduced);
        lines.push(`Row ${r + 1}: ${terms.join(' + ')} = ${sum} \\equiv ${reduced} \\pmod{26} \\rightarrow \\text{'${String.fromCharCode(reduced + 65)}'}`);
      }

      blocks.push({
        blockChars: chunk,
        vector: vec,
        rawProducts: raw,
        modProducts: mod,
        outChars: mod.map((v) => String.fromCharCode(v + 65)).join(''),
        lines,
      });
    }

    return blocks;
  }, [cleanInput, currentMatrix, matrixSize]);

  const fullCiphertext = calculationSteps.map((b) => b.outChars).join('');

  // Handle cell edits
  const handleMatrixChange = (r: number, c: number, val: string) => {
    const num = parseInt(val, 10) || 0;
    if (matrixSize === 3) {
      const copy = matrix3x3.map((row) => [...row]);
      copy[r][c] = num;
      setMatrix3x3(copy);
    } else {
      const copy = matrix2x2.map((row) => [...row]);
      copy[r][c] = num;
      setMatrix2x2(copy);
    }
  };

  const setPreset = (preset: 'mid22' | 'mid20' | 'hill2x2') => {
    setActivePreset(preset);
    if (preset === 'mid22') {
      setMatrixSize(3);
      setMatrix3x3([
        [2, 8, 15],
        [7, 4, 17],
        [8, 13, 6],
      ]);
      setPlaintext('safe messages');
    } else if (preset === 'mid20') {
      setMatrixSize(3);
      setMatrix3x3([
        [21, 5, 11],
        [14, 7, 12],
        [5, 25, 12],
      ]);
      setPlaintext('Secrecy');
    } else if (preset === 'hill2x2') {
      setMatrixSize(2);
      setMatrix2x2([
        [9, 4],
        [5, 7],
      ]);
      setPlaintext('friday');
    }
  };

  return (
    <div className="space-y-6">
      <div className="border border-neutral-gray p-6 bg-white rounded">
        <h3 className="text-xl font-semibold text-near-black mb-1">Hill Cipher Interactive Lab</h3>
        <p className="text-sm text-dark-gray" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
          شفرة هيل التفاعلية: ضرب المصفوفات بمقياس 26 واختبار قابلية العكس والتحقق من حلول امتحانات الميدتيرم
        </p>

        {/* Presets */}
        <div className="flex flex-wrap gap-2 my-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-dark-gray self-center mr-1">
            Exam Presets:
          </span>
          <button
            onClick={() => setPreset('mid22')}
            className={`btn text-xs ${activePreset === 'mid22' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Midterm 2022: "saf" with K 3x3 → "HDS"
          </button>
          <button
            onClick={() => setPreset('mid20')}
            className={`btn text-xs ${activePreset === 'mid20' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Midterm 2020: "Sec" with K 3x3 → "ESG"
          </button>
          <button
            onClick={() => setPreset('hill2x2')}
            className={`btn text-xs ${activePreset === 'hill2x2' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Classic 2x2 Example: "friday"
          </button>
        </div>

        {/* Matrix & Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          {/* Matrix editor */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-dark-gray">
                Key Matrix K ({matrixSize}×{matrixSize} Modulo 26)
              </label>
              <div className="flex gap-1">
                <button
                  onClick={() => setMatrixSize(2)}
                  className={`px-2 py-0.5 text-xs rounded border ${
                    matrixSize === 2 ? 'bg-black text-white border-black' : 'border-neutral-gray'
                  }`}
                >
                  2×2
                </button>
                <button
                  onClick={() => setMatrixSize(3)}
                  className={`px-2 py-0.5 text-xs rounded border ${
                    matrixSize === 3 ? 'bg-black text-white border-black' : 'border-neutral-gray'
                  }`}
                >
                  3×3
                </button>
              </div>
            </div>

            <div
              className={`grid gap-2 my-2 ${
                matrixSize === 2 ? 'grid-cols-2 max-w-[160px]' : 'grid-cols-3 max-w-[240px]'
              }`}
            >
              {currentMatrix.map((row, r) =>
                row.map((cell, c) => (
                  <input
                    key={`${r}-${c}`}
                    type="number"
                    value={cell}
                    onChange={(e) => handleMatrixChange(r, c, e.target.value)}
                    className="p-2 border border-neutral-gray rounded text-center font-mono font-bold text-sm bg-near-white focus:outline-none focus:border-black"
                  />
                ))
              )}
            </div>

            {/* Invertibility validation badge */}
            <div className="mt-3 text-xs flex items-center gap-2">
              <span className="font-mono">
                det(K) = {determinant} (mod 26), gcd({determinant}, 26) = {gcd(determinant, 26)}
              </span>
              {isKeyInvertible ? (
                <span className="px-1.5 py-0.5 border border-black rounded text-[10px] bg-near-white font-semibold">
                  Invertible / Valid Key
                </span>
              ) : (
                <span className="px-1.5 py-0.5 border border-dashed border-dark-gray rounded text-[10px] bg-light-gray font-semibold">
                  Singular / Non-Invertible!
                </span>
              )}
            </div>
          </div>

          {/* Text input & Result */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
              Plaintext to Encrypt
            </label>
            <input
              type="text"
              value={plaintext}
              onChange={(e) => setPlaintext(e.target.value)}
              className="w-full p-2 border border-neutral-gray rounded font-mono text-sm bg-near-white focus:outline-none focus:border-black uppercase tracking-wider"
            />
            <p className="text-xs text-medium-gray mt-1">
              Midterms ask: "Hint: Encrypt only the first 3 letters of the plaintext".
            </p>

            <div className="mt-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
                Full Ciphertext Result (C = K · P mod 26)
              </label>
              <div className="p-3 bg-near-white border border-neutral-gray rounded font-mono text-lg font-bold text-black tracking-widest">
                {fullCiphertext || '<empty>'}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Step-by-Step Multiplication Display */}
        <div className="mt-6 border-t border-light-gray pt-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-gray mb-3">
            Matrix Multiplication Breakdown per Block (خطوات ضرب المصفوفات خطوة بخطوة)
          </h4>

          <div className="space-y-4">
            {calculationSteps.map((block, idx) => (
              <div key={idx} className="border border-neutral-gray rounded p-4 bg-near-white">
                <div className="flex flex-wrap items-center justify-between pb-2 border-b border-neutral-gray mb-3 text-xs font-mono">
                  <span className="font-semibold text-black">
                    Block {idx + 1}: "{block.blockChars}" → Vector [{block.vector.join(', ')}]
                  </span>
                  <span className="font-bold text-black bg-white px-2 py-0.5 rounded border border-neutral-gray">
                    Output: "{block.outChars}" (Vector [{block.modProducts.join(', ')}])
                  </span>
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  {block.lines.map((line, lIdx) => (
                    <div key={lIdx} className="bg-white p-2 rounded border border-light-gray">
                      <MathDisplay latex={line} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

