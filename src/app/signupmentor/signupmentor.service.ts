
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUpMentorM} from './signupmentor.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class signupmentorService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8883/mentor';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<SignUpMentorM[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<SignUpMentorM>(this.userUrl, user);
  }

}
