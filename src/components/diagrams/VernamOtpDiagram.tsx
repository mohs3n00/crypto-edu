import React from 'react';

export default function VernamOtpDiagram(): React.ReactElement {
  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            Vernam Cipher &amp; One-Time Pad (OTP) — Bitwise XOR &amp; Perfect Secrecy
          </h3>
          <p className="text-xs text-[#737373]">
            Bit-level XOR encryption Cᵢ = Pᵢ ⊕ Kᵢ, unconditional Shannon security, and key reuse vulnerability
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          شفرة فيرنام ولوحة المرة الواحدة — عملية XOR الثنائية والأمان التام لشانون
        </span>
      </div>

      {/* Bit-level XOR Architecture SVG */}
      <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md overflow-x-auto flex justify-center">
        <svg viewBox="0 0 740 180" className="w-full max-w-[1240px] select-none text-[#171717]" style={{ minWidth: 600 }}>
          <defs>
            <marker id="v-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
            </marker>
          </defs>

          {/* Encryption Side */}
          <rect x="30" y="25" width="130" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="95" y="47" textAnchor="middle" fontSize="11" fontWeight="bold">Plaintext (Pᵢ)</text>
          <line x1="160" y1="42" x2="220" y2="42" stroke="#171717" strokeWidth="1.5" markerEnd="url(#v-arr)" />

          {/* Key stream */}
          <rect x="175" y="115" width="130" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="240" y="137" textAnchor="middle" fontSize="11" fontWeight="bold">Random Key (Kᵢ)</text>
          <line x1="240" y1="115" x2="240" y2="60" stroke="#171717" strokeWidth="1.5" markerEnd="url(#v-arr)" />

          {/* XOR Circle */}
          <circle cx="240" cy="42" r="14" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="240" y="48" textAnchor="middle" fontSize="16" fontWeight="bold">⊕</text>
          <line x1="254" y1="42" x2="310" y2="42" stroke="#171717" strokeWidth="1.5" markerEnd="url(#v-arr)" />

          {/* Ciphertext */}
          <rect x="312" y="25" width="130" height="35" rx="3" fill="#171717" />
          <text x="377" y="47" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">Ciphertext (Cᵢ)</text>
          <line x1="442" y1="42" x2="500" y2="42" stroke="#171717" strokeWidth="1.5" markerEnd="url(#v-arr)" />

          {/* Decryption Side */}
          <circle cx="515" cy="42" r="14" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="515" y="48" textAnchor="middle" fontSize="16" fontWeight="bold">⊕</text>
          <line x1="515" y1="115" x2="515" y2="60" stroke="#171717" strokeWidth="1.5" markerEnd="url(#v-arr)" />

          {/* Same Key stream for Decryption */}
          <rect x="450" y="115" width="130" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="515" y="137" textAnchor="middle" fontSize="11" fontWeight="bold">Same Key (Kᵢ)</text>

          {/* Decrypted Plaintext */}
          <line x1="529" y1="42" x2="590" y2="42" stroke="#171717" strokeWidth="1.5" markerEnd="url(#v-arr)" />
          <rect x="592" y="25" width="130" height="35" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="657" y="47" textAnchor="middle" fontSize="11" fontWeight="bold">Recovered (Pᵢ)</text>
        </svg>
      </div>

      {/* Unconditional Secrecy vs Practical Difficulty Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-4 border-2 border-[#171717] bg-[#FFFFFF] rounded-md space-y-2">
          <span className="font-mono text-[10px] font-bold text-[#171717] uppercase block">
            Shannon's Proof of Perfect Secrecy (1949):
          </span>
          <p className="text-[#171717] leading-relaxed">
            The One-Time Pad is the <strong>only provably unbreakable cryptosystem</strong>. Because the key is truly random and as long as the message:
          </p>
          <div className="p-2 bg-[#FAFAFA] border border-[#E5E5E5] rounded font-mono font-bold text-center">
            P(Plaintext = M | Ciphertext = C) = P(Plaintext = M)
          </div>
          <p className="text-[#525252]">
            Any ciphertext can translate into any valid plaintext of the same length with equal probability. An exhaustive key search yields every possible dictionary word, providing zero information to the cryptanalyst.
          </p>
        </div>

        <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md space-y-2">
          <span className="font-mono text-[10px] font-bold text-[#737373] uppercase block">
            Why Isn't OTP Used Everywhere? (Two Core Flaws):
          </span>
          <ul className="space-y-1.5 text-[#525252] list-disc list-inside">
            <li>
              <strong>Key Generation: </strong>Generating enormous volumes of genuinely random numbers at high data rates is physically demanding.
            </li>
            <li>
              <strong>Key Distribution: </strong>For every message sent, an equal-length secret key must be safely distributed beforehand. If a secure channel exists to distribute the key, that channel could simply send the message directly!
            </li>
            <li>
              <strong>Catastrophic Key Reuse: </strong>If a key is reused even once: C₁ ⊕ C₂ = (P₁ ⊕ K) ⊕ (P₂ ⊕ K) = P₁ ⊕ P₂, completely stripping the key and allowing relative frequency recovery!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

