const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(
  __dirname,
  "2-focused",
  "f5",
  "assets",
  "js",
  "main.js"
);
const OUTPUT_DIR = path.join(__dirname, "2-focused", "f5", "static");

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractCSS.extract([
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ]),
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
};

module.exports = config;
