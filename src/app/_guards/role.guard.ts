import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class RoleGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let role = route.data.role as string;
        let userRole = localStorage.getItem('userRole');

        if (userRole == role) {
            return true;
        } else if (userRole == 'super') {
            return true;
        } else if (userRole == 'admin' && role != 'super') {
            return true;
        } else {
            this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
            return false;
        }
    }
}