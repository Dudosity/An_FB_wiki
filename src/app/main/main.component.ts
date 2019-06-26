import { Component, OnInit } from '@angular/core';
import {User} from '../User';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  succession;

  constructor() { }

  ngOnInit(): void {
    this.succession = User.SuccessLogin;
  }
}
