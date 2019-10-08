import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerifyUserM } from './verifyuser.model';
import { verifyuserService } from './verifyuser.service'

@Component({
  selector: 'app-verifyuser',
  templateUrl: './verifyuser.component.html',
  styleUrls: ['./verifyuser.component.css']
})
export class VerifyuserComponent implements OnInit {


  veruser: VerifyUserM[];
  newu:VerifyUserM=new VerifyUserM();

constructor(private router: Router, private userService: verifyuserService) {

}

ngOnInit() {
  this.userService.getUsers()
    .subscribe( data => {
      this.veruser = data;
    });
};

deleteUser(tech: VerifyUserM): void {
  this.userService.deleteUser(tech)
    .subscribe( data => {
      this.veruser = this.veruser.filter(u => u !== tech);
    })
};
createUser(): void {
  this.userService.createUser(this.newu)
      .subscribe( data => {
        alert("User created successfully.");
      });

};
}
