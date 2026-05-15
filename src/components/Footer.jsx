import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../data/content.js';
import { 
  Mail, Phone, MapPin, ChevronLeft, 
  Twitter, Linkedin, Instagram, Facebook 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logoImg from '../assets/logo.png';

const Footer = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  // الدالة اللي بتحافظ على مسار اللغة الإنجليزية
  const getLocalizedPath = (path) => {
    if (!isEn) return path;
    return path === '/' ? '/en' : `/en${path}`;
  };

  return (
    <footer className="bg-darker border-t border-white/5 pt-20 pb-10 mt-auto" dir={isEn ? 'ltr' : 'rtl'}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 text-start">
            <div className="flex items-center gap-4 mb-6 ltr:flex-row rtl:flex-row">
              <img 
                src={logoImg} 
                alt="Logo" 
                className="h-16 w-auto object-contain" 
              />
              <div className="text-2xl font-black font-oswald text-white flex flex-col leading-none ltr:text-left rtl:text-right">
                <span>OFF FIRE</span>
                <span className="text-primary text-sm tracking-[0.4em] font-bold">ONLINE</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md text-lg text-start">
              {isEn 
                ? 'Your premier digital platform for safety and security services in the Kingdom. We connect you with top certified companies to ensure your facility safety.' 
                : 'منصتك الرقمية الأولى لخدمات الأمن والسلامة في المملكة. نربطك بأفضل الشركات المعتمدة لضمان أمان منشأتك.'}
            </p>
          </div>

          <div className="text-start">
            <h4 className="text-white font-bold text-lg mb-6 border-b-2 border-primary inline-block pb-2">
              {isEn ? 'Quick Links' : 'روابط سريعة'}
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.filter(l => !l.isCta).map(link => (
                <li key={link.id}>
                  <Link to={getLocalizedPath(link.path)} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 text-start">
                    <ChevronLeft size={16} className={`text-primary transition-transform ${isEn ? 'rotate-180' : 'rotate-0'}`}/> 
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-start">
            <h4 className="text-white font-bold text-lg mb-6 border-b-2 border-primary inline-block pb-2">
              {isEn ? 'Contact Us' : 'تواصل معنا'}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-gray-400 text-start ltr:flex-row rtl:flex-row">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-primary shrink-0"><Mail size={18} /></div> 
                <span className="text-sm md:text-base">info@offfireonline.com</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-start ltr:flex-row rtl:flex-row">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-primary shrink-0">
                  <Phone size={18} />
                </div> 
                <bdi className="text-sm md:text-base">+966 53 039 4904</bdi>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-start ltr:flex-row rtl:flex-row">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-primary shrink-0"><MapPin size={18} /></div> 
                <span className="text-sm md:text-base">{isEn ? 'Kingdom of Saudi Arabia' : 'المملكة العربية السعودية'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* التعديل هنا: ضفنا md:px-24 lg:px-32 عشان نضم العناصر لجوه في الديسكتوب بعيد عن الأطراف */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:px-24 lg:px-32">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-gray-500 text-sm">
              {isEn ? 'All Rights Reserved © 2026 OFF FIRE ONLINE' : 'جميع الحقوق محفوظة © 2026 OFF FIRE ONLINE'}
            </p>
            <div className="flex gap-4 text-xs md:text-sm text-gray-500">
              <Link to={getLocalizedPath('/terms')} className="hover:text-primary transition-colors">{isEn ? 'Terms & Conditions' : 'الشروط والأحكام'}</Link>
              <span className="text-gray-600">|</span>
              <Link to={getLocalizedPath('/privacy')} className="hover:text-primary transition-colors">{isEn ? 'Privacy Policy' : 'سياسة الخصوصية'}</Link>
            </div>
          </div>
          
          <div className="flex gap-4 relative z-10">
            <a href="https://x.com/OffFireOnline" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-gray-400 hover:bg-[#1DA1F2] hover:text-white transition-all"><Twitter size={18} /></a>
            <a href="https://www.linkedin.com/company/off-fire-online/" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all"><Linkedin size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-gray-400 hover:bg-[#E1306C] hover:text-white transition-all"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;