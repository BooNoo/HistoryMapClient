import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MatButtonModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from "./data.service";   // our custom service, see below


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        MatButtonModule,
        HttpClientModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
