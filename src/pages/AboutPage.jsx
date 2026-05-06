import React from 'react';
import { Link } from 'react-router-dom';
import { Target, ShieldCheck, Heart, Zap, Users, ArrowLeft, CheckCircle, Briefcase } from 'lucide-react';
import Button from '../components/Button';
import TextWithBrand from '../components/TextWithBrand';
import { ABOUT_DATA, WHY_US_BG_IMAGE, HSERVICES1 } from '../data/content';
import { Helmet } from 'react-helmet-async';
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

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

const slideInSide = (isEn, direction) => ({
  hidden: { opacity: 0, x: direction === 'left' ? (isEn ? -50 : 50) : (isEn ? 50 : -50) },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
});

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const getLocalizedPath = (path) => {
    if (!isEn) return path;
    return path === '/' ? '/en' : `/en${path}`;
  };
  
  return (
    <div className="animate-fadeIn pt-20 lg:pt-24" dir={isEn ? 'ltr' : 'rtl'}>
      
      <Helmet>
        <title>{t('nav.about')} | {ABOUT_DATA.hero.title}</title>
        <meta name="description" content={ABOUT_DATA.hero.subtitle} />
        <meta name="keywords" content="من نحن، حماية، أمان، رحلة العميل، رؤية الشركة، خدمات تقنية، شريك الأمان" />
        <meta property="og:title" content={`${t('nav.about')} - ${ABOUT_DATA.hero.title}`} />
        <meta property="og:description" content={ABOUT_DATA.hero.subtitle} />
        <meta property="og:image" content={HSERVICES1} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('nav.about')} - ${ABOUT_DATA.hero.title}`} />
        <meta name="twitter:description" content={ABOUT_DATA.hero.subtitle} />
        <meta name="twitter:image" content={HSERVICES1} />
        <link rel="canonical" href="https://www.offfireonline.com" />
      </Helmet>

      {/* 1. Hero Section */}
      <div className="relative h-[70vh] lg:h-[80vh] flex items-center justify-center bg-dark border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={HSERVICES1}
                alt="Team Meeting" 
                className="w-full h-full object-cover opacity-20 animate-pulse-slow" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-primary-dark/50"></div>
        </div>

        <motion.div 
           variants={staggerContainer}
           initial="hidden"
           animate="visible"
           className="text-center container mx-auto px-4 lg:px-6 z-10 relative"
        >
          <motion.span variants={fadeInUp} className="text-cta font-bold tracking-[0.2em] mb-3 lg:mb-4 block text-sm lg:text-xl uppercase border-b-2 border-cta inline-block pb-1 lg:pb-2">
            {t('nav.about')}
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-2xl md:text-5xl lg:text-6xl font-black text-text-main mb-4 lg:mb-6 leading-tight drop-shadow-2xl max-w-5xl mx-auto">
            {ABOUT_DATA.hero.title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-sm lg:text-2xl text-text-sub max-w-4xl mx-auto font-medium leading-relaxed px-2 text-center">
            <TextWithBrand text={ABOUT_DATA.hero.subtitle} />
          </motion.p>
        </motion.div>
      </div>

      {/* 2. Our Story Section */}
      <section className="py-12 lg:py-28 bg-darker overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6">
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
               className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
            >
                <motion.div variants={slideInSide(isEn, 'left')} className="w-full lg:w-1/2 relative group">
                    <div className="absolute -inset-2 lg:-inset-4 bg-primary/10 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-0"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
                        alt="Our Story" 
                        className="relative rounded-2xl lg:rounded-3xl shadow-2xl border border-white/10 w-full h-[250px] lg:h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                </motion.div>

                <motion.div variants={staggerContainer} className="w-full lg:w-1/2 text-start">
                    <motion.h2 variants={fadeInUp} className="text-xl lg:text-4xl font-bold text-text-main mb-4 lg:mb-6 flex items-center gap-2 lg:gap-3 text-start">
                        {isEn ? 'Our Story: From a Problem to a Vision' : 'قصتنا: من مشكلة إلى رؤية'} <span className="w-8 lg:w-12 h-1 bg-cta rounded-full"></span>
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-text-sub text-sm lg:text-xl leading-relaxed lg:leading-loose mb-6 lg:mb-10 text-start">
                        <TextWithBrand text={ABOUT_DATA.story} />
                    </motion.p>
                    
                    <motion.div variants={staggerContainer} className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
                        <motion.div variants={fadeInUp} className="bg-card p-5 lg:p-6 rounded-xl lg:rounded-2xl border-s-4 border-primary shadow-md hover:translate-y-[-5px] transition-transform duration-300 text-start flex flex-col items-start">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                    <Target size={24} className="lg:w-8 lg:h-8"/>
                                </div>
                                <h3 className="font-bold text-white text-lg lg:text-xl text-start">
                                  {isEn ? 'Our Vision' : 'رؤيتنا'}
                                </h3>
                            </div>
                            <div className="w-full h-[1px] bg-white/10 mb-4 relative">
                                <div className="absolute start-0 top-0 h-full w-1/3 bg-primary rounded-full"></div>
                            </div>
                            <p className="text-text-sub text-sm lg:text-base leading-relaxed text-start w-full">{ABOUT_DATA.vision}</p>
                        </motion.div>
                        
                        <motion.div variants={fadeInUp} className="bg-card p-5 lg:p-6 rounded-xl lg:rounded-2xl border-s-4 border-cta shadow-md hover:translate-y-[-5px] transition-transform duration-300 text-start flex flex-col items-start">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-cta/10 p-2 rounded-lg text-cta">
                                    <ShieldCheck size={24} className="lg:w-8 lg:h-8"/>
                                </div>
                                <h3 className="font-bold text-white text-lg lg:text-xl text-start">
                                  {isEn ? 'Our Mission' : 'رسالتنا'}
                                </h3>
                            </div>
                            <div className="w-full h-[1px] bg-white/10 mb-4 relative">
                                <div className="absolute start-0 top-0 h-full w-1/3 bg-cta rounded-full"></div>
                            </div>
                            <p className="text-text-sub text-sm lg:text-base leading-relaxed text-start w-full">{ABOUT_DATA.mission}</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* 3. Provider Banner */}
      <section className="bg-gradient-to-r from-primary/10 via-[#0B1120] to-cta/10 border-y border-white/10 py-10 lg:py-14 relative z-20 overflow-hidden">
        <motion.div 
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
           className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-start w-full">
            <div className="w-16 h-16 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(239,68,68,0.2)] animate-pulse-slow">
               <Briefcase className="text-[#EF4444] w-8 h-8" />
            </div>
            <div className="text-start">
              <h3 className="text-white font-bold text-2xl lg:text-3xl mb-2 text-start">
                {isEn ? 'Share Our Vision?' : 'هل تشاركنا نفس الرؤية؟'}
              </h3>
              <p className="text-slate-300 text-sm lg:text-lg max-w-2xl leading-relaxed text-start">
                {isEn ? 'We are always looking for consulting offices, contracting companies, and suppliers who share our commitment to quality. Join the largest certified network in the Kingdom and multiply your business.' : 'نبحث دائماً عن مكاتب استشارية، شركات مقاولات، وموردين يشاركونا التزامنا بالجودة. انضم لأكبر شبكة معتمدة في المملكة وضاعف أعمالك.'}
              </p>
            </div>
          </div>
          <Link to={getLocalizedPath('/register-provider')} className="w-full md:w-auto shrink-0">
            <button className="w-full md:w-auto bg-white hover:bg-slate-200 text-[#0B1120] font-bold px-10 py-4 rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.15)] text-lg">
              {isEn ? 'Join as a Success Partner' : 'انضم كشريك نجاح'}
            </button>
          </Link>
        </motion.div>
      </section>

      {/* 4. Core Values */}
      <section className="py-12 lg:py-28 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-xl lg:text-4xl font-bold text-center text-text-main mb-8 lg:mb-16">
              {isEn ? 'Our Core Values' : 'قيمنا الراسخة'}
            </motion.h2>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                {ABOUT_DATA.values.map((val, i) => {
                    const Icon = val.icon;
                    return (
                        <motion.div variants={fadeInUp} key={i} className="bg-card p-4 lg:p-8 rounded-2xl lg:rounded-3xl border border-white/5 hover:border-primary/50 transition-all text-start flex flex-col items-start group">
                            <div className="w-10 h-10 lg:w-14 lg:h-14 bg-dark rounded-full flex items-center justify-center mb-3 lg:mb-6 text-primary shadow-lg group-hover:scale-110 transition-transform">
                                <Icon size={20} className="lg:w-7 lg:h-7"/>
                            </div>
                            <h3 className="font-bold text-white text-sm lg:text-lg mb-1 lg:mb-3 text-start w-full group-hover:text-primary transition-colors">{val.title}</h3>
                            <p className="text-text-sub text-[10px] lg:text-sm leading-tight text-start w-full">{val.desc}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
      </section>

      {/* 5. Customer Journey */}
      <section className="py-12 lg:py-28 bg-darker">
        <div className="container mx-auto px-4 lg:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-8 lg:mb-16">
                <span className="text-cta font-bold tracking-widest text-xs lg:text-sm uppercase">
                  {isEn ? 'Customer Journey' : 'رحلة العميل'}
                </span>
                <h2 className="text-xl lg:text-4xl font-bold text-text-main mt-2">
                  {isEn ? 'How do we manage the safety journey on your behalf?' : 'كيف ندير رحلة الأمان بالنيابة عنك؟'}
                </h2>
            </motion.div>

            {/* Mobile View */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:hidden flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory no-scrollbar">
                {ABOUT_DATA.process.map((step, i) => (
                    <motion.div variants={fadeInUp} key={i} className="min-w-[85vw] bg-card p-6 rounded-2xl border border-white/5 snap-center relative shadow-lg text-start flex flex-col items-start">
                        <div className="absolute top-4 end-4 text-6xl font-black text-white/5 pointer-events-none">{i + 1}</div>
                        <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-lg mb-4">
                            {i + 1}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 text-start w-full">{step.title}</h3>
                        <p className="text-text-sub text-sm leading-relaxed text-start w-full">{step.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
            
            {/* Desktop Timeline */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="hidden lg:block relative max-w-4xl mx-auto">
                <div className="absolute top-0 bottom-0 end-1/2 w-1 bg-white/10 -me-0.5 rounded-full"></div>
                {ABOUT_DATA.process.map((step, i) => {
                    const isEven = i % 2 === 0;
                    return (
                        <motion.div variants={fadeInUp} key={i} className={`flex gap-8 mb-12 relative ${isEven ? 'flex-row-reverse' : ''}`}>
                            <div className="absolute end-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg border-4 border-dark z-10 -me-5 shadow-lg shadow-primary/30">
                                {i + 1}
                            </div>
                            <div className="w-1/2"></div>
                            <div className="w-1/2 px-8">
                                <div className={`bg-card p-6 rounded-2xl border border-white/5 hover:border-primary transition-colors relative group flex flex-col ${isEven ? 'items-end text-end' : 'items-start text-start'}`}>
                                    <h3 className={`text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors w-full ${isEven ? 'text-end' : 'text-start'}`}>{step.title}</h3>
                                    <p className={`text-text-sub text-sm leading-relaxed w-full ${isEven ? 'text-end' : 'text-start'}`}>{step.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
      </section>

      {/* 6. Why Us & Audience */}
      <section className="py-16 lg:py-28 relative bg-dark">
        <div className="absolute inset-0 z-0">
            <img 
                src={WHY_US_BG_IMAGE} 
                alt="Why Us Background" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark/80"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="mb-12 lg:mb-20">
                <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-xl lg:text-4xl font-bold text-center text-text-main mb-6 lg:mb-12">
                  {isEn ? 'Why Are We Your Smart Choice?' : 'لماذا نحن خيارك الذكي؟'}
                </motion.h2>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
                    {ABOUT_DATA.whyUs.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div variants={fadeInUp} key={i} className="flex flex-col lg:flex-row gap-3 lg:gap-4 bg-card/50 backdrop-blur-sm p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-white/5 text-start hover:border-white/20 transition-colors items-center lg:items-start text-center lg:text-start group">
                                <div className="flex-shrink-0 text-cta bg-dark p-2 rounded-full w-fit group-hover:scale-110 transition-transform">
                                    <Icon size={20} className="lg:w-6 lg:h-6" />
                                </div>
                                <div className="w-full text-start">
                                    <h4 className="font-bold text-white text-sm lg:text-lg mb-1 lg:mb-2 text-start">{item.title}</h4>
                                    <p className="text-text-sub text-[10px] lg:text-sm leading-tight text-start">{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            <div>
                <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-xl lg:text-4xl font-bold text-center text-text-main mb-6 lg:mb-12">
                  {isEn ? 'The Premier Safety Partner for All Sectors' : 'شريك الأمان الأول لكافة القطاعات'}
                </motion.h2>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                    {ABOUT_DATA.audience.map((item, i) => (
                        <motion.div variants={fadeInUp} key={i} className="group relative rounded-xl lg:rounded-2xl overflow-hidden h-40 lg:h-64 border border-white/10 shadow-lg text-start flex flex-col items-start">
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/60 to-transparent z-10"></div>
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bottom-0 start-0 w-full p-3 lg:p-6 z-20 text-start">
                                <h4 className="font-bold text-white text-sm lg:text-lg mb-1 lg:mb-2 drop-shadow-md text-start w-full">{item.title}</h4>
                                <p className="text-gray-200 text-xs lg:text-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all lg:translate-y-2 lg:group-hover:translate-y-0 leading-snug font-medium text-start w-full">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-primary/10 to-cta/10 border-t border-white/10 overflow-hidden">
        <motion.div 
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
           className="container mx-auto px-4 lg:px-6 text-center"
        >
            <h2 className="text-2xl md:text-4xl font-black text-text-main mb-4 lg:mb-6">{ABOUT_DATA.cta.title}</h2>
            <p className="text-sm lg:text-xl text-text-sub mb-6 lg:mb-10 max-w-3xl mx-auto text-center">
                {ABOUT_DATA.cta.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-6 justify-center">
                <Link to={getLocalizedPath('/contact')}>
                    <Button 
                    primary 
                    className="w-full sm:w-auto text-base lg:text-lg px-8 py-3 lg:px-10 lg:py-3 shadow-lg shadow-cta/20 hover:scale-105 transition-transform"
                    >
                    {isEn ? 'Start Your Certification Journey Now' : 'ابدأ رحلة الاعتماد الآن'}
                    </Button>
                </Link>

                <a 
                    href="https://wa.me/966530394904"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                >
                    <Button 
                    className="w-full sm:w-auto text-base lg:text-lg px-8 py-3 lg:px-10 lg:py-3 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white transition-all hover:scale-105"
                    >
                    <MessageCircle size={20} />
                    {isEn ? 'Contact via WhatsApp' : 'تواصل عبر واتساب'}
                    </Button>
                </a>
            </div>
        </motion.div>
      </section>

    </div>
  );
};

export default AboutPage;