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
  slug: string; // SEO friendly URL part
  title: string;
  excerpt: string;
  date: string;
  isoDate: string; // For Schema.org
  image: string;
  category: string;
  content: string;
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

export interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
}