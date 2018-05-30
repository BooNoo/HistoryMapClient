import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    signupData = {email: '', password: '', role: 'user'};
    response : any;
    message = '';

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
    }

    signup() {
        this.http.post( environment.apiUrl + 'signup', this.signupData).subscribe(resp => {
            this.response = resp;
            if (this.response.error) {
                this.message = this.response.message
            } else {
                this.router.navigate(["login"]);
            }
        }, err => {
            this.message = err.error.msg;
        });
    }

}
