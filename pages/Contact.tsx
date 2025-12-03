import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { CONTACT_INFO, FAQS, WHATSAPP_URL } from '../constants';
import { MapPin, Phone, Mail, MessageCircle, ChevronDown, ChevronUp, Send } from 'lucide-react';
import SEO from '../components/SEO';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Contato via Site ABA*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Assunto:* ${formData.subject}\n\n*Mensagem:*\n${formData.message}`;
    const whatsappUrl = `https://wa.me/5551998147660?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Associação Barnabé",
      "telephone": CONTACT_INFO.phone,
      "email": CONTACT_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Brasil, 330 - Bairro Barnabé",
        "addressLocality": "Gravataí",
        "addressRegion": "RS",
        "postalCode": "94150-000",
        "addressCountry": "BR"
      }
    }
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Fale Conosco" 
        description="Entre em contato com a Associação Barnabé em Gravataí/RS. Endereço, telefone, email e dúvidas frequentes sobre como ajudar nossos jovens."
        schema={contactSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form & Info */}
          <div>
            <SectionTitle title="Fale Conosco" subtitle="Contato" centered={false} />
            <p className="text-gray-600 mb-8">
              Estamos de portas abertas. Se você tem dúvidas sobre como doar, quer oferecer uma vaga de emprego ou conhecer o projeto pessoalmente, entre em contato.
            </p>

            <address className="space-y-6 mb-12 not-italic">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-aba-orange mt-1 mr-4 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Endereço (Sede)</h4>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-center group">
                <Phone className="h-6 w-6 text-aba-orange mr-4 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Telefone e WhatsApp</h4>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-aba-blue transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-aba-orange mr-4 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">E-mail Institucional</h4>
                  <p className="text-gray-600">{CONTACT_INFO.email}</p>
                </div>
              </div>
            </address>

            <form className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-sm" onSubmit={handleSubmit}>
              <h3 className="font-bold text-lg mb-2">Envie uma mensagem</h3>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu Nome" 
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aba-blue focus:outline-none" 
                  aria-label="Nome Completo"
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu E-mail" 
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aba-blue focus:outline-none" 
                  aria-label="Endereço de Email"
                />
              </div>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Assunto" 
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aba-blue focus:outline-none" 
                aria-label="Assunto da mensagem"
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Como podemos ajudar?" 
                rows={4} 
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aba-blue focus:outline-none"
                aria-label="Mensagem"
              ></textarea>
              <Button type="submit" fullWidth>
                <Send className="w-4 h-4 mr-2" />
                Enviar para WhatsApp
              </Button>
            </form>
          </div>

          {/* Map and FAQ */}
          <div>
             <div className="bg-gray-200 rounded-xl overflow-hidden h-80 mb-12 shadow-md relative">
                <iframe 
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=pt-BR&q=Av.%20Brasil,%20330%20-%20Barnab%C3%A9,%20Gravata%C3%AD%20-%20RS,%2094150-000+(Associa%C3%A7%C3%A3o%20Barnab%C3%A9)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  loading="lazy" 
                  title="Localização da Associação Barnabé no Google Maps"
                  allowFullScreen
                ></iframe>
             </div>

             <section>
               <h3 className="text-2xl font-bold font-serif mb-6 text-gray-900">Perguntas Frequentes (FAQ)</h3>
               <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
                 {FAQS.map((faq, idx) => (
                   <div key={idx} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                     <FaqItem question={faq.question} answer={faq.answer} />
                     <meta itemProp="name" content={faq.question} />
                     <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer" className="hidden">
                       <div itemProp="text">{faq.answer}</div>
                     </div>
                   </div>
                 ))}
               </div>
             </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;