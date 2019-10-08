import { Component, OnInit } from '@angular/core';
import { SignUpMentorM } from './signupmentor.model';
import { signupmentorService } from './signupmentor.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupmentor',
  templateUrl: './signupmentor.component.html',
  styleUrls: ['./signupmentor.component.css']
})
export class SignupmentorComponent  {
  mentor: SignUpMentorM[];
  newm:SignUpMentorM=new SignUpMentorM();
  active=true;
  confirmedSignup=true;
  date=new Date();
  role="Mentor";

constructor(private router: Router, private userService: signupmentorService) {

}

ngOnInit() {
  this.userService.getUsers()
    .subscribe( data => {
      this.mentor = data;
    });
};

deleteUser(tech: SignUpMentorM): void {
  this.userService.deleteUser(tech)
    .subscribe( data => {
      this.mentor = this.mentor.filter(u => u !== tech);
    })
};
createUser(): void {
  this.newm.resetPasswordDate=this.date;
  this.newm.role=this.role;
  this.newm.active=this.active;
  this.newm.confirmedSignup=this.confirmedSignup;
  this.newm.regCode=this.newm.userName+this.newm.contactNumber;

  this.userService.createUser(this.newm)
      .subscribe( data => {
        alert("Account created successfully.");
      });

};
 
}
