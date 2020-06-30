const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    'src/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'flexum': '#6e006f',
        'flexum-accent': '#00cca7',
        'flexum-accent-darker': '#007d67',
        'flexum-accent-tr': '#00cca755',
        'flexum-accent2': '#f1e300',
        'flexum-bg': '#ebf5f5',
        'footer-bg': '#1b1b1b',
      },
      spacing: {
        '2px': '2px',
      },
      fontFamily: {
        sen: [
          'Sen',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      fontSize: {
        'smaaller': '80%',
        'smaller': '90%',
        'same-size': '100%',
        'larger': '110%',
        'laarger': '120%',
        'size-header-big': ['180px', '0.9'],
        'size-header-small': ['80px', '1'],
      },
      linearGradientDirections: {
        '100deg': '100deg',
      },
    },
    linearGradientColors: theme => ({
      header: [theme('colors.flexum'), theme('colors.flexum-accent-tr')],
      touch: [theme('colors.flexum'), `${theme('colors.flexum')} 80%`, `${theme('colors.flexum-accent2')} 90%`, theme('colors.flexum-accent2')],
    }),
    backgroundImage: theme => ({
      'flexum-header': {svgPath: './assets/header-pattern.svg', svgAttrs: {fill: theme('colors.flexum-bg'), width: 10, height: 14}},
      'flexum-header-sm': {svgPath: './assets/header-pattern.svg', svgAttrs: {fill: theme('colors.flexum-bg'), width: 5, height: 7, viewBox: '0 0 10 14'}},
      'star': {svgPath: './assets/zondicons/star-full.svg', svgAttrs: {fill: theme('colors.flexum')}},
      'bookmark': {svgPath: './assets/zondicons/bookmark.svg', svgAttrs: {fill: theme('colors.gray.700')}},
    }),
  },
  variants: {},
  plugins: [
    require('./tailwind_plugins/fullscreenWidth'),
    require('./tailwind_plugins/backgroundImage'),
    require('tailwindcss-gradients'),
  ],
}
