import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {FormComponent} from '../../../components/form-component/form-component';
import {FormBuilder, Validators as V} from '@angular/forms';
import {IObject} from '../../../../../api/model/IObject';
import {ILocationType} from '../../../../../api/model/ILocationType';
import {Observable} from 'rxjs/Observable';
import {LocationTypeService} from '../../../../../api/services/location-type.service';
import {ILocation} from '../../../../../api/model/ILocation';
import {LocationService} from '../../../../../api/services/location.service';
import {MouseEvent as AGMMouseEvent} from '@agm/core';
import {TdTextEditorComponent} from '@covalent/text-editor';

export interface IObjectFormView {
    id: number,
    name: string,
    fk_typeid: number,
    fk_locationid: number,
    coordinateChecked: boolean,
    latitude: number;
    longitude: number;
    information: string;
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
            longitude: location.longitude
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
    locationTypes: Observable<ILocationType[]>;
    locations: Observable<ILocation[]>;
    options: any = {
        spellChecker: false,
    };

    constructor(private locationTypeService: LocationTypeService,
                private  locationService: LocationService) {
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

}
