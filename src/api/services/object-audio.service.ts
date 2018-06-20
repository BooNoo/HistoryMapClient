import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {IServerResponse} from '../model/IServerResponse';
import {IObjectAudio} from '../model/IObjectAudio';

@Injectable()
export class ObjectAudioService {
    httpOptions = {
        headers: new HttpHeaders({'Authorization': localStorage.getItem('jwtToken')})
    };

    constructor(private http: HttpClient) {
    }

    createObjectAudio(objectAudio: IObjectAudio ): Observable<IServerResponse> {
        return this.http.post<IServerResponse>(environment.apiUrl + 'object-audio', objectAudio, this.httpOptions).pipe(
            tap((response: IServerResponse) => this.log(response.message))
        );
    }

    deleteObjectAudio(objectAudio: IObjectAudio): Observable<IServerResponse> {
        return this.http.delete<IServerResponse>(environment.apiUrl + 'object-audio/' + objectAudio.id, this.httpOptions).pipe(
            tap((response: IServerResponse) => this.log(response.message))
        );
    }

    private log(message: string) {
        console.log(message);
    }
}
