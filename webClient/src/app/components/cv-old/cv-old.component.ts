import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ConstantsService} from './../../services/constants.service';
import {HttpModule} from '@angular/http';
import {Location} from '@angular/common';
import {CvMainService} from "../../services/cv.service";
import {CvMain} from "../../model/cvMain";
import {Cv} from "../../model/cv";
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


