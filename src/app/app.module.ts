import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DataService} from './data.service';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthGuard } from './_guards/auth.guard';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
    {
        path: 'users',
        component: UserComponent,
        data: {title: 'User List'},
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {title: 'Login'}
    },
    {
        path: 'signup',
        component: SignupComponent,
        data: {title: 'Sign Up'}
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: {title: 'Dashboard'},
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full',

    }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        UserComponent,
        DashboardComponent,

    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        MatButtonModule,
        HttpClientModule,
        FormsModule,
        MatCardModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false} // <-- debugging purposes only
        ),
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule

    ],
    providers: [
        DataService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
