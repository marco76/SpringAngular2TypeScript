import {Injectable} from 'angular2/core';
import {DAVIS_CUPS} from './mock-davis-cups';
import {DavisCup} from 'davisCup';


@Injectable()
export class MockDavisCupService {

    getDavisCups() {
        return Promise.resolve(DAVIS_CUPS);
    }
}