/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */

import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';

enableProdMode();

document.addEventListener('DOMContentLoaded', () => {
    bootstrap(AppComponent, []).catch(err => console.error(err));
});

