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
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export default function ConceptCardsGrid({
  title,
  titleAr,
  cards,
  className = '',
}: ConceptCardsGridProps): React.ReactElement {
  return (
    <div
      className={`my-8 border border-[#D4D4D0] rounded-2xl p-6 sm:p-8 bg-[#FFFFFF] space-y-6 shadow-xs w-full ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E2E2DF] pb-4 gap-2">
        <div className="space-y-1">
          <span className="font-mono text-xs sm:text-[13px] uppercase font-bold text-[#686868] tracking-wider block">
            Core Concept Taxonomy / تصنيف المفاهيم الأساسية
          </span>
          <h4 className="text-[23px] sm:text-[25px] font-bold text-[#222222] tracking-tight">
            {title}
          </h4>
          {titleAr && (
            <h5
              dir="rtl"
              className="text-[20px] sm:text-[22px] font-bold text-[#505050] font-serif"
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

      {/* Single-Column Full-Width Cards */}
      <div className="flex flex-col space-y-5 w-full">
        {cards.map((card, idx) => (
          <div
            key={card.id || idx}
            className="w-full border border-[#E2E2DF] rounded-xl p-6 sm:p-7 bg-[#F7F7F5] space-y-4 hover:border-[#222222] transition-all"
          >
            <div className="space-y-3 w-full">
              <div className="flex items-center justify-between border-b border-[#E2E2DF] pb-3">
                <div className="flex items-center gap-2">
                  {card.icon && <div className="text-[#222222]">{card.icon}</div>}
                  <h5 className="text-[20px] sm:text-[22px] font-bold text-[#222222]">
                    {card.title}
                  </h5>
                </div>
                {card.badge && (
                  <span className="font-mono text-xs uppercase px-2.5 py-1 border border-[#222222] bg-[#222222] text-[#FFFFFF] rounded font-bold">
                    {card.badge}
                  </span>
                )}
              </div>

              {card.titleAr && (
                <p
                  dir="rtl"
                  className="text-[18px] sm:text-[20px] font-bold font-serif text-[#505050]"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {card.titleAr}
                </p>
              )}

              <p className="text-[17px] sm:text-[18px] text-[#222222] leading-[1.65]">
                {card.description}
              </p>

              {card.descriptionAr && (
                <p
                  dir="rtl"
                  className="text-[18px] sm:text-[19px] text-[#505050] font-serif leading-[1.8] pt-2 border-t border-[#E8E8E5]"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {card.descriptionAr}
                </p>
              )}
            </div>

            {card.keyRule && (
              <div className="p-3.5 rounded-lg bg-[#FFFFFF] border border-[#E2E2DF] space-y-1">
                <span className="font-mono text-xs sm:text-[13px] uppercase font-bold text-[#686868] block">
                  Core Principle / القاعدة الجوهرية:
                </span>
                <span className="font-mono text-[15px] sm:text-[16px] font-semibold text-[#222222] block">
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

