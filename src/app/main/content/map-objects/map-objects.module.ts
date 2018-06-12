import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MapObjectsListComponent} from './map-objects-list/map-objects-list.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {MatProgressBarModule} from '@angular/material';
import {RoleGuard} from '../../../_guards/role.guard';
import {AuthGuard} from '../../../_guards/auth.guard';

const routes = [
    {
        path: 'map-objects-list',
        component: MapObjectsListComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {role: 'admin'}
    },
];

@NgModule({
    declarations: [
        MapObjectsListComponent,
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
    ],
    providers: [],
})
export class MapObjectsModule {
}
