import {Component, NgModule, OnInit, ViewChild} from '@angular/core';
import {AgmCoreModule, AgmMap} from '@agm/core';

@NgModule({
    imports: [
        AgmCoreModule
    ],
})

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    @ViewChild(AgmMap)
    public agmMap: AgmMap;

    lat: number = 43.114014;
    lng: number = 131.899843;

    constructor() {
    }

    ngOnInit() {
        this.agmMap.triggerResize();
    }

}
