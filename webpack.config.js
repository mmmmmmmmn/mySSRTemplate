const ForkTsChecker = require('fork-ts-checker-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/client/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        useBuiltIns: 'usage',
                                        corejs: { version: 3, proposals: false },
                                    },
                                ],
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [new ForkTsChecker()],
}
