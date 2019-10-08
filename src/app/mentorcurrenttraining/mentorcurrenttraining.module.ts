import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MentorcurrenttrainingComponent } from './MentorCurrenttraining.component';

@NgModule({
  declarations: [
    MentorcurrenttrainingComponent 
  ],
  imports: [
    BrowserModule, NgbModule
  ],
  providers: [],
  bootstrap: [MentorcurrenttrainingComponent]
})
export class AppModule { }
