import { Component, OnInit } from '@angular/core';
import { ApiServiceClient } from '../api.service.client';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public listCups:any = []
 
  constructor(private ApiService:ApiServiceClient) { }
  ngOnInit(): void {
    this.getDataCup();
  }
  public getDataCup(){
    this.ApiService.getCups(`http://localhost:8081/api/inventario/taza`).subscribe(respuesta =>{
      this.listCups = respuesta;
      console.log(respuesta)
    });
  }
}
