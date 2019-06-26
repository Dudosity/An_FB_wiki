import {Component, OnInit} from '@angular/core';
import {User} from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  succession;
  ngOnInit(): void {
    this.succession = User.SuccessLogin;
  }
}
