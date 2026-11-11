import React, { useState, useMemo } from 'react';
import { Play, RotateCcw, Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { useUI } from '../../store/uiStore';

// ============================================================
// 1. DBSCAN Interactive Visualizer
// ============================================================

interface Point2D {
  id: string;
  label: string;
  x: number;
  y: number;
}

const INITIAL_DBSCAN_POINTS: Point2D[] = [
  // Cluster 1 Core Candidates (dense)
  { id: 'P1', label: 'P1', x: 2.0, y: 2.0 },
  { id: 'P2', label: 'P2', x: 2.5, y: 2.8 },
  { id: 'P3', label: 'P3', x: 3.0, y: 2.0 },
  { id: 'P4', label: 'P4', x: 2.8, y: 3.2 },
  // Border Candidates
  { id: 'P5', label: 'P5', x: 3.8, y: 2.3 },
  { id: 'P6', label: 'P6', x: 2.2, y: 4.1 },
  // Second mini-cluster
  { id: 'P7', label: 'P7', x: 6.5, y: 6.0 },
  { id: 'P8', label: 'P8', x: 7.0, y: 6.5 },
  { id: 'P9', label: 'P9', x: 6.8, y: 5.6 },
  // Distinct Noise
  { id: 'P10', label: 'P10', x: 8.5, y: 1.8 },
];

export const DbscanVisualizer: React.FC = () => {
  const { language } = useUI();
  const isArabic = language === 'ar';

  const [eps, setEps] = useState<number>(1.6);
  const [minPts, setMinPts] = useState<number>(3);
  const [selectedPointId, setSelectedPointId] = useState<string | null>('P1');

  // SVG coordinate transformation: [0, 10] -> [40, 460]
  const svgWidth = 500;
  const svgHeight = 400;
  const scaleX = (x: number) => 40 + (x / 10) * 420;
  const scaleY = (y: number) => svgHeight - 40 - (y / 10) * 320;
  const scaleRadius = (r: number) => (r / 10) * 420;

  // Compute Euclidean Distance Matrix
  const { classifications, neighborMap } = useMemo(() => {
    const distMap: Record<string, Record<string, number>> = {};
    const nMap: Record<string, string[]> = {};

    for (const p1 of INITIAL_DBSCAN_POINTS) {
      distMap[p1.id] = {};
      nMap[p1.id] = [];
      for (const p2 of INITIAL_DBSCAN_POINTS) {
        const d = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
        distMap[p1.id][p2.id] = d;
        if (d <= eps) {
          nMap[p1.id].push(p2.id);
        }
      }
    }

    // Identify Cores
    const cores = new Set<string>();
    for (const p of INITIAL_DBSCAN_POINTS) {
      if (nMap[p.id].length >= minPts) {
        cores.add(p.id);
      }
    }

    // Identify Borders & Noise
    const classMap: Record<string, 'core' | 'border' | 'noise'> = {};
    for (const p of INITIAL_DBSCAN_POINTS) {
      if (cores.has(p.id)) {
        classMap[p.id] = 'core';
      } else {
        const touchesCore = nMap[p.id].some((neighborId) => cores.has(neighborId));
        if (touchesCore) {
          classMap[p.id] = 'border';
        } else {
          classMap[p.id] = 'noise';
        }
      }
    }

    return { classifications: classMap, neighborMap: nMap };
  }, [eps, minPts]);

  const selectedPoint = INITIAL_DBSCAN_POINTS.find((p) => p.id === selectedPointId);

  return (
    <div className="border border-[#E2E2DF] rounded-xl p-5 bg-[#FFFFFF] space-y-6 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#F0F0EE] pb-4">
        <div>
          <h3 className="text-base font-bold text-[#222222] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            {isArabic ? 'محاكي خوارزمية DBSCAN التفاعلي للكثافة' : 'Interactive DBSCAN Density Visualizer'}
          </h3>
          <p className="text-xs text-[#666666] mt-0.5">
            {isArabic
              ? 'تعديل نصف القطر إبسيلون (Eps) وعتبة الكثافة (MinPts) ومراقبة تصنيف النقاط حياً'
              : 'Adjust Epsilon (Eps) radius and MinPts threshold to observe real-time point classification'}
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#10B981] border border-[#059669]" />
            <span className="font-semibold">{isArabic ? 'جوهرية (Core)' : 'Core'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#F59E0B] border border-[#D97706]" />
            <span className="font-semibold">{isArabic ? 'حدودية (Border)' : 'Border'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#EF4444] border border-[#DC2626]" />
            <span className="font-semibold">{isArabic ? 'تشويش (Noise)' : 'Noise'}</span>
          </div>
        </div>
      </div>

      {/* Sliders & Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F9F9F8] p-4 rounded-lg border border-[#EAEAE7]">
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-[#333333]">
              {isArabic ? 'نصف القطر إبسيلون (Eps / ε):' : 'Epsilon Radius (Eps / ε):'}
            </span>
            <span className="font-mono font-bold text-[#222222]">{eps.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="0.8"
            max="3.0"
            step="0.1"
            value={eps}
            onChange={(e) => setEps(parseFloat(e.target.value))}
            className="w-full accent-[#222222] cursor-pointer"
          />
          <span className="text-[11px] text-[#777777] block">
            {isArabic ? 'يحدد مسافة البحث الدائرية حول كل نقطة' : 'Defines the neighborhood search radius'}
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-[#333333]">
              {isArabic ? 'عتبة الكثافة الدنيا (MinPts):' : 'Minimum Points (MinPts):'}
            </span>
            <span className="font-mono font-bold text-[#222222]">{minPts}</span>
          </div>
          <input
            type="range"
            min="2"
            max="5"
            step="1"
            value={minPts}
            onChange={(e) => setMinPts(parseInt(e.target.value, 10))}
            className="w-full accent-[#222222] cursor-pointer"
          />
          <span className="text-[11px] text-[#777777] block">
            {isArabic ? 'الحد الأدنى للنقاط لتأهيل النقطة كـ Core' : 'Minimum neighbors required to qualify as Core'}
          </span>
        </div>
      </div>

      {/* Interactive SVG Plot */}
      <div className="relative border border-[#E5E5E2] rounded-lg bg-[#FAF9F6] overflow-hidden">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-[320px] select-none"
        >
          {/* Grid lines */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => (
            <React.Fragment key={`grid-${val}`}>
              <line
                x1={scaleX(val)}
                y1={scaleY(0)}
                x2={scaleX(val)}
                y2={scaleY(10)}
                stroke="#EAEAEA"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
              <line
                x1={scaleX(0)}
                y1={scaleY(val)}
                x2={scaleX(10)}
                y2={scaleY(val)}
                stroke="#EAEAEA"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
              <text
                x={scaleX(val)}
                y={svgHeight - 20}
                textAnchor="middle"
                className="text-[10px] fill-[#888888] font-mono"
              >
                {val}
              </text>
              <text
                x={25}
                y={scaleY(val) + 3}
                textAnchor="end"
                className="text-[10px] fill-[#888888] font-mono"
              >
                {val}
              </text>
            </React.Fragment>
          ))}

          {/* Axes */}
          <line
            x1={scaleX(0)}
            y1={scaleY(0)}
            x2={scaleX(10)}
            y2={scaleY(0)}
            stroke="#999999"
            strokeWidth="1.5"
          />
          <line
            x1={scaleX(0)}
            y1={scaleY(0)}
            x2={scaleX(0)}
            y2={scaleY(10)}
            stroke="#999999"
            strokeWidth="1.5"
          />

          {/* Epsilon Circle for Selected Point */}
          {selectedPoint && (
            <>
              <circle
                cx={scaleX(selectedPoint.x)}
                cy={scaleY(selectedPoint.y)}
                r={scaleRadius(eps)}
                fill="#3B82F6"
                fillOpacity="0.12"
                stroke="#2563EB"
                strokeWidth="1.5"
                strokeDasharray="4,3"
              />

              {/* Connecting lines to points in neighborhood */}
              {neighborMap[selectedPoint.id]?.map((nId) => {
                const neighbor = INITIAL_DBSCAN_POINTS.find((p) => p.id === nId);
                if (!neighbor || neighbor.id === selectedPoint.id) return null;
                return (
                  <line
                    key={`line-${selectedPoint.id}-${neighbor.id}`}
                    x1={scaleX(selectedPoint.x)}
                    y1={scaleY(selectedPoint.y)}
                    x2={scaleX(neighbor.x)}
                    y2={scaleY(neighbor.y)}
                    stroke="#2563EB"
                    strokeWidth="1"
                    strokeDasharray="3,2"
                    strokeOpacity="0.7"
                  />
                );
              })}
            </>
          )}

          {/* Points */}
          {INITIAL_DBSCAN_POINTS.map((p) => {
            const cls = classifications[p.id];
            const isSelected = p.id === selectedPointId;
            const neighborCount = neighborMap[p.id]?.length || 0;

            let fillColor = '#10B981'; // Green for Core
            let strokeColor = '#047857';
            if (cls === 'border') {
              fillColor = '#F59E0B'; // Amber for Border
              strokeColor = '#B45309';
            } else if (cls === 'noise') {
              fillColor = '#EF4444'; // Red for Noise
              strokeColor = '#B91C1C';
            }

            return (
              <g
                key={p.id}
                onClick={() => setSelectedPointId(p.id)}
                className="cursor-pointer transition-transform hover:scale-110"
              >
                <circle
                  cx={scaleX(p.x)}
                  cy={scaleY(p.y)}
                  r={isSelected ? 10 : 8}
                  fill={fillColor}
                  stroke={isSelected ? '#1E293B' : strokeColor}
                  strokeWidth={isSelected ? 3 : 1.5}
                />
                <text
                  x={scaleX(p.x)}
                  y={scaleY(p.y) - 12}
                  textAnchor="middle"
                  className="text-[11px] font-bold font-mono fill-[#1E293B]"
                >
                  {p.label} ({neighborCount})
                </text>
              </g>
            );
          })}
        </svg>

        <div className="absolute bottom-2 right-2 bg-[#FFFFFF]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-[#555555] border border-[#E0E0DD]">
          {isArabic ? 'انقر على أي نقطة لعرض دائرة جوارها' : 'Click any point to view its ε-circle'}
        </div>
      </div>

      {/* Selected Point Inspection Card */}
      {selectedPoint && (
        <div className="bg-[#F8F9FA] border border-[#E3E4E8] rounded-lg p-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-[#222222]">
                {isArabic ? `فحص النقطة ${selectedPoint.label}` : `Inspecting Point ${selectedPoint.label}`}
              </span>
              <span className="text-xs font-mono text-[#666666]">
                ({selectedPoint.x}, {selectedPoint.y})
              </span>
            </div>

            <span
              className={`px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${
                classifications[selectedPoint.id] === 'core'
                  ? 'bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0]'
                  : classifications[selectedPoint.id] === 'border'
                  ? 'bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]'
                  : 'bg-[#FEE2E2] text-[#991B1B] border border-[#FECACA]'
              }`}
            >
              {classifications[selectedPoint.id]}
            </span>
          </div>

          <div className="text-xs text-[#444444] space-y-1">
            <p>
              <strong>{isArabic ? 'النقاط داخل جوار ε (بما فيها نفسها):' : 'Neighbors within ε-radius (including self):'}</strong>{' '}
              <span className="font-mono font-semibold">
                {neighborMap[selectedPoint.id]?.join(', ')} ({neighborMap[selectedPoint.id]?.length} points)
              </span>
            </p>
            <p>
              <strong>{isArabic ? 'التعليل الأكاديمي:' : 'Academic Rationale:'}</strong>{' '}
              {classifications[selectedPoint.id] === 'core' ? (
                <span>
                  {isArabic
                    ? `حجم الجوار ${neighborMap[selectedPoint.id]?.length} أكبر من أو يساوي MinPts (${minPts})، لذا فهي نقطة جوهرية (Core).`
                    : `Neighborhood size ${neighborMap[selectedPoint.id]?.length} ≥ MinPts (${minPts}), qualifying it as a Core Point.`}
                </span>
              ) : classifications[selectedPoint.id] === 'border' ? (
                <span>
                  {isArabic
                    ? `حجم الجوار ${neighborMap[selectedPoint.id]?.length} أقل من MinPts (${minPts})، ولكنها تقع في جوار نقطة Core، لذا فهي نقطة حدود (Border).`
                    : `Neighborhood size ${neighborMap[selectedPoint.id]?.length} < MinPts (${minPts}), but it falls within a Core point's radius, making it a Border Point.`}
                </span>
              ) : (
                <span>
                  {isArabic
                    ? `حجم الجوار ${neighborMap[selectedPoint.id]?.length} أقل من MinPts (${minPts}) ولا تلامس أي نقطة Core، لذا تُعزل كنقطة تشويش (Noise: -1).`
                    : `Neighborhood size ${neighborMap[selectedPoint.id]?.length} < MinPts (${minPts}) and touches NO Core point; tagged as Noise (-1).`}
                </span>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================
// 2. K-Means Centroid Calculator (Midterm 2025 Q2.6)
// ============================================================

export const KMeansCentroidCalculator: React.FC = () => {
  const { language } = useUI();
  const isArabic = language === 'ar';

  const [activePreset, setActivePreset] = useState<'mid2025' | 'custom'>('mid2025');

  const clustersData = {
    c1: [
      { x: 2, y: 4 },
      { x: 6, y: 4 },
    ],
    c2: [
      { x: 1, y: 2 },
      { x: 3, y: 2 },
    ],
    c3: [
      { x: 5, y: 7 },
      { x: 7, y: 7 },
      { x: 9, y: 7 },
    ],
  };

  const c1MeanX = (2 + 6) / 2;
  const c1MeanY = (4 + 4) / 2;

  const c2MeanX = (1 + 3) / 2;
  const c2MeanY = (2 + 2) / 2;

  const c3MeanX = (5 + 7 + 9) / 3;
  const c3MeanY = (7 + 7 + 7) / 3;

  return (
    <div className="border border-[#E2E2DF] rounded-xl p-5 bg-[#FFFFFF] space-y-6 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#F0F0EE] pb-4">
        <div>
          <h3 className="text-base font-bold text-[#222222] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
            {isArabic ? 'حاسبة إعادة حساب مراكز العناقيد في K-Means' : 'K-Means Centroid Recalculation Engine'}
          </h3>
          <p className="text-xs text-[#666666] mt-0.5">
            {isArabic
              ? 'تطبيق حي لمسألة امتحان الميدتيرم الرسمي 2025 (السؤال Q2.6)'
              : 'Interactive trace of Official Midterm 2025 Question Q2.6'}
          </p>
        </div>

        <span className="px-2.5 py-1 rounded bg-[#EBF5FF] text-[#1E40AF] border border-[#BFDBFE] text-xs font-semibold">
          Midterm 2025 Q2.6
        </span>
      </div>

      {/* Cluster Calculations Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Cluster 1 */}
        <div className="border border-[#BFDBFE] bg-[#EFF6FF] rounded-lg p-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-bold text-xs text-[#1E40AF] uppercase tracking-wider">
              {isArabic ? 'العنقود 1 (Cluster 1)' : 'Cluster 1'}
            </span>
            <span className="font-mono text-xs text-[#1E40AF] font-bold">n = 2</span>
          </div>
          <div className="text-xs text-[#334155] space-y-1">
            <p><strong>Points:</strong> (2, 4), (6, 4)</p>
            <p className="font-mono text-[11px] bg-[#FFFFFF] p-2 rounded border border-[#DBEAFE]">
              Mean X = (2 + 6)/2 = <strong>{c1MeanX}</strong>
              <br />
              Mean Y = (4 + 4)/2 = <strong>{c1MeanY}</strong>
            </p>
          </div>
          <div className="pt-1 border-t border-[#DBEAFE] flex justify-between items-center text-xs">
            <span className="text-[#1E40AF] font-semibold">{isArabic ? 'المركز C1:' : 'Centroid C1:'}</span>
            <span className="font-mono font-extrabold text-[#1E40AF] text-sm">({c1MeanX}, {c1MeanY})</span>
          </div>
        </div>

        {/* Cluster 2 */}
        <div className="border border-[#BBF7D0] bg-[#F0FDF4] rounded-lg p-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-bold text-xs text-[#166534] uppercase tracking-wider">
              {isArabic ? 'العنقود 2 (Cluster 2)' : 'Cluster 2'}
            </span>
            <span className="font-mono text-xs text-[#166534] font-bold">n = 2</span>
          </div>
          <div className="text-xs text-[#334155] space-y-1">
            <p><strong>Points:</strong> (1, 2), (3, 2)</p>
            <p className="font-mono text-[11px] bg-[#FFFFFF] p-2 rounded border border-[#DCFCE7]">
              Mean X = (1 + 3)/2 = <strong>{c2MeanX}</strong>
              <br />
              Mean Y = (2 + 2)/2 = <strong>{c2MeanY}</strong>
            </p>
          </div>
          <div className="pt-1 border-t border-[#DCFCE7] flex justify-between items-center text-xs">
            <span className="text-[#166534] font-semibold">{isArabic ? 'المركز C2:' : 'Centroid C2:'}</span>
            <span className="font-mono font-extrabold text-[#166534] text-sm">({c2MeanX}, {c2MeanY})</span>
          </div>
        </div>

        {/* Cluster 3 */}
        <div className="border border-[#DDD6FE] bg-[#F5F3FF] rounded-lg p-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-bold text-xs text-[#5B21B6] uppercase tracking-wider">
              {isArabic ? 'العنقود 3 (Cluster 3)' : 'Cluster 3'}
            </span>
            <span className="font-mono text-xs text-[#5B21B6] font-bold">n = 3</span>
          </div>
          <div className="text-xs text-[#334155] space-y-1">
            <p><strong>Points:</strong> (5, 7), (7, 7), (9, 7)</p>
            <p className="font-mono text-[11px] bg-[#FFFFFF] p-2 rounded border border-[#EDE9FE]">
              Mean X = (5 + 7 + 9)/3 = <strong>{c3MeanX}</strong>
              <br />
              Mean Y = (7 + 7 + 7)/3 = <strong>{c3MeanY}</strong>
            </p>
          </div>
          <div className="pt-1 border-t border-[#EDE9FE] flex justify-between items-center text-xs">
            <span className="text-[#5B21B6] font-semibold">{isArabic ? 'المركز C3:' : 'Centroid C3:'}</span>
            <span className="font-mono font-extrabold text-[#5B21B6] text-sm">({c3MeanX}, {c3MeanY})</span>
          </div>
        </div>
      </div>

      {/* Verification Banner */}
      <div className="p-3 bg-[#ECFDF5] border border-[#A7F3D0] rounded-lg flex items-center justify-between text-xs text-[#065F46]">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-[#10B981] shrink-0" />
          <span>
            {isArabic
              ? 'النتيجة المعتمدة: C1 = (4, 4), C2 = (2, 2), C3 = (7, 7) — مطابقة بنسبة 100% لخيار الامتحان الرسمي.'
              : 'Official Exam Match: C1 = (4, 4), C2 = (2, 2), C3 = (7, 7) — 100% verified.'}
          </span>
        </div>
      </div>
    </div>
  );
};

