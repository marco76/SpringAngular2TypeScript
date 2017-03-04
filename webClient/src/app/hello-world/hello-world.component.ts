// Component is a decorator imported from @angular/core
import {Component} from "@angular/core"
import {HelloWorldService} from "./hello-world.service"
import {JsonString} from "../shared/JsonString"

// use of the decorator to register the component
@Component({
        // html element <hello-java> </hello-java>
        selector: 'hello-java', // <- separated by comma, not semicolomn like in Java
        template: // the template can be inline or refer to an external file
        //multiline html template, we can use the defined variables {{ variable_name }}
            ` 
            <div class = "container">
            <div class="row">
            The next sentence comes directly from Java via a REST Service
            </div>
            
            <div class = "row" style="margin-top: 3em">
            <div class="hello-java"> 
            <blockquote>  {{ helloWorldJava }} </blockquote>
              </div>
          </div> 
               </div>
         `
        ,
        providers: [HelloWorldService] // the HelloWorldService has to be declared as provider
    }
)

// name of the component, exported to be reusable
export class HelloWorld {

    // string to publish on the screen
    helloWorldJava : string;

    constructor(helloWorldService : HelloWorldService){

        // subscribe to the service response, we are using Observable
        helloWorldService.getHelloWorldFromJava()
            .subscribe((data : JsonString) => {
                // we receive a json object, we have to extract the string
                this.helloWorldJava = data.content;
            });

    }
}
