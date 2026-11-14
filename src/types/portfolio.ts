export type ProjectCategory = 'all' | 'development' | 'uiux' | 'ai' | 'video' | 'graphic';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'development' | 'uiux' | 'ai' | 'video' | 'graphic';
  categoryLabel: string;
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  outcome: string;
  role: string;
  status: 'In Development' | 'Concept Prototype' | 'Completed';
  githubUrl?: string;
  liveUrl?: string;
  demoBadge?: string;
  accentColor?: string;
}

export type CertificateCategory = 'all' | 'cloud-ai' | 'web-python' | 'professional';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'cloud-ai' | 'web-python' | 'professional';
  categoryLabel: string;
  credentialId?: string;
  pdfUrl: string;
  previewUrl: string;
  skills: string[];
  description: string;
  verified: boolean;
}

export interface SkillItem {
  name: string;
  description: string;
  category: string;
  highlight?: boolean;
}

export interface VideoShowcase {
  id: string;
  title: string;
  category: string;
  software: string[];
  description: string;
  videoPlaceholderUrl?: string;
  hasColorGradingComparison?: boolean;
  beforeGradingDesc?: string;
  afterGradingDesc?: string;
}

export interface GraphicItem {
  id: string;
  title: string;
  category: string;
  software: string;
  description: string;
  aspect: 'square' | 'portrait' | 'landscape';
  gradient: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  icon: string;
}
