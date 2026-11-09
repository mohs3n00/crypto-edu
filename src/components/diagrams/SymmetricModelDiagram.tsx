import React, { useState } from 'react';

export default function SymmetricModelDiagram(): React.ReactElement {
  const [activeStep, setActiveStep] = useState<string>('key');

  const components = [
    {
      id: 'plaintext',
      label: 'Plaintext (X)',
      labelAr: 'النص الصريح (X)',
      role: 'Original intelligible message or data fed into the algorithm as input.',
      roleAr: 'الرسالة أو البيانات الأصلية المفهومة التي يتم إدخالها إلى خوارزمية التشفير.',
      math: 'X = [X_1, X_2, \\dots, X_M]',
    },
    {
      id: 'key',
      label: 'Secret Key (K)',
      labelAr: 'المفتاح السري (K)',
      role: 'Input to the encryption and decryption algorithms, independent of plaintext. Must be shared over a secure channel.',
      roleAr: 'قيمة سرية مستقلة عن النص الصريح تُدخل للخوارزمية. يجب تبادلها عبر قناة مؤمنة وحفظ سريتها التامة.',
      math: 'K = [K_1, K_2, \\dots, K_J]',
    },
    {
      id: 'encryption',
      label: 'Encryption (E)',
      labelAr: 'خوارزمية التشفير (E)',
      role: 'Performs substitutions and transformations on plaintext using key K. Algorithm itself can be public (Kerckhoffs principle).',
      roleAr: 'تجري عمليات التعويض والتبديل على النص الصريح باستخدام المفتاح K. الخوارزمية ذاتها تكون علنية ومعروفة.',
      math: 'Y = E(K, X)',
    },
    {
      id: 'ciphertext',
      label: 'Ciphertext (Y)',
      labelAr: 'النص المشفر (Y)',
      role: 'Scrambled unintelligible output transmitted over an insecure channel, observable by opponents.',
      roleAr: 'المخرجات المشفرة غير المفهومة التي يتم إرسالها عبر قناة غير آمنة وتكون عرضة للتنصت.',
      math: 'Y = E(K, X)',
    },
    {
      id: 'decryption',
      label: 'Decryption (D)',
      labelAr: 'خوارزمية فك التشفير (D)',
      role: 'Essentially the encryption algorithm run in reverse using the same secret key K to restore exact plaintext X.',
      roleAr: 'عكس خوارزمية التشفير باستخدام نفس المفتاح السري K لاستعادة النص الصريح الأصلي بدقة.',
      math: 'X = D(K, Y)',
    },
    {
      id: 'opponent',
      label: 'Opponent / Cryptanalyst',
      labelAr: 'المهاجم / محلل الشفرات',
      role: 'Observes ciphertext Y and attempts to recover plaintext X or deduce secret key K via cryptanalysis or brute-force.',
      roleAr: 'يتنصت على النص المشفر Y ويحاول استعادة النص الصريح X أو استنتاج المفتاح السري K.',
      math: '\\text{Goal: Deduce } K \\text{ or } X',
    },
  ];

  const current = components.find((c) => c.id === activeStep) || components[1];

  return (
    <div className="border border-[#E5E5E5] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#F2F2F2] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            Model of Symmetric Cryptosystem (Figure 3.1)
          </h3>
          <p className="text-xs text-[#737373]">
            Five ingredients of conventional encryption and key distribution
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          نموذج نظام التشفير المتماثل والمكونات الخمسة
        </span>
      </div>

      {/* Interactive Line-based SVG Diagram */}
      <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md overflow-x-auto flex justify-center">
        <svg
          viewBox="0 0 740 260"
          className="w-full max-w-[1240px] text-[#171717] select-none"
          style={{ minWidth: 600 }}
        >
          <defs>
            <marker
              id="arrow"
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

          {/* Secure Channel Box (Top) */}
          <rect
            x="240"
            y="15"
            width="260"
            height="55"
            rx="4"
            fill="#FFFFFF"
            stroke="#171717"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <text x="370" y="38" textAnchor="middle" fontSize="11" fontWeight="600" fill="#171717">
            Secure Channel (قناة مؤمنة)
          </text>
          <text x="370" y="54" textAnchor="middle" fontSize="10" fill="#525252">
            Key Distribution / مشاركة المفتاح
          </text>

          {/* Secret Key Node */}
          <g
            onClick={() => setActiveStep('key')}
            className="cursor-pointer group"
          >
            <circle
              cx="370"
              cy="42"
              r="24"
              fill={activeStep === 'key' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text
              x="370"
              y="46"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill={activeStep === 'key' ? '#FFFFFF' : '#171717'}
            >
              K
            </text>
          </g>

          {/* Key Arrows to E and D */}
          <path
            d="M 346 42 L 230 42 L 230 115"
            fill="none"
            stroke="#171717"
            strokeWidth="1.5"
            markerEnd="url(#arrow)"
          />
          <path
            d="M 394 42 L 510 42 L 510 115"
            fill="none"
            stroke="#171717"
            strokeWidth="1.5"
            markerEnd="url(#arrow)"
          />

          {/* Main Flow: Plaintext -> Encryption -> Ciphertext -> Decryption -> Plaintext */}
          {/* 1. Plaintext X (Left) */}
          <g
            onClick={() => setActiveStep('plaintext')}
            className="cursor-pointer"
          >
            <rect
              x="30"
              y="115"
              width="100"
              height="50"
              rx="4"
              fill={activeStep === 'plaintext' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text
              x="80"
              y="136"
              textAnchor="middle"
              fontSize="11"
              fontWeight="bold"
              fill={activeStep === 'plaintext' ? '#FFFFFF' : '#171717'}
            >
              Plaintext X
            </text>
            <text
              x="80"
              y="152"
              textAnchor="middle"
              fontSize="10"
              fill={activeStep === 'plaintext' ? '#E5E5E5' : '#525252'}
            >
              النص الصريح
            </text>
          </g>

          <line x1="130" y1="140" x2="175" y2="140" stroke="#171717" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* 2. Encryption Algorithm */}
          <g
            onClick={() => setActiveStep('encryption')}
            className="cursor-pointer"
          >
            <rect
              x="180"
              y="115"
              width="100"
              height="50"
              rx="4"
              fill={activeStep === 'encryption' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text
              x="230"
              y="136"
              textAnchor="middle"
              fontSize="11"
              fontWeight="bold"
              fill={activeStep === 'encryption' ? '#FFFFFF' : '#171717'}
            >
              Encryption (E)
            </text>
            <text
              x="230"
              y="152"
              textAnchor="middle"
              fontSize="10"
              fill={activeStep === 'encryption' ? '#E5E5E5' : '#525252'}
            >
              Y = E(K, X)
            </text>
          </g>

          <line x1="280" y1="140" x2="315" y2="140" stroke="#171717" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* 3. Ciphertext Y (Center Insecure Channel) */}
          <g
            onClick={() => setActiveStep('ciphertext')}
            className="cursor-pointer"
          >
            <rect
              x="320"
              y="115"
              width="100"
              height="50"
              rx="4"
              fill={activeStep === 'ciphertext' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text
              x="370"
              y="136"
              textAnchor="middle"
              fontSize="11"
              fontWeight="bold"
              fill={activeStep === 'ciphertext' ? '#FFFFFF' : '#171717'}
            >
              Ciphertext Y
            </text>
            <text
              x="370"
              y="152"
              textAnchor="middle"
              fontSize="10"
              fill={activeStep === 'ciphertext' ? '#E5E5E5' : '#525252'}
            >
              النص المشفر
            </text>
          </g>

          <line x1="420" y1="140" x2="455" y2="140" stroke="#171717" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* 4. Decryption Algorithm */}
          <g
            onClick={() => setActiveStep('decryption')}
            className="cursor-pointer"
          >
            <rect
              x="460"
              y="115"
              width="100"
              height="50"
              rx="4"
              fill={activeStep === 'decryption' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text
              x="510"
              y="136"
              textAnchor="middle"
              fontSize="11"
              fontWeight="bold"
              fill={activeStep === 'decryption' ? '#FFFFFF' : '#171717'}
            >
              Decryption (D)
            </text>
            <text
              x="510"
              y="152"
              textAnchor="middle"
              fontSize="10"
              fill={activeStep === 'decryption' ? '#E5E5E5' : '#525252'}
            >
              X = D(K, Y)
            </text>
          </g>

          <line x1="560" y1="140" x2="605" y2="140" stroke="#171717" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* 5. Recovered Plaintext X (Right) */}
          <g
            onClick={() => setActiveStep('plaintext')}
            className="cursor-pointer"
          >
            <rect
              x="610"
              y="115"
              width="100"
              height="50"
              rx="4"
              fill="#FFFFFF"
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text x="660" y="136" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#171717">
              Plaintext X
            </text>
            <text x="660" y="152" textAnchor="middle" fontSize="10" fill="#525252">
              النص المستعاد
            </text>
          </g>

          {/* 6. Opponent / Cryptanalyst (Bottom) */}
          <line x1="370" y1="165" x2="370" y2="195" stroke="#171717" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow)" />

          <g
            onClick={() => setActiveStep('opponent')}
            className="cursor-pointer"
          >
            <rect
              x="290"
              y="200"
              width="160"
              height="45"
              rx="4"
              fill={activeStep === 'opponent' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="1.5"
            />
            <text
              x="370"
              y="219"
              textAnchor="middle"
              fontSize="11"
              fontWeight="bold"
              fill={activeStep === 'opponent' ? '#FFFFFF' : '#171717'}
            >
              Opponent / Cryptanalyst
            </text>
            <text
              x="370"
              y="234"
              textAnchor="middle"
              fontSize="10"
              fill={activeStep === 'opponent' ? '#E5E5E5' : '#525252'}
            >
              محاول فك الشفرة أو المفتاح
            </text>
          </g>
        </svg>
      </div>

      {/* Component Details Card */}
      <div className="p-4 border border-[#171717] bg-[#FFFFFF] rounded-md space-y-2">
        <div className="flex items-center justify-between border-b border-[#F2F2F2] pb-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded">
              Selected Element
            </span>
            <h4 className="text-sm font-bold text-[#171717]">{current.label}</h4>
          </div>
          <span
            dir="rtl"
            className="text-xs font-semibold text-[#525252] font-serif"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {current.labelAr}
          </span>
        </div>

        <div className="text-xs text-[#525252] space-y-1">
          <p>{current.role}</p>
          <p dir="rtl" className="font-serif text-[#525252]" style={{ fontFamily: 'var(--font-arabic)' }}>
            {current.roleAr}
          </p>
        </div>

        <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#171717]">
          <span className="text-[#737373]">Mathematical Formulation:</span>
          <span className="bg-[#FAFAFA] px-2.5 py-1 border border-[#E5E5E5] rounded font-bold">
            {current.math}
          </span>
        </div>
      </div>
    </div>
  );
}

