import {Component, Input} from '@angular/core';


@Component({
    selector: 'cv-experience',
    templateUrl:'cv-experience.html',
    styles:[require('./../cv.component.css').toString()]
})


export class CvExperience {
    @Input()
    cvExperience: CvExperience;


} // export -> create a module


