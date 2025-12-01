import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { DONATION_PLANS, CONTACT_INFO } from '../constants';
import Button from '../components/Button';
import { Check, Copy, Heart, Hand, Building } from 'lucide-react';

const Donate: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = CONTACT_INFO.cnpj; // Using CNPJ as PIX key example

  const copyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-20">
      <div className="bg-aba-orange py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-serif mb-4">Como Ajudar</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Sua contribuição é o combustível que mantém nossos projetos vivos. Escolha a melhor forma de apoiar.
          </p>
        </div>
      </div>

      {/* Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Apadrinhamento Mensal" subtitle="Planos" />
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Torne-se um padrinho ou madrinha recorrente. Sua doação mensal garante previsibilidade para pagarmos as contas das casas.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {DONATION_PLANS.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${plan.recommended ? 'border-aba-orange transform md:-translate-y-4' : 'border-transparent'}`}
              >
                {plan.recommended && (
                  <div className="bg-aba-orange text-white text-center text-sm font-bold py-1 uppercase tracking-wider">
                    Mais Popular
                  </div>
                )}
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-5xl font-bold text-aba-blue mb-4">
                    <span className="text-xl text-gray-500 align-top">R$</span>
                    {plan.price}
                    <span className="text-base text-gray-400 font-normal">/mês</span>
                  </div>
                  <ul className="space-y-4 text-left mb-8">
                    {plan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button fullWidth variant={plan.recommended ? 'primary' : 'outline'}>
                    Assinar Agora
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One-off Donation (PIX) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 bg-aba-blue text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Doação Pontual via PIX</h3>
                <p className="mb-6 text-blue-100">
                  Prefere fazer uma doação única? Qualquer valor faz a diferença na compra de alimentos e materiais de higiene.
                </p>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
                  <p className="text-sm text-blue-200 mb-1">Chave PIX (CNPJ)</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl">{pixKey}</span>
                    <button 
                      onClick={copyPix}
                      className="p-2 hover:bg-white/20 rounded-md transition-colors"
                      title="Copiar"
                    >
                      {copied ? <Check className="h-5 w-5 text-green-400" /> : <Copy className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                <p className="mt-4 text-sm text-blue-200">Banco: Banrisul | Ag: 0100 | CC: 12345-6</p>
              </div>
              <div className="p-10 flex flex-col justify-center bg-gray-50">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Direcionamento de I.R.</h3>
                <p className="mb-6 text-gray-600">
                  Você pode direcionar até 6% do seu Imposto de Renda devido para o Fundo da Infância e Adolescência (FIA) e indicar a ABA como beneficiária. Não custa nada a mais para você!
                </p>
                <Button variant="outline">Baixar Passo a Passo (PDF)</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other ways to help */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Outras Formas de Ajudar" subtitle="Participe" centered />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="flex p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mr-6 bg-orange-100 p-4 rounded-full h-16 w-16 flex items-center justify-center text-aba-orange shrink-0">
                <Hand className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Seja Voluntário</h3>
                <p className="text-gray-600 mb-4">
                  Doe seu tempo e talento. Precisamos de mentores profissionais, professores de reforço e apoio em eventos.
                </p>
                <Button variant="secondary" size="sm">Cadastro de Voluntário</Button>
              </div>
            </div>

            <div className="flex p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mr-6 bg-blue-100 p-4 rounded-full h-16 w-16 flex items-center justify-center text-aba-blue shrink-0">
                <Building className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Empresa Parceira</h3>
                <p className="text-gray-600 mb-4">
                  Associe sua marca a uma causa nobre. Oferecemos benefícios fiscais e de imagem para empresas mantenedoras.
                </p>
                <Button variant="primary" size="sm">Falar com Captação</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;