/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */

import rawConfig from '../build.config';
import utils from './utils';

const CONFIG = utils.interpolate(rawConfig);

export default function config(name) {
    return utils.get(CONFIG, name);
}

