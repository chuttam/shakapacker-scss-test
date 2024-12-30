// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.
// const { generateWebpackConfig } = require('shakapacker')
// const path = require('path');

// const customConfig = {
//   resolve: {
//     alias: {
//       '@actions': path.resolve(__dirname, '../../app/javascript/src/actions'),
//     },
//     extensions: ['.css', '.js'],
//   },
// };

// module.exports = generateWebpackConfig(customConfig);

const { globalMutableWebpackConfig: webpackConfig } = require('shakapacker');
const webpack = require('webpack')
const { merge } = require('webpack-merge');
const path = require('path');

// This section creates application.css as a webpack manifest asset.
// Requires use of css-loader and style-loader.
webpackConfig.module.rules.map((module) => {
  if (module.test && module.test.toString().includes('scss')) {
    module.use.splice(-1, 0, {
      loader: require.resolve('resolve-url-loader'),
    });
  }
  return module;
});


const options = {
  context: path.resolve(__dirname, '../../app/frontend'),
  // resolve: {
  //   extensions: ['.eot', '.woff', '.woff2', '.ttf'],
  // }
};

module.exports = merge(options, webpackConfig);
