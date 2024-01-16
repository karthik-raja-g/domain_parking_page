const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
require('dotenv').config({ path: './.env' });

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      domain_name: process.env.DOMAIN_NAME,
      form_link: process.env.FORM_LINK
    }),
    new CopyWebpackPlugin({
        patterns: [
          {
            from: "src/night.webp",
            to: "[name][ext]",
          },
        ],
      })
  ],
};
