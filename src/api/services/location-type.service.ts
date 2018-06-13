import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {ILocationType} from '../model/ILocationType';
import {ILocation} from '../model/ILocation';
import {IServerResponse} from '../model/IServerResponse';
import {tap} from 'rxjs/operators';

@Injectable()
export class LocationTypeService {

    httpOptions = {
        headers: new HttpHeaders({'Authorization': localStorage.getItem('jwtToken')})
    };

    constructor(private http: HttpClient) {
    }

    getLocationTypes(): Observable<ILocationType[]> {
        return this.http.get<ILocationType[]>(environment.apiUrl + 'locationType', this.httpOptions);
    }

    getLocation(id: number): Observable<ILocationType> {
        return this.http.get<ILocationType>(environment.apiUrl + 'locationType/' + id, this.httpOptions);
    }

    createLocationType(location: ILocationType): Observable<IServerResponse> {
        return this.http.post<IServerResponse>(environment.apiUrl + 'locationType', location, this.httpOptions).pipe(
            tap((response: IServerResponse) => this.log(response.message))
        );
    }

    updateLocation(location: ILocationType): Observable<IServerResponse> {
        return this.http.put<IServerResponse>(environment.apiUrl + 'locationType/' + location.id, location, this.httpOptions).pipe(
            tap((response: IServerResponse) => this.log(response.message))
        );
    }

    deleteLocationType(location: ILocationType): Observable<IServerResponse> {
        return this.http.delete<IServerResponse>(environment.apiUrl + 'locationType/' + location.id, this.httpOptions).pipe(
            tap((response: IServerResponse) => this.log(response.message))
        );
    }

    private log(message: string) {
        console.log(message);
        // this.messageService.add('HeroService: ' + message);
    }
}
