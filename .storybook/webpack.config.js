var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|\*.module.js)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-1', 'react'] 
                }
            },
            {
                test: /\.(scss|css)?$/,
                exclude: /(lib\\)/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
            }
        ]
    },

    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
};