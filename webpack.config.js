const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'background/index': './src/background/index.ts',
        'content/rootkit': './src/content/rootkit.ts',
        'content/injected': './src/content/injected.ts',
        'content/fetch-interceptor': './src/content/fetch-interceptor.ts',
        'content/aggressive-blocker': './src/content/aggressive-blocker.ts',
        'content/youtube-stealth': './src/content/youtube-stealth.ts',
        'popup/popup': './src/popup/popup.ts',
        'offscreen/offscreen': './src/offscreen/offscreen.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'manifest.json', to: '.' },
                { from: 'rules', to: 'rules' },
                { from: 'icons', to: 'icons' },
                { from: 'src/popup/popup.html', to: 'popup/popup.html' },
                { from: 'src/popup/popup.css', to: 'popup/popup.css' },
                { from: 'src/offscreen/offscreen.html', to: 'offscreen/offscreen.html' }
            ]
        })
    ],
    optimization: {
        minimize: true
    }
};
