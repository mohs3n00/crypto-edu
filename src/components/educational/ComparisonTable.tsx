import React from 'react';

export interface ComparisonRow {
  feature: string;
  featureAr?: string;
  values: string[]; // values corresponding to column headers (excluding the feature column)
}

interface ComparisonTableProps {
  title?: string;
  titleAr?: string;
  description?: string;
  headers: string[]; // e.g. ["Dimension", "Symmetric Encryption", "Asymmetric Encryption"]
  rows: ComparisonRow[];
  className?: string;
}

export default function ComparisonTable({
  title,
  titleAr,
  description,
  headers,
  rows,
  className = '',
}: ComparisonTableProps): React.ReactElement {
  return (
    <div className={`space-y-3 my-6 ${className}`}>
      {(title || titleAr) && (
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#E5E5E5] pb-2 gap-2">
          <div>
            {title && <h3 className="text-xl font-bold text-[#171717] tracking-tight">{title}</h3>}
            {description && <p className="text-xs text-[#737373] mt-0.5">{description}</p>}
          </div>
          {titleAr && (
            <span
              dir="rtl"
              className="text-base font-bold text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {titleAr}
            </span>
          )}
        </div>
      )}

      {/* Table Container with Horizontal Scroll */}
      <div className="border border-[#171717] rounded-lg overflow-hidden bg-[#FFFFFF] shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-[#171717] bg-[#171717] text-[#FFFFFF]">
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    className={`py-3 px-4 font-semibold text-xs tracking-wider uppercase font-mono ${
                      idx === 0 ? 'w-1/4' : ''
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E5E5]">
              {rows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className={`hover:bg-[#FAFAFA] transition-colors ${
                    rIdx % 2 === 1 ? 'bg-[#FAFAFA]/50' : 'bg-[#FFFFFF]'
                  }`}
                >
                  {/* Feature column */}
                  <td className="py-3 px-4 font-semibold text-[#171717] border-r border-[#E5E5E5] align-top">
                    <div>{row.feature}</div>
                    {row.featureAr && (
                      <div
                        dir="rtl"
                        className="text-xs text-[#525252] font-serif mt-0.5 font-normal"
                        style={{ fontFamily: 'var(--font-arabic)' }}
                      >
                        {row.featureAr}
                      </div>
                    )}
                  </td>

                  {/* Values */}
                  {row.values.map((val, vIdx) => (
                    <td
                      key={vIdx}
                      className="py-3 px-4 text-[#171717] leading-relaxed align-top text-xs"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

