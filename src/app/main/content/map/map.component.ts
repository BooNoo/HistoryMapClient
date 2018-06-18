import {Component, NgModule, OnInit, ViewChild} from '@angular/core';
import {AgmCoreModule, AgmMap} from '@agm/core';
import {ObjectService} from '../../../../api/services/object.service';
import {IObject} from '../../../../api/model/IObject';
import {MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';

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
    objects: Observable<IObject[]>;
    selectedObject: IObject = null;

    lat: number = 43.114014;
    lng: number = 131.899843;
    iconScale = 15;


    constructor(private objectService: ObjectService) {
    }

    ngOnInit() {
        this.objects = this.objectService.getObjects();
        this.agmMap.triggerResize();
    }

    mapClick(object: IObject) {
        this.selectedObject = object;
        console.log(object);
    }

    clearSelectedObject() {
        this.selectedObject = null;
    }


}
