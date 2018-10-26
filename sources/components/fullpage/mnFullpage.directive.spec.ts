/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 15/05/16.
 */

import {async, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {Component, Input} from '@angular/core';
import {MnFullpageOptions} from './mnFullpage-options.class';
import {MnFullpageModule} from '@fullpage/mnFullpage.module';

describe('mnFullpage directive spec', () => {

    @Component({
        template: `
            <!--suppress HtmlUnknownAttribute -->
            <div id="content-wrapper" [mnFullpage]="options">
                <div class="section  fp-section fp-table">
                    <div class="fp-tableCell">
                        First section
                    </div>
                </div>
                <div class="section fp-section fp-table">
                    <div class="fp-tableCell">
                        Second section
                    </div>
                </div>
            </div>
        `,
    })
    class TestComponent {

        @Input() public options: MnFullpageOptions = MnFullpageOptions.create({
            controlArrows: false,
            scrollingSpeed: 1000,
            css3: true
        });

    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MnFullpageModule.forRoot()
            ],
            declarations: [
                TestComponent
            ]
        }).compileComponents();
    }));

    it('compiled element should have fullpage-wrapper class, 100% height style', () => {
        TestBed.compileComponents().then(() => {

            const fixture = TestBed.createComponent(TestComponent);
            fixture.autoDetectChanges(true);

            fixture.whenRenderingDone().then(() => {
                const compiled = fixture.debugElement.nativeElement.children[0];

                expect(compiled.id).toEqual('content-wrapper');
                expect(compiled.classList.contains('fullpage-wrapper')).toBeTruthy();
                expect(compiled.style.height).toEqual('100%');
            });
        });
    });
});
