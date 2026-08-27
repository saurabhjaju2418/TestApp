import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animations';

import { AuthService } from '../services/auth.service';

@Component({
  standalone: false,
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})

export class EmailComponent implements OnInit {

  state: string = '';
  email = '';
  password = '';
    error: any;
    
  constructor(private authService: AuthService) {}


  onSubmit(formData) {
    if(formData.valid) {
      this.authService.signIn(formData.value.email,formData.value.password);
    }
  }

  ngOnInit() {
  }

}
