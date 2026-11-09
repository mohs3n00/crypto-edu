import React, { useState } from 'react';

export interface BlockCipherModesDiagramProps {
  initialMode?: 'ecb' | 'cbc' | 'cfb' | 'ofb' | 'ctr';
}

export default function BlockCipherModesDiagram({
  initialMode = 'cbc',
}: BlockCipherModesDiagramProps): React.ReactElement {
  const [activeMode, setActiveMode] = useState<'ecb' | 'cbc' | 'cfb' | 'ofb' | 'ctr'>(initialMode);
  const [showError, setShowError] = useState(false);

  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            Block Cipher Modes of Operation Comparison (Stallings Table 7.1 / NIST SP 800-38A)
          </h3>
          <p className="text-xs text-[#737373]">
            Architectural feedback mechanisms, stream conversions, error propagation, and parallelizability
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          مقارنة أنماط تشغيل شفرات الكتل الخمسة المعتمدة وآليات التغذية الراجعة
        </span>
      </div>

      {/* Mode Selector Tabs (5 Modes) */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        <button
          type="button"
          onClick={() => {
            setActiveMode('ecb');
            setShowError(false);
          }}
          className={`py-2 px-2.5 border rounded text-xs font-medium transition-all ${
            activeMode === 'ecb'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] hover:bg-[#FAFAFA] text-[#171717]'
          }`}
        >
          <span className="font-bold block">ECB Mode</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">دفتر الرموز الإلكتروني</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveMode('cbc')}
          className={`py-2 px-2.5 border rounded text-xs font-medium transition-all ${
            activeMode === 'cbc'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] hover:bg-[#FAFAFA] text-[#171717]'
          }`}
        >
          <span className="font-bold block">CBC Mode</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">ربط كتل الشفرات</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveMode('cfb');
            setShowError(false);
          }}
          className={`py-2 px-2.5 border rounded text-xs font-medium transition-all ${
            activeMode === 'cfb'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] hover:bg-[#FAFAFA] text-[#171717]'
          }`}
        >
          <span className="font-bold block">CFB Mode</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">التغذية الراجعة للشفرة</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveMode('ofb');
            setShowError(false);
          }}
          className={`py-2 px-2.5 border rounded text-xs font-medium transition-all ${
            activeMode === 'ofb'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] hover:bg-[#FAFAFA] text-[#171717]'
          }`}
        >
          <span className="font-bold block">OFB Mode</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">التغذية الراجعة للخرج</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveMode('ctr');
            setShowError(false);
          }}
          className={`py-2 px-2.5 border rounded text-xs font-medium transition-all ${
            activeMode === 'ctr'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FFFFFF] hover:bg-[#FAFAFA] text-[#171717]'
          }`}
        >
          <span className="font-bold block">CTR Mode</span>
          <span className="text-[10px] opacity-75 font-serif" dir="rtl">نمط العداد (المعجل)</span>
        </button>
      </div>

      {/* SVG Architecture Diagram */}
      <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md overflow-x-auto flex justify-center">
        {activeMode === 'ecb' && (
          <svg viewBox="0 0 680 200" className="w-full max-w-[1240px] select-none text-[#171717]" style={{ minWidth: 550 }}>
            <defs>
              <marker id="m-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
              </marker>
            </defs>

            {/* Block 1 */}
            <rect x="50" y="20" width="130" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="115" y="42" textAnchor="middle" fontSize="11" fontWeight="bold">Plaintext P₁</text>
            <line x1="115" y1="55" x2="115" y2="80" stroke="#171717" strokeWidth="1.5" markerEnd="url(#m-arr)" />
            <rect x="50" y="82" width="130" height="38" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="115" y="105" textAnchor="middle" fontSize="11" fontWeight="bold">Encrypt (Key K)</text>
            <line x1="115" y1="120" x2="115" y2="145" stroke="#171717" strokeWidth="1.5" markerEnd="url(#m-arr)" />
            <rect x="50" y="147" width="130" height="35" rx="3" fill="#171717" />
            <text x="115" y="169" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">Ciphertext C₁</text>

            {/* Block 2 */}
            <rect x="270" y="20" width="130" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="335" y="42" textAnchor="middle" fontSize="11" fontWeight="bold">Plaintext P₂</text>
            <line x1="335" y1="55" x2="335" y2="80" stroke="#171717" strokeWidth="1.5" markerEnd="url(#m-arr)" />
            <rect x="270" y="82" width="130" height="38" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="335" y="105" textAnchor="middle" fontSize="11" fontWeight="bold">Encrypt (Key K)</text>
            <line x1="335" y1="120" x2="335" y2="145" stroke="#171717" strokeWidth="1.5" markerEnd="url(#m-arr)" />
            <rect x="270" y="147" width="130" height="35" rx="3" fill="#171717" />
            <text x="335" y="169" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">Ciphertext C₂</text>

            {/* Block 3 */}
            <rect x="490" y="20" width="130" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="555" y="42" textAnchor="middle" fontSize="11" fontWeight="bold">Plaintext P₃</text>
            <line x1="555" y1="55" x2="555" y2="80" stroke="#171717" strokeWidth="1.5" markerEnd="url(#m-arr)" />
            <rect x="490" y="82" width="130" height="38" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="555" y="105" textAnchor="middle" fontSize="11" fontWeight="bold">Encrypt (Key K)</text>
            <line x1="555" y1="120" x2="555" y2="145" stroke="#171717" strokeWidth="1.5" markerEnd="url(#m-arr)" />
            <rect x="490" y="147" width="130" height="35" rx="3" fill="#171717" />
            <text x="555" y="169" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">Ciphertext C₃</text>
          </svg>
        )}

        {activeMode === 'cbc' && (
          <svg viewBox="0 0 700 240" className="w-full max-w-[1240px] select-none text-[#171717]" style={{ minWidth: 580 }}>
            <defs>
              <marker id="cbc-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
              </marker>
            </defs>

            {/* IV Node */}
            <rect x="20" y="55" width="80" height="32" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="60" y="75" textAnchor="middle" fontSize="11" fontWeight="bold">IV</text>
            <line x1="100" y1="71" x2="160" y2="71" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cbc-arr)" />

            {/* Block 1 */}
            <rect x="135" y="15" width="90" height="30" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="180" y="35" textAnchor="middle" fontSize="11" fontWeight="bold">P₁</text>
            <line x1="180" y1="45" x2="180" y2="60" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cbc-arr)" />
            {/* XOR Circle 1 */}
            <circle cx="180" cy="71" r="11" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="180" y="76" textAnchor="middle" fontSize="13" fontWeight="bold">⊕</text>
            <line x1="180" y1="82" x2="180" y2="105" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cbc-arr)" />
            {/* Encrypt Block 1 */}
            <rect x="130" y="107" width="100" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="180" y="128" textAnchor="middle" fontSize="10" fontWeight="bold">Encrypt (K)</text>
            <line x1="180" y1="142" x2="180" y2="175" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cbc-arr)" />
            {/* C1 */}
            <rect x="135" y="177" width="90" height="35" rx="3" fill={showError ? '#525252' : '#171717'} />
            <text x="180" y="198" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">
              {showError ? 'C₁ [ERROR]' : 'C₁'}
            </text>

            {/* Chaining Line from C1 to Block 2 XOR */}
            <path d="M 180 160 L 290 160 L 290 71 L 350 71" fill="none" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cbc-arr)" />

            {/* Block 2 */}
            <rect x="325" y="15" width="90" height="30" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="370" y="35" textAnchor="middle" fontSize="11" fontWeight="bold">P₂</text>
            <line x1="370" y1="45" x2="370" y2="60" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cbc-arr)" />
            {/* XOR Circle 2 */}
            <circle cx="370" cy="71" r="11" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="370" y="76" textAnchor="middle" fontSize="13" fontWeight="bold">⊕</text>
            <line x1="370" y1="82" x2="370" y2="105" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cbc-arr)" />
            {/* Encrypt Block 2 */}
            <rect x="320" y="107" width="100" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="370" y="128" textAnchor="middle" fontSize="10" fontWeight="bold">Encrypt (K)</text>
            <line x1="370" y1="142" x2="370" y2="175" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cbc-arr)" />
            {/* C2 */}
            <rect x="325" y="177" width="90" height="35" rx="3" fill="#171717" />
            <text x="370" y="198" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">C₂</text>

            {/* Chaining Line from C2 to Block 3 XOR */}
            <path d="M 370 160 L 480 160 L 480 71 L 540 71" fill="none" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cbc-arr)" />

            {/* Block 3 */}
            <rect x="515" y="15" width="90" height="30" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="560" y="35" textAnchor="middle" fontSize="11" fontWeight="bold">P₃</text>
            <line x1="560" y1="45" x2="560" y2="60" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cbc-arr)" />
            {/* XOR Circle 3 */}
            <circle cx="560" cy="71" r="11" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="560" y="76" textAnchor="middle" fontSize="13" fontWeight="bold">⊕</text>
            <line x1="560" y1="82" x2="560" y2="105" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cbc-arr)" />
            {/* Encrypt Block 3 */}
            <rect x="510" y="107" width="100" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="560" y="128" textAnchor="middle" fontSize="10" fontWeight="bold">Encrypt (K)</text>
            <line x1="560" y1="142" x2="560" y2="175" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cbc-arr)" />
            {/* C3 */}
            <rect x="515" y="177" width="90" height="35" rx="3" fill="#171717" />
            <text x="560" y="198" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">C₃</text>
          </svg>
        )}

        {activeMode === 'cfb' && (
          <svg viewBox="0 0 680 220" className="w-full max-w-[1240px] select-none text-[#171717]" style={{ minWidth: 550 }}>
            <defs>
              <marker id="cfb-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
              </marker>
            </defs>

            {/* Shift Register / IV */}
            <rect x="40" y="15" width="130" height="30" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="105" y="34" textAnchor="middle" fontSize="10" fontWeight="bold">Shift Register (IV)</text>
            <line x1="105" y1="45" x2="105" y2="65" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cfb-arr)" />

            <rect x="40" y="67" width="130" height="32" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="105" y="87" textAnchor="middle" fontSize="10" fontWeight="bold">Encrypt (Key K)</text>
            <line x1="105" y1="99" x2="105" y2="120" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cfb-arr)" />

            <circle cx="105" cy="132" r="10" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="105" y="137" textAnchor="middle" fontSize="12" fontWeight="bold">⊕</text>
            <line x1="20" y1="132" x2="93" y2="132" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cfb-arr)" />
            <text x="15" y="126" fontSize="9" fontWeight="bold">P₁</text>

            <line x1="105" y1="142" x2="105" y2="165" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cfb-arr)" />
            <rect x="40" y="167" width="130" height="30" rx="3" fill="#171717" />
            <text x="105" y="186" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">Ciphertext C₁</text>

            {/* Feedback from C1 to next stage */}
            <path d="M 105 182 L 230 182 L 230 30 L 260 30" fill="none" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cfb-arr)" />

            {/* Stage 2 */}
            <rect x="260" y="15" width="130" height="30" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="325" y="34" textAnchor="middle" fontSize="10" fontWeight="bold">Shift Register &lt;&lt; C₁</text>
            <line x1="325" y1="45" x2="325" y2="65" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cfb-arr)" />

            <rect x="260" y="67" width="130" height="32" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="325" y="87" textAnchor="middle" fontSize="10" fontWeight="bold">Encrypt (Key K)</text>
            <line x1="325" y1="99" x2="325" y2="120" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cfb-arr)" />

            <circle cx="325" cy="132" r="10" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="325" y="137" textAnchor="middle" fontSize="12" fontWeight="bold">⊕</text>
            <line x1="240" y1="132" x2="313" y2="132" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cfb-arr)" />
            <text x="235" y="126" fontSize="9" fontWeight="bold">P₂</text>

            <line x1="325" y1="142" x2="325" y2="165" stroke="#171717" strokeWidth="1.5" markerEnd="url(#cfb-arr)" />
            <rect x="260" y="167" width="130" height="30" rx="3" fill="#171717" />
            <text x="325" y="186" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">Ciphertext C₂</text>
          </svg>
        )}

        {activeMode === 'ofb' && (
          <svg viewBox="0 0 680 220" className="w-full max-w-[1240px] select-none text-[#171717]" style={{ minWidth: 550 }}>
            <defs>
              <marker id="ofb-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
              </marker>
            </defs>

            {/* Nonce / IV */}
            <rect x="40" y="15" width="130" height="30" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="105" y="34" textAnchor="middle" fontSize="10" fontWeight="bold">IV Register</text>
            <line x1="105" y1="45" x2="105" y2="65" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ofb-arr)" />

            <rect x="40" y="67" width="130" height="32" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="105" y="87" textAnchor="middle" fontSize="10" fontWeight="bold">Encrypt (Key K)</text>

            {/* Output feedback loop to NEXT stage BEFORE XOR */}
            <path d="M 105 83 L 220 83 L 220 30 L 260 30" fill="none" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ofb-arr)" />

            <line x1="105" y1="99" x2="105" y2="120" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ofb-arr)" />
            <circle cx="105" cy="132" r="10" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="105" y="137" textAnchor="middle" fontSize="12" fontWeight="bold">⊕</text>
            <line x1="20" y1="132" x2="93" y2="132" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ofb-arr)" />
            <text x="15" y="126" fontSize="9" fontWeight="bold">P₁</text>

            <line x1="105" y1="142" x2="105" y2="165" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ofb-arr)" />
            <rect x="40" y="167" width="130" height="30" rx="3" fill="#171717" />
            <text x="105" y="186" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">Ciphertext C₁</text>

            {/* Stage 2 */}
            <rect x="260" y="15" width="130" height="30" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="325" y="34" textAnchor="middle" fontSize="10" fontWeight="bold">Previous Output O₁</text>
            <line x1="325" y1="45" x2="325" y2="65" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ofb-arr)" />

            <rect x="260" y="67" width="130" height="32" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="325" y="87" textAnchor="middle" fontSize="10" fontWeight="bold">Encrypt (Key K)</text>
            <line x1="325" y1="99" x2="325" y2="120" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ofb-arr)" />

            <circle cx="325" cy="132" r="10" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="325" y="137" textAnchor="middle" fontSize="12" fontWeight="bold">⊕</text>
            <line x1="240" y1="132" x2="313" y2="132" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ofb-arr)" />
            <text x="235" y="126" fontSize="9" fontWeight="bold">P₂</text>

            <line x1="325" y1="142" x2="325" y2="165" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ofb-arr)" />
            <rect x="260" y="167" width="130" height="30" rx="3" fill="#171717" />
            <text x="325" y="186" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">Ciphertext C₂</text>
          </svg>
        )}

        {activeMode === 'ctr' && (
          <svg viewBox="0 0 680 200" className="w-full max-w-[1240px] select-none text-[#171717]" style={{ minWidth: 550 }}>
            <defs>
              <marker id="ctr-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
              </marker>
            </defs>

            {/* Block 1 */}
            <rect x="40" y="15" width="140" height="30" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="110" y="34" textAnchor="middle" fontSize="10" fontWeight="bold">Nonce || Counter 1</text>
            <line x1="110" y1="45" x2="110" y2="65" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ctr-arr)" />
            <rect x="40" y="67" width="140" height="32" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="110" y="87" textAnchor="middle" fontSize="10" fontWeight="bold">Encrypt (Key K)</text>
            <line x1="110" y1="99" x2="110" y2="118" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ctr-arr)" />
            <circle cx="110" cy="128" r="10" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="110" y="133" textAnchor="middle" fontSize="12" fontWeight="bold">⊕</text>
            <line x1="20" y1="128" x2="98" y2="128" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ctr-arr)" />
            <text x="15" y="122" fontSize="9" fontWeight="bold">P₁</text>
            <line x1="110" y1="138" x2="110" y2="158" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ctr-arr)" />
            <rect x="40" y="160" width="140" height="30" rx="3" fill="#171717" />
            <text x="110" y="179" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">Ciphertext C₁</text>

            {/* Block 2 */}
            <rect x="270" y="15" width="140" height="30" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="340" y="34" textAnchor="middle" fontSize="10" fontWeight="bold">Nonce || Counter 2</text>
            <line x1="340" y1="45" x2="340" y2="65" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ctr-arr)" />
            <rect x="270" y="67" width="140" height="32" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="340" y="87" textAnchor="middle" fontSize="10" fontWeight="bold">Encrypt (Key K)</text>
            <line x1="340" y1="99" x2="340" y2="118" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ctr-arr)" />
            <circle cx="340" cy="128" r="10" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="340" y="133" textAnchor="middle" fontSize="12" fontWeight="bold">⊕</text>
            <line x1="250" y1="128" x2="328" y2="128" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ctr-arr)" />
            <text x="245" y="122" fontSize="9" fontWeight="bold">P₂</text>
            <line x1="340" y1="138" x2="340" y2="158" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ctr-arr)" />
            <rect x="270" y="160" width="140" height="30" rx="3" fill="#171717" />
            <text x="340" y="179" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">Ciphertext C₂</text>

            {/* Block 3 */}
            <rect x="500" y="15" width="140" height="30" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="570" y="34" textAnchor="middle" fontSize="10" fontWeight="bold">Nonce || Counter 3</text>
            <line x1="570" y1="45" x2="570" y2="65" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ctr-arr)" />
            <rect x="500" y="67" width="140" height="32" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="570" y="87" textAnchor="middle" fontSize="10" fontWeight="bold">Encrypt (Key K)</text>
            <line x1="570" y1="99" x2="570" y2="118" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ctr-arr)" />
            <circle cx="570" cy="128" r="10" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
            <text x="570" y="133" textAnchor="middle" fontSize="12" fontWeight="bold">⊕</text>
            <line x1="480" y1="128" x2="558" y2="128" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ctr-arr)" />
            <text x="475" y="122" fontSize="9" fontWeight="bold">P₃</text>
            <line x1="570" y1="138" x2="570" y2="158" stroke="#171717" strokeWidth="1.5" markerEnd="url(#ctr-arr)" />
            <rect x="500" y="160" width="140" height="30" rx="3" fill="#171717" />
            <text x="570" y="179" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">Ciphertext C₃</text>
          </svg>
        )}
      </div>

      {/* Mode Properties & Academic Details */}
      <div className="p-4 border border-[#171717] bg-[#FFFFFF] rounded-md space-y-3">
        {activeMode === 'ecb' && (
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#171717]">Electronic Codebook (ECB) Characteristics:</h4>
            <p className="text-xs text-[#171717] leading-relaxed">
              <strong>Vulnerability: </strong>Each block is encrypted completely independently. The same 64-bit plaintext block always yields the exact same 64-bit ciphertext block under key K. This allows attackers to perform cut-and-paste block rearrangement attacks (e.g. swapping bank transaction accounts) without knowing the key.
            </p>
            <p dir="rtl" className="text-xs text-[#525252] font-serif" style={{ fontFamily: 'var(--font-arabic)' }}>
              <strong>تحذير امتحاني: </strong>نمط ECB غير آمن لنقل الرسائل الطويلة لأن الكتل الصريحة المتماثلة تنتج كتل شفرة متماثلة دائماً، مما يكشف الأنماط الإحصائية ويسمح بهجمات القص واللصق. يُستخدم فقط لنقل قيم قصيرة جداً ومفردة مثل مفاتيح التشفير المؤقتة.
            </p>
          </div>
        )}

        {activeMode === 'cbc' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-[#171717]">Cipher Block Chaining (CBC) Characteristics:</h4>
              <button
                type="button"
                onClick={() => setShowError(!showError)}
                className="px-2.5 py-1 text-xs border border-[#171717] rounded bg-[#FAFAFA] font-mono hover:bg-[#F2F2F2]"
              >
                {showError ? 'Reset Transmission' : 'Simulate 1-Bit Error in C₁'}
              </button>
            </div>
            <p className="text-xs text-[#171717] leading-relaxed">
              <strong>Chaining Mechanism: </strong><code className="font-mono bg-[#FAFAFA] px-1 py-0.5 border rounded">C_i = E_K(P_i ⊕ C_{'{'}i-1{'}'})</code> with <code className="font-mono bg-[#FAFAFA] px-1 py-0.5 border rounded">C_0 = IV</code>. An Initialization Vector (IV) must be known to both sender and receiver, but need not be secret (only integrity protected).
            </p>
            {showError && (
              <div className="p-3 border-2 border-[#171717] bg-[#FAFAFA] rounded text-xs space-y-1">
                <span className="font-bold text-[#171717] block">Examination Rule — Error Propagation Limits:</span>
                <p className="text-[#171717]">
                  If a 1-bit transmission error occurs in ciphertext block <code className="font-mono font-bold">C₁</code>:
                  <br />• Plaintext block <code className="font-mono font-bold">P₁</code> is <strong>completely corrupted / scrambled</strong>.
                  <br />• Plaintext block <code className="font-mono font-bold">P₂</code> has <strong>exactly the single corresponding bit flipped</strong>.
                  <br />• Plaintext block <code className="font-mono font-bold">P₃</code> and all subsequent blocks are <strong>completely uncorrupted (recovered)</strong>!
                </p>
              </div>
            )}
            <p dir="rtl" className="text-xs text-[#525252] font-serif" style={{ fontFamily: 'var(--font-arabic)' }}>
              <strong>قاعدة الامتحان في سريان أخطاء CBC: </strong>خطأ في الكتلة المشفرة C₁ يؤدي لتدمير الكتلة P₁ بالكامل، بينما يتسبب في قلب بت واحد مطابق في P₂ فقط، ويتعافى النظام تماماً بدءاً من P₃.
            </p>
          </div>
        )}

        {activeMode === 'cfb' && (
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#171717]">Cipher Feedback (CFB) Characteristics:</h4>
            <p className="text-xs text-[#171717] leading-relaxed">
              <strong>Stream Conversion: </strong>Converts a block cipher into a stream cipher. Plaintext is XORed with the output of the block cipher encryption. The resulting ciphertext is fed back into the shift register for the next round.
            </p>
            <p className="text-xs text-[#525252]">
              <strong>Error Propagation: </strong>A bit error in ciphertext affects the immediate plaintext bit AND propagates through the shift register for as long as that error remains in the register (e.g. 1 + b/s blocks).
            </p>
            <p dir="rtl" className="text-xs text-[#525252] font-serif" style={{ fontFamily: 'var(--font-arabic)' }}>
              <strong>التغذية الراجعة للشفرة (CFB): </strong>تحول التشفير الكتلي إلى تشفير تدفقي فوري للأحرف أو البتات، حيث يُغذى النص المشفر راجعاً إلى سجل الإزاحة.
            </p>
          </div>
        )}

        {activeMode === 'ofb' && (
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#171717]">Output Feedback (OFB) Characteristics:</h4>
            <p className="text-xs text-[#171717] leading-relaxed">
              <strong>Stream Mode without Error Propagation: </strong>Similar to CFB, except the output of the encryption function is fed back directly into the shift register <em>before</em> XORing with plaintext!
            </p>
            <p className="text-xs text-[#171717]">
              <strong>Critical Advantage: </strong>Bit errors in ciphertext do <em>not</em> propagate! A 1-bit transmission error in Cᵢ corrupts only the single corresponding bit in Pᵢ.
            </p>
            <p dir="rtl" className="text-xs text-[#525252] font-serif" style={{ fontFamily: 'var(--font-arabic)' }}>
              <strong>التغذية الراجعة للخرج (OFB): </strong>تُعاد تغذية ناتج التشفير مباشرة قبل خلطه بالنص، وميزتها الكبرى هي <strong>عدم انتشار الأخطاء إطلاقاً</strong>؛ فخطأ بت واحد في النص المشفر يقابله خطأ في بت واحد فقط في النص الصريح المسترجع.
            </p>
          </div>
        )}

        {activeMode === 'ctr' && (
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-[#171717]">Counter (CTR) Mode Advantages (Table 7.1):</h4>
            <p className="text-xs text-[#171717] leading-relaxed">
              <strong>Six Major Advantages: </strong>1. Hardware efficiency (parallel processing of blocks). 2. Software efficiency (multiprocessor scalability). 3. Preprocessing (encrypt counters ahead of data arrival). 4. Random access (decrypt block i without decrypting earlier blocks). 5. Provable security (at least as secure as others). 6. Simplicity (requires only encryption algorithm, never decryption!).
            </p>
            <p dir="rtl" className="text-xs text-[#525252] font-serif" style={{ fontFamily: 'var(--font-arabic)' }}>
              <strong>مزايا نمط العداد CTR: </strong>يدعم المعالجة المتوازية للكتل والوصول العشوائي لأي كتلة مباشرة، ولا يتطلب تنفيذ خوارزمية فك التشفير بل يعتمد على دالة التشفير فقط لكل من التشفير وفك التشفير.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
