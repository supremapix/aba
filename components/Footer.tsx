import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, MapPin, Mail, Instagram, Facebook, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
               <Heart className="h-8 w-8 text-aba-orange" />
               <span className="text-2xl font-serif font-bold">ABA</span>
            </div>
            <p className="text-gray-400 mb-6">
              Associação Barnabé. Transformando vidas e construindo futuros através do acolhimento e oportunidades para jovens.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-aba-orange transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-aba-orange transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/projeto" className="text-gray-400 hover:text-white transition-colors">O Projeto República</Link></li>
              <li><Link to="/doar" className="text-gray-400 hover:text-white transition-colors">Seja um Padrinho</Link></li>
              <li><Link to="/transparencia" className="text-gray-400 hover:text-white transition-colors">Transparência</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors">Área do Doador</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-aba-orange shrink-0 mt-1" />
                <span className="text-gray-400">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-aba-orange shrink-0" />
                <span className="text-gray-400">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-aba-orange shrink-0" />
                <span className="text-gray-400">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Legal / Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Informações</h3>
            <p className="text-gray-400 mb-2"><strong className="text-white">CNPJ:</strong> {CONTACT_INFO.cnpj}</p>
            <p className="text-gray-400 mb-4"><strong className="text-white">Horário:</strong> Seg - Sex, 09h às 17h</p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-300 italic">"A solidariedade é o sentimento que melhor expressa o respeito pela dignidade humana."</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Associação Barnabé (ABA). Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;