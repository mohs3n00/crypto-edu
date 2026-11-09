export interface MindMapNode {
  id: string;
  labelEn: string;
  labelAr: string;
  category?: 'root' | 'primary' | 'secondary' | 'leaf' | 'condition';
  descriptionEn: string;
  descriptionAr: string;
  relationshipToParent?: string;
  relationshipToParentAr?: string;
  formula?: string;
  keyCondition?: string;
  lessonId?: string;
  children?: MindMapNode[];
  tags?: string[];
}

export interface MindMapData {
  id: string;
  chapterId: 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch7';
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  sourceStandard?: string;
  rootNode: MindMapNode;
}

