import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MnFullpageDirective, MnFullpageService } from "../../components";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,

        MnFullpageDirective
    ],
    imports: [
        BrowserModule,
    ],
    providers: [
        MnFullpageService
    ]
})
export class AppModule {

}
