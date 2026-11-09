import React, { useState } from 'react';

export default function DesArchitectureDiagram(): React.ReactElement {
  const [activeStage, setActiveStage] = useState<'input' | 'ip' | 'rounds' | 'swap' | 'ip-inv' | 'keyschedule'>('rounds');

  const stageData = {
    input: {
      title: '64-bit Plaintext Block',
      titleAr: 'كتلة النص الصريح بطول 64 بت',
      desc: 'DES processes plaintext in fixed 64-bit blocks. If the message length is not an exact multiple of 64 bits (8 bytes), padding standards such as PKCS#7 are applied.',
      descAr: 'تتعامل خوارزمية DES مع البيانات في كتل ثابتة حجم كل منها 64 بت (8 بايت)، ويتم تطبيق الحشو إذا لم تكن البيانات مضاعفاً لهذا الحجم.',
      params: 'Block Size: 64 bits (8 bytes)',
    },
    ip: {
      title: 'Initial Permutation (IP)',
      titleAr: 'التبديل الابتدائي لمواضع البتات',
      desc: 'The 64-bit block undergoes a fixed bit transposition (IP) before the first round. It rearranges the bits but provides no cryptographic strength on its own; it was historically designed for ease of hardware wiring.',
      descAr: 'إعادة ترتيب ثابتة لمواضع البتات الـ 64 قبل بدء الجولات، ليس لها تأثير أمني مباشر بمفردها بل صُممت لتسهيل التوصيل العتادي.',
      params: '64 bits IN → 64 bits OUT (L₀: 32 bits, R₀: 32 bits)',
    },
    rounds: {
      title: '16 Feistel Processing Rounds',
      titleAr: 'جولات فايستل الـ 16 المتتالية',
      desc: 'The core of DES: 16 identical rounds. In each round i: L_i = R_{i-1}, and R_i = L_{i-1} ⊕ F(R_{i-1}, K_i). The round function F uses non-linear S-boxes to create confusion and diffusion.',
      descAr: 'جوهر التشفير: 16 جولة متطابقة تقسم البيانات لنصفين، وتطبق دالة الجولة F غير الخطية مع مفتاح فرعي K_i وتجري عملية XOR والتبادل.',
      params: '16 Rounds • 48-bit subkey per round • Function F',
    },
    swap: {
      title: '32-Bit Half Swap (Pre-output)',
      titleAr: 'تبادل النصفين قبل الإخراج النهائي',
      desc: 'After Round 16, the left and right halves are NOT interchanged according to normal Feistel round logic. Instead, R₁₆ and L₁₆ are concatenated in pre-output order (R₁₆ || L₁₆) so that decryption uses identical hardware.',
      descAr: 'عقب انتهاء الجولة 16، يتم عكس ترتيب النصفين ليكون (R₁₆ || L₁₆) لضمان إمكانية فك التشفير بنفس الخوارزمية تماماً.',
      params: 'Concatenation: R₁₆ (32 bits) || L₁₆ (32 bits)',
    },
    'ip-inv': {
      title: 'Inverse Initial Permutation (IP⁻¹)',
      titleAr: 'التبديل النهائي العكسي',
      desc: 'The exact mathematical inverse of the initial permutation. It restores the original bit positions altered by IP: IP⁻¹(IP(M)) = M.',
      descAr: 'المعكوس الدقيق للتبديل الابتدائي، حيث يعيد البتات لمواضعها الأصلية بعد إتمام جميع الجولات.',
      params: '64 bits IN → 64 bits Ciphertext OUT',
    },
    keyschedule: {
      title: '56-bit Key Schedule Algorithm',
      titleAr: 'خوارزمية جدولة وتوليد المفاتيح الفرعية',
      desc: 'Input 64-bit key has 8 parity bits discarded by PC-1 yielding 56 active bits. Split into two 28-bit halves, rotated circularly by 1 or 2 bits in each round, and compressed by PC-2 into 16 distinct 48-bit subkeys K₁…K₁₆.',
      descAr: 'يُدخل مفتاح 64 بت وتُحذف 8 بتات تحقق بواسطة PC-1 لإنتاج 56 بت، تُقسم لنصفين وتُدور دائرياً وتُضغط عبر PC-2 لتوليد 16 مفتاحاً فرعياً بطول 48 بت.',
      params: '64-bit key → 56-bit effective → 16 × 48-bit subkeys',
    },
  };

  const current = stageData[activeStage];

  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            Overall DES Architecture & Feistel Pipeline (Figure 4.1)
          </h3>
          <p className="text-xs text-[#737373]">
            16-round Feistel structure, Initial/Final permutations, and Key Schedule
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          البنية الهندسية الكاملة لمعيار تشفير البيانات DES وجولات فايستل الـ 16
        </span>
      </div>

      {/* SVG Pipeline */}
      <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md overflow-x-auto flex justify-center">
        <svg
          viewBox="0 0 720 340"
          className="w-full max-w-[1240px] select-none text-[#171717]"
          style={{ minWidth: 620 }}
        >
          <defs>
            <marker
              id="des-arr"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
            </marker>
          </defs>

          {/* Left Column: Data Encryption Flow */}
          {/* 1. 64-bit Plaintext */}
          <g onClick={() => setActiveStage('input')} className="cursor-pointer">
            <rect
              x="80"
              y="15"
              width="240"
              height="36"
              rx="4"
              fill={activeStage === 'input' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text
              x="200"
              y="37"
              textAnchor="middle"
              fontSize="11"
              fontWeight="bold"
              fill={activeStage === 'input' ? '#FFFFFF' : '#171717'}
            >
              64-bit Plaintext Block (النص الصريح)
            </text>
          </g>

          <line x1="200" y1="51" x2="200" y2="70" stroke="#171717" strokeWidth="1.5" markerEnd="url(#des-arr)" />

          {/* 2. Initial Permutation (IP) */}
          <g onClick={() => setActiveStage('ip')} className="cursor-pointer">
            <rect
              x="100"
              y="72"
              width="200"
              height="32"
              rx="4"
              fill={activeStage === 'ip' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text
              x="200"
              y="92"
              textAnchor="middle"
              fontSize="11"
              fontWeight="bold"
              fill={activeStage === 'ip' ? '#FFFFFF' : '#171717'}
            >
              Initial Permutation (IP)
            </text>
          </g>

          <line x1="200" y1="104" x2="200" y2="120" stroke="#171717" strokeWidth="1.5" markerEnd="url(#des-arr)" />

          {/* 3. 16 Rounds Box */}
          <g onClick={() => setActiveStage('rounds')} className="cursor-pointer">
            <rect
              x="80"
              y="122"
              width="240"
              height="90"
              rx="4"
              fill={activeStage === 'rounds' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="2"
            />
            <text
              x="200"
              y="146"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill={activeStage === 'rounds' ? '#FFFFFF' : '#171717'}
            >
              Round 1 … Round 16
            </text>
            <text
              x="200"
              y="164"
              textAnchor="middle"
              fontSize="10"
              fill={activeStage === 'rounds' ? '#E5E5E5' : '#525252'}
            >
              {'L_i = R_{i-1}'}
            </text>
            <text
              x="200"
              y="180"
              textAnchor="middle"
              fontSize="10"
              fill={activeStage === 'rounds' ? '#E5E5E5' : '#525252'}
            >
              {'R_i = L_{i-1} ⊕ F(R_{i-1}, K_i)'}
            </text>
            <text
              x="200"
              y="198"
              textAnchor="middle"
              fontSize="9"
              fill={activeStage === 'rounds' ? '#A3A3A3' : '#737373'}
            >
              (16 identical Feistel rounds)
            </text>
          </g>

          <line x1="200" y1="212" x2="200" y2="228" stroke="#171717" strokeWidth="1.5" markerEnd="url(#des-arr)" />

          {/* 4. 32-bit Swap */}
          <g onClick={() => setActiveStage('swap')} className="cursor-pointer">
            <rect
              x="100"
              y="230"
              width="200"
              height="30"
              rx="4"
              fill={activeStage === 'swap' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text
              x="200"
              y="249"
              textAnchor="middle"
              fontSize="10"
              fontWeight="bold"
              fill={activeStage === 'swap' ? '#FFFFFF' : '#171717'}
            >
              32-Bit Swap (R₁₆ || L₁₆)
            </text>
          </g>

          <line x1="200" y1="260" x2="200" y2="274" stroke="#171717" strokeWidth="1.5" markerEnd="url(#des-arr)" />

          {/* 5. Inverse IP */}
          <g onClick={() => setActiveStage('ip-inv')} className="cursor-pointer">
            <rect
              x="100"
              y="276"
              width="200"
              height="30"
              rx="4"
              fill={activeStage === 'ip-inv' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text
              x="200"
              y="295"
              textAnchor="middle"
              fontSize="10"
              fontWeight="bold"
              fill={activeStage === 'ip-inv' ? '#FFFFFF' : '#171717'}
            >
              Inverse Permutation (IP⁻¹)
            </text>
          </g>

          <line x1="200" y1="306" x2="200" y2="320" stroke="#171717" strokeWidth="1.5" markerEnd="url(#des-arr)" />

          {/* Ciphertext Output */}
          <text x="200" y="335" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#171717">
            64-bit Ciphertext Block
          </text>

          {/* Right Column: Key Schedule Pipeline */}
          <g onClick={() => setActiveStage('keyschedule')} className="cursor-pointer">
            {/* 64-bit Key */}
            <rect
              x="440"
              y="15"
              width="220"
              height="36"
              rx="4"
              fill={activeStage === 'keyschedule' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text
              x="550"
              y="37"
              textAnchor="middle"
              fontSize="11"
              fontWeight="bold"
              fill={activeStage === 'keyschedule' ? '#FFFFFF' : '#171717'}
            >
              64-bit Master Key (المفتاح)
            </text>

            <line x1="550" y1="51" x2="550" y2="70" stroke="#171717" strokeWidth="1.5" markerEnd="url(#des-arr)" />

            {/* PC-1 */}
            <rect
              x="460"
              y="72"
              width="180"
              height="30"
              rx="4"
              fill="#FFFFFF"
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text x="550" y="91" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#171717">
              Permuted Choice 1 (PC-1)
            </text>
            <text x="550" y="112" textAnchor="middle" fontSize="9" fill="#525252">
              (Discards 8 parity bits → 56 bits)
            </text>

            <line x1="550" y1="117" x2="550" y2="132" stroke="#171717" strokeWidth="1.5" markerEnd="url(#des-arr)" />

            {/* Circular Shifts & PC-2 Box */}
            <rect
              x="440"
              y="134"
              width="220"
              height="78"
              rx="4"
              fill="#FFFFFF"
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text x="550" y="154" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#171717">
              16 Circular Shifts &amp; PC-2
            </text>
            <text x="550" y="172" textAnchor="middle" fontSize="9" fill="#525252">
              Shift 1 or 2 bits per round
            </text>
            <text x="550" y="188" textAnchor="middle" fontSize="9" fill="#525252">
              PC-2 compresses 56b → 48-bit subkeys
            </text>
          </g>

          {/* Subkey Feeding Arrows from Key Schedule to 16 Rounds */}
          <path
            d="M 440 167 L 330 167"
            fill="none"
            stroke="#171717"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            markerEnd="url(#des-arr)"
          />
          <text x="385" y="160" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#171717">
            K₁ … K₁₆ (48 bits)
          </text>
        </svg>
      </div>

      {/* Interactive Detail Box for Clicked Stage */}
      <div className="p-4 border border-[#171717] bg-[#FAFAFA] rounded-md space-y-2">
        <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded">
              Selected Stage
            </span>
            <h4 className="text-sm font-bold text-[#171717]">{current.title}</h4>
          </div>
          <span
            dir="rtl"
            className="text-xs font-semibold text-[#525252] font-serif"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {current.titleAr}
          </span>
        </div>

        <p className="text-sm text-[#171717] leading-relaxed">{current.desc}</p>
        <p dir="rtl" className="text-xs text-[#525252] font-serif pt-1" style={{ fontFamily: 'var(--font-arabic)' }}>
          {current.descAr}
        </p>

        <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#171717]">
          <span className="text-[#737373]">Technical Specifications:</span>
          <span className="font-bold bg-[#FFFFFF] px-2.5 py-1 border border-[#E5E5E5] rounded">
            {current.params}
          </span>
        </div>
      </div>
    </div>
  );
}
