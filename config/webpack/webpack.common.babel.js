/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 11/05/16.
 */

import CleanWebpackPlugin from 'clean-webpack-plugin';
import OccurenceOrderPlugin from 'webpack/lib/optimize/OccurenceOrderPlugin';
import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as AwesomeTypescriptLoader from 'awesome-typescript-loader';

import config from './../helpers/config';
import utils from './../helpers/utils';

export default {
    entry: config('common.sources.entries.list'),
    resolve: {
        extensions: config('common.sources.extensions'),
        root: utils.root(config('common.sources.directory')),
        modulesDirectories: config('common.sources.modules.directories')
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    utils.root('node_modules/rxjs'),
                    utils.root('node_modules/@angular')
                ]
            }
        ],
        loaders: [
            {
                test: /\.ts$/, loader: 'awesome-typescript-loader',
                exclude: [/\.(spec|e2e)\.ts$/],
                query: {
                    declaration: false,
                    sourceMap: false
                }
            },
            {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/},
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.css$/, loaders: ['raw-loader']},
            {test: /\.scss$/, loaders: ['raw-loader', 'sass-loader']},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file-loader'}
        ]
    },
    plugins: [
        new CleanWebpackPlugin([config('common.build.directory')], {root: utils.root(), dry: false, verbose: true}),
        new AwesomeTypescriptLoader.ForkCheckerPlugin(),
        new OccurenceOrderPlugin(true),
        new CommonsChunkPlugin({
            name: config('common.sources.entries.chunks.commons.list'),
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: utils.root(config('common.build.html.src')),
            filename: utils.relative(
                utils.root(config('common.build.scripts.directory')),
                utils.root(config('common.build.html.dist'))
            ),
            excludeChunks: ['ng2-fullpage'],
            chunksSortMode: utils.packageSort(['polyfills', 'vendor', 'demo'])
        })
    ]
};
