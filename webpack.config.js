const path = require("path");

module.exports = {
  mode: "none",
  entry: "./app/index.js",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    host: "localhost",
    port: 3000,
    open: true,
  },
};
