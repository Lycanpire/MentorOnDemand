
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class adminService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8883/';
  //private userUrl = '/api';
  public authenticate(username,password)
  {if(username=="admin"&&password=="admin123"){
    return true;
  }
  else {return false;
  }
  }

}
