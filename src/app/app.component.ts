import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {DataService} from './data.service';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public foods;

    constructor(private _demoService: DataService) {
    }

    ngOnInit() {
        // this.getFoods();
    }

    // getFoods() {
    //     this._demoService.getFoods().subscribe(
    //         data => {
    //             this.foods = data;
    //         },
    //         err => console.error(err),
    //         () => console.log('done loading foods')
    //     );
    // }

}
