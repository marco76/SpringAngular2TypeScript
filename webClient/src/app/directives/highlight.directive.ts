import {Directive, ElementRef, AfterViewInit} from "@angular/core";
import * as hljs from "highlight.js"

@Directive({
    selector: 'code[highlight]'
})
export class HighlightCodeDirective implements  AfterViewInit{
    constructor(private eltRef:ElementRef) {
        console.log('directive constructor');
    }

    ngAfterViewInit() {
        console.log("called directive with");
        console.log(this.eltRef.nativeElement);
        hljs.highlightBlock(this.eltRef.nativeElement);
    }
}