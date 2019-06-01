// ****************************************************************************************************
// Init
// ****************************************************************************************************

// init native dependencies
const path = require('path');

// init dependencies
const { VueLoaderPlugin } = require('vue-loader')
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// ****************************************************************************************************
// Export Config
// ****************************************************************************************************

// export config
module.exports = function(env, argv) {

  // init settings
  const appEnv = argv.mode || 'development';
  console.log(`Webpack in ${appEnv} mode.`)

  // init config
  return {
    entry: {
      app: path.resolve('./private/entry.js'),
    },
    context: path.resolve('./private'),
    resolve: {
      alias: {
        '@': path.resolve('./private'),
        '~': path.resolve('./node_modules')
      },
      extensions: ['.js', '.vue', '.json']
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      }, {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            plugins: () => [autoprefixer]
          }
        }]
      }, {
        test: /\.(sa|sc|c)ss$/,
        use: [{
          loader: appEnv === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader
        }, {
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
        }, {
          loader: 'sass-loader'
        }]
      }, {
        test: /\.pug$/,
        use: [{
          loader: 'pug-plain-loader'
        }]
      }, {
        test: /\.(svg|png|jpg|gif|txt)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          }
        }]
      }]
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/index.css',
      }),
      new HtmlWebpackPlugin({
        hash: true,
        template: path.resolve('./private/index.html'),
        filename: path.resolve('./public/index.html')
      }),
      
    ],
    devtool: appEnv === 'development' ? 'source-map' : false,
    output: {
      path: path.resolve('./public'),
      filename: 'js/index.js'
    },
    devServer: {
      contentBase: path.resolve('./public'),
      open: true,
      port: 8080
    },
    performance: { hints: false },
    stats: appEnv === 'development' ? 'minimal' : true,
  }

};