
import { Component, OnInit, HostBinding } from '@angular/core';
import {  AngularFireAuth } from 'angularfire2/auth';

// import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;
  
    constructor(public af: AngularFireAuth,private router: Router, private authService: AuthService) {

      // this.af.authState.subscribe(auth => { 
      //   if(auth) {
      //     this.router.navigateByUrl('/userlist');
      //   }
      // });
  }

  loginFb() {
    this.authService.signInUsingFb();
  }

  loginGoogle() {
    this.authService.signInUsingGoogle();
  }

  ngOnInit() {

  }
}
