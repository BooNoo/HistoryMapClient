import {Component, OnInit, ViewChild} from '@angular/core';
import {ILocation} from '../../../../../api/model/ILocation';
import {LocationService} from '../../../../../api/services/location.service';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {AgmMap} from '@agm/core';
import {IServerResponse} from '../../../../../api/model/IServerResponse';
import {Router} from '@angular/router';

@Component({
    selector: 'app-location-list',
    templateUrl: './location-list.component.html',
    styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

    @ViewChild(AgmMap)
    public agmMap: AgmMap;

    lat: number = 43.115068;
    lng: number = 131.906059;

    dataSource;
    displayedColumns = ['select', 'name', 'code', 'coordinate'];
    selection = new SelectionModel<ILocation>(true, []);

    constructor(private locationService: LocationService,
                private router: Router) {
    }

    ngOnInit() {
        this.getLocation();
    }

    getLocation() {
        this.locationService.getLocations().subscribe(x => this.dataSource = new MatTableDataSource(x));
    }

    setLocationOnMap(location: ILocation) {
        this.lat = location.latitude;
        this.lng = location.longitude;
    }

    deleteLocation() {
        this.locationService.deleteLocation(this.selection.selected[0]).subscribe((response: IServerResponse) => {
            if (!response.error) {
                this.selection.clear();
                this.ngOnInit()
            }
        })
    }

    editLocation() {
        this.router.navigate(['location/edit/' + this.selection.selected[0].id])
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

}
