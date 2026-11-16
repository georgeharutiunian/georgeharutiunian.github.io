/* ============================================================
   ALL SITE CONTENT LIVES HERE. Edit text, numbers and links below.
   The page renders from this object.
   ============================================================ */
window.CONTENT = {
  name: "George Harutyunyan",
  email: "georgeharutiunian@gmail.com",
  linkedin: "https://www.linkedin.com/in/georgeharutiunian",
  cv: "assets/cv/George-Harutyunyan-CV.pdf",
  // Set to e.g. "assets/img/headshot.jpg" once you add a photo. Leave "" to show the GH monogram.
  headshot: "assets/img/headshot.jpg",

  hero: {
    eyebrow: "Account Executive · B2B SaaS · Mid-Market",
    headline: "I build pipeline from zero, and I close it.",
    // Alternate headlines:
    // "I find my own deals and beat quota."
    // "Full-cycle AE. Self-sourced pipeline. Quota beaten in every AE role."
    intro: "5 years in B2B sales, 3+ as a full-cycle Account Executive. I sell SaaS and tech to mid-market companies in the US, Europe and the Gulf, from the first cold touch to the signed contract.",
    showStatus: true,
    status: "Based in Yerevan · Open to remote and relocation"
  },

  proof: [
    { prefix: "~$", value: 1.4, decimals: 1, suffix: "M", label: "closed", sub: "majority self-sourced" },
    { prefix: "$", value: 2.2, decimals: 1, suffix: "M+", label: "revenue influenced", sub: "" },
    { prefix: "", value: 111, decimals: 0, suffix: "–160%", label: "of quota", sub: "in every AE role" },
    { prefix: "", value: 9, decimals: 0, suffix: "", label: "new B2B partners", sub: "in 6 months at 10Web" }
  ],
  proofRow: ["Deal size ~$30K–$180K ACV", "Sales cycles 4–8 weeks", "Markets: US · Europe · Gulf"],
  marquee: ["10Web", "Your Software Supplier", "Solicy", "Zocdoc", "TCO Team"],

  about: {
    story: "I started as an SDR booking meetings for a software studio in Yerevan. At Zocdoc in New York I was promoted to Account Executive after 4 months. Since then I have run full-cycle deals for a US health marketplace, a UAE software company, a Dutch software marketplace and now 10Web, where I built the first outbound motion into hosting companies from zero.",
    industries: ["B2B SaaS", "Website builder & hosting", "Healthcare tech", "FinTech & crypto", "Custom software & outstaffing"],
    markets: ["United States", "Europe", "UAE / Gulf", "Armenia"],
    howISell: [
      ["Self-source first", "trigger-based outbound across calls, email and LinkedIn."],
      ["Qualify hard", "MEDDPICC-certified discovery, multi-threaded with founders, CTOs and product leads."],
      ["Grow the account", "turn one-off deals into recurring contracts."]
    ],
    apart: [
      ["Built from zero", "The first outbound motion into hosting companies at 10Web."],
      ["Both sides of the funnel", "SDR roots, AE results, and I supervised 6 SDRs."],
      ["AI-assisted prospecting", "Designed a workflow with Sales Navigator, a custom AI browser extension, Apollo and HubSpot."],
      ["International", "Sold to US, European and Gulf mid-market. English, Russian, Armenian."]
    ]
  },

  quotaChart: [
    { role: "Zocdoc", value: 111, label: "111%" },
    { role: "Solicy", value: 118, label: "~118%" },
    { role: "10Web", value: 150, label: "150%" },
    { role: "Your Software Supplier", value: 160, label: "~160%" }
  ],
  results: [
    { big: "150%", text: "of quota: 9 partners in 6 selling months at 10Web (~$270K at ~$30K ACV)", size: "lg" },
    { big: "~160%", text: "of quota: ~$480K ARR vs ~$300K quota at Your Software Supplier (part-time)", size: "lg" },
    { big: "~118%", text: "of quota: ~$470K new business over 24 months at Solicy" },
    { big: "111%", text: "of full-year quota in 9 months: $200K ARR at Zocdoc" },
    { big: "~$850K", text: "upsell & cross-sell from accounts I opened (influenced): Solicy", size: "wide" },
    { big: "+45%", text: "pipeline in my first 12 months: Solicy" },
    { big: "2x", text: "qualified meetings per month from the 6 SDRs I supervised: Solicy" },
    { big: "30%+", text: "discovery-to-close rate: 10Web" },
    { big: "4 months", text: "SDR to AE: Zocdoc" }
  ],

  experience: [
    { role: "Account Executive", company: "10Web", dates: "Feb 2026 – Present",
      note: "AI agentic website builder and hosting, 2M+ websites",
      meta: "Yerevan, on-site, full-time", quota: "Quota: 1 new B2B partner per month",
      bullets: [
        "Signed 9 new B2B partners in 6 selling months vs a target of 1 per month (150% of quota), ~$30K ACV each (~$270K), after a 2-month ramp.",
        "Built the company's first outbound motion into hosting companies, its top growth segment, from target list to first signed partner.",
        "Designed the prospecting workflow (Sales Navigator, custom AI browser extension, Apollo, HubSpot): less manual list-building, more qualified outbound.",
        "Run MEDDPICC discovery, demo and qualification calls with hosting companies, web agencies, MSPs and SaaS platforms, with a 30%+ discovery-to-close rate."
      ], tags: ["Outbound", "Partnerships", "MEDDPICC", "HubSpot"] },
    { role: "Account Executive (part-time contract)", company: "Your Software Supplier", dates: "Jun 2024 – Jan 2026",
      note: "Amsterdam software marketplace, 1,800+ clients a year",
      meta: "Remote, 10–12 hrs/week, evenings", quota: "Partner referral channel",
      bullets: [
        "Closed ~$480K ARR vs a ~$300K quota (~160%) over 20 months with European mid-market accounts, on one-year contracts.",
        "Worked a high-velocity flow of partner-booked discovery calls with a ~20% call-to-close rate.",
        "Owned every deal from handoff to proposal, negotiation and signature. Kept CRM data and forecasts clean."
      ], tags: ["Mid-market", "Europe", "High velocity"] },
    { role: "Full-Cycle Account Executive", company: "Solicy", dates: "Nov 2023 – Jan 2026",
      note: "AI and blockchain software development, 45+ projects",
      meta: "Abu Dhabi, UAE (remote from Yerevan), full-time", quota: "~$200K annual quota, 4–6 week cycles",
      bullets: [
        "Brought in ~$470K new business over 24 months (~118% of quota), selling dApps, smart contracts and mobile apps to FinTech and crypto clients.",
        "Opened accounts that later drove ~$850K in upsell and cross-sell (influenced, not closed by me).",
        "Grew pipeline 45% in the first 12 months through my own outbound and multi-threaded discovery with founders, CTOs and product leads.",
        "Moved the model from one-off projects (~$30K–$50K) to developer outstaffing subscriptions (~$180K/year per client).",
        "Supervised 6 SDRs and doubled qualified meetings per month through call coaching and 1:1s. Set up messaging and forecasting cadences that cut forecast variance."
      ], tags: ["FinTech", "Crypto", "Team lead", "Recurring revenue"] },
    { role: "Account Executive (promoted from SDR)", company: "Zocdoc", dates: "Sep 2022 – Oct 2023",
      note: "Leading US health marketplace",
      meta: "New York City, on-site, full-time", quota: "$180K annual AE quota",
      bullets: [
        "AE (9 months): $200K ARR from B2B SaaS deals with US healthcare providers, 111% of the full-year quota in 9 months.",
        "Ran mid-market and enterprise pipeline in Salesforce, Sales Navigator and ZoomInfo, from first outreach to close.",
        "Shared 10 high-impact mid-market feature requests with product, which helped lift segment adoption by 20%.",
        "SDR (4 months): grew from 2 to the 5-meeting monthly target by month 4. Promoted for strong consultative discovery."
      ], tags: ["US market", "Healthcare SaaS", "Salesforce"] },
    { role: "Sales Development Representative", company: "TCO Team", dates: "Jul 2021 – Jul 2022",
      note: "Web and mobile development company, 80+ clients",
      meta: "Yerevan, on-site, full-time", quota: "Quota: 3 qualified meetings per month",
      bullets: [
        "Hit 3 qualified meetings a month from month 7, then booked 4–5 a month in the final 4 months (up to ~165% of quota).",
        "Added sales intelligence tools to outbound and trained 4 teammates on them.",
        "Helped open two new verticals: FinTech and e-commerce SMBs.",
        "Prepared outsourcing and staff augmentation proposals."
      ], tags: ["Outbound", "New verticals"] }
  ],

  cases: [
    { tag: "10Web", title: "Opening a new segment from zero",
      challenge: "No outbound motion into hosting companies, the top growth segment.",
      did: "Built the target list, the AI-assisted prospecting workflow and the MEDDPICC discovery process.",
      result: "9 partners in 6 selling months, 150% of quota." },
    { tag: "Solicy", title: "From projects to subscriptions",
      challenge: "One-off project deals of ~$30K–$50K.",
      did: "Repositioned the offer as recurring developer outstaffing.",
      result: "~$180K/year per client and ~$850K influenced upsell and cross-sell." },
    { tag: "Zocdoc", title: "SDR to quota-beating AE in one year",
      challenge: "New to the US healthcare market.",
      did: "Went from 2 to 5 meetings a month as an SDR, got promoted in 4 months, then ran full-cycle deals.",
      result: "111% of the full-year quota in 9 months." },
    { tag: "Your Software Supplier", title: "High-velocity partner channel, part-time",
      challenge: "Close fast with only 10–12 hours a week.",
      did: "Ran a daily discovery flow and owned every deal to signature.",
      result: "~160% of quota, ~$480K ARR." }
  ],
  testimonial: null, // e.g. { quote: "...", name: "...", title: "..." }

  skills: [
    ["Outbound & qualification", ["Cold calling", "Cold email", "LinkedIn outreach", "Trigger-based prospecting", "Pipeline generation", "Multi-threading", "MEDDPICC / BANT", "Discovery calls", "Product demos", "Objection handling", "Consultative selling"]],
    ["Closing & account growth", ["Proposal writing", "Contract negotiation", "Closing", "New business development", "Account management", "Upselling & cross-selling", "Customer retention", "Stakeholder management"]],
    ["Data & reporting", ["Pipeline management", "Lead scoring", "Forecasting", "Quota tracking", "CRM hygiene", "Excel / Google Sheets"]]
  ],
  stack: ["HubSpot", "Salesforce", "Apollo", "LinkedIn Sales Navigator", "ZoomInfo", "Lemlist", "Clay", "Claude", "ChatGPT"],

  education: [
    ["Master of Management in Information Technologies (in progress)", "2025–2027 · University of Applied Sciences Zwickau (WHZ), Germany. Online, alongside full-time work."],
    ["Bachelor of Business Administration", "2021–2025 · Armenian State University of Economics (ASUE)"]
  ],
  certifications: [
    ["Full MEDDPICC Certification", "MEDDIC Academy (2026)"],
    ["AI Fluency", "Anthropic (2025)"],
    ["AI Framework & Foundations", "Anthropic (2025)"],
    ["Generative AI Mastermind", "Outskill (2025)"],
    ["B2B Sales and Marketing", "Coursera / University of Illinois (2022)"],
    ["Inbound Sales Certification", "HubSpot Academy (2022)"]
  ],
  languages: [["English", "Fluent"], ["Russian", "Professional"], ["Armenian", "Native"]],

  contact: {
    headline: "Hiring an Account Executive or BDM? Let's talk.",
    line: "Email is the fastest way to reach me."
  },
  footer: "© 2026 George Harutyunyan · Yerevan, Armenia"
};
