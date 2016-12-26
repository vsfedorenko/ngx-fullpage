import { NgModule, ModuleWithProviders } from '@angular/core';
import { MnFullpageService } from './mnFullpage.service';
import { MnFullpageDirective } from './mnFullpage.directive';

@NgModule({
    declarations: [ MnFullpageDirective ],
    exports: [ MnFullpageDirective ]
})
export class MnFullpageModule {

    public static forRoot(): ModuleWithProviders {
        return { ngModule: MnFullpageModule, providers: [ MnFullpageService ] };
    }

}
