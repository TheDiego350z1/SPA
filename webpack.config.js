const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports	= {
    enrty: './src/index.js',
    output: {
        path: path.resolve(__dirnamem, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\,js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }   
            }
        ]
    },
    plugin: [
        new HtmlWebpackPlugin([
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ])
    ]
}