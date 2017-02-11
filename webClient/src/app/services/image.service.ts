import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {ConstantsService} from './constants.service';
import {JsonString} from "../model/JsonString";

@Injectable()
export class ImageService {

    constructor (private http: Http, private ConstantsService: ConstantsService) {}

    private serviceUrl =  this.ConstantsService.BACKEND_URL + '/image/angular';  // URL to web api

    getImage() : Observable<JsonString> {
        return this.http.get(this.serviceUrl)
            .map((response : Response) => {
                console.log('called the service at this URL:' + this.serviceUrl);
                console.log(JSON.stringify(response.json()));

                return response.json();
        })
    }
}