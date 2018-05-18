import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';



import { firebase } from '@firebase/app';

import { AngularFireAuth } from 'angularfire2/auth'

@Injectable()
export class AuthService {


  isAuthenticated: boolean = false;
  error: any;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    
  }

  signIn(email: string, password: string) {
    return this.firebaseAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
            console.log('Signed In Using Email and Password');
            this.isAuthenticated = true;
            this.router.navigateByUrl('/userlist');
        })
        .catch(err => {
            // alert(JSON.stringify(err));
            this.error = err.message;
            console.log('Sign-In Error: ', err.message);
            alert('Sign-In Error: '+ err.message);
        });
  }

  signOut() {
    this.firebaseAuth
        .auth
        .signOut();
    this.isAuthenticated = false;
    this.router.navigateByUrl('/login');
    console.log('Signed Out');
  }

  register(email: string, password: string) {
    this.firebaseAuth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
            console.log('Registration Successful', value);
            this.router.navigate(['/login']);
        })
        .catch(err => {
            // alert(JSON.stringify(err));
            this.error = err.message;
            console.log('Registration Error: ', err.message);
            alert('Registration Error: '+ err.message);
        });    
  }

  signInUsingFb(){
    return this.firebaseAuth
        .auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider)
        .then(value => {
            console.log('Signed In Using Fb');
            this.isAuthenticated = true;
            this.router.navigateByUrl('/userlist');
        })
        .catch(err => {
            // alert('Sign-In Error: '+ err.message);
            this.error = err.message;
            console.log('Sign-In Error: ', err.message);
            alert('Sign-In Error: '+ err.message);
        });
  }

  signInUsingGoogle(){
    return this.firebaseAuth
        .auth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider)
        .then(value => {
            console.log('Signed In Using Google');
            this.isAuthenticated = true;
            this.router.navigateByUrl('/userlist');
        })
        .catch(err => {
            this.error = err.message;
            console.log('Sign-In Error: ', err.message);
            alert('Sign-In Error: '+ err.message);
        });
  }

}
