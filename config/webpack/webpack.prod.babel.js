/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 11/05/16.
 */

import WebpackMerge from 'webpack-merge';
import UnminifiedWebpackPlugin from 'unminified-webpack-plugin';
import UglifyJsPlugin from 'webpack/lib/optimize/UglifyJsPlugin';
import CompressionPlugin from 'compression-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';

import CommonWebpackConfig from './webpack.common.babel';

import config from './../helpers/config';
import utils from './../helpers/utils';

export default options => {

    return WebpackMerge(CommonWebpackConfig({env: 'production'}), {
        debug: false,
        devtool: 'source-map',
        output: {
            path: utils.root(config('common.build.scripts.directory')),
            filename: config('prod.build.bundles.filename'),
            sourceMapFilename: config('prod.build.bundles.sourceMap.filename'),
            chunkFilename: config('prod.build.bundles.chunk.filename')
        },
        plugins: [
            new WebpackMd5Hash(),
            new UnminifiedWebpackPlugin(),
            new UglifyJsPlugin({
                beautify: false,
                mangle: {screw_ie8 : true, keep_fnames: true},
                compress: {screw_ie8: true},
                comments: false
            }),
            new CompressionPlugin({regExp: /\.css$|\.html$|\.js$|\.map$/, threshold: 2 * 1024})
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
        },
        node: {process: false}
    });

};
