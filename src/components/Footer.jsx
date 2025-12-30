import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../data/content.js';
import { 
  Mail, Phone, MapPin, ChevronLeft, 
  Twitter, Linkedin, Instagram, Facebook 
} from 'lucide-react';
// استدعاء اللوجو الشفاف
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-darker border-t border-white/5 pt-20 pb-10 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              {/* اللوجو */}
              <img 
                src={logoImg} 
                alt="Logo" 
                className="h-16 w-auto object-contain" 
              />
              {/* اسم الموقع رجع هنا كمان */}
              <div className="text-2xl font-black font-oswald text-white flex flex-col leading-none">
                <span>OFF FIRE</span>
                <span className="text-primary text-sm tracking-[0.4em] font-bold">ONLINE</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md text-lg">
              منصتك الرقمية الأولى لخدمات الأمن والسلامة في المملكة. نربطك بأفضل الشركات المعتمدة لضمان أمان منشأتك.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b-2 border-primary inline-block pb-2">روابط سريعة</h4>
            <ul className="space-y-4">
              {NAV_LINKS.filter(l => !l.isCta).map(link => (
                <li key={link.id}>
                  <Link to={link.path} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                    <ChevronLeft size={16} className="text-primary"/> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-b-2 border-primary inline-block pb-2">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-gray-400">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-primary"><Mail size={18} /></div> 
                info@offfireonline.com
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-primary"><Phone size={18} /></div> 
                +966 50 000 0000
              </li>
              <li className="flex items-center gap-4 text-gray-400">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-primary"><MapPin size={18} /></div> 
                الرياض، المملكة العربية السعودية
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">جميع الحقوق محفوظة © 2025 OFF FIRE ONLINE</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-gray-400 hover:bg-[#1DA1F2] hover:text-white transition-all"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all"><Linkedin size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-gray-400 hover:bg-[#E1306C] hover:text-white transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;