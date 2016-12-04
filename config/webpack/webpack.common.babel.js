/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 11/05/16.
 */

import CleanWebpackPlugin from 'clean-webpack-plugin';
import CommonsChunkPlugin from 'webpack/lib/optimize/CommonsChunkPlugin';
import ContextReplacementPlugin from 'webpack/lib/ContextReplacementPlugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import DashboardPlugin from 'webpack-dashboard/plugin';

import config from './../helpers/config';
import utils from './../helpers/utils';

export default options => {

    var webpackConfig = {
        entry: config('common.sources.entries.list'),
        resolve: {
            extensions: config('common.sources.extensions'),
            root: utils.root(config('common.sources.directory')),
            modulesDirectories: config('common.sources.modules.directories')
        },
        module: {
            preLoaders: [
                {
                    test: /\.ts$/,
                    loader: 'string-replace-loader',
                    query: {
                        search: '(System|SystemJS)(.*[\\n\\r]\\s*\\.|\\.)import\\((.+)\\)',
                        replace: '$1.import($3).then(mod => (mod.__esModule && mod.default) ? mod.default : mod)',
                        flags: 'g'
                    },
                    include: [utils.root()]
                },
            ],
            loaders: [
                {
                    test: /\.ts$/,
                    loaders: [
                        'awesome-typescript-loader'
                    ],
                    exclude: [/\.(spec|e2e)\.ts$/],
                    query: {
                        declaration: false,
                        sourceMap: false
                    }
                },
                {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/},
                {test: /\.html$/, loader: 'raw-loader'},
                {test: /\.css$/, loaders: ['to-string-loader', 'css-loader']},
                {test: /\.scss$/, loaders: ['raw-loader', 'sass-loader']},
                {test: /\.json$/, loader: 'json-loader'},
                {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file-loader'}
            ],
            postLoaders: [
                {
                    test: /\.js$/,
                    loader: 'string-replace-loader',
                    query: {
                        search: 'var sourceMappingUrl = extractSourceMappingUrl\\(cssText\\);',
                        replace: 'var sourceMappingUrl = "";',
                        flags: 'g'
                    }
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin([config('common.build.directory')], {
                root: utils.root(), dry: false, verbose: true
            }),
            new CommonsChunkPlugin({
                name: config('common.sources.entries.chunks.commons.list'),
                minChunks: Infinity
            }),
            new ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
                utils.root(config('common.sources.directory'))
            ),
            new HtmlWebpackPlugin({
                template: utils.root(config('common.build.html.src')),
                filename: utils.relative(
                    utils.root(config('common.build.scripts.directory')),
                    utils.root(config('common.build.html.dist'))
                ),
                excludeChunks: ['ng2-fullpage']
            })
        ],
        node: {
            global: 'window',
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }
    };

    if (process.env.DASHBOARD) {
        webpackConfig.plugins.push(new DashboardPlugin());
    }

    return webpackConfig;

};
