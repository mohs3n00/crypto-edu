import React, { useState } from 'react';

export default function AsymmetricVsSymmetricDiagram(): React.ReactElement {
  const [activeModel, setActiveModel] = useState<'symmetric' | 'asym-secrecy' | 'asym-auth'>('symmetric');

  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            Symmetric vs. Asymmetric (Public-Key) Cryptographic Architecture
          </h3>
          <p className="text-xs text-[#737373]">
            Key distribution models, mathematical public/private key pairs, confidentiality vs. digital signatures
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          المقارنة المعمارية بين التشفير المتماثل والتشفير غير المتماثل (المفتاح العام)
        </span>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <button
          type="button"
          onClick={() => setActiveModel('symmetric')}
          className={`py-2 px-3 border rounded text-xs font-medium transition-all ${
            activeModel === 'symmetric'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:bg-[#FAFAFA]'
          }`}
        >
          <span className="font-bold block">Symmetric (Shared Key K)</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">التشفير المتماثل (مفتاح سري مشترك)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveModel('asym-secrecy')}
          className={`py-2 px-3 border rounded text-xs font-medium transition-all ${
            activeModel === 'asym-secrecy'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:bg-[#FAFAFA]'
          }`}
        >
          <span className="font-bold block">Asymmetric Secrecy</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">السرية بالمفتاح العام للوجهة (PU_B)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveModel('asym-auth')}
          className={`py-2 px-3 border rounded text-xs font-medium transition-all ${
            activeModel === 'asym-auth'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] hover:bg-[#FAFAFA]'
          }`}
        >
          <span className="font-bold block">Digital Signature (Auth)</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">المصادقة والتوقيع بالمفتاح الخاص (PR_A)</span>
        </button>
      </div>

      {/* Visual Canvas SVG */}
      <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md overflow-x-auto flex justify-center">
        {activeModel === 'symmetric' && (
          <svg viewBox="0 0 720 180" className="w-full max-w-[1240px] select-none text-[#171717]" style={{ minWidth: 580 }}>
            <defs>
              <marker id="s-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
              </marker>
            </defs>

            <rect x="30" y="30" width="100" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="80" y="52" textAnchor="middle" fontSize="11" fontWeight="bold">Sender (Alice)</text>
            <line x1="130" y1="47" x2="190" y2="47" stroke="#171717" strokeWidth="1.5" markerEnd="url(#s-arr)" />

            <rect x="190" y="25" width="130" height="45" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="255" y="45" textAnchor="middle" fontSize="10" fontWeight="bold">Encryption E</text>
            <text x="255" y="59" textAnchor="middle" fontSize="9" fill="#525252">Y = E(K, X)</text>

            <line x1="320" y1="47" x2="400" y2="47" stroke="#171717" strokeWidth="1.5" markerEnd="url(#s-arr)" />
            <text x="360" y="40" textAnchor="middle" fontSize="10" fontStyle="italic">Insecure Y</text>

            <rect x="400" y="25" width="130" height="45" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="465" y="45" textAnchor="middle" fontSize="10" fontWeight="bold">Decryption D</text>
            <text x="465" y="59" textAnchor="middle" fontSize="9" fill="#525252">X = D(K, Y)</text>

            <line x1="530" y1="47" x2="590" y2="47" stroke="#171717" strokeWidth="1.5" markerEnd="url(#s-arr)" />
            <rect x="590" y="30" width="100" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="640" y="52" textAnchor="middle" fontSize="11" fontWeight="bold">Receiver (Bob)</text>

            {/* Shared Key Source */}
            <rect x="300" y="115" width="120" height="35" rx="3" fill="#171717" />
            <text x="360" y="137" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">Shared Secret Key K</text>
            <path d="M 300 132 L 255 132 L 255 70" fill="none" stroke="#171717" strokeWidth="1.5" markerEnd="url(#s-arr)" />
            <path d="M 420 132 L 465 132 L 465 70" fill="none" stroke="#171717" strokeWidth="1.5" markerEnd="url(#s-arr)" />
          </svg>
        )}

        {activeModel === 'asym-secrecy' && (
          <svg viewBox="0 0 720 180" className="w-full max-w-[1240px] select-none text-[#171717]" style={{ minWidth: 580 }}>
            <defs>
              <marker id="as-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
              </marker>
            </defs>

            <rect x="30" y="30" width="100" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="80" y="52" textAnchor="middle" fontSize="11" fontWeight="bold">Sender (Alice)</text>
            <line x1="130" y1="47" x2="190" y2="47" stroke="#171717" strokeWidth="1.5" markerEnd="url(#as-arr)" />

            <rect x="190" y="25" width="140" height="45" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="260" y="43" textAnchor="middle" fontSize="10" fontWeight="bold">Encrypt with PU_B</text>
            <text x="260" y="58" textAnchor="middle" fontSize="9" fill="#525252">Y = E(PU_B, X)</text>

            <line x1="330" y1="47" x2="390" y2="47" stroke="#171717" strokeWidth="1.5" markerEnd="url(#as-arr)" />

            <rect x="390" y="25" width="140" height="45" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="460" y="43" textAnchor="middle" fontSize="10" fontWeight="bold">Decrypt with PR_B</text>
            <text x="460" y="58" textAnchor="middle" fontSize="9" fill="#525252">X = D(PR_B, Y)</text>

            <line x1="530" y1="47" x2="590" y2="47" stroke="#171717" strokeWidth="1.5" markerEnd="url(#as-arr)" />
            <rect x="590" y="30" width="100" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="640" y="52" textAnchor="middle" fontSize="11" fontWeight="bold">Receiver (Bob)</text>

            {/* Keys annotation */}
            <rect x="195" y="115" width="130" height="32" rx="3" fill="#FAFAFA" stroke="#171717" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="260" y="135" textAnchor="middle" fontSize="9" fontWeight="bold">Bob's Public Key PU_B</text>
            <line x1="260" y1="115" x2="260" y2="70" stroke="#171717" strokeWidth="1.5" markerEnd="url(#as-arr)" />

            <rect x="395" y="115" width="130" height="32" rx="3" fill="#171717" />
            <text x="460" y="135" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#FFFFFF">Bob's Private Key PR_B</text>
            <line x1="460" y1="115" x2="460" y2="70" stroke="#171717" strokeWidth="1.5" markerEnd="url(#as-arr)" />
          </svg>
        )}

        {activeModel === 'asym-auth' && (
          <svg viewBox="0 0 720 180" className="w-full max-w-[1240px] select-none text-[#171717]" style={{ minWidth: 580 }}>
            <defs>
              <marker id="aa-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
              </marker>
            </defs>

            <rect x="30" y="30" width="100" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="80" y="52" textAnchor="middle" fontSize="11" fontWeight="bold">Signer (Alice)</text>
            <line x1="130" y1="47" x2="190" y2="47" stroke="#171717" strokeWidth="1.5" markerEnd="url(#aa-arr)" />

            <rect x="190" y="25" width="140" height="45" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="260" y="43" textAnchor="middle" fontSize="10" fontWeight="bold">Sign with PR_A</text>
            <text x="260" y="58" textAnchor="middle" fontSize="9" fill="#525252">Y = E(PR_A, X)</text>

            <line x1="330" y1="47" x2="390" y2="47" stroke="#171717" strokeWidth="1.5" markerEnd="url(#aa-arr)" />

            <rect x="390" y="25" width="140" height="45" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="460" y="43" textAnchor="middle" fontSize="10" fontWeight="bold">Verify with PU_A</text>
            <text x="460" y="58" textAnchor="middle" fontSize="9" fill="#525252">X = D(PU_A, Y)</text>

            <line x1="530" y1="47" x2="590" y2="47" stroke="#171717" strokeWidth="1.5" markerEnd="url(#aa-arr)" />
            <rect x="590" y="30" width="100" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="640" y="52" textAnchor="middle" fontSize="11" fontWeight="bold">Verifier (Bob)</text>

            {/* Keys annotation */}
            <rect x="195" y="115" width="130" height="32" rx="3" fill="#171717" />
            <text x="260" y="135" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#FFFFFF">Alice's Private PR_A</text>
            <line x1="260" y1="115" x2="260" y2="70" stroke="#171717" strokeWidth="1.5" markerEnd="url(#aa-arr)" />

            <rect x="395" y="115" width="130" height="32" rx="3" fill="#FAFAFA" stroke="#171717" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="460" y="135" textAnchor="middle" fontSize="9" fontWeight="bold">Alice's Public PU_A</text>
            <line x1="460" y1="115" x2="460" y2="70" stroke="#171717" strokeWidth="1.5" markerEnd="url(#aa-arr)" />
          </svg>
        )}
      </div>

      {/* Academic Comparison Table */}
      <div className="p-4 border border-[#171717] bg-[#FFFFFF] rounded-md text-xs space-y-2">
        <h4 className="font-bold font-mono uppercase text-[#171717]">
          Essential Academic Distinctions for Exams:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#525252]">
          <p>
            <strong>Confidentiality Mode: </strong>Encrypt with <em>recipient's</em> public key (PU_B). Only recipient Bob possesses PR_B, ensuring nobody else can read the message.
          </p>
          <p>
            <strong>Authentication / Signature Mode: </strong>Encrypt with <em>sender's</em> private key (PR_A). Since only Alice possesses PR_A, anyone can decrypt with PU_A to verify authentic authorship and non-repudiation.
          </p>
        </div>
      </div>
    </div>
  );
}

