import {Component, DoCheck, NgModule, OnInit} from '@angular/core';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeModule, MatTreeNestedDataSource} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatIconRegistry} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {ConnectionService} from '../connection.service';
import {User} from '../User';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.css']
})
@NgModule({


  imports: [MatExpansionModule,
    MatTreeModule,
    MatIconModule
  ],

})
export class ObjectListComponent implements OnInit, DoCheck {
  space;
  theme;
  article;
  spaces;
  themes;
  articles;
  clickId;
  constructor(private firebase: ConnectionService) {}
  ngOnInit(): void {
    this.space = {
      Name: '',
      Description: ''
    };
    this.theme = {
      Name: 'Требования к ведению отчетности',
      Description: '',
      Space: 'XHqYBG9g2WvPL64sifgf'
    };
    this.article = {
      Name: '',
      Description: '',
      Text: '',
      Theme: ''
    };
    this.firebase.getSpaces();
    this.clickId = 0;
  }
  ngDoCheck(): void {
    this.spaces = User.Spaces;
    this.themes = User.themes;
  }

  createSpace() {
    this.firebase.createSpace(this.space);
  }

  getThemes(id) {
    if (this.clickId != id) {
      this.clickId = id;
      this.firebase.getThemes();
    }
  }

  createTheme() {
    this.firebase.createTheme(this.theme);
  }
}
