import React, { useState } from 'react';

export default function VigenereDiagram(): React.ReactElement {
  const [mode, setMode] = useState<'repeated' | 'autokey'>('repeated');

  const repeatedSample = [
    { p: 'w', pNum: 22, k: 'd', kNum: 3, c: 'Z', cNum: 25 },
    { p: 'e', pNum: 4,  k: 'e', kNum: 4, c: 'I', cNum: 8 },
    { p: 'a', pNum: 0,  k: 'c', kNum: 2, c: 'C', cNum: 2 },
    { p: 'r', pNum: 17, k: 'e', kNum: 4, c: 'V', cNum: 21 },
    { p: 'e', pNum: 4,  k: 'p', kNum: 15, c: 'T', cNum: 19 },
    { p: 'd', pNum: 3,  k: 't', kNum: 19, c: 'W', cNum: 22 },
    { p: 'i', pNum: 8,  k: 'i', kNum: 8, c: 'Q', cNum: 16 },
    { p: 's', pNum: 18, k: 'v', kNum: 21, c: 'N', cNum: 13 },
    { p: 'c', pNum: 2,  k: 'e', kNum: 4, c: 'G', cNum: 6 },
  ];

  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            Vigenère Polyalphabetic Cipher &amp; Autokey Alignment
          </h3>
          <p className="text-xs text-[#737373]">
            Mathematical letter mapping Cᵢ = (Pᵢ + Kᵢ) mod 26 and keystream alignment
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          شفرة فيجينير المتعددة الأبجدية ومحاذاة المفتاح الدوري مقابل المفتاح التلقائي
        </span>
      </div>

      {/* Mode Selector */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setMode('repeated')}
          className={`py-2 px-3 border rounded text-xs font-medium transition-all ${
            mode === 'repeated'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:bg-[#FAFAFA]'
          }`}
        >
          <span className="font-bold block text-sm">Repeated Keyword Vigenère</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">المفتاح الدوري المتكرر ("deceptive")</span>
        </button>

        <button
          type="button"
          onClick={() => setMode('autokey')}
          className={`py-2 px-3 border rounded text-xs font-medium transition-all ${
            mode === 'autokey'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:bg-[#FAFAFA]'
          }`}
        >
          <span className="font-bold block text-sm">Autokey System (Keyword + Plaintext)</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">نظام المفتاح التلقائي لإزالة الدورية</span>
        </button>
      </div>

      {/* Alignment Grid Table */}
      <div className="overflow-x-auto border border-[#171717] rounded-md">
        <table className="w-full text-xs text-center border-collapse">
          <thead>
            <tr className="bg-[#171717] text-[#FFFFFF] font-mono">
              <th className="p-2 border-r border-[#333333] text-left">Component</th>
              {repeatedSample.map((_, idx) => (
                <th key={idx} className="p-2 border-r border-[#333333]">i = {idx + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E5E5] font-mono">
            {/* Plaintext Row */}
            <tr className="bg-[#FAFAFA]">
              <td className="p-2.5 font-bold border-r border-[#E5E5E5] text-left">
                Plaintext (Pᵢ)
              </td>
              {repeatedSample.map((s, idx) => (
                <td key={idx} className="p-2 border-r border-[#E5E5E5]">
                  <span className="font-bold text-sm block">{s.p}</span>
                  <span className="text-[10px] text-[#737373]">({s.pNum})</span>
                </td>
              ))}
            </tr>

            {/* Key Row */}
            <tr className="bg-[#FFFFFF]">
              <td className="p-2.5 font-bold border-r border-[#E5E5E5] text-left">
                Key stream (Kᵢ)
              </td>
              {repeatedSample.map((s, idx) => (
                <td key={idx} className="p-2 border-r border-[#E5E5E5] bg-[#FFF1A6]/30">
                  <span className="font-bold text-sm block text-[#171717]">{s.k}</span>
                  <span className="text-[10px] text-[#737373]">({s.kNum})</span>
                </td>
              ))}
            </tr>

            {/* Sum Row */}
            <tr className="bg-[#FAFAFA] text-[11px] text-[#525252]">
              <td className="p-2.5 font-bold border-r border-[#E5E5E5] text-left">
                (Pᵢ + Kᵢ) mod 26
              </td>
              {repeatedSample.map((s, idx) => (
                <td key={idx} className="p-2 border-r border-[#E5E5E5]">
                  {s.pNum + s.kNum} ➔ {s.cNum}
                </td>
              ))}
            </tr>

            {/* Ciphertext Row */}
            <tr className="bg-[#171717] text-[#FFFFFF]">
              <td className="p-2.5 font-bold border-r border-[#333333] text-left">
                Ciphertext (Cᵢ)
              </td>
              {repeatedSample.map((s, idx) => (
                <td key={idx} className="p-2 border-r border-[#333333]">
                  <span className="font-bold text-sm block">{s.c}</span>
                  <span className="text-[10px] opacity-75">({s.cNum})</span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Comparative Callout */}
      <div className="p-4 border border-[#171717] bg-[#FAFAFA] rounded-md text-xs space-y-2">
        <h4 className="font-bold text-[#171717]">
          {mode === 'repeated' ? 'Periodic Key Vulnerability (Kasiski & Index of Coincidence):' : 'Autokey Innovation:'}
        </h4>
        <p className="text-[#525252] leading-relaxed">
          {mode === 'repeated'
            ? 'When the keyword repeats with length d, ciphertext letters at intervals d share the same monoalphabetic shift. The Kasiski examination searches for identical character strings separated by multiples of d to discover key length.'
            : 'The Autokey system concatenates the keyword with the plaintext itself ("deceptivewearediscoveredsaveyourself"), eliminating simple keyword repetition. However, because both key and message share English letter frequency, it remains vulnerable to frequency cryptanalysis.'}
        </p>
      </div>
    </div>
  );
}

