/**
 * Comparison / "alternative" page data for GEO/AEO.
 *
 * These pages target the exact prompt intents AI engines answer
 * ("best animated React component libraries", "Rithm UI vs …") so that
 * Rithm UI has a citable, quotable canonical source for each comparison.
 *
 * Competitor facts are kept factual and qualitative and reflect publicly
 * available information; each page renders a "last reviewed" disclaimer.
 */

export type CellValue = boolean | string;

export interface CompareRow {
  feature: string;
  rithm: CellValue;
  competitor: CellValue;
}

export interface Comparison {
  slug: string;
  competitor: string;
  competitorUrl: string;
  /** <title> */
  title: string;
  metaDescription: string;
  /** H1 */
  heading: string;
  /** Lead paragraph, also used verbatim in JSON-LD / summaries */
  intro: string;
  rithmPitch: string;
  competitorPitch: string;
  rows: CompareRow[];
  chooseRithm: string[];
  chooseCompetitor: string[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
}

const RITHM_TAGLINE =
  "Ship animated, accessible React & Next.js UIs in minutes. You get production-ready components that already move, own every line (copy-pasted into your repo), install with the shadcn CLI, and can add them from your editor via an MCP server — free and open source (MIT).";

export const comparisons: Comparison[] = [
  {
    slug: "rithm-ui-vs-aceternity",
    competitor: "Aceternity UI",
    competitorUrl: "https://ui.aceternity.com",
    title: "Rithm UI vs Aceternity UI — Animated React Components Compared",
    metaDescription:
      "Rithm UI vs Aceternity UI: an honest comparison of two animated React component libraries. Both are free and copy-paste; Rithm UI adds shadcn-CLI installs, an MCP server for AI assistants, and Radix-based accessibility.",
    heading: "Rithm UI vs Aceternity UI",
    intro:
      "Rithm UI and Aceternity UI are both free, animated React component libraries built with Tailwind CSS and Framer Motion. Aceternity is known for bold, marketing-grade hero animations; Rithm UI focuses on animated components you can drop into a real product, install through the shadcn CLI, and pull straight into your editor with an MCP server.",
    rithmPitch: RITHM_TAGLINE,
    competitorPitch:
      "A free collection of eye-catching, animation-heavy React components popular for landing pages and hero sections, with paid Pro templates.",
    rows: [
      { feature: "Price", rithm: "Free (MIT)", competitor: "Free · paid Pro templates" },
      { feature: "You own the code (copy-paste)", rithm: true, competitor: true },
      { feature: "Animated (Framer Motion)", rithm: true, competitor: true },
      { feature: "Install via shadcn CLI", rithm: "npx shadcn add @rithmui/…", competitor: "Copy-paste / registry" },
      { feature: "Built on shadcn/ui + Radix conventions", rithm: true, competitor: "Partial" },
      { feature: "Accessibility from Radix primitives", rithm: true, competitor: "Varies by component" },
      { feature: "MCP server for AI assistants (Cursor, Claude, Windsurf)", rithm: true, competitor: false },
      { feature: "TypeScript-first", rithm: true, competitor: true },
      { feature: "Dark mode", rithm: true, competitor: true },
      { feature: "Best fit", rithm: "Product UI + polished animation", competitor: "Landing-page hero effects" },
    ],
    chooseRithm: [
      "You want animated components that still fit a real product, not just a landing page.",
      "You already use shadcn/ui and want components that install with the same CLI.",
      "You want your AI assistant to pull components directly via an MCP server.",
      "Accessibility and Radix primitives matter to you.",
    ],
    chooseCompetitor: [
      "You need maximal, showy hero animations for a marketing page.",
      "You want Aceternity's specific signature effects.",
      "You're buying their Pro landing-page templates.",
    ],
    faqs: [
      {
        question: "Is Rithm UI a free alternative to Aceternity UI?",
        answer:
          "Yes. Rithm UI is free and open source under the MIT license. Components are copy-paste React and Tailwind files that you own, and you can install them with the shadcn CLI (npx shadcn add @rithmui/…).",
      },
      {
        question: "What is the main difference between Rithm UI and Aceternity UI?",
        answer:
          "Both are animated and built with Framer Motion. Aceternity leans toward bold landing-page and hero effects, while Rithm UI focuses on animated components for real products, follows shadcn/ui + Radix conventions for accessibility, and ships an MCP server so AI assistants can add components directly.",
      },
      {
        question: "Can I use Rithm UI and Aceternity UI together?",
        answer:
          "Yes. Both copy source into your repo as plain React and Tailwind, so you can mix components from either library in the same project.",
      },
    ],
    keywords: [
      "Rithm UI vs Aceternity",
      "Aceternity UI alternative",
      "animated React component library",
      "free Aceternity alternative",
      "Framer Motion components",
      "shadcn animated components",
    ],
  },
  {
    slug: "rithm-ui-vs-magic-ui",
    competitor: "Magic UI",
    competitorUrl: "https://magicui.design",
    title: "Rithm UI vs Magic UI — Animated Component Libraries Compared",
    metaDescription:
      "Rithm UI vs Magic UI: two free, animated React component libraries that work alongside shadcn/ui. Compare install flow, accessibility, AI/MCP support, and which to pick for your Next.js project.",
    heading: "Rithm UI vs Magic UI",
    intro:
      "Rithm UI and Magic UI are both free, open-source libraries of animated React components designed to sit alongside shadcn/ui and Tailwind CSS. They overlap heavily; the practical differences are in install flow, accessibility posture, and Rithm UI's MCP server for AI-assisted installs.",
    rithmPitch: RITHM_TAGLINE,
    competitorPitch:
      "A free, open-source set of animated components and effects that complements shadcn/ui, with a paid Pro template offering.",
    rows: [
      { feature: "Price", rithm: "Free (MIT)", competitor: "Free (MIT) · paid Pro" },
      { feature: "You own the code (copy-paste)", rithm: true, competitor: true },
      { feature: "Animated (Framer Motion)", rithm: true, competitor: true },
      { feature: "Works alongside shadcn/ui", rithm: true, competitor: true },
      { feature: "Install via shadcn CLI", rithm: "npx shadcn add @rithmui/…", competitor: "npx shadcn add / copy-paste" },
      { feature: "Radix-based accessibility", rithm: true, competitor: "Varies by component" },
      { feature: "MCP server for AI assistants", rithm: true, competitor: false },
      { feature: "TypeScript-first", rithm: true, competitor: true },
      { feature: "Dark mode", rithm: true, competitor: true },
      { feature: "Focus", rithm: "Product-ready animated UI", competitor: "Landing & marketing effects" },
    ],
    chooseRithm: [
      "You want animated components plus an MCP server for AI-assisted installs.",
      "You value Radix primitives and accessibility conventions.",
      "You want a single shadcn-style CLI flow for everything.",
    ],
    chooseCompetitor: [
      "You specifically want Magic UI's catalog of effects.",
      "You're purchasing Magic UI Pro templates.",
      "A component you need only exists in Magic UI today.",
    ],
    faqs: [
      {
        question: "Is Rithm UI a good Magic UI alternative?",
        answer:
          "Yes. Rithm UI is a free, MIT-licensed animated component library that, like Magic UI, works alongside shadcn/ui and Tailwind CSS. Rithm UI adds an MCP server so AI assistants can add components directly and follows Radix conventions for accessibility.",
      },
      {
        question: "Can I use Magic UI and Rithm UI in the same project?",
        answer:
          "Yes. Both are copy-paste React and Tailwind components you own, so they coexist in the same Next.js project without conflict.",
      },
      {
        question: "Which is better for a production app, Rithm UI or Magic UI?",
        answer:
          "Both are production-usable. Rithm UI emphasizes accessible, product-ready components with a shadcn-CLI install flow and AI/MCP support; Magic UI emphasizes a broad catalog of animated effects. Pick based on the specific components and workflow you need.",
      },
    ],
    keywords: [
      "Rithm UI vs Magic UI",
      "Magic UI alternative",
      "free animated React components",
      "shadcn compatible components",
      "Magic UI vs shadcn",
      "React animation library",
    ],
  },
  {
    slug: "rithm-ui-vs-shadcn",
    competitor: "shadcn/ui",
    competitorUrl: "https://ui.shadcn.com",
    title: "Rithm UI vs shadcn/ui — How They Compare (and Work Together)",
    metaDescription:
      "Rithm UI vs shadcn/ui: shadcn/ui is the unstyled Radix + Tailwind foundation; Rithm UI extends it with animated, production-ready components installable through the same CLI. Use them together.",
    heading: "Rithm UI vs shadcn/ui",
    intro:
      "shadcn/ui is the de-facto foundation for React + Tailwind UIs — copy-paste, unstyled primitives built on Radix. Rithm UI is built on the same conventions and extends them with animated, higher-level, production-ready components. This isn't really either/or: Rithm UI installs with the shadcn CLI and drops into an existing shadcn project.",
    rithmPitch: RITHM_TAGLINE,
    competitorPitch:
      "The widely adopted, free, open-source foundation of copy-paste React components built on Radix UI and Tailwind CSS — minimal and unopinionated by design.",
    rows: [
      { feature: "Price", rithm: "Free (MIT)", competitor: "Free (MIT)" },
      { feature: "You own the code (copy-paste)", rithm: true, competitor: true },
      { feature: "Built on Radix UI + Tailwind", rithm: true, competitor: true },
      { feature: "Install via shadcn CLI", rithm: true, competitor: true },
      { feature: "Animated components (Framer Motion) out of the box", rithm: true, competitor: false },
      { feature: "Higher-level / composed components", rithm: true, competitor: "Primitives-focused" },
      { feature: "MCP server for AI assistants", rithm: true, competitor: false },
      { feature: "Drops into an existing shadcn project", rithm: true, competitor: "—" },
      { feature: "Ecosystem size", rithm: "Growing", competitor: "Very large" },
      { feature: "Best used as", rithm: "Animated layer on top of shadcn", competitor: "Your base component layer" },
    ],
    chooseRithm: [
      "You already use shadcn/ui and want animated, ready-made components on top.",
      "You want motion and polish without wiring Framer Motion yourself.",
      "You want AI assistants to add components via MCP.",
    ],
    chooseCompetitor: [
      "You want an unopinionated, minimal base to style entirely yourself.",
      "You need the broadest possible ecosystem and community.",
      "You don't want animation dependencies in your base layer.",
    ],
    faqs: [
      {
        question: "Is Rithm UI built on shadcn/ui?",
        answer:
          "Yes. Rithm UI follows shadcn/ui and Radix conventions, installs with the shadcn CLI (npx shadcn add @rithmui/…), and drops straight into an existing shadcn project.",
      },
      {
        question: "Should I use Rithm UI or shadcn/ui?",
        answer:
          "Use both. shadcn/ui is the minimal Radix + Tailwind foundation; Rithm UI adds animated, higher-level components on top through the same CLI. They're complementary rather than competing.",
      },
      {
        question: "What does Rithm UI add over shadcn/ui?",
        answer:
          "Animated components (Framer Motion) out of the box, more composed/higher-level components, and an MCP server so AI assistants like Cursor and Claude can add components directly — all while keeping shadcn's copy-paste, you-own-the-code model.",
      },
    ],
    keywords: [
      "Rithm UI vs shadcn",
      "shadcn ui alternative",
      "shadcn animated components",
      "components built on shadcn",
      "shadcn compatible library",
      "extend shadcn ui",
    ],
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
