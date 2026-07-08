import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0b] text-[#a09d98] border-t border-[#272521] py-12 px-6 md:px-12 font-sans selection:bg-[#e8541a] selection:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {/* Brand Column */}
        <div className="lg:col-span-2 pr-4">
          <Link to="/" className="text-xl font-semibold tracking-tight text-[#f0ede8] no-underline inline-block mb-3">
            Sankey<span className="text-[#e8541a]">Loop</span>
          </Link>
          <p className="text-[13px] leading-relaxed text-[#8a8783] mb-4 max-w-sm">
            The modern, interactive web application for visualizing complex energy flows, thermodynamic heat balances, material distribution, and financial budgets. Built with precision for engineers, analysts, and data professionals.
          </p>
          <div className="text-[12px] text-[#5a5754]">
            © {new Date().getFullYear()} SankeyLoop. All rights reserved.
          </div>
        </div>

        {/* Tool Column */}
        <div>
          <h4 className="text-[13px] font-semibold text-[#f0ede8] uppercase tracking-wider mb-3">
            Application
          </h4>
          <ul className="space-y-2 list-none p-0 m-0 text-[13px]">
            <li>
              <Link to="/app" className="text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline">
                Open Sankey Editor
              </Link>
            </li>
            <li>
              <a href="/#examples" className="text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline">
                Sample Diagrams
              </a>
            </li>
            <li>
              <a href="/#features" className="text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline">
                Key Features
              </a>
            </li>
            <li>
              <a 
                href="https://buymeacoffee.com/tsanz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#ff813f] hover:text-[#ff6c24] transition-colors no-underline font-medium"
              >
                ☕ Support the Creator
              </a>
            </li>
          </ul>
        </div>

        {/* Learning Hub Column */}
        <div>
          <h4 className="text-[13px] font-semibold text-[#f0ede8] uppercase tracking-wider mb-3">
            Learning Hub
          </h4>
          <ul className="space-y-2 list-none p-0 m-0 text-[13px]">
            <li>
              <Link to="/learn" className="text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline font-medium text-[#e8541a]">
                All Tutorials &amp; Guides
              </Link>
            </li>
            <li>
              <Link to="/learn/ultimate-guide-sankey-diagrams" className="text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline">
                Ultimate Sankey Guide
              </Link>
            </li>
            <li>
              <Link to="/learn/energy-efficiency-heat-balance" className="text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline">
                Energy &amp; Heat Balance
              </Link>
            </li>
            <li>
              <Link to="/learn/financial-cash-flow-budgeting" className="text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline">
                Financial Cash Flow
              </Link>
            </li>
            <li>
              <Link to="/learn/sankeyloop-user-manual" className="text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline">
                Editor User Manual
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Trust Column */}
        <div>
          <h4 className="text-[13px] font-semibold text-[#f0ede8] uppercase tracking-wider mb-3">
            Trust &amp; Legal
          </h4>
          <ul className="space-y-2 list-none p-0 m-0 text-[13px]">
            <li>
              <Link to="/about" className="text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-[#1c1b18] text-center text-[11px] text-[#5a5754] leading-relaxed">
        <p>
          SankeyLoop is dedicated to providing high-value educational content and modern flow visualization tools. 
          Third-party advertising partners, including Google AdSense, use cookies to serve personalized ads based on prior web visits. 
          For more details on cookie management and data privacy, please review our <Link to="/privacy" className="text-[#8a8783] underline hover:text-[#f0ede8]">Privacy Policy</Link>.
        </p>
      </div>
    </footer>
  );
}
