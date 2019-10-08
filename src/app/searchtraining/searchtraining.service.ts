
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SearchTrainingM, TrainingUserM } from './searchtraining.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class searchtrainingService {

  constructor(private http:HttpClient) {}
  
  id=sessionStorage.getItem('id');

  private userUrl = 'http://localhost:8883/tech/';
  
  private tUrl = 'http://localhost:8883/trainer/';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<SearchTrainingM[]>(this.userUrl);
  }
public enroll(trainid)
{
  return this.http.get<TrainingUserM[]>(this.tUrl+this.id+'/'+trainid);

}

}
