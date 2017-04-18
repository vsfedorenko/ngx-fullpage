import { browser, by, element } from 'protractor';

export class NgxFullpagePage {

    //noinspection JSMethodCanBeStatic
    navigateTo() {
        browser.get('/');
    }

    getContentWrapper() {
        return element(by.id('content-wrapper'));
    }

    //noinspection JSMethodCanBeStatic
    getFullpageWrapper() {
        return element(by.className('fullpage-wrapper'));
    }

}
