///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
/*
    https://github.com/angular/angular/blob/master/CHANGELOG.md#200-beta6-2016-02-11
 */
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent, DavisComponent} from './app.component'
// Add all operators to Observable
import 'rxjs/Rx';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

bootstrap(AppComponent);