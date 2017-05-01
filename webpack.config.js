/* eslint-disable */
var webpack = require('webpack');

var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var PRODUCTION = process.env.NODE_ENV === 'production';
var OUTPUT_PATH = (PRODUCTION) ? path.resolve(ROOT_PATH, 'app/dist') : path.resolve(ROOT_PATH, 'app/build');

console.log(OUTPUT_PATH);

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
    devtool: (PRODUCTION) ? '' : 'source-map',
    entry: [
        path.resolve(ROOT_PATH, 'client/index'),
    ],
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: (PRODUCTION) ? [] : ['eslint'],
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
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
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
        }),
        devFlagPlugin
    ]
};
