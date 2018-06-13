import {NgModule} from '@angular/core';
import {LocationListComponent} from './location-list/location-list.component';
import {RoleGuard} from '../../../_guards/role.guard';
import {AuthGuard} from '../../../_guards/auth.guard';
import {RouterModule} from '@angular/router';
import {LocationService} from '../../../../api/services/location.service';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
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
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {CdkTableModule} from '@angular/cdk/table';
import {AgmCoreModule} from '@agm/core';
import {PageSimpleHeaderModule} from '../../components/page-simple-header/page-simple-header.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LocationAddComponent } from './location-add/location-add.component';
import {LocationFormComponent, LocationFormService} from './location-form/location-form.component';
import {FormModule} from '../../components/form-component/form-component.module';
import { LocationEditComponent } from './location-edit/location-edit.component';
import {CommonModule} from '@angular/common';

const routes = [
    {
        path: 'location-list',
        component: LocationListComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {role: 'admin'}
    },
    {
        path: 'location/add',
        component: LocationAddComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {role: 'admin'}
    },
    {
        path: 'location/edit/:id',
        component: LocationEditComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {role: 'admin'}
    },
];


@NgModule({
    imports: [
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBLPpTOkgE6x5LVANQErVGl2eynrFV598Y'
        }),
        CommonModule,
        FormModule,

        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        PageSimpleHeaderModule,

        CdkTableModule,
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

    ],
    declarations: [LocationListComponent, LocationAddComponent, LocationFormComponent, LocationEditComponent],
    providers: [
        LocationService,
        LocationFormService
    ],
    exports: [],
    entryComponents: []
})

export class LocationModule {
}
