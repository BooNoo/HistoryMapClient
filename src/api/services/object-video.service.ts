import {tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {IObjectImage} from '../model/IObjectImage';
import {environment} from '../../environments/environment';
import {IServerResponse} from '../model/IServerResponse';

@Injectable()
export class ObjectVideoService {
    httpOptions = {
        headers: new HttpHeaders({'Authorization': localStorage.getItem('jwtToken')})
    };

    constructor(private http: HttpClient) {
    }

    createVideoImage(objectImage: IObjectImage): Observable<IServerResponse> {
        return this.http.post<IServerResponse>(environment.apiUrl + 'object-video', objectImage, this.httpOptions).pipe(
            tap((response: IServerResponse) => this.log(response.message))
        );
    }

    deleteVideoImage(objectImage: IObjectImage): Observable<IServerResponse> {
        return this.http.delete<IServerResponse>(environment.apiUrl + 'object-video/' + objectImage.id, this.httpOptions).pipe(
            tap((response: IServerResponse) => this.log(response.message))
        );
    }

    private log(message: string) {
        console.log(message);
    }
}
