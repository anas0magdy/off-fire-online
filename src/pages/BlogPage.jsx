import React, { useState } from 'react';
import { ChevronLeft, Search, Clock, X } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES, BLOG_TAGS } from '../data/content';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const getLocalizedPath = (path) => {
    if (!isEn) return path;
    return path === '/' ? '/en' : `/en${path}`;
  };

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.categoryId === activeCategory;
    const matchesSearch = post.title.includes(searchQuery) || post.excerpt.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animate-fadeIn pt-20 lg:pt-24 relative" dir={isEn ? 'ltr' : 'rtl'}>
      
<Helmet>
  <title>
      {selectedPost 
          ? `${selectedPost.title} | ${isEn ? 'Security & Safety Blog' : 'مدونة الأمن والسلامة'}` 
          : isEn ? "Blog | The Digital Reference for Security & Safety" : "المدونة | المرجع الرقمي للأمن والسلامة واشتراطات الدفاع المدني"}
  </title>

  <meta 
      name="description" 
      content={selectedPost 
          ? selectedPost.excerpt 
          : isEn ? "Your comprehensive guide to understanding the Saudi Building Code, firefighting systems, and Civil Defense requirements." : "دليلك الشامل لفهم الكود السعودي، أنظمة مكافحة الحريق، واشتراطات الدفاع المدني للمطاعم والمباني الإدارية."} 
  />

  <meta name="keywords" content={isEn ? "Saudi Civil Defense, SBC, fire maintenance contracts, safety tools, Balady license, fire alarm systems" : "الدفاع المدني السعودي، الكود السعودي للمباني، عقود صيانة حريق، أدوات السلامة، رخصة بلدي، أنظمة إنذار الحريق"} />

  <meta property="og:title" content={selectedPost ? selectedPost.title : (isEn ? "Digital Security & Safety Blog" : "مدونة الأمن والسلامة الرقمية")} />
  <meta property="og:description" content={selectedPost ? selectedPost.excerpt : (isEn ? "Simplified explanation of all safety requirements in Saudi Arabia" : "شرح مبسط لكافة اشتراطات السلامة في السعودية")} />
  <meta property="og:image" content={selectedPost ? selectedPost.image : "/default-blog-share.jpg"} />
  <meta property="og:type" content={selectedPost ? "article" : "website"} />
  <meta property="og:site_name" content={isEn ? "Off Fire Online" : "أوف فاير أونلاين"} />
  <meta property="og:url" content={selectedPost ? `https://www.offfireonline.com${isEn ? '/en' : ''}/blog?id=${selectedPost.id}` : `https://www.offfireonline.com${isEn ? '/en' : ''}/blog`} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={selectedPost ? selectedPost.title : (isEn ? "Digital Reference for Security & Safety" : "المرجع الرقمي للأمن والسلامة")} />
  <meta name="twitter:image" content={selectedPost ? selectedPost.image : "/default-blog-share.jpg"} />

  {/* الروابط الأساسية وربط اللغات - SEO Multilingual */}
  <link rel="canonical" href={selectedPost ? `https://www.offfireonline.com${isEn ? '/en' : ''}/blog?id=${selectedPost.id}` : `https://www.offfireonline.com${isEn ? '/en' : ''}/blog`} />
  <link rel="alternate" hreflang="ar" href={selectedPost ? `https://www.offfireonline.com/blog?id=${selectedPost.id}` : `https://www.offfireonline.com/blog`} />
  <link rel="alternate" hreflang="en" href={selectedPost ? `https://www.offfireonline.com/en/blog?id=${selectedPost.id}` : `https://www.offfireonline.com/en/blog`} />
  <link rel="alternate" hreflang="x-default" href={selectedPost ? `https://www.offfireonline.com/blog?id=${selectedPost.id}` : `https://www.offfireonline.com/blog`} />
</Helmet>

      <div className="bg-dark py-16 lg:py-24 text-center px-4 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] ltr:right-[-10%] rtl:left-[-10%] w-[400px] h-[400px] bg-primary rounded-full blur-[120px]"></div>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-text-main mb-6 relative z-10 text-center">
            {isEn ? 'The Premier Digital Reference for Security & Safety' : 'المرجع الرقمي الأول للأمن والسلامة'}
        </h1>
        <p className="text-text-sub max-w-2xl mx-auto mb-10 text-lg relative z-10 leading-relaxed text-center" dir="auto">
            {isEn ? 'Learn about Civil Defense requirements, the Saudi Code, and firefighting systems.. simply explained for facility managers.' : 'تعرف على اشتراطات الدفاع المدني، الكود السعودي، وأنظمة المكافحة.. مشروحة ببساطة لمديري المنشآت.'}
        </p>
        
        <div className="max-w-xl mx-auto relative z-10 mb-8">
            <input 
                type="text" 
                placeholder={isEn ? "Search for a topic (e.g., restaurant requirements, maintenance)..." : "ابحث عن موضوع (مثال: شروط المطاعم، عقود الصيانة)..."} 
                className="w-full bg-card border border-white/10 text-white rounded-full py-4 px-6 ltr:pr-14 rtl:pl-14 focus:outline-none focus:border-primary transition-colors text-base shadow-lg text-start"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute ltr:right-5 rtl:left-5 top-4 text-text-sub" size={24} />
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 relative z-10">
            {BLOG_TAGS.map(tag => (
                <span key={tag} className="bg-white/5 text-primary px-4 py-1.5 rounded-full text-sm cursor-pointer hover:bg-white/10 transition-colors">
                    {tag}
                </span>
            ))}
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-darker">
        <div className="container mx-auto px-6">
          
          <div className="flex overflow-x-auto pb-4 mb-12 gap-3 no-scrollbar lg:justify-center ltr:flex-row rtl:flex-row">
            {BLOG_CATEGORIES.map(cat => {
                const Icon = cat.icon;
                return (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                            activeCategory === cat.id 
                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                            : 'bg-card border-white/5 text-text-sub hover:bg-white/5 hover:text-white'
                        }`}
                    >
                        <Icon size={18} />
                        {cat.title}
                    </button>
                );
            })}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                <div key={post.id} className="bg-card rounded-3xl overflow-hidden border border-white/5 group cursor-pointer hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col h-full ltr:text-left rtl:text-right">
                    <div className="h-56 overflow-hidden relative">
                        <span className="absolute top-4 ltr:right-4 rtl:left-4 bg-cta/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg z-10 shadow-lg border border-white/10">
                            {post.category}
                        </span>
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                            onError={(e) => e.target.style.display = 'none'} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80"></div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow ltr:text-left rtl:text-right">
                        <div className="flex items-center gap-2 text-text-sub text-xs mb-4 ltr:flex-row rtl:flex-row">
                            <Clock size={14} className="text-primary"/>
                            <span>{isEn ? 'Read time:' : 'وقت القراءة:'} {post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-4 leading-relaxed group-hover:text-primary transition-colors ltr:text-left rtl:text-right w-full">
                            {post.title}
                        </h3>
                        
                        <p className="text-text-sub text-sm mb-6 line-clamp-3 leading-relaxed flex-grow ltr:text-left rtl:text-right w-full">
                            {post.excerpt}
                        </p>
                        
                        <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto ltr:flex-row rtl:flex-row">
                            <button 
                                onClick={() => setSelectedPost(post)}
                                className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer"
                            >
                                {isEn ? 'Read Full Article' : 'اقرأ المقال كاملاً'} <ChevronLeft size={16} className="ltr:rotate-180 rtl:rotate-0" />
                            </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-20 text-text-sub">
                <p className="text-xl">{isEn ? 'Sorry, no articles match your search.' : 'عفواً، لا توجد مقالات تطابق بحثك.'}</p>
            </div>
          )}

        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/10 to-cta/10 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-text-main mb-6 text-center">
                {isEn ? 'Knowledge is the Beginning.. Proper Execution is What Matters' : 'المعرفة هي البداية.. والتنفيذ الصحيح هو الأهم'}
            </h2>
            <p className="text-xl text-text-sub mb-10 max-w-3xl mx-auto text-center" dir="auto">
                {isEn ? 'Now that you know what your facility needs, let us help you execute it with the best quality and price.' : 'بعد أن عرفت ما تحتاجه منشأتك، دعنا نساعدك في تنفيذه بأفضل جودة وسعر.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to={getLocalizedPath('/contact')}>
                    <Button primary className="text-lg px-10 py-3 shadow-lg shadow-cta/20">
                        {isEn ? 'Request Quotes' : 'اطلب عروض أسعار'}
                    </Button>
                </Link>
                <Link to={getLocalizedPath('/contact')}>
                    <Button className="text-lg px-10 py-3">
                        {isEn ? 'Talk to a Consultant for Free' : 'تحدث مع مستشار مجاناً'}
                    </Button>
                </Link>
            </div>
        </div>
      </section>

      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <div 
                className="absolute inset-0 bg-dark/90 backdrop-blur-md transition-opacity" 
                onClick={() => setSelectedPost(null)}
            ></div>

            <div className="bg-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl relative z-10 animate-slideUp no-scrollbar">
                
                <button 
                    onClick={() => setSelectedPost(null)}
                    className="absolute top-4 ltr:right-4 rtl:left-4 bg-dark/50 hover:bg-cta text-white p-2 rounded-full transition-colors z-20"
                >
                    <X size={24} />
                </button>

                <div className="h-64 md:h-80 w-full relative">
                    <img 
                        src={selectedPost.image} 
                        alt={selectedPost.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                    <span className="absolute bottom-6 ltr:left-6 rtl:right-6 bg-cta text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg">
                        {selectedPost.category}
                    </span>
                </div>

                <div className="p-8 md:p-12 ltr:text-left rtl:text-right">
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight ltr:text-left rtl:text-right w-full">
                        {selectedPost.title}
                    </h2>
                    
                    <div className="flex items-center gap-4 text-text-sub text-sm mb-8 border-b border-white/5 pb-6 ltr:flex-row rtl:flex-row">
                        <span className="flex items-center gap-2"><Clock size={16} className="text-primary"/> {selectedPost.readTime}</span>
                        <span>•</span>
                        <span>{isEn ? 'By Editorial Team' : 'بواسطة فريق التحرير'}</span>
                    </div>

                    <div 
                        className="prose prose-invert prose-lg max-w-none text-text-sub leading-loose ltr:text-left rtl:text-right"
                        dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                    ></div>

                    <div className="mt-12 p-8 bg-dark rounded-2xl border border-white/5 text-center">
                        <h3 className="text-xl font-bold text-white mb-4 text-center">
                            {isEn ? 'Need help applying this in your facility?' : 'هل تحتاج مساعدة في تطبيق هذا في منشأتك؟'}
                        </h3>
                        <Link to={getLocalizedPath('/contact')} onClick={() => setSelectedPost(null)}>
                            <Button primary>
                                {isEn ? 'Contact Us for a Free Consultation' : 'تواصل معنا لاستشارة مجانية'}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      )}

    </div>
  );
};

export default BlogPage;