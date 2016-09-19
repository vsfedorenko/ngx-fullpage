/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */
import { OnInit, ElementRef } from '@angular/core';
import 'fullpage.js';
import { MnFullpageOptions } from './mnFullpage-options.class';
export declare class MnFullpageDirective implements OnInit {
    /**
     * Prefix for directive-relative properties
     *
     * @type {string} prefix
     */
    private static propertyPrefix;
    /**
     * Directive options reference
     */
    options: MnFullpageOptions;
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
    mnFullpageMenu: string;
    mnFullpageLockAnchors: boolean;
    mnFullpageAnchors: Array<string>;
    mnFullpageNavigation: boolean;
    mnFullpageNavigationPosition: string;
    mnFullpageNavigationTooltips: Array<string>;
    mnFullpageShowActiveTooltip: boolean;
    mnFullpageSlidesNavigation: boolean;
    mnFullpageSlidesNavPosition: string;
    /**
     * ---------------------------------------------------------------------------
     * |                                 Scrolling                               |
     * ---------------------------------------------------------------------------
     *
     * @see MnFullpageOptions for documentation
     */
    mnFullpageCss3: boolean;
    mnFullpageScrollingSpeed: number;
    mnFullpageAutoScrolling: boolean;
    mnFullpageFitToSection: boolean;
    mnFullpageFitToSectionDelay: number;
    mnFullpageScrollBar: boolean;
    mnFullpageEasing: string;
    mnFullpageEasingcss3: string;
    mnFullpageLoopBottom: boolean;
    mnFullpageLoopTop: boolean;
    mnFullpageLoopHorizontal: boolean;
    mnFullpageContinuousVertical: boolean;
    mnFullpageNormalScrollElements: string;
    mnFullpageScrollOverflow: boolean;
    mnFullpageTouchSensitivity: number;
    mnFullpageNormalScrollElementTouchThreshold: number;
    /**
     * ---------------------------------------------------------------------------
     * |                              Accessibility                              |
     * ---------------------------------------------------------------------------
     *
     * @see MnFullpageOptions for documentation
     */
    mnFullpageKeyboardScrolling: boolean;
    mnFullpageAnimateAnchor: boolean;
    mnFullpageRecordHistory: boolean;
    /**
     * ---------------------------------------------------------------------------
     * |                                 Design                                  |
     * ---------------------------------------------------------------------------
     *
     * @see MnFullpageOptions for documentation
     */
    mnFullpageControlArrows: boolean;
    mnFullpageVerticalCentered: boolean;
    mnFullpageResize: boolean;
    mnFullpageSectionsColor: Array<string>;
    mnFullpagePaddingTop: string;
    mnFullpagePaddingBottom: string;
    mnFullpageFixedElements: string;
    mnFullpageResponsiveWidth: number;
    mnFullpageResponsiveHeight: number;
    mnFullpageSectionSelector: string;
    mnFullpageSlideSelector: string;
    /**
     * ---------------------------------------------------------------------------
     * |                                 Callbacks                               |
     * ---------------------------------------------------------------------------
     *
     * @see MnFullpageOptions for documentation
     */
    mnFullpageAfterLoad: (anchorLink: string, index: number) => void;
    mnFullpageOnLeave: (index: number, nextIndex: number, direction: string) => void;
    mnFullpageAfterRender: () => void;
    mnFullpageAfterResize: () => void;
    mnFullpageAfterSlideLoad: (anchorLink: string, index: number, slideAnchor: string, slideIndex: number) => void;
    mnFullpageOnSlideLeave: (anchorLink: string, index: number, slideIndex: number, direction: string, nextSlideIndex: number) => void;
    /**
     * ---------------------------------------------------------------------------
     * |                              Class properties                           |
     * ---------------------------------------------------------------------------
     */
    private _el;
    /**
     * Static method for option name retrieving
     *
     * @param property this class property name
     * @returns {string} FullpageOption class option (property) name
     */
    private static extractName(property);
    /**
     * Default public constructor
     *
     * @param el element where directive is placed on
     */
    constructor(el: ElementRef);
    /**
     * Perform actions on init
     */
    ngOnInit(): void;
}
