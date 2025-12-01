import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Donate from './pages/Donate';
import Blog from './pages/Blog';
import Transparency from './pages/Transparency';
import Contact from './pages/Contact';
import DonorArea from './pages/DonorArea';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const WhatsAppButton: React.FC = () => {
  return (
    <a 
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
    </a>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-800">
        <ScrollToTop />
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/projeto" element={<Project />} />
            <Route path="/doar" element={<Donate />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/transparencia" element={<Transparency />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/login" element={<DonorArea />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;