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

export const DEFAULT_BODY_FONT_SIZE = 19;
export const MIN_BODY_FONT_SIZE = 17;
export const MAX_BODY_FONT_SIZE = 24;

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
  bodyFontSize: number;
  setBodyFontSize: (size: number) => void;
  resetBodyFontSize: () => void;
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

  // Initialize body content font size from localStorage (17px - 24px, default: 19px)
  const [bodyFontSize, setBodyFontSizeState] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved =
        localStorage.getItem('edu_body_font_size') ||
        localStorage.getItem('edu_explanation_font_size');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= MIN_BODY_FONT_SIZE && parsed <= MAX_BODY_FONT_SIZE) {
          return parsed;
        }
      }
    }
    return DEFAULT_BODY_FONT_SIZE;
  });

  // Apply CSS custom property to document root and save to localStorage
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty(
        '--body-content-font-size',
        `${bodyFontSize}px`
      );
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('edu_body_font_size', String(bodyFontSize));
      localStorage.setItem('edu_explanation_font_size', String(bodyFontSize));
    }
  }, [bodyFontSize]);

  const setBodyFontSize = useCallback((size: number) => {
    const clamped = Math.max(MIN_BODY_FONT_SIZE, Math.min(MAX_BODY_FONT_SIZE, Math.round(size)));
    setBodyFontSizeState(clamped);
  }, []);

  const resetBodyFontSize = useCallback(() => {
    setBodyFontSizeState(DEFAULT_BODY_FONT_SIZE);
  }, []);

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
        bodyFontSize,
        setBodyFontSize,
        resetBodyFontSize,
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
