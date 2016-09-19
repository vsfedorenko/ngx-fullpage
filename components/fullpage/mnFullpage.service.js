/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 11/05/16.
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
var MnFullpageService = (function () {
    function MnFullpageService() {
    }
    /**
     * Scrolls one section up
     */
    MnFullpageService.prototype.moveSectionUp = function () {
        $.fn.fullpage.moveSectionUp();
    };
    /**
     * Scrolls one section down
     */
    MnFullpageService.prototype.moveSectionDown = function () {
        $.fn.fullpage.moveSectionDown();
    };
    /**
     * Scrolls the page to the given section and slide.
     * The first slide, the visible one by default, will have index 0.
     *
     * @param section
     * @param slide
     */
    MnFullpageService.prototype.moveTo = function (section, slide) {
        $.fn.fullpage.moveTo(section, slide);
    };
    /**
     * Exactly the same as moveTo but in this case it performs the scroll without animation.
     * A direct jump to the destination.
     *
     * @param section
     * @param slide
     */
    MnFullpageService.prototype.silentMoveTo = function (section, slide) {
        $.fn.fullpage.silentMoveTo(section, slide);
    };
    /**
     * Scrolls the horizontal slider of the current section to the next slide
     */
    MnFullpageService.prototype.moveSlideRight = function () {
        $.fn.fullpage.moveSlideRight();
    };
    /**
     * Scrolls the horizontal slider of the current section to the previous slide
     */
    MnFullpageService.prototype.moveSlideLeft = function () {
        $.fn.fullpage.moveSlideLeft();
    };
    /**
     * Sets the scrolling configuration in real time.
     * Defines the way the page scrolling behaves. If it is set to true,
     * it will use the "automatic" scrolling, otherwise, it will use the "manual"
     * or "normal" scrolling of the site. Be careful when combining this option with
     * scrollOverflow set to true, as it might be difficult to scroll using the mouse
     * wheel or the trackpad when the section is scrollable
     *
     * @param enable
     */
    MnFullpageService.prototype.setAutoScrolling = function (enable) {
        $.fn.fullpage.setAutoScrolling(enable);
    };
    /**
     * Sets the value for the option fitToSection determining whether to fit
     * the section in the screen or not.
     *
     * @param enable
     */
    MnFullpageService.prototype.setFitToSection = function (enable) {
        $.fn.fullpage.setFitToSection(enable);
    };
    /**
     * Sets the value for the option lockAnchors determining whether
     * anchors will have any effect in the URL or not.
     *
     * @param enable
     */
    MnFullpageService.prototype.setLockAnchors = function (enable) {
        $.fn.fullpage.setLockAnchors(enable);
    };
    /**
     * Adds or remove the possibility of scrolling through sections by
     * using the mouse wheel/trackpad or touch gestures (which is active
     * by default). Note this won't disable the keyboard scrolling.
     * You would need to use setKeyboardScrolling for it.
     *
     * Directions: (optional parameter) Admitted values: all, up, down,
     * left, right or a combination of them separated by commas like down,
     * right. It defines the direction for which the scrolling will
     * be enabled or disabled.
     *
     * @param allow
     * @param directions
     */
    MnFullpageService.prototype.setAllowScrolling = function (allow, directions) {
        $.fn.fullpage.setAllowScrolling(allow, directions);
    };
    /**
     * Adds or remove the possibility of scrolling through sections by
     * using the keyboard arrow keys (which is active by default).
     *
     * Directions: (optional parameter) Admitted values: all, up, down,
     * left, right or a combination of them separated by commas like down,
     * right. It defines the direction for which the scrolling will be
     * enabled or disabled.
     *
     * @param allow
     * @param directions
     */
    MnFullpageService.prototype.setKeyboardScrolling = function (allow, directions) {
        $.fn.fullpage.setKeyboardScrolling(allow, directions);
    };
    /**
     * Defines whether to record the history for each hash change in the URL
     *
     * @param enable
     */
    MnFullpageService.prototype.setRecordHistory = function (enable) {
        $.fn.fullpage.setRecordHistory(enable);
    };
    /**
     * Defines the scrolling speed in milliseconds
     *
     * @param milliseconds
     */
    MnFullpageService.prototype.setScrollingSpeed = function (milliseconds) {
        $.fn.fullpage.setScrollingSpeed(milliseconds);
    };
    /**
     * Destroys the plugin events and optionally its HTML markup and styles.
     * Ideal to use when using AJAX to load content.
     *
     * type: can be empty or all. If all is passed, the HTML markup and styles
     * used by fullpage.js will be removed. This way the original HTML markup,
     * the one used before any plugin modification is made, will be maintained.
     *
     * @param type
     */
    MnFullpageService.prototype.destroy = function (type) {
        $.fn.fullpage.destroy(type);
    };
    /**
     * Updates the DOM structure to fit the new window size or its contents.
     * Ideal to use in combination with AJAX calls or external changes in the
     * DOM structure of the site.
     */
    MnFullpageService.prototype.reBuild = function () {
        $.fn.fullpage.reBuild();
    };
    MnFullpageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MnFullpageService);
    return MnFullpageService;
}());
exports.MnFullpageService = MnFullpageService;
