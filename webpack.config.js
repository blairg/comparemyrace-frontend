/* eslint-disable */
var webpack = require('webpack');

var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var OUTPUT_PATH = (process.env.NODE_ENV === 'production') ? path.resolve(ROOT_PATH, 'app/dist') : path.resolve(ROOT_PATH, 'app/build');

module.exports = {
    devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
    entry: [
        path.resolve(ROOT_PATH, 'src/index'),
    ],
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: (process.env.NODE_ENV === 'production') ? [] : ['eslint'],
                include: path.resolve(ROOT_PATH, 'app')
            }
        ],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot-loader/webpack', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react']
        },
        {
            test: /\.scss$/,
            loaders: ['style','css','sass']
        },
        {
          test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        }
      ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: OUTPUT_PATH,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: OUTPUT_PATH,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Compare My Race'
        })
    ]
};
