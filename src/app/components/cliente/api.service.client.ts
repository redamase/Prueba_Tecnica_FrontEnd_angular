import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceClient {

  constructor(private http: HttpClient) { }

  public getCups(url:string){
    return this.http.get(url);
  }
  public getCup(url:string){
    return this.http.get(url);
  }

  public getOrders(url:string){
    return this.http.get(url);
  }

  public SaveOrder(url:string, body: any ){
    return this.http.post(url, body);
  }
}
