/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 31/05/16.
 */

import {Component, Input} from '@angular/core';
import {MnFullpageDirective, MnFullpageOptions, MnFullpageService} from 'ng2-fullpage';

/**
 * Test component
 */
@Component({
    providers: [MnFullpageService],
    directives: [MnFullpageDirective],
    template: `
        <div [mnFullpage]="options" [mnFullpageLoopHorizontal]="true">
            <div id="section-1" class="section">Section 1</div>
            <div id="section-2" class="section">Section 2</div>
            <div id="section-3" class="section">
                <div data-anchor="slide-1" id="slide-1" class="slide">Slide 1</div>
                <div data-anchor="slide-2" id="slide-2" class="slide">Slide 2</div>
                <div data-anchor="slide-3" id="slide-3" class="slide">Slide 3</div>
            </div>
        </div>
    `
})
export class TestComponent {

    @Input() public options: MnFullpageOptions = new MnFullpageOptions({
        scrollingSpeed: 0,
        css3: true
    });

}
