import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

import { AuthService } from '../services/auth.service';

@Component({
  standalone: false,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  state: string = '';
  email = '';
  password = '';
  error: any;

  constructor(private authService: AuthService) {}

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);

      this.authService.register(formData.value.email,formData.value.password);
    }
    

  }

  ngOnInit() {
  }

}
