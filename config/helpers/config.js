/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */

import RawConfig from '../../build.config';
import Helpers from './utils';

const CONFIG = Helpers.interpolate(RawConfig);

export default function config(name) {
    return Helpers.get(CONFIG, name);
}

