import { Component, OnInit } from '@angular/core';
import { SignInMentorM } from './signinmentor.model';
import { signinmentorService } from './signinmentor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signinmentor',
  templateUrl: './signinmentor.component.html',
  styleUrls: ['./signinmentor.component.css']
})
export class SigninmentorComponent  {
  mentor: SignInMentorM[];
  newu:SignInMentorM=new SignInMentorM();

constructor(private router: Router, private mentorService: signinmentorService) {

}

authenticate(username,password): void{


  this.mentorService.authenticate(username,password).subscribe(data=> {
    if(data==null)
    {
      alert("incorrect credentials");
    }
    else if(data!=null)
    {sessionStorage.setItem('id',data.id);
      sessionStorage.setItem('role',data.role)
      sessionStorage.setItem('username',data.userName)
      this.router.navigate(['mentormenu']);
    }
  })                                                  


};


}
