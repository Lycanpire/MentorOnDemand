import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {CompletedtrainingComponent } from './completedtraining.component';

@NgModule({
  declarations: [
    CompletedtrainingComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CompletedtrainingComponent]
})
export class AppModule { }
