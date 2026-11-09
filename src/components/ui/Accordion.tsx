import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
  type KeyboardEvent,
} from 'react';
import { ChevronDown } from 'lucide-react';

// ============================================================
// Types
// ============================================================

interface AccordionProps {
  title: ReactNode;
  titleAr?: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onToggle?: (open: boolean) => void;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  lang?: 'en' | 'ar';
}

// ============================================================
// Accordion
// ============================================================

export default function Accordion({
  title,
  titleAr,
  defaultOpen = false,
  open: controlledOpen,
  onToggle,
  children,
  className = '',
  headerClassName = '',
  contentClassName = '',
  lang = 'en',
}: AccordionProps): React.ReactElement {
  const isControlled = controlledOpen !== undefined;
  const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen);
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(isOpen ? 0 : 0);

  // Measure content height when it changes or opens
  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, children]);

  const toggle = useCallback(() => {
    const next = !isOpen;
    if (!isControlled) setInternalOpen(next);
    onToggle?.(next);
  }, [isOpen, isControlled, onToggle]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    },
    [toggle]
  );

  const displayTitle = lang === 'ar' && titleAr ? titleAr : title;
  const isRtl = lang === 'ar';

  return (
    <div className={`border border-neutral-gray rounded bg-white ${className}`}>
      {/* Header */}
      <button
        type="button"
        onClick={toggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        dir={isRtl ? 'rtl' : 'ltr'}
        className={[
          'w-full flex items-center justify-between gap-3 px-4 py-3',
          'text-sm font-medium text-near-black hover:bg-near-white',
          'transition-colors duration-150 rounded',
          'focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-[-2px]',
          isRtl ? 'font-arabic' : '',
          headerClassName,
        ].join(' ')}
        style={isRtl ? { fontFamily: 'var(--font-arabic)' } : undefined}
      >
        <span className="text-left">{displayTitle}</span>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`shrink-0 text-dark-gray transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{ transitionProperty: 'transform' }}
        />
      </button>

      {/* Animated content panel */}
      <div
        style={{
          height: isOpen ? height || 'auto' : 0,
          overflow: 'hidden',
          transition: 'height 250ms ease',
        }}
        aria-hidden={!isOpen}
      >
        <div
          ref={contentRef}
          className={`px-4 pb-4 pt-1 ${contentClassName}`}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// AccordionGroup — multiple accordions with optional single-open
// ============================================================

interface AccordionGroupItem {
  id: string;
  title: ReactNode;
  titleAr?: ReactNode;
  content: ReactNode;
  defaultOpen?: boolean;
}

interface AccordionGroupProps {
  items: AccordionGroupItem[];
  singleOpen?: boolean;
  className?: string;
  lang?: 'en' | 'ar';
}

export function AccordionGroup({
  items,
  singleOpen = false,
  className = '',
  lang = 'en',
}: AccordionGroupProps): React.ReactElement {
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(items.filter((i) => i.defaultOpen).map((i) => i.id))
  );

  const handleToggle = useCallback(
    (id: string, open: boolean) => {
      setOpenIds((prev) => {
        const next = new Set(prev);
        if (open) {
          if (singleOpen) next.clear();
          next.add(id);
        } else {
          next.delete(id);
        }
        return next;
      });
    },
    [singleOpen]
  );

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {items.map((item) => (
        <Accordion
          key={item.id}
          title={item.title}
          titleAr={item.titleAr}
          open={openIds.has(item.id)}
          onToggle={(open) => handleToggle(item.id, open)}
          lang={lang}
        >
          {item.content}
        </Accordion>
      ))}
    </div>
  );
}
