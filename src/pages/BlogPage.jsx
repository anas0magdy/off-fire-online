import React, { useState } from 'react';
import { ChevronLeft, Search, Clock, X } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES, BLOG_TAGS } from '../data/content';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for Modal
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.categoryId === activeCategory;
    const matchesSearch = post.title.includes(searchQuery) || post.excerpt.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animate-fadeIn pt-20 lg:pt-24 relative">
      
      {/* 1. Hero Section */}
      <div className="bg-dark py-16 lg:py-24 text-center px-4 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary rounded-full blur-[120px]"></div>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-text-main mb-6 relative z-10">المرجع الرقمي الأول للأمن والسلامة</h1>
        <p className="text-text-sub max-w-2xl mx-auto mb-10 text-lg relative z-10 leading-relaxed">
          تعرف على اشتراطات الدفاع المدني، الكود السعودي، وأنظمة المكافحة.. مشروحة ببساطة لمديري المنشآت.
        </p>
        
        <div className="max-w-xl mx-auto relative z-10 mb-8">
            <input 
                type="text" 
                placeholder="ابحث عن موضوع (مثال: شروط المطاعم، عقود الصيانة)..." 
                className="w-full bg-card border border-white/10 text-white rounded-full py-4 px-6 pr-14 focus:outline-none focus:border-primary transition-colors text-base shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-5 top-4 text-text-sub" size={24} />
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 relative z-10">
            {BLOG_TAGS.map(tag => (
                <span key={tag} className="bg-white/5 text-primary px-4 py-1.5 rounded-full text-sm cursor-pointer hover:bg-white/10 transition-colors">
                    {tag}
                </span>
            ))}
        </div>
      </div>

      {/* 2. Content Section */}
      <section className="py-16 lg:py-24 bg-darker">
        <div className="container mx-auto px-6">
          
          {/* Categories */}
          <div className="flex overflow-x-auto pb-4 mb-12 gap-3 no-scrollbar lg:justify-center">
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

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                <div key={post.id} className="bg-card rounded-3xl overflow-hidden border border-white/5 group cursor-pointer hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-xl flex flex-col h-full">
                    <div className="h-56 overflow-hidden relative">
                        <span className="absolute top-4 right-4 bg-cta/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg z-10 shadow-lg border border-white/10">
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
                    
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 text-text-sub text-xs mb-4">
                            <Clock size={14} className="text-primary"/>
                            <span>وقت القراءة: {post.readTime}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-4 leading-relaxed group-hover:text-primary transition-colors">
                            {post.title}
                        </h3>
                        
                        <p className="text-text-sub text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                            {post.excerpt}
                        </p>
                        
                        <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                            <button 
                                onClick={() => setSelectedPost(post)}
                                className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer"
                            >
                                اقرأ المقال كاملاً <ChevronLeft size={16} />
                            </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
          ) : (
            <div className="text-center py-20 text-text-sub">
                <p className="text-xl">عفواً، لا توجد مقالات تطابق بحثك.</p>
            </div>
          )}

        </div>
      </section>

      {/* 3. Footer CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-cta/10 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-text-main mb-6">المعرفة هي البداية.. والتنفيذ الصحيح هو الأهم</h2>
            <p className="text-xl text-text-sub mb-10 max-w-3xl mx-auto">
                بعد أن عرفت ما تحتاجه منشأتك، دعنا نساعدك في تنفيذه بأفضل جودة وسعر.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact"><Button primary className="text-lg px-10 py-3 shadow-lg shadow-cta/20">اطلب عروض أسعار</Button></Link>
                <Link to="/contact"><Button className="text-lg px-10 py-3">تحدث مع مستشار مجاناً</Button></Link>
            </div>
        </div>
      </section>

      {/* === Article Modal (النافذة المنبثقة) === */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* الخلفية الشفافة */}
            <div 
                className="absolute inset-0 bg-dark/90 backdrop-blur-md transition-opacity" 
                onClick={() => setSelectedPost(null)}
            ></div>

            {/* محتوى المقال */}
            <div className="bg-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl relative z-10 animate-slideUp no-scrollbar">
                
                {/* زر الإغلاق */}
                <button 
                    onClick={() => setSelectedPost(null)}
                    className="absolute top-4 left-4 bg-dark/50 hover:bg-cta text-white p-2 rounded-full transition-colors z-20"
                >
                    <X size={24} />
                </button>

                {/* صورة المقال */}
                <div className="h-64 md:h-80 w-full relative">
                    <img 
                        src={selectedPost.image} 
                        alt={selectedPost.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                    <span className="absolute bottom-6 right-6 bg-cta text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg">
                        {selectedPost.category}
                    </span>
                </div>

                {/* نص المقال */}
                <div className="p-8 md:p-12">
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight">
                        {selectedPost.title}
                    </h2>
                    
                    <div className="flex items-center gap-4 text-text-sub text-sm mb-8 border-b border-white/5 pb-6">
                        <span className="flex items-center gap-2"><Clock size={16} className="text-primary"/> {selectedPost.readTime}</span>
                        <span>•</span>
                        <span>بواسطة فريق التحرير</span>
                    </div>

                    {/* المحتوى الديناميكي (HTML) */}
                    <div 
                        className="prose prose-invert prose-lg max-w-none text-text-sub leading-loose"
                        dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                    ></div>

                    {/* CTA داخل المقال */}
                    <div className="mt-12 p-8 bg-dark rounded-2xl border border-white/5 text-center">
                        <h3 className="text-xl font-bold text-white mb-4">هل تحتاج مساعدة في تطبيق هذا في منشأتك؟</h3>
                        <Link to="/contact" onClick={() => setSelectedPost(null)}>
                            <Button primary>تواصل معنا لاستشارة مجانية</Button>
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