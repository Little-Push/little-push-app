import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import InterpolateHtmlPlugin from 'interpolate-html-plugin';

const config = {
    entry: {
        app: {
            import: './src/index.js',
            filename: 'app.js'
        }
    },
    output: {
        path: path.resolve(process.cwd(), 'build')
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true,
        devMiddleware: {
          writeToDisk: true
        },
        proxy: {
            '/': 'http://localhost:8080'
        }
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new InterpolateHtmlPlugin({
            'PUBLIC_URL': ''
        })
    ]
}

export default config;
