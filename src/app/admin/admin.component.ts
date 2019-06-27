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
    this.firebase.createArticle(this.article);
  }
}
