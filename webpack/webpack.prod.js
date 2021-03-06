const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const {prod_Path, src_Path} = require("./path");
const {selectedPreprocessor} = require("./loader");

module.exports = {
    entry: {
        main: "./" + src_Path + "/index.ts",
        'emails-input': "./" + src_Path + "/emails-input/emails-input.ts",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, prod_Path),
        filename: "[name].js",
    },
    //devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: selectedPreprocessor.fileRegexp,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader: selectedPreprocessor.loaderName,
                    },
                ],
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, prod_Path), {
            root: process.cwd(),
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: "./" + src_Path + "/index.html",
            filename: "index.html",
        }),
        new WebpackMd5Hash(),
    ],
};
