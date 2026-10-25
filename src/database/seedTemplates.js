const db = require('./config');

const templatesData = [
  // ==========================================
  // 1. BUSINESS (5 Templates)
  // ==========================================
  {
    name: 'Apex Corporate Advisors',
    category: 'Business',
    description: 'Executive corporate advisory and M&A consulting for high-growth enterprises and global corporations.',
    header: {
      default_data: {
        logo_text: 'APEX ADVISORS',
        nav1_label: 'Services', nav1_link: '#services',
        nav2_label: 'Case Studies', nav2_link: '#cases',
        nav3_label: 'About', nav3_link: '#about',
        cta_text: 'Schedule Consultation', cta_link: '#contact'
      },
      schema: { logo_text: 'text', nav1_label: 'text', nav1_link: 'text', nav2_label: 'text', nav2_link: 'text', nav3_label: 'text', nav3_link: 'text', cta_text: 'text', cta_link: 'text' },
      html: `<header class="w-full bg-slate-900 text-white shadow-lg sticky top-0 z-50">
  <div class="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
    <div class="text-2xl font-black tracking-widest text-blue-400">{{logo_text}}</div>
    <nav class="hidden md:flex space-x-8 text-sm font-semibold tracking-wide text-slate-300">
      <a href="{{nav1_link}}" class="hover:text-blue-400 transition">{{nav1_label}}</a>
      <a href="{{nav2_link}}" class="hover:text-blue-400 transition">{{nav2_label}}</a>
      <a href="{{nav3_link}}" class="hover:text-blue-400 transition">{{nav3_label}}</a>
    </nav>
    <a href="{{cta_link}}" class="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded shadow">{{cta_text}}</a>
  </div>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          badge: 'GLOBAL STRATEGY & M&A',
          hero_title: 'Navigating High-Stakes Corporate Growth',
          hero_desc: 'We partner with Fortune 500 boards and visionary executives to engineer breakthrough strategic acquisitions and organizational transformation.',
          primary_cta: 'Explore Our Mandates',
          primary_link: '#services',
          secondary_cta: 'Our Leadership',
          secondary_link: '#about',
          stat1_num: '$42B+', stat1_label: 'Transactions Advised',
          stat2_num: '98%', stat2_label: 'Client Retention Rate',
          stat3_num: '140+', stat3_label: 'Global Partners'
        },
        schema: { badge: 'text', hero_title: 'text', hero_desc: 'textarea', primary_cta: 'text', primary_link: 'text', secondary_cta: 'text', secondary_link: 'text', stat1_num: 'text', stat1_label: 'text', stat2_num: 'text', stat2_label: 'text', stat3_num: 'text', stat3_label: 'text' },
        html: `<section class="bg-slate-900 text-white py-24 px-8 border-b border-slate-800">
  <div class="max-w-6xl mx-auto text-center">
    <span class="inline-block py-1 px-3.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6 tracking-widest uppercase">{{badge}}</span>
    <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">{{hero_title}}</h1>
    <p class="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">{{hero_desc}}</p>
    <div class="flex flex-wrap justify-center gap-4 mb-16">
      <a href="{{primary_link}}" class="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded shadow-lg transition">{{primary_cta}}</a>
      <a href="{{secondary_link}}" class="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded border border-slate-700 transition">{{secondary_cta}}</a>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-slate-800">
      <div><div class="text-4xl font-extrabold text-blue-400">{{stat1_num}}</div><div class="text-xs uppercase tracking-wider text-slate-400 mt-1">{{stat1_label}}</div></div>
      <div><div class="text-4xl font-extrabold text-blue-400">{{stat2_num}}</div><div class="text-xs uppercase tracking-wider text-slate-400 mt-1">{{stat2_label}}</div></div>
      <div><div class="text-4xl font-extrabold text-blue-400">{{stat3_num}}</div><div class="text-xs uppercase tracking-wider text-slate-400 mt-1">{{stat3_label}}</div></div>
    </div>
  </div>
</section>`
      },
      {
        order: 100,
        default_data: {
          section_heading: 'Practice Areas',
          section_subheading: 'Rigorous strategic methodology backed by decades of cross-border financial experience.',
          card1_title: 'Mergers & Acquisitions', card1_desc: 'Full-lifecycle sell-side and buy-side advisory, due diligence, and deal structuring.',
          card2_title: 'Capital Restructuring', card2_desc: 'Optimizing balance sheet efficiency, debt refinancing, and liquidity management.',
          card3_title: 'ESG & Governance Advisory', card3_desc: 'Aligning corporate accountability with institutional investor mandates worldwide.'
        },
        schema: { section_heading: 'text', section_subheading: 'textarea', card1_title: 'text', card1_desc: 'textarea', card2_title: 'text', card2_desc: 'textarea', card3_title: 'text', card3_desc: 'textarea' },
        html: `<section class="py-20 px-8 bg-slate-50 text-slate-900" id="services">
  <div class="max-w-7xl mx-auto">
    <div class="text-center max-w-2xl mx-auto mb-16">
      <h2 class="text-3xl font-bold tracking-tight mb-3">{{section_heading}}</h2>
      <p class="text-slate-600 text-sm leading-relaxed">{{section_subheading}}</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
        <div class="w-12 h-12 bg-blue-100 text-blue-700 font-bold rounded-lg flex items-center justify-center text-xl mb-6">01</div>
        <h3 class="text-xl font-bold mb-3 text-slate-900">{{card1_title}}</h3>
        <p class="text-slate-600 text-sm leading-relaxed">{{card1_desc}}</p>
      </div>
      <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
        <div class="w-12 h-12 bg-blue-100 text-blue-700 font-bold rounded-lg flex items-center justify-center text-xl mb-6">02</div>
        <h3 class="text-xl font-bold mb-3 text-slate-900">{{card2_title}}</h3>
        <p class="text-slate-600 text-sm leading-relaxed">{{card2_desc}}</p>
      </div>
      <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition">
        <div class="w-12 h-12 bg-blue-100 text-blue-700 font-bold rounded-lg flex items-center justify-center text-xl mb-6">03</div>
        <h3 class="text-xl font-bold mb-3 text-slate-900">{{card3_title}}</h3>
        <p class="text-slate-600 text-sm leading-relaxed">{{card3_desc}}</p>
      </div>
    </div>
  </div>
</section>`
      }
    ],
    footer: {
      default_data: {
        brand_name: 'APEX CORPORATE ADVISORS',
        brand_desc: 'Delivering strategic clarity and transformative enterprise transactions worldwide.',
        office_location: 'New York • London • Singapore • Tokyo',
        copyright_year: '2026'
      },
      schema: { brand_name: 'text', brand_desc: 'textarea', office_location: 'text', copyright_year: 'text' },
      html: `<footer class="bg-slate-950 text-slate-400 py-12 px-8 border-t border-slate-900 text-xs">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    <div>
      <div class="text-white font-bold tracking-wider text-sm mb-1">{{brand_name}}</div>
      <p class="text-slate-500 max-w-sm">{{brand_desc}}</p>
    </div>
    <div class="text-center md:text-right">
      <div class="text-slate-300 font-medium mb-1">{{office_location}}</div>
      <div class="text-slate-600">© {{copyright_year}} {{brand_name}}. All rights reserved.</div>
    </div>
  </div>
</footer>`
    }
  },

  {
    name: 'Nexa Strategic Consulting',
    category: 'Business',
    description: 'Management and operational excellence consulting for scaling technology enterprises.',
    header: {
      default_data: {
        logo_text: 'NEXA',
        nav1_label: 'Solutions', nav1_link: '#solutions',
        nav2_label: 'Methodology', nav2_link: '#methodology',
        nav3_label: 'Insights', nav3_link: '#insights',
        cta_text: 'Book Workshop', cta_link: '#contact'
      },
      schema: { logo_text: 'text', nav1_label: 'text', nav1_link: 'text', nav2_label: 'text', nav2_link: 'text', nav3_label: 'text', nav3_link: 'text', cta_text: 'text', cta_link: 'text' },
      html: `<header class="bg-white border-b border-gray-100 py-4 px-8 sticky top-0 z-50">
  <div class="max-w-7xl mx-auto flex items-center justify-between">
    <div class="text-2xl font-extrabold text-emerald-700 tracking-tight">{{logo_text}}</div>
    <nav class="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
      <a href="{{nav1_link}}" class="hover:text-emerald-600 transition">{{nav1_label}}</a>
      <a href="{{nav2_link}}" class="hover:text-emerald-600 transition">{{nav2_label}}</a>
      <a href="{{nav3_link}}" class="hover:text-emerald-600 transition">{{nav3_label}}</a>
    </nav>
    <a href="{{cta_link}}" class="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition">{{cta_text}}</a>
  </div>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          hero_title: 'Accelerate Scalability With Proven Operations',
          hero_subtitle: 'We redesign corporate workflows, optimize cost structures, and empower leadership teams to compound sustainable enterprise value.',
          cta_button: 'Explore Consulting Programs',
          cta_link: '#solutions',
          tag1: 'Lean Execution', tag2: 'Supply Chain Resiliency', tag3: 'Revenue Operations'
        },
        schema: { hero_title: 'text', hero_subtitle: 'textarea', cta_button: 'text', cta_link: 'text', tag1: 'text', tag2: 'text', tag3: 'text' },
        html: `<section class="py-24 px-8 bg-gradient-to-b from-emerald-50/50 to-white">
  <div class="max-w-5xl mx-auto text-center">
    <div class="flex justify-center gap-3 mb-6">
      <span class="text-xs bg-emerald-100 text-emerald-800 font-semibold px-3 py-1 rounded-full">{{tag1}}</span>
      <span class="text-xs bg-emerald-100 text-emerald-800 font-semibold px-3 py-1 rounded-full">{{tag2}}</span>
      <span class="text-xs bg-emerald-100 text-emerald-800 font-semibold px-3 py-1 rounded-full">{{tag3}}</span>
    </div>
    <h1 class="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6 leading-tight">{{hero_title}}</h1>
    <p class="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">{{hero_subtitle}}</p>
    <a href="{{cta_link}}" class="inline-block px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition">{{cta_button}}</a>
  </div>
</section>`
      },
      {
        order: 100,
        default_data: {
          step1_title: '1. Diagnostic Audit', step1_desc: '360-degree organizational assessment pinpointing margin leakage and execution bottlenecks.',
          step2_title: '2. Blueprint Redesign', step2_desc: 'Target operating models designed with OKRs, resource reallocation, and executive KPIs.',
          step3_title: '3. Sustained Scale', step3_desc: 'Continuous enablement, technology integration, and automated reporting dashboards.'
        },
        schema: { step1_title: 'text', step1_desc: 'textarea', step2_title: 'text', step2_desc: 'textarea', step3_title: 'text', step3_desc: 'textarea' },
        html: `<section class="py-20 px-8 bg-white border-t border-gray-100" id="solutions">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="p-8 rounded-2xl bg-gray-50 border border-gray-100">
      <h3 class="text-lg font-bold text-gray-900 mb-2">{{step1_title}}</h3>
      <p class="text-gray-600 text-sm leading-relaxed">{{step1_desc}}</p>
    </div>
    <div class="p-8 rounded-2xl bg-gray-50 border border-gray-100">
      <h3 class="text-lg font-bold text-gray-900 mb-2">{{step2_title}}</h3>
      <p class="text-gray-600 text-sm leading-relaxed">{{step2_desc}}</p>
    </div>
    <div class="p-8 rounded-2xl bg-gray-50 border border-gray-100">
      <h3 class="text-lg font-bold text-gray-900 mb-2">{{step3_title}}</h3>
      <p class="text-gray-600 text-sm leading-relaxed">{{step3_desc}}</p>
    </div>
  </div>
</section>`
      }
    ],
    footer: {
      default_data: { brand: 'NEXA CONSULTING', year: '2026', cta: 'Ready to elevate your operational metrics?' },
      schema: { brand: 'text', year: 'text', cta: 'text' },
      html: `<footer class="bg-gray-900 text-gray-400 py-12 px-8 text-center text-xs">
  <p class="text-white font-bold text-sm mb-2">{{brand}}</p>
  <p class="mb-4 text-gray-500">{{cta}}</p>
  <p>© {{year}} {{brand}}. All rights reserved.</p>
</footer>`
    }
  },

  {
    name: 'Momentum Creative Agency',
    category: 'Business',
    description: 'Full-service digital branding, product design, and campaign studio for high-growth tech innovators.',
    header: {
      default_data: { logo_text: 'MOMENTUM //', nav1: 'Work', nav2: 'Capabilities', nav3: 'Agency', cta: 'Start a Project' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', nav3: 'text', cta: 'text' },
      html: `<header class="bg-black text-white px-8 py-6 flex items-center justify-between border-b border-neutral-800">
  <div class="font-mono text-xl font-black tracking-tighter text-yellow-400">{{logo_text}}</div>
  <div class="hidden md:flex gap-8 text-xs uppercase tracking-widest font-mono text-neutral-400">
    <a href="#work" class="hover:text-white transition">{{nav1}}</a>
    <a href="#services" class="hover:text-white transition">{{nav2}}</a>
    <a href="#about" class="hover:text-white transition">{{nav3}}</a>
  </div>
  <a href="#contact" class="bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          headline: 'We Build Brands That Demand Attention.',
          subheadline: 'Crafting radical visual identities, interactive web experiences, and global digital campaigns that make products unforgettable.',
          button_text: 'View Selected Works'
        },
        schema: { headline: 'text', subheadline: 'textarea', button_text: 'text' },
        html: `<section class="bg-black text-white py-28 px-8 border-b border-neutral-800">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-none">{{headline}}</h1>
    <p class="text-neutral-400 text-xl max-w-2xl mb-12 font-light leading-relaxed">{{subheadline}}</p>
    <a href="#work" class="inline-flex items-center gap-2 border-2 border-white px-8 py-4 font-mono font-bold text-sm hover:bg-white hover:text-black transition uppercase">{{button_text}} →</a>
  </div>
</section>`
      },
      {
        order: 100,
        default_data: {
          title1: 'Brand Strategy', desc1: 'Positioning, narrative architectures, and distinctive visual guidelines.',
          title2: 'Digital Products', desc2: 'UX systems, design tokens, and high-performance interactive web apps.',
          title3: '3D & Motion', desc3: 'Cinema-grade promotional reels, micro-interactions, and spatial experiences.'
        },
        schema: { title1: 'text', desc1: 'textarea', title2: 'text', desc2: 'textarea', title3: 'text', desc3: 'textarea' },
        html: `<section class="bg-neutral-950 text-white py-20 px-8" id="services">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
    <div class="border border-neutral-800 p-8 hover:border-yellow-400 transition">
      <div class="text-yellow-400 text-xs mb-4">[ 01 ]</div>
      <h3 class="text-xl font-bold mb-2">{{title1}}</h3>
      <p class="text-neutral-400 text-xs leading-relaxed font-sans">{{desc1}}</p>
    </div>
    <div class="border border-neutral-800 p-8 hover:border-yellow-400 transition">
      <div class="text-yellow-400 text-xs mb-4">[ 02 ]</div>
      <h3 class="text-xl font-bold mb-2">{{title2}}</h3>
      <p class="text-neutral-400 text-xs leading-relaxed font-sans">{{desc2}}</p>
    </div>
    <div class="border border-neutral-800 p-8 hover:border-yellow-400 transition">
      <div class="text-yellow-400 text-xs mb-4">[ 03 ]</div>
      <h3 class="text-xl font-bold mb-2">{{title3}}</h3>
      <p class="text-neutral-400 text-xs leading-relaxed font-sans">{{desc3}}</p>
    </div>
  </div>
</section>`
      }
    ],
    footer: {
      default_data: { copyright: '© 2026 MOMENTUM CREATIVE AGENCY // ALL RIGHTS RESERVED' },
      schema: { copyright: 'text' },
      html: `<footer class="bg-black text-neutral-500 py-8 px-8 text-center font-mono text-xs border-t border-neutral-900">{{copyright}}</footer>`
    }
  },

  {
    name: 'Pulse Venture Partners',
    category: 'Business',
    description: 'Early-stage venture capital firm investing in decentralized compute, AI agents, and biotechnology.',
    header: {
      default_data: { logo_text: 'PULSE VENTURES', nav1: 'Thesis', nav2: 'Portfolio', nav3: 'Team', cta: 'Pitch Us' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', nav3: 'text', cta: 'text' },
      html: `<header class="bg-slate-900 text-white px-8 py-4 flex items-center justify-between border-b border-slate-800">
  <div class="font-bold text-lg tracking-wider text-indigo-400">{{logo_text}}</div>
  <nav class="hidden md:flex gap-6 text-sm text-slate-300">
    <a href="#thesis" class="hover:text-white transition">{{nav1}}</a>
    <a href="#portfolio" class="hover:text-white transition">{{nav2}}</a>
    <a href="#team" class="hover:text-white transition">{{nav3}}</a>
  </nav>
  <a href="#contact" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded transition">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Backing Founders Building at the Frontier',
          desc: 'We write $500k - $5M seed checks for technical founders solving hard problems across artificial intelligence, space tech, and sovereign infrastructure.',
          fund_size: '$250M Fund III Active'
        },
        schema: { title: 'text', desc: 'textarea', fund_size: 'text' },
        html: `<section class="bg-slate-900 text-white py-24 px-8 text-center">
  <div class="max-w-4xl mx-auto">
    <span class="inline-block px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold rounded-full mb-6">{{fund_size}}</span>
    <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6">{{title}}</h1>
    <p class="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">{{desc}}</p>
  </div>
</section>`
      },
      {
        order: 100,
        default_data: {
          inv1_name: 'Aether Robotics', inv1_cat: 'Autonomous Logistics',
          inv2_name: 'Synapse Core', inv2_cat: 'Edge AI Compute',
          inv3_name: 'Helios Bio', inv3_cat: 'Synthetic Biology'
        },
        schema: { inv1_name: 'text', inv1_cat: 'text', inv2_name: 'text', inv2_cat: 'text', inv3_name: 'text', inv3_cat: 'text' },
        html: `<section class="bg-slate-950 py-16 px-8 text-white border-t border-slate-900" id="portfolio">
  <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="p-6 bg-slate-900/60 border border-slate-800 rounded-xl">
      <h3 class="text-xl font-bold text-indigo-300 mb-1">{{inv1_name}}</h3>
      <p class="text-xs text-slate-500 uppercase tracking-wider">{{inv1_cat}}</p>
    </div>
    <div class="p-6 bg-slate-900/60 border border-slate-800 rounded-xl">
      <h3 class="text-xl font-bold text-indigo-300 mb-1">{{inv2_name}}</h3>
      <p class="text-xs text-slate-500 uppercase tracking-wider">{{inv2_cat}}</p>
    </div>
    <div class="p-6 bg-slate-900/60 border border-slate-800 rounded-xl">
      <h3 class="text-xl font-bold text-indigo-300 mb-1">{{inv3_name}}</h3>
      <p class="text-xs text-slate-500 uppercase tracking-wider">{{inv3_cat}}</p>
    </div>
  </div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 Pulse Venture Partners. San Francisco • Singapore.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-slate-950 text-slate-600 py-6 px-8 text-center text-xs border-t border-slate-900">{{copy}}</footer>`
    }
  },

  {
    name: 'Vanguard Legal & Financial',
    category: 'Business',
    description: 'Premier regulatory compliance, private equity legal counsel, and wealth protection practice.',
    header: {
      default_data: { logo_text: 'VANGUARD & ASSOCIATES', nav1: 'Attorneys', nav2: 'Practices', nav3: 'Publications', cta: 'Confidential Inquiry' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', nav3: 'text', cta: 'text' },
      html: `<header class="bg-neutral-900 text-amber-50 px-8 py-5 border-b border-amber-900/30 flex justify-between items-center">
  <div class="font-serif text-lg tracking-wider font-semibold text-amber-200">{{logo_text}}</div>
  <nav class="hidden md:flex gap-8 text-xs uppercase tracking-widest text-neutral-300 font-sans">
    <a href="#team" class="hover:text-amber-200 transition">{{nav1}}</a>
    <a href="#practices" class="hover:text-amber-200 transition">{{nav2}}</a>
    <a href="#insights" class="hover:text-amber-200 transition">{{nav3}}</a>
  </nav>
  <a href="#contact" class="px-5 py-2 border border-amber-400/40 text-amber-200 hover:bg-amber-400/10 text-xs font-serif uppercase tracking-widest transition">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          headline: 'Integrity in High-Stakes Jurisprudence',
          subtext: 'Over four decades representing family offices, institutional fiduciaries, and market leaders in commercial litigation and cross-border regulatory compliance.',
          cta_text: 'Review Representative Engagements'
        },
        schema: { headline: 'text', subtext: 'textarea', cta_text: 'text' },
        html: `<section class="bg-neutral-900 text-amber-50 py-24 px-8 text-center border-b border-neutral-800">
  <div class="max-w-4xl mx-auto">
    <h1 class="font-serif text-4xl md:text-6xl font-normal leading-tight mb-6 text-amber-100">{{headline}}</h1>
    <p class="text-neutral-300 text-lg max-w-2xl mx-auto mb-10 font-sans font-light leading-relaxed">{{subtext}}</p>
    <a href="#practices" class="inline-block px-8 py-3 bg-amber-200 text-neutral-950 font-serif text-sm font-semibold tracking-wide hover:bg-amber-100 transition">{{cta_text}}</a>
  </div>
</section>`
      },
      {
        order: 100,
        default_data: {
          p1: 'Commercial Arbitration', d1: 'Global enforcement of cross-border arbitration awards under ICC and LCIA rules.',
          p2: 'Fiduciary Wealth Structuring', d2: 'Asset protection trusts and generational family wealth governance models.',
          p3: 'Securities & Regulatory Defense', d3: 'Defending institutions before financial market regulatory bodies.'
        },
        schema: { p1: 'text', d1: 'textarea', p2: 'text', d2: 'textarea', p3: 'text', d3: 'textarea' },
        html: `<section class="bg-neutral-950 text-neutral-200 py-20 px-8 font-serif" id="practices">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="border-t border-amber-400/30 pt-6">
      <h3 class="text-xl font-normal text-amber-100 mb-2">{{p1}}</h3>
      <p class="text-neutral-400 font-sans text-xs leading-relaxed">{{d1}}</p>
    </div>
    <div class="border-t border-amber-400/30 pt-6">
      <h3 class="text-xl font-normal text-amber-100 mb-2">{{p2}}</h3>
      <p class="text-neutral-400 font-sans text-xs leading-relaxed">{{d2}}</p>
    </div>
    <div class="border-t border-amber-400/30 pt-6">
      <h3 class="text-xl font-normal text-amber-100 mb-2">{{p3}}</h3>
      <p class="text-neutral-400 font-sans text-xs leading-relaxed">{{d3}}</p>
    </div>
  </div>
</section>`
      }
    ],
    footer: {
      default_data: { legal: 'Attorney Advertising. Prior results do not guarantee a similar outcome. © 2026 Vanguard & Associates LLP.' },
      schema: { legal: 'text' },
      html: `<footer class="bg-neutral-950 text-neutral-600 py-8 px-8 text-center font-sans text-[11px] border-t border-neutral-900">{{legal}}</footer>`
    }
  },

  // ==========================================
  // 2. PORTFOLIO (5 Templates)
  // ==========================================
  {
    name: 'Alex Rivera - Full Stack Engineer',
    category: 'Portfolio',
    description: 'Clean, modern software developer portfolio showcasing full-stack applications, open-source projects, and technical skills.',
    header: {
      default_data: { logo_text: 'rivera.dev', nav1: 'Projects', nav2: 'Stack', nav3: 'Resume', cta: 'Get in Touch' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', nav3: 'text', cta: 'text' },
      html: `<header class="bg-zinc-900 text-zinc-100 py-4 px-8 border-b border-zinc-800 flex justify-between items-center sticky top-0 z-50">
  <div class="font-mono font-bold text-lg text-teal-400">{{logo_text}}</div>
  <nav class="hidden md:flex gap-6 text-sm text-zinc-400 font-mono">
    <a href="#projects" class="hover:text-white transition">{{nav1}}</a>
    <a href="#stack" class="hover:text-white transition">{{nav2}}</a>
    <a href="#resume" class="hover:text-white transition">{{nav3}}</a>
  </nav>
  <a href="#contact" class="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-zinc-950 font-bold text-xs rounded transition">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          greeting: 'Hi, I am Alex Rivera — Staff Software Engineer',
          bio: 'Specializing in distributed systems, PostgreSQL scaling, and Angular applications. Built systems serving 50M+ monthly users.',
          badge: 'Available for Q3 Consulting'
        },
        schema: { greeting: 'text', bio: 'textarea', badge: 'text' },
        html: `<section class="bg-zinc-950 text-zinc-100 py-24 px-8">
  <div class="max-w-4xl mx-auto">
    <div class="inline-block px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono text-xs rounded-full mb-6">{{badge}}</div>
    <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">{{greeting}}</h1>
    <p class="text-zinc-400 text-lg leading-relaxed max-w-2xl">{{bio}}</p>
  </div>
</section>`
      },
      {
        order: 100,
        default_data: {
          proj1_title: 'KubeMesh Orchestrator', proj1_tech: 'Go • Kubernetes • eBPF', proj1_desc: 'Zero-overhead service mesh sidecar accelerating microservice telemetry by 4x.',
          proj2_title: 'VectorDB Query Engine', proj2_tech: 'Rust • SIMD • Arrow', proj2_desc: 'In-memory semantic vector indexing supporting sub-millisecond nearest neighbor search.',
          proj3_title: 'Realtime Canvas Protocol', proj3_tech: 'TypeScript • WebRTC • CRDT', proj3_desc: 'Collaborative infinite canvas engine with automatic peer conflict resolution.'
        },
        schema: { proj1_title: 'text', proj1_tech: 'text', proj1_desc: 'textarea', proj2_title: 'text', proj2_tech: 'text', proj2_desc: 'textarea', proj3_title: 'text', proj3_tech: 'text', proj3_desc: 'textarea' },
        html: `<section class="bg-zinc-900 py-20 px-8 text-zinc-100 border-t border-zinc-800" id="projects">
  <div class="max-w-5xl mx-auto">
    <h2 class="font-mono text-xs uppercase tracking-widest text-teal-400 mb-8">// Selected Engineering Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-teal-500 transition">
        <span class="text-xs font-mono text-teal-400">{{proj1_tech}}</span>
        <h3 class="text-xl font-bold mt-2 mb-2">{{proj1_title}}</h3>
        <p class="text-zinc-400 text-xs leading-relaxed">{{proj1_desc}}</p>
      </div>
      <div class="p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-teal-500 transition">
        <span class="text-xs font-mono text-teal-400">{{proj2_tech}}</span>
        <h3 class="text-xl font-bold mt-2 mb-2">{{proj2_title}}</h3>
        <p class="text-zinc-400 text-xs leading-relaxed">{{proj2_desc}}</p>
      </div>
      <div class="p-6 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-teal-500 transition">
        <span class="text-xs font-mono text-teal-400">{{proj3_tech}}</span>
        <h3 class="text-xl font-bold mt-2 mb-2">{{proj3_title}}</h3>
        <p class="text-zinc-400 text-xs leading-relaxed">{{proj3_desc}}</p>
      </div>
    </div>
  </div>
</section>`
      }
    ],
    footer: {
      default_data: { footer_text: 'Crafted with passion. © 2026 Alex Rivera.' },
      schema: { footer_text: 'text' },
      html: `<footer class="bg-zinc-950 text-zinc-600 py-8 px-8 text-center font-mono text-xs border-t border-zinc-800">{{footer_text}}</footer>`
    }
  },

  {
    name: 'Studio Monochrome - UX Designer',
    category: 'Portfolio',
    description: 'Minimalist product designer and design systems lead portfolio featuring case studies and user flows.',
    header: {
      default_data: { logo_text: 'MONOCHROME.', nav1: 'Selected Work', nav2: 'Philosophy', cta: 'Let\'s Chat' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-white px-10 py-6 border-b border-neutral-100 flex justify-between items-center">
  <div class="text-xl font-black tracking-tighter">{{logo_text}}</div>
  <nav class="flex gap-8 text-xs uppercase tracking-widest text-neutral-500 font-semibold">
    <a href="#work" class="hover:text-black transition">{{nav1}}</a>
    <a href="#about" class="hover:text-black transition">{{nav2}}</a>
  </nav>
  <a href="#contact" class="text-xs font-bold underline underline-offset-4">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          intro_heading: 'Designing Quiet, Thoughtful Digital Products.',
          intro_body: 'I turn complex enterprise workflows into intuitive, beautiful experiences that reduce cognitive load.'
        },
        schema: { intro_heading: 'text', intro_body: 'textarea' },
        html: `<section class="py-28 px-10 max-w-4xl mx-auto">
  <h1 class="text-4xl md:text-6xl font-light tracking-tight text-neutral-900 leading-tight mb-6">{{intro_heading}}</h1>
  <p class="text-neutral-500 text-lg leading-relaxed max-w-2xl font-light">{{intro_body}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          case1_title: 'Fintech Mobile Banking Redesign', case1_metrics: '+42% Daily Active Users',
          case2_title: 'Cloud Observability Design System', case2_metrics: 'Adopted across 18 Squads'
        },
        schema: { case1_title: 'text', case1_metrics: 'text', case2_title: 'text', case2_metrics: 'text' },
        html: `<section class="px-10 pb-28 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10" id="work">
  <div class="border border-neutral-200 p-8 rounded-2xl bg-neutral-50">
    <div class="text-xs text-neutral-400 font-mono mb-2">CASE STUDY 01</div>
    <h3 class="text-2xl font-bold mb-2">{{case1_title}}</h3>
    <p class="text-sm text-neutral-600 font-medium">{{case1_metrics}}</p>
  </div>
  <div class="border border-neutral-200 p-8 rounded-2xl bg-neutral-50">
    <div class="text-xs text-neutral-400 font-mono mb-2">CASE STUDY 02</div>
    <h3 class="text-2xl font-bold mb-2">{{case2_title}}</h3>
    <p class="text-sm text-neutral-600 font-medium">{{case2_metrics}}</p>
  </div>
</section>`
      }
    ],
    footer: {
      default_data: { note: 'Studio Monochrome. Designed with intention in 2026.' },
      schema: { note: 'text' },
      html: `<footer class="border-t border-neutral-100 py-8 px-10 text-center text-xs text-neutral-400">{{note}}</footer>`
    }
  },

  {
    name: 'Lena Vance - Photography',
    category: 'Portfolio',
    description: 'Visual storytelling, editorial portraiture, and high-contrast architecture photography portfolio.',
    header: {
      default_data: { logo_text: 'LENA VANCE', nav1: 'Series', nav2: 'Exhibitions', cta: 'Print Shop' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-neutral-900 text-neutral-100 px-8 py-5 flex justify-between items-center border-b border-neutral-800">
  <div class="font-serif tracking-widest text-lg font-bold">{{logo_text}}</div>
  <div class="flex gap-6 text-xs uppercase tracking-widest text-neutral-400">
    <a href="#series" class="hover:text-white transition">{{nav1}}</a>
    <a href="#exhibitions" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <a href="#prints" class="text-xs uppercase tracking-widest border-b border-neutral-400 pb-0.5 hover:text-white">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Light, Shadows, & Fleeting Moments',
          location: 'Berlin • Tokyo • Reykjavik'
        },
        schema: { title: 'text', location: 'text' },
        html: `<section class="bg-neutral-900 text-white py-24 px-8 text-center">
  <span class="text-xs font-mono tracking-widest text-neutral-500 uppercase">{{location}}</span>
  <h1 class="font-serif text-4xl md:text-6xl font-light mt-3 mb-6 tracking-wide">{{title}}</h1>
</section>`
      },
      {
        order: 100,
        default_data: {
          s1_name: 'Tokyo Rain (2025)', s1_desc: '35mm film captures of Shinjuku neon reflections in midnight downpours.',
          s2_name: 'Nordic Solitude (2024)', s2_desc: 'Medium format landscapes exploring isolation across volcanic plains.'
        },
        schema: { s1_name: 'text', s1_desc: 'textarea', s2_name: 'text', s2_desc: 'textarea' },
        html: `<section class="bg-neutral-950 text-white py-16 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" id="series">
  <div class="border border-neutral-800 p-8 rounded-lg bg-neutral-900/50">
    <h3 class="font-serif text-2xl mb-2">{{s1_name}}</h3>
    <p class="text-neutral-400 text-xs leading-relaxed">{{s1_desc}}</p>
  </div>
  <div class="border border-neutral-800 p-8 rounded-lg bg-neutral-900/50">
    <h3 class="font-serif text-2xl mb-2">{{s2_name}}</h3>
    <p class="text-neutral-400 text-xs leading-relaxed">{{s2_desc}}</p>
  </div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 Lena Vance Photography. All rights reserved.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-neutral-950 text-neutral-600 py-6 text-center text-xs border-t border-neutral-900">{{copy}}</footer>`
    }
  },

  {
    name: 'Maya Lin - Digital Art',
    category: 'Portfolio',
    description: 'Futuristic concept art, generative 3D sculptures, and virtual reality worldbuilding portfolio.',
    header: {
      default_data: { logo_text: 'MAYA.LIN / 3D', nav1: 'Artworks', nav2: 'Virtual Worlds', cta: 'Commission' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-violet-950 text-violet-100 px-8 py-4 flex justify-between items-center border-b border-violet-900">
  <div class="font-mono font-bold text-violet-300">{{logo_text}}</div>
  <nav class="hidden md:flex gap-6 text-xs uppercase tracking-wider text-violet-300">
    <a href="#artworks" class="hover:text-white transition">{{nav1}}</a>
    <a href="#worlds" class="hover:text-white transition">{{nav2}}</a>
  </nav>
  <a href="#contact" class="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold rounded-lg">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          headline: 'Sculpting Virtual Realities & Synthetic Dreams',
          bio: 'Specializing in Houdini procedural generation, Unreal Engine 5 virtual production, and interactive installations.'
        },
        schema: { headline: 'text', bio: 'textarea' },
        html: `<section class="bg-violet-950 text-white py-24 px-8 text-center">
  <h1 class="text-4xl md:text-6xl font-black mb-4 tracking-tight leading-tight">{{headline}}</h1>
  <p class="text-violet-300 text-base max-w-xl mx-auto leading-relaxed">{{bio}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          art1_title: 'Nebula Morph', art1_type: 'Procedural Shader',
          art2_title: 'Chrono Bloom', art2_type: 'Volumetric Simulation',
          art3_title: 'Biolume Forest', art3_type: 'Unreal Engine 5 VR'
        },
        schema: { art1_title: 'text', art1_type: 'text', art2_title: 'text', art2_type: 'text', art3_title: 'text', art3_type: 'text' },
        html: `<section class="bg-black text-white py-16 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6" id="artworks">
  <div class="p-6 bg-violet-950/40 border border-violet-900/60 rounded-xl">
    <div class="text-xs text-violet-400 font-mono mb-2">{{art1_type}}</div>
    <h3 class="text-xl font-bold">{{art1_title}}</h3>
  </div>
  <div class="p-6 bg-violet-950/40 border border-violet-900/60 rounded-xl">
    <div class="text-xs text-violet-400 font-mono mb-2">{{art2_type}}</div>
    <h3 class="text-xl font-bold">{{art2_title}}</h3>
  </div>
  <div class="p-6 bg-violet-950/40 border border-violet-900/60 rounded-xl">
    <div class="text-xs text-violet-400 font-mono mb-2">{{art3_type}}</div>
    <h3 class="text-xl font-bold">{{art3_title}}</h3>
  </div>
</section>`
      }
    ],
    footer: {
      default_data: { text: '© 2026 Maya Lin. Rendered in WebGL.' },
      schema: { text: 'text' },
      html: `<footer class="bg-black text-violet-500 py-6 text-center text-xs font-mono border-t border-violet-950">{{text}}</footer>`
    }
  },

  {
    name: 'Kai Tanaka - Motion Design',
    category: 'Portfolio',
    description: 'Dynamic kinetic typography, commercial title sequences, and 3D broadcast animation showreel.',
    header: {
      default_data: { logo_text: 'KAI TANAKA // MOTION', nav1: 'Showreel', nav2: 'Commercials', cta: 'Contact' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-red-950 text-red-100 px-8 py-5 flex justify-between items-center border-b border-red-900">
  <div class="font-black text-base tracking-widest text-red-400">{{logo_text}}</div>
  <div class="flex gap-6 text-xs uppercase tracking-wider text-red-300">
    <a href="#reel" class="hover:text-white transition">{{nav1}}</a>
    <a href="#work" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <a href="#contact" class="px-4 py-1.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase rounded">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Kinetic Energy in Motion',
          subtitle: 'Director and motion designer based in Vancouver. Creating high-impact title sequences for streaming networks and global brands.'
        },
        schema: { title: 'text', subtitle: 'textarea' },
        html: `<section class="bg-zinc-950 text-white py-24 px-8 text-center border-b border-zinc-900">
  <h1 class="text-5xl md:text-7xl font-black uppercase tracking-tight mb-4 text-red-500">{{title}}</h1>
  <p class="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">{{subtitle}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          client1: 'Sony Music - Title Sequence', client2: 'Nike Apex - Kinetic Campaign', client3: 'Hyperion AI - Brand Film'
        },
        schema: { client1: 'text', client2: 'text', client3: 'text' },
        html: `<section class="bg-black text-white py-16 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6" id="reel">
  <div class="p-6 bg-zinc-900 border border-zinc-800 rounded-lg text-center font-bold text-sm text-zinc-300">{{client1}}</div>
  <div class="p-6 bg-zinc-900 border border-zinc-800 rounded-lg text-center font-bold text-sm text-zinc-300">{{client2}}</div>
  <div class="p-6 bg-zinc-900 border border-zinc-800 rounded-lg text-center font-bold text-sm text-zinc-300">{{client3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 Kai Tanaka Motion Studio.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-black text-zinc-600 py-6 text-center text-xs border-t border-zinc-900">{{copy}}</footer>`
    }
  },

  // ==========================================
  // 3. RESTAURANT & CAFE (5 Templates)
  // ==========================================
  {
    name: 'L\'Aura - Modern Bistro',
    category: 'Restaurant & Cafe',
    description: 'Sophisticated modern French bistro with farm-to-table seasonal tasting menus and curated natural wines.',
    header: {
      default_data: { logo_text: 'L\'AURA BISTRO', nav1: 'Tasting Menu', nav2: 'Wine Cellar', nav3: 'Private Dining', cta: 'Reserve Table' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', nav3: 'text', cta: 'text' },
      html: `<header class="bg-stone-900 text-stone-100 px-8 py-5 flex justify-between items-center border-b border-stone-800">
  <div class="font-serif text-xl font-bold tracking-widest text-amber-200">{{logo_text}}</div>
  <nav class="hidden md:flex gap-8 text-xs font-serif uppercase tracking-widest text-stone-300">
    <a href="#menu" class="hover:text-amber-200 transition">{{nav1}}</a>
    <a href="#wine" class="hover:text-amber-200 transition">{{nav2}}</a>
    <a href="#private" class="hover:text-amber-200 transition">{{nav3}}</a>
  </nav>
  <a href="#reserve" class="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-serif font-bold text-xs uppercase tracking-widest rounded transition">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          hero_title: 'Seasonal Cuisine, Inspired by Earth and Sea',
          hero_desc: 'Chef Julien Laurent celebrates hyper-local terroir with an evolving seven-course tasting menu paired with natural biodynamic vintages.',
          hours: 'Dinner: Tuesday - Sunday • 5:30 PM - 11:00 PM'
        },
        schema: { hero_title: 'text', hero_desc: 'textarea', hours: 'text' },
        html: `<section class="bg-stone-900 text-stone-100 py-24 px-8 text-center border-b border-stone-800">
  <div class="max-w-4xl mx-auto">
    <span class="text-xs uppercase tracking-widest text-amber-400 font-serif mb-4 inline-block">Michelin Starred 2025</span>
    <h1 class="font-serif text-4xl md:text-6xl font-light leading-tight mb-6 text-amber-50">{{hero_title}}</h1>
    <p class="text-stone-300 text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">{{hero_desc}}</p>
    <div class="text-xs text-amber-200/80 font-mono tracking-wider">{{hours}}</div>
  </div>
</section>`
      },
      {
        order: 100,
        default_data: {
          dish1_name: 'Seared Hokkaido Scallops', dish1_price: '$34', dish1_desc: 'Cauliflower velouté, black winter truffle, brown butter foam.',
          dish2_name: 'Dry-Aged Duck Breast', dish2_price: '$48', dish2_desc: 'Spiced plum reduction, glazed parsnips, charred leek ash.',
          dish3_name: 'Valrhona Chocolate Tart', dish3_price: '$22', dish3_desc: 'Smoked sea salt caramel, roasted hazelnut gelato.'
        },
        schema: { dish1_name: 'text', dish1_price: 'text', dish1_desc: 'textarea', dish2_name: 'text', dish2_price: 'text', dish2_desc: 'textarea', dish3_name: 'text', dish3_price: 'text', dish3_desc: 'textarea' },
        html: `<section class="bg-stone-950 text-stone-200 py-20 px-8 font-serif" id="menu">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-center text-3xl font-light text-amber-100 mb-12">Featured Selections</h2>
    <div class="space-y-8 divide-y divide-stone-800">
      <div class="pt-6 flex justify-between items-baseline">
        <div>
          <h3 class="text-xl font-normal text-amber-100">{{dish1_name}}</h3>
          <p class="text-xs font-sans text-stone-400 mt-1">{{dish1_desc}}</p>
        </div>
        <span class="text-lg text-amber-300 font-sans font-bold ml-4">{{dish1_price}}</span>
      </div>
      <div class="pt-6 flex justify-between items-baseline">
        <div>
          <h3 class="text-xl font-normal text-amber-100">{{dish2_name}}</h3>
          <p class="text-xs font-sans text-stone-400 mt-1">{{dish2_desc}}</p>
        </div>
        <span class="text-lg text-amber-300 font-sans font-bold ml-4">{{dish2_price}}</span>
      </div>
      <div class="pt-6 flex justify-between items-baseline">
        <div>
          <h3 class="text-xl font-normal text-amber-100">{{dish3_name}}</h3>
          <p class="text-xs font-sans text-stone-400 mt-1">{{dish3_desc}}</p>
        </div>
        <span class="text-lg text-amber-300 font-sans font-bold ml-4">{{dish3_price}}</span>
      </div>
    </div>
  </div>
</section>`
      }
    ],
    footer: {
      default_data: { address: '482 Rue de Saint-Honoré, Paris • reservations@laura-bistro.fr', copy: '© 2026 L\'Aura Bistro.' },
      schema: { address: 'text', copy: 'text' },
      html: `<footer class="bg-stone-950 text-stone-500 py-8 px-8 text-center font-serif text-xs border-t border-stone-900">
  <p class="text-stone-300 mb-2">{{address}}</p>
  <p>{{copy}}</p>
</footer>`
    }
  },

  {
    name: 'Roastery & Co.',
    category: 'Restaurant & Cafe',
    description: 'Specialty artisan coffee bar, micro-roaster, and breakfast pastries with ethical bean sourcing.',
    header: {
      default_data: { logo_text: 'ROASTERY & CO.', nav1: 'Coffee Beans', nav2: 'Brew Guide', nav3: 'Locations', cta: 'Order Ahead' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', nav3: 'text', cta: 'text' },
      html: `<header class="bg-amber-950 text-amber-100 px-8 py-4 flex justify-between items-center border-b border-amber-900">
  <div class="font-extrabold text-lg tracking-wider text-amber-400">{{logo_text}}</div>
  <nav class="hidden md:flex gap-6 text-sm font-medium text-amber-200">
    <a href="#beans" class="hover:text-white transition">{{nav1}}</a>
    <a href="#guide" class="hover:text-white transition">{{nav2}}</a>
    <a href="#locations" class="hover:text-white transition">{{nav3}}</a>
  </nav>
  <a href="#order" class="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-lg transition">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Single-Origin Coffee, Roasted Daily',
          desc: 'Direct-trade Ethiopian Yirgacheffe, Colombian Geisha, and small-batch espresso crafted by award-winning baristas.',
          cta_btn: 'Find a Cafe Near You'
        },
        schema: { title: 'text', desc: 'textarea', cta_btn: 'text' },
        html: `<section class="bg-amber-900/90 text-white py-20 px-8 text-center">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">{{title}}</h1>
    <p class="text-amber-100 text-base mb-8 max-w-xl mx-auto leading-relaxed">{{desc}}</p>
    <a href="#locations" class="inline-block px-6 py-3 bg-amber-400 text-amber-950 font-black text-xs uppercase tracking-wider rounded-lg shadow-md hover:bg-amber-300 transition">{{cta_btn}}</a>
  </div>
</section>`
      },
      {
        order: 100,
        default_data: {
          c1: 'Ethiopia Guji Natural', n1: 'Notes: Jasmine, Peach, Bergamot',
          c2: 'Colombia Huila Washed', n2: 'Notes: Brown Sugar, Green Apple, Cocoa',
          c3: 'Guatemala Antigua Peaberry', n3: 'Notes: Milk Chocolate, Almond, Honey'
        },
        schema: { c1: 'text', n1: 'text', c2: 'text', n2: 'text', c3: 'text', n3: 'text' },
        html: `<section class="bg-amber-950 text-amber-50 py-16 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6" id="beans">
  <div class="p-6 bg-amber-900/40 border border-amber-800 rounded-xl">
    <h3 class="font-bold text-lg mb-1">{{c1}}</h3>
    <p class="text-xs text-amber-300">{{n1}}</p>
  </div>
  <div class="p-6 bg-amber-900/40 border border-amber-800 rounded-xl">
    <h3 class="font-bold text-lg mb-1">{{c2}}</h3>
    <p class="text-xs text-amber-300">{{n2}}</p>
  </div>
  <div class="p-6 bg-amber-900/40 border border-amber-800 rounded-xl">
    <h3 class="font-bold text-lg mb-1">{{c3}}</h3>
    <p class="text-xs text-amber-300">{{n3}}</p>
  </div>
</section>`
      }
    ],
    footer: {
      default_data: { text: 'Open Mon-Sun 6am - 6pm • © 2026 Roastery & Co.' },
      schema: { text: 'text' },
      html: `<footer class="bg-amber-950 text-amber-400 py-6 text-center text-xs border-t border-amber-900">{{text}}</footer>`
    }
  },

  {
    name: 'The Crust & Crumb',
    category: 'Restaurant & Cafe',
    description: 'Artisanal sourdough bakery with wild fermentation breads, buttery pastries, and breakfast sandwiches.',
    header: {
      default_data: { logo_text: 'THE CRUST & CRUMB', nav1: 'Daily Breads', nav2: 'Pastries', cta: 'Pre-Order Pickup' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-yellow-50 text-stone-900 px-8 py-4 flex justify-between items-center border-b border-yellow-200">
  <div class="font-serif font-black text-xl text-amber-800">{{logo_text}}</div>
  <div class="flex gap-6 text-sm font-serif font-semibold text-stone-700">
    <a href="#breads" class="hover:text-amber-800 transition">{{nav1}}</a>
    <a href="#pastries" class="hover:text-amber-800 transition">{{nav2}}</a>
  </div>
  <a href="#order" class="px-4 py-2 bg-amber-800 text-yellow-50 text-xs font-serif font-bold rounded">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Naturally Fermented Sourdough Breads',
          desc: 'Stone-milled organic grains, 36-hour slow cold fermentation, and crisp blisters on golden crusts. Baked fresh every morning at 5:00 AM.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-yellow-50/60 py-20 px-8 text-center text-stone-900">
  <h1 class="font-serif text-4xl md:text-5xl font-bold mb-4 text-amber-900">{{title}}</h1>
  <p class="font-sans text-stone-600 max-w-xl mx-auto text-base leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          b1: 'Country Loaf ($9)', b2: 'Seeded Rye ($11)', b3: 'Cardamom Bun ($5)'
        },
        schema: { b1: 'text', b2: 'text', b3: 'text' },
        html: `<section class="bg-white py-14 px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center" id="breads">
  <div class="p-6 border border-stone-200 rounded-lg bg-stone-50 font-serif font-bold text-lg text-stone-800">{{b1}}</div>
  <div class="p-6 border border-stone-200 rounded-lg bg-stone-50 font-serif font-bold text-lg text-stone-800">{{b2}}</div>
  <div class="p-6 border border-stone-200 rounded-lg bg-stone-50 font-serif font-bold text-lg text-stone-800">{{b3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 The Crust & Crumb Bakery. 120 Market Street.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-stone-900 text-stone-400 py-6 text-center text-xs font-serif">{{copy}}</footer>`
    }
  },

  {
    name: 'Zen Bento Kitchen',
    category: 'Restaurant & Cafe',
    description: 'Fast-casual contemporary Japanese kitchen featuring chef bento boxes, poke bowls, and matcha lattes.',
    header: {
      default_data: { logo_text: 'ZEN BENTO', nav1: 'Menu', nav2: 'Catering', cta: 'Order Online' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-stone-950 text-white px-8 py-4 flex justify-between items-center border-b border-stone-800">
  <div class="font-bold text-lg text-red-500 tracking-wider">{{logo_text}}</div>
  <div class="flex gap-6 text-xs text-stone-300 uppercase tracking-widest font-mono">
    <a href="#menu" class="hover:text-white transition">{{nav1}}</a>
    <a href="#catering" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <a href="#order" class="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded transition">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Wholesome Japanese Bento & Rice Bowls',
          desc: 'Fresh sashimi-grade salmon, pasture-raised chicken teriyaki, organic pickled vegetables, and warm seasoned rice.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-stone-900 text-white py-20 px-8 text-center">
  <h1 class="text-4xl md:text-5xl font-black mb-4 tracking-tight">{{title}}</h1>
  <p class="text-stone-300 text-base max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          box1: 'Salmon Teriyaki Box - $16.50',
          box2: 'Wagyu Beef Yakiniku - $19.00',
          box3: 'Crispy Tofu & Shiitake - $14.50'
        },
        schema: { box1: 'text', box2: 'text', box3: 'text' },
        html: `<section class="bg-stone-950 py-14 px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center" id="menu">
  <div class="p-6 bg-stone-900 border border-stone-800 rounded-xl font-bold text-sm">{{box1}}</div>
  <div class="p-6 bg-stone-900 border border-stone-800 rounded-xl font-bold text-sm">{{box2}}</div>
  <div class="p-6 bg-stone-900 border border-stone-800 rounded-xl font-bold text-sm">{{box3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 Zen Bento Kitchen. Healthy, fast, & delicious.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-stone-950 text-stone-600 py-6 text-center text-xs border-t border-stone-900">{{copy}}</footer>`
    }
  },

  {
    name: 'Bella Forno Pizzeria',
    category: 'Restaurant & Cafe',
    description: 'Authentic woodfired Neapolitan pizzeria with San Marzano tomatoes, buffalo mozzarella, and craft beers.',
    header: {
      default_data: { logo_text: 'BELLA FORNO', nav1: 'Pizzas', nav2: 'Antipasti', cta: 'Order Delivery' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-orange-950 text-white px-8 py-4 flex justify-between items-center border-b border-orange-900">
  <div class="font-serif font-black text-xl text-orange-400">{{logo_text}}</div>
  <div class="flex gap-6 text-sm text-orange-200">
    <a href="#pizzas" class="hover:text-white transition">{{nav1}}</a>
    <a href="#antipasti" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <a href="#order" class="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: '900° Woodfired Neapolitan Pizza',
          desc: 'Slow-proofed dough, Caputo 00 flour, and bubbling crusts straight from our handcrafted Italian volcanic stone oven.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-orange-900/90 text-white py-20 px-8 text-center">
  <h1 class="font-serif text-4xl md:text-5xl font-black mb-4">{{title}}</h1>
  <p class="text-orange-100 text-base max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          p1: 'Margherita D.O.P. ($18)', p2: 'Diavola Spianata ($21)', p3: 'Tartufo e Funghi ($24)'
        },
        schema: { p1: 'text', p2: 'text', p3: 'text' },
        html: `<section class="bg-orange-950 text-white py-14 px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-serif" id="pizzas">
  <div class="p-6 bg-orange-900/40 border border-orange-800 rounded-lg text-lg font-bold">{{p1}}</div>
  <div class="p-6 bg-orange-900/40 border border-orange-800 rounded-lg text-lg font-bold">{{p2}}</div>
  <div class="p-6 bg-orange-900/40 border border-orange-800 rounded-lg text-lg font-bold">{{p3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 Bella Forno Napoletana. Woodfired perfection.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-orange-950 text-orange-400 py-6 text-center text-xs border-t border-orange-900">{{copy}}</footer>`
    }
  },

  // ==========================================
  // 4. E-COMMERCE (5 Templates)
  // ==========================================
  {
    name: 'Atelier Minimal Apparel',
    category: 'E-commerce',
    description: 'Clean, editorial fashion storefront for sustainable organic cotton garments and ethical wardrobe staples.',
    header: {
      default_data: { logo_text: 'ATELIER.', nav1: 'Men', nav2: 'Women', nav3: 'Essentials', cta: 'Bag (0)' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', nav3: 'text', cta: 'text' },
      html: `<header class="bg-white border-b border-neutral-100 py-5 px-8 flex justify-between items-center sticky top-0 z-50">
  <div class="text-xl font-black tracking-widest">{{logo_text}}</div>
  <nav class="hidden md:flex gap-8 text-xs uppercase tracking-widest text-neutral-600 font-medium">
    <a href="#men" class="hover:text-black transition">{{nav1}}</a>
    <a href="#women" class="hover:text-black transition">{{nav2}}</a>
    <a href="#essentials" class="hover:text-black transition">{{nav3}}</a>
  </nav>
  <button class="text-xs uppercase font-bold tracking-widest">{{cta}}</button>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          banner: 'Spring / Summer 2026',
          title: 'Effortless Silhouettes in Heavyweight Organic Linen',
          cta_label: 'Explore New Arrivals'
        },
        schema: { banner: 'text', title: 'text', cta_label: 'text' },
        html: `<section class="bg-neutral-50 py-24 px-8 text-center border-b border-neutral-200">
  <span class="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3 inline-block">{{banner}}</span>
  <h1 class="text-3xl md:text-5xl font-light text-neutral-900 max-w-3xl mx-auto mb-8 leading-tight">{{title}}</h1>
  <a href="#collection" class="inline-block px-8 py-3.5 bg-black text-white text-xs uppercase font-bold tracking-widest hover:bg-neutral-800 transition">{{cta_label}}</a>
</section>`
      },
      {
        order: 100,
        default_data: {
          prod1_name: 'Raw Hem Linen Trouser', prod1_price: '$145',
          prod2_name: 'Boxy Heavy Cotton Tee', prod2_price: '$65',
          prod3_name: 'Relaxed Chore Overshirt', prod3_price: '$185'
        },
        schema: { prod1_name: 'text', prod1_price: 'text', prod2_name: 'text', prod2_price: 'text', prod3_name: 'text', prod3_price: 'text' },
        html: `<section class="py-16 px-8 max-w-6xl mx-auto" id="collection">
  <h2 class="text-xs uppercase tracking-widest text-neutral-400 font-bold mb-8">Selected Essentials</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="border border-neutral-100 p-6 rounded-lg bg-white shadow-sm">
      <div class="h-48 bg-neutral-100 rounded mb-4 flex items-center justify-center text-neutral-400 text-xs">Product Image</div>
      <h3 class="font-bold text-sm text-neutral-900">{{prod1_name}}</h3>
      <p class="text-xs text-neutral-500 mt-1 font-mono">{{prod1_price}}</p>
    </div>
    <div class="border border-neutral-100 p-6 rounded-lg bg-white shadow-sm">
      <div class="h-48 bg-neutral-100 rounded mb-4 flex items-center justify-center text-neutral-400 text-xs">Product Image</div>
      <h3 class="font-bold text-sm text-neutral-900">{{prod2_name}}</h3>
      <p class="text-xs text-neutral-500 mt-1 font-mono">{{prod2_price}}</p>
    </div>
    <div class="border border-neutral-100 p-6 rounded-lg bg-white shadow-sm">
      <div class="h-48 bg-neutral-100 rounded mb-4 flex items-center justify-center text-neutral-400 text-xs">Product Image</div>
      <h3 class="font-bold text-sm text-neutral-900">{{prod3_name}}</h3>
      <p class="text-xs text-neutral-500 mt-1 font-mono">{{prod3_price}}</p>
    </div>
  </div>
</section>`
      }
    ],
    footer: {
      default_data: { shipping: 'Free Worldwide Carbon-Neutral Shipping on Orders Over $150 • © 2026 Atelier Apparel' },
      schema: { shipping: 'text' },
      html: `<footer class="border-t border-neutral-200 py-8 px-8 text-center text-xs text-neutral-500">{{shipping}}</footer>`
    }
  },

  {
    name: 'Volt Audio Gear',
    category: 'E-commerce',
    description: 'High-fidelity planar magnetic headphones, DAC amplifiers, and audiophile sound monitors.',
    header: {
      default_data: { logo_text: 'VOLT // AUDIO', nav1: 'Headphones', nav2: 'DACs & Amps', cta: 'Cart (0)' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-black text-white px-8 py-5 border-b border-zinc-800 flex justify-between items-center">
  <div class="font-mono text-xl font-black text-amber-400">{{logo_text}}</div>
  <div class="flex gap-6 text-xs uppercase tracking-widest text-zinc-400 font-mono">
    <a href="#headphones" class="hover:text-white transition">{{nav1}}</a>
    <a href="#amps" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <button class="px-4 py-1.5 bg-amber-400 text-black font-bold text-xs rounded uppercase font-mono">{{cta}}</button>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Hear Every Nuance with Planar Precision',
          desc: 'Engineered with ultra-thin nanometer diaphragms for zero distortion and acoustic clarity across 5Hz - 50kHz.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-zinc-950 text-white py-24 px-8 text-center border-b border-zinc-800">
  <h1 class="text-4xl md:text-6xl font-black tracking-tight mb-4 text-zinc-100">{{title}}</h1>
  <p class="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          item1: 'Volt X1 Open-Back Flagship ($799)',
          item2: 'Volt Pulse Wireless ANC ($399)',
          item3: 'Volt Pure Analog Tube Amp ($549)'
        },
        schema: { item1: 'text', item2: 'text', item3: 'text' },
        html: `<section class="bg-zinc-900 py-16 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center font-mono" id="headphones">
  <div class="p-6 bg-zinc-950 border border-zinc-800 rounded-lg text-sm font-bold text-amber-300">{{item1}}</div>
  <div class="p-6 bg-zinc-950 border border-zinc-800 rounded-lg text-sm font-bold text-amber-300">{{item2}}</div>
  <div class="p-6 bg-zinc-950 border border-zinc-800 rounded-lg text-sm font-bold text-amber-300">{{item3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 Volt Audio Gear. Engineered in Munich, Germany.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-black text-zinc-600 py-6 text-center text-xs font-mono border-t border-zinc-900">{{copy}}</footer>`
    }
  },

  {
    name: 'Haven Living Furniture',
    category: 'E-commerce',
    description: 'Solid FSC-certified oak and walnut furniture designed for architectural homes and modern interiors.',
    header: {
      default_data: { logo_text: 'HAVEN LIVING', nav1: 'Living', nav2: 'Dining', nav3: 'Bedroom', cta: 'Cart' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', nav3: 'text', cta: 'text' },
      html: `<header class="bg-stone-100 text-stone-900 px-8 py-5 border-b border-stone-200 flex justify-between items-center">
  <div class="font-serif text-xl font-bold tracking-wider text-stone-800">{{logo_text}}</div>
  <nav class="hidden md:flex gap-8 text-xs uppercase tracking-widest text-stone-600 font-medium">
    <a href="#living" class="hover:text-black transition">{{nav1}}</a>
    <a href="#dining" class="hover:text-black transition">{{nav2}}</a>
    <a href="#bedroom" class="hover:text-black transition">{{nav3}}</a>
  </nav>
  <button class="text-xs font-bold text-stone-700">{{cta}}</button>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Handcrafted Furniture for Modern Sanctuaries',
          desc: 'Sustainable solid wood joinery built to endure generations. Designed in Copenhagen.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-stone-50 py-24 px-8 text-center text-stone-900">
  <h1 class="font-serif text-4xl md:text-5xl font-light mb-4">{{title}}</h1>
  <p class="text-stone-600 text-base max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          f1: 'Nordic Low Lounge Chair ($620)',
          f2: 'Oiled Oak Dining Table ($1,450)',
          f3: 'Walnut Floating Credenza ($980)'
        },
        schema: { f1: 'text', f2: 'text', f3: 'text' },
        html: `<section class="bg-white py-16 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center" id="living">
  <div class="p-6 border border-stone-200 rounded-lg bg-stone-50 font-serif font-medium text-stone-800">{{f1}}</div>
  <div class="p-6 border border-stone-200 rounded-lg bg-stone-50 font-serif font-medium text-stone-800">{{f2}}</div>
  <div class="p-6 border border-stone-200 rounded-lg bg-stone-50 font-serif font-medium text-stone-800">{{f3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { text: '© 2026 Haven Living. FSC Certified Organic Timbers.' },
      schema: { text: 'text' },
      html: `<footer class="bg-stone-900 text-stone-400 py-6 text-center text-xs font-serif">{{text}}</footer>`
    }
  },

  {
    name: 'Bloom Botanicals',
    category: 'E-commerce',
    description: 'Cold-pressed organic botanical skincare, adaptogenic serums, and antioxidant body oils.',
    header: {
      default_data: { logo_text: 'BLOOM BOTANICALS', nav1: 'Serums', nav2: 'Body Care', cta: 'Shop All' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-emerald-950 text-emerald-100 px-8 py-4 flex justify-between items-center border-b border-emerald-900">
  <div class="font-serif text-lg font-bold text-emerald-300">{{logo_text}}</div>
  <div class="flex gap-6 text-xs uppercase tracking-wider text-emerald-300">
    <a href="#serums" class="hover:text-white transition">{{nav1}}</a>
    <a href="#body" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <a href="#shop" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Pure Plant Extracts for Radiant Skin',
          desc: 'Zero synthetic preservatives. Formulated with cold-pressed rosehip seed, squalane, and blue tansy.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-emerald-900/60 text-white py-20 px-8 text-center">
  <h1 class="font-serif text-4xl md:text-5xl font-light mb-4">{{title}}</h1>
  <p class="text-emerald-100 text-base max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          s1: 'Radiance Bakuchiol Oil ($54)',
          s2: 'Hydra-Plump Peptide Mist ($38)',
          s3: 'Ceramide Barrier Cream ($62)'
        },
        schema: { s1: 'text', s2: 'text', s3: 'text' },
        html: `<section class="bg-emerald-950 text-white py-14 px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-serif" id="serums">
  <div class="p-6 bg-emerald-900/40 border border-emerald-800 rounded-lg text-emerald-200">{{s1}}</div>
  <div class="p-6 bg-emerald-900/40 border border-emerald-800 rounded-lg text-emerald-200">{{s2}}</div>
  <div class="p-6 bg-emerald-900/40 border border-emerald-800 rounded-lg text-emerald-200">{{s3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 Bloom Botanicals. Cruelty-free & 100% Vegan.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-emerald-950 text-emerald-500 py-6 text-center text-xs border-t border-emerald-900">{{copy}}</footer>`
    }
  },

  {
    name: 'Terra Direct Trade',
    category: 'E-commerce',
    description: 'Specialty coffee subscription box delivering curated seasonal whole bean coffees directly from farming co-ops.',
    header: {
      default_data: { logo_text: 'TERRA COFFEE', nav1: 'Subscriptions', nav2: 'Origins', cta: 'Subscribe' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-zinc-900 text-white px-8 py-4 flex justify-between items-center border-b border-zinc-800">
  <div class="font-bold text-lg text-orange-400">{{logo_text}}</div>
  <div class="flex gap-6 text-xs text-zinc-300 uppercase tracking-widest font-mono">
    <a href="#sub" class="hover:text-white transition">{{nav1}}</a>
    <a href="#origins" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <a href="#sub" class="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Direct-Trade Micro-Lot Coffees Delivered to Your Door',
          desc: '100% transparent pricing paying 3x Fair Trade minimums directly to farming partners in Kenya, Costa Rica, and Sumatra.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-zinc-950 text-white py-20 px-8 text-center">
  <h1 class="text-4xl md:text-5xl font-black mb-4">{{title}}</h1>
  <p class="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          t1: 'Weekly Roaster Choice ($19/mo)',
          t2: 'Bi-Weekly Espresso Dual ($36/mo)',
          t3: 'Monthly Rare Reserve ($45/mo)'
        },
        schema: { t1: 'text', t2: 'text', t3: 'text' },
        html: `<section class="bg-zinc-900 py-14 px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center font-mono" id="sub">
  <div class="p-6 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-orange-400 font-bold">{{t1}}</div>
  <div class="p-6 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-orange-400 font-bold">{{t2}}</div>
  <div class="p-6 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-orange-400 font-bold">{{t3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 Terra Direct Trade. Carbon-neutral roasting.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-zinc-950 text-zinc-600 py-6 text-center text-xs border-t border-zinc-900">{{copy}}</footer>`
    }
  },

  // ==========================================
  // 5. BLOG & MAGAZINE (5 Templates)
  // ==========================================
  {
    name: 'The Tech Pulse',
    category: 'Blog & Magazine',
    description: 'In-depth engineering analyses, AI breakthroughs, and system architecture breakdowns for developers.',
    header: {
      default_data: { logo_text: 'THE TECH PULSE', nav1: 'AI & ML', nav2: 'DevOps', nav3: 'Architecture', cta: 'Subscribe' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', nav3: 'text', cta: 'text' },
      html: `<header class="bg-slate-900 text-white px-8 py-4 border-b border-slate-800 flex justify-between items-center sticky top-0 z-50">
  <div class="font-mono font-bold text-lg text-cyan-400">{{logo_text}}</div>
  <nav class="hidden md:flex gap-6 text-xs uppercase tracking-widest text-slate-300 font-mono">
    <a href="#ai" class="hover:text-white transition">{{nav1}}</a>
    <a href="#devops" class="hover:text-white transition">{{nav2}}</a>
    <a href="#arch" class="hover:text-white transition">{{nav3}}</a>
  </nav>
  <button class="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs rounded font-mono">{{cta}}</button>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          headline: 'Demystifying High-Throughput Distributed Systems',
          deck: 'Weekly technical essays dissecting real-world outages, database internals, and modern software engineering patterns.'
        },
        schema: { headline: 'text', deck: 'textarea' },
        html: `<section class="bg-slate-950 text-white py-20 px-8 border-b border-slate-800 text-center">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">{{headline}}</h1>
    <p class="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">{{deck}}</p>
  </div>
</section>`
      },
      {
        order: 100,
        default_data: {
          art1_title: 'Building Resilient Event-Driven Pipelines in Node.js & Kafka', art1_read: '8 min read',
          art2_title: 'Why PostgreSQL Outperforms Dedicated Vector Stores at 10M Scale', art2_read: '12 min read',
          art3_title: 'Zero-Downtime Database Schema Migrations: A Field Guide', art3_read: '15 min read'
        },
        schema: { art1_title: 'text', art1_read: 'text', art2_title: 'text', art2_read: 'text', art3_title: 'text', art3_read: 'text' },
        html: `<section class="bg-slate-900 py-16 px-8 text-white max-w-5xl mx-auto space-y-6" id="ai">
  <article class="p-6 bg-slate-950 border border-slate-800 rounded-xl hover:border-cyan-500 transition">
    <span class="text-xs text-cyan-400 font-mono">{{art1_read}}</span>
    <h3 class="text-xl font-bold mt-1 text-slate-100">{{art1_title}}</h3>
  </article>
  <article class="p-6 bg-slate-950 border border-slate-800 rounded-xl hover:border-cyan-500 transition">
    <span class="text-xs text-cyan-400 font-mono">{{art2_read}}</span>
    <h3 class="text-xl font-bold mt-1 text-slate-100">{{art2_title}}</h3>
  </article>
  <article class="p-6 bg-slate-950 border border-slate-800 rounded-xl hover:border-cyan-500 transition">
    <span class="text-xs text-cyan-400 font-mono">{{art3_read}}</span>
    <h3 class="text-xl font-bold mt-1 text-slate-100">{{art3_title}}</h3>
  </article>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 The Tech Pulse. Written for engineers, by engineers.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-slate-950 text-slate-600 py-6 text-center text-xs font-mono border-t border-slate-900">{{copy}}</footer>`
    }
  },

  {
    name: 'Nomad Journal',
    category: 'Blog & Magazine',
    description: 'Immersive slow-travel essays, off-the-beaten-path itineraries, and cultural photojournalism.',
    header: {
      default_data: { logo_text: 'NOMAD JOURNAL', nav1: 'Destinations', nav2: 'Field Notes', cta: 'Newsletter' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-stone-100 text-stone-900 px-8 py-5 border-b border-stone-200 flex justify-between items-center">
  <div class="font-serif text-xl font-bold tracking-widest text-stone-800">{{logo_text}}</div>
  <div class="flex gap-6 text-xs uppercase tracking-widest text-stone-600 font-medium">
    <a href="#dest" class="hover:text-black transition">{{nav1}}</a>
    <a href="#notes" class="hover:text-black transition">{{nav2}}</a>
  </div>
  <button class="text-xs font-bold text-stone-800 underline underline-offset-4">{{cta}}</button>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Stories from the Margins of the World',
          desc: 'Documenting indigenous traditions, high-altitude mountain passes, and sustainable travel practices across six continents.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-stone-50 py-24 px-8 text-center text-stone-900">
  <h1 class="font-serif text-4xl md:text-6xl font-light mb-4">{{title}}</h1>
  <p class="text-stone-600 text-lg max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          p1: 'Crossing the Pamir Highway on Two Wheels',
          p2: 'The Disappearing Tea Harvesters of Shizuoka',
          p3: 'Winter Solstice Under the Arctic Lights'
        },
        schema: { p1: 'text', p2: 'text', p3: 'text' },
        html: `<section class="bg-white py-16 px-8 max-w-4xl mx-auto space-y-6" id="dest">
  <div class="p-6 border border-stone-200 rounded-lg bg-stone-50 font-serif font-bold text-lg text-stone-800">{{p1}}</div>
  <div class="p-6 border border-stone-200 rounded-lg bg-stone-50 font-serif font-bold text-lg text-stone-800">{{p2}}</div>
  <div class="p-6 border border-stone-200 rounded-lg bg-stone-50 font-serif font-bold text-lg text-stone-800">{{p3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 Nomad Journal. Travel slowly, leave no trace.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-stone-900 text-stone-400 py-6 text-center text-xs font-serif">{{copy}}</footer>`
    }
  },

  {
    name: 'Fork & Fire Magazine',
    category: 'Blog & Magazine',
    description: 'Food culture magazine exploring regional street foods, culinary fermentations, and restaurant profiles.',
    header: {
      default_data: { logo_text: 'FORK & FIRE', nav1: 'Recipes', nav2: 'Essays', cta: 'Subscribe' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-red-950 text-white px-8 py-4 flex justify-between items-center border-b border-red-900">
  <div class="font-serif text-xl font-bold text-amber-400">{{logo_text}}</div>
  <div class="flex gap-6 text-sm text-red-200">
    <a href="#recipes" class="hover:text-white transition">{{nav1}}</a>
    <a href="#essays" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <button class="px-4 py-2 bg-amber-500 text-red-950 font-bold text-xs rounded">{{cta}}</button>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'The Art and Soul of Global Food Culture',
          desc: 'From street-corner taco stands in Oaxaca to three-star Kaiseki temples in Kyoto.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-red-900/80 text-white py-20 px-8 text-center">
  <h1 class="font-serif text-4xl md:text-5xl font-black mb-4">{{title}}</h1>
  <p class="text-red-100 text-base max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          f1: 'Mastering 72-Hour Bone Broth Ramen',
          f2: 'The Secret Vinegar Cellars of Modena',
          f3: 'Fermented Chili Pastes of the Korean Peninsula'
        },
        schema: { f1: 'text', f2: 'text', f3: 'text' },
        html: `<section class="bg-stone-900 text-white py-14 px-8 max-w-4xl mx-auto space-y-4" id="recipes">
  <div class="p-6 bg-stone-950 border border-stone-800 rounded-lg font-serif font-bold text-amber-200">{{f1}}</div>
  <div class="p-6 bg-stone-950 border border-stone-800 rounded-lg font-serif font-bold text-amber-200">{{f2}}</div>
  <div class="p-6 bg-stone-950 border border-stone-800 rounded-lg font-serif font-bold text-amber-200">{{f3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 Fork & Fire Culinary Magazine.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-stone-950 text-stone-600 py-6 text-center text-xs border-t border-stone-900">{{copy}}</footer>`
    }
  },

  {
    name: 'Mind & Flow Blog',
    category: 'Blog & Magazine',
    description: 'Evidence-based cognitive psychology, mindful productivity habits, and neurobiology insights.',
    header: {
      default_data: { logo_text: 'MIND & FLOW', nav1: 'Focus', nav2: 'Habits', cta: 'Join 50k Readers' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-teal-950 text-white px-8 py-4 flex justify-between items-center border-b border-teal-900">
  <div class="font-bold text-lg text-teal-300">{{logo_text}}</div>
  <div class="flex gap-6 text-xs text-teal-200 uppercase tracking-widest font-mono">
    <a href="#focus" class="hover:text-white transition">{{nav1}}</a>
    <a href="#habits" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <button class="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded transition">{{cta}}</button>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Science-Backed Tools for Deep Work and Clarity',
          desc: 'Daily reflections on dopamine regulation, sleep architecture, and sustainable high-performance routines.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-teal-900/60 text-white py-20 px-8 text-center">
  <h1 class="text-4xl md:text-5xl font-black mb-4 tracking-tight">{{title}}</h1>
  <p class="text-teal-200 text-base max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          a1: 'How Non-Sleep Deep Rest Resets Executive Function',
          a2: 'The 90-Minute Ultradian Rhythm Protocol',
          a3: 'Overcoming Attention Residue in Remote Work'
        },
        schema: { a1: 'text', a2: 'text', a3: 'text' },
        html: `<section class="bg-teal-950 py-14 px-8 max-w-4xl mx-auto space-y-4 text-white" id="focus">
  <div class="p-6 bg-teal-900/40 border border-teal-800 rounded-lg text-teal-100 font-bold">{{a1}}</div>
  <div class="p-6 bg-teal-900/40 border border-teal-800 rounded-lg text-teal-100 font-bold">{{a2}}</div>
  <div class="p-6 bg-teal-900/40 border border-teal-800 rounded-lg text-teal-100 font-bold">{{a3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 Mind & Flow. Cultivate stillness in a noisy world.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-teal-950 text-teal-500 py-6 text-center text-xs border-t border-teal-900">{{copy}}</footer>`
    }
  },

  {
    name: 'Capital & Horizon',
    category: 'Blog & Magazine',
    description: 'Macroeconomic analysis, central bank monetary policy updates, and venture capital intelligence.',
    header: {
      default_data: { logo_text: 'CAPITAL & HORIZON', nav1: 'Markets', nav2: 'Macro', cta: 'Pro Access' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-slate-900 text-white px-8 py-4 flex justify-between items-center border-b border-slate-800">
  <div class="font-serif font-bold text-lg text-emerald-400">{{logo_text}}</div>
  <div class="flex gap-6 text-xs text-slate-300 uppercase tracking-widest font-mono">
    <a href="#markets" class="hover:text-white transition">{{nav1}}</a>
    <a href="#macro" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <button class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded transition">{{cta}}</button>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Macro Insights for Institutional Investors',
          desc: 'Unbiased commentary on sovereign yields, liquidity cycles, and structural geopolitical shifts.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-slate-950 text-white py-20 px-8 text-center">
  <h1 class="font-serif text-4xl md:text-5xl font-bold mb-4">{{title}}</h1>
  <p class="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          m1: 'The Global Liquidity Cycle: Q3 Outlook',
          m2: 'Commodity Supercycle Trends and Industrial Demand',
          m3: 'Private Credit Yield Spreads Under New Rates'
        },
        schema: { m1: 'text', m2: 'text', m3: 'text' },
        html: `<section class="bg-slate-900 py-14 px-8 max-w-4xl mx-auto space-y-4 text-white" id="markets">
  <div class="p-6 bg-slate-950 border border-slate-800 rounded-lg text-emerald-300 font-bold">{{m1}}</div>
  <div class="p-6 bg-slate-950 border border-slate-800 rounded-lg text-emerald-300 font-bold">{{m2}}</div>
  <div class="p-6 bg-slate-950 border border-slate-800 rounded-lg text-emerald-300 font-bold">{{m3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 Capital & Horizon Intelligence Group.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-slate-950 text-slate-600 py-6 text-center text-xs border-t border-slate-900">{{copy}}</footer>`
    }
  },

  // ==========================================
  // 6. LANDING PAGES (5 Templates)
  // ==========================================
  {
    name: 'CloudScale Platform',
    category: 'Landing Pages',
    description: 'High-converting B2B SaaS landing page designed for developer tools, cloud observability, and API services.',
    header: {
      default_data: { logo_text: 'CLOUDSCALE', nav1: 'Features', nav2: 'Pricing', nav3: 'Docs', cta: 'Start Free Trial' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', nav3: 'text', cta: 'text' },
      html: `<header class="bg-white border-b border-gray-100 py-4 px-8 sticky top-0 z-50 flex justify-between items-center">
  <div class="font-bold text-xl text-blue-600 tracking-tight">{{logo_text}}</div>
  <nav class="hidden md:flex gap-8 text-sm font-medium text-gray-600">
    <a href="#features" class="hover:text-blue-600 transition">{{nav1}}</a>
    <a href="#pricing" class="hover:text-blue-600 transition">{{nav2}}</a>
    <a href="#docs" class="hover:text-blue-600 transition">{{nav3}}</a>
  </nav>
  <a href="#signup" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow transition">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          badge: 'v4.2 RELEASED WITH EBPF LOGGING',
          title: 'Complete Observability for Microservices in One Line of Code',
          desc: 'Monitor distributed traces, aggregate metric telemetry, and detect anomalies with zero-configuration OpenTelemetry agents.',
          cta_primary: 'Get Started Free (No CC)',
          cta_secondary: 'Schedule Architecture Demo'
        },
        schema: { badge: 'text', title: 'text', desc: 'textarea', cta_primary: 'text', cta_secondary: 'text' },
        html: `<section class="py-24 px-8 text-center bg-gradient-to-b from-blue-50/60 to-white">
  <div class="max-w-4xl mx-auto">
    <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold text-xs rounded-full mb-6">{{badge}}</span>
    <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">{{title}}</h1>
    <p class="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">{{desc}}</p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="#signup" class="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition">{{cta_primary}}</a>
      <a href="#demo" class="px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition">{{cta_secondary}}</a>
    </div>
  </div>
</section>`
      },
      {
        order: 100,
        default_data: {
          f1_title: 'Sub-Millisecond Tracing', f1_desc: 'Trace millions of requests per second without impacting microservice response times.',
          f2_title: 'AI Root-Cause Detection', f2_desc: 'Automated clustering groups cascading failures into actionable incident tickets in seconds.',
          f3_title: 'Instant SOC2 & GDPR Compliance', f3_desc: 'Automated redaction of PII and cryptographic log hashing out of the box.'
        },
        schema: { f1_title: 'text', f1_desc: 'textarea', f2_title: 'text', f2_desc: 'textarea', f3_title: 'text', f3_desc: 'textarea' },
        html: `<section class="py-20 px-8 bg-white border-t border-gray-100" id="features">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="p-8 rounded-2xl bg-gray-50 border border-gray-200">
      <h3 class="text-lg font-bold text-gray-900 mb-2">{{f1_title}}</h3>
      <p class="text-gray-600 text-sm leading-relaxed">{{f1_desc}}</p>
    </div>
    <div class="p-8 rounded-2xl bg-gray-50 border border-gray-200">
      <h3 class="text-lg font-bold text-gray-900 mb-2">{{f2_title}}</h3>
      <p class="text-gray-600 text-sm leading-relaxed">{{f2_desc}}</p>
    </div>
    <div class="p-8 rounded-2xl bg-gray-50 border border-gray-200">
      <h3 class="text-lg font-bold text-gray-900 mb-2">{{f3_title}}</h3>
      <p class="text-gray-600 text-sm leading-relaxed">{{f3_desc}}</p>
    </div>
  </div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 CloudScale Technologies, Inc. All rights reserved.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-gray-900 text-gray-500 py-8 px-8 text-center text-xs">{{copy}}</footer>`
    }
  },

  {
    name: 'MobileFlow Mobile App',
    category: 'Landing Pages',
    description: 'Sleek app store landing page for personal finance, automated savings, and budgeting apps.',
    header: {
      default_data: { logo_text: 'MOBILEFLOW', nav1: 'How It Works', nav2: 'Security', cta: 'Download App' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-white px-8 py-4 flex justify-between items-center border-b border-gray-100">
  <div class="font-extrabold text-xl text-indigo-600">{{logo_text}}</div>
  <div class="flex gap-6 text-sm text-gray-600 font-medium">
    <a href="#how" class="hover:text-indigo-600 transition">{{nav1}}</a>
    <a href="#security" class="hover:text-indigo-600 transition">{{nav2}}</a>
  </div>
  <a href="#download" class="px-5 py-2 bg-indigo-600 text-white font-bold text-xs rounded-full">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Smart Money Management on Autopilot',
          desc: 'Round up spare change, automate monthly index fund deposits, and view all bank accounts in one gorgeous native iOS and Android app.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-gradient-to-b from-indigo-50/70 to-white py-24 px-8 text-center">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6">{{title}}</h1>
    <p class="text-gray-600 text-lg max-w-xl mx-auto mb-8 leading-relaxed">{{desc}}</p>
  </div>
</section>`
      },
      {
        order: 100,
        default_data: {
          stat1: '4.9 ★ Rating on App Store', stat2: '256-bit AES Bank-Grade Encryption', stat3: '$1.8B+ Savings Automated'
        },
        schema: { stat1: 'text', stat2: 'text', stat3: 'text' },
        html: `<section class="py-14 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-bold text-indigo-900" id="how">
  <div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl">{{stat1}}</div>
  <div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl">{{stat2}}</div>
  <div class="p-6 bg-indigo-50 border border-indigo-100 rounded-xl">{{stat3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 MobileFlow Inc. Member FDIC insured via partner banks.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-gray-900 text-gray-500 py-6 text-center text-xs">{{copy}}</footer>`
    }
  },

  {
    name: 'DesignSummit 2026',
    category: 'Landing Pages',
    description: 'High-energy event landing page for international design conferences, keynotes, and workshops.',
    header: {
      default_data: { logo_text: 'DESIGNSUMMIT // 2026', nav1: 'Speakers', nav2: 'Schedule', cta: 'Get Tickets' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-black text-white px-8 py-5 flex justify-between items-center border-b border-neutral-800">
  <div class="font-mono font-black text-lg text-fuchsia-400">{{logo_text}}</div>
  <div class="flex gap-6 text-xs uppercase tracking-widest text-neutral-300 font-mono">
    <a href="#speakers" class="hover:text-white transition">{{nav1}}</a>
    <a href="#schedule" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <a href="#tickets" class="px-5 py-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-mono font-bold text-xs rounded transition">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          date: 'OCTOBER 14-16, 2026 • SAN FRANCISCO & STREAMING',
          title: 'The World\'s Leading Conference on Design Systems & Spatial Computing',
          desc: 'Join 2,500 designers, engineers, and creative directors for three intense days of keynotes, masterclasses, and networking.'
        },
        schema: { date: 'text', title: 'text', desc: 'textarea' },
        html: `<section class="bg-black text-white py-24 px-8 text-center border-b border-neutral-800">
  <span class="text-xs font-mono text-fuchsia-400 tracking-widest uppercase mb-4 inline-block">{{date}}</span>
  <h1 class="text-4xl md:text-6xl font-black max-w-4xl mx-auto mb-6 tracking-tight leading-tight">{{title}}</h1>
  <p class="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          spk1: 'Elena Rostova - VP Design @ Horizon',
          spk2: 'Marcus Sterling - Head of Spatial @ Apex',
          spk3: 'Aria Chen - Founder @ Kinetic Labs'
        },
        schema: { spk1: 'text', spk2: 'text', spk3: 'text' },
        html: `<section class="bg-neutral-950 py-16 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white font-mono text-sm text-center" id="speakers">
  <div class="p-6 bg-neutral-900 border border-neutral-800 rounded-lg text-fuchsia-300">{{spk1}}</div>
  <div class="p-6 bg-neutral-900 border border-neutral-800 rounded-lg text-fuchsia-300">{{spk2}}</div>
  <div class="p-6 bg-neutral-900 border border-neutral-800 rounded-lg text-fuchsia-300">{{spk3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 DesignSummit Global LLC. Early bird pricing ends soon.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-black text-neutral-600 py-6 text-center text-xs font-mono border-t border-neutral-900">{{copy}}</footer>`
    }
  },

  {
    name: 'HyperGrowth Marketing',
    category: 'Landing Pages',
    description: 'Lead generation and B2B customer acquisition agency landing page with clear ROI-driven CTAs.',
    header: {
      default_data: { logo_text: 'HYPERGROWTH', nav1: 'Results', nav2: 'Method', cta: 'Request Audit' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-slate-900 text-white px-8 py-4 flex justify-between items-center border-b border-slate-800">
  <div class="font-extrabold text-xl text-yellow-400">{{logo_text}}</div>
  <div class="flex gap-6 text-sm text-slate-300">
    <a href="#results" class="hover:text-white transition">{{nav1}}</a>
    <a href="#method" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <a href="#audit" class="px-4 py-2 bg-yellow-400 text-slate-950 font-bold text-xs rounded">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'We Scale B2B Pipelines to $10M+ ARR',
          desc: 'Predictable paid acquisition, outbound email sequences, and high-converting funnel optimization for Series A and B startups.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-slate-900 text-white py-20 px-8 text-center">
  <h1 class="text-4xl md:text-5xl font-black mb-4 tracking-tight">{{title}}</h1>
  <p class="text-slate-300 text-base max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          c1: '3.8x Average Return on Ad Spend',
          c2: '64% Lower Cost Per Qualified Lead',
          c3: '$85M+ Total Pipeline Generated'
        },
        schema: { c1: 'text', c2: 'text', c3: 'text' },
        html: `<section class="bg-slate-950 py-14 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white" id="results">
  <div class="p-6 bg-slate-900 border border-slate-800 rounded-xl font-bold text-yellow-400">{{c1}}</div>
  <div class="p-6 bg-slate-900 border border-slate-800 rounded-xl font-bold text-yellow-400">{{c2}}</div>
  <div class="p-6 bg-slate-900 border border-slate-800 rounded-xl font-bold text-yellow-400">{{c3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 HyperGrowth Acquisition Partners.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-slate-950 text-slate-600 py-6 text-center text-xs border-t border-slate-900">{{copy}}</footer>`
    }
  },

  {
    name: 'OrbitAI Workspace',
    category: 'Landing Pages',
    description: 'Modern product launch landing page for collaborative AI knowledge bases and team document assistants.',
    header: {
      default_data: { logo_text: 'ORBIT.AI', nav1: 'Use Cases', nav2: 'Integrations', cta: 'Try Orbit Free' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-zinc-950 text-white px-8 py-4 flex justify-between items-center border-b border-zinc-800">
  <div class="font-bold text-lg text-purple-400">{{logo_text}}</div>
  <div class="flex gap-6 text-xs text-zinc-300 uppercase tracking-widest font-mono">
    <a href="#uses" class="hover:text-white transition">{{nav1}}</a>
    <a href="#integrations" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <a href="#try" class="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'The AI Brain That Understands Your Whole Company',
          desc: 'Connect Slack, Google Docs, Notion, and GitHub. Get instant contextual answers, drafts, and summaries across your team\'s knowledge base.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-zinc-900 text-white py-20 px-8 text-center">
  <h1 class="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-tight">{{title}}</h1>
  <p class="text-zinc-300 text-base max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          feat1: 'Multi-Source Knowledge Graph',
          feat2: 'Enterprise Role-Based Permissions',
          feat3: 'Private Local LLM Deployment Option'
        },
        schema: { feat1: 'text', feat2: 'text', feat3: 'text' },
        html: `<section class="bg-zinc-950 py-14 px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center font-mono text-sm" id="uses">
  <div class="p-6 bg-zinc-900 border border-zinc-800 rounded-lg text-purple-300">{{feat1}}</div>
  <div class="p-6 bg-zinc-900 border border-zinc-800 rounded-lg text-purple-300">{{feat2}}</div>
  <div class="p-6 bg-zinc-900 border border-zinc-800 rounded-lg text-purple-300">{{feat3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 Orbit Technologies Inc. SOC2 Type II Certified.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-zinc-950 text-zinc-600 py-6 text-center text-xs border-t border-zinc-900">{{copy}}</footer>`
    }
  },

  // ==========================================
  // 7. EDUCATION (5 Templates)
  // ==========================================
  {
    name: 'SkillCraft Academy',
    category: 'Education',
    description: 'Modern online course academy offering live cohort-based bootcamps and certified masterclasses.',
    header: {
      default_data: { logo_text: 'SKILLCRAFT', nav1: 'Bootcamps', nav2: 'Curriculum', nav3: 'Mentors', cta: 'Enroll Now' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', nav3: 'text', cta: 'text' },
      html: `<header class="bg-white border-b border-gray-100 py-4 px-8 flex justify-between items-center sticky top-0 z-50">
  <div class="text-xl font-extrabold text-blue-700 tracking-tight">{{logo_text}}</div>
  <nav class="hidden md:flex gap-8 text-sm font-semibold text-gray-600">
    <a href="#bootcamps" class="hover:text-blue-600 transition">{{nav1}}</a>
    <a href="#curriculum" class="hover:text-blue-600 transition">{{nav2}}</a>
    <a href="#mentors" class="hover:text-blue-600 transition">{{nav3}}</a>
  </nav>
  <a href="#enroll" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          badge: 'NEXT COHORT STARTS JUNE 1',
          title: 'Master Real-World Engineering from Industry Staff Mentors',
          desc: '12-week intensive cohorts designed with engineering leads from Google, Stripe, and Figma. 94% job placement rate.'
        },
        schema: { badge: 'text', title: 'text', desc: 'textarea' },
        html: `<section class="bg-blue-50/60 py-24 px-8 text-center">
  <div class="max-w-4xl mx-auto">
    <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 font-bold text-xs rounded-full mb-6">{{badge}}</span>
    <h1 class="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight">{{title}}</h1>
    <p class="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">{{desc}}</p>
  </div>
</section>`
      },
      {
        order: 100,
        default_data: {
          track1: 'AI & Large Language Models Track', dur1: '12 Weeks • Live Classes',
          track2: 'Cloud & Kubernetes Engineering', dur2: '10 Weeks • Hands-on Labs',
          track3: 'Modern Full-Stack Architecture', dur3: '14 Weeks • Portfolio Projects'
        },
        schema: { track1: 'text', dur1: 'text', track2: 'text', dur2: 'text', track3: 'text', dur3: 'text' },
        html: `<section class="py-16 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6" id="bootcamps">
  <div class="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
    <span class="text-xs text-blue-600 font-bold">{{dur1}}</span>
    <h3 class="font-bold text-lg text-gray-900 mt-2">{{track1}}</h3>
  </div>
  <div class="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
    <span class="text-xs text-blue-600 font-bold">{{dur2}}</span>
    <h3 class="font-bold text-lg text-gray-900 mt-2">{{track2}}</h3>
  </div>
  <div class="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
    <span class="text-xs text-blue-600 font-bold">{{dur3}}</span>
    <h3 class="font-bold text-lg text-gray-900 mt-2">{{track3}}</h3>
  </div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 SkillCraft Academy Inc. Accredited tech education.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-gray-900 text-gray-400 py-8 px-8 text-center text-xs">{{copy}}</footer>`
    }
  },

  {
    name: 'PrimePrep Institute',
    category: 'Education',
    description: 'Premier coaching institute for competitive STEM entrance exams, Olympiads, and university entrance.',
    header: {
      default_data: { logo_text: 'PRIMEPREP', nav1: 'Courses', nav2: 'Results', cta: 'Free Diagnostic Test' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-blue-950 text-white px-8 py-4 flex justify-between items-center border-b border-blue-900">
  <div class="font-bold text-lg text-amber-400">{{logo_text}}</div>
  <div class="flex gap-6 text-sm text-blue-200">
    <a href="#courses" class="hover:text-white transition">{{nav1}}</a>
    <a href="#results" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <a href="#test" class="px-4 py-2 bg-amber-400 text-blue-950 font-bold text-xs rounded">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Top-Rank Preparation with Master Mentors',
          desc: 'Personalized doubt-clearing sessions, weekly proctored mock exams, and comprehensive study modules.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-blue-900 text-white py-20 px-8 text-center">
  <h1 class="text-4xl md:text-5xl font-black mb-4">{{title}}</h1>
  <p class="text-blue-100 text-base max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          s1: 'Rank 1 in National Math Olympiad',
          s2: '89% Students Admitted to Top Choice Uni',
          s3: '1-on-1 Dedicated Academic Mentors'
        },
        schema: { s1: 'text', s2: 'text', s3: 'text' },
        html: `<section class="bg-blue-950 py-14 px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white font-bold" id="results">
  <div class="p-6 bg-blue-900/40 border border-blue-800 rounded-lg text-amber-300">{{s1}}</div>
  <div class="p-6 bg-blue-900/40 border border-blue-800 rounded-lg text-amber-300">{{s2}}</div>
  <div class="p-6 bg-blue-900/40 border border-blue-800 rounded-lg text-amber-300">{{s3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 PrimePrep Coaching Institute. Excellence in Learning.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-blue-950 text-blue-400 py-6 text-center text-xs border-t border-blue-900">{{copy}}</footer>`
    }
  },

  {
    name: 'Oakridge Academy',
    category: 'Education',
    description: 'Prestigious private K-12 preparatory academy fostering academic rigor, arts, and athletic excellence.',
    header: {
      default_data: { logo_text: 'OAKRIDGE ACADEMY', nav1: 'Academics', nav2: 'Campus Life', cta: 'Admissions' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-stone-900 text-stone-100 px-8 py-5 border-b border-stone-800 flex justify-between items-center">
  <div class="font-serif text-lg font-bold text-amber-200">{{logo_text}}</div>
  <div class="flex gap-6 text-xs uppercase tracking-widest text-stone-300 font-serif">
    <a href="#academics" class="hover:text-amber-200 transition">{{nav1}}</a>
    <a href="#campus" class="hover:text-amber-200 transition">{{nav2}}</a>
  </div>
  <a href="#admissions" class="px-5 py-2 border border-amber-300/40 text-amber-200 text-xs font-serif uppercase tracking-widest">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Cultivating Character, Curiosity, and Leadership',
          desc: 'Serving students from kindergarten through grade 12 on a historic 65-acre campus with state-of-the-art STEAM labs.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-stone-900 text-amber-50 py-24 px-8 text-center font-serif">
  <h1 class="text-4xl md:text-6xl font-light mb-4">{{title}}</h1>
  <p class="font-sans text-stone-300 text-base max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          p1: 'International Baccalaureate & AP Honors',
          p2: '10:1 Student-to-Faculty Mentorship Ratio',
          p3: 'Championship Athletics & Conservatory Arts'
        },
        schema: { p1: 'text', p2: 'text', p3: 'text' },
        html: `<section class="bg-stone-950 py-16 px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 font-serif text-amber-100 text-center" id="academics">
  <div class="p-6 border border-stone-800 rounded bg-stone-900/60">{{p1}}</div>
  <div class="p-6 border border-stone-800 rounded bg-stone-900/60">{{p2}}</div>
  <div class="p-6 border border-stone-800 rounded bg-stone-900/60">{{p3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 Oakridge Academy. Established 1912.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-stone-950 text-stone-500 py-6 text-center text-xs font-serif border-t border-stone-900">{{copy}}</footer>`
    }
  },

  {
    name: 'Horizon University',
    category: 'Education',
    description: 'World-renowned research university leading global breakthroughs in computational sciences and medicine.',
    header: {
      default_data: { logo_text: 'HORIZON UNIVERSITY', nav1: 'Colleges', nav2: 'Research', cta: 'Apply for 2026' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-slate-900 text-white px-8 py-4 flex justify-between items-center border-b border-slate-800">
  <div class="font-serif font-bold text-lg text-blue-300">{{logo_text}}</div>
  <div class="flex gap-6 text-xs text-slate-300 uppercase tracking-widest font-mono">
    <a href="#colleges" class="hover:text-white transition">{{nav1}}</a>
    <a href="#research" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <a href="#apply" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Advancing Knowledge, Transforming the World',
          desc: 'Consistently ranked among the top 15 global research universities with over $1.2B in annual sponsored research grants.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-slate-950 text-white py-20 px-8 text-center font-serif">
  <h1 class="text-4xl md:text-5xl font-normal mb-4">{{title}}</h1>
  <p class="font-sans text-slate-300 text-base max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          c1: 'College of Computing & AI',
          c2: 'School of Advanced Medicine',
          c3: 'Institute for Climate Solutions'
        },
        schema: { c1: 'text', c2: 'text', c3: 'text' },
        html: `<section class="bg-slate-900 py-14 px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white" id="colleges">
  <div class="p-6 bg-slate-950 border border-slate-800 rounded-lg text-blue-300 font-bold">{{c1}}</div>
  <div class="p-6 bg-slate-950 border border-slate-800 rounded-lg text-blue-300 font-bold">{{c2}}</div>
  <div class="p-6 bg-slate-950 border border-slate-800 rounded-lg text-blue-300 font-bold">{{c3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 The Board of Trustees of Horizon University.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-slate-950 text-slate-600 py-6 text-center text-xs border-t border-slate-900">{{copy}}</footer>`
    }
  },

  {
    name: 'CodeNext Bootcamp',
    category: 'Education',
    description: 'Immersive software engineering and cloud infrastructure bootcamp with income share agreements.',
    header: {
      default_data: { logo_text: 'CODENEXT', nav1: 'Syllabus', nav2: 'Careers', cta: 'Apply Today' },
      schema: { logo_text: 'text', nav1: 'text', nav2: 'text', cta: 'text' },
      html: `<header class="bg-zinc-950 text-white px-8 py-4 flex justify-between items-center border-b border-zinc-800">
  <div class="font-mono font-bold text-lg text-green-400">{{logo_text}}</div>
  <div class="flex gap-6 text-xs text-zinc-300 uppercase tracking-widest font-mono">
    <a href="#syllabus" class="hover:text-white transition">{{nav1}}</a>
    <a href="#careers" class="hover:text-white transition">{{nav2}}</a>
  </div>
  <a href="#apply" class="px-4 py-2 bg-green-500 hover:bg-green-400 text-zinc-950 font-bold text-xs rounded font-mono">{{cta}}</a>
</header>`
    },
    sections: [
      {
        order: 50,
        default_data: {
          title: 'Zero to Production-Ready Software Engineer in 16 Weeks',
          desc: 'Build real full-stack web applications with Node.js, Angular, PostgreSQL, and AWS. Pay zero tuition until you get hired.'
        },
        schema: { title: 'text', desc: 'textarea' },
        html: `<section class="bg-zinc-900 text-white py-20 px-8 text-center">
  <h1 class="text-4xl md:text-5xl font-black mb-4 font-mono">{{title}}</h1>
  <p class="text-zinc-300 text-base max-w-xl mx-auto leading-relaxed">{{desc}}</p>
</section>`
      },
      {
        order: 100,
        default_data: {
          h1: '$92,000 Median Graduate Starting Salary',
          h2: '500+ Hiring Partners in Tech',
          h3: '100% Remote or In-Person Cohorts'
        },
        schema: { h1: 'text', h2: 'text', h3: 'text' },
        html: `<section class="bg-zinc-950 py-14 px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center font-mono text-sm" id="careers">
  <div class="p-6 bg-zinc-900 border border-zinc-800 rounded-lg text-green-400">{{h1}}</div>
  <div class="p-6 bg-zinc-900 border border-zinc-800 rounded-lg text-green-400">{{h2}}</div>
  <div class="p-6 bg-zinc-900 border border-zinc-800 rounded-lg text-green-400">{{h3}}</div>
</section>`
      }
    ],
    footer: {
      default_data: { copy: '© 2026 CodeNext Academy. Learn to build, build to learn.' },
      schema: { copy: 'text' },
      html: `<footer class="bg-zinc-950 text-zinc-600 py-6 text-center text-xs font-mono border-t border-zinc-900">{{copy}}</footer>`
    }
  }
];

async function seed() {
  console.log(`Starting seed for ${templatesData.length} templates across 7 categories...`);
  const client = await db.getClient();

  try {
    let insertedCount = 0;
    let updatedCount = 0;

    for (const t of templatesData) {
      // Check if template already exists by exact name
      const existing = await client.query(
        `SELECT id FROM templates WHERE name = $1`,
        [t.name]
      );

      let templateId;

      if (existing.rows.length > 0) {
        templateId = existing.rows[0].id;
        // Update category and description if needed
        await client.query(
          `UPDATE templates SET category = $1, description = $2, updated_at = NOW() WHERE id = $3`,
          [t.category, t.description, templateId]
        );
        updatedCount++;
      } else {
        await client.query('BEGIN');
        const insertRes = await client.query(
          `INSERT INTO templates (name, category, description) VALUES ($1, $2, $3) RETURNING id`,
          [t.name, t.category, t.description]
        );
        templateId = insertRes.rows[0].id;

        // Create default Home page
        const pageRes = await client.query(
          `INSERT INTO pages (template_id, name, slug) VALUES ($1, 'Home', 'home') RETURNING id`,
          [templateId]
        );
        const homePageId = pageRes.rows[0].id;

        // Insert Header
        await client.query(
          `INSERT INTO sections (
            template_id, page_id, section_order, is_mandatory, section_type, section_html, changed_data, default_data, element_schema
          ) VALUES ($1, NULL, 10, true, 'header', $2, '{}', $3, $4)`,
          [templateId, t.header.html, t.header.default_data, t.header.schema]
        );

        // Insert Middle Sections
        for (const sec of t.sections) {
          await client.query(
            `INSERT INTO sections (
              template_id, page_id, section_order, is_mandatory, section_type, section_html, changed_data, default_data, element_schema
            ) VALUES ($1, $2, $3, false, 'other', $4, '{}', $5, $6)`,
            [templateId, homePageId, sec.order, sec.html, sec.default_data, sec.schema]
          );
        }

        // Insert Footer
        await client.query(
          `INSERT INTO sections (
            template_id, page_id, section_order, is_mandatory, section_type, section_html, changed_data, default_data, element_schema
          ) VALUES ($1, NULL, 1000, true, 'footer', $2, '{}', $3, $4)`,
          [templateId, t.footer.html, t.footer.default_data, t.footer.schema]
        );

        await client.query('COMMIT');
        insertedCount++;
      }
    }

    console.log(`Seeding complete! Inserted: ${insertedCount}, Updated: ${updatedCount}, Total curated: ${templatesData.length}`);

    // Verify category distribution
    const countRes = await client.query(`
      SELECT category, COUNT(*) as count 
      FROM templates 
      WHERE category IN ('Business', 'Portfolio', 'Restaurant & Cafe', 'E-commerce', 'Blog & Magazine', 'Landing Pages', 'Education')
      GROUP BY category
      ORDER BY count DESC
    `);
    console.log('Category distribution in database:', countRes.rows);

    process.exit(0);
  } catch (err) {
    await client.query('ROLLBACK').catch(() => {});
    console.error('Seeding failed:', err);
    process.exit(1);
  } finally {
    client.release();
  }
}

seed();
