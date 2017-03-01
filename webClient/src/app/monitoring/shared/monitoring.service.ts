import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {ConstantsService} from '../../services/constants.service';

@Injectable()
export class MonitoringService {

    private _springEndpointPath =  this.constantsService.BACKEND_URL + '/';

    constructor (private http: Http, private constantsService: ConstantsService) {}

    getSpringMonitoringJSON(springEndpointName : string) {
        return this.http.get(this._springEndpointPath + springEndpointName)
            .map(res => res.json())
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}