/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 11/05/16.
 */

import CleanWebpackPlugin from 'clean-webpack-plugin';
import OccurenceOrderPlugin from 'webpack/lib/optimize/OccurenceOrderPlugin';
import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as AwesomeTypescriptLoader from 'awesome-typescript-loader';

import Config from './helpers/config';
import Utils from './helpers/utils';

export default {
    entry: Config('all.sources.entries.list'),
    resolve: {
        extensions: Config('all.sources.extensions'),
        root: Utils.root(Config('all.sources.directory')),
        modulesDirectories: Config('all.sources.modules.directories'),
        alias: ((list) => {
            var result = {};
            for (var key in Object.keys(list)) {
                result[key] = Utils.root(list[key]);
            }
            return result;
        })(Config('all.sources.alias'))
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    // these packages have problems with their sourcemaps
                    Utils.root('node_modules/rxjs'),
                    Utils.root('node_modules/@angular')
                ]
            }
        ],
        loaders: [
            {test: /\.ts$/, loaders: ['awesome-typescript-loader'], exclude: [/\.(spec|e2e)\.ts$/]},
            {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/},
            {test: /\.html$/, loader: 'html-loader'},
            {test: /\.css$/, loaders: ['raw-loader']},
            {test: /\.scss$/, loaders: ['raw-loader', 'sass-loader']},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file-loader'}
        ]
    },
    plugins: [
        new CleanWebpackPlugin([Config('all.dist.directory')], {root: Utils.root(), dry: false, verbose: true}),
        new AwesomeTypescriptLoader.ForkCheckerPlugin(),
        new OccurenceOrderPlugin(true),
        new CommonsChunkPlugin({
            name: Config('all.sources.entries.chunks.commons.list'),
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: Utils.root('demo/index.html'),
            excludeChunks: ['ng2-fullpage'],
            chunksSortMode: Utils.packageSort(['polyfills', 'vendor', 'samples.basic'])
        })
    ]
};
