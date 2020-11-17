const { resolve } = require("path");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                // use babel to transpile typescript
                test: /\.tsx?$/,
                exclude: /\.spec.tsx|ts?$/,
                use: "babel-loader",
                exclude: [
                    resolve(__dirname, '..', "specs"),
                    resolve(__dirname, '..', "node_modules")
                ],
            },
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        // minify CSS
        new MiniCssExtractPlugin({
            chunkFilename: '[id].css',
            filename: '[name].css',
        }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: './src/**/*.{ts,tsx,js,jsx}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
            },
            typescript: {
                configFile: resolve(__dirname, '..', ".tsconfig.json"),

                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
            },
        })
    ]
};