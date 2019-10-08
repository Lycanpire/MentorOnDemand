import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment, Curr } from './userpayment.model';
import { userPayService } from './userpayment.service';

@Component({
  selector: 'app-userpayment',
  templateUrl: './userpayment.component.html',
  styleUrls: ['./userpayment.component.css']
})
export class UserpaymentComponent implements OnInit {
  payments: Payment[];
	training: Curr=new Curr();
    showId=false;
    users=sessionStorage.getItem('fname');
	Payid;
	amt;

  constructor(private router: Router, private userpaymentService: userPayService) { }

  ngOnInit(){
  
		this.userpaymentService.getPayment()
		.subscribe(data1=>{
			this.payments=data1;
		});


	}


	getTrainings(Pid,amount,payid)
	{
		this.Payid=payid;
    this.amt=amount;
   
		this.userpaymentService.getTrainings(Pid)
		.subscribe(data=>{
			this.training=data;
		});
		this.showId=!this.showId;

	}

	Payfees(amount){

		if(this.amt==0)
		{
			this.userpaymentService.Payfees(this.Payid,amount)
		.subscribe(data=>{
			alert("Fees Successfully Paid!");
		});
		
		}
		else{
			alert("already paid");
		}
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
