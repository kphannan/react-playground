// module.exports = {
//     entry: './src/app.js',
//     output: {
//         filename: './app.bundle.js'
//     }
// }

var webpack = require('webpack');
var path = require( 'path' );
var nodeExternals = require( 'webpack-node-externals' );

var BUILD_DIR = path.join( __dirname, 'dist' );
var APP_DIR = path.join( __dirname, 'src' );

var config = {
    entry: APP_DIR + '/App.js',
    output: {
        path: BUILD_DIR,
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                include: /src/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
        // loaders: [
        //     {
        //         test: /\.(js|jsx)$/,
        //         // include: APP_DIR,
        //         exclude: /node_modules/,
        //         use: 'babel-loader'
        //     }
        // ]
    }
}


module.exports = config;

