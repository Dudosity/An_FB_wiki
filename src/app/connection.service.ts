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
  recommen
  private i: number;
  article;

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
      User.spaces = this.spaces;
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
            name: e.payload.doc.data()['name'],
            theme: e.payload.doc.data()['space']
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
      User.id = this.users.id;
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
  createArticle(article) {
    return this.db.collection('article').add(article);
  }
  getArticles() {
    this.db.collection('article').snapshotChanges().subscribe(data => {
        this.article = data.map( e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            name: e.payload.doc.data()['name'],
            theme: e.payload.doc.data()['theme']
          };
        });
        User.articles = this.article;
        console.log(User.articles)
      }
    );
  }
  getRecommendations() {

  }
}

