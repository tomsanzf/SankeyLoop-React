import React from 'react';
import { GuideArticle } from './types';
import { Link } from 'react-router-dom';

const Guide4Content: React.FC = () => {
  return (
    <div className="space-y-8 text-[#d0cdc8] leading-relaxed text-base font-sans">
      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">1. Introduction to SankeyLoop</h2>
        <p className="mb-4">
          Welcome to the official technical documentation and advanced user manual for **SankeyLoop**. Whether you are an engineer modeling thermodynamic heat cycles, an auditor mapping corporate cash flows, or a researcher visualizing data distributions, SankeyLoop is engineered to give you complete visual control without requiring a single line of traditional programming code.
        </p>
        <p className="mb-4">
          Our core philosophy is **Text-Driven Visualization**. By representing complex flow networks as simple, human-readable text syntax, you can version-control your diagrams in Git, generate diagrams dynamically from database scripts, and collaborate with colleagues seamlessly using plain text email or chat.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">2. Core Syntax Reference Guide</h2>
        <p className="mb-4">
          The SankeyLoop engine parses plain text input from the left-hand editor panel in real time. Every line of text represents either a flow link, a node styling rule, or a comment. Below is the comprehensive syntax specification:
        </p>

        <h3 className="text-lg font-semibold text-[#f0ede8] mt-6 mb-3">2.1 Basic Flow Links</h3>
        <p className="mb-3">
          To create a directed link between two nodes, write the origin node name, followed by the numerical flow magnitude enclosed in square brackets `[ ]`, followed by the destination node name:
        </p>
        <div className="bg-[#1a1917] border border-[#333128] p-3 rounded font-mono text-sm text-[#00e676] my-2">
          Source Node [Amount] Target Node
        </div>
        <p className="text-sm text-[#a09d98] mb-4">
          *Example:* `Boiler Combustion [500] High Pressure Steam Turbine`
        </p>

        <h3 className="text-lg font-semibold text-[#f0ede8] mt-6 mb-3">2.2 Individual Link Custom Coloring</h3>
        <p className="mb-3">
          By default, links inherit color based on your selected global scheme (Source-based or Target-based). To assign a specific hex color code to an individual flow band, append `#RRGGBB` or `#RGB` to the end of the line:
        </p>
        <div className="bg-[#1a1917] border border-[#333128] p-3 rounded font-mono text-sm text-[#ffb74d] my-2">
          Gross Revenue [25000] Net Retained Profit #00c853
        </div>
        <p className="text-sm text-[#a09d98] mb-4">
          *Note:* Standard CSS color names (such as `red`, `blue`, `green`, `orange`) are also natively supported by the rendering engine.
        </p>

        <h3 className="text-lg font-semibold text-[#f0ede8] mt-6 mb-3">2.3 Explicit Node Color Assignment</h3>
        <p className="mb-3">
          To set a permanent custom color for an entire node (and all links originating from it when using source-coloring), start a new line with a colon `:`, followed by the exact node name, followed by the hex color code:
        </p>
        <div className="bg-[#1a1917] border border-[#333128] p-3 rounded font-mono text-sm text-[#64b5f6] my-2">
          :Operating Expenses #ff5722
        </div>

        <h3 className="text-lg font-semibold text-[#f0ede8] mt-6 mb-3">2.4 Comments &amp; Annotations</h3>
        <p className="mb-3">
          Any line beginning with double slashes `//` is treated as a comment and ignored by the parser. Use comments to organize complex multi-stage diagrams into logical sections:
        </p>
        <div className="bg-[#1a1917] border border-[#333128] p-3 rounded font-mono text-xs text-[#8a8783] my-2">
          // Section 1: European Marketing Expenditure<br/>
          EU Revenue [150] Performance Marketing #e91e63
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">3. Interactive Layout &amp; Formatting Controls</h2>
        <p className="mb-4">
          Below the syntax editor, SankeyLoop provides a comprehensive suite of real-time interactive layout controls to customize the visual presentation of your diagram:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-[#1a1917] border border-[#333128] p-5 rounded-xl">
            <h4 className="font-semibold text-[#f0ede8] mb-2 flex items-center gap-2">
              <span>🎨</span> Color Schemes &amp; Opacity
            </h4>
            <p className="text-sm text-[#a09d98] leading-relaxed">
              Toggle between **Source Coloring** (bands match their origin node color), **Target Coloring** (bands match destination color), or **Single Monochromatic** mode. Use the opacity slider to tune band transparency from 0.1 (subtle background) to 0.9 (vibrant high contrast).
            </p>
          </div>

          <div className="bg-[#1a1917] border border-[#333128] p-5 rounded-xl">
            <h4 className="font-semibold text-[#f0ede8] mb-2 flex items-center gap-2">
              <span>📐</span> Node Width &amp; Vertical Separation
            </h4>
            <p className="text-sm text-[#a09d98] leading-relaxed">
              Adjust the physical thickness of node rectangles using the **Node Width** slider. Modify the vertical whitespace between parallel nodes using **Node Padding** to prevent label overlapping in dense multi-node graphs.
            </p>
          </div>

          <div className="bg-[#1a1917] border border-[#333128] p-5 rounded-xl">
            <h4 className="font-semibold text-[#f0ede8] mb-2 flex items-center gap-2">
              <span>🏷️</span> Typography &amp; Label Positioning
            </h4>
            <p className="text-sm text-[#a09d98] leading-relaxed">
              Configure label font family (Inter, Roboto, Monospace), adjust font size in pixels, and toggle label placement between **Before** (left of node), **Centered** (inside node), or **After** (right of node). You can also choose whether to display numerical values alongside names.
            </p>
          </div>

          <div className="bg-[#1a1917] border border-[#333128] p-5 rounded-xl">
            <h4 className="font-semibold text-[#f0ede8] mb-2 flex items-center gap-2">
              <span>⚙️</span> Alignment &amp; Iterative Relaxation
            </h4>
            <p className="text-sm text-[#a09d98] leading-relaxed">
              Switch node alignment between **Left** (pack to origins), **Right** (pack to destinations), **Center**, or **Justify**. SankeyLoop uses iterative barycentric relaxation algorithms to automatically minimize link crossover.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">4. Export &amp; Sharing Capabilities</h2>
        <p className="mb-4">
          SankeyLoop is built for professional presentation and publication workflows. Once you have perfected your diagram layout, you can export it in three industry-standard formats:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-[#a09d98] mb-6">
          <li>
            <strong className="text-[#f0ede8]">High-Resolution PNG Image:</strong> Generates a crisp, lossless raster graphic scaled up to 3x resolution (300 DPI equivalent), perfect for embedding into PowerPoint presentations, PDF executive reports, or academic journals.
          </li>
          <li>
            <strong className="text-[#f0ede8]">Scalable Vector Graphics (SVG):</strong> Exports clean, XML-based vector code. SVG files can be imported directly into Adobe Illustrator, Figma, or Inkscape for infinite scaling without pixelation, or embedded inline into HTML webpages.
          </li>
          <li>
            <strong className="text-[#f0ede8]">Dynamic Video Animation (MP4 / GIF):</strong> For digital storytelling, SankeyLoop can record smooth transition animations that trace flow progression from left to right, creating captivating visual assets for social media and video presentations.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">5. Local Browser Storage &amp; Data Privacy Architecture</h2>
        <p className="mb-4">
          Unlike legacy SaaS diagramming tools that upload your proprietary corporate data or unpublished research numbers to remote cloud servers, SankeyLoop is architected as a **100% Client-Side Web Application**.
        </p>
        <p className="mb-4">
          When you click **"Save Work"**, your flow script and UI configuration preferences are written directly to your web browser's local sandbox using standard HTML5 <code className="bg-[#272521] px-1.5 py-0.5 rounded text-sm text-[#ff813f]">localStorage</code>. Your data never traverses the internet, ensuring full compliance with corporate NDAs, GDPR data privacy mandates, and strict institutional security policies.
        </p>
      </section>

      <section className="bg-[#161513] border border-[#272521] p-6 rounded-xl mt-8">
        <h3 className="text-xl font-semibold text-[#f0ede8] mb-2">Ready to Start Building?</h3>
        <p className="text-sm text-[#a09d98] mb-4">
          Now that you have mastered the syntax and layout controls, launch the interactive editor to bring your data flows to life.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/app"
            className="bg-[#e8541a] hover:bg-[#d44812] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline shadow-md"
          >
            Launch SankeyLoop Editor →
          </Link>
          <Link 
            to="/learn"
            className="bg-[#1a1917] border border-[#333128] hover:border-[#5a5754] text-[#f0ede8] px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline"
          >
            ← Back to All Guides &amp; Tutorials
          </Link>
        </div>
      </section>
    </div>
  );
};

export const guide4Article: GuideArticle = {
  id: 'guide-4',
  slug: 'sankeyloop-user-manual',
  title: 'SankeyLoop Official Documentation & Advanced User Manual',
  subtitle: 'The complete technical reference for syntax rules, interactive layout styling, SVG/PNG export, and local data privacy.',
  category: 'Documentation',
  readTime: '7 min read',
  date: 'July 4, 2026',
  excerpt: 'Master the SankeyLoop editor. Complete reference for flow syntax, hex color assignments, node padding adjustment, high-resolution PNG/SVG exports, and client-side storage architecture.',
  author: {
    name: 'Tom Sanz',
    role: 'Lead Developer & Visualization Architect'
  },
  content: Guide4Content
};
