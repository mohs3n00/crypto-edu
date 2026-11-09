import React from 'react';
import ConceptCardGrid, { type ConceptItem } from './ConceptCard';

export default function FourCryptoAreas(): React.ReactElement {
  const items: ConceptItem[] = [
    {
      number: '01',
      titleEn: 'Symmetric Encryption',
      titleAr: 'التشفير المتماثل (التقليدي)',
      academicDefinition:
        'Used to conceal the contents of blocks or streams of data of any size, including messages, files, TCP/IP packets, encryption keys, and passwords. Employs a single secret key shared between sender and receiver for both encryption and decryption.',
      academicDefinitionAr:
        'يُستخدم لإخفاء وحماية محتويات كتل أو تدفقات البيانات بأي حجم، بما في ذلك الرسائل والملفات وحزم الشبكة وكلمات المرور. يعتمد على مفتاح سري واحد مشترك بين المرسل والمستقبل للتشفير وفك التشفير.',
      conceptualExplanation:
        'A shared secret key locks the message on one side, and the exact same key unlocks it on the receiving end. Computationally very fast and efficient for massive payloads.',
      conceptualExplanationAr:
        'مفتاح سري مشترك يغلق الرسالة في طرف، ونفس المفتاح بالضبط يفتحها في الطرف الآخر. سريع جداً وفعال حسابياً للبيانات الضخمة.',
      applications: [
        'Bulk file and disk encryption (BitLocker, AES-XTS)',
        'Network session transport encryption (TLS payload, IPsec ESP)',
        'Protecting stored database tables and credentials',
      ],
      keyDistinction:
        'Handles data of ANY size (gigabytes/terabytes) with high computational throughput; requires prior secure key distribution.',
      keyDistinctionAr:
        'يعالج كميات غير محدودة من البيانات بسرعة فائقة، ولكنه يشترط وسيلة مسبقة ومؤمنة لتبادل المفتاح السري.',
      illustration: (
        <svg
          viewBox="0 0 760 190"
          className="w-full h-auto text-[#171717] select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <marker
              id="sym-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
            </marker>
          </defs>

          {/* Top: Secure Channel for Shared Key Distribution */}
          <rect
            x="245"
            y="10"
            width="270"
            height="46"
            rx="4"
            fill="#FFFFFF"
            stroke="#171717"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <circle cx="268" cy="33" r="10" fill="#171717" />
          <path d="M 268 30 L 268 40 M 264 35 L 272 35" stroke="#FFFFFF" strokeWidth="1.5" />
          <text x="385" y="28" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#171717">
            Shared Secret Key Source (K)
          </text>
          <text x="385" y="44" textAnchor="middle" fontSize="10" fill="#525252">
            Secure Key Distribution / قناة مؤمنة لتبادل المفتاح
          </text>

          {/* Secure Key Delivery Lines */}
          <path
            d="M 245 33 L 195 33 L 195 86"
            fill="none"
            stroke="#171717"
            strokeWidth="1.25"
            strokeDasharray="3 3"
            markerEnd="url(#sym-arrow)"
          />
          <path
            d="M 515 33 L 565 33 L 565 86"
            fill="none"
            stroke="#171717"
            strokeWidth="1.25"
            strokeDasharray="3 3"
            markerEnd="url(#sym-arrow)"
          />

          {/* 1. Sender Node */}
          <rect x="15" y="92" width="85" height="52" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="57" y="114" textAnchor="middle" fontSize="11" fontWeight="bold">Sender (A)</text>
          <text x="57" y="130" textAnchor="middle" fontSize="9" fill="#525252">Alice / مرسل</text>

          {/* Arrow 1 */}
          <line x1="100" y1="118" x2="118" y2="118" stroke="#171717" strokeWidth="1.5" markerEnd="url(#sym-arrow)" />

          {/* 2. Plaintext */}
          <rect x="120" y="92" width="95" height="52" rx="4" fill="#FAFAFA" stroke="#171717" strokeWidth="1.5" />
          <text x="167" y="112" textAnchor="middle" fontSize="11" fontWeight="bold">Plaintext (X)</text>
          <text x="167" y="126" textAnchor="middle" fontSize="9" fill="#525252">Original Data</text>
          <text x="167" y="138" textAnchor="middle" fontSize="8" fill="#737373">نص صريح</text>

          {/* Arrow 2 */}
          <line x1="215" y1="118" x2="233" y2="118" stroke="#171717" strokeWidth="1.5" markerEnd="url(#sym-arrow)" />

          {/* 3. Encryption Algorithm */}
          <rect x="235" y="86" width="130" height="64" rx="4" fill="#171717" stroke="#171717" strokeWidth="1.5" />
          <text x="300" y="110" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">Encryption (E)</text>
          <text x="300" y="125" textAnchor="middle" fontSize="10" fill="#E5E5E5">Y = E(K, X)</text>
          <text x="300" y="140" textAnchor="middle" fontSize="8" fill="#A3A3A3">خوارزمية التشفير</text>

          {/* Arrow 3 */}
          <line x1="365" y1="118" x2="383" y2="118" stroke="#171717" strokeWidth="1.5" markerEnd="url(#sym-arrow)" />

          {/* 4. Insecure Channel & Ciphertext */}
          <rect
            x="385"
            y="92"
            width="110"
            height="52"
            rx="4"
            fill="#FFFFFF"
            stroke="#171717"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <text x="440" y="111" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#171717">Ciphertext (Y)</text>
          <text x="440" y="125" textAnchor="middle" fontSize="9" fill="#525252">Insecure Channel</text>
          <text x="440" y="137" textAnchor="middle" fontSize="8" fill="#737373">نص مشفر عبر الشبكة</text>

          {/* Arrow 4 */}
          <line x1="495" y1="118" x2="513" y2="118" stroke="#171717" strokeWidth="1.5" markerEnd="url(#sym-arrow)" />

          {/* 5. Decryption Algorithm */}
          <rect x="515" y="86" width="130" height="64" rx="4" fill="#171717" stroke="#171717" strokeWidth="1.5" />
          <text x="580" y="110" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">Decryption (D)</text>
          <text x="580" y="125" textAnchor="middle" fontSize="10" fill="#E5E5E5">X = D(K, Y)</text>
          <text x="580" y="140" textAnchor="middle" fontSize="8" fill="#A3A3A3">فك التشفير بنفس المفتاح</text>

          {/* Arrow 5 */}
          <line x1="645" y1="118" x2="663" y2="118" stroke="#171717" strokeWidth="1.5" markerEnd="url(#sym-arrow)" />

          {/* 6. Receiver Node */}
          <rect x="665" y="92" width="80" height="52" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="705" y="114" textAnchor="middle" fontSize="11" fontWeight="bold">Receiver (B)</text>
          <text x="705" y="130" textAnchor="middle" fontSize="9" fill="#525252">Bob / مستقبل</text>

          {/* Bottom Principle Banner */}
          <rect x="15" y="162" width="730" height="22" rx="3" fill="#F2F2F2" />
          <text x="380" y="177" textAnchor="middle" fontSize="10" fontWeight="600" fill="#171717">
            Kerckhoffs's Principle: Algorithms E and D are public; security depends strictly on keeping the single shared key K secret.
          </text>
        </svg>
      ),
    },
    {
      number: '02',
      titleEn: 'Asymmetric Encryption',
      titleAr: 'التشفير غير المتماثل (المفتاح العام)',
      academicDefinition:
        'Used to conceal small blocks of data, such as symmetric encryption keys and cryptographic hash function values, which are used in digital signatures and key distribution protocols. Employs a mathematically linked public/private key pair.',
      academicDefinitionAr:
        'يُستخدم لإخفاء وتأمين كتل البيانات الصغيرة فقط، مثل مفاتيح التشفير المتماثل وقيم دوال الهاش المستخدمة في التوقيع الرقمي وتوزيع المفاتيح. يعتمد على زوج من المفاتيح المترابطة رياضياً (عام وخاص).',
      conceptualExplanation:
        'Anyone can lock a message using the recipient’s publicly accessible key, but only the recipient possesses the paired private key capable of unlocking it.',
      conceptualExplanationAr:
        'يستطيع أي شخص تشفير رسالة باستخدام المفتاح العام للمستقبل، ولكن المستلم فقط هو من يملك المفتاح الخاص المقترن القادر على فكها.',
      applications: [
        'Secure key exchange protocols (Diffie-Hellman, RSA Key Transport)',
        'Digital signatures for non-repudiation (ECDSA, RSA-PSS)',
        'Public-Key Infrastructure (PKI) digital certificates (X.509)',
      ],
      keyDistinction:
        'Restricted to SMALL data blocks (keys/hashes) due to heavy mathematical overhead; solves the fundamental key distribution dilemma.',
      keyDistinctionAr:
        'مخصص للكتل الصغيرة فقط بسبب تعقيده الحسابي، ويحل معضلة توزيع المفاتيح دون الحاجة لقناة سرية مسبقة.',
      illustration: (
        <svg
          viewBox="0 0 760 195"
          className="w-full h-auto text-[#171717] select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <marker
              id="asym-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
            </marker>
          </defs>

          {/* Top: Bob's Asymmetric Key Pair Generation Component */}
          <rect
            x="360"
            y="10"
            width="385"
            height="46"
            rx="4"
            fill="#FFFFFF"
            stroke="#171717"
            strokeWidth="1.5"
          />
          <text x="552" y="24" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#171717">
            Bob's Key Pair Generation / توليد زوج المفاتيح للمستقبل
          </text>

          {/* Public Key Pill (Publicly Accessible) */}
          <rect x="375" y="28" width="160" height="22" rx="11" fill="#FFFFFF" stroke="#171717" strokeWidth="1.25" />
          <circle cx="388" cy="39" r="6" fill="#171717" />
          <text x="465" y="43" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#171717">
            Public Key (PU_B) [عام للكل]
          </text>

          {/* Private Key Pill (Strictly Confidential) */}
          <rect x="560" y="28" width="170" height="22" rx="11" fill="#171717" />
          <circle cx="573" cy="39" r="6" fill="#FFFFFF" />
          <text x="652" y="43" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#FFFFFF">
            Private Key (PR_B) [سري خاص]
          </text>

          {/* Public Key Delivery Path to Alice's Encryption */}
          <path
            d="M 455 50 L 455 68 L 295 68 L 295 86"
            fill="none"
            stroke="#171717"
            strokeWidth="1.25"
            strokeDasharray="3 3"
            markerEnd="url(#asym-arrow)"
          />

          {/* Private Key Delivery Path to Bob's Decryption */}
          <path
            d="M 645 50 L 645 86"
            fill="none"
            stroke="#171717"
            strokeWidth="1.5"
            markerEnd="url(#asym-arrow)"
          />

          {/* 1. Sender Node */}
          <rect x="15" y="92" width="85" height="52" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="57" y="114" textAnchor="middle" fontSize="11" fontWeight="bold">Sender (Alice)</text>
          <text x="57" y="130" textAnchor="middle" fontSize="9" fill="#525252">مرسل الرسالة</text>

          {/* Arrow 1 */}
          <line x1="100" y1="118" x2="118" y2="118" stroke="#171717" strokeWidth="1.5" markerEnd="url(#asym-arrow)" />

          {/* 2. Plaintext */}
          <rect x="120" y="92" width="95" height="52" rx="4" fill="#FAFAFA" stroke="#171717" strokeWidth="1.5" />
          <text x="167" y="112" textAnchor="middle" fontSize="11" fontWeight="bold">Plaintext (M)</text>
          <text x="167" y="126" textAnchor="middle" fontSize="9" fill="#525252">Small Block / Key</text>
          <text x="167" y="138" textAnchor="middle" fontSize="8" fill="#737373">نص صريح / مفتاح</text>

          {/* Arrow 2 */}
          <line x1="215" y1="118" x2="233" y2="118" stroke="#171717" strokeWidth="1.5" markerEnd="url(#asym-arrow)" />

          {/* 3. Encryption Algorithm */}
          <rect x="235" y="86" width="130" height="64" rx="4" fill="#171717" stroke="#171717" strokeWidth="1.5" />
          <text x="300" y="108" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">Encryption (E)</text>
          <text x="300" y="123" textAnchor="middle" fontSize="9" fill="#E5E5E5">C = E(PU_B, M)</text>
          <text x="300" y="138" textAnchor="middle" fontSize="8" fill="#A3A3A3">تشفير بمفتاح بوب العام</text>

          {/* Arrow 3 */}
          <line x1="365" y1="118" x2="383" y2="118" stroke="#171717" strokeWidth="1.5" markerEnd="url(#asym-arrow)" />

          {/* 4. Insecure Channel & Ciphertext */}
          <rect
            x="385"
            y="92"
            width="145"
            height="52"
            rx="4"
            fill="#FFFFFF"
            stroke="#171717"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <text x="457" y="111" textAnchor="middle" fontSize="11" fontWeight="bold">Ciphertext (C)</text>
          <text x="457" y="125" textAnchor="middle" fontSize="9" fill="#525252">Insecure Public Channel</text>
          <text x="457" y="137" textAnchor="middle" fontSize="8" fill="#737373">نص مشفر عبر الشبكة</text>

          {/* Arrow 4 */}
          <line x1="530" y1="118" x2="548" y2="118" stroke="#171717" strokeWidth="1.5" markerEnd="url(#asym-arrow)" />

          {/* 5. Decryption Algorithm */}
          <rect x="550" y="86" width="130" height="64" rx="4" fill="#171717" stroke="#171717" strokeWidth="1.5" />
          <text x="615" y="108" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">Decryption (D)</text>
          <text x="615" y="123" textAnchor="middle" fontSize="9" fill="#E5E5E5">M = D(PR_B, C)</text>
          <text x="615" y="138" textAnchor="middle" fontSize="8" fill="#A3A3A3">فك التشفير بمفتاح بوب الخاص</text>

          {/* Arrow 5 */}
          <line x1="680" y1="118" x2="693" y2="118" stroke="#171717" strokeWidth="1.5" markerEnd="url(#asym-arrow)" />

          {/* 6. Receiver Node */}
          <rect x="695" y="92" width="50" height="52" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="720" y="114" textAnchor="middle" fontSize="10" fontWeight="bold">Bob</text>
          <text x="720" y="130" textAnchor="middle" fontSize="8" fill="#525252">M</text>

          {/* Bottom Principle Banner */}
          <rect x="15" y="165" width="730" height="22" rx="3" fill="#F2F2F2" />
          <text x="380" y="180" textAnchor="middle" fontSize="10" fontWeight="600" fill="#171717">
            Dual-Key Principle: Anyone can encrypt using Bob's public key (PU_B); ONLY Bob can decrypt with his private key (PR_B).
          </text>
        </svg>
      ),
    },
    {
      number: '03',
      titleEn: 'Data Integrity Algorithms',
      titleAr: 'خوارزميات سلامة وتكامل البيانات',
      academicDefinition:
        'Used to protect blocks of data, such as messages, software binaries, and documents, from unauthorized alteration, accidental truncation, or deliberate tampering. Produces fixed-size cryptographic digests or check values.',
      academicDefinitionAr:
        'تُستخدم لحماية كتل البيانات والرسائل والملفات من التعديل غير المصرح به أو الحذف أو التشويه المتعمد. تنتج بصمات رقمية فريدة وثابتة الحجم.',
      conceptualExplanation:
        'A one-way mathematical function generates a unique digital fingerprint. If even a single bit of the data is altered, the recalculated fingerprint changes completely.',
      conceptualExplanationAr:
        'دالة رياضية أحادية الاتجاه تنتج بصمة رقمية فريدة؛ لو تغير بت واحد في الملف، تتغير البصمة بالكامل فينكشف التلاعب فوراً.',
      applications: [
        'Secure cryptographic hash algorithms (SHA-256, SHA-3, SHA-512)',
        'Keyed-hash message authentication codes (HMAC)',
        'Software binary verification and blockchain block chaining',
      ],
      keyDistinction:
        'Ensures information has NOT been modified (integrity); does NOT conceal the content (confidentiality) by itself.',
      keyDistinctionAr:
        'تضمن عدم المساس بالبيانات وتكاملها، ولكنها لا تخفي محتوى الرسالة في حد ذاتها.',
      illustration: (
        <svg
          viewBox="0 0 760 190"
          className="w-full h-auto text-[#171717] select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <marker
              id="hash-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
            </marker>
          </defs>

          {/* Left: Sender side creating message and hash */}
          <rect x="15" y="30" width="115" height="50" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="72" y="52" textAnchor="middle" fontSize="11" fontWeight="bold">Original Data (M)</text>
          <text x="72" y="66" textAnchor="middle" fontSize="9" fill="#525252">Arbitrary Length</text>
          <text x="72" y="76" textAnchor="middle" fontSize="8" fill="#737373">رسالة بأي حجم</text>

          {/* Fork Arrow */}
          <path d="M 130 55 L 180 55" stroke="#171717" strokeWidth="1.5" markerEnd="url(#hash-arrow)" />
          <path d="M 72 80 L 72 110 L 180 110" fill="none" stroke="#171717" strokeWidth="1.5" markerEnd="url(#hash-arrow)" />

          {/* Hash Function Box */}
          <rect x="180" y="85" width="115" height="50" rx="4" fill="#171717" stroke="#171717" strokeWidth="1.5" />
          <text x="237" y="107" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">Hash Function (H)</text>
          <text x="237" y="122" textAnchor="middle" fontSize="9" fill="#E5E5E5">e.g. SHA-256</text>
          <text x="237" y="132" textAnchor="middle" fontSize="8" fill="#A3A3A3">دالة هاش أحادية الاتجاه</text>

          {/* Arrow to Digest */}
          <line x1="295" y1="110" x2="318" y2="110" stroke="#171717" strokeWidth="1.5" markerEnd="url(#hash-arrow)" />

          {/* Digest Box */}
          <rect x="320" y="85" width="105" height="50" rx="4" fill="#FAFAFA" stroke="#171717" strokeWidth="1.5" />
          <text x="372" y="106" textAnchor="middle" fontSize="10" fontWeight="bold">Digest h = H(M)</text>
          <text x="372" y="120" textAnchor="middle" fontSize="9" fill="#525252">Fixed Size (256b)</text>
          <text x="372" y="132" textAnchor="middle" fontSize="8" fill="#737373">بصمة رقمية ثابتة</text>

          {/* Insecure Channel Middle Box */}
          <rect
            x="440"
            y="25"
            width="60"
            height="115"
            rx="4"
            fill="#FFFFFF"
            stroke="#171717"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <text x="470" y="70" textAnchor="middle" fontSize="9" fontWeight="bold" transform="rotate(-90 470 70)">
            NETWORK CHANNEL [M, h]
          </text>

          {/* Transmission lines to receiver */}
          <line x1="180" y1="55" x2="440" y2="55" stroke="#171717" strokeWidth="1.5" />
          <line x1="425" y1="110" x2="440" y2="110" stroke="#171717" strokeWidth="1.5" />

          {/* Right: Receiver verification */}
          <path d="M 500 55 L 530 55" stroke="#171717" strokeWidth="1.5" markerEnd="url(#hash-arrow)" />
          <path d="M 500 110 L 635 110" stroke="#171717" strokeWidth="1.5" markerEnd="url(#hash-arrow)" />

          {/* Receiver Hash Box */}
          <rect x="530" y="32" width="100" height="46" rx="4" fill="#171717" stroke="#171717" strokeWidth="1.5" />
          <text x="580" y="52" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">Hash (H)</text>
          <text x="580" y="66" textAnchor="middle" fontSize="9" fill="#E5E5E5">h' = H(M')</text>

          {/* Arrow to Comparator */}
          <path d="M 630 55 L 655 55 L 655 80" fill="none" stroke="#171717" strokeWidth="1.5" markerEnd="url(#hash-arrow)" />

          {/* Comparator Node */}
          <rect x="635" y="80" width="40" height="40" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="655" y="103" textAnchor="middle" fontSize="10" fontWeight="bold">h ≟ h'</text>

          {/* Outcomes */}
          <line x1="675" y1="92" x2="695" y2="70" stroke="#171717" strokeWidth="1.5" markerEnd="url(#hash-arrow)" />
          <line x1="675" y1="108" x2="695" y2="125" stroke="#171717" strokeWidth="1.5" markerEnd="url(#hash-arrow)" />

          {/* Valid Box */}
          <rect x="695" y="55" width="55" height="28" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="722" y="72" textAnchor="middle" fontSize="9" fontWeight="bold">✓ Match</text>

          {/* Tamper Box */}
          <rect x="695" y="112" width="55" height="28" rx="3" fill="#171717" />
          <text x="722" y="129" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#FFFFFF">✗ Tamper</text>

          {/* Bottom Principle Banner */}
          <rect x="15" y="162" width="730" height="22" rx="3" fill="#F2F2F2" />
          <text x="380" y="177" textAnchor="middle" fontSize="10" fontWeight="600" fill="#171717">
            Integrity Principle: Hash functions are irreversible (one-way). Modifying even 1 bit in M produces an unpredictable mismatch in digest h'.
          </text>
        </svg>
      ),
    },
    {
      number: '04',
      titleEn: 'Authentication Protocols',
      titleAr: 'بروتوكولات المصادقة والتحقق من الهوية',
      academicDefinition:
        'Schemes based on the use of cryptographic algorithms designed to authenticate the identity of communicating entities, ensuring legitimate origin and thwarting masquerade, replay, or man-in-the-middle attacks.',
      academicDefinitionAr:
        'مخططات وبروتوكولات تعتمد على خوارزميات التشفير للتحقق الحاسم من هوية الكيانات المتواصلة، والتأكد من شرعية منشأ الرسائل لمنع الانتحال وإعادة البث.',
      conceptualExplanation:
        'A structured cryptographic dialogue (challenge-response, nonces, timestamps) proving that an entity possesses the legitimate credentials without revealing them.',
      conceptualExplanationAr:
        'حوار تشفيري منظم يثبت امتلاك الطرف الآخر للهوية الحقيقية والمفتاح السري دون كشف بيانات الاعتماد للمتنصتين.',
      applications: [
        'Mutual entity authentication (TLS 1.3 handshake, Kerberos tickets)',
        'Zero-knowledge proof protocols and challenge-response handshakes',
        'Multi-factor cryptographic authentication mechanisms (FIDO2 / WebAuthn)',
      ],
      keyDistinction:
        'Focuses on verifying ENTITY IDENTITY and temporal freshness of interactions, preventing masquerade and replay attacks.',
      keyDistinctionAr:
        'تركز على إثبات هوية الكيانات وجدة وحداثة الرسائل الزمنية لمنع انتحال الشخصية وهجمات إعادة الإرسال.',
      illustration: (
        <svg
          viewBox="0 0 760 195"
          className="w-full h-auto text-[#171717] select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <marker
              id="auth-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
            </marker>
          </defs>

          {/* Entity A Box (Alice) */}
          <rect x="20" y="15" width="130" height="145" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <rect x="20" y="15" width="130" height="28" rx="4" fill="#171717" />
          <text x="85" y="33" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">
            Entity A (Alice)
          </text>
          <text x="85" y="60" textAnchor="middle" fontSize="9" fill="#525252">Client / Initiator</text>
          <rect x="35" y="75" width="100" height="35" rx="3" fill="#FAFAFA" stroke="#E5E5E5" />
          <text x="85" y="90" textAnchor="middle" fontSize="9" fontWeight="bold">Shared Secret</text>
          <text x="85" y="102" textAnchor="middle" fontSize="8" fill="#525252">Key K_AB</text>
          <text x="85" y="135" textAnchor="middle" fontSize="8" fill="#737373">الطرف المطالب بالهوية</text>

          {/* Entity B Box (Bob) */}
          <rect x="610" y="15" width="130" height="145" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <rect x="610" y="15" width="130" height="28" rx="4" fill="#171717" />
          <text x="675" y="33" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">
            Entity B (Bob)
          </text>
          <text x="675" y="60" textAnchor="middle" fontSize="9" fill="#525252">Server / Verifier</text>
          <rect x="625" y="75" width="100" height="35" rx="3" fill="#FAFAFA" stroke="#E5E5E5" />
          <text x="675" y="90" textAnchor="middle" fontSize="9" fontWeight="bold">Shared Secret</text>
          <text x="675" y="102" textAnchor="middle" fontSize="8" fill="#525252">Key K_AB</text>
          <text x="675" y="135" textAnchor="middle" fontSize="8" fill="#737373">الطرف المحقق للمصادقة</text>

          {/* Dialogue Steps in Central Network Area */}
          {/* Step 1: Claim */}
          <line x1="150" y1="45" x2="600" y2="45" stroke="#171717" strokeWidth="1.5" markerEnd="url(#auth-arrow)" />
          <rect x="250" y="32" width="260" height="22" rx="3" fill="#FFFFFF" stroke="#E5E5E5" />
          <text x="380" y="46" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#171717">
            1. Identity Claim: "I am Alice" (ID_A)
          </text>

          {/* Step 2: Fresh Challenge Nonce */}
          <line x1="610" y1="85" x2="160" y2="85" stroke="#171717" strokeWidth="1.5" markerEnd="url(#auth-arrow)" />
          <rect x="220" y="72" width="320" height="22" rx="3" fill="#171717" />
          <text x="380" y="86" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">
            2. Challenge: Unpredictable Nonce (R_B) [تحدي فريد]
          </text>

          {/* Step 3: Cryptographic Proof */}
          <line x1="150" y1="125" x2="600" y2="125" stroke="#171717" strokeWidth="1.5" markerEnd="url(#auth-arrow)" />
          <rect x="210" y="112" width="340" height="22" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="1.25" />
          <text x="380" y="126" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#171717">
            3. Response: E_K(R_B) [Proof of Key Possession without Revealing K]
          </text>

          {/* Step 4: Verification Result */}
          <rect x="255" y="142" width="250" height="18" rx="3" fill="#FAFAFA" stroke="#E5E5E5" />
          <text x="380" y="155" textAnchor="middle" fontSize="9" fontWeight="600" fill="#525252">
            4. Bob decrypts: E_K(R_B) matches ⇒ Identity Authenticated!
          </text>

          {/* Bottom Principle Banner */}
          <rect x="15" y="168" width="730" height="22" rx="3" fill="#F2F2F2" />
          <text x="380" y="183" textAnchor="middle" fontSize="10" fontWeight="600" fill="#171717">
            Authentication Principle: Uses fresh nonces (Numbers used ONCE) so adversaries cannot replay intercepted responses.
          </text>
        </svg>
      ),
    },
  ];

  return (
    <ConceptCardGrid
      title="The Four Cryptographic Algorithm &amp; Protocol Areas"
      titleAr="المجالات الأربعة للخوارزميات والبروتوكولات التشفيرية"
      subtitle="Fundamental taxonomy of modern cryptography based on operational purpose and data types protected"
      items={items}
      columns={2}
    />
  );
}
