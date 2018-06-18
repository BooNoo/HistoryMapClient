import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IObject} from '../../../../../api/model/IObject';
import {TdTextEditorComponent} from '@covalent/text-editor';

@Component({
    selector: 'object-view',
    templateUrl: './object-view.component.html',
    styleUrls: ['./object-view.component.scss']
})
export class ObjectViewComponent implements OnInit {

    @Input() object: IObject;
    @ViewChild('textEditor') private _textEditor: TdTextEditorComponent;
    options: any = {
        lineWrapping: true,
        toolbar: false,
    };

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit(): void {
        // this._textEditor.togglePreview();
    }

}
