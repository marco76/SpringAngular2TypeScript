import {Component, OnInit} from 'angular2/core';
import {DavisCupService} from './davis-cup.service.ts';
import {DavisCup} from 'davisCup';
import {HTTP_PROVIDERS}    from 'angular2/http';


@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
      <h2>Spring + AngularJS 2 + TypeScript</h2>
        <ul>
                <li *ngFor="#davis of davisCups">
                   {{davis.year}} : {{davis.winner}} defeated  {{davis.runnerUp}} {{davis.score}}
                </li>
        </ul>
     `
,
        providers:  [HTTP_PROVIDERS, DavisCupService]}
)


export class AppComponent implements OnInit{

    constructor(private _davisService : DavisCupService){}

    errorMessage: string;
    davisCups : DavisCup[];
    public title = 'Davis Cup Final Results';

    getDavisCups(){

       /* this._davisService.getDavisCups().then(davis => this.davisCups = davis)*/
        this._davisService.getDavisCups().subscribe(
            davis => this.davisCups = davis,
            error =>  this.errorMessage = <any>error);
    }

    ngOnInit(){
        this.getDavisCups();
    }


} // export -> create a module


