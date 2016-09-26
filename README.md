[![ng2-fullpage](https://raw.githubusercontent.com/meiblorn/ng2-fullpage/develop/logo.png)](https://github.com/meiblorn/ng2-fullpage)
# ng2-fullpage [![npm downloads](https://img.shields.io/npm/dm/ng2-fullpage.svg)](https://npmjs.org/ng2-fullpage)[![Build Status](https://travis-ci.org/meiblorn/ng2-fullpage.svg?branch=master)](https://travis-ci.org/meiblorn/ng2-fullpage)[![Join the chat at https://gitter.im/meiblorn/ng2-fullpage](https://badges.gitter.im/meiblorn/ng2-fullpage.svg)](https://gitter.im/meiblorn/ng2-fullpage?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Create Beautiful Fullscreen Scrolling websites (now with Angular 2)!

This is an Angular 2 [fullPage.js](https://github.com/alvarotrigo/fullPage.js) port library.
  
[![npm version](https://badge.fury.io/js/ng2-fullpage.svg)](https://badge.fury.io/js/ng2-fullpage)
[![Dependency Status](https://david-dm.org/meiblorn/ng2-fullpage.svg)](https://david-dm.org/meiblorn/ng2-fullpage)
[![devDependency Status](https://david-dm.org/meiblorn/ng2-fullpage/dev-status.svg)](https://david-dm.org/meiblorn/ng2-fullpage#info=devDependencies)
[![Test Coverage](https://codeclimate.com/github/meiblorn/ng2-fullpage/badges/coverage.svg)](https://codeclimate.com/github/meiblorn/ng2-fullpage/coverage)
[![Code Climate](https://codeclimate.com/github/meiblorn/ng2-fullpage/badges/gpa.svg)](https://codeclimate.com/github/meiblorn/ng2-fullpage)

-----------------------------------
NEW RELEASE 2.0.1: ANGULAR 2 FINAL
-----------------------------------

## Demo

Check out the live demo [HERE](http://meiblorn.github.io/ng2-fullpage)

## Quick Start

### Start with SystemJS

#### [Plunker example](http://embed.plnkr.co/1p9zKp4CNI1HncAh1h9m)

## With [AngularClass/angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter):
Install `ng2-fullpage` npm module:
```bash
  npm install ng2-fullpage --save
```  
Install ambient typings for `jquery` library:
```bash
  npm install @types/jquery --save-dev
  
  # or if you prefer "typings" tool
  typings install jquery --save --ambient
```

**Write some code:**

_app/app.module.ts_:
```typescript

/**
 *
 * File: app/app.module.ts
 *
 */
 
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MnFullpageDirective, MnFullpageService } from "ng2-fullpage";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        MnFullpageDirective // add MnFullpageDirective declaration here
    ],
    imports: [
        BrowserModule,
    ],
    providers: [
        MnFullpageService // also add MnFullpageService provider here
    ]
})
export class AppModule {

}
```

```typescript
/**
* 
* File: app/app.component.ts
* 
* If you are starting from scratch replace existing content with the code below
* Otherwise update your html template with 'mnFullpage' directive.
* 
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
        <div mnFullpage 
            [mnFullpageNavigation]="true" 
            [mnFullpageKeyboardScrolling]="true"
            [mnFullpageControlArrows]="false">
            <div class="section fp-section fp-table">        
                <div class="fp-tableCell">
                    Some section 1
                </div> 
            </div>
            <div class="section fp-section fp-table">        
                <div class="fp-tableCell"> Some section 2</div> 
            </div>
            <div class="section fp-section fp-table">
                <div class="fp-tableCell">
                    <div class="slide"> Slide 1 </div>
                    <div class="slide"> Slide 2 </div>
                    <div class="slide"> Slide 3 </div>
                    <div class="slide"> Slide 4 </div>
                </div>
            </div>
            <div class="section fp-section fp-table">        
                <div class="fp-tableCell"> Some section 4</div> 
            </div>
        </div>
   
    `
})
export class AppComponent {
    // no additional config is required
}
```
Update webpack vendors entry file (src/vendor.browser.ts) with 'jquery' and 'fullpage.js' import:

```typescript
/**
* 
* File: vendor.browser.ts
* 
* Just add 'jquery' module import statement.
* 
*/

import 'jquery';
import 'fullpage.js'

```

Start server and open [http://localhost:3000](http://localhost:3000) url in browser:
```bash
npm run start
```

# Usage

### Basic installation

All you need to do is just add [mnFullpage] @Component.directives array 
and add directive to an html element inside your template:

_app/app.module.ts_:
```typescript
/**
* 
* Just add MnFullpageDirective into the @Component.declarations  
* and MnFullpageService into the @Component.providers arrays
* 
*/

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MnFullpageDirective, MnFullpageService } from "ng2-fullpage";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        MnFullpageDirective // add MnFullpageDirective declaration here
    ],
    imports: [
        BrowserModule,
    ],
    providers: [
        MnFullpageService // also add MnFullpageService provider here
    ]
})
export class AppModule {

}
```

_app/app.component.ts_:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: ./template.html
})
export class AppComponent {
    // no additional config is required
}
```

_template.html_:
```html
<!-- Add fullpage directive to an element -->

<div mnFullpage>
   ...
</div>
```

### Advanced usage

Like it is done in most of libraries, you can configure fullpage.js for you goals.
There 3 ways to configure fullPage.js:

- **Via attributes**. Define options like attributes on the same element. 

> Notice, options must be prefixed with 'mnFullpage' word and written in camelCase style.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div mnFullpage [mnFullpageNavigation]="true" [mnFullpageKeyboardScrolling]="true">
        ....
    </div>  
  `
})
export class AppComponent {
}
```
- **Via options object**. Use FullpageOptions configuration object to inject options. 

> Notice to wrap directive in square brackets **[mnFullpage]** and reference it to your options object

```typescript
import { Component, Input } from '@angular/core';
import { MnFullpageOptions } from 'ng2-fullpage';

@Component({
    selector: 'app',
    template: `
        <div [mnFullpage]="options">
            ....
        </div>
    `
})
export class AppComponent {

    @Input() public options: MnFullpageOptions = new MnFullpageOptions({
        navigation: true,
        keyboardScrolling: true
    });

}
```
- **Mixed**. Mix two approaches to configure. 

> Notice, html element options have less priority than options inside options object.

```typescript
import { Component, Input } from '@angular/core';
import { MnFullpageOptions } from 'ng2-fullpage';

@Component({
    selector: 'app',
    template: `
        <div [mnFullpage]="options" [mnFullpageNavigation]="true">
            ....
        </div>
    `
})
export class AppComponent {

    @Input() public options:MnFullpageOptions = new MnFullpageOptions({
        keyboardScrolling: true
    });

}
```

### Services

Service `MnFullpageService` contains `$.fn.*` static methods for `fullPage.js` library.   

```typescript
import { Component, Input } from '@angular/core';
import { MnFullpageService } from 'ng2-fullpage';

@Component({
    selector: 'app',
    template: `
        <button (click)="fullpageService.moveSectionUp();">Move section up</button>
        <button (click)="fullpageService.moveSectionDown();">Move section down</button>
        
        <div mnFullpage [mnFullpageNavigation]="true">
            ....
        </div>
    `
})
export class AppComponent {

     constructor(private fullpageService: MnFullpageService) {
     }

}
```


# Troubleshooting

### View Encapsulation issue 
##### Thanks to @aamir1995 [#94](https://github.com/meiblorn/ng2-fullpage/issues/94)

If you get error when you *include fullPage.js styles* into your component, 
probably you've faced with Angular 2 *ViewEncapsulation issue* [#94](https://github.com/meiblorn/ng2-fullpage/issues/94).

Try to update your component: 
_Set value of 'encapsulation' property to 'ViewEncapsulation.None' like this below_:

  ```typescript
  @Component({
      ...
      encapsulation: ViewEncapsulation.None
      ...
  })
  export class AppComponent {
      ...
  }
  ```

# Development

### Build
```bash
# development
npm run build:dev

# production
npm run build:prod
```
### Watch and build files
```bash
npm run watch
```
### Run tests
```bash
npm run test
```
### Watch and run tests
```bash
npm run watch:test
```

# License

MIT
