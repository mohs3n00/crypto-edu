import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Info,
  Sliders,
  Volume2,
  VolumeX,
  CheckCircle2,
  ArrowRight,
  Repeat,
  Binary,
  HelpCircle,
  Zap,
} from 'lucide-react';

export interface FeistelState {
  plaintext: string; // 8 bits e.g. "11010010"
  key: string; // 4 bits e.g. "1111"
}

// Subtle Web Audio synthesizer for tactile UI feedback
class SoundFX {
  private ctx: AudioContext | null = null;
  public enabled: boolean = false;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playStep(freq = 440) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.13);
    } catch {
      // Audio autoplay restrictions
    }
  }

  playSuccess() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.03, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.26);
      });
    } catch {
      // Audio autoplay restrictions
    }
  }
}

const sfx = new SoundFX();

// Pure bitwise helper functions
function xorStrings(a: string, b: string): string {
  let result = '';
  const len = Math.max(a.length, b.length);
  const padA = a.padStart(len, '0');
  const padB = b.padStart(len, '0');
  for (let i = 0; i < len; i++) {
    result += padA[i] === padB[i] ? '0' : '1';
  }
  return result;
}

export default function FeistelRoundVisualizer(): React.ReactElement {
  // Mode: Encryption vs Decryption Symmetry
  const [mode, setMode] = useState<'encryption' | 'decryption'>('encryption');

  // Input states (default is exact prompt specifications)
  const DEFAULT_PLAINTEXT = '11010010';
  const DEFAULT_KEY = '1111';

  const [rawPlaintext, setRawPlaintext] = useState<string>(DEFAULT_PLAINTEXT);
  const [rawKey, setRawKey] = useState<string>(DEFAULT_KEY);

  // Active step in stepper (0 through 6)
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playSpeed, setPlaySpeed] = useState<number>(1800); // ms per step
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Stepper timer
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= 6) {
            setIsPlaying(false);
            sfx.playSuccess();
            return 6;
          }
          const next = prev + 1;
          sfx.playStep(350 + next * 60);
          return next;
        });
      }, playSpeed);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, playSpeed]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === 'ArrowRight' || e.key === 'l') {
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'h') {
        goToPrev();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Compute dynamic mathematical values based on mode & inputs
  // Clean inputs
  const cleanPT = rawPlaintext.padEnd(8, '0').slice(0, 8);
  const cleanK = rawKey.padEnd(4, '0').slice(0, 4);

  // Forward Round 1 Encryption values
  const encL0 = cleanPT.slice(0, 4); // "1101"
  const encR0 = cleanPT.slice(4, 8); // "0010"
  const encK1 = cleanK; // "1111"
  const encFOut = xorStrings(encR0, encK1); // 0010 XOR 1111 = 1101
  const encXorOut = xorStrings(encL0, encFOut); // 1101 XOR 1101 = 0000 (R1)
  const encL1 = encR0; // 0010
  const encR1 = encXorOut; // 0000
  const encFinalOutput = encL1 + encR1; // "00100000"

  // Decryption Symmetry values
  // In decryption mode: Input is the ciphertext C = L1 || R1 = 0010 0000
  // Feeding ciphertext into Feistel round with K1:
  // In standard Feistel decryption:
  // Decryption Input Left Half = R1 = 0000, Right Half = L1 = 0010
  // Or when fed directly into the identical circuit:
  // Right input is 0010 (= L1), which enters F(0010, 1111) = 1101.
  // Left input is 0000 (= R1), which is XORed with F(0010, 1111) = 0000 XOR 1101 = 1101 (= L0)!
  // And the Right input 0010 passes untouched = 0010 (= R0)!
  const decInput = encFinalOutput;
  const decL_in = encR1; // "0000"
  const decR_in = encL1; // "0010"
  const decFOut = xorStrings(decR_in, encK1); // 0010 XOR 1111 = 1101
  const decXorOut = xorStrings(decL_in, decFOut); // 0000 XOR 1101 = 1101 (recovers L0!)
  const decRecoveredL0 = decXorOut; // "1101"
  const decRecoveredR0 = decR_in; // "0010"
  const decFinalOutput = decRecoveredL0 + decRecoveredR0; // "11010010" (Matches original plaintext!)

  // Select active values based on current active tab/mode
  const isDec = mode === 'decryption';
  const activeInputBlock = isDec ? `${decL_in} ${decR_in}` : `${encL0} ${encR0}`;
  const activeLeft = isDec ? decL_in : encL0;
  const activeRight = isDec ? decR_in : encR0;
  const activeKey = encK1;
  const activeFOut = isDec ? decFOut : encFOut;
  const activeXorOut = isDec ? decXorOut : encXorOut;
  const activeL1 = isDec ? decRecoveredR0 : encL1;
  const activeR1 = isDec ? decRecoveredL0 : encR1;
  const activeFinalOutput = isDec ? `${decRecoveredL0} ${decRecoveredR0}` : `${encL1} ${encR1}`;

  // Steps definition
  const steps = [
    {
      id: 0,
      title: isDec ? 'Ciphertext Input Block' : '8-bit Plaintext Input Block',
      titleAr: isDec ? 'كتلة شفرة الدخل (8 بت)' : 'كتلة النص الأصلي للدخل (8 بت)',
      desc: isDec
        ? 'Feed the output of encryption (0010 0000) back into the Feistel network for decryption.'
        : 'The initial 8-bit plaintext block (1101 0010) enters the single Feistel round.',
      formula: isDec ? 'C = R_1 \\parallel L_1 = 0000\\ 0010_2' : 'P = 1101\\ 0010_2',
    },
    {
      id: 1,
      title: 'Equal Halving / The 4-bit Split',
      titleAr: 'تقسيم الكتلة لنصفين متساويين (4 بت لكل نصف)',
      desc: isDec
        ? 'The block splits into Left Half (0000) and Right Half (0010).'
        : 'The 8-bit block is sliced down the middle into Left Half L₀ (1101) and Right Half R₀ (0010).',
      formula: isDec ? 'L_{dec} = 0000_2, \\; R_{dec} = 0010_2' : 'L_0 = 1101_2, \\; R_0 = 0010_2',
    },
    {
      id: 2,
      title: 'Right Half Branches & Key Ingestion',
      titleAr: 'تفرع النصف الأيمن وتغذية مفتاح الدورة',
      desc: isDec
        ? 'R_dec (0010) branches into the Safe Track and enters the Round Function F with subkey K₁ (1111).'
        : 'R₀ (0010) forks: one path enters the F-Box with Round Key K₁ (1111), while the other bypasses untouched.',
      formula: 'F_{in} = (R, K_1) = (0010_2, 1111_2)',
    },
    {
      id: 3,
      title: 'Round Function Computation: F(R, K)',
      titleAr: 'حساب دالة الدورة غير الخطية: F(R, K)',
      desc: `The round function evaluates F(R, K) = R ⊕ K: 0010 ⊕ 1111 = ${activeFOut}.`,
      formula: `F(0010_2, 1111_2) = 0010_2 \\oplus 1111_2 = ${activeFOut}_2`,
    },
    {
      id: 4,
      title: 'XOR Gate Mixing: Left Half ⊕ F',
      titleAr: 'الدمج ببوابة XOR: النصف الأيسر ⊕ خرج دالة F',
      desc: isDec
        ? `The Left half (0000) is XORed with F-output (1101): 0000 ⊕ 1101 = ${activeXorOut} (Exact L₀ restored!).`
        : `L₀ (1101) meets F-output (1101) inside XOR gate: 1101 ⊕ 1101 = ${activeXorOut}.`,
      formula: isDec
        ? 'R_1 \\oplus F(L_1, K_1) = 0000_2 \\oplus 1101_2 = 1101_2 = L_0'
        : 'L_0 \\oplus F(R_0, K_1) = 1101_2 \\oplus 1101_2 = 0000_2 = R_1',
    },
    {
      id: 5,
      title: 'The Feistel Swap (Crossover Interchange)',
      titleAr: 'تبديل فايستل المتقاطع (Feistel Swap)',
      desc: isDec
        ? 'Crossover: The untouched right half passes to R₀ (0010), while the XOR result forms L₀ (1101).'
        : 'Crossover: R₀ (0010) passes safely to become L₁ (badge: Passed unchanged), and the XOR result becomes R₁ (0000).',
      formula: isDec ? 'R_0 = 0010_2, \\; L_0 = 1101_2' : 'L_1 = R_0 = 0010_2, \\; R_1 = 0000_2',
    },
    {
      id: 6,
      title: isDec ? 'Plaintext Restored! (Symmetry Complete)' : 'Final 8-bit Round Output Assembled',
      titleAr: isDec ? 'استرجاع النص الأصلي بالكامل! (اكتمال التماثل)' : 'تجميع كتلة الخرج النهائية (8 بت)',
      desc: isDec
        ? 'Both halves are reassembled into 1101 0010 — exactly equal to the initial plaintext without inverting F!'
        : 'L₁ (0010) and R₁ (0000) are concatenated to form the final 8-bit ciphertext block: 0010 0000.',
      formula: isDec ? 'P_{restored} = L_0 \\parallel R_0 = 1101\\ 0010_2' : 'C = L_1 \\parallel R_1 = 0010\\ 0000_2',
    },
  ];

  const goToNext = () => {
    if (currentStep < 6) {
      setCurrentStep((p) => p + 1);
      sfx.playStep(400 + (currentStep + 1) * 50);
    }
  };

  const goToPrev = () => {
    if (currentStep > 0) {
      setCurrentStep((p) => p - 1);
      sfx.playStep(400 + (currentStep - 1) * 50);
    }
  };

  const resetSimulation = () => {
    setCurrentStep(0);
    setIsPlaying(false);
    sfx.playStep(300);
  };

  const togglePlay = () => {
    if (currentStep >= 6) {
      setCurrentStep(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sfx.enabled = next;
    if (next) sfx.playStep(520);
  };

  const toggleBit = (type: 'pt' | 'k', index: number) => {
    if (type === 'pt') {
      const arr = cleanPT.split('');
      arr[index] = arr[index] === '1' ? '0' : '1';
      setRawPlaintext(arr.join(''));
    } else {
      const arr = cleanK.split('');
      arr[index] = arr[index] === '1' ? '0' : '1';
      setRawKey(arr.join(''));
    }
  };

  const resetToStandardPrompt = () => {
    setRawPlaintext(DEFAULT_PLAINTEXT);
    setRawKey(DEFAULT_KEY);
    setCurrentStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="w-full bg-[#0B0F19] text-[#F3F4F6] rounded-2xl border border-[#1F2937] shadow-2xl overflow-hidden font-sans select-none transition-all">
      {/* Top Banner & Header */}
      <div className="bg-[#111827]/90 backdrop-blur border-b border-[#1F2937] px-6 py-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#3B82F6]/10 text-[#60A5FA] border border-[#3B82F6]/30">
                <Cpu className="w-3.5 h-3.5" />
                FEISTEL CIPHER NETWORK · 8-BIT SPECIFICATION
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-[#10B981]/10 text-[#34D399] border border-[#10B981]/30">
                <ShieldCheck className="w-3 h-3" />
                Stallings Ch. 4 / Section 4.1
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>Feistel Round Architecture & Reversibility Visualizer</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF]" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
              المحاكي التفاعلي لدورة شبكة فايستل الكلاسيكية والبرهان الرياضي لقابلية فك التشفير التامة دون الحاجة لمعكوس الدالة
            </p>
          </div>

          {/* Mode Selector & Audio Toggle */}
          <div className="flex items-center gap-2.5 self-start lg:self-center">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Mute Audio Effects' : 'Enable Audio Feedback'}
              className={`p-2 rounded-lg border transition-all ${
                soundEnabled
                  ? 'bg-[#10B981]/20 border-[#10B981]/50 text-[#34D399]'
                  : 'bg-[#1F2937]/60 border-[#374151] text-[#9CA3AF] hover:text-white'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Mode Switcher */}
            <div className="flex p-1 bg-[#1F2937] rounded-xl border border-[#374151]">
              <button
                onClick={() => {
                  setMode('encryption');
                  setCurrentStep(0);
                  setIsPlaying(false);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  mode === 'encryption'
                    ? 'bg-[#3B82F6] text-white shadow-md shadow-[#3B82F6]/30'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Round 1 Encryption</span>
              </button>
              <button
                onClick={() => {
                  setMode('decryption');
                  setCurrentStep(0);
                  setIsPlaying(false);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  mode === 'decryption'
                    ? 'bg-[#10B981] text-white shadow-md shadow-[#10B981]/30'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                <Repeat className="w-3.5 h-3.5" />
                <span>Decryption Symmetry</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Parameter Bar & Interactive Bit Toggles */}
        <div className="mt-4 pt-4 border-t border-[#1F2937] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4">
            {/* Input Plaintext / Ciphertext Bits */}
            <div className="flex items-center gap-2 bg-[#1F2937]/50 px-3 py-1.5 rounded-lg border border-[#374151]">
              <span className="text-[#9CA3AF] font-mono font-medium">
                {mode === 'encryption' ? 'Plaintext (8b):' : 'Ciphertext (8b):'}
              </span>
              <div className="flex items-center gap-1">
                {(mode === 'encryption' ? cleanPT : decInput).split('').map((bit, idx) => (
                  <button
                    key={`bit-pt-${idx}`}
                    onClick={() => mode === 'encryption' && toggleBit('pt', idx)}
                    disabled={mode === 'decryption'}
                    title={mode === 'encryption' ? `Click to flip bit ${7 - idx}` : 'Generated ciphertext'}
                    className={`w-6 h-6 rounded flex items-center justify-center font-mono font-bold text-xs transition-all ${
                      idx < 4
                        ? 'bg-[#3B82F6]/20 text-[#60A5FA] border border-[#3B82F6]/40 hover:bg-[#3B82F6]/40'
                        : 'bg-[#10B981]/20 text-[#34D399] border border-[#10B981]/40 hover:bg-[#10B981]/40'
                    } ${idx === 3 ? 'mr-1.5' : ''}`}
                  >
                    {bit}
                  </button>
                ))}
              </div>
            </div>

            {/* Round Key K1 Bits */}
            <div className="flex items-center gap-2 bg-[#1F2937]/50 px-3 py-1.5 rounded-lg border border-[#374151]">
              <span className="text-[#9CA3AF] font-mono font-medium">Round Key K₁ (4b):</span>
              <div className="flex items-center gap-1">
                {cleanK.split('').map((bit, idx) => (
                  <button
                    key={`bit-k-${idx}`}
                    onClick={() => toggleBit('k', idx)}
                    title={`Click to flip key bit ${3 - idx}`}
                    className="w-6 h-6 rounded flex items-center justify-center font-mono font-bold text-xs bg-[#F59E0B]/20 text-[#FBBF24] border border-[#F59E0B]/40 hover:bg-[#F59E0B]/40 transition-all"
                  >
                    {bit}
                  </button>
                ))}
              </div>
            </div>

            {/* Reset to standard preset */}
            {(rawPlaintext !== DEFAULT_PLAINTEXT || rawKey !== DEFAULT_KEY) && (
              <button
                onClick={resetToStandardPrompt}
                className="text-[11px] text-[#9CA3AF] hover:text-white underline decoration-dotted flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                Reset to 1101 0010 & 1111
              </button>
            )}
          </div>

          {/* Quick status pill */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#9CA3AF]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>Step {currentStep} of 6</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Circuit & Breakdown Stage */}
      <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Circuit Board (SVG + Animated Paths) */}
        <div className="lg:col-span-7 bg-[#0F172A]/70 rounded-2xl border border-[#1E293B] p-4 sm:p-6 relative overflow-hidden flex flex-col items-center shadow-inner">
          {/* Subtle Ambient Background Grids */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B15_1px,transparent_1px),linear-gradient(to_bottom,#1E293B15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Circuit Top State Header */}
          <div className="w-full flex items-center justify-between text-xs font-mono text-[#9CA3AF] mb-3 z-10">
            <span className="flex items-center gap-1.5 text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Left Track (L)
            </span>
            <span className="bg-[#1E293B] px-2.5 py-0.5 rounded-full text-[11px] border border-[#334155] text-slate-300">
              Round Function: F(R, K) = R ⊕ K
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              Right Track (R)
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </span>
          </div>

          {/* SVG Feistel Circuit Diagram */}
          <div className="w-full max-w-[540px] relative select-none">
            <svg
              viewBox="0 0 540 680"
              className="w-full h-auto overflow-visible font-mono"
              style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.4))' }}
            >
              <defs>
                {/* Arrow markers */}
                <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#38BDF8" />
                </marker>
                <marker id="arrow-emerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#34D399" />
                </marker>
                <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#FBBF24" />
                </marker>
                <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#C084FC" />
                </marker>
                <marker id="arrow-rose" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1 L 8 5 L 0 9 z" fill="#F43F5E" />
                </marker>

                {/* Glow Filters */}
                <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Linear Gradients for paths */}
                <linearGradient id="grad-r-to-l" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#34D399" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
                <linearGradient id="grad-xor-to-r" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F43F5E" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
              </defs>

              {/* =========================================================================
                  1. HEADER / 8-BIT INPUT BLOCK (Top Register at Y=20 to Y=68)
                 ========================================================================= */}
              <g
                className="cursor-pointer transition-transform hover:scale-[1.01]"
                onMouseEnter={() => setHoveredNode('input-block')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Outer 8-bit frame */}
                <rect
                  x="70"
                  y="20"
                  width="400"
                  height="46"
                  rx="10"
                  fill="#1E293B"
                  stroke={currentStep >= 0 ? '#38BDF8' : '#334155'}
                  strokeWidth={currentStep === 0 ? '2.5' : '1.5'}
                  filter={currentStep === 0 ? 'url(#glow-blue)' : undefined}
                />
                {/* Left 4 bits container (L0) */}
                <rect x="73" y="23" width="194" height="40" rx="8" fill="rgba(30, 58, 138, 0.3)" stroke="#3B82F6" strokeWidth="1" />
                {/* Right 4 bits container (R0) */}
                <rect x="273" y="23" width="194" height="40" rx="8" fill="rgba(6, 78, 59, 0.3)" stroke="#10B981" strokeWidth="1" />

                {/* Text for 8-bit Input */}
                <text x="170" y="47" textAnchor="middle" fill="#93C5FD" fontSize="13" fontWeight="bold">
                  {mode === 'encryption' ? 'L₀: ' : 'L_dec: '}
                  <tspan fill="#60A5FA" fontWeight="800" fontSize="14">
                    {activeLeft}
                  </tspan>
                </text>

                {/* Scissor / Cut Divider Line at Center */}
                <line
                  x1="270"
                  y1="20"
                  x2="270"
                  y2="66"
                  stroke={currentStep >= 1 ? '#F43F5E' : '#64748B'}
                  strokeWidth="2"
                  strokeDasharray={currentStep >= 1 ? 'none' : '4 3'}
                />

                <text x="370" y="47" textAnchor="middle" fill="#6EE7B7" fontSize="13" fontWeight="bold">
                  {mode === 'encryption' ? 'R₀: ' : 'R_dec: '}
                  <tspan fill="#34D399" fontWeight="800" fontSize="14">
                    {activeRight}
                  </tspan>
                </text>
              </g>

              {/* Visual Split Cut Badge (Visible on Step 1+) */}
              {currentStep >= 1 && (
                <g className="animate-fade-in">
                  <rect x="238" y="73" width="64" height="20" rx="10" fill="rgba(244, 63, 94, 0.2)" stroke="#F43F5E" strokeWidth="1" />
                  <text x="270" y="87" textAnchor="middle" fill="#FDA4AF" fontSize="9" fontWeight="bold">
                    4b ✂ 4b
                  </text>
                </g>
              )}

              {/* =========================================================================
                  2. SPLIT DOWNWARD ARROWS (From Y=66 to L0/R0 nodes at Y=125)
                 ========================================================================= */}
              {/* Left track path */}
              <path
                d="M 170 66 L 170 120"
                stroke={currentStep >= 1 ? '#38BDF8' : '#334155'}
                strokeWidth={currentStep >= 1 ? '2.5' : '1.5'}
                markerEnd={currentStep >= 1 ? 'url(#arrow-blue)' : undefined}
                className="transition-all duration-300"
              />

              {/* Right track path */}
              <path
                d="M 370 66 L 370 120"
                stroke={currentStep >= 1 ? '#34D399' : '#334155'}
                strokeWidth={currentStep >= 1 ? '2.5' : '1.5'}
                markerEnd={currentStep >= 1 ? 'url(#arrow-emerald)' : undefined}
                className="transition-all duration-300"
              />

              {/* =========================================================================
                  3. L0 AND R0 NODE CARDS (Y=125 to Y=165)
                 ========================================================================= */}
              {/* L0 Card Node */}
              <g
                className="cursor-pointer transition-all"
                onMouseEnter={() => setHoveredNode('L0')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <rect
                  x="115"
                  y="125"
                  width="110"
                  height="42"
                  rx="8"
                  fill="#0F172A"
                  stroke={currentStep >= 1 ? '#38BDF8' : '#334155'}
                  strokeWidth={currentStep === 1 || currentStep === 4 ? '2.5' : '1.5'}
                  filter={currentStep === 1 ? 'url(#glow-blue)' : undefined}
                />
                <text x="170" y="143" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="600">
                  {mode === 'encryption' ? 'LEFT HALF (L₀)' : 'INPUT L_dec'}
                </text>
                <text x="170" y="160" textAnchor="middle" fill="#60A5FA" fontSize="14" fontWeight="800">
                  {activeLeft}
                </text>
              </g>

              {/* R0 Card Node */}
              <g
                className="cursor-pointer transition-all"
                onMouseEnter={() => setHoveredNode('R0')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <rect
                  x="315"
                  y="125"
                  width="110"
                  height="42"
                  rx="8"
                  fill="#0F172A"
                  stroke={currentStep >= 1 ? '#34D399' : '#334155'}
                  strokeWidth={currentStep === 1 || currentStep === 2 ? '2.5' : '1.5'}
                  filter={currentStep === 1 || currentStep === 2 ? 'url(#glow-emerald)' : undefined}
                />
                <text x="370" y="143" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="600">
                  {mode === 'encryption' ? 'RIGHT HALF (R₀)' : 'INPUT R_dec'}
                </text>
                <text x="370" y="160" textAnchor="middle" fill="#34D399" fontSize="14" fontWeight="800">
                  {activeRight}
                </text>
              </g>

              {/* =========================================================================
                  4. R0 BRANCHING: Safe Track & F-Box Path (Step 2+)
                 ========================================================================= */}
              {/* Branch Dot at (370, 195) */}
              {currentStep >= 2 && (
                <circle cx="370" cy="195" r="4.5" fill="#34D399" filter="url(#glow-emerald)" />
              )}

              {/* Straight down path from R0 node to Branch Point */}
              <path
                d="M 370 167 L 370 195"
                stroke={currentStep >= 2 ? '#34D399' : '#334155'}
                strokeWidth={currentStep >= 2 ? '2.5' : '1.5'}
              />

              {/* Branch A: Leftward into the F-Box */}
              <path
                d="M 370 195 L 370 230 L 320 230"
                fill="none"
                stroke={currentStep >= 2 ? '#34D399' : '#334155'}
                strokeWidth={currentStep >= 2 ? '2.5' : '1.5'}
                markerEnd={currentStep >= 2 ? 'url(#arrow-emerald)' : undefined}
                className="transition-all duration-300"
              />

              {/* Round Key K1 Input from the right into F-Box */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode('K1')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <rect
                  x="420"
                  y="260"
                  width="95"
                  height="34"
                  rx="6"
                  fill="#1E293B"
                  stroke={currentStep >= 2 ? '#FBBF24' : '#475569'}
                  strokeWidth="1.5"
                />
                <text x="467" y="275" textAnchor="middle" fill="#FBBF24" fontSize="10" fontWeight="600">
                  KEY (K₁)
                </text>
                <text x="467" y="289" textAnchor="middle" fill="#FDE68A" fontSize="12" fontWeight="800">
                  {activeKey}
                </text>

                {/* Arrow into F-Box from Key */}
                <path
                  d="M 420 277 L 320 277"
                  fill="none"
                  stroke={currentStep >= 2 ? '#FBBF24' : '#334155'}
                  strokeWidth={currentStep >= 2 ? '2.5' : '1.5'}
                  markerEnd={currentStep >= 2 ? 'url(#arrow-amber)' : undefined}
                />
              </g>

              {/* =========================================================================
                  5. THE F-BOX (Round Function) at (210, 215) to (320, 295)
                 ========================================================================= */}
              <g
                className="cursor-pointer transition-all"
                onMouseEnter={() => setHoveredNode('F-box')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Glow backdrop on step 3 */}
                <rect
                  x="210"
                  y="215"
                  width="110"
                  height="80"
                  rx="12"
                  fill="#1E1B4B"
                  stroke={currentStep >= 3 ? '#A855F7' : currentStep >= 2 ? '#6B21A8' : '#334155'}
                  strokeWidth={currentStep === 3 ? '3' : '1.5'}
                  style={{
                    filter: currentStep === 3 ? 'drop-shadow(0 0 12px rgba(168, 85, 247, 0.5))' : 'none',
                  }}
                />

                {/* F(R, K) Label */}
                <text x="265" y="240" textAnchor="middle" fill="#E9D5FF" fontSize="13" fontWeight="bold">
                  F(R, K)
                </text>
                <text x="265" y="256" textAnchor="middle" fill="#C084FC" fontSize="10">
                  R ⊕ K
                </text>

                {/* Bitwise Result indicator inside F-Box */}
                <rect x="225" y="264" width="80" height="22" rx="4" fill="#0F172A" stroke="#9333EA" strokeWidth="1" />
                <text x="265" y="279" textAnchor="middle" fill="#F3E8FF" fontSize="11" fontWeight="800">
                  {currentStep >= 3 ? activeFOut : '????'}
                </text>
              </g>

              {/* F-Box Calculation Badge / Popup next to F-Box */}
              {currentStep >= 3 && (
                <g className="animate-fade-in">
                  <rect x="200" y="303" width="130" height="24" rx="6" fill="rgba(88, 28, 135, 0.8)" stroke="#C084FC" strokeWidth="1" />
                  <text x="265" y="319" textAnchor="middle" fill="#F5D0FE" fontSize="10" fontWeight="bold">
                    {activeRight} ⊕ {activeKey} = {activeFOut}
                  </text>
                </g>
              )}

              {/* =========================================================================
                  6. XOR GATE & LEFT TRACK (Y=215 to Y=350)
                 ========================================================================= */}
              {/* L0 down into XOR gate */}
              <path
                d="M 170 167 L 170 330"
                stroke={currentStep >= 4 ? '#38BDF8' : '#334155'}
                strokeWidth={currentStep >= 4 ? '2.5' : '1.5'}
                markerEnd={currentStep >= 4 ? 'url(#arrow-blue)' : undefined}
                className="transition-all"
              />

              {/* F-box output path exiting to the left towards XOR gate */}
              <path
                d="M 210 255 L 188 255 L 188 335 L 184 340"
                fill="none"
                stroke={currentStep >= 4 ? '#C084FC' : '#334155'}
                strokeWidth={currentStep >= 4 ? '2.5' : '1.5'}
              />

              {/* Path from F-box horizontal directly into XOR at (170, 350) */}
              <path
                d="M 210 255 L 190 255 L 190 350 L 185 350"
                fill="none"
                stroke={currentStep >= 4 ? '#C084FC' : '#334155'}
                strokeWidth={currentStep >= 4 ? '2.5' : '1.5'}
                markerEnd={currentStep >= 4 ? 'url(#arrow-purple)' : undefined}
              />

              {/* The XOR Gate (Explicit Circle ⊕ at 170, 350) */}
              <g
                className="cursor-pointer transition-transform hover:scale-110"
                onMouseEnter={() => setHoveredNode('XOR')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <circle
                  cx="170"
                  cy="350"
                  r="16"
                  fill="#0F172A"
                  stroke={currentStep >= 4 ? '#F43F5E' : '#475569'}
                  strokeWidth={currentStep === 4 ? '3' : '2'}
                  style={{
                    filter: currentStep === 4 ? 'drop-shadow(0 0 10px rgba(244, 63, 94, 0.7))' : 'none',
                  }}
                />
                {/* Horizontal crossbar */}
                <line
                  x1="158"
                  y1="350"
                  x2="182"
                  y2="350"
                  stroke={currentStep >= 4 ? '#FDA4AF' : '#64748B'}
                  strokeWidth="2.5"
                />
                {/* Vertical crossbar */}
                <line
                  x1="170"
                  y1="338"
                  x2="170"
                  y2="362"
                  stroke={currentStep >= 4 ? '#FDA4AF' : '#64748B'}
                  strokeWidth="2.5"
                />
              </g>

              {/* XOR Computation Card / Popup */}
              {currentStep >= 4 && (
                <g className="animate-fade-in">
                  <rect x="25" y="337" width="128" height="26" rx="6" fill="rgba(136, 19, 55, 0.8)" stroke="#F43F5E" strokeWidth="1" />
                  <text x="89" y="354" textAnchor="middle" fill="#FECDD3" fontSize="10" fontWeight="bold">
                    {activeLeft} ⊕ {activeFOut} = {activeXorOut}
                  </text>
                </g>
              )}

              {/* =========================================================================
                  7. THE FEISTEL SWAP (CROSSOVER INTERCHANGE) at Y=366 to Y=510
                 ========================================================================= */}
              {/* Path 1: THE SAFE TRACK (R0 crossing from Right (370) to Left (170)) */}
              {/* This path starts at (370, 195), travels down bypass, then curves diagonally across */}
              <path
                d="M 370 195 L 370 380 C 370 440, 170 430, 170 490 L 170 515"
                fill="none"
                stroke={currentStep >= 5 ? 'url(#grad-r-to-l)' : '#334155'}
                strokeWidth={currentStep >= 5 ? '3' : '1.5'}
                strokeDasharray={currentStep >= 5 ? 'none' : '4 4'}
                markerEnd={currentStep >= 5 ? 'url(#arrow-blue)' : undefined}
                className="transition-all duration-500"
              />

              {/* Safe Track Badge: "Passed unchanged (L1 = R0 = 0010)" */}
              {currentStep >= 5 && (
                <g className="animate-fade-in">
                  <rect
                    x="270"
                    y="405"
                    width="190"
                    height="24"
                    rx="12"
                    fill="rgba(6, 78, 59, 0.9)"
                    stroke="#10B981"
                    strokeWidth="1.2"
                  />
                  <text x="365" y="421" textAnchor="middle" fill="#A7F3D0" fontSize="9.5" fontWeight="bold">
                    {mode === 'encryption'
                      ? '✓ Passed unchanged: L₁ = R₀ = 0010'
                      : '✓ Passed unchanged: R₀ = 0010'}
                  </text>
                </g>
              )}

              {/* Path 2: XOR OUTPUT CROSSING TO RIGHT HALF (R1) */}
              {/* Leaves XOR gate at (170, 366), curves diagonally to (370, 515) */}
              {/* Clean layered curve designed to avoid visual collisions with Safe Track */}
              <path
                d="M 170 366 L 170 385 C 170 455, 370 445, 370 515"
                fill="none"
                stroke={currentStep >= 5 ? 'url(#grad-xor-to-r)' : '#334155'}
                strokeWidth={currentStep >= 5 ? '3' : '1.5'}
                strokeDasharray={currentStep >= 5 ? 'none' : '4 4'}
                markerEnd={currentStep >= 5 ? 'url(#arrow-emerald)' : undefined}
                className="transition-all duration-500"
              />

              {/* Dynamic Animated Pulse along Active Paths */}
              {isPlaying && currentStep >= 5 && (
                <>
                  <circle r="4" fill="#38BDF8">
                    <animateMotion
                      path="M 370 195 L 370 380 C 370 440, 170 430, 170 490 L 170 515"
                      dur="1.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="4" fill="#F43F5E">
                    <animateMotion
                      path="M 170 366 L 170 385 C 170 455, 370 445, 370 515"
                      dur="1.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </>
              )}

              {/* =========================================================================
                  8. NEW HALVES NODES (L1 and R1) at Y=520 to Y=565
                 ========================================================================= */}
              {/* L1 Node (Left: 170) */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode('L1')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <rect
                  x="115"
                  y="520"
                  width="110"
                  height="42"
                  rx="8"
                  fill="#0F172A"
                  stroke={currentStep >= 5 ? '#38BDF8' : '#334155'}
                  strokeWidth={currentStep >= 5 ? '2.5' : '1.5'}
                  filter={currentStep >= 5 ? 'url(#glow-blue)' : undefined}
                />
                <text x="170" y="538" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="600">
                  {mode === 'encryption' ? 'NEW LEFT (L₁ = R₀)' : 'RESTORED L₀'}
                </text>
                <text x="170" y="555" textAnchor="middle" fill="#60A5FA" fontSize="14" fontWeight="800">
                  {currentStep >= 5 ? activeL1 : '????'}
                </text>
              </g>

              {/* R1 Node (Right: 370) */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode('R1')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <rect
                  x="315"
                  y="520"
                  width="110"
                  height="42"
                  rx="8"
                  fill="#0F172A"
                  stroke={currentStep >= 5 ? '#34D399' : '#334155'}
                  strokeWidth={currentStep >= 5 ? '2.5' : '1.5'}
                  filter={currentStep >= 5 ? 'url(#glow-emerald)' : undefined}
                />
                <text x="370" y="538" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="600">
                  {mode === 'encryption' ? 'NEW RIGHT (R₁ = L₀⊕F)' : 'RESTORED R₀'}
                </text>
                <text x="370" y="555" textAnchor="middle" fill="#34D399" fontSize="14" fontWeight="800">
                  {currentStep >= 5 ? activeR1 : '????'}
                </text>
              </g>

              {/* Assembler funnel paths into final 8-bit card */}
              <path
                d="M 170 562 L 170 600"
                stroke={currentStep >= 6 ? '#38BDF8' : '#334155'}
                strokeWidth={currentStep >= 6 ? '2.5' : '1.5'}
                markerEnd={currentStep >= 6 ? 'url(#arrow-blue)' : undefined}
              />
              <path
                d="M 370 562 L 370 600"
                stroke={currentStep >= 6 ? '#34D399' : '#334155'}
                strokeWidth={currentStep >= 6 ? '2.5' : '1.5'}
                markerEnd={currentStep >= 6 ? 'url(#arrow-emerald)' : undefined}
              />

              {/* =========================================================================
                  9. FINAL ASSEMBLER OUTPUT CARD (Y=605 to Y=655)
                 ========================================================================= */}
              <g
                className="cursor-pointer transition-transform hover:scale-[1.01]"
                onMouseEnter={() => setHoveredNode('output-block')}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <rect
                  x="70"
                  y="605"
                  width="400"
                  height="48"
                  rx="10"
                  fill="#0F172A"
                  stroke={currentStep >= 6 ? '#10B981' : '#334155'}
                  strokeWidth={currentStep === 6 ? '3' : '1.5'}
                  filter={currentStep === 6 ? 'url(#glow-emerald)' : undefined}
                />
                {/* L1 half container */}
                <rect x="74" y="609" width="192" height="40" rx="8" fill="rgba(30, 58, 138, 0.25)" stroke="#3B82F6" strokeWidth="1" />
                {/* R1 half container */}
                <rect x="274" y="609" width="192" height="40" rx="8" fill="rgba(6, 78, 59, 0.25)" stroke="#10B981" strokeWidth="1" />

                <text x="170" y="634" textAnchor="middle" fill="#93C5FD" fontSize="13" fontWeight="bold">
                  {mode === 'encryption' ? 'L₁: ' : 'Restored L₀: '}
                  <tspan fill="#60A5FA" fontWeight="800" fontSize="14">
                    {currentStep >= 6 ? activeL1 : '????'}
                  </tspan>
                </text>

                <line x1="270" y1="605" x2="270" y2="653" stroke="#334155" strokeWidth="1.5" />

                <text x="370" y="634" textAnchor="middle" fill="#6EE7B7" fontSize="13" fontWeight="bold">
                  {mode === 'encryption' ? 'R₁: ' : 'Restored R₀: '}
                  <tspan fill="#34D399" fontWeight="800" fontSize="14">
                    {currentStep >= 6 ? activeR1 : '????'}
                  </tspan>
                </text>
              </g>
            </svg>
          </div>

          {/* Circuit Footer Legend */}
          <div className="w-full mt-4 pt-3 border-t border-[#1E293B] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#94A3B8]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded bg-blue-500"></span> Left Half
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded bg-emerald-500"></span> Right Half
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded bg-amber-500"></span> Key K₁
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded bg-purple-500"></span> Function F
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded bg-rose-500"></span> XOR (⊕)
              </span>
            </div>
            <span>Layer-Offset Non-Colliding Swap Bus</span>
          </div>
        </div>

        {/* Right Column: Step-by-Step Explainer & Mathematical Deep Dive */}
        <div className="lg:col-span-5 space-y-6">
          {/* Stepper Controls Card */}
          <div className="bg-[#111827] rounded-2xl border border-[#1F2937] p-5 space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#9CA3AF]">
                  Simulation Control
                </span>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Step {currentStep}: {steps[currentStep].title}</span>
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#1F2937] text-white border border-[#374151]">
                {currentStep + 1} / 7
              </span>
            </div>

            {/* Scrubber / Step Progress Dots */}
            <div className="grid grid-cols-7 gap-1.5 pt-1">
              {steps.map((st, i) => (
                <button
                  key={st.id}
                  onClick={() => {
                    setCurrentStep(i);
                    sfx.playStep(350 + i * 50);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === currentStep
                      ? 'bg-[#3B82F6] ring-2 ring-[#3B82F6]/50'
                      : i < currentStep
                      ? 'bg-[#10B981]'
                      : 'bg-[#374151] hover:bg-[#4B5563]'
                  }`}
                  title={`Jump to step ${i}: ${st.title}`}
                />
              ))}
            </div>

            {/* Step Controls: Prev, Play/Pause, Next, Reset */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                onClick={goToPrev}
                disabled={currentStep === 0}
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#1F2937] border border-[#374151] text-xs font-semibold text-[#D1D5DB] hover:bg-[#374151] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={togglePlay}
                className={`py-2.5 px-5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg ${
                  isPlaying
                    ? 'bg-[#EF4444] text-white hover:bg-[#DC2626] shadow-[#EF4444]/30'
                    : 'bg-[#3B82F6] text-white hover:bg-[#2563EB] shadow-[#3B82F6]/30'
                }`}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Pause' : currentStep >= 6 ? 'Replay' : 'Auto Play'}</span>
              </button>

              <button
                onClick={goToNext}
                disabled={currentStep === 6}
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#1F2937] border border-[#374151] text-xs font-semibold text-[#D1D5DB] hover:bg-[#374151] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-1.5"
              >
                <span>Next Step</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={resetSimulation}
                title="Reset simulation to beginning"
                className="p-2.5 rounded-xl bg-[#1F2937] border border-[#374151] text-[#9CA3AF] hover:text-white hover:bg-[#374151] transition-all"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Speed Control Slider */}
            <div className="flex items-center justify-between text-xs text-[#9CA3AF] pt-2 border-t border-[#1F2937]">
              <span className="flex items-center gap-1 font-mono">
                <Sliders className="w-3.5 h-3.5" />
                Speed:
              </span>
              <div className="flex items-center gap-1 font-mono text-[11px]">
                {[2600, 1800, 900].map((speed, idx) => {
                  const label = ['0.7x', '1.0x', '1.8x'][idx];
                  return (
                    <button
                      key={speed}
                      onClick={() => setPlaySpeed(speed)}
                      className={`px-2 py-0.5 rounded ${
                        playSpeed === speed
                          ? 'bg-[#3B82F6] text-white font-bold'
                          : 'bg-[#1F2937] hover:bg-[#374151] text-[#9CA3AF]'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Step Academic Explanation Card */}
          <div className="bg-[#111827] rounded-2xl border border-[#1F2937] p-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#60A5FA]">
              <Info className="w-4 h-4" />
              <span>Step-by-Step Breakdown / الشرح الأكاديمي</span>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-bold text-white">
                {steps[currentStep].title}
              </h4>
              <p className="text-xs font-medium text-[#93C5FD]" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
                {steps[currentStep].titleAr}
              </p>
              <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                {steps[currentStep].desc}
              </p>
            </div>

            {/* Mathematical Formula Banner */}
            <div className="p-3 bg-[#0B0F19] rounded-xl border border-[#1F2937] font-mono text-xs space-y-1">
              <span className="text-[10px] text-[#9CA3AF] uppercase tracking-wider block">
                Governing Equation:
              </span>
              <div className="text-emerald-400 font-bold text-sm tracking-wide">
                {steps[currentStep].formula}
              </div>
            </div>

            {/* Bitwise Truth Tables for F-Box (Step 3) or XOR Gate (Step 4) */}
            {currentStep === 3 && (
              <div className="p-3.5 bg-[#1E1B4B]/40 rounded-xl border border-[#9333EA]/30 space-y-2 font-mono text-xs">
                <div className="font-bold text-[#E9D5FF] flex items-center justify-between">
                  <span>F-Box Bitwise Truth Table (R ⊕ K):</span>
                  <span className="text-[11px] text-[#C084FC]">4 Bits Parallel</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 text-center text-[11px]">
                  {['b3', 'b2', 'b1', 'b0'].map((b, i) => (
                    <div key={b} className="p-1.5 bg-[#0F172A] rounded border border-[#6B21A8]/40 space-y-0.5">
                      <div className="text-[#9CA3AF] text-[10px]">{b}</div>
                      <div className="text-emerald-400">{activeRight[i]}</div>
                      <div className="text-amber-400">⊕ {activeKey[i]}</div>
                      <div className="border-t border-[#374151] pt-0.5 text-[#C084FC] font-extrabold">
                        = {activeFOut[i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="p-3.5 bg-[#881337]/30 rounded-xl border border-[#F43F5E]/30 space-y-2 font-mono text-xs">
                <div className="font-bold text-[#FECDD3] flex items-center justify-between">
                  <span>XOR Gate Bitwise Mixing (L₀ ⊕ F):</span>
                  <span className="text-[11px] text-[#FDA4AF]">Self-Inverting Property</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 text-center text-[11px]">
                  {['b3', 'b2', 'b1', 'b0'].map((b, i) => (
                    <div key={b} className="p-1.5 bg-[#0F172A] rounded border border-[#9F1239]/40 space-y-0.5">
                      <div className="text-[#9CA3AF] text-[10px]">{b}</div>
                      <div className="text-blue-400">{activeLeft[i]}</div>
                      <div className="text-purple-400">⊕ {activeFOut[i]}</div>
                      <div className="border-t border-[#374151] pt-0.5 text-rose-400 font-extrabold">
                        = {activeXorOut[i]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Final Assembly Summary on Step 6 */}
            {currentStep === 6 && (
              <div className="p-3.5 bg-[#064E3B]/30 rounded-xl border border-[#10B981]/40 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-[#A7F3D0]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {mode === 'encryption'
                      ? 'Round 1 Output Successfully Generated!'
                      : 'Decryption Complete: Initial Plaintext Exactly Restored!'}
                  </span>
                </div>
                <div className="font-mono text-xs text-white bg-[#0F172A] p-2.5 rounded-lg border border-[#374151] flex items-center justify-between">
                  <span className="text-[#9CA3AF]">
                    {mode === 'encryption' ? 'Final Ciphertext:' : 'Recovered Plaintext:'}
                  </span>
                  <span className="font-extrabold text-emerald-400 text-sm">
                    {activeFinalOutput}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Decryption Symmetry & Mathematical Proof Accordion/Card */}
          <div className="bg-[#111827] rounded-2xl border border-[#1F2937] p-5 space-y-3.5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#A78BFA] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>The Mathematical Proof of Reversibility</span>
              </h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40">
                A ⊕ B ⊕ B = A
              </span>
            </div>

            <div className="text-xs text-[#D1D5DB] space-y-2 leading-relaxed">
              <p>
                In a Feistel cipher, decryption uses the <strong>identical circuit and forward function F</strong> without computing any mathematical inverse of F:
              </p>
              <div className="bg-[#0B0F19] p-3 rounded-xl border border-[#374151] font-mono text-[12px] space-y-1.5 text-slate-300">
                <div className="text-blue-300">
                  R₁ ⊕ F(L₁, K₁) = [L₀ ⊕ F(R₀, K₁)] ⊕ F(R₀, K₁)
                </div>
                <div className="text-emerald-400 font-semibold pl-4">
                  = L₀ ⊕ [F(R₀, K₁) ⊕ F(R₀, K₁)]
                </div>
                <div className="text-amber-300 font-bold pl-8">
                  = L₀ ⊕ 0 = L₀ (Exact match: 1101)
                </div>
              </div>
              <p className="text-[#9CA3AF] text-[11px]" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
                نظراً لأن عملية XOR ذاتية الانعكاس، فإن خرج دالة F يُلغي نفسه تلقائياً في دورة فك التشفير، مما يتيح استخدام دوال غير خطية أحادية الاتجاه (مثل S-Boxes و PRNGs).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
