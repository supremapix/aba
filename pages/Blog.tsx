import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { BlogPost } from '../types';

const SAMPLE_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Inauguração da Nova Casa República III",
    excerpt: "Graças ao apoio dos nossos parceiros, conseguimos abrir mais 6 vagas para jovens mulheres.",
    date: "15 Out, 2023",
    category: "Conquistas",
    image: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Workshop de Empregabilidade: Sucesso Total",
    excerpt: "Voluntários de RH realizaram simulações de entrevista com nossos jovens no último sábado.",
    date: "02 Set, 2023",
    category: "Atividades",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Prestação de Contas - 1º Semestre",
    excerpt: "Confira onde cada centavo da sua doação foi investido nos primeiros seis meses do ano.",
    date: "20 Ago, 2023",
    category: "Transparência",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Notícias e Atualizações</h1>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAMPLE_POSTS.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className="relative h-48">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-aba-blue text-white text-xs px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                  <Button variant="outline" size="sm" className="w-full mt-auto">Ler Mais</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;