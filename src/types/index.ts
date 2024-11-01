export type Complexity = 'low' | 'medium' | 'high';
export type Cost = 'free' | 'paid' | 'freemium';

export interface Integration {
  id: string;
  name: string;
  category: string;
  industry: string;
  documentationUrl: string;
  complexity: Complexity;
  requiresDeveloper: boolean;
  cost: Cost;
  recommendations: string[];
  warnings: string[];
  version?: string;
  summary: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  industry: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}