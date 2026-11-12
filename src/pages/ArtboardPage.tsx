import React, { useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { getSubjectWorkedProblems } from '../data/subjects';
import { getWorkedProblems } from '../data/problemSolving';
import { useUI } from '../store/uiStore';
import ArtboardWhiteboard from '../components/artboard/ArtboardWhiteboard';

export const ArtboardPage: React.FC = () => {
  const { problemId } = useParams<{ problemId?: string }>();
  const navigate = useNavigate();
  const { activeSubjectId, language } = useUI();
  const isArabic = language === 'ar';

  const allProblems = useMemo(() => {
    const list = getSubjectWorkedProblems(activeSubjectId);
    if (list && list.length > 0) return list;
    return getWorkedProblems();
  }, [activeSubjectId]);

  // Find active problem or default to first
  const activeProblem = useMemo(() => {
    if (!problemId) {
      // Default to prob-ch2-02 (Extended Euclidean 550^-1 mod 1759) or the first problem
      const preferred = allProblems.find((p) => p.id === 'prob-ch2-02');
      return preferred || allProblems[0];
    }
    const found = allProblems.find((p) => p.id === problemId);
    return found || allProblems[0];
  }, [problemId, allProblems]);

  const handleSelectProblem = (newProblemId: string) => {
    navigate(`/artboard/${newProblemId}`, { replace: false });
  };

  const handleExit = () => {
    navigate('/problem-solving');
  };

  if (!activeProblem) {
    return (
      <div className="max-w-xl mx-auto my-20 p-8 bg-[#FFFFFF] border border-[#E2E2DF] rounded-2xl text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-[#FFFDF0] border border-[#E2C65A] flex items-center justify-center mx-auto text-[#856404]">
          <AlertCircle size={24} />
        </div>
        <h2 className="text-xl font-bold text-[#222222]">
          {isArabic ? 'لم يتم العثور على مسائل في هذا المقرر' : 'No Problems Available'}
        </h2>
        <p className="text-sm text-[#505050]">
          {isArabic
            ? 'يرجى الانتقال لمقرر أمن المعلومات والتشفير للاستفادة من استوديو Artboard.'
            : 'Please switch to Information Security & Cryptography to access the Artboard Classroom.'}
        </p>
        <Link
          to="/study"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#222222] text-[#FFFFFF] text-sm font-semibold hover:bg-[#333333] transition-colors"
        >
          <ArrowLeft size={16} className={isArabic ? 'rotate-180' : ''} />
          <span>{isArabic ? 'العودة للدراسة' : 'Back to Study'}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full h-[calc(100vh-56px)] overflow-hidden">
      <ArtboardWhiteboard
        key={activeProblem.id}
        problem={activeProblem}
        allProblems={allProblems}
        onSelectProblem={handleSelectProblem}
        onExit={handleExit}
      />
    </div>
  );
};

export default ArtboardPage;
