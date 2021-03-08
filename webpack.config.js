const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
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
    rules: [
      {
        // Loader para scss
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
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
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './detail.html',
      filename: 'detail.html',
      chunks: ['detail']
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8082,
  },

};
