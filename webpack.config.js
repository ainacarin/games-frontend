const path = require("path");
module.exports = {
  // entry: './src/index.js',
  // mode: 'development'
  // mode: 'production'

  entry: {
    main: "./src/index.js",
    detail: "./src/detail.js"
  },
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'main.js'
  // },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8082,
  },

  // entry: ['./src/index.js', './src/details.js'],
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'main.js'
  // },
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 8080,
  // },
};
