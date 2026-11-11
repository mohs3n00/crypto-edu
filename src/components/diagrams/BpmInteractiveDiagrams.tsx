import React, { useState } from 'react';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  Layers,
  ChevronRight,
  Sparkles,
  GitFork,
  Split,
  Workflow,
  Cpu,
} from 'lucide-react';
import { useUI } from '../../store/uiStore';

// -------------------------------------------------------------
// 1. BPM Gateway & Pattern Simulator
// -------------------------------------------------------------
export const BpmGatewaySimulator: React.FC = () => {
  const { language } = useUI();
  const isAr = language === 'ar';

  const [activePattern, setActivePattern] = useState<'and' | 'xor' | 'or' | '2of3' | 'dis'>('and');
  const [tokens, setTokens] = useState<{ b1: boolean; b2: boolean; b3: boolean }>({
    b1: false,
    b2: false,
    b3: false,
  });

  const resetTokens = () => setTokens({ b1: false, b2: false, b3: false });

  const toggleBranch = (b: 'b1' | 'b2' | 'b3') => {
    setTokens((prev) => ({ ...prev, [b]: !prev[b] }));
  };

  // Evaluation logic
  const isAndJoined = tokens.b1 && tokens.b2;
  const isXorJoined = (tokens.b1 && !tokens.b2) || (!tokens.b1 && tokens.b2);
  const isOrJoined = tokens.b1 || tokens.b2;
  const completedCount = (tokens.b1 ? 1 : 0) + (tokens.b2 ? 1 : 0) + (tokens.b3 ? 1 : 0);
  const is2of3Joined = completedCount >= 2;
  const isDisJoined = completedCount >= 1;

  return (
    <div className="bg-[#FFFFFF] border-2 border-[#222222] rounded-xl p-4 sm:p-6 space-y-5 shadow-xs select-none">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E2DF] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#222222] text-[#FFFFFF] flex items-center justify-center font-bold">
            <GitFork size={18} />
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base text-[#222222]">
              {isAr ? 'محاكي بوابات وأنماط تدفق العمل التفاعلي' : 'Interactive BPMN Gateway & Pattern Simulator'}
            </h4>
            <p className="text-xs text-[#505050]">
              {isAr ? 'اختر النمط واضغط لتفعيل المسارات وملاحظة سلوك المزامنة والدمج' : 'Select a pattern and toggle branches to observe split/join semantics'}
            </p>
          </div>
        </div>

        <button
          onClick={resetTokens}
          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md border border-[#E2E2DF] hover:bg-[#F0F0EE] transition-colors"
        >
          <RotateCcw size={13} />
          <span>{isAr ? 'إعادة ضبط' : 'Reset'}</span>
        </button>
      </div>

      {/* Pattern Selector Tabs */}
      <div className="flex flex-wrap gap-1.5 p-1 bg-[#F5F5F3] rounded-lg">
        {[
          { id: 'and', label: 'AND-split / AND-join (+)', labelAr: 'بوابة التوازي (+)' },
          { id: 'xor', label: 'XOR-split / XOR-join (X)', labelAr: 'بوابة الاستبعاد (X)' },
          { id: 'or', label: 'OR-split / OR-join (O)', labelAr: 'بوابة الشمول (O)' },
          { id: '2of3', label: '2-out-of-3 Join (M-of-N)', labelAr: 'دمج 2 من أصل 3' },
          { id: 'dis', label: 'Discriminator (DIS)', labelAr: 'نمط المميّز (DIS)' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActivePattern(tab.id as any);
              resetTokens();
            }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              activePattern === tab.id
                ? 'bg-[#222222] text-[#FFFFFF] shadow-xs'
                : 'text-[#505050] hover:text-[#222222] hover:bg-[#EBEBE8]'
            }`}
          >
            {isAr ? tab.labelAr : tab.label}
          </button>
        ))}
      </div>

      {/* Simulator Board */}
      <div className="bg-[#FAF9F6] border border-[#E2E2DF] rounded-xl p-4 sm:p-6 space-y-6">
        {/* Visual Architecture */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Split Node */}
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-mono text-[#505050] font-bold pb-1">Incoming Flow</span>
            <div className="w-12 h-12 rotate-45 border-2 border-[#222222] bg-[#FFFFFF] flex items-center justify-center font-extrabold text-base shadow-xs">
              <span className="-rotate-45">
                {activePattern === 'and' && '+'}
                {activePattern === 'xor' && '×'}
                {activePattern === 'or' && '○'}
                {activePattern === '2of3' && '2/3'}
                {activePattern === 'dis' && 'DIS'}
              </span>
            </div>
            <span className="text-xs font-bold text-[#222222] pt-2">
              {activePattern === 'and' && 'AND-split'}
              {activePattern === 'xor' && 'XOR-split'}
              {activePattern === 'or' && 'OR-split'}
              {activePattern === '2of3' && 'Fork (3 Paths)'}
              {activePattern === 'dis' && 'Fork (3 Paths)'}
            </span>
          </div>

          {/* Interactive Branches */}
          <div className="flex-1 w-full space-y-3 px-2 sm:px-6">
            <div className="text-xs font-mono text-center text-[#505050]">
              {isAr ? 'اضغط على المسار لتبديل حالة الإنجاز (Toggle Completion):' : 'Click a branch to simulate completion:'}
            </div>

            {/* Branch 1 */}
            <div
              onClick={() => toggleBranch('b1')}
              className={`p-3 rounded-lg border-2 cursor-pointer transition-all flex items-center justify-between ${
                tokens.b1
                  ? 'border-[#222222] bg-[#222222] text-[#FFFFFF]'
                  : 'border-[#D4D4D0] bg-[#FFFFFF] text-[#222222] hover:border-[#888888]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-mono font-bold">
                  1
                </span>
                <span className="text-xs font-bold font-mono">
                  {activePattern === 'xor' ? 'Path A (Condition 1: Cost < $100)' : 'Branch 1: Send Invoice / Book Flight'}
                </span>
              </div>
              <span className="text-xs font-semibold">
                {tokens.b1 ? (isAr ? '✓ مكتمل' : '✓ Completed') : (isAr ? '⏳ في الانتظار' : '⏳ Pending')}
              </span>
            </div>

            {/* Branch 2 */}
            <div
              onClick={() => toggleBranch('b2')}
              className={`p-3 rounded-lg border-2 cursor-pointer transition-all flex items-center justify-between ${
                tokens.b2
                  ? 'border-[#222222] bg-[#222222] text-[#FFFFFF]'
                  : 'border-[#D4D4D0] bg-[#FFFFFF] text-[#222222] hover:border-[#888888]'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-mono font-bold">
                  2
                </span>
                <span className="text-xs font-bold font-mono">
                  {activePattern === 'xor' ? 'Path B (Condition 2: Cost >= $100)' : 'Branch 2: Ship Products / Book Hotel'}
                </span>
              </div>
              <span className="text-xs font-semibold">
                {tokens.b2 ? (isAr ? '✓ مكتمل' : '✓ Completed') : (isAr ? '⏳ في الانتظار' : '⏳ Pending')}
              </span>
            </div>

            {/* Branch 3 (for 2of3 and DIS) */}
            {(activePattern === '2of3' || activePattern === 'dis') && (
              <div
                onClick={() => toggleBranch('b3')}
                className={`p-3 rounded-lg border-2 cursor-pointer transition-all flex items-center justify-between ${
                  tokens.b3
                    ? 'border-[#222222] bg-[#222222] text-[#FFFFFF]'
                    : 'border-[#D4D4D0] bg-[#FFFFFF] text-[#222222] hover:border-[#888888]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-mono font-bold">
                    3
                  </span>
                  <span className="text-xs font-bold font-mono">Branch 3: Book Rental Car</span>
                </div>
                <span className="text-xs font-semibold">
                  {tokens.b3 ? (isAr ? '✓ مكتمل' : '✓ Completed') : (isAr ? '⏳ في الانتظار' : '⏳ Pending')}
                </span>
              </div>
            )}
          </div>

          {/* Join Node & Output Status */}
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-mono text-[#505050] font-bold pb-1">Convergence</span>
            <div
              className={`w-12 h-12 rotate-45 border-2 flex items-center justify-center font-extrabold text-base shadow-xs transition-all ${
                (activePattern === 'and' && isAndJoined) ||
                (activePattern === 'xor' && isXorJoined) ||
                (activePattern === 'or' && isOrJoined) ||
                (activePattern === '2of3' && is2of3Joined) ||
                (activePattern === 'dis' && isDisJoined)
                  ? 'border-[#222222] bg-[#222222] text-[#FFFFFF]'
                  : 'border-[#D4D4D0] bg-[#E8E8E5] text-[#888888]'
              }`}
            >
              <span className="-rotate-45">
                {activePattern === 'and' && '+'}
                {activePattern === 'xor' && '×'}
                {activePattern === 'or' && '○'}
                {activePattern === '2of3' && '2/3'}
                {activePattern === 'dis' && 'DIS'}
              </span>
            </div>
            <span className="text-xs font-bold text-[#222222] pt-2">
              {activePattern === 'and' && 'AND-join'}
              {activePattern === 'xor' && 'XOR-join'}
              {activePattern === 'or' && 'OR-join'}
              {activePattern === '2of3' && '2-of-3 Join'}
              {activePattern === 'dis' && 'Discriminator'}
            </span>
          </div>
        </div>

        {/* Status Callout Banner */}
        <div
          className={`p-4 rounded-xl border-2 transition-all flex items-start gap-3 ${
            (activePattern === 'and' && isAndJoined) ||
            (activePattern === 'xor' && isXorJoined) ||
            (activePattern === 'or' && isOrJoined) ||
            (activePattern === '2of3' && is2of3Joined) ||
            (activePattern === 'dis' && isDisJoined)
              ? 'border-[#222222] bg-[#FFFFFF] text-[#222222]'
              : 'border-[#E2E2DF] bg-[#F0F0EE] text-[#505050]'
          }`}
        >
          {((activePattern === 'and' && isAndJoined) ||
            (activePattern === 'xor' && isXorJoined) ||
            (activePattern === 'or' && isOrJoined) ||
            (activePattern === '2of3' && is2of3Joined) ||
            (activePattern === 'dis' && isDisJoined)) ? (
            <CheckCircle2 size={20} className="text-[#222222] shrink-0 mt-0.5" />
          ) : (
            <Clock size={20} className="text-[#686868] shrink-0 mt-0.5" />
          )}

          <div className="space-y-1">
            <h5 className="font-bold text-xs sm:text-sm">
              {activePattern === 'and' &&
                (isAndJoined
                  ? isAr ? '✓ اكتملت المزامنة: عبر التدفق لأن كِلا المسارين قد اكتملا!' : '✓ Synchronized: Downstream task triggered because ALL incoming branches completed.'
                  : isAr ? '⏳ بوابة AND-join تنتظر: يستحيل المتابعة حتى يكتمل المساران 1 و 2 معًا!' : '⏳ AND-join is waiting: Cannot continue until ALL branches complete.')}

              {activePattern === 'xor' &&
                (isXorJoined
                  ? isAr ? '✓ اختيار حصري سليم: مسار واحد فقط هو المفعل، فمر التدفق فورًا!' : '✓ Valid XOR Decision: Exactly one mutually-exclusive route selected and forwarded.'
                  : (tokens.b1 && tokens.b2)
                  ? isAr ? '⚠️ خطأ دلالي: بوابة XOR تختار مسارًا واحدًا فقط حصريًا ولا تسمح بتفعيل مسارين معًا!' : '⚠️ Semantic Violation: An XOR-split CANNOT activate multiple branches simultaneously!'
                  : isAr ? '⏳ بانتظار تفعيل مسار بديل واحد...' : '⏳ Waiting for exactly one alternative branch to be selected...')}

              {activePattern === 'or' &&
                (isOrJoined
                  ? isAr ? '✓ بوابة OR-join مزامنة: يستمر العمل لأن المسارات المفعلة قد اكتملت!' : '✓ Synchronized: OR-join proceeds because all active branches have completed.'
                  : isAr ? '⏳ بانتظار تفعيل مسار واحد على الأقل...' : '⏳ Waiting for at least one branch to complete...')}

              {activePattern === '2of3' &&
                (is2of3Joined
                  ? isAr ? `✓ تحقق شرط 2 من أصل 3 (${completedCount}/3): يستمر العمل فورًا دون انتظار المسار الثالث!` : `✓ 2-out-of-3 Condition Met (${completedCount}/3): Workflow proceeds immediately without waiting for the 3rd branch!`
                  : isAr ? `⏳ بانتظار اكتمال أي مسارين (${completedCount}/2 مكتمل حاليًا)...` : `⏳ Waiting for any two branches to complete (${completedCount}/2 done)...`)}

              {activePattern === 'dis' &&
                (isDisJoined
                  ? isAr ? `✓ نمط المميّز انطلق: أول مسار وصل أطلق المتابعة لمرة واحدة، ويتم تجاهل بقية المسارات!` : `✓ Discriminator Fired: First branch arrival triggered downstream continuation once! Remaining branches are ignored.`
                  : isAr ? '⏳ بانتظار وصول أول مسار مكتمل...' : '⏳ Waiting for first branch to complete...')}
            </h5>

            <p className="text-xs leading-relaxed text-[#505050]">
              {activePattern === 'and' &&
                (isAr
                  ? 'سؤال امتحان رسمي: ماذا تفعل بوابة AND-split؟ تفعّل كافة المسارات الخارجة. وبوابة AND-join تنتظر اكتمال كافة المسارات.'
                  : 'Exam Rule: AND-split activates all branches; AND-join synchronizes and waits for all branches before proceeding.')}
              {activePattern === 'xor' &&
                (isAr
                  ? 'سؤال امتحان رسمي: ماذا تفعل بوابة XOR-split؟ تختار مسارًا واحدًا فقط بناءً على شرط (مثل: اعتماد الفاتورة الصالحة أو إحالتها للتصحيح).'
                  : 'Exam Rule: XOR-split chooses exactly one route based on evaluated conditions (e.g., valid invoice vs correction).')}
              {activePattern === '2of3' &&
                (isAr
                  ? 'سؤال امتحان رسمي: متى يسمح دمج 2 من أصل 3 لتدفق العمل بالاستمرار؟ عند اكتمال أي مسارين من المسارات الثلاثة.'
                  : 'Exam Rule: 2-out-of-3 join continues execution as soon as ANY TWO branches complete.')}
              {activePattern === 'dis' &&
                (isAr
                  ? 'سؤال امتحان رسمي: في نمط المميز (DIS)، يطلق أول مسار مكتمل المتابعة لمرة واحدة فقط.'
                  : 'Exam Rule: With a discriminator (DIS), the first completed branch triggers continuation once.')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// 2. Weske Reseller-Buyer Choreography Interactive Explorer
// -------------------------------------------------------------
export const BpmChoreographyViewer: React.FC = () => {
  const { language } = useUI();
  const isAr = language === 'ar';

  const [step, setStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      title: '1. Place Order',
      titleAr: '1. تقديم الطلب',
      desc: 'Buyer submits order via "Place Order" activity. A Message Flow crosses the pool boundary to Reseller’s Message Start Event.',
      descAr: 'المشتري يقدم الطلب عبر نشاط "Place Order". ينطلق تدفق رسائل عابر للأحواض ليصب في حدث بداية البائع.',
      activeFlow: 'buyer-to-reseller-order',
    },
    {
      step: 2,
      title: '2. Check Order & AND-split',
      titleAr: '2. فحص الطلب وبوابة التوازي',
      desc: 'Reseller extracts order details and executes "Check Order". An AND-split immediately forks execution into two parallel paths.',
      descAr: 'البائع يستخرج بيانات الطلب وينفذ "Check Order". تطلق بوابة توازي AND-split مسارين متزامنين في نفس الوقت.',
      activeFlow: 'reseller-and-split',
    },
    {
      step: 3,
      title: '3. Parallel Invoice & Shipment',
      titleAr: '3. الفاتورة والشحن بالتوازي',
      desc: 'Reseller concurrently executes "Send Invoice" (Message Flow to Buyer) and "Ship Products" (Message Flow to Buyer).',
      descAr: 'البائع ينفذ بالتوازي: "Send Invoice" (تدفق رسائل للمشتري) و "Ship Products" (تدفق رسائل للمشتري).',
      activeFlow: 'parallel-messages',
    },
    {
      step: 4,
      title: '4. Settle Invoice & AND-join',
      titleAr: '4. سداد الفاتورة ودمج التوازي',
      desc: 'Buyer settles invoice and receives products. Reseller receives payment, synchronizes at AND-join, archives order, and concludes.',
      descAr: 'المشتري يسدد الفاتورة ويستلم الشحنة. البائع يستلم الدفع، ويتزامن عند AND-join، ويؤرشف الطلب وينتهي.',
      activeFlow: 'completion',
    },
  ];

  return (
    <div className="bg-[#FFFFFF] border-2 border-[#222222] rounded-xl p-4 sm:p-6 space-y-5 shadow-xs select-none">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E2DF] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#222222] text-[#FFFFFF] flex items-center justify-center font-bold">
            <Workflow size={18} />
          </div>
          <div>
            <h4 className="font-bold text-sm sm:text-base text-[#222222]">
              {isAr ? 'كوريغرافيا تفاعل المشتري والبائع (ويسكي شكل 1.3)' : 'Mathias Weske Reseller-Buyer Choreography Explorer'}
            </h4>
            <p className="text-xs text-[#505050]">
              {isAr ? 'تتبع تدفق الرسائل عبر الأحواض خطوة بخطوة' : 'Trace cross-pool message flows and parallel gateway synchronization'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            disabled={step <= 1}
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            className="px-2.5 py-1 text-xs font-semibold rounded border border-[#E2E2DF] disabled:opacity-40 hover:bg-[#F0F0EE]"
          >
            {isAr ? 'السابق' : 'Prev'}
          </button>
          <span className="text-xs font-mono font-bold px-2">{step} / 4</span>
          <button
            disabled={step >= 4}
            onClick={() => setStep((s) => Math.min(4, s + 1))}
            className="px-2.5 py-1 text-xs font-semibold rounded bg-[#222222] text-[#FFFFFF] disabled:opacity-40 hover:bg-[#333333]"
          >
            {isAr ? 'التالي' : 'Next'}
          </button>
        </div>
      </div>

      {/* Choreography Diagram Simulation */}
      <div className="space-y-4">
        {/* Buyer Pool */}
        <div className="border-2 border-[#222222] rounded-xl overflow-hidden">
          <div className="bg-[#EBEBE8] px-4 py-1.5 border-b border-[#D4D4D0] font-bold text-xs flex items-center justify-between">
            <span>Pool: Buyer (المشتري)</span>
            <span className="font-mono text-[11px] text-[#505050]">Private Process Flow</span>
          </div>
          <div className="p-4 bg-[#FFFFFF] flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            <div className="w-7 h-7 rounded-full border-2 border-[#222222] flex items-center justify-center text-[10px] font-bold">
              Start
            </div>
            <ArrowRight size={14} className="text-[#686868]" />
            <div
              className={`px-3 py-2 rounded-lg border-2 font-semibold transition-all ${
                step >= 1 ? 'border-[#222222] bg-[#222222] text-[#FFFFFF]' : 'border-[#D4D4D0] bg-[#FAFAFA]'
              }`}
            >
              Place Order
            </div>
            <ArrowRight size={14} className="text-[#686868]" />
            <div className="w-7 h-7 rotate-45 border-2 border-[#222222] flex items-center justify-center font-bold text-xs">
              <span className="-rotate-45">+</span>
            </div>
            <ArrowRight size={14} className="text-[#686868]" />
            <div className="flex flex-col gap-1.5">
              <div
                className={`px-2.5 py-1.5 rounded border-2 font-semibold transition-all ${
                  step >= 3 ? 'border-[#222222] bg-[#E8E8E5]' : 'border-[#E2E2DF] text-[#888888]'
                }`}
              >
                Receive & Settle Invoice
              </div>
              <div
                className={`px-2.5 py-1.5 rounded border-2 font-semibold transition-all ${
                  step >= 3 ? 'border-[#222222] bg-[#E8E8E5]' : 'border-[#E2E2DF] text-[#888888]'
                }`}
              >
                Receive Products
              </div>
            </div>
            <ArrowRight size={14} className="text-[#686868]" />
            <div className="w-7 h-7 rotate-45 border-2 border-[#222222] flex items-center justify-center font-bold text-xs">
              <span className="-rotate-45">+</span>
            </div>
            <ArrowRight size={14} className="text-[#686868]" />
            <div className="w-7 h-7 rounded-full border-4 border-[#222222] bg-[#FFFFFF]" />
          </div>
        </div>

        {/* Cross-Pool Message Highway */}
        <div className="bg-[#FAF9F6] border border-dashed border-[#222222] rounded-lg p-3 text-center space-y-1">
          <div className="text-[11px] font-mono font-bold text-[#505050] uppercase tracking-wider">
            {isAr ? '--- تدفق الرسائل العابر للأحواض (Cross-Pool Message Flows) ---' : '--- Message Flows Across Pool Boundaries ---'}
          </div>
          <div className="text-xs font-bold text-[#222222]">
            {step === 1 && '✉ Message 1: Buyer sends "Order Message" to Reseller Start Event'}
            {step === 2 && '⚡ Reseller evaluates order and triggers parallel AND-split'}
            {step === 3 && '✉ Message 2: "Invoice" sent to Buyer & Message 3: "Products Shipped" to Buyer'}
            {step === 4 && '✉ Message 4: "Payment" returned to Reseller -> Order Archived -> Done!'}
          </div>
        </div>

        {/* Reseller Pool */}
        <div className="border-2 border-[#222222] rounded-xl overflow-hidden">
          <div className="bg-[#EBEBE8] px-4 py-1.5 border-b border-[#D4D4D0] font-bold text-xs flex items-center justify-between">
            <span>Pool: Reseller (البائع)</span>
            <span className="font-mono text-[11px] text-[#505050]">Private Process Flow</span>
          </div>
          <div className="p-4 bg-[#FFFFFF] flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            <div className="w-7 h-7 rounded-full border-2 border-[#222222] flex items-center justify-center text-[10px] font-bold bg-[#E8E8E5]">
              ✉
            </div>
            <ArrowRight size={14} className="text-[#686868]" />
            <div
              className={`px-3 py-2 rounded-lg border-2 font-semibold transition-all ${
                step >= 2 ? 'border-[#222222] bg-[#222222] text-[#FFFFFF]' : 'border-[#D4D4D0] bg-[#FAFAFA]'
              }`}
            >
              Check Order
            </div>
            <ArrowRight size={14} className="text-[#686868]" />
            <div className="w-7 h-7 rotate-45 border-2 border-[#222222] flex items-center justify-center font-bold text-xs">
              <span className="-rotate-45">+</span>
            </div>
            <ArrowRight size={14} className="text-[#686868]" />
            <div className="flex flex-col gap-1.5">
              <div
                className={`px-2.5 py-1.5 rounded border-2 font-semibold transition-all ${
                  step >= 3 ? 'border-[#222222] bg-[#E8E8E5]' : 'border-[#E2E2DF] text-[#888888]'
                }`}
              >
                Send Invoice → Receive Payment
              </div>
              <div
                className={`px-2.5 py-1.5 rounded border-2 font-semibold transition-all ${
                  step >= 3 ? 'border-[#222222] bg-[#E8E8E5]' : 'border-[#E2E2DF] text-[#888888]'
                }`}
              >
                Ship Products
              </div>
            </div>
            <ArrowRight size={14} className="text-[#686868]" />
            <div className="w-7 h-7 rotate-45 border-2 border-[#222222] flex items-center justify-center font-bold text-xs">
              <span className="-rotate-45">+</span>
            </div>
            <ArrowRight size={14} className="text-[#686868]" />
            <div
              className={`px-3 py-2 rounded-lg border-2 font-semibold transition-all ${
                step >= 4 ? 'border-[#222222] bg-[#222222] text-[#FFFFFF]' : 'border-[#D4D4D0] bg-[#FAFAFA]'
              }`}
            >
              Archive Order
            </div>
            <ArrowRight size={14} className="text-[#686868]" />
            <div className="w-7 h-7 rounded-full border-4 border-[#222222] bg-[#FFFFFF]" />
          </div>
        </div>
      </div>

      {/* Step Explanation Callout */}
      <div className="p-4 rounded-xl border border-[#E2E2DF] bg-[#FAF9F6] space-y-1">
        <div className="flex items-center gap-2 text-xs font-bold text-[#222222]">
          <Sparkles size={15} />
          <span>{isAr ? steps[step - 1].titleAr : steps[step - 1].title}</span>
        </div>
        <p className="text-xs text-[#505050] leading-relaxed">
          {isAr ? steps[step - 1].descAr : steps[step - 1].desc}
        </p>
      </div>
    </div>
  );
};
