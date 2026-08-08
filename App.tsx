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

import FloatingActions from './components/FloatingActions';

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
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;