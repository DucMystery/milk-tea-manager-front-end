import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ITopping} from '../models/itopping';

@Injectable({
  providedIn: 'root'
})
export class ToppingsService {

  URL = environment.urlAPI + 'api/toppings/'
  constructor(private http: HttpClient) { }

  getToppingListByProductId(id: number): Observable<any[]>{
    return this.http.get<ITopping[]>(this.URL +id+ '/list');
  }
}
