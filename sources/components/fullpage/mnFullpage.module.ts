/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 15/05/16.
 */

import { ModuleWithProviders, NgModule } from '@angular/core';
import { MnFullpageResponsiveSlides, MnFullpageService } from './mnFullpage.service';
import { MnFullpageDirective } from './mnFullpage.directive';
import { MnFullpageOptions } from './mnFullpage-options.class';


const PROVIDERS = [ MnFullpageService, MnFullpageOptions, MnFullpageResponsiveSlides ];

@NgModule({
    declarations: [ MnFullpageDirective ],
    providers: PROVIDERS,
    exports: [ MnFullpageDirective ]
})
export class MnFullpageModule {

    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: MnFullpageModule,
            providers: PROVIDERS
        };
    }

}
