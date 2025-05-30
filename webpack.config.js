// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';


const stylesHandler = MiniCssExtractPlugin.loader;



const config = {
    entry: {index : './src/utils/index.ts',
        data: './src/data/data.ts',
        ui: './src/ui/mainUIBuilder.ts',
        clickevents: './src/click events/events.ts'
    },
    
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
         clean: true,
    },
    devServer: {
        open: true,
        host: 'localhost',
        static: "./dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Calculator'
        }),

        new MiniCssExtractPlugin(),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            
            {
                test: /\.html$/i,
                exclude: [/node_modules/,require.resolve('./dist/index.html')],
                use: ['html-loader'],
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
