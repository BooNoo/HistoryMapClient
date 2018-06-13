import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RoleGuard} from '../../../_guards/role.guard';
import {AuthGuard} from '../../../_guards/auth.guard';
import {NgModule} from '@angular/core';
import {LocationTypeListComponent} from './location-type-list/location-type-list.component';
import {LocationTypeService} from '../../../../api/services/location-type.service';
import {
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule,
    MatInputModule,
    MatTableModule, MatTooltipModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageSimpleHeaderModule} from '../../components/page-simple-header/page-simple-header.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationTypeFormComponent, LocationTypeFormService} from './location-type-form/location-type-form.component';
import { LocationTypeAddComponent } from './location-type-add/location-type-add.component';
import {LocationAddComponent} from '../location/location-add/location-add.component';
import { LocationTypeEditComponent } from './location-type-edit/location-type-edit.component';
import {LocationEditComponent} from '../location/location-edit/location-edit.component';

const routes = [
    {
        path: 'location-type-list',
        component: LocationTypeListComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {role: 'admin'}
    },
    {
        path: 'location-type-list/add',
        component: LocationTypeAddComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {role: 'admin'}
    },
    {
        path: 'location-type/edit/:id',
        component: LocationTypeEditComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {role: 'admin'}
    },
];

@NgModule({
    declarations: [
        LocationTypeListComponent,
        LocationTypeFormComponent,
        LocationTypeAddComponent,
        LocationTypeEditComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CdkTableModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatTableModule,
        ReactiveFormsModule,
        PageSimpleHeaderModule,
        FlexLayoutModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatCheckboxModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
    ],
    providers: [
        LocationTypeService,
        LocationTypeFormService,
    ],
})
export class LocationTypeModule {
}
