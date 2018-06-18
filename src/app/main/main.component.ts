import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    superMenu = [
        {
            id: 'home',
            title: 'Домой',
            url: '/map',
            type: 'item',
            icon: 'home',
        },
        {
            id: 'users',
            title: 'Пользователи',
            url: '/users',
            type: 'item',
            icon: 'group',
        },
        {
            id: 'location-list',
            title: 'Локации',
            url: '/location-list',
            type: 'item',
            icon: 'business',
        },
        {
            id: 'location-type-list',
            title: 'Типы локации',
            url: '/location-type-list',
            type: 'item',
            icon: 'burst_mode',
        },
        {
            id: 'object-list',
            title: 'Объекты карты',
            url: '/object-list',
            type: 'item',
            icon: 'place'
        }
    ];

    adminMenu = [
        {
            id: 'home',
            title: 'Домой',
            url: '/map',
            type: 'item',
            icon: 'home',
        },
        {
            id: 'point-object',
            title: 'Объекты',
            url: '/point-object',
            type: 'item',
            icon: 'group',
        }
    ];

    userMenu = [
        {
            id: 'home',
            title: 'Домой',
            url: '/map',
            type: 'item',
            icon: 'home',
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
            if (role == 'super') {
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
