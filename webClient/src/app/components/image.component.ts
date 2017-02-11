import {Component, OnInit} from '@angular/core';
import {ConstantsService} from './../services/constants.service';
import {HttpModule} from '@angular/http';
import {Location} from '@angular/common';

import {ImageService} from "../services/image.service";
import {__platform_browser_private__, DomSanitizer} from '@angular/platform-browser';
import {JsonString} from "../model/JsonString";

@Component({
    selector: 'simple-image',
    template: `
<div class="row">
<div class="col-md-10">
    
     In this example we load an image from a protected ressource on the server. <br>
     The image is not accessible directly from the web.
     </div>
  </div>
     <img [src]='image'>     
    `,
    providers: [HttpModule, ImageService, ConstantsService, Location, __platform_browser_private__.BROWSER_SANITIZATION_PROVIDERS]
    })


export class ImageComponent implements OnInit{

    private sanitizer: DomSanitizer;
    private image : any;
    private readonly imageType : string = 'data:image/PNG;base64,';

    constructor(private imageService : ImageService, sanitizer : DomSanitizer){
        this.imageService = imageService;
        this.sanitizer = sanitizer;
    }

    getImage(){

       this.imageService.getImage()
           .subscribe((data :JsonString ) => {
               console.log("sanitizing the url");
               this.image = this.sanitizer.bypassSecurityTrustUrl(this.imageType + data.content);
           }
       )
    }

    ngOnInit(){
        this.getImage();
    }
}


