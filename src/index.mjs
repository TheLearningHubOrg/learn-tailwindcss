import { BREAKPOINTS, spacingToPixels, simulateMerge, cva } from './design-system/tokens.mjs';
import { TAILWIND_STAGES, getCompletedCount, getProgressPercentage } from './roadmap.mjs';

console.log('======================================================');
console.log('  The Learning Hub - Tailwind CSS v4 Design Systems');
console.log('======================================================');
console.log('Engine: Oxide Rust AST Compiler & LightningCSS');
console.log('Paradigm: Utility-First Atomic Design & Component Encapsulation\n');

// 1. Spacing and Breakpoints
console.log('--- 1. Responsive Breakpoints & 4px Spacing Scale ---');
Object.entries(BREAKPOINTS).forEach(([bp, width]) => {
  console.log(`  Breakpoint @${bp.padEnd(4)}: min-width ${width}`);
});

console.log('\nSpacing Multipliers:');
[1, 2, 4, 6, 8, 12, 16].forEach(unit => {
  console.log(`  p-${unit.toString().padEnd(2)} -> ${spacingToPixels(unit)}px (${spacingToPixels(unit) / 16}rem)`);
});

// 2. Class Variance Authority (CVA) Demo
console.log('\n--- 2. Class Variance Authority (CVA) Component Engine ---');
const button = cva('inline-flex items-center justify-center font-medium transition-colors', {
  variants: {
    intent: {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md',
      secondary: 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700',
      danger: 'bg-rose-600 text-white hover:bg-rose-700'
    },
    size: {
      sm: 'px-3 py-1.5 text-xs rounded-md',
      md: 'px-4 py-2 text-sm rounded-lg',
      lg: 'px-6 py-3 text-base rounded-xl'
    }
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md'
  }
});

console.log(`  Default Button:      "${button()}"`);
console.log(`  Secondary Sm Button: "${button({ intent: 'secondary', size: 'sm' })}"`);
console.log(`  Override with Class: "${button({ intent: 'primary', className: 'bg-emerald-600' })}"`);

// 3. Collision Resolution Demo
console.log('\n--- 3. Atomic Class Conflict Resolution (tailwind-merge) ---');
const resolvedConflict = simulateMerge('p-2 bg-red-500 rounded-md', 'p-6 bg-blue-600');
console.log(`  Base:     'p-2 bg-red-500 rounded-md'`);
console.log(`  Override: 'p-6 bg-blue-600'`);
console.log(`  Resolved: '${resolvedConflict}'\n`);

// 4. 7-Stage Pedagogical Roadmap
console.log('--- 4. 7-Stage Tailwind CSS Masterclass Roadmap ---');
for (const stage of TAILWIND_STAGES) {
  const icon = stage.completed ? '[OK]' : '[..]';
  console.log(` ${icon} Stage ${stage.stageNumber}: ${stage.title}`);
  console.log(`      Focus: ${stage.domainFocus}`);
  console.log(`      Topics: ${stage.keyTopics.join(', ')}`);
}

const completed = getCompletedCount();
const percent = getProgressPercentage();
console.log('------------------------------------------------------');
console.log(`Progress: ${completed}/7 Stages Complete (${percent}%)`);
console.log('======================================================\n');
