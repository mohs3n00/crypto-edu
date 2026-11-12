import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppShell from './components/layout/AppShell';

// Primary Destination Pages
import StudyGuide from './pages/StudyGuide';
import QuestionsHub from './pages/QuestionsHub';
import ReviewHub from './pages/ReviewHub';
import BasmagaHub from './pages/BasmagaHub';
import ProblemSolvingHub from './pages/ProblemSolvingHub';
import InteractiveHub from './pages/InteractiveHub';
import InteractivePresentationViewer from './pages/InteractivePresentationViewer';
import ArtboardPage from './pages/ArtboardPage';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <StudyGuide />,
      },
      // 1. Primary Unified Curriculum Study Guide
      {
        path: 'study',
        element: <StudyGuide />,
      },

      // 2. Centralized Questions Bank & Exams
      {
        path: 'questions',
        element: <QuestionsHub />,
      },
      {
        path: 'practice',
        element: <QuestionsHub />,
      },

      // Legacy Learn Routes redirected to Unified Study Guide
      {
        path: 'learn',
        element: <Navigate to="/study" replace />,
      },
      {
        path: 'learn/:chapterId',
        element: <Navigate to="/study" replace />,
      },
      {
        path: 'learn/:chapterId/:lessonId',
        element: <Navigate to="/study" replace />,
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

      // 5.1 Artboard — Interactive Problem Solving Classroom
      {
        path: 'artboard',
        element: <ArtboardPage />,
      },
      {
        path: 'artboard/:problemId',
        element: <ArtboardPage />,
      },

      // 6. Interactive Learning — Digital Classroom Lectures
      {
        path: 'interactive',
        element: <InteractiveHub />,
      },
      {
        path: 'interactive/:chapterId',
        element: <InteractiveHub />,
      },
      {
        path: 'interactive/:chapterId/:lessonId',
        element: <InteractivePresentationViewer />,
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
