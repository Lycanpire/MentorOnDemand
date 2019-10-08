
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VerifyMentorM} from './verifymentor.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class verifymentorService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8883/mentor';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<VerifyMentorM[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<VerifyMentorM>(this.userUrl, user);
  }

}
