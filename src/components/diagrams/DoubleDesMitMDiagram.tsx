import React, { useState } from 'react';

export default function DoubleDesMitMDiagram(): React.ReactElement {
  const [activeStep, setActiveStep] = useState<'stage1' | 'stage2' | 'match'>('match');

  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            Meet-in-the-Middle Attack on Double-DES (Figure 7.1)
          </h3>
          <p className="text-xs text-[#737373]">
            How Diffie-Hellman algorithm reduces 112-bit key search from 2¹¹² down to 2⁵⁷ operations
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          هجوم الالتقاء في المنتصف وتخفيض تعقيد Double-DES إلى 2⁵⁷
        </span>
      </div>

      {/* Interactive Line-based SVG Diagram */}
      <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md overflow-x-auto flex justify-center">
        <svg
          viewBox="0 0 720 220"
          className="w-full max-w-[1240px] select-none text-[#171717]"
          style={{ minWidth: 620 }}
        >
          <defs>
            <marker
              id="mitm-arr"
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

          {/* Plaintext P */}
          <rect x="20" y="85" width="80" height="42" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="60" y="105" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#171717">Plaintext P</text>
          <text x="60" y="119" textAnchor="middle" fontSize="9" fill="#525252">النص الصريح</text>

          <line x1="100" y1="106" x2="135" y2="106" stroke="#171717" strokeWidth="1.5" markerEnd="url(#mitm-arr)" />

          {/* Forward Encryption Phase (Stage 1) */}
          <g onClick={() => setActiveStep('stage1')} className="cursor-pointer">
            <rect
              x="140"
              y="75"
              width="150"
              height="62"
              rx="4"
              fill={activeStep === 'stage1' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text
              x="215"
              y="97"
              textAnchor="middle"
              fontSize="11"
              fontWeight="bold"
              fill={activeStep === 'stage1' ? '#FFFFFF' : '#171717'}
            >
              Forward: E_K₁(P)
            </text>
            <text
              x="215"
              y="112"
              textAnchor="middle"
              fontSize="10"
              fill={activeStep === 'stage1' ? '#E5E5E5' : '#525252'}
            >
              Try all 2⁵⁶ keys K₁
            </text>
            <text
              x="215"
              y="126"
              textAnchor="middle"
              fontSize="9"
              fill={activeStep === 'stage1' ? '#A3A3A3' : '#737373'}
            >
              Store table sorted by X
            </text>
          </g>

          <line x1="290" y1="106" x2="325" y2="106" stroke="#171717" strokeWidth="1.5" markerEnd="url(#mitm-arr)" />

          {/* Middle Value X (The Meeting Point) */}
          <g onClick={() => setActiveStep('match')} className="cursor-pointer">
            <rect
              x="330"
              y="60"
              width="100"
              height="92"
              rx="6"
              fill={activeStep === 'match' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="2"
            />
            <text
              x="380"
              y="85"
              textAnchor="middle"
              fontSize="11"
              fontWeight="bold"
              fill={activeStep === 'match' ? '#FFFFFF' : '#171717'}
            >
              Middle Value
            </text>
            <text
              x="380"
              y="108"
              textAnchor="middle"
              fontSize="16"
              fontWeight="bold"
              fontFamily="monospace"
              fill={activeStep === 'match' ? '#FFFFFF' : '#171717'}
            >
              X
            </text>
            <text
              x="380"
              y="128"
              textAnchor="middle"
              fontSize="9"
              fill={activeStep === 'match' ? '#E5E5E5' : '#525252'}
            >
              E_K₁(P) = D_K₂(C)
            </text>
            <text
              x="380"
              y="142"
              textAnchor="middle"
              fontSize="8"
              fontWeight="bold"
              fill={activeStep === 'match' ? '#A3A3A3' : '#737373'}
            >
              MEET POINT
            </text>
          </g>

          {/* Backward Decryption Phase (Stage 2) */}
          <line x1="485" y1="106" x2="435" y2="106" stroke="#171717" strokeWidth="1.5" markerEnd="url(#mitm-arr)" />

          <g onClick={() => setActiveStep('stage2')} className="cursor-pointer">
            <rect
              x="490"
              y="75"
              width="150"
              height="62"
              rx="4"
              fill={activeStep === 'stage2' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text
              x="565"
              y="97"
              textAnchor="middle"
              fontSize="11"
              fontWeight="bold"
              fill={activeStep === 'stage2' ? '#FFFFFF' : '#171717'}
            >
              Backward: D_K₂(C)
            </text>
            <text
              x="565"
              y="112"
              textAnchor="middle"
              fontSize="10"
              fill={activeStep === 'stage2' ? '#E5E5E5' : '#525252'}
            >
              Try all 2⁵⁶ keys K₂
            </text>
            <text
              x="565"
              y="126"
              textAnchor="middle"
              fontSize="9"
              fill={activeStep === 'stage2' ? '#A3A3A3' : '#737373'}
            >
              Lookup X in table
            </text>
          </g>

          {/* Ciphertext C */}
          <line x1="640" y1="106" x2="665" y2="106" stroke="#171717" strokeWidth="1.5" />
          <rect x="645" y="85" width="65" height="42" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="677" y="105" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#171717">Cipher C</text>
          <text x="677" y="119" textAnchor="middle" fontSize="9" fill="#525252">النص المشفر</text>

          {/* Complexity Comparison Badge (Bottom) */}
          <rect x="180" y="175" width="360" height="32" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="360" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#171717">
            Complexity: 2⁵⁶ (encryptions) + 2⁵⁶ (decryptions) = 2⁵⁷ operations
          </text>
        </svg>
      </div>

      {/* Academic Explanation Card */}
      <div className="p-4 border border-[#171717] bg-[#FAFAFA] rounded-md space-y-3">
        <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-2">
          <h4 className="text-sm font-bold text-[#171717]">
            {activeStep === 'stage1'
              ? 'Phase 1: Forward Table Generation (Encrypting P)'
              : activeStep === 'stage2'
              ? 'Phase 2: Backward Decryption & Instant Lookup'
              : 'The Meet-in-the-Middle Principle & Triple-DES Mandate'}
          </h4>
          <span className="font-mono text-xs px-2 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded">
            2⁵⁷ Complexity
          </span>
        </div>

        <div className="text-xs text-[#171717] leading-relaxed space-y-2">
          <p>
            <strong>The Mathematical Relationship: </strong>
            Given known plaintext-ciphertext pair <code className="font-mono bg-[#FFFFFF] px-1 py-0.5 border rounded">(P, C)</code> where <code className="font-mono bg-[#FFFFFF] px-1 py-0.5 border rounded">C = E_K2(E_K1(P))</code>, it follows algebraically that:
            <span className="block my-1.5 p-2 bg-[#FFFFFF] border rounded text-center font-mono font-bold text-sm">
              X = E_K1(P) = D_K2(C)
            </span>
          </p>

          <p>
            Instead of searching all <code className="font-mono font-bold">2¹¹²</code> pairs simultaneously, the attacker decouples the keys into two independent searches of <code className="font-mono font-bold">2⁵⁶</code> each. The intermediate value <code className="font-mono font-bold">X</code> serves as the meeting point.
          </p>

          <p dir="rtl" className="font-serif text-[#525252] pt-2 border-t border-[#E5E5E5]" style={{ fontFamily: 'var(--font-arabic)' }}>
            <strong>النتيجة الامتحانية الحاسمة: </strong>
            التشفير المزدوج Double-DES لا يوفر أماناً بحجم 112 بت كما قد يُظن ظاهرياً؛ بل ينكسر بـ 2⁵⁷ عملية فقط (ما يعادل أمان مفتاح 57 بت، وهو قريب جداً من أمان DES الأحادي البالغ 56 بت). ولهذا السبب تم استبعاد Double-DES تماماً والاعتماد على Triple-DES (3DES) الذي يتطلب 3 مراحل ويصمد بتعقيد لا يقل عن 2¹¹².
          </p>
        </div>
      </div>
    </div>
  );
}

