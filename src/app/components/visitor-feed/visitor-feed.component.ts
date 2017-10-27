import { Component, OnInit } from '@angular/core';
import { VisitorLogService } from '../../services/visitor-log.service';

@Component({
  selector: 'app-visitor-feed',
  templateUrl: './visitor-feed.component.html',
  styleUrls: ['./visitor-feed.component.css']
})
export class VisitorFeedComponent implements OnInit {
users: Array<any>;
// Create an instance of the DataService through dependency injection
constructor(private _dataService: VisitorLogService) {
// Access the Data Service's getUsers() method we defined
this._dataService.getUsers()
    .subscribe(res => this.users = res);
}
  ngOnInit() {
  }
}
