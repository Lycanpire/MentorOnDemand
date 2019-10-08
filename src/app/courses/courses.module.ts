import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    CoursesComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CoursesComponent]
})
export class AppModule { }
