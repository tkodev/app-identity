// ****************************************************************************************************
// Init
// ****************************************************************************************************

// init native dependencies
const path = require('path');

// init dependencies
const { VueLoaderPlugin } = require('vue-loader');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// ****************************************************************************************************
// Export Config
// ****************************************************************************************************

// export config
module.exports = function(env, argv) {

  // init settings
  const paths = {
    src: path.resolve('./src'),
    dist: path.resolve('./dist'),
    modules: path.resolve('../node_modules')
  };
  const appEnv = argv.mode || 'development';
  console.log(`ℹ ｢webpack｣:`, `Webpack in ${appEnv} mode.`);

  // init config
  const config = {
    performance: { hints: false },
    stats: appEnv === 'development' ? 'minimal' : true,
  };

  // set up devServer
  config.devServer = {
    host: 'localhost',
    port: 8080,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api/': 'http://localhost/api/'
    }
  };

  // set up input and root path
  config.entry = {
    app: `${paths.src}/entry.js`,
  };
  config.context = paths.src;

  // set up path resolvers - aliases and extensions to search
  config.resolve = {
    alias: {
      '@': paths.src,
      '~': paths.modules
    },
    extensions: ['.scss', '.sass', '.js', '.vue', '.json']
  };

  // set up sourcemap and processing modules
  config.devtool = appEnv === 'development' ? 'source-map' : false,
  config.module = {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        { loader: 'babel-loader' }
      ]
    }, {
      test: /\.vue$/,
      use: [
        { loader: 'vue-loader'}
      ]
    }, {
      test: /\.pug$/,
      use: [
        { loader: 'pug-plain-loader' }
      ]
    }, {
      test: /\.(sc|c)ss$/,
      use: [
        { loader: appEnv === 'development' ? 'vue-style-loader' : MiniCssExtractPlugin.loader },
        { loader: 'css-loader'},
        { loader: 'postcss-loader', options: { plugins: () => [autoprefixer] } },
        { loader: 'sass-loader' }
      ]
    }, {
      test: /\.sass$/,
      use: [
        { loader: appEnv === 'development' ? 'vue-style-loader' : MiniCssExtractPlugin.loader },
        { loader: 'css-loader'},
        { loader: 'postcss-loader', options: { plugins: () => [autoprefixer] } },
        { loader: 'sass-loader', options: { indentedSyntax: true }}
      ]
    }, {
      test: /\.(svg|png|jpg|gif|txt)$/,
      use: [
        { loader: 'file-loader', options: { name: '[path][name].[ext]', } }
      ]
    }]
  };

  // set up plugins
  config.plugins = [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/index.css',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: `${paths.src}/index.html`,
      filename: `${paths.dist}/index.html`
    })
  ];

  // set up output
  config.output = {
    path: path.dist,
    filename: 'js/index.js'
  };
    
  // return
  return config;

};