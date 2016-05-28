/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 15/05/16.
 */
"use strict";
var core_1 = require('@angular/core');
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
    MnFullpageOptions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object])
    ], MnFullpageOptions);
    return MnFullpageOptions;
}());
exports.MnFullpageOptions = MnFullpageOptions;
//# sourceMappingURL=mnFullpage-options.class.js.map