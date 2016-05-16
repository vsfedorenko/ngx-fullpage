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

    private static propertyPrefix: string = 'fullpage';

    @Input('fullpage') public options: FullpageOptions;

    /**
     * Navigation
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
     * Scrolling
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
     * Accessibility
     */
    @Input() public fullpageKeyboardScrolling: boolean;
    @Input() public fullpageAnimateAnchor: boolean;
    @Input() public fullpageRecordHistory: boolean;

    /**
     * Design
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

    private _el: ElementRef;

    private static extractName(property) {
        return property[FullpageDirective.propertyPrefix.length].toLowerCase()
            + property.substring(FullpageDirective.propertyPrefix.length + 1);
    }

    public constructor(el: ElementRef) {
        this._el = el;
    }

    ngOnInit(): void {
        if (!this.options) {
            this.options = new FullpageOptions();
        }

        for (let property of Object.keys(this)) {
            if (!property.startsWith(FullpageDirective.propertyPrefix)) {
                continue;
            }
            let option = FullpageDirective.extractName(property);
            this.options[option] = this[property];
        }

        (<any>$)(this._el.nativeElement).fullpage(this.options);
    }
}
