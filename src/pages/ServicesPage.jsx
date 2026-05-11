import React, { useState } from 'react';
import { CheckCircle, Info, Lightbulb, Plus, Minus, Briefcase, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import TextWithBrand from '../components/TextWithBrand';
import { SERVICES_PAGE_CONTENT } from '../data/content';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MessageCircle } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

// --- إعدادات الأنيميشن (Animation Variants) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInSide = (isEn, idx) => ({
  hidden: { opacity: 0, x: idx % 2 === 0 ? (isEn ? -50 : 50) : (isEn ? 50 : -50) },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
});

const ServicesPage = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const getLocalizedPath = (path) => {
    if (!isEn) return path;
    return path === '/' ? '/en' : `/en${path}`;
  };
  
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="animate-fadeIn pt-20 lg:pt-24 overflow-x-clip" dir={isEn ? 'ltr' : 'rtl'}>
      <Helmet>
        <title>
          {isEn 
            ? 'Our Services | Safety Solutions & Civil Defense Approvals' 
            : 'خدماتنا | حلول متكاملة للأمن والسلامة واعتمادات الدفاع المدني'}
        </title>
        
        <meta 
            name="description" 
            content={isEn 
              ? 'Explore our services: Civil Defense licenses, fire system design, maintenance contracts, and safety equipment supply.'
              : 'استكشف خدماتنا: استخراج رخص الدفاع المدني، تصميم وتركيب أنظمة مكافحة الحريق، عقود الصيانة السنوية المعتمدة، وتوريد أدوات السلامة بأفضل المواصفات.'} 
        />
        
        <meta 
            name="keywords" 
            content={isEn
              ? 'fire maintenance, fire sprinklers, fire extinguishers, civil defense license, safety plans, certified safety company'
              : 'عقد صيانة حريق، تركيب رشاشات حريق، توريد طفايات حريق، ترخيص الدفاع المدني، مخططات سلامة، شركة سلامة معتمدة، فحص أنظمة إنذار'} 
        />

        {/* Open Graph */}
        <meta property="og:title" content={isEn ? 'Off Fire Online Services | Your Safety Ecosystem' : 'خدمات OFF FIRE ONLINE | منظومتك المتكاملة للأمان'} />
        <meta property="og:description" content={isEn ? 'From design to approval.. we provide everything your facility needs.' : 'من التصميم والتركيب إلى الصيانة والاعتماد.. نوفر لك كل ما تحتاجه منشأتك لاجتياز اشتراطات السلامة.'} />
        <meta property="og:image" content={SERVICES_PAGE_CONTENT.services[0]?.image} /> 
        <meta property="og:type" content="website" />
        
        {/* التعديل: قراءة المسار الفعلي */}
        <meta property="og:url" content={`https://www.offfireonline.com${window.location.pathname}`} />

        {/* Multilingual SEO */}
        
        {/* التعديل الأهم: Canonical بيقرا من المتصفح مباشرة */}
        <link rel="canonical" href={`https://www.offfireonline.com${window.location.pathname}`} />
        
        <link rel="alternate" hrefLang="ar" href="https://www.offfireonline.com/services" />
        <link rel="alternate" hrefLang="en" href="https://www.offfireonline.com/en/services" />
        <link rel="alternate" hrefLang="x-default" href="https://www.offfireonline.com/services" />
      </Helmet>

      {/* 1. Hero Section */}
      <div className="bg-dark py-16 lg:py-20 text-center px-4 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 opacity-50 blur-3xl"></div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 container mx-auto"
        >
            <motion.h1 variants={fadeInUp} className="text-2xl md:text-4xl font-black text-text-main mb-4 lg:mb-6 leading-tight max-w-4xl mx-auto text-center">
              {SERVICES_PAGE_CONTENT.hero.title}
            </motion.h1>
            <motion.div variants={fadeInUp} className="text-text-sub max-w-3xl mx-auto text-base md:text-xl leading-relaxed mb-8 lg:mb-10 text-center">
               <TextWithBrand text={SERVICES_PAGE_CONTENT.hero.subtitle} />
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={getLocalizedPath('/contact')}>
                    <Button primary className="w-full sm:w-auto text-lg lg:text-xl px-8 lg:px-12 py-4 shadow-cta/20 shadow-xl rounded-xl font-bold hover:scale-105 transition-transform">
                    {SERVICES_PAGE_CONTENT.hero.cta1}
                    </Button>
                </Link>
                <a 
                    href="https://wa.me/966530394904" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    >
                    <Button className="w-full sm:w-auto text-lg lg:text-xl px-8 lg:px-12 py-4 font-bold flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white transition-all">
                        <MessageCircle size={22} />
                        {isEn ? 'WhatsApp Us' : 'تواصل واتساب'}
                    </Button>
                </a>
            </motion.div>
        </motion.div>
      </div>

      {/* 2. Main Services List */}
      <section className="py-12 lg:py-20 bg-darker">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-16 lg:space-y-24">
            {SERVICES_PAGE_CONTENT.services.map((service, idx) => (
                <motion.div 
                   key={service.id}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, margin: "-100px" }}
                   variants={staggerContainer}
                   className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  
                  <motion.div variants={slideInSide(isEn, idx)} className="w-full lg:w-5/12 relative lg:sticky lg:top-28 z-10">
                     <div className="bg-card rounded-2xl lg:rounded-3xl border border-white/5 p-2 lg:p-3 shadow-2xl relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-dark/60 to-transparent z-10 rounded-xl lg:rounded-2xl pointer-events-none"></div>
                        <img 
                            src={service.image} 
                            className="w-full h-[200px] md:h-[350px] lg:h-[450px] object-cover rounded-xl lg:rounded-2xl transition-transform duration-700 group-hover:scale-105"
                            alt={service.title}
                            onError={(e) => e.target.style.display = 'none'} 
                        />
                        <div className={`absolute bottom-3 ${isEn ? 'left-3' : 'right-3'} z-20 lg:hidden bg-dark/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg`}>
                            <h3 className="text-sm font-bold text-white">{service.title}</h3>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="w-full lg:w-7/12 relative z-20 ltr:text-left rtl:text-right">
                    <div className="hidden lg:flex items-center gap-3 mb-4 ltr:flex-row rtl:flex-row">
                        <span className="text-6xl font-black text-white/5 select-none">{`0${service.id}`}</span>
                        <div className="ltr:text-left rtl:text-right">
                            <span className="text-primary font-bold text-sm tracking-wider uppercase">{service.subtitle}</span>
                            <h3 className="text-3xl font-bold text-text-main">{service.title}</h3>
                        </div>
                    </div>
                    
                    <div className="lg:hidden mb-4 ltr:text-left rtl:text-right">
                        <span className="text-primary font-bold text-[10px] tracking-wider uppercase block mb-1">{service.subtitle}</span>
                        <h3 className="text-xl font-bold text-text-main leading-tight">{service.title}</h3>
                    </div>

                    <p className="text-text-sub mb-6 lg:mb-8 text-sm lg:text-lg leading-relaxed ltr:text-left rtl:text-right">{service.desc}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-6 lg:mb-8">
                        {service.subItems.map((item, i) => (
                            <motion.div variants={fadeInUp} key={i} className="bg-card p-4 lg:p-5 rounded-xl lg:rounded-2xl border border-white/5 hover:border-primary/30 transition-colors flex flex-col items-start">
                                <h4 className="text-white font-bold mb-1 lg:mb-2 flex items-center gap-2 text-sm lg:text-base ltr:text-left rtl:text-right w-full">
                                    <CheckCircle size={16} className="text-green-500 flex-shrink-0"/> {item.title}
                                </h4>
                                <p className="text-text-sub text-xs lg:text-sm leading-snug opacity-80 ltr:text-left rtl:text-right">{item.details}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div variants={fadeInUp} className="p-4 lg:p-6 bg-cta/5 border-s-4 border-cta rounded-e-lg lg:rounded-e-xl mb-6 lg:mb-8 backdrop-blur-sm relative overflow-hidden text-start">
                        <div className={`absolute top-0 ${isEn ? 'right-0' : 'left-0'} p-4 opacity-10`}><Lightbulb size={60} /></div>
                        <span className="font-bold text-white block mb-1 lg:mb-2 text-sm lg:text-lg relative z-10 flex items-center gap-2">
                            <Lightbulb size={18} className="text-cta"/> {isEn ? 'Platform Role:' : 'دور المنصة:'}
                        </span>
                        <p className="text-xs lg:text-base text-text-sub leading-relaxed relative z-10">{service.role}</p>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Link to={getLocalizedPath('/contact')} className="inline-block w-full sm:w-auto">
                            <Button primary className="w-full sm:w-auto text-base lg:text-lg py-3 hover:scale-105 transition-transform">
                              {isEn ? 'Order Service Now' : 'اطلب الخدمة الآن'}
                            </Button>
                        </Link>
                    </motion.div>                  
                  </motion.div>
                  
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Provider Banner */}
      <section className="bg-gradient-to-r from-[#0B1120] via-[#111827] to-[#0B1120] border-y border-white/5 py-10 lg:py-12 relative z-20 shadow-2xl overflow-hidden">
        <motion.div 
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
           className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-start w-full">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#EF4444] to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/30 animate-pulse-slow">
               <Briefcase className="text-white w-7 h-7" />
            </div>
            <div className="ltr:text-left rtl:text-right">
              <h3 className="text-white font-bold text-xl lg:text-2xl mb-1">
                {isEn ? 'Do you provide any of these services?' : 'هل تنفذ أياً من هذه الخدمات؟'}
              </h3>
              <p className="text-slate-400 text-sm lg:text-base max-w-xl">
                {isEn 
                  ? 'Register your company as a certified partner and receive project requests directly from customers.' 
                  : 'سجل منشأتك كشريك معتمد في منصتنا، واستقبل طلبات المشاريع وعروض الأسعار مباشرة من العملاء.'}
              </p>
            </div>
          </div>
          <Link to={getLocalizedPath('/register-provider')} className="w-full md:w-auto shrink-0">
            <button className="w-full md:w-auto bg-transparent border-2 border-[#EF4444] text-[#EF4444] hover:bg-[#EF4444] hover:text-white font-bold px-8 py-3 rounded-xl transition-all hover:scale-105">
              {isEn ? 'Register as Success Partner' : 'سجل كشريك نجاح'}
            </button>
          </Link>
        </motion.div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-12 lg:py-20 bg-dark border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-8 lg:mb-16">
                <h2 className="text-xl lg:text-4xl font-bold text-text-main mb-3 lg:mb-4">
                  {isEn ? 'Why Choose Our Platform?' : 'لماذا تختار منصتنا؟'}
                </h2>
                <div className="h-1 w-16 lg:w-20 bg-primary mx-auto rounded-full"></div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                {SERVICES_PAGE_CONTENT.usp.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <motion.div variants={fadeInUp} key={i} className="bg-card p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-white/5 hover:-translate-y-2 transition-transform duration-300 text-start flex flex-col items-start h-full">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-dark rounded-xl flex items-center justify-center text-primary mb-3 lg:mb-4 shadow-lg flex-shrink-0">
                                <Icon size={20} className="lg:w-6 lg:h-6" />
                            </div>
                            <h3 className="text-xs lg:text-xl font-bold text-white mb-1 lg:mb-2 w-full text-start">{item.title}</h3>
                            <p className="text-text-sub text-[10px] lg:text-sm leading-tight lg:leading-relaxed text-start">{item.desc}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
      </section>

      {/* 5. How it Works (Timeline) */}
      <section className="py-12 lg:py-20 bg-darker relative overflow-hidden">
        <div className={`absolute ${isEn ? 'left-0' : 'right-0'} top-0 w-1/3 h-full bg-gradient-to-${isEn ? 'r' : 'l'} from-white/5 to-transparent pointer-events-none`}></div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-8 lg:mb-16 text-center lg:text-start">
                <span className="text-cta font-bold tracking-widest text-xs lg:text-sm uppercase">
                  {isEn ? 'Order Journey' : 'رحلة الطلب'}
                </span>
                <h2 className="text-xl lg:text-4xl font-bold text-text-main mt-2">
                  {isEn ? 'How does our platform work?' : 'كيف تعمل منصتنا؟'}
                </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative">
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0"></div>
                
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-8">
                    {SERVICES_PAGE_CONTENT.steps.map((step, i) => (
                        <motion.div variants={fadeInUp} key={i} className={`relative z-10 bg-dark p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-white/10 hover:border-primary transition-colors text-start group ${i === 4 ? 'col-span-2 lg:col-span-1 w-2/3 mx-auto lg:w-auto' : ''}`}>
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-lg mb-3 lg:mb-4 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                                {i + 1}
                            </div>
                            <h3 className="text-xs lg:text-lg font-bold text-white mb-1 lg:mb-2 text-start">{step.title}</h3>
                            <p className="text-text-sub text-[10px] lg:text-xs leading-tight text-start">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
      </section>

      {/* 6. Services FAQ */}
      <section className="py-12 lg:py-20 bg-dark">
        <div className="container mx-auto px-4 lg:px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-8 lg:mb-12">
            <h2 className="text-xl lg:text-3xl font-bold text-text-main text-center">
              {isEn ? 'Service FAQs' : 'الأسئلة الشائعة حول الخدمات'}
            </h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-3 lg:space-y-4">
            {SERVICES_PAGE_CONTENT.faq.map((item, idx) => (
                <motion.div variants={fadeInUp} key={idx} className="bg-card rounded-xl lg:rounded-2xl border border-white/5 overflow-hidden text-start">
                    <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex justify-between items-center p-4 lg:p-5 text-start font-bold text-sm lg:text-lg text-text-main hover:bg-white/5 transition-colors"
                    >
                        <span className="text-start">{item.q}</span>
                        {openFaq === idx ? <Minus size={18} className="text-cta shrink-0"/> : <Plus size={18} className="text-primary shrink-0"/>}
                    </button>
                    <div className={`transition-all duration-300 ${openFaq === idx ? 'max-h-40 p-4 lg:p-5 pt-0' : 'max-h-0 overflow-hidden'}`}>
                        <p className="text-text-sub text-xs lg:text-base leading-relaxed border-t border-white/5 pt-3 lg:pt-4 text-start">{item.a}</p>
                    </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-primary/10 to-cta/10 border-t border-white/10 overflow-hidden">
        <motion.div 
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
           className="container mx-auto px-4 lg:px-6 text-center relative z-10"
        >
            <h2 className="text-xl lg:text-3xl font-black text-text-main mb-4 lg:mb-6 text-center">{SERVICES_PAGE_CONTENT.cta.title}</h2>
            <p className="text-sm lg:text-xl text-text-sub mb-6 lg:mb-10 max-w-3xl mx-auto px-2 text-center">
                {SERVICES_PAGE_CONTENT.cta.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-6 justify-center">
                <Link to={getLocalizedPath('/contact')}>
                  <Button primary className="w-full sm:w-auto text-sm lg:text-lg px-8 py-3 shadow-lg shadow-cta/20 hover:scale-105 transition-transform">
                    {isEn ? 'Request Quote Now' : 'اطلب الخدمة الآن'}
                  </Button>
                </Link>
            </div>
        </motion.div>
      </section>

    </div>
  );
};

export default ServicesPage;