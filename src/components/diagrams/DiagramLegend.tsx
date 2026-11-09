import React from 'react';
import { Info } from 'lucide-react';

export interface LegendItem {
  label: string;
  labelAr?: string;
  type: 'data-flow' | 'control-flow' | 'algorithm' | 'secure-key' | 'decision';
  description?: string;
}

export interface DiagramLegendProps {
  items?: LegendItem[];
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

const defaultLegendItems: LegendItem[] = [
  {
    type: 'data-flow',
    label: 'Primary Data Flow',
    labelAr: 'مسار تدفق البيانات',
    description: 'Plaintext, Ciphertext, and Hash digests transmitted between components.',
  },
  {
    type: 'control-flow',
    label: 'Key / Control Channel',
    labelAr: 'قناة المفاتيح والتحكم',
    description: 'Secure key distribution, subkeys, nonces, and initialization vectors (IV).',
  },
  {
    type: 'algorithm',
    label: 'Cryptographic Transform',
    labelAr: 'عملية تحويل تشفيري',
    description: 'Encryption (E), Decryption (D), Hash (H), Round Function (F), S-Boxes.',
  },
  {
    type: 'secure-key',
    label: 'Secret / Private Key',
    labelAr: 'مفتاح سري أو خاص',
    description: 'Cryptographic material that MUST be kept strictly confidential.',
  },
  {
    type: 'decision',
    label: 'Verification Check',
    labelAr: 'فحص وتحقق',
    description: 'Equality comparison, integrity verification, or condition checks.',
  },
];

export default function DiagramLegend({
  items = defaultLegendItems,
  isOpen = false,
  onToggle,
  className = '',
}: DiagramLegendProps): React.ReactElement {
  return (
    <div className={`border border-[#E5E5E5] rounded-lg bg-[#FFFFFF] overflow-hidden text-xs ${className}`}>
      {onToggle ? (
        <button
          type="button"
          onClick={onToggle}
          className="w-full flex items-center justify-between p-2.5 bg-[#FAFAFA] hover:bg-[#F2F2F2] transition-colors font-medium text-[#171717]"
        >
          <div className="flex items-center gap-1.5">
            <Info size={13} className="text-[#525252]" />
            <span className="font-bold">Diagram Visual Legend / دليل الرموز التخطيطية</span>
          </div>
          <span className="font-mono text-[11px] text-[#737373]">
            {isOpen ? 'Hide ▲' : 'Show ▼'}
          </span>
        </button>
      ) : (
        <div className="flex items-center gap-1.5 p-2.5 bg-[#FAFAFA] border-b border-[#E5E5E5] font-bold text-[#171717]">
          <Info size={13} className="text-[#525252]" />
          <span>Diagram Visual Legend / دليل الرموز التخطيطية</span>
        </div>
      )}

      {(isOpen || !onToggle) && (
        <div className="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 bg-[#FFFFFF]">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-1.5 rounded border border-[#F2F2F2] bg-[#FAFAFA]">
              {/* Graphical symbol representation */}
              <div className="shrink-0 w-8 h-6 flex items-center justify-center pt-0.5">
                {item.type === 'data-flow' && (
                  <div className="w-7 h-0.5 bg-[#171717] relative">
                    <div className="absolute right-0 -top-1 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-[#171717]" />
                  </div>
                )}
                {item.type === 'control-flow' && (
                  <div className="w-7 border-t border-dashed border-[#171717] relative">
                    <div className="absolute right-0 -top-1 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-[#171717]" />
                  </div>
                )}
                {item.type === 'algorithm' && (
                  <div className="w-6 h-5 rounded border border-[#171717] bg-[#171717] text-[8px] font-bold text-white flex items-center justify-center">
                    E/D
                  </div>
                )}
                {item.type === 'secure-key' && (
                  <div className="w-5 h-5 rounded-full bg-[#171717] text-[8px] font-bold text-white flex items-center justify-center">
                    K
                  </div>
                )}
                {item.type === 'decision' && (
                  <div className="w-4 h-4 rotate-45 border border-[#171717] bg-[#FFFFFF] flex items-center justify-center text-[7px] font-bold text-[#171717]">
                    ?
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1 space-y-0.5">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-[#171717] text-[11px] leading-tight">
                    {item.label}
                  </span>
                  {item.labelAr && (
                    <span
                      dir="rtl"
                      className="text-[10px] text-[#525252] font-serif shrink-0"
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      {item.labelAr}
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-[10px] text-[#737373] leading-snug">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

