module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + '/bin/',
    filename: "bundle.js",
    publicPath: "/bin/"
  },
  module: {
    loaders: [
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.css$/, loader: "style-loader!css-loader" }
   ]
 }
};
