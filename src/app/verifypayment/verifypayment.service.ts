
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment} from './verifypayment.model';
import { Curr} from './verifypayment.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VerifypaymentService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8883/payments';
  private userUrl1 = 'http://localhost:8883/trainer';
  //private userUrl = '/api';




  public getPayments() {
    return this.http.get<Payment[]>(this.userUrl);
  }

  public getTrainings(id) {
    return this.http.get<Curr>(this.userUrl1+"/"+id);
  }

  public setAmount(amount,Remark,Pid)
  {
    return this.http.get<Payment[]>(this.userUrl+"/"+amount+"/"+Remark+"/"+Pid);
  }

  public setCommission(commission,Tid){
    return this.http.get<Curr>(this.userUrl1+"/ChangeCommission/"+commission+"/"+Tid);
  }

}
