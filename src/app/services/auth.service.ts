import { User } from './../interface/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>

  constructor(private afAuth:AngularFireAuth , private http: HttpClient) { 
    this.user = afAuth.user
  }


  signup(email,password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password)
  }

  login(email,password){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password)
  }

  logout(){
    return this.afAuth.auth.signOut()
  }

  getApi(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }
}
