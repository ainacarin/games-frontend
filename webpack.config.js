const path = require("path");
module.exports = {
  entry: {
    main: "./src/index.js",
    detail: "./src/detail.js"
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
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8082,
  },

};
