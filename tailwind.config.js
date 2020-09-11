module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
    content: [],
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
  },
  variants: {},
  plugins: [],
};
