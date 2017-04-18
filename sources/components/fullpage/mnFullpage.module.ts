/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 15/05/16.
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { MnFullpageService } from './mnFullpage.service';
import { MnFullpageDirective } from './mnFullpage.directive';

@NgModule({
    declarations: [ MnFullpageDirective ],
    exports: [ MnFullpageDirective ]
})
export class MnFullpageModule {

    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: MnFullpageModule,
            providers: [ MnFullpageService ]
        };
    }

}
