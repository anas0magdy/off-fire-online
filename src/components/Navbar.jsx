import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FireExtinguisher } from 'lucide-react';
import { NAV_LINKS } from '../data/content';

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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* القائمة (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`text-sm lg:text-base font-medium transition-colors relative group ${
                location.pathname === link.path ? 'text-primary' : 'text-gray-300 hover:text-white'
              } ${link.isCta ? 'hidden' : ''}`}
            >
              {link.label}
              <span className={`absolute -bottom-2 right-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
           <Link to="/contact" className="bg-primary hover:bg-red-600 text-white px-6 py-2 rounded-lg font-bold transition-transform hover:scale-105 shadow-lg shadow-primary/20">
              اتصل بنا
           </Link>
        </div>

        {/* زر الموبايل */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* اللوجو */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="text-2xl lg:text-3xl font-black tracking-tight font-oswald flex flex-col items-end leading-none">
            <span className="group-hover:text-primary transition-colors">OFF FIRE</span>
            <span className="text-primary text-sm tracking-[0.3em] group-hover:text-white transition-colors">ONLINE</span>
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/50 group-hover:scale-105 transition-transform">
            <FireExtinguisher size={24} className="text-white" />
          </div>
        </Link>

      </div>

      {/* قائمة الموبايل */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-dark border-t border-white/10 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] py-6' : 'max-h-0'}`}>
        <div className="flex flex-col gap-2 px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`block text-right text-lg py-3 px-4 rounded-lg hover:bg-white/5 transition-colors ${
                link.isCta ? 'text-primary font-bold bg-white/5' : 'text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;