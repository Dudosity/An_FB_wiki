import { Component, OnInit } from '@angular/core';
import {ConnectionService} from '../connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login;
  constructor(private firebase: ConnectionService) { }

  ngOnInit() {
    this.login = {
      username: '',
      password: '',
      remember: '',
      name: ''
    };

  }

  LoginUser() {
    console.log(this.firebase.loginUser(this.login.username, this.login.password));
  }
}
