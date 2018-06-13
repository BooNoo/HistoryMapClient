import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {IServerResponse} from '../../../../../api/model/IServerResponse';
import {LocationTypeService} from '../../../../../api/services/location-type.service';
import {LocationTypeFormService} from '../../location-type/location-type-form/location-type-form.component';
import {ILocationType} from '../../../../../api/model/ILocationType';
import {ActivatedRoute, Router} from '@angular/router';
import {IObject} from '../../../../../api/model/IObject';
import {ObjectService} from '../../../../../api/services/object.service';
import {ObjectFormService} from '../object-form/object-form.component';

@Component({
    selector: 'object-edit',
    templateUrl: './object-edit.component.html',
    styleUrls: ['./object-edit.component.scss']
})
export class ObjectEditComponent implements OnInit {

    objectForm: FormGroup = new FormGroup({});
    object: IObject;

    constructor(private route: ActivatedRoute,
                private objectFormService: ObjectFormService,
                private router: Router,
                private objectService: ObjectService) {
    }

    async ngOnInit() {
        this.objectForm = this.objectFormService.form();
        let object = await this.objectService.getObject(this.route.snapshot.params['id']).toPromise();
        this.objectForm.setValue(this.objectFormService.dataToForm(object));
        this.object = object;
    }

    save() {
        let data = this.objectFormService.patchDataFromForm(this.object, this.objectForm.value);

        console.log(data);
        this.objectService.updateObject(data).subscribe((response: IServerResponse) => {
            if (!response.error) {
                this.router.navigate(['/object-list']);
            }
        });
    }

}
