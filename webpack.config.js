process.env.NODE_ENV = 'production';

/* global __dirname, require, module*/
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => {
  let plugins = [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'lib/index.js',
          to: '../demo/src/transition-switch.js',
          force: true,
          transform: function (content) {
            return '/* eslint-disable */\n' + content;
          },
        },
      ],
    }),
  ];

  return {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
      path: __dirname + '/lib',
      filename: 'index.js',
      library: 'index.js',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
      'react-router-dom': 'react-router-dom',
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
          options: {
            customize: require.resolve(
              'babel-preset-react-app/webpack-overrides'
            ),
            babelrc: false,
            configFile: false,
            presets: [
              [
                require.resolve('babel-preset-react-app'),
                {
                  runtime: 'classic',
                },
              ],
            ],
            cacheDirectory: true,
            cacheCompression: false,
            compact: true,
          },
        },
      ],
    },
    resolve: {
      modules: [path.resolve('./node_modules'), path.resolve('./src')],
      extensions: ['.json', '.js'],
    },
    mode: 'production',
    plugins: plugins,
  };
};
