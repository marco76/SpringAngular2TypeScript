import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ConstantsService} from '../shared/constants.service';
import {HttpModule} from '@angular/http';
import {Location} from '@angular/common';
import {CvMainService} from "./shared/cv.service";
import {CvMain} from "./shared/cv-main.model";
import {Cv} from "./shared/cv.model";
@Component({
    selector: 'rest-get-cv',
    template: `
    <div class="cv-html cv-body">
      <div class="row">
            <div class="col-md-3">
      <div class="w3-container">

  <div class="w3-card-4" style="width:100%">
    <header class="w3-container w3-light-grey">
       <img src="assets/marco.jpg" alt="Avatar" class="w3-left w3-circle w3-margin-right w3-margin-top" style="width:60px">
     <h3>{{cv.name}}</h3>
      {{cv.currentTitle}}
    </header>
    <div class="w3-container">
      <hr>
      <ul>
          <li> Java, Expert Group JSR</li>
          <li> Team Leader (7 peole)</li>
          <li> Banking Experience</li>
          <li> JavaScript and Angular enthusiast</li>
       </ul>
    </div>
    <button class="w3-btn-block w3-dark-grey">+ Connect</button>
  </div>
</div>
</div>
      <div class="col-md-9">
      
          <div *ngFor="let cvExperience of cv.experience">
              <cv-experience [cvExperience] = "cvExperience"></cv-experience>
          </div>
      </div>
      

      </div>
 </div>     
      
    `,
    styles: [require('./w3.css').toString()],
    providers: [HttpModule, CvMainService, ConstantsService, Location]
    })


export class CvMainComponent implements OnInit, AfterViewInit{

     cv : Cv = new Cv();

    constructor(private cvService : CvMainService){

        /* this._davisService.getDavisCups().then(davis => this.davisCups = davis)*/
        cvService.getCv()
            .subscribe((data: CvMain) => {
                 this.cv.fillWithJson(data);
            });}


    ngOnInit(){

    }

    ngAfterViewInit() {

    }

} // export -> create a module


