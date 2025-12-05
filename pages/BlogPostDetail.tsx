import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import SEO from '../components/SEO';
import Button from '../components/Button';
import ScrollAnimation from '../components/ScrollAnimation';

const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <SEO title="Artigo não encontrado" description="O artigo que você procura não existe." />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Artigo não encontrado</h2>
        <Link to="/blog">
          <Button>Voltar para o Blog</Button>
        </Link>
      </div>
    );
  }

  // Schema.org Article Markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://associacaobarnabe.org/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": "Associação Barnabé",
      "url": "https://associacaobarnabe.org"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Associação Barnabé",
      "logo": {
        "@type": "ImageObject",
        "url": "https://associacaobarnabe.org/logo.png"
      }
    },
    "datePublished": post.isoDate,
    "dateModified": post.isoDate
  };

  return (
    <div className="pt-20">
      <SEO 
        title={post.title} 
        description={post.excerpt}
        image={post.image}
        schema={articleSchema}
        type="article"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/blog"
          className="inline-flex items-center text-gray-600 hover:text-aba-blue transition-colors mb-8 font-medium group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Voltar para notícias
        </Link>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden" itemScope itemType="https://schema.org/Article">
           <header className="h-64 md:h-96 w-full relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                itemProp="image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white max-w-3xl">
                 <span className="bg-aba-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3 inline-block">
                    {post.category}
                 </span>
                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight text-shadow-lg" itemProp="headline">
                   {post.title}
                 </h1>
              </div>
           </header>

           <div className="p-8 md:p-12">
             <div className="flex flex-wrap items-center text-gray-500 text-sm mb-8 border-b border-gray-100 pb-8 gap-6">
               <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <time dateTime={post.isoDate} itemProp="datePublished">{post.date}</time>
               </div>
               <div className="flex items-center" itemProp="author" itemScope itemType="https://schema.org/Organization">
                  <User className="h-4 w-4 mr-2" />
                  <span itemProp="name">Equipe ABA</span>
               </div>
               <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  3 min de leitura
               </div>
             </div>

             <ScrollAnimation>
               <div 
                  className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-sans"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  itemProp="articleBody"
               />
             </ScrollAnimation>

             <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">Compartilhe essa história</h4>
                <div className="flex gap-4">
                   <Button 
                     size="sm" 
                     className="bg-green-500 hover:bg-green-600 border-none"
                     onClick={() => window.open(`https://wa.me/?text=Olha que incrível essa notícia da ABA: ${window.location.href}`, '_blank')}
                   >
                     <Share2 className="h-4 w-4 mr-2" />
                     WhatsApp
                   </Button>
                   <Link to="/blog">
                    <Button 
                      size="sm" 
                      variant="outline"
                    >
                      Ler mais notícias
                    </Button>
                   </Link>
                </div>
             </div>
           </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostDetail;