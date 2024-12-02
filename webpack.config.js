const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const port = 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: `http://localhost:${port}/`,
    },
    module: {
        rules: [
            // {
            //     test: /\\.jsx?$/,
            //     loader: "babel-loader",
            //     exclude: /node_modules/,
            //     options: {
            //         presets: ["@babel/preset-react"],
            //     },
            // },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react'],
                        },
                }
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'uicomponents',
            filename: 'remoteEntry.js',
            exposes: {
                './Button': './src/Button.js',
            },
            shared: {
                react: {singleton: true}, 
                "react-dom": {singleton: true}
            }
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        port: port
    }
};