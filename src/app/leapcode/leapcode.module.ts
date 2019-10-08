import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { LeapcodeComponent } from './Leapcode.component';


@NgModule({
  declarations: [
  
    LeapcodeComponent,
   
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [],
  bootstrap: [LeapcodeComponent]
})
export class AppModule { }
