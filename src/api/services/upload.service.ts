import {Injectable} from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';
import {Upload} from '../model/Upload';
import {finalize} from 'rxjs/operators';
import {IObject} from '../model/IObject';
import {ObjectImageService} from './object-image.service';
import {IServerResponse} from '../model/IServerResponse';
import {IObjectImage} from '../model/IObjectImage';
import {ObjectAudioService} from './object-audio.service';
import {IObjectAudio} from '../model/IObjectAudio';

@Injectable()
export class UploadService {

    constructor(private afStorage: AngularFireStorage,
                private objectImageService: ObjectImageService,
                private objectAudioService: ObjectAudioService) {
    }

    uploadImage(upload: Upload, object: IObject) {
        const id = Math.random().toString(36).substring(2);
        let task = this.afStorage.ref('object-images/' + id).put(upload.file);
        upload.progress = task.percentageChanges();
        task.snapshotChanges().pipe(
            finalize(() => {
                this.afStorage.ref('object-images/' + id).getDownloadURL().subscribe(url => {
                    let objectImage: IObjectImage = {
                        id: 0,
                        url: url,
                        fk_objectid: object.id
                    };
                    this.objectImageService.createObjectImage(objectImage).subscribe((response: IServerResponse) => {
                        if (!response.error) {
                            object.objectImages.push(objectImage);
                        }
                    });
                });
            })
        ).subscribe();
    }

    uploadAudio(upload: Upload, object: IObject, objectAudio: IObjectAudio) {
        const id = Math.random().toString(36).substring(2);
        let task = this.afStorage.ref('object-audio/' + id).put(upload.file);
        upload.progress = task.percentageChanges();
        task.snapshotChanges().pipe(
            finalize(() => {
                this.afStorage.ref('object-audio/' + id).getDownloadURL().subscribe(url => {
                    objectAudio.url = url;
                    this.objectAudioService.createObjectAudio(objectAudio).subscribe((response: IServerResponse) => {
                        if (!response.error) {
                            object.objectAudios.push(objectAudio);
                        }
                    });
                });
            })
        ).subscribe();
    }


}
