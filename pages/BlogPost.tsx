import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar, Edit, Clock, Linkedin, Twitter, Mail, Copy } from 'lucide-react';
import NotFound from './NotFound';
import SEO from '../components/SEO';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = MOCK_BLOG_POSTS.find(p => p.slug === slug);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!post) {
    return <NotFound />;
  }

  const encodedUrl = encodeURIComponent(window.location.href);
  const encodedText = encodeURIComponent(`${post.title} by Emphz`);

  return (
    <div className="bg-white text-emphz-navy font-sans">
      <SEO
        title={`${post.title} | Emphz Blog`}
        description={post.summary}
        image={post.imageUrl}
        type="article"
      />
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] bg-emphz-navy">
        <img src={post.imageUrl} alt={post.title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-emphz-navy via-emphz-navy/70 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-16">
          <p className="text-sm font-bold text-emphz-teal uppercase tracking-widest mb-4">{post.category}</p>
          <h1 className="text-4xl md:text-6xl font-black text-white font-display leading-tight">{post.title}</h1>
          <div className="flex items-center text-gray-500 mt-6 text-xs font-mono gap-6">
            <div className="flex items-center gap-2"><Calendar size={14} /> <span>{post.date}</span></div>
            <div className="flex items-center gap-2"><Edit size={14} /> <span>{post.author}</span></div>
            <div className="flex items-center gap-2"><Clock size={14} /> <span>5 min read</span></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Back Button & Share */}
          <div className="md:col-span-2">
            <div className="sticky top-28">
              <button onClick={() => navigate(-1)} className="flex items-center text-sm text-gray-500 hover:text-emphz-navy font-bold group mb-8">
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
              <div className="space-y-3">
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-blue-600 hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-sky-500 hover:text-white transition-colors">
                  <Twitter size={18} />
                </a>
                <a href={`mailto:?subject=${encodedText}&body=Read this article: ${encodedUrl}`} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-700 hover:text-white transition-colors">
                  <Mail size={18} />
                </a>
                <button onClick={handleCopy} className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors ${copied ? 'bg-green-500 text-white' : 'hover:bg-gray-700 hover:text-white'}`}>
                  <Copy size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Article */}
          <article className="md:col-span-10 prose prose-lg max-w-none prose-h2:font-display prose-h2:text-emphz-navy prose-h2:font-bold prose-p:text-gray-600 prose-p:font-light prose-strong:text-emphz-navy prose-a:text-emphz-teal hover:prose-a:underline">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        </div>
      </div>

      {/* "More from the blog" section */}
      <div className="bg-gray-50 py-16 md:py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-emphz-navy text-center mb-12 font-display">More from the Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3).map(p => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-52 overflow-hidden">
                  <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-emphz-teal font-bold uppercase mb-2">{p.category}</p>
                  <h3 className="text-base font-bold text-emphz-navy leading-tight h-12 line-clamp-2">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;