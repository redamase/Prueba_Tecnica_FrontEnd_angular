
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Taza } from 'src/app/interface/taza';
import { ApiServiceVer } from '../inicio/api.service.ver';

interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  ELEMENT_DATA!: Taza[];
  displayedColumns: string[] = ['tipo_taza', 'color', 'dimension', 'capacidad','modelo','material','cantidad_total','cantidad_disponible', 'precio_compra', 'precio_venta', "precio_final_compra"];
  dataSource = new MatTableDataSource<Taza>(this.ELEMENT_DATA);
  constructor(private ApiService:ApiServiceVer) { }
  ngOnInit(): void {
    this.getDataCup();
  }
    public getDataCup(){
    let res = this.ApiService.getAllCupsSaved(`http://localhost:8081/api/inventario/taza`);
    res.subscribe(report =>this.dataSource.data=report as Taza[]);
  }
}
