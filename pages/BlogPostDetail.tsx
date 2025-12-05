import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Linkedin, Twitter, MessageSquare, Send, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import SEO from '../components/SEO';
import Button from '../components/Button';
import ScrollAnimation from '../components/ScrollAnimation';
import { Comment } from '../types';

const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find current post and its index
  const postIndex = BLOG_POSTS.findIndex(p => p.slug === slug);
  const post = BLOG_POSTS[postIndex];
  
  // Calculate Previous and Next posts
  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

  // Comments State
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, author: "Maria Oliveira", date: "2023-10-16", content: "Que notícia maravilhosa! Parabéns pelo trabalho incrível que vocês fazem." },
    { id: 2, author: "João Santos", date: "2023-10-17", content: "Como faço para ser voluntário nessas ações?" }
  ]);
  const [newCommentName, setNewCommentName] = useState("");
  const [newCommentText, setNewCommentText] = useState("");

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

  // Social Sharing URLs
  const currentUrl = window.location.href;
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;

    const newCommentObj: Comment = {
      id: Date.now(),
      author: newCommentName,
      date: new Date().toISOString().split('T')[0],
      content: newCommentText
    };

    setComments([...comments, newCommentObj]);
    setNewCommentName("");
    setNewCommentText("");
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

             {/* Social Sharing Section */}
             <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Share2 className="h-5 w-5 mr-2 text-aba-orange" />
                  Compartilhe essa história
                </h4>
                <div className="flex gap-3 flex-wrap">
                   <a 
                     href={shareLinks.facebook} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-[#1877F2] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center font-medium text-sm"
                   >
                     <Facebook className="h-4 w-4 mr-2" /> Facebook
                   </a>
                   <a 
                     href={shareLinks.twitter} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-[#1DA1F2] text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors flex items-center font-medium text-sm"
                   >
                     <Twitter className="h-4 w-4 mr-2" /> Twitter
                   </a>
                   <a 
                     href={shareLinks.linkedin} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-[#0A66C2] text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center font-medium text-sm"
                   >
                     <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                   </a>
                </div>
             </div>

             {/* Previous/Next Navigation */}
             <div className="mt-12 pt-8 border-t border-gray-100 grid md:grid-cols-2 gap-4">
                {prevPost ? (
                  <Link to={`/blog/${prevPost.slug}`} className="group p-4 rounded-lg border border-gray-100 hover:border-aba-blue hover:shadow-md transition-all">
                    <span className="text-xs text-gray-500 uppercase tracking-wide mb-1 block group-hover:text-aba-blue">Anterior</span>
                    <div className="flex items-center text-gray-800 font-bold group-hover:text-aba-blue">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      {prevPost.title}
                    </div>
                  </Link>
                ) : <div />} {/* Empty div to keep grid layout if no prev */}
                
                {nextPost ? (
                  <Link to={`/blog/${nextPost.slug}`} className="group p-4 rounded-lg border border-gray-100 hover:border-aba-blue hover:shadow-md transition-all text-right">
                    <span className="text-xs text-gray-500 uppercase tracking-wide mb-1 block group-hover:text-aba-blue">Próximo</span>
                    <div className="flex items-center justify-end text-gray-800 font-bold group-hover:text-aba-blue">
                      {nextPost.title}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </Link>
                ) : <div />}
             </div>
           </div>
        </article>

        {/* Comments Section */}
        <section className="mt-12 bg-gray-50 rounded-2xl p-8 md:p-12 shadow-inner">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <MessageSquare className="h-6 w-6 mr-3 text-aba-blue" />
            Comentários ({comments.length})
          </h3>

          {/* Comment List */}
          <div className="space-y-6 mb-10">
            {comments.length === 0 ? (
              <p className="text-gray-500 italic">Seja o primeiro a comentar!</p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-aba-blue font-bold mr-3">
                        {comment.author.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900">{comment.author}</h5>
                        <span className="text-xs text-gray-500">{comment.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 ml-13">{comment.content}</p>
                </div>
              ))
            )}
          </div>

          {/* Comment Form */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="font-bold text-lg mb-4 text-gray-800">Deixe seu comentário</h4>
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
                <input
                  type="text"
                  id="name"
                  value={newCommentName}
                  onChange={(e) => setNewCommentName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aba-blue focus:outline-none"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="comment"
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aba-blue focus:outline-none"
                  placeholder="Escreva seu comentário aqui..."
                  required
                ></textarea>
              </div>
              <div className="text-right">
                <Button type="submit" size="sm">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Comentário
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPostDetail;