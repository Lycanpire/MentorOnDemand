import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentorModelP } from './mentorpayment.model';
import { MentorPayService } from './mentorpayment.service';

@Component({
  selector: 'app-mentorpayment',
  templateUrl: './mentorpayment.component.html',
  styleUrls: ['./mentorpayment.component.css']
})
export class MentorpaymentComponent {
paym: MentorModelP[];
displayId=false;
withdrawAmount;
amount;
pid;
  users=sessionStorage.getItem('fname');
  constructor(private router: Router, private trainerpaymentService: MentorPayService)
{

}

  ngOnInit() {
      this.trainerpaymentService.getPayments()
        .subscribe( data => {
          this.paym = data;
        });
    };

    
Withdraw(amt){
  if(amt>this.amount)
  {
      alert("Insufficient Balance");
  }
  else
  {
      this.trainerpaymentService.Withdraw(this.pid,amt)
      .subscribe(data=>{
      alert("Withdraw Successfull !");
      });
  
  }


}

    toggleId(amount,pid)
    {
      this.amount=amount;
  this.pid=pid;
        this.displayId=!this.displayId;
    }


  logout()
  {
      sessionStorage.removeItem('role');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('fname');
      sessionStorage.removeItem('id');
      this.router.navigate(['home']);
      
  }
}

