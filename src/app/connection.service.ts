import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private db: AngularFirestore) { }

  createUser(login) {
    return this.db.collection('users').add(login);
  }
  loginUser() {

  }
}
