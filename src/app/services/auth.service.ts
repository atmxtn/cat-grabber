import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;
  errorMessage = '';
  uid: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    const user$ = this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.router.navigate(['collect-cats']);
        this.loggedIn = true;
        this.uid = user.uid
        return user;
      } else {
        this.router.navigate(['login']);
        this.loggedIn = false;
        return;
      }
    });
  }

  signIn(data: { username: string; password: string }) {
    this.afAuth
      .signInWithEmailAndPassword(data.username, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }

  signOut() {
    this.afAuth.signOut();
  }

  registerUser(data: { email: string; password: string }) {
    this.afAuth
      .createUserWithEmailAndPassword(data.email, data.password)
      .catch( (error) => {
        this.errorMessage = error.message;
      });
  }
}
