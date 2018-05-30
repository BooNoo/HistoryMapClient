import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';
import {AuthGuard} from './_guards/auth.guard';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {MapComponent} from './map/map.component';
import {RoleGuard} from './_guards/role.guard';
import {PointObjectComponent} from './point-object/point-object.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: {title: 'Login'}
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: '',
        redirectTo: 'dashboard/map',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        redirectTo: 'dashboard/map',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: 'map',
                component: MapComponent,
            },
            {
                path: 'users',
                component: UserComponent,
                canActivate: [AuthGuard, RoleGuard],
                data: {role: 'super'}
            },
            {
                path: 'point-object',
                component: PointObjectComponent,
                canActivate: [AuthGuard, RoleGuard],
                data: {role: 'admin'}
            },
        ]
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
