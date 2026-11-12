import React from 'react';
import MathDisplay from './MathDisplay';

interface FormattedMathTextProps {
  text: string;
  className?: string;
  displayMode?: boolean;
}

/**
 * Renders text containing math formulas with proper spacing and typography.
 * Unlike passing raw English/Arabic prose to MathDisplay (which strips spaces and turns
 * normal words into squished italic math variables), this component keeps regular text
 * in the clean platform font, and renders only mathematical formulas via KaTeX.
 */
export const FormattedMathText: React.FC<FormattedMathTextProps> = ({
  text,
  className = '',
  displayMode = false,
}) => {
  if (!text) return null;

  // 1. If text contains explicit delimiters ($...$ or $$...$$)
  if (text.includes('$')) {
    const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g);
    return (
      <span className={className}>
        {parts.map((part, idx) => {
          if (part.startsWith('$$') && part.endsWith('$$')) {
            const math = part.slice(2, -2).trim();
            return <MathDisplay key={idx} math={math} display />;
          }
          if (part.startsWith('$') && part.endsWith('$')) {
            const math = part.slice(1, -1).trim();
            return <MathDisplay key={idx} math={math} inline />;
          }
          return <span key={idx}>{part}</span>;
        })}
      </span>
    );
  }

  // 2. If text contains LaTeX commands without explicit $ delimiters (e.g. 550^{-1} \pmod{1759})
  // We extract LaTeX commands like \pmod, \frac, \times, \equiv, \gcd, \oplus, ^{...}, _{...}
  const hasLatexCommands =
    text.includes('\\pmod') ||
    text.includes('\\frac') ||
    text.includes('\\equiv') ||
    text.includes('\\gcd') ||
    text.includes('\\times') ||
    text.includes('\\oplus') ||
    text.includes('\\le') ||
    text.includes('\\ge') ||
    text.includes('\\neq') ||
    text.includes('^{-1}') ||
    text.includes('_{');

  // If it's a pure math formula without words (e.g. "550^{-1} \equiv 355 \pmod{1759}")
  const isPureFormula =
    !/\b(Using|calculate|the|Algorithm|Show|Encrypt|Given|departments|requiring|total|secret|keys|find|output|input|modulus|plaintext|ciphertext|divided|remainder)\b/i.test(
      text
    ) && (hasLatexCommands || text.includes('=') || text.includes('^'));

  if (isPureFormula && (hasLatexCommands || text.includes('^') || text.includes('_'))) {
    return <MathDisplay math={text} display={displayMode} inline={!displayMode} className={className} />;
  }

  // 3. For mixed text where math isn't delimited by $, auto-detect inline formulas:
  if (hasLatexCommands) {
    // Matches formulas like: 550^{-1} \pmod{1759} or C = E_K(P)
    const pattern = /(\b\d+\^\{[^}]+\}(?:\s*\\pmod\{[^}]+\})?|\b[A-Za-z0-9_]+\s*=\s*[^,.;:]*\\(?:pmod|frac|times|oplus|equiv)[^,.;:]*|\\(?:pmod|frac|gcd|times|oplus|equiv)\{[^}]+\})/g;
    const parts = text.split(pattern);

    return (
      <span className={className}>
        {parts.map((part, idx) => {
          if (pattern.test(part)) {
            return <MathDisplay key={idx} math={part} inline />;
          }
          return <span key={idx}>{part}</span>;
        })}
      </span>
    );
  }

  // 4. Standard clean prose
  return <span className={className}>{text}</span>;
};

export default FormattedMathText;
