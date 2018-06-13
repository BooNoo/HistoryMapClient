import {Component, Injectable, OnInit} from '@angular/core';
import {FormComponent} from '../../../components/form-component/form-component';
import {FormBuilder, Validators as V} from '@angular/forms';
import {ILocationType} from '../../../../../api/model/ILocationType';

export interface ILocationTypeFormView {
    id: number,
    name: string,
}

@Injectable()
export class LocationTypeFormService {

    constructor(private fb: FormBuilder) {
    }

    public form = () => {
        let fb = this.fb;

        return fb.group({
            id: -1,
            name: ['', [V.required, V.maxLength(100), V.minLength(2)]],
        });
    };

    public dataToForm = (location: ILocationType): ILocationTypeFormView => {
        return {
            id: location.id,
            name: location.name
        };
    };

    public patchDataFromForm = (location: ILocationType, data: ILocationTypeFormView): ILocationType => {
        return {
            ...location,
            name: data.name
        };
    };

}

@Component({
  selector: 'location-type-form',
  templateUrl: './location-type-form.component.html',
  styleUrls: ['./location-type-form.component.scss']
})
export class LocationTypeFormComponent extends FormComponent{

  constructor() {
      super()
  }

}
