import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronLeft, Briefcase } from 'lucide-react';
import { NAV_LINKS } from '../data/content.js';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // 1. الدالة دي بتظبط الرابط حسب اللغة
  const getLocalizedPath = (path) => {
    if (!isEn) return path;
    return path === '/' ? '/en' : `/en${path}`;
  };

  // 2. الدالة دي بتشوف لو الرابط الحالي هو اللي نشط (عشان الخط اللي تحت الكلمة)
  const isActive = (path) => {
    return location.pathname === getLocalizedPath(path);
  };

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
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-dark/95 backdrop-blur-xl shadow-lg border-white/5 py-2' : 'bg-transparent py-4'}`}
        dir={isEn ? 'ltr' : 'rtl'}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* 1. اللوجو */}
          <Link 
            to={getLocalizedPath('/')} 
            className={`flex items-center gap-3 group relative z-50 ${isEn ? 'order-1' : 'order-2'}`}
          >
            <img 
              src={logoImg} 
              alt="Logo" 
              className={`h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105 ${isEn ? 'order-1' : 'order-2'}`}
            />
            <div className={`flex flex-col ${isEn ? 'items-start order-2' : 'items-end order-1'} leading-none`}>
              <span className="text-lg lg:text-2xl font-black font-sans tracking-wide text-white group-hover:text-primary transition-colors">
                OFF FIRE
              </span>
              <span className="text-cta text-[10px] lg:text-xs font-bold tracking-[0.2em]">
                ONLINE
              </span>
            </div>
          </Link>

          {/* 2. المنيو والزراير الديسكتوب */}
          <div className={`hidden lg:flex items-center gap-10 ${isEn ? 'order-2' : 'order-1'}`}>
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  to={getLocalizedPath(link.path)}
                  className={`text-base font-bold transition-colors relative group ${
                    isActive(link.path) ? 'text-primary' : 'text-gray-200 hover:text-white'
                  } ${link.isCta ? 'hidden' : ''}`}
                >
                  {link.label}
                  <span className={`absolute -bottom-2 ${isEn ? 'left-0' : 'right-0'} h-1 bg-primary transition-all duration-300 rounded-full ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <Link to={getLocalizedPath('/contact')} className="bg-cta hover:bg-cta-hover text-white px-6 py-2.5 rounded-xl font-bold transition-transform hover:scale-105 shadow-lg shadow-cta/20 text-base">
                {isEn ? 'Contact Us' : 'اتصل بنا'}
              </Link>
              <Link to={getLocalizedPath('/register-provider')} className="px-5 py-2.5 rounded-xl font-bold border border-white/20 text-white hover:border-[#EF4444] hover:bg-[#EF4444]/10 transition-all flex items-center gap-2 text-base">
                <Briefcase size={18} /> {isEn ? 'Join as Partner' : 'انضم كشريك'}
              </Link>
            </div>
          </div>

          {/* 3. زرار الموبايل */}
          <button 
            className={`lg:hidden text-white p-2 focus:outline-none ${isEn ? 'order-2' : 'order-1'}`}
            onClick={() => setIsOpen(true)}
          >
            <Menu size={32} />
          </button>

        </div>
      </nav>

      {/* مِنيو الموبايل المنبثقة */}
      <div 
        className={`fixed inset-0 z-[60] bg-dark/95 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'}`}
        dir={isEn ? 'ltr' : 'rtl'}
      >
        <div className="container mx-auto px-6 py-5 flex justify-between items-center border-b border-white/10">
            <span className="text-gray-400 text-sm font-bold tracking-widest uppercase">{isEn ? 'Menu' : 'القائمة'}</span>
            <button onClick={() => setIsOpen(false)} className="text-white p-2"><X size={32} /></button>
        </div>

        <div className="flex-1 flex flex-col justify-center px-8 gap-6 overflow-y-auto">
            {NAV_LINKS.map((link) => (
            <Link
                key={link.id}
                to={getLocalizedPath(link.path)}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold py-4 border-b border-white/5 flex justify-between items-center ${isActive(link.path) ? 'text-primary' : 'text-white'} ${link.isCta ? 'hidden' : ''}`}
            >
                <span>{link.label}</span>
                <ChevronLeft size={20} className={isEn ? 'rotate-180' : 'rotate-0'}/>
            </Link>
            ))}
            
            <div className="mt-8 flex flex-col gap-4">
                <Link to={getLocalizedPath('/contact')} onClick={() => setIsOpen(false)} className="block w-full bg-cta text-white text-center py-4 rounded-2xl font-bold text-lg">
                    {isEn ? 'Contact Us Now' : 'اتصل بنا الآن'}
                </Link>
                <Link to={getLocalizedPath('/register-provider')} onClick={() => setIsOpen(false)} className="flex w-full items-center justify-center gap-2 bg-transparent border-2 border-white/10 text-white py-4 rounded-2xl font-bold text-lg">
                    <Briefcase size={20} /> {isEn ? 'Register as Provider' : 'سجل كمزود خدمة'}
                </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;