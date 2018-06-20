import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MapObjectsListComponent} from './object-list/object-list.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule, MatSelectModule, MatSlideToggleModule, MatTableModule,
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
import { ObjectEditComponent } from './object-edit/object-edit.component';
import {AgmCoreModule} from '@agm/core';
import {CovalentTextEditorModule} from '@covalent/text-editor';
import { ObjectViewComponent } from './object-view/object-view.component';
import {UploadService} from '../../../../api/services/upload.service';
import {ObjectImageService} from '../../../../api/services/object-image.service';
import {ObjectVideoService} from '../../../../api/services/object-video.service';
import {ObjectAudioService} from '../../../../api/services/object-audio.service';

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
        ObjectViewComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBLPpTOkgE6x5LVANQErVGl2eynrFV598Y'
        }),
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
        MatSelectModule,
        MatChipsModule,
        MatSlideToggleModule,
        CovalentTextEditorModule,
    ],
    exports: [
        ObjectViewComponent
    ],
    providers: [
        ObjectService,
        ObjectFormService,
        UploadService,
        ObjectImageService,
        ObjectVideoService,
        ObjectAudioService
    ],
})
export class ObjectsModule {
}
