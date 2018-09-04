// this is actually a node-script; have access to all things
// you usually have in node

// essential things webpack needs
// 1. entry 
// 2. output

const path = require('path');

module.exports = {
  entry: "./src/app.js",
  output: {
    // has to be an ABSOLUTE PATH here.
    // need to use path.join because paths and folders are written/handled
    // differently for different operating systems
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};