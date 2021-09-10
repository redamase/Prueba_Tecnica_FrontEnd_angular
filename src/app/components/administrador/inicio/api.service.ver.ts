import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceVer {

  constructor(private http: HttpClient) { }

  public getAllCupsSaved(url:string){
    return this.http.get(url);
  }
}
