const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `hsl(var(${variable}))`
    }
    return `hsl(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    fontFamily: {
      'body': ['var(--font-body)', ...defaultTheme.fontFamily.sans],
      'heading': ['var(--font-heading)', ...defaultTheme.fontFamily.serif],
      'leading': ['var(--font-leading)', ...defaultTheme.fontFamily.serif],
    // 'sans': ['Rubik', ...defaultTheme.fontFamily.sans],
    //  'serif': ['Bitter', ...defaultTheme.fontFamily.serif],
      'mono': ['"Fira Code"', ...defaultTheme.fontFamily.mono],
    },
    extend: {
    colors: {
      main: withOpacityValue('--color-main'),
      lightshade: withOpacityValue('--color-light-shade'),
      lightaccent: withOpacityValue('--color-light-accent'),
      darkshade: withOpacityValue('--color-dark-shade'),
      darkaccent: withOpacityValue('--color-dark-accent'),
      darkershade: withOpacityValue('--color-darkershade'),
      background: withOpacityValue('--color-ui-bg'),
      // ...
    },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: { fontFamily: 'var(--font-heading)' },
            h2: { fontFamily: 'var(--font-heading)' },
            h3: { fontFamily: 'var(--font-heading)' },
            h4: { fontFamily: 'var(--font-heading)' },
            h5: { fontFamily: 'var(--font-heading)' },
            h6: { fontFamily: 'var(--font-heading)' },
          },
        },
      }),
    },
  },
};
