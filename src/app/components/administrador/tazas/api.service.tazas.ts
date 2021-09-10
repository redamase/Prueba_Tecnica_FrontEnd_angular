import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceTaza {

  constructor(private http: HttpClient) { }


  public getCups(url:string){
    return this.http.get(url);
  }
  public SaveTypeCups(url:string, body: any ){
    return this.http.post(url, body);
  }

}
