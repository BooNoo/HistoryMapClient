import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {Observable} from 'rxjs/Observable';
import {tap, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

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
        this.http.post('http://localhost:3003/signup', this.signupData).subscribe(resp => {
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
