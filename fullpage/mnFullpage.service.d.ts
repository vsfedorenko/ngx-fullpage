import 'fullpage.js';
export declare class MnFullpageService {
    /**
     * Scrolls one section up
     */
    moveSectionUp(): void;
    /**
     * Scrolls one section down
     */
    moveSectionDown(): void;
    /**
     * Scrolls the page to the given section and slide.
     * The first slide, the visible one by default, will have index 0.
     *
     * @param section
     * @param slide
     */
    moveTo(section: string | number, slide?: number): void;
    /**
     * Exactly the same as moveTo but in this case it performs the scroll without animation.
     * A direct jump to the destination.
     *
     * @param section
     * @param slide
     */
    silentMoveTo(section: string | number, slide?: number): void;
    /**
     * Scrolls the horizontal slider of the current section to the next slide
     */
    moveSlideRight(): void;
    /**
     * Scrolls the horizontal slider of the current section to the previous slide
     */
    moveSlideLeft(): void;
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
    setAutoScrolling(enable: boolean): void;
    /**
     * Sets the value for the option fitToSection determining whether to fit
     * the section in the screen or not.
     *
     * @param enable
     */
    setFitToSection(enable: boolean): void;
    /**
     * Sets the value for the option lockAnchors determining whether
     * anchors will have any effect in the URL or not.
     *
     * @param enable
     */
    setLockAnchors(enable: boolean): void;
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
    setAllowScrolling(allow: boolean, directions?: string): void;
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
    setKeyboardScrolling(allow: boolean, directions?: string): void;
    /**
     * Defines whether to record the history for each hash change in the URL
     *
     * @param enable
     */
    setRecordHistory(enable: boolean): void;
    /**
     * Defines the scrolling speed in milliseconds
     *
     * @param milliseconds
     */
    setScrollingSpeed(milliseconds: number): void;
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
    destroy(type: string): void;
    /**
     * Updates the DOM structure to fit the new window size or its contents.
     * Ideal to use in combination with AJAX calls or external changes in the
     * DOM structure of the site.
     */
    reBuild(): void;
}
