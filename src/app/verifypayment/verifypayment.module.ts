import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { VerifypaymentComponent } from './verifypayment.component';

@NgModule({
  declarations: [
   VerifypaymentComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [VerifypaymentComponent]
})
export class AppModule { }
