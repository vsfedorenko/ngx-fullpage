/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */

import { AfterViewInit, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { MnFullpageOptions } from './mnFullpage-options.class';

const DIRECTIVE_NAME = 'mnFullpage';

@Directive({
    selector: '[' + DIRECTIVE_NAME + ']'
})
export class MnFullpageDirective implements OnInit, AfterViewInit {

    /**
     * Prefix for directive-relative properties
     */
    private static propertyPrefix: string = DIRECTIVE_NAME;

    /**
     * Directive options reference
     */
    /* tslint:disable */
    @Input(DIRECTIVE_NAME) public options: MnFullpageOptions;

    /* tslint:enable */

    /**
     * Index signature
     */
    [ key: string ]: any;

    /**
     * ---------------------------------------------------------------------------
     * |                                 Licence                                 |
     * ---------------------------------------------------------------------------
     *
     * @see MnFullpageOptions for documentation
     */
    @Input() public mnFullpageLicenseKey = 'OPEN-SOURCE-GPLV3-LICENSE';

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
    @Input() public mnFullpageContinuousHorizontal: boolean;
    @Input() public mnFullpageInterlockedSlides: boolean;
    @Input() public mnFullpageDragAndMove: boolean;
    @Input() public mnFullpageOffsetSections: boolean;
    @Input() public mnFullpageResetSliders: boolean;
    @Input() public mnFullpageFadingEffect: boolean;
    @Input() public mnFullpageNormalScrollElements: string;
    @Input() public mnFullpageScrollOverflow: boolean;
    @Input() public mnFullpageScrollOverflowReset: boolean;
    @Input() public mnFullpageScrollOverflowOptions: object;
    @Input() public mnFullpageTouchSensitivity: number;
    @Input() public mnFullpageNormalScrollElementTouchThreshold: number;
    @Input() public mnFullpageBigSectionsDestination: object;

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
    @Input() public mnFullpageResize: boolean; // backward compatibility
    @Input() public mnFullpageSectionsColor: Array<string>;
    @Input() public mnFullpagePaddingTop: string;
    @Input() public mnFullpagePaddingBottom: string;
    @Input() public mnFullpageFixedElements: string;
    @Input() public mnFullpageResponsiveWidth: number;
    @Input() public mnFullpageResponsiveHeight: number;
    @Input() public mnFullpageResponsiveSlides: boolean;
    @Input() public mnFullpageParallax: boolean;
    @Input() public mnFullpageParallaxOptions: object;

    /**
     * ---------------------------------------------------------------------------
     * |                              Custom selectors                           |
     * ---------------------------------------------------------------------------
     *
     * @see MnFullpageOptions for documentation
     */

    @Input() public mnFullpageSectionSelector: string;
    @Input() public mnFullpageSlideSelector: string;

    /**
     * ---------------------------------------------------------------------------
     * |                                    Other                                |
     * ---------------------------------------------------------------------------
     *
     * @see MnFullpageOptions for documentation
     */

    @Input() public mnFullpageLazyLoading: boolean;

    /**
     * ---------------------------------------------------------------------------
     * |                                 Callbacks                               |
     * ---------------------------------------------------------------------------
     *
     * @see MnFullpageOptions for documentation
     */

    @Input() public mnFullpageAfterLoad: (origin: object, destination: object, direction: string) => void;
    @Input() public mnFullpageOnLeave: (origin: object, destination: object, direction: string) => void;
    @Input() public mnFullpageAfterRender: () => void;
    @Input() public mnFullpageAfterResize: (width: number, height: number) => void;
    @Input() public mnFullpageAfterResponsive: (isResponsive: boolean) => void;
    @Input() public mnFullpageAfterSlideLoad: (section: object, origin: object, destination: object, direction: string) => void;
    @Input() public mnFullpageOnSlideLeave: (section: object, origin: object, destination: object, direction: string) => void;

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
     * @returns FullpageOption class option (property) name
     */
    private static extractName(property: string) {
        return property[ MnFullpageDirective.propertyPrefix.length ].toLowerCase()
            + property.substring(MnFullpageDirective.propertyPrefix.length + 1);
    }

    /**
     * Default public constructor
     *
     * @param options fullpage options
     * @param el element where directive is placed on
     */
    public constructor(el: ElementRef, options?: MnFullpageOptions) {
        this._el = el;

        if (options) {
            this.options = options;
        }
    }

    /**
     * Perform actions on init
     */
    ngOnInit(): void {

    }

    /**
     * Perform actions on view init
     */
    ngAfterViewInit(): void {
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
        for (const property of Object.keys(this)) {
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
             */
            const option = MnFullpageDirective.extractName(property);

            /**
             * If options is already defined skip it
             */
            if (this.options[ option ]) {
                continue;
            }

            /**
             * Set property value to the options object property
             */
            this.options[ option ] = this[ property ];
        }

        /**
         * Enable fullpage for the element
         */
        (<any>$)(this._el.nativeElement).fullpage(<object>this.options);
    }

}
