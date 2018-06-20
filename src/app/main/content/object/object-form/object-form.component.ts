import {Component, Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {FormComponent} from '../../../components/form-component/form-component';
import {FormBuilder, Validators as V} from '@angular/forms';
import {IObject} from '../../../../../api/model/IObject';
import {ILocationType} from '../../../../../api/model/ILocationType';
import {Observable} from 'rxjs/Observable';
import {LocationTypeService} from '../../../../../api/services/location-type.service';
import {ILocation} from '../../../../../api/model/ILocation';
import {LocationService} from '../../../../../api/services/location.service';
import {MouseEvent as AGMMouseEvent} from '@agm/core';
import {Upload} from '../../../../../api/model/Upload';
import {UploadService} from '../../../../../api/services/upload.service';
import * as _ from 'lodash';
import {ObjectImageService} from '../../../../../api/services/object-image.service';
import {IServerResponse} from '../../../../../api/model/IServerResponse';
import {IObjectImage} from '../../../../../api/model/IObjectImage';
import {ObjectVideoService} from '../../../../../api/services/object-video.service';
import {IObjectVideo} from '../../../../../api/model/IObjectVideo';
import {DomSanitizer} from '@angular/platform-browser';
import {IObjectAudio} from '../../../../../api/model/IObjectAudio';
import {ObjectAudioService} from '../../../../../api/services/object-audio.service';

export interface IObjectFormView {
    id: number,
    name: string,
    fk_typeid: number,
    fk_locationid: number,
    coordinateChecked: boolean,
    latitude: number;
    longitude: number;
    information: string;
    newVideo: string;
    newAudioName: string;
}

@Injectable()
export class ObjectFormService {

    constructor(private fb: FormBuilder) {
    }

    public form = () => {
        let fb = this.fb;

        return fb.group({
            id: -1,
            name: ['', [V.required, V.maxLength(100), V.minLength(2)]],
            fk_typeid: [null, [V.required]],
            fk_locationid: null,
            coordinateChecked: false,
            latitude: 0.0,
            longitude: 0.0,
            information: '',
            newVideo: '',
            newAudioName: ''
        });
    };

    public dataToForm = (location: IObject): IObjectFormView => {
        return {
            id: location.id,
            name: location.name,
            information: location.information,
            fk_typeid: location.fk_typeid,
            fk_locationid: location.fk_locationid,
            coordinateChecked: !!(location.latitude && location.longitude),
            latitude: location.latitude,
            longitude: location.longitude,
            newVideo: '',
            newAudioName: ''
        };
    };

    public patchDataFromForm = (location: IObject, data: IObjectFormView): IObject => {
        return {
            ...location,
            name: data.name,
            information: data.information,
            fk_typeid: data.fk_typeid,
            fk_locationid: data.fk_locationid,
            latitude: data.coordinateChecked ? data.latitude : null,
            longitude: data.coordinateChecked ? data.longitude : null
        };
    };

}

@Component({
    selector: 'object-form',
    templateUrl: './object-form.component.html',
    styleUrls: ['./object-form.component.scss']
})
export class ObjectFormComponent extends FormComponent implements OnInit {
    @Input() isEditMode: boolean = false;
    @Input() object: IObject;
    locationTypes: Observable<ILocationType[]>;
    locations: Observable<ILocation[]>;
    options: any = {
        spellChecker: false,
    };

    selectedImageFiles: FileList;
    currentImageUpload: Upload;

    selectedAudioFiles: FileList;
    currentAudioUpload: Upload;

    constructor(private locationTypeService: LocationTypeService,
                private locationService: LocationService,
                private uploadService: UploadService,
                private objectImageService: ObjectImageService,
                private objectVideoService: ObjectVideoService,
                private objectAudioService: ObjectAudioService,
                private sanitizer: DomSanitizer) {
        super();

    }

    ngOnInit() {
        this.locationTypes = this.locationTypeService.getLocationTypes();
        this.locations = this.locationService.getLocations();
    }

    public mapClicked($event: AGMMouseEvent) {
        this.form.value.latitude = $event.coords.lat;
        this.form.value.longitude = $event.coords.lng;
    }

    detectImageFiles(event) {
        this.selectedImageFiles = event.target.files;
    }

    detectAudioFiles(event) {
        this.selectedAudioFiles = event.target.files;
    }

    uploadSingle() {
        let file = this.selectedImageFiles.item(0);
        this.currentImageUpload = new Upload(file);
        this.uploadService.uploadImage(this.currentAudioUpload, this.object);
    }

    uploadMultiImage() {
        let files = this.selectedImageFiles;
        let filesIndex = _.range(files.length);
        _.each(filesIndex, (idx) => {
                this.currentImageUpload = new Upload(files[idx]);
                this.uploadService.uploadImage(this.currentImageUpload, this.object);
            }
        );
    }

    uploadAudio() {
        let file = this.selectedAudioFiles.item(0);
        let audio: IObjectAudio = {
            id: 0,
            name: this.form.value.newAudioName,
            url: '',
            fk_objectid: this.object.id
        };
        this.currentAudioUpload = new Upload(file);
        this.uploadService.uploadAudio(this.currentAudioUpload, this.object, audio);
        this.form.value.newAudioName = ''
    }

    deleteImage(objectImage: IObjectImage, index: number) {
        this.objectImageService.deleteObjectImage(objectImage).subscribe((response: IServerResponse) => {
            if (!response.error) {
                if (this.object.objectImages) {
                    this.object.objectImages.splice(index, 1);
                }
            }
        });
    }

    deleteAudio(objectAudio: IObjectAudio, index: number) {
        this.objectAudioService.deleteObjectAudio(objectAudio).subscribe((response: IServerResponse) => {
            if (!response.error) {
                if (this.object.objectAudios) {
                    this.object.objectAudios.splice(index, 1);
                }
            }
        });
    }

    addVideo(url: string) {
        let video: IObjectVideo = {
            id: 0,
            url: url,
            fk_objectid: this.object.id
        };
        this.objectVideoService.createVideoImage(video).subscribe((response: IServerResponse) => {
            if (!response.error) {
                this.object.objectVideos.push(response.object);
            }
        });
    }

    deleteVideo(objectVideo: IObjectVideo, index: number) {
        this.objectVideoService.deleteVideoImage(objectVideo).subscribe((response: IServerResponse) => {
            if (!response.error) {
                if (this.object.objectVideos) {
                    this.object.objectVideos.splice(index, 1);
                }
            }
        });
    }

    getSafeUrl(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

}
