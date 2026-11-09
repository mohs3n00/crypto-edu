import React, { useState } from 'react';

export default function PlayfairRulesDiagram(): React.ReactElement {
  const [selectedRule, setSelectedRule] = useState<'row' | 'col' | 'rect'>('rect');

  // Matrix using keyword "MONARCHY"
  // M O N A R
  // C H Y B D
  // E F G I K (I/J)
  // L P Q S T
  // U V W X Z
  const matrix = [
    ['M', 'O', 'N', 'A', 'R'],
    ['C', 'H', 'Y', 'B', 'D'],
    ['E', 'F', 'G', 'I', 'K'],
    ['L', 'P', 'Q', 'S', 'T'],
    ['U', 'V', 'W', 'X', 'Z'],
  ];

  const rulesData = {
    row: {
      title: 'Rule 1: Same Row (نفس الصف)',
      desc: 'If both letters fall in the same row, each letter is replaced by the letter to its immediate right, wrapping around circularly to the left edge if at the boundary.',
      descAr: 'إذا وقع الحرفان في نفس الصف، يُستبدل كل حرف بالحرف الذي على يمينه مباشرة، مع الدوران لبداية الصف إذا كان الحرف في النهاية.',
      pair: ['M', 'A'],
      pairEncrypted: ['O', 'R'],
      pairCoords: [{ r: 0, c: 0 }, { r: 0, c: 3 }],
      encCoords: [{ r: 0, c: 1 }, { r: 0, c: 4 }],
      explanation: 'M (row 0, col 0) shifts right to O (row 0, col 1). A (row 0, col 3) shifts right to R (row 0, col 4). Thus: "MA" → "OR".',
    },
    col: {
      title: 'Rule 2: Same Column (نفس العمود)',
      desc: 'If both letters fall in the same column, each letter is replaced by the letter immediately beneath it, wrapping around circularly to the top edge if at the bottom.',
      descAr: 'إذا وقع الحرفان في نفس العمود، يُستبدل كل حرف بالحرف الذي تحته مباشرة، مع الدوران لأعلى العمود إذا كان الحرف في الأسفل.',
      pair: ['O', 'V'],
      pairEncrypted: ['H', 'O'],
      pairCoords: [{ r: 0, c: 1 }, { r: 4, c: 1 }],
      encCoords: [{ r: 1, c: 1 }, { r: 0, c: 1 }],
      explanation: 'O (row 0, col 1) shifts down to H (row 1, col 1). V (row 4, col 1) wraps around to O (row 0, col 1). Thus: "OV" → "HO".',
    },
    rect: {
      title: 'Rule 3: Rectangle / Opposite Corners (المستطيل والزوايا المتقابلة)',
      desc: 'Otherwise, each letter is replaced by the letter that lies in its own row and in the column occupied by the other letter (the opposite corners of the imaginary rectangle).',
      descAr: 'في غير الحالتين، يشكل الحرفان مستطيلاً خيالياً؛ ويُستبدل كل حرف بالرمز الواقع في نفس صفه ولكن في عمود الحرف الآخر.',
      pair: ['E', 'A'],
      pairEncrypted: ['I', 'M'],
      pairCoords: [{ r: 2, c: 0 }, { r: 0, c: 3 }],
      encCoords: [{ r: 2, c: 3 }, { r: 0, c: 0 }],
      explanation: 'E is at (row 2, col 0); A is at (row 0, col 3). Replacement for E: same row 2, col of A (col 3) = "I". Replacement for A: same row 0, col of E (col 0) = "M". Thus: "EA" → "IM".',
    },
  };

  const current = rulesData[selectedRule];

  const isPlainCoord = (r: number, c: number) => current.pairCoords.some((coord) => coord.r === r && coord.c === c);
  const isEncCoord = (r: number, c: number) => current.encCoords.some((coord) => coord.r === r && coord.c === c);

  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            Playfair 5×5 Matrix Geometric Encryption Rules
          </h3>
          <p className="text-xs text-[#737373]">
            Interactive demonstration with keyword "MONARCHY"
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          قواعد التشفير الهندسي الثلاث لشفرة بلايفير
        </span>
      </div>

      {/* Rule Selection Tabs */}
      <div className="grid grid-cols-3 gap-2">
        {(['row', 'col', 'rect'] as const).map((r) => {
          const isSelected = selectedRule === r;
          const label = r === 'row' ? 'Rule 1: Same Row' : r === 'col' ? 'Rule 2: Same Column' : 'Rule 3: Rectangle';
          const labelAr = r === 'row' ? 'نفس الصف' : r === 'col' ? 'نفس العمود' : 'المستطيل والزوايا';
          return (
            <button
              key={r}
              type="button"
              onClick={() => setSelectedRule(r)}
              className={`p-2.5 rounded border text-xs font-medium transition-all ${
                isSelected
                  ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
                  : 'border-[#E5E5E5] bg-[#FFFFFF] hover:bg-[#FAFAFA] text-[#171717]'
              }`}
            >
              <div>{label}</div>
              <div className="text-[10px] opacity-75 font-serif mt-0.5" dir="rtl">{labelAr}</div>
            </button>
          );
        })}
      </div>

      {/* Visual 5x5 Matrix + Digram Transformation Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* The 5x5 Matrix Grid */}
        <div className="flex flex-col items-center">
          <span className="font-mono text-xs text-[#737373] uppercase mb-2 font-bold">
            Keyword Matrix (MONARCHY):
          </span>
          <div className="grid grid-cols-5 gap-1.5 p-3 border-2 border-[#171717] bg-[#FAFAFA] rounded-md">
            {matrix.map((row, rIdx) =>
              row.map((cell, cIdx) => {
                const isPlain = isPlainCoord(rIdx, cIdx);
                const isEnc = isEncCoord(rIdx, cIdx);

                let cellStyle = 'bg-[#FFFFFF] text-[#171717] border-[#E5E5E5]';
                if (isPlain) {
                  cellStyle = 'bg-[#171717] text-[#FFFFFF] font-bold border-[#171717]';
                } else if (isEnc) {
                  cellStyle = 'bg-[#E5E5E5] text-[#171717] font-bold border-[#171717] border-dashed';
                }

                return (
                  <div
                    key={`${rIdx}-${cIdx}`}
                    className={`w-10 h-10 border rounded flex items-center justify-center font-mono text-sm transition-colors ${cellStyle}`}
                  >
                    <span>{cell === 'I' ? 'I/J' : cell}</span>
                  </div>
                );
              })
            )}
          </div>
          <div className="flex items-center gap-4 mt-2 text-[11px] font-mono text-[#525252]">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 bg-[#171717] border border-[#171717] rounded" />
              <span>Plaintext Digram</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 bg-[#E5E5E5] border border-[#171717] border-dashed rounded" />
              <span>Ciphertext Digram</span>
            </div>
          </div>
        </div>

        {/* Transformation & Academic Detail */}
        <div className="space-y-4">
          <div className="border border-[#171717] bg-[#FAFAFA] rounded-md p-4 space-y-3">
            <h4 className="text-sm font-bold text-[#171717]">{current.title}</h4>
            <p className="text-xs text-[#171717] leading-relaxed">{current.desc}</p>
            <p dir="rtl" className="text-xs text-[#525252] font-serif" style={{ fontFamily: 'var(--font-arabic)' }}>
              {current.descAr}
            </p>
          </div>

          {/* Transformation Result Box */}
          <div className="p-4 border border-[#E5E5E5] bg-[#FFFFFF] rounded-md space-y-2">
            <span className="font-mono text-[11px] uppercase font-bold text-[#737373] block">
              Sample Pair Transformation:
            </span>
            <div className="flex items-center gap-4 font-mono text-base font-bold text-[#171717]">
              <span className="px-3 py-1 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded">
                {current.pair.join('')}
              </span>
              <span>→</span>
              <span className="px-3 py-1 border border-[#171717] bg-[#E5E5E5] rounded">
                {current.pairEncrypted.join('')}
              </span>
            </div>
            <p className="text-xs text-[#525252] pt-2 border-t border-[#F2F2F2] leading-relaxed">
              {current.explanation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

