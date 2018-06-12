import {Component, OnInit} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import {Observable} from 'rxjs/Observable';
import {finalize} from 'rxjs/operators';

@Component({
    selector: 'map-objects-list',
    templateUrl: './map-objects-list.component.html',
    styleUrls: ['./map-objects-list.component.scss']
})
export class MapObjectsListComponent implements OnInit {
    ref: AngularFireStorageReference;
    task: AngularFireUploadTask;
    uploadProgress: Observable<number>;
    downloadURL: Observable<string>;


    constructor(private afStorage: AngularFireStorage) {
    }

    ngOnInit() {
    }

    upload(event) {


        const file = event.target.files[0];
        const filePath = 'test';
        const fileRef = this.afStorage.ref(filePath);
        const task = this.afStorage.upload(filePath, file);

        this.uploadProgress = task.percentageChanges();
        // get notified when the download URL is available
        // this.downloadURL = fileRef.getDownloadURL()
        // fileRef.getDownloadURL().subscribe(ref => {
        //     console.log('REF', ref);
        //     // this.downloadURL = ref
        // })

        task.snapshotChanges().pipe(
            finalize(() => this.downloadURL = this.afStorage.ref(filePath).getDownloadURL())
        )
            .subscribe();

        console.log(this.downloadURL);

        // this.downloadURL = fileRef.getDownloadURL();

        // const id = Math.random().toString(36).substring(2);
        // this.ref = this.afStorage.ref(id);
        // this.task = this.ref.put(event.target.files[0]);

        // this.ref.getDownloadURL().subscribe(ref => {
        //     console.log('REF', ref);
        //     this.downloadURL = ref
        // });

        // this.downloadURL = this.ref.getDownloadURL();


        // task.snapshotChanges().pipe(
        //     finalize(() => this.downloadURL = fileRef.getDownloadURL() )
        // )
        //     .subscribe()

        // this.downloadURL = this.task.getDownloadURL();
    }

}
