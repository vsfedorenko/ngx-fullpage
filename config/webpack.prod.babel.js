/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 11/05/16.
 */

import WebpackMerge from 'webpack-merge';
import UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin';
import CompressionPlugin from 'compression-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';

import CommonWebpackConfig from './webpack.common.babel';

import Config from './helpers/config';
import Utils from './helpers/utils';

export default WebpackMerge(CommonWebpackConfig, {
    debug: false,
    devtool: 'source-map',
    output: {
        path: Utils.root(Config('all.dist.scripts.directory')),
        filename: Config('prod.dist.bundles.filename'),
        sourceMapFilename: Config('prod.dist.bundles.sourceMap.filename'),
        chunkFilename: Config('prod.dist.bundles.chunk.filename')
    },
    plugins: [
        new WebpackMd5Hash(),
        new UglifyJsPlugin({
            beautify: false,
            mangle: {screw_ie8 : true, keep_fnames: true},
            compress: {screw_ie8: true},
            comments: false
        }),
        new CompressionPlugin({regExp: /\.css$|\.html$|\.js$|\.map$/, threshold: 2 * 1024}),
        new HtmlWebpackPlugin({
            template: Utils.root('demo/index.html'),
            filename: Utils.root('index.html'),
            excludeChunks: ['ng2-fullpage'],
            chunksSortMode: Utils.packageSort(['polyfills', 'vendor', 'samples.basic'])
        })
    ],
    htmlLoader: {
        minimize: true,
        removeAttributeQuotes: false,
        caseSensitive: true,
        customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
        ],
        customAttrAssign: [/\)?\]?=/]
    }
});
