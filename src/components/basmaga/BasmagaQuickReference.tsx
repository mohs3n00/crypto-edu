import React, { useState, useMemo } from 'react';
import {
  Search,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  BookOpen,
  Filter,
} from 'lucide-react';
import type { BasmagaQuickReferenceEntry } from '../../data/basmaga/types';
import { filterQuickReference } from '../../data/basmaga';

interface BasmagaQuickReferenceProps {
  onSelectQuestion?: (questionId: string) => void;
  initialChapterId?: string;
  entries?: BasmagaQuickReferenceEntry[];
  chapters?: { id: string; label: string }[];
}

export const BasmagaQuickReference: React.FC<BasmagaQuickReferenceProps> = ({
  onSelectQuestion,
  initialChapterId = 'all',
  entries,
  chapters: propChapters,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState(initialChapterId);

  const defaultChapters = [
    { id: 'all', label: 'All Chapters • كل الفصول' },
    { id: 'ch1', label: 'Ch 1: Concepts & Attacks' },
    { id: 'ch2', label: 'Ch 2: Number Theory' },
    { id: 'ch3', label: 'Ch 3: Classical Ciphers' },
    { id: 'ch4', label: 'Ch 4: Block Ciphers & DES' },
    { id: 'ch7', label: 'Ch 7: 3DES & Modes' },
  ];

  const chapters = propChapters || defaultChapters;

  const filteredEntries = useMemo(() => {
    if (entries) {
      return entries.filter((e) => {
        if (selectedChapter !== 'all' && e.chapterId !== selectedChapter) return false;
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchKw =
            e.keywordEn.toLowerCase().includes(q) || e.keywordAr.toLowerCase().includes(q);
          const matchTarget =
            e.conceptEn.toLowerCase().includes(q) || e.conceptAr.toLowerCase().includes(q);
          const matchRule = e.ruleEn.toLowerCase().includes(q) || e.ruleAr.includes(q);
          if (!matchKw && !matchTarget && !matchRule) return false;
        }
        return true;
      });
    }
    return filterQuickReference({
      chapterId: selectedChapter,
      searchQuery: searchQuery,
    });
  }, [entries, selectedChapter, searchQuery]);

  return (
    <div className="space-y-4">
      {/* Search and Filters Bar */}
      <div className="bg-[#FFFFFF] border border-[#D4D4D0] rounded-xl p-4 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="relative flex-1 min-w-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#686868]" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, concept, or rule (e.g. 'without affecting', 'mod m', 'S-Box', 'IV')..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#E2E2DF] bg-[#FFFFFF] text-sm text-[#222222] placeholder-[#686868] focus:outline-none focus:border-[#222222]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#505050] hover:text-[#222222]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 shrink-0">
            {chapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setSelectedChapter(ch.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border ${
                  selectedChapter === ch.id
                    ? 'bg-[#222222] text-[#FFFFFF] border-[#222222]'
                    : 'bg-[#FFFFFF] text-[#505050] border-[#E2E2DF] hover:bg-[#ECEDEB] hover:text-[#222222]'
                }`}
              >
                {ch.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-[#686868] pt-1 border-t border-[#E2E2DF]">
          <span>
            Showing <strong className="text-[#222222]">{filteredEntries.length}</strong> exam clue rules
          </span>
          <span className="font-sans" dir="rtl">
            جدول استنتاج الإجابة السريع: عندما ترى هذه العبارة ← فكر في هذا المفهوم مباشرة
          </span>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-[#FFFFFF] border border-[#D4D4D0] rounded-xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-[#F7F7F5] text-[#222222] border-b border-[#E2E2DF] font-mono uppercase text-[11px] tracking-wider">
              <tr>
                <th className="px-4 py-3.5 font-bold w-[30%]">When You See This in Question</th>
                <th className="px-4 py-3.5 font-bold w-[25%]">Think of This Concept</th>
                <th className="px-4 py-3.5 font-bold w-[33%]">Basmaga Rule / Why</th>
                <th className="px-4 py-3.5 font-bold text-center w-[12%]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E2DF]">
              {filteredEntries.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-[#686868]">
                    <div className="max-w-xs mx-auto space-y-2">
                      <Search className="mx-auto text-[#686868]" size={32} />
                      <p className="text-sm font-semibold text-[#222222]">No exam clues match your search</p>
                      <p className="text-xs">Try different keywords or switch the chapter filter.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredEntries.map((entry) => (
                  <tr key={entry.id} className="hover:bg-[#F7F7F5] transition-colors">
                    {/* 1. Keyword & Arabic */}
                    <td className="px-4 py-3.5 align-top space-y-1">
                      <div className="inline-block bg-[#FFF1A6] text-[#222222] px-2 py-0.5 rounded font-mono font-bold text-xs border border-[#E2C65A]">
                        {entry.keywordEn}
                      </div>
                      <div className="text-[12px] font-sans font-medium text-[#505050]" dir="rtl">
                        {entry.keywordAr}
                      </div>
                      <span className="inline-block text-[10px] font-mono text-[#686868] uppercase px-1.5 py-0.5 rounded bg-[#ECEDEB] border border-[#E2E2DF]">
                        {entry.chapterId.toUpperCase()}
                      </span>
                    </td>

                    {/* 2. Target Concept */}
                    <td className="px-4 py-3.5 align-top space-y-1">
                      <div className="font-bold text-[#222222] text-sm flex items-center gap-1.5">
                        <Sparkles size={13} className="text-[#222222] shrink-0" />
                        <span>{entry.conceptEn}</span>
                      </div>
                      <div className="text-[12px] font-sans font-medium text-[#505050]" dir="rtl">
                        {entry.conceptAr}
                      </div>
                    </td>

                    {/* 3. Rule & Exception Trap */}
                    <td className="px-4 py-3.5 align-top space-y-2">
                      <p className="text-[#222222] leading-relaxed font-medium">{entry.ruleEn}</p>
                      <p className="text-[#505050] font-sans leading-relaxed text-right text-[11px]" dir="rtl">
                        {entry.ruleAr}
                      </p>

                      {entry.exceptionOrTrap && (
                        <div className="p-2 rounded-lg bg-[#F7F7F5] border border-[#D4D4D0] flex items-start gap-1.5 text-[11px] text-[#222222]">
                          <AlertTriangle size={13} className="shrink-0 mt-0.5 text-[#222222]" />
                          <div className="space-y-0.5 flex-1">
                            <div><strong>Trap:</strong> {entry.exceptionOrTrap.en}</div>
                            <div className="font-sans text-right text-[#505050]" dir="rtl">{entry.exceptionOrTrap.ar}</div>
                          </div>
                        </div>
                      )}
                    </td>

                    {/* 4. Action / Link */}
                    <td className="px-4 py-3.5 align-top text-center">
                      {entry.relatedQuestionId && onSelectQuestion && (
                        <button
                          onClick={() => onSelectQuestion(entry.relatedQuestionId!)}
                          className="w-full px-2.5 py-1.5 rounded-lg border border-[#D4D4D0] bg-[#FFFFFF] hover:bg-[#ECEDEB] text-[#222222] text-xs font-medium transition-colors flex items-center justify-center gap-1"
                        >
                          <span>Solve</span>
                          <ArrowRight size={12} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BasmagaQuickReference;

