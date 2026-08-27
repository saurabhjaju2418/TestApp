
import { Component } from '@angular/core';
import { moveIn } from '../router.animations';

import { AuthService } from '../services/auth.service';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent {

  error: any;
  state = '';
  
  constructor(private authService: AuthService) {}

  loginFb() {
    this.authService.signInUsingFb();
  }

  loginGoogle() {
    this.authService.signInUsingGoogle();
  }

}
