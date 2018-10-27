/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 11/05/16.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class MnFullpageResponsiveSlides {
    // noinspection JSMethodCanBeStatic
    /**
     * Extension of fullpage.js. Requires fullpage.js >= 2.8.5.
     * Turns horizontal slides into vertical sections.
     */
    public toSections(): void {
        $.fn.fullpage.responsiveSlides.toSections();
    }

    // noinspection JSMethodCanBeStatic
    /**
     * Extension of fullpage.js. Requires fullpage.js >= 2.8.5.
     * Turns back the original slides (now converted into
     * vertical sections) into horizontal slides again.
     */
    public toSlides(): void {
        $.fn.fullpage.responsiveSlides.toSlides();
    }
}

@Injectable()
export class MnFullpageService {

    responsiveSlides: MnFullpageResponsiveSlides;

    // noinspection JSMethodCanBeStatic
    /**
     * Scrolls one section up
     */
    public moveSectionUp(): void {
        $.fn.fullpage.moveSectionUp();
    }

    // noinspection JSMethodCanBeStatic
    /**
     * Scrolls one section down
     */
    public moveSectionDown() {
        $.fn.fullpage.moveSectionDown();
    }

    //noinspection JSMethodCanBeStatic
    /**
     * @description Scrolls the page to the given section and slide.
     * The first slide, the visible one by default, will have index 0.
     */
    public moveTo(section: string | number, slide?: number) {
        $.fn.fullpage.moveTo(section, slide);
    }

    //noinspection JSMethodCanBeStatic
    /**
     * Exactly the same as moveTo but in this case it performs the scroll without animation.
     * A direct jump to the destination.
     */
    public silentMoveTo(section: string | number, slide?: number) {
        $.fn.fullpage.silentMoveTo(section, slide);
    }

    //noinspection JSMethodCanBeStatic
    /**
     * Scrolls the horizontal slider of the current section to the next slide
     */
    public moveSlideRight() {
        $.fn.fullpage.moveSlideRight();
    }

    //noinspection JSMethodCanBeStatic
    /**
     * Scrolls the horizontal slider of the current section to the previous slide
     */
    public moveSlideLeft() {
        $.fn.fullpage.moveSlideLeft();
    }

    //noinspection JSMethodCanBeStatic
    /**
     * Sets the scrolling configuration in real time.
     * Defines the way the page scrolling behaves. If it is set to true,
     * it will use the "automatic" scrolling, otherwise, it will use the "manual"
     * or "normal" scrolling of the site. Be careful when combining this option with
     * scrollOverflow set to true, as it might be difficult to scroll using the mouse
     * wheel or the trackpad when the section is scrollable
     */
    public setAutoScrolling(enable: boolean) {
        $.fn.fullpage.setAutoScrolling(enable);
    }

    //noinspection JSMethodCanBeStatic
    /**
     * Sets the value for the option fitToSection determining whether to fit
     * the section in the screen or not.
     */
    public setFitToSection(enable: boolean) {
        $.fn.fullpage.setFitToSection(enable);
    }

    //noinspection JSMethodCanBeStatic
    /**
     * Sets the value for the option lockAnchors determining whether
     * anchors will have any effect in the URL or not.
     */
    public setLockAnchors(enable: boolean) {
        $.fn.fullpage.setLockAnchors(enable);
    }

    //noinspection JSMethodCanBeStatic
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
     */
    public setAllowScrolling(allow: boolean, directions?: string) {
        $.fn.fullpage.setAllowScrolling(allow, directions);
    }

    //noinspection JSMethodCanBeStatic
    /**
     * Adds or remove the possibility of scrolling through sections by
     * using the keyboard arrow keys (which is active by default).
     *
     * Directions: (optional parameter) Admitted values: all, up, down,
     * left, right or a combination of them separated by commas like down,
     * right. It defines the direction for which the scrolling will be
     * enabled or disabled.
     */
    public setKeyboardScrolling(allow: boolean, directions?: string) {
        $.fn.fullpage.setKeyboardScrolling(allow, directions);
    }

    //noinspection JSMethodCanBeStatic
    /**
     * Defines whether to record the history for each hash change in the URL
     */
    public setRecordHistory(enable: boolean) {
        $.fn.fullpage.setRecordHistory(enable);
    }

    //noinspection JSMethodCanBeStatic
    /**
     * Defines the scrolling speed in milliseconds
     */
    public setScrollingSpeed(milliseconds: number) {
        $.fn.fullpage.setScrollingSpeed(milliseconds);
    }

    //noinspection JSMethodCanBeStatic
    /**
     * Destroys the plugin events and optionally its HTML markup and styles.
     * Ideal to use when using AJAX to load content.
     *
     * type: can be empty or all. If all is passed, the HTML markup and styles
     * used by fullpage.js will be removed. This way the original HTML markup,
     * the one used before any plugin modification is made, will be maintained.
     */
    public destroy(type) {
        $.fn.fullpage.destroy(type);
    }

    //noinspection JSMethodCanBeStatic
    /**
     * Updates the DOM structure to fit the new window size or its contents.
     * Ideal to use in combination with AJAX calls or external changes in the
     * DOM structure of the site.
     */
    public reBuild() {
        $.fn.fullpage.reBuild();
    }

    // noinspection JSMethodCanBeStatic
    /**
     * Determines whether or not to fit sections to the viewport or not.
     * When set to true the current active section will always fill the whole viewport.
     * Otherwise the user will be free to stop in the middle of a section.
     */
    public fitToSection(): void {
        $.fn.fullpage.fitToSection();
    }

    // noinspection JSMethodCanBeStatic
    /**
     * Adds or remove the possibility of scrolling through sections
     * by using the mouse wheel or the trackpad.
     */
    public setMouseWheelScrolling(active: boolean): void {
        $.fn.fullpage.setMouseWheelScrolling(active);
    }

    // noinspection JSMethodCanBeStatic
    /**
     * Sets the responsive mode of the page. When set to true the autoScrolling will be turned off and the result
     * will be exactly the same one as when the responsiveWidth or responsiveHeight options get fired.
     */
    public setResponsive(active: boolean): void {
        $.fn.fullpage.setResponsive(active);
    }

    constructor(responsiveSlides?: MnFullpageResponsiveSlides) {
        this.responsiveSlides = responsiveSlides;
    }
}
