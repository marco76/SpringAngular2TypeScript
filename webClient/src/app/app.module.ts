// component decorator imported from @angular/core
 import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Router Module: The router module allows the routing of the pages in our application
// we need it to jump from the welcome page to another page
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './components/app.component'
import {SampleComponent} from "./components/sample.component";
import {DavisComponent} from "./components/davis.component";

const routes: Routes = [
    { path: '', component: DavisComponent},
    { path: 'sample', component: SampleComponent }
];

@NgModule({
  imports:      [NgbModule.forRoot(), BrowserModule,HttpModule, RouterModule.forRoot(routes) ],
  declarations: [AppComponent, SampleComponent, DavisComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
