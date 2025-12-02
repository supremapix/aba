import { Home, Users, Heart, BookOpen, ShieldCheck, DollarSign } from 'lucide-react';
import { NavItem, Plan, Stat, FaqItem, TeamMember } from './types';

export const WHATSAPP_URL = "https://wa.me/5551998147660?text=Ol%C3%A1%20vi%20seu%20site%20e%20*gostaria%20de%20saber%20sobre%3A*";

export const CONTACT_INFO = {
  address: "Av. Brasil, 330 - Bairro Barnabé, Gravataí/RS - CEP: 94150-000",
  phone: "(51) 99814-7660",
  email: "contato@associacaobarnabe.org.br", // Placeholder
  cnpj: "29.748.275/0001-90",
  instagram: "@ASSOCIAÇÃO BARNABÉ ABA",
  facebook: "Associação Barnabé"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'Sobre Nós', path: '/sobre' },
  { label: 'O Projeto', path: '/projeto' },
  { label: 'Como Ajudar', path: '/doar' },
  { label: 'Blog', path: '/blog' },
  { label: 'Transparência', path: '/transparencia' },
  { label: 'Contato', path: '/contato' },
];

export const STATS: Stat[] = [
  { value: "150+", label: "Jovens Atendidos", icon: Users },
  { value: "3", label: "Casas Mantidas", icon: Home },
  { value: "100%", label: "Gratuito", icon: Heart },
  { value: "50+", label: "Parceiros", icon: ShieldCheck },
];

export const DONATION_PLANS: Plan[] = [
  {
    name: "Apoiador",
    price: 50,
    benefits: ["Newsletter mensal", "Certificado de doador digital", "Nome no site (opcional)"],
    color: "bg-blue-500"
  },
  {
    name: "Padrinho",
    price: 100,
    recommended: true,
    benefits: ["Todos os benefícios de Apoiador", "Relatórios de impacto trimestrais", "Vídeo de agradecimento", "Convite para eventos anuais"],
    color: "bg-aba-orange"
  },
  {
    name: "Mantenedor",
    price: 300,
    benefits: ["Todos os benefícios de Padrinho", "Encontros exclusivos com a diretoria", "Visita guiada à República", "Destaque especial nos relatórios"],
    color: "bg-aba-green"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Como funciona o apadrinhamento?",
    answer: "O apadrinhamento é uma doação recorrente mensal que nos ajuda a manter as despesas fixas das casas (água, luz, alimentação). Você pode escolher o valor que cabe no seu bolso."
  },
  {
    question: "Para onde vai minha doação?",
    answer: "100% dos recursos são destinados para a manutenção das Repúblicas, cobrindo aluguel, alimentação, cursos profissionalizantes e transporte dos jovens."
  },
  {
    question: "Quem pode ser acolhido?",
    answer: "Atendemos jovens que completam 18 anos e precisam sair de abrigos institucionais, sem rede de apoio familiar, que desejam estudar e trabalhar."
  },
  {
    question: "Como é feita a prestação de contas?",
    answer: "Temos uma política de total transparência. Publicamos balancetes mensais e relatórios anuais em nossa página de Transparência, além de enviarmos aos doadores."
  }
];

export const TEAM: TeamMember[] = [
  { name: "Robinson Pereira", role: "Presidente e Fundador", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" },
  { name: "Ana Silva", role: "Coordenadora Pedagógica", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" },
  { name: "Carlos Santos", role: "Assistente Social", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300" },
];