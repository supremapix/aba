import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { TEAM } from '../constants';
import { Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-aba-blue font-serif mb-4">Sobre a ABA</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Uma organização comprometida em oferecer dignidade, afeto e oportunidades.
          </p>
        </div>
      </div>

      {/* Mission/Vision/Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-aba-blue text-center group hover:transform hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-aba-blue group-hover:bg-aba-blue group-hover:text-white transition-colors">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Missão</h3>
              <p className="text-gray-600">
                Acolher jovens egressos de abrigos, proporcionando moradia e suporte integral para o desenvolvimento de sua autonomia e cidadania.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-aba-orange text-center group hover:transform hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-aba-orange group-hover:bg-aba-orange group-hover:text-white transition-colors">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser referência nacional no acolhimento e inserção social de jovens, construindo uma sociedade mais justa e igualitária.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-aba-green text-center group hover:transform hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-aba-green group-hover:bg-aba-green group-hover:text-white transition-colors">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Valores</h3>
              <p className="text-gray-600">
                Amor ao próximo, Transparência, Ética, Respeito à individualidade e Compromisso social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <SectionTitle title="Nossa Trajetória" subtitle="História" centered={false} />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A Associação Barnabé foi fundada com um propósito claro: preencher a lacuna existente no sistema de proteção social brasileiro para jovens que completam 18 anos.
                </p>
                <p>
                  Ao atingir a maioridade, muitos jovens acolhidos pelo Estado se viam obrigados a deixar as instituições, muitas vezes sem família, sem emprego e sem um lugar para morar. Diante dessa realidade cruel, nos mobilizamos.
                </p>
                <p>
                  Começamos com uma pequena casa alugada e o apoio de voluntários dedicados. Hoje, mantemos múltiplas residências no modelo de República, onde os jovens aprendem a gerir uma casa, cozinhar, administrar suas finanças e se preparam para o mercado de trabalho.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/hist1/400/500" className="rounded-lg shadow-md mt-8" alt="História 1" />
                <img src="https://picsum.photos/seed/hist2/400/500" className="rounded-lg shadow-md mb-8" alt="História 2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Nossa Equipe" subtitle="Quem Faz Acontecer" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {TEAM.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-aba-blue transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-aba-blue font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;