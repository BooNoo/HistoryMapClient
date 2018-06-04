import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SignupComponent} from './signup/signup.component';

const routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        FormsModule,

    ],
    declarations: [LoginComponent, SignupComponent],
})
export class AuthenticationModule {
}
