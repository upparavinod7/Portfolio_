export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'flagship' | 'selected' | 'experiment' | 'other';
  tags: string[];
  primaryTech: string[];
  allTech: string[];
  problem: string;
  solution: string;
  architecture: {
    steps: {
      label: string;
      sub: string;
      type: 'frontend' | 'backend' | 'ai' | 'data' | 'infra' | 'output';
    }[];
    summary: string;
  };
  features: string[];
  engineeringHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoAvailable: boolean;
  featuredOrder?: number;
  badge?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
  badge?: string;
}

export interface SkillCategory {
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Familiar';
    context?: string;
  }[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  cgpa: string;
  highlights: string[];
  coursework: string[];
}

export interface Leadership {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  skillsLearned: string[];
  description: string;
}
