import { Component, OnInit } from '@angular/core';
import { NewsArticle } from '../../models/news-article';
import { TechNewsService } from '../../services/tech-news.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
  providers: [TechNewsService]
})
export class NewsFeedComponent implements OnInit {
  errorMessage: string;
  articles: NewsArticle[];
  isCollapsed:boolean;

  constructor(private newsService: TechNewsService) {
  this.isCollapsed = false;
}
changeShowStatus(){
   this.isCollapsed = !this.isCollapsed;
 }
    // Fetching the records in the onInit lifecycle method makes the application easier to debug
    ngOnInit() { this.getArticles(); }

    // The subscribes to the getPosts stream from the PostService
  getArticles() {
        this.newsService.getArticles()
            .subscribe(
                articles => this.articles = articles,
                error => this.errorMessage = error
            )

    }
}
