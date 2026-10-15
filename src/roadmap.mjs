/**
 * The Learning Hub - Tailwind CSS v4 & Modern Utility Design System Roadmap
 */

export const TAILWIND_STAGES = [
  {
    stageNumber: 1,
    title: "Absolute Beginner Foundations & The Utility-First Architecture",
    domainFocus: "Atomic utilities vs BEM semantics, bundle size plateauing, core configuration",
    completed: true,
    keyTopics: ["Atomic Utility Philosophy", "Eliminating Dead CSS", "Standard 4px Spacing Multiplier", "CSS Specificity Flattener"]
  },
  {
    stageNumber: 2,
    title: "Core Utility Taxonomy & Responsive Layout Systems",
    domainFocus: "Mobile-first breakpoints (sm/md/lg/xl/2xl), Flexbox, CSS Grid auto-fit/auto-fill",
    completed: true,
    keyTopics: ["Mobile-First Breakpoint Invariants", "CSS Grid Template Columns", "Subgrid & Aspect Ratio", "Arbitrary Values [value]"]
  },
  {
    stageNumber: 3,
    title: "Pseudo-Variants, Parent-Child States & Container Queries",
    domainFocus: "hover, focus-visible, active, disabled, group-hover, peer-checked, container queries (@sm, @md)",
    completed: true,
    keyTopics: ["group and peer Variants", "has-[] Parent Selectors", "Container Queries (@container)", "Motion Safe & Dark Variants"]
  },
  {
    stageNumber: 4,
    title: "Dark Mode, OKLCH Theming & Design Token Engineering",
    domainFocus: "OKLCH perceptually uniform color space, CSS custom property theming, class vs media dark mode",
    completed: true,
    keyTopics: ["OKLCH Color Gamut", "Theme Switching (class vs prefers-color-scheme)", "Design Tokens via CSS Variables", "Semantic Color Palettes"]
  },
  {
    stageNumber: 5,
    title: "Component Encapsulation, CVA & The cn() Utility Pattern",
    domainFocus: "Class Variance Authority (CVA), tailwind-merge collision handling, clsx conditional joiner",
    completed: true,
    keyTopics: ["CVA Variant Tables", "tailwind-merge AST Conflict Resolution", "Compound Variants", "Headless UI Composition"]
  },
  {
    stageNumber: 6,
    title: "Tailwind v4 Oxide Engine, Plugins & Build Optimization",
    domainFocus: "Rust-powered Oxide engine, lightningcss integration, zero-config imports, content scanning",
    completed: true,
    keyTopics: ["Oxide AST Scanner", "LightningCSS Post-processing", "Zero-config @import 'tailwindcss'", "Purging Unused Utilities"]
  },
  {
    stageNumber: 7,
    title: "Staff Frontend Interview Handbook & Production Cheatsheet",
    domainFocus: "40+ staff scenario Q&As, CSS cascade conflicts, layout thrashing, micro-bundle distribution",
    completed: true,
    keyTopics: ["Critical CSS Extraction", "Cumulative Layout Shift (CLS) Prevention", "Component Design System Governance", "Enterprise Cheatsheet"]
  }
];

export function getCompletedCount() {
  return TAILWIND_STAGES.filter(s => s.completed).length;
}

export function getProgressPercentage() {
  return Math.round((getCompletedCount() / TAILWIND_STAGES.length) * 100);
}
