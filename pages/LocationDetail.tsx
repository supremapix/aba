import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Heart, Users, Briefcase, GraduationCap, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { BAIRROS, CIDADES, CONTACT_INFO } from '../constants';
import { AreaInfo } from '../types';
import Button from '../components/Button';
import SEO from '../components/SEO';
import SectionTitle from '../components/SectionTitle';
import { Logo } from '../components/Logo';

const LocationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [area, setArea] = useState<AreaInfo | null>(null);

  useEffect(() => {
    const foundArea = [...BAIRROS, ...CIDADES].find((a) => a.slug === slug);
    if (foundArea) {
      setArea(foundArea);
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (!area) {
    // If not found, we could redirect or show 404, but let's just return null for now 
    // or a simple loading state if slug is defined
    return slug ? null : <Navigate to="/" />;
  }

  const isBairro = area.type === 'bairro';

  return (
    <div className="pt-20 overflow-hidden">
      <SEO 
        title={`${area.name} | Apoio Social para Jovens - ABA`} 
        description={`Descubra como a Associação Barnabé apoia jovens de até 18 anos em ${area.name}. Moradia, educação e futuro.`}
      />

      {/* Hero Section */}
      <section className={`relative py-24 ${isBairro ? 'bg-aba-blue' : 'bg-aba-green'} overflow-hidden`}>
        <div className="absolute inset-0 opacity-20">
          <img 
            src={isBairro 
              ? "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1920" 
              : "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1920"
            }
            alt={area.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold mb-6 border border-white/10">
              <MapPin className="w-4 h-4" />
              <span>Atendimento em {area.name} ({area.distance} da sede)</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-6 leading-tight">
              Transformando a vida dos jovens em <br />
              <span className="text-aba-orange">{area.name}</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl leading-relaxed font-light mb-8">
              {area.description} A Associação Barnabé (ABA) oferece estrutura, acolhimento e capacitação para adolescentes até 18 anos que buscam um futuro brilhante.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/doar">
                <Button size="lg" variant="secondary">Quero ajudar {area.name}</Button>
              </Link>
              <a href={`https://wa.me/5551998147660?text=Olá, sou de ${area.name} e gostaria de saber mais sobre os projetos da ABA.`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-aba-blue">Fale Conosco</Button>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            whileHover={{ rotate: 5, scale: 1.05 }}
            className="hidden lg:block"
          >
             <div className="p-8 bg-white rounded-[3rem] shadow-2xl border border-gray-100">
                <Logo size="xl" showText={false} />
             </div>
          </motion.div>
        </div>

        <div className="absolute -bottom-1 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120H1440V0C1440 0 1080 120 720 120C360 120 0 0 0 0V120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Localized Message Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                  alt="Jovens conversando"
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-aba-orange rounded-full flex items-center justify-center text-white p-4 text-center text-sm font-bold shadow-lg z-20 rotate-12">
                   Foco em <br/> Jovens <br/> até 18 anos
                </div>
                <div className="absolute inset-0 bg-aba-blue/10 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6 leading-tight">
                Estrutura e Oportunidades para a juventude de <span className="text-aba-blue">{area.name}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sabemos que cada localidade tem suas particularidades. Em {area.name}, a ABA atua identificando jovens em situação de vulnerabilidade que completam 18 anos e precisam de uma ponte para a autonomia.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Acolhimento em casas-república seguras.",
                  "Plano de Desenvolvimento Individual (PDI).",
                  "Cursos profissionalizantes e Jovem Aprendiz.",
                  "Acompanhamento psicológico e social.",
                  "Educação financeira para a vida adulta."
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 bg-blue-100 p-1 rounded-full text-aba-blue">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="https://lp.associacaobarnabe.org/robinson-associacao-barnabe.png" 
                    alt="Robinson Pereira" 
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <div>
                  <p className="text-gray-700 italic mb-4">
                    "O trabalho social em {area.name} é essencial para que nossos jovens encontrem um caminho digno e estruturado. Sem o apoio dos padrinhos, nada disso seria possível."
                  </p>
                  <p className="font-bold text-aba-blue">— Robinson Pereira, Fundador da ABA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact in Region */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle 
            title="Como ser um Padrinho nesta região" 
            subtitle={`Ajude a manter a estrutura para os jovens de ${area.name}`}
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Heart, title: "Doação Mensal", text: "Contribua com um valor fixo para manter as casas de acolhimento." },
              { icon: Briefcase, title: "Mentoria", text: "Ajude com sua experiência profissional orientando jovens da sua localidade." },
              { icon: GraduationCap, title: "Educação", text: "Custee cursos técnicos ou materiais para estudantes dedicados." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="inline-flex items-center justify-center p-4 bg-gray-50 rounded-xl text-aba-blue mb-6 group-hover:bg-aba-blue group-hover:text-white transition-all">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <Link to="/doar">
              <Button size="lg" className="px-12 py-4 text-lg">Quero Doar Agora</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ or Common Doubts for the specific area */}
       <section className="py-24 bg-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-aba-blue/5 p-12 rounded-[3rem] border border-aba-blue/10">
              <Star className="w-12 h-12 text-aba-orange mx-auto mb-6 fill-current animate-pulse" />
              <h2 className="text-3xl font-bold mb-6 font-serif">Mora em {area.name} e quer conhecer a sede?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Estamos localizados a apenas {area.distance} de você. Ficaremos muito felizes em receber sua visita para mostrar o impacto real do seu apoio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={CONTACT_INFO.address.split(' - ')[0]} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Ver no Mapa</Button>
                </a>
                <Link to="/contato">
                  <Button>Agendar Visita</Button>
                </Link>
              </div>
            </div>
         </div>
       </section>
    </div>
  );
};

export default LocationDetail;
