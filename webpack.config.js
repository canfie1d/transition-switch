process.env.NODE_ENV = 'production';
/* global __dirname, require, module*/
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = () => {
  const plugins = [
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            {
              source: 'lib/index.js',
              destination: 'demo/src/transition-switch.js',
            },
          ],
        },
      },
    }),
  ];

  const jsRules = {
    test: /\.(js)$/,
    include: path.resolve(__dirname, 'src'),
    exclude: /node_modules/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'umd',
            targets: {
              esmodules: true,
            },
          },
        ],
        ['@babel/preset-react'],
      ],
    },
  };

  return {
    entry: __dirname + '/src/index.js',
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
      rules: [jsRules],
    },
    resolve: {
      modules: [path.resolve('./node_modules'), path.resolve('./src')],
      extensions: ['.json', '.js'],
    },
    mode: 'production',
    plugins: plugins,
  };
};
