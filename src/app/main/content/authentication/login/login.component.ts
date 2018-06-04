import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    envUrl = environment.apiUrl;
    loginData = {email: '', password: ''};
    message = '';
    data: any;

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
    }

    login() {
        this.http.post(environment.apiUrl + 'signin', this.loginData).subscribe(resp => {
            this.data = resp;
            localStorage.setItem('jwtToken', 'bearer ' + this.data.token);
            localStorage.setItem('userRole', this.data.role);
            this.router.navigate(['dashboard']);
        }, err => {
            this.message = err.error.msg;
        });
    }
}
