import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { Logo } from '../components/Logo';
import { CONTACT_INFO, WHATSAPP_URL } from '../constants';

const DonorArea: React.FC = () => (
  <div className="pt-20 min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <SEO title="Atendimento ao Doador" description="Fale com a Associação Barnabé para consultar recibos, informações sobre sua contribuição e relatórios disponíveis." noindex={true} />
    <section className="max-w-xl w-full space-y-6 bg-white p-6 sm:p-10 rounded-3xl shadow-lg border border-gray-100" aria-labelledby="doador-titulo">
      <div className="flex justify-center"><Logo size="md" showText={false} /></div>
      <h1 id="doador-titulo" className="text-3xl font-extrabold text-gray-900 font-serif text-center">Atendimento ao Doador</h1>
      <p className="text-gray-600">Esta página não oferece acesso a uma conta nem cadastro com senha. Para consultar recibos, informações sobre sua contribuição ou relatórios disponíveis, converse diretamente com a equipe da Associação Barnabé.</p>
      <div className="rounded-xl bg-blue-50 p-5 text-gray-700">
        <h2 className="font-bold text-aba-blue mb-2">Como pedir orientação</h2>
        <p>Diga se precisa de um recibo, de informações sobre uma contribuição ou de conhecer as formas de apoio. A equipe informa quais dados são necessários e como dar continuidade ao atendimento.</p>
        <p className="mt-3">Não envie senhas, dados completos de cartão ou documentos pessoais sem uma necessidade confirmada pela equipe.</p>
      </div>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 min-h-12 px-4 py-3 bg-aba-blue text-white rounded-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
        <MessageCircle className="h-5 w-5" aria-hidden="true" /> Falar com a equipe no WhatsApp
      </a>
      <p className="text-center text-gray-600">Ou escreva para <a className="underline break-all" href={'mailto:'+CONTACT_INFO.email}>{CONTACT_INFO.email}</a>.</p>
      <nav className="flex flex-wrap justify-center gap-4 border-t pt-5" aria-label="Informações para doadores">
        <Link className="underline text-aba-blue py-2" to="/transparencia">Consultar transparência</Link>
        <Link className="underline text-aba-blue py-2" to="/doar">Como ajudar</Link>
      </nav>
    </section>
  </div>
);
export default DonorArea;
