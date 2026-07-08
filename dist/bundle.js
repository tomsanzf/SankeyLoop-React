(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/main.tsx
  var import_react9 = __require("react");
  var import_client = __require("react-dom/client");

  // src/App.tsx
  var import_react_router_dom13 = __require("react-router-dom");

  // src/pages/Landing.tsx
  var import_react2 = __require("react");
  var import_react3 = __require("motion/react");
  var import_react_router_dom4 = __require("react-router-dom");
  var import_lucide_react = __require("lucide-react");

  // src/lib/utils.ts
  var import_clsx = __require("clsx");
  var import_tailwind_merge = __require("tailwind-merge");
  function cn(...inputs) {
    return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
  }

  // src/components/Header.tsx
  var import_react_router_dom = __require("react-router-dom");
  var import_jsx_runtime = __require("react/jsx-runtime");
  function Header() {
    const navigate = (0, import_react_router_dom.useNavigate)();
    const location = (0, import_react_router_dom.useLocation)();
    const openDonationPopup = () => {
      const width = 500;
      const height = 650;
      const left = (window.screen.width - width) / 2;
      const top = (window.screen.height - height) / 2;
      window.open(
        "https://buymeacoffee.com/tsanz",
        "BuyMeACoffeeDonation",
        `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
      );
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { className: "fixed top-0 left-0 right-0 z-[100] flex items-center gap-6 md:gap-8 h-[60px] px-6 md:px-12 bg-[#0c0c0b]/85 backdrop-blur-xl border-b border-[#272521] font-sans selection:bg-[#e8541a] selection:text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_router_dom.Link, { to: "/", className: "text-[17px] font-semibold tracking-tight text-[#f0ede8] no-underline", children: [
        "Sankey",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[#e8541a]", children: "Loop" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "hidden md:flex flex-1 gap-6 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_router_dom.Link, { to: "/", className: "text-[13px] font-medium text-[#a09d98] no-underline hover:text-[#f0ede8] transition-colors", children: "Home" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_router_dom.Link, { to: "/learn", className: `text-[13px] font-medium no-underline transition-colors ${location.pathname.startsWith("/learn") ? "text-[#e8541a]" : "text-[#a09d98] hover:text-[#f0ede8]"}`, children: "Tutorials & Guides" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_router_dom.Link, { to: "/about", className: `text-[13px] font-medium no-underline transition-colors ${location.pathname === "/about" ? "text-[#e8541a]" : "text-[#a09d98] hover:text-[#f0ede8]"}`, children: "About" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_router_dom.Link, { to: "/privacy", className: `text-[13px] font-medium no-underline transition-colors ${location.pathname === "/privacy" ? "text-[#e8541a]" : "text-[#a09d98] hover:text-[#f0ede8]"}`, children: "Privacy" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_router_dom.Link, { to: "/contact", className: `text-[13px] font-medium no-underline transition-colors ${location.pathname === "/contact" ? "text-[#e8541a]" : "text-[#a09d98] hover:text-[#f0ede8]"}`, children: "Contact" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          onClick: openDonationPopup,
          className: "ml-auto bg-transparent border border-[#ff813f] text-[#ff813f] hover:bg-[#ff813f] hover:text-white px-[14px] py-[6px] rounded-md text-[12px] font-semibold transition-all whitespace-nowrap cursor-pointer shadow-sm",
          children: "\u2615 Buy me a coffee"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          onClick: () => navigate("/app"),
          className: "bg-[#e8541a] text-white px-[18px] py-[7px] rounded-md text-[13px] font-semibold hover:opacity-90 transition-opacity whitespace-nowrap cursor-pointer shadow-sm",
          children: "Open App \u2192"
        }
      )
    ] });
  }

  // src/components/Footer.tsx
  var import_react_router_dom2 = __require("react-router-dom");
  var import_jsx_runtime2 = __require("react/jsx-runtime");
  function Footer() {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("footer", { className: "bg-[#0c0c0b] text-[#a09d98] border-t border-[#272521] py-12 px-6 md:px-12 font-sans selection:bg-[#e8541a] selection:text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "lg:col-span-2 pr-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react_router_dom2.Link, { to: "/", className: "text-xl font-semibold tracking-tight text-[#f0ede8] no-underline inline-block mb-3", children: [
            "Sankey",
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-[#e8541a]", children: "Loop" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-[13px] leading-relaxed text-[#8a8783] mb-4 max-w-sm", children: "The modern, interactive web application for visualizing complex energy flows, thermodynamic heat balances, material distribution, and financial budgets. Built with precision for engineers, analysts, and data professionals." }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "text-[12px] text-[#5a5754]", children: [
            "\xA9 ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " SankeyLoop. All rights reserved."
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { className: "text-[13px] font-semibold text-[#f0ede8] uppercase tracking-wider mb-3", children: "Application" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { className: "space-y-2 list-none p-0 m-0 text-[13px]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "/app", className: "text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline", children: "Open Sankey Editor" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: "/#examples", className: "text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline", children: "Sample Diagrams" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: "/#features", className: "text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline", children: "Key Features" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "a",
              {
                href: "https://buymeacoffee.com/tsanz",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-[#ff813f] hover:text-[#ff6c24] transition-colors no-underline font-medium",
                children: "\u2615 Support the Creator"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { className: "text-[13px] font-semibold text-[#f0ede8] uppercase tracking-wider mb-3", children: "Learning Hub" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { className: "space-y-2 list-none p-0 m-0 text-[13px]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "/learn", className: "text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline font-medium text-[#e8541a]", children: "All Tutorials & Guides" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "/learn/ultimate-guide-sankey-diagrams", className: "text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline", children: "Ultimate Sankey Guide" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "/learn/energy-efficiency-heat-balance", className: "text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline", children: "Energy & Heat Balance" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "/learn/financial-cash-flow-budgeting", className: "text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline", children: "Financial Cash Flow" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "/learn/sankeyloop-user-manual", className: "text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline", children: "Editor User Manual" }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { className: "text-[13px] font-semibold text-[#f0ede8] uppercase tracking-wider mb-3", children: "Trust & Legal" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { className: "space-y-2 list-none p-0 m-0 text-[13px]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "/about", className: "text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline", children: "About Us" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "/privacy", className: "text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline", children: "Privacy Policy" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "/terms", className: "text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline", children: "Terms of Service" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "/contact", className: "text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline", children: "Contact Us" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "max-w-7xl mx-auto pt-8 border-t border-[#1c1b18] text-center text-[11px] text-[#5a5754] leading-relaxed", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { children: [
        "SankeyLoop is dedicated to providing high-value educational content and modern flow visualization tools. Third-party advertising partners, including Google AdSense, use cookies to serve personalized ads based on prior web visits. For more details on cookie management and data privacy, please review our ",
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "/privacy", className: "text-[#8a8783] underline hover:text-[#f0ede8]", children: "Privacy Policy" }),
        "."
      ] }) })
    ] });
  }

  // src/components/EditorialSection.tsx
  var import_react_router_dom3 = __require("react-router-dom");
  var import_jsx_runtime3 = __require("react/jsx-runtime");
  function EditorialSection() {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("section", { className: "py-24 px-6 md:px-12 bg-[#0f0e0d] border-t border-[#272521]", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "max-w-[1200px] mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-[11px] font-semibold tracking-widest uppercase text-[#e8541a] mb-3", children: "Knowledge & Application" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: "font-serif text-3xl md:text-5xl font-semibold text-[#f0ede8] mb-8 leading-tight", children: "Why Visualize Flows? The Economics of Conservation" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 text-[#a09d98] leading-relaxed text-sm md:text-base", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bg-[#1a1917] p-6 md:p-8 rounded-2xl border border-[#272521] flex flex-col justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-3xl mb-4", children: "\u{1F52C}" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-lg font-bold text-[#f0ede8] mb-3", children: "Thermodynamic Heat Balance" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mb-4 text-sm", children: "In thermal power generation, chemical refining, and HVAC engineering, over 50% of input fuel energy can be lost as waste heat. A Sankey diagram transforms complex enthalpy equations into a visual map of exergy destruction, making thermal inefficiencies immediately apparent to plant engineers." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            import_react_router_dom3.Link,
            {
              to: "/learn/energy-efficiency-heat-balance",
              className: "text-xs font-semibold text-[#ff813f] hover:text-white transition-colors no-underline pt-4 border-t border-[#272521] inline-flex items-center gap-1 mt-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Read Engineering Guide" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "\u2192" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bg-[#1a1917] p-6 md:p-8 rounded-2xl border border-[#272521] flex flex-col justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-3xl mb-4", children: "\u{1F4BC}" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-lg font-bold text-[#f0ede8] mb-3", children: "Corporate P&L & Cash Flows" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mb-4 text-sm", children: "Standard double-entry spreadsheets obscure the macro-level story of where company revenue evaporates. By modeling GAAP income statements as a waterfall, CFOs and board members can instantly grasp gross margins, R&D overhead ratios, and net profit retention." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            import_react_router_dom3.Link,
            {
              to: "/learn/financial-cash-flow-budgeting",
              className: "text-xs font-semibold text-[#ff813f] hover:text-white transition-colors no-underline pt-4 border-t border-[#272521] inline-flex items-center gap-1 mt-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Read Financial Guide" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "\u2192" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "bg-[#1a1917] p-6 md:p-8 rounded-2xl border border-[#272521] flex flex-col justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-3xl mb-4", children: "\u{1F4CA}" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "text-lg font-bold text-[#f0ede8] mb-3", children: "SaaS Cohorts & Funnels" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "mb-4 text-sm", children: "Digital customer conversion is rarely a linear path. Mapping Monthly Recurring Revenue (MRR) expansion, contraction, and churn across customer cohorts allows product managers to pinpoint exact drop-off bottlenecks in user onboarding." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            import_react_router_dom3.Link,
            {
              to: "/learn/ultimate-guide-sankey-diagrams",
              className: "text-xs font-semibold text-[#ff813f] hover:text-white transition-colors no-underline pt-4 border-t border-[#272521] inline-flex items-center gap-1 mt-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "Explore Fundamentals Guide" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "\u2192" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "mt-12 p-8 bg-[#161513] border border-[#333128] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { className: "text-lg font-bold text-[#f0ede8] mb-1", children: "Looking for syntax rules or formatting tips?" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-[#a09d98]", children: "Our comprehensive Learning Hub features over 4,000 words of technical documentation and tutorials." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_react_router_dom3.Link,
          {
            to: "/learn",
            className: "bg-[#e8541a] hover:bg-[#d44812] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all whitespace-nowrap no-underline shadow-md",
            children: "Visit Learning Hub \u2192"
          }
        )
      ] })
    ] }) });
  }

  // src/components/FAQSection.tsx
  var import_react = __require("react");
  var import_jsx_runtime4 = __require("react/jsx-runtime");
  var faqs = [
    {
      q: "What is SankeyLoop and how does it work?",
      a: 'SankeyLoop is a modern, interactive web application designed for generating, formatting, and exporting high-precision Sankey flow diagrams. Unlike traditional tools that require writing complex D3 programming code or tedious manual dragging, SankeyLoop lets you describe your data flows using simple natural text (e.g., "Source [Amount] Target"). The rendering engine calculates optimal node positioning and link paths in real time.'
    },
    {
      q: "How does SankeyLoop ensure data privacy and security?",
      a: "SankeyLoop operates entirely client-side within your web browser. When you enter financial numbers, corporate budgets, or proprietary engineering measurements into the flow table, your data is never transmitted to or stored on our cloud servers. All calculations and layout saves are stored locally on your machine using HTML5 localStorage."
    },
    {
      q: "Can I export diagrams for presentations or academic publications?",
      a: "Yes! You can export your completed diagrams as high-resolution raster images (up to 3x scaled PNGs for crisp PowerPoint slide decks and PDF reports), scalable vector graphics (SVG for lossless editing in Adobe Illustrator or Figma), or smooth dynamic video transition animations (MP4/GIF) for presentations and social media storytelling."
    },
    {
      q: "How do I handle negative values, cyclic loops, or zero-flow lines?",
      a: "SankeyLoop includes advanced flow logic. If you input a negative value, the engine automatically reverses the arrow direction\u2014ideal for modeling return loops or heat regeneration. Zero-value flows render as faint ghost hairlines, ensuring your structural system diagram remains intact even when certain pathways are inactive."
    },
    {
      q: "Is SankeyLoop free to use, and how can I support its development?",
      a: 'SankeyLoop is 100% free to use for personal, academic, and commercial purposes without mandatory watermarks or subscription paywalls. If you find the tool valuable for your work or research, you can support continuous server hosting and open-source feature development by clicking the "\u2615 Buy me a coffee" button in the top navigation bar!'
    }
  ];
  function FAQSection() {
    const [openIndex, setOpenIndex] = (0, import_react.useState)(0);
    const toggle = (idx) => {
      setOpenIndex(openIndex === idx ? null : idx);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("section", { className: "py-24 px-6 md:px-12 bg-[#0c0c0b] border-t border-[#272521]", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "max-w-[900px] mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-[11px] font-semibold tracking-widest uppercase text-[#ff813f] mb-2", children: "Got Questions?" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "font-serif text-3xl md:text-5xl font-semibold text-[#f0ede8] mb-4", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-[#a09d98] text-sm md:text-base", children: "Everything you need to know about Sankey diagram modeling, privacy, and exports." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "space-y-4", children: faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "div",
          {
            className: "bg-[#161513] border border-[#272521] rounded-xl overflow-hidden transition-all",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                "button",
                {
                  onClick: () => toggle(idx),
                  className: "w-full p-6 text-left flex items-center justify-between gap-4 bg-transparent border-0 cursor-pointer text-[#f0ede8] hover:text-[#ff813f] transition-colors",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "font-semibold text-base md:text-lg", children: faq.q }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "text-xl font-bold text-[#ff813f] shrink-0", children: isOpen ? "\u2212" : "+" })
                  ]
                }
              ),
              isOpen && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "px-6 pb-6 pt-2 text-[#a09d98] text-sm md:text-base leading-relaxed border-t border-[#272521]/50", children: faq.a })
            ]
          },
          idx
        );
      }) })
    ] }) });
  }

  // src/pages/Landing.tsx
  var import_jsx_runtime5 = __require("react/jsx-runtime");
  var Reveal = ({ children, delay = 0, className, onClick }) => {
    const ref = (0, import_react2.useRef)(null);
    const isInView = (0, import_react3.useInView)(ref, { once: true, amount: 0.2 });
    const controls = (0, import_react3.useAnimation)();
    (0, import_react2.useEffect)(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_react3.motion.div,
      {
        ref,
        onClick,
        variants: {
          hidden: { opacity: 0, y: 28 },
          visible: { opacity: 1, y: 0 }
        },
        initial: "hidden",
        animate: controls,
        transition: { duration: 0.6, delay, ease: "easeOut" },
        className,
        children
      }
    );
  };
  var EXAMPLES = {
    steam: {
      config: { orientation: "h", highVal: 200, hotHighCol: "#FF0000", hotLowCol: "#FFFF00", midVal: 45, coldHighCol: "#0000FF", coldLowCol: "#800080", lowVal: 0, nodeAlignment: "center", nodeArrangement: "snap", vMargin: 100, hMargin: 50, nodeSpacing: 50, nodeThickness: 10, linkOpacity: 0.7, arrowSize: 15, labelSize: 13, labelColor: "#1e293b", defaultNodeColor: "#808080", figWidth: 1200, figHeight: 800, valueUnit: "kW", gradUnit: "\xB0C", gradGap: 20, theme: "light", bgColor: "#ffffff" },
      flows: [
        { Source: "Gas", Target: "Boiler", Value: "78", Color: "Black" },
        { Source: "Boiler", Target: "Steam", Value: "67", Color: "200" },
        { Source: "Boiler", Target: "Purge", Value: "1", Color: "170" },
        { Source: "Boiler", Target: "Stack", Value: "10", Color: "Black" },
        { Source: "Steam", Target: "Deaerator", Value: "6", Color: "200" },
        { Source: "Deaerator", Target: "Boiler", Value: "2", Color: "105" },
        { Source: "Feedwater", Target: "Deaerator", Value: "-4", Color: "20" },
        { Source: "Steam", Target: "Process", Value: "60", Color: "200" },
        { Source: "Process", Target: "Condensate Return", Value: "0", Color: "90" },
        { Source: "Process", Target: "Cndnste Not Returned", Value: "0", Color: "Black" },
        { Source: "Condensate Return", Target: "Deaerator", Value: "0", Color: "90" },
        { Source: "Process", Target: "Chilled Water", Value: "60", Color: "20" },
        { Source: "Chilled Water", Target: "Chiller", Value: "60", Color: "10" },
        { Source: "Elec", Target: "Chiller", Value: "20", Color: "Elec" },
        { Source: "Chiller", Target: "HP", Value: "80", Color: "30" },
        { Source: "Elec", Target: "HP", Value: "27", Color: "Elec" },
        { Source: "HP", Target: "Process", Value: "107", Color: "90" }
      ]
    },
    building: {
      config: { orientation: "h", highVal: 80, hotHighCol: "#FF4500", hotLowCol: "#FFA500", midVal: 20, coldHighCol: "#00BFFF", coldLowCol: "#8A2BE2", lowVal: 0, nodeAlignment: "center", nodeArrangement: "snap", vMargin: 80, hMargin: 50, nodeSpacing: 40, nodeThickness: 10, linkOpacity: 0.7, arrowSize: 15, labelSize: 13, labelColor: "#1e293b", defaultNodeColor: "#808080", figWidth: 1200, figHeight: 700, valueUnit: "kW", gradUnit: "\xB0C", gradGap: 20, theme: "light", bgColor: "#ffffff" },
      flows: [
        { Source: "Grid", Target: "Building", Value: "120", Color: "Elec" },
        { Source: "Gas Boiler", Target: "Building", Value: "80", Color: "70" },
        { Source: "Building", Target: "Heating", Value: "60", Color: "55" },
        { Source: "Building", Target: "Cooling", Value: "40", Color: "10" },
        { Source: "Building", Target: "Lighting", Value: "25", Color: "Elec" },
        { Source: "Building", Target: "Equipment", Value: "35", Color: "Elec" },
        { Source: "Building", Target: "Losses", Value: "40", Color: "Black" },
        { Source: "Heating", Target: "Occupied Spaces", Value: "50", Color: "50" },
        { Source: "Heating", Target: "Heat Loss", Value: "10", Color: "Black" },
        { Source: "Cooling", Target: "Occupied Spaces", Value: "35", Color: "12" },
        { Source: "Cooling", Target: "Rejected Heat", Value: "5", Color: "Black" }
      ]
    },
    grid: {
      config: { orientation: "h", highVal: 100, hotHighCol: "#FF6B00", hotLowCol: "#FFD700", midVal: 50, coldHighCol: "#00CED1", coldLowCol: "#4169E1", lowVal: 0, nodeAlignment: "center", nodeArrangement: "snap", vMargin: 80, hMargin: 50, nodeSpacing: 40, nodeThickness: 10, linkOpacity: 0.7, arrowSize: 15, labelSize: 13, labelColor: "#1e293b", defaultNodeColor: "#808080", figWidth: 1200, figHeight: 700, valueUnit: "GWh", gradUnit: "", gradGap: 20, theme: "light", bgColor: "#ffffff" },
      flows: [
        { Source: "Solar", Target: "Grid", Value: "45", Color: "Elec" },
        { Source: "Wind", Target: "Grid", Value: "38", Color: "Elec" },
        { Source: "Hydro", Target: "Grid", Value: "20", Color: "Elec" },
        { Source: "Gas", Target: "Grid", Value: "60", Color: "Black" },
        { Source: "Grid", Target: "Residential", Value: "62", Color: "Elec" },
        { Source: "Grid", Target: "Industrial", Value: "70", Color: "Elec" },
        { Source: "Grid", Target: "Commercial", Value: "25", Color: "Elec" },
        { Source: "Grid", Target: "Transmission Loss", Value: "6", Color: "Black" }
      ]
    }
  };
  function Landing() {
    const navigate = (0, import_react_router_dom4.useNavigate)();
    const [showDonationModal, setShowDonationModal] = (0, import_react2.useState)(false);
    const loadExample = (key) => {
      const data = EXAMPLES[key];
      if (!data) return;
      try {
        localStorage.setItem("sankeyloop_load_example", JSON.stringify(data));
        navigate("/app");
      } catch (e) {
        navigate("/app");
      }
    };
    const openDonationPopup = () => {
      const width = 500;
      const height = 650;
      const left = (window.screen.width - width) / 2;
      const top = (window.screen.height - height) / 2;
      window.open(
        "https://buymeacoffee.com/tsanz",
        "BuyMeACoffeeDonation",
        `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
      );
    };
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "bg-[#0c0c0b] text-[#f0ede8] font-sans selection:bg-[#e8541a] selection:text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Header, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative min-h-screen grid lg:grid-cols-2 items-center gap-12 px-6 md:px-12 pt-[100px] pb-20 overflow-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "absolute top-[50%] right-[30%] w-[60%] h-[50%] bg-[radial-gradient(ellipse,rgba(232,84,26,0.07)_0%,transparent_70%)] translate-x-[50%] translate-y-[-50%]" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "absolute bottom-[20%] left-[20%] w-[40%] h-[60%] bg-[radial-gradient(ellipse,rgba(59,127,212,0.06)_0%,transparent_60%)] translate-x-[-50%] translate-y-[50%]" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "relative z-10", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Reveal, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "inline-flex items-center gap-2 mb-6 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#e8541a]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "w-6 h-px bg-[#e8541a]" }),
            "Flow visualization tool"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("h1", { className: "font-serif text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-6", children: [
            "Where ",
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("em", { className: "italic text-[#e8541a] pr-1", children: "flows" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("br", {}),
            "find their shape"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "max-w-[420px] mb-10 text-[17px] leading-relaxed text-[#a09d98] font-light", children: "SankeyLoop turns complex energy, steam, water, CO2 and other flows into clear, interactive diagrams. No login. No installation. Just drag, drop, and share." }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
              "button",
              {
                onClick: () => navigate("/app"),
                className: "inline-flex items-center gap-2 bg-[#e8541a] text-white px-7 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition-all hover:-translate-y-[1px]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react.ArrowRight, { size: 16 }),
                  "Open the App"
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "#examples", className: "text-sm font-medium text-[#a09d98] hover:text-[#f0ede8] transition-colors no-underline", children: "See examples \u2193" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-wrap gap-5 mt-10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center gap-1.5 text-xs font-medium text-[#5a5754]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-[#e8541a]" }),
              " Thermal gradients"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center gap-1.5 text-xs font-medium text-[#5a5754]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-[#3b7fd4]" }),
              " Temperature-coded flows"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center gap-1.5 text-xs font-medium text-[#5a5754]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-[#22c55e]" }),
              " Free forever"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "relative flex items-center justify-center lg:order-last order-first", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Reveal, { delay: 0.15, className: "w-full max-w-[520px]", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative p-1 bg-[#1a1917] rounded-xl border border-[#272521] shadow-2xl overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("svg", { viewBox: "0 0 520 340", xmlns: "http://www.w3.org/2000/svg", className: "w-full h-auto drop-shadow-[0_0_40px_rgba(232,84,26,0.12)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("style", { children: `
                  @keyframes flowDash {
                    from { stroke-dashoffset: 200; }
                    to   { stroke-dashoffset: 0; }
                  }
                  .flow-animated {
                    stroke-dasharray: 6 4;
                    animation: flowDash 2.5s linear infinite;
                  }
                  @keyframes nodePulse {
                    0%, 100% { opacity: 0.8; transform: translateY(0); }
                    50%      { opacity: 1; transform: translateY(-2px); }
                  }
                ` }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { width: "520", height: "340", fill: "#131311", rx: "12" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 426 137.5 C 460 137.5, 490 120, 490 80 C 490 40, 440 40, 400 40 L 260 40 C 210 40, 180 40, 180 80 C 180 120, 200 137.5, 210 137.5", fill: "none", stroke: "#f59e0b", strokeWidth: "15", strokeOpacity: "0.7" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 426 137.5 C 460 137.5, 490 120, 490 80 C 490 40, 440 40, 400 40 L 260 40 C 210 40, 180 40, 180 80 C 180 120, 200 137.5, 210 137.5", fill: "none", stroke: "#fbbf24", strokeWidth: "13", strokeOpacity: "0.4", className: "flow-animated" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 36 160 L 90 160", fill: "none", stroke: "#57534e", strokeWidth: "40", strokeOpacity: "0.6" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 36 160 L 90 160", fill: "none", stroke: "#78716c", strokeWidth: "38", strokeOpacity: "0.3", className: "flow-animated" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 96 160 L 150 160", fill: "none", stroke: "#ef4444", strokeWidth: "30", strokeOpacity: "0.6" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 96 160 L 150 160", fill: "none", stroke: "#f87171", strokeWidth: "28", strokeOpacity: "0.3", className: "flow-animated" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 96 178 C 150 178, 150 272, 280 272", fill: "none", stroke: "#444240", strokeWidth: "4", strokeOpacity: "0.8" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 156 160 C 180 160, 180 155, 210 155", fill: "none", stroke: "#ef4444", strokeWidth: "30", strokeOpacity: "0.6" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 156 160 C 180 160, 180 155, 210 155", fill: "none", stroke: "#f87171", strokeWidth: "28", strokeOpacity: "0.3", className: "flow-animated" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 216 150 L 280 150", fill: "none", stroke: "#8b5cf6", strokeWidth: "25", strokeOpacity: "0.6" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 216 150 L 280 150", fill: "none", stroke: "#a78bfa", strokeWidth: "23", strokeOpacity: "0.3", className: "flow-animated" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 286 150 L 350 150", fill: "none", stroke: "#8b5cf6", strokeWidth: "25", strokeOpacity: "0.6" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 286 150 L 350 150", fill: "none", stroke: "#a78bfa", strokeWidth: "23", strokeOpacity: "0.3", className: "flow-animated" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 356 150 L 420 150", fill: "none", stroke: "#8b5cf6", strokeWidth: "25", strokeOpacity: "0.6" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 356 150 L 420 150", fill: "none", stroke: "#a78bfa", strokeWidth: "23", strokeOpacity: "0.3", className: "flow-animated" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 286 225 C 320 225, 320 165, 350 165", fill: "none", stroke: "#22c55e", strokeWidth: "10", strokeOpacity: "0.7" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 286 225 C 320 225, 320 165, 350 165", fill: "none", stroke: "#4ade80", strokeWidth: "8", strokeOpacity: "0.3", className: "flow-animated" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 286 235 C 350 235, 350 165, 420 165", fill: "none", stroke: "#22c55e", strokeWidth: "10", strokeOpacity: "0.7" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M 286 235 C 350 235, 350 165, 420 165", fill: "none", stroke: "#4ade80", strokeWidth: "8", strokeOpacity: "0.3", className: "flow-animated" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "30", y: "140", width: "6", height: "40", rx: "2", fill: "#78716c" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "90", y: "140", width: "6", height: "40", rx: "2", fill: "#78716c" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "150", y: "145", width: "6", height: "30", rx: "2", fill: "#78716c" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "210", y: "130", width: "6", height: "50", rx: "2", fill: "#78716c" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "280", y: "137.5", width: "6", height: "25", rx: "2", fill: "#78716c" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "350", y: "137.5", width: "6", height: "32.5", rx: "2", fill: "#78716c" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "420", y: "130", width: "6", height: "40", rx: "2", fill: "#78716c" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "280", y: "220", width: "6", height: "20", rx: "2", fill: "#78716c" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "280", y: "270", width: "6", height: "4", rx: "2", fill: "#78716c" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("g", { fill: "#a8a29e", fontSize: "10", fontFamily: "sans-serif", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("text", { x: "26", y: "160", textAnchor: "end", dominantBaseline: "middle", children: "Gas" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("text", { x: "93", y: "133", textAnchor: "middle", children: "Boiler" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("text", { x: "153", y: "138", textAnchor: "middle", children: "Steam" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("text", { x: "213", y: "123", textAnchor: "middle", children: "Process" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("text", { x: "283", y: "130", textAnchor: "middle", children: "Chilled Water" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("text", { x: "353", y: "130", textAnchor: "middle", children: "Chiller" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("text", { x: "430", y: "160", textAnchor: "start", dominantBaseline: "middle", children: "HP" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("text", { x: "276", y: "230", textAnchor: "end", dominantBaseline: "middle", children: "Elec" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("text", { x: "288", y: "272", textAnchor: "start", dominantBaseline: "middle", fill: "#5a5754", children: "Stack Loss" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "div",
            {
              className: "absolute top-[12%] left-[45%] bg-[#f59e0b]/15 border border-[#f59e0b]/30 rounded-md px-3 py-1 text-[10px] font-mono text-[#fbbf24]",
              style: { animation: "nodePulse 3s ease-in-out infinite" },
              children: "167 kW Heat Recovery"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "div",
            {
              className: "absolute bottom-[20%] right-[12%] bg-[#22c55e]/15 border border-[#22c55e]/30 rounded-md px-3 py-1 text-[10px] font-mono text-[#4ade80]",
              style: { animation: "nodePulse 3.5s ease-in-out infinite both" },
              children: "Elec 47 kW"
            }
          )
        ] }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "bg-[#131311] border-y border-[#272521] py-24 px-6 md:px-12", id: "what", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "max-w-[1200px] mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Reveal, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-[11px] font-semibold tracking-[0.12em] uppercase text-[#e8541a] mb-4", children: "About" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "font-serif text-3xl md:text-5xl font-semibold leading-tight mb-8", children: "What is a Sankey diagram?" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "grid lg:grid-cols-2 gap-16 items-center mt-16", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Reveal, { className: "text-[#a09d98] leading-relaxed font-light text-base space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
              "A ",
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-[#f0ede8] font-medium", children: "Sankey diagram" }),
              " is a flow visualization where the width of each arrow is proportional to the quantity it represents \u2014 making it immediately obvious where the big flows are, where energy is lost, and where efficiencies can be found."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
              "First used by Irish engineer Matthew Sankey in 1898 to visualize steam engine efficiency, they are now the go-to tool for engineers, sustainability analysts, and process designers working with ",
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-[#f0ede8] font-medium", children: "energy balances, material flows, supply chains, and carbon accounts" }),
              "."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "SankeyLoop adds a thermal gradient layer: flow colors encode temperature, so hot and cold streams are visually distinct at a glance \u2014 no legend required." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Reveal, { delay: 0.1, className: "bg-[#1a1917] border border-[#272521] rounded-xl p-8 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("svg", { viewBox: "0 0 320 180", xmlns: "http://www.w3.org/2000/svg", className: "w-full max-w-[320px]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "10", y: "40", width: "8", height: "100", rx: "2", fill: "#57534e" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("text", { x: "5", y: "36", fontFamily: "sans-serif", fontSize: "9", fill: "#9b9894", children: "100 kW" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "302", y: "40", width: "8", height: "60", rx: "2", fill: "#57534e" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("text", { x: "280", y: "36", fontFamily: "sans-serif", fontSize: "9", fill: "#9b9894", children: "60 kW" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "302", y: "120", width: "8", height: "40", rx: "2", fill: "#57534e" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("text", { x: "278", y: "116", fontFamily: "sans-serif", fontSize: "9", fill: "#5a5754", children: "40 kW" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M18 55 C160 55, 160 55, 302 55", fill: "none", stroke: "#e8541a", strokeWidth: "28", strokeOpacity: "0.3" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M162 42 C230 42, 230 55, 302 55", fill: "none", stroke: "#e8541a", strokeWidth: "24", strokeOpacity: "0.4" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M162 115 C230 115, 230 130, 302 130", fill: "none", stroke: "#444240", strokeWidth: "16", strokeOpacity: "0.5" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("line", { x1: "60", y1: "38", x2: "60", y2: "72", stroke: "#333128", strokeWidth: "1", strokeDasharray: "3 2" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("text", { x: "63", y: "58", fontFamily: "sans-serif", fontSize: "9", fill: "#5a5754", children: "width \u221D flow" })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { id: "examples", className: "max-w-[1200px] mx-auto py-24 px-6 md:px-12", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Reveal, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-[11px] font-semibold tracking-[0.12em] uppercase text-[#e8541a] mb-4", children: "Examples" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "font-serif text-3xl md:text-5xl font-semibold leading-tight mb-4", children: "Start from a template" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-[#a09d98] font-light text-base mb-14", children: "Click any example to open it directly in the app." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            ExampleCard,
            {
              title: "Steam & Heat System",
              tag: "Energy",
              desc: "Industrial boiler, steam distribution, condensate return, and heat recovery.",
              previewGradient: "from-[#1a100a] to-[#2a1206]",
              onClick: () => loadExample("steam")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            ExampleCard,
            {
              title: "Building Energy Balance",
              tag: "Buildings",
              desc: "Heating, cooling, ventilation, lighting, and plug loads in a building.",
              previewGradient: "from-[#080e14] to-[#0a1826]",
              onClick: () => loadExample("building")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            ExampleCard,
            {
              title: "Electricity Grid Mix",
              tag: "Power",
              desc: "Solar, wind, gas, and hydro generation flowing to demand centers.",
              previewGradient: "from-[#080e0a] to-[#081408]",
              onClick: () => loadExample("grid")
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "bg-[#131311] border-y border-[#272521] py-24 px-6 md:px-12", id: "features", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "max-w-[1200px] mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Reveal, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-[11px] font-semibold tracking-[0.12em] uppercase text-[#e8541a] mb-4", children: "Features" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("h2", { className: "font-serif text-3xl md:text-5xl font-semibold leading-tight mb-16", children: [
            "Everything you need,",
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("br", {}),
            "nothing you don't"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            FeatureCard,
            {
              icon: "\u{1F321}\uFE0F",
              title: "Thermal gradient colors",
              desc: "Assign temperatures to each flow. Hot streams glow red, cold streams turn blue \u2014 automatically."
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            FeatureCard,
            {
              icon: "\u{1F19A}",
              title: "Before & After scenarios",
              desc: "Design and compare two states of your system. Switch between them instantly to see the delta.",
              delay: 0.05
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            FeatureCard,
            {
              icon: "\u{1F504}",
              title: "Synchronized layout views",
              desc: "Sync node structures between scenarios. Dragging a node in one scenario mirrors its position in the other.",
              delay: 0.1
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            FeatureCard,
            {
              icon: "\u{1F3AC}",
              title: "Transition GIF animation",
              desc: "Calculate intermediate steps (25%, 50%, 75%) and export high-fidelity transition GIFs.",
              delay: 0.15
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            FeatureCard,
            {
              icon: "\u{1F4D0}",
              title: "Preserve Input Order",
              desc: "Order nodes and links strictly by the flow table sequence, generating clean, crossing-free layouts.",
              delay: 0.2
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            FeatureCard,
            {
              icon: "\u{1F5B1}\uFE0F",
              title: "Drag & drop custom layout",
              desc: "Drag any node to place it. Change colors, opacity, or fonts \u2014 your custom positions are preserved.",
              delay: 0.25
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            FeatureCard,
            {
              icon: "\u{1F4CB}",
              title: "Paste from Excel",
              desc: "Copy a range of cells directly from Excel or Google Sheets and paste them instantly into the flow table.",
              delay: 0.3
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            FeatureCard,
            {
              icon: "\u{1F4BE}",
              title: "Save & Load configurations",
              desc: "Save your complete work \u2014 including custom layouts, colors, and flows \u2014 to a single local JSON file.",
              delay: 0.35
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            FeatureCard,
            {
              icon: "\u{1F47B}",
              title: "Ghost flow lines",
              desc: "Zero-value flows render as faint hairlines, keeping the diagram complete even when no flow is active.",
              delay: 0.4
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            FeatureCard,
            {
              icon: "\u{1F501}",
              title: "Negative value support",
              desc: "Enter a negative value to reverse flow directions automatically \u2014 perfect for return loops.",
              delay: 0.45
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            FeatureCard,
            {
              icon: "\u{1F319}",
              title: "Light & dark UI themes",
              desc: "Switch between a clean white layout and a dark engineering-style canvas with one click.",
              delay: 0.5
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            FeatureCard,
            {
              icon: "\u{1F512}",
              title: "Private & local-first",
              desc: "Runs entirely in your browser. Your data never leaves your machine. No logins or accounts required.",
              delay: 0.55
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(EditorialSection, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FAQSection, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "bg-[#131311] border-y border-[#272521] text-center py-24 px-6 md:px-12", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Reveal, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "font-serif text-4xl md:text-6xl font-semibold mb-4 leading-tight", children: "Ready to map your flows?" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-[#a09d98] text-lg mb-10 font-light", children: "Free, instant, no setup required." }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "button",
          {
            onClick: () => navigate("/app"),
            className: "inline-flex items-center gap-2 bg-[#e8541a] text-white px-9 py-4 rounded-md text-base font-semibold hover:opacity-90 transition-all",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react.ArrowRight, { size: 18 }),
              "Open SankeyLoop"
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Footer, {}),
      showDonationModal && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "div",
        {
          className: "fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
          onClick: () => setShowDonationModal(false),
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
            "div",
            {
              className: "bg-[#1a1917] border border-[#272521] p-6 rounded-xl shadow-2xl max-w-sm w-full relative text-center",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  "button",
                  {
                    className: "absolute top-4 right-4 text-[#5a5754] hover:text-[#f0ede8] text-lg leading-none bg-transparent border-0 cursor-pointer",
                    onClick: () => setShowDonationModal(false),
                    children: "\xD7"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-3xl mb-3", children: "\u2615" }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "text-[#f0ede8] text-lg font-semibold tracking-tight mb-2", children: "Thank you for supporting this website!" }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-[#a09d98] text-[12px] leading-relaxed mb-6", children: "Please enter the amount you want to donate on the Buy Me a Coffee page." }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                    "button",
                    {
                      className: "w-full py-2 rounded-md font-semibold bg-[#ff813f] hover:bg-[#ff6c24] text-white transition-colors border-0 cursor-pointer text-xs shadow-md",
                      onClick: () => {
                        openDonationPopup();
                        setShowDonationModal(false);
                      },
                      children: "Open Buy Me a Coffee Page"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                    "button",
                    {
                      className: "w-full py-2 rounded-md font-medium border border-[#272521] bg-transparent text-[#a09d98] hover:bg-[#272521] hover:text-[#f0ede8] cursor-pointer transition-colors text-xs",
                      onClick: () => setShowDonationModal(false),
                      children: "Cancel"
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-[#5a5754] text-[10px] mt-4 leading-normal", children: "\u{1F512} Payment processed securely by Buy Me a Coffee. Payment portals cannot be embedded directly inside other websites for anti-phishing protection." })
              ]
            }
          )
        }
      )
    ] });
  }
  var ExampleCard = ({ title, tag, desc, previewGradient, onClick }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Reveal, { className: "group bg-[#1a1917] border border-[#272521] rounded-xl overflow-hidden transition-all hover:border-[#333128] hover:-translate-y-1 cursor-pointer", onClick, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: cn("h-[140px] flex items-center justify-center p-4 bg-gradient-to-br", previewGradient), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("svg", { viewBox: "0 0 200 100", className: "w-[90%] opacity-90", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M10 50 C50 50,50 30,90 30", fill: "none", stroke: "#e8541a", strokeWidth: "22", strokeOpacity: "0.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M90 30 C130 30,130 20,190 20", fill: "none", stroke: "#f59e0b", strokeWidth: "14", strokeOpacity: "0.4" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M90 58 C130 58,130 75,190 75", fill: "none", stroke: "#333", strokeWidth: "8", strokeOpacity: "0.6" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "6", y: "30", width: "7", height: "40", rx: "2", fill: "#57534e" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("rect", { x: "86", y: "18", width: "7", height: "52", rx: "2", fill: "#57534e" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "p-5 border-t border-[#272521]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-[10px] font-semibold tracking-widest uppercase text-[#5a5754] mb-1.5", children: tag }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-[15px] font-semibold mb-1.5", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-sm text-[#a09d98] font-light leading-relaxed mb-4", children: desc }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "inline-flex items-center gap-1.5 text-xs font-semibold text-[#e8541a] group-hover:gap-2.5 transition-all", children: "Load example \u2192" })
    ] })
  ] });
  var FeatureCard = ({ icon, title, desc, delay = 0 }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Reveal, { delay, className: "bg-[#1a1917] border border-[#272521] rounded-xl p-7 transition-all hover:border-[#333128]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-2xl mb-4 grayscale group-hover:grayscale-0 transition-all", children: icon }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-sm font-semibold mb-2 text-[#f0ede8]", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-[13px] text-[#a09d98] leading-relaxed font-light", children: desc })
  ] });

  // src/pages/Editor.tsx
  var import_react6 = __require("react");
  var import_lucide_react3 = __require("lucide-react");

  // src/components/SankeyDiagram.tsx
  var import_react4 = __require("react");
  var import_plotly = __toESM(__require("plotly.js-dist-min"), 1);

  // src/constants.ts
  var NAMED_COLORS = {
    red: "#FF0000",
    green: "#008000",
    blue: "#0000FF",
    yellow: "#FFFF00",
    orange: "#FFA500",
    purple: "#800080",
    pink: "#FFC0CB",
    brown: "#A52A2A",
    black: "#000000",
    white: "#FFFFFF",
    grey: "#808080",
    gray: "#808080",
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    lime: "#00FF00",
    navy: "#000080",
    teal: "#008080",
    maroon: "#800000",
    olive: "#808000",
    coral: "#FF7F50",
    salmon: "#FA8072",
    gold: "#FFD700",
    indigo: "#4B0082",
    violet: "#EE82EE",
    turquoise: "#40E0D0",
    silver: "#C0C0C0",
    beige: "#F5F5DC",
    lavender: "#E6E6FA",
    khaki: "#F0E68C",
    crimson: "#DC143C"
  };

  // src/lib/sankeyUtils.ts
  function hexToRgb(hex) {
    hex = hex.replace("#", "");
    if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
    const n = parseInt(hex, 16);
    return [n >> 16 & 255, n >> 8 & 255, n & 255];
  }
  function interpolateRgb(v, minV, maxV, col1, col2, opacity) {
    if (maxV === minV) {
      const [r, g, b] = hexToRgb(col1);
      return `rgba(${r},${g},${b},${opacity})`;
    }
    const f = Math.max(0, Math.min(1, (v - minV) / (maxV - minV)));
    const [r1, g1, b1] = hexToRgb(col1);
    const [r2, g2, b2] = hexToRgb(col2);
    return `rgba(${Math.round(r1 + (r2 - r1) * f)},${Math.round(g1 + (g2 - g1) * f)},${Math.round(b1 + (b2 - b1) * f)},${opacity})`;
  }
  function getLinkColor(colorVal, cfg, opacityOverride) {
    const opacity = opacityOverride !== void 0 ? opacityOverride : cfg.linkOpacity;
    if (!colorVal && colorVal !== 0) return `rgba(150,150,150,${opacity})`;
    const s = String(colorVal).trim().toLowerCase();
    if (s === "elec") return `rgba(0,200,0,${opacity})`;
    if (s === "black") return `rgba(0,0,0,${opacity})`;
    if (s.startsWith("#")) {
      try {
        const [r, g, b] = hexToRgb(s);
        return `rgba(${r},${g},${b},${opacity})`;
      } catch {
        return `rgba(150,150,150,${opacity})`;
      }
    }
    const v = parseFloat(s);
    if (isNaN(v)) return `rgba(150,150,150,${opacity})`;
    const { highVal, midVal, lowVal, hotHighCol, hotLowCol, coldHighCol, coldLowCol } = cfg;
    if (v >= midVal) return interpolateRgb(v, midVal, highVal, hotLowCol, hotHighCol, opacity);
    return interpolateRgb(v, lowVal, midVal, coldLowCol, coldHighCol, opacity);
  }
  function resolveNodeColor(s, fallback) {
    if (!s) return fallback;
    const low = s.trim().toLowerCase();
    if (low.startsWith("#") && (low.length === 4 || low.length === 7)) return s.trim().toUpperCase();
    return NAMED_COLORS[low] || fallback;
  }
  function buildSankeyData(flows, cfg) {
    const labels = [], l2i = {}, src = [], tgt = [], val = [], linkColors = [], isGhost = [], warnings = [];
    flows.forEach((row) => {
      let source = String(row.Source || "").trim();
      let target = String(row.Target || "").trim();
      if (!source || !target) return;
      const parsed = parseFloat(String(row.Value || "").replace(",", "."));
      if (isNaN(parsed)) {
        warnings.push(`\u26A0\uFE0F Cannot parse value "${row.Value}" for ${source} \u2192 ${target}`);
        return;
      }
      let v2 = parsed;
      if (v2 < 0) {
        [source, target, v2] = [target, source, Math.abs(v2)];
      }
      const ghost = v2 === 0;
      for (const n of [source, target]) {
        if (!(n in l2i)) {
          l2i[n] = labels.length;
          labels.push(n);
        }
      }
      src.push(l2i[source]);
      tgt.push(l2i[target]);
      val.push(ghost ? 1e-3 : v2);
      isGhost.push(ghost);
      linkColors.push(getLinkColor(row.Color, cfg, ghost ? cfg.ghostOpacity : void 0));
    });
    return { labels, src, tgt, val, linkColors, isGhost, warnings };
  }
  function computeSankeyMetrics(scenario, cfg) {
    const pad = scenario.nodeSpacing ?? cfg.nodeSpacing;
    const { src, tgt, val, labels } = buildSankeyData(scenario.flows, cfg);
    if (!labels.length) return { ppu: Infinity, cols: {}, pad, availableHeight: cfg.figHeight - 2 * cfg.vMargin };
    const nodeIn = new Array(labels.length).fill(0);
    const nodeOut = new Array(labels.length).fill(0);
    for (let i = 0; i < src.length; i++) {
      nodeOut[src[i]] += val[i];
      nodeIn[tgt[i]] += val[i];
    }
    const nodeValues = labels.map((_, i) => Math.max(nodeIn[i], nodeOut[i]));
    let nodeX;
    if (scenario.hasDraggedNodes && scenario.nodePositions && Object.keys(scenario.nodePositions).length > 0) {
      const xs = labels.map((l) => scenario.nodePositions[l]?.x);
      if (xs.every((x) => x != null)) nodeX = xs;
    }
    if (!nodeX && cfg.nodeAlignment !== "justify") {
      nodeX = computeAlignedX(src, tgt, val, labels, cfg.nodeAlignment);
    }
    if (!nodeX) {
      nodeX = computeAlignedX(src, tgt, val, labels, "justify");
    }
    const cols = {};
    nodeX.forEach((nx, i) => {
      const k = nx.toFixed(2);
      if (!cols[k]) cols[k] = { n: 0, v: 0, nx };
      cols[k].n += 1;
      cols[k].v += nodeValues[i];
    });
    for (let i = 0; i < src.length; i++) {
      const sX = nodeX[src[i]];
      const tX = nodeX[tgt[i]];
      if (tX <= sX) {
        Object.values(cols).forEach((col) => {
          if (col.nx >= tX - 1e-3 && col.nx <= sX + 1e-3) {
            col.v += val[i];
          }
        });
      }
    }
    const availableHeight = cfg.figHeight - 2 * cfg.vMargin;
    let minPPU = Infinity;
    Object.values(cols).forEach((col) => {
      if (col.n === 0) return;
      const ppu = Math.max(0, availableHeight - pad * (col.n - 1)) / (col.v || 1e-5);
      if (ppu < minPPU) minPPU = ppu;
    });
    return { ppu: minPPU, cols, pad, availableHeight };
  }
  function getExportDimensions(config) {
    if (config.aspectRatio === "custom" || config.aspectRatio === "fit") {
      return { width: config.figWidth, height: config.figHeight };
    }
    let ratio = 16 / 9;
    if (config.aspectRatio === "4:3") ratio = 4 / 3;
    if (config.aspectRatio === "1:1") ratio = 1;
    return { width: config.figWidth, height: Math.round(config.figWidth / ratio) };
  }
  function computeAlignedX(src, tgt, val, labels, alignment) {
    const N = labels.length;
    const minDepth = new Array(N).fill(Infinity);
    const maxDepth = new Array(N).fill(-Infinity);
    const outEdges = Array.from({ length: N }, () => []);
    const inEdges = Array.from({ length: N }, () => []);
    src.forEach((s, i) => {
      outEdges[s].push(tgt[i]);
      inEdges[tgt[i]].push(s);
    });
    const sources = labels.map((_, i) => i).filter((i) => inEdges[i].length === 0);
    const queue = sources.map((s) => ({ node: s, path: /* @__PURE__ */ new Set([s]) }));
    sources.forEach((s) => {
      minDepth[s] = 0;
    });
    if (queue.length === 0 && N > 0) {
      queue.push({ node: 0, path: /* @__PURE__ */ new Set([0]) });
      minDepth[0] = 0;
    }
    while (queue.length) {
      const { node: cur, path } = queue.shift();
      outEdges[cur].forEach((next) => {
        if (!path.has(next) && minDepth[cur] + 1 < minDepth[next]) {
          minDepth[next] = minDepth[cur] + 1;
          const newPath = new Set(path);
          newPath.add(next);
          queue.push({ node: next, path: newPath });
        }
      });
    }
    for (let i = 0; i < N; i++) if (minDepth[i] === Infinity) minDepth[i] = 0;
    const sinks = labels.map((_, i) => i).filter((i) => outEdges[i].length === 0);
    const maxD = Math.max(...minDepth);
    if (maxD === 0) return labels.map(() => 0.5);
    sinks.forEach((s) => {
      maxDepth[s] = maxD;
    });
    const queue2 = sinks.map((s) => ({ node: s, path: /* @__PURE__ */ new Set([s]) }));
    if (queue2.length === 0 && N > 0) {
      const lastNode = minDepth.indexOf(maxD);
      queue2.push({ node: lastNode, path: /* @__PURE__ */ new Set([lastNode]) });
      maxDepth[lastNode] = maxD;
    }
    while (queue2.length) {
      const { node: cur, path } = queue2.shift();
      inEdges[cur].forEach((prev) => {
        if (!path.has(prev) && maxDepth[cur] - 1 > maxDepth[prev]) {
          maxDepth[prev] = maxDepth[cur] - 1;
          const newPath = new Set(path);
          newPath.add(prev);
          queue2.push({ node: prev, path: newPath });
        }
      });
    }
    for (let i = 0; i < N; i++) if (maxDepth[i] === -Infinity) maxDepth[i] = maxD;
    const cols = alignment === "left" ? minDepth : alignment === "right" ? maxDepth : alignment === "center" ? labels.map((_, i) => Math.round((minDepth[i] + maxDepth[i]) / 2)) : minDepth;
    const colMax = Math.max(...cols, 1);
    return cols.map((c) => 0.01 + c / colMax * 0.95);
  }
  function computePreservedPositions(scenario, config) {
    const { flows } = scenario;
    const { labels, src, tgt, val } = buildSankeyData(flows, config);
    if (!labels.length) return {};
    const orderedNodes = [];
    flows.forEach((flow) => {
      const source = String(flow.Source || "").trim();
      const target = String(flow.Target || "").trim();
      if (source && !orderedNodes.includes(source)) {
        orderedNodes.push(source);
      }
      if (target && !orderedNodes.includes(target)) {
        orderedNodes.push(target);
      }
    });
    let nodeX;
    if (scenario.hasDraggedNodes && scenario.nodePositions && Object.keys(scenario.nodePositions).length > 0) {
      const xs = labels.map((l) => scenario.nodePositions[l]?.x);
      if (xs.every((x) => x != null)) nodeX = xs;
    }
    if (!nodeX && scenario.nativePositions && Object.keys(scenario.nativePositions).length > 0) {
      const xs = labels.map((l) => scenario.nativePositions[l]?.x);
      if (xs.every((x) => x != null)) nodeX = xs;
    }
    if (!nodeX) {
      const N = labels.length;
      const outEdges = Array.from({ length: N }, () => []);
      const inEdges = Array.from({ length: N }, () => []);
      src.forEach((s, i) => {
        outEdges[s].push(tgt[i]);
        inEdges[tgt[i]].push(s);
      });
      const sources = labels.map((_, i) => i).filter((i) => inEdges[i].length === 0);
      const longestDepth = new Array(N).fill(0);
      const queue = sources.map((s) => ({ node: s, path: /* @__PURE__ */ new Set([s]) }));
      if (queue.length === 0 && N > 0) {
        queue.push({ node: 0, path: /* @__PURE__ */ new Set([0]) });
      }
      while (queue.length) {
        const { node: cur, path } = queue.shift();
        outEdges[cur].forEach((next) => {
          if (!path.has(next) && longestDepth[cur] + 1 > longestDepth[next]) {
            longestDepth[next] = longestDepth[cur] + 1;
            const newPath = new Set(path);
            newPath.add(next);
            queue.push({ node: next, path: newPath });
          }
        });
      }
      const colMax = Math.max(...longestDepth, 1);
      nodeX = longestDepth.map((c) => 0.01 + c / colMax * 0.95);
    }
    const nodeXMap = {};
    labels.forEach((label, idx) => {
      nodeXMap[label] = nodeX[idx];
    });
    const nodeScores = {};
    const nodeCounts = {};
    labels.forEach((l) => {
      nodeScores[l] = 0;
      nodeCounts[l] = 0;
    });
    flows.forEach((flow, idx) => {
      const source = String(flow.Source || "").trim();
      const target = String(flow.Target || "").trim();
      if (source && target) {
        nodeScores[source] += idx;
        nodeCounts[source] += 1;
        nodeScores[target] += idx;
        nodeCounts[target] += 1;
      }
    });
    const nodeYOffsets = {};
    labels.forEach((l) => {
      const avg = nodeCounts[l] > 0 ? nodeScores[l] / nodeCounts[l] : 0;
      const xVal = nodeXMap[l] || 0;
      const orderIdx = orderedNodes.indexOf(l);
      nodeYOffsets[l] = avg - xVal * 0.05 + orderIdx * 1e-3;
    });
    const tempNodePositions = {};
    labels.forEach((label, idx) => {
      tempNodePositions[label] = { x: nodeX[idx], y: 0.5 };
    });
    const tempScenario = {
      ...scenario,
      hasDraggedNodes: true,
      nodePositions: tempNodePositions
    };
    const { ppu, pad, availableHeight } = computeSankeyMetrics(tempScenario, config);
    const nodeIn = new Array(labels.length).fill(0);
    const nodeOut = new Array(labels.length).fill(0);
    for (let i = 0; i < src.length; i++) {
      nodeOut[src[i]] += val[i];
      nodeIn[tgt[i]] += val[i];
    }
    const nodeValues = {};
    labels.forEach((label, idx) => {
      nodeValues[label] = Math.max(nodeIn[idx], nodeOut[idx]);
    });
    const columns = {};
    labels.forEach((label) => {
      const x = nodeXMap[label];
      const k = x.toFixed(3);
      if (!columns[k]) {
        columns[k] = [];
      }
      columns[k].push(label);
    });
    Object.keys(columns).forEach((colKey) => {
      columns[colKey].sort((a, b) => {
        const idxA = orderedNodes.indexOf(a);
        const idxB = orderedNodes.indexOf(b);
        return (idxA === -1 ? 9999 : idxA) - (idxB === -1 ? 9999 : idxB);
      });
    });
    const sortedNodesForTieBreaker = Object.keys(nodeYOffsets).sort((a, b) => nodeYOffsets[a] - nodeYOffsets[b]);
    const numNodes = sortedNodesForTieBreaker.length;
    const positions = {};
    Object.keys(columns).forEach((colKey) => {
      const colNodes = columns[colKey];
      const n = colNodes.length;
      let totalNodeHeight = 0;
      colNodes.forEach((node) => {
        const val2 = nodeValues[node] || 0;
        totalNodeHeight += val2 * ppu;
      });
      const totalSpacing = pad * (n - 1);
      const totalColHeight = totalNodeHeight + totalSpacing;
      const yStart = availableHeight > totalColHeight ? (availableHeight - totalColHeight) / 2 : 0;
      let currentTop = yStart;
      colNodes.forEach((node) => {
        const val2 = nodeValues[node] || 0;
        const height = val2 * ppu;
        const center = currentTop + height / 2;
        const relativeY = availableHeight > 0 ? center / availableHeight : 0.5;
        const rank = sortedNodesForTieBreaker.indexOf(node);
        const tieBreaker = (rank - (numNodes - 1) / 2) * 2e-3;
        positions[node] = {
          x: nodeXMap[node],
          y: relativeY + tieBreaker
        };
        currentTop += height + pad;
      });
    });
    return positions;
  }
  function interpolateFlowColor(colorB, colorA, t, cfg) {
    const colB = String(colorB || "").trim();
    const colA = String(colorA !== void 0 ? colorA : colorB || "").trim();
    const vB = parseFloat(colB);
    const vA = parseFloat(colA);
    if (!isNaN(vB) && !isNaN(vA)) {
      const v = vB + (vA - vB) * t;
      return v.toFixed(2);
    }
    const rgbaB = getLinkColor(colB, cfg, 1);
    const rgbaA = getLinkColor(colA, cfg, 1);
    const parseRgba = (rgbaStr) => {
      const match = rgbaStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
      }
      return [150, 150, 150];
    };
    const [rB, gB, bB] = parseRgba(rgbaB);
    const [rA, gA, bA] = parseRgba(rgbaA);
    const r = Math.round(rB + (rA - rB) * t);
    const g = Math.round(gB + (gA - gB) * t);
    const b = Math.round(bB + (bA - bB) * t);
    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  }
  function getNodeLabel(label, total, flows, nodeHPs, valueUnit) {
    if (!label) return "";
    const isHP = nodeHPs?.[label] || false;
    if (isHP) {
      let outSum = 0;
      let elecInSum = 0;
      flows.forEach((flow) => {
        let source = String(flow.Source || "").trim();
        let target = String(flow.Target || "").trim();
        if (!source || !target) return;
        let val = parseFloat(String(flow.Value || "").replace(",", ".")) || 0;
        if (val < 0) {
          [source, target, val] = [target, source, Math.abs(val)];
        }
        const col = String(flow.Color || "").trim().toLowerCase();
        if (source === label) {
          outSum += val;
        }
        if (target === label && col === "elec") {
          elecInSum += val;
        }
      });
      const cop = elecInSum > 0 ? outSum / elecInSum : 0;
      const copText = cop > 0 ? `COP: ${cop.toFixed(2)}` : "COP: \u2014";
      return `${label}<br>${copText}<br>${total.toLocaleString("en").replace(/,/g, "\u2009")} ${valueUnit}`;
    }
    return `${label}<br>${total.toLocaleString("en").replace(/,/g, "\u2009")} ${valueUnit}`;
  }

  // src/components/SankeyDiagram.tsx
  var import_jsx_runtime6 = __require("react/jsx-runtime");
  var SankeyDiagram = ({
    scenario,
    config,
    onNodeDrag,
    animating,
    animSpeed,
    onRenderedPositions,
    onRenderedPPU,
    preserveInputOrder
  }) => {
    const outerRef = (0, import_react4.useRef)(null);
    const wrapperRef = (0, import_react4.useRef)(null);
    const containerRef = (0, import_react4.useRef)(null);
    const plotRef = (0, import_react4.useRef)(null);
    const observerRef = (0, import_react4.useRef)(null);
    const [dimensions, setDimensions] = (0, import_react4.useState)(null);
    (0, import_react4.useEffect)(() => {
      if (!outerRef.current) return;
      const updateDims = (width, height) => {
        if (width < 10 || height < 10) return;
        setDimensions((prev) => !prev || prev.width !== width || prev.height !== height ? { width, height } : prev);
      };
      const rect = outerRef.current.getBoundingClientRect();
      updateDims(rect.width, rect.height);
      const ro = new ResizeObserver((entries) => {
        for (let entry of entries) {
          updateDims(entry.contentRect.width, entry.contentRect.height);
        }
      });
      ro.observe(outerRef.current);
      observerRef.current = ro;
      return () => ro.disconnect();
    }, []);
    let wrapperStyle = { width: "100%", height: "100%" };
    let currentHeight = dimensions?.height || config.figHeight;
    if (dimensions && config.aspectRatio && config.aspectRatio !== "fit") {
      let ratio = 16 / 9;
      if (config.aspectRatio === "4:3") ratio = 4 / 3;
      if (config.aspectRatio === "1:1") ratio = 1;
      if (config.aspectRatio === "custom") ratio = config.figWidth / (config.figHeight || 1);
      const containerRatio = dimensions.width / dimensions.height;
      if (containerRatio > ratio) {
        wrapperStyle = { height: "100%", width: dimensions.height * ratio };
        currentHeight = dimensions.height;
      } else {
        wrapperStyle = { width: "100%", height: dimensions.width / ratio };
        currentHeight = dimensions.width / ratio;
      }
    }
    (0, import_react4.useEffect)(() => {
      if (plotRef.current) {
        import_plotly.default.Plots.resize(plotRef.current);
      }
    }, [dimensions, config.aspectRatio]);
    (0, import_react4.useEffect)(() => {
      if (!containerRef.current) return;
      const { labels, src, tgt, val, linkColors } = buildSankeyData(scenario.flows, config);
      if (!labels.length) {
        if (plotRef.current) import_plotly.default.purge(containerRef.current);
        return;
      }
      const nodeIn = new Array(labels.length).fill(0);
      const nodeOut = new Array(labels.length).fill(0);
      for (let i = 0; i < src.length; i++) {
        nodeOut[src[i]] += val[i];
        nodeIn[tgt[i]] += val[i];
      }
      const displayLabels = labels.map((l, i) => {
        const total = Math.round(Math.max(nodeIn[i], nodeOut[i]));
        return getNodeLabel(l, total, scenario.flows, config.nodeHPs, config.valueUnit);
      });
      const resolvedDefault = resolveNodeColor(config.defaultNodeColor, "#808080");
      const nodeColors = labels.map((l) => {
        if (!l) return "rgba(0,0,0,0)";
        const raw = scenario.nodeColorOverrides[l];
        return raw !== void 0 && raw !== "" ? resolveNodeColor(raw, resolvedDefault) : resolvedDefault;
      });
      let nodeX, nodeY;
      if (scenario.hasDraggedNodes && Object.keys(scenario.nodePositions).length > 0) {
        const parsedX = labels.map((l) => l ? scenario.nodePositions[l]?.x : void 0).filter((x) => x !== void 0);
        const sortedX = parsedX.sort((a, b) => a - b);
        let safeX = 0;
        let found = false;
        for (let i = 0; i < sortedX.length - 1; i++) {
          if (sortedX[i + 1] - sortedX[i] > 0.05) {
            safeX = sortedX[i] + 0.025;
            found = true;
            break;
          }
        }
        if (!found) safeX = (sortedX[sortedX.length - 1] || 0) + 0.05;
        if (safeX > 1) safeX = -0.5;
        const xs = labels.map((l, i) => l ? scenario.nodePositions[l]?.x : i === labels.length - 2 ? safeX : safeX + 1e-3);
        const ys = labels.map((l, i) => l ? scenario.nodePositions[l]?.y : 0.5);
        if (xs.every((x) => x != null)) {
          nodeX = xs;
          nodeY = ys;
        }
      }
      if (!nodeX && config.nodeAlignment !== "justify") {
        nodeX = computeAlignedX(src, tgt, val, labels, config.nodeAlignment);
      }
      const nodeMeta = labels.map((l, i) => [l || "Phantom", nodeIn[i], nodeOut[i]]);
      const linkMeta = src.map((s, i) => [labels[s] || "Phantom", labels[tgt[i]] || "Phantom", val[i]]);
      const BASE_HEIGHT = 800;
      const scaleFactor = currentHeight / BASE_HEIGHT;
      const scaledNodeSpacing = (scenario.nodeSpacing ?? config.nodeSpacing) * scaleFactor;
      const scaledNodeThickness = config.nodeThickness * scaleFactor;
      const scaledLabelSize = config.labelSize * scaleFactor;
      const scaledVMargin = config.vMargin * scaleFactor;
      const scaledHMargin = config.hMargin * scaleFactor;
      const nodeSpec = {
        pad: scaledNodeSpacing,
        thickness: scaledNodeThickness,
        label: displayLabels,
        align: config.nodeAlignment,
        color: nodeColors,
        line: { color: config.bgColor, width: 1 },
        customdata: nodeMeta,
        hovertemplate: "<b>%{customdata[0]}</b><br>Input: %{customdata[1]:.0f}<br>Output: %{customdata[2]:.0f}<extra></extra>"
      };
      if (nodeX && nodeY) {
        nodeSpec.x = nodeX;
        nodeSpec.y = nodeY;
      } else if (nodeX) {
        nodeSpec.x = nodeX;
        nodeSpec.y = null;
      } else {
        nodeSpec.x = null;
        nodeSpec.y = null;
      }
      const sankeyTrace = {
        type: "sankey",
        orientation: config.orientation,
        arrangement: preserveInputOrder ? "freeform" : config.nodeArrangement,
        textfont: { color: config.labelColor, size: Math.max(8, scaledLabelSize) },
        node: nodeSpec,
        link: {
          source: src,
          target: tgt,
          value: val,
          color: linkColors,
          arrowlen: config.arrowSize,
          customdata: linkMeta,
          hovertemplate: "<b>%{customdata[0]}</b> \u2192 <b>%{customdata[1]}</b><br>Flow: %{customdata[2]:.0f} " + config.valueUnit + "<extra></extra>"
        }
      };
      const N = 20;
      const { highVal, lowVal, midVal, hotHighCol, hotLowCol, coldHighCol, coldLowCol } = config;
      const range = highVal - lowVal;
      const barColors = [];
      for (let i = 0; i < N; i++) {
        const v2 = highVal - (i + 0.5) * (range / N);
        let c = v2 >= midVal ? interpolateRgb(v2, midVal, highVal, hotLowCol, hotHighCol, 1) : interpolateRgb(v2, lowVal, midVal, coldLowCol, coldHighCol, 1);
        barColors.push(c.replace(/,\s*[\d.]+\)$/, ")").replace("rgba", "rgb"));
      }
      const midTick = N * (midVal - lowVal) / (range || 1);
      const barTraces = barColors.map((color, i) => ({
        type: "bar",
        x: [""],
        y: [1],
        base: N - i - 1,
        marker: { color, line: { width: 0 } },
        showlegend: false,
        hoverinfo: "skip"
      }));
      const barW = 0.015;
      const gapFrac = config.gradGap / config.figWidth;
      const rightMarginFrac = 50 / config.figWidth;
      const loopbackPaddingFrac = 60 / config.figWidth;
      const sankeyEnd = 1 - gapFrac - barW - rightMarginFrac - loopbackPaddingFrac;
      const barStart = 1 - barW - rightMarginFrac;
      const barEnd = barStart + barW;
      sankeyTrace.domain = { x: [0, Math.max(0.5, sankeyEnd - 5e-3)], y: [0, 1] };
      const layout = {
        // Use autosize and omit width/height explicitly so Plotly uses container
        autosize: true,
        paper_bgcolor: config.bgColor,
        plot_bgcolor: config.bgColor,
        barmode: "stack",
        bargap: 0,
        margin: { l: scaledHMargin, r: 40, t: Math.max(10, scaledVMargin), b: Math.max(10, scaledVMargin) },
        xaxis: { visible: false, domain: [barStart, Math.min(barEnd, 0.999)] },
        yaxis: {
          tickvals: [0, midTick, N],
          ticktext: [String(Math.round(lowVal)), String(Math.round(midVal)), String(Math.round(highVal))],
          tickfont: { color: config.labelColor, size: Math.max(8, scaledLabelSize - 2) },
          side: "right",
          showgrid: false,
          zeroline: false,
          range: [0, N],
          tickmode: "array",
          showline: false,
          title: { text: config.gradUnit, font: { color: config.labelColor, size: Math.max(8, scaledLabelSize - 2) }, standoff: 4 }
        }
      };
      import_plotly.default.react(containerRef.current, [sankeyTrace, ...barTraces], layout, {
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ["toImage"],
        responsive: true
      }).then((gd) => {
        plotRef.current = gd;
        if (gd && gd.layout) {
          import_plotly.default.Plots.resize(gd);
        }
        const fullData = gd._fullData?.[0];
        const nodeData = fullData?.node;
        let maxFlowActualPPU = 0;
        if (onRenderedPPU) {
          if (nodeData && nodeData.dy && nodeData.dy.length > 0) {
            let maxFlow = 0;
            for (let i = 0; i < nodeData.dy.length; i++) {
              const flow = Math.max(nodeIn[i], nodeOut[i]);
              const dy = nodeData.dy[i];
              if (flow > 0 && dy > 0) {
                const ppu = dy / flow;
                if (flow > maxFlow) {
                  maxFlow = flow;
                  maxFlowActualPPU = ppu;
                }
              }
            }
          } else if (fullData?._sankey?.graph?.nodes?.length) {
            let maxFlow = 0;
            const nodes = fullData._sankey.graph.nodes;
            for (let i = 0; i < nodes.length; i++) {
              const n = nodes[i];
              if (!n || n.value === void 0) continue;
              const flow = n.value;
              const dy = n.dy || n.y1 - n.y0;
              if (flow > 0 && dy > 0) {
                const ppu = dy / flow;
                if (flow > maxFlow) {
                  maxFlow = flow;
                  maxFlowActualPPU = ppu;
                }
              }
            }
          }
          if (maxFlowActualPPU > 0) {
            onRenderedPPU(maxFlowActualPPU);
          }
        }
        if (onRenderedPositions && nodeData) {
          const xs = gd._fullData[0].node.x;
          const ys = gd._fullData[0].node.y;
          if (xs && ys) {
            const positions = {};
            labels.forEach((l, i) => {
              if (l && xs[i] != null && ys[i] != null) {
                positions[l] = { x: xs[i], y: ys[i] };
              }
            });
            onRenderedPositions(positions);
          }
        }
        gd.on("plotly_restyle", (data) => {
          if (!data?.[0]) return;
          const changes = data[0];
          const xs = changes["node.x"]?.[0];
          const ys = changes["node.y"]?.[0];
          if (!xs || !ys || !onNodeDrag) return;
          const positions = {};
          labels.forEach((l, i) => {
            if (xs[i] != null && ys[i] != null) {
              positions[l] = { x: xs[i], y: ys[i] };
            }
          });
          onNodeDrag(positions);
        });
        if (animating) applyFlowAnimation(gd, animSpeed);
      });
    }, [scenario, config, animating, animSpeed, currentHeight, onRenderedPPU]);
    const applyFlowAnimation = (gd, speed) => {
      const container = containerRef.current;
      if (!container) return;
      container.querySelectorAll("#sl-anim-style, .sl-anim-overlay, #sl-anim-defs").forEach((e) => e.remove());
      const paths = Array.from(container.querySelectorAll(".sankey .links path"));
      if (!paths.length) return;
      const svgNS = "http://www.w3.org/2000/svg";
      const style = document.createElement("style");
      style.id = "sl-anim-style";
      style.textContent = `
      @keyframes sl-shimmer {
        0%   { opacity: 0; }
        40%  { opacity: 0; }
        50%  { opacity: 1; }
        60%  { opacity: 0; }
        100% { opacity: 0; }
      }
      .sl-anim-overlay {
        animation: sl-shimmer ${speed}s linear infinite;
        pointer-events: none;
      }
    `;
      container.appendChild(style);
      const targetSvg = paths[0].ownerSVGElement;
      if (!targetSvg) return;
      const defs = document.createElementNS(svgNS, "defs");
      defs.id = "sl-anim-defs";
      paths.forEach((path, idx) => {
        let bbox;
        try {
          bbox = path.getBBox();
        } catch (e) {
          return;
        }
        if (!bbox || bbox.width < 4) return;
        const gid = `sl-g-${idx}`;
        const grad = document.createElementNS(svgNS, "linearGradient");
        grad.id = gid;
        grad.setAttribute("gradientUnits", "userSpaceOnUse");
        grad.setAttribute("x1", String(bbox.x - bbox.width));
        grad.setAttribute("x2", String(bbox.x));
        grad.setAttribute("y1", String(bbox.y + bbox.height / 2));
        grad.setAttribute("y2", String(bbox.y + bbox.height / 2));
        [["0%", "0"], ["40%", "0"], ["50%", "0.5"], ["60%", "0"], ["100%", "0"]].forEach(([off, op]) => {
          const s = document.createElementNS(svgNS, "stop");
          s.setAttribute("offset", off);
          s.setAttribute("stop-color", "#ffffff");
          s.setAttribute("stop-opacity", op);
          grad.appendChild(s);
        });
        const ax1 = document.createElementNS(svgNS, "animate");
        ax1.setAttribute("attributeName", "x1");
        ax1.setAttribute("values", `${bbox.x - bbox.width};${bbox.x + bbox.width}`);
        ax1.setAttribute("dur", `${speed}s`);
        ax1.setAttribute("repeatCount", "indefinite");
        ax1.setAttribute("begin", `${(idx / paths.length * speed).toFixed(2)}s`);
        grad.appendChild(ax1);
        const ax2 = document.createElementNS(svgNS, "animate");
        ax2.setAttribute("attributeName", "x2");
        ax2.setAttribute("values", `${bbox.x};${bbox.x + bbox.width * 2}`);
        ax2.setAttribute("dur", `${speed}s`);
        ax2.setAttribute("repeatCount", "indefinite");
        ax2.setAttribute("begin", `${(idx / paths.length * speed).toFixed(2)}s`);
        grad.appendChild(ax2);
        defs.appendChild(grad);
        const overlay = path.cloneNode(false);
        overlay.setAttribute("fill", `url(#${gid})`);
        overlay.removeAttribute("stroke");
        overlay.classList.add("sl-anim-overlay");
        path.parentNode?.insertBefore(overlay, path.nextSibling);
      });
      targetSvg.insertBefore(defs, targetSvg.firstChild);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "w-full h-full flex justify-center items-center", ref: outerRef, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "relative", ref: wrapperRef, style: wrapperStyle, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "absolute inset-0", ref: containerRef }) }) });
  };

  // src/components/GuidedSetup.tsx
  var import_react5 = __require("react");
  var import_lucide_react2 = __require("lucide-react");
  var import_jsx_runtime7 = __require("react/jsx-runtime");
  function GuidedSetup({ onGenerate }) {
    const [generatorType, setGeneratorType] = (0, import_react5.useState)("Gas Boiler");
    const [fluid, setFluid] = (0, import_react5.useState)("Steam");
    const [efficiency, setEfficiency] = (0, import_react5.useState)(80);
    const [processDemand, setProcessDemand] = (0, import_react5.useState)(1e3);
    const [supplyTemp, setSupplyTemp] = (0, import_react5.useState)(150);
    const [returnTemp, setReturnTemp] = (0, import_react5.useState)(60);
    const [hasChiller, setHasChiller] = (0, import_react5.useState)(true);
    const [chillerLoad, setChillerLoad] = (0, import_react5.useState)(500);
    const [chillerEER, setChillerEER] = (0, import_react5.useState)(3);
    const [chillerCoolingTemp, setChillerCoolingTemp] = (0, import_react5.useState)(5);
    const [chillerRejectionTemp, setChillerRejectionTemp] = (0, import_react5.useState)(30);
    const [hasCompressor, setHasCompressor] = (0, import_react5.useState)(false);
    const [compressorPower, setCompressorPower] = (0, import_react5.useState)(100);
    const [compressorHeatRecovery, setCompressorHeatRecovery] = (0, import_react5.useState)(80);
    const [compressorRejectionTemp, setCompressorRejectionTemp] = (0, import_react5.useState)(80);
    const [hrTech, setHrTech] = (0, import_react5.useState)("Heat Pump");
    const [copMethod, setCopMethod] = (0, import_react5.useState)("carnot");
    const [directCop, setDirectCop] = (0, import_react5.useState)(3.5);
    const [carnotSourceTemp, setCarnotSourceTemp] = (0, import_react5.useState)(30);
    const [carnotSinkTemp, setCarnotSinkTemp] = (0, import_react5.useState)(90);
    const [carnotEfficiency, setCarnotEfficiency] = (0, import_react5.useState)(50);
    const generateFlows = () => {
      let before = [];
      let after = [];
      const mainFuelInput = processDemand / (efficiency / 100);
      const mainFuelSource = generatorType === "Electric Boiler" ? "Grid" : "Natural Gas";
      const mainFuelColor = generatorType === "Electric Boiler" ? "elec" : "#000000";
      before.push({ Source: mainFuelSource, Target: generatorType, Value: mainFuelInput.toFixed(1), Color: mainFuelColor });
      before.push({ Source: generatorType, Target: "Process", Value: processDemand.toFixed(1), Color: String(supplyTemp) });
      before.push({ Source: generatorType, Target: "Boiler Losses", Value: (mainFuelInput - processDemand).toFixed(1), Color: String(supplyTemp) });
      let wasteSources = [];
      if (hasChiller) {
        const elecInput = chillerLoad / chillerEER;
        const rejectedHeat = chillerLoad + elecInput;
        before.push({ Source: "Grid", Target: "Chiller", Value: elecInput.toFixed(1), Color: "elec" });
        before.push({ Source: "Cooling Load", Target: "Chiller", Value: chillerLoad.toFixed(1), Color: String(chillerCoolingTemp) });
        before.push({ Source: "Chiller", Target: "Cooling Tower", Value: rejectedHeat.toFixed(1), Color: String(chillerRejectionTemp) });
        wasteSources.push({ name: "Chiller", heat: rejectedHeat, temp: chillerRejectionTemp });
      }
      if (hasCompressor) {
        const recoverable = compressorPower * (compressorHeatRecovery / 100);
        const losses = compressorPower - recoverable;
        before.push({ Source: "Grid", Target: "Air Compressor", Value: compressorPower.toFixed(1), Color: "elec" });
        before.push({ Source: "Air Compressor", Target: "Waste Heat", Value: recoverable.toFixed(1), Color: String(compressorRejectionTemp) });
        before.push({ Source: "Air Compressor", Target: "Ambient Losses", Value: losses.toFixed(1), Color: "20" });
        wasteSources.push({ name: "Air Compressor", heat: recoverable, temp: compressorRejectionTemp });
      }
      after = JSON.parse(JSON.stringify(before));
      let cop = 0;
      if (copMethod === "direct") {
        cop = directCop;
      } else {
        const Th = carnotSinkTemp + 273.15;
        const Tc = carnotSourceTemp + 273.15;
        const carnotLimit = Th / (Th - Tc);
        cop = carnotLimit * (carnotEfficiency / 100);
      }
      const maxHpOutput = processDemand;
      const maxQc = maxHpOutput * ((cop - 1) / cop);
      let totalAvailableWaste = wasteSources.reduce((sum, s) => sum + s.heat, 0);
      let usedQc = Math.min(totalAvailableWaste, maxQc);
      let hpOutput = 0;
      let hpWork = 0;
      if (usedQc > 0) {
        hpOutput = usedQc * (cop / (cop - 1));
        hpWork = hpOutput - usedQc;
        wasteSources.forEach((source) => {
          const oldTarget = source.name === "Chiller" ? "Cooling Tower" : "Waste Heat";
          const flowIndex = after.findIndex((f) => f.Source === source.name && f.Target === oldTarget);
          if (flowIndex !== -1) {
            after.splice(flowIndex, 1);
          }
        });
        let remainingQc = usedQc;
        wasteSources.forEach((source) => {
          let amt = Math.min(source.heat, remainingQc);
          if (amt > 0) {
            after.push({ Source: source.name, Target: hrTech, Value: amt.toFixed(1), Color: String(source.temp) });
            remainingQc -= amt;
          }
          let excess = source.heat - amt;
          if (excess > 0) {
            const oldTarget = source.name === "Chiller" ? "Cooling Tower" : "Waste Heat";
            after.push({ Source: source.name, Target: oldTarget, Value: excess.toFixed(1), Color: String(source.temp) });
          }
        });
        after.push({ Source: "Grid", Target: hrTech, Value: hpWork.toFixed(1), Color: "elec" });
        after.push({ Source: hrTech, Target: "Process", Value: hpOutput.toFixed(1), Color: String(supplyTemp) });
        const newProcessDemandFromGen = processDemand - hpOutput;
        const newFuelInput = newProcessDemandFromGen > 0 ? newProcessDemandFromGen / (efficiency / 100) : 0;
        const genFuelFlow = after.find((f) => f.Source === mainFuelSource && f.Target === generatorType);
        if (genFuelFlow) genFuelFlow.Value = newFuelInput.toFixed(1);
        const genProcessFlow = after.find((f) => f.Source === generatorType && f.Target === "Process");
        if (genProcessFlow) genProcessFlow.Value = newProcessDemandFromGen.toFixed(1);
        const genLossFlow = after.find((f) => f.Source === generatorType && f.Target === "Boiler Losses");
        if (genLossFlow) genLossFlow.Value = Math.max(0, newFuelInput - newProcessDemandFromGen).toFixed(1);
      }
      onGenerate(before, after);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex flex-col h-full bg-[var(--surface)] p-4 text-[var(--text)] overflow-y-auto custom-scrollbar text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center justify-between mb-4 pb-3 border-b border-[var(--border)]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("h3", { className: "font-semibold text-base flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Settings, { size: 18 }),
          " Guided Setup"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("button", { onClick: generateFlows, className: "btn px-4 py-2 bg-[var(--accent)] text-white hover:opacity-90 flex items-center gap-2 rounded-md shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Activity, { size: 16 }),
          " Generate Flow Table"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-2 text-[var(--accent)] font-medium mb-2 border-b border-[var(--border)] pb-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Zap, { size: 16 }),
            " Core Process"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Generator Type" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("select", { className: "input w-full text-xs", value: generatorType, onChange: (e) => setGeneratorType(e.target.value), children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { children: "Gas Boiler" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { children: "Electric Boiler" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Heat Transfer Fluid" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("select", { className: "input w-full text-xs", value: fluid, onChange: (e) => setFluid(e.target.value), children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { children: "Steam" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { children: "Hot Water" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Efficiency (%)" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "number", className: "input w-full text-xs", value: efficiency, onChange: (e) => setEfficiency(Number(e.target.value)) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Process Demand (kW)" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "number", className: "input w-full text-xs", value: processDemand, onChange: (e) => setProcessDemand(Number(e.target.value)) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Supply Temp (\xB0C)" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "number", className: "input w-full text-xs", value: supplyTemp, onChange: (e) => setSupplyTemp(Number(e.target.value)) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Return Temp (\xB0C)" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "number", className: "input w-full text-xs", value: returnTemp, onChange: (e) => setReturnTemp(Number(e.target.value)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-2 text-[var(--accent)] font-medium mb-2 border-b border-[var(--border)] pb-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.ThermometerSnowflake, { size: 16 }),
            " Waste Heat Sources"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "p-3 bg-[var(--surface2)] rounded-md border border-[var(--border)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: "flex items-center gap-2 text-sm font-medium cursor-pointer mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "checkbox", checked: hasChiller, onChange: (e) => setHasChiller(e.target.checked), className: "rounded border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)]" }),
              "Chiller"
            ] }),
            hasChiller && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grid grid-cols-2 gap-3 pl-6", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Cooling Load (kW)" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "number", className: "input w-full text-xs", value: chillerLoad, onChange: (e) => setChillerLoad(Number(e.target.value)) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "EER (kW_c / kW_e)" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "number", className: "input w-full text-xs", value: chillerEER, onChange: (e) => setChillerEER(Number(e.target.value)) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Cooling Temp (\xB0C)" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "number", className: "input w-full text-xs", value: chillerCoolingTemp, onChange: (e) => setChillerCoolingTemp(Number(e.target.value)) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Rejection Temp (\xB0C)" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "number", className: "input w-full text-xs", value: chillerRejectionTemp, onChange: (e) => setChillerRejectionTemp(Number(e.target.value)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "p-3 bg-[var(--surface2)] rounded-md border border-[var(--border)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: "flex items-center gap-2 text-sm font-medium cursor-pointer mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "checkbox", checked: hasCompressor, onChange: (e) => setHasCompressor(e.target.checked), className: "rounded border-[var(--border)] text-[var(--accent)] focus:ring-[var(--accent)]" }),
              "Air Compressor"
            ] }),
            hasCompressor && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grid grid-cols-2 gap-3 pl-6", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Electric Power (kW)" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "number", className: "input w-full text-xs", value: compressorPower, onChange: (e) => setCompressorPower(Number(e.target.value)) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Heat Recoverable (%)" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "number", className: "input w-full text-xs", value: compressorHeatRecovery, onChange: (e) => setCompressorHeatRecovery(Number(e.target.value)) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Rejection Temp (\xB0C)" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "number", className: "input w-full text-xs", value: compressorRejectionTemp, onChange: (e) => setCompressorRejectionTemp(Number(e.target.value)) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-2 text-[var(--accent)] font-medium mb-2 border-b border-[var(--border)] pb-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Droplets, { size: 16 }),
            " Heat Recovery / After View"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grid grid-cols-1 gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Technology" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("select", { className: "input w-full text-xs", value: hrTech, onChange: (e) => setHrTech(e.target.value), children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { children: "Heat Pump" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { children: "Adsorption Chiller" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex gap-4 mt-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: "flex items-center gap-1.5 text-xs text-[var(--text)]", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "radio", value: "direct", checked: copMethod === "direct", onChange: () => setCopMethod("direct"), className: "text-[var(--accent)] focus:ring-[var(--accent)]" }),
                "Direct Input COP"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("label", { className: "flex items-center gap-1.5 text-xs text-[var(--text)]", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "radio", value: "carnot", checked: copMethod === "carnot", onChange: () => setCopMethod("carnot"), className: "text-[var(--accent)] focus:ring-[var(--accent)]" }),
                "Carnot COP"
              ] })
            ] }),
            copMethod === "direct" ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Coefficient of Performance (COP) (kW_h / kW_e)" }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "number", step: "0.1", className: "input w-full text-xs", value: directCop, onChange: (e) => setDirectCop(Number(e.target.value)) })
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grid grid-cols-2 gap-3 mt-1", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Source Temp (\xB0C)" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "number", className: "input w-full text-xs", value: carnotSourceTemp, onChange: (e) => setCarnotSourceTemp(Number(e.target.value)) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "Sink Temp (\xB0C)" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "number", className: "input w-full text-xs", value: carnotSinkTemp, onChange: (e) => setCarnotSinkTemp(Number(e.target.value)) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "col-span-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("label", { className: "block text-xs text-[var(--text2)] mb-1", children: "% of Carnot Efficiency" }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { type: "number", className: "input w-full text-xs", value: carnotEfficiency, onChange: (e) => setCarnotEfficiency(Number(e.target.value)) })
              ] })
            ] })
          ] }),
          copMethod === "carnot" && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "p-3 bg-[var(--surface2)] rounded-md border border-[var(--border)] mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-xs text-[var(--text2)]", children: "Calculated COP (Carnot)" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "font-semibold text-[var(--accent)] text-lg", children: (() => {
              const Th = carnotSinkTemp + 273.15;
              const Tc = carnotSourceTemp + 273.15;
              if (Th <= Tc) return "Invalid Temps";
              const c = Th / (Th - Tc) * (carnotEfficiency / 100);
              return c.toFixed(2);
            })() })
          ] })
        ] })
      ] })
    ] });
  }

  // src/components/EditorDocumentation.tsx
  var import_react_router_dom5 = __require("react-router-dom");
  var import_jsx_runtime8 = __require("react/jsx-runtime");
  function EditorDocumentation() {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "bg-[#0f0e0d] border-t border-[#272521] py-16 px-6 md:px-12 text-[#d0cdc8] font-sans selection:bg-[#e8541a] selection:text-white", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#272521]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-[11px] font-semibold tracking-widest uppercase text-[#ff813f] mb-1.5", children: "Documentation & Syntax Reference" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "text-2xl md:text-3xl font-bold text-[#f0ede8]", children: "SankeyLoop Interactive Flow Builder Manual" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          import_react_router_dom5.Link,
          {
            to: "/learn",
            className: "inline-flex items-center gap-1.5 bg-[#1a1917] border border-[#333128] hover:border-[#ff813f] text-[#f0ede8] hover:text-[#ff813f] px-4 py-2 rounded-lg text-xs font-semibold transition-all no-underline shrink-0",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "Read 4,000+ Word Comprehensive Guides" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "\u2192" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "bg-[#161513] border border-[#272521] p-6 rounded-xl flex flex-col justify-between", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("h3", { className: "text-lg font-bold text-[#f0ede8] mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "\u{1F4DD}" }),
            " Flow Table Syntax Rules"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs text-[#a09d98] mb-4 leading-relaxed", children: "Describe your diagram structure using plain text. Each line defines a quantitative link between two nodes." }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "space-y-3 font-mono text-xs", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "bg-[#0c0c0b] p-3 rounded border border-[#333128]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-[#5a5754] mb-1", children: "// Standard Link" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-[#00e676]", children: "Wages [3500] Checking Account" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "bg-[#0c0c0b] p-3 rounded border border-[#333128]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-[#5a5754] mb-1", children: "// Custom Link Color (#Hex or Name)" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-[#ffb74d]", children: "Checking [1200] Rent #ff5722" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "bg-[#0c0c0b] p-3 rounded border border-[#333128]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-[#5a5754] mb-1", children: "// Set Node Default Color" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-[#64b5f6]", children: ":Checking Account #2196f3" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "bg-[#161513] border border-[#272521] p-6 rounded-xl flex flex-col justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("h3", { className: "text-lg font-bold text-[#f0ede8] mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "\u{1F52C}" }),
              " Flow Conservation Principles"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs text-[#a09d98] mb-3 leading-relaxed", children: "In thermodynamic engineering and financial auditing, accurate models must obey **Continuity Equations**. For any intermediate junction node:" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "bg-[#0c0c0b] p-3 rounded border border-[#333128] text-center font-mono text-xs text-[#ff813f] my-3", children: "\u03A3 Inflows = \u03A3 Outflows + Losses" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs text-[#a09d98] leading-relaxed", children: "If an intermediate node receives 500 units but only outputs 400 without designating a waste or savings branch, the diagram will display asymmetric visual widths. Ensure all balance sheets and heat cycles are fully accounted for." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            import_react_router_dom5.Link,
            {
              to: "/learn/energy-efficiency-heat-balance",
              className: "text-xs font-semibold text-[#ff813f] hover:underline pt-4 border-t border-[#272521] mt-4 block",
              children: "Thermodynamic Heat Balance Tutorial \u2192"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "bg-[#161513] border border-[#272521] p-6 rounded-xl flex flex-col justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("h3", { className: "text-lg font-bold text-[#f0ede8] mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "\u{1F512}" }),
              " Privacy & Vector Exports"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs text-[#a09d98] mb-3 leading-relaxed", children: "SankeyLoop processes all layout algorithms in your local browser memory. Your sensitive financial spreadsheets or proprietary engineering data are never uploaded to remote servers." }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("ul", { className: "text-xs text-[#d0cdc8] space-y-2 list-disc pl-5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("strong", { className: "text-[#f0ede8]", children: "3x Scaled PNG:" }),
                " High-resolution raster images suitable for PowerPoint and PDF reports."
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("strong", { className: "text-[#f0ede8]", children: "Scalable SVG:" }),
                " XML vector code for lossless editing in Illustrator or Figma."
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("strong", { className: "text-[#f0ede8]", children: "Transition Video:" }),
                " Record dynamic transition animations for digital storytelling."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            import_react_router_dom5.Link,
            {
              to: "/privacy",
              className: "text-xs font-semibold text-[#8a8783] hover:text-[#f0ede8] underline pt-4 border-t border-[#272521] mt-4 block",
              children: "Review Client-Side Privacy Policy \u2192"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "bg-[#161513] border border-[#272521] p-6 rounded-xl text-xs text-[#a09d98] flex flex-wrap items-center justify-between gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-6 flex-wrap", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { children: [
            "\u{1F4A1} ",
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("strong", { children: "Pro Tip 1:" }),
            " Drag any node rectangle on the canvas to manually freeze its custom vertical or horizontal placement."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { children: [
            "\u{1F4A1} ",
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("strong", { children: "Pro Tip 2:" }),
            " Use ",
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("code", { className: "bg-[#272521] text-[#f0ede8] px-1.5 py-0.5 rounded", children: "//" }),
            " to add comments and group your flow table into organized stages."
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_router_dom5.Link, { to: "/learn/sankeyloop-user-manual", className: "text-[#ff813f] font-semibold hover:underline no-underline whitespace-nowrap", children: "View Complete Reference Manual \u2192" })
      ] })
    ] }) });
  }

  // src/pages/Editor.tsx
  var import_plotly2 = __toESM(__require("plotly.js-dist-min"), 1);
  var gifenc = __toESM(__require("gifenc"), 1);
  var import_jsx_runtime9 = __require("react/jsx-runtime");
  var INITIAL_CONFIG = {
    orientation: "h",
    highVal: 180,
    hotHighCol: "#FF0000",
    hotLowCol: "#FFFF00",
    midVal: 45,
    coldHighCol: "#0000FF",
    coldLowCol: "#800080",
    lowVal: 0,
    nodeAlignment: "center",
    nodeArrangement: "snap",
    vMargin: 100,
    hMargin: 50,
    nodeSpacing: 50,
    nodeThickness: 10,
    linkOpacity: 0.7,
    ghostOpacity: 0.12,
    arrowSize: 15,
    labelSize: 13,
    labelColor: "#1e293b",
    defaultNodeColor: "#808080",
    figWidth: 1200,
    figHeight: 800,
    valueUnit: "kW",
    gradUnit: "\xB0C",
    gradGap: 20,
    aspectRatio: "fit",
    theme: "dark",
    bgColor: "#ffffff",
    nodeHPs: {}
  };
  var INITIAL_SCENARIOS = {
    before: {
      flows: [
        { Source: "Gas", Target: "Boiler", Value: "217", Color: "Black" },
        { Source: "Boiler", Target: "Steam", Value: "186", Color: "200" },
        { Source: "Boiler", Target: "Purge", Value: "1", Color: "170" },
        { Source: "Boiler", Target: "Stack", Value: "30", Color: "Black" },
        { Source: "Steam", Target: "Deaerator", Value: "17", Color: "200" },
        { Source: "Deaerator", Target: "Boiler", Value: "6", Color: "105" },
        { Source: "Feedwater", Target: "Deaerator", Value: "-11", Color: "20" },
        { Source: "Steam", Target: "Process", Value: "167", Color: "200" },
        { Source: "Process", Target: "Condensate Return", Value: "0", Color: "90" },
        { Source: "Process", Target: "Cndnste Not Returned", Value: "0", Color: "Black" },
        { Source: "Condensate Return", Target: "Deaerator", Value: "0", Color: "90" },
        { Source: "Process", Target: "Chilled Water", Value: "60", Color: "20" },
        { Source: "Chilled Water", Target: "Chiller", Value: "60", Color: "10" },
        { Source: "Elec", Target: "Chiller", Value: "20", Color: "Elec" },
        { Source: "Chiller", Target: "Cooling Tower", Value: "80", Color: "30" },
        { Source: "", Target: "", Value: "", Color: "" }
      ],
      nodeColorOverrides: {},
      nodePositions: {
        "Gas": { x: 0.004887346659498558, y: 0.38095962284236945 },
        "Boiler": { x: 0.14759466609279387, y: 0.4038372240387298 },
        "Steam": { x: 0.2883470468622898, y: 0.4660113299368874 },
        "Purge": { x: 0.29225692418988863, y: 0.7612348870808306 },
        "Stack": { x: 0.29225692418988863, y: 0.6703736091045045 },
        "Deaerator": { x: 0.7115816585026772, y: 0.6994790763693511 },
        "Feedwater": { x: 0.8669960792506688, y: 0.7578124097026844 },
        "Process": { x: 0.43594171295508366, y: 0.36483678904831957 },
        "Condensate Return": { x: 0.5933110723668746, y: 0.5853511991513078 },
        "Cndnste Not Returned": { x: 0.5962434803625738, y: 0.510765812742163 },
        "Chilled Water": { x: 0.5913561337030752, y: 0.3022049808662601 },
        "Chiller": { x: 0.7213563518216742, y: 0.30463663963966736 },
        "Elec": { x: 0.5903786643711755, y: 0.4189786102480563 },
        "Cooling Tower": { x: 0.8757933032377662, y: 0.39877527281381264 }
      },
      hasDraggedNodes: true,
      nodeSpacing: 50
    },
    after: {
      flows: [
        { Source: "Gas", Target: "Boiler", Value: "78", Color: "Black" },
        { Source: "Boiler", Target: "Steam", Value: "67", Color: "200" },
        { Source: "Boiler", Target: "Purge", Value: "1", Color: "170" },
        { Source: "Boiler", Target: "Stack", Value: "10", Color: "Black" },
        { Source: "Steam", Target: "Deaerator", Value: "6", Color: "200" },
        { Source: "Deaerator", Target: "Boiler", Value: "2", Color: "105" },
        { Source: "Feedwater", Target: "Deaerator", Value: "-4", Color: "20" },
        { Source: "Steam", Target: "Process", Value: "60", Color: "200" },
        { Source: "Process", Target: "Condensate Return", Value: "0", Color: "90" },
        { Source: "Process", Target: "Cndnste Not Returned", Value: "0", Color: "Black" },
        { Source: "Condensate Return", Target: "Deaerator", Value: "0", Color: "90" },
        { Source: "Process", Target: "Chilled Water", Value: "60", Color: "20" },
        { Source: "Chilled Water", Target: "Chiller", Value: "60", Color: "10" },
        { Source: "Elec", Target: "Chiller", Value: "20", Color: "Elec" },
        { Source: "Chiller", Target: "HP", Value: "80", Color: "30" },
        { Source: "Elec", Target: "HP", Value: "27", Color: "Elec" },
        { Source: "HP", Target: "Process", Value: "107", Color: "90" },
        { Source: "", Target: "", Value: "", Color: "" }
      ],
      nodeColorOverrides: {},
      nodePositions: {
        "Gas": { x: 0.004887346659498558, y: 0.38095962284236945 },
        "Boiler": { x: 0.14759466609279387, y: 0.4038372240387298 },
        "Steam": { x: 0.2883470468622898, y: 0.4660113299368874 },
        "Purge": { x: 0.29225692418988863, y: 0.7612348870808306 },
        "Stack": { x: 0.29225692418988863, y: 0.6703736091045045 },
        "Deaerator": { x: 0.7115816585026772, y: 0.6994790763693511 },
        "Feedwater": { x: 0.8669960792506688, y: 0.7578124097026844 },
        "Process": { x: 0.43594171295508366, y: 0.36483678904831957 },
        "Condensate Return": { x: 0.5933110723668746, y: 0.5853511991513078 },
        "Cndnste Not Returned": { x: 0.5962434803625738, y: 0.510765812742163 },
        "Chilled Water": { x: 0.5913561337030752, y: 0.3022049808662601 },
        "Chiller": { x: 0.7213563518216742, y: 0.30463663963966736 },
        "Elec": { x: 0.5903786643711755, y: 0.4189786102480563 },
        "HP": { x: 0.8669960792506688, y: 0.32544193948047934 }
      },
      hasDraggedNodes: true,
      nodeSpacing: 50
    }
  };
  function Editor() {
    const [config, setConfig] = (0, import_react6.useState)(INITIAL_CONFIG);
    const [scenarios, setScenarios] = (0, import_react6.useState)(INITIAL_SCENARIOS);
    const [draggedIndex, setDraggedIndex] = (0, import_react6.useState)(null);
    const [dragAllowedIndex, setDragAllowedIndex] = (0, import_react6.useState)(null);
    (0, import_react6.useEffect)(() => {
      const saved = localStorage.getItem("sankeyloop_load_example");
      if (saved) {
        try {
          const data = JSON.parse(saved);
          if (data.config) setConfig((prev) => ({ ...prev, ...data.config }));
          if (data.flows) {
            setScenarios({
              before: { ...INITIAL_SCENARIOS.before, flows: data.flows },
              after: { ...INITIAL_SCENARIOS.after, flows: data.flows }
            });
          }
          if (data.nodeHPs || data.config && data.config.nodeHPs) {
            updateConfig({ nodeHPs: data.nodeHPs || data.config.nodeHPs });
          }
          if (data.preserveInputOrder !== void 0) {
            setPreserveInputOrder(data.preserveInputOrder);
          }
          localStorage.removeItem("sankeyloop_load_example");
        } catch (e) {
          console.error("Failed to load example", e);
        }
      }
    }, []);
    const [videoEditorEnabled, setVideoEditorEnabled] = (0, import_react6.useState)(false);
    const [preserveInputOrder, setPreserveInputOrder] = (0, import_react6.useState)(false);
    const [activeHelpFeature, setActiveHelpFeature] = (0, import_react6.useState)(null);
    const [showDonationModal, setShowDonationModal] = (0, import_react6.useState)(false);
    const [editScenario, setEditScenario] = (0, import_react6.useState)("before");
    const [viewScenario, setViewScenario] = (0, import_react6.useState)("before");
    const [sidebarOpen, setSidebarOpen] = (0, import_react6.useState)(true);
    const [dataSectionHeight, setDataSectionHeight] = (0, import_react6.useState)(300);
    const [dataSectionOpen, setDataSectionOpen] = (0, import_react6.useState)(true);
    const [inputMode, setInputMode] = (0, import_react6.useState)("table");
    const [localFlowText, setLocalFlowText] = (0, import_react6.useState)(null);
    (0, import_react6.useEffect)(() => {
      setLocalFlowText(null);
    }, [editScenario, inputMode]);
    const [isViewsSynced, setIsViewsSynced] = (0, import_react6.useState)(false);
    const [animating, setAnimating] = (0, import_react6.useState)(false);
    const [animSpeed, setAnimSpeed] = (0, import_react6.useState)(3);
    const [renderedPPUs, setRenderedPPUs] = (0, import_react6.useState)({
      before: null,
      "25%": null,
      "50%": null,
      "75%": null,
      after: null
    });
    const [openSections, setOpenSections] = (0, import_react6.useState)({
      save: true,
      theme: false,
      thermal: false,
      flows: false,
      nodes: false,
      labels: false,
      layout: false
    });
    const activeScenario = scenarios[viewScenario];
    const editScenarioData = scenarios[editScenario];
    const updateConfig = (updates) => setConfig((prev) => ({ ...prev, ...updates }));
    const updateScenario = (key, updates) => {
      setScenarios((prev) => ({
        ...prev,
        [key]: { ...prev[key], ...updates }
      }));
    };
    const toggleVideoEditor = () => {
      setVideoEditorEnabled((prev) => {
        const next = !prev;
        if (!next && ["25%", "50%", "75%"].includes(viewScenario)) {
          setViewScenario("before");
        }
        if (next) {
          setScenarios((curr) => {
            const intermediateKeys = ["25%", "50%", "75%"];
            const nextScenarios = { ...curr };
            intermediateKeys.forEach((key) => {
              const t = parseInt(key) / 100;
              const bFlows = curr.before.flows;
              const aFlows = curr.after.flows;
              const getFlowKey = (f) => `${String(f.Source).trim()}||${String(f.Target).trim()}`;
              const aMap = new Map(aFlows.map((f) => [getFlowKey(f), f]));
              const newFlows = bFlows.map((fB) => {
                const fA = aMap.get(getFlowKey(fB));
                const vB = parseFloat(String(fB.Value).replace(",", ".")) || 0;
                const vA = fA ? parseFloat(String(fA.Value).replace(",", ".")) || 0 : 0;
                const v = vB + (vA - vB) * t;
                return { ...fB, Value: v.toFixed(2), Color: interpolateFlowColor(fB.Color, fA?.Color, t, config) };
              });
              const nB = curr.before.nodeSpacing ?? config.nodeSpacing;
              const nA = curr.after.nodeSpacing ?? config.nodeSpacing;
              const n = nB + (nA - nB) * t;
              let newPositions = { ...curr.before.nodePositions };
              if (curr.after.hasDraggedNodes && curr.before.hasDraggedNodes) {
                Object.keys(curr.before.nodePositions).forEach((nodeName) => {
                  const pB = curr.before.nodePositions[nodeName];
                  const pA = curr.after.nodePositions[nodeName];
                  if (pB && pA) {
                    newPositions[nodeName] = {
                      x: pB.x + (pA.x - pB.x) * t,
                      y: pB.y + (pA.y - pB.y) * t
                    };
                  }
                });
              }
              nextScenarios[key] = {
                flows: newFlows,
                nodeColorOverrides: { ...curr.before.nodeColorOverrides },
                nodePositions: newPositions,
                hasDraggedNodes: curr.before.hasDraggedNodes || curr.after.hasDraggedNodes,
                nodeSpacing: n
              };
            });
            return nextScenarios;
          });
        }
        return next;
      });
    };
    const handleNodeDrag = (scenarioKey, positions) => {
      if (isViewsSynced) {
        setScenarios((prev) => ({
          ...prev,
          before: { ...prev.before, nodePositions: { ...positions }, hasDraggedNodes: true },
          after: { ...prev.after, nodePositions: { ...positions }, hasDraggedNodes: true }
        }));
      } else {
        updateScenario(scenarioKey, {
          nodePositions: positions,
          hasDraggedNodes: true
        });
      }
    };
    const toggleSyncViews = () => {
      setIsViewsSynced((prev) => {
        const next = !prev;
        if (!next) {
          setTimeout(() => {
            setVideoEditorEnabled(false);
            setViewScenario((curr) => ["25%", "50%", "75%"].includes(curr) ? "before" : curr);
          }, 0);
        }
        if (next) {
          setScenarios((curr) => {
            const bFlows = [...curr.before.flows];
            const aFlows = [...curr.after.flows];
            const getFlowKey = (f) => `${String(f.Source).trim()}||${String(f.Target).trim()}`;
            const bMap = new Map(bFlows.map((f) => [getFlowKey(f), f]));
            const aMap = new Map(aFlows.map((f) => [getFlowKey(f), f]));
            bFlows.forEach((bf) => {
              if (!aMap.has(getFlowKey(bf))) {
                aFlows.push({ ...bf, Value: "1e-9" });
              }
            });
            aFlows.forEach((af) => {
              if (!bMap.has(getFlowKey(af))) {
                bFlows.push({ ...af, Value: "1e-9" });
              }
            });
            const currentScenario = viewScenario === "before" ? curr.before : curr.after;
            return {
              before: {
                ...curr.before,
                flows: bFlows,
                nodePositions: { ...currentScenario.nodePositions },
                hasDraggedNodes: currentScenario.hasDraggedNodes
              },
              after: {
                ...curr.after,
                flows: aFlows,
                nodePositions: { ...currentScenario.nodePositions },
                hasDraggedNodes: currentScenario.hasDraggedNodes
              }
            };
          });
        }
        return next;
      });
    };
    const handleDataSectionResizeStart = (0, import_react6.useCallback)((e) => {
      e.preventDefault();
      const startY = e.clientY;
      const startHeight = dataSectionHeight;
      const onMouseMove = (moveEvent) => {
        const delta = moveEvent.clientY - startY;
        const newHeight = Math.max(80, Math.min(window.innerHeight * 0.75, startHeight + delta));
        setDataSectionHeight(newHeight);
      };
      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      document.body.style.cursor = "ns-resize";
      document.body.style.userSelect = "none";
    }, [dataSectionHeight]);
    const resetLayout = () => {
      if (isViewsSynced) {
        setScenarios((prev) => ({
          ...prev,
          before: { ...prev.before, nodePositions: {}, hasDraggedNodes: false },
          after: { ...prev.after, nodePositions: {}, hasDraggedNodes: false }
        }));
      } else {
        updateScenario(viewScenario, {
          nodePositions: {},
          hasDraggedNodes: false
        });
      }
    };
    const toggleSection = (id) => {
      setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
    };
    const handleImport = (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target?.result);
          let importedConfig = data.config ? { ...INITIAL_CONFIG, ...data.config } : { ...config };
          let extractedNodeHPs = data.nodeHPs || importedConfig.nodeHPs || {};
          if (data.scenarios) {
            const sanitizedScenarios = {};
            Object.keys(data.scenarios).forEach((k) => {
              const sc = data.scenarios[k];
              if (sc.nodeHPs) {
                extractedNodeHPs = { ...extractedNodeHPs, ...sc.nodeHPs };
              }
              const { nodeHPs, ...rest } = sc;
              sanitizedScenarios[k] = rest;
            });
            setScenarios(sanitizedScenarios);
          } else if (data.flows) {
            setScenarios({
              before: { ...INITIAL_SCENARIOS.before, flows: data.flows },
              after: { ...INITIAL_SCENARIOS.after, flows: data.flows }
            });
          }
          importedConfig.nodeHPs = extractedNodeHPs;
          setConfig(importedConfig);
          if (data.preserveInputOrder !== void 0) {
            setPreserveInputOrder(data.preserveInputOrder);
          }
        } catch (err) {
          alert("Failed to import config");
        }
      };
      reader.readAsText(file);
      e.target.value = "";
    };
    const handleExport = () => {
      const data = { config, scenarios, preserveInputOrder };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "sankeyloop_config.json";
      a.click();
      URL.revokeObjectURL(url);
    };
    const exportImage = async (format) => {
      const plotEl = document.querySelector(".js-plotly-plot");
      if (!plotEl) return;
      try {
        const dims = getExportDimensions(config);
        await import_plotly2.default.downloadImage(plotEl, {
          format,
          filename: "sankeyloop",
          width: dims.width,
          height: dims.height
        });
      } catch (err) {
        console.error("Export failed:", err);
      }
    };
    const openDonationPopup = () => {
      const width = 500;
      const height = 650;
      const left = (window.screen.width - width) / 2;
      const top = (window.screen.height - height) / 2;
      window.open(
        "https://buymeacoffee.com/tsanz",
        "BuyMeACoffeeDonation",
        `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
      );
    };
    const [exportingVideo, setExportingVideo] = (0, import_react6.useState)(false);
    const [videoProgress, setVideoProgress] = (0, import_react6.useState)(0);
    const [gifPreviewUrl, setGifPreviewUrl] = (0, import_react6.useState)(null);
    const [videoDebugInfo, setVideoDebugInfo] = (0, import_react6.useState)([]);
    const exportTransitionVideo = async () => {
      try {
        setExportingVideo(true);
        setVideoProgress(0);
        const plotEl = document.querySelector(".js-plotly-plot");
        if (!plotEl) {
          alert("No diagram found. Make sure a scenario is visible before exporting.");
          setExportingVideo(false);
          return;
        }
        const fps = 15;
        const duration = animSpeed || 3;
        const pauseDuration = 0.5;
        const nFramesBody = duration * fps;
        const nFramesPause = Math.round(pauseDuration * fps);
        const nFrames = nFramesBody + 2 * nFramesPause;
        const delayMs = Math.round(1e3 / fps);
        const dims = getExportDimensions(config);
        const canvas = document.createElement("canvas");
        canvas.width = dims.width;
        canvas.height = dims.height;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) throw new Error("Could not get canvas context");
        const GIFEncoderFn = gifenc.GIFEncoder || gifenc.default || gifenc.default?.GIFEncoder;
        if (!GIFEncoderFn) throw new Error("GIFEncoder not found");
        const gif = GIFEncoderFn();
        const anchorKeys = ["before", "25%", "50%", "75%", "after"];
        const anchors = anchorKeys.map((k) => scenarios[k]);
        for (let i = 0; i < nFrames; i++) {
          let t_total = 0;
          if (i < nFramesPause) t_total = 0;
          else if (i >= nFramesPause + nFramesBody) t_total = 1;
          else t_total = (i - nFramesPause) / (nFramesBody > 1 ? nFramesBody - 1 : 1);
          const segmentIdx = Math.min(3, Math.floor(t_total * 3.99));
          const localT = t_total * 4 - segmentIdx;
          const sStart = anchors[segmentIdx];
          const sEnd = anchors[segmentIdx + 1];
          const getFlowKey = (f) => `${String(f.Source).trim()}||${String(f.Target).trim()}`;
          const endMap = new Map(sEnd.flows.map((f) => [getFlowKey(f), f]));
          const interpolatedFlows = sStart.flows.map((fB) => {
            const fA = endMap.get(getFlowKey(fB));
            const vB = parseFloat(String(fB.Value).replace(",", ".")) || 0;
            const vA = fA ? parseFloat(String(fA.Value).replace(",", ".")) || 0 : 0;
            const v = vB + (vA - vB) * localT;
            return {
              ...fB,
              Value: v.toFixed(4),
              Color: interpolateFlowColor(fB.Color, fA?.Color, localT, config)
            };
          });
          const startMap = new Map(sStart.flows.map((f) => [getFlowKey(f), f]));
          sEnd.flows.forEach((fA) => {
            if (!startMap.has(getFlowKey(fA))) {
              const vA = parseFloat(String(fA.Value).replace(",", ".")) || 0;
              interpolatedFlows.push({ ...fA, Value: (vA * localT).toFixed(4) });
            }
          });
          const currentSpacing_start = sStart.nodeSpacing ?? config.nodeSpacing;
          const currentSpacing_end = sEnd.nodeSpacing ?? config.nodeSpacing;
          const currentSpacing = currentSpacing_start + (currentSpacing_end - currentSpacing_start) * localT;
          const { labels: labels2, src, tgt, val, linkColors } = buildSankeyData(interpolatedFlows, config);
          const nodeIn = new Array(labels2.length).fill(0);
          const nodeOut = new Array(labels2.length).fill(0);
          for (let j = 0; j < src.length; j++) {
            nodeOut[src[j]] += val[j];
            nodeIn[tgt[j]] += val[j];
          }
          const displayLabels = labels2.map((l, idx) => {
            const total = Math.round(Math.max(nodeIn[idx], nodeOut[idx]));
            return getNodeLabel(l, total, interpolatedFlows, config.nodeHPs, config.valueUnit);
          });
          const resolvedDefault = resolveNodeColor(config.defaultNodeColor, "#808080");
          const nodeColors = labels2.map((l) => {
            if (!l) return "rgba(0,0,0,0)";
            const overrideS = sStart.nodeColorOverrides[l];
            const overrideE = sEnd.nodeColorOverrides[l];
            const override = localT < 0.5 ? overrideS || overrideE : overrideE || overrideS;
            return override ? resolveNodeColor(override, resolvedDefault) : resolvedDefault;
          });
          const posS = preserveInputOrder ? computePreservedPositions(sStart, config) : sStart.hasDraggedNodes ? sStart.nodePositions : sStart.nativePositions || sStart.nodePositions;
          const posE = preserveInputOrder ? computePreservedPositions(sEnd, config) : sEnd.hasDraggedNodes ? sEnd.nodePositions : sEnd.nativePositions || sEnd.nodePositions;
          const xPos = labels2.map((l) => {
            const pS = posS[l];
            const pE = posE[l];
            if (pS && pE) return pS.x + (pE.x - pS.x) * localT;
            if (pS) return pS.x;
            if (pE) return pE.x;
            return null;
          });
          const yPos = labels2.map((l) => {
            const pS = posS[l];
            const pE = posE[l];
            if (pS && pE) return pS.y + (pE.y - pS.y) * localT;
            if (pS) return pS.y;
            if (pE) return pE.y;
            return null;
          });
          const scaleFactor = dims.height / 800;
          const scaledNodeSpacing = currentSpacing * scaleFactor;
          const scaledNodeThickness = config.nodeThickness * scaleFactor;
          const scaledLabelSize = config.labelSize * scaleFactor;
          const scaledVMargin = config.vMargin * scaleFactor;
          const scaledHMargin = config.hMargin * scaleFactor;
          const nodeMeta = labels2.map((l, idx) => [l || "Phantom", nodeIn[idx], nodeOut[idx]]);
          const nodeSpec = {
            pad: scaledNodeSpacing,
            thickness: scaledNodeThickness,
            label: displayLabels,
            align: config.nodeAlignment,
            color: nodeColors,
            line: { color: config.bgColor, width: 1 },
            customdata: nodeMeta
          };
          if (xPos.every((x) => x !== null)) {
            nodeSpec.x = xPos;
            nodeSpec.y = yPos;
          } else if (config.nodeAlignment !== "justify") {
            const computedX = computeAlignedX(src, tgt, val, labels2, config.nodeAlignment);
            nodeSpec.x = computedX;
          }
          const sankeyTrace = {
            type: "sankey",
            orientation: config.orientation,
            arrangement: preserveInputOrder ? "freeform" : config.nodeArrangement,
            textfont: { color: config.labelColor, size: Math.max(8, scaledLabelSize) },
            node: nodeSpec,
            link: {
              source: src,
              target: tgt,
              value: val,
              color: linkColors.map((c) => c.replace(/[\d.]+\)$/, `${config.linkOpacity})`)),
              arrowlen: config.arrowSize
            }
          };
          const N = 20;
          const { highVal, lowVal, midVal, hotHighCol, hotLowCol, coldHighCol, coldLowCol } = config;
          const rangeStr = highVal - lowVal;
          const barColors = [];
          for (let j = 0; j < N; j++) {
            const v2 = highVal - (j + 0.5) * (rangeStr / N);
            let c = v2 >= midVal ? interpolateRgb(v2, midVal, highVal, hotLowCol, hotHighCol, 1) : interpolateRgb(v2, lowVal, midVal, coldLowCol, coldHighCol, 1);
            barColors.push(c.replace(/,\s*[\d.]+\)$/, ")").replace("rgba", "rgb"));
          }
          const midTick = N * (midVal - lowVal) / (rangeStr || 1);
          const barTraces = barColors.map((color, j) => ({
            type: "bar",
            x: [""],
            y: [1],
            base: N - j - 1,
            marker: { color, line: { width: 0 } },
            showlegend: false,
            hoverinfo: "skip"
          }));
          const barW = 0.015;
          const gapFrac = config.gradGap / config.figWidth;
          const rightMarginFrac = 50 / config.figWidth;
          const loopbackPaddingFrac = 60 / config.figWidth;
          const sankeyEnd = 1 - gapFrac - barW - rightMarginFrac - loopbackPaddingFrac;
          const barStart = 1 - barW - rightMarginFrac;
          const barEnd = barStart + barW;
          sankeyTrace.domain = { x: [0, Math.max(0.5, sankeyEnd - 5e-3)], y: [0, 1] };
          const layout = {
            width: dims.width,
            height: dims.height,
            paper_bgcolor: config.bgColor,
            plot_bgcolor: config.bgColor,
            barmode: "stack",
            bargap: 0,
            margin: { l: scaledHMargin, r: 40, t: Math.max(10, scaledVMargin), b: Math.max(10, scaledVMargin) },
            xaxis: { visible: false, domain: [barStart, Math.min(barEnd, 0.999)] },
            yaxis: {
              tickvals: [0, midTick, N],
              ticktext: [String(Math.round(lowVal)), String(Math.round(midVal)), String(Math.round(highVal))],
              tickfont: { color: config.labelColor, size: Math.max(8, scaledLabelSize - 2) },
              side: "right",
              showgrid: false,
              zeroline: false,
              range: [0, N],
              tickmode: "array",
              showline: false,
              title: { text: config.gradUnit, font: { color: config.labelColor, size: Math.max(8, scaledLabelSize - 2) }, standoff: 4 }
            }
          };
          const imgData = await import_plotly2.default.toImage({
            data: [sankeyTrace, ...barTraces],
            layout
          }, { format: "png", width: dims.width, height: dims.height });
          await new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              ctx.fillStyle = config.bgColor || "#ffffff";
              ctx.fillRect(0, 0, dims.width, dims.height);
              ctx.drawImage(img, 0, 0);
              const pixels = ctx.getImageData(0, 0, dims.width, dims.height).data;
              const quantizeFn = gifenc.quantize || gifenc.default?.quantize;
              const applyPaletteFn = gifenc.applyPalette || gifenc.default?.applyPalette;
              const palette = quantizeFn(pixels, 256, { format: "rgb565" });
              const index = applyPaletteFn(pixels, palette);
              gif.writeFrame(index, dims.width, dims.height, { palette, delay: delayMs });
              resolve();
            };
            img.src = imgData;
          });
          setVideoProgress(Math.round((i + 1) / nFrames * 90));
          await new Promise((r) => setTimeout(r, 0));
        }
        gif.finish();
        const buffer = gif.bytes();
        const blob = new Blob([buffer], { type: "image/gif" });
        setGifPreviewUrl(URL.createObjectURL(blob));
        setVideoProgress(100);
        setExportingVideo(false);
      } catch (err) {
        console.error("Video generation failed:", err);
        alert("Video generation failed: " + err);
        setExportingVideo(false);
      } finally {
        setConfig((prev) => ({ ...prev }));
        setExportingVideo(false);
      }
    };
    const handleFlowChange = (index, field, value) => {
      const newFlows = [...editScenarioData.flows];
      newFlows[index] = { ...newFlows[index], [field]: value };
      if (index === newFlows.length - 1 && value.trim() !== "") {
        newFlows.push({ Source: "", Target: "", Value: "", Color: "" });
      }
      updateScenario(editScenario, { flows: newFlows });
    };
    const deleteFlow = (index) => {
      const newFlows = [...editScenarioData.flows];
      newFlows.splice(index, 1);
      if (newFlows.length === 0) newFlows.push({ Source: "", Target: "", Value: "", Color: "" });
      updateScenario(editScenario, { flows: newFlows });
    };
    const handleDragStart = (index, e) => {
      setDraggedIndex(index);
      e.dataTransfer.effectAllowed = "move";
    };
    const handleDragOver = (index, e) => {
      e.preventDefault();
      if (draggedIndex === null || draggedIndex === index) return;
      const lastIndex = editScenarioData.flows.length - 1;
      if (index === lastIndex || draggedIndex === lastIndex) return;
      const newFlows = [...editScenarioData.flows];
      const draggedRow = newFlows[draggedIndex];
      newFlows.splice(draggedIndex, 1);
      newFlows.splice(index, 0, draggedRow);
      updateScenario(editScenario, { flows: newFlows });
      setDraggedIndex(index);
      setDragAllowedIndex(index);
    };
    const handleDragEnd = () => {
      setDraggedIndex(null);
      setDragAllowedIndex(null);
    };
    const clearAllFlows = () => {
      updateScenario(editScenario, {
        flows: [{ Source: "", Target: "", Value: "", Color: "" }],
        nodeColorOverrides: {}
      });
    };
    const handleTablePaste = (e, startRow, startField) => {
      const pasteData = e.clipboardData.getData("text");
      if (!pasteData || !pasteData.includes("	") && !pasteData.includes("\n")) {
        return;
      }
      e.preventDefault();
      const rows = pasteData.split(/\r?\n/).filter((line) => line.trim() !== "");
      const newFlows = [...editScenarioData.flows];
      const colKeys = ["Source", "Target", "Value", "Color"];
      const startColIdx = colKeys.indexOf(startField);
      let currentRow = startRow;
      for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].split("	");
        if (!newFlows[currentRow]) {
          newFlows[currentRow] = { Source: "", Target: "", Value: "", Color: "" };
        }
        let cellIdx = 0;
        for (let c = startColIdx; c < colKeys.length && cellIdx < cells.length; c++) {
          newFlows[currentRow][colKeys[c]] = cells[cellIdx].trim();
          cellIdx++;
        }
        currentRow++;
      }
      if (newFlows.length > 0 && (newFlows[newFlows.length - 1].Source.trim() !== "" || newFlows[newFlows.length - 1].Target.trim() !== "")) {
        newFlows.push({ Source: "", Target: "", Value: "", Color: "" });
      }
      updateScenario(editScenario, { flows: newFlows });
    };
    const { labels } = (0, import_react6.useMemo)(() => buildSankeyData(activeScenario.flows, config), [activeScenario.flows, config]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex h-screen overflow-hidden text-[13px] leading-relaxed transition-colors duration-200 bg-[var(--bg)] text-[var(--text)]", "data-theme": config.theme, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("aside", { className: cn(
        "flex flex-col bg-[var(--surface)] border-r border-[var(--border)] transition-all duration-300 z-10 overflow-hidden",
        sidebarOpen ? "w-[300px] min-w-[300px]" : "w-0 min-w-0"
      ), children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center gap-2 p-3 pl-4 border-b border-[var(--border)] shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("a", { href: "/", className: "flex-1 text-base font-semibold tracking-tight no-underline text-white hover:text-[var(--accent)]", children: [
            "Sankey",
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-[var(--accent)]", children: "Loop" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "button",
            {
              onClick: () => setSidebarOpen(false),
              className: "flex items-center justify-center w-7 h-7 border border-[var(--border)] rounded-[var(--radius)] text-[var(--text3)] transition-colors hover:border-[var(--text2)] hover:text-[var(--text)]",
              children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.Menu, { size: 15 })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex-1 px-0 py-2 overflow-x-hidden overflow-y-auto scrollbar-thin", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "border-b border-[var(--border)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              "div",
              {
                className: "flex items-center gap-2 px-3.5 py-2.5 cursor-pointer select-none text-[var(--text2)] text-[12px] font-medium tracking-wider uppercase hover:bg-[var(--surface2)] hover:text-[var(--text)]",
                onClick: () => toggleSection("save"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "\u{1F4BE}" }),
                  " Save / Load",
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronRight, { size: 10, className: cn("ml-auto transition-transform opacity-50", openSections.save && "rotate-90") })
                ]
              }
            ),
            openSections.save && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "section-body", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-wrap gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "file", id: "import-json", className: "hidden", accept: ".json", onChange: handleImport }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("button", { className: "btn", onClick: () => document.getElementById("import-json")?.click(), children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.Download, { size: 14 }),
                " Import JSON"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("button", { className: "btn btn-primary", onClick: handleExport, children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.Upload, { size: 14 }),
                " Export JSON"
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "border-b border-[var(--border)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              "div",
              {
                className: "flex items-center gap-2 px-3.5 py-2.5 cursor-pointer select-none text-[var(--text2)] text-[12px] font-medium tracking-wider uppercase hover:bg-[var(--surface2)] hover:text-[var(--text)]",
                onClick: () => toggleSection("theme"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "\u{1F3A8}" }),
                  " Theme",
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronRight, { size: 10, className: cn("ml-auto transition-transform opacity-50", openSections.theme && "rotate-90") })
                ]
              }
            ),
            openSections.theme && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "section-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "UI Theme" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-1.5 radio-group", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                    "button",
                    {
                      className: cn("radio-btn", config.theme === "light" && "active"),
                      onClick: () => updateConfig({ theme: "light" }),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.Sun, { size: 12, className: "inline mr-1" }),
                        " Light"
                      ]
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                    "button",
                    {
                      className: cn("radio-btn", config.theme === "dark" && "active"),
                      onClick: () => updateConfig({ theme: "dark" }),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.Moon, { size: 12, className: "inline mr-1" }),
                        " Dark"
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "Diagram Background" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "input",
                    {
                      type: "color",
                      value: config.bgColor,
                      onChange: (e) => updateConfig({ bgColor: e.target.value }),
                      className: "w-9 h-7 p-0.5 border border-[var(--border)] rounded-[var(--radius)] bg-[var(--surface2)] cursor-pointer"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "input",
                    {
                      type: "text",
                      value: config.bgColor,
                      onChange: (e) => updateConfig({ bgColor: e.target.value }),
                      className: "flex-1"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "Flow Orientation" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-1.5 radio-group", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "button",
                    {
                      className: cn("radio-btn", config.orientation === "h" && "active"),
                      onClick: () => updateConfig({ orientation: "h" }),
                      children: "Horizontal"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "button",
                    {
                      className: cn("radio-btn", config.orientation === "v" && "active"),
                      onClick: () => updateConfig({ orientation: "v" }),
                      children: "Vertical"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center justify-between p-0.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "text-[11px] font-medium text-[var(--text2)] cursor-pointer", htmlFor: "flow-anim", children: "Animate flows" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { className: "relative inline-flex cursor-pointer toggle-switch", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "input",
                    {
                      type: "checkbox",
                      id: "flow-anim",
                      checked: animating,
                      onChange: (e) => setAnimating(e.target.checked),
                      className: "absolute w-0 h-0 opacity-0"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: cn("w-[34px] h-[20px] rounded-[10px] transition-colors relative block", animating ? "bg-[var(--accent)]" : "bg-[var(--border)]"), children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: cn("absolute top-[3px] left-[3px] w-[14px] h-[14px] bg-white rounded-full transition-transform shadow-sm", animating && "translate-x-[14px]") }) })
                ] })
              ] }),
              animating && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: [
                  "Speed ",
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "float-right font-mono text-[11px] text-[var(--text2)]", children: [
                    animSpeed,
                    "s"
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  "input",
                  {
                    type: "range",
                    min: "1",
                    max: "8",
                    step: "0.5",
                    value: animSpeed,
                    onChange: (e) => setAnimSpeed(parseFloat(e.target.value)),
                    className: "w-full"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "border-b border-[var(--border)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              "div",
              {
                className: "flex items-center gap-2 px-3.5 py-2.5 cursor-pointer select-none text-[var(--text2)] text-[12px] font-medium tracking-wider uppercase hover:bg-[var(--surface2)] hover:text-[var(--text)]",
                onClick: () => toggleSection("thermal"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "\u{1F525}" }),
                  " Thermal Gradient",
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronRight, { size: 10, className: cn("ml-auto transition-transform opacity-50", openSections.thermal && "rotate-90") })
                ]
              }
            ),
            openSections.thermal && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "section-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "div",
                {
                  className: "h-3 mb-2 border border-[var(--border)] rounded-sm",
                  style: {
                    background: `linear-gradient(to right, ${config.coldLowCol}, ${config.coldHighCol}, ${config.hotLowCol}, ${config.hotHighCol})`
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "grid grid-cols-2 gap-x-2.5 gap-y-3 items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "High" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "number", value: config.highVal, onChange: (e) => updateConfig({ highVal: parseInt(e.target.value) || 0 }), className: "w-full" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "Hot High" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "color", value: config.hotHighCol, onChange: (e) => updateConfig({ hotHighCol: e.target.value }), className: "w-8 h-7 p-0.5" }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "text", value: config.hotHighCol, onChange: (e) => updateConfig({ hotHighCol: e.target.value }), className: "flex-1 min-w-0 px-1 text-[10px]" })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "Switch" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "number", value: config.midVal, onChange: (e) => updateConfig({ midVal: parseInt(e.target.value) || 0 }), className: "w-full" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "Hot Low" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "color", value: config.hotLowCol, onChange: (e) => updateConfig({ hotLowCol: e.target.value }), className: "w-8 h-7 p-0.5" }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "text", value: config.hotLowCol, onChange: (e) => updateConfig({ hotLowCol: e.target.value }), className: "flex-1 min-w-0 px-1 text-[10px]" })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {}),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "Cold High" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "color", value: config.coldHighCol, onChange: (e) => updateConfig({ coldHighCol: e.target.value }), className: "w-8 h-7 p-0.5" }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "text", value: config.coldHighCol, onChange: (e) => updateConfig({ coldHighCol: e.target.value }), className: "flex-1 min-w-0 px-1 text-[10px]" })
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "Low" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "number", value: config.lowVal, onChange: (e) => updateConfig({ lowVal: parseInt(e.target.value) || 0 }), className: "w-full" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "Cold Low" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-1", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "color", value: config.coldLowCol, onChange: (e) => updateConfig({ coldLowCol: e.target.value }), className: "w-8 h-7 p-0.5" }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "text", value: config.coldLowCol, onChange: (e) => updateConfig({ coldLowCol: e.target.value }), className: "flex-1 min-w-0 px-1 text-[10px]" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "Gradient Unit" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "text", value: config.gradUnit, onChange: (e) => updateConfig({ gradUnit: e.target.value }), className: "w-20" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "border-b border-[var(--border)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              "div",
              {
                className: "flex items-center gap-2 px-3.5 py-2.5 cursor-pointer select-none text-[var(--text2)] text-[12px] font-medium tracking-wider uppercase hover:bg-[var(--surface2)] hover:text-[var(--text)]",
                onClick: () => toggleSection("flows"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "\u{1F30A}" }),
                  " Flows",
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronRight, { size: 10, className: cn("ml-auto transition-transform opacity-50", openSections.flows && "rotate-90") })
                ]
              }
            ),
            openSections.flows && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "section-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: [
                  "Opacity ",
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "float-right font-mono", children: config.linkOpacity.toFixed(2) })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "range", min: "0.05", max: "1", step: "0.05", value: config.linkOpacity, onChange: (e) => updateConfig({ linkOpacity: parseFloat(e.target.value) }), className: "w-full" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: [
                  "Arrowhead ",
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "float-right font-mono", children: config.arrowSize })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "range", min: "0", max: "50", value: config.arrowSize, onChange: (e) => updateConfig({ arrowSize: parseInt(e.target.value) }), className: "w-full" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "border-b border-[var(--border)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              "div",
              {
                className: "flex items-center gap-2 px-3.5 py-2.5 cursor-pointer select-none text-[var(--text2)] text-[12px] font-medium tracking-wider uppercase hover:bg-[var(--surface2)] hover:text-[var(--text)]",
                onClick: () => toggleSection("nodes"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "\u{1F7E3}" }),
                  " Nodes",
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronRight, { size: 10, className: cn("ml-auto transition-transform opacity-50", openSections.nodes && "rotate-90") })
                ]
              }
            ),
            openSections.nodes && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "section-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: [
                  "Node Width ",
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "float-right font-mono", children: config.nodeThickness })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "range", min: "5", max: "50", value: config.nodeThickness, onChange: (e) => updateConfig({ nodeThickness: parseInt(e.target.value) }), className: "w-full" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "Default Color" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "color", value: config.defaultNodeColor, onChange: (e) => updateConfig({ defaultNodeColor: e.target.value }), className: "w-full h-7" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "mt-2 data-table-wrap max-h-[300px] border border-[var(--border)] rounded-[var(--radius)] overflow-auto", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("table", { className: "w-full text-xs", children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("tr", { className: "bg-[var(--surface2)] sticky top-0", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "p-1.5 text-left font-medium text-[var(--text2)]", children: "Node" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "p-1.5 text-center font-medium text-[var(--text2)]", children: "HP?" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "p-1.5 text-left font-medium text-[var(--text2)]", children: "Color" })
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("tbody", { children: labels.map((l) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("tr", { className: "border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--bg)]", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: "p-1.5 truncate max-w-[100px]", title: l, children: l }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: "p-1.5 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "input",
                    {
                      type: "checkbox",
                      checked: config.nodeHPs?.[l] || false,
                      onChange: (e) => {
                        updateConfig({
                          nodeHPs: { ...config.nodeHPs, [l]: e.target.checked }
                        });
                      },
                      className: "w-3.5 h-3.5 accent-[var(--accent)] cursor-pointer"
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: "p-1.5", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-1.5 items-center", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                      "input",
                      {
                        type: "color",
                        value: (() => {
                          const val = editScenarioData.nodeColorOverrides[l];
                          if (val) {
                            if (/^#[0-9A-Fa-f]{6}$/.test(val)) return val;
                          }
                          return "#000000";
                        })(),
                        onChange: (e) => {
                          const overrides = { ...editScenarioData.nodeColorOverrides, [l]: e.target.value };
                          updateScenario(editScenario, { nodeColorOverrides: overrides });
                        },
                        className: "w-5 h-5 p-0 border-0 cursor-pointer overflow-hidden rounded bg-transparent flex-shrink-0",
                        style: { WebkitAppearance: "none" }
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                      "input",
                      {
                        type: "text",
                        value: editScenarioData.nodeColorOverrides[l] || "",
                        placeholder: config.defaultNodeColor,
                        onChange: (e) => {
                          const overrides = { ...editScenarioData.nodeColorOverrides, [l]: e.target.value };
                          updateScenario(editScenario, { nodeColorOverrides: overrides });
                        },
                        className: "w-full p-1 bg-transparent border border-transparent focus:border-[var(--border)] focus:bg-[var(--surface)] transition-all rounded outline-none"
                      }
                    )
                  ] }) })
                ] }, l)) })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "border-b border-[var(--border)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              "div",
              {
                className: "flex items-center gap-2 px-3.5 py-2.5 cursor-pointer select-none text-[var(--text2)] text-[12px] font-medium tracking-wider uppercase hover:bg-[var(--surface2)] hover:text-[var(--text)]",
                onClick: () => toggleSection("labels"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "\u{1F58B}\uFE0F" }),
                  " Labels",
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronRight, { size: 10, className: cn("ml-auto transition-transform opacity-50", openSections.labels && "rotate-90") })
                ]
              }
            ),
            openSections.labels && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "section-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "Value Unit" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "text", value: config.valueUnit, onChange: (e) => updateConfig({ valueUnit: e.target.value }), className: "w-full" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: [
                  "Font Size ",
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "float-right font-mono", children: config.labelSize })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "range", min: "8", max: "30", value: config.labelSize, onChange: (e) => updateConfig({ labelSize: parseInt(e.target.value) }), className: "w-full" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "Font Color" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "color", value: config.labelColor, onChange: (e) => updateConfig({ labelColor: e.target.value }), className: "w-9 h-7 p-0.5 border border-[var(--border)] rounded-[var(--radius)]" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "text", value: config.labelColor, onChange: (e) => updateConfig({ labelColor: e.target.value }), className: "flex-1" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "border-b border-[var(--border)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              "div",
              {
                className: "flex items-center gap-2 px-3.5 py-2.5 cursor-pointer select-none text-[var(--text2)] text-[12px] font-medium tracking-wider uppercase hover:bg-[var(--surface2)] hover:text-[var(--text)]",
                onClick: () => toggleSection("layout"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "\u{1F4D0}" }),
                  " Layout",
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronRight, { size: 10, className: cn("ml-auto transition-transform opacity-50", openSections.layout && "rotate-90") })
                ]
              }
            ),
            openSections.layout && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "section-body", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: [
                  "Spacing ",
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "float-right font-mono", children: activeScenario.nodeSpacing ?? config.nodeSpacing })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "range", min: "0", max: "200", value: activeScenario.nodeSpacing ?? config.nodeSpacing, onChange: (e) => {
                  const val = parseInt(e.target.value);
                  setScenarios((prev) => ({
                    ...prev,
                    [viewScenario]: { ...prev[viewScenario], nodeSpacing: val }
                  }));
                }, className: "w-full" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "Aspect Ratio" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                  "select",
                  {
                    value: config.aspectRatio || "fit",
                    onChange: (e) => updateConfig({ aspectRatio: e.target.value }),
                    className: "w-full text-[11px] px-2 py-1 rounded bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] focus:outline-none focus:border-[var(--accent)]",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "fit", children: "Fit to Space" }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "16:9", children: "16:9" }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "4:3", children: "4:3" }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "1:1", children: "1:1" }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "custom", children: "Custom (uses width/height)" })
                    ]
                  }
                )
              ] }),
              config.aspectRatio === "custom" && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "mt-2 grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block text-[9.5px] mb-1 font-medium text-[var(--text3)] uppercase", children: "Width (px)" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "input",
                    {
                      type: "number",
                      value: config.figWidth,
                      onChange: (e) => updateConfig({ figWidth: Number(e.target.value) }),
                      className: "w-full bg-[var(--surface)] p-1 text-[11px] rounded border border-[var(--border)] text-[var(--text)]"
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "button",
                    {
                      onClick: clearAllFlows,
                      className: "px-1.5 py-0.5 border border-red-500 rounded text-[10px] font-semibold text-red-500 hover:bg-red-500 hover:text-white transition-colors",
                      children: "Clear"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block text-[9.5px] mb-1 font-medium text-[var(--text3)] uppercase", children: "Height (px)" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "input",
                    {
                      type: "number",
                      value: config.figHeight,
                      onChange: (e) => updateConfig({ figHeight: Number(e.target.value) }),
                      className: "w-full bg-[var(--surface)] p-1 text-[11px] rounded border border-[var(--border)] text-[var(--text)]"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: config.aspectRatio === "custom" ? "mt-4" : "", children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "Node Alignment" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex gap-1 radio-group", children: ["justify", "left", "center", "right"].map((align) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  "button",
                  {
                    className: cn("radio-btn", config.nodeAlignment === align && "active"),
                    onClick: () => updateConfig({ nodeAlignment: align }),
                    children: align.charAt(0).toUpperCase() + align.slice(1)
                  },
                  align
                )) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block mb-1 text-[11px] font-medium text-[var(--text2)]", children: "Arrangement" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                  "select",
                  {
                    value: config.nodeArrangement,
                    onChange: (e) => updateConfig({ nodeArrangement: e.target.value }),
                    className: "w-full",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "snap", children: "Snap" }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "perpendicular", children: "Perpendicular" }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "freeform", children: "Freeform" })
                    ]
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("main", { className: "relative flex flex-col flex-1 min-w-0 overflow-y-auto overflow-x-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-col h-screen shrink-0 relative", children: [
          !sidebarOpen && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "button",
            {
              onClick: () => setSidebarOpen(true),
              className: "fixed top-0 left-0 flex flex-col items-center justify-center w-11 h-11 border border-l-0 border-[var(--border)] bg-[var(--surface)] z-20 rounded-br-[var(--radius)] text-[var(--text3)] shadow-md transition-colors hover:text-[var(--text)] hover:bg-[var(--surface2)]",
              children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.Menu, { size: 16 })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
            "div",
            {
              className: "flex flex-col flex-shrink-0 overflow-hidden bg-[var(--surface)] text-[var(--text)] border-b border-[var(--border)]",
              style: { height: dataSectionOpen ? dataSectionHeight : 40 },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                  "div",
                  {
                    className: "flex items-center gap-2 p-2 px-4 border-b border-[var(--border)] bg-[var(--surface2)] cursor-pointer shrink-0 transition-colors hover:bg-[var(--border)]",
                    onClick: () => setDataSectionOpen(!dataSectionOpen),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronRight, { size: 10, className: cn("text-[var(--text3)] transition-transform", dataSectionOpen && "rotate-90") }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-base", children: "\u{1F4CA}" }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-[12px] font-semibold tracking-wider text-[var(--text2)] uppercase", children: "Flow Data" }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex ml-auto gap-0 border border-[var(--border)] rounded-[var(--radius)] overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                          "button",
                          {
                            className: cn("px-3.5 py-1 text-[11.5px] font-medium transition-all", inputMode === "table" ? "bg-[var(--accent)] text-white" : "bg-[var(--surface2)] text-[var(--text2)] hover:text-[var(--text)]"),
                            onClick: () => setInputMode("table"),
                            children: "Table"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                          "button",
                          {
                            className: cn("px-3.5 py-1 text-[11.5px] font-medium border-l border-[var(--border)] transition-all", inputMode === "text" ? "bg-[var(--accent)] text-white" : "bg-[var(--surface2)] text-[var(--text2)] hover:text-[var(--text)]"),
                            onClick: () => setInputMode("text"),
                            children: "Text"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                          "button",
                          {
                            className: cn("px-3.5 py-1 text-[11.5px] font-medium border-l border-[var(--border)] transition-all", inputMode === "guided" ? "bg-[var(--accent)] text-white" : "bg-[var(--surface2)] text-[var(--text2)] hover:text-[var(--text)]"),
                            onClick: () => setInputMode("guided"),
                            children: "Guided"
                          }
                        )
                      ] })
                    ]
                  }
                ),
                dataSectionOpen && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-col flex-1 min-h-0", children: [
                  inputMode !== "guided" && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex bg-[var(--surface)] border-b border-[var(--border)] shrink-0", children: (videoEditorEnabled ? ["before", "25%", "50%", "75%", "after"] : ["before", "after"]).map((scenarioKey) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "button",
                    {
                      className: cn(
                        "flex-1 px-3 py-2 text-[11px] font-semibold text-center border-r border-b-2 transition-all border-[var(--border)] uppercase tracking-wider",
                        editScenario === scenarioKey ? "text-[var(--text)] bg-[var(--surface)] border-b-[var(--accent)]" : "text-[var(--text2)] bg-[var(--surface2)] border-b-transparent hover:text-[var(--text)]"
                      ),
                      onClick: () => setEditScenario(scenarioKey),
                      children: scenarioKey === "before" ? "Before" : scenarioKey === "after" ? "After" : scenarioKey
                    },
                    scenarioKey
                  )) }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: cn("flex-1 overflow-y-auto", inputMode !== "guided" && "p-4"), children: inputMode === "guided" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(GuidedSetup, { onGenerate: (before, after) => {
                    setScenarios((s) => ({
                      before: { ...s.before, flows: before.length > 0 ? before : [{ Source: "", Target: "", Value: "", Color: "" }] },
                      after: { ...s.after, flows: after.length > 0 ? after : [{ Source: "", Target: "", Value: "", Color: "" }] }
                    }));
                    setInputMode("table");
                    if (videoEditorEnabled) setVideoEditorEnabled(false);
                  } }) : inputMode === "table" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-[10.5px] italic text-[var(--text3)]", children: "Paste Excel cells \xB7 Drag to select" }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "border border-[var(--border)] rounded-[var(--radius)] overflow-auto data-table-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("table", { className: "w-full text-[11.5px] border-collapse", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("thead", { className: "sticky top-0 z-10", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("tr", { className: "bg-[var(--surface2)]", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "p-1 px-2 text-left font-medium text-[var(--text2)] text-[10.5px] uppercase tracking-wider border-b border-[var(--border)]", children: "Source" }),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "p-1 px-2 text-left font-medium text-[var(--text2)] text-[10.5px] uppercase tracking-wider border-b border-[var(--border)]", children: "Target" }),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "p-1 px-2 text-left font-medium text-[var(--text2)] text-[10.5px] uppercase tracking-wider border-b border-[var(--border)]", children: "Value" }),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "p-1 px-2 text-left font-medium text-[var(--text2)] text-[10.5px] uppercase tracking-wider border-b border-[var(--border)]", children: "Color" }),
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "p-1 px-2 text-center border-b border-[var(--border)]", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                          "button",
                          {
                            onClick: clearAllFlows,
                            className: "px-1.5 py-0.5 border border-red-500 rounded text-[10px] font-semibold text-red-500 hover:bg-red-500 hover:text-white transition-colors",
                            children: "Clear"
                          }
                        ) })
                      ] }) }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("tbody", { children: editScenarioData.flows.map((flow, i) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                        "tr",
                        {
                          draggable: dragAllowedIndex === i,
                          onDragStart: (e) => handleDragStart(i, e),
                          onDragOver: (e) => handleDragOver(i, e),
                          onDragEnd: handleDragEnd,
                          className: cn(
                            "hover:bg-[var(--surface2)] border-b border-[var(--border)] last:border-b-0 transition-colors duration-150",
                            draggedIndex === i && "opacity-40 bg-[var(--surface2)] border-dashed border-[var(--accent)]"
                          ),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: "p-0", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "text", value: flow.Source, onPaste: (e) => handleTablePaste(e, i, "Source"), onChange: (e) => handleFlowChange(i, "Source", e.target.value), className: "w-full border-transparent bg-transparent focus:bg-[var(--surface)] p-1" }) }),
                            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: "p-0", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "text", value: flow.Target, onPaste: (e) => handleTablePaste(e, i, "Target"), onChange: (e) => handleFlowChange(i, "Target", e.target.value), className: "w-full border-transparent bg-transparent focus:bg-[var(--surface)] p-1" }) }),
                            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: "p-0", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "text", value: flow.Value, onPaste: (e) => handleTablePaste(e, i, "Value"), onChange: (e) => handleFlowChange(i, "Value", e.target.value), className: "w-full border-transparent bg-transparent focus:bg-[var(--surface)] p-1" }) }),
                            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: "p-0", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "text", value: flow.Color, onPaste: (e) => handleTablePaste(e, i, "Color"), onChange: (e) => handleFlowChange(i, "Color", e.target.value), className: "w-full border-transparent bg-transparent focus:bg-[var(--surface)] p-1" }) }),
                            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: "p-1 flex items-center justify-center gap-1", children: (i !== editScenarioData.flows.length - 1 || flow.Source) && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
                              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                                "button",
                                {
                                  type: "button",
                                  onMouseEnter: () => setDragAllowedIndex(i),
                                  onMouseLeave: () => {
                                    if (draggedIndex === null) {
                                      setDragAllowedIndex(null);
                                    }
                                  },
                                  className: "p-1 rounded cursor-grab active:cursor-grabbing text-[var(--text3)] hover:text-[var(--text2)] hover:bg-[var(--surface3)] transition-colors flex items-center justify-center",
                                  title: "Drag to reorder",
                                  children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.GripVertical, { size: 14 })
                                }
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                                "button",
                                {
                                  onClick: () => deleteFlow(i),
                                  className: "text-[var(--text3)] hover:text-[var(--danger)] text-lg px-1 text-center leading-none",
                                  title: "Delete flow",
                                  children: "\xD7"
                                }
                              )
                            ] }) })
                          ]
                        },
                        i
                      )) })
                    ] }) })
                  ] }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-col gap-1.5 h-full", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "text-[10.5px] italic text-[var(--text3)]", children: [
                      "Format: ",
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("code", { className: "font-mono", children: "Source [Value] Target Color" }),
                      " \u2014 one per line"
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                      "textarea",
                      {
                        className: "flex-1 w-full p-2 font-mono text-xs resize-none min-h-[150px]",
                        value: localFlowText !== null ? localFlowText : editScenarioData.flows.map((f) => `${f.Source} [${f.Value}] ${f.Target} ${f.Color}`.trim()).join("\n"),
                        onChange: (e) => {
                          setLocalFlowText(e.target.value);
                          const lines = e.target.value.split("\n");
                          const newFlows = lines.map((line) => {
                            const m = line.match(/^(.+?)\s*\[(.+?)\]\s*(.+?)(?:\s+(\S+))?$/);
                            if (m) return { Source: m[1].trim(), Value: m[2].trim(), Target: m[3].trim(), Color: (m[4] || "").trim() };
                            return { Source: "", Target: "", Value: "", Color: "" };
                          }).filter((f) => f.Source || f.Target || f.Value);
                          if (newFlows.length === 0) newFlows.push({ Source: "", Target: "", Value: "", Color: "" });
                          updateScenario(editScenario, { flows: newFlows });
                        }
                      }
                    )
                  ] }) })
                ] })
              ]
            }
          ),
          dataSectionOpen && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "div",
            {
              onMouseDown: handleDataSectionResizeStart,
              className: "h-[6px] -mt-[3px] bg-transparent hover:bg-[var(--accent)]/50 cursor-ns-resize shrink-0 transition-colors relative z-10 hidden md:block group",
              children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1 rounded-full bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors shadow-sm" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex border-b border-[var(--border)] shrink-0 bg-[var(--surface)] p-2", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex flex-col gap-1 w-full relative", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center gap-2.5 px-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-[11px] font-medium text-[var(--text3)]", children: "Viewing:" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "button",
                {
                  className: cn(
                    "px-3.5 py-1 text-xs font-semibold rounded-[var(--radius)] border border-[var(--border)] transition-all",
                    viewScenario === "before" ? "bg-[var(--accent)] border-[var(--accent)] text-white" : "bg-[var(--surface2)] text-[var(--text2)] hover:border-[var(--text2)] hover:text-[var(--text)]"
                  ),
                  onClick: () => setViewScenario("before"),
                  children: "Before"
                }
              ),
              renderedPPUs.before && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "text-[9px] text-[var(--text3)] font-mono mt-1", children: [
                renderedPPUs.before.toFixed(2),
                " px/",
                config.valueUnit
              ] })
            ] }),
            videoEditorEnabled && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children: ["25%", "50%", "75%"].map((step) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "button",
                {
                  className: cn(
                    "px-3.5 py-1 text-xs font-semibold rounded-[var(--radius)] border border-[var(--border)] transition-all",
                    viewScenario === step ? "bg-[var(--accent)] border-[var(--accent)] text-white" : "bg-[var(--surface2)] text-[var(--text2)] hover:border-[var(--text2)] hover:text-[var(--text)]"
                  ),
                  onClick: () => setViewScenario(step),
                  children: step
                }
              ),
              renderedPPUs[step] && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "text-[9px] text-[var(--text3)] font-mono mt-1", children: [
                renderedPPUs[step]?.toFixed(2),
                " px/",
                config.valueUnit
              ] })
            ] }, step)) }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "button",
                {
                  className: cn(
                    "px-3.5 py-1 text-xs font-semibold rounded-[var(--radius)] border border-[var(--border)] transition-all",
                    viewScenario === "after" ? "bg-[#22c55e] border-[#22c55e] text-white" : "bg-[var(--surface2)] text-[var(--text2)] hover:border-[var(--text2)] hover:text-[var(--text)]"
                  ),
                  onClick: () => setViewScenario("after"),
                  children: "After"
                }
              ),
              renderedPPUs.after && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "text-[9px] text-[var(--text3)] font-mono mt-1", children: [
                renderedPPUs.after.toFixed(2),
                " px/",
                config.valueUnit
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center ml-2 pl-3 border-l border-[var(--border)] gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-[11px] font-medium text-[var(--text2)]", children: "Preserve Input Order" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  "button",
                  {
                    onClick: () => setActiveHelpFeature("pio"),
                    className: "text-[var(--text3)] hover:text-[var(--text)] transition-colors flex items-center",
                    title: "What is this?",
                    children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.HelpCircle, { size: 13 })
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "button",
                {
                  onClick: () => setPreserveInputOrder((prev) => !prev),
                  className: cn(
                    "relative inline-flex h-4 w-7 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    preserveInputOrder ? "bg-[var(--accent)]" : "bg-[var(--border)]"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "span",
                    {
                      className: cn(
                        "pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                        preserveInputOrder ? "translate-x-3" : "translate-x-0"
                      )
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center ml-2 pl-3 border-l border-[var(--border)] gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-[11px] font-medium text-[var(--text2)]", children: "Sync Views" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  "button",
                  {
                    onClick: () => setActiveHelpFeature("sync"),
                    className: "text-[var(--text3)] hover:text-[var(--text)] transition-colors flex items-center",
                    title: "What is this?",
                    children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.HelpCircle, { size: 13 })
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "button",
                {
                  onClick: toggleSyncViews,
                  className: cn(
                    "relative inline-flex h-4 w-7 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
                    isViewsSynced ? "bg-[var(--accent)]" : "bg-[var(--border)]"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "span",
                    {
                      className: cn(
                        "pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                        isViewsSynced ? "translate-x-3" : "translate-x-0"
                      )
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center ml-2 pl-3 border-l border-[var(--border)] gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: cn("text-[11px] font-medium transition-opacity", isViewsSynced ? "text-[var(--text2)]" : "text-[var(--text3)] opacity-50"), children: "Video Editor" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  "button",
                  {
                    onClick: () => setActiveHelpFeature("video"),
                    className: "text-[var(--text3)] hover:text-[var(--text)] transition-colors flex items-center",
                    title: "What is this?",
                    children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.HelpCircle, { size: 13 })
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "button",
                {
                  onClick: isViewsSynced ? toggleVideoEditor : void 0,
                  disabled: !isViewsSynced,
                  className: cn(
                    "relative inline-flex h-4 w-7 shrink-0 rounded-full border-2 border-transparent transition-all duration-200 ease-in-out focus:outline-none",
                    !isViewsSynced ? "bg-[var(--border)] opacity-40 cursor-not-allowed" : videoEditorEnabled ? "bg-[var(--accent)] cursor-pointer" : "bg-[var(--border)] cursor-pointer"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "span",
                    {
                      className: cn(
                        "pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                        videoEditorEnabled && isViewsSynced ? "translate-x-3" : "translate-x-0"
                      )
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "ml-auto flex items-center pr-2", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              "button",
              {
                onClick: resetLayout,
                className: "flex items-center gap-1 py-1 px-2.5 border border-[var(--border)] bg-[var(--surface2)] rounded-[var(--radius)] text-[11px] font-medium text-[var(--text2)] transition-colors hover:border-[var(--text2)] hover:text-[var(--text)]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.RotateCcw, { size: 13 }),
                  " Reset Layout"
                ]
              }
            ) })
          ] }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "relative flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden bg-[var(--bg)] scrollbar-hide", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "relative flex-1 min-h-0 min-w-0 p-4", children: (videoEditorEnabled ? ["before", "25%", "50%", "75%", "after"] : ["before", "after"]).map((scenarioKey) => {
            const baseScenario = scenarios[scenarioKey];
            const displayScenario = preserveInputOrder ? {
              ...baseScenario,
              nodePositions: computePreservedPositions(baseScenario, config),
              hasDraggedNodes: true
            } : baseScenario;
            return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "div",
              {
                className: cn(
                  "absolute inset-0 p-4 transition-opacity duration-300",
                  viewScenario === scenarioKey ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                ),
                children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                  SankeyDiagram,
                  {
                    scenario: displayScenario,
                    config,
                    preserveInputOrder,
                    onNodeDrag: (positions) => {
                      setPreserveInputOrder(false);
                      handleNodeDrag(scenarioKey, positions);
                    },
                    animating: animating && viewScenario === scenarioKey,
                    animSpeed,
                    onRenderedPPU: (val) => {
                      setRenderedPPUs((prev) => {
                        if (prev[scenarioKey] === null) return { ...prev, [scenarioKey]: val };
                        if (Math.abs(prev[scenarioKey] - val) > 0.01) return { ...prev, [scenarioKey]: val };
                        return prev;
                      });
                    },
                    onRenderedPositions: (pos) => {
                      setScenarios((prev) => {
                        const currentPosStr = JSON.stringify(prev[scenarioKey].nativePositions || {});
                        const newPosStr = JSON.stringify(pos || {});
                        if (currentPosStr === newPosStr) return prev;
                        return {
                          ...prev,
                          [scenarioKey]: { ...prev[scenarioKey], nativePositions: pos }
                        };
                      });
                    }
                  }
                )
              },
              scenarioKey
            );
          }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center gap-2 p-1.5 px-3 border-t border-[var(--border)] bg-[var(--surface)] shrink-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-[11px] text-[var(--text3)]", children: "Export:" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("button", { className: "px-3 py-1 btn", style: { fontSize: "11px" }, onClick: () => exportImage("png"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.Download, { size: 13 }),
              " PNG"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("button", { className: "px-3 py-1 btn", style: { fontSize: "11px" }, onClick: () => exportImage("svg"), children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.Download, { size: 13 }),
              " SVG"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "w-px h-4 mx-1 bg-[var(--border)]" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              "button",
              {
                className: cn("px-3 py-1 btn", !videoEditorEnabled && "opacity-40 cursor-not-allowed"),
                style: { fontSize: "11px" },
                onClick: exportTransitionVideo,
                disabled: exportingVideo || !videoEditorEnabled,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.Video, { size: 13 }),
                  " ",
                  exportingVideo ? `Exporting (${videoProgress}%)` : "Transition Video"
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "button",
              {
                onClick: () => setShowDonationModal(true),
                className: "ml-auto flex items-center gap-1.5 px-3 py-1 rounded-[var(--radius)] text-[11px] font-semibold bg-[#ff813f] hover:bg-[#ff6c24] text-white transition-colors border-0 cursor-pointer shadow-sm",
                style: { height: "24px" },
                children: "\u2615 Buy me a coffee"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(EditorDocumentation, {}),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Footer, {}),
        exportingVideo && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "text-white font-medium mb-4", children: "Generating Video..." }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "w-64 h-2 bg-white/20 rounded-full overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "div",
            {
              className: "h-full bg-[var(--accent)] transition-all duration-300",
              style: { width: `${videoProgress}%` }
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "text-white/60 text-xs mt-2", children: [
            videoProgress,
            "% Complete"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "text-white/70 text-sm mt-3", children: "This may take a minute" })
        ] }),
        gifPreviewUrl && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm p-8", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "bg-[var(--surface)] p-6 rounded-xl shadow-2xl max-w-4xl w-full flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "text-[var(--text)] text-xl font-medium mb-4", children: "Transition Preview" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "bg-[var(--surface2)] rounded mb-6 border border-[var(--border)] overflow-hidden w-full flex justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "img",
            {
              src: gifPreviewUrl,
              alt: "Transition Preview",
              className: "max-h-[60vh] object-contain",
              style: { backgroundColor: config.bgColor || "#ffffff" }
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "button",
              {
                className: "px-6 py-2 rounded font-medium border border-[var(--border)] text-[var(--text2)] hover:bg-[var(--surface2)] hover:text-[var(--text)] transition-colors",
                onClick: () => {
                  URL.revokeObjectURL(gifPreviewUrl);
                  setGifPreviewUrl(null);
                },
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              "a",
              {
                href: gifPreviewUrl,
                download: "sankey_transition.gif",
                className: "px-6 py-2 rounded font-medium bg-[#3b7fd4] text-white hover:opacity-90 flex items-center gap-2 transition-colors",
                onClick: () => {
                  setTimeout(() => {
                    URL.revokeObjectURL(gifPreviewUrl);
                    setGifPreviewUrl(null);
                  }, 500);
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.Download, { size: 16 }),
                  " Download GIF"
                ]
              }
            )
          ] }),
          videoDebugInfo.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("details", { className: "w-full mt-6 text-xs text-[var(--text2)]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("summary", { className: "cursor-pointer font-medium mb-2 p-1 hover:bg-[var(--surface2)] rounded flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "Frame information" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "button",
                {
                  className: "px-2 py-1 bg-[var(--surface3)] hover:bg-[var(--border)] rounded text-[var(--text)] transition-colors",
                  onClick: (e) => {
                    e.preventDefault();
                    const header = ["Frame", "PPU_n", "NP_n", "x", "target", "NP_corrected", "PPU_after"].join("	");
                    const rows = videoDebugInfo.map(
                      (info) => [info.frame, info.ppu_n.toFixed(2), info.np_n.toFixed(1), info.x.toFixed(3), info.target.toFixed(1), info.np_corrected.toFixed(1), info.ppu_after.toFixed(2)].join("	")
                    );
                    navigator.clipboard.writeText([header, ...rows].join("\n"));
                  },
                  children: "Copy as TSV"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "max-h-48 overflow-y-auto border border-[var(--border)] rounded bg-[var(--surface2)]", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("table", { className: "w-full text-right p-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("thead", { className: "sticky top-0 bg-[var(--surface)] shadow-sm", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("tr", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "p-1 font-semibold border-b border-[var(--border)]", children: "Frame" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "p-1 font-semibold border-b border-[var(--border)]", children: "PPU_n" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "p-1 font-semibold border-b border-[var(--border)]", children: "NP_n" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "p-1 font-semibold border-b border-[var(--border)]", children: "x" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "p-1 font-semibold border-b border-[var(--border)]", children: "target" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "p-1 font-semibold border-b border-[var(--border)]", children: "NP_corrected" }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("th", { className: "p-1 font-semibold border-b border-[var(--border)]", children: "PPU_after" })
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("tbody", { children: videoDebugInfo.map((info) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("tr", { className: "hover:bg-[var(--surface)]", children: [
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: "p-1 border-b border-[var(--border)]", children: info.frame }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: "p-1 border-b border-[var(--border)]", children: info.ppu_n.toFixed(2) }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: "p-1 border-b border-[var(--border)]", children: info.np_n.toFixed(1) }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: "p-1 border-b border-[var(--border)]", children: info.x.toFixed(3) }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: "p-1 border-b border-[var(--border)]", children: info.target.toFixed(1) }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: "p-1 border-b border-[var(--border)]", children: info.np_corrected.toFixed(1) }),
                /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("td", { className: "p-1 border-b border-[var(--border)]", children: info.ppu_after.toFixed(2) })
              ] }, info.frame)) })
            ] }) })
          ] })
        ] }) }),
        activeHelpFeature && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "div",
          {
            className: "fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
            onClick: () => setActiveHelpFeature(null),
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              "div",
              {
                className: "bg-[var(--surface)] border border-[var(--border)] p-6 rounded-xl shadow-2xl max-w-md w-full relative",
                onClick: (e) => e.stopPropagation(),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "button",
                    {
                      className: "absolute top-4 right-4 text-[var(--text3)] hover:text-[var(--text)] text-lg leading-none",
                      onClick: () => setActiveHelpFeature(null),
                      children: "\xD7"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center gap-2.5 mb-3", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-xl", children: activeHelpFeature === "pio" ? "\u{1F4D0}" : activeHelpFeature === "sync" ? "\u{1F504}" : "\u{1F3AC}" }),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("h3", { className: "text-[var(--text)] text-lg font-semibold tracking-tight text-white", children: [
                      activeHelpFeature === "pio" && "Preserve Input Order",
                      activeHelpFeature === "sync" && "Sync Views",
                      activeHelpFeature === "video" && "Video Editor"
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "text-[var(--text2)] space-y-3 text-[12.5px] leading-relaxed", children: [
                    activeHelpFeature === "pio" && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: "Forces nodes and links to match the sequence defined in your flow table." }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("strong", { children: "How it works:" }),
                        " It stacks nodes vertically within each column in the order they first appear. It also applies sub-pixel tie-breakers to ensure that long bypass links flow along the outer edges of the canvas without crossing intermediate links."
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "italic text-[var(--text3)]", children: "Note: You can still drag nodes freely while this is active. Dragging a node will save its custom coordinates and turn off this layout mode automatically." })
                    ] }),
                    activeHelpFeature === "sync" && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { children: [
                        "Synchronizes the layouts and node structures of the ",
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("strong", { children: "Before" }),
                        " and ",
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("strong", { children: "After" }),
                        " scenarios."
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("strong", { children: "How it works:" }),
                        ' Any node present in only one scenario is added as a "phantom" node (with zero value) in the other.'
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: "Activating this instantly copies the layout positions of your currently active view onto the other view. From that point on, dragging a node in one diagram automatically updates its position in both diagrams, keeping them perfectly aligned." })
                    ] }),
                    activeHelpFeature === "video" && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: "Enables state transitions and exports them as animations." }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("strong", { children: "How it works:" }),
                        " It automatically generates intermediate transition steps (25%, 50%, 75%) between your Before and After diagrams."
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: "This allows you to preview how the energy/material flows shift dynamically and export a smooth, high-fidelity transition GIF." }),
                      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "italic text-[var(--text3)] font-medium", children: 'Requires "Sync Views" to be enabled first, so that the two diagrams have a matching set of nodes to animate.' })
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "mt-6 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "button",
                    {
                      className: "px-4 py-1.5 rounded-[var(--radius)] font-medium bg-[var(--accent)] text-white hover:opacity-90 transition-opacity text-xs",
                      onClick: () => setActiveHelpFeature(null),
                      children: "Got it"
                    }
                  ) })
                ]
              }
            )
          }
        ),
        showDonationModal && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "div",
          {
            className: "fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
            onClick: () => setShowDonationModal(false),
            children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              "div",
              {
                className: "bg-[var(--surface)] border border-[var(--border)] p-6 rounded-xl shadow-2xl max-w-sm w-full relative text-center",
                onClick: (e) => e.stopPropagation(),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "button",
                    {
                      className: "absolute top-4 right-4 text-[var(--text3)] hover:text-[var(--text)] text-lg leading-none",
                      onClick: () => setShowDonationModal(false),
                      children: "\xD7"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "text-3xl mb-3", children: "\u2615" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "text-[var(--text)] text-lg font-semibold tracking-tight text-white mb-2", children: "Thank you for supporting this website!" }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-[var(--text2)] text-[12px] leading-relaxed mb-6", children: "Please enter the amount you want to donate on the Buy Me a Coffee page." }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                      "button",
                      {
                        className: "w-full py-2 rounded-[var(--radius)] font-semibold bg-[#ff813f] hover:bg-[#ff6c24] text-white transition-colors border-0 cursor-pointer text-xs shadow-md",
                        onClick: () => {
                          openDonationPopup();
                          setShowDonationModal(false);
                        },
                        children: "Open Buy Me a Coffee Page"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                      "button",
                      {
                        className: "w-full py-2 rounded-[var(--radius)] font-medium border border-[var(--border)] bg-transparent text-[var(--text2)] hover:bg-[var(--surface2)] hover:text-[var(--text)] cursor-pointer transition-colors text-xs",
                        onClick: () => setShowDonationModal(false),
                        children: "Cancel"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-[var(--text3)] text-[10px] mt-4 leading-normal", children: "\u{1F512} Payment processed securely by Buy Me a Coffee. Payment portals cannot be embedded directly inside other websites for anti-phishing protection." })
                ]
              }
            )
          }
        )
      ] })
    ] });
  }

  // src/pages/PrivacyPolicy.tsx
  var import_jsx_runtime10 = __require("react/jsx-runtime");
  function PrivacyPolicy() {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "min-h-screen bg-[#0c0c0b] text-[#f0ede8] font-sans pt-[80px] flex flex-col justify-between selection:bg-[#e8541a] selection:text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Header, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("main", { className: "max-w-4xl mx-auto px-6 md:px-12 py-12 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h1", { className: "text-3xl md:text-4xl font-bold tracking-tight mb-4", children: "Privacy Policy" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-[#a09d98] text-sm mb-8 pb-8 border-b border-[#272521]", children: "Last Updated: July 4, 2026" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "space-y-8 text-[#d0cdc8] leading-relaxed text-base", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3", children: "1. Introduction" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: 'Welcome to SankeyLoop ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (sankeyloop.com) and use our interactive flow diagram builder.' })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { className: "bg-[#1a1917] border border-[#333128] p-6 rounded-xl", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: "\u{1F4E2}" }),
              " 2. Google AdSense & Advertising Cookies (Important Disclosure)"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "mb-4", children: "SankeyLoop uses third-party advertising services, including **Google AdSense**, to display advertisements when you visit our website. These third-party vendors use cookies to serve ads based on your prior visits to our site and other sites on the Internet." }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("ul", { className: "list-disc pl-6 space-y-2 text-[#a09d98]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", { className: "text-[#f0ede8]", children: "Google DoubleClick DART Cookie:" }),
                " Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to SankeyLoop and/or other sites on the Internet."
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", { className: "text-[#f0ede8]", children: "Opting Out of Personalized Advertising:" }),
                " You may opt out of personalized advertising by visiting Google's ",
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { href: "https://www.google.com/settings/ads", target: "_blank", rel: "noopener noreferrer", className: "text-[#ff813f] underline hover:text-white font-medium", children: "Ads Settings" }),
                ". Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting ",
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { href: "https://www.aboutads.info/choices/", target: "_blank", rel: "noopener noreferrer", className: "text-[#ff813f] underline hover:text-white font-medium", children: "aboutads.info" }),
                "."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3", children: "3. Local Browser Storage & Diagram Data" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "mb-3", children: "SankeyLoop is built with user privacy and data security as a core architectural principle. Unlike conventional cloud web tools, **we do not transmit, store, or analyze your diagram input data on remote servers.**" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { children: [
              "All flow values, custom node titles, color configurations, and financial numbers entered into the SankeyLoop editor are processed entirely within your local web browser's memory and saved locally using standard browser ",
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("code", { className: "bg-[#272521] px-1.5 py-0.5 rounded text-sm text-[#ff813f]", children: "localStorage" }),
              ". You retain 100% ownership and control over your data."
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3", children: "4. Analytics & Log Files" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: "Like most standard websites, SankeyLoop utilizes log files and anonymous traffic analytics to understand website performance and improve user experience. These logs capture generic data including Internet Protocol (IP) addresses, browser types, Internet Service Providers (ISPs), referring/exit pages, and date/time stamps. This information is not linked to any personally identifiable information." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3", children: "5. Your GDPR & CCPA Privacy Rights" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "mb-3", children: "Depending on your location, you may have specific data protection rights under the General Data Protection Regulation (GDPR) or the California Consumer Privacy Act (CCPA), including:" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("ul", { className: "list-disc pl-6 space-y-1 text-[#a09d98]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { children: "The right to access, update, or delete personal information." }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { children: "The right to restrict or object to automated data processing and profiling." }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { children: "The right to data portability and non-discrimination." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "mt-3", children: "Because SankeyLoop operates purely client-side without user accounts or server databases, clearing your web browser cache and local storage immediately erases any stored preferences or diagrams from your device." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3", children: "6. Changes to This Privacy Policy" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: 'We may update our Privacy Policy from time to time. We will notify users of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. You are advised to review this Privacy Policy periodically for any changes.' })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3", children: "7. Contact Us" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { children: [
              "If you have any questions or suggestions about our Privacy Policy, please contact us via email at ",
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { href: "mailto:tomsanzf@gmail.com", className: "text-[#ff813f] underline hover:text-white", children: "tomsanzf@gmail.com" }),
              " or visit our ",
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { href: "/contact", className: "text-[#ff813f] underline hover:text-white", children: "Contact Page" }),
              "."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Footer, {})
    ] });
  }

  // src/pages/TermsOfService.tsx
  var import_jsx_runtime11 = __require("react/jsx-runtime");
  function TermsOfService() {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "min-h-screen bg-[#0c0c0b] text-[#f0ede8] font-sans pt-[80px] flex flex-col justify-between selection:bg-[#e8541a] selection:text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Header, {}),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("main", { className: "max-w-4xl mx-auto px-6 md:px-12 py-12 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h1", { className: "text-3xl md:text-4xl font-bold tracking-tight mb-4", children: "Terms of Service" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-[#a09d98] text-sm mb-8 pb-8 border-b border-[#272521]", children: "Effective Date: July 4, 2026" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "space-y-8 text-[#d0cdc8] leading-relaxed text-base", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3", children: "1. Acceptance of Terms" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children: 'By accessing and using SankeyLoop (the "Service" or "Website" located at sankeyloop.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our web application or services.' })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3", children: "2. Description of Service" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children: 'SankeyLoop provides a free, browser-based, client-side web tool for generating, customizing, and exporting Sankey flow diagrams, along with educational guides and tutorials. The Service is provided "as is" and "as available" without warranties of any kind.' })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3", children: "3. Intellectual Property & Diagram Ownership" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mb-3", children: "**You own what you create.** All diagrams, SVG exports, PNG images, and video animations generated using your data in the SankeyLoop editor remain your sole intellectual property." }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children: "You are free to use diagrams generated by SankeyLoop for personal, academic, commercial, internal corporate presentations, and published research without requiring separate licensing fees or mandatory royalties. Attribution to SankeyLoop is appreciated but not legally mandatory." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3", children: "4. Acceptable Use Policy" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mb-2", children: "When using SankeyLoop, you agree not to:" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("ul", { className: "list-disc pl-6 space-y-1 text-[#a09d98]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("li", { children: "Use the Service for any unlawful, fraudulent, or malicious activities." }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("li", { children: "Attempt to reverse engineer, disrupt, or overload our hosting infrastructure or APIs." }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("li", { children: "Deploy automated scraping bots or abuse our public endpoints in a manner that degrades performance for other users." })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3", children: "5. Disclaimer of Warranties & Limitation of Liability" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mb-3", children: "SankeyLoop is a visualization aid. While we strive for mathematical precision and visual accuracy in flow calculations, we make no guarantees regarding the suitability of the diagrams for critical safety, financial auditing, or engineering compliance decisions." }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children: "In no event shall SankeyLoop, its creators, or its contributors be liable for any direct, indirect, incidental, special, consequential, or exemplary damages arising out of your use of or inability to use the Service or diagrams." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3", children: "6. Third-Party Links & Advertisements" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children: "The Service may contain links to third-party websites or display advertisements served by Google AdSense and other advertising partners. We do not endorse or assume responsibility for the content, privacy policies, or practices of any third-party websites or services." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3", children: "7. Modifications to Terms" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { children: "We reserve the right to modify or replace these Terms at our discretion at any time. Your continued use of the Service after any changes constitutes acceptance of the new Terms of Service." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3", children: "8. Contact Information" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { children: [
              "For any questions regarding these Terms of Service, please reach out to us at ",
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("a", { href: "mailto:tomsanzf@gmail.com", className: "text-[#ff813f] underline hover:text-white", children: "tomsanzf@gmail.com" }),
              "."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Footer, {})
    ] });
  }

  // src/pages/AboutUs.tsx
  var import_react_router_dom6 = __require("react-router-dom");
  var import_jsx_runtime12 = __require("react/jsx-runtime");
  function AboutUs() {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "min-h-screen bg-[#0c0c0b] text-[#f0ede8] font-sans pt-[80px] flex flex-col justify-between selection:bg-[#e8541a] selection:text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Header, {}),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("main", { className: "max-w-4xl mx-auto px-6 md:px-12 py-12 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h1", { className: "text-3xl md:text-4xl font-bold tracking-tight mb-4", children: "About SankeyLoop" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-[#a09d98] text-lg mb-8 pb-8 border-b border-[#272521] leading-relaxed", children: "Empowering engineers, analysts, and researchers with modern, high-precision flow visualization." }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "space-y-10 text-[#d0cdc8] leading-relaxed text-base", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "text-2xl font-semibold text-[#f0ede8] mb-4", children: "Our Mission" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "mb-4", children: "SankeyLoop was created with a single, uncompromising goal: to make generating complex, aesthetically stunning Sankey diagrams as intuitive as writing plain text, while maintaining the mathematical precision required for serious engineering and financial analysis." }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "Traditional diagramming tools often force users into tedious manual drag-and-drop alignment or require writing verbose, complex D3 code from scratch. SankeyLoop bridges that gap by offering a lightning-fast, text-driven interface combined with real-time interactive customization and high-resolution video export capabilities." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 my-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "bg-[#1a1917] p-6 rounded-xl border border-[#272521]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "text-2xl mb-3", children: "\u26A1" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "font-semibold text-[#f0ede8] mb-2", children: "100% Client-Side" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-sm text-[#a09d98]", children: "Your data never leaves your browser. Zero latency, complete data privacy, and instant visual feedback." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "bg-[#1a1917] p-6 rounded-xl border border-[#272521]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "text-2xl mb-3", children: "\u{1F52C}" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "font-semibold text-[#f0ede8] mb-2", children: "Engineering Grade" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-sm text-[#a09d98]", children: "Designed for strict flow conservation, thermodynamic heat balance, and multi-stage mass balance tracking." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "bg-[#1a1917] p-6 rounded-xl border border-[#272521]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "text-2xl mb-3", children: "\u{1F3AC}" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "font-semibold text-[#f0ede8] mb-2", children: "Video & GIF Export" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-sm text-[#a09d98]", children: "Export crisp static PNGs, scalable vectors (SVG), or dynamic transition MP4 animations for presentations." })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("section", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "text-2xl font-semibold text-[#f0ede8] mb-4", children: "Why Open Visualization Matters" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "mb-4", children: "Whether you are mapping national greenhouse gas emissions, auditing corporate cash flows, or balancing a chemical refining process, understanding *where things go* is critical to identifying inefficiencies." }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { children: [
              "By offering free educational tutorials in our ",
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_router_dom6.Link, { to: "/learn", className: "text-[#ff813f] underline hover:text-white font-medium", children: "Learning Hub" }),
              " and maintaining a robust, accessible editor, we hope to contribute to a more transparent, data-literate world."
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("section", { className: "bg-[#161513] border border-[#272521] p-8 rounded-2xl", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-3", children: "Support & Community" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-[#a09d98] mb-6", children: "SankeyLoop is continuously maintained and improved. If you find this tool helpful for your research, corporate presentations, or academic papers, consider supporting the creator or reaching out with feature ideas!" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                "a",
                {
                  href: "https://buymeacoffee.com/tsanz",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "bg-[#ff813f] hover:bg-[#ff6c24] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline inline-block shadow-md",
                  children: "\u2615 Buy Me a Coffee"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                import_react_router_dom6.Link,
                {
                  to: "/contact",
                  className: "bg-transparent border border-[#333128] hover:border-[#5a5754] text-[#f0ede8] px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline inline-block",
                  children: "Get in Touch \u2192"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Footer, {})
    ] });
  }

  // src/pages/ContactUs.tsx
  var import_react7 = __require("react");
  var import_jsx_runtime13 = __require("react/jsx-runtime");
  function ContactUs() {
    const [name, setName] = (0, import_react7.useState)("");
    const [email, setEmail] = (0, import_react7.useState)("");
    const [subject, setSubject] = (0, import_react7.useState)("Feature Request / General Inquiry");
    const [message, setMessage] = (0, import_react7.useState)("");
    const [submitted, setSubmitted] = (0, import_react7.useState)(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      const mailtoUrl = `mailto:tomsanzf@gmail.com?subject=${encodeURIComponent(
        `[SankeyLoop Contact] ${subject}`
      )}&body=${encodeURIComponent(`From: ${name} (${email})

${message}`)}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "min-h-screen bg-[#0c0c0b] text-[#f0ede8] font-sans pt-[80px] flex flex-col justify-between selection:bg-[#e8541a] selection:text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Header, {}),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("main", { className: "max-w-4xl mx-auto px-6 md:px-12 py-12 flex-1 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h1", { className: "text-3xl md:text-4xl font-bold tracking-tight mb-4", children: "Contact & Support" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-[#a09d98] text-base mb-8 pb-8 border-b border-[#272521]", children: "Have a question about Sankey diagrams, feature suggestions, or need assistance with custom flow visualization?" }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "lg:col-span-1 space-y-6 text-[#d0cdc8]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "text-lg font-semibold text-[#f0ede8] mb-2", children: "Direct Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm text-[#a09d98] mb-2", children: "For bug reports, feature requests, or general feedback:" }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "a",
                {
                  href: "mailto:tomsanzf@gmail.com",
                  className: "text-[#ff813f] font-medium hover:underline break-all",
                  children: "tomsanzf@gmail.com"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "pt-4 border-t border-[#272521]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "text-lg font-semibold text-[#f0ede8] mb-2", children: "Support Development" }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm text-[#a09d98] mb-3", children: "SankeyLoop is free and open to everyone. If you love the tool, consider supporting future development:" }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "a",
                {
                  href: "https://buymeacoffee.com/tsanz",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-block bg-[#1a1917] border border-[#ff813f] text-[#ff813f] hover:bg-[#ff813f] hover:text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all no-underline",
                  children: "\u2615 Buy Me a Coffee"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "pt-4 border-t border-[#272521]", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "text-lg font-semibold text-[#f0ede8] mb-2", children: "Response Times" }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm text-[#a09d98]", children: "We typically review and respond to community inquiries within 24\u201348 hours on business days." })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "lg:col-span-2 bg-[#161513] border border-[#272521] p-6 md:p-8 rounded-2xl", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { className: "text-xl font-semibold text-[#f0ede8] mb-6", children: "Send Us a Message" }),
            submitted ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "bg-[#1a281c] border border-[#2f5e38] p-6 rounded-xl text-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-3xl mb-2", children: "\u2705" }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "font-semibold text-lg text-white mb-2", children: "Email Client Opened!" }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-sm text-[#b5dec0] mb-4", children: "We have generated your draft message in your default email application. Please click send in your email client to complete the message delivery." }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "button",
                {
                  onClick: () => setSubmitted(false),
                  className: "bg-[#2a4d31] hover:bg-[#35613e] text-white px-4 py-2 rounded text-xs font-semibold transition-colors cursor-pointer",
                  children: "Send Another Message"
                }
              )
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { className: "block text-xs font-semibold text-[#a09d98] uppercase mb-1.5", htmlFor: "name", children: "Your Name" }),
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    "input",
                    {
                      id: "name",
                      type: "text",
                      required: true,
                      value: name,
                      onChange: (e) => setName(e.target.value),
                      placeholder: "Jane Doe",
                      className: "w-full bg-[#0c0c0b] border border-[#333128] focus:border-[#e8541a] rounded-lg px-3.5 py-2.5 text-sm text-[#f0ede8] placeholder-[#5a5754] outline-none transition-colors"
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { className: "block text-xs font-semibold text-[#a09d98] uppercase mb-1.5", htmlFor: "email", children: "Email Address" }),
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    "input",
                    {
                      id: "email",
                      type: "email",
                      required: true,
                      value: email,
                      onChange: (e) => setEmail(e.target.value),
                      placeholder: "jane@company.com",
                      className: "w-full bg-[#0c0c0b] border border-[#333128] focus:border-[#e8541a] rounded-lg px-3.5 py-2.5 text-sm text-[#f0ede8] placeholder-[#5a5754] outline-none transition-colors"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { className: "block text-xs font-semibold text-[#a09d98] uppercase mb-1.5", htmlFor: "subject", children: "Subject" }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                  "select",
                  {
                    id: "subject",
                    value: subject,
                    onChange: (e) => setSubject(e.target.value),
                    className: "w-full bg-[#0c0c0b] border border-[#333128] focus:border-[#e8541a] rounded-lg px-3.5 py-2.5 text-sm text-[#f0ede8] outline-none transition-colors cursor-pointer",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: "Feature Request / General Inquiry", children: "Feature Request / General Inquiry" }),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: "Bug Report / Tool Issue", children: "Bug Report / Tool Issue" }),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: "Data Visualization / Consulting Question", children: "Data Visualization / Consulting Question" }),
                      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: "Advertising / AdSense Inquiry", children: "Advertising / Partnership Inquiry" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { className: "block text-xs font-semibold text-[#a09d98] uppercase mb-1.5", htmlFor: "message", children: "Message" }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  "textarea",
                  {
                    id: "message",
                    required: true,
                    rows: 6,
                    value: message,
                    onChange: (e) => setMessage(e.target.value),
                    placeholder: "Describe what you would like to see in SankeyLoop or how we can help...",
                    className: "w-full bg-[#0c0c0b] border border-[#333128] focus:border-[#e8541a] rounded-lg p-3.5 text-sm text-[#f0ede8] placeholder-[#5a5754] outline-none transition-colors resize-y font-sans"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                "button",
                {
                  type: "submit",
                  className: "w-full bg-[#e8541a] hover:bg-[#d44812] text-white py-3 rounded-lg font-semibold text-sm transition-colors cursor-pointer shadow-md mt-2",
                  children: "Open in Email Client & Send \u2192"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Footer, {})
    ] });
  }

  // src/pages/LearnHub.tsx
  var import_react8 = __require("react");

  // src/pages/guides/guide1SankeyHistory.tsx
  var import_react_router_dom7 = __require("react-router-dom");
  var import_jsx_runtime14 = __require("react/jsx-runtime");
  var Guide1Content = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "space-y-8 text-[#d0cdc8] leading-relaxed text-base font-sans", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "1. What is a Sankey Diagram?" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-4", children: "A **Sankey diagram** is a specialized type of flow diagram in which the width of the arrows or bands is proportionally scaled to the flow quantity. Whether you are mapping energy consumption across a factory, tracing material distribution through a global supply chain, or illustrating the drop-off rate of visitors on a website, Sankey diagrams provide an immediate, intuitive visual grasp of quantitative relationships." }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-4", children: "Unlike standard flowcharts or organizational diagrams where arrows simply denote directional sequence or hierarchical subordination, every arrow (or *link*) in a Sankey diagram carries a rigorous numerical magnitude. If a stream representing 100 megawatts of electricity splits into two sub-streams of 70 megawatts and 30 megawatts, the combined physical width of the two outgoing arrows will exactly equal the width of the incoming arrow." }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "bg-[#1a1917] border border-[#272521] p-6 rounded-xl my-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h4", { className: "font-semibold text-[#f0ede8] mb-2", children: "Key Anatomy of a Sankey Diagram:" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("ul", { className: "list-disc pl-6 space-y-2 text-[#a09d98] text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { className: "text-[#f0ede8]", children: "Nodes (Rectangles):" }),
              " Represent entities, states, processes, or accounts where flow originates, transforms, or terminates."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { className: "text-[#f0ede8]", children: "Links (Bands/Streams):" }),
              " Represent the quantitative transfer or movement between two nodes. Their thickness is strictly proportional to the numerical value."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { className: "text-[#f0ede8]", children: "Sources & Sinks:" }),
              " Nodes with only outgoing links are *sources* (origins); nodes with only incoming links are *sinks* (destinations or losses)."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "2. The Origins: Captain Sankey and Minard's Masterpiece" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-4", children: "While modern web developers and data scientists frequently use Sankey diagrams for digital analytics, the visualization technique originated in late 19th-century mechanical and thermal engineering. The diagram is named after Irish-born Captain **Matthew Henry Phineas Riall Sankey** (1853\u20131926), an engineer who served in the Royal Engineers before retiring to pursue civil and mechanical engineering consulting." }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-4", children: 'In 1898, Captain Sankey published a landmark paper in the *Minutes of Proceedings of the Institution of Civil Engineers* titled *"The Thermal Efficiency of Steam-Engines."* To demonstrate why contemporary steam engines wasted the vast majority of their fuel energy, Sankey devised a chart showing the flow of heat energy from the boiler combustion chamber through the steam pipes, cylinder work, and condenser exhaust. By scaling the band thickness to British Thermal Units (BTUs), his chart made a dramatic, inescapable visual statement: over 80% of the energy was lost as waste heat before performing useful work.' }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "bg-[#161513] border-l-4 border-[#e8541a] p-5 my-6 italic text-[#a09d98]", children: `"The most effective way to communicate thermodynamic inefficiency to non-technical stakeholders is to show them a physical river of wasted fuel that dwarfs the narrow stream of useful power output." \u2014 Historical retrospective on Captain Sankey's visualization methodology.` }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-4", children: "However, decades before Captain Sankey's publication, the French civil engineer **Charles Joseph Minard** created what many statisticians consider the greatest statistical graphic ever drawn: the 1869 map illustrating Napoleon's disastrous Russian campaign of 1812. Minard's chart seamlessly combined six variables onto a single two-dimensional plane: geography, time, temperature, direction of military movement, and most notably, the size of the French army, represented by a band whose width shrank from 422,000 men at the Polish border down to just 10,000 returning survivors. Minard's work laid the conceptual groundwork for quantitative flow scaling." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "3. Mathematical Foundations: Graph Theory & Flow Conservation" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-4", children: "From a mathematical perspective, a Sankey diagram is a weighted, directed graph G = (V, E), where V represents the set of nodes and E represents the set of directed edges (links). Each edge e = (u, v) in E is assigned a strictly positive weight w(e) > 0 representing the flow volume." }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-4", children: "To maintain visual integrity and physical realism, well-designed Sankey diagrams adhere to the **Principle of Flow Conservation** (also known in physics as Kirchhoff's Current Law or the Continuity Equation). For any intermediate node v that is neither a pure primary source nor a final sink, the sum of all incoming flows must precisely match the sum of all outgoing flows:" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "bg-[#1a1917] border border-[#272521] p-4 rounded-lg my-4 font-mono text-center text-[#ff813f] text-sm md:text-base", children: "\u03A3 w(u, v) [Inflows] = \u03A3 w(v, z) [Outflows]" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-4", children: 'When this principle is violated\u2014for example, if 1,000 units enter a processing node but the outgoing arrows only sum to 850 units without an explicit "Loss" or "Waste" stream\u2014the diagram becomes misleading. In engineering and financial auditing, unexplained flow discrepancies immediately signal accounting errors, measurement drift, or unquantified system leakage.' })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "4. Best Practices in Modern Data Visualization" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-4", children: "While Sankey diagrams are visually captivating, constructing an effective graphic requires adherence to core design rules. Poorly designed flowcharts can quickly devolve into visual spaghetti that confuses rather than enlightens the reader." }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "text-lg font-semibold text-[#f0ede8] mt-6 mb-3", children: "Rule 1: Minimize Link Crossover" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-4", children: "When multiple bands cross over one another, the reader's eye struggles to trace individual pathways from left to right. Advanced rendering algorithms\u2014including the positioning engine powering SankeyLoop\u2014use iterative relaxation and barycentric heuristics to reorder node vertical placement, systematically minimizing edge intersections." }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "text-lg font-semibold text-[#f0ede8] mt-6 mb-3", children: 'Rule 2: Group Minor Streams into an "Other" Category' }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-4", children: 'If a dataset contains 50 distinct destinations where 45 of them account for less than 1% of total flow each, rendering 50 microscopic threads will clutter the diagram. Good visual taxonomy dictates aggregating minor tail items into a consolidated **"Other"** or **"Miscellaneous"** node, keeping the primary visual focus on macro-level distribution.' }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "text-lg font-semibold text-[#f0ede8] mt-6 mb-3", children: "Rule 3: Use Strategic Color Grouping" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-4", children: "Color should encode meaning, not just provide decoration. There are three primary color schemes utilized in professional Sankey modeling:" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("ul", { className: "list-disc pl-6 space-y-2 text-[#a09d98] mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { className: "text-[#f0ede8]", children: "Source-Based Coloring:" }),
            " Links inherit the color of their origin node. This makes it effortless to trace how a specific input divides across downstream stages."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { className: "text-[#f0ede8]", children: "Target-Based Coloring:" }),
            " Links inherit the color of their destination node, highlighting where resources ultimately accumulate."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("strong", { className: "text-[#f0ede8]", children: "Status/Health Coloring:" }),
            " Utilizing semantic colors (e.g., green for productive output, red for thermal loss or financial expense, gray for neutral recirculation)."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "5. When to Use a Sankey vs. Other Chart Types" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-4", children: "Choosing the right chart is half the battle in data storytelling. Here is how Sankey diagrams compare against traditional alternatives:" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("table", { className: "w-full text-left border-collapse text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("tr", { className: "border-b border-[#333128] text-[#f0ede8] bg-[#1a1917]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("th", { className: "p-3 font-semibold", children: "Chart Type" }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("th", { className: "p-3 font-semibold", children: "Primary Strength" }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("th", { className: "p-3 font-semibold", children: "When to Choose Over Sankey" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("tbody", { className: "divide-y divide-[#272521] text-[#a09d98]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { className: "p-3 font-medium text-[#f0ede8]", children: "Bar / Column Chart" }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { className: "p-3", children: "Comparing static discrete quantities side-by-side." }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { className: "p-3", children: "When you only need to show total revenue by quarter without showing how revenue flows into expenses." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { className: "p-3 font-medium text-[#f0ede8]", children: "Pie / Donut Chart" }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { className: "p-3", children: "Showing simple percentage breakdown of a single whole." }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { className: "p-3", children: "When there is only 1 stage of division (e.g., market share of 5 companies) with no multi-stage flow." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { className: "p-3 font-medium text-[#f0ede8]", children: "Tree / Treemap" }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { className: "p-3", children: "Hierarchical nesting of categories within subcategories." }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { className: "p-3", children: "When data is strictly hierarchical (parent-child) without cross-linking or recombination between branches." })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { className: "p-3 font-medium text-[#f0ede8]", children: "Sankey Diagram" }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { className: "p-3", children: "Multi-stage network distribution, conservation tracking, and loss identification." }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { className: "p-3 text-[#ff813f] font-medium", children: "When you need to illustrate the end-to-end lifecycle of materials, energy, money, or user traffic across multiple sequential stages." })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "6. Building Your First Diagram with SankeyLoop" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-4", children: "Now that you understand the history, mathematics, and design principles behind Sankey diagrams, it is time to put theory into practice. With SankeyLoop, you do not need to install complex software or write code. You simply describe your flows using natural text syntax:" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "bg-[#1a1917] border border-[#333128] p-4 rounded-lg font-mono text-xs md:text-sm text-[#b5dec0] my-4 overflow-x-auto", children: [
          "// Syntax: Source [Amount] Target",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
          "Gross Revenue [100000] Operating Costs",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
          "Gross Revenue [40000] Gross Profit",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
          "Operating Costs [60000] Payroll",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
          "Operating Costs [25000] Software & Server Hosting",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
          "Operating Costs [15000] Office Lease",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
          "Gross Profit [15000] Corporate Taxes #ff4d4d",
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("br", {}),
          "Gross Profit [25000] Net Retained Earnings #4caf50"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mb-6", children: "Ready to visualize your own data? Jump directly into the interactive editor or check out our specialized engineering and financial guides below." }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex flex-wrap gap-4 pt-4 border-t border-[#272521]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            import_react_router_dom7.Link,
            {
              to: "/app",
              className: "bg-[#e8541a] hover:bg-[#d44812] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline shadow-md",
              children: "Launch SankeyLoop Editor \u2192"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            import_react_router_dom7.Link,
            {
              to: "/learn/energy-efficiency-heat-balance",
              className: "bg-[#1a1917] border border-[#333128] hover:border-[#5a5754] text-[#f0ede8] px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline",
              children: "Next Guide: Engineering & Heat Balance \u2192"
            }
          )
        ] })
      ] })
    ] });
  };
  var guide1Article = {
    id: "guide-1",
    slug: "ultimate-guide-sankey-diagrams",
    title: "The Ultimate Guide to Sankey Diagrams: History, Theory, and Best Practices",
    subtitle: "Discover how a 19th-century thermodynamic efficiency chart became one of the most powerful visualization tools in modern data science, engineering, and digital analytics.",
    category: "Fundamentals",
    readTime: "8 min read",
    date: "July 4, 2026",
    excerpt: "Explore the origins of Sankey diagrams from Captain Matthew Sankey and Charles Minard, understand the mathematical continuity equations of flow conservation, and master visual design best practices.",
    author: {
      name: "Tom Sanz",
      role: "Lead Developer & Visualization Architect"
    },
    content: Guide1Content
  };

  // src/pages/guides/guide2Thermodynamics.tsx
  var import_react_router_dom8 = __require("react-router-dom");
  var import_jsx_runtime15 = __require("react/jsx-runtime");
  var Guide2Content = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "space-y-8 text-[#d0cdc8] leading-relaxed text-base font-sans", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "1. The First Law of Thermodynamics and Energy Auditing" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-4", children: "In mechanical, chemical, and industrial engineering, performing a rigorous energy audit is the foundational step toward improving thermal efficiency and reducing greenhouse gas emissions. The bedrock principle governing any energy system is the **First Law of Thermodynamics**\u2014the law of conservation of energy\u2014which states that energy can neither be created nor destroyed within an isolated system; it can only change form." }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-4", children: "When analyzing a thermal power plant, an industrial refining furnace, or an automotive powertrain, the total chemical or electrical energy entering the system must equal the sum of the useful work performed plus all intermediate thermal losses and dissipations:" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "bg-[#1a1917] border border-[#272521] p-4 rounded-lg my-4 font-mono text-center text-[#ff813f] text-sm md:text-base", children: "E_in = W_useful + Q_exhaust + Q_cooling + Q_radiation + E_friction" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-4", children: "While spreadsheets can tabulate these numbers in rows and columns, they fail to communicate the physical geometry of energy degradation. A **Thermodynamic Sankey diagram** transforms dry enthalpy equations into a visual map where engineers and plant managers can instantly identify which subsystem is responsible for the greatest exergy destruction." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "2. Modeling Industrial Heat Balance: Power Generation" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-4", children: "Consider a modern Combined Cycle Gas Turbine (CCGT) power generation plant. A standard gas turbine operating on natural gas converts chemical fuel energy into electrical power with an open-cycle efficiency of roughly 38\u201342%. By capturing the 58% waste heat exiting the turbine exhaust using a Heat Recovery Steam Generator (HRSG) to drive a secondary steam turbine, combined cycle efficiency can be pushed past 60%." }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-4", children: "Using SankeyLoop, we can model this thermodynamic heat balance with precision. Below is a realistic energy audit for a 500 MW thermal input CCGT plant:" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "bg-[#1a1917] border border-[#333128] p-4 rounded-lg font-mono text-xs md:text-sm text-[#b5dec0] my-4 overflow-x-auto", children: [
          "// Combined Cycle Gas Turbine (CCGT) Heat Balance (in MW)",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          "Natural Gas Fuel [500] Gas Turbine Combustion Chamber",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          "// Primary Gas Turbine Stage",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          "Gas Turbine Combustion Chamber [195] Gas Turbine Generator Output #4caf50",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          "Gas Turbine Combustion Chamber [285] Turbine Exhaust Gas (HRSG Input) #ff9800",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          "Gas Turbine Combustion Chamber [15] Radiative & Mechanical Losses #ff4d4d",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          "Gas Turbine Combustion Chamber [5] Auxiliary Station Parasitic Load #9e9e9e",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          "// Heat Recovery Steam Generator (HRSG) Stage",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          "Turbine Exhaust Gas (HRSG Input) [110] Steam Turbine Generator Output #4caf50",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          "Turbine Exhaust Gas (HRSG Input) [135] Condenser Cooling Water Dissipation #2196f3",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          "Turbine Exhaust Gas (HRSG Input) [40] Stack Exhaust Atmosphere Loss #ff4d4d",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          "// Consolidated Grid Output",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          "Gas Turbine Generator Output [195] Total Electric Grid Power #00e676",
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("br", {}),
          "Steam Turbine Generator Output [110] Total Electric Grid Power #00e676"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-4", children: "By rendering this script in SankeyLoop, plant operators can visually verify that out of 500 MW of raw fuel input, exactly 305 MW reaches the electrical grid (61% thermal efficiency), while 135 MW is absorbed by condenser cooling water and 55 MW is lost to stack exhaust and radiation." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "3. Comparative Powertrain Analysis: Internal Combustion vs. Electric Vehicles" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-4", children: "Another critical domain where Sankey flow modeling is indispensable is automotive propulsion engineering. Why has the global automotive industry pivoted so aggressively toward Battery Electric Vehicles (BEVs)? A Sankey efficiency comparison provides the most compelling answer." }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "bg-[#1a1917] border border-[#333128] p-5 rounded-xl", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "text-lg font-semibold text-[#ff813f] mb-2", children: "\u{1F525} Gasoline ICE Powertrain" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-sm text-[#a09d98] mb-3", children: "In a conventional gasoline Internal Combustion Engine (ICE), only **16% to 20%** of the chemical fuel energy stored in the tank actually reaches the wheels to propel the vehicle." }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("ul", { className: "text-xs space-y-1.5 text-[#d0cdc8] font-mono", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u2022 Engine Engine Thermal Loss: ~62%" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u2022 Idling & Standby Waste: ~5%" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u2022 Drivetrain Friction: ~5%" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u2022 Auxiliary Accessories: ~3%" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { className: "text-[#4caf50] font-bold", children: "\u2022 Useful Road Propulsion: ~20%" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "bg-[#1a1917] border border-[#333128] p-5 rounded-xl", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "text-lg font-semibold text-[#4caf50] mb-2", children: "\u26A1 Battery Electric (BEV) Powertrain" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-sm text-[#a09d98] mb-3", children: "In a modern Battery Electric Vehicle, approximately **75% to 85%** of grid electrical energy charged into the battery pack is converted into kinetic road propulsion." }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("ul", { className: "text-xs space-y-1.5 text-[#d0cdc8] font-mono", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u2022 Grid Charging Losses: ~10%" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u2022 Inverter & Motor Resistance: ~8%" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u2022 Drivetrain Mechanical Loss: ~3%" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { children: "\u2022 Regenerative Braking Recovery: +8%" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("li", { className: "text-[#4caf50] font-bold", children: "\u2022 Useful Road Propulsion: ~80%" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-4", children: "When presenting these engineering realities to executives or regulatory bodies, a side-by-side Sankey diagram makes the 4x efficiency disparity immediately comprehensible without requiring advanced coursework in thermodynamics." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "4. Step-by-Step Guide: Best Practices for Thermal Sankey Modeling" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mb-4", children: "When constructing engineering flow diagrams in SankeyLoop, follow these four professional rules to ensure technical rigor:" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("ol", { className: "list-decimal pl-6 space-y-3 text-[#a09d98]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { className: "text-[#f0ede8]", children: "Use Consistent Physical Units:" }),
            " Never mix energy units (e.g., BTUs and Megajoules) or power vs. energy quantities (e.g., kW vs. kWh) within the same diagram. If modeling continuous power, standardize on Megawatts (MW) or Kilowatts (kW). If modeling annual energy consumption, standardize on Gigawatt-hours (GWh) or Terajoules (TJ)."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { className: "text-[#f0ede8]", children: "Account for Parasitic & Auxiliary Loads:" }),
            ' Almost all industrial processes consume a portion of their own output to power internal pumps, fans, control systems, and lighting. Model this explicit feedback loop or branch it out as "Parasitic Station Load."'
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { className: "text-[#f0ede8]", children: "Color-Code Enthalpy Quality:" }),
            " Use visual temperature semantics. Render high-grade thermal input as deep red or orange (`#ff5722`), useful work as bright vibrant green (`#00e676`), and low-grade rejected waste heat as muted gray (`#78909c`) or cool blue (`#29b6f6`)."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("strong", { className: "text-[#f0ede8]", children: "Validate Mass & Energy Balances:" }),
            ' Before publishing your diagram, check every junction node. If the sum of incoming links does not equal the sum of outgoing links, add an explicit "Unaccounted Loss / Measurement Error" link to maintain mass-energy conservation.'
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { className: "bg-[#161513] border border-[#272521] p-6 rounded-xl mt-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { className: "text-xl font-semibold text-[#f0ede8] mb-2", children: "Ready to Model Your Plant or Process?" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-sm text-[#a09d98] mb-4", children: "Copy the CCGT script above directly into our interactive editor and customize the numbers to match your specific engineering project or energy audit." }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            import_react_router_dom8.Link,
            {
              to: "/app",
              className: "bg-[#e8541a] hover:bg-[#d44812] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline shadow-md",
              children: "Open Interactive Editor \u2192"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            import_react_router_dom8.Link,
            {
              to: "/learn/financial-cash-flow-budgeting",
              className: "bg-[#1a1917] border border-[#333128] hover:border-[#5a5754] text-[#f0ede8] px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline",
              children: "Next Guide: Financial Cash Flows \u2192"
            }
          )
        ] })
      ] })
    ] });
  };
  var guide2Article = {
    id: "guide-2",
    slug: "energy-efficiency-heat-balance",
    title: "Thermodynamic Heat Balance & Energy Flow Mapping in Engineering",
    subtitle: "Master the application of Sankey diagrams in industrial energy audits, power plant efficiency modeling, and automotive powertrain optimization.",
    category: "Engineering",
    readTime: "9 min read",
    date: "July 4, 2026",
    excerpt: "Learn how to apply the First Law of Thermodynamics to visual flow modeling. See real-world CCGT power plant scripts, automotive ICE vs. EV comparisons, and thermal unit standardization rules.",
    author: {
      name: "Tom Sanz",
      role: "Lead Developer & Visualization Architect"
    },
    content: Guide2Content
  };

  // src/pages/guides/guide3Finance.tsx
  var import_react_router_dom9 = __require("react-router-dom");
  var import_jsx_runtime16 = __require("react/jsx-runtime");
  var Guide3Content = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "space-y-8 text-[#d0cdc8] leading-relaxed text-base font-sans", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "1. Why Accounting is Inherently a Flow System" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mb-4", children: "For centuries, corporate finance and personal accounting have relied on static tabular spreadsheets: balance sheets, income statements, and cash flow reports. While double-entry bookkeeping guarantees mathematical precision through debits and credits, reading rows of numbers often obscures the macro-level story of where money originates, where it gets bottlenecked, and where it ultimately evaporates." }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mb-4", children: "From a fundamental economic perspective, financial accounting is an exact analog to fluid dynamics or thermodynamic mass conservation. Every single dollar that enters a corporation as revenue must eventually exit as an expense, be distributed to shareholders as dividends, or be retained within corporate reserves as equity or cash:" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "bg-[#1a1917] border border-[#272521] p-4 rounded-lg my-4 font-mono text-center text-[#00e676] text-sm md:text-base", children: "Total Revenue = COGS + Operating Expenses + Taxes + Net Retained Profit" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mb-4", children: "By translating GAAP (Generally Accepted Accounting Principles) or IFRS financial statements into a **Financial Sankey diagram**, Chief Financial Officers (CFOs), analysts, and board members can instantly visualize financial run-rate, operational overhead ratios, and net profit margins at a single glance." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "2. Visualizing Corporate Income Statements (GAAP / IFRS)" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mb-4", children: "A standard corporate income statement (or Profit & Loss / P&L statement) is structured as a sequential waterfall of subtractions. Let us examine how a publicly traded Software-as-a-Service (SaaS) technology company generating $100 Million in annual revenue translates into a Sankey flow model:" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "bg-[#1a1917] border border-[#333128] p-4 rounded-lg font-mono text-xs md:text-sm text-[#b5dec0] my-4 overflow-x-auto", children: [
          "// Corporate SaaS Income Statement ($ in Millions)",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "Gross Subscriptions [90] Total Revenue",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "Professional Services [10] Total Revenue",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "// Cost of Goods Sold (COGS)",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "Total Revenue [22] Cost of Goods Sold (COGS) #ff7043",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "Total Revenue [78] Gross Profit #00e676",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "// COGS Breakdown",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "Cost of Goods Sold (COGS) [14] Cloud Server Infrastructure #ffab91",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "Cost of Goods Sold (COGS) [6] Customer Support & Success #ffab91",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "Cost of Goods Sold (COGS) [2] Payment Processing Fees #ffab91",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "// Operating Expenses (OPEX)",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "Gross Profit [28] Sales & Marketing (S&M) #ffb74d",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "Gross Profit [22] Research & Development (R&D) #ffb74d",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "Gross Profit [12] General & Administrative (G&A) #ffb74d",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "Gross Profit [16] Operating Income (EBIT) #00e676",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "// Taxes and Net Profit",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "Operating Income (EBIT) [3] Interest & Tax Expense #e57373",
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("br", {}),
          "Operating Income (EBIT) [13] Net Income (Retained Earnings) #00c853"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mb-4", children: `When this script is rendered in SankeyLoop, the thick 100M "Total Revenue" stream splits visibly into COGS ($22M) and Gross Profit ($78M). As Gross Profit cascades rightward, the reader can visually witness how R&D and Sales & Marketing consume the lion's share of gross margins, leaving a lean, highly profitable $13M green stream of Net Income.` })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "3. Personal Finance & Household Budgeting: The 50/30/20 Rule" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mb-4", children: "Sankey diagrams have experienced an explosion of popularity in personal finance communities (such as Reddit's r/dataisbeautiful and r/personalfinance). Why? Because traditional household budgeting apps present boring pie charts or piecemeal list items that fail to show the holistic relationship between gross salary, tax withholdings, mandatory living expenses, and wealth accumulation." }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mb-4", children: "One of the most widely recommended financial frameworks is Senator Elizabeth Warren's **50/30/20 Budgeting Rule**:" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 my-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "bg-[#1a1917] border border-[#333128] p-5 rounded-xl border-t-4 border-t-[#2196f3]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { className: "text-lg font-semibold text-[#64b5f6] mb-2", children: "50% Needs" }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-xs text-[#a09d98] mb-2", children: "Mandatory, unavoidable living expenses required for survival and basic employment." }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("ul", { className: "text-xs space-y-1 text-[#d0cdc8] font-mono", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: "\u2022 Rent / Mortgage" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: "\u2022 Groceries & Basic Food" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: "\u2022 Health & Auto Insurance" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: "\u2022 Utilities & Minimum Debt" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "bg-[#1a1917] border border-[#333128] p-5 rounded-xl border-t-4 border-t-[#ffb74d]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { className: "text-lg font-semibold text-[#ffd54f] mb-2", children: "30% Wants" }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-xs text-[#a09d98] mb-2", children: "Discretionary lifestyle spending that enhances comfort and entertainment." }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("ul", { className: "text-xs space-y-1 text-[#d0cdc8] font-mono", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: "\u2022 Dining Out & Bars" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: "\u2022 Travel & Vacations" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: "\u2022 Streaming Subscriptions" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: "\u2022 Hobby & Retail Shopping" })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "bg-[#1a1917] border border-[#333128] p-5 rounded-xl border-t-4 border-t-[#00e676]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { className: "text-lg font-semibold text-[#69f0ae] mb-2", children: "20% Savings" }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-xs text-[#a09d98] mb-2", children: "Long-term wealth building, retirement investing, and financial security." }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("ul", { className: "text-xs space-y-1 text-[#d0cdc8] font-mono", children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: "\u2022 401(k) / IRA Retirement" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: "\u2022 Emergency Fund Deposit" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: "\u2022 Brokerage Investments" }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { children: "\u2022 Extra Principal Paydown" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mb-4", children: 'By mapping your household budget in SankeyLoop, you can instantly see whether your "Wants" stream is cannibalizing your "Savings" stream, providing immediate clarity on where lifestyle creep is occurring.' })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "4. Advanced Applications: SaaS Economics & Unit Revenue Retention" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mb-4", children: "In venture capital and technology entrepreneurship, tracking **Monthly Recurring Revenue (MRR) movements** across customer cohorts is critical for valuation. A SaaS company's revenue flow is dynamic: new subscriptions enter the system, existing customers upgrade (Expansion MRR), some customers downgrade (Contraction MRR), and some cancel entirely (Churn MRR)." }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mb-4", children: "A specialized SaaS Cohort Sankey diagram allows growth product managers to map:" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("ul", { className: "list-disc pl-6 space-y-2 text-[#a09d98] mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { className: "text-[#f0ede8]", children: "Starting MRR:" }),
            " The recurring revenue base at the beginning of the quarter."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { className: "text-[#f0ede8]", children: "New & Expansion Inflows:" }),
            " Fresh capital added by sales and upselling teams."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { className: "text-[#f0ede8]", children: "Contraction & Churn Outflows:" }),
            " Revenue lost to cancellations and seat reductions."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { className: "text-[#f0ede8]", children: "Ending Net Retained MRR:" }),
            " The final revenue base carried into the next quarter."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "5. Best Practices for Financial Sankey Formatting" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mb-4", children: "To ensure your financial diagrams meet professional accounting standards when presented to investors or corporate boards, follow these essential design conventions:" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("ol", { className: "list-decimal pl-6 space-y-3 text-[#a09d98]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { className: "text-[#f0ede8]", children: "Standardize Currency Scales:" }),
            ' Always state the exact currency unit and multiplier (e.g., "$ in USD Thousands" or "\u20AC in Millions") at the root node or diagram title.'
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { className: "text-[#f0ede8]", children: "Use Semantic Financial Colors:" }),
            " In Western accounting traditions, use **Green** (`#00e676` or `#2e7d32`) exclusively for revenue, gross profit, savings, and positive net income. Use **Red or Orange** (`#d32f2f` or `#f57c00`) for taxes, COGS, debt payments, and operating losses. Use **Neutral Gray or Slate** for intermediate structural nodes."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { className: "text-[#f0ede8]", children: "Order Nodes by Priority or Liquidity:" }),
            " Arrange outgoing branches vertically from top to bottom based on financial priority. For income statements, place mandatory COGS and fixed overhead at the top, and residual Net Income at the bottom. For personal budgets, place mandatory needs at the top and discretionary wants below."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("strong", { className: "text-[#f0ede8]", children: "Verify Zero Discrepancy:" }),
            " In double-entry accounting, dollars do not vanish. Ensure that `Sum(Inflows) == Sum(Outflows)` for every single account node."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("section", { className: "bg-[#161513] border border-[#272521] p-6 rounded-xl mt-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { className: "text-xl font-semibold text-[#f0ede8] mb-2", children: "Visualize Your Financial Data Today" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-sm text-[#a09d98] mb-4", children: "Copy the SaaS Income Statement script above into SankeyLoop and replace the numbers with your own corporate P&L or household budget to create a stunning, investor-ready visualization." }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            import_react_router_dom9.Link,
            {
              to: "/app",
              className: "bg-[#e8541a] hover:bg-[#d44812] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline shadow-md",
              children: "Launch Editor with Financial Script \u2192"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            import_react_router_dom9.Link,
            {
              to: "/learn/sankeyloop-user-manual",
              className: "bg-[#1a1917] border border-[#333128] hover:border-[#5a5754] text-[#f0ede8] px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline",
              children: "Next Guide: Editor User Manual \u2192"
            }
          )
        ] })
      ] })
    ] });
  };
  var guide3Article = {
    id: "guide-3",
    slug: "financial-cash-flow-budgeting",
    title: "Visualizing Financial Cash Flows, Budgets, and Corporate Income Statements",
    subtitle: "Transform complex GAAP P&L statements, household 50/30/20 budgets, and SaaS unit economics into clear, intuitive flow diagrams.",
    category: "Finance",
    readTime: "8 min read",
    date: "July 4, 2026",
    excerpt: "Learn why accounting is inherently a flow conservation system. Explore practical Sankey scripts for corporate SaaS income statements, household budgeting, and unit revenue retention.",
    author: {
      name: "Tom Sanz",
      role: "Lead Developer & Visualization Architect"
    },
    content: Guide3Content
  };

  // src/pages/guides/guide4Manual.tsx
  var import_react_router_dom10 = __require("react-router-dom");
  var import_jsx_runtime17 = __require("react/jsx-runtime");
  var Guide4Content = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "space-y-8 text-[#d0cdc8] leading-relaxed text-base font-sans", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "1. Introduction to SankeyLoop" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "mb-4", children: "Welcome to the official technical documentation and advanced user manual for **SankeyLoop**. Whether you are an engineer modeling thermodynamic heat cycles, an auditor mapping corporate cash flows, or a researcher visualizing data distributions, SankeyLoop is engineered to give you complete visual control without requiring a single line of traditional programming code." }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "mb-4", children: "Our core philosophy is **Text-Driven Visualization**. By representing complex flow networks as simple, human-readable text syntax, you can version-control your diagrams in Git, generate diagrams dynamically from database scripts, and collaborate with colleagues seamlessly using plain text email or chat." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "2. Core Syntax Reference Guide" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "mb-4", children: "The SankeyLoop engine parses plain text input from the left-hand editor panel in real time. Every line of text represents either a flow link, a node styling rule, or a comment. Below is the comprehensive syntax specification:" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { className: "text-lg font-semibold text-[#f0ede8] mt-6 mb-3", children: "2.1 Basic Flow Links" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "mb-3", children: "To create a directed link between two nodes, write the origin node name, followed by the numerical flow magnitude enclosed in square brackets `[ ]`, followed by the destination node name:" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "bg-[#1a1917] border border-[#333128] p-3 rounded font-mono text-sm text-[#00e676] my-2", children: "Source Node [Amount] Target Node" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-sm text-[#a09d98] mb-4", children: "*Example:* `Boiler Combustion [500] High Pressure Steam Turbine`" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { className: "text-lg font-semibold text-[#f0ede8] mt-6 mb-3", children: "2.2 Individual Link Custom Coloring" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "mb-3", children: "By default, links inherit color based on your selected global scheme (Source-based or Target-based). To assign a specific hex color code to an individual flow band, append `#RRGGBB` or `#RGB` to the end of the line:" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "bg-[#1a1917] border border-[#333128] p-3 rounded font-mono text-sm text-[#ffb74d] my-2", children: "Gross Revenue [25000] Net Retained Profit #00c853" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-sm text-[#a09d98] mb-4", children: "*Note:* Standard CSS color names (such as `red`, `blue`, `green`, `orange`) are also natively supported by the rendering engine." }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { className: "text-lg font-semibold text-[#f0ede8] mt-6 mb-3", children: "2.3 Explicit Node Color Assignment" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "mb-3", children: "To set a permanent custom color for an entire node (and all links originating from it when using source-coloring), start a new line with a colon `:`, followed by the exact node name, followed by the hex color code:" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "bg-[#1a1917] border border-[#333128] p-3 rounded font-mono text-sm text-[#64b5f6] my-2", children: ":Operating Expenses #ff5722" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { className: "text-lg font-semibold text-[#f0ede8] mt-6 mb-3", children: "2.4 Comments & Annotations" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "mb-3", children: "Any line beginning with double slashes `//` is treated as a comment and ignored by the parser. Use comments to organize complex multi-stage diagrams into logical sections:" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "bg-[#1a1917] border border-[#333128] p-3 rounded font-mono text-xs text-[#8a8783] my-2", children: [
          "// Section 1: European Marketing Expenditure",
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("br", {}),
          "EU Revenue [150] Performance Marketing #e91e63"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "3. Interactive Layout & Formatting Controls" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "mb-4", children: "Below the syntax editor, SankeyLoop provides a comprehensive suite of real-time interactive layout controls to customize the visual presentation of your diagram:" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "bg-[#1a1917] border border-[#333128] p-5 rounded-xl", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("h4", { className: "font-semibold text-[#f0ede8] mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "\u{1F3A8}" }),
              " Color Schemes & Opacity"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-sm text-[#a09d98] leading-relaxed", children: "Toggle between **Source Coloring** (bands match their origin node color), **Target Coloring** (bands match destination color), or **Single Monochromatic** mode. Use the opacity slider to tune band transparency from 0.1 (subtle background) to 0.9 (vibrant high contrast)." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "bg-[#1a1917] border border-[#333128] p-5 rounded-xl", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("h4", { className: "font-semibold text-[#f0ede8] mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "\u{1F4D0}" }),
              " Node Width & Vertical Separation"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-sm text-[#a09d98] leading-relaxed", children: "Adjust the physical thickness of node rectangles using the **Node Width** slider. Modify the vertical whitespace between parallel nodes using **Node Padding** to prevent label overlapping in dense multi-node graphs." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "bg-[#1a1917] border border-[#333128] p-5 rounded-xl", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("h4", { className: "font-semibold text-[#f0ede8] mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "\u{1F3F7}\uFE0F" }),
              " Typography & Label Positioning"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-sm text-[#a09d98] leading-relaxed", children: "Configure label font family (Inter, Roboto, Monospace), adjust font size in pixels, and toggle label placement between **Before** (left of node), **Centered** (inside node), or **After** (right of node). You can also choose whether to display numerical values alongside names." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "bg-[#1a1917] border border-[#333128] p-5 rounded-xl", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("h4", { className: "font-semibold text-[#f0ede8] mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: "\u2699\uFE0F" }),
              " Alignment & Iterative Relaxation"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-sm text-[#a09d98] leading-relaxed", children: "Switch node alignment between **Left** (pack to origins), **Right** (pack to destinations), **Center**, or **Justify**. SankeyLoop uses iterative barycentric relaxation algorithms to automatically minimize link crossover." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "4. Export & Sharing Capabilities" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "mb-4", children: "SankeyLoop is built for professional presentation and publication workflows. Once you have perfected your diagram layout, you can export it in three industry-standard formats:" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("ul", { className: "list-disc pl-6 space-y-3 text-[#a09d98] mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { className: "text-[#f0ede8]", children: "High-Resolution PNG Image:" }),
            " Generates a crisp, lossless raster graphic scaled up to 3x resolution (300 DPI equivalent), perfect for embedding into PowerPoint presentations, PDF executive reports, or academic journals."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { className: "text-[#f0ede8]", children: "Scalable Vector Graphics (SVG):" }),
            " Exports clean, XML-based vector code. SVG files can be imported directly into Adobe Illustrator, Figma, or Inkscape for infinite scaling without pixelation, or embedded inline into HTML webpages."
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("strong", { className: "text-[#f0ede8]", children: "Dynamic Video Animation (MP4 / GIF):" }),
            " For digital storytelling, SankeyLoop can record smooth transition animations that trace flow progression from left to right, creating captivating visual assets for social media and video presentations."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { className: "text-2xl font-bold text-[#f0ede8] mb-4", children: "5. Local Browser Storage & Data Privacy Architecture" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "mb-4", children: "Unlike legacy SaaS diagramming tools that upload your proprietary corporate data or unpublished research numbers to remote cloud servers, SankeyLoop is architected as a **100% Client-Side Web Application**." }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("p", { className: "mb-4", children: [
          `When you click **"Save Work"**, your flow script and UI configuration preferences are written directly to your web browser's local sandbox using standard HTML5 `,
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("code", { className: "bg-[#272521] px-1.5 py-0.5 rounded text-sm text-[#ff813f]", children: "localStorage" }),
          ". Your data never traverses the internet, ensuring full compliance with corporate NDAs, GDPR data privacy mandates, and strict institutional security policies."
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("section", { className: "bg-[#161513] border border-[#272521] p-6 rounded-xl mt-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { className: "text-xl font-semibold text-[#f0ede8] mb-2", children: "Ready to Start Building?" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-sm text-[#a09d98] mb-4", children: "Now that you have mastered the syntax and layout controls, launch the interactive editor to bring your data flows to life." }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            import_react_router_dom10.Link,
            {
              to: "/app",
              className: "bg-[#e8541a] hover:bg-[#d44812] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline shadow-md",
              children: "Launch SankeyLoop Editor \u2192"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            import_react_router_dom10.Link,
            {
              to: "/learn",
              className: "bg-[#1a1917] border border-[#333128] hover:border-[#5a5754] text-[#f0ede8] px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline",
              children: "\u2190 Back to All Guides & Tutorials"
            }
          )
        ] })
      ] })
    ] });
  };
  var guide4Article = {
    id: "guide-4",
    slug: "sankeyloop-user-manual",
    title: "SankeyLoop Official Documentation & Advanced User Manual",
    subtitle: "The complete technical reference for syntax rules, interactive layout styling, SVG/PNG export, and local data privacy.",
    category: "Documentation",
    readTime: "7 min read",
    date: "July 4, 2026",
    excerpt: "Master the SankeyLoop editor. Complete reference for flow syntax, hex color assignments, node padding adjustment, high-resolution PNG/SVG exports, and client-side storage architecture.",
    author: {
      name: "Tom Sanz",
      role: "Lead Developer & Visualization Architect"
    },
    content: Guide4Content
  };

  // src/pages/guides/index.ts
  var allGuides = [
    guide1Article,
    guide2Article,
    guide3Article,
    guide4Article
  ];
  function getGuideBySlug(slug) {
    return allGuides.find((g) => g.slug === slug);
  }

  // src/pages/LearnHub.tsx
  var import_react_router_dom11 = __require("react-router-dom");
  var import_jsx_runtime18 = __require("react/jsx-runtime");
  function LearnHub() {
    const [selectedCategory, setSelectedCategory] = (0, import_react8.useState)("All");
    const categories = ["All", "Fundamentals", "Engineering", "Finance", "Documentation"];
    const filteredGuides = selectedCategory === "All" ? allGuides : allGuides.filter((g) => g.category === selectedCategory);
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "min-h-screen bg-[#0c0c0b] text-[#f0ede8] font-sans pt-[80px] flex flex-col justify-between selection:bg-[#e8541a] selection:text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Header, {}),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("main", { className: "max-w-7xl mx-auto px-6 md:px-12 py-12 flex-1 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "text-center max-w-3xl mx-auto mb-12", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "inline-block bg-[#1a1917] border border-[#333128] text-[#ff813f] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider", children: "Knowledge Base & Tutorials" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h1", { className: "text-3xl md:text-5xl font-bold tracking-tight mb-4", children: "The SankeyLoop Learning Hub" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-base md:text-lg text-[#a09d98] leading-relaxed", children: "Master the art and science of quantitative flow modeling. Comprehensive guides on thermodynamic heat balances, corporate financial accounting, and visualization best practices." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "flex flex-wrap justify-center gap-2 md:gap-3 mb-12", children: categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "button",
          {
            onClick: () => setSelectedCategory(cat),
            className: `px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${selectedCategory === cat ? "bg-[#e8541a] text-white shadow-md" : "bg-[#161513] border border-[#272521] text-[#a09d98] hover:text-[#f0ede8] hover:border-[#333128]"}`,
            children: cat
          },
          cat
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16", children: filteredGuides.map((guide) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
          import_react_router_dom11.Link,
          {
            to: `/learn/${guide.slug}`,
            className: "bg-[#161513] border border-[#272521] hover:border-[#4a4742] rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all hover:translate-y-[-2px] hover:shadow-xl no-underline group",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center justify-between gap-4 mb-4", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "bg-[#1a1917] border border-[#333128] text-[#ff813f] text-xs font-semibold px-2.5 py-1 rounded", children: guide.category }),
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "text-xs text-[#8a8783] font-medium", children: [
                    guide.readTime,
                    " \u2022 ",
                    guide.date
                  ] })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { className: "text-xl md:text-2xl font-bold text-[#f0ede8] mb-3 group-hover:text-[#ff813f] transition-colors leading-snug", children: guide.title }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-sm text-[#a09d98] mb-6 leading-relaxed", children: guide.subtitle })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "pt-4 border-t border-[#272521] flex items-center justify-between text-xs font-semibold text-[#e8541a]", children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: "Read Full Guide & View Code Scripts" }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-base group-hover:translate-x-1 transition-transform", children: "\u2192" })
              ] })
            ]
          },
          guide.id
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "bg-gradient-to-r from-[#1a1917] to-[#161513] border border-[#272521] rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h3", { className: "text-2xl font-bold text-[#f0ede8] mb-3", children: "Ready to Visualize Your Own Data?" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-[#a09d98] text-sm md:text-base mb-6 max-w-xl mx-auto", children: "Take what you have learned and jump straight into our interactive editor. No software installation required, 100% client-side privacy." }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            import_react_router_dom11.Link,
            {
              to: "/app",
              className: "inline-block bg-[#e8541a] hover:bg-[#d44812] text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg hover:shadow-orange-900/20 no-underline",
              children: "Launch SankeyLoop Editor \u2192"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Footer, {})
    ] });
  }

  // src/pages/GuideDetail.tsx
  var import_react_router_dom12 = __require("react-router-dom");
  var import_jsx_runtime19 = __require("react/jsx-runtime");
  function GuideDetail() {
    const { slug } = (0, import_react_router_dom12.useParams)();
    const guide = slug ? getGuideBySlug(slug) : void 0;
    if (!guide) {
      return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "min-h-screen bg-[#0c0c0b] text-[#f0ede8] font-sans pt-[100px] flex flex-col justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Header, {}),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "max-w-3xl mx-auto px-6 py-20 text-center flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", { className: "text-3xl font-bold mb-4", children: "Guide Not Found" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-[#a09d98] mb-8", children: "The tutorial or reference article you are looking for does not exist or has been moved." }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react_router_dom12.Link, { to: "/learn", className: "bg-[#e8541a] text-white px-6 py-3 rounded-lg font-semibold text-sm no-underline inline-block", children: "\u2190 Return to Learning Hub" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Footer, {})
      ] });
    }
    const ContentComponent = guide.content;
    const otherGuides = allGuides.filter((g) => g.id !== guide.id).slice(0, 2);
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "min-h-screen bg-[#0c0c0b] text-[#f0ede8] font-sans pt-[80px] flex flex-col justify-between selection:bg-[#e8541a] selection:text-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Header, {}),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("main", { className: "max-w-4xl mx-auto px-6 md:px-12 py-12 flex-1 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "mb-8", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_react_router_dom12.Link, { to: "/learn", className: "text-xs md:text-sm font-semibold text-[#ff813f] hover:text-white transition-colors no-underline inline-flex items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { children: "\u2190" }),
          " Back to All Tutorials & Guides"
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("header", { className: "mb-10 pb-8 border-b border-[#272521]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "bg-[#1a1917] border border-[#333128] text-[#ff813f] text-xs font-semibold px-2.5 py-1 rounded", children: guide.category }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("span", { className: "text-xs text-[#8a8783] font-medium", children: [
              guide.readTime,
              " \u2022 Published ",
              guide.date
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#f0ede8] mb-4 leading-tight", children: guide.title }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-lg md:text-xl text-[#a09d98] leading-relaxed mb-6", children: guide.subtitle }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "flex items-center gap-3 pt-4 border-t border-[#1c1b18] text-xs text-[#8a8783]", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "w-8 h-8 rounded-full bg-[#272521] flex items-center justify-center text-sm font-bold text-[#f0ede8]", children: guide.author.name.charAt(0) }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "font-semibold text-[#f0ede8]", children: guide.author.name }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { children: guide.author.role })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("article", { className: "prose prose-invert max-w-none mb-16", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ContentComponent, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("section", { className: "pt-12 border-t border-[#272521]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h3", { className: "text-xl font-bold text-[#f0ede8] mb-6", children: "Explore Related Tutorials" }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: otherGuides.map((other) => /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
            import_react_router_dom12.Link,
            {
              to: `/learn/${other.slug}`,
              className: "bg-[#161513] border border-[#272521] hover:border-[#4a4742] p-6 rounded-xl transition-all no-underline group block",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "text-xs text-[#ff813f] font-semibold mb-2", children: other.category }),
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h4", { className: "font-bold text-[#f0ede8] text-lg mb-2 group-hover:text-[#ff813f] transition-colors line-clamp-2", children: other.title }),
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-xs text-[#a09d98] line-clamp-2", children: other.excerpt })
              ]
            },
            other.id
          )) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Footer, {})
    ] });
  }

  // src/App.tsx
  var import_jsx_runtime20 = __require("react/jsx-runtime");
  function App() {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom13.BrowserRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_react_router_dom13.Routes, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom13.Route, { path: "/", element: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Landing, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom13.Route, { path: "/app", element: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Editor, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom13.Route, { path: "/privacy", element: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PrivacyPolicy, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom13.Route, { path: "/terms", element: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TermsOfService, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom13.Route, { path: "/about", element: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(AboutUs, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom13.Route, { path: "/contact", element: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ContactUs, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom13.Route, { path: "/learn", element: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(LearnHub, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom13.Route, { path: "/learn/:slug", element: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(GuideDetail, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom13.Route, { path: "*", element: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react_router_dom13.Navigate, { to: "/", replace: true }) })
    ] }) });
  }

  // src/main.tsx
  var import_jsx_runtime21 = __require("react/jsx-runtime");
  (0, import_client.createRoot)(document.getElementById("root")).render(
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react9.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(App, {}) })
  );
})();
