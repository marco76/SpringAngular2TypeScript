// Component is a decorator imported from @angular/core
import {Component} from "@angular/core";

// use of the decorator to register the component
@Component({
    selector : 'bootstrap-menu', // <- separated by comma, not semicolomn like in Java
    templateUrl :'../html/menu.html'
}
)
// name of the component, exported to be reusable
export class MenuComponent {

    // optional
    constructor(){

    }

}
