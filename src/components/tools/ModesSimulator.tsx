import React, { useState } from 'react';

export default function ModesSimulator(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<'ecb' | 'cbc'>('ecb');

  // ECB Cut-and-paste state
  // Original blocks:
  // P0 = "Alice di"
  // P1 = "gs Bob. "
  // P2 = "Trudy di"
  // P3 = "gs Tom. "
  const [ecbBlocksOrder, setEcbBlocksOrder] = useState<number[]>([0, 1, 2, 3]);

  const originalP = [
    { id: 0, text: 'Alice di', mockCipher: 'C0_A9B2F1' },
    { id: 1, text: 'gs Bob. ', mockCipher: 'C1_D4E3A7' },
    { id: 2, text: 'Trudy di', mockCipher: 'C2_58C1B0' },
    { id: 3, text: 'gs Tom. ', mockCipher: 'C3_9E721F' },
  ];

  const ecbDecryptedText = ecbBlocksOrder.map((idx) => originalP[idx].text).join('');

  // CBC Error propagation state
  const [c1Corrupted, setC1Corrupted] = useState(false);
  const [ivLost, setIvLost] = useState(false);

  return (
    <div className="space-y-6">
      <div className="border border-neutral-gray p-6 bg-white rounded">
        <h3 className="text-xl font-semibold text-near-black mb-1">
          Block Cipher Modes Interactive Lab
        </h3>
        <p className="text-sm text-dark-gray" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
          محاكي أنماط تشغيل الشفرات الكتلية: هجوم القص واللصق في ECB، وانتشار الأخطاء وسؤال متجه التهيئة (IV) في CBC
        </p>

        {/* Tab switch */}
        <div className="flex border-b border-neutral-gray my-4">
          <button
            onClick={() => setActiveTab('ecb')}
            className={`py-2 px-4 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'ecb'
                ? 'border-black text-black'
                : 'border-transparent text-medium-gray hover:text-dark-gray'
            }`}
          >
            ECB Mode: Cut-and-Paste Attack
          </button>
          <button
            onClick={() => setActiveTab('cbc')}
            className={`py-2 px-4 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'cbc'
                ? 'border-black text-black'
                : 'border-transparent text-medium-gray hover:text-dark-gray'
            }`}
          >
            CBC Mode: Error Propagation & IV Loss
          </button>
        </div>

        {/* Tab 1: ECB Cut-and-Paste */}
        {activeTab === 'ecb' && (
          <div className="space-y-4">
            <div className="p-4 bg-near-white border border-neutral-gray rounded text-xs space-y-2">
              <div className="font-semibold uppercase tracking-wider text-dark-gray">
                Classic Stallings Example: "Alice digs Bob. Trudy digs Tom."
              </div>
              <p className="text-dark-gray">
                In Electronic Codebook (ECB), each 64-bit block is encrypted independently with the same key. An attacker who intercepts the ciphertext can reorder, duplicate, or delete ciphertext blocks without knowing the key!
              </p>
            </div>

            {/* Blocks rearrangement controls */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-dark-gray">
                  Rearrange Intercepted Ciphertext Blocks:
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEcbBlocksOrder([0, 1, 2, 3])}
                    className="btn btn-secondary text-xs"
                  >
                    Original Order: [0, 1, 2, 3]
                  </button>
                  <button
                    onClick={() => setEcbBlocksOrder([0, 3, 2, 1])}
                    className="btn btn-primary text-xs"
                  >
                    Swap Bob & Tom: [0, 3, 2, 1]
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                {ecbBlocksOrder.map((blockIdx, slot) => {
                  const blk = originalP[blockIdx];
                  return (
                    <div
                      key={slot}
                      className="border border-black p-3 rounded bg-white shadow-sm flex flex-col justify-between"
                    >
                      <div className="text-[10px] text-medium-gray mb-1">Slot {slot + 1}</div>
                      <div className="font-bold text-black mb-1">{blk.mockCipher}</div>
                      <div className="text-dark-gray bg-light-gray p-1 rounded font-mono">
                        "{blk.text}"
                      </div>
                      <div className="mt-2 text-[10px] text-dark-gray">Block ID: P{blk.id}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Decrypted outcome */}
            <div className="p-4 bg-near-white border border-neutral-gray rounded">
              <label className="block text-xs font-semibold uppercase tracking-wider text-dark-gray mb-1">
                Decrypted Message at Receiver:
              </label>
              <div className="font-mono text-base font-bold text-black">
                "{ecbDecryptedText}"
              </div>
              {ecbBlocksOrder.join('') !== '0123' && (
                <p className="text-xs text-dark-gray mt-2" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
                  ⚠️ نجح المهاجم في تغيير معنى الرسالة بالكامل من خلال إعادة ترتيب الكتل المشفرة فقط دون الحاجة لفك التشفير أو معرفة المفتاح السري!
                </p>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: CBC Error Propagation & IV Loss */}
        {activeTab === 'cbc' && (
          <div className="space-y-4">
            <div className="p-4 bg-near-white border border-neutral-gray rounded text-xs space-y-2">
              <div className="font-semibold uppercase tracking-wider text-dark-gray">
                Cipher Block Chaining (CBC) Error Behavior
              </div>
              <p className="text-dark-gray">
                Equations: <code className="bg-white px-1">P₁ = IV ⊕ D(C₁)</code>,{' '}
                <code className="bg-white px-1">P₂ = C₁ ⊕ D(C₂)</code>,{' '}
                <code className="bg-white px-1">P₃ = C₂ ⊕ D(C₃)</code>.
              </p>
            </div>

            {/* Simulation controls */}
            <div className="flex flex-wrap gap-3 my-2">
              <button
                onClick={() => setC1Corrupted(!c1Corrupted)}
                className={`btn text-xs ${c1Corrupted ? 'btn-primary' : 'btn-secondary'}`}
              >
                {c1Corrupted ? 'Corrupt Transmission Bit in C₁: ON' : 'Corrupt Transmission Bit in C₁: OFF'}
              </button>
              <button
                onClick={() => setIvLost(!ivLost)}
                className={`btn text-xs ${ivLost ? 'btn-primary' : 'btn-secondary'}`}
              >
                {ivLost ? 'Alice Forgot IV Value: YES' : 'Alice Forgot IV Value: NO'}
              </button>
            </div>

            {/* Block transmission and recovery visualization */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-mono text-xs">
              {/* P0 / P1 */}
              <div
                className={`border p-3 rounded ${
                  ivLost
                    ? 'border-dashed border-dark-gray bg-light-gray'
                    : c1Corrupted
                    ? 'border-black bg-light-gray'
                    : 'border-neutral-gray bg-white'
                }`}
              >
                <div className="font-bold text-black mb-1">Block P₁</div>
                <div className="text-[11px] text-dark-gray mb-2">P₁ = IV ⊕ D(C₁)</div>
                {ivLost ? (
                  <div className="text-dark-gray font-bold">❌ LOST (Unknown IV)</div>
                ) : c1Corrupted ? (
                  <div className="text-black font-bold">💥 Completely Garbled (D(C₁*) corrupted)</div>
                ) : (
                  <div className="text-black font-bold">✓ Decrypts Intact</div>
                )}
              </div>

              {/* P2 */}
              <div
                className={`border p-3 rounded ${
                  c1Corrupted ? 'border-black bg-near-white' : 'border-neutral-gray bg-white'
                }`}
              >
                <div className="font-bold text-black mb-1">Block P₂</div>
                <div className="text-[11px] text-dark-gray mb-2">P₂ = C₁ ⊕ D(C₂)</div>
                {c1Corrupted ? (
                  <div className="text-black font-semibold">
                    ⚠️ 1 Bit Flipped (at matching bit of C₁; rest intact!)
                  </div>
                ) : (
                  <div className="text-black font-bold">✓ Decrypts Intact</div>
                )}
              </div>

              {/* P3 */}
              <div className="border border-neutral-gray p-3 rounded bg-white">
                <div className="font-bold text-black mb-1">Block P₃</div>
                <div className="text-[11px] text-dark-gray mb-2">P₃ = C₂ ⊕ D(C₃)</div>
                <div className="text-black font-bold">✓ Decrypts Intact (Auto-recovery!)</div>
              </div>

              {/* P4 */}
              <div className="border border-neutral-gray p-3 rounded bg-white">
                <div className="font-bold text-black mb-1">Block P₄</div>
                <div className="text-[11px] text-dark-gray mb-2">P₄ = C₃ ⊕ D(C₄)</div>
                <div className="text-black font-bold">✓ Decrypts Intact</div>
              </div>
            </div>

            {/* University Exam Quiz Box */}
            <div className="mt-4 p-4 border border-dark-gray rounded bg-near-white text-xs space-y-2">
              <div className="font-semibold uppercase tracking-wider text-dark-gray">
                Official Exam Question: What happens if Alice forgets the IV?
              </div>
              <p className="text-black">
                <strong>Question:</strong> "Suppose Alice forgets the IV value she used, but has C and K. Can she recover P?"
              </p>
              <div className="p-2 bg-white border border-neutral-gray rounded font-mono">
                <span className="font-bold">Correct Answer:</span> Almost everything except the first plaintext block P₁.
              </div>
              <p className="text-dark-gray" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
                <strong>التفسير العلمي:</strong> لأن كل بلوك P_j (حيث j ≥ 2) يتم فكه بواسطة C_(j-1) ⊕ D(K, C_j)، ولا يدخل IV إلا في فك البلوك الأول فقط P₁ = IV ⊕ D(K, C₁). لذلك تُسترجع كافة البلوكات اللاحقة بسلام!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

