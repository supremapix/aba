import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface Plan {
  name: string;
  price: number;
  benefits: string[];
  recommended?: boolean;
  color: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  content: string; // Added field for full article content
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}