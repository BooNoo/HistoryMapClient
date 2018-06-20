import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {IServerResponse} from '../model/IServerResponse';
import {IObjectImage} from '../model/IObjectImage';
import {ILocation} from '../model/ILocation';

@Injectable()
export class ObjectImageService {
    httpOptions = {
        headers: new HttpHeaders({'Authorization': localStorage.getItem('jwtToken')})
    };

    constructor(private http: HttpClient) {
    }

    createObjectImage(objectImage: IObjectImage): Observable<IServerResponse> {
        return this.http.post<IServerResponse>(environment.apiUrl + 'object-image', objectImage, this.httpOptions).pipe(
            tap((response: IServerResponse) => this.log(response.message))
        );
    }

    deleteObjectImage(objectImage: IObjectImage): Observable<IServerResponse> {
        return this.http.delete<IServerResponse>(environment.apiUrl + 'object-image/' + objectImage.id, this.httpOptions).pipe(
            tap((response: IServerResponse) => this.log(response.message))
        );
    }

    private log(message: string) {
        console.log(message);
    }
}
