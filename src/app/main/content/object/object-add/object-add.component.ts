import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ILocationType} from '../../../../../api/model/ILocationType';
import {IObject} from '../../../../../api/model/IObject';
import {LocationTypeService} from '../../../../../api/services/location-type.service';
import {LocationTypeFormService} from '../../location-type/location-type-form/location-type-form.component';
import {Router} from '@angular/router';
import {ObjectFormService} from '../object-form/object-form.component';
import {ObjectService} from '../../../../../api/services/object.service';
import {IServerResponse} from '../../../../../api/model/IServerResponse';

@Component({
    selector: 'object-add',
    templateUrl: './object-add.component.html',
    styleUrls: ['./object-add.component.scss']
})
export class ObjectAddComponent implements OnInit {

    objectForm: FormGroup = new FormGroup({});
    object: IObject = {
        id: 0,
        name: '',
        fk_typeid: 0,
        objectImages: null
    };

    constructor(private objectFormService: ObjectFormService,
                private router: Router,
                private objectService: ObjectService) {
    }

    ngOnInit() {
        this.objectForm = this.objectFormService.form();
        this.objectForm.setValue(this.objectFormService.dataToForm(this.object));
    }

    save() {
        let data = this.objectFormService.patchDataFromForm(this.object, this.objectForm.value);
        this.objectService.createObjects(data).subscribe((response: IServerResponse) => {
            if (!response.error) {
                this.router.navigate(['/object-list'])
            }
        });
    }

}
