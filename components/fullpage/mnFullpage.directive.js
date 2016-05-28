/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var $ = require('jquery');
require('fullpage.js');
var mnFullpage_options_class_1 = require('./mnFullpage-options.class');
var DIRECTIVE_NAME = 'mnFullpage';
var MnFullpageDirective = (function () {
    /**
     * Default public constructor
     *
     * @param el element where directive is placed on
     */
    function MnFullpageDirective(el) {
        this._el = el;
    }
    /**
     * Static method for option name retrieving
     *
     * @param property this class property name
     * @returns {string} FullpageOption class option (property) name
     */
    MnFullpageDirective.extractName = function (property) {
        return property[MnFullpageDirective.propertyPrefix.length].toLowerCase()
            + property.substring(MnFullpageDirective.propertyPrefix.length + 1);
    };
    /**
     * Perform actions on init
     */
    MnFullpageDirective.prototype.ngOnInit = function () {
        /**
         * Initialize options object with default (empty)
         * values if it doesn't exist
         */
        if (!this.options) {
            this.options = new mnFullpage_options_class_1.MnFullpageOptions();
        }
        /**
         * Iterate over all properties of directive class
         */
        for (var _i = 0, _a = Object.keys(this); _i < _a.length; _i++) {
            var property = _a[_i];
            /**
             * If property name doesn't start with 'fullpage' prefix (it is stored in
             * FullpageDirective.propertyPrefix static property) then skip this property and
             * continue the cycle
             */
            if (!property.startsWith(MnFullpageDirective.propertyPrefix)) {
                continue;
            }
            /**
             * Extract option name from the property name
             *
             * @type {string} option name
             */
            var option = MnFullpageDirective.extractName(property);
            /**
             * If options is already defined skip it
             */
            if (this.options[option]) {
                continue;
            }
            /**
             * Set property value to the options object property
             */
            this.options[option] = this[property];
        }
        /**
         * Enable fullpage for the element
         */
        $(this._el.nativeElement).fullpage(this.options);
    };
    /**
     * Prefix for directive-relative properties
     *
     * @type {string} prefix
     */
    MnFullpageDirective.propertyPrefix = "" + DIRECTIVE_NAME;
    __decorate([
        core_1.Input("" + DIRECTIVE_NAME), 
        __metadata('design:type', mnFullpage_options_class_1.MnFullpageOptions)
    ], MnFullpageDirective.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MnFullpageDirective.prototype, "mnFullpageMenu", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageLockAnchors", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MnFullpageDirective.prototype, "mnFullpageAnchors", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageNavigation", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MnFullpageDirective.prototype, "mnFullpageNavigationPosition", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MnFullpageDirective.prototype, "mnFullpageNavigationTooltips", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageShowActiveTooltip", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageSlidesNavigation", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MnFullpageDirective.prototype, "mnFullpageSlidesNavPosition", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageCss3", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MnFullpageDirective.prototype, "mnFullpageScrollingSpeed", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageAutoScrolling", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageFitToSection", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MnFullpageDirective.prototype, "mnFullpageFitToSectionDelay", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageScrollBar", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MnFullpageDirective.prototype, "mnFullpageEasing", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MnFullpageDirective.prototype, "mnFullpageEasingcss3", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageLoopBottom", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageLoopTop", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageLoopHorizontal", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageContinuousVertical", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MnFullpageDirective.prototype, "mnFullpageNormalScrollElements", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageScrollOverflow", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MnFullpageDirective.prototype, "mnFullpageTouchSensitivity", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MnFullpageDirective.prototype, "mnFullpageNormalScrollElementTouchThreshold", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageKeyboardScrolling", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageAnimateAnchor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageRecordHistory", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageControlArrows", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageVerticalCentered", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MnFullpageDirective.prototype, "mnFullpageResize", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MnFullpageDirective.prototype, "mnFullpageSectionsColor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MnFullpageDirective.prototype, "mnFullpagePaddingTop", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MnFullpageDirective.prototype, "mnFullpagePaddingBottom", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MnFullpageDirective.prototype, "mnFullpageFixedElements", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MnFullpageDirective.prototype, "mnFullpageResponsiveWidth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MnFullpageDirective.prototype, "mnFullpageResponsiveHeight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MnFullpageDirective.prototype, "mnFullpageSectionSelector", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MnFullpageDirective.prototype, "mnFullpageSlideSelector", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], MnFullpageDirective.prototype, "mnFullpageAfterLoad", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], MnFullpageDirective.prototype, "mnFullpageOnLeave", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], MnFullpageDirective.prototype, "mnFullpageAfterRender", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], MnFullpageDirective.prototype, "mnFullpageAfterResize", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], MnFullpageDirective.prototype, "mnFullpageAfterSlideLoad", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], MnFullpageDirective.prototype, "mnFullpageOnSlideLeave", void 0);
    MnFullpageDirective = __decorate([
        core_1.Directive({
            selector: "[" + DIRECTIVE_NAME + "]"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MnFullpageDirective);
    return MnFullpageDirective;
}());
exports.MnFullpageDirective = MnFullpageDirective;
