import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { SignupmentorComponent } from './signupmentor.component';

@NgModule({
  declarations: [
    SignupmentorComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SignupmentorComponent]
})
export class AppModule { }
