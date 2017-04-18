import { NgxFullpagePage } from './app.po';
import { browser } from 'protractor';

describe('ngx-fullpage demo app', () => {

    let page: NgxFullpagePage;

    beforeEach(() => {
        page = new NgxFullpagePage();
    });

    it('target element should have fullpage-wrapper class', () => {
        page.navigateTo();
        browser.sleep(1000);

        expect<any>(page.getContentWrapper().getId())
            .toEqual(page.getFullpageWrapper().getId());

    });

});
