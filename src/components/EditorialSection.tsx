import React from 'react';
import { Link } from 'react-router-dom';

export default function EditorialSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#0f0e0d] border-t border-[#272521]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-[11px] font-semibold tracking-widest uppercase text-[#e8541a] mb-3">
          Knowledge &amp; Application
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-[#f0ede8] mb-8 leading-tight">
          Why Visualize Flows? The Economics of Conservation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-[#a09d98] leading-relaxed text-sm md:text-base">
          <div className="bg-[#1a1917] p-6 md:p-8 rounded-2xl border border-[#272521] flex flex-col justify-between">
            <div>
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-lg font-bold text-[#f0ede8] mb-3">Thermodynamic Heat Balance</h3>
              <p className="mb-4 text-sm">
                In thermal power generation, chemical refining, and HVAC engineering, over 50% of input fuel energy can be lost as waste heat. A Sankey diagram transforms complex enthalpy equations into a visual map of exergy destruction, making thermal inefficiencies immediately apparent to plant engineers.
              </p>
            </div>
            <Link 
              to="/learn/energy-efficiency-heat-balance" 
              className="text-xs font-semibold text-[#ff813f] hover:text-white transition-colors no-underline pt-4 border-t border-[#272521] inline-flex items-center gap-1 mt-4"
            >
              <span>Read Engineering Guide</span>
              <span>→</span>
            </Link>
          </div>

          <div className="bg-[#1a1917] p-6 md:p-8 rounded-2xl border border-[#272521] flex flex-col justify-between">
            <div>
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-lg font-bold text-[#f0ede8] mb-3">Corporate P&amp;L &amp; Cash Flows</h3>
              <p className="mb-4 text-sm">
                Standard double-entry spreadsheets obscure the macro-level story of where company revenue evaporates. By modeling GAAP income statements as a waterfall, CFOs and board members can instantly grasp gross margins, R&amp;D overhead ratios, and net profit retention.
              </p>
            </div>
            <Link 
              to="/learn/financial-cash-flow-budgeting" 
              className="text-xs font-semibold text-[#ff813f] hover:text-white transition-colors no-underline pt-4 border-t border-[#272521] inline-flex items-center gap-1 mt-4"
            >
              <span>Read Financial Guide</span>
              <span>→</span>
            </Link>
          </div>

          <div className="bg-[#1a1917] p-6 md:p-8 rounded-2xl border border-[#272521] flex flex-col justify-between">
            <div>
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-[#f0ede8] mb-3">SaaS Cohorts &amp; Funnels</h3>
              <p className="mb-4 text-sm">
                Digital customer conversion is rarely a linear path. Mapping Monthly Recurring Revenue (MRR) expansion, contraction, and churn across customer cohorts allows product managers to pinpoint exact drop-off bottlenecks in user onboarding.
              </p>
            </div>
            <Link 
              to="/learn/ultimate-guide-sankey-diagrams" 
              className="text-xs font-semibold text-[#ff813f] hover:text-white transition-colors no-underline pt-4 border-t border-[#272521] inline-flex items-center gap-1 mt-4"
            >
              <span>Explore Fundamentals Guide</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 p-8 bg-[#161513] border border-[#333128] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-[#f0ede8] mb-1">Looking for syntax rules or formatting tips?</h4>
            <p className="text-sm text-[#a09d98]">Our comprehensive Learning Hub features over 4,000 words of technical documentation and tutorials.</p>
          </div>
          <Link
            to="/learn"
            className="bg-[#e8541a] hover:bg-[#d44812] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all whitespace-nowrap no-underline shadow-md"
          >
            Visit Learning Hub →
          </Link>
        </div>
      </div>
    </section>
  );
}
