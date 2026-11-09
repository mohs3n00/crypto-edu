import React, { useState } from 'react';

export default function SecurityPentagonDiagram(): React.ReactElement {
  const [activeNode, setActiveNode] = useState<string>('confidentiality');

  const nodes = [
    {
      id: 'confidentiality',
      label: 'Confidentiality',
      labelAr: 'السرية',
      x: 200,
      y: 40,
      desc: 'Assures private or confidential information is not disclosed to unauthorized individuals. Comprises Data Confidentiality & Privacy.',
      descAr: 'ضمان عدم إفشاء المعلومات السرية لأشخاص غير مصرح لهم. تتألف من سرية البيانات والخصوصية الفردية.',
      example: 'Encrypting student grades, patient medical records, sensitive passwords.',
    },
    {
      id: 'integrity',
      label: 'Integrity',
      labelAr: 'السلامة',
      x: 350,
      y: 150,
      desc: 'Assures information and programs are changed only in authorized manner (Data Integrity) and system operates unimpaired (System Integrity).',
      descAr: 'ضمان عدم تعديل البيانات إلا بطرق مصرح بها وسلامة تشغيل النظام دون تلاعب غير مصرح به.',
      example: 'Hospital patient allergy information; financial accounting balances.',
    },
    {
      id: 'availability',
      label: 'Availability',
      labelAr: 'التوافرية',
      x: 290,
      y: 310,
      desc: 'Assures systems work promptly and authorized users are not denied service.',
      descAr: 'ضمان استجابة النظام وجاهزية الموارد للمستخدمين المصرح لهم دون انقطاع.',
      example: 'Defending against Denial of Service (DoS) attacks on university servers.',
    },
    {
      id: 'accountability',
      label: 'Accountability',
      labelAr: 'المساءلة',
      x: 110,
      y: 310,
      desc: 'The requirement that actions of an entity be traced uniquely to that entity, supporting audit trails, deterrence, and fault isolation.',
      descAr: 'تتبع تصرفات أي مستخدم ونسبها إليه حصرياً عبر سجلات التدقيق والمحاسبة.',
      example: 'Security audit logs tracking administrator database queries.',
    },
    {
      id: 'authenticity',
      label: 'Authenticity',
      labelAr: 'الموثوقية',
      x: 50,
      y: 150,
      desc: 'Verifying that users are who they say they are and that each input arriving at the system came from a trusted source.',
      descAr: 'التحقق من هوية المستخدمين وصحة منشأ أي بيانات أو مدخلات واردة للنظام.',
      example: 'Digital signatures on email transactions, cryptographic certificates.',
    },
  ];

  const active = nodes.find((n) => n.id === activeNode) || nodes[0];

  return (
    <div className="border border-neutral-gray p-6 bg-white rounded my-6">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <h4 className="text-base font-semibold text-near-black">
          Figure 1.1: Essential Computer & Network Security Requirements
        </h4>
        <span className="source-badge">Lecture Slide 7 / Stallings Fig 1.1</span>
      </div>
      <p className="text-xs text-dark-gray mb-4" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
        المتطلبات الخمسة الأساسية لأمن الحاسوب والشبكات (انقر على أي رأس في المضلع لعرض التفاصيل والأمثلة)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* SVG Pentagon */}
        <div className="flex justify-center">
          <svg viewBox="0 0 400 360" className="w-full max-w-[480px] select-none">
            {/* Center connector lines */}
            {nodes.map((n, i) => (
              <line
                key={`line-${i}`}
                x1="200"
                y1="180"
                x2={n.x}
                y2={n.y}
                stroke="#E5E5E5"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            ))}

            {/* Polygon perimeter */}
            <polygon
              points={nodes.map((n) => `${n.x},${n.y}`).join(' ')}
              fill="none"
              stroke="#525252"
              strokeWidth="2"
            />

            {/* Center label */}
            <circle cx="200" cy="180" r="34" fill="#FAFAFA" stroke="#171717" strokeWidth="1.5" />
            <text x="200" y="176" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#000000">
              SECURITY
            </text>
            <text x="200" y="190" textAnchor="middle" fontSize="9" fill="#525252">
              REQUIREMENTS
            </text>

            {/* Nodes */}
            {nodes.map((node) => {
              const isSelected = activeNode === node.id;
              return (
                <g
                  key={node.id}
                  onClick={() => setActiveNode(node.id)}
                  className="cursor-pointer transition-transform hover:scale-105"
                >
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isSelected ? '28' : '24'}
                    fill={isSelected ? '#000000' : '#FFFFFF'}
                    stroke="#000000"
                    strokeWidth={isSelected ? '2.5' : '1.5'}
                  />
                  <text
                    x={node.x}
                    y={node.y + 4}
                    textAnchor="middle"
                    fontSize={isSelected ? '9.5' : '8.5'}
                    fontWeight={isSelected ? 'bold' : '500'}
                    fill={isSelected ? '#FFFFFF' : '#000000'}
                  >
                    {node.label.slice(0, 5)}…
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Details Card */}
        <div className="p-5 border border-neutral-gray rounded bg-near-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-neutral-gray mb-3">
              <h5 className="font-semibold text-lg text-black">{active.label}</h5>
              <span className="text-sm font-semibold text-dark-gray" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
                {active.labelAr}
              </span>
            </div>
            <p className="text-xs text-dark-gray leading-relaxed mb-3">{active.desc}</p>
            <p className="text-xs text-dark-gray leading-relaxed mb-4" dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}>
              {active.descAr}
            </p>
          </div>

          <div className="pt-3 border-t border-neutral-gray">
            <span className="text-[10px] uppercase font-bold tracking-wider text-dark-gray block mb-1">
              Practical Scenario / Exam Example:
            </span>
            <p className="text-xs font-mono text-black bg-white p-2 rounded border border-light-gray">
              {active.example}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

