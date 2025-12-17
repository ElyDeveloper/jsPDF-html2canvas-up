const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, 'src/index.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isProd ? 'jspdf-html2canvas-up.min.js' : 'jspdf-html2canvas-up.js',
    library: {
      name: 'html2PDF',
      type: 'umd',
      export: 'default'
    },
    globalObject: 'this',
    clean: true
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: { '@': path.join(__dirname, 'src') },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    jspdf: {
      commonjs: 'jspdf',
      commonjs2: 'jspdf',
      amd: 'jspdf',
      root: 'jspdf'
    }
  },
  experiments: {
    outputModule: false
  }
}
