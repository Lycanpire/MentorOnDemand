
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VerifyTechM} from './verifytech.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class verifytechService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8883/tech';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<VerifyTechM[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<VerifyTechM>(this.userUrl, user);
  }

}
