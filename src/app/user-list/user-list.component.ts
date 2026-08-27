import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({ selector: 'app-user-list', standalone: false, templateUrl: './user-list.component.html', styleUrls: ['./user-list.component.css'] })
export class UserListComponent implements OnInit {
  userList: User[] = [];
  filter = '';
  constructor(private readonly userService: UserService, private readonly router: Router, public readonly authService: AuthService) {}
  ngOnInit(): void { this.getAllUsers(); }
  get filteredUsers(): User[] { const query = this.filter.trim().toLowerCase(); return query ? this.userList.filter(user => Object.values(user).some(value => String(value).toLowerCase().includes(query))) : this.userList; }
  getAllUsers(): void { this.userService.getAllUsers().subscribe(users => this.userList = users); }
  addUser(): void { void this.router.navigate(['/add-user']); }
  viewUser(user: User): void { localStorage.setItem('UserId', user.id.toString()); void this.router.navigate(['/user-detail']); }
  editUser(user: User): void { localStorage.setItem('EditUserId', user.id.toString()); void this.router.navigate(['/edit-user']); }
  deleteUser(user: User): void { this.userService.deleteUserById(user.id).subscribe(() => this.getAllUsers()); }
  logout(): void { void this.authService.signOut(); }
}
