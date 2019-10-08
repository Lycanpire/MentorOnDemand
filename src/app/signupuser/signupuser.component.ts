import { Component, OnInit } from '@angular/core';
import { SignUpUserM } from './signupuser.model';
import { signupuserService } from './signupuser.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.component.html',
  styleUrls: ['./signupuser.component.css']
})
export class SignupuserComponent {

  user: SignUpUserM[];
  newu:SignUpUserM=new SignUpUserM();
  active=true;
  confirmedSignup=true;
  date=new Date();
  role="Student";



constructor(private router: Router, private userService: signupuserService) {

}

ngOnInit() {
  this.userService.getUsers()
    .subscribe( data => {
      this.user = data;
    });
};

deleteUser(tech: SignUpUserM): void {
  this.userService.deleteUser(tech)
    .subscribe( data => {
      this.user = this.user.filter(u => u !== tech);
    })
};
createUser(): void {
  this.newu.resetPasswordDate=this.date;
  this.newu.role=this.role;
  this.newu.active=this.active;
  this.newu.confirmedSignup=this.confirmedSignup;
    this.newu.regCode=this.newu.userName+this.newu.contactNumber;

  this.userService.createUser(this.newu)
      .subscribe( data => {
        alert("User created successfully.");
      });
  
};



}
