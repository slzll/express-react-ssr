const path = require("path");
const merge = require("webpack-merge");
const config = require("./webpack.base");

const clientConfig = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public")
  }
};
console.log(process.env.NODE_ENV);

module.exports = merge(config, clientConfig);
