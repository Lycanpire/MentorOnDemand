import { Component, OnInit } from '@angular/core';
import { UserProfileM } from './userprofile.model';
import { Router } from '@angular/router';
import { userProfileService } from './userprofile.service';

@Component({
  selector: 'app-usermenu',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  
  veruser: UserProfileM;
  newu:UserProfileM=new UserProfileM();

constructor(private router: Router, private userService: userProfileService) {

}

ngOnInit() {
  this.userService.getUsers()
    .subscribe( data => {
      this.newu = data;
    });
};

 
}
