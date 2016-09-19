/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 11/05/16.
 */

import WebpackMerge from 'webpack-merge';

import CommonWebpackConfig from './webpack.common.babel';

const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');

import config from './../helpers/config';
import utils from './../helpers/utils';

export default options => {

    return WebpackMerge(CommonWebpackConfig({env: 'development'}), {
        debug: true,
        devtool: 'cheap-module-source-map',
        output: {
            path: utils.root(config('common.build.scripts.directory')),
            filename: config('dev.build.bundles.filename'),
            sourceMapFilename: config('dev.build.bundles.sourceMap.filename'),
            chunkFilename: config('dev.build.bundles.chunk.filename'),
        },
        plugins: [
            new NamedModulesPlugin(),
        ],
        devServer: {
            host: 'localhost',
            port: 3000,
            historyApiFallback: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
            outputPath: utils.root(config('common.build.directory'))
        },
        node: {process: true}
    });

};
