/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 15/05/16.
 */
"use strict";
var MnFullpageOptions = (function () {
    /**
     * Public default constructor
     *
     * @param options options js-object
     */
    function MnFullpageOptions(options) {
        if (options) {
            Object.assign(this, options);
        }
    }
    return MnFullpageOptions;
}());
exports.MnFullpageOptions = MnFullpageOptions;
