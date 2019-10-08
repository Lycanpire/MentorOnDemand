import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { VerifyuserComponent } from './verifyuser.component';

@NgModule({
  declarations: [
   VerifyuserComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [VerifyuserComponent]
})
export class VerifyuserModule { }
