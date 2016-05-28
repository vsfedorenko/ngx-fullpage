/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 11/05/16.
 */

import {Injectable} from '@angular/core';

import * as $ from 'jquery';
import 'fullpage.js';

@Injectable()
export class MnFullpageService {

    /**
     * Scrolls one section up
     */
    public moveSectionUp(): void {
        $.fn.fullpage.moveSectionUp();
    }

    /**
     * Scrolls one section down
     */
    public moveSectionDown() {
        $.fn.fullpage.moveSectionDown();
    }

    /**
     * Scrolls the page to the given section and slide.
     * The first slide, the visible one by default, will have index 0.
     *
     * @param section
     * @param slide
     */
    public moveTo(section: string | number, slide?: number) {
        $.fn.fullpage.moveTo(section, slide);
    }

    /**
     * Exactly the same as moveTo but in this case it performs the scroll without animation.
     * A direct jump to the destination.
     *
     * @param section
     * @param slide
     */
    public silentMoveTo(section: string | number, slide?: number) {
        $.fn.fullpage.silentMoveTo(section, slide);
    }

    /**
     * Scrolls the horizontal slider of the current section to the next slide
     */
    public moveSlideRight() {
        $.fn.fullpage.moveSlideRight();
    }

    /**
     * Scrolls the horizontal slider of the current section to the previous slide
     */
    public moveSlideLeft() {
        $.fn.fullpage.moveSlideLeft();
    }

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
    public setAutoScrolling(enable: boolean) {
        $.fn.fullpage.setAutoScrolling(enable);
    }

    /**
     * Sets the value for the option fitToSection determining whether to fit
     * the section in the screen or not.
     *
     * @param enable
     */
    public setFitToSection(enable: boolean) {
        $.fn.fullpage.setFitToSection(enable);
    }

    /**
     * Sets the value for the option lockAnchors determining whether
     * anchors will have any effect in the URL or not.
     *
     * @param enable
     */
    public setLockAnchors(enable: boolean) {
        $.fn.fullpage.setLockAnchors(enable);
    }

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
    public setAllowScrolling(allow: boolean, directions?: string) {
        $.fn.fullpage.setAllowScrolling(allow, directions);
    }

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
    public setKeyboardScrolling(allow: boolean, directions?: string) {
        $.fn.fullpage.setKeyboardScrolling(allow, directions);
    }

    /**
     * Defines whether to record the history for each hash change in the URL
     *
     * @param enable
     */
    public setRecordHistory(enable: boolean) {
        $.fn.fullpage.setRecordHistory(enable);
    }

    /**
     * Defines the scrolling speed in milliseconds
     *
     * @param milliseconds
     */
    public setScrollingSpeed(milliseconds: number) {
        $.fn.fullpage.setScrollingSpeed(milliseconds);
    }

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
    public destroy(type: string) {
        $.fn.fullpage.destroy(type);
    }

    /**
     * Updates the DOM structure to fit the new window size or its contents.
     * Ideal to use in combination with AJAX calls or external changes in the
     * DOM structure of the site.
     */
    public reBuild() {
        $.fn.fullpage.reBuild();
    }

}
