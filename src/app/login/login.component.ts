import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {Observable} from 'rxjs/Observable';
import {tap, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginData = {email: "", password: ""};
    message = "";
    data: any;
    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
        // this.logout()
    }

    login() {
        this.http.post('http://192.168.0.105:3003/signin', this.loginData).subscribe(resp => {
            this.data = resp;
            localStorage.setItem('jwtToken', 'bearer ' + this.data.token);
            localStorage.setItem('userRole', this.data.role);
            this.router.navigate(['dashboard']);
        }, err => {
            this.message = err.error.msg;
        });
    }
}
