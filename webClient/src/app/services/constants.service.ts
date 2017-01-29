import {Injectable} from '@angular/core';

@Injectable()
export class ConstantsService {

    BACKEND_URL: string;
    readonly BACKEND_PORT_DEV: string = '8082';

    constructor() {

        console.log("process.env set to : " + process.env.ENV);

        // in DEV the frontend uses node.js, the backend uses a different port
        if (process.env.ENV === 'production') {
            this.BACKEND_URL = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
        } else {
            this.BACKEND_URL = window.location.protocol + '//' + window.location.hostname + ':' + this.BACKEND_PORT_DEV;
        }

        console.log("Server url set to: " + this.BACKEND_URL);
    }
}