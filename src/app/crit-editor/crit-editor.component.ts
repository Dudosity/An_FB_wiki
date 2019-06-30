import {Component, DoCheck, OnInit} from '@angular/core';
import {ConnectionService} from '../connection.service';
import {User} from '../User';

@Component({
  selector: 'app-crit-editor',
  templateUrl: './crit-editor.component.html',
  styleUrls: ['./crit-editor.component.css']
})
export class CritEditorComponent implements OnInit, DoCheck {
  criteries;
  constructor(private db:ConnectionService) { }
  ngDoCheck(): void {
    this.criteries = User.criteries;
  }

  ngOnInit() {
    this.db.getCriteries()
  }
  CreateCrit() {
    this.db.createCrit(this.criteries);
  }
}
