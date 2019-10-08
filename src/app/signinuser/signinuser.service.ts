
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignInUserM} from './signinuser.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class signinuserService {

  constructor(private http:HttpClient) {}
  

  private userUrl = 'http://localhost:8883/users/';
  //private userUrl = '/api';
  public authenticate(username,password)
  {
    return this.http.get<SignInUserM>(this.userUrl+username+"/"+password);
  }

}
