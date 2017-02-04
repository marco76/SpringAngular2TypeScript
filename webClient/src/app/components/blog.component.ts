import {Component, OnInit} from '@angular/core';
import {DavisCupService} from './../services/davis-cup.service';
import {DavisCup} from '../model/davisCup';
import {ConstantsService} from './../services/constants.service';
import {HttpModule} from '@angular/http';
import {Location} from '@angular/common';
import {BlogService} from "../services/blog.service";
import {BlogArticle} from "../model/blogArticle";

/**
 * routerLink replaces ng-link. Use it to navigate between pages.
 */

@Component({
    selector: 'rest-get-example',
    template: `
       <ul>
          <li *ngFor="let article of blogArticles">
              {{article.id}} : {{article.title}}
         </li>
      </ul>
      <br>
      <a [routerLink]="['/hello-world']"> A classic hello world!</a>
    `,
        providers: [HttpModule, BlogService, ConstantsService, Location]
    })


export class BlogComponent implements OnInit{

    constructor(private _blogService : BlogService){}

    errorMessage: string;
    blogArticles : BlogArticle[];
    public title = 'Davis Cup Final Results';

    getArticleList(){

       /* this._davisService.getDavisCups().then(davis => this.davisCups = davis)*/
        this._blogService.getArticleList().subscribe(
            articleList => this.blogArticles = articleList,
            error =>  this.errorMessage = <any>error);
    }

    ngOnInit(){
        this.getArticleList();
    }

} // export -> create a module


