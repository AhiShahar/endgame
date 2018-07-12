var path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/scripts/app.jsx",
  devtool: "source-map",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".json", ".jsx", ".scss"]
  },
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("styles.css")]
};
