import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MapObjectsListComponent} from './object-list/object-list.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule,
    MatInputModule,
    MatProgressBarModule, MatSelectModule, MatTableModule,
    MatTooltipModule
} from '@angular/material';
import {RoleGuard} from '../../../_guards/role.guard';
import {AuthGuard} from '../../../_guards/auth.guard';
import {NgModule} from '@angular/core';
import {ObjectService} from '../../../../api/services/object.service';
import {PageSimpleHeaderModule} from '../../components/page-simple-header/page-simple-header.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CdkTableModule} from '@angular/cdk/table';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ObjectFormComponent, ObjectFormService} from './object-form/object-form.component';
import { ObjectAddComponent } from './object-add/object-add.component';
import {LocationTypeAddComponent} from '../location-type/location-type-add/location-type-add.component';
import { ObjectEditComponent } from './object-edit/object-edit.component';
import {LocationTypeEditComponent} from '../location-type/location-type-edit/location-type-edit.component';

const routes = [
    {
        path: 'object-list',
        component: MapObjectsListComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {role: 'admin'}
    },
    {
        path: 'object-list/add',
        component: ObjectAddComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {role: 'admin'}
    },
    {
        path: 'object-list/edit/:id',
        component: ObjectEditComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {role: 'admin'}
    },
];

@NgModule({
    declarations: [
        MapObjectsListComponent,
        ObjectFormComponent,
        ObjectAddComponent,
        ObjectEditComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AngularFireModule.initializeApp({
            apiKey: 'AIzaSyC4vjCzqWwP-vfaijAyGaJ_fLAbgIql0jE',
            authDomain: 'historymap-1994.firebaseapp.com',
            storageBucket: 'historymap-1994.appspot.com',
            projectId: 'historymap-1994',
        }),
        AngularFireStorageModule,
        MatProgressBarModule,
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
        MatSelectModule
    ],
    providers: [
        ObjectService,
        ObjectFormService,
    ],
})
export class ObjectsModule {
}
