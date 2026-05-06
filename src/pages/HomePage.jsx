import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Plus, Minus, Zap, Briefcase } from 'lucide-react';
import Button from '../components/Button';
import { 
  HERO_SLIDES, PAIN_POINTS, FEATURES, 
  SERVICES_SUMMARY, TARGET_AUDIENCE, WHY_US, FAQ, 
  SECTORS_BG_IMAGE, SOLUTION_IMAGE
} from '../data/content';
import { Helmet } from 'react-helmet-async';
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  
  const servicesRef = useRef(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const scrollContainer = servicesRef.current;
    if (!scrollContainer) return;

    const scrollStep = () => {
        if (window.innerWidth >= 1024) return; 

        const cardWidth = scrollContainer.children[0]?.offsetWidth || 300;
        const gap = 16; 
        const totalItemWidth = cardWidth + gap;
        
        let nextIndex = activeServiceIndex + 1;
        if (nextIndex >= SERVICES_SUMMARY.length) nextIndex = 0;

        // الحساب هنا بيراعي اتجاه الصفحة (RTL/LTR)
        const nextScrollPos = isEn ? nextIndex * totalItemWidth : -(nextIndex * totalItemWidth);
        
        scrollContainer.scrollTo({
            left: nextScrollPos,
            behavior: 'smooth'
        });
        
        setActiveServiceIndex(nextIndex);
    };

    const interval = setInterval(scrollStep, 3500);
    const stopScroll = () => clearInterval(interval);
    scrollContainer.addEventListener('touchstart', stopScroll);
    scrollContainer.addEventListener('wheel', stopScroll);

    return () => {
        clearInterval(interval);
        if (scrollContainer) {
            scrollContainer.removeEventListener('touchstart', stopScroll);
            scrollContainer.removeEventListener('wheel', stopScroll);
        }
    };
  }, [activeServiceIndex, isEn]);

  const handleScroll = () => {
      const scrollContainer = servicesRef.current;
      if (!scrollContainer) return;
      const cardWidth = scrollContainer.children[0]?.offsetWidth || 300;
      // استخدام Absolute لضمان قيمة موجبة في الـ RTL
      const index = Math.round(Math.abs(scrollContainer.scrollLeft) / (cardWidth + 16));
      setActiveServiceIndex(index);
  };

  return (
    <div className="animate-fadeIn" dir={isEn ? 'ltr' : 'rtl'}>
<Helmet>
    <title>
      {isEn 
        ? 'OFF FIRE ONLINE | Safety Services & Civil Defense Requirements' 
        : 'OFF FIRE ONLINE | منصة خدمات الأمن والسلامة واشتراطات الدفاع المدني'}
    </title>
    
    <meta 
        name="description" 
        content={isEn 
          ? 'Your premier digital platform in Saudi Arabia for Civil Defense permits, fire systems, and maintenance contracts.'
          : 'منصتك الرقمية الأولى في السعودية لاستخراج تصاريح الدفاع المدني، تركيب أنظمة مكافحة الحريق، والحصول على شهادات الإنجاز وعقود الصيانة بضغطة زر.'} 
    />
    
    <meta 
        name="keywords" 
        content={isEn
          ? 'Civil Defense, Balady license, safety, fire systems, maintenance contracts, Saudi Code, Off Fire Online'
          : 'الدفاع المدني، رخصة بلدي، سلامة، أنظمة حريق، عقود صيانة، الكود السعودي، شهادة إنجاز، سلامة المنشآت، أوف فاير أونلاين'} 
    />

    {/* Open Graph - تم تحديث الرابط لـ www */}
    <meta property="og:title" content={isEn ? 'OFF FIRE ONLINE | Shortcut to Safety' : 'OFF FIRE ONLINE | اختصر طريقك للأمن والسلامة'} />
    <meta property="og:description" content={isEn ? 'From quote request to approval.. complete your facility safety requirements in less than 3 minutes.' : 'من طلب عرض السعر حتى الاعتماد.. أنجز متطلبات الأمن والسلامة لمنشأتك في أقل من 3 دقائق.'} />
    <meta property="og:image" content={SOLUTION_IMAGE} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={isEn ? "https://www.offfireonline.com/en" : "https://www.offfireonline.com/"} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={isEn ? 'OFF FIRE ONLINE | The Smart Safety Solution' : 'OFF FIRE ONLINE | الحل الذكي للأمن والسلامة'} />
    <meta name="twitter:description" content={isEn ? 'A unified platform for certified safety companies, specifications, and prices.' : 'منصة موحدة لشركات السلامة المعتمدة، المواصفات، والأسعار في مكان واحد.'} />
    <meta name="twitter:image" content={SOLUTION_IMAGE} />

    {/* 🌍 الروابط الأساسية وربط اللغات (السر الكبير في SEO) */}
    <link rel="canonical" href={isEn ? "https://www.offfireonline.com/en" : "https://www.offfireonline.com/"} />
    <link rel="alternate" hreflang="ar" href="https://www.offfireonline.com/" />
    <link rel="alternate" hreflang="en" href="https://www.offfireonline.com/en" />
    <link rel="alternate" hreflang="x-default" href="https://www.offfireonline.com/" />
</Helmet>

      {/* 1. Hero Section */}
<section className="relative min-h-[85vh] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark pt-24 lg:pt-32 pb-12 lg:pb-20">
  {(() => {
    const slide = HERO_SLIDES[0];

    return (
      <>
        {/* الخلفية: خليناها لوحدها خالص عشان متضغطش على الكلام */}
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 bg-gradient-to-${isEn ? 'r' : 'l'} from-dark via-dark/60 to-dark/20 z-10`} />
          <img 
            src={slide.image} 
            alt="" 
            className="w-full h-full object-cover opacity-80" 
            onError={(e) => e.target.style.display = 'none'} 
          />
        </div>

        {/* المحتوى: دلوقتي هو "حر" وبياخد مكانه الطبيعي تحت الهيدر */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 container mx-auto">
          
          {/* الكلمة الكبيرة: حجمها بقى متناسق مع اتجاه اللغة */}
          <div className="mb-6 lg:mb-10 scale-90 md:scale-100">
            <h2 className="text-5xl lg:text-6xl font-black tracking-tight drop-shadow-2xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
              <span className="text-white text-shadow-lg">OFF FIRE</span> <span className="text-cta text-shadow-lg">ONLINE</span>
            </h2>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-text-main mb-6 lg:mb-8 leading-tight max-w-5xl drop-shadow-lg">
            {slide.title}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-text-sub mb-8 lg:mb-12 max-w-3xl font-medium leading-relaxed px-4" dir="auto">
            {slide.subtitle}
          </p>

          <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button primary className="w-full sm:w-auto text-lg lg:text-xl px-10 lg:px-14 py-4 shadow-cta/20 shadow-xl rounded-xl font-bold">
                {slide.cta}
              </Button>
            </Link>

            <a 
              href="https://wa.me/966530394904" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto text-lg lg:text-xl px-10 lg:px-14 py-4 font-bold flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white shadow-xl">
                <MessageCircle size={22} />
                {isEn ? 'WhatsApp Us' : 'تواصل واتساب'}
              </Button>
            </a>
          </div>
        </div>
      </>
    );
  })()}
</section>

      {/* 2. Challenge (Pain Points) */}
      <section className="py-12 lg:py-28 bg-dark">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8 lg:mb-20">
            <h2 className="text-2xl md:text-5xl font-extrabold text-text-main mb-3 lg:mb-6 relative inline-block text-center">
              {isEn 
                ? 'The #1 platform in KSA connecting you directly with certified Civil Defense companies — zero commissions' 
                : 'المنصة الأولى في المملكة التي توصلك بشركات الدفاع المدني المعتمدة مباشرة — بدون عمولات'}
              <span className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-0.5 lg:h-1 bg-gradient-to-r from-transparent via-cta to-transparent opacity-80"></span>
            </h2>
            <p className="text-text-sub text-lg lg:text-xl mt-3 lg:mt-6 max-w-3xl mx-auto text-center">
              {isEn ? 'You think it is just a quote, but the reality is more complex than you imagine.' : 'تظن أن الأمر مجرد عرض سعر، لكن الواقع أصعب مما تتخيل.'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
            {PAIN_POINTS.map((item, idx) => {
              const Icon = item.icon; 
              return (
                <div key={idx} className="bg-card p-4 lg:p-10 rounded-xl lg:rounded-2xl border border-white/5 hover:border-cta transition-all group flex flex-col items-start text-start">
                  <div className="text-cta mb-3 lg:mb-8 bg-dark w-12 h-12 lg:w-20 lg:h-20 rounded-lg lg:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg ltr:mx-0 rtl:mx-0">
                    <Icon size={24} className="lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg lg:text-2xl font-bold text-text-main mb-2 lg:mb-4 text-start">{item.title}</h3>
                  <p className="text-text-sub leading-snug text-sm lg:text-lg text-start opacity-80">{item.desc}</p>
                </div>
              );
            })}
          </div>
            <div className="text-center mb-8 lg:mb-20 mt-10">
              <p className="text-text-sub text-lg lg:text-xl max-w-3xl mx-auto text-center" dir="auto">
                {isEn 
                  ? '"Take the shortcut.. OFF FIRE ONLINE is your digital platform; from quote request to approval."' 
                  : '"اختصر الطريق.. OFF FIRE ONLINE هي منصتك الرقمية؛ من طلب عرض السعر حتى الاعتماد."'}
              </p>
          </div>
        </div>
      </section>

      {/* 3. Solution */}
      <section className="py-12 lg:py-28 bg-card/50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-20 items-center">
            
            <div className="order-2 md:order-1 ltr:text-left rtl:text-right">
              <span className={`text-primary font-bold mb-2 lg:mb-4 block uppercase tracking-wider text-base lg:text-lg ${isEn ? 'border-l-4 pl-3' : 'border-r-4 pr-3'} border-primary`}>
                {isEn ? 'Smart Solution' : 'الحل الذكي'}
              </span>
              <h2 className="text-3xl md:text-6xl font-extrabold text-text-main mb-6 lg:mb-10 leading-tight">
                {isEn ? 'Shortcut your way with ' : 'اختصر طريقك مع '}
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-white">OFF FIRE ONLINE</span>
                <br/>
                {isEn ? 'in less than 3 minutes' : 'في أقل من 3 دقائق'}
              </h2>
              <div className="text-start mb-8 lg:mb-12">
                <p className="text-text-sub text-lg lg:text-xl leading-relaxed">
                  {isEn 
                    ? 'A unified platform that allows you to complete all safety requirements in one place: certified companies, specifications, prices, technical analysis, and direct purchase… at the click of a button.' 
                    : 'منصة موحدة تتيح لك إنجاز كل متطلبات الأمن والسلامة في مكان واحد: الشركات المعتمدة، المواصفات، الأسعار، التحليل الفني، والشراء المباشر… بضغطة زر.'}
                </p>
              </div>
              <ul className="space-y-5 lg:space-y-8 mb-8 lg:mb-12">
                {FEATURES.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 lg:gap-5 group">
                    <div className="bg-dark p-1.5 lg:p-2 rounded-lg border border-white/5 group-hover:border-primary/50 transition-colors mt-1">
                        <CheckCircle className="text-green-500 flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div className="text-start">
                      <h4 className="font-bold text-text-main text-lg lg:text-xl mb-0.5 lg:mb-2 group-hover:text-primary transition-colors">{feat.title}</h4>
                      <p className="text-text-sub text-sm lg:text-lg">{feat.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button primary className="w-full lg:w-auto text-lg lg:text-xl px-10 py-4 shadow-lg shadow-primary/20 font-bold">
                  {isEn ? 'Start Your Journey Now' : 'ابدأ رحلة الآن'}
                </Button>
              </Link>
            </div>

            <div className="relative group hidden md:block order-1 md:order-2">
                 <div className="absolute -inset-1 bg-gradient-to-br from-primary via-transparent to-cta rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse-slow"></div>
                 <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl animate-float">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10"></div>
                    <img 
                      src={SOLUTION_IMAGE} 
                      alt="Smart Solution App" 
                      className="w-full h-full object-cover"
                    />
                 </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Steps Section */}
      <section className="py-16 lg:py-28 bg-card/40 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-20"
          >
            <h2 className="text-2xl md:text-5xl font-extrabold text-text-main mb-4 leading-snug">
              {isEn ? 'From Request to License..' : 'من الطلب إلى الرخصة..'}
              <span className="block text-transparent bg-clip-text bg-gradient-to-l from-primary to-cta">
                {isEn ? '3 Clear Steps that Shorten the Road' : '3 خطوات واضحة تختصر الطريق'}
              </span>
            </h2>
            <p className="text-text-sub text-base lg:text-xl max-w-2xl mx-auto">
              {isEn ? 'A simple and smart journey that takes you from the start to approval without complication' : 'رحلة بسيطة وذكية تنقلك من البداية للاعتماد بدون تعقيد'}
            </p>
          </motion.div>

          <div className="relative">
            <div className={`absolute ${isEn ? 'left-4' : 'right-4'} top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/40 to-transparent md:hidden`}></div>
            <div className="hidden md:block absolute top-16 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-10">
              {[
                {
                  title: isEn ? "Submit your request without complications" : "أرسل طلبك بدون تعقيدات",
                  desc: isEn ? "Answer tailored smart questions or contact us directly with ease." : "أجب على أسئلة ذكية مخصصة أو تواصل مباشر بسهولة.",
                  icon: <Zap size={26} />
                },
                {
                  title: isEn ? "Compare offers with full clarity" : "قارن العروض بوضوح تام",
                  desc: isEn ? "Unified offers that help you choose between price and quality with confidence." : "عروض موحدة تساعدك تختار بين السعر والجودة بثقة.",
                  icon: <CheckCircle size={26} />
                },
                {
                  title: isEn ? "Approve the offer and receive completion certificate" : "اعتمد العرض واستلم شهادة الإنجاز",
                  desc: isEn ? "We follow up with you until final approval and license issuance." : "نتابع معك حتى الاعتماد النهائي واستخراج الرخصة.",
                  icon: isEn ? <ArrowLeft size={26} className="rotate-180" /> : <ArrowLeft size={26} />
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative group flex md:block items-start gap-4 md:text-center"
                >
                  <div className="relative z-10 flex-shrink-0 md:mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 border border-primary/30 group-hover:scale-110 transition duration-300 group-hover:shadow-[0_0_20px_rgba(0,200,255,0.4)]">
                    <div className="text-primary">
                      {step.icon}
                    </div>
                  </div>

                  <div className="bg-card p-5 lg:p-8 rounded-xl lg:rounded-2xl border border-white/5 hover:border-primary transition-all duration-300 w-full group-hover:shadow-xl group-hover:shadow-primary/10 text-start md:text-center">
                    <h3 className="text-lg lg:text-2xl font-bold text-text-main mb-2 text-start md:text-center">
                      {step.title}
                    </h3>
                    <p className="text-text-sub text-sm lg:text-lg leading-relaxed text-start md:text-center">
                      {step.desc}
                    </p>
                  </div>

                  <div className={`absolute -top-3 ${isEn ? 'left-0 md:left-4' : 'right-0 md:right-4'} text-4xl lg:text-5xl font-black text-white/5`}>
                    {i + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-14 lg:mt-20 text-center"
          >
            <p className="text-text-sub text-base lg:text-xl mb-6 text-center">
              {isEn ? 'Start now — and receive your offer within 24 hours' : 'ابدأ الآن — واستلم عرضك خلال 24 ساعة'}
            </p>

            <Link to="/contact">
              <Button primary className="w-full sm:w-auto text-lg lg:text-xl px-10 py-4 shadow-xl shadow-primary/20 font-bold hover:scale-105 transition">
                {isEn ? 'Request a Free Quote' : 'اطلب عرض سعر مجاني'}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 5. Services Summary */}
      <section className="py-12 lg:py-28 bg-dark">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8 lg:mb-20">
            <h2 className="text-2xl md:text-5xl font-extrabold text-text-main mb-2 lg:mb-6 text-center">
              {isEn ? 'Our Services' : 'خدماتنا'}
            </h2>
            <p className="text-text-sub text-lg lg:text-xl text-center">
              {isEn ? 'Complete safety ecosystem.. achieve the equation of price and quality for all Civil Defense requirements under one roof.' : 'منظومة أمان متكاملة.. حقق معادلة السعر والجودة لكافة اشتراطات الدفاع المدني تحت سقف واحد.'}
            </p>
          </div>
          
          <div className="relative">
            <div className={`absolute top-0 ${isEn ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l'} w-16 h-full from-dark to-transparent z-10 pointer-events-none lg:hidden`}></div>

            <div 
                ref={servicesRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-4 lg:gap-8 pb-4 lg:pb-0 snap-x snap-mandatory no-scrollbar scroll-smooth"
            >
                {SERVICES_SUMMARY.map((service, idx) => (
                <div key={service.id} className="bg-card p-5 lg:p-8 rounded-2xl border border-white/5 min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 snap-center hover:border-primary transition-all group flex flex-col text-start">
                    <div className="mb-4 lg:mb-8 overflow-hidden rounded-xl h-48 lg:h-48 shadow-lg relative">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                        <div className={`absolute bottom-2 ${isEn ? 'right-2 flex-row-reverse' : 'left-2 flex-row'} bg-dark/70 text-white text-xs px-2 py-1 rounded lg:hidden flex items-center gap-1`}>
                            {isEn ? 'Swipe for more' : 'اسحب للمزيد'} <ArrowLeft size={12} className="ltr:rotate-180" />
                        </div>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-text-main mb-2 lg:mb-3 text-start">{service.title}</h3>
                    <p className="text-text-sub text-base lg:text-lg mb-4 leading-relaxed line-clamp-2 lg:line-clamp-none text-start">{service.desc}</p>
                    <Link to="/services" className="text-primary text-lg lg:text-lg font-bold flex items-center gap-2 mt-auto">
                        {isEn ? 'More Details' : 'تفاصيل أكثر'} <ArrowLeft size={18} className="ltr:rotate-180" />
                    </Link>
                </div>
                ))}
            </div>

            <div className="flex justify-center gap-2 mt-4 lg:hidden">
                {SERVICES_SUMMARY.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`h-2 rounded-full transition-all duration-300 ${idx === activeServiceIndex ? 'w-6 bg-cta' : 'w-2 bg-white/20'}`}
                    ></div>
                ))}
            </div>
          </div>
          
          <div className="mt-10 lg:mt-16 text-center">
            <p className="text-text-sub text-base lg:text-xl mb-5 lg:mb-6 text-center">
              {isEn ? 'Inquire about any service — Consultation is free' : 'استفسر عن أي خدمة — الاستشارة مجانية'}
            </p>

            <Link to="/contact">
              <Button primary className="w-full sm:w-auto text-lg lg:text-xl px-10 py-4 shadow-xl shadow-primary/20 font-bold hover:scale-105 transition">
                {isEn ? 'Order Service Now' : 'اطلب الخدمة الآن'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Target Audience & Why Us */}
      <section className="py-16 lg:py-28 relative bg-dark">
        <div className="absolute inset-0 z-0">
            <img src={SECTORS_BG_IMAGE} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-dark/85"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            
            <div className="text-start">
                <h3 className={`text-2xl lg:text-3xl font-bold text-text-main mb-6 lg:mb-10 ${isEn ? 'border-l-4 pl-3 lg:pl-6' : 'border-r-4 pr-3 lg:pr-6'} border-cta text-start`}>
                  {isEn ? 'Who We Serve?' : 'من نخدم؟'}
                </h3>
                <p className="text-text-sub text-lg lg:text-xl mb-6 lg:mb-10 text-start">
                  {isEn ? 'Whatever your activity, we provide certified engineering solutions, and act as your personal assistant for execution and inspection.' : 'مهما كان نشاطك نوفر لك حلولاً هندسية معتمدة، ونكون مساعدك الشخصي لتنفيذ الأعمال واجتياز التفتيش دون عوائق.'}
                </p>

                <div className="grid grid-cols-2 gap-3 lg:gap-6">
                    {TARGET_AUDIENCE.map((aud, i) => (
                        <div key={i} className="bg-card/50 backdrop-blur-sm p-4 lg:p-8 rounded-xl lg:rounded-2xl border border-white/5 hover:border-white/20 transition-colors text-start">
                            <h4 className="font-bold text-primary text-base lg:text-xl mb-1 lg:mb-3 text-start">{aud.title}</h4>
                            <p className="text-text-sub text-xs lg:text-base leading-tight text-start">{aud.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 lg:mt-0 text-start">
                <h3 className={`text-2xl lg:text-3xl font-bold text-text-main mb-6 lg:mb-10 ${isEn ? 'border-l-4 pl-3 lg:pl-6' : 'border-r-4 pr-3 lg:pr-6'} border-primary text-start`}>
                  {isEn ? 'Why Are We Your Smart Choice?' : 'لماذا نحن خيارك الذكي؟'}
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-6">
                    {WHY_US.slice(0,4).map((item, i) => (
                        <div key={i} className="flex flex-col lg:flex-row items-start gap-2 lg:gap-6 bg-card/50 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-white/5 text-start hover:border-white/20 transition-colors">
                            <div className="w-10 h-10 lg:w-10 lg:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-base lg:text-lg shrink-0">{i+1}</div>
                            <div className="text-start">
                                <h4 className="font-bold text-text-main text-base lg:text-xl mb-1 text-start">{item.title}</h4>
                                <p className="text-text-sub text-xs lg:text-base leading-tight text-start">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Provider Banner */}
      <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] border-y border-white/10 py-6 lg:py-8 relative z-20">
        <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-start w-full">
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
               <Briefcase className="text-primary w-7 h-7" />
            </div>
            <div className="text-start">
              <h3 className="text-white font-bold text-xl lg:text-2xl mb-1 text-start">
                {isEn ? 'Are you a contractor, consultant, supplier, or technician?' : 'هل أنت مقاول، استشاري، مورد , فني؟'}
              </h3>
              <p className="text-slate-400 text-sm lg:text-base text-start">
                {isEn ? 'Join our platform as a certified provider, receive new projects and multiply your profits.' : 'انضم لمنصتنا كمزود خدمة معتمد، واستقبل مشاريع جديدة وضاعف أرباحك.'}
              </p>
            </div>
          </div>
          <Link to="/register-provider" className="w-full md:w-auto shrink-0">
            <button className="w-full md:w-auto bg-white hover:bg-slate-200 text-[#0B1120] font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              {isEn ? 'Register as Provider Now' : 'سجل كمزود خدمة الآن'}
            </button>
          </Link>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-12 lg:py-28 bg-dark">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-main text-center">
              {isEn ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
            </h2>
          </div>
          <div className="space-y-3 lg:space-y-6">
            {FAQ.map((item, idx) => (
                <div key={idx} className="bg-card rounded-xl lg:rounded-2xl border border-white/5 overflow-hidden text-start">
                    <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex justify-between items-center p-4 lg:p-6 text-start font-bold text-base lg:text-xl text-text-main hover:bg-white/5 transition-colors"
                    >
                        <span className="text-start">{item.q}</span>
                        {openFaq === idx ? <Minus size={20} className="text-cta shrink-0"/> : <Plus size={20} className="text-primary shrink-0"/>}
                    </button>
                    <div className={`transition-all duration-300 ${openFaq === idx ? 'max-h-48 p-4 lg:p-6 pt-0' : 'max-h-0 overflow-hidden'}`}>
                        <p className="text-text-sub text-base lg:text-lg leading-relaxed border-t border-white/5 pt-3 lg:pt-4 text-start">{item.a}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA Final */}
<section className="py-12 lg:py-24 bg-gradient-to-r from-primary/10 to-cta/10 border-t border-white/10 relative overflow-hidden">
  {/* إضافة لمسة جمالية خلفية خفيفة */}
  <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[120px]"></div>
  </div>

  <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
      <h2 className="text-2xl md:text-5xl font-black text-text-main mb-4 lg:mb-8 text-center">
        {isEn ? 'Stop searching.. and start now' : 'توقف عن البحث.. وابدأ الآن'}
      </h2>
      <p className="text-lg lg:text-2xl text-text-sub mb-6 lg:mb-12 max-w-3xl mx-auto text-center" dir="auto">
        {isEn ? 'OFF FIRE ONLINE gives you the power to make a quick and safe decision.' : 'OFF FIRE ONLINE تمنحك القدرة على اتخاذ قرار سريع وآمن.'}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
          {/* الزرار الأول: للمستعد فوراً - يذهب لنموذج الطلب */}
          <Link to="/contact" className="w-full sm:w-auto">
            <Button primary className="w-full sm:w-auto text-lg lg:text-xl px-10 lg:px-14 py-4 shadow-xl shadow-primary/20 font-bold hover:scale-105 transition-transform">
              {isEn ? 'Request a Free Quote' : 'اطلب عرض سعر مجاني'}
            </Button>
          </Link>

          {/* الزرار الثاني: للمستفسر - يذهب للواتساب مباشرة */}
          <a 
            href="https://wa.me/966530394904" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="w-full sm:w-auto text-lg lg:text-xl px-10 lg:px-14 py-4 font-bold flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all">
              <MessageCircle size={24} className="text-green-500" />
              {isEn ? 'Talk to a Consultant' : 'تحدث مع مستشارنا الآن'}
            </Button>
          </a>
      </div>

      {/* إضافة جملة طمأنة صغيرة تحت الزراير */}
      <p className="mt-6 text-gray-500 text-sm">
        {isEn ? 'No commitments required. Expert advice is just a click away.' : 'لا يوجد أي التزامات. نصيحة الخبراء على بعد نقرة واحدة.'}
      </p>
  </div>
</section>
    </div>
  );
};

export default HomePage;