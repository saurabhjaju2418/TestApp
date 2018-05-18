import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User;
  genders = ['M', 'F'];
  id: any;
  formdata;

 
  

  constructor(private userService: UserService, private router: Router, private authService: AuthService) {
    
   }

  
   
   ngOnInit() {
      this.formdata = new FormGroup({
         email: new FormControl("", Validators.compose([
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
         ])),
         name: new FormControl(""),
         address: new FormControl(""),
         gender: new FormControl(""),
         birthdate: new FormControl(""),

      });
     
     
      
   }
   
   onClickSubmit(data) {
    this.user = new User(data);
     
        this.userService.addUser(this.user).subscribe(
          data => console.log(JSON.stringify(data))
        );
     
        
      this.router.navigate(['/userlist']);

     
    }

    
    logout() {
    
      this.authService.signOut();
    }
    
}
