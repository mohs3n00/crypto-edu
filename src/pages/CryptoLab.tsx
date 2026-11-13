import React, { useState } from 'react';
import {
  Cpu,
  Sliders,
  Grid,
  Hash,
  Shuffle,
  Binary,
  Layers,
  Calculator,
  Info,
} from 'lucide-react';
import CaesarTool from '../components/tools/CaesarTool';
import PlayfairTool from '../components/tools/PlayfairTool';
import HillTool from '../components/tools/HillTool';
import VigenereTool from '../components/tools/VigenereTool';
import EuclideanTool from '../components/tools/EuclideanTool';
import ModCalcTool from '../components/tools/ModCalcTool';
import DesSBoxTool from '../components/tools/DesSBoxTool';
import ModesSimulator from '../components/tools/ModesSimulator';
import FeistelRoundVisualizer from '../components/tools/FeistelRoundVisualizer';

export default function CryptoLab(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<
    'feistel' | 'caesar' | 'playfair' | 'hill' | 'vigenere' | 'euclidean' | 'modcalc' | 'des-sbox' | 'modes'
  >('feistel');

  const tools = [
    { id: 'feistel', label: 'Feistel Network (8-bit)', labelAr: 'دورة فايستل (8 بت)', icon: Cpu },
    { id: 'caesar', label: 'Caesar Cipher', labelAr: 'تشفير قيصر', icon: Sliders },
    { id: 'playfair', label: 'Playfair Matrix', labelAr: 'مصفوفة بليفيل', icon: Grid },
    { id: 'hill', label: 'Hill Cipher', labelAr: 'تشفير هيل والمصفوفات', icon: Hash },
    { id: 'vigenere', label: 'Vigenère & Autokey', labelAr: 'فيجنير والمفتاح الذاتي', icon: Shuffle },
    { id: 'euclidean', label: 'Euclidean & Extended', labelAr: 'خوارزمية إقليدس والمقلوب', icon: Calculator },
    { id: 'modcalc', label: 'Mod & Totient & CRT', labelAr: 'الحساب المعياري ونظرية البواقي', icon: Calculator },
    { id: 'des-sbox', label: 'DES S-Box Explorer', labelAr: 'صناديق استبدال DES', icon: Binary },
    { id: 'modes', label: 'Block Cipher Modes', labelAr: 'أنماط تشغيل الشفرات', icon: Layers },
  ] as const;

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-[#E5E5E5] pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-wider">
          <Cpu className="w-4 h-4 text-[#171717]" />
          <span>Interactive Cryptographic Workbench / المختبر التفاعلي</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-[#171717]">
          Cryptographic Algorithms & Mathematical Simulator
        </h1>
        <p
          dir="rtl"
          className="text-sm text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          أدوات ومحاكيات تفاعلية للتشفير الكلاسيكي والحساب المعياري وخوارزميات الكتل مع تطبيقات امتحانات الميدتيرم الفعلية
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-[#E5E5E5] pb-3">
        {tools.map((t) => {
          const Icon = t.icon;
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-md transition-colors ${
                isActive
                  ? 'border border-[#171717] bg-[#171717] text-[#FFFFFF]'
                  : 'border border-[#E5E5E5] bg-[#FFFFFF] text-[#525252] hover:bg-[#FAFAFA] hover:text-[#171717]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tool View */}
      <div className="border border-[#E5E5E5] rounded-lg p-6 bg-[#FFFFFF] shadow-sm">
        {activeTab === 'feistel' && (
          <div className="space-y-6">
            <div className="border-b border-[#E5E5E5] pb-4 space-y-1">
              <h2 className="text-lg font-bold text-[#171717]">Feistel Network Single Round Execution & Invertibility</h2>
              <p className="text-xs text-[#525252]">
                Interactive step-by-step simulator of a Feistel cipher round with 8-bit input (`1101 0010`), 4-bit key (`1111`), XOR round function, non-colliding Feistel swap, and Decryption Symmetry proof.
              </p>
            </div>
            <FeistelRoundVisualizer />
          </div>
        )}

        {activeTab === 'caesar' && (
          <div className="space-y-6">
            <div className="border-b border-[#E5E5E5] pb-4 space-y-1">
              <h2 className="text-lg font-bold text-[#171717]">Caesar Shift Cipher & Cryptanalysis</h2>
              <p className="text-xs text-[#525252]">
                Encrypt/decrypt using shift \(k \in [0, 25]\). Inspect complete 25-key brute-force frequency analysis table.
              </p>
            </div>
            <CaesarTool />
          </div>
        )}

        {activeTab === 'playfair' && (
          <div className="space-y-6">
            <div className="border-b border-[#E5E5E5] pb-4 space-y-1">
              <h2 className="text-lg font-bold text-[#171717]">Playfair Digram Cipher (5×5 Matrix)</h2>
              <p className="text-xs text-[#525252]">
                Keyword matrix generator, duplicate letter suppression, I/J cell merging, 'X' digram padding, and directional encryption rules.
              </p>
            </div>
            <PlayfairTool />
          </div>
        )}

        {activeTab === 'hill' && (
          <div className="space-y-6">
            <div className="border-b border-[#E5E5E5] pb-4 space-y-1">
              <h2 className="text-lg font-bold text-[#171717]">Hill Cipher Matrix Multiplier (Mod 26)</h2>
              <p className="text-xs text-[#525252]">
                Computes matrix determinant, check \(\gcd(d, 26) = 1\), and matrix dot-product step-by-step. Includes presets for Midterm 2022 ("saf" → "HDS") and Midterm 2020 ("Sec" → "e s g").
              </p>
            </div>
            <HillTool />
          </div>
        )}

        {activeTab === 'vigenere' && (
          <div className="space-y-6">
            <div className="border-b border-[#E5E5E5] pb-4 space-y-1">
              <h2 className="text-lg font-bold text-[#171717]">Vigenère Cipher & Autokey Mode</h2>
              <p className="text-xs text-[#525252]">
                Compare classic repeating keyword polyalphabetic substitution against Claude Shannon's Autokey mode with character arithmetic.
              </p>
            </div>
            <VigenereTool />
          </div>
        )}

        {activeTab === 'euclidean' && (
          <div className="space-y-6">
            <div className="border-b border-[#E5E5E5] pb-4 space-y-1">
              <h2 className="text-lg font-bold text-[#171717]">Euclidean Algorithm & Extended Tableau</h2>
              <p className="text-xs text-[#525252]">
                Computes \(\gcd(a, b)\) division sequence and Extended Euclidean Tableau (Table 2.4 format) for Bézout coefficients \(x, y\) and modular inverse \(b^{-1} \pmod a\).
              </p>
            </div>
            <EuclideanTool />
          </div>
        )}

        {activeTab === 'modcalc' && (
          <div className="space-y-6">
            <div className="border-b border-[#E5E5E5] pb-4 space-y-1">
              <h2 className="text-lg font-bold text-[#171717]">Number Theory Suite (Modular, Euler Totient & CRT)</h2>
              <p className="text-xs text-[#525252]">
                Modular operations, Euler totient \(\phi(n)\) coprime list, and Chinese Remainder Theorem simultaneous system solver.
              </p>
            </div>
            <ModCalcTool />
          </div>
        )}

        {activeTab === 'des-sbox' && (
          <div className="space-y-6">
            <div className="border-b border-[#E5E5E5] pb-4 space-y-1">
              <h2 className="text-lg font-bold text-[#171717]">DES S-Box Lookup & Bit Router</h2>
              <p className="text-xs text-[#525252]">
                Visualizes 6-bit input splitting: outer bits (bit 1 &amp; bit 6) select the row, inner bits (bits 2,3,4,5) select the column. Verifies Midterm 2020 problem (101111)₂ → Row 3, Col 7 = 2 = 0010₂.
              </p>
            </div>
            <DesSBoxTool />
          </div>
        )}

        {activeTab === 'modes' && (
          <div className="space-y-6">
            <div className="border-b border-[#E5E5E5] pb-4 space-y-1">
              <h2 className="text-lg font-bold text-[#171717]">Block Cipher Modes of Operation Simulator</h2>
              <p className="text-xs text-[#525252]">
                Interactive simulation of ECB cut-and-paste tampering, CBC initialization vector chaining, and ciphertext transmission bit-flip error propagation.
              </p>
            </div>
            <ModesSimulator />
          </div>
        )}
      </div>
    </div>
  );
}
