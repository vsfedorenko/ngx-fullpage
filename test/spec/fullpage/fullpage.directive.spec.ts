/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 15/05/16.
 */

import {
    fakeAsync,
    tick,
    TestBed
} from '@angular/core/testing';

import { Component, Input } from '@angular/core';
import { MnFullpageDirective, MnFullpageOptions } from 'ng2-fullpage';

describe('mnFullpage directive spec', () => {

    @Component({
        template: '<div mnFullpage>Content</div>',
    })
    class TestComponent {

        @Input() public options: MnFullpageOptions = new MnFullpageOptions({
            controlArrows: false,
            scrollingSpeed: 1000,
            css3: true
        });

    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MnFullpageDirective,
                TestComponent
            ]
        });
    });

    it('compiled element should have fullpage-wrapper class, 100% height style', fakeAsync(() => {
        TestBed.compileComponents().then(() => {

            const fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            tick();

            let compiled = fixture.debugElement.nativeElement.children[ 0 ];

            expect(compiled.classList.contains('fullpage-wrapper')).toBe(true);
            expect(compiled.style.height).toBe('100%');

        });
    }));
});
