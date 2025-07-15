# Design Tokens Supernova

NYU Langone Health Design Token System - Figma Variables → Supernova → Style Dictionary

## Overview

This repository contains the official design tokens for NYU Langone Health, automatically exported from Supernova and transformed into multi-platform formats using Style Dictionary.

## Architecture

```
Figma Variables → Supernova (Official Export) → Style Dictionary → Multi-platform output
```

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Build design tokens:
```bash
npm run build
```

3. Start development with watch mode:
```bash
npm run dev
```

## Available Scripts

- `npm run build` - Transform tokens with Style Dictionary
- `npm run build:watch` - Development mode with file watching
- `npm run clean` - Remove build directory
- `npm run dev` - Alias for build:watch

## Project Structure

```
design-tokens-supernova/
├── base/                    # Official Supernova token exports
│   ├── color.json          # Color tokens
│   ├── dimension.json      # Dimension tokens
│   ├── space.json          # Spacing tokens
│   ├── size.json           # Size tokens
│   └── border-radius.json  # Border radius tokens
├── build/                  # Generated platform outputs
│   ├── css/               # CSS custom properties
│   ├── scss/              # Sass variables
│   ├── js/                # JavaScript tokens
│   ├── json/              # JSON format
│   └── react/             # React tokens
├── style-dictionary.config.js # Style Dictionary configuration
└── package.json
```

## Generated Outputs

The build process generates tokens in multiple formats:

- **CSS**: Custom properties in `build/css/variables.css`
- **SCSS**: Sass variables in `build/scss/_variables.scss`
- **JavaScript**: ES6 exports in `build/js/tokens.js`
- **React**: React-optimized tokens in `build/react/tokens.js`
- **JSON**: Flat token structure in `build/json/tokens.json`

## Token Updates

Design tokens are automatically updated from Figma through Supernova's official export process. The `/base/` folder contains the official token definitions that should not be modified manually.

## GitHub Actions Automation

This repository uses GitHub Actions to automatically build and deploy design tokens:

- **Automatic builds** when PRs are merged to main
- **Auto-commits** built token files back to repository
- **GitHub releases** created for each token update
- **Artifact uploads** for easy access to build files

See [GITHUB_ACTIONS.md](./GITHUB_ACTIONS.md) for detailed documentation.

### Workflow Triggers

- Push to `main` branch → Builds and commits tokens
- Pull requests to `main` → Validates builds without committing
- Manual dispatch → Can be triggered from GitHub Actions tab

### Usage in Projects

```scss
// SCSS
@import 'path/to/build/scss/variables';
.component { color: $color-color-primary-purple; }
```

```js
// JavaScript/React
import { ColorColorPrimaryPurple } from './build/js/tokens';
const styles = { color: ColorColorPrimaryPurple };
```

```css
/* CSS Custom Properties */
@import 'path/to/build/css/variables.css';
.component { color: var(--color-color-primary-purple); }
```

## Requirements

- Node.js 16+
- Style Dictionary 5.0.1+