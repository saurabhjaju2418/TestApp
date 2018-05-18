import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})

export class MembersComponent implements OnInit {
  name: any;
  state: string = '';

  constructor(public af: AngularFireAuth, private router: Router, private authService: AuthService) {

    this.af.authState.subscribe(auth => {
      if(auth) {
        
        this.name = auth;
      }
    });

  }

  logout() {
    
    this.authService.signOut();
  }


  ngOnInit() {
  }

}