import React, { useState } from 'react';

export default function CiaTriadDiagram(): React.ReactElement {
  const [activePillar, setActivePillar] = useState<'confidentiality' | 'integrity' | 'availability'>('confidentiality');

  const pillars = {
    confidentiality: {
      title: 'Confidentiality (السرية)',
      subtitle: 'Preserving authorized restrictions on information access and disclosure.',
      subtitleAr: 'حفظ القيود المصرح بها على الوصول إلى المعلومات وكشفها، بما في ذلك حماية الخصوصية والمعلومات الخاصة.',
      components: [
        { name: 'Data Confidentiality', desc: 'Assures private or confidential info is not made available or disclosed to unauthorized individuals.' },
        { name: 'Privacy', desc: 'Assures individuals control what information related to them may be collected and stored.' },
      ],
      threats: ['Snooping / Eavesdropping', 'Traffic analysis', 'Unauthorized database extraction'],
      primaryDefense: 'Symmetric & Asymmetric Encryption, Access Control Mechanisms',
      breachImpact: 'Unauthorized disclosure of trade secrets, student grades, or medical records.',
    },
    integrity: {
      title: 'Integrity (السلامة والتكامل)',
      subtitle: 'Guarding against improper information modification or destruction.',
      subtitleAr: 'الحماية من تعديل المعلومات أو تدميرها بطرق غير مصرح بها، ويشمل ذلك ضمان عدم الإنكار وموثوقية البيانات.',
      components: [
        { name: 'Data Integrity', desc: 'Assures information and programs are changed only in a specified and authorized manner.' },
        { name: 'System Integrity', desc: 'Assures that a system performs its intended function in an unimpaired manner.' },
      ],
      threats: ['Message modification', 'Replay attacks', 'Man-in-the-middle tampering', 'Unauthorized file edits'],
      primaryDefense: 'Cryptographic Hash Functions (SHA-256), HMAC, Digital Signatures',
      breachImpact: 'Tampering with medical prescription dosages or altering financial transaction amounts.',
    },
    availability: {
      title: 'Availability (التوافرية والجاهزية)',
      subtitle: 'Ensuring timely and reliable access to and use of information and services.',
      subtitleAr: 'ضمان الوصول الموثوق وفي الوقت المناسب إلى المعلومات واستخدامها من قِبل المستخدمين المصرح لهم.',
      components: [
        { name: 'Timely Access', desc: 'Authorized users have prompt access to services without unreasonable delay.' },
        { name: 'Service Reliability', desc: 'Critical systems resist unexpected hardware, network, or malicious disruptions.' },
      ],
      threats: ['Denial of Service (DoS)', 'Distributed DoS (DDoS)', 'Ransomware locking data', 'Physical infrastructure cuts'],
      primaryDefense: 'Redundancy, Load Balancing, Firewalls, Rate Limiting, Automated Failover',
      breachImpact: 'Outage of power grid management system, flight control systems, or hospital emergency networks.',
    },
  };

  const current = pillars[activePillar];

  return (
    <div className="border border-[#171717] rounded-lg p-6 bg-[#FFFFFF] space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E5E5E5] pb-3 gap-2">
        <div>
          <h3 className="text-sm font-bold text-[#171717]">
            The CIA Security Triad (NIST SP 800-33 / FIPS 199)
          </h3>
          <p className="text-xs text-[#737373]">
            The three core objectives of computer and network information security
          </p>
        </div>
        <span
          dir="rtl"
          className="text-xs font-semibold text-[#525252] font-serif"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          ثالوث أمن المعلومات: السرية والسلامة والتوافرية
        </span>
      </div>

      {/* Interactive Line-based Vector Triangle */}
      <div className="p-4 border border-[#E5E5E5] bg-[#FAFAFA] rounded-md flex justify-center">
        <svg viewBox="0 0 500 320" className="w-full max-w-[650px] select-none text-[#171717]">
          {/* Central Connecting Lines */}
          <polygon
            points="250,50 420,260 80,260"
            fill="none"
            stroke="#171717"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />

          {/* Central Security Core Label */}
          <circle cx="250" cy="190" r="32" fill="#FFFFFF" stroke="#171717" strokeWidth="1.5" />
          <text x="250" y="188" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#171717">
            SECURITY
          </text>
          <text x="250" y="202" textAnchor="middle" fontSize="9" fill="#525252">
            OBJECTIVES
          </text>

          {/* Lines from center to nodes */}
          <line x1="250" y1="158" x2="250" y2="70" stroke="#171717" strokeWidth="1.25" />
          <line x1="275" y1="205" x2="395" y2="250" stroke="#171717" strokeWidth="1.25" />
          <line x1="225" y1="205" x2="105" y2="250" stroke="#171717" strokeWidth="1.25" />

          {/* 1. Top Vertex: Confidentiality */}
          <g
            onClick={() => setActivePillar('confidentiality')}
            className="cursor-pointer"
          >
            <circle
              cx="250"
              cy="50"
              r="40"
              fill={activePillar === 'confidentiality' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="2"
            />
            <text
              x="250"
              y="47"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill={activePillar === 'confidentiality' ? '#FFFFFF' : '#171717'}
            >
              C
            </text>
            <text
              x="250"
              y="60"
              textAnchor="middle"
              fontSize="9"
              fontWeight="500"
              fill={activePillar === 'confidentiality' ? '#E5E5E5' : '#525252'}
            >
              Confidentiality
            </text>
          </g>

          {/* 2. Bottom-Right Vertex: Integrity */}
          <g
            onClick={() => setActivePillar('integrity')}
            className="cursor-pointer"
          >
            <circle
              cx="420"
              cy="260"
              r="40"
              fill={activePillar === 'integrity' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="2"
            />
            <text
              x="420"
              y="257"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill={activePillar === 'integrity' ? '#FFFFFF' : '#171717'}
            >
              I
            </text>
            <text
              x="420"
              y="270"
              textAnchor="middle"
              fontSize="9"
              fontWeight="500"
              fill={activePillar === 'integrity' ? '#E5E5E5' : '#525252'}
            >
              Integrity
            </text>
          </g>

          {/* 3. Bottom-Left Vertex: Availability */}
          <g
            onClick={() => setActivePillar('availability')}
            className="cursor-pointer"
          >
            <circle
              cx="80"
              cy="260"
              r="40"
              fill={activePillar === 'availability' ? '#171717' : '#FFFFFF'}
              stroke="#171717"
              strokeWidth="2"
            />
            <text
              x="80"
              y="257"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill={activePillar === 'availability' ? '#FFFFFF' : '#171717'}
            >
              A
            </text>
            <text
              x="80"
              y="270"
              textAnchor="middle"
              fontSize="9"
              fontWeight="500"
              fill={activePillar === 'availability' ? '#E5E5E5' : '#525252'}
            >
              Availability
            </text>
          </g>
        </svg>
      </div>

      {/* Selected Pillar Detailed Academic Card */}
      <div className="border border-[#171717] bg-[#FFFFFF] rounded-md p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-[#F2F2F2] pb-2">
          <h4 className="text-base font-bold text-[#171717]">{current.title}</h4>
          <span className="font-mono text-xs uppercase px-2 py-0.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded">
            NIST Standard
          </span>
        </div>

        <div className="space-y-1">
          <p className="text-[15px] font-medium text-[#171717] leading-relaxed">{current.subtitle}</p>
          <p dir="rtl" className="text-[14px] text-[#525252] font-serif" style={{ fontFamily: 'var(--font-arabic)' }}>
            {current.subtitleAr}
          </p>
        </div>

        {/* Dual Components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {current.components.map((comp, idx) => (
            <div key={idx} className="p-3 border border-[#E5E5E5] rounded bg-[#FAFAFA] space-y-1">
              <span className="font-bold text-xs text-[#171717] block">{comp.name}</span>
              <p className="text-xs text-[#525252] leading-relaxed">{comp.desc}</p>
            </div>
          ))}
        </div>

        {/* Threats and Defenses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#F2F2F2] text-xs">
          <div className="space-y-1">
            <span className="font-mono font-bold text-[#737373] uppercase">Primary Threat Vector:</span>
            <ul className="list-disc list-inside text-[#171717] space-y-0.5">
              {current.threats.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-1">
            <span className="font-mono font-bold text-[#737373] uppercase">Primary Defensive Control:</span>
            <p className="text-[#171717] font-medium leading-relaxed">{current.primaryDefense}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

