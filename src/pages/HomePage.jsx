import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Plus, Minus, Zap, Briefcase } from 'lucide-react';
import Button from '../components/Button';
import { 
  HERO_SLIDES, PAIN_POINTS, FEATURES, 
  SERVICES_SUMMARY, TARGET_AUDIENCE, WHY_US, FAQ, 
  SECTORS_BG_IMAGE, SOLUTION_IMAGE
} from '../data/content';
import { Helmet } from 'react-helmet-async'; // استدعاء المكتبة
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const HomePage = () => {
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

        const nextScrollPos = nextIndex * totalItemWidth;
        
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
  }, [activeServiceIndex]);

  const handleScroll = () => {
      const scrollContainer = servicesRef.current;
      if (!scrollContainer) return;
      const cardWidth = scrollContainer.children[0]?.offsetWidth || 300;
      const index = Math.round(Math.abs(scrollContainer.scrollLeft) / (cardWidth + 16));
      setActiveServiceIndex(index);
  };

  return (
    <div className="animate-fadeIn">
    <Helmet>
      {/* العنوان الأساسي الذي يظهر في نتائج البحث */}
      <title>OFF FIRE ONLINE | منصة خدمات الأمن والسلامة واشتراطات الدفاع المدني</title>
      
      {/* وصف الصفحة SEO - ركزت هنا على الحلول التي تقدمها */}
      <meta 
          name="description" 
          content="منصتك الرقمية الأولى في السعودية لاستخراج تصاريح الدفاع المدني، تركيب أنظمة مكافحة الحريق، والحصول على شهادات الإنجاز وعقود الصيانة بضغطة زر." 
      />
      
      {/* الكلمات المفتاحية - Keywords */}
      <meta 
          name="keywords" 
          content="الدفاع المدني، رخصة بلدي، سلامة، أنظمة حريق، عقود صيانة، الكود السعودي، شهادة إنجاز، سلامة المنشآت، أوف فاير أونلاين" 
      />

      {/* إعدادات وسائل التواصل (Open Graph) لظهور احترافي عند مشاركة رابط الموقع */}
      <meta property="og:title" content="OFF FIRE ONLINE | اختصر طريقك للأمن والسلامة" />
      <meta property="og:description" content="من طلب عرض السعر حتى الاعتماد.. أنجز متطلبات الأمن والسلامة لمنشأتك في أقل من 3 دقائق." />
      <meta property="og:image" content={SOLUTION_IMAGE} /> {/* صورة التطبيق أو صورة الهيرو */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://offfireonline.com" />

      {/* إعدادات تويتر */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="OFF FIRE ONLINE | الحل الذكي للأمن والسلامة" />
      <meta name="twitter:description" content="منصة موحدة لشركات السلامة المعتمدة، المواصفات، والأسعار في مكان واحد." />
      <meta name="twitter:image" content={SOLUTION_IMAGE} />

      {/* رابط الـ Canonical لتعريف جوجل أن هذا هو الرابط الأصلي */}
        <link rel="canonical" href="https://offfireonline.com" />
  </Helmet>

      {/* 1. Hero Section */}
<section className="relative h-[75vh] lg:h-[95vh] flex items-center justify-center overflow-hidden bg-dark pt-20 lg:pt-0">
  {(() => {
    const slide = HERO_SLIDES[0];

    return (
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/50 to-dark/20 z-10" />
        
        <img 
          src={slide.image} 
          alt="" 
          className="w-full h-full object-cover opacity-100" 
          onError={(e) => e.target.style.display = 'none'} 
        />

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 container mx-auto pt-20 lg:pt-0">
          
          <div className="mb-4 lg:mb-8">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight drop-shadow-2xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
              <span className="text-white">OFF FIRE</span> <span className="text-cta">ONLINE</span>
            </h2>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-text-main mb-4 lg:mb-8 leading-tight max-w-5xl drop-shadow-lg">
            {slide.title}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-text-sub mb-6 lg:mb-12 max-w-3xl font-medium leading-relaxed px-2">
            {slide.subtitle}
          </p>

          <div className="w-full px-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button primary className="w-full sm:w-auto text-lg lg:text-xl px-8 lg:px-12 py-4 shadow-cta/20 shadow-xl rounded-xl font-bold">
                {slide.cta}
              </Button>
            </Link>

            <a 
              href="https://wa.me/966XXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto text-lg lg:text-xl px-8 lg:px-12 py-4 font-bold flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle size={22} />
                تواصل واتساب
              </Button>
            </a>

          </div>
        </div>
      </div>
    );
  })()}
</section>

      {/* 2. Challenge (Pain Points) */}
      <section className="py-12 lg:py-28 bg-dark">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8 lg:mb-20">
            <h2 className="text-2xl md:text-5xl font-extrabold text-text-main mb-3 lg:mb-6 relative inline-block">
              المنصة الأولى في المملكة التي توصلك بشركات الدفاع المدني المعتمدة مباشرة — بدون عمولات
              <span className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-0.5 lg:h-1 bg-gradient-to-r from-transparent via-cta to-transparent opacity-80"></span>
            </h2>
            <p className="text-text-sub text-lg lg:text-xl mt-3 lg:mt-6 max-w-3xl mx-auto"> تظن أن الأمر مجرد عرض سعر، لكن الواقع أصعب مما تتخيل.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
            {PAIN_POINTS.map((item, idx) => {
              const Icon = item.icon; 
              return (
                <div key={idx} className="bg-card p-4 lg:p-10 rounded-xl lg:rounded-2xl border border-white/5 hover:border-cta transition-all group">
                  <div className="text-cta mb-3 lg:mb-8 bg-dark w-12 h-12 lg:w-20 lg:h-20 rounded-lg lg:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg mx-auto lg:mx-0">
                    <Icon size={24} className="lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg lg:text-2xl font-bold text-text-main mb-2 lg:mb-4 text-center lg:text-right">{item.title}</h3>
                  <p className="text-text-sub leading-snug text-sm lg:text-lg text-center lg:text-right opacity-80">{item.desc}</p>
                </div>
              );
            })}
          </div>
            <div className="text-center mb-8 lg:mb-20">
              <p className="text-text-sub text-lg lg:text-xl mt-3 lg:mt-6 max-w-3xl mx-auto"> "اختصر الطريق.. OFF FIRE ONLINE هي منصتك الرقمية؛ من طلب عرض السعر حتى الاعتماد."</p>
          </div>
        </div>
      </section>

      {/* 3. Solution (Update: Use app-hand.jpg) */}
      <section className="py-12 lg:py-28 bg-card/50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-20 items-center">
            
            <div className="order-2 md:order-1">
              <span className="text-primary font-bold mb-2 lg:mb-4 block uppercase tracking-wider text-base lg:text-lg border-l-4 border-primary pl-3">الحل الذكي</span>
              <h2 className="text-3xl md:text-6xl font-extrabold text-text-main mb-6 lg:mb-10 leading-tight">
                اختصر طريقك مع<span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-white">OFF FIRE ONLINE</span>
                <br/>في أقل من 3 دقائق
              </h2>
              <div className="text-center mb-8 lg:mb-20">
                <p className="text-text-sub text-lg lg:text-xl mt-3 lg:mt-6 max-w-3xl mx-auto"> منصة موحدة تتيح لك إنجاز كل متطلبات الأمن والسلامة في مكان واحد: الشركات المعتمدة، المواصفات، الأسعار، التحليل الفني، والشراء المباشر… بضغطة زر.</p>
              </div>
              <ul className="space-y-5 lg:space-y-8 mb-8 lg:mb-12">
                {FEATURES.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 lg:gap-5 group">
                    <div className="bg-dark p-1.5 lg:p-2 rounded-lg border border-white/5 group-hover:border-primary/50 transition-colors mt-1">
                        <CheckCircle className="text-green-500 flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-lg lg:text-xl mb-0.5 lg:mb-2 group-hover:text-primary transition-colors">{feat.title}</h4>
                      <p className="text-text-sub text-sm lg:text-lg">{feat.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button primary className="w-full lg:w-auto text-lg lg:text-xl px-10 py-4 shadow-lg shadow-primary/20 font-bold">ابدأ رحلتك الآن</Button>
              </Link>
            </div>

            {/* استخدام صورة app-hand.jpg هنا */}
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
{/* 🚀 Steps Section - Animated Premium */}
<section className="py-16 lg:py-28 bg-card/40 relative overflow-hidden">
  <div className="container mx-auto px-4 lg:px-6 relative z-10">
    
    {/* Title */}
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12 lg:mb-20"
    >
      <h2 className="text-2xl md:text-5xl font-extrabold text-text-main mb-4 leading-snug">
        من الطلب إلى الرخصة..
        <span className="block text-transparent bg-clip-text bg-gradient-to-l from-primary to-cta">
          3 خطوات واضحة تختصر الطريق
        </span>
      </h2>
      <p className="text-text-sub text-base lg:text-xl max-w-2xl mx-auto">
        رحلة بسيطة وذكية تنقلك من البداية للاعتماد بدون تعقيد
      </p>
    </motion.div>

    <div className="relative">
      
      {/* Mobile line */}
      <div className="absolute right-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/40 to-transparent md:hidden"></div>

      {/* Desktop line */}
      <div className="hidden md:block absolute top-16 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

      {/* Steps */}
      <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-10">
        
        {[
          {
            title: "أرسل طلبك بدون تعقيدات",
            desc: "أجب على أسئلة ذكية مخصصة أو تواصل مباشر بسهولة.",
            icon: <Zap size={26} />
          },
          {
            title: "قارن العروض بوضوح تام",
            desc: "عروض موحدة تساعدك تختار بين السعر والجودة بثقة.",
            icon: <CheckCircle size={26} />
          },
          {
            title: "اعتمد العرض واستلم شهادة الإنجاز",
            desc: "نتابع معك حتى الاعتماد النهائي واستخراج الرخصة.",
            icon: <ArrowLeft size={26} />
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
            
            {/* Icon */}
            <div className="relative z-10 flex-shrink-0 md:mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 border border-primary/30 group-hover:scale-110 transition duration-300 group-hover:shadow-[0_0_20px_rgba(0,200,255,0.4)]">
              <div className="text-primary">
                {step.icon}
              </div>
            </div>

            {/* Card */}
            <div className="bg-card p-5 lg:p-8 rounded-xl lg:rounded-2xl border border-white/5 hover:border-primary transition-all duration-300 w-full group-hover:shadow-xl group-hover:shadow-primary/10">
              <h3 className="text-lg lg:text-2xl font-bold text-text-main mb-2">
                {step.title}
              </h3>
              <p className="text-text-sub text-sm lg:text-lg leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* Number */}
            <div className="absolute -top-3 right-0 md:right-4 text-4xl lg:text-5xl font-black text-white/5">
              {i + 1}
            </div>

          </motion.div>
        ))}

      </div>
    </div>

    {/* CTA */}
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-14 lg:mt-20 text-center"
    >
      <p className="text-text-sub text-base lg:text-xl mb-6">
        ابدأ الآن — واستلم عرضك خلال 24 ساعة
      </p>

      <Link to="/contact">
        <Button primary className="w-full sm:w-auto text-lg lg:text-xl px-10 py-4 shadow-xl shadow-primary/20 font-bold hover:scale-105 transition">
          اطلب عرض سعر مجاني
        </Button>
      </Link>
    </motion.div>

  </div>
</section>


      {/* 4. Services Summary */}
      <section className="py-12 lg:py-28 bg-dark">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8 lg:mb-20">
            <h2 className="text-2xl md:text-5xl font-extrabold text-text-main mb-2 lg:mb-6">خدماتنا</h2>
            <p className="text-text-sub text-lg lg:text-xl">منظومة أمان متكاملة.. حقق معادلة السعر والجودة لكافة اشتراطات الدفاع المدني تحت سقف واحد.</p>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none lg:hidden"></div>

            <div 
                ref={servicesRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-4 lg:gap-8 pb-4 lg:pb-0 snap-x snap-mandatory no-scrollbar scroll-smooth"
            >
                {SERVICES_SUMMARY.map((service, idx) => (
                <div key={service.id} className="bg-card p-5 lg:p-8 rounded-2xl border border-white/5 min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 snap-center hover:border-primary transition-all group">
                    <div className="mb-4 lg:mb-8 overflow-hidden rounded-xl h-48 lg:h-48 shadow-lg relative">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                        <div className="absolute bottom-2 left-2 bg-dark/70 text-white text-xs px-2 py-1 rounded lg:hidden flex items-center gap-1">
                            اسحب للمزيد <ArrowLeft size={12} />
                        </div>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-text-main mb-2 lg:mb-3">{service.title}</h3>
                    <p className="text-text-sub text-base lg:text-lg mb-4 leading-relaxed line-clamp-2 lg:line-clamp-none">{service.desc}</p>
                    <Link to="/services" className="text-primary text-lg lg:text-lg font-bold flex items-center gap-2">
                        تفاصيل أكثر <ArrowLeft size={18} className="lg:w-5 lg:h-5" />
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
                              {/* CTA داخل قسم الخدمات */}
              <div className="mt-10 lg:mt-16 text-center">
                <p className="text-text-sub text-base lg:text-xl mb-5 lg:mb-6">
                  استفسر عن أي خدمة — الاستشارة مجانية
                </p>

                <Link to="/contact">
                  <Button primary className="w-full sm:w-auto text-lg lg:text-xl px-10 py-4 shadow-xl shadow-primary/20 font-bold hover:scale-105 transition">
                    اطلب الخدمة الآن
                  </Button>
                </Link>
              </div>
        </div>
      </section>

      {/* 5. Target Audience & Why Us */}
      <section className="py-16 lg:py-28 relative bg-dark">
        <div className="absolute inset-0 z-0">
            <img 
                src={SECTORS_BG_IMAGE} 
                alt="Sectors Background" 
                className="w-full h-full object-cover"
            />
            {/* التعتيم 85% */}
            <div className="absolute inset-0 bg-dark/85"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            
            <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-text-main mb-6 lg:mb-10 border-r-4 border-cta pr-3 lg:pr-6">من نخدم؟</h3>
                <p className="text-text-sub text-lg lg:text-xl mb-6 lg:mb-10">مهما كان نشاطك نوفر لك حلولاً هندسية معتمدة، ونكون مساعدك الشخصي لتنفيذ الأعمال واجتياز التفتيش دون عوائق.</p>

                <div className="grid grid-cols-2 gap-3 lg:gap-6">
                    {TARGET_AUDIENCE.map((aud, i) => (
                        <div key={i} className="bg-card/50 backdrop-blur-sm p-4 lg:p-8 rounded-xl lg:rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
                            <h4 className="font-bold text-primary text-base lg:text-xl mb-1 lg:mb-3">{aud.title}</h4>
                            <p className="text-text-sub text-xs lg:text-base leading-tight">{aud.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 lg:mt-0">
                <h3 className="text-2xl lg:text-3xl font-bold text-text-main mb-6 lg:mb-10 border-r-4 border-primary pr-3 lg:pr-6">لماذا نحن خيارك الذكي؟</h3>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-6">
                    {WHY_US.slice(0,4).map((item, i) => (
                        <div key={i} className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-6 bg-card/50 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-white/5 text-center lg:text-right hover:border-white/20 transition-colors">
                            <div className="w-10 h-10 lg:w-10 lg:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-base lg:text-lg shrink-0">{i+1}</div>
                            <div>
                                <h4 className="font-bold text-text-main text-base lg:text-xl mb-1">{item.title}</h4>
                                <p className="text-text-sub text-xs lg:text-base leading-tight">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

          </div>
        </div>
      </section>

{/* --- NEW SECTION: Provider Banner --- */}
      <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] border-y border-white/10 py-6 lg:py-8 relative z-20">
        <div className="container mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
               <Briefcase className="text-primary w-7 h-7" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl lg:text-2xl mb-1">هل أنت مقاول، استشاري، مورد , فني؟</h3>
              <p className="text-slate-400 text-sm lg:text-base">انضم لمنصتنا كمزود خدمة معتمد، واستقبل مشاريع جديدة وضاعف أرباحك.</p>
            </div>
          </div>
          <Link to="/register-provider" className="w-full md:w-auto shrink-0">
            <button className="w-full md:w-auto bg-white hover:bg-slate-200 text-[#0B1120] font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              سجل كمزود خدمة الآن
            </button>
          </Link>
        </div>
      </section>
      {/* --- END NEW SECTION --- */}


      {/* 6. FAQ */}
      <section className="py-12 lg:py-28 bg-dark">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-main">الأسئلة الشائعة</h2>
          </div>
          <div className="space-y-3 lg:space-y-6">
            {FAQ.map((item, idx) => (
                <div key={idx} className="bg-card rounded-xl lg:rounded-2xl border border-white/5 overflow-hidden">
                    <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex justify-between items-center p-4 lg:p-6 text-right font-bold text-base lg:text-xl text-text-main hover:bg-white/5 transition-colors"
                    >
                        {item.q}
                        {openFaq === idx ? <Minus size={20} className="text-cta"/> : <Plus size={20} className="text-primary"/>}
                    </button>
                    <div className={`transition-all duration-300 ${openFaq === idx ? 'max-h-48 p-4 lg:p-6 pt-0' : 'max-h-0 overflow-hidden'}`}>
                        <p className="text-text-sub text-base lg:text-lg leading-relaxed border-t border-white/5 pt-3 lg:pt-4">{item.a}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Final */}
      <section className="py-12 lg:py-24 bg-gradient-to-r from-primary/10 to-cta/10 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-2xl md:text-5xl font-black text-text-main mb-4 lg:mb-8">توقف عن البحث.. وابدأ الآن</h2>
            <p className="text-lg lg:text-2xl text-text-sub mb-6 lg:mb-10 max-w-3xl mx-auto">OFF FIRE ONLINE تمنحك القدرة على اتخاذ قرار سريع وآمن.</p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-6 justify-center">
                <Link to="/contact"><Button primary className="w-full sm:w-auto text-lg lg:text-xl px-8 py-3 lg:px-12 lg:py-4 font-bold">اطلب عروض أسعار</Button></Link>
                <Link to="/contact"><Button className="w-full sm:w-auto text-lg lg:text-xl px-8 py-3 lg:px-12 lg:py-4 font-bold">تحدث مع مستشارنا</Button></Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;