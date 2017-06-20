const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
          script: path.resolve(__dirname, 'src/main.js'),
          style: path.resolve(__dirname, 'src/scss/main.scss')
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({use: ['css-loader', 'sass-loader']})
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ]
};

