import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    users: any;

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
        let httpOptions = {
            headers: new HttpHeaders({'Authorization': localStorage.getItem('jwtToken')})
        };
        this.http.get(environment.apiUrl + 'user/all', httpOptions).subscribe(data => {
            this.users = data;
        }, err => {
            if (err.status === 401) {
                this.router.navigate(['login']);
            }
        });
    }

    logout() {
        localStorage.removeItem('jwtToken');
        this.router.navigate(['login']);
    }

}
