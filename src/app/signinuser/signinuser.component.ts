import { Component } from '@angular/core';
import { SignInUserM } from './signinuser.model';
import { signinuserService } from './signinuser.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-signinuser',
  templateUrl: './signinuser.component.html',
  styleUrls: ['./signinuser.component.css']
})
export class SigninuserComponent {
  user: SignInUserM[];
  newu:SignInUserM=new SignInUserM();

constructor(private router: Router, private userService: signinuserService) {

}

authenticate(username,password): void{


  this.userService.authenticate(username,password).subscribe(data=> {
    if(data==null)
    {
      alert("incorrect credentials");
    }
    else if(data!=null)
    {
      sessionStorage.setItem('id',data.id);
      sessionStorage.setItem('role',data.role)
      sessionStorage.setItem('username',data.userName)
      this.router.navigate(['usermenu']);
    }
  })


};

}




