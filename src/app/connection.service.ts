import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  users;
  spaces;
  themes;
  articles;
  private i: number;

  constructor(private db: AngularFirestore) { }

  createUser(login) {
    return this.db.collection('users').add(login);
  }
  createSpace(Space) {
    return this.db.collection('spaces').add(Space);
  }
  getSpaces() {
    this.db.collection('spaces').snapshotChanges().subscribe(data => {
      this.spaces = data.map( e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          name: e.payload.doc.data()['name'],
        };

      });
      User.Spaces = this.spaces;
      }
    );
  }
  createTheme(theme) {
    return this.db.collection('theme').add(theme);
  }
  getThemes() {
    this.db.collection('theme').snapshotChanges().subscribe(data => {
        this.themes = data.map( e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            name: e.payload.doc.data()['Name'],
            space: e.payload.doc.data()['Space']
          };
        });
        User.themes = this.themes;
        console.log(this.themes);
      }
    );
  }
  loginUser(log, pas) {
    this.db.collection('users').snapshotChanges().subscribe(data => {

      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          username: e.payload.doc.data()['username'],
          password: e.payload.doc.data()['password']
        };
      });
      this.i = 0;
      while ( this.i != this.users.length) {
      if (this.users[this.i].username == log && this.users[this.i].password == pas) {
        User.SuccessLogin = true;
        break;
      } else {
      }
      this.i += 1;
      }

    });
  }

}

