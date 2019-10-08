import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MentornotificationComponent } from './mentornotification.component';

@NgModule({
  declarations: [
    MentornotificationComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MentornotificationComponent]
})
export class AppModule { }
