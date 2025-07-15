# GitHub Actions for Design Tokens

This repository uses GitHub Actions to automatically build and deploy design tokens when changes are made to the source files.

## Workflow: `build-tokens.yml`

### Triggers

The workflow runs automatically when:
- **Push to main branch** - Builds tokens and commits them back
- **Pull requests to main** - Validates token builds without committing
- **Manual trigger** - Can be run manually from GitHub Actions tab

### File Change Detection

The workflow only runs when these files change:
- `base/**/*.json` - Supernova token exports
- `config.json` - Style Dictionary configuration  
- `package.json` - Dependencies
- `package-lock.json` - Dependency lock file

### Build Process

1. **Setup Environment**
   - Checkout repository with full history
   - Setup Node.js 18 with npm caching
   - Install dependencies with `npm ci`

2. **Build Tokens**
   - Clean previous build: `npm run clean`
   - Generate tokens: `npm run build`

3. **Auto-Commit (Main branch only)**
   - Check for changes in `build/` directory
   - Commit updated token files with descriptive message
   - Push changes back to main branch

4. **Create Release (Main branch only)**
   - Create GitHub release with token files
   - Tag release with `tokens-{run_number}`
   - Include usage instructions and file descriptions

5. **Upload Artifacts**
   - Upload build artifacts for 30-day retention
   - Accessible from GitHub Actions run summary

## Generated Files

The workflow generates these token files:

```
build/
├── css/
│   └── variables.css         # CSS custom properties
├── scss/
│   └── _variables.scss       # SCSS variables
├── js/
│   └── tokens.js            # JavaScript ES6 exports
├── react/
│   └── tokens.js            # React-compatible tokens
└── json/
    └── tokens.json          # JSON flat format
```

## Usage in Your Projects

### CSS/SCSS Projects
```scss
@import 'path/to/build/scss/variables';

.component {
  color: $color-color-primary-purple;
  padding: $dimension-number-generic-2;
}
```

### JavaScript/React Projects
```js
import { ColorColorPrimaryPurple, DimensionNumberGeneric2 } from './build/js/tokens';

const styles = {
  color: ColorColorPrimaryPurple,
  padding: DimensionNumberGeneric2
};
```

### CSS Custom Properties
```css
@import 'path/to/build/css/variables.css';

.component {
  color: var(--color-color-primary-purple);
  padding: var(--dimension-number-generic-2);
}
```

## Workflow Features

### Efficiency
- Only runs when token source files change
- Uses npm caching for faster builds
- Skips commits when no changes detected

### Reliability
- Full git history for proper operations
- Proper error handling and logging
- Comprehensive build summaries

### Automation
- Auto-commits built tokens to main branch
- Creates GitHub releases for version tracking
- Uploads artifacts for easy access

## Manual Workflow Dispatch

You can manually trigger the workflow from:
1. GitHub repository → Actions tab
2. Select "Build Design Tokens" workflow
3. Click "Run workflow" button
4. Choose branch and click "Run workflow"

## Troubleshooting

### Common Issues

**Workflow not triggering:**
- Ensure changes are made to files in the `paths` filter
- Check that the branch is `main` or targeting `main` in PR

**Build failures:**
- Check Node.js version compatibility (requires 16+)
- Verify Style Dictionary configuration is valid
- Ensure all dependencies are properly installed

**Commit failures:**
- Verify GitHub token has proper permissions
- Check that there are actual changes in `build/` directory
- Ensure git configuration is correct

### Debug Steps

1. Check the Actions tab for detailed error logs
2. Run the build locally: `npm run build`
3. Verify token source files are valid JSON
4. Check Style Dictionary configuration syntax

## Security Notes

- Uses `GITHUB_TOKEN` for authentication (automatic)
- No external secrets or credentials required
- All operations are within GitHub's secure environment
- Token files are publicly accessible (as intended for design tokens)