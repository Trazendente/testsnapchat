const path = require('path');

module.exports = {
  mode: 'development', // or 'production' depending on your needs
  entry: './src/main.js',
  output: {
    filename: 'packed.js',
    path: path.resolve(__dirname, 'docs'),
  },
  optimization: {
    minimize: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
    client: {
      overlay: false,
    },
    compress: true,
    port: 9000,
  },
};
