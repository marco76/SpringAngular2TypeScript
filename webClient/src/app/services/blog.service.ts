import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {ConstantsService} from './constants.service';
import {BlogArticle} from "../model/blogArticle";

@Injectable()
export class BlogService {
   
     constructor (private http: Http, private ConstantsService: ConstantsService) {}

    private _blogArticleURL =  this.ConstantsService.BACKEND_URL + '//blog/list';  // URL to web api
    getArticleList() {
        return this.http.get(this._blogArticleURL)
            .map(res => <BlogArticle[]> res.json())
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}