import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { verifymentorService } from './verifymentor.service';
import { VerifyMentorM } from './verifymentor.model';

@Component({
  selector: 'app-verifymentor',
  templateUrl: './verifymentor.component.html',
  styleUrls: ['./verifymentor.component.css']
})
export class VerifymentorComponent implements OnInit{

  
  

  verment:VerifyMentorM[];
  newu:VerifyMentorM=new VerifyMentorM();

  constructor(private router:Router, private mentorService: verifymentorService) { 

  }
ngOnInit() {
this.mentorService.getUsers()
.subscribe(data =>{
  this.verment=data;
});
};


deleteUser(tech: VerifyMentorM): void {
  this.mentorService.deleteUser(tech)
    .subscribe( data => {
      this.verment= this.verment.filter(u => u !== tech);
    })
};
createUser(): void {
  this.mentorService.createUser(this.newu)
      .subscribe( data => {
        alert("User created successfully.");
      });

};


}
