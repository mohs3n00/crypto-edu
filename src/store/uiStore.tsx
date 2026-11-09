import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react';
import { getTranslation, type TranslationKey } from '../data/translations';

export type SupportedLanguage = 'en' | 'ar';

interface UIContextValue {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  activeLessonId: string | null;
  setActiveLessonId: (id: string | null) => void;
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  toggleLanguage: () => void;
  activeSubjectId: string;
  setActiveSubjectId: (id: string) => void;
  t: (key: TranslationKey) => string;
}

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: ReactNode }): React.ReactElement {
  const [sidebarOpen, setSidebarOpenState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return true;
  });

  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  // Initialize language from localStorage or default to 'en'
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cryptoedu_language');
      if (saved === 'ar' || saved === 'en') return saved;
    }
    return 'en';
  });

  // Initialize active subject
  const [activeSubjectId, setActiveSubjectIdState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cryptoedu_active_subject');
      if (saved) return saved;
    }
    return 'cryptography';
  });

  // Apply HTML direction and lang attribute whenever language changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const isArabic = language === 'ar';
      document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
      if (isArabic) {
        document.body.style.fontFamily = 'var(--font-arabic)';
      } else {
        document.body.style.fontFamily = 'var(--font-sans)';
      }
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cryptoedu_language', language);
    }
  }, [language]);

  const setSidebarOpen = useCallback((open: boolean) => {
    setSidebarOpenState(open);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpenState((prev) => !prev);
  }, []);

  const setLanguage = useCallback((lang: SupportedLanguage) => {
    setLanguageState(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const setActiveSubjectId = useCallback((id: string) => {
    setActiveSubjectIdState(id);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cryptoedu_active_subject', id);
    }
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      return getTranslation(key, language);
    },
    [language]
  );

  return (
    <UIContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        toggleSidebar,
        activeLessonId,
        setActiveLessonId,
        language,
        setLanguage,
        toggleLanguage,
        activeSubjectId,
        setActiveSubjectId,
        t,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI(): UIContextValue {
  const ctx = useContext(UIContext);
  if (!ctx) {
    throw new Error('useUI must be used within UIProvider');
  }
  return ctx;
}

export function useTranslation() {
  const { t, language } = useUI();
  return { t, language };
}

export function useSidebar() {
  const { sidebarOpen, setSidebarOpen, toggleSidebar } = useUI();
  return { sidebarOpen, setSidebarOpen, toggleSidebar };
}

export function useActiveLesson() {
  const { activeLessonId, setActiveLessonId } = useUI();
  return { activeLessonId, setActiveLessonId };
}
