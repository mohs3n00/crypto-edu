import React from 'react';
import AIProviderActions from '../ai/AIProviderActions';

export interface ConceptCardItem {
  id?: string;
  title: string;
  titleAr?: string;
  badge?: string;
  icon?: React.ReactNode;
  description: string;
  descriptionAr?: string;
  keyRule?: string;
}

export interface ConceptCardsGridProps {
  title: string;
  titleAr?: string;
  cards: ConceptCardItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function ConceptCardsGrid({
  title,
  titleAr,
  cards,
  columns = 4,
  className = '',
}: ConceptCardsGridProps): React.ReactElement {
  const gridClass =
    columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : columns === 3
      ? 'grid-cols-1 md:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <div
      className={`my-8 border-2 border-[#171717] rounded-xl p-6 sm:p-7 bg-[#FFFFFF] space-y-6 shadow-xs w-full max-w-[1400px] ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div className="space-y-0.5">
          <span className="font-mono text-[10px] uppercase font-bold text-[#737373] tracking-wider block">
            Core Concept Taxonomy / تصنيف المفاهيم الأساسية
          </span>
          <h4 className="text-[18px] sm:text-[20px] font-bold text-[#171717] tracking-tight">
            {title}
          </h4>
          {titleAr && (
            <h5
              dir="rtl"
              className="text-[15px] font-bold text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {titleAr}
            </h5>
          )}
        </div>

        <AIProviderActions
          context={{
            sectionTitle: `${title}${titleAr ? ` / ${titleAr}` : ''}`,
            content: `Concept taxonomy: ${cards.map((c) => c.title).join(', ')}`,
            promptType: 'concept',
          }}
          variant="compact"
        />
      </div>

      {/* Grid of Concept Cards */}
      <div className={`grid ${gridClass} gap-5`}>
        {cards.map((card, idx) => (
          <div
            key={card.id || idx}
            className="border border-[#E5E5E5] rounded-lg p-5 bg-[#FAFAFA] space-y-3.5 flex flex-col justify-between hover:border-[#171717] transition-all"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                {card.icon && <div className="text-[#171717]">{card.icon}</div>}
                {card.badge && (
                  <span className="font-mono text-[10px] uppercase px-2 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded font-bold ml-auto">
                    {card.badge}
                  </span>
                )}
              </div>

              <div>
                <h5 className="text-[16px] font-bold text-[#171717]">
                  {card.title}
                </h5>
                {card.titleAr && (
                  <p
                    dir="rtl"
                    className="text-xs font-serif text-[#525252] mt-0.5"
                    style={{ fontFamily: 'var(--font-arabic)' }}
                  >
                    {card.titleAr}
                  </p>
                )}
              </div>

              <p className="text-xs sm:text-[13px] text-[#525252] leading-relaxed">
                {card.description}
              </p>

              {card.descriptionAr && (
                <p
                  dir="rtl"
                  className="text-xs sm:text-[13px] text-[#525252] font-serif leading-relaxed pt-1.5 border-t border-[#E5E5E5]"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {card.descriptionAr}
                </p>
              )}
            </div>

            {card.keyRule && (
              <div className="pt-2 border-t border-[#E5E5E5]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#737373] block mb-0.5">
                  Core Principle / القاعدة:
                </span>
                <span className="font-mono text-xs font-semibold text-[#171717]">
                  {card.keyRule}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

