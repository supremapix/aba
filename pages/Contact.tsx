import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { CONTACT_INFO, FAQS, WHATSAPP_URL } from '../constants';
import { MapPin, Phone, Mail, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden transition-shadow hover:shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 flex justify-between items-start focus:outline-none hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-aba-blue flex items-start pr-4">
          <MessageCircle className="h-5 w-5 mr-2 mt-0.5 shrink-0 opacity-70" />
          <span>{question}</span>
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pl-11">
          <p className="text-gray-600 text-sm border-t border-gray-100 pt-2 animate-in fade-in slide-in-from-top-1 duration-200">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form & Info */}
          <div>
            <SectionTitle title="Fale Conosco" subtitle="Contato" centered={false} />
            <p className="text-gray-600 mb-8">
              Tem dúvidas sobre como ajudar ou quer conhecer o projeto pessoalmente? Entre em contato.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-aba-orange mt-1 mr-4 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Endereço</h4>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-center group">
                <Phone className="h-6 w-6 text-aba-orange mr-4 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Telefone/WhatsApp</h4>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-aba-blue transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-aba-orange mr-4 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">E-mail</h4>
                  <p className="text-gray-600">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </div>

            <form className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-bold text-lg mb-2">Envie uma mensagem</h3>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Nome" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aba-blue focus:outline-none" />
                <input type="email" placeholder="E-mail" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aba-blue focus:outline-none" />
              </div>
              <input type="text" placeholder="Assunto" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aba-blue focus:outline-none" />
              <textarea placeholder="Sua mensagem" rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aba-blue focus:outline-none"></textarea>
              <Button type="submit" fullWidth>Enviar Mensagem</Button>
            </form>
          </div>

          {/* Map and FAQ */}
          <div>
             {/* Map Embed */}
             <div className="bg-gray-200 rounded-xl overflow-hidden h-80 mb-12 shadow-md relative">
                {/* Simulated Map iframe */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d-51.0!3d-29.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjlcNDQnMzYuMCJTIDUxwrAwMCcwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  loading="lazy" 
                  title="Mapa da Associação Barnabé"
                ></iframe>
                <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded shadow text-xs text-gray-500">
                    Localização Aproximada (Gravataí/RS)
                </div>
             </div>

             <div>
               <h3 className="text-2xl font-bold font-serif mb-6 text-gray-900">Perguntas Frequentes</h3>
               <div className="space-y-3">
                 {FAQS.map((faq, idx) => (
                   <FaqItem key={idx} question={faq.question} answer={faq.answer} />
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;