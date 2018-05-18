import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';


const httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
};

let apiUrl = environment.apiUrl;

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
        console.log(apiUrl)
    }

    // Uses http.get() to load data from a single API endpoint
    getFoods() {
        return this.http.get(apiUrl + "/users");
    }
}
