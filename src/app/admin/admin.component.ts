import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {adminService} from './admin.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username=''
  password=''

  constructor(private router: Router, private adminservice: adminService) { 
  }
  authenticate(): void{
  
  
    if(this.adminservice.authenticate(this.username,this.password)==true){
      this.router.navigate(['adminmenu']);
    }
    else{
      alert("incorrect credentials");
    }
};
  }
