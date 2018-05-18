import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  genders = ['M', 'F'];
  id: any;
  formdata;

  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }
  
  
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
  
  
    this.getUserById();
  }

  getUserById() {
    this.id = localStorage.getItem("EditUserId");
    
    this.userService.getUserById(this.id).subscribe(
      data => {
        
        this.user = data
      }
      
    );
    localStorage.removeItem("EditUserId");
  }

  onClickSubmit(data) {
    this.user = new User(data);
     alert(JSON.stringify(this.user));
        this.userService.updateUser(this.user).subscribe(
          data => console.log(JSON.stringify(data))
        );
     
     
      this.router.navigate(['/userlist']);

     
    }

  
  logout() {
    
    this.authService.signOut();
  }


}
