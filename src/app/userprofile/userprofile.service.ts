
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserProfileM } from './userprofile.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class userProfileService {
id=sessionStorage.getItem('id');
  constructor(private http:HttpClient) {}




  private userUrl = 'http://localhost:8883/users';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<UserProfileM>(this.userUrl+"/"+this.id);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<UserProfileM>(this.userUrl, user);
  }

}
