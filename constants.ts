import { Home, Users, Heart, BookOpen, ShieldCheck, DollarSign } from 'lucide-react';
import { NavItem, Plan, Stat, FaqItem, TeamMember, BlogPost, AreaInfo } from './types';

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
    slug: "parceria-jovem-aprendiz-gravatai",
    title: "Expansão do Programa Jovem Aprendiz em Gravataí",
    excerpt: "Novas parcerias com empresas locais abrem 50 vagas de capacitação profissional para jovens da região.",
    date: "15 Abr, 2024",
    isoDate: "2024-04-15",
    category: "Oportunidades",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    content: `
      <p class="mb-4">O mercado de trabalho para jovens em Gravataí acaba de ganhar um reforço de peso. Através de uma nova articulação da Associação Barnabé com o polo industrial da cidade, estamos anunciando a expansão do <strong>Programa Jovem Aprendiz</strong>.</p>
      
      <p class="mb-4">O objetivo é conectar jovens de 14 a 18 anos com sua primeira experiência profissional formal, garantindo não apenas o emprego, mas uma formação técnica sólida. As vagas contemplam áreas administrativas, logística e produção industrial.</p>
      
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Capacitação que Transforma</h3>
      <p class="mb-4">Diferente de um emprego comum, o Jovem Aprendiz foca no aprendizado. Os selecionados terão jornadas reduzidas para não interromper os estudos e participarão de cursos semanais de qualificação.</p>
      
      <p>Interessados podem procurar a sede da ABA para orientações sobre como preparar o currículo e participar das próximas seleções.</p>
    `
  },
  {
    id: 2,
    slug: "oficinas-culturais-batel-gravatai",
    title: "Oficinas de Arte e Cultura chegam ao Bairro Barnabé",
    excerpt: "Projeto 'Arte na Vila' oferece aulas gratuitas de grafite, música e teatro para crianças e adolescentes.",
    date: "10 Abr, 2024",
    isoDate: "2024-04-10",
    category: "Cultura",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800",
    content: `
      <p class="mb-4">A cultura é uma ferramenta poderosa de inclusão social. Por isso, lançamos o projeto <strong>Arte na Vila</strong>, que ocupará os espaços comunitários do Bairro Barnabé e regiões vizinhas com muita cor e criatividade.</p>
      
      <p class="mb-4">As oficinas são totalmente gratuitas e destinadas a jovens de até 18 anos. No cronograma, teremos aulas de:</p>
      
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Grafite e Arte Urbana:</strong> Transformando muros em murais de esperança.</li>
        <li><strong>Violão e Percussão:</strong> Despertando talentos musicais locais.</li>
        <li><strong>Expressão Teatral:</strong> Trabalhando a timidez e a oratória.</li>
      </ul>
      
      <p class="mb-4">As inscrições estão abertas e as vagas são limitadas por turma para garantir a qualidade do ensino.</p>
    `
  },
  {
    id: 3,
    slug: "campeonato-interbairros-juventude",
    title: "Copa ABA: Esporte Unidos pela Juventude",
    excerpt: "Torneio de futsal mobiliza jovens de Gravataí e Cachoeirinha em um final de semana de lazer e disciplina.",
    date: "05 Abr, 2024",
    isoDate: "2024-04-05",
    category: "Esporte",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
    content: `
      <p class="mb-4">O esporte vai muito além das quadras; ele ensina disciplina, respeito e trabalho em equipe. No último final de semana, a <strong>Copa ABA de Futsal</strong> reuniu mais de 200 jovens de diversos bairros de Gravataí e cidades vizinhas como Cachoeirinha.</p>
      
      <p class="mb-4">O evento foi uma verdadeira celebração da juventude. Mais do que troféus, o objetivo foi promover a integração entre comunidades e incentivar hábitos de vida saudáveis.</p>
      
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Solidariedade em Quadra</h3>
      <p class="mb-4">Como forma de inscrição, cada equipe doou cestas básicas que serão destinadas às famílias assistidas pela nossa associação. Unimos o amor pelo esporte com a vontade de ajudar quem mais precisa.</p>
    `
  },
  {
    id: 4,
    slug: "tecnologia-e-futuro-coding-camp",
    title: "Futuro Digital: Jovens de Gravataí aprendem Programação",
    excerpt: "Workshop intensivo de tecnologia capacita adolescentes para as profissões do futuro.",
    date: "28 Mar, 2024",
    isoDate: "2024-03-28",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    content: `
      <p class="mb-4">A tecnologia não é apenas o futuro, é o presente. Para garantir que nossos jovens não fiquem para trás, realizamos o primeiro <strong>ABA Coding Camp</strong>.</p>
      
      <p class="mb-4">Durante quatro dias, adolescentes de 15 a 18 anos mergulharam no mundo do desenvolvimento web e lógica de programação. Eles aprenderam a criar suas primeiras páginas HTML e entenderam como funcionam os aplicativos que usam diariamente.</p>
      
      <p class="mb-4">Sabemos que Gravataí possui um setor industrial que demanda cada vez mais profissionais com conhecimentos digitais. Iniciar essa trilha de aprendizado agora é abrir portas para carreiras brilhantes e bem remuneradas.</p>
    `
  },
  {
    id: 5,
    slug: "projeto-guardioes-do-barnabe",
    title: "Projeto Guardiões do Barnabé: Educação Ambiental",
    excerpt: "Jovens lideram ação de preservação ambiental e plantio de mudas em áreas de preservação da cidade.",
    date: "20 Mar, 2024",
    isoDate: "2024-03-20",
    category: "Sustentabilidade",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    content: `
      <p class="mb-4">Cuidar do nosso planeta começa cuidando do nosso bairro. Com esse lema, o projeto <strong>Guardiões do Barnabé</strong> reuniu um grupo de jovens voluntários para uma manhã de conscientização ambiental.</p>
      
      <p class="mb-4">A ação incluiu o plantio de 100 mudas de árvores nativas em áreas próximas ao Arroio Barnabé, além de uma caminhada para coleta de resíduos e distribuição de panfletos informativos para os moradores.</p>
      
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Líderes do Amanhã</h3>
      <p class="mb-4">Ao colocarem a mão na massa, esses jovens entendem que são protagonistas da mudança. A educação ambiental é fundamental para formarmos cidadãos conscientes e comprometidos com o bem-estar coletivo.</p>
    `
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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