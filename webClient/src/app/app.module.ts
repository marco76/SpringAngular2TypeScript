// component decorator imported from @angular/core
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

// Router Module: The router module allows the routing of the pages in our application
// we need it to jump from the welcome page to another page
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './components/app.component';
import {DavisComponent} from "./components/davis.component";
import {HelloWorld} from "./components/hello-world.component"
import {BlogComponent} from "./components/blog.component";
import {MenuComponent} from "./components/menu.component";

import "./../css/main.css";
import {HighlightCodeDirective} from "./directives/highlight.directive";
import {D3Component} from "./components/d3.component";

const routes: Routes = [
    { path: '', component: BlogComponent},
    { path: 'hello-world', component: HelloWorld},
    { path: 'davis', component:DavisComponent},
    { path: 'd3-example', component:D3Component}
];

@NgModule({
  imports:      [BrowserModule, HttpModule, RouterModule.forRoot(routes) ],
  declarations: [AppComponent, DavisComponent, HelloWorld, BlogComponent, MenuComponent, HighlightCodeDirective,
      D3Component
],
  bootstrap:    [AppComponent],
  providers:    []
})

export class AppModule { }
