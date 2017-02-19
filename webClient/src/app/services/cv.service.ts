import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {ConstantsService} from './constants.service';
import {CvMain} from "../model/cvMain";

@Injectable()
export class CvMainService {
   
     constructor (private http: Http, private ConstantsService: ConstantsService) {}

    private cvURL =  this.ConstantsService.BACKEND_URL + '/rest/cv/marco';  // URL to web api
    private cvURLOld =  this.ConstantsService.BACKEND_URL + '/rest/cv/old-cv';  // URL to web api

    getCv(): Observable<CvMain> {
        return this.http.get(this.cvURL)
                .map(res => <CvMain> res.json());
    }

    getOldCv(): Observable<CvMain> {
        return this.http.get(this.cvURLOld)
            .map(res => <CvMain> res.json());
    }
}