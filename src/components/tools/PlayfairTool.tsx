import React, { useState, useMemo } from 'react';

export default function PlayfairTool(): React.ReactElement {
  const [keyword, setKeyword] = useState('MONARCHY');
  const [plaintext, setPlaintext] = useState('balloon');
  const [selectedPreset, setSelectedPreset] = useState<'monarchy' | 'largest' | 'security'>('monarchy');

  // Build 5x5 Playfair matrix
  const matrix = useMemo(() => {
    const cleanKey = keyword.toUpperCase().replace(/[^A-Z]/g, '').replace(/J/g, 'I');
    const seen = new Set<string>();
    const keyChars: string[] = [];

    for (const ch of cleanKey) {
      if (!seen.has(ch)) {
        seen.add(ch);
        keyChars.push(ch);
      }
    }

    const alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'; // J omitted
    for (const ch of alphabet) {
      if (!seen.has(ch)) {
        seen.add(ch);
        keyChars.push(ch);
      }
    }

    // Convert into 5x5 grid
    const grid: string[][] = [];
    for (let r = 0; r < 5; r++) {
      grid.push(keyChars.slice(r * 5, (r + 1) * 5));
    }
    return grid;
  }, [keyword]);

  // Find letter position in grid
  const findPos = (char: string): [number, number] => {
    const target = char === 'J' ? 'I' : char;
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (matrix[r][c] === target) return [r, c];
      }
    }
    return [0, 0];
  };

  // Prepare digrams
  const digrams = useMemo(() => {
    const raw = plaintext.toUpperCase().replace(/[^A-Z]/g, '').replace(/J/g, 'I');
    const pairs: [string, string][] = [];
    let i = 0;

    while (i < raw.length) {
      const first = raw[i];
      if (i + 1 < raw.length) {
        const second = raw[i + 1];
        if (first === second) {
          // Rule: Repeated letters in pair get filler 'X'
          pairs.push([first, 'X']);
          i += 1;
        } else {
          pairs.push([first, second]);
          i += 2;
        }
      } else {
        // Odd trailing letter gets filler 'X' (or 'Z' if odd letter is X)
        pairs.push([first, first === 'X' ? 'Z' : 'X']);
        i += 1;
      }
    }
    return pairs;
  }, [plaintext]);

  // Encipher each pair
  const encipheredPairs = useMemo(() => {
    return digrams.map(([c1, c2]) => {
      const [r1, c1Col] = findPos(c1);
      const [r2, c2Col] = findPos(c2);

      let rule = '';
      let out1 = '';
      let out2 = '';

      if (r1 === r2) {
        // Same row rule: shift right circularly
        rule = 'Same Row (قاعدة نفس الصف: إزاحة لليمين دورياً)';
        out1 = matrix[r1][(c1Col + 1) % 5];
        out2 = matrix[r2][(c2Col + 1) % 5];
      } else if (c1Col === c2Col) {
        // Same column rule: shift down circularly
        rule = 'Same Column (قاعدة نفس العمود: إزاحة للأسفل دورياً)';
        out1 = matrix[(r1 + 1) % 5][c1Col];
        out2 = matrix[(r2 + 1) % 5][c2Col];
      } else {
        // Rectangle rule: swap columns
        rule = 'Rectangle Rule (قاعدة المستطيل: تبديل الأعمدة)';
        out1 = matrix[r1][c2Col];
        out2 = matrix[r2][c1Col];
      }

      return {
        pair: `${c1}${c2}`,
        cipher: `${out1}${out2}`,
        rule,
        pos1: `[${r1},${c1Col}]`,
        pos2: `[${r2},${c2Col}]`,
      };
    });
  }, [digrams, matrix]);

  const fullCiphertext = encipheredPairs.map((p) => p.cipher).join(' ');

  const setPreset = (preset: 'monarchy' | 'largest' | 'security') => {
    setSelectedPreset(preset);
    if (preset === 'monarchy') {
      setKeyword('MONARCHY');
      setPlaintext('balloon');
    } else if (preset === 'largest') {
      setKeyword('LARGEST');
      setPlaintext('security');
    } else if (preset === 'security') {
      setKeyword('SECURITY');
      setPlaintext('cryptography');
    }
  };

  return (
    <div className="space-y-6">
      <div className="border border-neutral-gray p-6 bg-white rounded">
        <h3 className="text-xl font-semibold text-near-black mb-1">Playfair Cipher Interactive Lab</h3>
        <p className="text-sm text-dark-gray" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
          شفرة بلايفير التفاعلية: بناء مصفوفة 5×5 وتطبيق قواعد تشفير أزواج الحروف (Digrams)
        </p>

        {/* Presets */}
        <div className="flex flex-wrap gap-2 my-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-dark-gray self-center mr-1">
            Exam Presets:
          </span>
          <button
            onClick={() => setPreset('monarchy')}
            className={`btn text-xs ${selectedPreset === 'monarchy' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Lecture: MONARCHY / "balloon"
          </button>
          <button
            onClick={() => setPreset('largest')}
            className={`btn text-xs ${selectedPreset === 'largest' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Midterm 2022: LARGEST / "security"
          </button>
          <button
            onClick={() => setPreset('security')}
            className={`btn text-xs ${selectedPreset === 'security' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Midterm 2020: SECURITY / "cryptography"
          </button>
        </div>

        {/* Input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
              Keyword (الكلمة المفتاحية)
            </label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full p-2 border border-neutral-gray rounded font-mono text-sm bg-near-white focus:outline-none focus:border-black uppercase tracking-wider"
            />
            <p className="text-xs text-medium-gray mt-1">
              Duplicates removed, 'J' combined with 'I', remaining 25 alphabet letters added in sequence.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
              Plaintext (النص الصريح)
            </label>
            <input
              type="text"
              value={plaintext}
              onChange={(e) => setPlaintext(e.target.value)}
              className="w-full p-2 border border-neutral-gray rounded font-mono text-sm bg-near-white focus:outline-none focus:border-black uppercase tracking-wider"
            />
            <p className="text-xs text-medium-gray mt-1">
              Split into pairs; repeated letters like 'LL' separated by 'X' (e.g. "ba lx lo on").
            </p>
          </div>
        </div>

        {/* 5x5 Matrix Display */}
        <div className="my-6">
          <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-2">
            Generated 5x5 Playfair Key Matrix (مصفوفة المفتاح 5×5)
          </label>
          <div className="inline-block border border-black rounded overflow-hidden">
            <div className="grid grid-cols-5 divide-x divide-y divide-neutral-gray bg-white">
              {matrix.map((row, r) =>
                row.map((cell, c) => (
                  <div
                    key={`${r}-${c}`}
                    className="w-12 h-12 flex items-center justify-center font-mono font-bold text-base hover:bg-light-gray transition-colors"
                  >
                    {cell === 'I' ? 'I/J' : cell}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Result Output */}
        <div className="my-4">
          <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
            Ciphertext Output (النص المشفر الناتج)
          </label>
          <div className="p-3 bg-near-white border border-neutral-gray rounded font-mono text-base font-bold text-black tracking-widest">
            {fullCiphertext || '<empty>'}
          </div>
        </div>

        {/* Step-by-step Transformation Table */}
        <div className="mt-6 border-t border-light-gray pt-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-gray mb-3">
            Pair Transformations & Rules Applied (خطوات تشفير كل ثنائي)
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border border-neutral-gray rounded">
              <thead className="bg-near-black text-white">
                <tr>
                  <th className="p-2">#</th>
                  <th className="p-2">Plain Pair</th>
                  <th className="p-2">Grid Positions</th>
                  <th className="p-2">Applied Rule</th>
                  <th className="p-2">Cipher Pair</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-light-gray bg-white">
                {encipheredPairs.map((item, idx) => (
                  <tr key={idx} className="hover:bg-near-white">
                    <td className="p-2 text-medium-gray">{idx + 1}</td>
                    <td className="p-2 font-bold text-black">{item.pair}</td>
                    <td className="p-2 text-dark-gray">
                      {item.pair[0]}:{item.pos1}, {item.pair[1]}:{item.pos2}
                    </td>
                    <td className="p-2">{item.rule}</td>
                    <td className="p-2 font-bold text-black bg-light-gray">{item.cipher}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

