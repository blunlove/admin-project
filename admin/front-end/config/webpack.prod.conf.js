const config = require("./webpack.base.conf.js");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

config.plugins = [
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    }),
    new webpack.BannerPlugin('版权所有，翻版必究')
];

module.exports = config;
