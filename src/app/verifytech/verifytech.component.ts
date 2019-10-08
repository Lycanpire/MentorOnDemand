import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerifyTechM } from './verifytech.model';
import { verifytechService } from './verifytech.service'

@Component({
  selector: 'app-verifytech',
  templateUrl: './verifytech.component.html',
  styleUrls: ['./verifytech.component.css']
})
export class VerifytechComponent implements OnInit {

  vertech: VerifyTechM[];
  newt:VerifyTechM=new VerifyTechM();

constructor(private router: Router, private techService: verifytechService) {

}

ngOnInit() {
  this.techService.getUsers()
    .subscribe( data => {
      this.vertech = data;
    });
};

deleteUser(tech: VerifyTechM): void {
  this.techService.deleteUser(tech)
    .subscribe( data => {
      this.vertech = this.vertech.filter(u => u !== tech);
    })
};
createUser(): void {
  this.techService.createUser(this.newt)
      .subscribe( data => {
        alert("User created successfully.");
      });

};

}

