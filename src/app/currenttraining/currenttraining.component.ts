import { Component,  } from '@angular/core';
import { CurrentTrainingUserM } from './currenttraining.model';
import { currenttrainingService } from './currenttraining.service'

@Component({
  selector: 'app-currenttraining',
  templateUrl: './currenttraining.component.html',
  styleUrls: ['./currenttraining.component.css']
})
export class CurrenttrainingComponent  {

  currenttraining: CurrentTrainingUserM[];

constructor( private userService: currenttrainingService) {

}
  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.currenttraining = data;
      });
  };
  
 
}
