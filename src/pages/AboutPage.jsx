import React from 'react';
import { Link } from 'react-router-dom';
import { Target, ShieldCheck, Heart, Zap, Users } from 'lucide-react';
import Button from '../components/Button';
import TextWithBrand from '../components/TextWithBrand'; // استدعاء المكون الجديد
import { ABOUT_DATA } from '../data/content';

const AboutPage = () => {
  return (
    <div className="animate-fadeIn pt-20 lg:pt-24">
      
      {/* 1. Hero Section */}
      <div className="relative h-[60vh] lg:h-[70vh] flex items-center justify-center bg-dark border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="About Us Background" 
                className="w-full h-full object-cover opacity-30 animate-pulse-slow" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-primary-dark/40"></div>
        </div>

        <div className="text-center container mx-auto px-6 z-10 relative">
          <span className="text-cta font-bold tracking-[0.3em] mb-6 block text-xl lg:text-2xl uppercase border-b-2 border-cta inline-block pb-2">
            من نحن
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-text-main mb-8 leading-tight drop-shadow-2xl">
            {ABOUT_DATA.hero.title}
          </h1>
          
          <p className="text-xl lg:text-3xl text-text-sub max-w-4xl mx-auto font-medium leading-relaxed">
            {/* استخدام المكون هنا لمعالجة اسم البراند */}
            <TextWithBrand text={ABOUT_DATA.hero.subtitle} />
          </p>
        </div>
      </div>

      {/* 2. Story Section */}
      <section className="py-20 lg:py-28 bg-dark">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-text-main mb-8">قصتنا: من مشكلة إلى رؤية</h2>
                <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 text-center lg:text-right order-2 lg:order-1">
                    <p className="text-text-sub text-lg lg:text-xl leading-loose mb-10">
                        {/* استخدام المكون هنا أيضاً */}
                        <TextWithBrand text={ABOUT_DATA.story} />
                    </p>
                    <Link to="/contact">
                        <Button primary className="text-lg px-8 py-3">تواصل معنا الآن</Button>
                    </Link>
                </div>

                <div className="lg:w-1/2 grid gap-6 order-1 lg:order-2 w-full">
                    <div className="bg-card p-8 lg:p-10 rounded-3xl border border-white/5 hover:border-primary/50 transition-all group shadow-xl">
                        <div className="flex items-start gap-6">
                            <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Target size={36}/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">رؤيتنا</h3>
                                <p className="text-text-sub text-base lg:text-lg leading-relaxed">{ABOUT_DATA.vision}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-card p-8 lg:p-10 rounded-3xl border border-white/5 hover:border-cta/50 transition-all group shadow-xl">
                        <div className="flex items-start gap-6">
                            <div className="bg-cta/10 p-4 rounded-2xl text-cta group-hover:bg-cta group-hover:text-white transition-colors">
                                <ShieldCheck size={36}/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">رسالتنا</h3>
                                <p className="text-text-sub text-base lg:text-lg leading-relaxed">{ABOUT_DATA.mission}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Values Section */}
      <section className="py-20 lg:py-28 bg-darker relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-center text-text-main mb-16">قيمنا الراسخة</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {ABOUT_DATA.values.map((val, i) => (
                    <div key={i} className="bg-dark p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-2 duration-300 group text-center">
                        <div className="w-16 h-16 mx-auto bg-card rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform shadow-lg">
                            {i === 0 ? <Users size={32}/> : i === 1 ? <ShieldCheck size={32}/> : i === 2 ? <Zap size={32}/> : <Heart size={32}/>}
                        </div>
                        <h3 className="font-bold text-white text-xl mb-4">{val.title}</h3>
                        <p className="text-text-sub text-base">{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 4. CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-cta/10 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-text-main mb-8">هل أنت مستعد لبدء رحلة الأمان؟</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact"><Button primary className="text-xl px-12 py-4 shadow-lg shadow-cta/20">اطلب عروض أسعار</Button></Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;