import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';


export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path: 'userlist', component: UserListComponent, canActivate: [AuthGuard] },
    { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard] },
    { path: 'edit-user', component: EditUserComponent, canActivate: [AuthGuard] },
    { path: 'user-detail', component: UserDetailComponent, canActivate: [AuthGuard] },
    
    


]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
