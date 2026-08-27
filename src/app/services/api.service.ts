import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly usersUrl = `${environment.apiUrl}/users`;
  constructor(private readonly http: HttpClient) {}
  getAllUsers(): Observable<User[]> { return this.http.get<Partial<User>[]>(this.usersUrl).pipe(map(users => users.map(user => new User(user)))); }
  createUser(user: User): Observable<User> { return this.http.post<Partial<User>>(this.usersUrl, user).pipe(map(value => new User(value))); }
  getUserById(userId: number): Observable<User> { return this.http.get<Partial<User>>(`${this.usersUrl}/${userId}`).pipe(map(value => new User(value))); }
  updateUser(user: User): Observable<User> { return this.http.put<Partial<User>>(`${this.usersUrl}/${user.id}`, user).pipe(map(value => new User(value))); }
  deleteUserById(userId: number): Observable<void> { return this.http.delete<void>(`${this.usersUrl}/${userId}`); }
}
