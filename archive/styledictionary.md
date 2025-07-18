# Style Dictionary Configuration Documentation

## Overview

This document outlines the configuration preferences and implementation strategy for NYU Langone Health Design Tokens using Style Dictionary 5 with ES6 imports.

## Configuration Files

### `styledictionary.sds.config.js`
- **ES6 Module Format**: Uses modern ES6 imports and export syntax
- **Multi-Theme Support**: Handles light/dark modes and responsive breakpoints
- **CSS Custom Properties**: Generates clean CSS variables for web consumption
- **Custom Transforms**: Creates kebab-case CSS variable names with `--nyulh-` prefix

## Token Source Files

### Theme Files
- `tokens.sdsLight.json` - Light theme color values
- `tokens.sdsDark.json` - Dark theme color values

### Responsive Breakpoint Files
- `tokens.desktop.json` - Desktop-specific token values
- `tokens.tablet.json` - Tablet-specific token values  
- `tokens.mobile.json` - Mobile-specific token values

### Base Files
- `tokens.json` - Base token structure
- `tokens.default.json` - Default fallback tokens

## Output Strategy

### CSS Custom Properties
Generated CSS files use custom properties with semantic naming:

```css
:root {
  /* COLOR TOKENS */
  --nyulh-color-background-default-default: #ffffff;
  --nyulh-color-text-default-default: #1e1e1e;
  --nyulh-color-brand-default: #2c2c2c;
  
  /* TYPOGRAPHY TOKENS */
  --nyulh-dimension-typography-body-size-medium: 16px;
  --nyulh-string-typography-body-font-family: Inter;
  
  /* SPACING TOKENS */
  --nyulh-dimension-size-space-400: 16px;
  --nyulh-dimension-size-space-800: 32px;
}
```

### Theme Implementation
- **Light Theme**: `:root` selector with light color values
- **Dark Theme**: `[data-theme="dark"]` selector with dark color values
- **Theme Switching**: JavaScript toggles `data-theme` attribute on `<html>` element

## Light/Dark Mode Strategy

### Approach
We use the **CSS Custom Properties with Theme Classes** approach for optimal flexibility:

1. **Separate CSS Files**: `tokens-light.css` and `tokens-dark.css`
2. **CSS Custom Properties**: All tokens become CSS variables
3. **Theme Switching**: Via `data-theme` attribute on root element
4. **Graceful Fallback**: Light theme as default (`:root` selector)

### Implementation
```html
<!-- Light theme (default) -->
<html>
  <head>
    <link rel="stylesheet" href="build/tokens-light.css">
    <link rel="stylesheet" href="build/tokens-dark.css">
  </head>
</html>

<!-- Dark theme -->
<html data-theme="dark">
  <!-- Dark theme tokens will override light theme -->
</html>
```

### Theme Switching JavaScript
```javascript
// Toggle theme
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Initialize theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
```

## Responsive Breakpoint Strategy

### Approach
Generate separate CSS files for each breakpoint with media query overrides:

```css
/* tokens-desktop.css */
@media (min-width: 1200px) {
  :root {
    --nyulh-dimension-responsive-device-width: 1200px;
    --nyulh-dimension-typography-title-hero-size: 72px;
  }
}

/* tokens-tablet.css */
@media (min-width: 768px) and (max-width: 1199px) {
  :root {
    --nyulh-dimension-responsive-device-width: 768px;
    --nyulh-dimension-typography-title-hero-size: 48px;
  }
}

/* tokens-mobile.css */
@media (max-width: 767px) {
  :root {
    --nyulh-dimension-responsive-device-width: 320px;
    --nyulh-dimension-typography-title-hero-size: 32px;
  }
}
```

## Build Process

### Running the Build
```bash
# Run the build script
node styledictionary.sds.config.js

# Or import and run programmatically
import buildTokens from './styledictionary.sds.config.js';
buildTokens();
```

### Generated Files
The build process creates these files in the `build/` directory:
- `tokens-light.css` - Light theme CSS custom properties
- `tokens-dark.css` - Dark theme CSS custom properties
- `tokens-desktop.css` - Desktop responsive overrides
- `tokens-tablet.css` - Tablet responsive overrides
- `tokens-mobile.css` - Mobile responsive overrides

### Including in Projects
```html
<!DOCTYPE html>
<html>
<head>
  <!-- Base theme (light) -->
  <link rel="stylesheet" href="build/tokens-light.css">
  <!-- Dark theme overrides -->
  <link rel="stylesheet" href="build/tokens-dark.css">
  <!-- Responsive breakpoints -->
  <link rel="stylesheet" href="build/tokens-desktop.css">
  <link rel="stylesheet" href="build/tokens-tablet.css">
  <link rel="stylesheet" href="build/tokens-mobile.css">
</head>
</html>
```

## Token Naming Convention

### CSS Variable Format
- **Prefix**: `--nyulh-`
- **Structure**: `--nyulh-{category}-{subcategory}-{property}-{variant}`
- **Kebab Case**: All lowercase with hyphens

### Examples
```css
/* Color tokens */
--nyulh-color-background-default-default: #ffffff;
--nyulh-color-text-brand-default: #2c2c2c;
--nyulh-color-border-danger-default: #c00f0c;

/* Typography tokens */
--nyulh-dimension-typography-body-size-medium: 16px;
--nyulh-string-typography-body-font-family: Inter;

/* Spacing tokens */
--nyulh-dimension-size-space-400: 16px;
--nyulh-dimension-size-radius-100: 4px;
```

## Testing

### Test File
Use `test-tokens.html` to validate token output:
- **Theme Toggle**: Test light/dark mode switching
- **Responsive Testing**: View at different screen sizes
- **Token Inspector**: See actual CSS custom property values
- **Visual Validation**: Verify colors, typography, and spacing

### Usage in CSS
```css
.button {
  background-color: var(--nyulh-color-background-brand-default);
  color: var(--nyulh-color-text-on-brand);
  padding: var(--nyulh-dimension-size-space-400);
  border-radius: var(--nyulh-dimension-size-radius-100);
  font-family: var(--nyulh-string-typography-body-font-family);
  font-size: var(--nyulh-dimension-typography-body-size-medium);
}

.button:hover {
  background-color: var(--nyulh-color-background-brand-hover);
}
```

## Configuration Preferences

### Why CSS Custom Properties?
- **Dynamic**: Can be changed at runtime via JavaScript
- **Cascade-Aware**: Inherit and override naturally
- **Theme-Friendly**: Perfect for light/dark mode switching
- **Modern**: Supported by all modern browsers
- **Performant**: No build-time processing needed

### Why ES6 Modules?
- **Modern JavaScript**: Future-proof syntax
- **Tree Shaking**: Import only what you need
- **Type Safety**: Better IDE support and error catching
- **Maintainable**: Clear import/export structure

### Why Separate Theme Files?
- **Clean Separation**: Each theme has its own source
- **Supernova Integration**: Matches Supernova's theme export structure
- **Scalability**: Easy to add new themes (high contrast, etc.)
- **Maintainability**: Clear source of truth for each theme

## Future Enhancements

### Planned Features
- **High Contrast Theme**: Additional accessibility theme
- **CSS Media Queries**: `prefers-color-scheme` support
- **TypeScript Types**: Generate TypeScript definitions
- **Component Tokens**: Higher-level component-specific tokens
- **Validation**: Runtime token validation and testing

### Integration Options
- **Storybook**: Import CSS files for component documentation
- **Webpack**: Load CSS files as modules
- **PostCSS**: Process tokens with PostCSS plugins
- **Figma**: Sync tokens back to Figma via Supernova

## Troubleshooting

### Common Issues
1. **Build Errors**: Check that all token files exist and are valid JSON
2. **Missing Tokens**: Verify token paths match the source file structure
3. **Theme Not Switching**: Ensure `data-theme` attribute is set correctly
4. **Responsive Issues**: Check media query ranges in CSS files

### Debugging
```javascript
// Check current theme
console.log(document.documentElement.getAttribute('data-theme'));

// List all CSS custom properties
const styles = getComputedStyle(document.documentElement);
const tokens = Array.from(styles).filter(prop => prop.startsWith('--nyulh-'));
console.log(tokens);
```

---

*This documentation is maintained alongside the Style Dictionary configuration. Update both when making changes to the token system.*