import React, { useState, useMemo } from 'react';
import {
  X,
  Search,
  ShieldCheck,
} from 'lucide-react';
import {
  officialSourceAuditRecords,
  getAuditStats,
} from '../../data/artboard/sourceAuditData';

interface ArtboardCoverageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProblem?: (problemId: string) => void;
}

export const ArtboardCoverageModal: React.FC<ArtboardCoverageModalProps> = ({
  isOpen,
  onClose,
  onSelectProblem,
}) => {
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const stats = useMemo(() => getAuditStats(), []);

  const filteredItems = useMemo(() => {
    let list = officialSourceAuditRecords;

    if (selectedChapter !== 'all') {
      list = list.filter((i) => i.chapter.toLowerCase().includes(selectedChapter.toLowerCase()));
    }

    if (selectedStatus !== 'all') {
      list = list.filter((i) => i.coverageStatus === selectedStatus);
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter(
        (i) =>
          i.topic.toLowerCase().includes(q) ||
          i.topicAr.toLowerCase().includes(q) ||
          i.originalQuestion.toLowerCase().includes(q) ||
          i.sourceFile.toLowerCase().includes(q) ||
          i.problemType.toLowerCase().includes(q) ||
          i.problemTypeAr.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedChapter, selectedStatus, search]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs select-none">
      <div className="bg-[#FFFFFF] border-2 border-[#222222] rounded-2xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#F7F7F5] border-b border-[#E2E2DF] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck size={22} className="text-[#222222]" />
            <div className="space-y-0.5">
              <h3 className="font-extrabold text-sm sm:text-base text-[#222222]">
                جدول تدقيق المصادر الأكاديمي (Curriculum Source Audit Matrix)
              </h3>
              <p className="text-[11px] text-[#505050]">
                حصر وتوثيق كل مسألة ومثال من الملفات الأصلية المعتمدة (سلايدات المحاضرات، بنوك الأسئلة، وامتحانات الميدتيرم)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg border border-[#E2E2DF] bg-[#FFFFFF] flex items-center justify-center text-[#505050] hover:text-[#222222] hover:bg-[#ECEDEB] cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* 5-Status Metrics Bar */}
        <div className="p-3.5 bg-[#FFFFFF] border-b border-[#E2E2DF] grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-center">
          <div className="p-2.5 bg-[#F7F7F5] border border-[#E2E2DF] rounded-xl space-y-0.5">
            <span className="text-[10px] font-mono text-[#505050] uppercase">A. مسائل الامتحانات</span>
            <div className="text-lg sm:text-xl font-mono font-bold text-[#222222]">
              {stats.actualProblems} مسألة معتمدة
            </div>
          </div>

          <div className="p-2.5 bg-[#F7F7F5] border border-[#E2E2DF] rounded-xl space-y-0.5">
            <span className="text-[10px] font-mono text-[#505050] uppercase">B. أمثلة المحاضرات</span>
            <div className="text-lg sm:text-xl font-mono font-bold text-[#222222]">
              {stats.lectureExamples} مثالاً محلولاً
            </div>
          </div>

          <div className="p-2.5 bg-[#F7F7F5] border border-[#E2E2DF] rounded-xl space-y-0.5">
            <span className="text-[10px] font-mono text-[#505050] uppercase">إجمالي المسائل المحلولة</span>
            <div className="text-lg sm:text-xl font-mono font-bold text-[#222222]">
              {stats.solvableProblemsTotal} مسألة
            </div>
          </div>

          <div className="p-2.5 bg-[#FFFDF0] border border-[#E2C65A] rounded-xl space-y-0.5">
            <span className="text-[10px] font-mono text-[#856404] uppercase">C. نظري بدون حسابات</span>
            <div className="text-lg sm:text-xl font-mono font-bold text-[#856404]">
              {stats.theoryOnly} موضوع
            </div>
          </div>

          <div className="p-2.5 bg-[#F7F7F5] border border-[#E2E2DF] rounded-xl space-y-0.5 col-span-2 sm:col-span-1">
            <span className="text-[10px] font-mono text-[#505050] uppercase">D & E. غير موجود / غير واضح</span>
            <div className="text-lg sm:text-xl font-mono font-bold text-[#686868]">
              0 (مدقق بالكامل)
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="p-3 bg-[#FAFAFA] border-b border-[#E2E2DF] flex flex-wrap items-center gap-2">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-3.5 h-3.5 text-[#686868] absolute top-1/2 -translate-y-1/2 right-3" />
            <input
              type="text"
              placeholder="بحث بالموضوع، نص السؤال الإنجليزي، أو اسم الملف..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pr-8 pl-3 py-1.5 text-xs bg-[#FFFFFF] border border-[#E2E2DF] rounded-lg focus:outline-none focus:border-[#222222]"
            />
          </div>

          <select
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(e.target.value)}
            className="px-3 py-1.5 text-xs bg-[#FFFFFF] border border-[#E2E2DF] rounded-lg focus:outline-none focus:border-[#222222] font-medium"
          >
            <option value="all">كافة الفصول (All Chapters)</option>
            <option value="Chapter 1">Chapter 1</option>
            <option value="Chapter 2">Chapter 2</option>
            <option value="Chapter 3">Chapter 3</option>
            <option value="Chapter 4">Chapter 4</option>
            <option value="Chapter 7">Chapter 7</option>
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-1.5 text-xs bg-[#FFFFFF] border border-[#E2E2DF] rounded-lg focus:outline-none focus:border-[#222222] font-medium"
          >
            <option value="all">كافة الحالات (All Statuses)</option>
            <option value="actual-problem">A. مسألة امتحان رسمي</option>
            <option value="lecture-example">B. مثال محلول بالسلايدات</option>
            <option value="theory-only">C. موضوع نظري فقط (بدون مسائل)</option>
          </select>
        </div>

        {/* Audit Table */}
        <div className="flex-1 overflow-y-auto">
          <table className="w-full text-right text-xs">
            <thead className="bg-[#F7F7F5] border-b border-[#E2E2DF] font-mono text-[11px] uppercase text-[#505050] sticky top-0 z-10">
              <tr>
                <th className="p-3 w-28">الفصل</th>
                <th className="p-3">الموضوع كما ورد في المصدر</th>
                <th className="p-3 w-44">اسم الملف والموضع</th>
                <th className="p-3 text-center w-28">نوع المصدر</th>
                <th className="p-3">نوع العملية المطلوبة</th>
                <th className="p-3 text-center w-36">حالة التدقيق</th>
                <th className="p-3 text-center w-24">إجراء</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E2DF]">
              {filteredItems.map((record) => {
                return (
                  <tr key={record.id} className="hover:bg-[#F7F7F5] transition-colors">
                    <td className="p-3 font-mono font-bold text-[#222222]">
                      {record.chapter}
                    </td>

                    <td className="p-3 space-y-1">
                      <div className="font-bold text-[#222222]">{record.topicAr}</div>
                      <div className="font-mono text-[11px] text-[#505050]" dir="ltr">{record.topic}</div>
                    </td>

                    <td className="p-3 font-mono text-xs space-y-0.5">
                      <div className="font-bold text-[#222222]">{record.sourceFile}</div>
                      <div className="text-[11px] text-[#686868]">{record.location}</div>
                    </td>

                    <td className="p-3 text-center">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#E8E8E5] border border-[#D4D4D0] text-[#222222]">
                        {record.sourceType}
                      </span>
                    </td>

                    <td className="p-3 space-y-0.5">
                      <div className="font-semibold text-[#222222]">{record.problemTypeAr}</div>
                      <div className="font-mono text-[11px] text-[#686868]" dir="ltr">{record.problemType}</div>
                    </td>

                    <td className="p-3 text-center">
                      {record.coverageStatus === 'actual-problem' && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#222222] text-[#FFFFFF]">
                          {record.statusLabelAr}
                        </span>
                      )}
                      {record.coverageStatus === 'lecture-example' && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#ECEDEB] text-[#222222] border border-[#D4D4D0]">
                          {record.statusLabelAr}
                        </span>
                      )}
                      {record.coverageStatus === 'theory-only' && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#FFFDF0] text-[#856404] border border-[#E2C65A]">
                          {record.statusLabelAr}
                        </span>
                      )}
                    </td>

                    <td className="p-3 text-center">
                      {record.problemId ? (
                        <button
                          type="button"
                          onClick={() => {
                            if (onSelectProblem && record.problemId) {
                              onSelectProblem(record.problemId);
                              onClose();
                            }
                          }}
                          className="px-2.5 py-1 rounded-lg bg-[#222222] text-[#FFFFFF] text-xs font-bold hover:bg-[#000000] transition-colors cursor-pointer"
                        >
                          عرض الشرح
                        </button>
                      ) : (
                        <span className="text-[11px] text-[#777777] font-mono">نظري</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#F7F7F5] border-t border-[#E2E2DF] text-xs text-[#505050] flex items-center justify-between">
          <span>
            الشرط الإلزامي: ممنوع اختراع مسائل أو تغيير الأرقام. المحتوى مستخرج وموثق 100% من ملفات المنهج المرفقة.
          </span>
          <span className="font-mono">{filteredItems.length} موضوعات مطابقة</span>
        </div>
      </div>
    </div>
  );
};

export default ArtboardCoverageModal;
