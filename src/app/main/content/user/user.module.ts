import {RoleGuard} from '../../../_guards/role.guard';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../../../_guards/auth.guard';
import {UserComponent} from './user.component';

const routes = [
    {
        path: 'users',
        component: UserComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {role: 'admin'},
    },
];

@NgModule({
    declarations: [
        UserComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: [],
})
export class UserModule {
}
