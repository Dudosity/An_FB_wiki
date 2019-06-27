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
  this.spaces = User.Spaces;
  this.themes = User.themes;
  }

  ngOnInit() {
    this.space = {
      Name: '',
      Description: ''
    };
    this.theme = {
      Name: '',
      Description: '',
      Space: ''
    };
    this.article = {
      Name: '',
      Description: '',
      Text: '',
      Theme: ''
    };
  this.firebase.getSpaces();
  this.firebase.getThemes();
  }

  getSpaces() {

  }
}
