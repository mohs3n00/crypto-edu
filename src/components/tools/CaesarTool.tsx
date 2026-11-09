import React, { useState } from 'react';
import MathDisplay from '../ui/MathDisplay';

export default function CaesarTool(): React.ReactElement {
  const [plaintext, setPlaintext] = useState('meet me after the toga party');
  const [key, setKey] = useState(3);
  const [mode, setMode] = useState<'encrypt' | 'decrypt' | 'bruteforce'>('encrypt');

  const cleanText = (str: string) => str.toUpperCase().replace(/[^A-Z]/g, '');

  const encryptChar = (char: string, k: number) => {
    const code = char.charCodeAt(0) - 65;
    const enc = (code + k) % 26;
    return String.fromCharCode(((enc + 26) % 26) + 65);
  };

  const processText = (text: string, k: number, isEncrypt: boolean) => {
    const shift = isEncrypt ? k : -k;
    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        if (char >= 'A' && char <= 'Z') {
          return encryptChar(char, shift);
        }
        return char;
      })
      .join('');
  };

  const output = processText(plaintext, key, mode === 'encrypt');

  // Breakdown for the first few letters
  const cleaned = cleanText(plaintext);
  const sampleSteps = cleaned.slice(0, 6).split('').map((ch) => {
    const p = ch.charCodeAt(0) - 65;
    const c = (p + (mode === 'encrypt' ? key : -key) + 26) % 26;
    return {
      char: ch,
      pVal: p,
      formula: mode === 'encrypt' ? `(${p} + ${key}) \\bmod 26 = ${c}` : `(${p} - ${key}) \\bmod 26 = ${c}`,
      cChar: String.fromCharCode(c + 65),
    };
  });

  return (
    <div className="space-y-6">
      <div className="border border-neutral-gray p-6 bg-white rounded">
        <h3 className="text-xl font-semibold text-near-black mb-1">Caesar Cipher Interactive Lab</h3>
        <p className="text-sm text-dark-gray" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
          شفرة قيصر التفاعلية: حساب الإزاحة المعيارية واختبار التجريب الشامل (Brute-Force)
        </p>

        {/* Mode selector */}
        <div className="flex gap-2 my-4">
          <button
            onClick={() => setMode('encrypt')}
            className={`btn text-sm ${mode === 'encrypt' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Encryption (تشفير)
          </button>
          <button
            onClick={() => setMode('decrypt')}
            className={`btn text-sm ${mode === 'decrypt' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Decryption (فك تشفير)
          </button>
          <button
            onClick={() => setMode('bruteforce')}
            className={`btn text-sm ${mode === 'bruteforce' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Brute-Force Attack (تحليل شامل 25 مفتاح)
          </button>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
              {mode === 'encrypt' ? 'Plaintext (النص الصريح)' : 'Ciphertext (النص المشفر)'}
            </label>
            <textarea
              value={plaintext}
              onChange={(e) => setPlaintext(e.target.value)}
              rows={3}
              className="w-full p-2 border border-neutral-gray rounded font-mono text-sm bg-near-white focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
              Key Shift K (قيمة الإزاحة: {key})
            </label>
            <input
              type="range"
              min="1"
              max="25"
              value={key}
              onChange={(e) => setKey(parseInt(e.target.value, 10))}
              disabled={mode === 'bruteforce'}
              className="w-full accent-black cursor-pointer mb-2"
            />
            <div className="flex justify-between text-xs text-medium-gray font-mono">
              <span>K=1 (A→B)</span>
              <span>K=3 (Caesar Default)</span>
              <span>K=13 (ROT13)</span>
              <span>K=25 (A→Z)</span>
            </div>
            <div className="mt-3 p-3 bg-light-gray rounded text-sm font-mono flex items-center justify-between">
              <span>Active Transformation:</span>
              <span className="font-semibold">
                A ({0}) → {encryptChar('A', key)} ({(key) % 26})
              </span>
            </div>
          </div>
        </div>

        {/* Output */}
        {mode !== 'bruteforce' ? (
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
              Result Output ({mode === 'encrypt' ? 'Ciphertext' : 'Recovered Plaintext'})
            </label>
            <div className="p-4 bg-near-white border border-neutral-gray rounded font-mono text-base font-semibold text-black break-words">
              {output || '<empty>'}
            </div>

            {/* Step-by-step arithmetic */}
            {sampleSteps.length > 0 && (
              <div className="mt-6 border-t border-light-gray pt-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-gray mb-3">
                  Step-by-Step Modular Calculations (خطوات الحساب المعياري)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                  {sampleSteps.map((st, i) => (
                    <div key={i} className="border border-neutral-gray rounded p-2 text-center bg-white">
                      <div className="text-xs text-medium-gray">Letter {i + 1}</div>
                      <div className="font-mono text-lg font-bold my-1">
                        '{st.char}' → '{st.cChar}'
                      </div>
                      <div className="text-xs">
                        <MathDisplay latex={st.formula} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Brute-Force Key Exhaustion View */
          <div className="mt-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-gray mb-2">
              Brute-Force Cryptanalysis (تجريب كافة المفاتيح من 1 إلى 25)
            </h4>
            <p className="text-xs text-medium-gray mb-3">
              Because the key space is only 26 (effectively 25 shifts), an adversary easily inspects all candidates until intelligible English is recognized.
            </p>
            <div className="max-h-72 overflow-y-auto border border-neutral-gray rounded">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-near-black text-white sticky top-0">
                  <tr>
                    <th className="p-2 w-16">Key K</th>
                    <th className="p-2">Decrypted Candidate Plaintext</th>
                    <th className="p-2 w-28 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-gray">
                  {Array.from({ length: 25 }, (_, i) => i + 1).map((kVal) => {
                    const dec = processText(plaintext, kVal, false);
                    const isOriginalKey = kVal === key;
                    return (
                      <tr key={kVal} className={isOriginalKey ? 'bg-light-gray font-semibold' : 'hover:bg-near-white'}>
                        <td className="p-2 text-dark-gray font-bold">K = {kVal}</td>
                        <td className="p-2 break-all">{dec}</td>
                        <td className="p-2 text-right">
                          {isOriginalKey ? (
                            <span className="border border-black px-1.5 py-0.5 rounded text-[10px] bg-white">
                              Target Key
                            </span>
                          ) : (
                            <span className="text-medium-gray">Trial</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

