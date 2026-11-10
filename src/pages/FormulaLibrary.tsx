import React, { useState } from 'react';
import {
  Calculator,
  Search,
  Copy,
  Check,
} from 'lucide-react';
import { formulasData, type FormulaItem } from '../data/formulas';
import MathDisplay from '../components/ui/MathDisplay';

export default function FormulaLibrary(): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState('');
  const [chapterFilter, setChapterFilter] = useState('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredFormulas = formulasData.filter((f: FormulaItem) => {
    if (chapterFilter !== 'all' && f.chapterId !== chapterFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = f.name.toLowerCase().includes(q) || f.nameAr.includes(q);
      const matchExpl = f.description.toLowerCase().includes(q) || f.descriptionAr.includes(q);
      const matchLatex = f.latex.toLowerCase().includes(q);
      if (!matchName && !matchExpl && !matchLatex) return false;
    }
    return true;
  });

  const handleCopyLatex = (id: string, latex: string) => {
    navigator.clipboard.writeText(latex);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-[#E5E5E5] pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-wider">
          <Calculator className="w-4 h-4 text-[#171717]" />
          <span>Mathematical Formula Repository / مرجع القوانين والصيغ الرياضية</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#171717]">
              Cryptography Formula & Equation Library
            </h1>
            <p
              dir="rtl"
              className="text-sm text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              دليل المعادلات الرياضية والتشفيرية الكامل مع الترميز الرياضي KaTeX وشرح المتغيرات باللغتين
            </p>
          </div>
          <span className="font-mono text-xs border border-[#171717] bg-[#171717] text-[#FFFFFF] px-3 py-1.5 rounded shrink-0">
            {filteredFormulas.length} Formulas
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 border border-[#E5E5E5] rounded-lg bg-[#FAFAFA] flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#A3A3A3] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search formula name, variable, or concept (e.g. Bézout, Totient, Feistel, Hill, CRT)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-[#FFFFFF] border border-[#E5E5E5] rounded focus:outline-none focus:border-[#171717] text-[#171717]"
          />
        </div>

        <select
          value={chapterFilter}
          onChange={(e) => setChapterFilter(e.target.value)}
          className="p-2 border border-[#E5E5E5] rounded text-xs bg-[#FFFFFF] text-[#171717] focus:border-[#171717]"
        >
          <option value="all">All Chapters</option>
          <option value="ch2">Chapter 2: Number Theory</option>
          <option value="ch3">Chapter 3: Classical Ciphers</option>
          <option value="ch4">Chapter 4: Block Ciphers & DES</option>
          <option value="ch7">Chapter 7: Cipher Operations</option>
        </select>
      </div>

      {/* Formula Cards — Single-Column Full-Width */}
      <div className="flex flex-col space-y-6 w-full">
        {filteredFormulas.map((form: FormulaItem) => (
          <div
            key={form.id}
            className="w-full border border-[#D4D4D0] rounded-2xl p-6 sm:p-7 bg-[#FFFFFF] space-y-5 hover:border-[#222222] transition-colors shadow-xs"
          >
            <div>
              {/* Title & Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E2E2DF] pb-3.5 gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs uppercase border border-[#222222] bg-[#222222] text-[#FFFFFF] px-2.5 py-1 rounded-lg font-bold">
                      {form.chapterId.toUpperCase()}
                    </span>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-[#222222]">{form.name}</h3>
                  </div>
                  <h4
                    dir="rtl"
                    className="text-[18px] sm:text-[20px] font-bold text-[#505050] font-serif"
                    style={{ fontFamily: 'var(--font-arabic)' }}
                  >
                    {form.nameAr}
                  </h4>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyLatex(form.id, form.latex)}
                  className="p-2 border border-[#E2E2DF] rounded-lg text-xs text-[#505050] hover:text-[#222222] hover:bg-[#ECEDEB] transition-colors flex items-center gap-1.5 font-mono text-[12px] self-start sm:self-auto"
                  title="Copy LaTeX code"
                >
                  {copiedId === form.id ? (
                    <>
                      <Check className="w-4 h-4 text-[#222222]" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> LaTeX
                    </>
                  )}
                </button>
              </div>

              {/* Formula LaTeX Display */}
              <div className="my-4 p-6 bg-[#F7F7F5] border border-[#D4D4D0] rounded-xl overflow-x-auto text-center font-serif text-[24px] sm:text-[28px] text-[#222222]">
                <MathDisplay latex={form.latex} display />
              </div>

              {/* Explanations: Single-Column Full-Width */}
              <div className="space-y-3 text-[#222222] w-full pt-1">
                <div className="space-y-3 w-full">
                  <p className="text-[17px] sm:text-[18px] leading-[1.65]">
                    <strong className="text-[#222222] font-semibold">Definition & Context: </strong>
                    {form.description}
                  </p>
                  <p dir="rtl" className="font-serif text-[18px] sm:text-[19px] leading-[1.8] text-[#505050] pt-2 border-t border-[#F2F2F0]" style={{ fontFamily: 'var(--font-arabic)' }}>
                    <strong className="text-[#222222] font-semibold">الشرح الأكاديمي: </strong>
                    {form.descriptionAr}
                  </p>
                </div>
              </div>
            </div>

            {/* Variables / Parameters Breakdown */}
            {form.variables && form.variables.length > 0 && (
              <div className="pt-4 border-t border-[#E2E2DF] space-y-2.5">
                <span className="text-xs sm:text-[13px] font-mono uppercase font-bold text-[#686868] block">
                  Variables & Symbols / الرموز والمتغيرات:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  {form.variables.map((v, vIdx) => (
                    <div
                      key={vIdx}
                      className="p-3 border border-[#E2E2DF] rounded-xl bg-[#F7F7F5] flex items-center gap-2.5"
                    >
                      <span className="font-mono font-bold text-[#222222] px-2 py-0.5 bg-[#FFFFFF] border border-[#D4D4D0] rounded text-xs sm:text-sm">
                        {v.symbol}
                      </span>
                      <span className="text-[#505050] text-[13px] sm:text-[14px] truncate">{v.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
