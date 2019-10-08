import { Component} from '@angular/core';
import { CurrentTrainingMentorM } from './mentorcurrenttraining.model';
import { mentorcurrenttrainingService } from './mentorcurrenttraining.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mentorcurrenttraining',
  templateUrl: './mentorcurrenttraining.component.html',
  styleUrls: ['./mentorcurrenttraining.component.css']
})
export class MentorcurrenttrainingComponent   {

  mentorcurrenttraining:CurrentTrainingMentorM[];
  constructor(private mentortraining:mentorcurrenttrainingService,config: NgbRatingConfig){

    config.max = 5;
    config.readonly = true;  }
ngOnInit(){
  this.mentortraining.getUsers().subscribe(data =>{
this.mentorcurrenttraining= data;
  });
};

}
