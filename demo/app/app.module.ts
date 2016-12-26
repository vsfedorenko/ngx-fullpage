import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MnFullpageModule } from '../../components/fullpage/mnFullpage.module';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        MnFullpageModule.forRoot(),
    ]
})
export class AppModule {

}
