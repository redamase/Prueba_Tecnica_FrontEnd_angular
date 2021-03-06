import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pedidos } from 'src/app/interface/pedidos';
import { ApiServiceClient } from '../api.service.client';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  ELEMENT_DATA!: Pedidos[];
  displayedColumns: string[] = ['tipo_taza', 'color', 'dimension', 'capacidad','modelo','material','cantidad_total','tipo_taza_regalo','cantidad_regalo', 'precio_total'];
  dataSource = new MatTableDataSource<Pedidos>(this.ELEMENT_DATA);
  constructor(private ApiService: ApiServiceClient) { }

  ngOnInit(): void {
  this.getOrders()
  }
  public getOrders(){
    let res = this.ApiService.getOrders(`http://localhost:8081/api/inventario/pedidos`)
    console.log(res)
    res.subscribe(report =>this.dataSource.data=report as Pedidos[]);
  }
}
