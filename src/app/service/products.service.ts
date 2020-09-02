import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {IProduct} from '../models/iproduct';
import {IStore} from '../models/istore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL = environment.urlAPI + 'api/products/'

  constructor(private http: HttpClient) { }

  getProductList():Observable<any[]>{
    return this.http.get<IProduct[]>(this.URL);
  }

  getProductListByStoreId(id: number): Observable<any[]>{
    return this.http.get<IProduct[]>(this.URL +id+ '/list');
  }
  getProductListOrderByNameAsc(id: number): Observable<any[]>{
    return this.http.get<IProduct[]>(this.URL +id+ '/listNameAsc');
  }

  getProductListOrderByNameDesc(id: number): Observable<any[]>{
    return this.http.get<IProduct[]>(this.URL +id+ '/listNameDesc');
  }

  getProductListOrderByPriceAsc(id: number): Observable<any[]>{
    return this.http.get<IProduct[]>(this.URL +id+ '/listPriceAsc');
  }

  getProductListOrderByPriceDesc(id: number): Observable<any[]>{
    return this.http.get<IProduct[]>(this.URL +id+ '/listPriceDesc');
  }


}
