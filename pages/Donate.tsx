import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { DONATION_PLANS, CONTACT_INFO, WHATSAPP_URL } from '../constants';
import Button from '../components/Button';
import { Check, Copy, Heart, Hand, Building, Coffee, BookOpen, Lightbulb, User, Mail, Phone, Calendar, Briefcase, Star } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollAnimation from '../components/ScrollAnimation';

const Donate: React.FC = () => {
  const [copied, setCopied] = useState(false);
  
  // Volunteer Form State
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    phone: '',
    email: '',
    area: 'Mentoria Profissional',
    availability: 'Finais de Semana',
    skills: ''
  });

  const pixKey = CONTACT_INFO.cnpj; // Using CNPJ as PIX key example

  const copyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVolunteerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVolunteerForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Novo Cadastro de Voluntário ABA* 💙\n\n*Nome:* ${volunteerForm.name}\n*WhatsApp:* ${volunteerForm.phone}\n*Email:* ${volunteerForm.email}\n*Interesse:* ${volunteerForm.area}\n*Disponibilidade:* ${volunteerForm.availability}\n\n*Habilidades/Obs:* ${volunteerForm.skills}`;
    
    // Extract number from WHATSAPP_URL constant logic (assuming standard link structure) or use fixed logic
    // Using the link logic directly to ensure it goes to the right place
    const waNumber = "5551998147660"; 
    const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const donateSchema = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://associacaobarnabe.org/doar",
      "inLanguage": "pt-BR",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "agent": {
      "@type": "Organization",
      "name": "Associação Barnabé"
    },
    "description": "Doe para a Associação Barnabé e ajude jovens a terem um futuro digno."
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Como Ajudar - Doação e Voluntariado" 
        description="Saiba como doar para a Associação Barnabé. Seja um padrinho, faça uma doação via PIX, direcione seu Imposto de Renda ou seja voluntário."
        schema={donateSchema}
      />
      <header className="bg-aba-orange py-20 text-white relative overflow-hidden" role="banner">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Como Ajudar</h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Sua doação não é apenas dinheiro; é a oportunidade de um futuro digno para um jovem. Escolha como você quer transformar vidas hoje.
            </p>
          </ScrollAnimation>
        </div>
      </header>

      {/* Impact Context */}
      <section className="py-12 bg-white -mt-8 relative z-10 max-w-5xl mx-auto px-4" aria-label="Impacto da Doação">
        <ScrollAnimation delay={200}>
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
             <h3 className="text-center text-2xl font-bold text-gray-800 mb-8">O que sua doação realiza?</h3>
             <div className="grid md:grid-cols-3 gap-8 text-center">
               <div className="p-4">
                 <Coffee className="h-10 w-10 text-aba-orange mx-auto mb-3" aria-hidden="true" />
                 <p className="font-bold text-lg text-aba-blue">R$ 50,00</p>
                 <p className="text-gray-600 text-sm">Garante o café da manhã de um jovem por uma semana.</p>
               </div>
               <div className="p-4 border-l border-r border-gray-100">
                 <BookOpen className="h-10 w-10 text-aba-orange mx-auto mb-3" aria-hidden="true" />
                 <p className="font-bold text-lg text-aba-blue">R$ 100,00</p>
                 <p className="text-gray-600 text-sm">Custeia transporte e material didático para cursos.</p>
               </div>
               <div className="p-4">
                 <Lightbulb className="h-10 w-10 text-aba-orange mx-auto mb-3" aria-hidden="true" />
                 <p className="font-bold text-lg text-aba-blue">R$ 300,00</p>
                 <p className="text-gray-600 text-sm">Ajuda significativamente nas contas de luz, água e internet da casa.</p>
               </div>
             </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-gray-50" aria-label="Planos de Apadrinhamento">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Seja um Padrinho Mensal" subtitle="Continuidade" />
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A doação recorrente é vital para a ABA. Ela nos permite planejar o mês, pagar o aluguel das casas e garantir que não falte comida na mesa.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {DONATION_PLANS.map((plan, index) => (
              <ScrollAnimation key={index} delay={index * 150} className="h-full">
                <article 
                  className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 transition-transform hover:-translate-y-2 duration-300 h-full flex flex-col ${plan.recommended ? 'border-aba-orange transform md:-translate-y-4 z-10' : 'border-transparent'}`}
                >
                  {plan.recommended && (
                    <div className="bg-aba-orange text-white text-center text-sm font-bold py-2 uppercase tracking-wider">
                      Maior Impacto
                    </div>
                  )}
                  <div className="p-8 text-center flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-5xl font-bold text-aba-blue mb-4">
                      <span className="text-xl text-gray-500 align-top">R$</span>
                      {plan.price}
                      <span className="text-base text-gray-400 font-normal">/mês</span>
                    </div>
                    <ul className="space-y-4 text-left mb-8 border-t border-gray-100 pt-6 flex-grow">
                      {plan.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" aria-hidden="true" />
                          <span className="text-gray-600 text-sm leading-tight">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button fullWidth variant={plan.recommended ? 'primary' : 'outline'}>
                      Quero Apadrinhar
                    </Button>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* One-off Donation (PIX) */}
      <section className="py-16" aria-label="Doação via PIX">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-10 bg-aba-blue text-white flex flex-col justify-center relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" aria-hidden="true"></div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Doação Pontual via PIX</h3>
                  <p className="mb-8 text-blue-100 relative z-10">
                    Prefere fazer uma doação única? Qualquer valor é bem-vindo e faz toda a diferença para a compra de alimentos da semana, produtos de limpeza e urgências médicas.
                  </p>
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 relative z-10">
                    <p className="text-xs text-blue-200 uppercase tracking-widest mb-2">Chave PIX (CNPJ)</p>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xl md:text-2xl font-bold truncate">{pixKey}</span>
                      <button 
                        onClick={copyPix}
                        className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white"
                        title="Copiar Chave PIX"
                        aria-live="polite"
                      >
                        {copied ? <><Check className="h-4 w-4" /> Copiado</> : <><Copy className="h-4 w-4" /> Copiar</>}
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 text-sm text-blue-200 opacity-80">
                    <p>Banco: C6 Bank</p>
                    <p>Agência: 0100 | Conta Corrente: 12.345-6</p>
                    <p>Favorecido: Associação Barnabé</p>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center bg-gray-50">
                  <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                      <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                          <Building className="mr-2 text-aba-orange" aria-hidden="true" />
                          Direcionamento de I.R.
                      </h3>
                      <p className="mb-6 text-gray-600 text-sm leading-relaxed">
                      Você pode direcionar até <strong>6% do seu Imposto de Renda</strong> devido para o Fundo da Infância e Adolescência (FIA) e indicar a ABA como beneficiária. 
                      <br/><br/>
                      <strong>Importante:</strong> Não custa nada a mais para você! Em vez de pagar ao governo, você destina parte do imposto para transformar vidas na sua comunidade.
                      </p>
                      <Button variant="outline" fullWidth>Baixar Guia Passo a Passo (PDF)</Button>
                  </div>
                  <div className="text-center">
                      <p className="text-sm text-gray-500">Dúvidas sobre o IR Solidário? <a href="#" className="text-aba-blue hover:underline">Fale com nosso contador parceiro.</a></p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Other ways to help */}
      <section className="py-16 bg-white" aria-labelledby="outras-formas-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="outras-formas-title">
            <SectionTitle title="Outras Formas de Ajudar" subtitle="Participe Ativamente" centered />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <ScrollAnimation delay={0}>
              <div className="flex flex-col md:flex-row p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group h-full">
                <div className="mb-6 md:mb-0 md:mr-6 bg-orange-100 p-5 rounded-full h-20 w-20 flex items-center justify-center text-aba-orange shrink-0 group-hover:bg-aba-orange group-hover:text-white transition-colors">
                  <Hand className="h-10 w-10" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Seja Voluntário</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Doe seu tempo e talento. Precisamos de mentores profissionais, professores de reforço (matemática, português), psicólogos e apoio em eventos beneficentes.
                  </p>
                  <a href="#volunteer-form">
                    <Button variant="secondary" size="sm">Cadastro de Voluntário</Button>
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="flex flex-col md:flex-row p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group h-full">
                <div className="mb-6 md:mb-0 md:mr-6 bg-blue-100 p-5 rounded-full h-20 w-20 flex items-center justify-center text-aba-blue shrink-0 group-hover:bg-aba-blue group-hover:text-white transition-colors">
                  <Building className="h-10 w-10" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Empresa Parceira</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Associe sua marca a uma causa nobre. Oferecemos benefícios fiscais, selo de responsabilidade social e palestras sobre impacto social para seus colaboradores.
                  </p>
                  <Button variant="primary" size="sm">Falar com Captação</Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section id="volunteer-form" className="py-20 bg-blue-50 relative">
        <div className="absolute inset-0 bg-pattern opacity-5" aria-hidden="true"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle title="Cadastro de Voluntários" subtitle="Junte-se a Nós" centered />
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mt-10">
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Preencha o formulário abaixo para demonstrar seu interesse. Nossa coordenadora de voluntariado entrará em contato via WhatsApp para agendar uma conversa.
            </p>

            <form onSubmit={handleVolunteerSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="vol_name" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                    <User className="w-4 h-4 mr-1 text-aba-orange" /> Nome Completo
                  </label>
                  <input
                    type="text"
                    id="vol_name"
                    name="name"
                    value={volunteerForm.name}
                    onChange={handleVolunteerChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aba-blue focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="vol_phone" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                    <Phone className="w-4 h-4 mr-1 text-aba-orange" /> WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="vol_phone"
                    name="phone"
                    value={volunteerForm.phone}
                    onChange={handleVolunteerChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aba-blue focus:border-transparent transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="vol_email" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                  <Mail className="w-4 h-4 mr-1 text-aba-orange" /> E-mail
                </label>
                <input
                  type="email"
                  id="vol_email"
                  name="email"
                  value={volunteerForm.email}
                  onChange={handleVolunteerChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aba-blue focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="vol_area" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                    <Briefcase className="w-4 h-4 mr-1 text-aba-orange" /> Área de Interesse
                  </label>
                  <select
                    id="vol_area"
                    name="area"
                    value={volunteerForm.area}
                    onChange={handleVolunteerChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aba-blue focus:border-transparent transition-all bg-white"
                  >
                    <option>Mentoria Profissional (RH, Carreira)</option>
                    <option>Reforço Escolar (Matemática, Português)</option>
                    <option>Eventos e Ações Sociais</option>
                    <option>Oficinas (Culinária, Artes, Esportes)</option>
                    <option>Apoio Administrativo/Comunicação</option>
                    <option>Manutenção e Obras</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="vol_availability" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-aba-orange" /> Disponibilidade
                  </label>
                  <select
                    id="vol_availability"
                    name="availability"
                    value={volunteerForm.availability}
                    onChange={handleVolunteerChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aba-blue focus:border-transparent transition-all bg-white"
                  >
                    <option>Semanal (Dias úteis)</option>
                    <option>Finais de Semana</option>
                    <option>Quinzenal</option>
                    <option>Apenas em Eventos Pontuais</option>
                    <option>Remoto / Online</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="vol_skills" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                  <Star className="w-4 h-4 mr-1 text-aba-orange" /> Habilidades / Observações
                </label>
                <textarea
                  id="vol_skills"
                  name="skills"
                  value={volunteerForm.skills}
                  onChange={handleVolunteerChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aba-blue focus:border-transparent transition-all"
                  placeholder="Conte um pouco sobre suas experiências profissionais ou hobbies que gostaria de compartilhar com os jovens..."
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <Button type="submit" size="lg" className="w-full md:w-auto px-12">
                  <Heart className="w-5 h-5 mr-2 animate-pulse" />
                  Enviar Cadastro
                </Button>
                <p className="text-xs text-gray-500 mt-4">
                  Seus dados serão enviados diretamente para nossa equipe via WhatsApp.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;