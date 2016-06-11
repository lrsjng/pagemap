const webpack = require('webpack');
const pkg = require('./package.json');
const banner = `${pkg.name} v${pkg.version} - ${pkg.homepage}`;

module.exports = {
    entry: './lib/pagemap.js',
    output: {
        path: './dist',
        filename: 'pagemap.js',
        library: 'pagemap',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                presets: ['es2015']
            }
        }]
    },
    plugins: [
        new webpack.BannerPlugin(banner),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
