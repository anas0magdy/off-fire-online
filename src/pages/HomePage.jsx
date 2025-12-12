import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fadeIn">
      
      {/* 1. Hero Section (تم تحديث النص ليكون مودرن) */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-dark">
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
              
              {/* --- النص المحدث (OFF FIRE ONLINE) --- */}
              <div className="mb-8 animate-slideUp">
                <span className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-300 to-white drop-shadow-lg">
                  OFF FIRE ONLINE
                </span>
                <div className="h-1 w-24 bg-cta mx-auto mt-2 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-text-main mb-8 leading-tight max-w-6xl animate-slideUp delay-100 drop-shadow-2xl">
                {slide.title}
              </h1>
              <p className="text-xl md:text-3xl text-text-sub mb-12 max-w-4xl animate-slideUp delay-200 font-medium leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="animate-slideUp delay-300">
                 <Link to="/contact">
                    <Button primary className="text-xl px-12 py-5 shadow-cta/30 shadow-2xl rounded-2xl border-2 border-transparent hover:border-cta/50 hover:bg-transparent hover:text-cta transition-all">
                      {slide.cta}
                    </Button>
                 </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* باقي الأقسام كما هي دون تغيير... */}
      {/* 2. Challenge (Pain Points) */}
      <section className="py-28 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-main mb-6 relative inline-block">
              التحدي: طلب بسيط.. لماذا يتحول لفوضى؟
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cta to-transparent opacity-80"></span>
            </h2>
            <p className="text-text-sub text-xl mt-6 max-w-3xl mx-auto">تبدأ كل منشأة بطلب واضح، لكن الدوامة تبدأ سريعاً.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PAIN_POINTS.map((item, idx) => {
              const Icon = item.icon; 
              return (
                <div key={idx} className="bg-card p-10 rounded-2xl border border-white/5 hover:border-cta transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl">
                  <div className="text-cta mb-8 bg-dark w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-text-main mb-4">{item.title}</h3>
                  <p className="text-text-sub leading-relaxed text-lg">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Solution */}
      <section className="py-28 bg-card/50 relative overflow-hidden">
        {/* خلفية جمالية متحركة */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cta/10 rounded-full blur-[100px] animate-pulse-slow delay-200"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            
            {/* المحتوى النصي */}
            <div className="order-2 md:order-1">
              <span className="text-primary font-bold mb-4 block uppercase tracking-wider text-lg border-l-4 border-primary pl-3">الحل الذكي</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-text-main mb-10 leading-tight">
                حوّل الفوضى إلى <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-white">نظام ذكي</span>
                <br/>في أقل من 3 دقائق
              </h2>
              <ul className="space-y-8 mb-12">
                {FEATURES.map((feat, i) => (
                  <li key={i} className="flex items-start gap-5 group">
                    <div className="bg-dark p-2 rounded-lg border border-white/5 group-hover:border-primary/50 transition-colors">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main text-xl mb-2 group-hover:text-primary transition-colors">{feat.title}</h4>
                      <p className="text-text-sub text-lg">{feat.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button primary className="text-xl px-10 py-4 shadow-lg shadow-primary/20">ابدأ رحلتك الآن</Button>
              </Link>
            </div>

            {/* العنصر البصري المطور (Image + Animation) */}
            <div className="relative group hidden md:block order-1 md:order-2">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary via-transparent to-cta rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse-slow"></div>
              
              <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl animate-float">
                 <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10"></div>
                 
                 <img 
                    src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop" 
                    alt="Smart Safety Solution" 
                    className="w-full h-full object-cover transition-transform duration-[20s] ease-linear transform scale-110 group-hover:scale-100"
                 />

                 <div className="absolute bottom-10 left-10 right-10 bg-dark/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl z-20 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-cta rounded-full flex items-center justify-center text-white shadow-lg shadow-cta/30">
                            <Zap size={28} fill="currentColor" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-xl">تحليل فوري بالذكاء الاصطناعي</h4>
                            <p className="text-gray-400 text-sm mt-1">نظامنا يختار لك العرض الأنسب تلقائياً</p>
                        </div>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Services Summary */}
      <section className="py-28 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-main mb-6">منظومة أمان متكاملة</h2>
            <p className="text-text-sub text-xl">تحت سقف واحد.. قارن، تأكد، ونفذ.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_SUMMARY.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="bg-card p-8 rounded-3xl border border-white/5 hover:border-primary transition-all group hover:bg-card/80">
                  <div className="mb-8 overflow-hidden rounded-2xl h-48 shadow-lg">
                     <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" onError={(e) => e.target.style.display = 'none'} />
                  </div>
                  <h3 className="text-2xl font-bold text-text-main mb-3">{service.title}</h3>
                  <p className="text-text-sub text-lg mb-6 leading-relaxed">{service.desc}</p>
                  <Link to="/services" className="text-primary text-lg font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    تفاصيل أكثر <ArrowLeft size={20} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Target Audience & Why Us */}
      <section className="py-28 bg-darker">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* من نخدم */}
            <div>
                <h3 className="text-3xl font-bold text-text-main mb-10 border-r-4 border-cta pr-6">من نخدم؟</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                    {TARGET_AUDIENCE.map((aud, i) => (
                        <div key={i} className="bg-dark p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                            <h4 className="font-bold text-primary text-xl mb-3">{aud.title}</h4>
                            <p className="text-text-sub text-base">{aud.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* لماذا نحن */}
            <div>
                <h3 className="text-3xl font-bold text-text-main mb-10 border-r-4 border-primary pr-6">لماذا نحن خيارك الذكي؟</h3>
                <div className="space-y-6">
                    {WHY_US.slice(0,4).map((item, i) => (
                        <div key={i} className="flex items-center gap-6 bg-dark p-6 rounded-2xl border border-white/5 hover:translate-x-2 transition-transform">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">{i+1}</div>
                            <div>
                                <h4 className="font-bold text-text-main text-xl mb-2">{item.title}</h4>
                                <p className="text-text-sub text-base">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-28 bg-dark">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-main">الأسئلة الشائعة</h2>
          </div>
          <div className="space-y-6">
            {FAQ.map((item, idx) => (
                <div key={idx} className="bg-card rounded-2xl border border-white/5 overflow-hidden">
                    <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex justify-between items-center p-6 text-right font-bold text-xl text-text-main hover:bg-white/5 transition-colors"
                    >
                        {item.q}
                        {openFaq === idx ? <Minus size={24} className="text-cta"/> : <Plus size={24} className="text-primary"/>}
                    </button>
                    <div className={`transition-all duration-300 ${openFaq === idx ? 'max-h-48 p-6 pt-0' : 'max-h-0 overflow-hidden'}`}>
                        <p className="text-text-sub text-lg leading-relaxed border-t border-white/5 pt-4">{item.a}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Final */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-cta/10 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-text-main mb-8">توقف عن البحث في المتاهة.. وابدأ الآن بوضوح</h2>
            <p className="text-2xl text-text-sub mb-10 max-w-3xl mx-auto">OFF FIRE ONLINE تمنحك القدرة على اتخاذ قرار سريع وآمن.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact"><Button primary className="w-full sm:w-auto text-xl px-12 py-4">اطلب عروض أسعار</Button></Link>
                <Link to="/contact"><Button className="w-full sm:w-auto text-xl px-12 py-4">تحدث مع مستشارنا</Button></Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;