const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    plugins: [
        // shows break down of code assets sizes
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'report.html',
            openAnalyzer: false
        }),
    ]
}