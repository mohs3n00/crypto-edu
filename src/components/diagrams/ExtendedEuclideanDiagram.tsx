import React, { useState } from 'react';
import MathDisplay from '../ui/MathDisplay';

export default function ExtendedEuclideanDiagram(): React.ReactElement {
  const [activeStep, setActiveStep] = useState<number>(5);

  const steps = [
    {
      step: 0,
      q: '-',
      r: '1759',
      x: '1',
      y: '0',
      note: 'Initial row: 1759 = 1(1759) + 0(550)',
      noteAr: 'السطر الابتدائي الأول: 1759 = 1(1759) + 0(550)',
    },
    {
      step: 1,
      q: '-',
      r: '550',
      x: '0',
      y: '1',
      note: 'Initial row: 550 = 0(1759) + 1(550)',
      noteAr: 'السطر الابتدائي الثاني: 550 = 0(1759) + 1(550)',
    },
    {
      step: 2,
      q: '3',
      r: '109',
      x: '1',
      y: '-3',
      note: '1759 = 3(550) + 109 ➔ 109 = 1(1759) - 3(550)',
      noteAr: '1759 = 3(550) + 109 ➔ 109 = 1(1759) - 3(550)',
    },
    {
      step: 3,
      q: '5',
      r: '5',
      x: '-5',
      y: '16',
      note: '550 = 5(109) + 5 ➔ 5 = -5(1759) + 16(550)',
      noteAr: '550 = 5(109) + 5 ➔ 5 = -5(1759) + 16(550)',
    },
    {
      step: 4,
      q: '21',
      r: '4',
      x: '106',
      y: '-339',
      note: '109 = 21(5) + 4 ➔ 4 = 106(1759) - 339(550)',
      noteAr: '109 = 21(5) + 4 ➔ 4 = 106(1759) - 339(550)',
    },
    {
      step: 5,
      q: '1',
      r: '1',
      x: '-111',
      y: '355',
      note: '5 = 1(4) + 1 ➔ 1 = -111(1759) + 355(550). TERMINATION!',
      noteAr: '5 = 1(4) + 1 ➔ 1 = -111(1759) + 355(550). الوصول للقاسم 1!',
    },
  ];

  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            Extended Euclidean Algorithm — Bézout Identity &amp; Modular Inverse (Table 2.4)
          </h3>
          <p className="text-xs text-[#737373]">
            Tracking Bézout coefficients s and t such that as + bt = gcd(a, b) = 1, yielding a⁻¹ mod b
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          خوارزمية إقليدس الممتدة — متطابقة بيزو وحساب المعكوس الضربي المعياري
        </span>
      </div>

      {/* Mathematical Principle Box */}
      <div className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded-md space-y-2 text-xs" dir="ltr">
        <div className="flex items-center justify-between font-mono font-bold text-[#171717]">
          <span>Bézout Identity: d = gcd(a, b) = as + bt</span>
          <span>When gcd(a, b) = 1 ➔ bt ≡ 1 (mod a) ➔ b⁻¹ ≡ t (mod a)</span>
        </div>
        <div className="text-center py-2 text-sm">
          <MathDisplay latex="1759(-111) + 550(355) = 1 \implies 550^{-1} \equiv 355 \pmod{1759}" display />
        </div>
      </div>

      {/* Step Controller */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1">
        <span className="text-xs font-mono font-bold text-[#737373] uppercase shrink-0">
          Step Iteration:
        </span>
        <div className="flex items-center gap-1.5">
          {steps.map((st) => (
            <button
              key={st.step}
              type="button"
              onClick={() => setActiveStep(st.step)}
              className={`px-3 py-1 text-xs font-mono rounded border transition-all ${
                activeStep === st.step
                  ? 'border-[#171717] bg-[#171717] text-[#FFFFFF] font-bold'
                  : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:bg-[#FAFAFA]'
              }`}
            >
              Step {st.step}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Table Representation */}
      <div className="overflow-x-auto border border-[#171717] rounded-md">
        <table className="w-full text-xs text-left border-collapse">
          <thead>
            <tr className="bg-[#171717] text-[#FFFFFF] font-mono">
              <th className="p-2.5 border-r border-[#333333]">Step</th>
              <th className="p-2.5 border-r border-[#333333]">Quotient (q)</th>
              <th className="p-2.5 border-r border-[#333333]">Remainder (r)</th>
              <th className="p-2.5 border-r border-[#333333]">Coefficient s (1759)</th>
              <th className="p-2.5 border-r border-[#333333]">Coefficient t (550)</th>
              <th className="p-2.5">Verification &amp; Mathematical Meaning</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E5E5] font-mono">
            {steps.map((st) => {
              const isSelected = activeStep === st.step;
              return (
                <tr
                  key={st.step}
                  className={`transition-colors ${
                    isSelected ? 'bg-[#FFF1A6] font-bold text-[#171717]' : 'hover:bg-[#FAFAFA]'
                  }`}
                >
                  <td className="p-2.5 border-r border-[#E5E5E5] text-center font-bold">{st.step}</td>
                  <td className="p-2.5 border-r border-[#E5E5E5] text-center">{st.q}</td>
                  <td className="p-2.5 border-r border-[#E5E5E5] text-center font-bold">{st.r}</td>
                  <td className="p-2.5 border-r border-[#E5E5E5] text-center">{st.x}</td>
                  <td className="p-2.5 border-r border-[#E5E5E5] text-center">{st.y}</td>
                  <td className="p-2.5 font-sans">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[11px] text-[#171717]">{st.note}</span>
                      <span
                        dir="rtl"
                        className="text-[11px] text-[#525252] font-serif"
                        style={{ fontFamily: 'var(--font-arabic)' }}
                      >
                        {st.noteAr}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Result Callout */}
      <div className="p-4 border-2 border-[#171717] bg-[#FAFAFA] rounded-md flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <span className="font-mono text-[10px] font-bold text-[#737373] uppercase block">
            Final Invertibility Result:
          </span>
          <p className="text-sm font-bold text-[#171717]">
            gcd(1759, 550) = 1 ➔ Multiplicative Inverse 550⁻¹ mod 1759 = 355
          </p>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded font-bold">
          Verification: 550 × 355 = 195250 = 111(1759) + 1 ≡ 1
        </div>
      </div>
    </div>
  );
}

