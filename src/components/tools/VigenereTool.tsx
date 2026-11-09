import React, { useState, useMemo } from 'react';

export default function VigenereTool(): React.ReactElement {
  const [plaintext, setPlaintext] = useState('wearediscoveredsaveyourself');
  const [keyword, setKeyword] = useState('deceptive');
  const [cipherType, setCipherType] = useState<'repeating' | 'autokey'>('repeating');

  const cleanP = useMemo(() => plaintext.toUpperCase().replace(/[^A-Z]/g, ''), [plaintext]);
  const cleanK = useMemo(() => keyword.toUpperCase().replace(/[^A-Z]/g, ''), [keyword]);

  // Construct effective key stream
  const keyStream = useMemo(() => {
    if (!cleanK || !cleanP) return '';
    if (cipherType === 'repeating') {
      let res = '';
      for (let i = 0; i < cleanP.length; i++) {
        res += cleanK[i % cleanK.length];
      }
      return res;
    } else {
      // Autokey: keyword concatenated with plaintext itself
      const combined = cleanK + cleanP;
      return combined.slice(0, cleanP.length);
    }
  }, [cleanP, cleanK, cipherType]);

  // Encipher character by character
  const steps = useMemo(() => {
    const list: {
      idx: number;
      pChar: string;
      kChar: string;
      pVal: number;
      kVal: number;
      sum: number;
      cVal: number;
      cChar: string;
    }[] = [];

    for (let i = 0; i < cleanP.length; i++) {
      const pChar = cleanP[i];
      const kChar = keyStream[i] || 'A';
      const pVal = pChar.charCodeAt(0) - 65;
      const kVal = kChar.charCodeAt(0) - 65;
      const sum = pVal + kVal;
      const cVal = sum % 26;
      const cChar = String.fromCharCode(cVal + 65);

      list.push({
        idx: i + 1,
        pChar,
        kChar,
        pVal,
        kVal,
        sum,
        cVal,
        cChar,
      });
    }

    return list;
  }, [cleanP, keyStream]);

  const fullCiphertext = steps.map((s) => s.cChar).join('');

  return (
    <div className="space-y-6">
      <div className="border border-neutral-gray p-6 bg-white rounded">
        <h3 className="text-xl font-semibold text-near-black mb-1">Vigenère & Autokey Cipher Lab</h3>
        <p className="text-sm text-dark-gray" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
          شفرة فيجنير المتعددة ونظام المفتاح التلقائي (Autokey): محاذاة المفاتيح وحساب الإزاحة الدورية
        </p>

        {/* Type selector */}
        <div className="flex gap-2 my-4">
          <button
            onClick={() => setCipherType('repeating')}
            className={`btn text-xs ${cipherType === 'repeating' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Repeating Keyword (المفتاح الدوري المكرر)
          </button>
          <button
            onClick={() => setCipherType('autokey')}
            className={`btn text-xs ${cipherType === 'autokey' ? 'btn-primary' : 'btn-secondary'}`}
          >
            Vigenère Autokey (المفتاح التلقائي بالدمج مع النص)
          </button>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
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
          </div>

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
          </div>
        </div>

        {/* Keystream alignment comparison */}
        <div className="p-4 bg-near-white border border-neutral-gray rounded space-y-2 font-mono text-xs my-4 overflow-x-auto">
          <div className="flex">
            <span className="w-24 text-dark-gray font-semibold shrink-0">Plaintext:</span>
            <span className="tracking-widest text-black font-bold">{cleanP}</span>
          </div>
          <div className="flex">
            <span className="w-24 text-dark-gray font-semibold shrink-0">Keystream:</span>
            <span className="tracking-widest text-dark-gray">{keyStream}</span>
          </div>
          <div className="flex pt-1 border-t border-neutral-gray">
            <span className="w-24 text-black font-bold shrink-0">Ciphertext:</span>
            <span className="tracking-widest text-black font-bold">{fullCiphertext}</span>
          </div>
        </div>

        {/* Character calculation breakdown */}
        <div className="mt-6 border-t border-light-gray pt-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-gray mb-3">
            Character-by-Character Calculation (C_i = (P_i + K_i) mod 26)
          </h4>
          <div className="max-h-72 overflow-y-auto border border-neutral-gray rounded">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-near-black text-white sticky top-0">
                <tr>
                  <th className="p-2 w-12">#</th>
                  <th className="p-2">P Char (Val)</th>
                  <th className="p-2">K Char (Val)</th>
                  <th className="p-2">Sum</th>
                  <th className="p-2">Sum mod 26</th>
                  <th className="p-2">Output Cipher</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-light-gray bg-white">
                {steps.map((st) => (
                  <tr key={st.idx} className="hover:bg-near-white">
                    <td className="p-2 text-medium-gray">{st.idx}</td>
                    <td className="p-2">
                      <span className="font-bold">{st.pChar}</span> ({st.pVal})
                    </td>
                    <td className="p-2">
                      <span className="font-bold">{st.kChar}</span> ({st.kVal})
                    </td>
                    <td className="p-2">{st.sum}</td>
                    <td className="p-2">{st.cVal}</td>
                    <td className="p-2 font-bold bg-light-gray text-black">{st.cChar}</td>
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

