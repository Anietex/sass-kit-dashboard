const webpack = require('webpack');
const path = require('path');


module.exports = {

    mode: "development",
    watch: true,
    entry: {

        app: './src/js/app.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin()
    ],

    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },


}