const path = require("path");
const { NODE_ENV } = process.env;

const config = {
  mode: "development",

  entry: "./src/index.ts",

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [/node_modules/],
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },
};

if (NODE_ENV === "DEVELOPMENT") {
  config.devServer = {
    // contentBase: path.resolve(__dirname, "dist"),
    disableHostCheck: true,
    host: "0.0.0.0",
    port: 8080,
    historyApiFallback: true,
    hot: true,
    inline: true,
    // open: true,
    overlay: true,
    clientLogLevel: "warning",
    quiet: true,
  };

  config.devtool = "inline-source-map";
}

if (NODE_ENV === "PRODUCTION") {
  config.devtool = "source-map";
}

module.exports = config;
