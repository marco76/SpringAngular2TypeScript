import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {DavisCup} from './../model/davisCup';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DavisCupService {

    constructor (private http: Http) {}

    private _davisUrl = 'http://localhost:8080/result_list';  // URL to web api
    getDavisCups() {
        return this.http.get(this._davisUrl)
            .map(res => <DavisCup[]> res.json())
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}