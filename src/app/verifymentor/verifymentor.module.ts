import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { VerifymentorComponent } from './verifymentor.component';

@NgModule({
  declarations: [
   VerifymentorComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [VerifymentorComponent]
})
export class VerifymentorModule { }
