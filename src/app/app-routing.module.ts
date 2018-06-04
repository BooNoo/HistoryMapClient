import { Routes, RouterModule } from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: '**',
        redirectTo: 'map',
    },
    {
        path: '',
        redirectTo: 'map',
        pathMatch: 'full',
    },
];
