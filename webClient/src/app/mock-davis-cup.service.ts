import {Injectable} from 'angular2/core';
import {DAVIS_CUPS} from './mock-davis-cups';

@Injectable()
export class MockDavisCupService {

    getDavisCups() {
        return Promise.resolve(DAVIS_CUPS);
    }
}