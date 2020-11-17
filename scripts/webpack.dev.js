const { resolve } = require("path");

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        // open: true,
        hot: true,
        overlay: true,
        before: function () {
            console.log(`\n Starting app \n`);
            return
        },
        after: function () {
            console.log(`\n App started \n`);
            return
        }
    },
    module: {
        rules: [
            {
                // use css-loader to transpile CSS
                test: /\.((c|sa|sc)ss)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
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
    },
};
