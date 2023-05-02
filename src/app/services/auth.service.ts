import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  constructor(public afAuth: AngularFireAuth, private router: Router ) { 

    const user$ = this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.router.navigate(['collect-cats'])
        this.loggedIn = true
        return user;
  
  
      } else {
        this.router.navigate(['login'])
        this.loggedIn = false
        return
      }
    });
  
  }

  

  signIn(data: { username: string; password: string }) {

    this.afAuth.signInWithEmailAndPassword(data.username, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  signOut(){
    this.afAuth.signOut()
  }

}
