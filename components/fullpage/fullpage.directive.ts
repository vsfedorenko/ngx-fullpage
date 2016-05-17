/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */

import {Directive, Input, OnInit, ElementRef} from '@angular/core';

import * as $ from 'jquery';
import 'fullpage.js';

import {FullpageOptions} from './fullpage-options.class';

@Directive({
    selector: '[fullpage]'
})
export class FullpageDirective implements OnInit {

    /**
     * Prefix for directive-relative properties
     * 
     * @type {string} prefix
     */
    private static propertyPrefix: string = 'fullpage';

    /**
     * Directive options reference
     */
    @Input('fullpage') public options: FullpageOptions;

    /**
     * ---------------------------------------------------------------------------
     * |                                Navigation                               |
     * ---------------------------------------------------------------------------
     * 
     * @see FullpageOptions for documentation
     */

    @Input() public fullpageMenu: string;
    @Input() public fullpageLockAnchors: boolean;
    @Input() public fullpageAnchors: Array<string>;
    @Input() public fullpageNavigation: boolean;
    @Input() public fullpageNavigationPosition: string;
    @Input() public fullpageNavigationTooltips: Array<string>;
    @Input() public fullpageShowActiveTooltip: boolean;
    @Input() public fullpageSlidesNavigation: boolean;
    @Input() public fullpageSlidesNavPosition: string;
    
    /**
     * ---------------------------------------------------------------------------
     * |                                 Scrolling                               |
     * ---------------------------------------------------------------------------
     * 
     * @see FullpageOptions for documentation
     */
    
    @Input() public fullpageCss3: boolean;
    @Input() public fullpageScrollingSpeed: number;
    @Input() public fullpageAutoScrolling: boolean;
    @Input() public fullpageFitToSection: boolean;
    @Input() public fullpageFitToSectionDelay: number;
    @Input() public fullpageScrollBar: boolean;
    @Input() public fullpageEasing: string;
    @Input() public fullpageEasingcss3: string;
    @Input() public fullpageLoopBottom: boolean;
    @Input() public fullpageLoopTop: boolean;
    @Input() public fullpageLoopHorizontal: boolean;
    @Input() public fullpageContinuousVertical: boolean;
    @Input() public fullpageNormalScrollElements: string;
    @Input() public fullpageScrollOverflow: boolean;
    @Input() public fullpageTouchSensitivity: number;
    @Input() public fullpageNormalScrollElementTouchThreshold: number;

    /**
     * ---------------------------------------------------------------------------
     * |                              Accessibility                              |
     * ---------------------------------------------------------------------------
     * 
     * @see FullpageOptions for documentation
     */
    
    @Input() public fullpageKeyboardScrolling: boolean;
    @Input() public fullpageAnimateAnchor: boolean;
    @Input() public fullpageRecordHistory: boolean;

    /**
     * ---------------------------------------------------------------------------
     * |                                 Design                                  |
     * ---------------------------------------------------------------------------
     * 
     * @see FullpageOptions for documentation
     */
    
    @Input() public fullpageControlArrows: boolean;
    @Input() public fullpageVerticalCentered: boolean;
    @Input() public fullpageResize: boolean;
    @Input() public fullpageSectionsColor: Array<string>;
    @Input() public fullpagePaddingTop: string;
    @Input() public fullpagePaddingBottom: string;
    @Input() public fullpageFixedElements: string;
    @Input() public fullpageResponsiveWidth: number;
    @Input() public fullpageResponsiveHeight: number;
    @Input() public fullpageSectionSelector: string;
    @Input() public fullpageSlideSelector: string;

    /**
     * ---------------------------------------------------------------------------
     * |                                 Callbacks                               |
     * ---------------------------------------------------------------------------
     * 
     * @see FullpageOptions for documentation
     */
    
    @Input() public fullpageAfterLoad: (anchorLink: string, index: number) => void;
    @Input() public fullpageOnLeave: (index: number, nextIndex: number, direction: string) => void;
    @Input() public fullpageAfterRender: () => void;
    @Input() public fullpageAfterResize: () => void;
    @Input() public fullpageAfterSlideLoad: (anchorLink: string, index: number,
                                             slideAnchor: string, slideIndex: number) => void;
    @Input() public fullpageOnSlideLeave: (anchorLink: string, index: number, slideIndex: number,
                                           direction: string, nextSlideIndex: number) => void;

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
    private static extractName(property) {
        return property[FullpageDirective.propertyPrefix.length].toLowerCase()
            + property.substring(FullpageDirective.propertyPrefix.length + 1);
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
            this.options = new FullpageOptions();
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
            if (!property.startsWith(FullpageDirective.propertyPrefix)) {
                continue;
            }

            /**
             * Extract option name from the property name
             *
             * @type {string} option name
             */
            let option = FullpageDirective.extractName(property);

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
