import React from 'react';
import { GuideArticle } from './types';
import { Link } from 'react-router-dom';

const Guide1Content: React.FC = () => {
  return (
    <div className="space-y-8 text-[#d0cdc8] leading-relaxed text-base font-sans">
      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">1. What is a Sankey Diagram?</h2>
        <p className="mb-4">
          A **Sankey diagram** is a specialized type of flow diagram in which the width of the arrows or bands is proportionally scaled to the flow quantity. Whether you are mapping energy consumption across a factory, tracing material distribution through a global supply chain, or illustrating the drop-off rate of visitors on a website, Sankey diagrams provide an immediate, intuitive visual grasp of quantitative relationships.
        </p>
        <p className="mb-4">
          Unlike standard flowcharts or organizational diagrams where arrows simply denote directional sequence or hierarchical subordination, every arrow (or *link*) in a Sankey diagram carries a rigorous numerical magnitude. If a stream representing 100 megawatts of electricity splits into two sub-streams of 70 megawatts and 30 megawatts, the combined physical width of the two outgoing arrows will exactly equal the width of the incoming arrow.
        </p>
        <div className="bg-[#1a1917] border border-[#272521] p-6 rounded-xl my-6">
          <h4 className="font-semibold text-[#f0ede8] mb-2">Key Anatomy of a Sankey Diagram:</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#a09d98] text-sm">
            <li><strong className="text-[#f0ede8]">Nodes (Rectangles):</strong> Represent entities, states, processes, or accounts where flow originates, transforms, or terminates.</li>
            <li><strong className="text-[#f0ede8]">Links (Bands/Streams):</strong> Represent the quantitative transfer or movement between two nodes. Their thickness is strictly proportional to the numerical value.</li>
            <li><strong className="text-[#f0ede8]">Sources &amp; Sinks:</strong> Nodes with only outgoing links are *sources* (origins); nodes with only incoming links are *sinks* (destinations or losses).</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">2. The Origins: Captain Sankey and Minard's Masterpiece</h2>
        <p className="mb-4">
          While modern web developers and data scientists frequently use Sankey diagrams for digital analytics, the visualization technique originated in late 19th-century mechanical and thermal engineering. The diagram is named after Irish-born Captain **Matthew Henry Phineas Riall Sankey** (1853–1926), an engineer who served in the Royal Engineers before retiring to pursue civil and mechanical engineering consulting.
        </p>
        <p className="mb-4">
          In 1898, Captain Sankey published a landmark paper in the *Minutes of Proceedings of the Institution of Civil Engineers* titled *"The Thermal Efficiency of Steam-Engines."* To demonstrate why contemporary steam engines wasted the vast majority of their fuel energy, Sankey devised a chart showing the flow of heat energy from the boiler combustion chamber through the steam pipes, cylinder work, and condenser exhaust. By scaling the band thickness to British Thermal Units (BTUs), his chart made a dramatic, inescapable visual statement: over 80% of the energy was lost as waste heat before performing useful work.
        </p>
        <div className="bg-[#161513] border-l-4 border-[#e8541a] p-5 my-6 italic text-[#a09d98]">
          "The most effective way to communicate thermodynamic inefficiency to non-technical stakeholders is to show them a physical river of wasted fuel that dwarfs the narrow stream of useful power output." — Historical retrospective on Captain Sankey's visualization methodology.
        </div>
        <p className="mb-4">
          However, decades before Captain Sankey's publication, the French civil engineer **Charles Joseph Minard** created what many statisticians consider the greatest statistical graphic ever drawn: the 1869 map illustrating Napoleon's disastrous Russian campaign of 1812. Minard's chart seamlessly combined six variables onto a single two-dimensional plane: geography, time, temperature, direction of military movement, and most notably, the size of the French army, represented by a band whose width shrank from 422,000 men at the Polish border down to just 10,000 returning survivors. Minard's work laid the conceptual groundwork for quantitative flow scaling.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">3. Mathematical Foundations: Graph Theory &amp; Flow Conservation</h2>
        <p className="mb-4">
          From a mathematical perspective, a Sankey diagram is a weighted, directed graph G = (V, E), where V represents the set of nodes and E represents the set of directed edges (links). Each edge e = (u, v) in E is assigned a strictly positive weight w(e) &gt; 0 representing the flow volume.
        </p>
        <p className="mb-4">
          To maintain visual integrity and physical realism, well-designed Sankey diagrams adhere to the **Principle of Flow Conservation** (also known in physics as Kirchhoff's Current Law or the Continuity Equation). For any intermediate node v that is neither a pure primary source nor a final sink, the sum of all incoming flows must precisely match the sum of all outgoing flows:
        </p>
        <div className="bg-[#1a1917] border border-[#272521] p-4 rounded-lg my-4 font-mono text-center text-[#ff813f] text-sm md:text-base">
          {"Σ w(u, v) [Inflows] = Σ w(v, z) [Outflows]"}
        </div>
        <p className="mb-4">
          When this principle is violated—for example, if 1,000 units enter a processing node but the outgoing arrows only sum to 850 units without an explicit "Loss" or "Waste" stream—the diagram becomes misleading. In engineering and financial auditing, unexplained flow discrepancies immediately signal accounting errors, measurement drift, or unquantified system leakage.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">4. Best Practices in Modern Data Visualization</h2>
        <p className="mb-4">
          While Sankey diagrams are visually captivating, constructing an effective graphic requires adherence to core design rules. Poorly designed flowcharts can quickly devolve into visual spaghetti that confuses rather than enlightens the reader.
        </p>
        
        <h3 className="text-lg font-semibold text-[#f0ede8] mt-6 mb-3">Rule 1: Minimize Link Crossover</h3>
        <p className="mb-4">
          When multiple bands cross over one another, the reader's eye struggles to trace individual pathways from left to right. Advanced rendering algorithms—including the positioning engine powering SankeyLoop—use iterative relaxation and barycentric heuristics to reorder node vertical placement, systematically minimizing edge intersections.
        </p>

        <h3 className="text-lg font-semibold text-[#f0ede8] mt-6 mb-3">Rule 2: Group Minor Streams into an "Other" Category</h3>
        <p className="mb-4">
          If a dataset contains 50 distinct destinations where 45 of them account for less than 1% of total flow each, rendering 50 microscopic threads will clutter the diagram. Good visual taxonomy dictates aggregating minor tail items into a consolidated **"Other"** or **"Miscellaneous"** node, keeping the primary visual focus on macro-level distribution.
        </p>

        <h3 className="text-lg font-semibold text-[#f0ede8] mt-6 mb-3">Rule 3: Use Strategic Color Grouping</h3>
        <p className="mb-4">
          Color should encode meaning, not just provide decoration. There are three primary color schemes utilized in professional Sankey modeling:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#a09d98] mb-6">
          <li><strong className="text-[#f0ede8]">Source-Based Coloring:</strong> Links inherit the color of their origin node. This makes it effortless to trace how a specific input divides across downstream stages.</li>
          <li><strong className="text-[#f0ede8]">Target-Based Coloring:</strong> Links inherit the color of their destination node, highlighting where resources ultimately accumulate.</li>
          <li><strong className="text-[#f0ede8]">Status/Health Coloring:</strong> Utilizing semantic colors (e.g., green for productive output, red for thermal loss or financial expense, gray for neutral recirculation).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">5. When to Use a Sankey vs. Other Chart Types</h2>
        <p className="mb-4">
          Choosing the right chart is half the battle in data storytelling. Here is how Sankey diagrams compare against traditional alternatives:
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#333128] text-[#f0ede8] bg-[#1a1917]">
                <th className="p-3 font-semibold">Chart Type</th>
                <th className="p-3 font-semibold">Primary Strength</th>
                <th className="p-3 font-semibold">When to Choose Over Sankey</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#272521] text-[#a09d98]">
              <tr>
                <td className="p-3 font-medium text-[#f0ede8]">Bar / Column Chart</td>
                <td className="p-3">Comparing static discrete quantities side-by-side.</td>
                <td className="p-3">When you only need to show total revenue by quarter without showing how revenue flows into expenses.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#f0ede8]">Pie / Donut Chart</td>
                <td className="p-3">Showing simple percentage breakdown of a single whole.</td>
                <td className="p-3">When there is only 1 stage of division (e.g., market share of 5 companies) with no multi-stage flow.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#f0ede8]">Tree / Treemap</td>
                <td className="p-3">Hierarchical nesting of categories within subcategories.</td>
                <td className="p-3">When data is strictly hierarchical (parent-child) without cross-linking or recombination between branches.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-[#f0ede8]">Sankey Diagram</td>
                <td className="p-3">Multi-stage network distribution, conservation tracking, and loss identification.</td>
                <td className="p-3 text-[#ff813f] font-medium">When you need to illustrate the end-to-end lifecycle of materials, energy, money, or user traffic across multiple sequential stages.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">6. Building Your First Diagram with SankeyLoop</h2>
        <p className="mb-4">
          Now that you understand the history, mathematics, and design principles behind Sankey diagrams, it is time to put theory into practice. With SankeyLoop, you do not need to install complex software or write code. You simply describe your flows using natural text syntax:
        </p>
        <div className="bg-[#1a1917] border border-[#333128] p-4 rounded-lg font-mono text-xs md:text-sm text-[#b5dec0] my-4 overflow-x-auto">
          // Syntax: Source [Amount] Target<br/>
          Gross Revenue [100000] Operating Costs<br/>
          Gross Revenue [40000] Gross Profit<br/>
          Operating Costs [60000] Payroll<br/>
          Operating Costs [25000] Software &amp; Server Hosting<br/>
          Operating Costs [15000] Office Lease<br/>
          Gross Profit [15000] Corporate Taxes #ff4d4d<br/>
          Gross Profit [25000] Net Retained Earnings #4caf50
        </div>
        <p className="mb-6">
          Ready to visualize your own data? Jump directly into the interactive editor or check out our specialized engineering and financial guides below.
        </p>
        <div className="flex flex-wrap gap-4 pt-4 border-t border-[#272521]">
          <Link 
            to="/app"
            className="bg-[#e8541a] hover:bg-[#d44812] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline shadow-md"
          >
            Launch SankeyLoop Editor →
          </Link>
          <Link 
            to="/learn/energy-efficiency-heat-balance"
            className="bg-[#1a1917] border border-[#333128] hover:border-[#5a5754] text-[#f0ede8] px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline"
          >
            Next Guide: Engineering &amp; Heat Balance →
          </Link>
        </div>
      </section>
    </div>
  );
};

export const guide1Article: GuideArticle = {
  id: 'guide-1',
  slug: 'ultimate-guide-sankey-diagrams',
  title: 'The Ultimate Guide to Sankey Diagrams: History, Theory, and Best Practices',
  subtitle: 'Discover how a 19th-century thermodynamic efficiency chart became one of the most powerful visualization tools in modern data science, engineering, and digital analytics.',
  category: 'Fundamentals',
  readTime: '8 min read',
  date: 'July 4, 2026',
  excerpt: 'Explore the origins of Sankey diagrams from Captain Matthew Sankey and Charles Minard, understand the mathematical continuity equations of flow conservation, and master visual design best practices.',
  author: {
    name: 'Tom Sanz',
    role: 'Lead Developer & Visualization Architect'
  },
  content: Guide1Content
};
