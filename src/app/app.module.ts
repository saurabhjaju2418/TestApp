import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule  } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';   

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AngularFireAuthModule } from 'angularfire2/auth';

import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { AuthGuard } from './auth.guard';
import { routes } from './app.routes';
import { AuthService } from './services/auth.service';


import { UserService } from './services/user.service';
import { InputTextModule, DataTableModule, ButtonModule, DialogModule, CalendarModule} from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { GrowlModule } from 'primeng/growl';
import {DropdownModule} from 'primeng/dropdown';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';



export const firebaseConfig = {
  apiKey: "AIzaSyDH0GMpPGggxGkjDdGiyBFqtrZpv8r1I-0",
    authDomain: "angular4primeng.firebaseapp.com",
    databaseURL: "https://angular4primeng.firebaseio.com",
    // projectId: "angular4primeng",
    storageBucket: "",
    messagingSenderId: "1027761631774"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    UserListComponent,
    AddUserComponent,
    UserDetailComponent,
    EditUserComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    routes,
    InputTextModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    TableModule,
    GrowlModule,
    CalendarModule,
    DropdownModule
  ],
  providers: [AuthGuard, AuthService, UserService],
  bootstrap: [AppComponent],
  schemas: [  ]
})
export class AppModule { }
