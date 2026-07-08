import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getGuideBySlug, allGuides } from './guides';

export default function GuideDetail() {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getGuideBySlug(slug) : undefined;

  if (!guide) {
    return (
      <div className="min-h-screen bg-[#0c0c0b] text-[#f0ede8] font-sans pt-[100px] flex flex-col justify-between">
        <Header />
        <div className="max-w-3xl mx-auto px-6 py-20 text-center flex-1">
          <h1 className="text-3xl font-bold mb-4">Guide Not Found</h1>
          <p className="text-[#a09d98] mb-8">The tutorial or reference article you are looking for does not exist or has been moved.</p>
          <Link to="/learn" className="bg-[#e8541a] text-white px-6 py-3 rounded-lg font-semibold text-sm no-underline inline-block">
            ← Return to Learning Hub
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const ContentComponent = guide.content;
  const otherGuides = allGuides.filter(g => g.id !== guide.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#0c0c0b] text-[#f0ede8] font-sans pt-[80px] flex flex-col justify-between selection:bg-[#e8541a] selection:text-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12 flex-1 w-full">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link to="/learn" className="text-xs md:text-sm font-semibold text-[#ff813f] hover:text-white transition-colors no-underline inline-flex items-center gap-1">
            <span>←</span> Back to All Tutorials &amp; Guides
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-[#272521]">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#1a1917] border border-[#333128] text-[#ff813f] text-xs font-semibold px-2.5 py-1 rounded">
              {guide.category}
            </span>
            <span className="text-xs text-[#8a8783] font-medium">
              {guide.readTime} • Published {guide.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#f0ede8] mb-4 leading-tight">
            {guide.title}
          </h1>

          <p className="text-lg md:text-xl text-[#a09d98] leading-relaxed mb-6">
            {guide.subtitle}
          </p>

          <div className="flex items-center gap-3 pt-4 border-t border-[#1c1b18] text-xs text-[#8a8783]">
            <div className="w-8 h-8 rounded-full bg-[#272521] flex items-center justify-center text-sm font-bold text-[#f0ede8]">
              {guide.author.name.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-[#f0ede8]">{guide.author.name}</div>
              <div>{guide.author.role}</div>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-invert max-w-none mb-16">
          <ContentComponent />
        </article>

        {/* Related Guides */}
        <section className="pt-12 border-t border-[#272521]">
          <h3 className="text-xl font-bold text-[#f0ede8] mb-6">Explore Related Tutorials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherGuides.map(other => (
              <Link
                key={other.id}
                to={`/learn/${other.slug}`}
                className="bg-[#161513] border border-[#272521] hover:border-[#4a4742] p-6 rounded-xl transition-all no-underline group block"
              >
                <div className="text-xs text-[#ff813f] font-semibold mb-2">{other.category}</div>
                <h4 className="font-bold text-[#f0ede8] text-lg mb-2 group-hover:text-[#ff813f] transition-colors line-clamp-2">
                  {other.title}
                </h4>
                <p className="text-xs text-[#a09d98] line-clamp-2">{other.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
