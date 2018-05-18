import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  id: any;
  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.getUserById();
  }

  getUserById() {
    this.id = localStorage.getItem("UserId");
    
    this.userService.getUserById(this.id).subscribe(
      data => {
        
        this.user = data
      }
      
    );
    localStorage.removeItem("UserId");
  }

  
  logout() {
    
    this.authService.signOut();
  }

}
