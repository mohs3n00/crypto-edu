import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  AlertTriangle,
  Zap,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Shield,
  Layers,
  Cpu,
} from 'lucide-react';

export default function Revision(): React.ReactElement {
  const examTraps = [
    {
      id: 1,
      title: 'DES Block Size vs. Key Size Trap',
      trap: 'DES uses a 56-bit block and 64-bit key.',
      truth: 'FALSE. DES uses a 64-bit BLOCK and a 56-bit EFFECTIVE KEY (from a 64-bit input where 8 bits are parity bits).',
      truthAr: 'خطأ شائع جداً في الامتحانات: حجم كتلة DES هو 64 بت، بينما طول المفتاح الفعلي هو 56 بت (وليس العكس).',
    },
    {
      id: 2,
      title: 'Stream vs. Block Ciphers in Network Applications',
      trap: 'The vast majority of network-based symmetric cryptographic applications make use of stream ciphers.',
      truth: 'FALSE. The vast majority of network applications (TLS, IPsec, SSH, WPA3) make use of BLOCK ciphers (such as AES and 3DES).',
      truthAr: 'خطأ متكرر في بنك أسئلة Ch4: الغالبية العظمى من تطبيقات التشفير الشبكي تستخدم شفرات الكتل (Block) وليس التدفق.',
    },
    {
      id: 3,
      title: 'SAC and BIC Effect on Confusion',
      trap: 'The strict avalanche criterion (SAC) and bit independence criterion (BIC) weaken the effectiveness of the confusion function.',
      truth: 'FALSE. SAC and BIC STRENGTHEN the non-linearity, confusion, and diffusion of S-boxes and the overall cipher.',
      truthAr: 'خطأ في بنك أسئلة Ch4: معيارا SAC و BIC يقويان ويعززان دالة الخلط والتشتيت، ولا يضعفانها أبداً.',
    },
    {
      id: 4,
      title: 'S-Box 1-Bit Input Difference Output Rule',
      trap: 'If two inputs to an S-box differ in exactly 1 bit, the outputs must differ in exactly 1 bit.',
      truth: 'FALSE. S-box design criteria require outputs to differ by AT LEAST TWO BITS (ideally ~50% of bits change) to prevent linear approximation.',
      truthAr: 'خطأ: إذا اختلف مدخلان لصندوق S-box في بت واحد، يجب أن يختلف المخرجان في بتين على الأقل (وليس بت واحد).',
    },
    {
      id: 5,
      title: 'Caesar Cipher Brute-Force Key Count',
      trap: 'There are 26 keys that an attacker must test in Caesar cipher brute force.',
      truth: 'FALSE. There are only 25 meaningful keys (1 to 25). Key 0 (or 26) leaves the plaintext completely unchanged.',
      truthAr: 'البحث الشامل في تشفير قيصر يتطلب تجربة 25 مفتاحاً فقط، لأن المفتاح 0 (أو 26) يعيد نفس النص دون أي تغيير.',
    },
    {
      id: 6,
      title: 'Playfair Digram Duplicate Letter Rule',
      trap: 'Encrypting double letters directly as a pair (e.g. "LL" or "EE").',
      truth: 'FALSE. Playfair requires inserting a filler letter (typically "X" or "Q") between identical adjacent letters in a digram (e.g., "BALLOON" → "BA LX LO ON").',
      truthAr: 'قاعدة بليفيل الصارمة: لا يجوز تشفير حرفين متطابقين في نفس الزوج، بل يجب فصلهما بحرف حشو مثل X.',
    },
    {
      id: 7,
      title: 'Hill Cipher Matrix Invertibility Condition',
      trap: 'Any square matrix with non-zero determinant can be used as a Hill cipher key.',
      truth: 'FALSE. The determinant d = det(K) must satisfy gcd(d mod 26, 26) = 1. If det is even or a multiple of 13, the matrix is NOT invertible mod 26.',
      truthAr: 'شرط قابلية عكس مصفوفة هيل: يجب أن يكون محدد المصفوفة أولياً نسبياً مع 26، أي ليس زوجياً ولا يقبل القسمة على 13.',
    },
    {
      id: 8,
      title: 'Euler Totient Function for Primes & Products',
      trap: 'phi(p) = p for a prime p.',
      truth: 'FALSE. For any prime p, phi(p) = p - 1. For two distinct primes p and q, phi(pq) = (p - 1)(q - 1).',
      truthAr: 'دالة أويلر للأعداد الأولية: phi(p) = p - 1، ولحاصل ضرب عددين أوليين: phi(pq) = (p-1)(q-1).',
    },
    {
      id: 9,
      title: 'Double-DES Security & Meet-in-the-Middle Attack',
      trap: 'Double-DES with two 56-bit keys provides 112 bits of security (2^112 complexity).',
      truth: 'FALSE. Due to Diffie-Hellman Meet-in-the-Middle attack, Double-DES has an effective security of only 2^57 (2 * 2^56) operations.',
      truthAr: 'هجوم الالتقاء في المنتصف يكسر التشفير المزدوج Double-DES بتعقيد 2^57 فقط بدلاً من 2^112.',
    },
    {
      id: 10,
      title: 'CBC Transmission Error Propagation Limits',
      trap: 'A 1-bit error in ciphertext block C_i corrupts all subsequent plaintext blocks.',
      truth: 'FALSE. In CBC mode, an error in C_i completely corrupts P_i, and flips the corresponding bit in P_{i+1}, but does NOT affect P_{i+2} or beyond (self-recovering error).',
      truthAr: 'في نمط CBC: خطأ بت في الكتلة المشفرة C_i يشوه الكتلة P_i تماماً ويقلب بت مقابل في P_{i+1} فقط، ويتعافى النظام تماماً في P_{i+2}.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-[#E5E5E5] pb-6 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-[#171717]" />
          <span>High-Yield Revision & Exam Traps / المراجعة المركزة والمصائد الامتحانية</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#171717]">
              Final Exam Revision Guide & Traps
            </h1>
            <p
              dir="rtl"
              className="text-sm text-[#525252] font-serif"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              دليل المراجعة السريعة لأهم النقاط الامتحانية وأكثر 10 مصائد تكراراً في امتحانات الميدتيرم وبنوك الأسئلة
            </p>
          </div>
          <Link
            to="/exams"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-semibold hover:bg-[#333333] transition-colors shrink-0"
          >
            <Zap className="w-4 h-4" />
            Launch Midterm Exam
          </Link>
        </div>
      </div>

      {/* Top 10 Exam Traps */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#171717] border-b border-[#E5E5E5] pb-2">
          <AlertTriangle className="w-4 h-4 text-[#171717]" />
          <span>Top 10 Official Exam Traps & Misconceptions</span>
        </div>

        <div className="space-y-4">
          {examTraps.map((trap) => (
            <div
              key={trap.id}
              className="border border-[#E5E5E5] rounded-lg p-5 bg-[#FFFFFF] space-y-3 hover:border-[#171717] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs px-2 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded">
                  Trap #{trap.id}
                </span>
                <h3 className="text-sm font-bold text-[#171717]">{trap.title}</h3>
              </div>

              {/* The False Trap Statement */}
              <div className="p-3 border border-[#E5E5E5] bg-[#FAFAFA] rounded text-xs space-y-1">
                <span className="font-mono text-[10px] text-[#737373] uppercase font-bold block">
                  Common Trap Option / الفخ الامتحاني:
                </span>
                <p className="text-[#525252] line-through italic">"{trap.trap}"</p>
              </div>

              {/* The Verified Academic Truth */}
              <div className="p-3 border border-[#171717] bg-[#FFFFFF] rounded text-xs space-y-1.5">
                <span className="font-mono text-[10px] text-[#171717] uppercase font-bold block">
                  Correct Academic Fact / الحقيقة العلمية المعتمدة:
                </span>
                <p className="text-[#171717] font-medium leading-relaxed">{trap.truth}</p>
                <p
                  dir="rtl"
                  className="text-[#525252] font-serif pt-1 border-t border-[#F2F2F2]"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {trap.truthAr}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Navigation to Other Study Tools */}
      <div className="p-6 border border-[#E5E5E5] bg-[#FAFAFA] rounded-lg space-y-4">
        <h3 className="text-sm font-bold text-[#171717]">Ready to Test Your Mastery?</h3>
        <p className="text-xs text-[#525252]">
          Practice with our 156-question university repository or test yourself under real examination conditions.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/exams"
            className="px-4 py-2 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-xs font-semibold hover:bg-[#333333] transition-colors flex items-center gap-2"
          >
            <Zap className="w-4 h-4" />
            Midterm Exam Simulator
          </Link>
          <Link
            to="/questions"
            className="px-4 py-2 border border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] rounded text-xs font-medium hover:bg-[#F2F2F2] transition-colors flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            Browse 156 University Questions
          </Link>
          <Link
            to="/lab"
            className="px-4 py-2 border border-[#E5E5E5] bg-[#FFFFFF] text-[#171717] rounded text-xs font-medium hover:bg-[#F2F2F2] transition-colors flex items-center gap-2"
          >
            <Cpu className="w-4 h-4" />
            Interactive Crypto Lab
          </Link>
        </div>
      </div>
    </div>
  );
}

