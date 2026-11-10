import React from 'react';
import HighlightedText from '../keywords/HighlightedText';

interface CryptoAreaItem {
  number: string;
  conceptEn: string;
  conceptAr: string;
  meaningEn: string;
  meaningAr: string;
  distinctionEn: string;
  distinctionAr: string;
  applicationEn: string;
  applicationAr: string;
}

const areas: CryptoAreaItem[] = [
  {
    number: '01',
    conceptEn: 'Symmetric Encryption',
    conceptAr: 'التشفير المتماثل (التقليدي)',
    meaningEn:
      'Uses a ==single shared secret key== for ==both encryption and decryption== to conceal data blocks or streams.',
    meaningAr:
      'يعتمد على ==مفتاح سري واحد مشترك== بين الطرفين ==للتشفير وفك التشفير== لإخفاء كتل أو تدفقات البيانات.',
    distinctionEn:
      'Handles ==data of ANY size== (bulk messages, large files, continuous communication streams).',
    distinctionAr:
      'الفارق الجوهري: يعالج كتل وتدفقات ==بيانات بأي حجم== (ملفات ضخمة، تدفقات شبكة مستمرة).',
    applicationEn:
      'Bulk storage encryption (AES-256, BitLocker) and network payloads (TLS sessions, IPsec).',
    applicationAr:
      'التطبيق: تشفير الملفات والأقراص (AES-256) وحزم جلسات الشبكة (TLS).',
  },
  {
    number: '02',
    conceptEn: 'Asymmetric Encryption',
    conceptAr: 'التشفير غير المتماثل (المفتاح العام)',
    meaningEn:
      'Uses a ==mathematically linked key pair== (==public key for encryption/verification==, ==private key for decryption/signing==).',
    meaningAr:
      'يعتمد على ==زوج مفاتيح مرتبط رياضياً== (==مفتاح عام للتشفير والتحقق==، و==مفتاح خاص لفك التشفير أو التوقيع==).',
    distinctionEn:
      'Strictly used for ==SMALL blocks of data== (keys and hash values); ==too computationally slow for bulk data==.',
    distinctionAr:
      'الفارق الجوهري: مخصص حصرياً للـ ==كتل صغيرة من البيانات== (المفاتيح وقيم الهاش)؛ ==بطيء حسابياً للبيانات الضخمة==.',
    applicationEn:
      'Key exchange protocols (Diffie-Hellman) and digital signatures (RSA, ECDSA).',
    applicationAr:
      'التطبيق: تبادل المفاتيح السرية (Diffie-Hellman) والتوقيعات الرقمية (RSA).',
  },
  {
    number: '03',
    conceptEn: 'Data Integrity Algorithms',
    conceptAr: 'خوارزميات سلامة البيانات (دوال الهاش)',
    meaningEn:
      'Transforms ==arbitrary-length input data into a fixed-length cryptographic digest== to detect unauthorized alterations.',
    meaningAr:
      'يحول ==البيانات بأي طول إلى بصمة رقمية ثابتة الطول== لكشف أي تعديل أو تلاعب غير مصرح به.',
    distinctionEn:
      'Protects against ==unauthorized modification (Integrity)==, ==not unauthorized reading (Confidentiality)==.',
    distinctionAr:
      'الفارق الجوهري: يحمي من ==التعديل غير المصرح به (السلامة)==، و==ليس من القراءة أو الإفشاء (السرية)==.',
    applicationEn:
      'Message Authentication Codes (HMAC) and cryptographic hash digests (SHA-256, SHA-3).',
    applicationAr:
      'التطبيق: كود توثيق الرسائل (HMAC) وبصمات الهاش الرقمية (SHA-256).',
  },
  {
    number: '04',
    conceptEn: 'Authentication Protocols',
    conceptAr: 'بروتوكولات المصادقة والتحقق من الهوية',
    meaningEn:
      'Structured cryptographic message-exchange schemes designed to ==verify the claimed identity== of entities.',
    meaningAr:
      'مخططات مبرمجة لتبادل الرسائل المشفرة تهدف للـ ==تحقق من الهوية المزعومة== للكيانات.',
    distinctionEn:
      'Verifies ==WHO is communicating and trusted origin==, preventing ==masquerade and replay attacks==.',
    distinctionAr:
      'الفارق الجوهري: يثبت ==هوية المتصل وموثوقية المصدر==، مانعاً ==هجمات انتحال الشخصية وإعادة الإرسال==.',
    applicationEn:
      'Enterprise mutual authentication (Kerberos, TLS handshake, Challenge-Response protocols).',
    applicationAr:
      'التطبيق: بروتوكولات المصادقة الثنائية (Kerberos, TLS Handshake, Challenge-Response).',
  },
];

export default function FourCryptoAreas(): React.ReactElement {
  return (
    <div className="w-full space-y-4">
      <div className="border border-[#E2E2DF] bg-[#F7F7F5] px-4 py-2.5 rounded-xl flex items-center justify-between text-xs">
        <span className="font-mono uppercase font-bold text-[#222222]">
          Four Cryptographic Areas (William Stallings 7th Ed.)
        </span>
        <span className="font-sans text-[#505050]" dir="rtl">
          المجالات التشفيرية الأربعة الأساسية وفق التصنيف المعتمد
        </span>
      </div>

      <div className="flex flex-col space-y-6 w-full">
        {areas.map((item) => (
          <div
            key={item.number}
            className="w-full p-6 sm:p-7 rounded-2xl border border-[#D4D4D0] bg-[#FFFFFF] space-y-5 hover:border-[#222222] transition-colors"
          >
            {/* Header: Number & Concept */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E2E2DF] pb-3.5 gap-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#222222] text-[#FFFFFF] font-mono text-sm font-bold flex items-center justify-center shrink-0">
                  {item.number}
                </span>
                <h4 className="text-[22px] sm:text-[24px] font-bold text-[#222222] tracking-tight">{item.conceptEn}</h4>
              </div>
              <span className="text-[18px] sm:text-[20px] font-bold text-[#505050] font-serif" dir="rtl">
                {item.conceptAr}
              </span>
            </div>

            {/* Meaning: English on top, Arabic directly below */}
            <div className="space-y-3 w-full">
              <span className="font-mono text-xs sm:text-[13px] uppercase font-bold tracking-wider text-[#686868] block">
                Meaning • المعنى الأكاديمي
              </span>
              <p className="text-[17px] sm:text-[18px] leading-[1.65] text-[#222222] font-sans">
                <HighlightedText text={item.meaningEn} />
              </p>
              <p className="text-[18px] sm:text-[19px] leading-[1.8] text-[#505050] font-serif pt-2 border-t border-[#F2F2F0]" dir="rtl">
                <HighlightedText text={item.meaningAr} isArabic />
              </p>
            </div>

            {/* Key Distinction */}
            <div className="p-4 rounded-xl bg-[#F7F7F5] border border-[#E2E2DF] space-y-2">
              <span className="font-mono text-xs sm:text-[13px] uppercase font-bold tracking-wider text-[#222222] block">
                Key Distinction • الفارق الجوهري
              </span>
              <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#222222] font-medium">
                <HighlightedText text={item.distinctionEn} />
              </p>
              <p className="text-[17px] sm:text-[18px] leading-[1.8] text-[#505050] font-serif pt-1.5 border-t border-[#E8E8E5]" dir="rtl">
                <HighlightedText text={item.distinctionAr} isArabic />
              </p>
            </div>

            {/* Application */}
            <div className="pt-2 text-sm sm:text-[15px] space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <span className="font-mono text-xs sm:text-[13px] uppercase font-bold tracking-wider text-[#686868] shrink-0">
                  Application / التطبيق:
                </span>
                <span className="text-[#222222] font-mono text-[14px] sm:text-[15px]">{item.applicationEn}</span>
              </div>
              <p className="text-[#505050] font-serif text-[15px] sm:text-[16px] leading-[1.8] pt-1" dir="rtl">
                {item.applicationAr}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
