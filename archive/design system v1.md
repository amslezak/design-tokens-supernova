# NYU Langone Health Design Tokens

## Complete Design Studio Documentation

### Version 1.0.0 | Healthcare-Centered Design System

---

## Table of Contents

1. [Introduction](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#introduction)
2. [Design Token Philosophy](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#design-token-philosophy)
3. [Token Taxonomy](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#token-taxonomy)
4. [Core Design Tokens](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#core-design-tokens)
   * [Color System](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#color-system)
   * [Typography](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#typography)
   * [Spacing &amp; Layout](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#spacing--layout)
   * [Sizing](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#sizing)
   * [Borders &amp; Radius](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#borders--radius)
   * [Shadows &amp; Elevation](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#shadows--elevation)
   * [Motion &amp; Animation](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#motion--animation)
   * [Breakpoints &amp; Containers](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#breakpoints--containers)
5. [Semantic Design Tokens](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#semantic-design-tokens)
6. [Component Tokens](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#component-tokens)
7. [Healthcare-Specific Tokens](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#healthcare-specific-tokens)
8. [Accessibility Guidelines](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#accessibility-guidelines)
9. [Usage Examples](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#usage-examples)
10. [Token Maintenance](https://claude.ai/chat/3216bdb8-fa9d-4162-92ee-a1750a4d06a1#token-maintenance)

---

## Introduction

Design tokens are the visual atoms of our design system—the smallest, indivisible design decisions that create consistency across NYU Langone Health's digital experiences. They represent colors, typography, spacing, and other visual properties as reusable values that ensure every patient interaction reflects our commitment to accessible, empathetic, and innovative healthcare.

### Why Design Tokens Matter in Healthcare

In healthcare digital experiences, consistency isn't just about aesthetics—it's about patient safety, trust, and accessibility. Design tokens enable us to:

* **Ensure Accessibility** : Built-in WCAG 2.1 AA compliance across all visual decisions
* **Reduce Cognitive Load** : Consistent patterns help patients navigate complex medical information
* **Build Trust** : Unified visual language reinforces NYU Langone's professional excellence
* **Support Diverse Users** : Scalable design decisions accommodate varying abilities and contexts
* **Enable Innovation** : Flexible system supports emerging healthcare technologies

---

## Design Token Philosophy

### Guiding Principles

1. **Patient-First Design** : Every token decision prioritizes patient comprehension and comfort
2. **Universal Accessibility** : Tokens inherently support users with diverse abilities
3. **Clinical Efficiency** : Design decisions that streamline healthcare workflows
4. **Emotional Intelligence** : Visual properties that reduce anxiety and build confidence
5. **Scalable Excellence** : Tokens that grow with evolving healthcare needs

### Token Architecture

Our token system follows a three-tier hierarchy:

```
┌─────────────────────────────────────────────────────────┐
│                    Component Tokens                      │
│         (button.primary.background, card.padding)        │
├─────────────────────────────────────────────────────────┤
│                    Semantic Tokens                       │
│     (color.text.primary, space.component.padding)       │
├─────────────────────────────────────────────────────────┤
│                  Core/Primitive Tokens                   │
│        (color.purple.500, space.4, font.size.lg)        │
└─────────────────────────────────────────────────────────┘
```

---

## Token Taxonomy

### Naming Convention

We use a hierarchical naming system that promotes clarity and discoverability:

```
{category}.{property}.{variant}.{state}

Examples:
- color.brand.primary
- space.component.padding.large
- font.size.heading.xl
- motion.duration.standard
```

### Categories

* **color** : All color values including brand, semantic, and healthcare-specific
* **font** : Typography properties including families, sizes, weights, and line heights
* **space** : Spacing values for margins, padding, and gaps
* **size** : Component and layout dimensions
* **border** : Border widths, styles, and radius values
* **shadow** : Elevation and depth effects
* **motion** : Animation and transition properties
* **breakpoint** : Responsive design breakpoints

---

## Core Design Tokens

### Color System

Our color system balances professional healthcare aesthetics with warmth and accessibility. Each color includes contrast ratios and usage guidelines.

#### Brand Colors

```css
/* Primary Brand Colors */
--color-purple-50: #F3E5F5;    /* Background tint */
--color-purple-100: #E1BEE7;   /* Light accent */
--color-purple-200: #CE93D8;   /* Secondary elements */
--color-purple-300: #BA68C8;   /* Interactive hover */
--color-purple-400: #AB47BC;   /* Focus states */
--color-purple-500: #5E2E84;   /* NYU Langone Purple - Primary brand */
--color-purple-600: #7B1FA2;   /* Active states */
--color-purple-700: #6A1B9A;   /* Dark variant */
--color-purple-800: #4A148C;   /* High contrast text */
--color-purple-900: #2E0549;   /* Maximum contrast */

/* Healthcare Blue */
--color-blue-50: #E3F2FD;      /* Subtle backgrounds */
--color-blue-100: #BBDEFB;     /* Info alerts background */
--color-blue-200: #90CAF9;     /* Secondary buttons */
--color-blue-300: #64B5F6;     /* Links hover */
--color-blue-400: #42A5F5;     /* Interactive elements */
--color-blue-500: #00A1DF;     /* Healthcare Blue - Secondary brand */
--color-blue-600: #1E88E5;     /* Active links */
--color-blue-700: #1976D2;     /* Primary text links */
--color-blue-800: #1565C0;     /* Focus indicators */
--color-blue-900: #0D47A1;     /* High contrast */
```

#### Neutral Palette

```css
/* Gray Scale - Carefully calibrated for healthcare readability */
--color-gray-0: #FFFFFF;       /* Pure white - Primary background */
--color-gray-50: #FAFAFA;      /* Subtle background */
--color-gray-100: #F5F5F5;     /* Secondary background */
--color-gray-200: #EEEEEE;     /* Tertiary background */
--color-gray-300: #E0E0E0;     /* Borders */
--color-gray-400: #BDBDBD;     /* Disabled text */
--color-gray-500: #9E9E9E;     /* Secondary text */
--color-gray-600: #757575;     /* Tertiary text */
--color-gray-700: #616161;     /* Icons */
--color-gray-800: #424242;     /* Secondary text */
--color-gray-900: #212121;     /* Primary text - 12.6:1 contrast */
--color-gray-1000: #000000;    /* Pure black - Maximum contrast */
```

#### Semantic Colors

```css
/* Success - Positive outcomes, confirmations */
--color-green-50: #E8F5E9;     /* Success background */
--color-green-100: #C8E6C9;    /* Light success */
--color-green-500: #4CAF50;    /* Success default */
--color-green-700: #388E3C;    /* Success text */
--color-green-900: #1B5E20;    /* Success emphasis */

/* Warning - Caution, important notices */
--color-orange-50: #FFF3E0;    /* Warning background */
--color-orange-100: #FFE0B2;   /* Light warning */
--color-orange-500: #FF9800;   /* Warning default */
--color-orange-700: #F57C00;   /* Warning text - WCAG AA */
--color-orange-900: #E65100;   /* Warning emphasis */

/* Error - Critical alerts, errors */
--color-red-50: #FFEBEE;      /* Error background */
--color-red-100: #FFCDD2;     /* Light error */
--color-red-500: #F44336;     /* Error default */
--color-red-700: #D32F2F;     /* Error text - WCAG AA */
--color-red-900: #B71C1C;     /* Error emphasis */

/* Information - Neutral information */
--color-teal-50: #E0F2F1;     /* Info background */
--color-teal-100: #B2DFDB;    /* Light info */
--color-teal-500: #009688;    /* Info default */
--color-teal-700: #00796B;    /* Info text */
--color-teal-900: #004D40;    /* Info emphasis */
```

#### Healthcare-Specific Colors

```css
/* Clinical Status Indicators */
--color-status-stable: #2E7D32;      /* Normal vitals, stable condition */
--color-status-caution: #F57C00;     /* Requires attention */
--color-status-critical: #D32F2F;    /* Critical, urgent */
--color-status-unknown: #757575;     /* Data unavailable */

/* Medical Data Categories */
--color-data-medication: #1976D2;    /* Medications, prescriptions */
--color-data-vitals: #7B1FA2;        /* Vital signs */
--color-data-labs: #00796B;          /* Laboratory results */
--color-data-imaging: #5D4037;       /* Radiology, imaging */
--color-data-notes: #455A64;         /* Clinical notes */
```

### Typography

Typography in healthcare must balance professionalism with exceptional readability across diverse user populations.

#### Font Families

```css
/* Primary Font Stack - Optimized for screen reading */
--font-family-primary: 'Benton Sans', -apple-system, BlinkMacSystemFont, 
                       'Segoe UI', Roboto, 'Helvetica Neue', Arial, 
                       sans-serif;

/* Secondary Font Stack - For editorial content */
--font-family-secondary: 'Source Serif Pro', Georgia, 'Times New Roman', 
                         Times, serif;

/* Monospace Font Stack - For medical codes, IDs */
--font-family-mono: 'Source Code Pro', Monaco, Consolas, 'Courier New', 
                    monospace;
```

#### Font Sizes

```css
/* Base Font Sizes - Minimum 16px for body text */
--font-size-xs: 0.75rem;    /* 12px - Legal text only */
--font-size-sm: 0.875rem;   /* 14px - Secondary text */
--font-size-base: 1rem;     /* 16px - Body text */
--font-size-lg: 1.125rem;   /* 18px - Enhanced readability */
--font-size-xl: 1.25rem;    /* 20px - Subheadings */
--font-size-2xl: 1.5rem;    /* 24px - Section headers */
--font-size-3xl: 1.875rem;  /* 30px - Page headers */
--font-size-4xl: 2.25rem;   /* 36px - Major headers */
--font-size-5xl: 3rem;      /* 48px - Hero text */

/* Fluid Font Sizes - Responsive scaling */
--font-size-fluid-sm: clamp(0.875rem, 2vw, 1rem);
--font-size-fluid-base: clamp(1rem, 2.5vw, 1.125rem);
--font-size-fluid-lg: clamp(1.25rem, 3vw, 1.5rem);
--font-size-fluid-xl: clamp(1.875rem, 4vw, 2.25rem);
```

#### Font Weights

```css
/* Font Weights - Limited for clarity */
--font-weight-normal: 400;   /* Body text */
--font-weight-medium: 500;   /* Emphasis */
--font-weight-semibold: 600; /* Subheadings */
--font-weight-bold: 700;     /* Headers */
```

#### Line Heights

```css
/* Line Heights - Optimized for readability */
--line-height-tight: 1.25;   /* Headers */
--line-height-normal: 1.5;   /* Body text */
--line-height-relaxed: 1.75; /* Long-form content */
--line-height-loose: 2;      /* Enhanced accessibility */
```

#### Letter Spacing

```css
/* Letter Spacing - Subtle adjustments */
--letter-spacing-tight: -0.025em;  /* Display text */
--letter-spacing-normal: 0;        /* Body text */
--letter-spacing-wide: 0.025em;    /* All caps */
--letter-spacing-wider: 0.05em;    /* Labels */
```

### Spacing & Layout

Consistent spacing creates visual rhythm and improves content scanning in healthcare interfaces.

#### Base Spacing Scale

```css
/* 8px Grid System - Consistent spatial relationships */
--space-0: 0;          /* 0px */
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px - Base unit */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-7: 1.75rem;    /* 28px */
--space-8: 2rem;       /* 32px */
--space-9: 2.5rem;     /* 40px */
--space-10: 3rem;      /* 48px */
--space-11: 3.5rem;    /* 56px */
--space-12: 4rem;      /* 64px */
--space-14: 5rem;      /* 80px */
--space-16: 6rem;      /* 96px */
--space-20: 8rem;      /* 128px */
```

#### Layout Spacing

```css
/* Component Padding */
--space-component-xs: var(--space-2);   /* Compact components */
--space-component-sm: var(--space-3);   /* Small components */
--space-component-md: var(--space-4);   /* Default components */
--space-component-lg: var(--space-6);   /* Spacious components */
--space-component-xl: var(--space-8);   /* Hero sections */

/* Section Spacing */
--space-section-xs: var(--space-8);     /* Between related content */
--space-section-sm: var(--space-10);    /* Between sections */
--space-section-md: var(--space-12);    /* Major sections */
--space-section-lg: var(--space-16);    /* Page sections */
--space-section-xl: var(--space-20);    /* Hero spacing */
```

### Sizing

Sizing tokens ensure consistent dimensions and touch targets that meet healthcare accessibility standards.

#### Touch Targets

```css
/* Minimum Touch Target Sizes - WCAG 2.1 Compliant */
--size-touch-minimum: 1.5rem;      /* 24px - WCAG 2.2 AA */
--size-touch-standard: 2.75rem;    /* 44px - WCAG 2.1 AAA */
--size-touch-comfortable: 3rem;    /* 48px - Recommended */
--size-touch-large: 3.5rem;        /* 56px - Critical actions */
```

#### Icon Sizes

```css
/* Icon Dimensions */
--size-icon-xs: 1rem;       /* 16px - Inline icons */
--size-icon-sm: 1.25rem;    /* 20px - Button icons */
--size-icon-md: 1.5rem;     /* 24px - Default */
--size-icon-lg: 2rem;       /* 32px - Feature icons */
--size-icon-xl: 2.5rem;     /* 40px - Hero icons */
--size-icon-2xl: 3rem;      /* 48px - Illustrations */
```

#### Component Heights

```css
/* Standard Component Heights */
--size-component-xs: 2rem;      /* 32px - Compact inputs */
--size-component-sm: 2.5rem;    /* 40px - Small buttons */
--size-component-md: 3rem;      /* 48px - Default inputs */
--size-component-lg: 3.5rem;    /* 56px - Large buttons */
--size-component-xl: 4rem;      /* 64px - Hero CTAs */
```

#### Container Widths

```css
/* Container Maximum Widths */
--size-container-xs: 20rem;     /* 320px - Mobile minimum */
--size-container-sm: 30rem;     /* 480px - Small devices */
--size-container-md: 48rem;     /* 768px - Tablets */
--size-container-lg: 64rem;     /* 1024px - Desktop */
--size-container-xl: 80rem;     /* 1280px - Wide desktop */
--size-container-2xl: 96rem;    /* 1536px - Full HD */
--size-container-max: 120rem;   /* 1920px - Maximum width */
```

### Borders & Radius

Border tokens create consistent visual boundaries and rounded corners throughout the interface.

#### Border Widths

```css
/* Border Width Scale */
--border-width-none: 0;         /* No border */
--border-width-thin: 1px;       /* Default borders */
--border-width-medium: 2px;     /* Emphasis borders */
--border-width-thick: 3px;      /* Strong borders */
--border-width-heavy: 4px;      /* Focus indicators */
```

#### Border Radius

```css
/* Border Radius Scale */
--radius-none: 0;               /* Sharp corners */
--radius-sm: 0.25rem;          /* 4px - Subtle rounding */
--radius-md: 0.5rem;           /* 8px - Default */
--radius-lg: 0.75rem;          /* 12px - Cards */
--radius-xl: 1rem;             /* 16px - Modals */
--radius-2xl: 1.5rem;          /* 24px - Large components */
--radius-full: 9999px;         /* Pills, badges */
--radius-circle: 50%;          /* Perfect circles */
```

### Shadows & Elevation

Shadow tokens create depth hierarchy and visual separation in healthcare interfaces.

```css
/* Elevation Scale - Light Mode */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);        /* Subtle lift */
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.08);        /* Cards */
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.12);        /* Dropdowns */
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.16);       /* Modals */
--shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.20);      /* Popovers */
--shadow-2xl: 0 16px 32px rgba(0, 0, 0, 0.24);     /* Elevated panels */

/* Inner Shadows */
--shadow-inner-sm: inset 0 1px 2px rgba(0, 0, 0, 0.06);
--shadow-inner-md: inset 0 2px 4px rgba(0, 0, 0, 0.08);

/* Focus Shadow */
--shadow-focus: 0 0 0 3px rgba(94, 46, 132, 0.25); /* Purple focus ring */
```

### Motion & Animation

Motion tokens ensure consistent, accessible animations that don't distract from healthcare tasks.

#### Duration

```css
/* Animation Durations */
--duration-instant: 0ms;        /* No animation */
--duration-fast: 150ms;         /* Micro-interactions */
--duration-normal: 300ms;       /* Default transitions */
--duration-slow: 500ms;         /* Complex animations */
--duration-slower: 700ms;       /* Page transitions */
--duration-slowest: 1000ms;     /* Special effects */
```

#### Easing

```css
/* Easing Functions */
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

#### Transitions

```css
/* Standard Transitions */
--transition-colors: color, background-color, border-color;
--transition-opacity: opacity;
--transition-transform: transform;
--transition-all: all;

/* Timing */
--transition-timing-normal: var(--duration-normal) var(--ease-in-out);
--transition-timing-fast: var(--duration-fast) var(--ease-out);
```

### Breakpoints & Containers

Responsive design in modern healthcare interfaces requires both media queries (for viewport-based decisions) and container queries (for component-based adaptations).

#### Media Query Breakpoints

```css
/* Viewport Breakpoints - For layout decisions */
--breakpoint-xs: 0;          /* Mobile first */
--breakpoint-sm: 640px;      /* Small tablets */
--breakpoint-md: 768px;      /* Tablets */
--breakpoint-lg: 1024px;     /* Desktop */
--breakpoint-xl: 1280px;     /* Wide desktop */
--breakpoint-2xl: 1536px;    /* Full HD */

/* Container Padding */
--container-padding-xs: var(--space-4);  /* Mobile */
--container-padding-sm: var(--space-6);  /* Tablet */
--container-padding-md: var(--space-8);  /* Desktop */
--container-padding-lg: var(--space-10); /* Wide */
```

#### Container Query Breakpoints

```css
/* Container Breakpoints - For component adaptations */
--cq-xs: 20rem;     /* 320px - Minimum component width */
--cq-sm: 25rem;     /* 400px - Small components */
--cq-md: 30rem;     /* 480px - Medium components */
--cq-lg: 40rem;     /* 640px - Large components */
--cq-xl: 50rem;     /* 800px - Extra large components */
--cq-2xl: 60rem;    /* 960px - Full-width components */

/* Container Names - Semantic */
--container-card: card-container;
--container-sidebar: sidebar-container;
--container-content: content-container;
--container-modal: modal-container;
--container-form: form-container;

/* Container Types */
--container-type-default: inline-size;  /* Width-based queries */
--container-type-size: size;            /* Width and height queries */
--container-type-normal: normal;        /* No containment */
```

#### When to Use Each

 **Media Queries** : Use for page layout, navigation patterns, global typography scaling, and device-specific features.

 **Container Queries** : Use for component adaptations, sidebar widgets, modal content, and any component that appears in multiple contexts.

This hybrid approach ensures components work perfectly whether in a main content area, sidebar widget, or modal dialog—critical for complex medical interfaces.

---

## Semantic Design Tokens

Semantic tokens create meaningful connections between design intent and implementation.

### Text Colors

```css
/* Text Color Hierarchy */
--color-text-primary: var(--color-gray-900);      /* Primary content */
--color-text-secondary: var(--color-gray-700);    /* Supporting content */
--color-text-tertiary: var(--color-gray-600);     /* Metadata */
--color-text-disabled: var(--color-gray-400);     /* Disabled state */
--color-text-inverse: var(--color-gray-0);        /* On dark backgrounds */
--color-text-link: var(--color-blue-700);         /* Interactive links */
--color-text-link-hover: var(--color-blue-800);   /* Link hover state */
--color-text-error: var(--color-red-700);         /* Error messages */
--color-text-success: var(--color-green-700);     /* Success messages */
--color-text-warning: var(--color-orange-700);    /* Warning messages */
```

### Background Colors

```css
/* Background Hierarchy */
--color-background-primary: var(--color-gray-0);     /* Main background */
--color-background-secondary: var(--color-gray-50);  /* Sections */
--color-background-tertiary: var(--color-gray-100);  /* Nested content */
--color-background-inverse: var(--color-gray-900);   /* Dark sections */
--color-background-overlay: rgba(0, 0, 0, 0.5);     /* Modal backdrop */
```

### Interactive States

```css
/* Interactive Color States */
--color-interactive-primary: var(--color-purple-500);
--color-interactive-primary-hover: var(--color-purple-600);
--color-interactive-primary-active: var(--color-purple-700);
--color-interactive-secondary: var(--color-blue-500);
--color-interactive-secondary-hover: var(--color-blue-600);
--color-interactive-secondary-active: var(--color-blue-700);
```

---

## Component Tokens

Component-specific tokens ensure consistent implementation across the design system.

### Button Tokens

```css
/* Button Sizing */
--button-padding-x-sm: var(--space-3);
--button-padding-x-md: var(--space-4);
--button-padding-x-lg: var(--space-6);
--button-padding-y-sm: var(--space-2);
--button-padding-y-md: var(--space-3);
--button-padding-y-lg: var(--space-4);

/* Button Typography */
--button-font-size-sm: var(--font-size-sm);
--button-font-size-md: var(--font-size-base);
--button-font-size-lg: var(--font-size-lg);
--button-font-weight: var(--font-weight-semibold);

/* Button Borders */
--button-border-width: var(--border-width-medium);
--button-border-radius: var(--radius-md);

/* Primary Button */
--button-primary-background: var(--color-interactive-primary);
--button-primary-text: var(--color-text-inverse);
--button-primary-border: var(--color-interactive-primary);
--button-primary-hover-background: var(--color-interactive-primary-hover);
--button-primary-active-background: var(--color-interactive-primary-active);

/* Secondary Button */
--button-secondary-background: transparent;
--button-secondary-text: var(--color-interactive-primary);
--button-secondary-border: var(--color-interactive-primary);
--button-secondary-hover-background: var(--color-purple-50);
```

### Input Tokens

```css
/* Input Sizing */
--input-padding-x: var(--space-3);
--input-padding-y: var(--space-2);
--input-height-sm: var(--size-component-sm);
--input-height-md: var(--size-component-md);
--input-height-lg: var(--size-component-lg);

/* Input Styling */
--input-border-width: var(--border-width-thin);
--input-border-radius: var(--radius-md);
--input-font-size: var(--font-size-base);

/* Input Colors */
--input-background: var(--color-background-primary);
--input-border: var(--color-gray-300);
--input-text: var(--color-text-primary);
--input-placeholder: var(--color-text-tertiary);
--input-focus-border: var(--color-blue-500);
--input-error-border: var(--color-red-500);
--input-disabled-background: var(--color-background-tertiary);
```

### Card Tokens

```css
/* Card Structure */
--card-padding-sm: var(--space-4);
--card-padding-md: var(--space-6);
--card-padding-lg: var(--space-8);
--card-border-radius: var(--radius-lg);
--card-border-width: var(--border-width-thin);

/* Card Appearance */
--card-background: var(--color-background-primary);
--card-border: var(--color-gray-200);
--card-shadow: var(--shadow-sm);
--card-hover-shadow: var(--shadow-md);
```

---

## Healthcare-Specific Tokens

Specialized tokens for healthcare-specific interface patterns.

### Clinical Alerts

```css
/* Alert Structure */
--alert-padding: var(--space-4);
--alert-border-width: var(--border-width-thin);
--alert-border-radius: var(--radius-md);
--alert-icon-size: var(--size-icon-md);

/* Critical Alert */
--alert-critical-background: var(--color-red-50);
--alert-critical-border: var(--color-red-700);
--alert-critical-text: var(--color-red-900);
--alert-critical-icon: var(--color-red-700);

/* Warning Alert */
--alert-warning-background: var(--color-orange-50);
--alert-warning-border: var(--color-orange-700);
--alert-warning-text: var(--color-orange-900);
--alert-warning-icon: var(--color-orange-700);

/* Stable Status */
--alert-stable-background: var(--color-green-50);
--alert-stable-border: var(--color-green-700);
--alert-stable-text: var(--color-green-900);
--alert-stable-icon: var(--color-green-700);
```

### Medical Data Badges

```css
/* Badge Structure */
--badge-padding-x: var(--space-2);
--badge-padding-y: var(--space-1);
--badge-border-radius: var(--radius-full);
--badge-font-size: var(--font-size-sm);
--badge-font-weight: var(--font-weight-semibold);

/* Badge Types */
--badge-medication-background: var(--color-data-medication);
--badge-medication-text: var(--color-text-inverse);
--badge-vitals-background: var(--color-data-vitals);
--badge-vitals-text: var(--color-text-inverse);
--badge-labs-background: var(--color-data-labs);
--badge-labs-text: var(--color-text-inverse);
--badge-imaging-background: var(--color-data-imaging);
--badge-imaging-text: var(--color-text-inverse);
```

### Patient Status Indicators

```css
/* Status Dot Indicators */
--status-indicator-size: 0.75rem;  /* 12px */
--status-stable-color: var(--color-status-stable);
--status-caution-color: var(--color-status-caution);
--status-critical-color: var(--color-status-critical);
--status-unknown-color: var(--color-status-unknown);
```

---

## Accessibility Guidelines

### Built-in Accessibility Features

Every token in our system has been designed with accessibility as a fundamental requirement:

1. **Color Contrast** : All text colors meet WCAG 2.1 AA standards (4.5:1 for normal text, 3:1 for large text)
2. **Touch Targets** : Minimum 44px × 44px for all interactive elements
3. **Focus Indicators** : High contrast focus rings with 3px width
4. **Animation** : Respects prefers-reduced-motion preferences
5. **Typography** : Minimum 16px for body text, 1.5 line height for readability

### Implementation Notes

```css
/* Accessibility-First Tokens */
--focus-ring-width: 3px;
--focus-ring-color: var(--color-blue-500);
--focus-ring-offset: 2px;
--minimum-touch-target: 44px;
--minimum-text-size: 16px;
--minimum-contrast-ratio: 4.5;
```

---

## Modern CSS Features

### Baseline Features for Production Use

Our design system leverages modern CSS features that have achieved baseline support, ensuring broad compatibility while enhancing capabilities.

#### CSS Layers (@layer)

```css
/* Layer order definition for cascade management */
@layer reset, base, tokens, components, utilities, overrides;

/* Component styles in their layer */
@layer components {
  .patient-card {
    background: var(--color-background-elevated);
    border-radius: var(--radius-lg);
  }
}

/* Critical healthcare overrides always win */
@layer overrides {
  .emergency-alert {
    background: var(--color-critical) !important;
    animation: pulse 1s infinite;
  }
}
```

#### Advanced Math Functions

```css
/* Fluid sizing with clamp() */
--font-size-fluid: clamp(1rem, 2vw + 0.5rem, 1.5rem);
--container-width: min(90vw, var(--size-container-xl));
--spacing-dynamic: max(1rem, 2vh);

/* Responsive padding calculation */
--padding-responsive: clamp(
  var(--space-4),    /* minimum */
  5vw,               /* preferred */
  var(--space-8)     /* maximum */
);
```

#### Modern Color Functions

```css
/* OKLCH for perceptually uniform colors */
--color-primary-oklch: oklch(60% 0.15 250);
--color-success-oklch: oklch(70% 0.18 140);

/* Color mixing for variations */
--color-primary-light: color-mix(in oklch, var(--color-primary), white 80%);
--color-primary-dark: color-mix(in oklch, var(--color-primary), black 80%);

/* Transparent variations */
--color-primary-alpha-20: color-mix(in srgb, var(--color-primary), transparent 80%);
```

#### CSS Grid Subgrid

```css
/* Medical form with perfect label alignment */
.medical-form {
  display: grid;
  grid-template-columns: [labels] 200px [inputs] 1fr [actions] auto;
  gap: var(--space-4);
}

.form-section {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: labels / -1;
}

/* All nested elements align to parent grid */
.form-section > * {
  grid-column: labels / -1;
}
```

#### :has() Selector

```css
/* Form validation states */
.form-field:has(input:invalid:not(:focus)) {
  --field-border-color: var(--color-error);
}

.form-field:has(input:valid:not(:placeholder-shown)) {
  --field-border-color: var(--color-success);
}

/* Layout adaptations based on content */
.patient-card:has(.critical-indicator) {
  border: 2px solid var(--color-critical);
  animation: attention 2s ease-in-out infinite;
}

/* Conditional styling */
.dashboard-section:has(.chart-container) {
  display: grid;
  grid-template-columns: 1fr 300px;
}
```

#### Modern Viewport Units

```css
/* Dynamic viewport units for mobile */
--viewport-height-small: 100svh;  /* Smallest possible viewport */
--viewport-height-large: 100lvh;  /* Largest possible viewport */
--viewport-height-dynamic: 100dvh; /* Dynamic, adjusts with UI */

/* Mobile-first healthcare app */
.mobile-interface {
  min-height: 100svh; /* Stable, no jumps */
  height: 100dvh;     /* Adapts to browser UI */
}

/* Full-screen modals */
.modal-fullscreen {
  width: 100vw;
  height: 100lvh;
  position: fixed;
}
```

#### Aspect Ratio

```css
/* Consistent media dimensions */
--ratio-square: 1;
--ratio-video: 16 / 9;
--ratio-portrait: 3 / 4;
--ratio-medical-image: 4 / 3;

.image-container {
  aspect-ratio: var(--ratio-medical-image);
  width: 100%;
  overflow: hidden;
}

/* Responsive video embeds */
.video-embed {
  aspect-ratio: var(--ratio-video);
  width: 100%;
  max-width: 100%;
}
```

#### CSS Nesting

```css
/* Component organization with native nesting */
.patient-dashboard {
  display: grid;
  gap: var(--space-6);
  
  .dashboard-header {
    display: flex;
    justify-content: space-between;
  
    .patient-name {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
    }
  
    .patient-actions {
      display: flex;
      gap: var(--space-3);
    
      button {
        min-width: var(--size-touch-standard);
      }
    }
  }
  
  /* Nested media query */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  
    .dashboard-header {
      flex-direction: column;
      gap: var(--space-4);
    }
  }
}
```

#### :is() and :where() Selectors

```css
/* Simplified specificity management */
:where(.btn, .link, .chip) {
  /* Zero specificity base styles */
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

/* Grouped selectors with maintained specificity */
:is(h1, h2, h3, h4, h5, h6) {
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
}

/* Complex selections simplified */
.form :is(input, select, textarea):is(:hover, :focus) {
  border-color: var(--color-interactive-primary);
}
```

#### Logical Properties

```css
/* Internationalization-ready spacing */
.component {
  margin-inline: auto;                /* margin-left & margin-right */
  padding-block: var(--space-4);      /* padding-top & padding-bottom */
  padding-inline-start: var(--space-6); /* padding-left in LTR */
  border-inline-end: 1px solid;       /* border-right in LTR */
}

/* Logical sizing */
.sidebar {
  inline-size: 300px;                 /* width in horizontal writing */
  max-block-size: 100vh;              /* max-height in horizontal */
  overflow-block: auto;               /* overflow-y in horizontal */
}
```

---

## Responsive Design Strategy

### Modern Responsive Architecture

Our design system embraces a hybrid approach using both media queries and container queries, enabling components to adapt intelligently based on their context rather than just viewport size.

#### Decision Framework

**Use Media Queries for:**

* Page layout structure (sidebar visibility, grid changes)
* Navigation patterns (mobile vs desktop menus)
* Global typography scaling
* Device-specific features (hover states, print styles)

**Use Container Queries for:**

* Component adaptations (cards in different contexts)
* Sidebar widgets (same component, different sizes)
* Modal content (forms adapting to modal width)
* Data tables (responsive without horizontal scroll)

#### Container Query Benefits in Healthcare

Container queries are particularly valuable for healthcare interfaces because medical components often appear in multiple contexts:

1. **Patient Cards** : Work equally well in dashboards, sidebars, or modals
2. **Vitals Displays** : Adapt from compact sidebar widgets to detailed main views
3. **Medication Lists** : Scale from mobile screens to wide desktop displays
4. **Clinical Alerts** : Maintain readability regardless of container size

#### Implementation Pattern

```css
/* 1. Define the container */
.component-wrapper {
  container-type: inline-size;
  container-name: var(--container-card);
}

/* 2. Base styles (mobile-first) */
.component {
  padding: var(--space-4);
  display: block;
}

/* 3. Container queries for component adaptation */
@container (min-width: 400px) {
  .component {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}

/* 4. Media queries for viewport-based enhancements */
@media (min-width: 1024px) and (hover: hover) {
  .component:hover {
    box-shadow: var(--shadow-md);
  }
}
```

#### Progressive Enhancement Strategy

```css
/* Fallback for browsers without container query support */
@supports not (container-type: inline-size) {
  @media (min-width: 768px) {
    .component {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
  }
}

/* Modern browsers get container queries */
@supports (container-type: inline-size) {
  .component-wrapper {
    container-type: inline-size;
  }
  
  @container (min-width: 400px) {
    .component {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
  }
}
```

/* Modern Preference Queries */
@media (prefers-reduced-motion: reduce) {

* {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
  }
  }

@media (prefers-contrast: high) {
:root {
--color-text-primary: #000000;
--color-background-primary: #FFFFFF;
--border-width-thin: 2px;
}
}

@media (prefers-color-scheme: dark) {
:root {
--color-text-primary: var(--color-gray-50);
--color-background-primary: var(--color-gray-900);
}
}

```

### Advanced Performance Features

```css
/* Content-visibility for large datasets */
.patient-list-item {
  content-visibility: auto;
  contain-intrinsic-size: auto 80px;
}

/* CSS Containment for performance */
.widget {
  contain: layout style paint;
}

/* Will-change for animations */
.modal-enter {
  will-change: transform, opacity;
}
```

These modern baseline features provide powerful capabilities while maintaining broad browser support, enabling us to build a robust, future-ready healthcare design system.

---

## Usage Examples

### Color Application

```css
/* Primary Button Implementation */
.button-primary {
  background-color: var(--button-primary-background);
  color: var(--button-primary-text);
  border: var(--button-border-width) solid var(--button-primary-border);
  border-radius: var(--button-border-radius);
  padding: var(--button-padding-y-md) var(--button-padding-x-md);
  font-size: var(--button-font-size-md);
  font-weight: var(--button-font-weight);
  min-height: var(--size-touch-standard);
  transition: var(--transition-colors) var(--transition-timing-normal);
}

.button-primary:hover {
  background-color: var(--button-primary-hover-background);
}

.button-primary:focus {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
}
```

### Healthcare Alert Pattern

```css
/* Critical Alert Component */
.alert-critical {
  background-color: var(--alert-critical-background);
  border: var(--alert-border-width) solid var(--alert-critical-border);
  border-radius: var(--alert-border-radius);
  color: var(--alert-critical-text);
  padding: var(--alert-padding);
}

.alert-critical-icon {
  color: var(--alert-critical-icon);
  width: var(--alert-icon-size);
  height: var(--alert-icon-size);
}
```

### Responsive Spacing

```css
/* Card with Responsive Padding */
.card {
  padding: var(--card-padding-sm);
}

@media (min-width: 768px) {
  .card {
    padding: var(--card-padding-md);
  }
}

@media (min-width: 1024px) {
  .card {
    padding: var(--card-padding-lg);
  }
}
```

### Container Query Implementation

```css
/* Patient Card - Adapts to container size */
.patient-card-wrapper {
  container-type: inline-size;
  container-name: var(--container-card);
}

/* Narrow container (sidebar widget) */
@container (max-width: 400px) {
  .patient-card {
    display: block;
  }
  
  .patient-info {
    margin-bottom: var(--space-3);
  }
  
  .patient-actions {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
}

/* Wide container (main content) */
@container (min-width: 400px) {
  .patient-card {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: var(--space-4);
    align-items: center;
  }
}

/* Extra wide container */
@container (min-width: 600px) {
  .patient-card {
    grid-template-columns: 200px 1fr 200px;
  }
  
  .patient-vitals {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Hybrid Responsive Pattern

```css
/* Medication List - Combines media and container queries */
.medication-list {
  container-type: inline-size;
}

/* Container query for component adaptation */
@container (min-width: 500px) {
  .medication-item {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr auto;
    gap: var(--space-3);
  }
}

/* Media query for viewport-specific features */
@media (min-width: 1024px) and (hover: hover) {
  .medication-item:hover {
    background-color: var(--color-background-secondary);
    cursor: pointer;
  }
}
```

---

## Token Maintenance

### Version Control

Design tokens should be versioned using semantic versioning:

* **Major** : Breaking changes (token removal, significant value changes)
* **Minor** : New tokens (backwards compatible)
* **Patch** : Small adjustments, bug fixes

### Change Management

1. **Deprecation Process**
   * Mark tokens as deprecated with migration timeline
   * Provide migration guide to new tokens
   * Remove deprecated tokens in next major version
2. **Documentation Updates**
   * Update usage examples
   * Document rationale for changes
   * Provide visual comparisons
3. **Communication**
   * Notify all teams of upcoming changes
   * Provide testing period
   * Gather feedback before finalizing

### Quality Assurance

Regular audits ensure token integrity:

* Contrast ratio validation
* Touch target size verification
* Cross-browser testing
* Accessibility compliance checks
* Performance impact assessment

---

## JSON Token Format

For implementation in various systems, tokens are also available in JSON format:

```json
{
  "color": {
    "brand": {
      "primary": {
        "value": "#5E2E84",
        "type": "color",
        "description": "NYU Langone primary brand color"
      },
      "secondary": {
        "value": "#00A1DF",
        "type": "color",
        "description": "Healthcare blue for secondary elements"
      }
    },
    "text": {
      "primary": {
        "value": "#212121",
        "type": "color",
        "description": "Primary text color with 12.6:1 contrast"
      }
    }
  },
  "space": {
    "base": {
      "value": "8px",
      "type": "spacing",
      "description": "Base spacing unit for 8px grid"
    }
  }
}
```

---

## Conclusion

These design tokens form the foundation of NYU Langone Health's digital design language. By using these tokens consistently, we create experiences that are:

* **Accessible** to all patients regardless of ability
* **Trustworthy** through consistent professional presentation
* **Efficient** for both patients and healthcare providers
* **Scalable** across current and future digital touchpoints
* **Maintainable** through centralized design decisions

Every token has been carefully crafted to support our mission of providing exceptional healthcare experiences that prioritize patient needs, clinical efficiency, and human dignity.

For questions or suggestions regarding these design tokens, please contact the NYU Langone Health Design System team.
