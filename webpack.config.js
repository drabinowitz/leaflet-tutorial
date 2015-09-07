module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + '/bin/',
    filename: "bundle.js",
    publicPath: "/bin/"
  }
};
