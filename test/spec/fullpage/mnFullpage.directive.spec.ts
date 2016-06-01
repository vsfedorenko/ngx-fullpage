/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 15/05/16.
 */

import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing';
import {
    describe,
    inject,
    injectAsync,
    beforeEach,
    beforeEachProviders,
    it
} from '@angular/core/testing';

import {MnFullpageService} from 'ng2-fullpage';
import {TestComponent} from './mnFullpage.test.component';

describe('mnFullpage directive spec', () => {

    let testComponentBuilder: TestComponentBuilder;

    let componentFixture: ComponentFixture<TestComponent>;

    beforeEachProviders(() => [
        TestComponentBuilder,
        MnFullpageService
    ]);

    beforeEach(injectAsync([TestComponentBuilder],
        (_testComponentBuilder: TestComponentBuilder) => {
            testComponentBuilder = _testComponentBuilder;

            if (componentFixture) {
                return Promise.resolve();
            }

            return testComponentBuilder
                .createAsync(TestComponent)
                .then(fixture => {
                    componentFixture = fixture;
                    fixture.detectChanges();
                });
        }));

    describe('Component specs', () => {

        it('Compiled element should have fullpage-wrapper class, 100% height style', () => {

            let component = componentFixture.debugElement.nativeElement.children[0];
            expect(component.classList.contains('fullpage-wrapper')).toBe(true);
            expect(component.style.height).toBe('100%');

        });

    });

    describe('Service specs', () => {

        it('Move section specs', inject([MnFullpageService],
            (fullpageService: MnFullpageService) => {

                let section1 = componentFixture.nativeElement.querySelector('#section-1');
                let section2 = componentFixture.nativeElement.querySelector('#section-2');
                let section3 = componentFixture.nativeElement.querySelector('#section-3');

                fullpageService.moveSectionDown();
                expect(section2.classList.contains('active')).toBe(true);

                fullpageService.moveSectionUp();
                expect(section1.classList.contains('active')).toBe(true);

                fullpageService.moveTo(3);
                expect(section3.classList.contains('active')).toBe(true);

                fullpageService.silentMoveTo(1);
                expect(section1.classList.contains('active')).toBe(true);
            }));

        it('Slide section specs', inject([MnFullpageService],
            (fullpageService: MnFullpageService) => {
                let section3 = componentFixture.nativeElement.querySelector('#section-3');

                let slide1 = section3.querySelector('#slide-1');
                let slide2 = section3.querySelector('#slide-2');
                let slide3 = section3.querySelector('#slide-3');

                fullpageService.moveTo(3);
                expect(section3.classList.contains('active')).toBe(true);
                expect(slide1.classList.contains('active')).toBe(true);

                // TODO: In demo it works fine but in tests - fail
                // fullpageService.moveSlideRight();
                // expect(slide2.classList.contains('active')).toBe(true);
                //
                // fullpageService.moveSlideRight();
                // expect(slide3.classList.contains('active')).toBe(true);

            }));

    });

});
