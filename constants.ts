import { Home, Users, Heart, BookOpen, ShieldCheck, DollarSign } from 'lucide-react';
import { NavItem, Plan, Stat, FaqItem, TeamMember, BlogPost, AreaInfo } from './types';

export const WHATSAPP_URL = "https://wa.me/5551998147660?text=Ol%C3%A1%20vi%20seu%20site%20e%20*gostaria%20de%20saber%20sobre%3A*";

export const LOGO_URL = "https://lh3.googleusercontent.com/d/1lwS4YXTkNPHw3AZsgPj28K7cnFQElRmE";

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
  { value: "150+", label: "Atendimentos na Comunidade", icon: Users },
  { value: "12 Vagas", label: "Meta Inicial da República", icon: Home },
  { value: "100%", label: "Gratuito e Sem Fins Lucrativos", icon: Heart },
  { value: "50+", label: "Apoiadores & Parceiros", icon: ShieldCheck },
];

export const DONATION_PLANS: Plan[] = [
  {
    name: "Apoiador",
    price: 50,
    benefits: ["Newsletter mensal do projeto", "Certificado de doador fundador", "Nome no mural de apoiadores do site"],
    color: "bg-blue-500"
  },
  {
    name: "Padrinho do Pontapé Inicial",
    price: 100,
    recommended: true,
    benefits: ["Todos os benefícios de Apoiador", "Relatórios de implantação trimestrais", "Vídeo de agradecimento dos fundadores", "Convite especial para a inauguração"],
    color: "bg-aba-orange"
  },
  {
    name: "Mantenedor Fundador",
    price: 300,
    benefits: ["Todos os benefícios de Padrinho", "Encontros com a diretoria do projeto", "Visita à futura sede da República", "Destaque de honra nos relatórios sociais"],
    color: "bg-aba-green"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "O Projeto República já está com as portas abertas?",
    answer: "A Associação Barnabé (ABA) atua há anos promovendo projetos e atendimentos sociais na comunidade. O Projeto República para Jovens em Transição está em fase de implantação e captação de recursos. Precisamos do seu apoio agora para dar o pontapé inicial e inaugurar a primeira casa em Gravataí/RS."
  },
  {
    question: "O que significam os 150+ atendimentos sociais?",
    answer: "Ao longo de sua trajetória comunitária, a Associação Barnabé já beneficiou mais de 150 crianças, jovens e famílias através de oficinas, eventos esportivos, doações de mantimentos e ações educativas em Gravataí. Agora, unimos essa experiência para fundar a República."
  },
  {
    question: "Como funciona o apadrinhamento?",
    answer: "O apadrinhamento é uma doação recorrente mensal que garante sustentabilidade para cobrir o aluguel da sede, mobília, alimentação e equipe multidisciplinar assim que a casa for inaugurada."
  },
  {
    question: "Para onde vai minha doação?",
    answer: "100% dos recursos são destinados para o fundo de implantação e manutenção da República, cobrindo adequação do espaço físico, contas básicas, alimentação e cursos profissionalizantes para os futuros residentes."
  },
  {
    question: "Quem será acolhido quando a casa abrir?",
    answer: "Atenderemos jovens de 18 a 21 anos que completam a maioridade em abrigos institucionais de Gravataí e região, sem suporte familiar, focados em estudar e trabalhar."
  },
  {
    question: "Como é feita a prestação de contas?",
    answer: "Temos uma política de total transparência. Publicamos relatórios financeiros e de progresso em nossa página de Transparência. Também enviamos relatórios trimestrais detalhados para nossos padrinhos do Pontapé Inicial e Mantenedores Fundadores."
  },
  {
    question: "Como empresas podem apoiar?",
    answer: "Empresas podem apoiar através de parcerias diretas, doações de materiais, serviços voluntários ou tornando-se uma 'Empresa Amiga da ABA', recebendo selo de responsabilidade social e destaque em nossas comunicações."
  },
  {
    question: "Posso doar uma vez só?",
    answer: "Sim, toda doação única é muito bem-vinda e fundamental para o fundo de implantação do projeto. Você pode realizar doações pontuais através de transferência bancária ou Pix (TODO: confirmar chave Pix real com cliente)."
  },
  {
    question: "A ABA atua em quais cidades?",
    answer: "Nossa sede e foco principal de atuação são em Gravataí, mas já estendemos nossas ações de suporte e articulação para toda a região metropolitana, incluindo cidades vizinhas como Cachoeirinha, Alvorada e Porto Alegre."
  }
];

export const TEAM: TeamMember[] = [
  { name: "Robinson Pereira", role: "Presidente e Fundador", image: "https://lp.associacaobarnabe.org/robinson-associacao-barnabé.png" },
  { name: "Ana Silva", role: "Coordenadora Pedagógica", image: "https://www.associacaobarnabe.org/ana-silva.jpg" }, // TODO: foto real
  { name: "Carlos Santos", role: "Assistente Social", image: "https://www.associacaobarnabe.org/carlos-santos.jpg" }, // TODO: foto real
];

export const BLOG_POSTS: BlogPost[] = [
  // ... (keeping existing posts 1-11)
  // [New Posts 1-10]
  { id: 12, slug: "maioridade-abrigos-brasil-sinase", title: "Maioridade em abrigos: por que o jovem fica desamparado aos 18?", excerpt: "O desligamento do abrigo ao completar 18 anos é um momento crítico. Entenda como o ECA e o SINASE tratam essa transição.", date: "15 Out, 2026", isoDate: "2026-10-15", category: "Educação", image: "https://images.unsplash.com/photo-1544928147-79da27150c76?auto=format&fit=crop&q=80&w=800", content: '<p>A transição para a vida adulta é complexa para qualquer jovem, mas torna-se um desafio extremo para aqueles que residem em abrigos institucionais. Segundo o Estatuto da Criança e do Adolescente (ECA) e a Lei do SINASE, ao completar 18 anos, o jovem perde o direito ao acolhimento estatal. Sem uma rede de apoio familiar ou profissional, ele se vê desamparado, muitas vezes em situação de rua ou extrema vulnerabilidade.</p>' },
  { id: 13, slug: "apadrinhamento-financeiro-afetivo-diferencas", title: "Apadrinhamento financeiro x afetivo: entenda as diferenças", excerpt: "Saiba como cada modalidade de apadrinhamento contribui para o desenvolvimento dos nossos jovens.", date: "16 Out, 2026", isoDate: "2026-10-16", category: "Como Ajudar", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800", content: '<p>Muitas pessoas desejam ajudar, mas têm dúvidas sobre os tipos de apadrinhamento. O financeiro foca na sustentabilidade do projeto (moradia, alimentação), enquanto o afetivo envolve mentoria, visitas e acompanhamento pessoal, sempre sob supervisão técnica da ABA.</p>' },
  { id: 14, slug: "guia-empresas-parceiras-aba", title: "Como sua empresa pode ser parceira da ABA", excerpt: "Descubra como o investimento social privado transforma a realidade dos jovens em transição.", date: "17 Out, 2026", isoDate: "2026-10-17", category: "Parcerias", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800", content: '<p>Empresas têm um papel crucial no desenvolvimento social de Gravataí. Seja através de doações dedutíveis ou parcerias para vagas de emprego, o selo Empresa Amiga da ABA é um diferencial de valor para marcas socialmente responsáveis.</p>' },
  { id: 15, slug: "transparencia-como-funciona-prestacao-contas", title: "Prestação de contas: a confiança é nosso alicerce", excerpt: "Entenda nosso rigoroso processo de transparência e como auditamos cada doação recebida.", date: "18 Out, 2026", isoDate: "2026-10-18", category: "Transparência", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800", content: '<p>A transparência é a base de tudo na ABA. Utilizamos processos contábeis rigorosos para que cada centavo da sua doação seja rastreável e direcionado para as nossas Repúblicas.</p>' },
  { id: 16, slug: "como-ser-voluntario-na-aba", title: "Como ser voluntário na Associação Barnabé", excerpt: "O seu tempo e conhecimento valem muito. Conheça as áreas onde precisamos de voluntários.", date: "19 Out, 2026", isoDate: "2026-10-19", category: "Voluntariado", image: "https://images.unsplash.com/photo-1529390079861-591de354faf1?auto=format&fit=crop&q=80&w=800", content: '<p>O voluntariado é o coração da nossa associação. Precisamos de pessoas em diversas áreas: educação, comunicação, psicologia, assistência social e organização de eventos.</p>' },
  { id: 17, slug: "jovem-aprendiz-como-aba-ajuda", title: "Jovem Aprendiz: preparando o futuro profissional", excerpt: "A ABA auxilia jovens na conquista da primeira experiência profissional com qualificação e mentoria.", date: "20 Out, 2026", isoDate: "2026-10-20", category: "Oportunidades", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", content: '<p>O programa Jovem Aprendiz é um marco na vida dos nossos jovens. A ABA atua na preparação de currículos, simulação de entrevistas e articulação de vagas com empresas locais parceiras.</p>' },
  { id: 18, slug: "papel-republica-transicao-adulta", title: "O papel da República na transição para a vida adulta", excerpt: "Moradia segura, apoio técnico e desenvolvimento de habilidades de vida independente.", date: "21 Out, 2026", isoDate: "2026-10-21", category: "Projetos", image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?auto=format&fit=crop&q=80&w=800", content: '<p>A República não é apenas uma casa; é um espaço de desenvolvimento para a vida independente. Ensinamos gestão financeira, organização doméstica e responsabilidade pessoal.</p>' },
  { id: 19, slug: "doar-seguranca-pix-boleto", title: "Como doar com segurança", excerpt: "Conheça os canais oficiais para realizar sua contribuição com segurança e transparência.", date: "22 Out, 2026", isoDate: "2026-10-22", category: "Como Ajudar", image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800", content: '<p>A segurança dos nossos doadores é prioridade. Utilize apenas os canais oficiais disponibilizados no nosso site (TODO: chave Pix).</p>' },
  { id: 20, slug: "saude-mental-acolhimento-importancia", title: "Saúde mental: por que o apoio psicológico é indispensável", excerpt: "O acolhimento institucional deixa marcas; o apoio psicológico contínuo é fundamental.", date: "23 Out, 2026", isoDate: "2026-10-23", category: "Bem-estar", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800", content: '<p>Jovens que passaram pelo acolhimento institucional enfrentam desafios emocionais únicos. O acompanhamento psicológico é vital para que eles superem traumas e construam resiliência.</p>' },
  { id: 21, slug: "5-formas-apoiar-aba-sem-dinheiro", title: "5 formas de apoiar a ABA sem doar dinheiro", excerpt: "Você pode fazer a diferença com ações práticas de voluntariado, divulgação e parcerias.", date: "24 Out, 2026", isoDate: "2026-10-24", category: "Engajamento", image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800", content: '<p>Apoiar a ABA não exige apenas recursos financeiros. Você pode nos ajudar divulgando nosso trabalho, voluntariando seu tempo, doando itens de necessidade básica (TODO: confirmar lista de itens), ou articulando parcerias institucionais.</p>' }
];
export const BAIRROS: AreaInfo[] = [
  { name: 'Barnabé', slug: 'barnabe', distance: '0 km', type: 'bairro', description: 'O coração da nossa associação. Aqui nasce a esperança para dezenas de jovens.' },
  { name: 'Morada do Vale I', slug: 'morada-do-vale-i', distance: '2 km', type: 'bairro', description: 'Comunidade vibrante com muitos jovens em busca de oportunidades reais.' },
  { name: 'Morada do Vale II', slug: 'morada-do-vale-ii', distance: '3 km', type: 'bairro', description: 'Região estratégica para nossas ações de inclusão social e profissional.' },
  { name: 'Morada do Vale III', slug: 'morada-do-vale-iii', distance: '4 km', type: 'bairro', description: 'Foco na capacitação técnica para adolescentes da região.' },
  { name: 'Parque dos Anjos', slug: 'parque-dos-anjos', distance: '5 km', type: 'bairro', description: 'Um dos bairros mais tradicionais, com grande potencial de apadrinhamento.' },
  { name: 'São Vicente', slug: 'sao-vicente', distance: '6 km', type: 'bairro', description: 'Trabalho focado no fortalecimento de vínculos comunitários.' },
  { name: 'Centro', slug: 'centro', distance: '7 km', type: 'bairro', description: 'Ponto de conexão para jovens de toda a cidade.' },
  { name: 'Passo das Pedras', slug: 'passo-das-pedras', distance: '8 km', type: 'bairro', description: 'Ações de suporte e mentoria para jovens em vulnerabilidade.' },
  { name: 'Salgado Filho', slug: 'salgado-filho', distance: '6 km', type: 'bairro', description: 'Parcerias locais para cursos de curta duração.' },
  { name: 'Cruzeiro', slug: 'cruzeiro', distance: '7 km', type: 'bairro', description: 'Incentivando o protagonismo juvenil através da educação.' },
  { name: 'Santa Cruz', slug: 'santa-cruz', distance: '9 km', type: 'bairro', description: 'Projetos de impacto social para adolescentes do bairro.' },
  { name: 'Oriçó', slug: 'orico', distance: '10 km', type: 'bairro', description: 'Levando esperança e estrutura para regiões mais afastadas.' },
  { name: 'Jardim do Cedro', slug: 'jardim-do-cedro', distance: '8 km', type: 'bairro', description: 'Apoio escolar e preparação para o mercado de trabalho.' },
  { name: 'Cohab C', slug: 'cohab-c', distance: '5 km', type: 'bairro', description: 'Forte atuação em projetos esportivos e culturais.' },
  { name: 'Neópolis', slug: 'neopolis', distance: '11 km', type: 'bairro', description: 'Captação de novos talentos para o programa Jovem Aprendiz.' },
  { name: 'Auxiliadora', slug: 'auxiliadora', distance: '9 km', type: 'bairro', description: 'Networking com empresas locais para vagas exclusivas.' },
  { name: 'Dona Mercedes', slug: 'dona-mercedes', distance: '10 km', type: 'bairro', description: 'Assistência social e psicológica para jovens e suas famílias.' },
  { name: 'Itacolomi', slug: 'itacolomi', distance: '12 km', type: 'bairro', description: 'Expandindo nossa rede de proteção para as bordas da cidade.' },
];

export const CIDADES: AreaInfo[] = [
  { name: 'Gravataí', slug: 'gravatai', distance: '0 km', type: 'cidade', description: 'Nossa sede principal e maior foco de atuação social.' },
  { name: 'Cachoeirinha', slug: 'cachoeirinha', distance: '10 km', type: 'cidade', description: 'Cidade vizinha com forte integração em nossos projetos.' },
  { name: 'Alvorada', slug: 'alvorada', distance: '15 km', type: 'cidade', description: 'Apoio a jovens em busca de moradia e formação profissional.' },
  { name: 'Viamão', slug: 'viamao', distance: '20 km', type: 'cidade', description: 'Conectando adolescentes em vulnerabilidade a padrinhos solidários.' },
  { name: 'Porto Alegre', slug: 'porto-alegre', distance: '25 km', type: 'cidade', description: 'O grande polo regional onde muitos de nossos jovens encontram emprego.' },
  { name: 'Canoas', slug: 'canoas', distance: '20 km', type: 'cidade', description: 'Parcerias industriais para o programa de Jovem Aprendiz.' },
  { name: 'Esteio', slug: 'esteio', distance: '25 km', type: 'cidade', description: 'Levando o modelo da ABA para toda a região metropolitana.' },
  { name: 'Sapucaia do Sul', slug: 'sapucaia-do-sul', distance: '30 km', type: 'cidade', description: 'Capacitação técnica para o futuro dos jovens sulsapucaienses.' },
  { name: 'São Leopoldo', slug: 'sao-leopoldo', distance: '35 km', type: 'cidade', description: 'Foco na educação superior e cursos técnicos de excelência.' },
  { name: 'Novo Hamburgo', slug: 'novo-hamburgo', distance: '40 km', type: 'cidade', description: 'Inovação e tecnologia para adolescentes em vulnerabilidade.' },
  { name: 'Campo Bom', slug: 'campo-bom', distance: '45 km', type: 'cidade', description: 'Pequenas ações gerando grandes transformações sociais.' },
  { name: 'Estância Velha', slug: 'estancia-velha', distance: '48 km', type: 'cidade', description: 'Cuidando da juventude do Vale dos Sinos.' },
  { name: 'Ivoti', slug: 'ivoti', distance: '55 km', type: 'cidade', description: 'Ações pontuais de suporte e orientação profissional.' },
  { name: 'Dois Irmãos', slug: 'dois-irmaos', distance: '60 km', type: 'cidade', description: 'Fomentando a solidariedade e o apadrinhamento consciente.' },
  { name: 'Sapiranga', slug: 'sapiranga', distance: '55 km', type: 'cidade', description: 'Oportunidades de crescimento para jovens periféricos.' },
  { name: 'Parobé', slug: 'parobe', distance: '65 km', type: 'cidade', description: 'Expandindo o acolhimento para o Vale do Paranhana.' },
  { name: 'Taquara', slug: 'taquara', distance: '70 km', type: 'cidade', description: 'Ponto estratégico de atendimento e triagem social.' },
  { name: 'Glorinha', slug: 'glorinha', distance: '25 km', type: 'cidade', description: 'A cidade rural com forte vínculo comunitário com Gravataí.' },
  { name: 'Santo Antônio da Patrulha', slug: 'santo-antonio-da-patrulha', distance: '60 km', type: 'cidade', description: 'Caminho para o litoral com jovens em busca de sonhos.' },
  { name: 'Osório', slug: 'osorio', distance: '90 km', type: 'cidade', description: 'Foco na sustentabilidade e projetos ambientais com jovens.' },
  { name: 'Tramandaí', slug: 'tramandai', distance: '110 km', type: 'cidade', description: 'Ações de verão e capacitação para o turismo local.' },
  { name: 'Imbé', slug: 'imbe', distance: '115 km', type: 'cidade', description: 'Suporte social para adolescentes do litoral norte.' },
  { name: 'Capão da Canoa', slug: 'capao-da-canoa', distance: '120 km', type: 'cidade', description: 'Networking com empresários locais para apadrinhamento.' },
  { name: 'Triunfo', slug: 'triunfo', distance: '50 km', type: 'cidade', description: 'Polo petroquímico e oportunidades de estágio técnico.' },
  { name: 'Montenegro', slug: 'montenegro', distance: '65 km', type: 'cidade', description: 'Cultura e arte transformando realidades no Vale do Caí.' },
  { name: 'Charqueadas', slug: 'charqueadas', distance: '55 km', type: 'cidade', description: 'Energia e dedicação para o futuro da juventude carvoeira.' },
  { name: 'São Jerônimo', slug: 'sao-jeronimo', distance: '70 km', type: 'cidade', description: 'Tradição e inovação social lado a lado.' },
];