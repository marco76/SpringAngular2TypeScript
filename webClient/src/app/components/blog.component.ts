import {Component, OnInit} from '@angular/core';
import {ConstantsService} from './../services/constants.service';
import {HttpModule} from '@angular/http';
import {Location} from '@angular/common';
import {BlogService} from "../services/blog.service";
import {BlogArticle} from "../model/blogArticle";

@Component({
    selector: 'rest-get-example',
    template: `
       <ul>
          <span *ngFor="let article of blogArticles">
          <div class="panel panel-default">
          <div class="panel-heading">
              {{article.id}} : {{article.title}}
              </div>
           <div class="panel-body">
             {{article.content}}
              </div>
              </div>
         </span>
      </ul>
      <br>
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


