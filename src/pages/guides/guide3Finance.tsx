import React from 'react';
import { GuideArticle } from './types';
import { Link } from 'react-router-dom';

const Guide3Content: React.FC = () => {
  return (
    <div className="space-y-8 text-[#d0cdc8] leading-relaxed text-base font-sans">
      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">1. Why Accounting is Inherently a Flow System</h2>
        <p className="mb-4">
          For centuries, corporate finance and personal accounting have relied on static tabular spreadsheets: balance sheets, income statements, and cash flow reports. While double-entry bookkeeping guarantees mathematical precision through debits and credits, reading rows of numbers often obscures the macro-level story of where money originates, where it gets bottlenecked, and where it ultimately evaporates.
        </p>
        <p className="mb-4">
          From a fundamental economic perspective, financial accounting is an exact analog to fluid dynamics or thermodynamic mass conservation. Every single dollar that enters a corporation as revenue must eventually exit as an expense, be distributed to shareholders as dividends, or be retained within corporate reserves as equity or cash:
        </p>
        <div className="bg-[#1a1917] border border-[#272521] p-4 rounded-lg my-4 font-mono text-center text-[#00e676] text-sm md:text-base">
          {"Total Revenue = COGS + Operating Expenses + Taxes + Net Retained Profit"}
        </div>
        <p className="mb-4">
          By translating GAAP (Generally Accepted Accounting Principles) or IFRS financial statements into a **Financial Sankey diagram**, Chief Financial Officers (CFOs), analysts, and board members can instantly visualize financial run-rate, operational overhead ratios, and net profit margins at a single glance.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">2. Visualizing Corporate Income Statements (GAAP / IFRS)</h2>
        <p className="mb-4">
          A standard corporate income statement (or Profit &amp; Loss / P&amp;L statement) is structured as a sequential waterfall of subtractions. Let us examine how a publicly traded Software-as-a-Service (SaaS) technology company generating $100 Million in annual revenue translates into a Sankey flow model:
        </p>
        <div className="bg-[#1a1917] border border-[#333128] p-4 rounded-lg font-mono text-xs md:text-sm text-[#b5dec0] my-4 overflow-x-auto">
          // Corporate SaaS Income Statement ($ in Millions)<br/>
          Gross Subscriptions [90] Total Revenue<br/>
          Professional Services [10] Total Revenue<br/>
          <br/>
          // Cost of Goods Sold (COGS)<br/>
          Total Revenue [22] Cost of Goods Sold (COGS) #ff7043<br/>
          Total Revenue [78] Gross Profit #00e676<br/>
          <br/>
          // COGS Breakdown<br/>
          Cost of Goods Sold (COGS) [14] Cloud Server Infrastructure #ffab91<br/>
          Cost of Goods Sold (COGS) [6] Customer Support &amp; Success #ffab91<br/>
          Cost of Goods Sold (COGS) [2] Payment Processing Fees #ffab91<br/>
          <br/>
          // Operating Expenses (OPEX)<br/>
          Gross Profit [28] Sales &amp; Marketing (S&amp;M) #ffb74d<br/>
          Gross Profit [22] Research &amp; Development (R&amp;D) #ffb74d<br/>
          Gross Profit [12] General &amp; Administrative (G&amp;A) #ffb74d<br/>
          Gross Profit [16] Operating Income (EBIT) #00e676<br/>
          <br/>
          // Taxes and Net Profit<br/>
          Operating Income (EBIT) [3] Interest &amp; Tax Expense #e57373<br/>
          Operating Income (EBIT) [13] Net Income (Retained Earnings) #00c853
        </div>
        <p className="mb-4">
          When this script is rendered in SankeyLoop, the thick 100M "Total Revenue" stream splits visibly into COGS ($22M) and Gross Profit ($78M). As Gross Profit cascades rightward, the reader can visually witness how R&amp;D and Sales &amp; Marketing consume the lion's share of gross margins, leaving a lean, highly profitable $13M green stream of Net Income.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">3. Personal Finance &amp; Household Budgeting: The 50/30/20 Rule</h2>
        <p className="mb-4">
          Sankey diagrams have experienced an explosion of popularity in personal finance communities (such as Reddit's r/dataisbeautiful and r/personalfinance). Why? Because traditional household budgeting apps present boring pie charts or piecemeal list items that fail to show the holistic relationship between gross salary, tax withholdings, mandatory living expenses, and wealth accumulation.
        </p>
        <p className="mb-4">
          One of the most widely recommended financial frameworks is Senator Elizabeth Warren's **50/30/20 Budgeting Rule**:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div className="bg-[#1a1917] border border-[#333128] p-5 rounded-xl border-t-4 border-t-[#2196f3]">
            <h3 className="text-lg font-semibold text-[#64b5f6] mb-2">50% Needs</h3>
            <p className="text-xs text-[#a09d98] mb-2">Mandatory, unavoidable living expenses required for survival and basic employment.</p>
            <ul className="text-xs space-y-1 text-[#d0cdc8] font-mono">
              <li>• Rent / Mortgage</li>
              <li>• Groceries &amp; Basic Food</li>
              <li>• Health &amp; Auto Insurance</li>
              <li>• Utilities &amp; Minimum Debt</li>
            </ul>
          </div>

          <div className="bg-[#1a1917] border border-[#333128] p-5 rounded-xl border-t-4 border-t-[#ffb74d]">
            <h3 className="text-lg font-semibold text-[#ffd54f] mb-2">30% Wants</h3>
            <p className="text-xs text-[#a09d98] mb-2">Discretionary lifestyle spending that enhances comfort and entertainment.</p>
            <ul className="text-xs space-y-1 text-[#d0cdc8] font-mono">
              <li>• Dining Out &amp; Bars</li>
              <li>• Travel &amp; Vacations</li>
              <li>• Streaming Subscriptions</li>
              <li>• Hobby &amp; Retail Shopping</li>
            </ul>
          </div>

          <div className="bg-[#1a1917] border border-[#333128] p-5 rounded-xl border-t-4 border-t-[#00e676]">
            <h3 className="text-lg font-semibold text-[#69f0ae] mb-2">20% Savings</h3>
            <p className="text-xs text-[#a09d98] mb-2">Long-term wealth building, retirement investing, and financial security.</p>
            <ul className="text-xs space-y-1 text-[#d0cdc8] font-mono">
              <li>• 401(k) / IRA Retirement</li>
              <li>• Emergency Fund Deposit</li>
              <li>• Brokerage Investments</li>
              <li>• Extra Principal Paydown</li>
            </ul>
          </div>
        </div>
        <p className="mb-4">
          By mapping your household budget in SankeyLoop, you can instantly see whether your "Wants" stream is cannibalizing your "Savings" stream, providing immediate clarity on where lifestyle creep is occurring.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">4. Advanced Applications: SaaS Economics &amp; Unit Revenue Retention</h2>
        <p className="mb-4">
          In venture capital and technology entrepreneurship, tracking **Monthly Recurring Revenue (MRR) movements** across customer cohorts is critical for valuation. A SaaS company's revenue flow is dynamic: new subscriptions enter the system, existing customers upgrade (Expansion MRR), some customers downgrade (Contraction MRR), and some cancel entirely (Churn MRR).
        </p>
        <p className="mb-4">
          A specialized SaaS Cohort Sankey diagram allows growth product managers to map:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#a09d98] mb-6">
          <li><strong className="text-[#f0ede8]">Starting MRR:</strong> The recurring revenue base at the beginning of the quarter.</li>
          <li><strong className="text-[#f0ede8]">New &amp; Expansion Inflows:</strong> Fresh capital added by sales and upselling teams.</li>
          <li><strong className="text-[#f0ede8]">Contraction &amp; Churn Outflows:</strong> Revenue lost to cancellations and seat reductions.</li>
          <li><strong className="text-[#f0ede8]">Ending Net Retained MRR:</strong> The final revenue base carried into the next quarter.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#f0ede8] mb-4">5. Best Practices for Financial Sankey Formatting</h2>
        <p className="mb-4">
          To ensure your financial diagrams meet professional accounting standards when presented to investors or corporate boards, follow these essential design conventions:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-[#a09d98]">
          <li>
            <strong className="text-[#f0ede8]">Standardize Currency Scales:</strong> Always state the exact currency unit and multiplier (e.g., "$ in USD Thousands" or "€ in Millions") at the root node or diagram title.
          </li>
          <li>
            <strong className="text-[#f0ede8]">Use Semantic Financial Colors:</strong> In Western accounting traditions, use **Green** (`#00e676` or `#2e7d32`) exclusively for revenue, gross profit, savings, and positive net income. Use **Red or Orange** (`#d32f2f` or `#f57c00`) for taxes, COGS, debt payments, and operating losses. Use **Neutral Gray or Slate** for intermediate structural nodes.
          </li>
          <li>
            <strong className="text-[#f0ede8]">Order Nodes by Priority or Liquidity:</strong> Arrange outgoing branches vertically from top to bottom based on financial priority. For income statements, place mandatory COGS and fixed overhead at the top, and residual Net Income at the bottom. For personal budgets, place mandatory needs at the top and discretionary wants below.
          </li>
          <li>
            <strong className="text-[#f0ede8]">Verify Zero Discrepancy:</strong> In double-entry accounting, dollars do not vanish. Ensure that `Sum(Inflows) == Sum(Outflows)` for every single account node.
          </li>
        </ol>
      </section>

      <section className="bg-[#161513] border border-[#272521] p-6 rounded-xl mt-8">
        <h3 className="text-xl font-semibold text-[#f0ede8] mb-2">Visualize Your Financial Data Today</h3>
        <p className="text-sm text-[#a09d98] mb-4">
          Copy the SaaS Income Statement script above into SankeyLoop and replace the numbers with your own corporate P&amp;L or household budget to create a stunning, investor-ready visualization.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/app"
            className="bg-[#e8541a] hover:bg-[#d44812] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline shadow-md"
          >
            Launch Editor with Financial Script →
          </Link>
          <Link 
            to="/learn/sankeyloop-user-manual"
            className="bg-[#1a1917] border border-[#333128] hover:border-[#5a5754] text-[#f0ede8] px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline"
          >
            Next Guide: Editor User Manual →
          </Link>
        </div>
      </section>
    </div>
  );
};

export const guide3Article: GuideArticle = {
  id: 'guide-3',
  slug: 'financial-cash-flow-budgeting',
  title: 'Visualizing Financial Cash Flows, Budgets, and Corporate Income Statements',
  subtitle: 'Transform complex GAAP P&L statements, household 50/30/20 budgets, and SaaS unit economics into clear, intuitive flow diagrams.',
  category: 'Finance',
  readTime: '8 min read',
  date: 'July 4, 2026',
  excerpt: 'Learn why accounting is inherently a flow conservation system. Explore practical Sankey scripts for corporate SaaS income statements, household budgeting, and unit revenue retention.',
  author: {
    name: 'Tom Sanz',
    role: 'Lead Developer & Visualization Architect'
  },
  content: Guide3Content
};
