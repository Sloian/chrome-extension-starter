/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
    devtool: "inline-source-map",
    mode: "development",
});
