import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Donate from './pages/Donate';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail'; // Imported new page
import Transparency from './pages/Transparency';
import Contact from './pages/Contact';
import DonorArea from './pages/DonorArea';
import LocationDetail from './pages/LocationDetail';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/sobre" element={<PageTransition><About /></PageTransition>} />
        <Route path="/projeto" element={<PageTransition><Project /></PageTransition>} />
        <Route path="/doar" element={<PageTransition><Donate /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><BlogPostDetail /></PageTransition>} />
        <Route path="/transparencia" element={<PageTransition><Transparency /></PageTransition>} />
        <Route path="/contato" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/login" element={<PageTransition><DonorArea /></PageTransition>} />
        <Route path="/localidade/:slug" element={<PageTransition><LocationDetail /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const WhatsAppButton: React.FC = () => {
  return (
    <motion.a 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      href={WHATSAPP_URL}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-8 w-8 fill-current" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded shadow-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-medium">
        Fale conosco!
      </span>
    </motion.a>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-800 selection:bg-aba-blue selection:text-white">
        <ScrollToTop />
        <Header />
        
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;