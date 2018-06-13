import {Component, OnInit} from '@angular/core';
import {LocationTypeService} from '../../../../../api/services/location-type.service';
import {LocationTypeFormService} from '../location-type-form/location-type-form.component';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {ILocationType} from '../../../../../api/model/ILocationType';
import {IServerResponse} from '../../../../../api/model/IServerResponse';

@Component({
    selector: 'location-type-edit',
    templateUrl: './location-type-edit.component.html',
    styleUrls: ['./location-type-edit.component.scss']
})
export class LocationTypeEditComponent implements OnInit {

    locationTypeForm: FormGroup = new FormGroup({});
    locationType: ILocationType;

    constructor(private locationTypeFormService: LocationTypeFormService,
                private route: ActivatedRoute,
                private router: Router,
                private locationTypeService: LocationTypeService) {
    }

    async ngOnInit() {
        this.locationTypeForm = this.locationTypeFormService.form();
        let locationType = await this.locationTypeService.getLocation(this.route.snapshot.params['id']).toPromise();
        this.locationTypeForm.setValue(this.locationTypeFormService.dataToForm(locationType));
        this.locationType = locationType;
    }

    save() {
        let data = this.locationTypeFormService.patchDataFromForm(this.locationType, this.locationTypeForm.value);
        this.locationTypeService.updateLocation(data).subscribe((response: IServerResponse) => {
            if (!response.error) {
                this.router.navigate(['/location-type-list'])
            }
        });
    }

}
