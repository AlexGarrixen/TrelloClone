const plugin = require('tailwindcss/plugin');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: isProd,
    layers: ['utilities', 'components', 'base'],
    content: ['./src/**/*.html', './src/**/*.js'],
  },
  theme: {
    fontFamily: {
      sans: ['Poppins'],
    },
    colors: {
      primary: '#2F80ED',
      gray: {
        10: '#F8F9FD',
        20: '#F2F2F2',
        30: '#E0E0E0',
        40: '#828282',
        50: '#4F4F4F',
      },
      red: {
        10: '#EB5757',
      },
      green: {
        10: '#D3EADD',
        20: '#219654',
      },
      yellow: {
        10: '#FCF4DB',
        20: '#F2C94C',
      },
      orange: {
        10: '#FCEBDB',
        20: '#F2994A',
      },
      purple: {
        10: '#EBDCF9',
        20: '#9B51E0',
      },
      blue: {
        10: '#D5E6FB',
        20: '#2F80ED',
      },
    },
    boxShadow: {
      xs: '0px 2px 2px rgba(0, 0, 0, 0.05)',
      sm: '0px 2px 8px rgba(0, 0, 0, 0.1)',
      md: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    },
    transitionTimingFunction: {
      'bezier-1': 'cubic-bezier(0.73, 0.005, 0.22, 1)',
    },
    fontSize: {
      lg: '1.125rem',
      base: '1rem',
      sm: '0.875rem',
      '2xs': '0.75rem',
      xs: '0.625rem',
    },
  },
  variants: {},
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilties = {
        '.col-1': {
          'max-width': '8.333333333333333%',
          'flex-basis': '8.333333333333333%',
          'flex-grow': 0,
        },
        '.col-2': {
          'max-width': '16.66666666666667%',
          'flex-basis': '16.66666666666667%',
          'flex-grow': 0,
        },
        '.col-3': { 'max-width': '25%', 'flex-basis': '25%', 'flex-grow': 0 },
        '.col-4': {
          'max-width': '33.33333333333333%',
          'flex-basis': '33.33333333333333%',
          'flex-grow': 0,
        },
        '.col-5': {
          'max-width': '41.66666666666667%',
          'flex-basis': '41.66666666666667%',
          'flex-grow': 0,
        },
        '.col-6': { 'max-width': '50%', 'flex-basis': '50%', 'flex-grow': 0 },
        '.col-7': {
          'max-width': '58.33333333333333%',
          'flex-basis': '58.33333333333333%',
          'flex-grow': 0,
        },
        '.col-8': {
          'max-width': '66.66666666666667%',
          'flex-basis': '66.66666666666667%',
          'flex-grow': 0,
        },
        '.col-9': { 'max-width': '75%', 'flex-basis': '75%', 'flex-grow': 0 },
        '.col-10': {
          'max-width': '83.33333333333333%',
          'flex-basis': '83.33333333333333%',
          'flex-grow': 0,
        },
        '.col-11': {
          'max-width': '91.66666666666667%',
          'flex-basis': '91.66666666666667%',
          'flex-grow': 0,
        },
      };

      addUtilities(newUtilties, ['responsive']);
    }),
  ],
};
