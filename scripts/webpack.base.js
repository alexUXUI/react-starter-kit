const { resolve } = require("path");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: {
        index: resolve(__dirname, '..', 'src/index.tsx')
    },
    output: {
        filename: '[name].[contenthash].js',
        path: resolve(__dirname, '..', 'dist'),
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"],
        fallback: {
            "path": resolve("path-browserify")
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: "url-loader",
                options: {
                    limit: 8192,
                },
            },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin({
            activeModules: false,
            entries: true,
            modules: true,
            modulesCount: 5000,
            profile: false,
            dependencies: true,
        }),

        // clean out dist
        new CleanWebpackPlugin(),

        // makes our dist
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '..', "public/index.html"),
            filename: "index.html",
            inject: "body",
            title: "caching"
        }),

        // Add support for process.env
        new Dotenv()
    ],
};

module.exports = config;