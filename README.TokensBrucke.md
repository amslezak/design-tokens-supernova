# TokensBrücke Design Tokens Pipeline

This document describes the complete workflow for managing design tokens from Figma to CSS using TokensBrücke and Style Dictionary.

## Overview

The design token pipeline consists of:
1. **Figma** - Design source of truth
2. **TokensBrücke** - Figma plugin for token extraction
3. **GitHub Actions** - Automated processing
4. **Style Dictionary** - Token transformation
5. **Generated CSS** - Production-ready stylesheets

## TokensBrücke Configuration

### Plugin Settings
The TokensBrücke Figma plugin should be configured with the following settings:

```json
{
  "colorMode": "HSLA CSS",
  "includeStyles": {
    "typography": false,
    "grid": false,
    "effect": false
  },
  "includeVariableScopes": false,
  "useDTCGKeys": false,
  "includeValueString": false,
  "includeFigmaMetadata": false
}
```

### GitHub Integration
- **Base Branch**: `develop`
- **Target File**: `design-tokens.json`
- **Auto PR**: Enabled

## Generated CSS Files

The pipeline generates 4 specialized CSS files with the `mt-` prefix:

### 1. `nyulh-core.css`
Core primitive tokens including:
- Color palette (all color scales: Amber, Slate, Blue, etc.)
- Spacing tokens (dimensions from 0px to 100000000px)
- Basic typography values

Example output:
```css
:root {
  --mt-core-color-amber-50: #fffbeb;
  --mt-core-color-slate-950: #020618;
  --mt-core-number-16: 16px;
}
```

### 2. `nyulh-theme.css`
Semantic theme tokens with mode support:
- Surface colors
- Typography colors
- Supports light/dark/high-contrast modes

Example output:
```css
:root {
  --mt-theme-color-surface-dark: #020618;
  --mt-theme-color-surface-white: #cad5e2;
  --mt-theme-color-typography-dark: #ffffff;
}
```

### 3. `nyulh-components.css`
Component-specific design tokens:
- Button colors
- Component-level customizations

Example output:
```css
:root {
  --mt-component-button-color-primary: #ad46ff;
}
```

### 4. `nyulh-device-size.css`
Responsive and breakpoint tokens:
- Device-specific spacing
- Layout tokens
- Typography scaling
- Border radius variations

Example output:
```css
:root {
  --mt-breakpoint-number-spacing-lg: 1px;
  --mt-breakpoint-number-layout-lg: 0px;
}
```

## End-to-End Workflow

### Step 1: Design in Figma
- Create or update design tokens in Figma
- Use consistent naming conventions
- Organize tokens in logical groups (Core, Theme, Component, Breakpoint)

### Step 2: Export with TokensBrücke
1. Open TokensBrücke plugin in Figma
2. Verify settings match the configuration above
3. Click "Push to server" → "GitHub PR"
4. Plugin creates a PR to the `develop` branch with updated `design-tokens.json`

### Step 3: Automated Processing
GitHub Actions automatically:
1. Detects changes to `design-tokens.json` in `develop` branch
2. Installs dependencies with npm
3. Runs Style Dictionary build process
4. Generates 4 CSS files in `build/css/`
5. Commits generated files back to the same PR

### Step 4: Review and Merge
1. Review the generated CSS files in the PR
2. Verify token values and naming
3. Merge PR to deploy tokens

## Token Structure

### Source Format (`design-tokens.json`)
```json
{
  "Core": {
    "Color": {
      "Slate": {
        "950": {
          "type": "color",
          "value": "hsla(229, 85%, 5%, 1)"
        }
      }
    }
  },
  "Theme": {
    "Color": {
      "Surface": {
        "Dark": {
          "type": "color",
          "value": "{Core.Color.Slate.950}",
          "$extensions": {
            "mode": {
              "Light": "{Core.Color.Slate.950}",
              "Dark": "{Core.Color.Slate.50}",
              "High Contrast": "{Core.Color.Slate.50}"
            }
          }
        }
      }
    }
  }
}
```

### Output Format (CSS)
- **Naming**: `--mt-{category}-{path}-{token}`
- **Values**: Resolved references (no `{...}` syntax)
- **Format**: CSS custom properties in `:root`

## Style Dictionary Configuration

The pipeline uses Style Dictionary with the following setup:

```json
{
  "source": ["design-tokens.json"],
  "platforms": {
    "css-core": {
      "transformGroup": "css",
      "prefix": "mt",
      "files": [{
        "destination": "nyulh-core.css",
        "filter": { "attributes": { "category": "Core" }}
      }]
    }
  }
}
```

## GitHub Actions Workflow

### Triggers
- Push to `develop` branch with `design-tokens.json` changes
- Pull requests with `design-tokens.json` changes
- Manual workflow dispatch

### Process
1. **Setup**: Node.js 24, npm install
2. **Build**: `npm run build` (Style Dictionary)
3. **Verify**: Check generated files
4. **Commit**: Auto-commit CSS files to same branch/PR

### Workflow File
Location: `.github/workflows/build-design-tokens.yml`

## Usage in Projects

### Import CSS Files
```html
<!-- Core primitives -->
<link rel="stylesheet" href="path/to/nyulh-core.css">

<!-- Theme tokens -->
<link rel="stylesheet" href="path/to/nyulh-theme.css">

<!-- Component tokens -->
<link rel="stylesheet" href="path/to/nyulh-components.css">

<!-- Responsive tokens -->
<link rel="stylesheet" href="path/to/nyulh-device-size.css">
```

### Use in CSS
```css
.button-primary {
  background-color: var(--mt-component-button-color-primary);
  color: var(--mt-theme-color-typography-dark);
  padding: var(--mt-core-number-16);
}

.surface-dark {
  background-color: var(--mt-theme-color-surface-dark);
}
```

## Development

### Local Build
```bash
npm install
npm run build
```

### Watch Mode
```bash
npm run dev
```

### Clean Build
```bash
npm run clean
npm run build
```

## File Structure

```
├── design-tokens.json          # Source tokens from TokensBrücke
├── config.json                 # Style Dictionary configuration
├── package.json                # npm dependencies and scripts
├── .github/workflows/
│   └── build-design-tokens.yml # Automated processing
└── build/css/                  # Generated CSS files
    ├── nyulh-core.css
    ├── nyulh-theme.css
    ├── nyulh-components.css
    └── nyulh-device-size.css
```

## Troubleshooting

### Common Issues

1. **Reference Errors**: Ensure token references use correct syntax `{Core.Color.Slate.950}` without `.$value`
2. **Build Failures**: Check that `design-tokens.json` is valid JSON
3. **Missing Tokens**: Verify TokensBrücke export settings match configuration
4. **CSS Not Generated**: Check GitHub Actions logs for Style Dictionary errors

### Validation
- All tokens must have `type` and `value` properties
- References must point to existing tokens
- HSLA color format: `hsla(hue, saturation%, lightness%, alpha)`

## Maintenance

### Updating Dependencies
```bash
npm update style-dictionary
```

### Modifying Output
1. Edit `config.json` to change file destinations or filters
2. Test locally with `npm run build`
3. Commit changes to update GitHub Actions

This pipeline ensures consistent, automated design token management from Figma to production CSS.