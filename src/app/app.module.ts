import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {
    MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatIconModule,
    MatCheckboxModule, MatAutocompleteModule, MatButtonToggleModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule,
    MatDividerModule, MatExpansionModule, MatGridListModule, MatProgressBarModule, MatListModule, MatMenuModule, MatNativeDateModule,
    MatPaginatorModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSliderModule, MatSlideToggleModule,
    MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataService} from './data.service';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './_guards/auth.guard';
import {UserComponent} from './user/user.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import { MapComponent } from './map/map.component';
import { PointObjectComponent } from './point-object/point-object.component';
import {RoleGuard} from './_guards/role.guard';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    exports: [
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatFormFieldModule
    ]
})
export class MaterialModule {}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        UserComponent,
        DashboardComponent,
        MapComponent,
        PointObjectComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        FlexLayoutModule,
        MaterialModule,
        ReactiveFormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBLPpTOkgE6x5LVANQErVGl2eynrFV598Y'
        }),
        MapComponent
    ],
    providers: [
        DataService,
        AuthGuard,
        RoleGuard
    ],
    bootstrap: [
        AppComponent,
        DashboardComponent
    ],
    entryComponents: [
        DashboardComponent
    ],
    schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
