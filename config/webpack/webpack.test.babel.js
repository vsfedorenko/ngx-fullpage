/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 11/05/16.
 */

import WebpackMerge from 'webpack-merge';

import CommonWebpackConfig from './webpack.common.babel';

import config from './../helpers/config';
import utils from './../helpers/utils';

export default {
    metadata: {},
    debug: false,
    devtool: 'inline-source-map',
    resolve: {
        extensions: config('common.sources.extensions'),
        root: utils.root(config('common.sources.directory'))
    },
    module: {
        preLoaders: [
            {test: /\.ts$/, loader: 'tslint-loader', exclude: /node_modules/},
            {test: /\.js$/, loader: 'source-map-loader'}
        ],
        loaders: [
            {
                test: /\.ts$/, loader: 'awesome-typescript-loader',
                query: {
                    compilerOptions: {
                        // Remove TypeScript helpers to be injected
                        // below by DefinePlugin
                        removeComments: true
                    }
                },
                exclude: [/\.e2e\.ts$/]
            },
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.css$/, loader: 'raw-loader'},
            {test: /\.scss$/, loaders: ['raw-loader', 'sass-loader']},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file-loader'}
        ],
        postLoaders: [
            {
                test: /\.(js|ts)$/, loader: 'istanbul-instrumenter-loader',
                include: utils.root(config('common.sources.directory')),
                exclude: [
                    /\.(e2e|spec)\.ts$/,
                    /node_modules/
                ]
            }
        ]
    },
    node: WebpackMerge(CommonWebpackConfig.node, {process: false})
};
