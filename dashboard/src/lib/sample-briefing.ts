export type Velocity = "growing" | "stable" | "long-standing";

export type PainPoint = {
  id: string;
  title: string;
  whoFeelsIt: string;
  signalStrength: number;
  velocity: Velocity;
  summary: string;
  evidence: string[];
};

export type Idea = {
  id: string;
  title: string;
  summary: string;
  linkedPainPoint: string;
  whoIsTrying: string;
  angle: string;
};

export const sampleBriefing = {
  id: "demo-briefing",
  title: "Tooling friction is eating newsroom time.",
  focusLabel: "Tooling & Workflow",
  publishedAt: "March 19, 2026",
  sourceCount: 8,
  imageUrl: "/editorial-hero.svg",
  signals: [
    "Tooling complaints cluster around fragmented workflows, not individual apps — integration is the real pain.",
    "Independent publishers and small newsroom teams report the steepest friction, lacking engineering resources to bridge tool gaps.",
    "CMS frustration often masks deeper approval-chain and staffing issues hiding underneath the surface.",
  ],
  intro:
    "An industry pulse, ranked pain points, starting points, and a raw evidence trail. Built for people who build the news.",
  industryPulse:
    "Across journalism sources, tooling complaints are less about one bad app and more about fragmented workflows. Editors, reporters, and independent publishers are stitching together brittle systems that slow publishing and make collaboration expensive.",
  yourLens:
    "Early Meridian runs should make it obvious when a briefing was steered by a human hunch rather than passively summarized from a feed.",
  painPoints: [
    {
      id: "cms-friction",
      title: "Clunky publishing systems force manual workarounds.",
      whoFeelsIt: "Editors, reporters, and audience teams",
      signalStrength: 9,
      velocity: "growing" as const,
      summary:
        "Teams describe legacy CMS and approval flows as slow, error-prone, and hostile to modern publishing formats.",
      evidence: [
        "Editors report duplicating work across CMS, newsletter, and social publishing tools.",
        "Writers describe preview and revision flows that break under deadline pressure.",
      ],
    },
    {
      id: "fragmented-collaboration",
      title: "Collaboration happens across too many disconnected tools.",
      whoFeelsIt: "Small newsroom teams and independent publishers",
      signalStrength: 7,
      velocity: "stable" as const,
      summary:
        "Slack, Docs, CMS notes, and spreadsheets all hold part of the process, which makes handoffs fragile and institutional knowledge thin.",
      evidence: [
        "Independent operators mention publishing checklists living in private docs instead of shared systems.",
        "Newsroom staff describe losing context when edits move between chat, docs, and CMS comments.",
      ],
    },
  ],
  ideas: [
    {
      id: "workflow-orchestrator",
      title: "A newsroom workflow layer that sits above the CMS.",
      summary:
        "A thin coordination product could track story state, approvals, and downstream publish targets without asking teams to replace their core CMS immediately.",
      linkedPainPoint: "Clunky publishing systems force manual workarounds.",
      whoIsTrying: "General editorial workflow tools, but not many newsroom-specific products.",
      angle:
        "Treat newsletter, homepage, and social outputs as parallel release targets instead of afterthoughts.",
    },
    {
      id: "ops-memory",
      title: "An institutional memory tool for repeat editorial operations.",
      summary:
        "Capture recurring launch steps, edge cases, and role-specific notes so small teams do not rebuild the same process every week.",
      linkedPainPoint: "Collaboration happens across too many disconnected tools.",
      whoIsTrying: "Generic knowledge-base tools, though they are rarely adapted to newsroom cadence.",
      angle:
        "Focus on deadline-critical checklists and incident recovery rather than generic documentation.",
    },
  ],
  rabbitHole: {
    sources: [
      "Nieman Lab coverage on newsroom systems and workflow constraints",
      "Poynter reporting on AI-assisted editorial operations",
      "r/journalism threads from practitioners describing day-to-day tool pain",
    ],
    communities: ["r/journalism", "Local newsroom operators", "Newsletter-first publishers"],
    relatedReading: [
      "Look for cases where distribution tooling, not writing, creates the bottleneck.",
      "Watch for signs that CMS frustration is really an approval-chain or staffing issue in disguise.",
    ],
  },
};
