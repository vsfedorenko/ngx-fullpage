webpackJsonp([1],{

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(2);
var mnFullpage_service_1 = __webpack_require__(92);
var mnFullpage_directive_1 = __webpack_require__(91);
var MnFullpageModule = MnFullpageModule_1 = (function () {
    function MnFullpageModule() {
    }
    MnFullpageModule.forRoot = function () {
        return { ngModule: MnFullpageModule_1, providers: [mnFullpage_service_1.MnFullpageService] };
    };
    return MnFullpageModule;
}());
MnFullpageModule = MnFullpageModule_1 = __decorate([
    core_1.NgModule({
        declarations: [mnFullpage_directive_1.MnFullpageDirective],
        exports: [mnFullpage_directive_1.MnFullpageDirective]
    }),
    __metadata("design:paramtypes", [])
], MnFullpageModule);
exports.MnFullpageModule = MnFullpageModule;
var MnFullpageModule_1;


/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */
"use strict";
var index_1 = __webpack_require__(89);
var index_2 = __webpack_require__(89);
exports.MnFullpageModule = index_2.MnFullpageModule;
exports.MnFullpageDirective = index_2.MnFullpageDirective;
exports.MnFullpageOptions = index_2.MnFullpageOptions;
exports.MnFullpageService = index_2.MnFullpageService;
exports.MN_FULLPAGE_DIRECTIVES = [index_1.MnFullpageDirective];


/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(162);
var app_component_1 = __webpack_require__(389);
var mnFullpage_module_1 = __webpack_require__(117);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            mnFullpage_module_1.MnFullpageModule.forRoot(),
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;


/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
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
var core_1 = __webpack_require__(2);
var components_1 = __webpack_require__(118);
var AppComponent = (function () {
    function AppComponent(fullpageService) {
        this.fullpageService = fullpageService;
        this.options = new components_1.MnFullpageOptions({
            controlArrows: false,
            scrollingSpeed: 1000,
            menu: '.menu',
            css3: true,
            anchors: [
                'menuAnchor1', 'menuAnchor2', 'menuAnchor3',
                'menuAnchor4', 'menuAnchor5', 'menuAnchor6'
            ]
        });
        this.templates = {
            install: __webpack_require__(395),
            usage: {
                slides: {
                    module: __webpack_require__(397),
                    html: __webpack_require__(398)
                }
            },
            configuration: {
                slides: {
                    attributes: __webpack_require__(392),
                    classOptions: __webpack_require__(393),
                    mix: __webpack_require__(394)
                }
            },
            service: __webpack_require__(396),
        };
    }
    return AppComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", components_1.MnFullpageOptions)
], AppComponent.prototype, "options", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AppComponent.prototype, "templates", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [
            __webpack_require__(912),
            __webpack_require__(399)
        ],
        template: __webpack_require__(391)
    }),
    __metadata("design:paramtypes", [components_1.MnFullpageService])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(637)();
// imports


// module
exports.push([module.i, "/*!\r\n * fullPage 2.9.2\r\n * https://github.com/alvarotrigo/fullPage.js\r\n * MIT licensed\r\n *\r\n * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo\r\n */\r\nhtml.fp-enabled,\r\n.fp-enabled body {\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow:hidden;\r\n\r\n    /*Avoid flicker on slides transitions for mobile phones #336 */\r\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\r\n}\r\n#superContainer {\r\n    height: 100%;\r\n    position: relative;\r\n\r\n    /* Touch detection for Windows 8 */\r\n    -ms-touch-action: none;\r\n\r\n    /* IE 11 on Windows Phone 8.1*/\r\n    touch-action: none;\r\n}\r\n.fp-section {\r\n    position: relative;\r\n    -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */\r\n    -moz-box-sizing: border-box; /* <=28 */\r\n    box-sizing: border-box;\r\n}\r\n.fp-slide {\r\n    float: left;\r\n}\r\n.fp-slide, .fp-slidesContainer {\r\n    height: 100%;\r\n    display: block;\r\n}\r\n.fp-slides {\r\n    z-index:1;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n    -webkit-transition: all 0.3s ease-out; /* Safari<=6 Android<=4.3 */\r\n    transition: all 0.3s ease-out;\r\n}\r\n.fp-section.fp-table, .fp-slide.fp-table {\r\n    display: table;\r\n    table-layout:fixed;\r\n    width: 100%;\r\n}\r\n.fp-tableCell {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.fp-slidesContainer {\r\n    float: left;\r\n    position: relative;\r\n}\r\n.fp-controlArrow {\r\n    -webkit-user-select: none; /* webkit (safari, chrome) browsers */\r\n    -moz-user-select: none; /* mozilla browsers */\r\n    -khtml-user-select: none; /* webkit (konqueror) browsers */\r\n    -ms-user-select: none; /* IE10+ */\r\n    position: absolute;\r\n    z-index: 4;\r\n    top: 50%;\r\n    cursor: pointer;\r\n    width: 0;\r\n    height: 0;\r\n    border-style: solid;\r\n    margin-top: -38px;\r\n    -webkit-transform: translate3d(0,0,0);\r\n    -ms-transform: translate3d(0,0,0);\r\n    transform: translate3d(0,0,0);\r\n}\r\n.fp-controlArrow.fp-prev {\r\n    left: 15px;\r\n    width: 0;\r\n    border-width: 38.5px 34px 38.5px 0;\r\n    border-color: transparent #fff transparent transparent;\r\n}\r\n.fp-controlArrow.fp-next {\r\n    right: 15px;\r\n    border-width: 38.5px 0 38.5px 34px;\r\n    border-color: transparent transparent transparent #fff;\r\n}\r\n.fp-scrollable {\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.fp-scroller{\r\n    overflow: hidden;\r\n}\r\n.iScrollIndicator{\r\n    border: 0 !important;\r\n}\r\n.fp-notransition {\r\n    -webkit-transition: none !important;\r\n    transition: none !important;\r\n}\r\n#fp-nav {\r\n    position: fixed;\r\n    z-index: 100;\r\n    margin-top: -32px;\r\n    top: 50%;\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0,0,0);\r\n}\r\n#fp-nav.right {\r\n    right: 17px;\r\n}\r\n#fp-nav.left {\r\n    left: 17px;\r\n}\r\n.fp-slidesNav{\r\n    position: absolute;\r\n    z-index: 4;\r\n    left: 50%;\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0,0,0);\r\n    -ms-transform: translate3d(0,0,0);\r\n    transform: translate3d(0,0,0);\r\n}\r\n.fp-slidesNav.bottom {\r\n    bottom: 17px;\r\n}\r\n.fp-slidesNav.top {\r\n    top: 17px;\r\n}\r\n#fp-nav ul,\r\n.fp-slidesNav ul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n#fp-nav ul li,\r\n.fp-slidesNav ul li {\r\n    display: block;\r\n    width: 14px;\r\n    height: 13px;\r\n    margin: 7px;\r\n    position:relative;\r\n}\r\n.fp-slidesNav ul li {\r\n    display: inline-block;\r\n}\r\n#fp-nav ul li a,\r\n.fp-slidesNav ul li a {\r\n    display: block;\r\n    position: relative;\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: 100%;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n#fp-nav ul li a.active span,\r\n.fp-slidesNav ul li a.active span,\r\n#fp-nav ul li:hover a.active span,\r\n.fp-slidesNav ul li:hover a.active span{\r\n    height: 12px;\r\n    width: 12px;\r\n    margin: -6px 0 0 -6px;\r\n    border-radius: 100%;\r\n }\r\n#fp-nav ul li a span,\r\n.fp-slidesNav ul li a span {\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    z-index: 1;\r\n    height: 4px;\r\n    width: 4px;\r\n    border: 0;\r\n    background: #333;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin: -2px 0 0 -2px;\r\n    -webkit-transition: all 0.1s ease-in-out;\r\n    -moz-transition: all 0.1s ease-in-out;\r\n    -o-transition: all 0.1s ease-in-out;\r\n    transition: all 0.1s ease-in-out;\r\n}\r\n#fp-nav ul li:hover a span,\r\n.fp-slidesNav ul li:hover a span{\r\n    width: 10px;\r\n    height: 10px;\r\n    margin: -5px 0px 0px -5px;\r\n}\r\n#fp-nav ul li .fp-tooltip {\r\n    position: absolute;\r\n    top: -2px;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    font-family: arial, helvetica, sans-serif;\r\n    white-space: nowrap;\r\n    max-width: 220px;\r\n    overflow: hidden;\r\n    display: block;\r\n    opacity: 0;\r\n    width: 0;\r\n    cursor: pointer;\r\n}\r\n#fp-nav ul li:hover .fp-tooltip,\r\n#fp-nav.fp-show-active a.active + .fp-tooltip {\r\n    -webkit-transition: opacity 0.2s ease-in;\r\n    transition: opacity 0.2s ease-in;\r\n    width: auto;\r\n    opacity: 1;\r\n}\r\n#fp-nav ul li .fp-tooltip.right {\r\n    right: 20px;\r\n}\r\n#fp-nav ul li .fp-tooltip.left {\r\n    left: 20px;\r\n}\r\n.fp-auto-height.fp-section,\r\n.fp-auto-height .fp-slide,\r\n.fp-auto-height .fp-tableCell{\r\n    height: auto !important;\r\n}\r\n\r\n.fp-responsive .fp-auto-height-responsive.fp-section,\r\n.fp-responsive .fp-auto-height-responsive .fp-slide,\r\n.fp-responsive .fp-auto-height-responsive .fp-tableCell {\r\n    height: auto !important;\r\n}", ""]);

// exports


/***/ },

/***/ 391:
/***/ function(module, exports) {

module.exports = "<!--suppress HtmlUnknownAnchorTarget, HtmlUnknownTarget -->\n\n<div class=\"menu-wrapper\">\n    <ul class=\"menu\">\n        <li data-menuanchor=\"menuAnchor1\" class=\"active\"><a href=\"#menuAnchor1\">First section</a></li>\n        <li data-menuanchor=\"menuAnchor2\"><a href=\"#menuAnchor2\">Second section</a></li>\n        <li data-menuanchor=\"menuAnchor3\"><a href=\"#menuAnchor3\">Third section</a></li>\n        <li data-menuanchor=\"menuAnchor4\"><a href=\"#menuAnchor4\">Fourth section</a></li>\n        <li data-menuanchor=\"menuAnchor5\"><a href=\"#menuAnchor5\">Fifth section</a></li>\n        <li data-menuanchor=\"menuAnchor6\"><a href=\"#menuAnchor6\">Sixth section</a></li>\n    </ul>\n</div>\n\n\n<div [mnFullpage]=\"options\"\n     [mnFullpageNavigation]=\"true\"\n     [mnFullpageKeyboardScrolling]=\"true\"\n     [mnFullpageSlidesNavigation]=\"true\"\n     [mnFullpageSlidesNavPosition]=\"bottom\">\n\n    <div class=\"section welcome-section fp-section fp-table\">\n        <div class=\"fp-tableCell\">\n            <h1>Angular 2 fullPage.js</h1>\n            <h4>Create Beautiful Fullscreen Scrolling Websites (now with Angular 2)!</h4>\n            <img class=\"logo-image\" src=\"https://raw.githubusercontent.com/meiblorn/ng2-fullpage/develop/logo.png\"/>\n        </div>\n    </div>\n    <div class=\"section install-section fp-section fp-table\">\n        <div class=\"fp-tableCell\">\n            <h1>Easy to install !</h1>\n            <div class=\"code-block\">\n            <pre>\n                <code class=\"bash\">{{templates.install}}</code>\n            </pre>\n            </div>\n        </div>\n    </div>\n    <div class=\"section usage-section fp-section fp-table\">\n        <div class=\"fp-tableCell\">\n            <div class=\"slide\">\n                <h1>Easy to use !</h1>\n                <h4>Use keyboard arrows or navigation below to slide right</h4>\n            </div>\n            <div class=\"slide\">\n                <h1>Declare it in your module</h1>\n                <div class=\"code-block\">\n                <pre>\n                    <code class=\"javascript\">{{templates.usage.slides.module}}</code>\n                </pre>\n                </div>\n            </div>\n            <div class=\"slide\">\n                <h1>Now use it in your html template</h1>\n                <div class=\"code-block\">\n                <pre>\n                    <code class=\"html\">{{templates.usage.slides.html}}</code>\n                </pre>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section slides-section fp-section fp-table\">\n        <div class=\"fp-tableCell\">\n            <div class=\"slide\">\n                <h1>Many ways to configure!</h1>\n                <h4>Use keyboard arrows or navigation below to slide right</h4>\n            </div>\n            <div class=\"slide\">\n                <h1>Configure it via attributes</h1>\n                <div class=\"code-block\">\n                <pre>\n                    <code class=\"html\">{{templates.configuration.slides.attributes}}</code>\n                </pre>\n                </div>\n            </div>\n            <div class=\"slide\">\n                <h1>Use configuration object instead</h1>\n                <div class=\"code-block\">\n                <pre>\n                    <code class=\"javascript\">{{templates.configuration.slides.classOptions}}</code>\n                </pre>\n                </div>\n            </div>\n            <div class=\"slide\">\n                <h1>Or MIX IT !</h1>\n                <div class=\"code-block\">\n                <pre>\n                    <code class=\"javascript\">{{templates.configuration.slides.mix}}</code>\n                </pre>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section usage-section fp-section fp-table\">\n        <div class=\"fp-tableCell\">\n            <h1>Get full control on the page !</h1>\n            <div class=\"code-block\">\n            <pre>\n                <code class=\"html\">{{templates.service}}</code>\n            </pre>\n            </div>\n            <div>\n                <button (click)=\"fullpageService.moveSectionUp();\">Move section up</button>\n                <button (click)=\"fullpageService.moveSectionDown();\">Move section down</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"section start-use-it-now-section fp-section fp-table\">\n        <div class=\"fp-tableCell\">\n            <h1>Start use it now!</h1>\n            <h4>\n                Return to <a href=\"https://github.com/meiblorn/ng2-fullpage\">GitHub</a>\n                or start reading <a href=\"docs/index.html\">docs</a>\n            </h4>\n        </div>\n    </div>\n</div>\n"

/***/ },

/***/ 392:
/***/ function(module, exports) {

module.exports = "<div mnFullpage\n     [mnFullpageNavigation]=\"true\"\n     [mnFullpageKeyboardScrolling]=\"true\"\n     [mnFullpageSlidesNavigation]=\"true\"\n     [mnFullpageSlidesNavPosition]=\"bottom\"\n     [mnFullpageControlArrows]=\"false\">\n\n    <div id=\"section1\" class=\"section fp-section fp-table\">\n        <div class=\"fp-tableCell\">\n            Section 1\n        </div>\n    </div>\n    <div id=\"section2\" class=\"section fp-section fp-table\">\n        <div class=\"fp-tableCell\">\n            Section 2\n        </div>\n    </div>\n\n</div>\n"

/***/ },

/***/ 393:
/***/ function(module, exports) {

module.exports = "import { Component, Output } from '@angular/core';\nimport { MnFullpageOptions } from 'ng2-fullpage';\n\n@Component({\n    selector: 'app',\n    template: `\n        <div [mnFullpage]=\"options\">\n            <div id=\"section1\" class=\"section fp-section fp-table\">\n                <div class=\"fp-tableCell\">\n                    Section 1\n                </div>\n            </div>\n            ......\n        </div>\n    `\n})\nexport class AppComponent {\n    @Output() private options: MnFullpageOptions = new MnFullpageOptions({\n        navigation: true,\n        keyboardScrolling: true\n    });\n}\n"

/***/ },

/***/ 394:
/***/ function(module, exports) {

module.exports = "import { Component, Output } from '@angular/core';\nimport { MnFullpageOptions } from 'ng2-fullpage';\n\n@Component({\n    selector: 'app',\n    template: `\n        <div [mnFullpage]=\"options\" [mnFullpageControlArrows]=\"false\">\n            <div class=\"section\"> Some section 1 </div>\n            <div class=\"section\"> Some section 2 </div>\n        </div>\n    `\n})\nexport class AppComponent {\n    @Output() private options: MnFullpageOptions = new MnFullpageOptions({\n        navigation: true,\n        keyboardScrolling: true\n    });\n}\n"

/***/ },

/***/ 395:
/***/ function(module, exports) {

module.exports = "#!/bin/bash\n\n# install module via npm\nnpm install ng2-fullpage --save\n\n# install typings\nnpm install @types/jquery --save-dev\n# or if you prefer \"typings\" tool then try\n# \"typings install jquery --save --ambient\"\n\n# you are done!\n"

/***/ },

/***/ 396:
/***/ function(module, exports) {

module.exports = "import { Component, Input } from '@angular/core';\nimport { MnFullpageService } from 'ng2-fullpage';\n\n@Component({\n    selector: 'app',\n    template: `\n        <button (click)=\"fullpageService.moveSectionUp();\">Move section up</button>\n        <button (click)=\"fullpageService.moveSectionDown();\">Move section down</button>\n\n        <div mnFullpage [mnFullpageNavigation]=\"true\">\n            ....\n        </div>\n    `\n})\nexport class AppComponent {\n\n     constructor(private fullpageService: MnFullpageService) {\n     }\n\n}\n"

/***/ },

/***/ 397:
/***/ function(module, exports) {

module.exports = "import { NgModule } from \"@angular/core\";\nimport { BrowserModule } from \"@angular/platform-browser\";\n\nimport { AppComponent } from \"./app.component\";\nimport { MnFullpageDirective, MnFullpageService } from \"ng2-fullpage\";\n\n@NgModule({\n    bootstrap: [ AppComponent ],\n    declarations: [\n        AppComponent,\n        MnFullpageDirective // add directive declaration here\n    ],\n    imports: [\n        BrowserModule,\n    ],\n    providers: [\n        MnFullpageService // also add provider here\n    ]\n})\nexport class AppModule {\n\n}\n"

/***/ },

/***/ 398:
/***/ function(module, exports) {

module.exports = "<!-- Just add directive [mnFullpage] -->\n<!-- And parametrize it via [mnFullpage*] attributes -->\n<div mnFullpage\n     [mnFullpageNavigation]=\"true\"\n     [mnFullpageKeyboardScrolling]=\"true\">\n\n    <div id=\"section1\" class=\"section fp-section fp-table\">\n        <div class=\"fp-tableCell\">\n            Section 1\n        </div>\n    </div>\n    <div id=\"section2\" class=\"section fp-section fp-table\">\n        <div class=\"fp-tableCell\">\n            <div class=\"slide\">Slide 1</div>\n            <div class=\"slide\">Slide 2</div>\n            <div class=\"slide\">Slide 3</div>\n            <div class=\"slide\">Slide 4</div>\n        </div>\n    </div>\n</div>\n"

/***/ },

/***/ 399:
/***/ function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Titillium+Web);\nbody {\n  font-family: 'Titillium Web', Arial sans-serif;\n  color: #333; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: normal;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  color: #444; }\n\nh1 {\n  font-size: 3em; }\n\nh4 {\n  font-size: 1.3em; }\n\n#fp-nav {\n  top: 50% !important; }\n\n.menu-wrapper {\n  position: fixed;\n  width: 100%;\n  z-index: 70;\n  text-align: center;\n  height: 40px;\n  margin: auto; }\n\n.menu {\n  padding: 0; }\n\n.menu li {\n  display: inline-block;\n  margin: 10px;\n  color: #000;\n  background: #fff;\n  background: rgba(255, 255, 255, 0.5);\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  text-align: center; }\n\n.menu li.active {\n  background: #666;\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff; }\n\n.menu li a {\n  text-decoration: none;\n  color: #000; }\n\n.menu li.active a:hover {\n  color: #000; }\n\n.menu li:hover {\n  background: rgba(255, 255, 255, 0.8); }\n\n.menu li a,\n.menu li.active a {\n  padding: 9px 18px;\n  display: block; }\n\n.menu li.active a {\n  color: #fff; }\n\n.section {\n  text-align: center; }\n\n.section pre {\n  margin-top: 5px;\n  text-align: start; }\n\n.section pre code {\n  background: rgba(255, 255, 255, 0.1) !important;\n  font-weight: normal;\n  font-size: 1.2em;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding: 25px; }\n\n.code-block {\n  margin: auto;\n  display: inline-block; }\n\n.code-block code {\n  font-size: 1em !important; }\n\nbutton {\n  display: inline-block;\n  margin: 10px;\n  color: #000;\n  background: #fff;\n  background: rgba(255, 255, 255, 0.5);\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  text-align: center;\n  padding: 7px 50px;\n  border-color: white;\n  background: rgba(255, 255, 255, 0.1); }\n\n.welcome-section {\n  background: linear-gradient(90deg, rgba(255, 177, 0, 0.2), rgba(52, 0, 255, 0.4)); }\n\n.welcome-section .logo-image {\n  margin: 25px; }\n\n.install-section {\n  background: linear-gradient(90deg, rgba(32, 255, 0, 0.2), rgba(52, 0, 255, 0.4));\n  /* Standard syntax */ }\n\n.usage-section {\n  background: linear-gradient(90deg, rgba(145, 255, 1, 0.2), rgba(52, 0, 255, 0.4));\n  /* Standard syntax */ }\n\n.slides-section {\n  background: linear-gradient(90deg, rgba(255, 155, 0, 0.2), rgba(52, 0, 255, 0.4));\n  /* Standard syntax */ }\n\n.start-use-it-now-section {\n  background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(52, 0, 255, 0.4));\n  /* Standard syntax */ }\n"

/***/ },

/***/ 637:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 15/05/16.
 */
"use strict";
var mnFullpage_module_1 = __webpack_require__(117);
exports.MnFullpageModule = mnFullpage_module_1.MnFullpageModule;
var mnFullpage_directive_1 = __webpack_require__(91);
exports.MnFullpageDirective = mnFullpage_directive_1.MnFullpageDirective;
var mnFullpage_options_class_1 = __webpack_require__(90);
exports.MnFullpageOptions = mnFullpage_options_class_1.MnFullpageOptions;
var mnFullpage_service_1 = __webpack_require__(92);
exports.MnFullpageService = mnFullpage_service_1.MnFullpageService;


/***/ },

/***/ 90:
/***/ function(module, exports) {

"use strict";
/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 15/05/16.
 */
"use strict";
var MnFullpageOptions = (function () {
    /**
     * Public default constructor
     *
     * @param options options js-object
     */
    function MnFullpageOptions(options) {
        if (options) {
            Object.assign(this, options);
        }
    }
    return MnFullpageOptions;
}());
exports.MnFullpageOptions = MnFullpageOptions;


/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
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
var core_1 = __webpack_require__(2);
var $ = __webpack_require__(80);
__webpack_require__(88);
var mnFullpage_options_class_1 = __webpack_require__(90);
var DIRECTIVE_NAME = 'mnFullpage';
var MnFullpageDirective = MnFullpageDirective_1 = (function () {
    /**
     * Default public constructor
     *
     * @param el element where directive is placed on
     */
    function MnFullpageDirective(el) {
        this._el = el;
    }
    /**
     * Static method for option name retrieving
     *
     * @param property this class property name
     * @returns {string} FullpageOption class option (property) name
     */
    MnFullpageDirective.extractName = function (property) {
        return property[MnFullpageDirective_1.propertyPrefix.length].toLowerCase()
            + property.substring(MnFullpageDirective_1.propertyPrefix.length + 1);
    };
    /**
     * Perform actions on init
     */
    MnFullpageDirective.prototype.ngOnInit = function () {
        /**
         * Initialize options object with default (empty)
         * values if it doesn't exist
         */
        if (!this.options) {
            this.options = new mnFullpage_options_class_1.MnFullpageOptions();
        }
        /**
         * Iterate over all properties of directive class
         */
        for (var _i = 0, _a = Object.keys(this); _i < _a.length; _i++) {
            var property = _a[_i];
            /**
             * If property name doesn't start with 'fullpage' prefix (it is stored in
             * FullpageDirective.propertyPrefix static property) then skip this property and
             * continue the cycle
             */
            if (!property.startsWith(MnFullpageDirective_1.propertyPrefix)) {
                continue;
            }
            /**
             * Extract option name from the property name
             *
             * @type {string} option name
             */
            var option = MnFullpageDirective_1.extractName(property);
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
        $(this._el.nativeElement).fullpage(this.options);
    };
    return MnFullpageDirective;
}());
/**
 * Prefix for directive-relative properties
 *
 * @type {string} prefix
 */
MnFullpageDirective.propertyPrefix = "" + DIRECTIVE_NAME;
__decorate([
    core_1.Input("" + DIRECTIVE_NAME),
    __metadata("design:type", mnFullpage_options_class_1.MnFullpageOptions)
], MnFullpageDirective.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MnFullpageDirective.prototype, "mnFullpageMenu", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageLockAnchors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MnFullpageDirective.prototype, "mnFullpageAnchors", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageNavigation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MnFullpageDirective.prototype, "mnFullpageNavigationPosition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MnFullpageDirective.prototype, "mnFullpageNavigationTooltips", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageShowActiveTooltip", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageSlidesNavigation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MnFullpageDirective.prototype, "mnFullpageSlidesNavPosition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageCss3", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MnFullpageDirective.prototype, "mnFullpageScrollingSpeed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageAutoScrolling", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageFitToSection", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MnFullpageDirective.prototype, "mnFullpageFitToSectionDelay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageScrollBar", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MnFullpageDirective.prototype, "mnFullpageEasing", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MnFullpageDirective.prototype, "mnFullpageEasingcss3", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageLoopBottom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageLoopTop", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageLoopHorizontal", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageContinuousVertical", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MnFullpageDirective.prototype, "mnFullpageNormalScrollElements", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageScrollOverflow", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MnFullpageDirective.prototype, "mnFullpageTouchSensitivity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MnFullpageDirective.prototype, "mnFullpageNormalScrollElementTouchThreshold", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageKeyboardScrolling", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageAnimateAnchor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageRecordHistory", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageControlArrows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageVerticalCentered", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MnFullpageDirective.prototype, "mnFullpageResize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MnFullpageDirective.prototype, "mnFullpageSectionsColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MnFullpageDirective.prototype, "mnFullpagePaddingTop", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MnFullpageDirective.prototype, "mnFullpagePaddingBottom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MnFullpageDirective.prototype, "mnFullpageFixedElements", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MnFullpageDirective.prototype, "mnFullpageResponsiveWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MnFullpageDirective.prototype, "mnFullpageResponsiveHeight", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MnFullpageDirective.prototype, "mnFullpageSectionSelector", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MnFullpageDirective.prototype, "mnFullpageSlideSelector", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], MnFullpageDirective.prototype, "mnFullpageAfterLoad", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], MnFullpageDirective.prototype, "mnFullpageOnLeave", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], MnFullpageDirective.prototype, "mnFullpageAfterRender", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], MnFullpageDirective.prototype, "mnFullpageAfterResize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], MnFullpageDirective.prototype, "mnFullpageAfterSlideLoad", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], MnFullpageDirective.prototype, "mnFullpageOnSlideLeave", void 0);
MnFullpageDirective = MnFullpageDirective_1 = __decorate([
    core_1.Directive({
        selector: "[" + DIRECTIVE_NAME + "]"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], MnFullpageDirective);
exports.MnFullpageDirective = MnFullpageDirective;
var MnFullpageDirective_1;


/***/ },

/***/ 912:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(390);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 915:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */
"use strict";
var core_1 = __webpack_require__(2);
var platform_browser_dynamic_1 = __webpack_require__(163);
var app_module_1 = __webpack_require__(366);
core_1.enableProdMode();
document.addEventListener('DOMContentLoaded', function () {
    platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_module_1.AppModule)
        .catch(function (err) { return console.error(err); });
});


/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

"use strict";
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
var core_1 = __webpack_require__(2);
var $ = __webpack_require__(80);
__webpack_require__(88);
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
    return MnFullpageService;
}());
MnFullpageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MnFullpageService);
exports.MnFullpageService = MnFullpageService;


/***/ }

},[915]);