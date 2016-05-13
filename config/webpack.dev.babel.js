/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 11/05/16.
 */

import WebpackMerge from 'webpack-merge';

import CommonWebpackConfig from './webpack.common.babel';

import Config from './helpers/config';
import Utils from './helpers/utils';

export default WebpackMerge(CommonWebpackConfig, {
    debug: true,
    devtool: 'cheap-module-source-map',
    output: {
        path: Utils.root(Config('all.dist.scripts.directory')),
        filename: Config('dev.dist.bundles.filename'),
        sourceMapFilename: Config('dev.dist.bundles.sourceMap.filename'),
        chunkFilename: Config('dev.dist.bundles.chunk.filename')
    }
});
