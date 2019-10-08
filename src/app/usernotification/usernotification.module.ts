import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { UsernotificationComponent } from './usernotification.component';

@NgModule({
  declarations: [
    UsernotificationComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [UsernotificationComponent]
})
export class AppModule { }
