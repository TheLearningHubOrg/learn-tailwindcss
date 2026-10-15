/**
 * Tailwind CSS Design Tokens & Class Variance Engine
 */

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

export function spacingToPixels(scale) {
  return scale * 4;
}

export function simulateMerge(base, override) {
  const tokens = base.split(' ').filter(Boolean);
  const overrideTokens = override.split(' ').filter(Boolean);
  const prefixMap = new Map();

  for (const t of [...tokens, ...overrideTokens]) {
    const prefix = t.split('-')[0]; // e.g. 'p', 'bg', 'text', 'rounded', 'border'
    prefixMap.set(prefix, t);
  }

  return Array.from(prefixMap.values()).join(' ');
}

/**
 * Class Variance Authority (CVA) Variant Resolver
 */
export function cva(baseClasses, config = {}) {
  const { variants = {}, defaultVariants = {} } = config;

  return function (props = {}) {
    const resolvedProps = { ...defaultVariants, ...props };
    const classes = [baseClasses];

    for (const [variantKey, variantOptions] of Object.entries(variants)) {
      const selectedOption = resolvedProps[variantKey];
      if (selectedOption && variantOptions[selectedOption]) {
        classes.push(variantOptions[selectedOption]);
      }
    }

    // Resolve any class overrides passed via className prop
    if (props.className) {
      return simulateMerge(classes.join(' '), props.className);
    }

    return classes.join(' ');
  };
}
