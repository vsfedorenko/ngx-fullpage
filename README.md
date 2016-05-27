[![ng2-fullpage](https://raw.githubusercontent.com/meiblorn/ng2-fullpage/develop/logo.png)](https://github.com/meiblorn/ng2-fullpage)
# ng2-fullpage [![npm downloads](https://img.shields.io/npm/dm/ng2-fullpage.svg)](https://npmjs.org/ng2-fullpage)[![Build Status](https://travis-ci.org/meiblorn/ng2-fullpage.svg?branch=master)](https://travis-ci.org/meiblorn/ng2-fullpage)[![Join the chat at https://gitter.im/meiblorn/ng2-fullpage](https://badges.gitter.im/meiblorn/ng2-fullpage.svg)](https://gitter.im/meiblorn/ng2-fullpage?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Create Beautiful Fullscreen Scrolling websites (now with Angular 2)!

This is an Angular 2 [fullPage.js](https://github.com/alvarotrigo/fullPage.js) port library.
  
[![npm version](https://badge.fury.io/js/ng2-fullpage.svg)](https://badge.fury.io/js/ng2-fullpage)
[![Dependency Status](https://david-dm.org/meiblorn/ng2-fullpage.svg)](https://david-dm.org/meiblorn/ng2-fullpage)
[![devDependency Status](https://david-dm.org/meiblorn/ng2-fullpage/dev-status.svg)](https://david-dm.org/meiblorn/ng2-fullpage#info=devDependencies)
[![Test Coverage](https://codeclimate.com/github/meiblorn/ng2-fullpage/badges/coverage.svg)](https://codeclimate.com/github/meiblorn/ng2-fullpage/coverage)
[![Code Climate](https://codeclimate.com/github/meiblorn/ng2-fullpage/badges/gpa.svg)](https://codeclimate.com/github/meiblorn/ng2-fullpage)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/meiblorn/ng2-fullpage/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

## Demo

Check out the live demo [HERE](http://meiblorn.github.io/ng2-fullpage)

## Quick Start

#### With [AngularClass/angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter):
Install `ng2-fullpage` npm module:
```bash
  npm install ng2-fullpage --save
```  
Install ambient typings for `jquery` library:
```bash
  typings install jquery --save --ambient
```
Write some code (e.g. in app/app.component.ts):
```typescript
/**
* 
* File: app/app.component.ts
* 
* If you are starting from scratch replace existing content with the code below
* Otherwise update your template with 'mnFullpage' directive and section div-blocks.
* 
*/

import {Component} from '@angular/core';
import {MnFullpageDirective} from 'ng2-fullpage';

@Component({
    selector: 'app',
    directives: [MnFullpageDirective],
    template: `
        <div mnFullpage [mnFullpageNavigation]="true" [mnFullpageKeyboardScrolling]="true">
            <div class="section"> Some section 1 </div>
                <div class="section"> Some section 2 </div>
                <div class="section">
                    <div class="slide"> Slide 1 </div>
                    <div class="slide"> Slide 2 </div>
                    <div class="slide"> Slide 3 </div>
                    <div class="slide"> Slide 4 </div>
                </div>
            <div class="section"> Some section 4 </div>
        </div>
    `
})
export class AppComponent {
     // no additional config is required
}
```
Update webpack vendors entry file (src/vendor.ts) with 'jquery' import:

```typescript
/**
* 
* File: vendor.ts
* 
* Just add 'jquery' module import statement.
* 
*/

import 'jquery';

```

Start server and open [http://localhost:3000](http://localhost:3000) url in browser:
```bash
npm run start
```

# Usage

### Basic installation

All you need to do is just add [mnFullpage] @Component.directives array 
and add directive to an html element inside your template:

```typescript
/**
* 
* Just add MnFullpageDirective inside your @Component.directives array
* 
*/
import {Component} from '@angular/core';
import {MnFullpageDirective} from 'ng2-fullpage';

@Component({
    selector: 'app',
    directives: [MnFullpageDirective],
    template: ` ... `
})
export class AppComponent {
     // no additional config is required
}
```

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

> Notice, options must be prefixed with 'fullpage' word and written in camelCase style.

```typescript
import {Component, Input} from '@angular/core';
import {MnFullpageDirective, MnFullpageOptions} from 'ng2-fullpage';

@Component({
    selector: 'app',
    directives: [MnFullpageDirective],
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
import {Component, Input} from '@angular/core';
import {MnFullpageDirective, MnFullpageOptions} from 'ng2-fullpage';

@Component({
    selector: 'app',
    directives: [MnFullpageDirective],
    template: `
        <div [mnFullpage]="options">
            ....
        </div>
    `
})
export class AppComponent {

    @Input() public options:MnFullpageOptions = new MnFullpageOptions({
        navigation: true,
        keyboardScrolling: true
    });

}
```
- **Mixed**. Mix two approaches to configure. 

> Notice, Element options have more priority than options inside options object.

```typescript
import {Component, Input} from '@angular/core';
import {MnFullpageDirective, MnFullpageOptions} from 'ng2-fullpage';

@Component({
    selector: 'app',
    directives: [MnFullpageDirective],
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
