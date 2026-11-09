import React, { useState } from 'react';
import { GitBranch, Layers, BookOpen, Compass } from 'lucide-react';
import { allMindMaps } from './mindMapData';
import InteractiveMindMap from './InteractiveMindMap';
import { type MindMapData } from './types';

export interface MindMapGalleryProps {
  initialChapterId?: 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch7' | 'all';
  defaultMindMapId?: string;
  className?: string;
}

export default function MindMapGallery({
  initialChapterId = 'all',
  defaultMindMapId,
  className = '',
}: MindMapGalleryProps): React.ReactElement {
  const [selectedChapter, setSelectedChapter] = useState<string>(initialChapterId);

  const filteredMindMaps = allMindMaps.filter((mm) =>
    selectedChapter === 'all' ? true : mm.chapterId === selectedChapter
  );

  const [activeMindMapId, setActiveMindMapId] = useState<string>(
    defaultMindMapId || (filteredMindMaps[0]?.id ?? allMindMaps[0].id)
  );

  const activeMindMap =
    allMindMaps.find((mm) => mm.id === activeMindMapId) || filteredMindMaps[0] || allMindMaps[0];

  const chapters = [
    { id: 'all', label: 'All Chapters (جميع الفصول)' },
    { id: 'ch1', label: 'Unit 1: Security Concepts' },
    { id: 'ch2', label: 'Unit 2: Number Theory' },
    { id: 'ch3', label: 'Unit 3: Classical Ciphers' },
    { id: 'ch4', label: 'Unit 4: Block Ciphers & DES' },
    { id: 'ch7', label: 'Unit 7: Block Cipher Operations' },
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Gallery Header */}
      <div className="border border-[#E5E5E5] rounded-xl p-5 sm:p-6 bg-[#FFFFFF] space-y-4 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#F2F2F2] pb-4 gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-wider font-bold">
              <Compass className="w-4 h-4 text-[#171717]" />
              <span>Interactive Curriculum Mind Maps / الخرائط الذهنية للمقرر</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#171717]">
              Academic Relationship & Classification Maps
            </h2>
          </div>

          <span
            dir="rtl"
            className="text-sm font-semibold text-[#525252] font-serif self-start sm:self-auto"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            استكشف العلاقات الهيكلية والتبعيات الرياضية بين موضوعات المقرر
          </span>
        </div>

        {/* Chapter Selection Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              type="button"
              onClick={() => {
                setSelectedChapter(ch.id);
                const nextMaps = allMindMaps.filter((m) =>
                  ch.id === 'all' ? true : m.chapterId === ch.id
                );
                if (nextMaps.length > 0 && !nextMaps.some((m) => m.id === activeMindMapId)) {
                  setActiveMindMapId(nextMaps[0].id);
                }
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedChapter === ch.id
                  ? 'border border-[#171717] bg-[#171717] text-[#FFFFFF] font-bold'
                  : 'border border-[#E5E5E5] bg-[#FFFFFF] text-[#525252] hover:bg-[#F2F2F2]'
              }`}
            >
              {ch.label}
            </button>
          ))}
        </div>

        {/* Mind Map Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2">
          {filteredMindMaps.map((map) => {
            const isCurrent = map.id === activeMindMap.id;
            return (
              <button
                key={map.id}
                type="button"
                onClick={() => setActiveMindMapId(map.id)}
                className={`p-3 rounded-lg border text-start transition-all space-y-1 ${
                  isCurrent
                    ? 'border-2 border-[#171717] bg-[#FAFAFA] shadow-xs'
                    : 'border-[#E5E5E5] bg-[#FFFFFF] hover:border-[#171717]'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-mono text-[10px] font-bold uppercase text-[#737373]">
                    {map.chapterId.toUpperCase()}
                  </span>
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-[#171717]" />
                  )}
                </div>
                <h4 className="text-xs sm:text-[13px] font-bold text-[#171717] line-clamp-1">
                  {map.title}
                </h4>
                <p
                  dir="rtl"
                  className="text-[11px] text-[#525252] font-serif line-clamp-1"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {map.titleAr}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Active Mind Map */}
      <InteractiveMindMap data={activeMindMap} />
    </div>
  );
}

