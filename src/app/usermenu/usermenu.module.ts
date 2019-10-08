import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { UsermenuComponent } from './usermenu.component';

@NgModule({
  declarations: [
    UsermenuComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [UsermenuComponent]
})
export class AppModule { }
