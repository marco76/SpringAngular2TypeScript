import {Component, OnInit} from '@angular/core';
import {ConstantsService} from './../services/constants.service';
import {HttpModule} from '@angular/http';
import {Location} from '@angular/common';

// services
import {MonitoringService} from './shared/monitoring.service';


@Component({
    selector: 'rest-spring-result',
    template: `
        
        <div class="row">
            <div class="col-md-7">
                <div class='row'>
                    <h1>Spring Boot monitoring</h1>
                </div>
                <select class="row" id="endpoint" required [(ngModel)]="selectedEndpoint" name="selectedEndpoint">
                <option *ngFor="let endpoint of endpointList" [value]="endpoint">{{endpoint}}</option>
                </select>
                <div class="row">
                    <button type='button' class='btn btn-default'
                        (click)="getMonitoringResult()">Show</button>
                </div>
                <div class="row">
                    <textarea name='resultJSON' rows="20" cols = "100" readonly="true">{{resultJSON | json}}</textarea>
                </div>
            </div>
        </div>
    `,
        providers: [HttpModule, MonitoringService, ConstantsService, Location]
    })


export class MonitoringComponent implements OnInit{

    errorMessage: string;
    resultJSON: any;
    selectedEndpoint: string;
    endpointList: string[] = [ 'autoconfig', 'beans', 'configprops', 'env', 'health'
    , 'metrics', 'mappings', 'trace'];

    constructor(private monitoringService : MonitoringService){
        this.monitoringService = monitoringService;
    }

    getMonitoringResult(){
        this.monitoringService.getSpringMonitoringJSON(this.selectedEndpoint).subscribe(
            result => {console.log(result); this.resultJSON = result},
            error =>  this.errorMessage = <any>error);
    }

    ngOnInit(){

    }

} // export -> create a module


