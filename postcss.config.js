export default {
  plugins: {
    'postcss-import': {},
    'postcss-sort-media-queries': {
      sort: 'mobile-first',
    },
    'postcss-normalize': {},
    'postcss-preset-env': {
      stage: 3,
      autoprefixer: {
        flexbox: 'no-2009',
      },
      features: {
        'custom-properties': false,
      },
    },
  },
};
