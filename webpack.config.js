const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, './dist');
const srcPath = path.resolve(__dirname, './src');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
    entry: "./src/app/index.jsx",
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        //Moves files
        new TransferWebpackPlugin([
            {from: 'www'},
        ], path.resolve(__dirname, "./src")),
    ],
    output: {
        path: buildPath,    //Path of output file
        filename: 'index.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$|\.jsx$/,
                loader: 'babel-loader',
                include: [srcPath],
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ],
    },
};

module.exports = config;
