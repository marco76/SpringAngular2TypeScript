import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise'; // needed to transform the Observable in Promise

import {ConstantsService} from '../shared/constants.service';
import {JsonString} from '../shared/JsonString';

// asynchronous observable
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// we store the service ressource in a constant
const HELLO_WORLD_API : string = '/rest/hello-world';

@Injectable()
export class HelloWorldService {
   
    constructor (private http: Http, private ConstantsService: ConstantsService) {}

    // this url is declared in the HelloWorldController.java
    private _helloUrl =  this.ConstantsService.BACKEND_URL + HELLO_WORLD_API;

    // return an observable and not a Promise
    getHelloWorldFromJava() : Observable<JsonString> {
        console.log('calling : ' + this._helloUrl);
        return this.http
            .get(this._helloUrl) // return RxJS Observable
            .map((response: Response) => {

                console.log("REST response: " + response);
                console.log("REST response json: " + JSON.stringify(response.json()));

                return response.json();
            })
        }

}