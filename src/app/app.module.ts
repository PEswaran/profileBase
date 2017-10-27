import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

//component import
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { VisitorFeedComponent } from './components/visitor-feed/visitor-feed.component';
import { ProjectFeedComponent } from './components/project-feed/project-feed.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

//services import
import { TechNewsService } from './services/tech-news.service';
import { VisitorLogService } from './services/visitor-log.service';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NewsFeedComponent,
    VisitorFeedComponent,
    ProjectFeedComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AlertModule.forRoot()

  ],
  providers: [TechNewsService, VisitorLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
