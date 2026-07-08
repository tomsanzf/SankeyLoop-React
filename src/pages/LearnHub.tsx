import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { allGuides } from './guides';
import { Link } from 'react-router-dom';

export default function LearnHub() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Fundamentals', 'Engineering', 'Finance', 'Documentation'];

  const filteredGuides = selectedCategory === 'All' 
    ? allGuides 
    : allGuides.filter(g => g.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0c0c0b] text-[#f0ede8] font-sans pt-[80px] flex flex-col justify-between selection:bg-[#e8541a] selection:text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex-1 w-full">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-[#1a1917] border border-[#333128] text-[#ff813f] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Knowledge Base &amp; Tutorials
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            The SankeyLoop Learning Hub
          </h1>
          <p className="text-base md:text-lg text-[#a09d98] leading-relaxed">
            Master the art and science of quantitative flow modeling. Comprehensive guides on thermodynamic heat balances, corporate financial accounting, and visualization best practices.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#e8541a] text-white shadow-md'
                  : 'bg-[#161513] border border-[#272521] text-[#a09d98] hover:text-[#f0ede8] hover:border-[#333128]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredGuides.map((guide) => (
            <Link
              key={guide.id}
              to={`/learn/${guide.slug}`}
              className="bg-[#161513] border border-[#272521] hover:border-[#4a4742] rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all hover:translate-y-[-2px] hover:shadow-xl no-underline group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="bg-[#1a1917] border border-[#333128] text-[#ff813f] text-xs font-semibold px-2.5 py-1 rounded">
                    {guide.category}
                  </span>
                  <span className="text-xs text-[#8a8783] font-medium">
                    {guide.readTime} • {guide.date}
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-[#f0ede8] mb-3 group-hover:text-[#ff813f] transition-colors leading-snug">
                  {guide.title}
                </h2>

                <p className="text-sm text-[#a09d98] mb-6 leading-relaxed">
                  {guide.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-[#272521] flex items-center justify-between text-xs font-semibold text-[#e8541a]">
                <span>Read Full Guide &amp; View Code Scripts</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#1a1917] to-[#161513] border border-[#272521] rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#f0ede8] mb-3">
            Ready to Visualize Your Own Data?
          </h3>
          <p className="text-[#a09d98] text-sm md:text-base mb-6 max-w-xl mx-auto">
            Take what you have learned and jump straight into our interactive editor. No software installation required, 100% client-side privacy.
          </p>
          <Link
            to="/app"
            className="inline-block bg-[#e8541a] hover:bg-[#d44812] text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg hover:shadow-orange-900/20 no-underline"
          >
            Launch SankeyLoop Editor →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
