/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 15/05/16.
 */

import {TestComponentBuilder} from '@angular/compiler/testing';
import {async, describe, inject, it} from '@angular/core/testing';

import {Component} from '@angular/core';
import {FullpageDirective} from 'ng2-fullpage';

describe('fullpage directive', () => {
    // Create a test component to test directives
    @Component({
        template: '',
        directives: [FullpageDirective]
    })
    class TestComponent {
    }

    function createComponentAndTest(tcb: TestComponentBuilder, expectations: Function) {
        return tcb.overrideTemplate(TestComponent, '<div fullpage>Content</div>')
            .createAsync(TestComponent).then((fixture: any) => {
                fixture.detectChanges();

                expectations(fixture);
            });
    }

    it('compiled element should have fullpage-wrapper class, 100% height style', async(inject([TestComponentBuilder],
        (tcb: TestComponentBuilder) => {
            return createComponentAndTest(tcb, (fixture) => {
                let compiled = fixture.debugElement.nativeElement.children[0];
                
                expect(compiled.classList.contains('fullpage-wrapper')).toBe(true);
                expect(compiled.style.height).toBe('100%');
            });
        })));
});
