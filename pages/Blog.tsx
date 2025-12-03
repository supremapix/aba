import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { BlogPost } from '../types';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const SAMPLE_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Inauguração da Nova Casa República III",
    excerpt: "Graças ao apoio dos nossos parceiros, conseguimos abrir mais 6 vagas para jovens mulheres.",
    date: "15 Out, 2023",
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
    title: "Workshop de Empregabilidade: Sucesso Total",
    excerpt: "Voluntários de RH realizaram simulações de entrevista com nossos jovens no último sábado.",
    date: "02 Set, 2023",
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
    title: "Prestação de Contas - 1º Semestre",
    excerpt: "Confira onde cada centavo da sua doação foi investido nos primeiros seis meses do ano.",
    date: "20 Ago, 2023",
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

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleBack = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // DETAIL VIEW
  if (selectedPost) {
    const postSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": selectedPost.title,
      "image": selectedPost.image,
      "datePublished": selectedPost.date, // Note: In real app, format to ISO 8601
      "author": {
        "@type": "Organization",
        "name": "Associação Barnabé"
      },
      "articleBody": selectedPost.content.replace(/<[^>]+>/g, '') // Strip tags for schema
    };

    return (
      <div className="pt-20">
        <SEO 
          title={selectedPost.title} 
          description={selectedPost.excerpt}
          image={selectedPost.image}
          schema={postSchema}
          type="article"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button 
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-aba-blue transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar para notícias
          </button>

          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
             <div className="h-64 md:h-96 w-full relative">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                   <span className="bg-aba-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 inline-block">
                      {selectedPost.category}
                   </span>
                   <h1 className="text-3xl md:text-5xl font-bold font-serif leading-tight text-shadow">
                     {selectedPost.title}
                   </h1>
                </div>
             </div>

             <div className="p-8 md:p-12">
               <div className="flex items-center text-gray-500 text-sm mb-8 border-b border-gray-100 pb-8 space-x-6">
                 <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {selectedPost.date}
                 </div>
                 <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Equipe de Comunicação
                 </div>
                 <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    3 min de leitura
                 </div>
               </div>

               <div 
                  className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
               />

               <div className="mt-12 pt-8 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4">Gostou dessa notícia?</h4>
                  <div className="flex gap-4">
                     <Button 
                       size="sm" 
                       onClick={() => window.open(`https://wa.me/?text=Olha que legal essa notícia da ABA: ${window.location.href}`, '_blank')}
                     >
                       Compartilhar
                     </Button>
                     <Button 
                       size="sm" 
                       variant="outline"
                       onClick={handleBack}
                     >
                       Ler outras matérias
                     </Button>
                  </div>
               </div>
             </div>
          </article>
        </div>
      </div>
    );
  }

  // LIST VIEW
  return (
    <div className="pt-20">
      <SEO 
        title="Blog e Notícias" 
        description="Fique por dentro das novidades, eventos e prestação de contas da Associação Barnabé."
      />
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Notícias e Atualizações" subtitle="Blog da ABA" centered={false} />
          <p className="text-gray-600 max-w-2xl text-lg">
            Acompanhe o dia a dia da república, nossas conquistas, eventos e a transparência de nossas ações.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAMPLE_POSTS.map((post) => (
              <div 
                key={post.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer group"
                onClick={() => handleReadPost(post)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-aba-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-gray-500 mb-3 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-aba-blue transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-auto group-hover:bg-aba-blue group-hover:text-white group-hover:border-aba-blue"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent double trigger if button is clicked
                      handleReadPost(post);
                    }}
                  >
                    Ler Matéria Completa
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;