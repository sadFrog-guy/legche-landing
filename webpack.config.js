const path = require('path');
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    mode: 'development',
    plugins: [new ErrorOverlayPlugin()],
    devtool: 'cheap-module-source-map',
    devServer: {
        open: true,
        compress: true,
        port: 8080,
        static: './',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ]
    },
}