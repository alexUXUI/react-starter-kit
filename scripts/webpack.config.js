const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = () => {
    console.log(`\n Running in ${process.env.NODE_ENV} env \n`);
    const envConfig = require(`./webpack.${process.env.NODE_ENV}.js`);
    return merge(baseConfig, envConfig);
};