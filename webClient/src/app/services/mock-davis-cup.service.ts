import {Injectable} from '@angular/core';
import {DAVIS_CUPS} from './mock-davis-cups';

@Injectable()
export class MockDavisCupService {

    getDavisCups() {
        return Promise.resolve(DAVIS_CUPS);
    }
}