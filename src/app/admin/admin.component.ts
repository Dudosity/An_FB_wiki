import {Component, DoCheck, OnInit} from '@angular/core';
import {ConnectionService} from '../connection.service';
import {User} from '../User';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, DoCheck {
  selectedItem: any;
  spaces;
  themes;
  space;
  theme;
  article;
  recomendation;
  constructor(private firebase: ConnectionService) { }
  ngDoCheck(): void {
  this.spaces = User.spaces;
  this.themes = User.themes;
  }

  ngOnInit() {
    this.space = {
      name: '',
      description: ''
    };
    this.theme = {
      name: '',
      description: '',
      space: ''
    };
    this.article = {
      name: '',
      description: '',
      text: '',
      theme: ''
    };
    this.recomendation = {
      article: '',
      score: '',
      user: ''
    };
  this.firebase.getSpaces();
  this.firebase.getThemes();
  }

  getSpaces() {

  }

  addSpace() {
    this.firebase.createSpace(this.space);
  }

  addTheme() {
    this.firebase.createTheme(this.theme);
  }

  addArticle() {
    this.recomendation.article = this.article.name;
    this.recomendation.score = Math.floor((Math.random() * 10) + 1);
    this.firebase.createArticle(this.article, this.recomendation);
  }
}
