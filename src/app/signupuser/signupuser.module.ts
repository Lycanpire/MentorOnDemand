import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { SignupuserComponent } from './signupuser.component';

@NgModule({
  declarations: [
    SignupuserComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SignupuserComponent]
})
export class AppModule { }
