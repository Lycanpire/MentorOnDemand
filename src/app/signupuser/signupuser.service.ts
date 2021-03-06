
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpUserM} from './signupuser.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class signupuserService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8883/users';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<SignUpUserM[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<SignUpUserM>(this.userUrl, user);
  }

}
