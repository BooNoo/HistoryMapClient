import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IObject} from '../model/IObject';
import {IServerResponse} from '../model/IServerResponse';
import {tap} from 'rxjs/operators';
import {ILocationType} from '../model/ILocationType';

@Injectable()
export class ObjectService {

    httpOptions = {
        headers: new HttpHeaders({'Authorization': localStorage.getItem('jwtToken')})
    };

    constructor(private http: HttpClient) {
    }

    getObjects(): Observable<IObject[]> {
        return this.http.get<IObject[]>(environment.apiUrl + 'object', this.httpOptions);
    }

    getObject(id: number): Observable<IObject> {
        return this.http.get<IObject>(environment.apiUrl + 'object/' + id, this.httpOptions);
    }

    createObjects(location: IObject): Observable<IServerResponse> {
        return this.http.post<IServerResponse>(environment.apiUrl + 'object', location, this.httpOptions).pipe(
            tap((response: IServerResponse) => this.log(response.message))
        );
    }

    updateObject(location: IObject): Observable<IServerResponse> {
        return this.http.put<IServerResponse>(environment.apiUrl + 'object/' + location.id, location, this.httpOptions).pipe(
            tap((response: IServerResponse) => this.log(response.message))
        );
    }

    deleteObject(location: IObject): Observable<IServerResponse> {
        return this.http.delete<IServerResponse>(environment.apiUrl + 'object/' + location.id, this.httpOptions).pipe(
            tap((response: IServerResponse) => this.log(response.message))
        );
    }

    private log(message: string) {
        console.log(message);
        // this.messageService.add('HeroService: ' + message);
    }
}
