import React from 'react';

import SecurityPentagonDiagram from '../../components/diagrams/SecurityPentagonDiagram';
import CiaTriadDiagram from '../../components/diagrams/CiaTriadDiagram';
import PassiveActiveAttacksDiagram from '../../components/diagrams/PassiveActiveAttacksDiagram';
import NetworkSecurityModelDiagram from '../../components/diagrams/NetworkSecurityModelDiagram';
import NetworkAccessSecurityDiagram from '../../components/diagrams/NetworkAccessSecurityDiagram';
import EuclideanLadderDiagram from '../../components/diagrams/EuclideanLadderDiagram';
import ExtendedEuclideanDiagram from '../../components/diagrams/ExtendedEuclideanDiagram';
import FermatEulerDiagram from '../../components/diagrams/FermatEulerDiagram';
import MillerRabinDiagram from '../../components/diagrams/MillerRabinDiagram';
import CrtWorkflowDiagram from '../../components/diagrams/CrtWorkflowDiagram';
import SymmetricModelDiagram from '../../components/diagrams/SymmetricModelDiagram';
import AsymmetricVsSymmetricDiagram from '../../components/diagrams/AsymmetricVsSymmetricDiagram';
import CaesarWheelDiagram from '../../components/diagrams/CaesarWheelDiagram';
import PlayfairRulesDiagram from '../../components/diagrams/PlayfairRulesDiagram';
import HillCipherDiagram from '../../components/diagrams/HillCipherDiagram';
import VigenereDiagram from '../../components/diagrams/VigenereDiagram';
import VernamOtpDiagram from '../../components/diagrams/VernamOtpDiagram';
import FeistelNetworkDiagram from '../../components/diagrams/FeistelNetworkDiagram';
import DesArchitectureDiagram from '../../components/diagrams/DesArchitectureDiagram';
import DesKeyScheduleDiagram from '../../components/diagrams/DesKeyScheduleDiagram';
import DesRoundFunctionDiagram from '../../components/diagrams/DesRoundFunctionDiagram';
import AvalancheEffectDiagram from '../../components/diagrams/AvalancheEffectDiagram';
import DoubleDesMitMDiagram from '../../components/diagrams/DoubleDesMitMDiagram';
import BlockCipherModesDiagram from '../../components/diagrams/BlockCipherModesDiagram';

interface DiagramRendererProps {
  diagramId: string;
  diagramProps?: Record<string, any>;
}

export const DiagramRenderer: React.FC<DiagramRendererProps> = ({ diagramId, diagramProps = {} }) => {
  switch (diagramId) {
    case 'security-pentagon':
      return <SecurityPentagonDiagram />;
    case 'cia-triad':
      return <CiaTriadDiagram />;
    case 'passive-active-attacks':
      return <PassiveActiveAttacksDiagram />;
    case 'network-security-model':
      return <NetworkSecurityModelDiagram />;
    case 'network-access-security':
      return <NetworkAccessSecurityDiagram />;
    case 'euclidean-ladder':
      return <EuclideanLadderDiagram />;
    case 'extended-euclidean':
      return <ExtendedEuclideanDiagram />;
    case 'fermat-euler':
    case 'fermat-theorem':
      return <FermatEulerDiagram initialTheorem={diagramProps.initialTheorem || 'fermat'} />;
    case 'euler-theorem':
      return <FermatEulerDiagram initialTheorem="euler" />;
    case 'miller-rabin':
      return <MillerRabinDiagram />;
    case 'crt-workflow':
      return <CrtWorkflowDiagram />;
    case 'symmetric-model':
      return <SymmetricModelDiagram />;
    case 'asymmetric-vs-symmetric':
      return <AsymmetricVsSymmetricDiagram />;
    case 'caesar-wheel':
      return <CaesarWheelDiagram />;
    case 'playfair-rules':
      return <PlayfairRulesDiagram />;
    case 'hill-cipher':
      return <HillCipherDiagram />;
    case 'vigenere-cipher':
      return <VigenereDiagram />;
    case 'vernam-otp':
      return <VernamOtpDiagram />;
    case 'feistel-network':
      return <FeistelNetworkDiagram />;
    case 'des-architecture':
      return <DesArchitectureDiagram />;
    case 'des-key-schedule':
      return <DesKeyScheduleDiagram />;
    case 'des-round-function':
    case 'des-sbox':
      return <DesRoundFunctionDiagram />;
    case 'avalanche-effect':
      return <AvalancheEffectDiagram />;
    case 'double-des-mitm':
      return <DoubleDesMitMDiagram />;
    case 'modes-ecb':
      return <BlockCipherModesDiagram initialMode="ecb" />;
    case 'modes-cbc':
      return <BlockCipherModesDiagram initialMode="cbc" />;
    case 'modes-cfb':
      return <BlockCipherModesDiagram initialMode="cfb" />;
    case 'modes-ofb':
      return <BlockCipherModesDiagram initialMode="ofb" />;
    case 'modes-ctr':
      return <BlockCipherModesDiagram initialMode="ctr" />;
    default:
      return null;
  }
};

export default DiagramRenderer;

