const path = require('path')

const plugins = {
  clean: require('clean-webpack-plugin').CleanWebpackPlugin
}

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    index: './index.ts'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.ts']
  },

  plugins: [
    new plugins.clean()
  ],

  devtool: 'source-map'
}
