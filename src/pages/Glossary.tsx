import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
} from 'lucide-react';
import { glossaryData, type GlossaryTerm } from '../data/glossary';
import HighlightedText from '../components/keywords/HighlightedText';

export default function Glossary(): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = useMemo(() => {
    return glossaryData.filter((item: GlossaryTerm) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTerm =
          item.termEn.toLowerCase().includes(q) || item.termAr.includes(q);
        const matchDef =
          item.definitionEn.toLowerCase().includes(q) ||
          item.definitionAr.includes(q);
        if (!matchTerm && !matchDef) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-[#E5E5E5] pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-[#171717]" />
          <span>Bilingual Terminology Dictionary / معجم المصطلحات الأكاديمي</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#171717]">
              Cryptography & Security Glossary
            </h1>
            <p
              dir="rtl"
              className="text-sm text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              قاموس المصطلحات والمفاهيم التشفيرية ثنائي اللغة وفقاً لمعايير NIST وويليام ستالينجز
            </p>
          </div>
          <span className="font-mono text-xs border border-[#171717] bg-[#171717] text-[#FFFFFF] px-3 py-1.5 rounded shrink-0">
            {filteredItems.length} Terms Defined
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 border border-[#E5E5E5] rounded-lg bg-[#FAFAFA] flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#A3A3A3] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search term or definition in English or Arabic (e.g. CIA, Avalanche, Feistel, Diffie, Totient)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-[#FFFFFF] border border-[#E5E5E5] rounded focus:outline-none focus:border-[#171717] text-[#171717]"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-[#E5E5E5] rounded text-xs bg-[#FFFFFF] text-[#171717] focus:border-[#171717]"
        >
          <option value="all">All Chapters</option>
          <option value="ch1">Chapter 1: Security Concepts</option>
          <option value="ch2">Chapter 2: Number Theory</option>
          <option value="ch3">Chapter 3: Classical Encryption</option>
          <option value="ch4">Chapter 4: Block Ciphers & DES</option>
          <option value="ch7">Chapter 7: Cipher Operations</option>
        </select>
      </div>

      {/* Terms List — Single-Column Full-Width */}
      <div className="flex flex-col space-y-5 w-full">
        {filteredItems.map((item: GlossaryTerm) => (
          <div
            key={item.id}
            className="w-full border border-[#D4D4D0] rounded-2xl p-6 sm:p-7 bg-[#FFFFFF] space-y-4 hover:border-[#222222] transition-colors shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E2E2DF] pb-3 gap-2">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs uppercase border border-[#222222] bg-[#222222] text-[#FFFFFF] px-2.5 py-1 rounded-lg font-bold">
                  {item.category.toUpperCase()}
                </span>
                <h3 className="text-[22px] sm:text-[24px] font-bold text-[#222222]">{item.termEn}</h3>
              </div>
              <span
                dir="rtl"
                className="text-[20px] sm:text-[22px] font-bold text-[#505050] font-serif"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {item.termAr}
              </span>
            </div>

            <div className="space-y-3 text-[#222222] w-full">
              <p className="text-[17px] sm:text-[18px] leading-[1.65] font-sans">
                <HighlightedText text={item.definitionEn} />
              </p>
              <p
                dir="rtl"
                className="pt-2 border-t border-[#E8E8E5] font-serif text-[18px] sm:text-[19px] leading-[1.8] text-[#505050]"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                <HighlightedText text={item.definitionAr} isArabic />
              </p>
              {item.examContext && (
                <div className="mt-3 p-3.5 bg-[#F7F7F5] border border-[#E2E2DF] rounded-xl text-sm sm:text-[15px] text-[#222222] font-mono leading-relaxed">
                  <strong className="text-[#222222]">Exam Clue: </strong>
                  <HighlightedText text={item.examContext} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
