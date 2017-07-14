const path = require('path');
const ETP = require('extract-text-webpack-plugin');
const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                //use: ['style-loader', 'css-loader'],
                use: ETP.extract({
                    use: "css-loader"
                }),
                test: /\.css$/
            }
        ]
    },

    plugins: [new ETP('style.css')]
};

module.exports = config;
