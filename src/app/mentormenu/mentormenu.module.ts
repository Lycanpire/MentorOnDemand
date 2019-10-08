import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MentormenuComponent } from './Mentormenu.component';

@NgModule({
  declarations: [
    MentormenuComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MentormenuComponent]
})
export class AppModule { }
