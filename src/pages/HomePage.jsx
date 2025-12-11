import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Plus, Minus } from 'lucide-react';
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
    }, 4000); // 4 ثواني حسب ملف التصميم
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fadeIn">
      
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-dark">
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[800ms] ease-in-out bg-dark ${index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/40 z-10" />
            <img 
              src={slide.image} 
              alt="" 
              className="w-full h-full object-cover opacity-50" 
              onError={(e) => e.target.style.display = 'none'} 
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 container mx-auto">
              <span className="text-cta font-bold tracking-[0.2em] mb-4 animate-slideUp text-sm md:text-base border-b border-cta pb-1">OFF FIRE ONLINE</span>
              <h1 className="text-4xl md:text-6xl font-black text-text-main mb-6 leading-tight max-w-5xl animate-slideUp delay-100 drop-shadow-2xl">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-text-sub mb-10 max-w-3xl animate-slideUp delay-200 font-light">
                {slide.subtitle}
              </p>
              <div className="animate-slideUp delay-300">
                 <Link to="/contact">
                    <Button primary className="text-lg px-10 py-4 shadow-cta/30 shadow-2xl">
                      {slide.cta}
                    </Button>
                 </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 2. Challenge (Pain Points) */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-4 relative inline-block">
              التحدي: طلب بسيط.. لماذا يتحول لفوضى؟
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cta to-transparent opacity-80"></span>
            </h2>
            <p className="text-text-sub text-lg mt-4 max-w-2xl mx-auto">تبدأ كل منشأة بطلب واضح، لكن الدوامة تبدأ سريعاً.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAIN_POINTS.map((item, idx) => {
              const Icon = item.icon; 
              return (
                <div key={idx} className="bg-card p-8 rounded-xl border border-white/5 hover:border-cta transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl">
                  <div className="text-cta mb-6 bg-dark w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3">{item.title}</h3>
                  <p className="text-text-sub leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Solution (The 5 Pillars) */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold mb-2 block uppercase tracking-wider">الحل الذكي</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-text-main mb-8 leading-tight">حوّل الفوضى إلى نظام ذكي<br/>في أقل من 3 دقائق</h2>
              <ul className="space-y-6 mb-10">
                {FEATURES.map((feat, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-text-main text-lg">{feat.title}</h4>
                      <p className="text-text-sub text-sm">{feat.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button primary>ابدأ رحلتك الآن</Button>
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-cta rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="bg-dark p-6 rounded-2xl border border-white/10 relative">
                 {/* Mock UI Element */}
                 <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                    <div className="w-1/3 h-4 bg-white/10 rounded"></div>
                    <div className="w-8 h-8 bg-cta rounded-full"></div>
                 </div>
                 <div className="space-y-4">
                    {[1,2,3].map(n => (
                        <div key={n} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                            <div className="w-10 h-10 bg-primary/20 rounded flex items-center justify-center text-primary font-bold">{n}</div>
                            <div className="flex-1 space-y-2">
                                <div className="w-3/4 h-3 bg-white/20 rounded"></div>
                                <div className="w-1/2 h-2 bg-white/10 rounded"></div>
                            </div>
                        </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Summary */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-4">منظومة أمان متكاملة</h2>
            <p className="text-text-sub text-lg">تحت سقف واحد.. قارن، تأكد، ونفذ.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_SUMMARY.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="bg-card p-6 rounded-2xl border border-white/5 hover:border-primary transition-all group">
                  <div className="mb-6 overflow-hidden rounded-xl h-40">
                     <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform group-hover:scale-110 opacity-80 group-hover:opacity-100" onError={(e) => e.target.style.display = 'none'} />
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-2">{service.title}</h3>
                  <p className="text-text-sub text-sm mb-4">{service.desc}</p>
                  <Link to="/services" className="text-primary text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    تفاصيل أكثر <ArrowLeft size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Target Audience & Why Us */}
      <section className="py-24 bg-darker">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* من نخدم */}
            <div>
                <h3 className="text-2xl font-bold text-text-main mb-8 border-r-4 border-cta pr-4">من نخدم؟</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    {TARGET_AUDIENCE.map((aud, i) => (
                        <div key={i} className="bg-dark p-5 rounded-lg border border-white/5">
                            <h4 className="font-bold text-primary mb-2">{aud.title}</h4>
                            <p className="text-text-sub text-xs">{aud.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* لماذا نحن */}
            <div>
                <h3 className="text-2xl font-bold text-text-main mb-8 border-r-4 border-primary pr-4">لماذا نحن خيارك الذكي؟</h3>
                <div className="space-y-4">
                    {WHY_US.slice(0,4).map((item, i) => (
                        <div key={i} className="flex items-center gap-4 bg-dark p-4 rounded-lg border border-white/5">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{i+1}</div>
                            <div>
                                <h4 className="font-bold text-text-main text-sm">{item.title}</h4>
                                <p className="text-text-sub text-xs">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-main">الأسئلة الشائعة</h2>
          </div>
          <div className="space-y-4">
            {FAQ.map((item, idx) => (
                <div key={idx} className="bg-card rounded-lg border border-white/5 overflow-hidden">
                    <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex justify-between items-center p-5 text-right font-bold text-text-main hover:bg-white/5"
                    >
                        {item.q}
                        {openFaq === idx ? <Minus size={20} className="text-cta"/> : <Plus size={20} className="text-primary"/>}
                    </button>
                    <div className={`transition-all duration-300 ${openFaq === idx ? 'max-h-40 p-5 pt-0' : 'max-h-0 overflow-hidden'}`}>
                        <p className="text-text-sub text-sm leading-relaxed border-t border-white/5 pt-4">{item.a}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-cta/20 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-black text-text-main mb-6">توقف عن البحث في المتاهة.. وابدأ الآن بوضوح</h2>
            <p className="text-xl text-text-sub mb-8">OFF FIRE ONLINE تمنحك القدرة على اتخاذ قرار سريع وآمن.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"><Button primary className="w-full sm:w-auto">اطلب عروض أسعار</Button></Link>
                <Link to="/contact"><Button className="w-full sm:w-auto">تحدث مع مستشارنا</Button></Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;