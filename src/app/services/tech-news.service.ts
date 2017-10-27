import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from  '@angular/http';

// All the RxJS stuff we need
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { NewsArticle } from '../models/news-article';

@Injectable()
export class TechNewsService {

  // Url to API
    private newsUrl = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=5b45d1fab7ea4f38a7a60bc21b5798bd';

    // Injecting the http client into the service
    constructor(private http: Http) {}

    // Method retrieve all the posts
    getArticles (): Observable<NewsArticle[]> {
        return this.http.get(this.newsUrl)
            .map(this.parseData)
            .catch(this.handleError);
    }

    // This method parses the data to JSON
    private parseData(res: Response)  {
    	 let body = <NewsArticle[]>res.json().articles;
    	 //console.log(body || {});
        return body || {};
    }



    // Displays the error message
    private handleError(error: Response | any) {
        let errorMessage: string;

        errorMessage = error.message ? error.message : error.toString();

        // In real world application, call to log error to remote server
        // logError(error);

        // This returns another Observable for the observer to subscribe to
        return Observable.throw(errorMessage);
    }


}
