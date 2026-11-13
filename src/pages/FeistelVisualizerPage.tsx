import React, { useState } from 'react';
import {
  Cpu,
  Layers,
  ShieldCheck,
  Binary,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  RotateCcw,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FeistelRoundVisualizer from '../components/tools/FeistelRoundVisualizer';

export default function FeistelVisualizerPage(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<'simulator' | 'theory' | 'proof' | 'quiz'>('simulator');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-mono text-[#686868] border-b border-[#E2E2DF] pb-4">
        <Link to="/study" className="hover:text-[#222222] transition-colors">
          Curriculum
        </Link>
        <span>/</span>
        <Link to="/study" className="hover:text-[#222222] transition-colors">
          Unit 4: Block Ciphers
        </Link>
        <span>/</span>
        <span className="text-[#222222] font-semibold">
          Feistel Network Round Simulator
        </span>
      </nav>

      {/* Header Banner */}
      <div className="border border-[#E2E2DF] bg-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-[#686868] uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-[#222222]" />
              <span>Interactive Cryptographic Laboratory · مختبر خوارزميات التشفير</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#222222]">
              Feistel Cipher Network: Single Round Execution & Invertibility
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-[#E8E8E5] text-[#222222] border border-[#D4D4D0]">
              Stallings 4.1 & Midterm 2022
            </span>
          </div>
        </div>

        <p
          className="text-sm sm:text-base text-[#505050] font-serif leading-relaxed"
          dir="rtl"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          محاكي تفاعلي عالي الدقة لشرح دورة واحدة من «شبكة فايستل» (Feistel Network) بالمعطيات الرقمية الدقيقة (كتلة دخل 8 بت ومفتاح دورة 4 بت)، مع تتبع مسار النصف الآمن (Safe Track)، وبوابة XOR، ودالة الدورة F، والبرهان الرياضي لقابلية فك التشفير دون الحاجة لمعكوس الدالة.
        </p>

        {/* Quick Nav Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E2E2DF]">
          {[
            { id: 'simulator', label: 'Interactive Simulator', labelAr: 'المحاكي التفاعلي', icon: Zap },
            { id: 'theory', label: 'Concrete Example & Steps', labelAr: 'المسألة وخطوات الحل', icon: BookOpen },
            { id: 'proof', label: 'Mathematical Reversibility Proof', labelAr: 'برهان القابلية للعكس', icon: Sparkles },
            { id: 'quiz', label: 'Exam Self-Check', labelAr: 'اختبار الفهم الامتحاني', icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#222222] text-white shadow-xs'
                    : 'bg-[#F7F7F5] text-[#505050] hover:bg-[#ECEDEB] hover:text-[#222222] border border-[#E2E2DF]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main View: Simulator Tab */}
      {activeTab === 'simulator' && (
        <div className="space-y-6">
          <FeistelRoundVisualizer />

          {/* Quick Specs Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-xl border border-[#E2E2DF] space-y-1.5">
              <span className="text-[11px] font-mono uppercase text-[#686868]">Concrete Input Parameters</span>
              <div className="font-mono text-sm font-bold text-[#222222]">
                Input: 1101 0010₂ (8 bits)
              </div>
              <p className="text-xs text-[#505050]">
                Left half L₀ = <code className="text-blue-600 font-bold">1101</code>, Right half R₀ = <code className="text-emerald-600 font-bold">0010</code>.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#E2E2DF] space-y-1.5">
              <span className="text-[11px] font-mono uppercase text-[#686868]">Round Subkey & Function</span>
              <div className="font-mono text-sm font-bold text-[#222222]">
                K₁ = 1111₂ · F(R, K) = R ⊕ K
              </div>
              <p className="text-xs text-[#505050]">
                F output: <code className="text-purple-600 font-bold">0010 ⊕ 1111 = 1101</code>.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#E2E2DF] space-y-1.5">
              <span className="text-[11px] font-mono uppercase text-[#686868]">Swap & Output Block</span>
              <div className="font-mono text-sm font-bold text-[#222222]">
                L₁ = 0010₂, R₁ = 0000₂
              </div>
              <p className="text-xs text-[#505050]">
                Merged round 1 output: <code className="text-emerald-600 font-bold">0010 0000₂</code>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Theory & Concrete Steps Tab */}
      {activeTab === 'theory' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-[#E2E2DF] space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#686868]">Official Stallings Example</span>
              <h3 className="text-lg font-bold text-[#222222]">
                The Exact 8-bit Feistel Round Calculations
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#505050] leading-relaxed">
              In this standard 8-bit model, each half has length \(w = 4\) bits. Follow the arithmetic step by step:
            </p>

            <ol className="space-y-3 font-mono text-xs text-[#222222]">
              <li className="p-3 bg-[#F7F7F5] rounded-xl border border-[#E2E2DF] space-y-1">
                <div className="font-bold text-[#222222]">1. Splitting the 8-bit Plaintext Block:</div>
                <div className="text-[#505050]">
                  Input: <span className="font-bold">1101 0010₂</span>
                </div>
                <div className="text-blue-600 font-semibold">
                  L₀ = 1101₂ (Bits 7 to 4)
                </div>
                <div className="text-emerald-600 font-semibold">
                  R₀ = 0010₂ (Bits 3 to 0)
                </div>
              </li>

              <li className="p-3 bg-[#F7F7F5] rounded-xl border border-[#E2E2DF] space-y-1">
                <div className="font-bold text-[#222222]">2. Round Function Computation: F(R₀, K₁)</div>
                <div className="text-[#505050]">
                  Given definition: F(R, K) = R ⊕ K with K₁ = 1111₂
                </div>
                <div className="text-purple-600 font-semibold">
                  F(0010, 1111) = 0010 ⊕ 1111 = 1101₂
                </div>
              </li>

              <li className="p-3 bg-[#F7F7F5] rounded-xl border border-[#E2E2DF] space-y-1">
                <div className="font-bold text-[#222222]">3. XOR Mixing with Left Half:</div>
                <div className="text-[#505050]">
                  R₁' = L₀ ⊕ F(R₀, K₁)
                </div>
                <div className="text-rose-600 font-semibold">
                  1101₂ ⊕ 1101₂ = 0000₂
                </div>
              </li>

              <li className="p-3 bg-[#F7F7F5] rounded-xl border border-[#E2E2DF] space-y-1">
                <div className="font-bold text-[#222222]">4. Feistel Crossover Interchange (Swap):</div>
                <div className="text-emerald-600 font-semibold">
                  L₁ = R₀ = 0010₂ (Passed unchanged along the Safe Track!)
                </div>
                <div className="text-rose-600 font-semibold">
                  R₁ = L₀ ⊕ F = 0000₂
                </div>
              </li>

              <li className="p-3 bg-[#F7F7F5] rounded-xl border border-[#E2E2DF] space-y-1">
                <div className="font-bold text-[#222222]">5. Concatenation of Final Output:</div>
                <div className="text-emerald-700 font-bold text-sm">
                  Output Block = L₁ ∥ R₁ = 0010 0000₂
                </div>
              </li>
            </ol>
          </div>

          {/* Academic Rubric & Pitfalls */}
          <div className="p-6 bg-white rounded-2xl border border-[#E2E2DF] space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#686868]">University Exam Points</span>
              <h3 className="text-lg font-bold text-[#222222]">
                Key Grading Criteria & Common Traps
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#505050]">
              <div className="p-3 bg-[#F7F7F5] rounded-xl border border-[#E2E2DF] space-y-1">
                <span className="font-bold text-[#222222] block">
                  1. The "Safe Track" Principle:
                </span>
                <p>
                  In every Feistel round, exactly one half passes through the round without any cryptographic modification whatsoever (L_i = R_{'{i-1}'}). This guarantees that half of the input is preserved intact for the reverse XOR cancellation.
                </p>
              </div>

              <div className="p-3 bg-[#FFF1A6]/30 rounded-xl border border-[#E2E2DF] space-y-1">
                <span className="font-bold text-[#222222] flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Common Exam Trap: Invertibility of Function F
                </span>
                <p className="text-xs">
                  Students frequently lose points assuming that \(F\) must be bijective or invertible. <strong>It does not!</strong> In fact, \(F\) is almost never invertible in real ciphers (e.g. DES uses 8-to-6 bit compressive and non-linear S-boxes).
                </p>
              </div>

              <div className="p-3 bg-[#F7F7F5] rounded-xl border border-[#E2E2DF] space-y-1">
                <span className="font-bold text-[#222222] block">
                  2. Decryption Subkey Schedule:
                </span>
                <p>
                  Because the circuit hardware is completely identical for encryption and decryption, a Feistel cipher requires only that the subkeys be supplied in <strong>reverse order</strong> (\(K_{16}, K_{15}, \dots, K_1\)).
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mathematical Reversibility Proof Tab */}
      {activeTab === 'proof' && (
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#E2E2DF] space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-[#686868]">Formal Proof</span>
            <h3 className="text-xl font-bold text-[#222222]">
              Mathematical Proof of Feistel Decryption Reversibility
            </h3>
            <p className="text-xs sm:text-sm text-[#505050]" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
              البرهان الجبري الصارم على استرجاع النص الأصلي بالكامل دون اشتراط وجود دالة عكسية لـ F
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="p-5 bg-[#F7F7F5] rounded-xl border border-[#E2E2DF] space-y-3 font-mono text-xs">
              <div className="font-bold text-sm text-[#222222]">
                1. Forward Encryption Equations:
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E2E2DF] text-[#222222]">
                L_i = R_{'{i-1}'}
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E2E2DF] text-[#222222]">
                R_i = L_{'{i-1}'} ⊕ F(R_{'{i-1}'}, K_i)
              </div>
            </div>

            <div className="p-5 bg-[#F7F7F5] rounded-xl border border-[#E2E2DF] space-y-3 font-mono text-xs">
              <div className="font-bold text-sm text-[#222222]">
                2. Decryption Inversion Equations:
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E2E2DF] text-[#222222]">
                R_{'{i-1}'} = L_i
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E2E2DF] text-[#222222]">
                L_{'{i-1}'} = R_i ⊕ F(L_i, K_i)
              </div>
            </div>
          </div>

          <div className="p-5 bg-[#0B0F19] text-white rounded-xl border border-[#1F2937] space-y-4 font-mono text-xs sm:text-sm">
            <div className="text-emerald-400 font-bold uppercase tracking-wider text-xs">
              Step-by-Step Algebraic Substitution:
            </div>
            <div className="space-y-2 leading-relaxed">
              <div>
                Substitute <code className="text-blue-400">R_i = L_{'{i-1}'} ⊕ F(R_{'{i-1}'}, K_i)</code> and <code className="text-emerald-400">L_i = R_{'{i-1}'}</code> into the decryption expression for L_{'{i-1}'}:
              </div>
              <div className="p-3 bg-[#111827] rounded-lg border border-[#374151] space-y-1">
                <div className="text-slate-300">
                  L_{'{i-1}'} = R_i ⊕ F(L_i, K_i)
                </div>
                <div className="text-slate-300">
                  = [L_{'{i-1}'} ⊕ F(R_{'{i-1}'}, K_i)] ⊕ F(R_{'{i-1}'}, K_i)
                </div>
                <div className="text-emerald-400 font-bold">
                  = L_{'{i-1}'} ⊕ [F(R_{'{i-1}'}, K_i) ⊕ F(R_{'{i-1}'}, K_i)]
                </div>
                <div className="text-amber-400 font-bold">
                  = L_{'{i-1}'} ⊕ 0 = L_{'{i-1}'}  ✓ (Q.E.D.)
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Exam Quiz Self-Check Tab */}
      {activeTab === 'quiz' && (
        <div className="p-6 bg-white rounded-2xl border border-[#E2E2DF] space-y-6 max-w-2xl">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-[#686868]">Exam Practice</span>
            <h3 className="text-lg font-bold text-[#222222]">
              Midterm Exam Question: Feistel Output Verification
            </h3>
            <p className="text-xs text-[#505050]">
              Given 8-bit plaintext block <code>1101 0010</code>, round key K₁ = <code>1111</code>, and F(R, K) = R ⊕ K. What is the output of round 1?
            </p>
          </div>

          <div className="space-y-2.5">
            {[
              { id: 0, text: '0010 0000₂', correct: true },
              { id: 1, text: '1101 1111₂', correct: false },
              { id: 2, text: '0000 0010₂', correct: false },
              { id: 3, text: '1111 0000₂', correct: false },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  setSelectedAnswer(opt.id);
                  setShowExplanation(true);
                }}
                className={`w-full text-left p-3.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-between ${
                  selectedAnswer === opt.id
                    ? opt.correct
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold'
                      : 'bg-rose-50 border-rose-500 text-rose-900 font-bold'
                    : 'bg-[#F7F7F5] border-[#E2E2DF] text-[#222222] hover:bg-[#ECEDEB]'
                }`}
              >
                <span>{opt.text}</span>
                {selectedAnswer === opt.id && (
                  <span>{opt.correct ? '✓ Correct!' : '✗ Incorrect'}</span>
                )}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="p-4 bg-[#F7F7F5] rounded-xl border border-[#E2E2DF] text-xs text-[#505050] space-y-1.5">
              <span className="font-bold text-[#222222] block">Step-by-Step Solution:</span>
              <p>
                1. L₀ = 1101, R₀ = 0010.
                <br />
                2. F(0010, 1111) = 0010 ⊕ 1111 = 1101.
                <br />
                3. XOR with L₀: 1101 ⊕ 1101 = 0000 (R₁).
                <br />
                4. Swap: L₁ = R₀ = 0010, R₁ = 0000.
                <br />
                5. Concatenation: 0010 0000₂.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
