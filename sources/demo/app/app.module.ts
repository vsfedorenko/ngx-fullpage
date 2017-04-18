import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MnFullpageModule } from '@fullpage/index';

@NgModule({
    imports: [
        BrowserModule,
        MnFullpageModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}
