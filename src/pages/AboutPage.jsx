import React from 'react';
import { Link } from 'react-router-dom';
import { Target, ShieldCheck, Heart, Zap, Users, ArrowDown, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import TextWithBrand from '../components/TextWithBrand';
import { ABOUT_DATA } from '../data/content';

const AboutPage = () => {
  return (
    <div className="animate-fadeIn pt-20 lg:pt-24">
      
      {/* 1. Hero Section */}
      <div className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center bg-dark border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Team Meeting" 
                className="w-full h-full object-cover opacity-20 animate-pulse-slow" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-primary-dark/50"></div>
        </div>

        <div className="text-center container mx-auto px-6 z-10 relative">
          <span className="text-cta font-bold tracking-[0.3em] mb-4 block text-lg lg:text-xl uppercase border-b-2 border-cta inline-block pb-2">
            من نحن
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-text-main mb-6 leading-tight drop-shadow-2xl max-w-5xl mx-auto">
            {ABOUT_DATA.hero.title}
          </h1>
          <p className="text-lg lg:text-2xl text-text-sub max-w-4xl mx-auto font-medium leading-relaxed">
            <TextWithBrand text={ABOUT_DATA.hero.subtitle} />
          </p>
        </div>
      </div>

      {/* 2. Story Section (Split Layout) */}
      <section className="py-20 lg:py-28 bg-darker">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Image Composition */}
                <div className="w-full lg:w-1/2 relative group">
                    <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-0"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
                        alt="Our Story" 
                        className="relative rounded-3xl shadow-2xl border border-white/10 w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-[-20px] left-[-20px] bg-card p-6 rounded-2xl border border-white/10 shadow-xl hidden lg:block">
                        <p className="text-cta font-black text-4xl mb-1">+500</p>
                        <p className="text-text-sub text-sm">مشروع ناجح</p>
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl lg:text-4xl font-bold text-text-main mb-6 flex items-center gap-3">
                        قصتنا: من مشكلة إلى رؤية <span className="w-12 h-1 bg-cta rounded-full"></span>
                    </h2>
                    <p className="text-text-sub text-base lg:text-lg leading-loose mb-10">
                        <TextWithBrand text={ABOUT_DATA.story} />
                    </p>
                    
                    {/* Vision & Mission Cards */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-card p-5 rounded-2xl border-l-4 border-primary">
                            <div className="flex items-center gap-3 mb-2">
                                <Target className="text-primary" size={24}/>
                                <h3 className="font-bold text-white text-lg">رؤيتنا</h3>
                            </div>
                            <p className="text-text-sub text-sm">{ABOUT_DATA.vision}</p>
                        </div>
                        <div className="bg-card p-5 rounded-2xl border-l-4 border-cta">
                            <div className="flex items-center gap-3 mb-2">
                                <ShieldCheck className="text-cta" size={24}/>
                                <h3 className="font-bold text-white text-lg">رسالتنا</h3>
                            </div>
                            <p className="text-text-sub text-sm">{ABOUT_DATA.mission}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Values Section */}
      <section className="py-20 lg:py-28 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-2xl lg:text-4xl font-bold text-center text-text-main mb-16">قيمنا الراسخة</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ABOUT_DATA.values.map((val, i) => {
                    const Icon = val.icon;
                    return (
                        <div key={i} className="bg-card p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-2 duration-300 group text-center">
                            <div className="w-14 h-14 mx-auto bg-dark rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-lg">
                                <Icon size={28}/>
                            </div>
                            <h3 className="font-bold text-white text-lg mb-3">{val.title}</h3>
                            <p className="text-text-sub text-sm leading-relaxed">{val.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
      </section>

      {/* 4. How We Work (Timeline Process) */}
      <section className="py-20 lg:py-28 bg-darker">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-cta font-bold tracking-widest text-sm uppercase">رحلة العميل</span>
                <h2 className="text-2xl lg:text-4xl font-bold text-text-main mt-2">كيف ندير رحلة الأمان بالنيابة عنك؟</h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute top-0 bottom-0 right-[20px] lg:right-1/2 w-1 bg-white/10 lg:-mr-0.5 rounded-full"></div>

                {ABOUT_DATA.process.map((step, i) => (
                    <div key={i} className={`flex flex-col lg:flex-row gap-8 mb-12 relative ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        
                        {/* Circle Number */}
                        <div className="absolute right-0 lg:right-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg border-4 border-dark z-10 lg:-mr-5 shadow-lg shadow-primary/30">
                            {i + 1}
                        </div>

                        {/* Spacer for Desktop Alignment */}
                        <div className="w-full lg:w-1/2"></div>

                        {/* Content Card */}
                        <div className="w-full lg:w-1/2 pl-12 lg:pl-0 lg:px-8">
                            <div className={`bg-card p-6 rounded-2xl border border-white/5 hover:border-primary transition-colors relative group ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                                <p className="text-text-sub text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. Why Us & Audience */}
      <section className="py-20 lg:py-28 bg-dark">
        <div className="container mx-auto px-6">
            {/* Why Us */}
            <div className="mb-20">
                <h2 className="text-2xl lg:text-4xl font-bold text-center text-text-main mb-12">لماذا نحن خيارك الذكي؟</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ABOUT_DATA.whyUs.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="flex gap-4 bg-card/50 p-6 rounded-2xl border border-white/5 hover:bg-card transition-colors">
                                <div className="flex-shrink-0 mt-1 text-cta">
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-text-sub text-sm">{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Target Audience (Sectors) */}
            <div>
                <h2 className="text-2xl lg:text-4xl font-bold text-center text-text-main mb-12">شريك الأمان الأول لكافة القطاعات</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ABOUT_DATA.audience.map((item, i) => (
                        <div key={i} className="group relative rounded-2xl overflow-hidden h-64 border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10"></div>
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                <h4 className="font-bold text-white text-lg mb-1">{item.title}</h4>
                                <p className="text-text-sub text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-cta/10 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-text-main mb-6">{ABOUT_DATA.cta.title}</h2>
            <p className="text-xl text-text-sub mb-10 max-w-3xl mx-auto">
                {ABOUT_DATA.cta.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact"><Button primary className="text-lg px-10 py-3 shadow-lg shadow-cta/20">{ABOUT_DATA.cta.btn1}</Button></Link>
                <Link to="/contact"><Button className="text-lg px-10 py-3">{ABOUT_DATA.cta.btn2}</Button></Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;