import React, { useState } from 'react';
import { Disc, ArrowRight, RotateCw, ShieldAlert, Sparkles } from 'lucide-react';
import MathDisplay from '../ui/MathDisplay';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function CaesarWheelDiagram(): React.ReactElement {
  const [shift, setShift] = useState<number>(3);
  const [sampleText, setSampleText] = useState<string>('TREATY');

  // Encryption function
  const encryptText = (text: string, k: number): string => {
    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        const idx = ALPHABET.indexOf(char);
        if (idx === -1) return char;
        return ALPHABET[(idx + k) % 26];
      })
      .join('');
  };

  const cipherText = encryptText(sampleText, shift);

  // Generate wheel pairs
  const pairs = ALPHABET.map((letter, idx) => {
    const cipherLetter = ALPHABET[(idx + shift) % 26];
    return {
      pIndex: idx,
      pLetter: letter,
      cIndex: (idx + shift) % 26,
      cLetter: cipherLetter,
    };
  });

  return (
    <div className="border-2 border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-4 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded border border-[#171717] bg-[#171717] text-[#FFFFFF] flex items-center justify-center shrink-0">
            <Disc size={18} />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#737373] block">
              Figure 3.2 / Classical Cryptography Architecture
            </span>
            <h3 className="text-lg font-bold text-[#171717] tracking-tight">
              Caesar Cipher Shift Wheel & Modular Mapping
            </h3>
          </div>
        </div>

        {/* Shift Controls */}
        <div className="flex items-center gap-3 bg-[#FAFAFA] border border-[#171717] px-3 py-1.5 rounded">
          <span className="text-xs font-mono font-bold text-[#171717]">Shift Key (k):</span>
          <input
            type="range"
            min="0"
            max="25"
            value={shift}
            onChange={(e) => setShift(parseInt(e.target.value))}
            className="w-24 accent-[#171717] cursor-pointer"
          />
          <span className="font-mono font-bold text-sm bg-[#171717] text-[#FFFFFF] px-2 py-0.5 rounded w-8 text-center">
            {shift}
          </span>
        </div>
      </div>

      {/* Preset Quick Buttons */}
      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
        <span className="font-bold text-[#737373] uppercase">Historical Presets:</span>
        <button
          onClick={() => setShift(3)}
          className={`px-2.5 py-1 border rounded transition-colors ${
            shift === 3 ? 'bg-[#171717] text-[#FFFFFF] border-[#171717]' : 'border-[#E5E5E5] hover:border-[#171717]'
          }`}
        >
          Julius Caesar (k = 3)
        </button>
        <button
          onClick={() => setShift(13)}
          className={`px-2.5 py-1 border rounded transition-colors ${
            shift === 13 ? 'bg-[#171717] text-[#FFFFFF] border-[#171717]' : 'border-[#E5E5E5] hover:border-[#171717]'
          }`}
        >
          ROT13 (k = 13, Self-Inverting)
        </button>
        <button
          onClick={() => setShift(1)}
          className={`px-2.5 py-1 border rounded transition-colors ${
            shift === 1 ? 'bg-[#171717] text-[#FFFFFF] border-[#171717]' : 'border-[#E5E5E5] hover:border-[#171717]'
          }`}
        >
          Caesar Shift 1 (k = 1)
        </button>
      </div>

      {/* Mathematical Formulation Callout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#FAFAFA] border border-[#E5E5E5] p-4 rounded text-xs font-mono">
        <div className="space-y-1">
          <span className="font-bold text-[#171717] block">Encryption Formula:</span>
          <div className="p-2 bg-[#FFFFFF] border border-[#E5E5E5] rounded text-center">
            <MathDisplay latex="C = E(k, p) = (p + k) \pmod{26}" />
          </div>
          <p className="text-[#525252] text-[11px]">
            Maps each plaintext character to the character <span className="font-bold">k</span> positions forward in the cyclical alphabet.
          </p>
        </div>
        <div className="space-y-1">
          <span className="font-bold text-[#171717] block">Decryption Formula:</span>
          <div className="p-2 bg-[#FFFFFF] border border-[#E5E5E5] rounded text-center">
            <MathDisplay latex="p = D(k, C) = (C - k) \pmod{26}" />
          </div>
          <p className="text-[#525252] text-[11px]">
            Subtracts key <span className="font-bold">k</span> modulo 26 (guaranteeing non-negative remainder in [0, 25]).
          </p>
        </div>
      </div>

      {/* 26-Letter Alignment Tape */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono font-bold text-[#171717]">
          <span>Cyclic Alphabet Mapping Strip (Mod 26)</span>
          <span className="text-[#737373]">Plaintext [Top] → Ciphertext [Bottom]</span>
        </div>

        <div className="overflow-x-auto border border-[#171717] rounded bg-[#FAFAFA] p-3">
          <div className="inline-flex gap-1 min-w-max">
            {pairs.map((p) => {
              const isSampleLetter = sampleText.toUpperCase().includes(p.pLetter);
              return (
                <div
                  key={p.pLetter}
                  className={`flex flex-col items-center justify-center p-1.5 w-9 border rounded transition-all ${
                    isSampleLetter
                      ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
                      : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#171717]'
                  }`}
                >
                  <span className="text-[10px] font-mono text-[#737373]">{p.pIndex}</span>
                  <span className="text-sm font-bold font-mono my-0.5">{p.pLetter}</span>
                  <div className={`w-full h-px my-1 ${isSampleLetter ? 'bg-[#525252]' : 'bg-[#E5E5E5]'}`} />
                  <span className="text-sm font-bold font-mono my-0.5">{p.cLetter}</span>
                  <span className="text-[10px] font-mono text-[#737373]">{p.cIndex}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Word Derivation */}
      <div className="p-4 border border-[#171717] bg-[#FAFAFA] rounded-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-xs font-mono font-bold uppercase text-[#171717] flex items-center gap-1.5">
            <Sparkles size={14} />
            <span>Interactive Word Transformation:</span>
          </span>
          <div className="flex items-center gap-2">
            <label className="text-xs font-mono text-[#525252]">Plaintext Input:</label>
            <input
              type="text"
              value={sampleText}
              onChange={(e) => setSampleText(e.target.value.replace(/[^a-zA-Z]/g, ''))}
              maxLength={12}
              className="px-3 py-1 text-xs font-mono border border-[#171717] rounded bg-[#FFFFFF] uppercase font-bold tracking-wider"
            />
          </div>
        </div>

        {/* Transformation Steps Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs font-mono border-collapse">
            <thead>
              <tr className="bg-[#E5E5E5] text-[#171717] text-left">
                <th className="p-2 border border-[#CCCCCC]">Plaintext Char (P)</th>
                <th className="p-2 border border-[#CCCCCC] text-center">Numerical Value (p)</th>
                <th className="p-2 border border-[#CCCCCC] text-center">Shift Formula: (p + {shift}) mod 26</th>
                <th className="p-2 border border-[#CCCCCC] text-center">Cipher Value (C)</th>
                <th className="p-2 border border-[#CCCCCC] text-center">Ciphertext Char</th>
              </tr>
            </thead>
            <tbody>
              {sampleText
                .toUpperCase()
                .split('')
                .map((ch, idx) => {
                  const pVal = ALPHABET.indexOf(ch);
                  if (pVal === -1) return null;
                  const sum = pVal + shift;
                  const cVal = sum % 26;
                  const cChar = ALPHABET[cVal];
                  return (
                    <tr key={idx} className="bg-[#FFFFFF] border-b border-[#E5E5E5]">
                      <td className="p-2 border border-[#E5E5E5] font-bold text-[#171717]">{ch}</td>
                      <td className="p-2 border border-[#E5E5E5] text-center text-[#525252]">{pVal}</td>
                      <td className="p-2 border border-[#E5E5E5] text-center font-mono">
                        ({pVal} + {shift}) = {sum} ≡ {cVal} (mod 26)
                      </td>
                      <td className="p-2 border border-[#E5E5E5] text-center text-[#525252] font-bold">{cVal}</td>
                      <td className="p-2 border border-[#E5E5E5] text-center font-bold text-[#171717] bg-[#FAFAFA]">
                        {cChar}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        {/* Final Ciphertext Output Callout */}
        <div className="p-3 border-2 border-[#171717] bg-[#171717] text-[#FFFFFF] rounded flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-[#A3A3A3] block font-bold">
              Output Ciphertext (Shift = {shift}):
            </span>
            <span className="text-xl font-bold font-mono tracking-widest">{cipherText || '—'}</span>
          </div>
          <span className="text-xs font-mono text-[#A3A3A3]">
            Key Space: 25 keys (Easily brute-forced)
          </span>
        </div>
      </div>

      {/* Cryptanalytic Vulnerability Note */}
      <div className="p-3 border border-[#171717] bg-[#FFFFFF] rounded text-xs flex items-start gap-2.5">
        <ShieldAlert size={16} className="text-[#171717] shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-bold text-[#171717] block">
            Cryptanalysis Doctrine (William Stallings Ch 3):
          </span>
          <p className="text-[#525252] leading-relaxed">
            The Caesar cipher is trivial to break via brute-force attack because there are only 25 possible keys to test. Furthermore, because it is a monoalphabetic substitution cipher, single-letter frequency distribution (e.g. English letter 'E' ~12.7%, 'T' ~9.1%) is completely preserved in the ciphertext, allowing instant identification of the key without trial.
          </p>
        </div>
      </div>
    </div>
  );
}

