import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Plus, Minus, Zap } from 'lucide-react';
import Button from '../components/Button';
import { 
  HERO_SLIDES, PAIN_POINTS, FEATURES, 
  SERVICES_SUMMARY, TARGET_AUDIENCE, WHY_US, FAQ 
} from '../data/content';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  
  // Refs & State for Services Auto-Scroll
  const servicesRef = useRef(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  // Hero Slider Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Services Auto-Scroll Logic (Mobile Only)
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
      
      {/* 1. Hero Section - تقليل الارتفاع وتكبير الخط للموبايل */}
      <section className="relative h-[75vh] lg:h-[95vh] flex items-center justify-center overflow-hidden bg-dark">
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[800ms] ease-in-out bg-dark ${index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40 z-10" />
            <img 
              src={slide.image} 
              alt="" 
              className="w-full h-full object-cover opacity-50" 
              onError={(e) => e.target.style.display = 'none'} 
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 container mx-auto">
              
              {/* اللوجو: تكبير الخط */}
              <div className="mb-4 lg:mb-8 animate-slideUp">
                <h2 className="text-5xl lg:text-7xl font-black tracking-tight drop-shadow-2xl" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  <span className="text-white">OFF FIRE</span> <span className="text-cta">ONLINE</span>
                </h2>
              </div>
              
              {/* العنوان الرئيسي: تكبير الخط */}
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-text-main mb-4 lg:mb-8 leading-tight max-w-5xl animate-slideUp delay-100 drop-shadow-lg">
                {slide.title}
              </h1>
              {/* الوصف: تكبير الخط */}
              <p className="text-lg md:text-xl lg:text-2xl text-text-sub mb-6 lg:mb-12 max-w-3xl animate-slideUp delay-200 font-medium leading-relaxed px-2">
                {slide.subtitle}
              </p>
              {/* الزر: تكبير الخط والبادينج */}
              <div className="animate-slideUp delay-300 w-full px-4 flex justify-center">
                 <Link to="/contact" className="w-full sm:w-auto">
                    <Button primary className="text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-4 shadow-cta/20 shadow-xl rounded-xl w-full sm:w-auto font-bold">
                      {slide.cta}
                    </Button>
                 </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 2. Challenge (Pain Points) - تكبير الخطوط */}
      <section className="py-12 lg:py-28 bg-dark">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8 lg:mb-20">
            {/* عنوان السكشن: تكبير */}
            <h2 className="text-2xl md:text-5xl font-extrabold text-text-main mb-3 lg:mb-6 relative inline-block">
              التحدي: طلب بسيط.. لماذا يتحول لفوضى؟
              <span className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-0.5 lg:h-1 bg-gradient-to-r from-transparent via-cta to-transparent opacity-80"></span>
            </h2>
            <p className="text-text-sub text-lg lg:text-xl mt-3 lg:mt-6 max-w-3xl mx-auto">تبدأ كل منشأة بطلب واضح، لكن الدوامة تبدأ سريعاً.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
            {PAIN_POINTS.map((item, idx) => {
              const Icon = item.icon; 
              return (
                <div key={idx} className="bg-card p-4 lg:p-10 rounded-xl lg:rounded-2xl border border-white/5 hover:border-cta transition-all group">
                  <div className="text-cta mb-3 lg:mb-8 bg-dark w-12 h-12 lg:w-20 lg:h-20 rounded-lg lg:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg mx-auto lg:mx-0">
                    <Icon size={24} className="lg:w-10 lg:h-10" />
                  </div>
                  {/* تكبير عناوين الكروت */}
                  <h3 className="text-lg lg:text-2xl font-bold text-text-main mb-2 lg:mb-4 text-center lg:text-right">{item.title}</h3>
                  <p className="text-text-sub leading-snug text-sm lg:text-lg text-center lg:text-right opacity-80">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Solution - تكبير الخطوط */}
      <section className="py-12 lg:py-28 bg-card/50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-20 items-center">
            
            <div className="order-2 md:order-1">
              <span className="text-primary font-bold mb-2 lg:mb-4 block uppercase tracking-wider text-base lg:text-lg border-l-4 border-primary pl-3">الحل الذكي</span>
              <h2 className="text-3xl md:text-6xl font-extrabold text-text-main mb-6 lg:mb-10 leading-tight">
                حوّل الفوضى إلى <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-white">نظام ذكي</span>
                <br/>في أقل من 3 دقائق
              </h2>
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

            <div className="relative group hidden md:block order-1 md:order-2">
                 <div className="absolute -inset-1 bg-gradient-to-br from-primary via-transparent to-cta rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse-slow"></div>
                 <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl animate-float">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10"></div>
                    <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop" alt="Smart Safety Solution" className="w-full h-full object-cover"/>
                 </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Services Summary - Auto Horizontal Scroll */}
      <section className="py-12 lg:py-28 bg-dark">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8 lg:mb-20">
            {/* تكبير العنوان */}
            <h2 className="text-2xl md:text-5xl font-extrabold text-text-main mb-2 lg:mb-6">منظومة أمان متكاملة</h2>
            <p className="text-text-sub text-lg lg:text-xl">تحت سقف واحد.. قارن، تأكد، ونفذ.</p>
          </div>
          
          <div className="relative">
            {/* Visual Hint Overlay (Left Side Fade) - Shows only on mobile */}
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none lg:hidden"></div>

            {/* Scroll Container */}
            <div 
                ref={servicesRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-4 lg:gap-8 pb-4 lg:pb-0 snap-x snap-mandatory no-scrollbar scroll-smooth"
            >
                {SERVICES_SUMMARY.map((service, idx) => (
                <div key={service.id} className="bg-card p-5 lg:p-8 rounded-2xl border border-white/5 min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 snap-center hover:border-primary transition-all group">
                    <div className="mb-4 lg:mb-8 overflow-hidden rounded-xl h-48 lg:h-48 shadow-lg relative">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                        {/* Mobile 'More' Hint inside image */}
                        <div className="absolute bottom-2 left-2 bg-dark/70 text-white text-xs px-2 py-1 rounded lg:hidden flex items-center gap-1">
                            اسحب للمزيد <ArrowLeft size={12} />
                        </div>
                    </div>
                    {/* تكبير الخطوط داخل الكروت */}
                    <h3 className="text-xl lg:text-2xl font-bold text-text-main mb-2 lg:mb-3">{service.title}</h3>
                    <p className="text-text-sub text-base lg:text-lg mb-4 leading-relaxed line-clamp-2 lg:line-clamp-none">{service.desc}</p>
                    <Link to="/services" className="text-primary text-lg lg:text-lg font-bold flex items-center gap-2">
                        تفاصيل أكثر <ArrowLeft size={18} className="lg:w-5 lg:h-5" />
                    </Link>
                </div>
                ))}
            </div>

            {/* Active Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
                {SERVICES_SUMMARY.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`h-2 rounded-full transition-all duration-300 ${idx === activeServiceIndex ? 'w-6 bg-cta' : 'w-2 bg-white/20'}`}
                    ></div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Target Audience & Why Us - تكبير الخطوط */}
      <section className="py-12 lg:py-28 bg-darker">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            
            <div>
                {/* تكبير العناوين الفرعية */}
                <h3 className="text-2xl lg:text-3xl font-bold text-text-main mb-6 lg:mb-10 border-r-4 border-cta pr-3 lg:pr-6">من نخدم؟</h3>
                <div className="grid grid-cols-2 gap-3 lg:gap-6">
                    {TARGET_AUDIENCE.map((aud, i) => (
                        <div key={i} className="bg-dark p-4 lg:p-8 rounded-xl lg:rounded-2xl border border-white/5">
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
                        <div key={i} className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-6 bg-dark p-4 lg:p-6 rounded-xl border border-white/5 text-center lg:text-right">
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
            <h2 className="text-3xl md:text-5xl font-black text-text-main mb-4 lg:mb-8">توقف عن البحث.. وابدأ الآن</h2>
            <p className="text-lg lg:text-2xl text-text-sub mb-6 lg:mb-10 max-w-3xl mx-auto">OFF FIRE ONLINE تمنحك القدرة على اتخاذ قرار سريع وآمن.</p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-6 justify-center">
                <Link to="/contact"><Button primary className="w-full sm:w-auto text-xl lg:text-xl px-12 py-4 lg:px-12 lg:py-4 font-bold">اطلب عروض أسعار</Button></Link>
                <Link to="/contact"><Button className="w-full sm:w-auto text-xl lg:text-xl px-12 py-4 lg:px-12 lg:py-4 font-bold">تحدث مع مستشارنا</Button></Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;