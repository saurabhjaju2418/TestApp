import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth,private router: Router, private authService: AuthService) {

  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);

      this.authService.register(formData.value.email,formData.value.password);
    }
    

  }

  ngOnInit() {
  }

}
