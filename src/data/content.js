import { 
  ShieldCheck, Clock, FileText, Search, Users, Cpu, Briefcase, CheckCircle, 
  HelpCircle, TrendingUp, Award, Zap, BookOpen, Landmark, Coins, Wrench,
  Lightbulb, Anchor, Filter, MessageCircle, Target, Heart
} from 'lucide-react';
import i18n from '../i18n'; // استدعاء الترجمة المباشر

// === استيراد الصور ===
import hero1 from '../assets/hero-1.webp';
import hero2 from '../assets/hero-2.jpg';
import serviceFire from '../assets/service-fire.webp';
import serviceAlarm from '../assets/service-alarm.webp';
import serviceEquip from '../assets/service-equipment.webp';
import serviceConsult from '../assets/service-consulting.webp';
import blogAI from '../assets/blog-ai.webp';
import blogMaint from '../assets/blog-maintenance.webp';
import blogLicense from '../assets/blog-license.webp';
import sectorsBg from '../assets/sectors.webp';
import whyUsBg from '../assets/whyus.webp';
import appHand from '../assets/app-hand.webp';
import hservice1 from '../assets/home-services1.webp';
import serviceCustom from '../assets/serviceCustom.webp';
import serviceCctv from '../assets/serviceCctv.webp';

// =========================================================
//  GLOBAL DATA
// =========================================================

export const NAV_LINKS = [
  { id: 'home', label: i18n.t('nav.home'), path: '/' },
  { id: 'about', label: i18n.t('nav.about'), path: '/about' },
  { id: 'services', label: i18n.t('nav.services'), path: '/services' },
  { id: 'blog', label: i18n.t('nav.blog'), path: '/blog' },
  { id: 'contact', label: i18n.t('nav.contact'), path: '/contact', isCta: true },
];

export const SECTORS_BG_IMAGE = sectorsBg;
export const WHY_US_BG_IMAGE = whyUsBg;
export const SOLUTION_IMAGE = appHand;
export const HSERVICES1 = hservice1;

// =========================================================
//  HOME PAGE DATA
// =========================================================

export const HERO_SLIDES = [
  {
    id: 1,
    image: hero1,
    title: i18n.t('home.hero.slide1.title'),
    subtitle: i18n.t('home.hero.slide1.subtitle'),
    cta: i18n.t('home.hero.slide1.cta')
  },
  {
    id: 2,
    image: hero2,
    title: i18n.t('home.hero.slide2.title'),
    subtitle: i18n.t('home.hero.slide2.subtitle'),
    cta: i18n.t('home.hero.slide2.cta')
  }
];

export const PAIN_POINTS = [
  { icon: Search, title: i18n.t('home.painPoints.p1.title'), desc: i18n.t('home.painPoints.p1.desc') },
  { icon: Clock, title: i18n.t('home.painPoints.p2.title'), desc: i18n.t('home.painPoints.p2.desc') },
  { icon: FileText, title: i18n.t('home.painPoints.p3.title'), desc: i18n.t('home.painPoints.p3.desc') },
  { icon: ShieldCheck, title: i18n.t('home.painPoints.p4.title'), desc: i18n.t('home.painPoints.p4.desc') }
];

export const FEATURES = [
  { title: i18n.t('home.features.f1.title'), desc: i18n.t('home.features.f1.desc') },
  { title: i18n.t('home.features.f2.title'), desc: i18n.t('home.features.f2.desc') },
  { title: i18n.t('home.features.f3.title'), desc: i18n.t('home.features.f3.desc') },
  { title: i18n.t('home.features.f4.title'), desc: i18n.t('home.features.f4.desc') },
  { title: i18n.t('home.features.f5.title'), desc: i18n.t('home.features.f5.desc') }
];

export const SERVICES_SUMMARY = [
  { id: 1, icon: FileText, image: serviceConsult, title: i18n.t('home.servicesSummary.s1.title'), desc: i18n.t('home.servicesSummary.s1.desc') },
  { id: 2, icon: ShieldCheck, image: serviceFire, title: i18n.t('home.servicesSummary.s2.title'), desc: i18n.t('home.servicesSummary.s2.desc') },
  { id: 3, icon: Target, image: serviceEquip, title: i18n.t('home.servicesSummary.s3.title'), desc: i18n.t('home.servicesSummary.s3.desc') },
  { id: 4, icon: Users, image: serviceAlarm, title: i18n.t('home.servicesSummary.s4.title'), desc: i18n.t('home.servicesSummary.s4.desc') },
  { id: 5, icon: Cpu, image: serviceCctv, title: i18n.t('home.servicesSummary.s5.title'), desc: i18n.t('home.servicesSummary.s5.desc') },
  { id: 6, icon: Lightbulb, image: serviceCustom, title: i18n.t('home.servicesSummary.s6.title'), desc: i18n.t('home.servicesSummary.s6.desc') }
];

export const TARGET_AUDIENCE = [
  { image: serviceEquip, title: i18n.t('home.targetAudience.t1.title'), desc: i18n.t('home.targetAudience.t1.desc') },
  { image: serviceFire, title: i18n.t('home.targetAudience.t2.title'), desc: i18n.t('home.targetAudience.t2.desc') },
  { image: serviceAlarm, title: i18n.t('home.targetAudience.t3.title'), desc: i18n.t('home.targetAudience.t3.desc') },
  { image: serviceConsult, title: i18n.t('home.targetAudience.t4.title'), desc: i18n.t('home.targetAudience.t4.desc') }
];

export const WHY_US = [
  { icon: Clock, title: i18n.t('home.whyUs.w1.title'), desc: i18n.t('home.whyUs.w1.desc') },
  { icon: Cpu, title: i18n.t('home.whyUs.w2.title'), desc: i18n.t('home.whyUs.w2.desc') },
  { icon: Anchor, title: i18n.t('home.whyUs.w3.title'), desc: i18n.t('home.whyUs.w3.desc') },
  { icon: Coins, title: i18n.t('home.whyUs.w4.title'), desc: i18n.t('home.whyUs.w4.desc') },
  { icon: ShieldCheck, title: i18n.t('home.whyUs.w5.title'), desc: i18n.t('home.whyUs.w5.desc') },
  { icon: Filter, title: i18n.t('home.whyUs.w6.title'), desc: i18n.t('home.whyUs.w6.desc') }
];

export const FAQ = [
  { q: i18n.t('home.faq.q1.q'), a: i18n.t('home.faq.q1.a') },
  { q: i18n.t('home.faq.q2.q'), a: i18n.t('home.faq.q2.a') },
  { q: i18n.t('home.faq.q3.q'), a: i18n.t('home.faq.q3.a') },
  { q: i18n.t('home.faq.q4.q'), a: i18n.t('home.faq.q4.a') },
  { q: i18n.t('home.faq.q5.q'), a: i18n.t('home.faq.q5.a') }
];

export const HOME_CTA = {
  title: i18n.t('home.cta.title'),
  text: i18n.t('home.cta.text'),
  btn: i18n.t('home.cta.btn')
};

// =========================================================
//  SERVICES PAGE CONTENT
// =========================================================

export const SERVICES_PAGE_CONTENT = {
  hero: {
    title: i18n.t('servicesPage.hero.title'),
    subtitle: i18n.t('servicesPage.hero.subtitle'),
    cta1: i18n.t('servicesPage.hero.cta1'),
    cta2: i18n.t('servicesPage.hero.cta2')
  },
  services: [
    {
      id: 1, image: serviceConsult, title: i18n.t('servicesPage.services.s1.title'), subtitle: i18n.t('servicesPage.services.s1.subtitle'), desc: i18n.t('servicesPage.services.s1.desc'), role: i18n.t('servicesPage.services.s1.role'),
      subItems: [
        { title: i18n.t('servicesPage.services.s1.subItems.item1.title'), details: i18n.t('servicesPage.services.s1.subItems.item1.details') },
        { title: i18n.t('servicesPage.services.s1.subItems.item2.title'), details: i18n.t('servicesPage.services.s1.subItems.item2.details') },
        { title: i18n.t('servicesPage.services.s1.subItems.item3.title'), details: i18n.t('servicesPage.services.s1.subItems.item3.details') },
        { title: i18n.t('servicesPage.services.s1.subItems.item4.title'), details: i18n.t('servicesPage.services.s1.subItems.item4.details') },
        { title: i18n.t('servicesPage.services.s1.subItems.item5.title'), details: i18n.t('servicesPage.services.s1.subItems.item5.details') }
      ]
    },
    {
      id: 2, image: serviceFire, title: i18n.t('servicesPage.services.s2.title'), subtitle: i18n.t('servicesPage.services.s2.subtitle'), desc: i18n.t('servicesPage.services.s2.desc'), role: i18n.t('servicesPage.services.s2.role'),
      subItems: [
        { title: i18n.t('servicesPage.services.s2.subItems.item1.title'), details: i18n.t('servicesPage.services.s2.subItems.item1.details') },
        { title: i18n.t('servicesPage.services.s2.subItems.item2.title'), details: i18n.t('servicesPage.services.s2.subItems.item2.details') },
        { title: i18n.t('servicesPage.services.s2.subItems.item3.title'), details: i18n.t('servicesPage.services.s2.subItems.item3.details') }
      ]
    },
    {
      id: 3, image: serviceEquip, title: i18n.t('servicesPage.services.s3.title'), subtitle: i18n.t('servicesPage.services.s3.subtitle'), desc: i18n.t('servicesPage.services.s3.desc'), role: i18n.t('servicesPage.services.s3.role'),
      subItems: [
        { title: i18n.t('servicesPage.services.s3.subItems.item1.title'), details: i18n.t('servicesPage.services.s3.subItems.item1.details') },
        { title: i18n.t('servicesPage.services.s3.subItems.item2.title'), details: i18n.t('servicesPage.services.s3.subItems.item2.details') },
        { title: i18n.t('servicesPage.services.s3.subItems.item3.title'), details: i18n.t('servicesPage.services.s3.subItems.item3.details') },
        { title: i18n.t('servicesPage.services.s3.subItems.item4.title'), details: i18n.t('servicesPage.services.s3.subItems.item4.details') }
      ]
    },
    {
      id: 4, image: serviceAlarm, title: i18n.t('servicesPage.services.s4.title'), subtitle: i18n.t('servicesPage.services.s4.subtitle'), desc: i18n.t('servicesPage.services.s4.desc'), role: i18n.t('servicesPage.services.s4.role'),
      subItems: [
        { title: i18n.t('servicesPage.services.s4.subItems.item1.title'), details: i18n.t('servicesPage.services.s4.subItems.item1.details') },
        { title: i18n.t('servicesPage.services.s4.subItems.item2.title'), details: i18n.t('servicesPage.services.s4.subItems.item2.details') },
        { title: i18n.t('servicesPage.services.s4.subItems.item3.title'), details: i18n.t('servicesPage.services.s4.subItems.item3.details') }
      ]
    },
    {
      id: 5, image: serviceCctv, title: i18n.t('servicesPage.services.s5.title'), subtitle: i18n.t('servicesPage.services.s5.subtitle'), desc: i18n.t('servicesPage.services.s5.desc'), role: i18n.t('servicesPage.services.s5.role'),
      subItems: [
        { title: i18n.t('servicesPage.services.s5.subItems.item1.title'), details: i18n.t('servicesPage.services.s5.subItems.item1.details') },
        { title: i18n.t('servicesPage.services.s5.subItems.item2.title'), details: i18n.t('servicesPage.services.s5.subItems.item2.details') },
        { title: i18n.t('servicesPage.services.s5.subItems.item3.title'), details: i18n.t('servicesPage.services.s5.subItems.item3.details') },
        { title: i18n.t('servicesPage.services.s5.subItems.item4.title'), details: i18n.t('servicesPage.services.s5.subItems.item4.details') }
      ]
    },
    {
      id: 6, image: serviceCustom, title: i18n.t('servicesPage.services.s6.title'), subtitle: i18n.t('servicesPage.services.s6.subtitle'), desc: i18n.t('servicesPage.services.s6.desc'), role: i18n.t('servicesPage.services.s6.role'),
      subItems: [
        { title: i18n.t('servicesPage.services.s6.subItems.item1.title'), details: i18n.t('servicesPage.services.s6.subItems.item1.details') },
        { title: i18n.t('servicesPage.services.s6.subItems.item2.title'), details: i18n.t('servicesPage.services.s6.subItems.item2.details') },
        { title: i18n.t('servicesPage.services.s6.subItems.item3.title'), details: i18n.t('servicesPage.services.s6.subItems.item3.details') },
        { title: i18n.t('servicesPage.services.s6.subItems.item4.title'), details: i18n.t('servicesPage.services.s6.subItems.item4.details') }
      ]
    }
  ],
  usp: [
    { icon: Anchor, title: i18n.t('servicesPage.usp.u1.title'), desc: i18n.t('servicesPage.usp.u1.desc') },
    { icon: Filter, title: i18n.t('servicesPage.usp.u2.title'), desc: i18n.t('servicesPage.usp.u2.desc') },
    { icon: Cpu, title: i18n.t('servicesPage.usp.u3.title'), desc: i18n.t('servicesPage.usp.u3.desc') },
    { icon: Users, title: i18n.t('servicesPage.usp.u4.title'), desc: i18n.t('servicesPage.usp.u4.desc') }
  ],
  steps: [
    { title: i18n.t('servicesPage.steps.st1.title'), desc: i18n.t('servicesPage.steps.st1.desc') },
    { title: i18n.t('servicesPage.steps.st2.title'), desc: i18n.t('servicesPage.steps.st2.desc') },
    { title: i18n.t('servicesPage.steps.st3.title'), desc: i18n.t('servicesPage.steps.st3.desc') },
    { title: i18n.t('servicesPage.steps.st4.title'), desc: i18n.t('servicesPage.steps.st4.desc') },
    { title: i18n.t('servicesPage.steps.st5.title'), desc: i18n.t('servicesPage.steps.st5.desc') }
  ],
  faq: [
    { q: i18n.t('servicesPage.faq.q1.q'), a: i18n.t('servicesPage.faq.q1.a') },
    { q: i18n.t('servicesPage.faq.q2.q'), a: i18n.t('servicesPage.faq.q2.a') },
    { q: i18n.t('servicesPage.faq.q3.q'), a: i18n.t('servicesPage.faq.q3.a') },
    { q: i18n.t('servicesPage.faq.q4.q'), a: i18n.t('servicesPage.faq.q4.a') },
    { q: i18n.t('servicesPage.faq.q5.q'), a: i18n.t('servicesPage.faq.q5.a') }
  ],
  cta: {
    title: i18n.t('servicesPage.cta.title'),
    text: i18n.t('servicesPage.cta.text'),
    btn1: i18n.t('servicesPage.cta.btn1'),
    btn2: i18n.t('servicesPage.cta.btn2')
  }
};

// =========================================================
//  ABOUT PAGE DATA
// =========================================================

export const ABOUT_DATA = {
  hero: {
    title: i18n.t('about.hero.title'),
    subtitle: i18n.t('about.hero.subtitle')
  },
  story: i18n.t('about.story'),
  vision: i18n.t('about.vision'),
  mission: i18n.t('about.mission'),
  values: [
    { icon: Search, title: i18n.t('about.values.v1.title'), desc: i18n.t('about.values.v1.desc') },
    { icon: ShieldCheck, title: i18n.t('about.values.v2.title'), desc: i18n.t('about.values.v2.desc') },
    { icon: Cpu, title: i18n.t('about.values.v3.title'), desc: i18n.t('about.values.v3.desc') },
    { icon: Clock, title: i18n.t('about.values.v4.title'), desc: i18n.t('about.values.v4.desc') }
  ],
  process: [
    { title: i18n.t('about.process.p1.title'), desc: i18n.t('about.process.p1.desc') },
    { title: i18n.t('about.process.p2.title'), desc: i18n.t('about.process.p2.desc') },
    { title: i18n.t('about.process.p3.title'), desc: i18n.t('about.process.p3.desc') },
    { title: i18n.t('about.process.p4.title'), desc: i18n.t('about.process.p4.desc') },
    { title: i18n.t('about.process.p5.title'), desc: i18n.t('about.process.p5.desc') }
  ],
  whyUs: [
    { icon: Anchor, title: i18n.t('about.whyUs.w1.title'), desc: i18n.t('about.whyUs.w1.desc') },
    { icon: Cpu, title: i18n.t('about.whyUs.w2.title'), desc: i18n.t('about.whyUs.w2.desc') },
    { icon: ShieldCheck, title: i18n.t('about.whyUs.w3.title'), desc: i18n.t('about.whyUs.w3.desc') },
    { icon: Clock, title: i18n.t('about.whyUs.w4.title'), desc: i18n.t('about.whyUs.w4.desc') },
    { icon: Coins, title: i18n.t('about.whyUs.w5.title'), desc: i18n.t('about.whyUs.w5.desc') }
  ],
  audience: [
    { image: serviceEquip, title: i18n.t('about.audience.a1.title'), desc: i18n.t('about.audience.a1.desc') },
    { image: serviceFire, title: i18n.t('about.audience.a2.title'), desc: i18n.t('about.audience.a2.desc') },
    { image: serviceAlarm, title: i18n.t('about.audience.a3.title'), desc: i18n.t('about.audience.a3.desc') },
    { image: serviceConsult, title: i18n.t('about.audience.a4.title'), desc: i18n.t('about.audience.a4.desc') }
  ],
  cta: {
    title: i18n.t('about.cta.title'),
    text: i18n.t('about.cta.text'),
    btn1: i18n.t('about.cta.btn1'),
    btn2: i18n.t('about.cta.btn2')
  }
};

// =========================================================
//  BLOG DATA
// =========================================================

export const BLOG_TAGS = i18n.t('blog.tags', { returnObjects: true });

export const BLOG_CATEGORIES = [
  { id: 'all', icon: BookOpen, title: i18n.t('blog.categories.all') },
  { id: 'guides', icon: HelpCircle, title: i18n.t('blog.categories.guides') },
  { id: 'permits', icon: FileText, title: i18n.t('blog.categories.permits') },
  { id: 'systems', icon: Zap, title: i18n.t('blog.categories.systems') },
  { id: 'contracts', icon: Coins, title: i18n.t('blog.categories.contracts') },
  { id: 'code', icon: Landmark, title: i18n.t('blog.categories.code') }
];

export const BLOG_POSTS = [
  { id: 1, categoryId: "guides", image: blogLicense, title: i18n.t('blog.posts.p1.title'), category: i18n.t('blog.categories.guides'), readTime: i18n.t('blog.posts.p1.readTime'), excerpt: i18n.t('blog.posts.p1.excerpt'), content: i18n.t('blog.posts.p1.content') },
  { id: 2, categoryId: "contracts", image: blogMaint, title: i18n.t('blog.posts.p2.title'), category: i18n.t('blog.categories.contracts'), readTime: i18n.t('blog.posts.p2.readTime'), excerpt: i18n.t('blog.posts.p2.excerpt'), content: i18n.t('blog.posts.p2.content') },
  { id: 3, categoryId: "guides", image: blogAI, title: i18n.t('blog.posts.p3.title'), category: i18n.t('blog.categories.guides'), readTime: i18n.t('blog.posts.p3.readTime'), excerpt: i18n.t('blog.posts.p3.excerpt'), content: i18n.t('blog.posts.p3.content') },
  { id: 4, categoryId: "permits", image: blogLicense, title: i18n.t('blog.posts.p4.title'), category: i18n.t('blog.categories.permits'), readTime: i18n.t('blog.posts.p4.readTime'), excerpt: i18n.t('blog.posts.p4.excerpt'), content: i18n.t('blog.posts.p4.content') },
  { id: 5, categoryId: "permits", image: serviceConsult, title: i18n.t('blog.posts.p5.title'), category: i18n.t('blog.categories.permits'), readTime: i18n.t('blog.posts.p5.readTime'), excerpt: i18n.t('blog.posts.p5.excerpt'), content: i18n.t('blog.posts.p5.content') },
  { id: 6, categoryId: "systems", image: serviceAlarm, title: i18n.t('blog.posts.p6.title'), category: i18n.t('blog.categories.systems'), readTime: i18n.t('blog.posts.p6.readTime'), excerpt: i18n.t('blog.posts.p6.excerpt'), content: i18n.t('blog.posts.p6.content') },
  { id: 7, categoryId: "code", image: hero2, title: i18n.t('blog.posts.p7.title'), category: i18n.t('blog.categories.code'), readTime: i18n.t('blog.posts.p7.readTime'), excerpt: i18n.t('blog.posts.p7.excerpt'), content: i18n.t('blog.posts.p7.content') },
  { id: 8, categoryId: "contracts", image: serviceEquip, title: i18n.t('blog.posts.p8.title'), category: i18n.t('blog.categories.contracts'), readTime: i18n.t('blog.posts.p8.readTime'), excerpt: i18n.t('blog.posts.p8.excerpt'), content: i18n.t('blog.posts.p8.content') },
  { id: 9, categoryId: "systems", image: serviceFire, title: i18n.t('blog.posts.p9.title'), category: i18n.t('blog.categories.systems'), readTime: i18n.t('blog.posts.p9.readTime'), excerpt: i18n.t('blog.posts.p9.excerpt'), content: i18n.t('blog.posts.p9.content') },
  { id: 10, categoryId: "code", image: serviceFire, title: i18n.t('blog.posts.p10.title'), category: i18n.t('blog.categories.code'), readTime: i18n.t('blog.posts.p10.readTime'), excerpt: i18n.t('blog.posts.p10.excerpt'), content: i18n.t('blog.posts.p10.content') }
];

// ====== TERMS AND CONDITIONS ======
export const TERMS_CONTENT = {
  title: i18n.t('terms.title'),
  intro: i18n.t('terms.intro'),
  sections: [
    { title: i18n.t('terms.sections.s1.title'), items: i18n.t('terms.sections.s1.items', { returnObjects: true }) },
    { title: i18n.t('terms.sections.s2.title'), items: i18n.t('terms.sections.s2.items', { returnObjects: true }) },
    { title: i18n.t('terms.sections.s3.title'), intro: i18n.t('terms.sections.s3.intro'), items: i18n.t('terms.sections.s3.items', { returnObjects: true }) },
    { title: i18n.t('terms.sections.s4.title'), items: i18n.t('terms.sections.s4.items', { returnObjects: true }) },
    { title: i18n.t('terms.sections.s5.title'), intro: i18n.t('terms.sections.s5.intro'), items: i18n.t('terms.sections.s5.items', { returnObjects: true }) },
    { title: i18n.t('terms.sections.s6.title'), items: i18n.t('terms.sections.s6.items', { returnObjects: true }) },
    { title: i18n.t('terms.sections.s7.title'), intro: i18n.t('terms.sections.s7.intro'), items: i18n.t('terms.sections.s7.items', { returnObjects: true }) },
    { title: i18n.t('terms.sections.s8.title'), items: i18n.t('terms.sections.s8.items', { returnObjects: true }) },
    { title: i18n.t('terms.sections.s9.title'), intro: i18n.t('terms.sections.s9.intro'), items: i18n.t('terms.sections.s9.items', { returnObjects: true }) },
    { title: i18n.t('terms.sections.s10.title'), intro: i18n.t('terms.sections.s10.intro') },
    { title: i18n.t('terms.sections.s11.title'), intro: i18n.t('terms.sections.s11.intro') },
    { title: i18n.t('terms.sections.s12.title'), intro: i18n.t('terms.sections.s12.intro') }
  ],
  cr: i18n.t('terms.cr')
};

// ====== PRIVACY POLICY ======
export const PRIVACY_CONTENT = {
  title: i18n.t('privacy.title'),
  intro: i18n.t('privacy.intro'),
  sections: [
    { title: i18n.t('privacy.sections.s1.title'), intro: i18n.t('privacy.sections.s1.intro'), items: i18n.t('privacy.sections.s1.items', { returnObjects: true }) },
    { title: i18n.t('privacy.sections.s2.title'), intro: i18n.t('privacy.sections.s2.intro'), items: i18n.t('privacy.sections.s2.items', { returnObjects: true }) },
    { title: i18n.t('privacy.sections.s3.title'), intro: i18n.t('privacy.sections.s3.intro'), items: i18n.t('privacy.sections.s3.items', { returnObjects: true }) },
    { title: i18n.t('privacy.sections.s4.title'), intro: i18n.t('privacy.sections.s4.intro') },
    { title: i18n.t('privacy.sections.s5.title'), intro: i18n.t('privacy.sections.s5.intro') },
    { title: i18n.t('privacy.sections.s6.title'), intro: i18n.t('privacy.sections.s6.intro'), items: i18n.t('privacy.sections.s6.items', { returnObjects: true }) },
    { title: i18n.t('privacy.sections.s7.title'), intro: i18n.t('privacy.sections.s7.intro') },
    { title: i18n.t('privacy.sections.s8.title'), intro: i18n.t('privacy.sections.s8.intro') }
  ]
};