import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LocationTypeService} from '../../../../../api/services/location-type.service';
import {MatTableDataSource} from '@angular/material';
import {ILocation} from '../../../../../api/model/ILocation';
import {SelectionModel} from '@angular/cdk/collections';
import {IServerResponse} from '../../../../../api/model/IServerResponse';
import {ILocationType} from '../../../../../api/model/ILocationType';

@Component({
    selector: 'location-type-list',
    templateUrl: './location-type-list.component.html',
    styleUrls: ['./location-type-list.component.scss']
})
export class LocationTypeListComponent implements OnInit {

    dataSource;
    displayedColumns = ['select', 'name'];
    selection = new SelectionModel<ILocationType>(true, []);

    constructor(private locationTypeService: LocationTypeService,
                private router: Router) {
    }

    ngOnInit() {
        this.locationTypeService.getLocationTypes().subscribe(x => this.dataSource = new MatTableDataSource(x));
    }

    deleteLocationType() {
        this.locationTypeService.deleteLocationType(this.selection.selected[0]).subscribe((response: IServerResponse) => {
            if (!response.error) {
                this.selection.clear();
                this.ngOnInit()
            }
        })
    }

    editLocationType() {
        this.router.navigate(['location-type/edit/' + this.selection.selected[0].id])
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
