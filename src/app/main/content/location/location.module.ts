import {NgModule} from '@angular/core';
import {LocationListComponent} from './location-list/location-list.component';
import {RoleGuard} from '../../../_guards/role.guard';
import {AuthGuard} from '../../../_guards/auth.guard';
import {RouterModule} from '@angular/router';

const routes = [
    {
        path: 'location-list',
        component: LocationListComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {role: 'admin'}
    },
];


@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    declarations: [LocationListComponent],
    providers: [],
    exports: [],
    entryComponents: []
})

export class LocationModule {
}
