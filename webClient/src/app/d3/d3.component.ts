import {Component, OnInit, AfterViewInit, ViewEncapsulation} from '@angular/core';
import {ConstantsService} from '../shared/constants.service';
import * as d3 from "d3";
import * as d3scale from "d3-scale";
import {Location} from '@angular/common';


@Component({
    selector: 'd3-example',
    templateUrl:'./d3.html',
    providers: [ConstantsService, Location],
    styles:[`.chart div {
    font: 10px sans-serif;
    background-color: steelblue;
    text-align: right;
    padding: 3px;
    margin: 1px;
    color: white;
    }`],
    encapsulation: ViewEncapsulation
        .None
    })

export class D3Component implements OnInit, AfterViewInit{

    constructor(){}

    ngOnInit(){
    }

    ngAfterViewInit() {
        var data = [10, 20 ,30 ,15, 4, 26, 33];
           d3.select(".chart")
            .selectAll("div")
            .data(data)
            .enter().append("div")
            .style("width", function(d) { return d*10 + "px"; })
            .text(function(d) { return d; });
    }
}

