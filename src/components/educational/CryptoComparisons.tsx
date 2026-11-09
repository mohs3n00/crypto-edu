import React from 'react';
import ComparisonTable, { type ComparisonRow } from './ComparisonTable';

export function SymmetricVsAsymmetricTable(): React.ReactElement {
  const headers = ['Cryptographic Dimension', 'Symmetric Encryption (Conventional)', 'Asymmetric Encryption (Public-Key)'];
  const rows: ComparisonRow[] = [
    {
      feature: 'Number of Keys',
      featureAr: 'عدد المفاتيح المستخدمة',
      values: ['Single secret key shared by both communicating parties', 'Two mathematically linked keys: One Public Key and one Private Key'],
    },
    {
      feature: 'Key Secrecy & Storage',
      featureAr: 'سرية المفتاح ومتطلبات التخزين',
      values: ['Key must remain strictly secret between both sender and receiver', 'Public key is made openly accessible; Private key must remain strictly confidential to owner'],
    },
    {
      feature: 'Encryption / Decryption Speed',
      featureAr: 'سرعة وكفاءة المعالجة الحسابية',
      values: ['Extremely fast throughput (e.g. gigabits/second in hardware / AES-NI)', 'Computationally intensive (hundreds to thousands of times slower due to modular exponentiation)'],
    },
    {
      feature: 'Data Size Handled',
      featureAr: 'حجم البيانات المعالجة',
      values: ['Any size: Arbitrary large blocks, continuous file streams, terabyte databases', 'Small blocks only: Symmetric session keys, hash values, digital signature tokens'],
    },
    {
      feature: 'Key Distribution Problem',
      featureAr: 'معضلة تبادل وتوزيع المفاتيح',
      values: ['Major challenge: Requires prior secure channel or out-of-band delivery', 'Elegant solution: Eliminates need for prior secret channel via public key directories'],
    },
    {
      feature: 'Digital Signatures & Non-repudiation',
      featureAr: 'التوقيع الرقمي وعدم الإنكار',
      values: ['Cannot provide non-repudiation directly (both parties hold identical key)', 'Provides authentic non-repudiation via private key signing'],
    },
    {
      feature: 'Representative Algorithms',
      featureAr: 'أبرز الخوارزميات المعتمدة',
      values: ['DES, Triple-DES (3DES), AES, Blowfish, ChaCha20', 'RSA, Diffie-Hellman, ECC (Elliptic Curve), ElGamal, DSA'],
    },
  ];

  return (
    <ComparisonTable
      title="Symmetric vs. Asymmetric Encryption"
      titleAr="مقارنة شاملة: التشفير المتماثل مقابل التشفير غير المتماثل"
      description="Fundamental operational differences, computational complexity, and applications"
      headers={headers}
      rows={rows}
    />
  );
}

export function BlockVsStreamTable(): React.ReactElement {
  const headers = ['Evaluation Criteria', 'Stream Ciphers (شفرات التدفق)', 'Block Ciphers (شفرات الكتل)'];
  const rows: ComparisonRow[] = [
    {
      feature: 'Basic Processing Unit',
      featureAr: 'وحدة المعالجة الأساسية',
      values: ['Bit-by-bit or byte-by-byte continuously as data arrives', 'Fixed-size blocks (typically 64 bits in DES, 128 bits in AES) as a single whole'],
    },
    {
      feature: 'Cryptographic Mechanism',
      featureAr: 'الآلية التشفيرية المستخدمة',
      values: ['Bitwise XOR with pseudorandom keystream: C_i = P_i ⊕ K_i', 'Alternating layers of non-linear substitution (confusion) and permutation (diffusion)'],
    },
    {
      feature: 'Internal Memory & State',
      featureAr: 'الذاكرة الداخلية والحالة',
      values: ['Stateful: Generator maintains internal state to produce sequence', 'Stateless in pure ECB; stateful when using chaining modes (CBC, CFB, OFB)'],
    },
    {
      feature: 'Transmission Error Propagation',
      featureAr: 'سريان أخطاء النقل',
      values: ['Zero error propagation: 1 bit error in ciphertext affects only that 1 bit in plaintext', 'Mode-dependent: In CBC, 1 bit error corrupts full block P_i and 1 bit of P_{i+1}'],
    },
    {
      feature: 'Network Security Usage',
      featureAr: 'الاستخدام في تأمين الشبكات',
      values: ['Specialized (e.g., real-time voice, video streaming, A5/1 GSM, RC4 legacy)', 'Vast majority of network applications (TLS 1.3, IPsec, SSH, WPA3, disk encryption)'],
    },
    {
      feature: 'Standard Algorithms',
      featureAr: 'الخوارزميات القياسية',
      values: ['Vernam Cipher, One-Time Pad, RC4, ChaCha20, Salsa20', 'DES, 3DES, AES (Rijndael), Blowfish, IDEA, Serpent'],
    },
  ];

  return (
    <ComparisonTable
      title="Block Ciphers vs. Stream Ciphers (Table 4.1)"
      titleAr="مقارنة شفرات الكتل مقابل شفرات التدفق"
      description="Comparing continuous digit processing against grouped block transformations"
      headers={headers}
      rows={rows}
    />
  );
}

export function CipherModesComparisonTable(): React.ReactElement {
  const headers = ['Mode of Operation', 'Block Relationship', 'Typical Application', 'Key Advantage / Limitation'];
  const rows: ComparisonRow[] = [
    {
      feature: 'ECB (Electronic Codebook)',
      featureAr: 'دفتر الرموز الإلكتروني',
      values: [
        'Completely independent: C_i = E_K(P_i)',
        'Secure transmission of single values (e.g. encryption keys)',
        'Vulnerable: Identical plaintext blocks produce identical ciphertext blocks; allows cut-and-paste tampering.',
      ],
    },
    {
      feature: 'CBC (Cipher Block Chaining)',
      featureAr: 'ربط كتل الشفرات',
      values: [
        'Chained: C_i = E_K(P_i ⊕ C_{i-1}) with C_0 = IV',
        'General-purpose block-oriented message and file transmission',
        'Strong security: Same plaintext block encrypts differently; Error in C_i corrupts P_i and flips 1 bit in P_{i+1}.',
      ],
    },
    {
      feature: 'CFB (Cipher Feedback)',
      featureAr: 'التغذية الراجعة للشفرة',
      values: [
        'Stream operation: C_i = P_i ⊕ S_s(E_K(X_{i-1}))',
        'Stream-oriented data transmission (byte/bit characters)',
        'Converts block cipher into stream cipher; error propagates through shift register.',
      ],
    },
    {
      feature: 'OFB (Output Feedback)',
      featureAr: 'التغذية الراجعة للمخرجات',
      values: [
        'Independent keystream: O_i = E_K(O_{i-1}), C_i = P_i ⊕ O_i',
        'Stream transmission over noisy channels (satellite, RF radio)',
        'Bit errors do NOT propagate (only corresponding plaintext bit is inverted); requires IV protection.',
      ],
    },
    {
      feature: 'CTR (Counter Mode)',
      featureAr: 'نمط العداد',
      values: [
        'Counter keystream: C_i = P_i ⊕ E_K(T_i)',
        'High-speed networking (IPsec, ATM, TLS), random access storage',
        'Six major advantages: Parallel hardware/software processing, pre-computation, random access, only encrypt function needed.',
      ],
    },
  ];

  return (
    <ComparisonTable
      title="The Five Block Cipher Modes of Operation (Table 7.1)"
      titleAr="المقارنة الشاملة لأنماط تشغيل شفرات الكتل الخمسة"
      description="Official NIST SP 800-38A standard modes, processing flows, and vulnerabilities"
      headers={headers}
      rows={rows}
    />
  );
}

