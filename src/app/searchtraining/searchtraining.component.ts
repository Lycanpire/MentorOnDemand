import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { searchtrainingService } from './searchtraining.service';
import { SearchTrainingM } from './searchtraining.model';

@Component({
  selector: 'app-searchtraining',
  templateUrl: './searchtraining.component.html',
  styleUrls: ['./searchtraining.component.css']
})
export class SearchtrainingComponent {

  vertech: SearchTrainingM[];
  newt:SearchTrainingM=new SearchTrainingM();


constructor(private router: Router, private techService: searchtrainingService) {

}

ngOnInit() {
  this.techService.getUsers()
    .subscribe( data => {
      this.vertech = data;
    });
};

enroll(trainid)
{
  this.techService.enroll(trainid).
  subscribe(data=> {
    alert("You Have successfully Enrolled For The Course");
    this.router.navigate(['userpayments']);

  });
  
};



}
