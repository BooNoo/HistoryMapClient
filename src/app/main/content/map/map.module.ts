import {NgModule} from '@angular/core';
import {MapComponent} from './map.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AgmCoreModule} from '@agm/core';

const routes = [
    {
        path: 'map',
        component: MapComponent
    },
];

@NgModule({
    declarations: [
        MapComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBLPpTOkgE6x5LVANQErVGl2eynrFV598Y'
        }),
    ],
    providers: [],
})
export class MapModule {
}
