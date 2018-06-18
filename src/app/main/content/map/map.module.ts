import {NgModule} from '@angular/core';
import {MapComponent} from './map.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AgmCoreModule} from '@agm/core';
import {
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTooltipModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {CovalentTextEditorModule} from '@covalent/text-editor';
import {PageSimpleHeaderModule} from '../../components/page-simple-header/page-simple-header.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {CdkTableModule} from '@angular/cdk/table';
import {ObjectViewComponent} from '../object/object-view/object-view.component';
import {ObjectsModule} from '../object/object.module';

const routes = [
    {
        path: 'map',
        component: MapComponent
    },
];

@NgModule({
    declarations: [
        MapComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBLPpTOkgE6x5LVANQErVGl2eynrFV598Y'
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
        MatSlideToggleModule,
        CovalentTextEditorModule,
        ObjectsModule
    ],
    providers: [],
})
export class MapModule {
}
