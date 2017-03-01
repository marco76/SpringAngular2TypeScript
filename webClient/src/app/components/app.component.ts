import {Component} from '@angular/core';
import {HttpModule} from '@angular/http';
import {Location} from '@angular/common';

import {ConstantsService} from './../services/constants.service';


/**
 * router-outlet : placeholder for the 'template' of the target page
 * https://angular.io/docs/ts/latest/api/router/index/RouterOutlet-directive.html
 */
@Component({
    selector: 'my-app',
    template: `
        <bootstrap-menu></bootstrap-menu>
        <div class="container">
            <router-outlet class="col-md-12"></router-outlet>
        </div>
    `,
        providers: [HttpModule, ConstantsService, Location]
    })

export class AppComponent {

}

