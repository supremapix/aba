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
    answer: "Temos uma política de total transparência. Publicamos relatórios financeiros e de progresso em nossa página de Transparência para que todos os padrinhos acompanhem o nascimento do projeto."
  }
];

export const TEAM: TeamMember[] = [
  { name: "Robinson Pereira", role: "Presidente e Fundador", image: "https://lp.associacaobarnabe.org/robinson-associacao-barnabe.png" },
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
    slug: "campanha-pontape-inicial-republica",
    title: "Campanha 'Pontapé Inicial': Mobilização para Inaugurar a Primeira República",
    excerpt: "Associação Barnabé lança campanha de captação para viabilizar a estrutura física da primeira casa de transição em Gravataí.",
    date: "15 Abr, 2024",
    isoDate: "2024-04-15",
    category: "Projetos",
    image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?auto=format&fit=crop&q=80&w=800",
    content: `
      <p class="mb-4">Com imensa esperança e determinação, a <strong>Associação Barnabé (ABA)</strong> dá início à campanha oficial de captação para o lançamento do <strong>Projeto República para Jovens em Transição</strong> em Gravataí/RS.</p>
      
      <p class="mb-4">O projeto visa alugar e equipar uma casa estruturada com capacidade inicial para acolher 12 jovens (6 masculinos e 6 femininos) que completam 18 anos em acolhimentos institucionais locais e não têm para onde ir.</p>
      
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">O Que Precisamos para Dar o Pontapé Inicial</h3>
      <p class="mb-4">Para abrir as portas e receber os primeiros jovens, estamos mobilizando voluntários, doadores individuais e empresas parceiras dispostas a contribuir com:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Fundo de Reforma e Mobília:</strong> Camas, armários, eletrodomésticos e espaço para estudos.</li>
        <li><strong>Apadrinhamento Mensal:</strong> Garantia de aluguel e custos fixos (água, luz, internet, alimentação).</li>
        <li><strong>Acompanhamento Profissional:</strong> Voluntários de psicologia, assistência social e mentoria de carreira.</li>
      </ul>
      
      <p class="mb-4">Junte-se a nós nesta causa urgente. A sua doação hoje é o alicerce da autonomia e dignidade dos nossos jovens amanhã.</p>
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
  },
  {
    id: 9,
    slug: "papel-transformador-padrinho-historia-lucas",
    title: "O Papel Transformador de um Padrinho: A história de Lucas",
    excerpt: "Conheça a trajetória de Lucas, que através do apadrinhamento financeiro e mentoria, conseguiu concluir sua faculdade de TI e hoje atua em uma multinacional.",
    date: "22 Jun, 2026",
    isoDate: "2026-06-22",
    category: "Apadrinhamento",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
    content: `
      <p class="mb-4">Ao completar 18 anos em um abrigo institucional, Lucas sentiu o peso da incerteza. Sem família e sem recursos, o futuro parecia uma estrada sem saída. No entanto, sua trajetória tomou um novo rumo quando ele foi acolhido pela República da Associação Barnabé e conheceu o programa de <strong>Apadrinhamento</strong>.</p>
      
      <p class="mb-4">Mais do que uma contribuição financeira mensal de R$ 100,00, o apadrinhamento conectou Lucas a uma rede de pessoas que acreditavam no seu potencial. Com os recursos arrecadados por seus padrinhos, a ABA custeou sua alimentação, moradia e, fundamentalmente, sua inscrição e transporte para um curso técnico de Tecnologia da Informação.</p>
      
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">De Acolhido a Profissional de TI</h3>
      <p class="mb-4">Durante sua estadia de dois anos na República da ABA, Lucas dedicou-se integralmente aos estudos. Ele contou com a mentoria de profissionais voluntários da área e a estabilidade de ter um teto seguro e alimentação garantida.</p>
      
      <p class="mb-4"><em>\"Saber que pessoas que eu nem conhecia estavam investindo no meu futuro todo mês me deu uma força gigantesca para não desistir nos momentos difíceis\"</em>, relata Lucas com os olhos brilhantes.</p>
      
      <p class="mb-4">Hoje, com 21 anos, Lucas é desenvolvedor júnior em uma empresa de tecnologia multinacional em Porto Alegre. Ele reside em seu próprio apartamento alugado, conquistou sua total independência financeira e, de forma emocionante, tornou-se recentemente um <strong>doador recorrente da ABA</strong>, ajudando a financiar o mesmo teto que um dia o acolheu.</p>
      
      <p class="mb-6">Histórias como a do Lucas mostram que o apadrinhamento não é uma despesa, mas sim um investimento de altíssimo retorno social. Seja um padrinho e reescreva um destino hoje mesmo!</p>
    `
  },
  {
    id: 10,
    slug: "guia-completo-apadrinhamento-futuro-jovens-abrigos",
    title: "Guia Prático: Por que apadrinhar um jovem que sai de abrigo muda o seu destino?",
    excerpt: "Entenda o impacto prático de se tornar um padrinho ou madrinha da ABA e como sua ajuda mensal sustenta moradia, alimentação e sonhos de jovens vulneráveis.",
    date: "18 Jun, 2026",
    isoDate: "2026-06-18",
    category: "Como Ajudar",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
    content: `
      <p class="mb-4">O apadrinhamento financeiro é a espinha dorsal da Associação Barnabé. É através dessa modalidade de doação recorrente que conseguimos garantir a estabilidade das nossas Repúblicas e manter as portas abertas para jovens que completam 18 anos e perdem o direito de permanecer em abrigos públicos.</p>
      
      <p class="mb-4">Se você já pensou em ajudar, mas tem dúvidas sobre como funciona o programa na prática, este guia foi feito para você.</p>
      
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">O que é o Apadrinhamento da ABA?</h3>
      <p class="mb-4">Ao contrário de doações esporádicas, o apadrinhamento é um compromisso mensal recorrente. Ele permite que nossa equipe planeje as despesas fixas das casas com segurança, sem o risco de faltar recursos para itens básicos como aluguel, luz e alimentação.</p>
      
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Para onde vai o seu investimento?</h3>
      <p class="mb-4">Cada centavo do apadrinhamento é direcionado diretamente para o bem-estar e desenvolvimento dos jovens:</p>
      
      <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700">
        <li><strong>Aluguel e Contas de Consumo:</strong> Garantia de moradia limpa, segura, com energia, água e internet (essencial para os estudos).</li>
        <li><strong>Alimentação Nutritiva:</strong> Compra de mantimentos de qualidade para as refeições diárias de todas as repúblicas.</li>
        <li><strong>Educação e Profissionalização:</strong> Passagens de ônibus para cursos técnicos e faculdades, além de materiais didáticos e taxas de inscrição.</li>
        <li><strong>Apoio Psicossocial:</strong> Acompanhamento profissional para ajudar o jovem a superar traumas e planejar sua carreira com autonomia.</li>
      </ul>
      
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Como se tornar um padrinho ou madrinha?</h3>
      <p class="mb-4">O processo é simples e 100% transparente. Você pode escolher um plano que caiba no seu orçamento mensal (R$ 50, R$ 100 ou R$ 300) diretamente na nossa página <a href="#/doar" class="text-aba-blue hover:underline">Como Ajudar</a>. Mensalmente, você receberá relatórios com a prestação de contas detalhada e histórias de impacto dos jovens que você está ajudando a manter de pé.</p>
      
      <p class="mt-6">Lembre-se: quando um jovem de 18 anos sai de um abrigo, o mundo diz que ele está sozinho. Ao se tornar padrinho, você diz a ele: <em>\"Você tem a mim, e nós vamos vencer essa juntos\"</em>.</p>
    `
  },
  {
    id: 11,
    slug: "por-que-apadrinhamento-e-mais-que-doacao-rede-afeto",
    title: "Por que o apadrinhamento é mais do que uma doação: é uma rede de afeto e oportunidade",
    excerpt: "Investir no futuro de um jovem que atingiu a maioridade sem família é quebrar o ciclo de vulnerabilidade social. Saiba como você pode fazer parte dessa rede.",
    date: "10 Jun, 2026",
    isoDate: "2026-06-10",
    category: "Inspiração",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    content: `
      <p class="mb-4">A vulnerabilidade social é como uma corrente: ela se perpetua de geração em geração se nada for feito para rompê-la. Quando um jovem completa 18 anos e deixa o sistema de acolhimento estatal, ele é colocado na sociedade com uma mochila nas costas e nenhum porto seguro.</p>
      
      <p class="mb-4">É exatamente nessa lacuna que a Associação Barnabé atua, e é aí que o seu papel como padrinho ou madrinha se torna sagrado. O apadrinhamento é o elo que quebra essa corrente de vulnerabilidade.</p>
      
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">A Ciência da Oportunidade</h3>
      <p class="mb-4">Estudos sobre impacto social mostram que jovens que recebem apoio estruturado e financeiro nos primeiros anos da vida adulta têm 80% more chances de obter emprego formal e estabilidade habitacional de longo prazo, em comparação àqueles que são desassistidos.</p>
      
      <p class="mb-4">O programa da ABA oferece essa base. Através das Repúblicas, damos o teto e o afeto. Através do seu apadrinhamento, viabilizamos as ferramentas práticas: o curso profissionalizante, o terno para a primeira entrevista, a passagem de ônibus, o livro de estudos.</p>
      
      <h3 class="text-xl font-bold text-gray-800 mt-6 mb-3">Um Convite à Solidariedade Coletiva</h3>
      <p class="mb-4">Nós não queremos apenas que os jovens sobrevivam; queremos que eles prosperem, liderem e inspirem. E isso só é possível quando a sociedade civil toma para si a responsabilidade de cuidar da sua juventude.</p>
      
      <p class="mb-4">Seja você uma pessoa física ou uma empresa, apoiar a ABA é atuar ativamente na construção de uma Gravataí mais justa, segura e cheia de oportunidades.</p>
      
      <p>Junte-se à nossa rede. Descubra a incrível alegria de ver um jovem crescer sob suas asas.</p>
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