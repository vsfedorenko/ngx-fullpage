/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */

import {Directive, Input, OnInit, ElementRef} from '@angular/core';

import * as $ from 'jquery';
import 'fullpage.js';

import {MnFullpageOptions} from './mnFullpage-options.class';

const DIRECTIVE_NAME = 'mnFullpage';

@Directive({
    selector: `[${DIRECTIVE_NAME}]`
})
export class MnFullpageDirective implements OnInit {

    /**
     * Prefix for directive-relative properties
     *
     * @type {string} prefix
     */
    private static propertyPrefix: string = `${DIRECTIVE_NAME}`;

    /**
     * Directive options reference
     */
    @Input(`${DIRECTIVE_NAME}`) public options: MnFullpageOptions;

    /**
     * Index signature
     */
    [key: string]: any;

    /**
     * ---------------------------------------------------------------------------
     * |                                Navigation                               |
     * ---------------------------------------------------------------------------
     *
     * @see MnFullpageOptions for documentation
     */

    @Input() public mnFullpageMenu: string;
    @Input() public mnFullpageLockAnchors: boolean;
    @Input() public mnFullpageAnchors: Array<string>;
    @Input() public mnFullpageNavigation: boolean;
    @Input() public mnFullpageNavigationPosition: string;
    @Input() public mnFullpageNavigationTooltips: Array<string>;
    @Input() public mnFullpageShowActiveTooltip: boolean;
    @Input() public mnFullpageSlidesNavigation: boolean;
    @Input() public mnFullpageSlidesNavPosition: string;

    /**
     * ---------------------------------------------------------------------------
     * |                                 Scrolling                               |
     * ---------------------------------------------------------------------------
     *
     * @see MnFullpageOptions for documentation
     */

    @Input() public mnFullpageCss3: boolean;
    @Input() public mnFullpageScrollingSpeed: number;
    @Input() public mnFullpageAutoScrolling: boolean;
    @Input() public mnFullpageFitToSection: boolean;
    @Input() public mnFullpageFitToSectionDelay: number;
    @Input() public mnFullpageScrollBar: boolean;
    @Input() public mnFullpageEasing: string;
    @Input() public mnFullpageEasingcss3: string;
    @Input() public mnFullpageLoopBottom: boolean;
    @Input() public mnFullpageLoopTop: boolean;
    @Input() public mnFullpageLoopHorizontal: boolean;
    @Input() public mnFullpageContinuousVertical: boolean;
    @Input() public mnFullpageNormalScrollElements: string;
    @Input() public mnFullpageScrollOverflow: boolean;
    @Input() public mnFullpageTouchSensitivity: number;
    @Input() public mnFullpageNormalScrollElementTouchThreshold: number;

    /**
     * ---------------------------------------------------------------------------
     * |                              Accessibility                              |
     * ---------------------------------------------------------------------------
     *
     * @see MnFullpageOptions for documentation
     */

    @Input() public mnFullpageKeyboardScrolling: boolean;
    @Input() public mnFullpageAnimateAnchor: boolean;
    @Input() public mnFullpageRecordHistory: boolean;

    /**
     * ---------------------------------------------------------------------------
     * |                                 Design                                  |
     * ---------------------------------------------------------------------------
     *
     * @see MnFullpageOptions for documentation
     */

    @Input() public mnFullpageControlArrows: boolean;
    @Input() public mnFullpageVerticalCentered: boolean;
    @Input() public mnFullpageResize: boolean;
    @Input() public mnFullpageSectionsColor: Array<string>;
    @Input() public mnFullpagePaddingTop: string;
    @Input() public mnFullpagePaddingBottom: string;
    @Input() public mnFullpageFixedElements: string;
    @Input() public mnFullpageResponsiveWidth: number;
    @Input() public mnFullpageResponsiveHeight: number;
    @Input() public mnFullpageSectionSelector: string;
    @Input() public mnFullpageSlideSelector: string;

    /**
     * ---------------------------------------------------------------------------
     * |                                 Callbacks                               |
     * ---------------------------------------------------------------------------
     *
     * @see MnFullpageOptions for documentation
     */

    @Input() public mnFullpageAfterLoad: (anchorLink: string, index: number) => void;
    @Input() public mnFullpageOnLeave: (index: number, nextIndex: number,
                                        direction: string) => void;
    @Input() public mnFullpageAfterRender: () => void;
    @Input() public mnFullpageAfterResize: () => void;
    @Input() public mnFullpageAfterSlideLoad: (anchorLink: string, index: number,
                                               slideAnchor: string, slideIndex: number) => void;
    @Input() public mnFullpageOnSlideLeave: (anchorLink: string,
                                             index: number, slideIndex: number, direction: string,
                                             nextSlideIndex: number) => void;

    /**
     * ---------------------------------------------------------------------------
     * |                              Class properties                           |
     * ---------------------------------------------------------------------------
     */

    private _el: ElementRef;

    /**
     * Static method for option name retrieving
     *
     * @param property this class property name
     * @returns {string} FullpageOption class option (property) name
     */
    private static extractName(property: string) {
        return property[MnFullpageDirective.propertyPrefix.length].toLowerCase()
            + property.substring(MnFullpageDirective.propertyPrefix.length + 1);
    }

    /**
     * Default public constructor
     *
     * @param el element where directive is placed on
     */
    public constructor(el: ElementRef) {
        this._el = el;
    }

    /**
     * Perform actions on init
     */
    ngOnInit(): void {
        /**
         * Initialize options object with default (empty)
         * values if it doesn't exist
         */
        if (!this.options) {
            this.options = new MnFullpageOptions();
        }

        /**
         * Iterate over all properties of directive class
         */
        for (let property of Object.keys(this)) {
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
            let option = MnFullpageDirective.extractName(property);

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
        (<any>$)(this._el.nativeElement).fullpage(this.options);
    }

}
