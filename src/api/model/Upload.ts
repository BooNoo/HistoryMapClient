import {Observable} from 'rxjs/Observable';

export class Upload {
    $key: string;
    file: File;
    name: string;
    url: Observable<string>;
    progress: Observable<number>;
    createdAt: Date = new Date();

    constructor(file: File) {
        this.file = file
    }
}
