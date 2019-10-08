
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MentorModelP } from './mentorpayment.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MentorPayService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8883/payments';
  //private userUrl = '/api';
  public getPayments() {
    return this.http.get<MentorModelP[]>(this.userUrl);
  }

    
  public Withdraw(payid,amount)
  {
    return this.http.get<MentorModelP>(this.userUrl+"/withdraw/"+payid+"/"+amount)
  }
}
