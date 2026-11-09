import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopNav from './TopNav';
import CourseSidebar from './CourseSidebar';
import { useUI } from '../../store/uiStore';
import TextSelectionToolbar from '../ai/TextSelectionToolbar';
import GeminiGuidanceModal from '../ai/GeminiGuidanceModal';
import AIToast from '../ai/AIToast';

// ============================================================
// Breadcrumb context (populated by pages via hook)
// ============================================================

interface BreadcrumbItem {
  label: string;
  labelAr?: string;
  to?: string;
}

interface BreadcrumbContextValue {
  crumbs: BreadcrumbItem[];
  setCrumbs: (crumbs: BreadcrumbItem[]) => void;
}

const BreadcrumbContext = createContext<BreadcrumbContextValue>({
  crumbs: [],
  setCrumbs: () => undefined,
});

export function useBreadcrumb(): BreadcrumbContextValue {
  return useContext(BreadcrumbContext);
}

// ============================================================
// AppShell
// ============================================================

export default function AppShell(): React.ReactElement {
  const { sidebarOpen, setSidebarOpen, language } = useUI();
  const location = useLocation();
  const [crumbs, setCrumbs] = useState<BreadcrumbItem[]>([]);
  const isRTL = language === 'ar';

  // Close mobile sidebar on route change
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }, [location.pathname, setSidebarOpen]);

  // Close sidebar when Escape pressed (accessibility)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sidebarOpen && window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [sidebarOpen, setSidebarOpen]);

  const handleOverlayClick = useCallback(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  // Compute off-screen transform based on direction
  const offscreenTransform = isRTL ? 'translate-x-full' : '-translate-x-full';

  return (
    <BreadcrumbContext.Provider value={{ crumbs, setCrumbs }}>
      <div className="flex flex-col h-screen overflow-hidden bg-white">
        {/* Fixed top nav */}
        <TopNav crumbs={crumbs} />

        {/* Body: sidebar + main */}
        <div className="flex flex-1 overflow-hidden" style={{ marginTop: 56 }}>
          {/* Mobile overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              aria-hidden="true"
              onClick={handleOverlayClick}
            />
          )}

          {/* Sidebar */}
          <aside
            id="course-sidebar"
            aria-label="Course navigation"
            className={[
              'fixed top-14 bottom-0 z-50 flex flex-col bg-white border-e border-[#E5E5E5] start-0',
              'transition-all duration-200 ease-in-out',
              sidebarOpen
                ? 'translate-x-0 lg:static lg:flex lg:z-auto'
                : `${offscreenTransform} lg:hidden`,
            ].join(' ')}
            style={{ width: 'var(--sidebar-width, 280px)' }}
          >
            <CourseSidebar />
          </aside>

          {/* Main content */}
          <main
            id="main-content"
            tabIndex={-1}
            className="flex-1 overflow-y-auto bg-near-white focus:outline-none"
          >
            <Outlet />
          </main>
        </div>

        {/* Contextual AI Assistance Overlays */}
        <TextSelectionToolbar />
        <GeminiGuidanceModal />
        <AIToast />
      </div>
    </BreadcrumbContext.Provider>
  );
}
