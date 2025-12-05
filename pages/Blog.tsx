import React, { useState, useMemo } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Calendar, Filter } from 'lucide-react';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  // Extract unique categories from posts
  const categories = useMemo(() => {
    const allCats = BLOG_POSTS.map(post => post.category);
    return ['Todos', ...new Set(allCats)];
  }, []);

  // Filter posts based on selection
  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'Todos') return BLOG_POSTS;
    return BLOG_POSTS.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="pt-20">
      <SEO 
        title="Blog e Notícias" 
        description="Fique por dentro das novidades, eventos, prestação de contas e histórias de transformação da Associação Barnabé."
      />
      
      {/* Header */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Notícias e Atualizações" subtitle="Blog da ABA" centered={false} />
          <p className="text-gray-600 max-w-2xl text-lg mb-8">
            Acompanhe o dia a dia da república, nossas conquistas, eventos e a transparência de nossas ações em prol da juventude.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="flex items-center text-gray-500 mr-2 text-sm font-semibold uppercase tracking-wide">
              <Filter className="w-4 h-4 mr-1" /> Filtrar por:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-aba-blue text-white shadow-md transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-16 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <ScrollAnimation key={post.id} delay={index * 100}>
                  <Link to={`/blog/${post.slug}`} className="block h-full group">
                    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                          loading="lazy"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-aba-blue text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="text-sm text-gray-500 mb-3 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <time dateTime={post.isoDate}>{post.date}</time>
                        </div>
                        <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-aba-blue transition-colors leading-tight">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-6 flex-grow line-clamp-3 text-sm leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto">
                          <span className="text-aba-blue font-semibold text-sm group-hover:underline decoration-2 underline-offset-4">
                            Ler Matéria Completa &rarr;
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Nenhuma publicação encontrada nesta categoria.</p>
              <button 
                onClick={() => setSelectedCategory('Todos')}
                className="mt-4 text-aba-blue hover:underline font-semibold"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;