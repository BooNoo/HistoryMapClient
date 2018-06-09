import {Injectable} from '@angular/core';
import {ILocation} from '../model/ILocation';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {IServerResponse} from '../model/IServerResponse';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class LocationService {

    httpOptions = {
        headers: new HttpHeaders({'Authorization': localStorage.getItem('jwtToken')})
    };

    constructor(private http: HttpClient) {
    }

    getLocations(): Observable<ILocation[]> {
        return this.http.get<ILocation[]>(environment.apiUrl + 'location', this.httpOptions);
    }

    getLocation(id: number): Observable<ILocation> {
        return this.http.get<ILocation>(environment.apiUrl + 'location/' + id, this.httpOptions);
    }

    createLocation(location: ILocation): Observable<IServerResponse> {
        return this.http.post<IServerResponse>(environment.apiUrl + 'location', location, this.httpOptions).pipe(
            tap((response: IServerResponse) => this.log(response.message))
        );
    }

    updateLocation(location: ILocation): Observable<IServerResponse> {
        return this.http.put<IServerResponse>(environment.apiUrl + 'location/' + location.id, location, this.httpOptions).pipe(
            tap((response: IServerResponse) => this.log(response.message))
        );
    }

    deleteLocation(location: ILocation): Observable<IServerResponse> {
        return this.http.delete<IServerResponse>(environment.apiUrl + 'location/' + location.id, this.httpOptions).pipe(
            tap((response: IServerResponse) => this.log(response.message))
        );
    }


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        console.log(message);
        // this.messageService.add('HeroService: ' + message);
    }

}
