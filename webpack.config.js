import path from 'path'
import { fileURLToPath } from 'url'
import webpack from 'webpack'
import dotenv from 'dotenv'

dotenv.config();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const isProduction = 'production'

const config = {
    entry: {
        employees: './src/employees.jsx',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'all',
        }
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            // Define environment variables to be accessible in your React code
            'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL || 'http://localhost:5000'),  // Default to localhost if not defined
        }),
    ]
}

export default function() {
    if(isProduction) {
        config.mode = 'production'
    } else {
        config.mode = 'development'
    }
    return config
}