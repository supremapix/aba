import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { TEAM } from '../constants';
import { Target, Eye, Heart, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-aba-blue font-serif mb-6">Sobre a ABA</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais do que um teto, somos uma família de transição. A Associação Barnabé existe para garantir que nenhum jovem tenha que enfrentar o mundo sozinho ao completar 18 anos.
          </p>
        </div>
      </div>

      {/* Mission/Vision/Values */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-aba-blue/5 -z-10 transform -skew-y-3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Nossos Pilares" subtitle="Identidade" />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-aba-blue text-center group hover:transform hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-aba-blue group-hover:bg-aba-blue group-hover:text-white transition-colors">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Missão</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Acolher integralmente jovens egressos de abrigos institucionais, oferecendo moradia, afeto, qualificação profissional e suporte psicossocial para que construam sua autonomia com dignidade e segurança.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-aba-orange text-center group hover:transform hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-aba-orange group-hover:bg-aba-orange group-hover:text-white transition-colors">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visão</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ser referência nacional em tecnologia social de acolhimento para jovens adultos, erradicando a situação de rua para egressos do sistema de proteção e formando cidadãos plenos e realizados.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-aba-green text-center group hover:transform hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-aba-green group-hover:bg-aba-green group-hover:text-white transition-colors">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Valores</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Amor incondicional, Ética inegociável, Transparência financeira, Respeito à história individual, Excelência no cuidado e Fé na transformação humana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <SectionTitle title="Nossa Trajetória" subtitle="Como Tudo Começou" centered={false} />
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-justify">
                <p>
                  A história da <strong>Associação Barnabé (ABA)</strong> começou ao identificarmos uma falha cruel no sistema de proteção brasileiro: o "abismo dos 18 anos". Crianças e adolescentes protegidos pelo Estado em abrigos, ao atingirem a maioridade, eram frequentemente desligados sem qualquer preparação, rede de apoio ou lugar para ir.
                </p>
                <p>
                  Muitos desses jovens, sem família para acolhê-los, acabavam em situação de rua, vulneráveis à violência e às drogas, vendo seus sonhos desmoronarem em questão de dias. Não podíamos aceitar essa realidade.
                </p>
                <p>
                  Fundada por um grupo de voluntários movidos pela empatia e senso de justiça, a ABA nasceu pequena, alugando uma casa simples para acolher os primeiros jovens. Com o tempo, desenvolvemos uma metodologia própria, focada não apenas em dar teto, mas em ensinar a viver. Hoje, somos uma ponte sólida entre o passado institucional e um futuro de liberdade e conquistas.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4 relative">
                <div className="absolute inset-0 bg-aba-orange/10 rounded-full blur-3xl -z-10"></div>
                {/* Imagens atualizadas para refletir estudo, grupo e apoio, em vez de carros/genéricas */}
                <img 
                  src="https://picsum.photos/seed/youth_study_group/400/500" 
                  className="rounded-lg shadow-xl mt-8 hover:scale-105 transition-transform duration-500 object-cover h-64 w-full" 
                  alt="Jovens estudando juntos" 
                />
                <img 
                  src="https://picsum.photos/seed/volunteers_help/400/500" 
                  className="rounded-lg shadow-xl mb-8 hover:scale-105 transition-transform duration-500 object-cover h-64 w-full" 
                  alt="Apoio e comunidade" 
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-4 italic">Jovens construindo laços e futuro na República.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers Detailed */}
      <section className="py-16 bg-aba-darkBlue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif mb-12">O Impacto do Nosso Trabalho</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
              <Users className="h-10 w-10 text-aba-orange mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">150+</div>
              <p className="text-gray-300">Vidas transformadas diretamente</p>
            </div>
            <div className="p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
              <Award className="h-10 w-10 text-aba-green mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-gray-300">De inserção no mercado de trabalho</p>
            </div>
            <div className="p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
              <Users className="h-10 w-10 text-aba-blue mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-gray-300">Conclusão do Ensino Médio</p>
            </div>
             <div className="p-6 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
              <Heart className="h-10 w-10 text-red-500 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">∞</div>
              <p className="text-gray-300">Laços afetivos criados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Nossa Equipe" subtitle="Quem Faz Acontecer" />
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Contamos com uma equipe multidisciplinar apaixonada, composta por assistentes sociais, psicólogos, pedagogos e voluntários dedicados que trabalham incansavelmente pelo futuro dos nossos jovens.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group border border-gray-100">
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-aba-blue transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-aba-blue font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-500 italic">"Dedicado(a) a construir pontes para o futuro."</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;