import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {IStore} from '../models/istore';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  private URL = environment.urlAPI + 'api/stores/'

  constructor(private http: HttpClient) { }

  getStoreList(): Observable<any> {
    return this.http.get<IStore[]>(this.URL);
  }

  getStoreById(id: number): Observable<any>{
    return this.http.get<IStore>(this.URL +id+ '/search');
  }
}
