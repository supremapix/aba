import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { CheckCircle, Clock, Book, Briefcase, Smile, Key, Users, TrendingUp } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScrollAnimation from '../components/ScrollAnimation';

const Project: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="O Projeto República para Jovens" 
        description="Conheça a metodologia da República para Jovens da ABA. Moradia digna, plano de desenvolvimento individual (PDI), educação financeira e autonomia."
      />
      <div className="bg-aba-blue py-20 text-white relative overflow-hidden" role="banner">
        <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Projeto República para Jovens</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Uma ponte segura e estruturada entre o acolhimento institucional e a vida adulta independente.
            </p>
          </ScrollAnimation>
        </div>
      </div>

      {/* Methodology Section */}
      <section className="py-20" aria-labelledby="metodologia-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <ScrollAnimation>
                <div className="inline-block px-3 py-1 bg-orange-100 text-aba-orange rounded-full text-sm font-semibold mb-4">Nossa Metodologia</div>
                <div id="metodologia-title">
                  <SectionTitle title="Como a República Funciona?" subtitle="O Modelo de Acolhimento" centered={false} />
                </div>
                <article className="text-gray-600 text-lg mb-6 leading-relaxed text-justify">
                  <p className="mb-4">
                    A República da ABA não é apenas um alojamento; é uma escola de vida. Nosso modelo é baseado na convivência familiar e no desenvolvimento progressivo de autonomia.
                  </p>
                  <p className="mb-4">
                    Cada jovem que entra no projeto constrói, junto com nossa equipe técnica, o seu <strong>PDI (Plano de Desenvolvimento Individual)</strong>. Esse plano traça metas claras para educação, trabalho, saúde e finanças, respeitando os sonhos e aptidões de cada um.
                  </p>
                </article>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                     <div className="flex-shrink-0">
                       <div className="flex items-center justify-center h-12 w-12 rounded-md bg-aba-blue text-white">
                         <Users className="h-6 w-6" aria-hidden="true" />
                       </div>
                     </div>
                     <div className="ml-4">
                       <h4 className="text-lg leading-6 font-medium text-gray-900">Convivência Compartilhada</h4>
                       <p className="mt-2 text-base text-gray-500">
                         Casas equipadas para até 6 jovens do mesmo sexo, onde aprendem a dividir tarefas, resolver conflitos e viver em comunidade.
                       </p>
                     </div>
                  </div>
                  <div className="flex items-start">
                     <div className="flex-shrink-0">
                       <div className="flex items-center justify-center h-12 w-12 rounded-md bg-aba-green text-white">
                         <TrendingUp className="h-6 w-6" aria-hidden="true" />
                       </div>
                     </div>
                     <div className="ml-4">
                       <h4 className="text-lg leading-6 font-medium text-gray-900">Autonomia Financeira</h4>
                       <p className="mt-2 text-base text-gray-500">
                         Todo morador é incentivado a poupar. Oferecemos educação financeira para que, ao sair, tenham uma reserva de emergência.
                       </p>
                     </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="relative">
              <ScrollAnimation delay={200}>
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-72 h-72 bg-aba-orange/20 rounded-full blur-3xl" aria-hidden="true"></div>
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=400" alt="Jovens cozinhando juntos aprendendo autonomia e culinária" className="rounded-lg shadow-xl mb-8 transform translate-y-4 object-cover h-64 w-full" loading="lazy" />
                    <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400" alt="Jovem estudando focado com livros" className="rounded-lg shadow-xl mt-8 transform -translate-y-4 object-cover h-64 w-full" loading="lazy" />
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <ScrollAnimation delay={0}>
              <FeatureCard 
                icon={Key} 
                title="Moradia Digna" 
                desc="Ambiente totalmente mobiliado, seguro e acolhedor, onde o jovem tem seu espaço privado e áreas comuns." 
              />
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <FeatureCard 
                icon={Book} 
                title="Educação Focada" 
                desc="Suporte pedagógico para conclusão do ensino básico, cursos técnicos e ingresso no ensino superior." 
              />
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <FeatureCard 
                icon={Briefcase} 
                title="Empregabilidade" 
                desc="Parcerias com empresas, confecção de currículos e preparação comportamental para o mercado." 
              />
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <FeatureCard 
                icon={Smile} 
                title="Apoio Emocional" 
                desc="Acompanhamento psicológico constante para lidar com traumas passados e fortalecer a autoestima." 
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Routine Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="criterios-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Para quem é o projeto?" subtitle="Critérios de Elegibilidade" />
          
          <ScrollAnimation>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
              <div className="md:flex">
                <div className="md:w-1/3 bg-aba-blue p-8 text-white flex flex-col justify-center items-center text-center">
                  <Clock className="h-16 w-16 mb-6 text-aba-orange" aria-hidden="true" />
                  <h3 className="text-2xl font-bold mb-2">O Perfil</h3>
                  <p className="text-blue-100">Buscamos jovens com potencial e vontade de vencer.</p>
                </div>
                <div className="md:w-2/3 p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div>
                       <h4 className="font-bold text-lg mb-4 text-aba-darkBlue flex items-center border-b pb-2">
                         Requisitos Básicos
                       </h4>
                       <ul className="space-y-3 text-gray-600">
                         <li className="flex items-start"><CheckCircle className="h-5 w-5 text-aba-green mr-2 shrink-0" aria-hidden="true" /> Idade entre 18 e 21 anos.</li>
                         <li className="flex items-start"><CheckCircle className="h-5 w-5 text-aba-green mr-2 shrink-0" aria-hidden="true" /> Egresso de acolhimento institucional.</li>
                         <li className="flex items-start"><CheckCircle className="h-5 w-5 text-aba-green mr-2 shrink-0" aria-hidden="true" /> Sem rede familiar de apoio.</li>
                       </ul>
                     </div>
                     <div>
                       <h4 className="font-bold text-lg mb-4 text-aba-darkBlue flex items-center border-b pb-2">
                         Deveres do Morador
                       </h4>
                       <ul className="space-y-3 text-gray-600">
                         <li className="flex items-start"><CheckCircle className="h-5 w-5 text-aba-orange mr-2 shrink-0" aria-hidden="true" /> Estudar e/ou Trabalhar.</li>
                         <li className="flex items-start"><CheckCircle className="h-5 w-5 text-aba-orange mr-2 shrink-0" aria-hidden="true" /> Cumprir tarefas domésticas.</li>
                         <li className="flex items-start"><CheckCircle className="h-5 w-5 text-aba-orange mr-2 shrink-0" aria-hidden="true" /> Respeitar regras de convivência.</li>
                       </ul>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <div className="text-center mt-16 bg-white p-8 rounded-xl border border-gray-200 shadow-sm max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Você conhece uma empresa que pode contratar?</h3>
              <p className="text-lg text-gray-600 mb-8">
                A maior dificuldade dos nossos jovens é o primeiro emprego. Se sua empresa tem vagas para Jovem Aprendiz ou Estágio, entre em contato.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contato">
                  <Button variant="primary">Oferecer Vaga de Emprego</Button>
                </Link>
                <Link to="/doar">
                  <Button variant="secondary">Quero Ajudar Financeiramente</Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{icon: any, title: string, desc: string}> = ({ icon: Icon, title, desc }) => (
  <article className="bg-white p-8 rounded-xl shadow-lg border border-gray-50 hover:shadow-2xl transition-all hover:-translate-y-1 text-center group h-full">
    <div className="w-14 h-14 bg-blue-50 text-aba-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-aba-blue group-hover:text-white transition-colors">
      <Icon className="h-7 w-7" aria-hidden="true" />
    </div>
    <h3 className="font-bold text-xl mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </article>
);

export default Project;