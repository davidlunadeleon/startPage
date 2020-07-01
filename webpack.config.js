const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
        options: './src/js/options.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/web'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: 'index.html',
            cache: false,
            template: './src/html/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['options'],
            filename: 'options.html',
            cache: false,
            template: './src/html/options.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};