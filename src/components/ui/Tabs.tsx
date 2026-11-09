import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ReactNode,
  type KeyboardEvent,
} from 'react';

// ============================================================
// Types
// ============================================================

interface TabItem {
  id: string;
  label: string;
  labelAr?: string;
  disabled?: boolean;
}

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
  tabs: TabItem[];
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tabs sub-components must be used inside <Tabs>');
  return ctx;
}

// ============================================================
// Tabs (root)
// ============================================================

interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  activeTab?: string;
  onChange?: (id: string) => void;
  children: ReactNode;
  className?: string;
}

export function Tabs({
  tabs,
  defaultTab,
  activeTab: controlledTab,
  onChange,
  children,
  className = '',
}: TabsProps): React.ReactElement {
  const isControlled = controlledTab !== undefined;
  const [internalTab, setInternalTab] = useState<string>(
    defaultTab ?? tabs[0]?.id ?? ''
  );

  const activeTab = isControlled ? controlledTab : internalTab;

  const setActiveTab = useCallback(
    (id: string) => {
      if (!isControlled) setInternalTab(id);
      onChange?.(id);
    },
    [isControlled, onChange]
  );

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, tabs }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

// ============================================================
// TabList
// ============================================================

interface TabListProps {
  className?: string;
  lang?: 'en' | 'ar';
}

export function TabList({ className = '', lang = 'en' }: TabListProps): React.ReactElement {
  const { activeTab, setActiveTab, tabs } = useTabsContext();
  const listRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
      const enabledTabs = tabs.filter((t) => !t.disabled);
      const enabledIndex = enabledTabs.findIndex((t) => t.id === tabs[currentIndex]?.id);

      let nextIndex: number | null = null;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = (enabledIndex + 1) % enabledTabs.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = (enabledIndex - 1 + enabledTabs.length) % enabledTabs.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextIndex = enabledTabs.length - 1;
      }

      if (nextIndex !== null) {
        const nextTab = enabledTabs[nextIndex];
        if (nextTab) {
          setActiveTab(nextTab.id);
          // Move focus to the activated tab button
          const btn = listRef.current?.querySelector<HTMLButtonElement>(
            `[data-tab-id="${nextTab.id}"]`
          );
          btn?.focus();
        }
      }
    },
    [tabs, setActiveTab]
  );

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label="Tabs"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={[
        'flex border-b border-neutral-gray gap-0',
        className,
      ].join(' ')}
    >
      {tabs.map((tab, i) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.id}`}
            aria-disabled={tab.disabled}
            disabled={tab.disabled}
            data-tab-id={tab.id}
            tabIndex={isActive ? 0 : -1}
            onClick={() => !tab.disabled && setActiveTab(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className={[
              'relative px-4 py-2.5 text-sm font-medium transition-colors duration-150',
              'focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-[-2px]',
              'disabled:opacity-40 disabled:cursor-not-allowed',
              isActive
                ? 'text-near-black after:absolute after:bottom-0 after:inset-x-0 after:h-0.5 after:bg-near-black'
                : 'text-dark-gray hover:text-near-black',
            ].join(' ')}
            style={lang === 'ar' && tab.labelAr ? { fontFamily: 'var(--font-arabic)' } : undefined}
          >
            {lang === 'ar' && tab.labelAr ? tab.labelAr : tab.label}
          </button>
        );
      })}
    </div>
  );
}

// ============================================================
// TabPanel
// ============================================================

interface TabPanelProps {
  tabId: string;
  children: ReactNode;
  className?: string;
  lazy?: boolean;
}

export function TabPanel({
  tabId,
  children,
  className = '',
  lazy = true,
}: TabPanelProps): React.ReactElement | null {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === tabId;

  if (lazy && !isActive) return null;

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${tabId}`}
      aria-labelledby={`tab-${tabId}`}
      hidden={!isActive}
      tabIndex={0}
      className={[
        'focus:outline-none',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
