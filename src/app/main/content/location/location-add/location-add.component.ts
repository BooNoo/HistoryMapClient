import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ILocation} from '../../../../../api/model/ILocation';
import {LocationFormService} from '../location-form/location-form.component';
import {LocationService} from '../../../../../api/services/location.service';
import {IServerResponse} from '../../../../../api/model/IServerResponse';
import {Router} from '@angular/router';

@Component({
    selector: 'app-location-add',
    templateUrl: './location-add.component.html',
    styleUrls: ['./location-add.component.scss']
})
export class LocationAddComponent implements OnInit {

    locationForm: FormGroup = new FormGroup({});
    location: ILocation = {
        id: 0,
        name: '',
        code: '',
        latitude: 43.115068,
        longitude: 131.906059
    };

    constructor(private locationFormService: LocationFormService,
                private router: Router,
                private locationService: LocationService) {
    }

    ngOnInit() {
        this.locationForm = this.locationFormService.form();
        this.locationForm.setValue(this.locationFormService.dataToForm(this.location));
    }

    save() {
        let data = this.locationFormService.patchDataFromForm(this.location, this.locationForm.value);
        this.locationService.createLocation(data).subscribe((response: IServerResponse) => {
            if (!response.error) {
                this.router.navigate(['/location-list'])
            }
        });
    }
}
