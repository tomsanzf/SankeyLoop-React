import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is SankeyLoop and how does it work?',
    a: 'SankeyLoop is a modern, interactive web application designed for generating, formatting, and exporting high-precision Sankey flow diagrams. Unlike traditional tools that require writing complex D3 programming code or tedious manual dragging, SankeyLoop lets you describe your data flows using simple natural text (e.g., "Source [Amount] Target"). The rendering engine calculates optimal node positioning and link paths in real time.'
  },
  {
    q: 'How does SankeyLoop ensure data privacy and security?',
    a: 'SankeyLoop operates entirely client-side within your web browser. When you enter financial numbers, corporate budgets, or proprietary engineering measurements into the flow table, your data is never transmitted to or stored on our cloud servers. All calculations and layout saves are stored locally on your machine using HTML5 localStorage.'
  },
  {
    q: 'Can I export diagrams for presentations or academic publications?',
    a: 'Yes! You can export your completed diagrams as high-resolution raster images (up to 3x scaled PNGs for crisp PowerPoint slide decks and PDF reports), scalable vector graphics (SVG for lossless editing in Adobe Illustrator or Figma), or smooth dynamic video transition animations (MP4/GIF) for presentations and social media storytelling.'
  },
  {
    q: 'How do I handle negative values, cyclic loops, or zero-flow lines?',
    a: 'SankeyLoop includes advanced flow logic. If you input a negative value, the engine automatically reverses the arrow direction—ideal for modeling return loops or heat regeneration. Zero-value flows render as faint ghost hairlines, ensuring your structural system diagram remains intact even when certain pathways are inactive.'
  },
  {
    q: 'Is SankeyLoop free to use, and how can I support its development?',
    a: 'SankeyLoop is 100% free to use for personal, academic, and commercial purposes without mandatory watermarks or subscription paywalls. If you find the tool valuable for your work or research, you can support continuous server hosting and open-source feature development by clicking the "☕ Buy me a coffee" button in the top navigation bar!'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0c0c0b] border-t border-[#272521]">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-[#ff813f] mb-2">
            Got Questions?
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-[#f0ede8] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#a09d98] text-sm md:text-base">
            Everything you need to know about Sankey diagram modeling, privacy, and exports.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-[#161513] border border-[#272521] rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 bg-transparent border-0 cursor-pointer text-[#f0ede8] hover:text-[#ff813f] transition-colors"
                >
                  <span className="font-semibold text-base md:text-lg">{faq.q}</span>
                  <span className="text-xl font-bold text-[#ff813f] shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-[#a09d98] text-sm md:text-base leading-relaxed border-t border-[#272521]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
