import React from 'react';
import { Link } from 'react-router-dom';
import { Target, ShieldCheck, Heart, Zap, Users, ArrowLeft, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import TextWithBrand from '../components/TextWithBrand';
import { ABOUT_DATA } from '../data/content';

const AboutPage = () => {
  return (
    <div className="animate-fadeIn pt-20 lg:pt-24">
      
      {/* 1. Hero Section */}
      <div className="relative h-[50vh] lg:h-[60vh] flex items-center justify-center bg-dark border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Team Meeting" 
                className="w-full h-full object-cover opacity-20 animate-pulse-slow" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-primary-dark/50"></div>
        </div>

        <div className="text-center container mx-auto px-4 lg:px-6 z-10 relative">
          <span className="text-cta font-bold tracking-[0.2em] mb-3 lg:mb-4 block text-sm lg:text-xl uppercase border-b-2 border-cta inline-block pb-1 lg:pb-2">
            من نحن
          </span>
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-text-main mb-4 lg:mb-6 leading-tight drop-shadow-2xl max-w-5xl mx-auto">
            {ABOUT_DATA.hero.title}
          </h1>
          <p className="text-sm lg:text-2xl text-text-sub max-w-4xl mx-auto font-medium leading-relaxed px-2">
            <TextWithBrand text={ABOUT_DATA.hero.subtitle} />
          </p>
        </div>
      </div>

      {/* 2. Story Section */}
      <section className="py-12 lg:py-28 bg-darker">
        <div className="container mx-auto px-4 lg:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {/* Image Composition */}
                <div className="w-full lg:w-1/2 relative group">
                    <div className="absolute -inset-2 lg:-inset-4 bg-primary/10 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-0"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
                        alt="Our Story" 
                        className="relative rounded-2xl lg:rounded-3xl shadow-2xl border border-white/10 w-full h-[250px] lg:h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-xl lg:text-4xl font-bold text-text-main mb-4 lg:mb-6 flex items-center gap-2 lg:gap-3">
                        قصتنا: من مشكلة إلى رؤية <span className="w-8 lg:w-12 h-1 bg-cta rounded-full"></span>
                    </h2>
                    <p className="text-text-sub text-sm lg:text-xl leading-relaxed lg:leading-loose mb-6 lg:mb-10">
                        <TextWithBrand text={ABOUT_DATA.story} />
                    </p>
                    
                    {/* Vision & Mission */}
                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
                        <div className="bg-card p-5 lg:p-6 rounded-xl lg:rounded-2xl border-l-4 border-primary shadow-md hover:translate-y-[-5px] transition-transform duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                    <Target size={24} className="lg:w-8 lg:h-8"/>
                                </div>
                                <h3 className="font-bold text-white text-lg lg:text-xl">رؤيتنا</h3>
                            </div>
                            <div className="w-full h-[1px] bg-white/10 mb-4 relative">
                                <div className="absolute right-0 top-0 h-full w-1/3 bg-primary rounded-full"></div>
                            </div>
                            <p className="text-text-sub text-sm lg:text-base leading-relaxed">{ABOUT_DATA.vision}</p>
                        </div>
                        
                        <div className="bg-card p-5 lg:p-6 rounded-xl lg:rounded-2xl border-l-4 border-cta shadow-md hover:translate-y-[-5px] transition-transform duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-cta/10 p-2 rounded-lg text-cta">
                                    <ShieldCheck size={24} className="lg:w-8 lg:h-8"/>
                                </div>
                                <h3 className="font-bold text-white text-lg lg:text-xl">رسالتنا</h3>
                            </div>
                            <div className="w-full h-[1px] bg-white/10 mb-4 relative">
                                <div className="absolute right-0 top-0 h-full w-1/3 bg-cta rounded-full"></div>
                            </div>
                            <p className="text-text-sub text-sm lg:text-base leading-relaxed">{ABOUT_DATA.mission}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Values Section */}
      <section className="py-12 lg:py-28 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <h2 className="text-xl lg:text-4xl font-bold text-center text-text-main mb-8 lg:mb-16">قيمنا الراسخة</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                {ABOUT_DATA.values.map((val, i) => {
                    const Icon = val.icon;
                    return (
                        <div key={i} className="bg-card p-4 lg:p-8 rounded-2xl lg:rounded-3xl border border-white/5 hover:border-primary/50 transition-all text-center">
                            <div className="w-10 h-10 lg:w-14 lg:h-14 mx-auto bg-dark rounded-full flex items-center justify-center mb-3 lg:mb-6 text-primary shadow-lg">
                                <Icon size={20} className="lg:w-7 lg:h-7"/>
                            </div>
                            <h3 className="font-bold text-white text-sm lg:text-lg mb-1 lg:mb-3">{val.title}</h3>
                            <p className="text-text-sub text-[10px] lg:text-sm leading-tight">{val.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
      </section>

      {/* 4. How We Work */}
      <section className="py-12 lg:py-28 bg-darker">
        <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-8 lg:mb-16">
                <span className="text-cta font-bold tracking-widest text-xs lg:text-sm uppercase">رحلة العميل</span>
                <h2 className="text-xl lg:text-4xl font-bold text-text-main mt-2">كيف ندير رحلة الأمان بالنيابة عنك؟</h2>
            </div>

            <div className="lg:hidden flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory no-scrollbar">
                {ABOUT_DATA.process.map((step, i) => (
                    <div key={i} className="min-w-[85vw] bg-card p-6 rounded-2xl border border-white/5 snap-center relative shadow-lg">
                        <div className="absolute top-4 left-4 text-6xl font-black text-white/5 pointer-events-none">{i + 1}</div>
                        <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold text-lg mb-4">
                            {i + 1}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-text-sub text-sm leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-1 lg:hidden">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                <div className="w-2 h-2 bg-white/20 rounded-full"></div>
            </div>

            <div className="hidden lg:block relative max-w-4xl mx-auto">
                <div className="absolute top-0 bottom-0 right-1/2 w-1 bg-white/10 -mr-0.5 rounded-full"></div>
                {ABOUT_DATA.process.map((step, i) => (
                    <div key={i} className={`flex gap-8 mb-12 relative ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="absolute right-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg border-4 border-dark z-10 -mr-5 shadow-lg shadow-primary/30">
                            {i + 1}
                        </div>
                        <div className="w-1/2"></div>
                        <div className="w-1/2 px-8">
                            <div className={`bg-card p-6 rounded-2xl border border-white/5 hover:border-primary transition-colors relative group ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
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
      <section className="py-12 lg:py-28 bg-dark">
        <div className="container mx-auto px-4 lg:px-6">
            <div className="mb-12 lg:mb-20">
                <h2 className="text-xl lg:text-4xl font-bold text-center text-text-main mb-6 lg:mb-12">لماذا نحن خيارك الذكي؟</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
                    {ABOUT_DATA.whyUs.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="flex flex-col lg:flex-row gap-3 lg:gap-4 bg-card/50 p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-white/5 text-center lg:text-right">
                                <div className="mx-auto lg:mx-0 flex-shrink-0 text-cta bg-dark p-2 rounded-full w-fit">
                                    <Icon size={20} className="lg:w-6 lg:h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm lg:text-lg mb-1 lg:mb-2">{item.title}</h4>
                                    <p className="text-text-sub text-[10px] lg:text-sm leading-tight">{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div>
                <h2 className="text-xl lg:text-4xl font-bold text-center text-text-main mb-6 lg:mb-12">شريك الأمان الأول لكافة القطاعات</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                    {ABOUT_DATA.audience.map((item, i) => (
                        <div key={i} className="group relative rounded-xl lg:rounded-2xl overflow-hidden h-40 lg:h-64 border border-white/10">
                            
                            {/* التعديل هنا: تغميق الخلفية (Gradient) عشان الكلام يبان */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/60 to-transparent z-10"></div>
                            
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            
                            <div className="absolute bottom-0 left-0 w-full p-3 lg:p-6 z-20">
                                <h4 className="font-bold text-white text-sm lg:text-lg mb-1 lg:mb-2 drop-shadow-md">{item.title}</h4>
                                {/* التعديل هنا: تكبير الخط، تغيير اللون للأبيض الرمادي، وإلغاء الشفافية */}
                                <p className="text-gray-200 text-xs lg:text-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all lg:translate-y-2 lg:group-hover:translate-y-0 leading-snug font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-primary/10 to-cta/10 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-black text-text-main mb-4 lg:mb-6">{ABOUT_DATA.cta.title}</h2>
            <p className="text-sm lg:text-xl text-text-sub mb-6 lg:mb-10 max-w-3xl mx-auto">
                {ABOUT_DATA.cta.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-6 justify-center">
                <Link to="/contact"><Button primary className="w-full sm:w-auto text-base lg:text-lg px-8 py-3 lg:px-10 lg:py-3 shadow-lg shadow-cta/20">{ABOUT_DATA.cta.btn1}</Button></Link>
                <Link to="/contact"><Button className="w-full sm:w-auto text-base lg:text-lg px-8 py-3 lg:px-10 lg:py-3">{ABOUT_DATA.cta.btn2}</Button></Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;