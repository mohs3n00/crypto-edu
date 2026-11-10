import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppShell from './components/layout/AppShell';

// Primary Destination Pages
import SubjectHome from './pages/SubjectHome';
import PracticeHub from './pages/PracticeHub';
import ReviewHub from './pages/ReviewHub';
import LessonViewer from './pages/LessonViewer';
import ChapterOverview from './pages/ChapterOverview';
import BasmagaHub from './pages/BasmagaHub';
import ProblemSolvingHub from './pages/ProblemSolvingHub';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <SubjectHome />,
      },
      // 1. Learn Destination
      {
        path: 'learn',
        element: <SubjectHome />,
      },
      {
        path: 'learn/:chapterId',
        element: <ChapterOverview />,
      },
      {
        path: 'learn/:chapterId/:lessonId',
        element: <LessonViewer />,
      },

      // 2. Practice Destination
      {
        path: 'practice',
        element: <PracticeHub />,
      },

      // 3. Review Destination
      {
        path: 'review',
        element: <ReviewHub />,
      },

      // 4. Section A — Basmaga Hub (Keyword-Based Exam Solving)
      {
        path: 'basmaga',
        element: <BasmagaHub />,
      },

      // 5. Section B — Problem Solving Hub (Complete Worked Problems)
      {
        path: 'problem-solving',
        element: <ProblemSolvingHub />,
      },

      // Seamless Legacy Redirects to preserve existing links and bookmarks
      {
        path: 'dashboard',
        element: <Navigate to="/learn" replace />,
      },
      {
        path: 'curriculum',
        element: <Navigate to="/learn" replace />,
      },
      {
        path: 'questions',
        element: <Navigate to="/practice?tab=questions" replace />,
      },
      {
        path: 'exams',
        element: <Navigate to="/practice?tab=exams" replace />,
      },
      {
        path: 'lab',
        element: <Navigate to="/practice?tab=lab" replace />,
      },
      {
        path: 'formulas',
        element: <Navigate to="/review?tab=formulas" replace />,
      },
      {
        path: 'glossary',
        element: <Navigate to="/review?tab=glossary" replace />,
      },
      {
        path: 'revision',
        element: <Navigate to="/review?tab=traps" replace />,
      },
      {
        path: 'mistakes',
        element: <Navigate to="/review?tab=mistakes" replace />,
      },

      // 404 Catch-All
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
