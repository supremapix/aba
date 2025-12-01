import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { STATS } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/youthgroup/1920/1080" 
            alt="Jovens felizes" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-aba-blue/90 to-aba-darkBlue/70 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif leading-tight">
            Transformando vidas <br />
            <span className="text-aba-orange">através do acolhimento</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
            Apoiamos jovens que completam 18 anos e precisam sair de abrigos, oferecendo moradia, capacitação e esperança para um futuro independente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/doar">
              <Button size="lg" variant="secondary">Seja um Padrinho</Button>
            </Link>
            <Link to="/projeto">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-aba-blue">
                Conheça o Projeto
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <ChevronRight className="h-8 w-8 rotate-90" />
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white -mt-10 relative z-20 rounded-t-3xl shadow-2xl mx-4 lg:mx-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full text-aba-blue mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/house/800/600" 
                alt="Casa República" 
                className="rounded-lg shadow-xl"
              />
              <div className="relative -mt-16 -mr-16 bg-white p-6 rounded-lg shadow-lg max-w-xs float-right hidden lg:block border-l-4 border-aba-orange">
                <p className="font-serif italic text-gray-600">"Não oferecemos apenas um teto, mas um lar onde sonhos são reconstruídos."</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <SectionTitle 
                title="Quem Somos" 
                subtitle="Nossa História" 
                centered={false} 
              />
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                A <strong>Associação Barnabé (ABA)</strong> nasceu da necessidade urgente de amparar jovens que, ao completarem a maioridade, precisam deixar as casas de acolhimento institucional sem terem para onde ir.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nosso projeto "República para Jovens" oferece moradia digna, alimentação e suporte técnico para que esses jovens conquistem sua autonomia financeira e emocional.
              </p>
              <Link to="/sobre">
                <Button variant="primary">Ler Nossa História Completa</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-aba-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Histórias de Transformação" subtitle="Depoimentos" light />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <div className="flex space-x-1 text-aba-orange mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="mb-6 italic text-gray-200">
                  "Quando saí do abrigo, me senti perdido. Na República, encontrei uma família e o apoio para terminar meus estudos. Hoje tenho meu emprego e minha própria casa."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img src={`https://picsum.photos/seed/person${i}/100`} alt="Avatar" />
                  </div>
                  <div>
                    <h4 className="font-bold">Lucas M.</h4>
                    <p className="text-sm text-gray-300">Ex-acolhido, 21 anos</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-aba-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Sua empresa pode transformar o futuro</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Torne-se uma empresa parceira da ABA e exerça sua responsabilidade social impactando diretamente a vida de jovens da nossa comunidade.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contato">
              <Button variant="white">Falar com Parcerias</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;