import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Window } from 'selenium-webdriver';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[];
  
  genders: any[];

  cols: any[];

  user: User;

  selectedUser: User;

  name: any;

  constructor(public af: AngularFireAuth, private userService: UserService, private router: Router, private authService: AuthService) {
    this.af.authState.subscribe(auth => {
      if(auth) {
        
        this.name = auth;
      }
    });
   }

  ngOnInit() {
    this.getAllUsers();
    this.genders = [];
    this.genders.push({label: 'All', value: null});
    this.genders.push({label: 'M', value: 'M'});
    this.genders.push({label: 'F', value: 'F'});
    
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'address', header: 'Address' },
      { field: 'birthdate', header: 'Birthdate' },
      { field: 'gender', header: 'Gender' }
  ];
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      users =>{
        this.userList = users;
      }
    );
  }

  addUser(){
    this.router.navigate(['/add-user']);
  }

  onRowSelect(event) {
    localStorage.setItem("UserId",event.data.id);
    this.router.navigate(['/user-detail']);
  }
  
  logout() {
    this.authService.signOut();
  }

  editUser(user: User) {
    localStorage.setItem("EditUserId",user.id.toString());
    this.router.navigate(['/edit-user']);
  }

  deleteUser(user: User) {
    this.userService.deleteUserById(user.id).subscribe(
      success => console.log(JSON.stringify(success))
    );
    this.getAllUsers();
  
    // localStorage.setItem("DeleteUserId",user.id.toString());
    // this.router.navigate(['/edit-user']);
  }

}
