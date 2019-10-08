import { Component, } from '@angular/core';
import{completedtrainingService}from './completedtraining.service';
import{CompletedTrainingUserM}from './completedtraining.model' 
@Component({
  selector: 'app-userpayment',
  templateUrl: './completedtraining.component.html',
  styleUrls: ['./completedtraining.component.css']
})
export class CompletedtrainingComponent  {
  currenttraining: CompletedTrainingUserM[];

constructor( private userService: completedtrainingService) {

}
  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.currenttraining = data;
      });
  };
  
  

 

}
