import {Component, Injectable, OnInit} from '@angular/core';
import {FormComponent} from '../../../components/form-component/form-component';
import {FormBuilder, Validators as V} from '@angular/forms';
import {IObject} from '../../../../../api/model/IObject';
import {ILocationType} from '../../../../../api/model/ILocationType';
import {Observable} from 'rxjs/Observable';
import {LocationTypeService} from '../../../../../api/services/location-type.service';

export interface IObjectFormView {
    id: number,
    name: string,
    fk_typeid: number,
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
            fk_typeid: [null, [V.required]]
        });
    };

    public dataToForm = (location: IObject): IObjectFormView => {
        return {
            id: location.id,
            name: location.name,
            fk_typeid: location.fk_typeid,
        };
    };

    public patchDataFromForm = (location: IObject, data: IObjectFormView): IObject => {
        return {
            ...location,
            name: data.name,
            fk_typeid: data.fk_typeid,
        };
    };

}

@Component({
    selector: 'object-form',
    templateUrl: './object-form.component.html',
    styleUrls: ['./object-form.component.scss']
})
export class ObjectFormComponent extends FormComponent implements OnInit {
    locationType: Observable<ILocationType[]>;

    constructor(private locationTypeService: LocationTypeService,) {
        super();

    }

    ngOnInit() {
       this.locationType = this.locationTypeService.getLocationTypes();
    }

}
