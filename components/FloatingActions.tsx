import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Share2, X, Copy, Check, Phone, ArrowUp, Sparkles, MessageCircle, Link2
} from 'lucide-react';
import { WHATSAPP_URL, CONTACT_INFO } from '../constants';

// Brand SVG Icons for precise brand representation
const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const PinterestIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.262-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const ThreadsIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12.186 24c-3.15 0-5.833-.997-7.76-2.883C2.42 19.167 1.5 16.14 1.5 12.186 1.5 8.232 2.42 5.205 4.426 3.238 6.353 1.352 9.036.355 12.186.355c3.15 0 5.833.997 7.76 2.883 2.006 1.967 2.926 4.994 2.926 8.948 0 3.954-.92 6.981-2.926 8.948-1.927 1.886-4.61 2.883-7.76 2.883zm0-2.31c2.58 0 4.673-.787 6.052-2.276 1.378-1.489 2.067-3.834 2.067-6.974 0-3.14-.689-5.485-2.067-6.974-1.379-1.489-3.472-2.276-6.052-2.276s-4.673.787-6.052 2.276C4.756 6.955 4.067 9.3 4.067 12.44c0 3.14.689 5.485 2.067 6.974 1.379 1.489 3.472 2.276 6.052 2.276zM12.186 17.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-2.31c1.48 0 2.69-1.21 2.69-2.69s-1.21-2.69-2.69-2.69-2.69 1.21-2.69 2.69 1.21 2.69 2.69 2.69z"/>
  </svg>
);

export const FloatingActions: React.FC = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Reference sharing image link specified in prompt
  const shareMediaUrl = "https://ais-dev-jknja36oy3jxsw6cooczn2-159672162471.us-east1.run.app/#/";

  // Monitor scroll for Back To Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const getPageTitle = () => {
    return document.title || 'Associação Barnabé - ABA | República para Jovens';
  };

  const getCurrentUrl = () => {
    return window.location.href;
  };

  const handleCopyLink = () => {
    const pageTitle = getPageTitle();
    const currentUrl = getCurrentUrl();
    const formattedText = `Estou indicando a Associação Barnabé (ABA): ${pageTitle} (${currentUrl})`;

    navigator.clipboard.writeText(formattedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = formattedText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  // Generate dynamic share URLs
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://associacaobarnabe.org';
  const title = typeof document !== 'undefined' ? document.title : 'Associação Barnabé - ABA';
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedMedia = encodeURIComponent(shareMediaUrl);

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      color: 'bg-emerald-500 hover:bg-emerald-600 text-white',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`Conheça a Associação Barnabé: ${title} - ${currentUrl}`)}`,
    },
    {
      name: 'Facebook',
      icon: FacebookIcon,
      color: 'bg-blue-600 hover:bg-blue-700 text-white',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: 'Twitter (X)',
      icon: TwitterIcon,
      color: 'bg-black hover:bg-gray-800 text-white',
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      name: 'Pinterest',
      icon: PinterestIcon,
      color: 'bg-red-600 hover:bg-red-700 text-white',
      url: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedMedia}&description=${encodedTitle}`,
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      color: 'bg-sky-700 hover:bg-sky-800 text-white',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: 'Threads',
      icon: ThreadsIcon,
      color: 'bg-stone-900 hover:bg-black text-white',
      url: `https://www.threads.net/intent/post?text=${encodeURIComponent(`${title} ${currentUrl}`)}`,
    },
  ];

  return (
    <>
      {/* 1. BOTÃO DE COMPARTILHAMENTO FLUTUANTE (CANTO INFERIOR ESQUERDO) */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
        {/* Share Modal Menu */}
        <AnimatePresence>
          {isShareOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="mb-4 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl shadow-2xl p-5 w-72 sm:w-80 relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                <div className="flex items-center gap-2 text-aba-blue font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-aba-orange" />
                  <span>Compartilhar Esta Página</span>
                </div>
                <button
                  onClick={() => setIsShareOpen(false)}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label="Fechar menu de compartilhamento"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-gray-500 mb-4">
                Ajude a espalhar a causa da Associação Barnabé em suas redes sociais:
              </p>

              {/* Grid of Social Share Buttons */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                {shareLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center p-2.5 rounded-xl transition-transform hover:scale-105 shadow-sm text-xs font-semibold gap-1.5 ${item.color}`}
                    title={`Compartilhar no ${item.name}`}
                  >
                    <item.icon />
                    <span className="text-[10px] leading-none">{item.name}</span>
                  </a>
                ))}
              </div>

              {/* Copy Link Button */}
              <div className="pt-2 border-t border-gray-100">
                <button
                  onClick={handleCopyLink}
                  className={`w-full py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    copied
                      ? 'bg-emerald-500 text-white border-emerald-500 shadow-md'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-800 border-gray-200'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 animate-bounce" />
                      <span>Link Copiado com Sucesso!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-aba-blue" />
                      <span>Copiar Link da Página</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Share Button */}
        <div className="relative group">
          {/* Pulsing Backglow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-aba-blue to-aba-orange rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsShareOpen(!isShareOpen)}
            className="relative bg-white text-aba-blue p-3.5 rounded-full shadow-2xl border border-blue-100 flex items-center justify-center gap-2 group transition-colors"
            aria-label="Compartilhar página"
          >
            <Share2 className="w-6 h-6 text-aba-blue transition-transform group-hover:rotate-12" />
            <span className="hidden sm:inline-block font-bold text-xs pr-1 text-gray-800">
              Compartilhar
            </span>
          </motion.button>
        </div>
      </div>

      {/* 2. BOTÕES DE CONTATO RÁPIDO E VOLTAR AO TOPO (CANTO INFERIOR DIREITO) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
        <div className="flex flex-col items-end gap-2.5 pointer-events-auto">
          {/* Button: Ligar Agora */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="group relative flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-aba-darkBlue hover:from-blue-700 hover:to-indigo-800 text-white px-4 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
            aria-label="Ligar Agora"
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute -inset-1 rounded-full bg-white/30 animate-ping opacity-75"></span>
              <Phone className="w-5 h-5 text-amber-300 transform group-hover:rotate-12 transition-transform" />
            </div>
            <span className="font-bold text-xs tracking-wide hidden sm:inline-block">
              Ligar Agora
            </span>
          </motion.a>

          {/* Button: WhatsApp 24h */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-green-600 to-teal-700 hover:from-emerald-600 hover:to-teal-800 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-white/30"
            aria-label="Atendimento WhatsApp 24h"
          >
            {/* Blinking Online Green Dot */}
            <div className="relative flex items-center justify-center">
              <span className="absolute w-3 h-3 rounded-full bg-emerald-300 animate-ping opacity-75"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 relative z-10 border border-white"></span>
            </div>

            <MessageCircle className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform" />

            <div className="flex flex-col text-left pr-1">
              <span className="text-[10px] font-bold text-emerald-100 uppercase tracking-wider leading-none">
                Online Agora
              </span>
              <span className="text-xs font-extrabold text-white leading-tight">
                WhatsApp 24h
              </span>
            </div>
          </motion.a>

          {/* Button: Voltar ao Topo (Back To Top) */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 10 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="bg-white/90 backdrop-blur-md hover:bg-white text-aba-blue p-3 rounded-full shadow-xl border border-gray-200 transition-colors flex items-center justify-center mt-1"
                aria-label="Voltar ao topo da página"
                title="Voltar ao topo"
              >
                <ArrowUp className="w-5 h-5 text-aba-orange stroke-[2.5]" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default FloatingActions;
