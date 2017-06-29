var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
    entry:  __dirname + "/src/js/main.js",
    output: {
        path: __dirname + "/build",

        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?includePaths[]=./node_modules'
            },
            {
                test: /\.(ttf|otf|eot|svg|jpg|jpeg|png|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'url?limit=10000'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        modulesDirectories: ['fonts','node_modules'],
        extensions: ['', '.json', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.ProvidePlugin({
            'Promise': 'exports?global.Promise!es6-promise',
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    postcss: function() {
        return [
            autoprefixer({
                browsers: ['last 3 versions']
            })
        ]
    }
};