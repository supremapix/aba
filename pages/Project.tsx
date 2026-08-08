import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { 
  CheckCircle, Clock, Book, Briefcase, Smile, Key, Users, TrendingUp, 
  GraduationCap, Wallet, Home as HomeIcon, HeartHandshake, Compass, 
  Building2, ShieldAlert, Sparkles, ArrowRight, Heart
} from 'lucide-react';
import { motion } from 'motion/react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScrollAnimation from '../components/ScrollAnimation';

const Project: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Projeto República para Jovens em Transição - ABA" 
        description="Uma ponte entre o acolhimento institucional e a independência. Conheça o Projeto República para Jovens da Associação Barnabé."
      />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-aba-blue overflow-hidden" role="banner">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1920" 
            alt="Jovens reunidos em ambiente acolhedor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-aba-darkBlue to-aba-blue"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-md text-amber-300 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 border border-amber-400/30 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>Projeto em Fase de Implantação • Buscando Padrinhos e Parceiros para o Pontapé Inicial</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6 text-white leading-tight max-w-4xl mx-auto">
              Quando o abrigo termina, <span className="text-aba-orange underline decoration-aba-orange/30 underline-offset-8">o futuro não pode terminar junto.</span>
            </h1>
            <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light mb-8">
              Uma ponte segura e estruturada entre a proteção institucional e a independência da vida adulta.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/doar">
                <Button variant="primary" size="lg" className="shadow-lg">
                  Seja um Padrinho / Madrinha
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="secondary" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Parcerias Empresariais
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-0 right-0 p-24 opacity-10 pointer-events-none">
          <Users className="w-64 h-64 text-white" />
        </div>
      </section>

      {/* O Desafio Section */}
      <section className="py-20 bg-amber-50/50 border-b border-amber-100" aria-labelledby="desafio-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-bold mb-4">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>O Desafio da Maioridade</span>
              </div>
              <h2 id="desafio-title" className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6 leading-snug">
                "E agora, para onde eu vou?"
              </h2>
              <div className="text-gray-700 text-lg space-y-4 leading-relaxed">
                <p>
                  Completar 18 anos deveria ser motivo de celebração e esperança. Porém, para um jovem que cresceu em um serviço de acolhimento institucional, essa data traz medo e uma incerteza devastadora.
                </p>
                <p>
                  A proteção do Estado chega ao fim, mas a necessidade de orientação, moradia, educação, trabalho e afeto não desaparece da noite para o dia. Sem uma ponte para a autonomia, esses jovens enfrentam graves vulnerabilidades:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                {[
                  "Falta de moradia e risco de situação de rua",
                  "Ausência de renda e qualificação profissional",
                  "Dificuldade para obter o primeiro emprego",
                  "Risco de abandono dos estudos",
                  "Fragilidade ou ausência de vínculos familiares",
                  "Insegurança emocional e isolamento social"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-amber-200/60 shadow-sm text-sm font-medium text-gray-800">
                    <span className="text-aba-orange font-bold">✕</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-amber-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-aba-orange/10 rounded-full blur-2xl"></div>
                <div className="text-aba-blue font-serif text-2xl font-bold mb-4">
                  Uma Nova História Pode Começar aos 18 Anos
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Quando não existe uma ponte entre o acolhimento e a autonomia, o jovem pode cair justamente no espaço que a sociedade gostaria de evitar. O <strong>Projeto República</strong> quer construir essa ponte sólida e transformadora.
                </p>
                <div className="p-6 bg-aba-blue/5 rounded-2xl border border-aba-blue/10">
                  <p className="text-aba-darkBlue font-semibold italic text-center">
                    "Não queremos apenas oferecer um teto. Queremos ajudar a construir um caminho."
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Capacidade Inicial: 12 Jovens */}
      <section className="py-20 bg-white border-b border-gray-100" aria-labelledby="capacidade-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="12 Jovens. 12 Oportunidades de Recomeço." 
            subtitle="Estrutura e Vagas Iniciais" 
          />
          
          <ScrollAnimation>
            <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-12">
              Em vez de enxergar apenas uma necessidade social, enxergamos uma imensa <strong>potencialidade</strong>. Cada jovem acolhido na República pode se tornar um profissional qualificado, um trabalhador, um empreendedor, um cidadão independente e um contribuinte ativo da sociedade.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <ScrollAnimation delay={0}>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border-2 border-aba-blue/20 shadow-lg text-center relative overflow-hidden group hover:border-aba-blue transition-all">
                <div className="w-16 h-16 bg-aba-blue text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <HomeIcon className="w-8 h-8" />
                </div>
                <span className="inline-block px-3 py-1 bg-aba-blue/10 text-aba-blue font-bold rounded-full text-xs uppercase tracking-wider mb-2">
                  República Masculina
                </span>
                <h3 className="text-4xl font-extrabold text-gray-900 mb-2">6 Vagas</h3>
                <p className="text-gray-600 text-sm">
                  Espaço estruturado com acompanhamento técnico contínuo para acolhimento de jovens rapazes egressos de abrigos.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={150}>
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl border-2 border-aba-orange/20 shadow-lg text-center relative overflow-hidden group hover:border-aba-orange transition-all">
                <div className="w-16 h-16 bg-aba-orange text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <HomeIcon className="w-8 h-8" />
                </div>
                <span className="inline-block px-3 py-1 bg-aba-orange/10 text-aba-orange font-bold rounded-full text-xs uppercase tracking-wider mb-2">
                  República Feminina
                </span>
                <h3 className="text-4xl font-extrabold text-gray-900 mb-2">6 Vagas</h3>
                <p className="text-gray-600 text-sm">
                  Espaço seguro e acolhedor para que jovens mulheres desenvolvam sua independência e projetos de vida.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="bg-aba-darkBlue text-white p-8 rounded-2xl max-w-3xl mx-auto text-center shadow-xl">
            <p className="text-xl font-serif italic mb-2">
              "Cada vaga representa muito mais do que uma cama. Representa uma oportunidade real de futuro."
            </p>
          </div>
        </div>
      </section>

      {/* Sete Eixos de Desenvolvimento (O Que o Jovem Recebe) */}
      <section className="py-20 bg-gray-50" aria-labelledby="eixos-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="O que o Jovem Receberá?" 
            subtitle="Sete Eixos Para a Autonomia Integral" 
          />
          <p className="text-center text-gray-600 max-w-2xl mx-auto text-base mb-16">
            Durante sua permanência no projeto, o participante é incentivado e acompanhado ativamente em todas as áreas essenciais para a vida adulta.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={0}>
              <EixoCard 
                icon={GraduationCap}
                color="text-blue-600"
                bgColor="bg-blue-50"
                title="Concluir os Estudos"
                desc="Apoio escolar constante, pois a educação é a principal ferramenta para ampliar escolhas e abrir portas."
              />
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <EixoCard 
                icon={Book}
                color="text-emerald-600"
                bgColor="bg-emerald-50"
                title="Buscar Qualificação"
                desc="Incentivo a cursos profissionalizantes alinhados às aptidões individuais e às demandas do mercado de trabalho."
              />
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <EixoCard 
                icon={Briefcase}
                color="text-aba-blue"
                bgColor="bg-aba-blue/10"
                title="Entrar no Mercado de Trabalho"
                desc="Elaboração de currículos, treino para entrevistas, comportamento profissional e busca pelo primeiro emprego."
              />
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <EixoCard 
                icon={Wallet}
                color="text-amber-600"
                bgColor="bg-amber-50"
                title="Aprender a Administrar a Renda"
                desc="Educação financeira prática: independência significa saber cuidar do próprio dinheiro e criar reservas."
              />
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <EixoCard 
                icon={HomeIcon}
                color="text-purple-600"
                bgColor="bg-purple-50"
                title="Aprender a Cuidar de uma Casa"
                desc="Desenvolvimento de hábitos de responsabilidade, organização doméstica, alimentação saudável, higiene e convivência."
              />
            </ScrollAnimation>

            <ScrollAnimation delay={500}>
              <EixoCard 
                icon={HeartHandshake}
                color="text-rose-600"
                bgColor="bg-rose-50"
                title="Relacionamentos Saudáveis"
                desc="Fortalecimento do respeito interpessoal, convivência em comunidade e, quando viável, resgate saudável de vínculos familiares."
              />
            </ScrollAnimation>
          </div>

          <div className="mt-8 max-w-2xl mx-auto">
            <ScrollAnimation delay={600}>
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-aba-orange/20 text-center relative overflow-hidden">
                <div className="w-14 h-14 bg-orange-100 text-aba-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Construir um Projeto de Vida</h3>
                <p className="text-gray-600 leading-relaxed">
                  O jovem precisa saber não apenas onde está, mas principalmente <strong>para onde quer ir</strong>. Acompanhamos cada morador no planejamento consciente de suas metas de curto, médio e longo prazo.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Da Assistência para a Autonomia */}
      <section className="py-20 bg-gradient-to-r from-aba-darkBlue to-aba-blue text-white" aria-labelledby="autonomia-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <span className="text-amber-300 font-bold uppercase tracking-widest text-sm mb-2 block">
              Mudança de Perspectiva
            </span>
            <h2 id="autonomia-title" className="text-3xl md:text-5xl font-bold font-serif mb-6 max-w-4xl mx-auto leading-tight">
              Da Assistência para a Autonomia
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Não queremos criar jovens dependentes de assistência. Queremos criar condições para que eles possam conquistar sua própria independência.
            </p>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {[
              "Assistência é importante. Mas oportunidade transforma.",
              "A permanência na República não é um destino final — é uma etapa de preparação.",
              "O jovem entra precisando de apoio e sai dominando a própria vida."
            ].map((frase, idx) => (
              <ScrollAnimation key={idx} delay={idx * 150}>
                <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 h-full flex items-center">
                  <p className="text-lg font-medium text-white leading-snug">
                    ✨ {frase}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Um Novo Caminho Para As Empresas */}
      <section className="py-20 bg-white border-b border-gray-100" aria-labelledby="empresas-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-aba-blue rounded-full text-sm font-bold mb-4">
                <Building2 className="w-4 h-4" />
                <span>Parceria com Empresas</span>
              </div>
              <h2 id="empresas-title" className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6 leading-snug">
                Investimento no Desenvolvimento Econômico Local
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                O Projeto República não deve ser visto apenas como uma ação social. É também um investimento direto na economia da cidade. Ao qualificar esses jovens, ampliamos o número de profissionais preparados para ocupar vagas de trabalho.
              </p>
              
              <h4 className="font-bold text-gray-900 text-base mb-3">Empresas parceiras podem contribuir com:</h4>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Cursos e Capacitações",
                  "Palestras e Mentorias",
                  "Visitas Técnicas Guiadas",
                  "Vagas de Aprendizagem e Estágio",
                  "Oportunidades de Primeiro Emprego",
                  "Doações de Equipamentos e Materiais"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-100 font-medium">
                    <CheckCircle className="w-4 h-4 text-aba-green shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/contato">
                <Button variant="primary">
                  Quero Ser Uma Empresa Parceira
                </Button>
              </Link>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-gradient-to-br from-slate-900 to-aba-darkBlue text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-bold font-serif mb-6 text-amber-300">
                  Ciclo de Desenvolvimento da Cidade
                </h3>
                
                <div className="space-y-4 relative z-10">
                  {[
                    "1. Jovem qualificado e orientado",
                    "2. Inserção no primeiro emprego",
                    "3. Geração de renda própria",
                    "4. Consumo no comércio local",
                    "5. Maior participação econômica",
                    "6. Mais desenvolvimento e segurança para a cidade"
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10 text-sm font-medium">
                      <span className="w-6 h-6 rounded-full bg-aba-orange text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step.substring(3)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Quem Ganha com o Projeto? */}
      <section className="py-20 bg-gray-50" aria-labelledby="quem-ganha-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Quem Ganha com o Projeto?" 
            subtitle="Impacto Multissetorial" 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollAnimation delay={0}>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col">
                <div className="text-3xl mb-4">🧑</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">O Jovem</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                  Ganha oportunidade, conhecimento, segurança e perspectiva de um futuro digno.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col">
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">A Empresa</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                  Encontra pessoas preparadas e novas possibilidades de formação de mão de obra responsável.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col">
                <div className="text-3xl mb-4">🏙️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">A Cidade</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                  Fortalecimento da economia local, redução da vulnerabilidade e formação de cidadãos independentes.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col">
                <div className="text-3xl mb-4">❤️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">A Sociedade</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">
                  Impede que uma juventude promissora seja esquecida no momento em que mais precisa de apoio.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Nossa Visão - Sentenças de Empoderamento */}
      <section className="py-20 bg-white" aria-labelledby="visao-title">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle 
            title="Nossa Visão de Futuro" 
            subtitle="Frases de Autonomia" 
          />
          <p className="text-gray-600 text-lg mb-12">
            Trabalhamos para que cada jovem acolhido na República possa olhar para a própria vida e dizer com orgulho e convicção:
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "\"Eu tenho uma oportunidade.\"",
              "\"Eu sou capaz.\"",
              "\"Eu posso trabalhar.\"",
              "\"Eu posso estudar.\"",
              "\"Eu posso ter minha própria casa.\"",
              "\"Eu posso construir minha própria história.\""
            ].map((quote, idx) => (
              <ScrollAnimation key={idx} delay={idx * 100}>
                <div className="p-6 bg-gradient-to-br from-blue-50/50 to-orange-50/50 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-serif italic font-bold text-gray-800 text-lg text-aba-blue">
                    {quote}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Escolha da Cidade / CTA Final */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Quando um jovem completa 18 anos, queremos que a cidade tenha escolhas.
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Poderíamos escolher a opção passiva de dizer: <em>"Agora você precisa seguir sozinho."</em><br/>
            Nós escolhemos ativamente a segunda opção: <strong>"Agora começa uma nova etapa. E nós vamos ajudar você a se preparar para ela."</strong>
          </p>

          <div className="bg-white/10 p-8 rounded-3xl border border-white/20 mb-8 backdrop-blur-md">
            <p className="text-xl font-bold text-amber-300 mb-2">ASSOCIAÇÃO BARNABÉ – ABA</p>
            <p className="text-lg text-white font-serif italic">
              Acolher vidas. Construir futuros. Transformar histórias.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/doar">
              <Button variant="primary" size="lg">
                Apadrinhar um Jovem Agora
              </Button>
            </Link>
            <Link to="/contato">
              <Button variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Falar com a Nossa Equipe
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const EixoCard: React.FC<{
  icon: any; 
  color: string; 
  bgColor: string; 
  title: string; 
  desc: string;
}> = ({ icon: Icon, color, bgColor, title, desc }) => (
  <article className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1 group flex flex-col h-full">
    <div className={`w-14 h-14 ${bgColor} ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <Icon className="h-7 w-7" aria-hidden="true" />
    </div>
    <h3 className="font-bold text-xl mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed mt-auto">{desc}</p>
  </article>
);

export default Project;
