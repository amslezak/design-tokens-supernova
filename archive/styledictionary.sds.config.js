import { formats, transformGroups } from 'style-dictionary/enums';
import StyleDictionary from 'style-dictionary';

// Custom transform to create clean CSS variable names
const cssVariableTransform = {
  type: 'name',
  name: 'name/css-kebab-case',
  transform: (token) => {
    // Remove the first 'nyulh' from path since we'll add it as prefix
    const pathWithoutRoot = token.path.slice(1); // Remove 'nyulh' from beginning
    const path = pathWithoutRoot.join('-').replace(/\./g, '-');
    return `--nyulh-${path}`;
  }
};

// Custom format for CSS custom properties with theme support
const cssCustomPropertiesFormat = {
  name: 'css/custom-properties-theme',
  format: ({ dictionary, options }) => {
    const { theme = 'light' } = options;
    
    let output = `/* NYU Langone Health Design Tokens - ${theme} theme */\n`;
    output += `/* Generated automatically by Style Dictionary */\n\n`;
    
    // Root selector for theme or responsive breakpoint
    let selector = ':root';
    if (theme === 'dark') {
      selector = '[data-theme="dark"]';
    } else if (theme === 'desktop') {
      selector = '@media (min-width: 1200px) {\n  :root';
    } else if (theme === 'tablet') {
      selector = '@media (min-width: 768px) and (max-width: 1199px) {\n  :root';
    } else if (theme === 'mobile') {
      selector = '@media (max-width: 767px) {\n  :root';
    }
    output += `${selector} {\n`;
    
    // Group tokens by category for better organization
    const categories = {};
    dictionary.allTokens.forEach(token => {
      const category = token.path[2] || 'other'; // Get category from token path
      if (!categories[category]) categories[category] = [];
      categories[category].push(token);
    });
    
    // Output tokens grouped by category
    Object.keys(categories).sort().forEach(category => {
      output += `  /* ${category.toUpperCase()} TOKENS */\n`;
      
      categories[category].forEach(token => {
        const name = cssVariableTransform.transform(token);
        const value = token.value;
        const description = token.description ? ` /* ${token.description} */` : '';
        output += `  ${name}: ${value};${description}\n`;
      });
      
      output += '\n';
    });
    
    // Close the CSS block
    if (theme === 'desktop' || theme === 'tablet' || theme === 'mobile') {
      output += '}\n}\n'; // Close both :root and @media
    } else {
      output += '}\n'; // Close :root or [data-theme="dark"]
    }
    
    return output;
  }
};

// Register custom transforms and formats
StyleDictionary.registerTransform(cssVariableTransform);
StyleDictionary.registerFormat(cssCustomPropertiesFormat);

// Base configuration
const baseConfig = {
  platforms: {
    css: {
      transformGroup: transformGroups.css,
      buildPath: 'build/',
      files: []
    }
  }
};

// Light theme configuration
const lightConfig = {
  ...baseConfig,
  source: ['tokens.sdsLight.json'],
  platforms: {
    css: {
      ...baseConfig.platforms.css,
      files: [{
        destination: 'tokens-light.css',
        format: 'css/custom-properties-theme',
        options: {
          theme: 'light'
        }
      }]
    }
  }
};

// Dark theme configuration
const darkConfig = {
  ...baseConfig,
  source: ['tokens.sdsDark.json'],
  platforms: {
    css: {
      ...baseConfig.platforms.css,
      files: [{
        destination: 'tokens-dark.css',
        format: 'css/custom-properties-theme',
        options: {
          theme: 'dark'
        }
      }]
    }
  }
};

// Desktop responsive configuration
const desktopConfig = {
  ...baseConfig,
  source: ['tokens.desktop.json'],
  platforms: {
    css: {
      ...baseConfig.platforms.css,
      files: [{
        destination: 'tokens-desktop.css',
        format: 'css/custom-properties-theme',
        options: {
          theme: 'desktop'
        }
      }]
    }
  }
};

// Tablet responsive configuration
const tabletConfig = {
  ...baseConfig,
  source: ['tokens.tablet.json'],
  platforms: {
    css: {
      ...baseConfig.platforms.css,
      files: [{
        destination: 'tokens-tablet.css',
        format: 'css/custom-properties-theme',
        options: {
          theme: 'tablet'
        }
      }]
    }
  }
};

// Mobile responsive configuration
const mobileConfig = {
  ...baseConfig,
  source: ['tokens.mobile.json'],
  platforms: {
    css: {
      ...baseConfig.platforms.css,
      files: [{
        destination: 'tokens-mobile.css',
        format: 'css/custom-properties-theme',
        options: {
          theme: 'mobile'
        }
      }]
    }
  }
};

// Build function
const buildTokens = async () => {
  console.log('🎨 Building NYU Langone Health Design Tokens...\n');
  
  try {
    // Build light theme
    console.log('📝 Building light theme...');
    const lightSD = new StyleDictionary(lightConfig);
    await lightSD.buildAllPlatforms();
    
    // Build dark theme
    console.log('🌙 Building dark theme...');
    const darkSD = new StyleDictionary(darkConfig);
    await darkSD.buildAllPlatforms();
    
    // Build responsive breakpoints
    console.log('💻 Building desktop breakpoint...');
    const desktopSD = new StyleDictionary(desktopConfig);
    await desktopSD.buildAllPlatforms();
    
    console.log('📱 Building tablet breakpoint...');
    const tabletSD = new StyleDictionary(tabletConfig);
    await tabletSD.buildAllPlatforms();
    
    console.log('📲 Building mobile breakpoint...');
    const mobileSD = new StyleDictionary(mobileConfig);
    await mobileSD.buildAllPlatforms();
    
    console.log('\n✅ Design tokens built successfully!');
    console.log('📁 Generated files in build/ directory:');
    console.log('   - tokens-light.css');
    console.log('   - tokens-dark.css');
    console.log('   - tokens-desktop.css');
    console.log('   - tokens-tablet.css');
    console.log('   - tokens-mobile.css');
    
  } catch (error) {
    console.error('❌ Error building tokens:', error);
    process.exit(1);
  }
};

// Run build if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  buildTokens();
}

export default buildTokens;
export { lightConfig, darkConfig, desktopConfig, tabletConfig, mobileConfig };