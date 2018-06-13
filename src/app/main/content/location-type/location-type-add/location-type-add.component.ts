import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ILocationType} from '../../../../../api/model/ILocationType';
import {Router} from '@angular/router';
import {LocationTypeFormService} from '../location-type-form/location-type-form.component';
import {LocationTypeService} from '../../../../../api/services/location-type.service';
import {IServerResponse} from '../../../../../api/model/IServerResponse';

@Component({
    selector: 'location-type-add',
    templateUrl: './location-type-add.component.html',
    styleUrls: ['./location-type-add.component.scss']
})
export class LocationTypeAddComponent implements OnInit {

    locationTypeForm: FormGroup = new FormGroup({});
    locationType: ILocationType = {
        id: 0,
        name: ''
    };

    constructor(private locationTypeFormService: LocationTypeFormService,
                private router: Router,
                private locationTypeService: LocationTypeService) {
    }

    ngOnInit() {
        this.locationTypeForm = this.locationTypeFormService.form();
        this.locationTypeForm.setValue(this.locationTypeFormService.dataToForm(this.locationType));
    }

    save() {
        let data = this.locationTypeFormService.patchDataFromForm(this.locationType, this.locationTypeForm.value);
        this.locationTypeService.createLocationType(data).subscribe((response: IServerResponse) => {
            if (!response.error) {
                this.router.navigate(['/location-type-list'])
            }
        });
    }

}
