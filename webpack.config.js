/**
 * Webpack config for the bundles
 *
 * @author lo.pennequin@gmail.com (Daria)
 */

const path = require('path');
const merge = require('webpack-merge');
const commonCfg = require(path.join(
    __dirname,
    'config/webpack/webpack.common.js'
));
const clientCfg = require(path.join(
    __dirname,
    'config/webpack/webpack.client.js'
));
const serverCfg = require(path.join(
    __dirname,
    'config/webpack/webpack.server.js'
));

module.exports = env => [
    merge(commonCfg(env), clientCfg(env)),
    merge(commonCfg(env), serverCfg)
];
