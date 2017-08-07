import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {
  constructor(private http: Http) {}

  getInjuriesData(): Observable<any> {    
    return this.http.get('http://34.227.40.148/nfl/fetch/injuries');
  }
}