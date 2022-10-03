const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
// TODO: Require the html-webpack-plugin

module.exports = {
    entry: './src/client/index.js',
	output: {
        libraryTarget: 'var',
        library: 'Client'
    },
	mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    // TODO: Add the plugin for index.html
    plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
    })
]
    // Don't forget your commas!
}