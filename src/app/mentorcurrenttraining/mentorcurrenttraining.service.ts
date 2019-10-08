
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CurrentTrainingMentorM} from './mentorcurrenttraining.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class mentorcurrenttrainingService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8883/trainer/';
  //private userUrl = '/api';
  public getUsers() {
    return this.http.get<CurrentTrainingMentorM[]>(this.userUrl);
  }

}
