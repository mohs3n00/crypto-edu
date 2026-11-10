import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  CheckCircle2,
  Circle,
  ArrowLeft,
  ArrowRight,
  Clock,
  Check,
  Sparkles,
  Brain,
} from 'lucide-react';
import { getLessonById, getAdjacentLessons, getChapterById } from '../data/chapters';
import { allQuestions } from '../data/questions';
import { useProgress } from '../store/progressStore';
import { useUI } from '../store/uiStore';
import MathDisplay from '../components/ui/MathDisplay';
import { HighlightedText } from '../components/keywords';

// Educational Presentation Components
import DefinitionCard from '../components/educational/DefinitionCard';
import FourCryptoAreas from '../components/educational/FourCryptoAreas';
import {
  SymmetricVsAsymmetricTable,
  BlockVsStreamTable,
} from '../components/educational/CryptoComparisons';
import WorkedSolutionPanel from '../components/educational/WorkedSolutionPanel';
import ExamNoteCallout from '../components/educational/ExamNoteCallout';
import AIProviderActions from '../components/ai/AIProviderActions';
import SectionAssessment from '../components/educational/SectionAssessment';
import LargeDiagramContainer from '../components/diagrams/LargeDiagramContainer';

// Educational Diagrams
import SecurityPentagonDiagram from '../components/diagrams/SecurityPentagonDiagram';
import CiaTriadDiagram from '../components/diagrams/CiaTriadDiagram';
import PassiveActiveAttacksDiagram from '../components/diagrams/PassiveActiveAttacksDiagram';
import NetworkSecurityModelDiagram from '../components/diagrams/NetworkSecurityModelDiagram';
import SymmetricModelDiagram from '../components/diagrams/SymmetricModelDiagram';
import PlayfairRulesDiagram from '../components/diagrams/PlayfairRulesDiagram';
import FeistelNetworkDiagram from '../components/diagrams/FeistelNetworkDiagram';
import DesArchitectureDiagram from '../components/diagrams/DesArchitectureDiagram';
import DesRoundFunctionDiagram from '../components/diagrams/DesRoundFunctionDiagram';
import DoubleDesMitMDiagram from '../components/diagrams/DoubleDesMitMDiagram';
import BlockCipherModesDiagram from '../components/diagrams/BlockCipherModesDiagram';
import EuclideanLadderDiagram from '../components/diagrams/EuclideanLadderDiagram';
import CaesarWheelDiagram from '../components/diagrams/CaesarWheelDiagram';
import AvalancheEffectDiagram from '../components/diagrams/AvalancheEffectDiagram';
import CrtWorkflowDiagram from '../components/diagrams/CrtWorkflowDiagram';
import ExtendedEuclideanDiagram from '../components/diagrams/ExtendedEuclideanDiagram';
import FermatEulerDiagram from '../components/diagrams/FermatEulerDiagram';
import MillerRabinDiagram from '../components/diagrams/MillerRabinDiagram';
import HillCipherDiagram from '../components/diagrams/HillCipherDiagram';
import VigenereDiagram from '../components/diagrams/VigenereDiagram';
import VernamOtpDiagram from '../components/diagrams/VernamOtpDiagram';
import DesKeyScheduleDiagram from '../components/diagrams/DesKeyScheduleDiagram';
import AsymmetricVsSymmetricDiagram from '../components/diagrams/AsymmetricVsSymmetricDiagram';

// Interactive Lab Tools for embedded previews
import CaesarTool from '../components/tools/CaesarTool';
import PlayfairTool from '../components/tools/PlayfairTool';
import HillTool from '../components/tools/HillTool';
import DesSBoxTool from '../components/tools/DesSBoxTool';
import EuclideanTool from '../components/tools/EuclideanTool';
import ModCalcTool from '../components/tools/ModCalcTool';
import ModesSimulator from '../components/tools/ModesSimulator';

export default function LessonViewer(): React.ReactElement {
  const { chapterId, lessonId } = useParams<{ chapterId: string; lessonId: string }>();
  const { isLessonCompleted, toggleLessonCompleted } = useProgress();
  const { t, language } = useUI();
  const isArabic = language === 'ar';

  const lesson = lessonId ? getLessonById(lessonId) : undefined;
  const chapter = chapterId ? getChapterById(chapterId) : undefined;
  const { prev, next } = lessonId ? getAdjacentLessons(lessonId) : {};

  // Scroll to top when lesson changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lessonId]);

  if (!lesson || !chapter) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-[#171717] mb-2">Lesson Not Found</h2>
        <p className="text-base text-[#525252] mb-6">
          The requested lesson could not be located in the curriculum.
        </p>
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded text-sm hover:bg-[#333333]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Course Outline
        </Link>
      </div>
    );
  }

  const completed = isLessonCompleted(lesson.id);
  const content = lesson.content || {};

  // Relevant questions for this lesson
  const practiceQuestions = (lesson.questions && lesson.questions.length > 0)
    ? lesson.questions
    : (lesson.practiceQuestions && lesson.practiceQuestions.length > 0)
    ? lesson.practiceQuestions
    : allQuestions.filter((q) => q.chapterId === chapter.id && (q.relatedLessonId === lesson.id || !q.relatedLessonId)).slice(0, 4);

  // Unified Practice & Assessment Questions for this lesson
  // Extract English and Arabic paragraphs
  const enSections = content.sections?.filter((s) => s.lang === 'en' || s.lang === 'both') || [];
  const arSections = content.sections?.filter((s) => s.lang === 'ar' || s.lang === 'both') || [];

  return (
    <article className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 selectable-educational-content">
      {/* Top Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] text-[14px]">
        <div className="flex items-center gap-2 text-[#525252]">
          <Link to="/learn" className="hover:text-[#000000] font-medium">
            {t('courseOutline')}
          </Link>
          <span>/</span>
          <Link to={`/learn/${chapter.id}`} className="hover:text-[#000000] font-medium">
            Unit {chapter.number}
          </Link>
          <span>/</span>
          <span className="text-[#000000] font-semibold truncate max-w-xs">{lesson.title}</span>
        </div>
      </nav>

      {/* Lesson Header Area — Fluid Full Width with Balanced Objectives */}
      <header className="w-full space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs px-2.5 py-1 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded font-bold">
            Chapter {chapter.number} • Unit Module
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#525252] font-medium">
            <Clock className="w-4 h-4 text-[#171717]" />
            {lesson.estimatedMinutes} minutes study time
          </span>
          {lesson.sourceRef && (
            <span className="font-mono text-xs text-[#525252] border border-[#E5E5E5] px-2.5 py-0.5 rounded bg-[#FAFAFA]">
              Source: {lesson.sourceRef.file} {lesson.sourceRef.page ? `(p. ${lesson.sourceRef.page})` : ''} {lesson.sourceRef.slide ? `(slide ${lesson.sourceRef.slide})` : ''}
            </span>
          )}
          {completed && (
            <span className="flex items-center gap-1 text-xs border border-[#171717] px-2.5 py-1 rounded text-[#171717] font-semibold ml-auto bg-[#FAFAFA]">
              <Check className="w-4 h-4" />
              Completed
            </span>
          )}
        </div>

        {/* Big Bold Titles */}
        <div className="space-y-2 pt-2 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] leading-tight">
            {lesson.title}
          </h1>
          <h2
            dir="rtl"
            className="text-2xl sm:text-3xl font-bold text-[#171717] font-serif leading-snug"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {lesson.titleAr}
          </h2>
        </div>
      </header>

      {/* Main Educational Exposition */}
      <section className="space-y-10 leading-relaxed w-full">
        {/* Formal Definition Card — Adaptive Full Width */}
        {(content.enDefinition || content.arExplanation) && (
          <div className="w-full">
            <DefinitionCard
              term={lesson.title}
              termAr={lesson.titleAr}
              formalDefinition={content.enDefinition || ''}
              formalDefinitionAr={content.arExplanation || ''}
              sourceStandard={lesson.sourceRef?.file.replace('.pdf', '').replace('.pptx', '')}
            />
          </div>
        )}

        {/* ======================================================== */}
        {/* Large Visual Diagrams Suite (Wider Content Area Layout) */}
        {/* ======================================================== */}

        {/* 1. Chapter 1: Four Cryptographic Algorithm Areas */}
        {lesson.id === 'ch1-l1' && (
          <LargeDiagramContainer
            title="Four Cryptographic Algorithm Areas (Symmetric, Asymmetric, Data Integrity, Authentication)"
            titleAr="المجالات الأربعة الأساسية لخوارزميات التشفير"
            description="Four fundamental areas of cryptographic algorithms: Symmetric-key cryptography, Asymmetric-key cryptography, Data Integrity algorithms (hash functions), and Authentication protocols."
            sourceStandard="Stallings 8th Ed."
            widthMode="full"
          >
            <FourCryptoAreas />
          </LargeDiagramContainer>
        )}

        {/* 2. Chapter 1: Asymmetric vs Symmetric Cryptographic Architecture */}
        {lesson.id === 'ch1-l2' && (
          <LargeDiagramContainer
            title="Symmetric vs. Asymmetric (Public-Key) Cryptographic Architecture"
            titleAr="المقارنة المعمارية بين التشفير المتماثل والتشفير غير المتماثل (المفتاح العام)"
            description="Comparative analysis of shared secret keys vs. mathematical public/private key pairs for confidentiality and digital signatures."
            sourceStandard="Stallings Fig 1.2"
            widthMode="full"
          >
            <AsymmetricVsSymmetricDiagram />
          </LargeDiagramContainer>
        )}

        {/* 3. Chapter 1: CIA Triad Diagram */}
        {lesson.id === 'ch1-l3' && (
          <LargeDiagramContainer
            title="CIA Triad & Key Security Objectives (Confidentiality, Integrity, Availability)"
            titleAr="ثالوث أمن المعلومات CIA والأهداف الأمنية المعتمدة"
            description="CIA Triad architecture (Confidentiality, Integrity, Availability) alongside Authenticity and Accountability based on NIST SP 800-33 and RFC 4949."
            sourceStandard="NIST SP 800-33 / RFC 4949"
            widthMode="wide"
          >
            <CiaTriadDiagram />
          </LargeDiagramContainer>
        )}

        {/* 4. Chapter 1: Security Pentagon Diagram */}
        {lesson.id === 'ch1-l5' && (
          <LargeDiagramContainer
            title="Security Pentagon Model (Five Pillars of Information Assurance)"
            titleAr="نموذج البنتاغون الأمني (الركائز الخمس لضمان أمن المعلومات)"
            description="Five security pillars: Confidentiality, Integrity, Availability, Authenticity, and Non-repudiation."
            sourceStandard="Stallings Fig 1.1"
            widthMode="wide"
          >
            <SecurityPentagonDiagram />
          </LargeDiagramContainer>
        )}

        {/* 5. Chapter 1: Passive vs Active Attacks */}
        {(lesson.id === 'ch1-l10' || lesson.id === 'ch1-l11') && (
          <LargeDiagramContainer
            title="Classification of Security Attacks: Passive vs. Active"
            titleAr="تصنيف الهجمات الأمنية: السلبية مقابل الإيجابية النشطة"
            description="Taxonomy distinguishing passive attacks (eavesdropping, traffic analysis) from active attacks (masquerade, replay, message modification, DoS)."
            sourceStandard="RFC 4949 / X.800"
            widthMode="full"
          >
            <PassiveActiveAttacksDiagram />
          </LargeDiagramContainer>
        )}

        {/* 6. Chapter 1: Network Security Model */}
        {(lesson.id === 'ch1-l16' || lesson.id === 'ch1-l17') && (
          <LargeDiagramContainer
            title="Model for Network Security Architecture (Stallings Fig 1.3)"
            titleAr="نموذج أمن الشبكات والبيئة الأمنية العامة"
            description="Network security model: sender, receiver, insecure channel, security transformation (cipher/MAC), trusted third party (KDC/CA), and opponent interception points."
            sourceStandard="Stallings Fig 1.3"
            widthMode="wide"
          >
            <NetworkSecurityModelDiagram />
          </LargeDiagramContainer>
        )}

        {/* 7. Chapter 2: Euclidean Algorithm Ladder */}
        {lesson.id === 'ch2-l4' && (
          <LargeDiagramContainer
            title="Euclidean Algorithm Step Ladder (gcd(710, 310))"
            titleAr="خوارزمية إقليدس لحساب القاسم المشترك الأكبر"
            description="Step-by-step division algorithm calculating gcd(a, b) = gcd(b, a mod b) until remainder zero."
            sourceStandard="Stallings Ch 2 / Euclid"
            widthMode="wide"
          >
            <EuclideanLadderDiagram />
          </LargeDiagramContainer>
        )}

        {/* 8. Chapter 2: Extended Euclidean Algorithm & Bézout Identity */}
        {lesson.id === 'ch2-l7' && (
          <LargeDiagramContainer
            title="Extended Euclidean Algorithm — Bézout Identity & Modular Inverse"
            titleAr="خوارزمية إقليدس الممتدة لحساب المعكوس الضربي المعياري ومتطابقة بيزو"
            description="Step-by-step calculation of Bézout coefficients (s, t) such that as + bt = gcd(a, b) = 1, yielding the modular multiplicative inverse."
            sourceStandard="Stallings Table 2.4"
            widthMode="full"
          >
            <ExtendedEuclideanDiagram />
          </LargeDiagramContainer>
        )}

        {/* 9. Chapter 2: Fermat's Little Theorem & Euler's Generalization */}
        {(lesson.id === 'ch2-l8' || lesson.id === 'ch2-l9') && (
          <LargeDiagramContainer
            title="Fermat's Little Theorem & Euler's Totient Generalization"
            titleAr="مبرهنة فيرما الصغرى ومبرهنة أويلر المعممة ودالة المؤشر"
            description="Theorem conditions, modular exponent reduction methods, and totient function calculation for prime, prime power, and composite moduli."
            sourceStandard="Stallings Ch 2"
            widthMode="full"
          >
            <FermatEulerDiagram />
          </LargeDiagramContainer>
        )}

        {/* 10. Chapter 2: Miller-Rabin Primality Algorithm Flowchart */}
        {lesson.id === 'ch2-l10' && (
          <LargeDiagramContainer
            title="Miller-Rabin Probabilistic Primality Testing Algorithm"
            titleAr="خوارزمية ميلر-رابين لاختبار أولية الأعداد الكبيرة"
            description="Algorithmic decision tree: factoring n - 1 = 2^k q, base selection, evaluating inconclusive vs. composite outcomes."
            sourceStandard="Stallings Ch 2 / Miller-Rabin"
            widthMode="full"
          >
            <MillerRabinDiagram />
          </LargeDiagramContainer>
        )}

        {/* 11. Chapter 2: Chinese Remainder Theorem (CRT) Workflow */}
        {lesson.id === 'ch2-l11' && (
          <LargeDiagramContainer
            title="Chinese Remainder Theorem (CRT) System of Congruences Workflow"
            titleAr="مسار حل نظام التطابقات الخطية باستخدام مبرهنة الباقي الصينية"
            description="Solving simultaneous linear congruences: verifying pairwise coprimality gcd(m_i, m_j) = 1, computing M, M_i = M/m_i, modular inverses y_i = M_i^-1 mod m_i, and total solution x = sum(a_i * M_i * y_i) mod M."
            sourceStandard="Stallings Ch 2 / Sun Zi"
            widthMode="wide"
          >
            <CrtWorkflowDiagram />
          </LargeDiagramContainer>
        )}

        {/* 12. Chapter 3: Symmetric Model (Figure 3.1) */}
        {lesson.id === 'ch3-l1' && (
          <LargeDiagramContainer
            title="Symmetric Cipher Model & Cryptosystem Components (Stallings Fig 3.1)"
            titleAr="نموذج التشفير المتماثل ومكوناته الأساسية الخمسة"
            description="Five components: Plaintext X, Secret Key K, Encryption Algorithm E, Ciphertext Y = E(K, X), Decryption Algorithm D with X = D(K, Y)."
            sourceStandard="Stallings Fig 3.1"
            widthMode="full"
          >
            <div className="space-y-6 w-full">
              <SymmetricModelDiagram />
              <SymmetricVsAsymmetricTable />
            </div>
          </LargeDiagramContainer>
        )}

        {/* 13. Chapter 3: Caesar Shift Wheel & Modular Mapping */}
        {lesson.id === 'ch3-l3' && (
          <LargeDiagramContainer
            title="Caesar Cipher Modular Shift Wheel (Z_26 Mapping)"
            titleAr="عجلة الإزاحة المعيارية لشفرة قيصر (المجال Z26)"
            description="Modular arithmetic mapping: C = (P + k) mod 26 and P = (C - k) mod 26 over the 26 English letters."
            sourceStandard="Classical Cryptography"
            widthMode="wide"
          >
            <CaesarWheelDiagram />
          </LargeDiagramContainer>
        )}

        {/* 14. Chapter 3: Playfair Rules Diagram */}
        {lesson.id === 'ch3-l5' && (
          <LargeDiagramContainer
            title="Playfair Cipher 5x5 Matrix Encryption Rules"
            titleAr="قواعد التشفير الثلاث لثنائيات مصفوفة بليفير"
            description="Three rules: Same row (shift right mod 5), same column (shift down mod 5), and rectangle rule (swap column coordinates)."
            sourceStandard="Classical Cryptography"
            widthMode="wide"
          >
            <PlayfairRulesDiagram />
          </LargeDiagramContainer>
        )}

        {/* 15. Chapter 3: Hill Cipher 2x2 Matrix & Inversion */}
        {lesson.id === 'ch3-l6' && (
          <LargeDiagramContainer
            title="Hill Cipher 2x2 Matrix Architecture & Modulo 26 Inversion"
            titleAr="شفرة هيل المصفوفية والشرط الجبري لوجود المعكوس في المجال المعياري 26"
            description="Polygraphic substitution via matrix multiplication C = K · P mod 26, determinant condition gcd(det(K), 26) = 1, and adjugate inversion."
            sourceStandard="Stallings Ch 3"
            widthMode="full"
          >
            <HillCipherDiagram />
          </LargeDiagramContainer>
        )}

        {/* 16. Chapter 3: Vigenère Cipher & Autokey Alignment */}
        {lesson.id === 'ch3-l7' && (
          <LargeDiagramContainer
            title="Vigenère Polyalphabetic Cipher & Autokey Alignment"
            titleAr="شفرة فيجينير المتعددة الأبجدية ومحاذاة المفتاح الدوري والتلقائي"
            description="Letter mapping C_i = (P_i + K_i) mod 26, repeated keyword alignment, and the autokey technique to break periodicity."
            sourceStandard="Stallings Ch 3"
            widthMode="full"
          >
            <VigenereDiagram />
          </LargeDiagramContainer>
        )}

        {/* 17. Chapter 3: Vernam Cipher & One-Time Pad Perfect Secrecy */}
        {lesson.id === 'ch3-l8' && (
          <LargeDiagramContainer
            title="Vernam Cipher & One-Time Pad (OTP) — Bitwise XOR & Perfect Secrecy"
            titleAr="شفرة فيرنام ولوحة المرة الواحدة — عملية XOR الثنائية والأمان التام لشانون"
            description="Bitwise XOR encryption C_i = P_i ⊕ K_i, Shannon perfect secrecy proof, and key reuse vulnerabilities."
            sourceStandard="Shannon 1949 / Stallings Ch 3"
            widthMode="full"
          >
            <VernamOtpDiagram />
          </LargeDiagramContainer>
        )}

        {/* 18. Chapter 4: Stream vs Block Comparison */}
        {lesson.id === 'ch4-l1' && (
          <LargeDiagramContainer
            title="Stream Ciphers vs. Block Ciphers Architectural Comparison"
            titleAr="المقارنة المعمارية بين تشفير التدفق وتشفير الكتل"
            description="Comparative analysis of Stream Ciphers (bit/byte XOR, LFSR/RC4, continuous keystream) vs Block Ciphers (64/128-bit blocks, Feistel/SPN rounds, diffusion & confusion)."
            sourceStandard="NIST SP 800-38A"
            widthMode="full"
          >
            <BlockVsStreamTable />
          </LargeDiagramContainer>
        )}

        {/* 19. Chapter 4: Feistel Network Diagram */}
        {lesson.id === 'ch4-l4' && (
          <LargeDiagramContainer
            title="Feistel Cipher Network Architecture (Horst Feistel)"
            titleAr="البنية الهيكلية لشبكة فايستل المتماثلة"
            description="Feistel round architecture: L_i = R_{i-1}, R_i = L_{i-1} XOR F(R_{i-1}, K_i), cross-swap, and identical decryption with reversed keys."
            sourceStandard="IBM / Horst Feistel"
            widthMode="wide"
          >
            <FeistelNetworkDiagram />
          </LargeDiagramContainer>
        )}

        {/* 20. Chapter 4: DES Overall Architecture & Key Schedule */}
        {lesson.id === 'ch4-l5' && (
          <div className="space-y-6 w-full">
            <LargeDiagramContainer
              title="Data Encryption Standard (DES) 16-Round Architecture"
              titleAr="الهيكلية العامة لخوارزمية DES القياسية (16 دورة)"
              description="16-round Feistel structure: 64-bit plaintext, Initial Permutation (IP), 16 identical rounds using 48-bit subkeys derived from 56-bit key, 32-bit swap, and Inverse Initial Permutation (IP^-1)."
              sourceStandard="FIPS PUB 46-3"
              widthMode="full"
            >
              <DesArchitectureDiagram />
            </LargeDiagramContainer>

            <LargeDiagramContainer
              title="DES 16-Round Subkey Generation Schedule (FIPS 46-3)"
              titleAr="جدول توليد المفاتيح الفرعية في خوارزمية DES القياسية"
              description="64-bit key ➔ PC-1 (56 bits) ➔ 28-bit Halves (C_0, D_0) ➔ 16 rounds of 1-bit / 2-bit circular left shifts ➔ PC-2 (48-bit K_i)."
              sourceStandard="FIPS PUB 46-3"
              widthMode="full"
            >
              <DesKeyScheduleDiagram />
            </LargeDiagramContainer>
          </div>
        )}

        {/* 21. Chapter 4: DES Round Function F & S-Boxes */}
        {lesson.id === 'ch4-l6' && (
          <LargeDiagramContainer
            title="DES Round Function F and 8 Substitution Boxes (S-Boxes)"
            titleAr="دالة الدورة F وصناديق الاستبدال الثمانية (S-Boxes)"
            description="DES Round Function: 32-bit input, 32-to-48 bit expansion E, XOR with 48-bit round key K_i, 8 parallel non-linear 6-to-4 S-boxes, and 32-bit permutation P."
            sourceStandard="FIPS PUB 46-3"
            widthMode="wide"
          >
            <DesRoundFunctionDiagram />
          </LargeDiagramContainer>
        )}

        {/* 22. Chapter 4: DES Avalanche Effect Cascading */}
        {lesson.id === 'ch4-l7' && (
          <LargeDiagramContainer
            title="DES Strict Avalanche Criterion (SAC) & BIC Demonstration"
            titleAr="خاصية الانهيار الجليدي (Avalanche Effect) في DES"
            description="Avalanche effect demonstration: flipping 1 bit in plaintext or key flips approximately 50% of ciphertext bits after round 16."
            sourceStandard="FIPS PUB 46-3"
            widthMode="wide"
          >
            <AvalancheEffectDiagram />
          </LargeDiagramContainer>
        )}

        {/* 23. Chapter 7: Double-DES & Meet-in-the-Middle Attack */}
        {lesson.id === 'ch7-l1' && (
          <LargeDiagramContainer
            title="Double-DES & Meet-in-the-Middle (MitM) Cryptanalytic Attack"
            titleAr="التشفير المزدوج Double-DES وهجوم اللقاء في المنتصف (MitM)"
            description="Meet-in-the-Middle cryptanalytic attack: matching intermediate state X = E(K1, P) against X' = D(K2, C) using 2^56 hash table, reducing search space from 2^112 to 2^57."
            sourceStandard="Diffie & Hellman 1977"
            widthMode="wide"
          >
            <DoubleDesMitMDiagram />
          </LargeDiagramContainer>
        )}

        {/* 24. Chapter 7: Block Cipher Modes (Contextual Views per Lesson) */}
        {lesson.id === 'ch7-l3' && (
          <LargeDiagramContainer
            title="NIST SP 800-38A Electronic Codebook (ECB) Mode"
            titleAr="نمط دفتر الرموز الإلكتروني (ECB) وتحليل الثغرات"
            description="Independent block encryption, identical block pattern leakage, and cut-and-paste manipulation attacks."
            sourceStandard="NIST SP 800-38A"
            widthMode="full"
          >
            <BlockCipherModesDiagram initialMode="ecb" />
          </LargeDiagramContainer>
        )}

        {lesson.id === 'ch7-l4' && (
          <LargeDiagramContainer
            title="NIST SP 800-38A Cipher Block Chaining (CBC) Mode"
            titleAr="نمط ربط كتل الشفرات (CBC) ومحاكاة سريان الأخطاء"
            description="Chaining feedback C_i = E(K, P_i ⊕ C_{i-1}), Initialization Vector (IV) role, and 1-bit error propagation limits."
            sourceStandard="NIST SP 800-38A"
            widthMode="full"
          >
            <BlockCipherModesDiagram initialMode="cbc" />
          </LargeDiagramContainer>
        )}

        {lesson.id === 'ch7-l6' && (
          <LargeDiagramContainer
            title="NIST SP 800-38A Stream Modes: CFB, OFB & Counter (CTR)"
            titleAr="أنماط التشفير التدفقي: CFB و OFB ونمط العداد CTR"
            description="Feedback structures converting block ciphers to stream ciphers, error propagation immunity in OFB, and parallel processing in CTR mode."
            sourceStandard="NIST SP 800-38A"
            widthMode="full"
          >
            <BlockCipherModesDiagram initialMode="ctr" />
          </LargeDiagramContainer>
        )}

        {/* Detailed Academic Exposition — Single-Column Full-Width Layout */}
        {(enSections.length > 0 || arSections.length > 0) && (
          <div className="w-full pt-2 space-y-6">
            {/* English Academic Exposition Card */}
            {enSections.length > 0 && (
              <div className="w-full border border-[#D4D4D0] bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs hover:border-[#222222] transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E2E2DF] pb-3.5 gap-2">
                  <div className="text-xs sm:text-[13px] font-mono font-bold tracking-wider uppercase text-[#686868]">
                    Academic Exposition & Theoretical Foundations (English)
                  </div>
                  <AIProviderActions
                    context={{
                      sectionTitle: `${lesson.title} - Academic Exposition (English)`,
                      content: enSections
                        .map((s) => (typeof s.content === 'string' ? s.content : JSON.stringify(s.content)))
                        .join('\n\n'),
                      promptType: 'concept',
                      lessonTitle: lesson.title,
                      chapterTitle: `Chapter ${chapter.number}: ${chapter.title}`,
                    }}
                    variant="compact"
                  />
                </div>
                <div className="text-[#222222] text-[17px] sm:text-[18px] space-y-5 leading-[1.65] font-sans">
                  {enSections.map((sec, idx) => (
                    <div key={idx} className="whitespace-pre-line">
                      {typeof sec.content === 'string' ? (
                        <HighlightedText text={sec.content} />
                      ) : (
                        JSON.stringify(sec.content)
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Arabic Academic Exposition Card — Directly Below English */}
            {arSections.length > 0 && (
              <div className="w-full border border-[#D4D4D0] bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs hover:border-[#222222] transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E2E2DF] pb-3.5 gap-2">
                  <div
                    dir="rtl"
                    className="text-xs sm:text-[13px] font-mono font-bold tracking-wider uppercase text-[#686868] font-serif"
                    style={{ fontFamily: 'var(--font-arabic)' }}
                  >
                    التأصيل والتحليل الأكاديمي الشامل (اللغة العربية)
                  </div>
                  <AIProviderActions
                    context={{
                      sectionTitle: `${lesson.titleAr || lesson.title} - التحليل الأكاديمي الشامل`,
                      content: arSections
                        .map((s) => (typeof s.content === 'string' ? s.content : JSON.stringify(s.content)))
                        .join('\n\n'),
                      promptType: 'concept',
                      lessonTitle: lesson.titleAr || lesson.title,
                      chapterTitle: `Chapter ${chapter.number}: ${chapter.titleAr || chapter.title}`,
                      language: 'ar',
                    }}
                    variant="compact"
                  />
                </div>
                <div
                  dir="rtl"
                  className="text-[#222222] text-[18px] sm:text-[19px] space-y-5 leading-[1.8] whitespace-pre-line font-serif"
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  {arSections.map((sec, idx) => (
                    <div key={idx} className="whitespace-pre-line">
                      {typeof sec.content === 'string' ? (
                        <HighlightedText text={sec.content} isArabic />
                      ) : (
                        JSON.stringify(sec.content)
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Embedded Interactive Tools (Full Width Layout) */}
        {lesson.id.includes('caesar') && (
          <div className="my-8 border-2 border-[#171717] rounded-xl p-6 bg-[#FAFAFA]">
            <div className="flex items-center gap-2 mb-4 font-bold text-sm text-[#171717]">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Caesar Cipher Workstation</span>
            </div>
            <CaesarTool />
          </div>
        )}

        {lesson.id.includes('playfair') && (
          <div className="my-8 border-2 border-[#171717] rounded-xl p-6 bg-[#FAFAFA]">
            <div className="flex items-center gap-2 mb-4 font-bold text-sm text-[#171717]">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Playfair Matrix Generator</span>
            </div>
            <PlayfairTool />
          </div>
        )}

        {lesson.id.includes('hill') && (
          <div className="my-8 border-2 border-[#171717] rounded-xl p-6 bg-[#FAFAFA]">
            <div className="flex items-center gap-2 mb-4 font-bold text-sm text-[#171717]">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Hill Cipher Matrix Multiplier (Midterm 2020 & 2022)</span>
            </div>
            <HillTool />
          </div>
        )}

        {(lesson.id.includes('des') && lesson.id.includes('sbox')) && (
          <div className="my-8 border-2 border-[#171717] rounded-xl p-6 bg-[#FAFAFA]">
            <div className="flex items-center gap-2 mb-4 font-bold text-sm text-[#171717]">
              <Sparkles className="w-4 h-4" />
              <span>Interactive DES S-Box Table (Midterm 2020 Verification)</span>
            </div>
            <DesSBoxTool />
          </div>
        )}

        {lesson.id.includes('euclidean') && (
          <div className="my-8 border-2 border-[#171717] rounded-xl p-6 bg-[#FAFAFA]">
            <div className="flex items-center gap-2 mb-4 font-bold text-sm text-[#171717]">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Euclidean &amp; Extended Tableau Calculator</span>
            </div>
            <EuclideanTool />
          </div>
        )}

        {(lesson.id.includes('totient') || lesson.id.includes('chinese-remainder')) && (
          <div className="my-8 border-2 border-[#171717] rounded-xl p-6 bg-[#FAFAFA]">
            <div className="flex items-center gap-2 mb-4 font-bold text-sm text-[#171717]">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Number Theory Suite (Mod, Totient, CRT)</span>
            </div>
            <ModCalcTool />
          </div>
        )}

        {(chapter.id === 'ch7' && (lesson.id.includes('mode') || lesson.id.includes('cbc') || lesson.id.includes('ecb'))) && (
          <div className="my-8 border-2 border-[#171717] rounded-xl p-6 bg-[#FAFAFA]">
            <div className="flex items-center gap-2 mb-4 font-bold text-sm text-[#171717]">
              <Sparkles className="w-4 h-4" />
              <span>Block Cipher Modes Simulator</span>
            </div>
            <ModesSimulator />
          </div>
        )}

        {/* Formulas Callouts — Single-Column Full-Width */}
        {content.formulas && content.formulas.length > 0 && (
          <div className="border border-[#D4D4D0] rounded-2xl p-6 sm:p-8 bg-[#FFFFFF] space-y-6 shadow-xs hover:border-[#222222] transition-colors w-full">
            <div className="text-xs sm:text-[13px] font-mono font-bold tracking-wider uppercase text-[#686868] flex items-center gap-2 border-b border-[#E2E2DF] pb-3">
              <span className="font-mono text-base font-bold text-[#222222]">∑</span>
              <span>Mathematical Formulas / الصيغ والقوانين الرياضية:</span>
            </div>
            <div className="space-y-6 divide-y divide-[#E2E2DF]">
              {content.formulas.map((form) => (
                <div key={form.id} className="pt-6 first:pt-0 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h4 className="text-[20px] sm:text-[22px] font-bold text-[#222222]">{form.label || form.name}</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        dir="rtl"
                        className="font-serif text-[18px] sm:text-[20px] font-bold text-[#505050]"
                        style={{ fontFamily: 'var(--font-arabic)' }}
                      >
                        {form.labelAr || form.nameAr}
                      </span>
                      <AIProviderActions
                        context={{
                          sectionTitle: `Formula: ${form.label || form.name}`,
                          content: `Formula Name: ${form.label || form.name}\nLaTeX: ${form.latex}`,
                          promptType: 'math',
                          lessonTitle: lesson.title,
                          chapterTitle: `Chapter ${chapter.number}: ${chapter.title}`,
                        }}
                        variant="compact"
                      />
                    </div>
                  </div>
                  <div className="p-6 bg-[#F7F7F5] border border-[#D4D4D0] rounded-xl overflow-x-auto text-center font-serif text-[24px] sm:text-[28px] text-[#222222]" dir="ltr">
                    <MathDisplay latex={form.latex} display />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* Step-by-Step Instructional Worked Solutions (Teaching)   */}
        {/* ======================================================== */}
        {(() => {
          const workedExamplesList = (content.workedExamples && content.workedExamples.length > 0)
            ? content.workedExamples
            : (lesson.workedExamples && lesson.workedExamples.length > 0)
            ? lesson.workedExamples
            : [];

          if (workedExamplesList.length === 0) return null;

          return (
            <div className="space-y-6">
              {workedExamplesList.map((ex, exIdx) => (
                <WorkedSolutionPanel
                  key={exIdx}
                  title={ex.title}
                  titleAr={ex.titleAr}
                  sourceRef={ex.sourceRef || lesson.sourceRef?.file}
                  problem={ex.problem || 'Perform the required mathematical steps and calculate the exact cryptographic value.'}
                  problemAr={ex.problemAr}
                  initialParameters={ex.givenParameters}
                  steps={ex.steps.map((st, sIdx) => ({
                    stepNumber: st.stepNumber || sIdx + 1,
                    title: st.title || st.label || `Step ${sIdx + 1}`,
                    titleAr: st.titleAr || st.labelAr,
                    whyThisStep: st.whyThisStep,
                    whyThisStepAr: st.whyThisStepAr,
                    formula: st.formula || st.math,
                    substitution: st.substitution,
                    math: st.math,
                    explanation: st.explanation,
                    explanationAr: st.explanationAr,
                    intermediateResult: st.intermediateResult,
                  }))}
                  finalResult={ex.result || 'Calculation complete'}
                  verification={ex.verification}
                  verificationAr={ex.verificationAr}
                  examTrapNote={ex.examTrapNote}
                  examTrapNoteAr={ex.examTrapNoteAr}
                />
              ))}
            </div>
          );
        })()}

        {/* Exam Notes & Common Traps Callout Box */}
        {(() => {
          const notes = lesson.examNotes || content.examNotes;
          const notesAr = lesson.examNotesAr || content.examNotesAr;
          const hasNotes = Boolean(
            (Array.isArray(notes) ? notes.length > 0 : notes) ||
            (content.commonMistakes && content.commonMistakes.length > 0)
          );

          if (!hasNotes) return null;

          return (
            <ExamNoteCallout
              truthExplanation={
                Array.isArray(notes) ? notes.join('\n\n') : String(notes || '')
              }
              truthExplanationAr={
                Array.isArray(notesAr) ? notesAr.join('\n\n') : String(notesAr || '')
              }
              examSourceRef={lesson.sourceRef?.file}
              commonMistakes={content.commonMistakes}
            />
          );
        })()}

        {/* ======================================================== */}
        {/* Comprehensive Examination Assessment (Graded)            */}
        {/* ======================================================== */}
        {practiceQuestions && practiceQuestions.length > 0 && (
          <SectionAssessment
            id={`assessment-${lesson.id}`}
            title={`Lesson Assessment & Exam Questions: ${lesson.title}`}
            titleAr={`اختبار تقييم استيعاب الدرس: ${lesson.titleAr || lesson.title}`}
            description="Complete the following examination questions independently to verify your understanding. Solutions, scores, and exam clues are evaluated upon clicking Submit."
            descriptionAr="أجب عن الأسئلة الامتحانية التالية لاختبار استيعابك للمفاهيم والقوانين. يتم التدقيق والتصحيح الشامل مع كشف دلالات الامتحان فور الضغط على زر التسليم."
            questions={practiceQuestions}
            chapterId={chapter.id}
            lessonId={lesson.id}
            topicId={lesson.topicId || lesson.id}
          />
        )}
      </section>

      {/* Completion & Next Lesson Footer Bar */}
      <footer className="pt-6 border-t border-[#E2E2DF] space-y-4">
        <div className="p-4 border border-[#E2E2DF] rounded-xl bg-[#F7F7F5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#222222] text-[#FFFFFF] flex items-center justify-center shrink-0">
              <Brain size={16} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#222222]">
                {isArabic ? 'المراجعة النشطة واستيعاب الدرس' : 'Active Review & Lesson Mastery'}
              </h4>
              <p className="text-xs text-[#505050]">
                {isArabic
                  ? 'اختبر سرعتك في ربط المفاهيم والكلمات المفتاحية، أو حدد الدرس كمكتمل لتحديث مؤشرات التقدم.'
                  : 'Practice rapid term recognition in Review Hub or mark this lesson completed.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
            <Link
              to={`/review?tab=recall&chapter=${chapter.id}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#E2E2DF] bg-[#FFFFFF] text-xs font-mono font-bold text-[#222222] hover:bg-[#ECEDEB] transition-colors"
            >
              <span>{isArabic ? 'استرجاع الكلمات' : 'Recall Terms'}</span>
              <ArrowRight size={13} className={isArabic ? 'rotate-180' : ''} />
            </Link>

            <button
              type="button"
              onClick={() => toggleLessonCompleted(lesson.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg transition-colors border ${
                completed
                  ? 'border-[#222222] bg-[#FFFFFF] text-[#222222] hover:bg-[#ECEDEB]'
                  : 'border-[#222222] bg-[#222222] text-[#FFFFFF] hover:bg-[#333333]'
              }`}
            >
              {completed ? (
                <>
                  <CheckCircle2 size={14} /> <span>{isArabic ? 'مكتمل' : 'Completed'}</span>
                </>
              ) : (
                <>
                  <Circle size={14} /> <span>{isArabic ? 'تحديد كمكتمل' : 'Mark Completed'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Previous and Next Navigation */}
        <div className="flex items-center justify-between gap-4">
          {prev ? (
            <Link
              to={`/learn/${chapter.id}/${prev.id}`}
              className="flex items-center gap-2.5 px-4 py-2.5 border border-[#E5E5E5] rounded-md text-xs text-[#171717] hover:border-[#171717] hover:bg-[#FAFAFA] transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <div className="text-left">
                <span className="block text-[10px] text-[#737373] uppercase font-mono">Previous Lesson</span>
                <span className="font-semibold truncate max-w-[140px] sm:max-w-xs block">
                  {prev.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              to={`/learn/${chapter.id}/${next.id}`}
              className="flex items-center gap-2.5 px-5 py-2.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded-md text-xs hover:bg-[#333333] transition-colors"
            >
              <div className="text-right">
                <span className="block text-[10px] text-[#A3A3A3] uppercase font-mono">Next Lesson</span>
                <span className="font-semibold truncate max-w-[140px] sm:max-w-xs block">
                  {next.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/learn"
              className="flex items-center gap-2 px-5 py-2.5 border border-[#171717] bg-[#171717] text-[#FFFFFF] rounded-md text-xs hover:bg-[#333333] transition-colors"
            >
              Back to Course Outline
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </footer>
    </article>
  );
}
