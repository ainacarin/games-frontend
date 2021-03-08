const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    chunks: ['main']
  }),
  new HtmlWebpackPlugin({
    template: './detail.html',
    filename: 'detail.html',
    chunks: ['detail']
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
  })
];

const loaders = [
  {
    // Loader para scss
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // "style-loader",
      // cambio el loader para poner el loader propio del plugin para css
      MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  },
  {
    // Loader para versiones diferentes de navegadores 
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      // options: {
      //   presets: ['@babel/preset-env']
      // } //se pone en el archivo de configuración .babelrc
    },
  }
];

module.exports = {
  // punto de partida de todas las rutas para no estar escribiéndolas cte
  context: __dirname + '/src',
  entry: {
    main: "./index.js",
    detail: "./detail.js"
  },
  output: {
    filename: '[name].[contenthash].js',
    // para que no queden archivos residuales de compilaciones anteriores
    clean: true
  },
  module: {
    rules: loaders
  },
  plugins: plugins,
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8082,
  },

};
