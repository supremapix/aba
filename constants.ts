import { Home, Users, Heart, BookOpen, ShieldCheck, DollarSign } from 'lucide-react';
import { NavItem, Plan, Stat, FaqItem, TeamMember, BlogPost } from './types';

export const WHATSAPP_URL = "https://wa.me/5551998147660?text=Ol%C3%A1%20vi%20seu%20site%20e%20*gostaria%20de%20saber%20sobre%3A*";

export const CONTACT_INFO = {
  address: "Av. Brasil, 330 - Bairro Barnabé, Gravataí/RS - CEP: 94150-000",
  phone: "(51) 99814-7660",
  email: "contato@associacaobarnabe.org",
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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "inauguracao-nova-casa-republica-iii",
    title: "Inauguração da Nova Casa República III",
    excerpt: "Graças ao apoio dos nossos parceiros, conseguimos abrir mais 6 vagas para jovens mulheres.",
    date: "15 Out, 2023",
    isoDate: "2023-10-15",
    category: "Conquistas",
    image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?auto=format&fit=crop&q=80&w=800",
    content: `
      <p class="mb-4">É com imensa alegria e o coração transbordando de gratidão que compartilhamos a inauguração da nossa mais nova unidade: a <strong>República III</strong>. Este novo lar é destinado exclusivamente ao acolhimento de jovens mulheres egressas de abrigos, um público que historicamente enfrenta vulnerabilidades ainda mais severas nas ruas.</p>
      
      <p class="mb-4">A casa, localizada em um bairro seguro e acessível de Gravataí, foi totalmente reformada por voluntários e parceiros da construção civil. São 3 quartos duplos, garantindo 6 novas vagas no nosso programa. O espaço conta com sala de estudos equipada com computadores, cozinha completa para incentivar a autonomia alimentar e um quintal para atividades de convivência.</p>
      
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">O Impacto Imediato</h3>
      <p class="mb-4">Todas as vagas já foram preenchidas por jovens que completaram 18 anos neste mês. Sem a República III, o destino dessas meninas seria incerto. Agora, elas têm um teto, segurança e, principalmente, uma rede de apoio para começarem seus estudos e carreiras.</p>
      
      <p class="mb-4">Agradecemos profundamente à <em>Construtora Solidária</em> e a todos os padrinhos que tornaram este sonho possível. Cada tijolo assentado nesta casa representa a reconstrução de uma vida.</p>
    `
  },
  {
    id: 2,
    slug: "workshop-empregabilidade-sucesso",
    title: "Workshop de Empregabilidade: Sucesso Total",
    excerpt: "Voluntários de RH realizaram simulações de entrevista com nossos jovens no último sábado.",
    date: "02 Set, 2023",
    isoDate: "2023-09-02",
    category: "Atividades",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    content: `
      <p class="mb-4">No último sábado, a sede da ABA se transformou em um verdadeiro centro de treinamento corporativo. Recebemos um grupo de 10 voluntários especialistas em Recursos Humanos de grandes empresas da região para o nosso <strong>2º Workshop de Empregabilidade</strong>.</p>
      
      <p class="mb-4">Sabemos que a inserção no mercado de trabalho é o pilar fundamental para a autonomia dos nossos jovens. Por isso, o evento foi focado na prática:</p>
      
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Revisão de Currículos:</strong> Ajustes para destacar habilidades comportamentais (soft skills).</li>
        <li><strong>Simulação de Entrevistas:</strong> Dinâmicas reais para reduzir a ansiedade e melhorar a oratória.</li>
        <li><strong>Etiqueta Corporativa:</strong> Dicas sobre postura, vestimenta e comunicação no ambiente de trabalho.</li>
      </ul>
      
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Resultados Práticos</h3>
      <p class="mb-4">O resultado foi imediato e inspirador. Dois dos nossos jovens, o Pedro e a Mariana, aplicaram as técnicas aprendidas em entrevistas na segunda-feira seguinte e já foram <strong>contratados como Jovem Aprendiz</strong>! Isso prova que, quando a oportunidade encontra o preparo, o sucesso é inevitável.</p>
      
      <p>Quer ser um mentor voluntário? Entre em contato conosco.</p>
    `
  },
  {
    id: 3,
    slug: "prestacao-de-contas-1-semestre",
    title: "Prestação de Contas - 1º Semestre",
    excerpt: "Confira onde cada centavo da sua doação foi investido nos primeiros seis meses do ano.",
    date: "20 Ago, 2023",
    isoDate: "2023-08-20",
    category: "Transparência",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    content: `
      <p class="mb-4">A transparência é um dos valores inegociáveis da Associação Barnabé. Acreditamos que a confiança dos nossos doadores é o nosso maior patrimônio. Por isso, divulgamos hoje o relatório simplificado do primeiro semestre de 2023.</p>
      
      <p class="mb-4">Graças ao aumento de 15% no número de padrinhos mensais, conseguimos não apenas manter as contas em dia, mas também realizar melhorias estruturais nas casas.</p>
      
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Distribuição dos Recursos</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>60% - Manutenção das Casas:</strong> Aluguel, luz, água, gás e alimentação.</li>
        <li><strong>20% - Educação e Capacitação:</strong> Cursos técnicos, transporte escolar e material didático.</li>
        <li><strong>12% - Equipe Técnica:</strong> Assistentes sociais e psicólogos (a maior parte da equipe é voluntária).</li>
        <li><strong>8% - Administrativo:</strong> Contador, taxas bancárias e materiais de escritório.</li>
      </ul>
      
      <p class="mb-4">Cada real doado foi transformado em dignidade. Não tivemos nenhum atraso em pagamentos essenciais, garantindo a tranquilidade necessária para que nossos jovens pudessem focar no que importa: seu desenvolvimento pessoal.</p>
      
      <p>O relatório financeiro completo, com todas as notas fiscais e balancetes, está disponível na nossa página de <a href="#/transparencia" class="text-aba-blue hover:underline">Transparência</a>.</p>
    `
  }
];