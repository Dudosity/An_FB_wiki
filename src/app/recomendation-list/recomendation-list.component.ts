import {Component, DoCheck, OnInit} from '@angular/core';
import {ConnectionService} from '../connection.service';
import {User} from '../User';

@Component({
  selector: 'app-recomendation-list',
  templateUrl: './recomendation-list.component.html',
  styleUrls: ['./recomendation-list.component.css']
})
export class RecomendationListComponent implements OnInit, DoCheck {

  constructor(private bd: ConnectionService) { }
  articles;
  ngDoCheck(): void {
    this.articles = User.articles;
  }

  ngOnInit() {
    this.bd.getArticles();
  }

  getRecomend() {
    this.bd.getRecommendations();
  }
}
