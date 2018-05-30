import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    superMenu = [
        {
            id: 'home',
            title: "Домой",
            url: "/map",
            type: "item",
            icon: "home",
        },
        {
            id: "users",
            title: "Пользователи",
            url: "/users",
            type: "item",
            icon: "group",
        },
        {
            id: "point-object",
            title: "Объекты",
            url: "/point-object",
            type: "item",
            icon: "place",
        }
    ];

    adminMenu = [
        {
            id: "home",
            title: "Домой",
            url: "/map",
            type: "item",
            icon: "home",
        },
        {
            id: "point-object",
            title: "Объекты",
            url: "/point-object",
            type: "item",
            icon: "group",
        }
    ];

    userMenu = [
        {
            id: "home",
            title: "Домой",
            url: "/map",
            type: "item",
            icon: "home",
        }
    ];


    navigation = [];


    @ViewChild('sidenav') sidenav: MatSidenav;
    options: FormGroup;

    constructor(fb: FormBuilder, private router: Router) {
        this.options = fb.group({
            'fixed': false,
            'top': 0,
            'bottom': 0,
        });
    }

    ngOnInit() {
        this.navigation = this.userMenu;
        let role = localStorage.getItem('userRole');
        if (role) {
            console.log(role);
            if (role ==  'super') {
                this.navigation = this.superMenu;
            }
            if (role == 'admin') {
                this.navigation = this.adminMenu;
            }
            if (role == 'user') {
                console.log(2);
                this.navigation = this.userMenu;
            }
        }
    }

    logout() {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userRole');
        this.router.navigate(['login']);
    }

}
