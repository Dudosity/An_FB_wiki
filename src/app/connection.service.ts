import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  users;
  private i: number;

  constructor(private db: AngularFirestore) { }

  createUser(login) {
    return this.db.collection('users').add(login);
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
      console.log(this.users);
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

