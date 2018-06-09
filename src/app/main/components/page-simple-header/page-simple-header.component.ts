import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'page-simple-header',
    templateUrl: './page-simple-header.component.html',
    styleUrls: ['./page-simple-header.component.scss']
})
export class PageSimpleHeaderComponent implements OnInit {
    @Input() description: string;
    @Input() icon: string;
    @Input() link: string[];

    constructor() {
    }

    ngOnInit() {
    }

}
