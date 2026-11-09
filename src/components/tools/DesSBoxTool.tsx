import React, { useState, useMemo } from 'react';

// Official DES S2 Box (from FIPS 46 standard & 2020 Midterm Exam)
const S2_TABLE: number[][] = [
  [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
  [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
  [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
  [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9],
];

export default function DesSBoxTool(): React.ReactElement {
  const [inputBits, setInputBits] = useState('101111'); // 2020 Midterm default

  // Clean input to 6 binary digits
  const cleanBits = useMemo(() => {
    const raw = inputBits.replace(/[^01]/g, '');
    return raw.slice(0, 6);
  }, [inputBits]);

  // Decode Row and Column
  const calculation = useMemo(() => {
    if (cleanBits.length < 6) return null;

    const b1 = cleanBits[0];
    const b2 = cleanBits[1];
    const b3 = cleanBits[2];
    const b4 = cleanBits[3];
    const b5 = cleanBits[4];
    const b6 = cleanBits[5];

    // Row is binary (b1 b6)
    const rowBin = `${b1}${b6}`;
    const rowIndex = parseInt(rowBin, 2);

    // Col is binary (b2 b3 b4 b5)
    const colBin = `${b2}${b3}${b4}${b5}`;
    const colIndex = parseInt(colBin, 2);

    const valDecimal = S2_TABLE[rowIndex][colIndex];
    const valBinary = valDecimal.toString(2).padStart(4, '0');

    return {
      b1,
      b2,
      b3,
      b4,
      b5,
      b6,
      rowBin,
      rowIndex,
      colBin,
      colIndex,
      valDecimal,
      valBinary,
    };
  }, [cleanBits]);

  return (
    <div className="space-y-6">
      <div className="border border-neutral-gray p-6 bg-white rounded">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <h3 className="text-xl font-semibold text-near-black">DES S-Box S₂ Interactive Lookup</h3>
          <span className="border border-black px-2 py-0.5 rounded text-xs font-mono font-semibold bg-near-white">
            Midterm 2020 Exam Problem
          </span>
        </div>
        <p className="text-sm text-dark-gray" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
          صندوق استبدال DES رقم S₂: تحديد رقم الصف من البتين الطرفيين (الأول والأخير) ورقم العمود من البتات الأربعة الوسطى
        </p>

        {/* Input & Quick Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
              6-Bit Input Block (كتلة الدخل بطول 6 بت)
            </label>
            <input
              type="text"
              maxLength={6}
              value={inputBits}
              onChange={(e) => setInputBits(e.target.value)}
              className="w-full p-2 border border-neutral-gray rounded font-mono text-lg font-bold bg-near-white focus:outline-none focus:border-black tracking-widest text-center"
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setInputBits('101111')}
                className="btn btn-secondary text-xs"
              >
                Midterm 2020: 101111
              </button>
              <button
                onClick={() => setInputBits('011010')}
                className="btn btn-secondary text-xs"
              >
                Sample: 011010
              </button>
              <button
                onClick={() => setInputBits('111111')}
                className="btn btn-secondary text-xs"
              >
                Sample: 111111
              </button>
            </div>
          </div>

          {/* Decoding Breakdown Card */}
          {calculation ? (
            <div className="p-4 bg-near-white border border-neutral-gray rounded space-y-2 font-mono text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-gray">
                <span className="text-dark-gray">Input Separation:</span>
                <span className="font-bold text-sm tracking-wider">
                  <span className="text-black bg-light-gray px-1 rounded">{calculation.b1}</span>
                  <span className="text-medium-gray px-1">{calculation.b2}{calculation.b3}{calculation.b4}{calculation.b5}</span>
                  <span className="text-black bg-light-gray px-1 rounded">{calculation.b6}</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Outer Bits (Row):</span>
                <span className="font-semibold text-black">
                  b₁b₆ = ({calculation.rowBin})₂ = Row {calculation.rowIndex}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Inner Bits (Column):</span>
                <span className="font-semibold text-black">
                  b₂b₃b₄b₅ = ({calculation.colBin})₂ = Col {calculation.colIndex}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-neutral-gray font-bold text-sm">
                <span>Output (4-bit binary):</span>
                <span className="bg-white px-2 py-0.5 rounded border border-black text-black">
                  {calculation.valDecimal} = {calculation.valBinary}
                </span>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-light-gray rounded text-xs text-medium-gray flex items-center justify-center font-mono">
              Please enter exactly 6 binary digits (0 or 1).
            </div>
          )}
        </div>

        {/* Complete 4x16 S2 Table with Interactive Highlight */}
        <div className="my-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-dark-gray">
              DES S₂ Substitution Table (4 Rows × 16 Columns)
            </label>
            <span className="text-xs text-medium-gray font-mono">
              Active cell: Row {calculation?.rowIndex ?? '-'}, Col {calculation?.colIndex ?? '-'}
            </span>
          </div>

          <div className="overflow-x-auto border border-black rounded">
            <table className="w-full text-center text-xs font-mono">
              <thead className="bg-near-black text-white">
                <tr>
                  <th className="p-2 border-r border-neutral-gray w-16">Row \ Col</th>
                  {Array.from({ length: 16 }, (_, c) => (
                    <th
                      key={c}
                      className={`p-1.5 min-w-[28px] ${
                        calculation?.colIndex === c ? 'bg-dark-gray text-white underline font-bold' : ''
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-light-gray bg-white">
                {S2_TABLE.map((row, r) => (
                  <tr
                    key={r}
                    className={calculation?.rowIndex === r ? 'bg-light-gray font-semibold' : 'hover:bg-near-white'}
                  >
                    <td className="p-2 font-bold text-dark-gray border-r border-neutral-gray bg-near-white">
                      Row {r}
                    </td>
                    {row.map((val, c) => {
                      const isTarget = calculation?.rowIndex === r && calculation?.colIndex === c;
                      return (
                        <td
                          key={c}
                          className={`p-1.5 ${
                            isTarget
                              ? 'bg-black text-white font-bold text-sm scale-105 shadow-sm'
                              : calculation?.rowIndex === r || calculation?.colIndex === c
                              ? 'bg-near-white'
                              : ''
                          }`}
                        >
                          {val}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Exam note */}
        <div className="p-4 border border-dark-gray rounded bg-near-white text-xs space-y-1">
          <div className="font-semibold uppercase tracking-wider text-dark-gray">
            University Exam Solution Format (طريقة الحل النموذجية في الامتحانات)
          </div>
          <p className="text-black">
            1. Write down input: <code className="bg-light-gray px-1">101111</code>
          </p>
          <p className="text-black">
            2. Take first bit (1) and last bit (1) → <code className="bg-light-gray px-1">Row = (11)₂ = 3</code>
          </p>
          <p className="text-black">
            3. Take middle 4 bits (0111) → <code className="bg-light-gray px-1">Col = (0111)₂ = 7</code>
          </p>
          <p className="text-black">
            4. Lookup row 3, column 7 in S2 table → value is <code className="bg-light-gray px-1">2</code>
          </p>
          <p className="text-black font-semibold">
            5. Convert 2 to 4-bit binary → <code className="bg-light-gray px-1 font-bold">2 = 0010</code>
          </p>
        </div>
      </div>
    </div>
  );
}

