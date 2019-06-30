import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {User} from '../User';

@Component({
  selector: 'app-object-editor',
  templateUrl: './object-editor.component.html',
  styleUrls: ['./object-editor.component.css']
})
export class ObjectEditorComponent implements OnInit, DoCheck {
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '60vh',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'yes',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };
  articleText: any;

  constructor() { }
  ngDoCheck(): void {
  this.articleText = User.Choosetext;
  }

  ngOnInit() {
  }

}
