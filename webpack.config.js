var path = require('path');
module.exports = {
  context: path.resolve(__dirname, './lib'),
  entry: {
    ta7uul: './index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    library: 'ta7uul',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['latest', 'stage-0'] }
        }],
      },
    ]
  }
};
