import React from 'react';
import { Target, ShieldCheck, Heart, Zap } from 'lucide-react';
import { ABOUT_DATA } from '../data/content';

const AboutPage = () => {
  return (
    <div className="animate-fadeIn pt-24">
      {/* Hero */}
      <div className="h-[40vh] relative flex items-center justify-center bg-dark border-b border-white/5">
        <div className="text-center container mx-auto px-4 z-10">
          <span className="text-cta font-bold tracking-widest mb-4 block text-sm">من نحن</span>
          <h1 className="text-3xl md:text-5xl font-black text-text-main mb-6 leading-tight">{ABOUT_DATA.hero.title}</h1>
          <p className="text-lg text-text-sub max-w-2xl mx-auto">{ABOUT_DATA.hero.subtitle}</p>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-text-main mb-8">قصتنا: من مشكلة إلى رؤية</h2>
            <p className="text-text-sub text-lg leading-loose mb-12">
                {ABOUT_DATA.story}
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-right">
                <div className="bg-card p-8 rounded-xl border border-white/5">
                    <div className="text-primary mb-4"><Target size={32}/></div>
                    <h3 className="text-xl font-bold text-white mb-2">رؤيتنا</h3>
                    <p className="text-text-sub text-sm">{ABOUT_DATA.vision}</p>
                </div>
                <div className="bg-card p-8 rounded-xl border border-white/5">
                    <div className="text-cta mb-4"><ShieldCheck size={32}/></div>
                    <h3 className="text-xl font-bold text-white mb-2">رسالتنا</h3>
                    <p className="text-text-sub text-sm">{ABOUT_DATA.mission}</p>
                </div>
            </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-darker">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-text-main mb-12">قيمنا الراسخة</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ABOUT_DATA.values.map((val, i) => (
                    <div key={i} className="bg-dark p-6 rounded-lg border border-white/5 hover:border-primary transition-colors text-center">
                        <h3 className="font-bold text-white mb-2">{val.title}</h3>
                        <p className="text-text-sub text-xs">{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;