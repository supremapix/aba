import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Heart, Shield, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import InfiniteMarquee from '../components/InfiniteMarquee';
import { STATS, CONTACT_INFO, FAQS, BAIRROS, CIDADES } from '../constants';
import SEO from '../components/SEO';
import ScrollAnimation from '../components/ScrollAnimation';
import { Logo } from '../components/Logo';

// Simple accordion item component for the FAQ section
const FaqAccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        {isOpen ? <ChevronUp className="text-aba-orange" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Associação Barnabé",
    "url": "https://associacaobarnabe.org",
    "logo": "https://associacaobarnabe.org/logo.png",
    "description": "Transformando vidas através do acolhimento e preparação para o futuro de jovens em Gravataí/RS.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Brasil, 330 - Bairro Barnabé",
      "addressLocality": "Gravataí",
      "addressRegion": "RS",
      "postalCode": "94150-000",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT_INFO.phone,
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/associacaobarnabe",
      "https://www.instagram.com/associacaobarnabe"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      <SEO 
        title="República para Jovens e Acolhimento Social"
        description="A ABA acolhe jovens egressos de abrigos em Gravataí/RS, oferecendo moradia, educação e emprego. Ajude a transformar futuros. Doe ou seja voluntário."
        schema={orgSchema}
      />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" aria-label="Introdução">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=1920" 
            alt="Grupo diverso de jovens abraçados e sorrindo, representando a união da juventude" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-aba-darkBlue/90 via-aba-blue/80 to-aba-orange/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-16"
        >
          <motion.div variants={itemVariants} className="block text-white text-sm font-bold tracking-[0.3em] uppercase mb-4 opacity-80">
            Associação Barnabé
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif leading-tight drop-shadow-2xl">
            Preparando jovens <br />
            <span className="text-aba-orange inline-block relative">
              para voar alto
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-1 left-0 h-1.5 bg-aba-orange/30 rounded-full"
              />
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            Oferecemos um lar seguro, afeto e oportunidades reais para jovens que completam 18 anos e precisam sair dos abrigos institucionais.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/doar">
              <Button size="lg" variant="secondary" className="shadow-2xl shadow-aba-orange/20 ring-4 ring-aba-orange/10">
                <Heart className="mr-2 h-5 w-5 animate-pulse" /> Seja um Padrinho
              </Button>
            </Link>
            <Link to="/projeto">
              <Button size="lg" variant="outline" className="text-white border-white/50 hover:border-white hover:bg-white hover:text-aba-blue bg-white/5 backdrop-blur-sm transition-all duration-300">
                Conheça o Projeto
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "mirror" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <ChevronRight className="h-10 w-10 rotate-90" />
        </motion.div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white -mt-10 relative z-20 rounded-t-[3rem] shadow-2xl mx-2 lg:mx-8 border-b border-gray-100" aria-label="Estatísticas de Impacto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-gray-100">
            {STATS.map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="text-center p-4 hover:bg-gray-50 transition-all duration-300 rounded-3xl group hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-2xl text-aba-blue mb-5 shadow-sm group-hover:bg-aba-blue group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-gray-500 font-semibold uppercase tracking-widest text-xs">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Areas Section (Marquees) */}
      <section className="py-24 bg-gray-50 overflow-hidden" aria-label="Bairros e Cidades Atendidos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <SectionTitle 
            title="Sempre perto de você" 
            subtitle="Atuamos intensamente em Gravataí e toda a região metropolitana para levar estrutura e futuro aos nossos jovens."
            centered
          />
        </div>

        {/* Bairros - Right Scroll */}
        <div className="mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
              <span className="w-8 h-1 bg-aba-blue rounded-full"></span>
              <span>Bairros em Gravataí</span>
            </h3>
          </div>
          <InfiniteMarquee items={BAIRROS} direction="right" speed={40} />
        </div>

        {/* Cidades - Left Scroll */}
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center space-x-2">
              <span className="w-8 h-1 bg-aba-green rounded-full"></span>
              <span>Cidades na Região</span>
            </h3>
          </div>
          <InfiniteMarquee items={CIDADES} direction="left" speed={60} />
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative group">
              <ScrollAnimation animation="slide-in-left">
                <div className="absolute top-4 left-4 w-full h-full border-2 border-aba-orange rounded-lg transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <img 
                  src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=800" 
                  alt="Roda de conversa de acolhimento com jovens e voluntários da ABA" 
                  className="relative rounded-lg shadow-2xl z-10 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-lg shadow-xl max-w-xs z-20 hidden lg:block border-l-4 border-aba-blue transition-transform duration-500 hover:-translate-y-2">
                  <p className="font-serif italic text-gray-600 text-lg">"Aqui eu descobri que não sou um número, sou uma pessoa com sonhos."</p>
                  <p className="text-sm font-bold text-aba-blue mt-4 text-right">— Jovem Acolhido</p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="lg:w-1/2">
              <ScrollAnimation animation="slide-in-right" delay={200}>
                <div className="inline-block px-3 py-1 bg-blue-100 text-aba-blue rounded-full text-sm font-semibold mb-4">Desde 2018</div>
                <SectionTitle 
                  title="Muito mais que uma casa" 
                  subtitle="Quem Somos" 
                  centered={false} 
                />
                <article className="text-gray-600 text-lg mb-6 leading-relaxed text-justify">
                  <p className="mb-4">
                    Imagine completar 18 anos e não ter para onde ir. Essa é a realidade de milhares de jovens que cresceram em abrigos. A <strong>Associação Barnabé (ABA)</strong> nasce para preencher esse vazio.
                  </p>
                  <p className="mb-8">
                    Nosso projeto "República para Jovens" oferece uma <strong>família de transição</strong>. Em nossas casas em Gravataí, eles encontram segurança alimentar, suporte emocional e orientação profissional. Não damos apenas o peixe, ensinamos a pescar, gerir a renda e construir uma vida digna e autônoma.
                  </p>
                </article>
                <div className="flex gap-4">
                  <Link to="/sobre">
                    <Button variant="primary">Nossa História</Button>
                  </Link>
                  <Link to="/transparencia">
                     <Button variant="outline">Ver Transparência</Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" aria-labelledby="faq-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <ScrollAnimation>
             <SectionTitle title="Dúvidas Frequentes" subtitle="FAQ" centered />
             <div className="mt-12 bg-gray-50 rounded-2xl p-8 shadow-sm">
               {FAQS.map((faq, index) => (
                 <FaqAccordionItem key={index} question={faq.question} answer={faq.answer} />
               ))}
               <div className="mt-8 text-center">
                 <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
                 <Link to="/contato">
                   <Button variant="outline" size="sm">Fale com nossa equipe</Button>
                 </Link>
               </div>
             </div>
           </ScrollAnimation>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-aba-blue text-white relative overflow-hidden" aria-label="Depoimentos">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-aba-orange/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title="Vidas Transformadas" subtitle="Depoimentos Reais" light />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <ScrollAnimation delay={0}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full">
                  <div className="flex space-x-1 text-aba-orange mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
                  </div>
                  <blockquote className="mb-8 italic text-gray-100 text-lg leading-relaxed">
                    "Quando saí do abrigo, me senti perdido e com medo da rua. Na República, encontrei uma família e o apoio para terminar meus estudos. Hoje tenho meu emprego e aluguei meu lar."
                  </blockquote>
                  <div className="flex items-center space-x-4 border-t border-white/20 pt-4 mt-auto">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-aba-orange">
                      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" alt="Foto de Lucas" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Lucas M.</h4>
                      <p className="text-sm text-blue-200">Ex-morador, 22 anos</p>
                    </div>
                  </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform md:-translate-y-4 shadow-xl hover:-translate-y-6 hover:shadow-2xl h-full">
                  <div className="flex space-x-1 text-aba-orange mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
                  </div>
                  <blockquote className="mb-8 italic text-gray-100 text-lg leading-relaxed">
                    "A ABA acreditou em mim quando ninguém mais acreditava. Aprendi a cozinhar, a cuidar do meu dinheiro e a acreditar no meu potencial. Sou eternamente grata."
                  </blockquote>
                  <div className="flex items-center space-x-4 border-t border-white/20 pt-4 mt-auto">
                     <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-aba-orange">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Foto de Júlia" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Júlia S.</h4>
                      <p className="text-sm text-blue-200">Moradora atual, 19 anos</p>
                    </div>
                  </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full">
                  <div className="flex space-x-1 text-aba-orange mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
                  </div>
                  <blockquote className="mb-8 italic text-gray-100 text-lg leading-relaxed">
                    "Como voluntário, vejo de perto a seriedade do trabalho. Cada real doado é investido com responsabilidade para mudar o destino desses jovens."
                  </blockquote>
                  <div className="flex items-center space-x-4 border-t border-white/20 pt-4 mt-auto">
                     <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-aba-orange">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Foto de Roberto" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Roberto F.</h4>
                      <p className="text-sm text-blue-200">Mantenedor há 3 anos</p>
                    </div>
                  </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-aba-orange relative overflow-hidden" aria-label="Seja Parceiro">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Shield className="h-16 w-16 text-white/80 mx-auto mb-6 animate-float" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sua empresa pode transformar o futuro</h2>
          <p className="text-white/90 text-xl mb-10 max-w-3xl mx-auto font-medium">
            O selo de <strong>Empresa Amiga da ABA</strong> mostra ao mercado que seu negócio se importa. Invista em responsabilidade social com impacto local, mensurável e transparente.
          </p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Link to="/contato">
              <Button variant="white" size="lg">Falar com Parcerias</Button>
            </Link>
            <Link to="/doar">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">Baixar Apresentação</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;