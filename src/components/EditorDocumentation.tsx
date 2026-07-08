import React from 'react';
import { Link } from 'react-router-dom';

export default function EditorDocumentation() {
  return (
    <div className="bg-[#0f0e0d] border-t border-[#272521] py-16 px-6 md:px-12 text-[#d0cdc8] font-sans selection:bg-[#e8541a] selection:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#272521]">
          <div>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#ff813f] mb-1.5">
              Documentation &amp; Syntax Reference
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#f0ede8]">
              SankeyLoop Interactive Flow Builder Manual
            </h2>
          </div>
          <Link
            to="/learn"
            className="inline-flex items-center gap-1.5 bg-[#1a1917] border border-[#333128] hover:border-[#ff813f] text-[#f0ede8] hover:text-[#ff813f] px-4 py-2 rounded-lg text-xs font-semibold transition-all no-underline shrink-0"
          >
            <span>Read 4,000+ Word Comprehensive Guides</span>
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Syntax Column */}
          <div className="bg-[#161513] border border-[#272521] p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#f0ede8] mb-3 flex items-center gap-2">
                <span>📝</span> Flow Table Syntax Rules
              </h3>
              <p className="text-xs text-[#a09d98] mb-4 leading-relaxed">
                Describe your diagram structure using plain text. Each line defines a quantitative link between two nodes.
              </p>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="bg-[#0c0c0b] p-3 rounded border border-[#333128]">
                  <div className="text-[#5a5754] mb-1">// Standard Link</div>
                  <div className="text-[#00e676]">Wages [3500] Checking Account</div>
                </div>

                <div className="bg-[#0c0c0b] p-3 rounded border border-[#333128]">
                  <div className="text-[#5a5754] mb-1">// Custom Link Color (#Hex or Name)</div>
                  <div className="text-[#ffb74d]">Checking [1200] Rent #ff5722</div>
                </div>

                <div className="bg-[#0c0c0b] p-3 rounded border border-[#333128]">
                  <div className="text-[#5a5754] mb-1">// Set Node Default Color</div>
                  <div className="text-[#64b5f6]">:Checking Account #2196f3</div>
                </div>
              </div>
            </div>
          </div>

          {/* Flow Conservation Column */}
          <div className="bg-[#161513] border border-[#272521] p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#f0ede8] mb-3 flex items-center gap-2">
                <span>🔬</span> Flow Conservation Principles
              </h3>
              <p className="text-xs text-[#a09d98] mb-3 leading-relaxed">
                In thermodynamic engineering and financial auditing, accurate models must obey **Continuity Equations**. For any intermediate junction node:
              </p>
              <div className="bg-[#0c0c0b] p-3 rounded border border-[#333128] text-center font-mono text-xs text-[#ff813f] my-3">
                Σ Inflows = Σ Outflows + Losses
              </div>
              <p className="text-xs text-[#a09d98] leading-relaxed">
                If an intermediate node receives 500 units but only outputs 400 without designating a waste or savings branch, the diagram will display asymmetric visual widths. Ensure all balance sheets and heat cycles are fully accounted for.
              </p>
            </div>
            <Link 
              to="/learn/energy-efficiency-heat-balance" 
              className="text-xs font-semibold text-[#ff813f] hover:underline pt-4 border-t border-[#272521] mt-4 block"
            >
              Thermodynamic Heat Balance Tutorial →
            </Link>
          </div>

          {/* Export & Privacy Column */}
          <div className="bg-[#161513] border border-[#272521] p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-[#f0ede8] mb-3 flex items-center gap-2">
                <span>🔒</span> Privacy &amp; Vector Exports
              </h3>
              <p className="text-xs text-[#a09d98] mb-3 leading-relaxed">
                SankeyLoop processes all layout algorithms in your local browser memory. Your sensitive financial spreadsheets or proprietary engineering data are never uploaded to remote servers.
              </p>
              <ul className="text-xs text-[#d0cdc8] space-y-2 list-disc pl-5">
                <li><strong className="text-[#f0ede8]">3x Scaled PNG:</strong> High-resolution raster images suitable for PowerPoint and PDF reports.</li>
                <li><strong className="text-[#f0ede8]">Scalable SVG:</strong> XML vector code for lossless editing in Illustrator or Figma.</li>
                <li><strong className="text-[#f0ede8]">Transition Video:</strong> Record dynamic transition animations for digital storytelling.</li>
              </ul>
            </div>
            <Link 
              to="/privacy" 
              className="text-xs font-semibold text-[#8a8783] hover:text-[#f0ede8] underline pt-4 border-t border-[#272521] mt-4 block"
            >
              Review Client-Side Privacy Policy →
            </Link>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-[#161513] border border-[#272521] p-6 rounded-xl text-xs text-[#a09d98] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-wrap">
            <span>💡 <strong>Pro Tip 1:</strong> Drag any node rectangle on the canvas to manually freeze its custom vertical or horizontal placement.</span>
            <span>💡 <strong>Pro Tip 2:</strong> Use <code className="bg-[#272521] text-[#f0ede8] px-1.5 py-0.5 rounded">//</code> to add comments and group your flow table into organized stages.</span>
          </div>
          <Link to="/learn/sankeyloop-user-manual" className="text-[#ff813f] font-semibold hover:underline no-underline whitespace-nowrap">
            View Complete Reference Manual →
          </Link>
        </div>
      </div>
    </div>
  );
}
