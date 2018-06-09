import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocationService} from '../../../../../api/services/location.service';
import {FormGroup} from '@angular/forms';
import {LocationFormService} from '../location-form/location-form.component';
import {IServerResponse} from '../../../../../api/model/IServerResponse';
import {ILocation} from '../../../../../api/model/ILocation';

@Component({
    selector: 'location-edit',
    templateUrl: './location-edit.component.html',
    styleUrls: ['./location-edit.component.scss']
})
export class LocationEditComponent implements OnInit {

    locationForm: FormGroup = new FormGroup({});
    location: ILocation;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private locationService: LocationService,
                private locationFormService: LocationFormService) {
    }

    async ngOnInit() {
        this.locationForm = this.locationFormService.form();
        let location = await this.locationService.getLocation(this.route.snapshot.params['id']).toPromise();
        this.locationForm.setValue(this.locationFormService.dataToForm(location));
        this.location = location
    }

    save() {
        let data = this.locationFormService.patchDataFromForm(this.location, this.locationForm.value);
        this.locationService.updateLocation(data).subscribe((response: IServerResponse) => {
            if (!response.error) {
                this.router.navigate(['/location-list'])
            }
        });
    }


}

