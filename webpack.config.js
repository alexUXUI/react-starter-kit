const { resolve } = require("path");
const webpack = require("webpack");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === "production";

const config = {
    mode: isProd ? "production" : "development",
    entry: {
        index: "./src/index.tsx",
    },
    output: {
        filename: '[name].[contenthash].js',
        path: resolve(__dirname, 'dist'),
    },

    // cache files between builds
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                // use babel to transpile typescript
                test: /\.tsx?$/,
                exclude: /\.spec.tsx|ts?$/,
                use: "babel-loader",
                exclude: [
                    resolve(__dirname, "specs"),
                    resolve(__dirname, "node_modules")
                ],
            },
            {
                // use css-loader to transpile CSS
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        // minify CSS
        new MiniCssExtractPlugin({
            chunkFilename: '[id].css',
            filename: '[name].css',
        }),

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
            template: "./public/index.html",
            filename: "index.html",
            inject: "body",
            title: "caching"
        }),

        // shows break down of code assets sizes
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'report.html',
            openAnalyzer: false
        }),
    ],
};

if (isProd) {
    config.optimization = {
        minimizer: [new TerserWebpackPlugin()],
    };
} else {
    config.devServer = {
        port: 9000,
        open: true,
        hot: true,
        overlay: true,
        before: function () {
            console.log(`\n\n Starting... \n`);
            return
        },
        after: function () {
            console.log(`\n Securian Book Of Business development Server \n\n`);
            return
        }
    };
}

module.exports = config;