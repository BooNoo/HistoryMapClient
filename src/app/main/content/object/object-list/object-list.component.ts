import {Component, OnInit} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {finalize} from 'rxjs/operators';
import {ObjectService} from '../../../../../api/services/object.service';
import {ILocation} from '../../../../../api/model/ILocation';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {IServerResponse} from '../../../../../api/model/IServerResponse';
import {Router} from '@angular/router';
import {ILocationType} from '../../../../../api/model/ILocationType';
import {LocationTypeService} from '../../../../../api/services/location-type.service';
import {IObject} from '../../../../../api/model/IObject';

@Component({
    selector: 'object-list',
    templateUrl: './object-list.component.html',
    styleUrls: ['./object-list.component.scss']
})
export class MapObjectsListComponent implements OnInit {
    // ref: AngularFireStorageReference;
    // task: AngularFireUploadTask;
    // uploadProgress: Observable<number>;
    // downloadURL: Observable<string>;
    lat: number = 43.115068;
    lng: number = 131.906059;
    dataSource;
    locationType: ILocationType[];
    displayedColumns = ['select', 'name', 'type', 'coordinate'];
    selection = new SelectionModel<IObject>(true, []);

    constructor(private afStorage: AngularFireStorage,
                private objectService: ObjectService,
                private locationTypeService: LocationTypeService,
                private router: Router) {
    }

    async ngOnInit() {
        this.objectService.getObjects().subscribe(x => this.dataSource = new MatTableDataSource(x));
        await this.locationTypeService.getLocationTypes().subscribe(x => this.locationType = x);
    }

    deleteObject() {
        this.objectService.deleteObject(this.selection.selected[0]).subscribe((response: IServerResponse) => {
            if (!response.error) {
                this.selection.clear();
                this.ngOnInit();
            }
        });
    }

    getLocationType(id: number): string {
        if (this.locationType) {
            let type = this.locationType.find(x => x.id == id);
            if (!type) {
                return '~';
            } else {
                return type.name;
            }
        }
        return '~';
    }

    editObject() {
        this.router.navigate(['object-list/edit/' + this.selection.selected[0].id]);
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

    setLocationOnMap(object: IObject) {
        if (object.longitude && object.latitude) {
            this.lat = object.latitude;
            this.lng = object.longitude;
        } else {
            this.lat = object.location.latitude;
            this.lng = object.location.longitude;
        }
    }

    upload(event) {
        // const id = Math.random().toString(36).substring(2);
        // this.ref = this.afStorage.ref(id);
        // this.task = this.ref.put(event.target.files[0]);
        // this.uploadProgress = this.task.percentageChanges();
        // this.task.snapshotChanges().pipe(
        //     finalize(() => this.downloadURL = this.afStorage.ref(id).getDownloadURL())
        // )
        //     .subscribe();
    }

}
