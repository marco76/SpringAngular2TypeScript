// component decorator imported from @angular/core
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

// Router Module: The router module allows the routing of the pages in our application
// we need it to jump from the welcome page to another page
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './components/app.component';
import {DavisComponent} from './components/davis.component';
import {HelloWorld} from './components/hello-world.component';
import {BlogComponent} from './components/blog.component';
import {MenuComponent} from './components/menu.component';
import {D3Component} from './components/d3/d3.component';
import {ImageComponent} from './components/image.component';
import {MonitoringComponent} from './monitoring/monitoring.component';

import './../css/main.css';
import {HighlightCodeDirective} from './directives/highlight.directive';
import {HighlightComponent} from "./components/highlight/highlight.component";
import {CvMain} from "./model/cvMain";
import {CvMainComponent} from "./components/cv/cv.component";
import {CvExperience} from "./components/cv/cv-experience.component";
import {CvOldComponent} from "./components/cv-old/cv-old.component";
import {FormsModule} from "@angular/forms";


const routes: Routes = [
    { path: '', component: BlogComponent},
    { path: 'app-hello-world', component: HelloWorld},
    { path: 'app-davis', component:DavisComponent},
    { path: 'app-d3-example', component:D3Component},
    { path: 'app-simple-image', component: ImageComponent},
    { path: 'app-highlight-example', component: HighlightComponent},
    { path: 'app-cv', component: CvMainComponent},
    { path: 'app-cv-old', component: CvOldComponent},
    { path: 'app-spring-monitoring', component: MonitoringComponent}

];

@NgModule({
  imports:      [BrowserModule, HttpModule, RouterModule.forRoot(routes), FormsModule ],
  declarations: [AppComponent, DavisComponent, HelloWorld, BlogComponent, MenuComponent, HighlightCodeDirective,
      D3Component, ImageComponent, HighlightComponent, CvMainComponent, CvExperience, CvOldComponent, MonitoringComponent
],
  bootstrap:    [AppComponent],
  providers:    []
})

export class AppModule { }
