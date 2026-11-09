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

      {/* Formula Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredFormulas.map((form: FormulaItem) => (
          <div
            key={form.id}
            className="border border-[#E5E5E5] rounded-lg p-5 bg-[#FFFFFF] space-y-4 hover:border-[#171717] transition-colors flex flex-col justify-between"
          >
            <div>
              {/* Title & Badge */}
              <div className="flex items-center justify-between border-b border-[#F2F2F2] pb-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase border border-[#171717] bg-[#171717] text-[#FFFFFF] px-2 py-0.5 rounded">
                      {form.chapterId.toUpperCase()}
                    </span>
                    <h3 className="text-base font-bold text-[#171717]">{form.name}</h3>
                  </div>
                  <h4
                    dir="rtl"
                    className="text-xs font-medium text-[#525252] font-serif"
                    style={{ fontFamily: 'var(--font-arabic)' }}
                  >
                    {form.nameAr}
                  </h4>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyLatex(form.id, form.latex)}
                  className="p-1.5 border border-[#E5E5E5] rounded text-xs text-[#525252] hover:text-[#171717] hover:bg-[#FAFAFA] transition-colors flex items-center gap-1 font-mono text-[11px]"
                  title="Copy LaTeX code"
                >
                  {copiedId === form.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#171717]" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> LaTeX
                    </>
                  )}
                </button>
              </div>

              {/* Formula LaTeX Display */}
              <div className="my-3 p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded-md overflow-x-auto text-center font-serif text-lg">
                <MathDisplay latex={form.latex} display />
              </div>

              {/* Explanations */}
              <div className="text-xs space-y-1.5 text-[#525252]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
                  <p>
                    <strong className="text-[#171717]">Definition & Context: </strong>
                    {form.description}
                  </p>
                  <p dir="rtl" className="font-serif text-[#525252] md:border-s md:border-[#E5E5E5] md:ps-3" style={{ fontFamily: 'var(--font-arabic)' }}>
                    <strong className="text-[#171717]">الشرح الأكاديمي: </strong>
                    {form.descriptionAr}
                  </p>
                </div>
              </div>
            </div>

            {/* Variables / Parameters Breakdown */}
            {form.variables && form.variables.length > 0 && (
              <div className="pt-3 border-t border-[#F2F2F2] space-y-2">
                <span className="text-[11px] font-mono uppercase text-[#737373]">
                  Variables & Symbols / الرموز والمتغيرات:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                  {form.variables.map((v, vIdx) => (
                    <div
                      key={vIdx}
                      className="p-2 border border-[#E5E5E5] rounded bg-[#FFFFFF] flex items-center gap-2"
                    >
                      <span className="font-mono font-bold text-[#171717] px-1.5 py-0.5 bg-[#F2F2F2] rounded text-xs">
                        {v.symbol}
                      </span>
                      <span className="text-[#525252] text-[11px] truncate">{v.meaning}</span>
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
