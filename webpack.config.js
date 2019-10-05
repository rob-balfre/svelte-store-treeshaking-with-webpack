const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = (env, argv) => {
    return ({
        entry: {
            ComponentA: './src/ComponentA.svelte',
            ComponentB: './src/ComponentB.svelte',
        },
        resolve: {
            extensions: ['.mjs', '.js', '.svelte'],
            alias: {
                svelte: path.resolve('node_modules', 'svelte')
            },
            mainFields: ['svelte', 'browser', 'module', 'main']
        },
        output: {
            filename: '[name].js',
            path: path.resolve('./build'),
            chunkFilename: '[id].[hash].chunk.js'
        },
        optimization: {
            splitChunks: {
                chunks: "all",
            }
        },
        module: {
            rules: [
                {
                    test: /\.svelte$/,
                    use: [
                        {
                            loader: 'svelte-loader',
                            options: {
                                emitCss: true,
                                accessors: true
                            },
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        'css-loader',
                    ]
                }
            ]
        },
        mode: 'production',
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
            new BundleAnalyzerPlugin()
        ],
    });
};
