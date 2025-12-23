import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_BLOG_POSTS } from '../constants';
import { ArrowRight, Rss, Calendar, Edit } from 'lucide-react';
import SEO from '../components/SEO';

const Blog: React.FC = () => {
  const [featuredPost, ...otherPosts] = MOCK_BLOG_POSTS;

  return (
    <div className="bg-emphz-navy text-white">
      <SEO
        title="Technical Insights | Emphz Blog"
        description="Explore the latest in GRP technology, project highlights, and engineering best practices from the Emphz team."
      />
      {/* Hero */}
      <div className="relative py-24 md:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emphz-teal/10 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <Rss size={12} className="text-emphz-teal" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 font-display">Technical Insights</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-display tracking-tight leading-none">
            From the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emphz-teal to-cyan-400">Engineering Desk</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Project highlights, material science deep-dives, and best practices for deploying GRP solutions in demanding environments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Featured Post */}
        <div className="mb-16 md:mb-24">
          <Link to={`/blog/${featuredPost.slug}`} className="group block md:grid grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10 mb-6 md:mb-0">
              <img src={featuredPost.imageUrl} alt={featuredPost.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div>
              <p className="text-xs text-emphz-teal font-bold uppercase tracking-widest mb-3">{featuredPost.category}</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white group-hover:text-emphz-teal transition-colors mb-4">{featuredPost.title}</h2>
              <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">{featuredPost.summary}</p>
              <div className="flex items-center text-sm font-bold text-emphz-teal group-hover:text-white transition-colors">
                Read Full Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-emphz-teal/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emphz-teal/10">
              <div className="relative h-56 overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <p className="text-xs text-emphz-teal font-bold uppercase tracking-wider mb-2">{post.category}</p>
                <h3 className="text-lg font-bold text-white group-hover:text-emphz-teal transition-colors mb-3 h-14">{post.title}</h3>
                <div className="flex items-center text-xs text-gray-500 font-mono">
                  <Calendar size={12} className="mr-2" /> {post.date}
                  <span className="mx-2">|</span>
                  <Edit size={12} className="mr-2" /> {post.author}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
