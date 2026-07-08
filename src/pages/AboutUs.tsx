import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#0c0c0b] text-[#f0ede8] font-sans pt-[80px] flex flex-col justify-between selection:bg-[#e8541a] selection:text-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12 flex-1">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About SankeyLoop</h1>
        <p className="text-[#a09d98] text-lg mb-8 pb-8 border-b border-[#272521] leading-relaxed">
          Empowering engineers, analysts, and researchers with modern, high-precision flow visualization.
        </p>
        
        <div className="space-y-10 text-[#d0cdc8] leading-relaxed text-base">
          <section>
            <h2 className="text-2xl font-semibold text-[#f0ede8] mb-4">Our Mission</h2>
            <p className="mb-4">
              SankeyLoop was created with a single, uncompromising goal: to make generating complex, aesthetically stunning Sankey diagrams as intuitive as writing plain text, while maintaining the mathematical precision required for serious engineering and financial analysis.
            </p>
            <p>
              Traditional diagramming tools often force users into tedious manual drag-and-drop alignment or require writing verbose, complex D3 code from scratch. SankeyLoop bridges that gap by offering a lightning-fast, text-driven interface combined with real-time interactive customization and high-resolution video export capabilities.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-[#1a1917] p-6 rounded-xl border border-[#272521]">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-semibold text-[#f0ede8] mb-2">100% Client-Side</h3>
              <p className="text-sm text-[#a09d98]">Your data never leaves your browser. Zero latency, complete data privacy, and instant visual feedback.</p>
            </div>
            <div className="bg-[#1a1917] p-6 rounded-xl border border-[#272521]">
              <div className="text-2xl mb-3">🔬</div>
              <h3 className="font-semibold text-[#f0ede8] mb-2">Engineering Grade</h3>
              <p className="text-sm text-[#a09d98]">Designed for strict flow conservation, thermodynamic heat balance, and multi-stage mass balance tracking.</p>
            </div>
            <div className="bg-[#1a1917] p-6 rounded-xl border border-[#272521]">
              <div className="text-2xl mb-3">🎬</div>
              <h3 className="font-semibold text-[#f0ede8] mb-2">Video &amp; GIF Export</h3>
              <p className="text-sm text-[#a09d98]">Export crisp static PNGs, scalable vectors (SVG), or dynamic transition MP4 animations for presentations.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#f0ede8] mb-4">Why Open Visualization Matters</h2>
            <p className="mb-4">
              Whether you are mapping national greenhouse gas emissions, auditing corporate cash flows, or balancing a chemical refining process, understanding *where things go* is critical to identifying inefficiencies.
            </p>
            <p>
              By offering free educational tutorials in our <Link to="/learn" className="text-[#ff813f] underline hover:text-white font-medium">Learning Hub</Link> and maintaining a robust, accessible editor, we hope to contribute to a more transparent, data-literate world.
            </p>
          </section>

          <section className="bg-[#161513] border border-[#272521] p-8 rounded-2xl">
            <h2 className="text-xl font-semibold text-[#f0ede8] mb-3">Support &amp; Community</h2>
            <p className="text-[#a09d98] mb-6">
              SankeyLoop is continuously maintained and improved. If you find this tool helpful for your research, corporate presentations, or academic papers, consider supporting the creator or reaching out with feature ideas!
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://buymeacoffee.com/tsanz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#ff813f] hover:bg-[#ff6c24] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline inline-block shadow-md"
              >
                ☕ Buy Me a Coffee
              </a>
              <Link 
                to="/contact"
                className="bg-transparent border border-[#333128] hover:border-[#5a5754] text-[#f0ede8] px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline inline-block"
              >
                Get in Touch →
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
