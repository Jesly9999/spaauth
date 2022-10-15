import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';

import {HttpClientModule} from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

const appRoute:Routes=
[
  {
    path:'',
    // redirectTo:'Login',
    component:SigninComponent
  },
  {
    path:'Login',
    component:SigninComponent
  },
  {
    path:'Signup',
    component:RegisterComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
