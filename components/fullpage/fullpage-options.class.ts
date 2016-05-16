import {Injectable} from '@angular/core';

@Injectable()
export class FullpageOptions {

    /**
     * Navigation
     */
    public menu: string;
    public lockAnchors: boolean;
    public anchors: Array<string>;
    public navigation: boolean;
    public navigationPosition: string;
    public navigationTooltips: Array<string>;
    public showActiveTooltip: boolean;
    public slidesNavigation: boolean;
    public slidesNavPosition: string;

    /**
     * Scrolling
     */
    public css3: boolean;
    public scrollingSpeed: number;
    public autoScrolling: boolean;
    public fitToSection: boolean;
    public fitToSectionDelay: number;
    public scrollBar: boolean;
    public easing: string;
    public easingcss3: string;
    public loopBottom: boolean;
    public loopTop: boolean;
    public loopHorizontal: boolean;
    public continuousVertical: boolean;
    public normalScrollElements: string;
    public scrollOverflow: boolean;
    public touchSensitivity: number;
    public normalScrollElementTouchThreshold: number;

    /**
     * Accessibility
     */
    public keyboardScrolling: boolean;
    public animateAnchor: boolean;
    public recordHistory: boolean;

    /**
     * Design
     */
    public controlArrows: boolean;
    public verticalCentered: boolean;
    public resize: boolean;
    public sectionsColor: Array<string>;
    public paddingTop: string;
    public paddingBottom: string;
    public fixedElements: string;
    public responsiveWidth: number;
    public responsiveHeight: number;

    public sectionSelector: string;
    public slideSelector: string;

    constructor(options?: Object) {
        if (options) {
            Object.assign(this, options);
        }
    }

}
