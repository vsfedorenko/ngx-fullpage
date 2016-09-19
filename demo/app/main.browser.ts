/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

enableProdMode();

document.addEventListener('DOMContentLoaded', () => {
    platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch(err => console.error(err));
});

