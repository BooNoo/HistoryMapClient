import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, Validators as V} from '@angular/forms';
import {ILocation} from '../../../../../api/model/ILocation';
import {FormComponent} from '../../../components/form-component/form-component';
import {MouseEvent as AGMMouseEvent} from '@agm/core';

export interface ILocationFormView {
    id: number,
    name: string,
    code: string;
    latitude: number;
    longitude: number;
}

@Injectable()
export class LocationFormService {

    constructor(private fb: FormBuilder) {
    }

    public form = () => {
        let fb = this.fb;

        return fb.group({
            id: -1,
            name: ['', [V.required, V.maxLength(100), V.minLength(2)]],
            code: ['', [V.required, V.maxLength(10), V.minLength(2)]],
            latitude: [0.0, [V.required]],
            longitude: [0.0, [V.required]],
        });
    };

    public dataToForm = (location: ILocation): ILocationFormView => {
        return {
            id: location.id,
            name: location.name,
            code: location.code,
            latitude: location.latitude,
            longitude: location.longitude,
        };
    };

    public patchDataFromForm = (location: ILocation, data: ILocationFormView): ILocation => {
        return {
            ...location,
            name: data.name,
            code: data.code,
            latitude: data.latitude,
            longitude: data.longitude,
        };
    };

}

@Component({
    selector: 'location-form',
    templateUrl: './location-form.component.html',
    styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent extends FormComponent {

    mapZoom = 10;

    constructor() {
        super();
    }

    public mapClicked($event: AGMMouseEvent) {
        this.form.value.latitude = $event.coords.lat;
        this.form.value.longitude = $event.coords.lng;
    }

}
