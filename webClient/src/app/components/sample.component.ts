// Component is a decorator imported from @angular/core
import {Component} from "@angular/core"
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


// use of the decorator to register the component
@Component({
    // html element <hello> </hello>
    selector : 'hello', // <- separated by comma, not semicolomn like in Java
    template : // the template can be inline or refer to an external file
        //multiline html template, we can use the defined variables {{ variable_name }}
        ` <div class="hello"> 
                {{ welcomeMessage }}
          </div>
          <br>
          <a [routerLink]="['/']"> Back to the results</a>
          <div id="collapseExample" [ngbCollapse]="false">
  <div class="card">
    <div class="card-block">
      You can collapse this card by clicking Toggle
    </div>
  </div>
</div>
        `})
// name of the component, exported to be reusable
export class SampleComponent {

    // 1. declaration and initialization
    welcomeMessage : string = "Welcome to Angular";

    // 2. declaration
    technologies : string;


    // optional
    constructor(){

        // 2. initialization
        this.technologies = "Java, Typescript";

    }

}
