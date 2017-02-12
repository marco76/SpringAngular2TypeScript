import {Directive, ElementRef, AfterViewInit} from "@angular/core";
import * as hljs from "highlight.js"

@Directive({
    selector: 'code[highlight]' // [higlight] -> css selector for the attribute
})
export class HighlightCodeDirective implements  AfterViewInit{
    constructor(private eltRef:ElementRef) { // ElementRef injects into the directive's constructor so the code can access the DOM element.
        console.log('directive constructor');
    }

    ngAfterViewInit() {
        console.log("called directive with");
        console.log(this.eltRef.nativeElement);
        hljs.highlightBlock(this.eltRef.nativeElement);
    }
}