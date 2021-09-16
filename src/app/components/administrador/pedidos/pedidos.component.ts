import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pedidos } from 'src/app/interface/pedidos';
import { ApiServiceTaza } from '../nueva-taza/api.service.taza';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  listOrders: any = [];
  ELEMENT_DATA!: Pedidos[];
  totalCompras: number = 0;
  displayedColumns: string[] = ['tipo_taza', 'color', 'dimension', 'capacidad','modelo','material','cantidad_total','tipo_taza_regalo','cantidad_regalo', 'precio_total'];
  dataSource = new MatTableDataSource<Pedidos>(this.ELEMENT_DATA);
  constructor(private ApiService: ApiServiceTaza) { }

  ngOnInit(): void {
    this.getOrders()
    }
    public getOrders(){
      let res = this.ApiService.getOrders(`http://localhost:8081/api/inventario/pedidos`)
      console.log(res)
      res.subscribe(report =>this.dataSource.data=report as Pedidos[]);
    
      this.ApiService.getOrders(`http://localhost:8081/api/inventario/pedidos`).subscribe(respuesta =>{
        this.listOrders = respuesta;
        for (let i = 0; i < this.listOrders.length; i++) {
          console.log(this.listOrders[i])
          this.totalCompras += this.listOrders[i].precio_total
        }
        console.log(this.listOrders)
      });
    }  
  }