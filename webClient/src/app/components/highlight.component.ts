import {Component, OnInit, AfterViewInit, ViewEncapsulation} from '@angular/core';
import {ConstantsService} from './../services/constants.service';
import {Location} from '@angular/common';


@Component({
    selector: 'highlight-example',
    templateUrl:'../html/highlight-example.html',
    providers: [ConstantsService, Location]})

export class HighlightComponent {


    constructor(){}


}

