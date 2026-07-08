import React from 'react';
import { GuideArticle } from './types';
import { Link } from 'react-router-dom';

const Guide2Content: React.FC = () => {
  return (
    <div className="space-y-8 text-[#d0cdc8] leading-relaxed text-base font-sans">
      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">1. The First Law of Thermodynamics and Energy Auditing</h2>
        <p className="mb-4">
          In mechanical, chemical, and industrial engineering, performing a rigorous energy audit is the foundational step toward improving thermal efficiency and reducing greenhouse gas emissions. The bedrock principle governing any energy system is the **First Law of Thermodynamics**—the law of conservation of energy—which states that energy can neither be created nor destroyed within an isolated system; it can only change form.
        </p>
        <p className="mb-4">
          When analyzing a thermal power plant, an industrial refining furnace, or an automotive powertrain, the total chemical or electrical energy entering the system must equal the sum of the useful work performed plus all intermediate thermal losses and dissipations:
        </p>
        <div className="bg-[#1a1917] border border-[#272521] p-4 rounded-lg my-4 font-mono text-center text-[#ff813f] text-sm md:text-base">
          {"E_in = W_useful + Q_exhaust + Q_cooling + Q_radiation + E_friction"}
        </div>
        <p className="mb-4">
          While spreadsheets can tabulate these numbers in rows and columns, they fail to communicate the physical geometry of energy degradation. A **Thermodynamic Sankey diagram** transforms dry enthalpy equations into a visual map where engineers and plant managers can instantly identify which subsystem is responsible for the greatest exergy destruction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">2. Modeling Industrial Heat Balance: Power Generation</h2>
        <p className="mb-4">
          Consider a modern Combined Cycle Gas Turbine (CCGT) power generation plant. A standard gas turbine operating on natural gas converts chemical fuel energy into electrical power with an open-cycle efficiency of roughly 38–42%. By capturing the 58% waste heat exiting the turbine exhaust using a Heat Recovery Steam Generator (HRSG) to drive a secondary steam turbine, combined cycle efficiency can be pushed past 60%.
        </p>
        <p className="mb-4">
          Using SankeyLoop, we can model this thermodynamic heat balance with precision. Below is a realistic energy audit for a 500 MW thermal input CCGT plant:
        </p>
        <div className="bg-[#1a1917] border border-[#333128] p-4 rounded-lg font-mono text-xs md:text-sm text-[#b5dec0] my-4 overflow-x-auto">
          // Combined Cycle Gas Turbine (CCGT) Heat Balance (in MW)<br/>
          Natural Gas Fuel [500] Gas Turbine Combustion Chamber<br/>
          <br/>
          // Primary Gas Turbine Stage<br/>
          Gas Turbine Combustion Chamber [195] Gas Turbine Generator Output #4caf50<br/>
          Gas Turbine Combustion Chamber [285] Turbine Exhaust Gas (HRSG Input) #ff9800<br/>
          Gas Turbine Combustion Chamber [15] Radiative &amp; Mechanical Losses #ff4d4d<br/>
          Gas Turbine Combustion Chamber [5] Auxiliary Station Parasitic Load #9e9e9e<br/>
          <br/>
          // Heat Recovery Steam Generator (HRSG) Stage<br/>
          Turbine Exhaust Gas (HRSG Input) [110] Steam Turbine Generator Output #4caf50<br/>
          Turbine Exhaust Gas (HRSG Input) [135] Condenser Cooling Water Dissipation #2196f3<br/>
          Turbine Exhaust Gas (HRSG Input) [40] Stack Exhaust Atmosphere Loss #ff4d4d<br/>
          <br/>
          // Consolidated Grid Output<br/>
          Gas Turbine Generator Output [195] Total Electric Grid Power #00e676<br/>
          Steam Turbine Generator Output [110] Total Electric Grid Power #00e676
        </div>
        <p className="mb-4">
          By rendering this script in SankeyLoop, plant operators can visually verify that out of 500 MW of raw fuel input, exactly 305 MW reaches the electrical grid (61% thermal efficiency), while 135 MW is absorbed by condenser cooling water and 55 MW is lost to stack exhaust and radiation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">3. Comparative Powertrain Analysis: Internal Combustion vs. Electric Vehicles</h2>
        <p className="mb-4">
          Another critical domain where Sankey flow modeling is indispensable is automotive propulsion engineering. Why has the global automotive industry pivoted so aggressively toward Battery Electric Vehicles (BEVs)? A Sankey efficiency comparison provides the most compelling answer.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-[#1a1917] border border-[#333128] p-5 rounded-xl">
            <h3 className="text-lg font-semibold text-[#ff813f] mb-2">🔥 Gasoline ICE Powertrain</h3>
            <p className="text-sm text-[#a09d98] mb-3">
              In a conventional gasoline Internal Combustion Engine (ICE), only **16% to 20%** of the chemical fuel energy stored in the tank actually reaches the wheels to propel the vehicle.
            </p>
            <ul className="text-xs space-y-1.5 text-[#d0cdc8] font-mono">
              <li>• Engine Engine Thermal Loss: ~62%</li>
              <li>• Idling &amp; Standby Waste: ~5%</li>
              <li>• Drivetrain Friction: ~5%</li>
              <li>• Auxiliary Accessories: ~3%</li>
              <li className="text-[#4caf50] font-bold">• Useful Road Propulsion: ~20%</li>
            </ul>
          </div>

          <div className="bg-[#1a1917] border border-[#333128] p-5 rounded-xl">
            <h3 className="text-lg font-semibold text-[#4caf50] mb-2">⚡ Battery Electric (BEV) Powertrain</h3>
            <p className="text-sm text-[#a09d98] mb-3">
              In a modern Battery Electric Vehicle, approximately **75% to 85%** of grid electrical energy charged into the battery pack is converted into kinetic road propulsion.
            </p>
            <ul className="text-xs space-y-1.5 text-[#d0cdc8] font-mono">
              <li>• Grid Charging Losses: ~10%</li>
              <li>• Inverter &amp; Motor Resistance: ~8%</li>
              <li>• Drivetrain Mechanical Loss: ~3%</li>
              <li>• Regenerative Braking Recovery: +8%</li>
              <li className="text-[#4caf50] font-bold">• Useful Road Propulsion: ~80%</li>
            </ul>
          </div>
        </div>
        <p className="mb-4">
          When presenting these engineering realities to executives or regulatory bodies, a side-by-side Sankey diagram makes the 4x efficiency disparity immediately comprehensible without requiring advanced coursework in thermodynamics.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">4. Step-by-Step Guide: Best Practices for Thermal Sankey Modeling</h2>
        <p className="mb-4">
          When constructing engineering flow diagrams in SankeyLoop, follow these four professional rules to ensure technical rigor:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-[#a09d98]">
          <li>
            <strong className="text-[#f0ede8]">Use Consistent Physical Units:</strong> Never mix energy units (e.g., BTUs and Megajoules) or power vs. energy quantities (e.g., kW vs. kWh) within the same diagram. If modeling continuous power, standardize on Megawatts (MW) or Kilowatts (kW). If modeling annual energy consumption, standardize on Gigawatt-hours (GWh) or Terajoules (TJ).
          </li>
          <li>
            <strong className="text-[#f0ede8]">Account for Parasitic &amp; Auxiliary Loads:</strong> Almost all industrial processes consume a portion of their own output to power internal pumps, fans, control systems, and lighting. Model this explicit feedback loop or branch it out as "Parasitic Station Load."
          </li>
          <li>
            <strong className="text-[#f0ede8]">Color-Code Enthalpy Quality:</strong> Use visual temperature semantics. Render high-grade thermal input as deep red or orange (`#ff5722`), useful work as bright vibrant green (`#00e676`), and low-grade rejected waste heat as muted gray (`#78909c`) or cool blue (`#29b6f6`).
          </li>
          <li>
            <strong className="text-[#f0ede8]">Validate Mass &amp; Energy Balances:</strong> Before publishing your diagram, check every junction node. If the sum of incoming links does not equal the sum of outgoing links, add an explicit "Unaccounted Loss / Measurement Error" link to maintain mass-energy conservation.
          </li>
        </ol>
      </section>

      <section className="bg-[#161513] border border-[#272521] p-6 rounded-xl mt-8">
        <h3 className="text-xl font-semibold text-[#f0ede8] mb-2">Ready to Model Your Plant or Process?</h3>
        <p className="text-sm text-[#a09d98] mb-4">
          Copy the CCGT script above directly into our interactive editor and customize the numbers to match your specific engineering project or energy audit.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/app"
            className="bg-[#e8541a] hover:bg-[#d44812] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline shadow-md"
          >
            Open Interactive Editor →
          </Link>
          <Link 
            to="/learn/financial-cash-flow-budgeting"
            className="bg-[#1a1917] border border-[#333128] hover:border-[#5a5754] text-[#f0ede8] px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline"
          >
            Next Guide: Financial Cash Flows →
          </Link>
        </div>
      </section>
    </div>
  );
};

export const guide2Article: GuideArticle = {
  id: 'guide-2',
  slug: 'energy-efficiency-heat-balance',
  title: 'Thermodynamic Heat Balance & Energy Flow Mapping in Engineering',
  subtitle: 'Master the application of Sankey diagrams in industrial energy audits, power plant efficiency modeling, and automotive powertrain optimization.',
  category: 'Engineering',
  readTime: '9 min read',
  date: 'July 4, 2026',
  excerpt: 'Learn how to apply the First Law of Thermodynamics to visual flow modeling. See real-world CCGT power plant scripts, automotive ICE vs. EV comparisons, and thermal unit standardization rules.',
  author: {
    name: 'Tom Sanz',
    role: 'Lead Developer & Visualization Architect'
  },
  content: Guide2Content
};
