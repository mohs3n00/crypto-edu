import React, { useState } from 'react';

export default function PassiveActiveAttacksDiagram(): React.ReactElement {
  const [selectedCategory, setSelectedCategory] = useState<'passive' | 'active'>('passive');
  const [selectedSubtype, setSelectedSubtype] = useState<string>('release');

  const attackData = {
    passive: {
      title: 'Passive Attacks (الهجمات السلبية)',
      nature: 'In the nature of eavesdropping on, or monitoring of, transmissions. Goal is to obtain information without altering data.',
      natureAr: 'تتخذ طابع التنصت والمراقبة لعمليات نقل البيانات للحصول على معلومات سرية دون إحداث أي تعديل على البيانات أو موارد النظام.',
      philosophy: 'Emphasis on PREVENTION rather than Detection (since attacks leave no digital footprints or logs).',
      philosophyAr: 'التركيز الأساسي على المنع (Prevention) عبر التشفير القوي، لأن الهجوم لا يترك أثراً يمكن رصده.',
      subtypes: [
        {
          id: 'release',
          name: 'Release of Message Contents',
          nameAr: 'كشف محتويات الرسالة',
          desc: 'An unauthorized opponent reads the contents of transmitted telephone calls, emails, or sensitive data files.',
          descAr: 'تمكن المهاجم من قراءة النصوص والملفات والرسائل المتبادلة دون علم الطرفين.',
          defense: 'Strong end-to-end symmetric/asymmetric encryption of payloads.',
        },
        {
          id: 'traffic',
          name: 'Traffic Analysis',
          nameAr: 'تحليل حركة المرور',
          desc: 'Even if messages are masked by encryption, opponent observes the location and identity of communicating hosts, message frequency, and burst lengths to deduce communication intent.',
          descAr: 'حتى مع تشفير الرسائل، يرصد المهاجم عناوين وهوية الأطراف وتكرار وطول الرسائل لاستنتاج معلومات استخباراتية أو تجارية هامة.',
          defense: 'Traffic padding, continuous dummy keystream transmission, onion routing.',
        },
      ],
    },
    active: {
      title: 'Active Attacks (الهجمات النشطة)',
      nature: 'Involve some modification of the data stream or the creation of a false stream or denial of services.',
      natureAr: 'تتضمن تعديلاً مباشراً على تدفق البيانات، أو إدخال رسائل مزيفة ومصطنعة، أو تعطيل توفير الخدمات للمستخدمين.',
      philosophy: 'Emphasis on DETECTION and Recovery (complete prevention is infeasible due to physical/network vulnerabilities).',
      philosophyAr: 'التركيز الأساسي على الاكتشاف (Detection) والتعافي، لصعوبة المنع التام لجميع الثغرات المادية والبرمجية.',
      subtypes: [
        {
          id: 'masquerade',
          name: 'Masquerade (انتحال الهوية)',
          nameAr: 'انتحال الشخصية أو الهوية',
          desc: 'One entity pretends to be a different entity (e.g. capturing authentication sequence to gain unauthorized privileges).',
          descAr: 'ادعاء كيان بأنه كيان آخر مخول له صلاحيات أعلى للوصول غير المشروع للنظم.',
          defense: 'Mutual cryptographic authentication protocols, digital signatures, Kerberos.',
        },
        {
          id: 'replay',
          name: 'Replay (إعادة الإرسال)',
          nameAr: 'اعتراض وإعادة بث الرسائل',
          desc: 'The passive capture of a legitimate data unit and its subsequent retransmission to produce an unauthorized effect (e.g. repeating a money transfer request).',
          descAr: 'التقاط رسالة صحيحة ومشروعة وإعادة إرسالها لاحقاً لتنفيذ عملية غير مصرح بها (مثل تكرار تحويل مالي).',
          defense: 'Timestamps, sequence numbers, cryptographic nonces.',
        },
        {
          id: 'modification',
          name: 'Modification of Messages (تعديل الرسائل)',
          nameAr: 'تعديل أو تشويه الرسائل',
          desc: 'Some portion of a legitimate message is altered, or messages are delayed or reordered, to produce an unauthorized effect.',
          descAr: 'تغيير محتوى رسالة مشروعة (مثل تعديل رقم حساب أو مبلغ مالي) أو تأخيرها وتغيير ترتيبها.',
          defense: 'Message Authentication Codes (MAC), SHA-256 integrity checks, digital signatures.',
        },
        {
          id: 'dos',
          name: 'Denial of Service (حجب الخدمة)',
          nameAr: 'تعطيل الخدمة وحجبها',
          desc: 'Prevents or inhibits the normal use or management of communications facilities (e.g. flooding a network, disrupting server operations).',
          descAr: 'منع أو تعطيل الاستخدام الطبيعي لمرافق الاتصالات أو إغراق الخوادم بطلبات وهمية.',
          defense: 'Rate limiting, DDoS mitigation scrubbing, redundant cluster architecture.',
        },
      ],
    },
  };

  const currentCat = attackData[selectedCategory];
  const currentSub = currentCat.subtypes.find((s) => s.id === selectedSubtype) || currentCat.subtypes[0];

  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            Taxonomy of Threats: Passive vs. Active Attacks (Figure 1.3 & 1.4)
          </h3>
          <p className="text-xs text-[#737373]">
            Fundamental classification of OSI X.800 attacks and defensive strategies
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          تصنيف الهجمات: السلبية (المنع بالتشفير) مقابل النشطة (الاكتشاف والتعافي)
        </span>
      </div>

      {/* Category Toggle Tabs */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => {
            setSelectedCategory('passive');
            setSelectedSubtype('release');
          }}
          className={`py-3 px-4 border rounded-md text-left transition-all ${
            selectedCategory === 'passive'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FAFAFA] text-[#171717] hover:bg-[#F2F2F2]'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm">Passive Attacks</span>
            <span className="font-mono text-xs opacity-75">Goal: Prevention</span>
          </div>
          <span className="text-xs opacity-80 block mt-1 font-serif" dir="rtl">
            الهجمات السلبية (التنصت والمراقبة)
          </span>
        </button>

        <button
          type="button"
          onClick={() => {
            setSelectedCategory('active');
            setSelectedSubtype('masquerade');
          }}
          className={`py-3 px-4 border rounded-md text-left transition-all ${
            selectedCategory === 'active'
              ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
              : 'border-[#E5E5E5] bg-[#FAFAFA] text-[#171717] hover:bg-[#F2F2F2]'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm">Active Attacks</span>
            <span className="font-mono text-xs opacity-75">Goal: Detection</span>
          </div>
          <span className="text-xs opacity-80 block mt-1 font-serif" dir="rtl">
            الهجمات النشطة (التعديل والتعطيل)
          </span>
        </button>
      </div>

      {/* Subtypes Pills */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F2F2F2]">
        {currentCat.subtypes.map((sub) => {
          const isSelected = selectedSubtype === sub.id;
          return (
            <button
              key={sub.id}
              type="button"
              onClick={() => setSelectedSubtype(sub.id)}
              className={`px-3 py-1.5 rounded border text-xs font-medium transition-colors ${
                isSelected
                  ? 'border-[#171717] bg-[#171717] text-[#FFFFFF]'
                  : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#525252] hover:bg-[#FAFAFA] hover:text-[#171717]'
              }`}
            >
              {sub.name}
            </button>
          );
        })}
      </div>

      {/* Core Philosophical Defense Doctrine Card */}
      <div className="p-4 border-2 border-[#171717] bg-[#FAFAFA] rounded-md space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase font-bold text-[#171717]">
            Core Examination Doctrine / القاعدة الامتحانية المعتمدة:
          </span>
          <span className="font-mono text-xs bg-[#171717] text-[#FFFFFF] px-2 py-0.5 rounded">
            Key Rule
          </span>
        </div>
        <p className="text-sm font-semibold text-[#171717] leading-relaxed">
          {currentCat.philosophy}
        </p>
        <p dir="rtl" className="text-xs text-[#525252] font-serif" style={{ fontFamily: 'var(--font-arabic)' }}>
          {currentCat.philosophyAr}
        </p>
      </div>

      {/* Active Subtype Details */}
      <div className="p-5 border border-[#E5E5E5] bg-[#FFFFFF] rounded-md space-y-3">
        <div className="flex items-center justify-between border-b border-[#F2F2F2] pb-2">
          <h4 className="text-base font-bold text-[#171717]">{currentSub.name}</h4>
          <span
            dir="rtl"
            className="text-sm font-bold text-[#525252] font-serif"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {currentSub.nameAr}
          </span>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-[#171717] leading-relaxed">{currentSub.desc}</p>
          <p dir="rtl" className="text-xs text-[#525252] font-serif pt-1" style={{ fontFamily: 'var(--font-arabic)' }}>
            {currentSub.descAr}
          </p>
        </div>

        <div className="pt-3 border-t border-[#F2F2F2] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <span className="font-mono font-bold text-[#737373] uppercase">Prescribed Countermeasure:</span>
          <span className="font-mono font-bold text-[#171717] bg-[#FAFAFA] px-2.5 py-1 border border-[#E5E5E5] rounded">
            {currentSub.defense}
          </span>
        </div>
      </div>
    </div>
  );
}

