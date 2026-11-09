import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ChevronDown,
  BookOpen,
  ArrowRight,
  Search,
  GitBranch,
  Layers,
} from 'lucide-react';
import { type MindMapNode, type MindMapData } from './types';
import DiagramZoomControls from '../diagrams/DiagramZoomControls';
import MathDisplay from '../ui/MathDisplay';
import { useUI } from '../../store/uiStore';

export interface InteractiveMindMapProps {
  data: MindMapData;
  className?: string;
}

export default function InteractiveMindMap({
  data,
  className = '',
}: InteractiveMindMapProps): React.ReactElement {
  const { language } = useUI();
  const isArabic = language === 'ar';

  const [selectedNode, setSelectedNode] = useState<MindMapNode>(data.rootNode);
  const [collapsedNodes, setCollapsedNodes] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [zoom, setZoom] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'detailed' | 'compact'>('detailed');

  const toggleCollapse = (nodeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCollapsedNodes((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId],
    }));
  };

  const expandAll = () => {
    setCollapsedNodes({});
  };

  const collapseAll = () => {
    const allCollapsed: Record<string, boolean> = {};
    const traverse = (node: MindMapNode) => {
      if (node.children && node.children.length > 0) {
        allCollapsed[node.id] = true;
        node.children.forEach(traverse);
      }
    };
    traverse(data.rootNode);
    setCollapsedNodes(allCollapsed);
  };

  // Check if a node matches search query
  const matchesSearch = (node: MindMapNode): boolean => {
    if (!searchQuery.trim()) return false;
    const q = searchQuery.toLowerCase();
    return (
      node.labelEn.toLowerCase().includes(q) ||
      node.labelAr.toLowerCase().includes(q) ||
      node.descriptionEn.toLowerCase().includes(q) ||
      Boolean(node.keyCondition?.toLowerCase().includes(q))
    );
  };

  // Render a recursive node tree with clean monochrome hierarchy
  const renderNode = (node: MindMapNode, depth: number = 0) => {
    const hasChildren = Boolean(node.children && node.children.length > 0);
    const isCollapsed = Boolean(collapsedNodes[node.id]);
    const isSelected = selectedNode.id === node.id;
    const isMatched = matchesSearch(node);

    const isRoot = depth === 0;
    const isPrimary = depth === 1;

    // Node Box Styling based on hierarchy level
    const boxStyle = isRoot
      ? 'border-2 border-[#171717] bg-[#171717] text-[#FFFFFF] shadow-sm'
      : isPrimary
      ? isSelected
        ? 'border-2 border-[#171717] bg-[#F2F2F2] text-[#171717] shadow-sm'
        : 'border border-[#171717] bg-[#FFFFFF] text-[#171717] hover:bg-[#FAFAFA]'
      : isSelected
      ? 'border-2 border-[#171717] bg-[#F2F2F2] text-[#171717]'
      : 'border border-[#D4D4D4] bg-[#FFFFFF] text-[#171717] hover:border-[#171717]';

    return (
      <div key={node.id} className="flex flex-col items-center space-y-3 relative">
        {/* Node Card */}
        <div
          onClick={() => setSelectedNode(node)}
          className={`cursor-pointer rounded-xl p-3.5 transition-all text-center min-w-[200px] max-w-[280px] select-none ${boxStyle} ${
            isMatched ? 'ring-2 ring-[#000000] ring-offset-2 bg-[#FFF1A6] text-[#171717]' : ''
          }`}
          role="button"
          tabIndex={0}
          aria-label={node.labelEn}
        >
          <div className="flex items-center justify-between gap-1.5 mb-1">
            <span
              className={`font-mono text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded ${
                isRoot
                  ? 'bg-[#333333] text-[#FFFFFF]'
                  : 'bg-[#F2F2F2] text-[#525252] border border-[#E5E5E5]'
              }`}
            >
              {isRoot ? 'Central Concept' : isPrimary ? 'Major Branch' : 'Subtopic'}
            </span>

            {hasChildren && (
              <button
                type="button"
                onClick={(e) => toggleCollapse(node.id, e)}
                className={`p-1 rounded hover:bg-[#E5E5E5] transition-colors ${
                  isRoot ? 'text-[#FFFFFF] hover:text-[#000000]' : 'text-[#525252]'
                }`}
                title={isCollapsed ? 'Expand branch' : 'Collapse branch'}
              >
                {isCollapsed ? <ChevronRight size={13} /> : <ChevronDown size={13} />}
              </button>
            )}
          </div>

          {/* Titles */}
          <h4
            className={`text-[13px] sm:text-[14px] font-bold leading-snug ${
              isRoot ? 'text-[#FFFFFF]' : 'text-[#171717]'
            }`}
          >
            {node.labelEn}
          </h4>

          <h5
            dir="rtl"
            className={`text-[12px] font-serif mt-0.5 ${
              isRoot ? 'text-[#D4D4D4]' : 'text-[#525252]'
            }`}
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {node.labelAr}
          </h5>

          {/* Compact / Detailed Info */}
          {viewMode === 'detailed' && (
            <div className="mt-2 pt-2 border-t border-[#E5E5E5]/40 text-start space-y-1">
              <p
                className={`text-[11px] leading-tight line-clamp-2 ${
                  isRoot ? 'text-[#D4D4D4]' : 'text-[#737373]'
                }`}
              >
                {node.descriptionEn}
              </p>

              {node.keyCondition && (
                <div className="text-[10px] font-mono text-[#171717] bg-[#FAFAFA] border border-[#E5E5E5] p-1 rounded font-semibold">
                  Condition: {node.keyCondition}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Child Connector & Child Nodes */}
        {hasChildren && !isCollapsed && (
          <div className="flex flex-col items-center w-full">
            {/* Vertical connector line from parent */}
            <div className="w-px h-5 bg-[#171717]" />

            {/* Horizontal distributor bar when multiple children exist */}
            {node.children && node.children.length > 1 && (
              <div className="w-[85%] h-px bg-[#171717] relative">
                {/* Vertical ticks to each child */}
              </div>
            )}

            {/* Children Container */}
            <div className="flex flex-wrap items-start justify-center gap-6 pt-3">
              {node.children?.map((child) => renderNode(child, depth + 1))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`border-2 border-[#171717] rounded-xl bg-[#FFFFFF] p-4 sm:p-7 space-y-5 my-8 shadow-xs ${className}`}
    >
      {/* Mind Map Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-[#E5E5E5] pb-4 gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase border border-[#171717] bg-[#171717] text-[#FFFFFF] px-2.5 py-0.5 rounded font-bold inline-flex items-center gap-1.5">
              <GitBranch size={11} />
              <span>{isArabic ? 'خريطة ذهنية أكاديمية' : 'Interactive Mind Map'}</span>
            </span>
            {data.sourceStandard && (
              <span className="font-mono text-[10px] text-[#525252] border border-[#E5E5E5] bg-[#FAFAFA] px-2 py-0.5 rounded">
                {data.sourceStandard}
              </span>
            )}
            <h3 className="text-lg sm:text-xl font-bold text-[#171717] tracking-tight">
              {data.title}
            </h3>
          </div>

          <p
            dir="rtl"
            className="text-sm font-bold text-[#525252] font-serif"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {data.titleAr}
          </p>
        </div>

        {/* Top Controls: Search, View Mode, Zoom, Expand/Collapse */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#737373] absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts / بحث..."
              className="pl-8 pr-2.5 py-1.5 border border-[#E5E5E5] rounded-lg text-xs bg-[#FFFFFF] text-[#171717] focus:outline-hidden focus:border-[#171717] w-40 sm:w-48"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="inline-flex border border-[#E5E5E5] rounded-lg p-0.5 bg-[#FAFAFA] text-xs">
            <button
              type="button"
              onClick={() => setViewMode('detailed')}
              className={`px-2 py-1 rounded font-medium transition-colors ${
                viewMode === 'detailed'
                  ? 'bg-[#171717] text-white font-bold'
                  : 'text-[#525252] hover:text-[#171717]'
              }`}
            >
              Detailed
            </button>
            <button
              type="button"
              onClick={() => setViewMode('compact')}
              className={`px-2 py-1 rounded font-medium transition-colors ${
                viewMode === 'compact'
                  ? 'bg-[#171717] text-white font-bold'
                  : 'text-[#525252] hover:text-[#171717]'
              }`}
            >
              Compact
            </button>
          </div>

          {/* Expand / Collapse All */}
          <button
            type="button"
            onClick={expandAll}
            className="px-2.5 py-1 border border-[#E5E5E5] bg-[#FFFFFF] hover:bg-[#F2F2F2] rounded text-xs font-semibold text-[#171717] transition-colors"
          >
            Expand All
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="px-2.5 py-1 border border-[#E5E5E5] bg-[#FFFFFF] hover:bg-[#F2F2F2] rounded text-xs font-semibold text-[#525252] transition-colors"
          >
            Collapse All
          </button>

          {/* Zoom Controls */}
          <DiagramZoomControls
            zoom={zoom}
            onZoomIn={() => setZoom((prev) => Math.min(2.0, Math.round((prev + 0.2) * 10) / 10))}
            onZoomOut={() => setZoom((prev) => Math.max(0.6, Math.round((prev - 0.2) * 10) / 10))}
            onReset={() => setZoom(1)}
          />
        </div>
      </div>

      {/* Main Canvas Viewport with Pan and Zoom */}
      <div className="w-full border border-[#E5E5E5] rounded-xl bg-[#FAFAFA] p-6 sm:p-8 overflow-x-auto min-h-[380px] flex justify-center items-center">
        <div
          className="transition-transform duration-200 origin-top flex justify-center"
          style={{ transform: `scale(${zoom})` }}
        >
          {renderNode(data.rootNode, 0)}
        </div>
      </div>

      {/* Interactive Node Inspector Panel */}
      {selectedNode && (
        <div className="border border-[#171717] rounded-xl p-5 bg-[#FFFFFF] space-y-3.5 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-2.5 gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2.5 py-1 border border-[#171717] bg-[#171717] text-white rounded">
                Concept Inspector / بطاقة المفهوم الأكاديمي
              </span>
              <h4 className="text-base sm:text-lg font-bold text-[#171717]">
                {selectedNode.labelEn}
              </h4>
            </div>

            <span
              dir="rtl"
              className="text-base font-bold text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {selectedNode.labelAr}
            </span>
          </div>

          {/* Relationship to Parent */}
          {selectedNode.relationshipToParent && (
            <div className="flex items-center gap-2 text-xs font-mono text-[#525252] bg-[#FAFAFA] border border-[#E5E5E5] p-2 rounded">
              <Layers size={13} className="text-[#171717]" />
              <span className="font-bold">Hierarchical Link:</span>
              <span>{selectedNode.relationshipToParent}</span>
              {selectedNode.relationshipToParentAr && (
                <span dir="rtl" className="font-serif ms-auto text-[#737373]">
                  {selectedNode.relationshipToParentAr}
                </span>
              )}
            </div>
          )}

          {/* Bilingual Academic Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm leading-relaxed">
            <div className="space-y-1">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#737373] block">
                Academic Definition (English):
              </span>
              <p className="text-[#171717] font-medium leading-relaxed">
                {selectedNode.descriptionEn}
              </p>
            </div>

            <div className="space-y-1 md:border-s md:border-[#E5E5E5] md:ps-4">
              <span
                dir="rtl"
                className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#737373] block"
              >
                البيان والشرح الأكاديمي (العربية):
              </span>
              <p
                dir="rtl"
                className="font-serif text-[#525252] leading-[1.8]"
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                {selectedNode.descriptionAr}
              </p>
            </div>
          </div>

          {/* Mathematical Formula & Condition (if applicable) */}
          {(selectedNode.formula || selectedNode.keyCondition) && (
            <div className="p-3.5 border border-[#171717] bg-[#FAFAFA] rounded-lg space-y-2">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#171717] block">
                Mathematical Law & Condition / القانون الرياضي والشرط:
              </span>
              {selectedNode.formula && (
                <div className="py-1">
                  <MathDisplay math={selectedNode.formula} display />
                </div>
              )}
              {selectedNode.keyCondition && (
                <p className="text-xs font-mono text-[#171717] font-bold">
                  ★ Validity Condition: {selectedNode.keyCondition}
                </p>
              )}
            </div>
          )}

          {/* Direct Lesson Navigation Link */}
          {selectedNode.lessonId && (
            <div className="pt-2 flex justify-end">
              <Link
                to={`/lesson/${selectedNode.lessonId}`}
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded-lg text-xs font-bold hover:bg-[#333333] transition-colors"
              >
                <BookOpen size={14} />
                <span>Go to Relevant University Lesson / الانتقال إلى الدرس المرتبط</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
