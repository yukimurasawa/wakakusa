const path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
    
  entry: {
    top: './wakakusa/frontend/src/pages/index.js',
    calendars: './wakakusa/frontend/src/pages/calendars/index.js',
  },
  
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '.frontend/static/frontend/'),
  },
  
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
  ],
  
  module: {
    rules: [
        {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
     
    ]
  }
};

