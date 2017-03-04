import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ConstantsService} from '../../shared/constants.service';
import {HttpModule} from '@angular/http';
import {Location} from '@angular/common';
import {CvMainService} from "../shared/cv.service";
import {CvMain} from "../shared/cv-main.model";
import {Cv} from "../shared/cv.model";
@Component({
    selector: 'rest-get-cv-old',
    templateUrl: 'cv-old.html',
    styles: [require('./resume.css').toString(), './reset-font-grid.css'],
    providers: [HttpModule, CvMainService, ConstantsService, Location]
    })


export class CvOldComponent implements OnInit, AfterViewInit{

     profile : Cv = new Cv();

    constructor(private cvService : CvMainService){

        /* this._davisService.getDavisCups().then(davis => this.davisCups = davis)*/
        cvService.getOldCv()
            .subscribe((data: CvMain) => {
                 this.profile.fillWithJson(data);
            });}


    ngOnInit(){

    }

    ngAfterViewInit() {

    }

} // export -> create a module


