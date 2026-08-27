import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

import { AuthService } from '../services/auth.service';

@Component({
  standalone: false,
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})

export class MembersComponent implements OnInit {
  name: any;
  state: string = '';

  constructor(public authService: AuthService) {}

  logout() {
    
    this.authService.signOut();
  }


  ngOnInit() {
  }

}
