import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any>{
    return this.http.post(environment.urlAPI + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: any): Observable<any>{
    return this.http.post(environment.urlAPI + 'register',user);
  }

  logout(){
    return this.http.get(environment.urlAPI + 'logout');
  }
}
