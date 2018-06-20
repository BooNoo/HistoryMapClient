import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {DataService} from './data.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './_guards/auth.guard';
import {AppRoutes} from './app-routing.module';
import {RoleGuard} from './_guards/role.guard';
import {MainModule} from './main/main.module';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
    exports: []
})
export class MaterialModule {
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        FlexLayoutModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forRoot(AppRoutes),
        MainModule,
        CommonModule,
    ],
    providers: [
        DataService,
        AuthGuard,
        RoleGuard,
    ],
    bootstrap: [
        AppComponent,
    ],
    exports: [],
    entryComponents: [
        // DashboardComponent
    ],
    schemas: []
})
export class AppModule {
}
