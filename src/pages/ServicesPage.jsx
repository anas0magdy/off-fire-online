import React, { useState } from 'react';
import { CheckCircle, Info, Lightbulb, Plus, Minus } from 'lucide-react';
import Button from '../components/Button';
import TextWithBrand from '../components/TextWithBrand';
import { SERVICES_PAGE_CONTENT } from '../data/content';

const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="animate-fadeIn pt-20 lg:pt-24">
      
      {/* 1. Hero Section */}
      <div className="bg-dark py-16 lg:py-20 text-center px-4 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 opacity-50 blur-3xl"></div>
        <div className="relative z-10 container mx-auto">
            <h1 className="text-2xl md:text-5xl font-black text-text-main mb-4 lg:mb-6 leading-tight max-w-4xl mx-auto">
              {SERVICES_PAGE_CONTENT.hero.title}
            </h1>
            <p className="text-text-sub max-w-3xl mx-auto text-base md:text-xl leading-relaxed mb-8 lg:mb-10">
               <TextWithBrand text={SERVICES_PAGE_CONTENT.hero.subtitle} />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button primary className="text-base lg:text-lg px-8 py-3">{SERVICES_PAGE_CONTENT.hero.cta1}</Button>
                <Button className="text-base lg:text-lg px-8 py-3 bg-white/5 hover:bg-white/10 border-white/10">{SERVICES_PAGE_CONTENT.hero.cta2}</Button>
            </div>
        </div>
      </div>

      {/* 2. Main Services List */}
      <section className="py-12 lg:py-20 bg-darker">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-16 lg:space-y-24">
            {SERVICES_PAGE_CONTENT.services.map((service, idx) => (
                <div key={service.id} className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Card - Mobile: Static, Desktop: Sticky */}
                  <div className="w-full lg:w-5/12 relative lg:sticky lg:top-28 z-10">
                     <div className="bg-card rounded-2xl lg:rounded-3xl border border-white/5 p-2 lg:p-3 shadow-2xl relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-dark/60 to-transparent z-10 rounded-xl lg:rounded-2xl pointer-events-none"></div>
                        <img 
                            src={service.image} 
                            className="w-full h-[200px] md:h-[350px] lg:h-[450px] object-cover rounded-xl lg:rounded-2xl transition-transform duration-700 group-hover:scale-105"
                            alt={service.title}
                            onError={(e) => e.target.style.display = 'none'} 
                        />
                        {/* Mobile Title Overlay */}
                        <div className="absolute bottom-3 right-3 z-20 lg:hidden bg-dark/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg">
                            <h3 className="text-sm font-bold text-white">{service.title}</h3>
                        </div>
                     </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-7/12 relative z-20">
                    <div className="hidden lg:flex items-center gap-3 mb-4">
                        <span className="text-6xl font-black text-white/5 select-none">{`0${service.id}`}</span>
                        <div>
                            <span className="text-primary font-bold text-sm tracking-wider uppercase">{service.subtitle}</span>
                            <h3 className="text-3xl font-bold text-text-main">{service.title}</h3>
                        </div>
                    </div>
                    
                    {/* Mobile Subtitle */}
                    <div className="lg:hidden mb-4">
                        <span className="text-primary font-bold text-[10px] tracking-wider uppercase block mb-1">{service.subtitle}</span>
                        <h3 className="text-xl font-bold text-text-main leading-tight">{service.title}</h3>
                    </div>

                    <p className="text-text-sub mb-6 lg:mb-8 text-sm lg:text-lg leading-relaxed">{service.desc}</p>
                    
                    {/* Sub Items Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-6 lg:mb-8">
                        {service.subItems.map((item, i) => (
                            <div key={i} className="bg-card p-4 lg:p-5 rounded-xl lg:rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                                <h4 className="text-white font-bold mb-1 lg:mb-2 flex items-center gap-2 text-sm lg:text-base">
                                    <CheckCircle size={16} className="text-green-500 flex-shrink-0"/> {item.title}
                                </h4>
                                <p className="text-text-sub text-xs lg:text-sm leading-snug opacity-80">{item.details}</p>
                            </div>
                        ))}
                    </div>

                    {/* Role of Platform Box */}
                    <div className="p-4 lg:p-6 bg-cta/5 border-l-4 border-cta rounded-r-lg lg:rounded-r-xl mb-6 lg:mb-8 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10"><Lightbulb size={60} /></div>
                        <span className="font-bold text-white block mb-1 lg:mb-2 text-sm lg:text-lg relative z-10 flex items-center gap-2">
                            <Lightbulb size={18} className="text-cta"/> دور المنصة:
                        </span>
                        <p className="text-xs lg:text-base text-text-sub leading-relaxed relative z-10">{service.role}</p>
                    </div>

                    <Button primary className="w-full sm:w-auto text-base lg:text-lg py-3">اطلب الخدمة الآن</Button>
                  </div>
                  
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us (USP) - Grid on Mobile */}
      <section className="py-12 lg:py-20 bg-dark border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-8 lg:mb-16">
                <h2 className="text-xl lg:text-4xl font-bold text-text-main mb-3 lg:mb-4">لماذا تختار منصتنا؟</h2>
                <div className="h-1 w-16 lg:w-20 bg-primary mx-auto rounded-full"></div>
            </div>
            
            {/* Grid 2 Columns on Mobile */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                {SERVICES_PAGE_CONTENT.usp.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div key={i} className="bg-card p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-white/5 hover:-translate-y-2 transition-transform duration-300 text-center lg:text-right flex flex-col items-center lg:items-start h-full">
                            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-dark rounded-xl flex items-center justify-center text-primary mb-3 lg:mb-4 shadow-lg flex-shrink-0">
                                <Icon size={20} className="lg:w-6 lg:h-6" />
                            </div>
                            <h3 className="text-xs lg:text-xl font-bold text-white mb-1 lg:mb-2">{item.title}</h3>
                            <p className="text-text-sub text-[10px] lg:text-sm leading-tight lg:leading-relaxed">{item.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
      </section>

      {/* 4. How it Works (Timeline) - Grid on Mobile */}
      <section className="py-12 lg:py-20 bg-darker relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="mb-8 lg:mb-16 text-center lg:text-right">
                <span className="text-cta font-bold tracking-widest text-xs lg:text-sm">رحلة الطلب</span>
                <h2 className="text-xl lg:text-4xl font-bold text-text-main mt-2">كيف تعمل منصتنا؟</h2>
            </div>

            <div className="relative">
                {/* Line - Hidden on Mobile */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0"></div>
                
                {/* Grid 2 Columns on Mobile */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-8">
                    {SERVICES_PAGE_CONTENT.steps.map((step, i) => (
                        <div key={i} className={`relative z-10 bg-dark p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-white/10 hover:border-primary transition-colors text-center lg:text-right group ${i === 4 ? 'col-span-2 lg:col-span-1 w-2/3 mx-auto lg:w-auto' : ''}`}>
                            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-lg mb-3 lg:mb-4 mx-auto lg:mx-0 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                                {i + 1}
                            </div>
                            <h3 className="text-xs lg:text-lg font-bold text-white mb-1 lg:mb-2">{step.title}</h3>
                            <p className="text-text-sub text-[10px] lg:text-xs leading-tight">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 5. Services FAQ */}
      <section className="py-12 lg:py-20 bg-dark">
        <div className="container mx-auto px-4 lg:px-6 max-w-3xl">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-xl lg:text-3xl font-bold text-text-main">الأسئلة الشائعة حول الخدمات</h2>
          </div>
          <div className="space-y-3 lg:space-y-4">
            {SERVICES_PAGE_CONTENT.faq.map((item, idx) => (
                <div key={idx} className="bg-card rounded-xl lg:rounded-2xl border border-white/5 overflow-hidden">
                    <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex justify-between items-center p-4 lg:p-5 text-right font-bold text-sm lg:text-lg text-text-main hover:bg-white/5 transition-colors"
                    >
                        {item.q}
                        {openFaq === idx ? <Minus size={18} className="text-cta"/> : <Plus size={18} className="text-primary"/>}
                    </button>
                    <div className={`transition-all duration-300 ${openFaq === idx ? 'max-h-40 p-4 lg:p-5 pt-0' : 'max-h-0 overflow-hidden'}`}>
                        <p className="text-text-sub text-xs lg:text-base leading-relaxed border-t border-white/5 pt-3 lg:pt-4">{item.a}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-primary/10 to-cta/10 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-xl lg:text-4xl font-black text-text-main mb-4 lg:mb-6">{SERVICES_PAGE_CONTENT.cta.title}</h2>
            <p className="text-sm lg:text-xl text-text-sub mb-6 lg:mb-10 max-w-3xl mx-auto px-2">
                {SERVICES_PAGE_CONTENT.cta.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-6 justify-center">
                <Button primary className="text-sm lg:text-lg px-8 py-3 shadow-lg shadow-cta/20">{SERVICES_PAGE_CONTENT.cta.btn1}</Button>
                <Button className="text-sm lg:text-lg px-8 py-3">{SERVICES_PAGE_CONTENT.cta.btn2}</Button>
            </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;