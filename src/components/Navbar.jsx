import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FireExtinguisher, ChevronLeft } from 'lucide-react';
import { NAV_LINKS } from '../data/content.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-dark/90 backdrop-blur-xl shadow-lg border-white/5 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`text-base font-bold transition-colors relative group ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-200 hover:text-white'
                } ${link.isCta ? 'hidden' : ''}`}
              >
                {link.label}
                <span className={`absolute -bottom-2 right-0 h-1 bg-primary transition-all duration-300 rounded-full ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
             <Link to="/contact" className="bg-cta hover:bg-cta-hover text-white px-6 py-2.5 rounded-xl font-bold transition-transform hover:scale-105 shadow-lg shadow-cta/20 text-base">
                اتصل بنا
             </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 focus:outline-none" 
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={32} />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative z-50">
            <div className="flex flex-col items-end leading-none">
              <span className="text-lg lg:text-2xl font-black font-sans tracking-wide group-hover:text-primary transition-colors">
                OFF FIRE
              </span>
              <span className="text-cta text-[10px] lg:text-xs font-bold tracking-[0.2em] group-hover:text-white transition-colors">
                ONLINE
              </span>
            </div>
            <div className="w-9 h-9 lg:w-11 lg:h-11 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <FireExtinguisher size={22} className="text-white" />
            </div>
          </Link>

        </div>
      </nav>

      {/* === Mobile Menu Overlay === */}
      <div className={`fixed inset-0 z-[60] bg-dark/95 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'}`}>
        
        {/* Header inside Menu */}
        <div className="container mx-auto px-6 py-5 flex justify-between items-center border-b border-white/10">
            <button 
                onClick={() => setIsOpen(false)}
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
                <X size={32} />
            </button>
            <span className="text-gray-400 text-sm font-bold tracking-widest">القائمة</span>
        </div>

        {/* Links Container */}
        <div className="flex-1 flex flex-col justify-center px-8 gap-6 overflow-y-auto">
            {NAV_LINKS.map((link, idx) => (
            <Link
                key={link.id}
                to={link.path}
                onClick={() => setIsOpen(false)}
                // التعديل هنا: غيرنا text-xl لـ text-lg عشان يصغر شوية
                className={`text-lg font-bold py-4 border-b border-white/5 flex justify-between items-center group ${
                    link.isCta ? 'hidden' : ''
                } ${location.pathname === link.path ? 'text-primary' : 'text-white'}`}
                style={{ transitionDelay: `${idx * 50}ms` }}
            >
                {link.label}
                <ChevronLeft size={20} className={`transition-transform group-hover:-translate-x-2 ${location.pathname === link.path ? 'text-primary' : 'text-gray-600'}`}/>
            </Link>
            ))}
            
            <div className="mt-8">
                <Link 
                    to="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-cta text-white text-center py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-cta/20 active:scale-95 transition-transform"
                >
                    اتصل بنا الآن
                </Link>
            </div>
        </div>

        {/* Footer inside Menu */}
        <div className="p-8 text-center text-gray-500 text-xs border-t border-white/5">
            © 2025 OFF FIRE ONLINE
        </div>
      </div>
    </>
  );
};

export default Navbar;