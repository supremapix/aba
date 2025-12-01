import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { CheckCircle, Clock, Book, Briefcase, Smile, Key } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Project: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-aba-blue py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-serif mb-4">Projeto República para Jovens</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Uma ponte segura entre o acolhimento institucional e a vida adulta independente.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <SectionTitle title="Como Funciona?" subtitle="O Modelo" centered={false} />
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                A República é uma residência compartilhada destinada a jovens entre 18 e 21 anos. O objetivo não é apenas oferecer um teto, mas um ambiente de aprendizado prático sobre a vida adulta.
              </p>
              <ul className="space-y-4">
                {[
                  "Casas equipadas para até 6 jovens do mesmo sexo.",
                  "Acompanhamento técnico de assistentes sociais e psicólogos.",
                  "Custo zero para o morador (aluguel, contas e alimentação).",
                  "Plano de Desenvolvimento Individual (PDI) para cada jovem."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-aba-green shrink-0 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-72 h-72 bg-aba-orange/20 rounded-full blur-3xl"></div>
              <img src="https://picsum.photos/seed/kitchen/600/400" alt="Cozinha da República" className="relative rounded-lg shadow-2xl z-10" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <FeatureCard 
              icon={Key} 
              title="Moradia Segura" 
              desc="Um ambiente acolhedor, mobiliado e seguro para viver com dignidade." 
            />
            <FeatureCard 
              icon={Book} 
              title="Educação" 
              desc="Incentivo e suporte para conclusão do ensino médio e ingresso no ensino superior." 
            />
            <FeatureCard 
              icon={Briefcase} 
              title="Trabalho" 
              desc="Preparação de currículo, simulação de entrevistas e encaminhamento para vagas." 
            />
            <FeatureCard 
              icon={Smile} 
              title="Autonomia" 
              desc="Desenvolvimento de habilidades domésticas, gestão financeira e inteligência emocional." 
            />
          </div>
        </div>
      </section>

      {/* Routine Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Critérios de Entrada" subtitle="Quem atendemos" />
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
               <div>
                 <h4 className="font-bold text-lg mb-4 text-aba-blue flex items-center">
                   <Clock className="mr-2" /> Perfil do Jovem
                 </h4>
                 <ul className="list-disc list-inside space-y-2 text-gray-600">
                   <li>Idade entre 18 e 21 anos incompletos.</li>
                   <li>Egresso de serviços de acolhimento institucional.</li>
                   <li>Sem possibilidade de retorno à família de origem.</li>
                   <li>Vontade de estudar e trabalhar.</li>
                 </ul>
               </div>
               <div>
                 <h4 className="font-bold text-lg mb-4 text-aba-blue flex items-center">
                   <CheckCircle className="mr-2" /> Compromissos
                 </h4>
                 <ul className="list-disc list-inside space-y-2 text-gray-600">
                   <li>Respeitar as regras de convivência da casa.</li>
                   <li>Manter a frequência escolar ou em cursos.</li>
                   <li>Participar das reuniões de república.</li>
                   <li>Contribuir com a organização e limpeza.</li>
                 </ul>
               </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-6">Quer ajudar a manter este sonho vivo?</p>
            <Link to="/doar">
              <Button size="lg" variant="secondary">Torne-se um Padrinho</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{icon: any, title: string, desc: string}> = ({ icon: Icon, title, desc }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow text-center">
    <div className="w-12 h-12 bg-blue-50 text-aba-blue rounded-full flex items-center justify-center mx-auto mb-4">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

export default Project;