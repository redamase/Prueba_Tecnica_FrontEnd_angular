import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { TipoTaza } from 'src/app/interface/tipo-taza';
import { ApiServiceTaza } from './api.service.tazas';
@Component({
  selector: 'app-tazas',
  templateUrl: './tazas.component.html',
  styleUrls: ['./tazas.component.css']
})
export class TazasComponent implements OnInit {
  formtypeTaza: FormGroup;
  ELEMENT_DATA!: TipoTaza[];
  displayedColumns: string[] = ['tipo_taza'];
  dataSource = new MatTableDataSource<TipoTaza>(this.ELEMENT_DATA);
  constructor(private ApiService:ApiServiceTaza, private fb: FormBuilder) {
    this.formtypeTaza = this.fb.group({
      tipo_taza: ["", Validators.required],
    })
   }
  public listTypeCups:any = []
  ngOnInit(): void {
    this.getDataCup();
  }

  public getDataCup(){
    let res = this.ApiService.getCups(`http://localhost:8081/api/inventario/tipo-taza`);
    res.subscribe(report =>this.dataSource.data=report as TipoTaza[]);
  }
  SendData(){
    this.ApiService.SaveTypeCups(`http://localhost:8081/api/inventario/tipo-taza`,{
      tipo_taza: this.formtypeTaza.value.tipo_taza,
    }).subscribe(respuesta =>{
      alert("Typo de Taza Guardada con éxito");
      window.location.reload();
    });
    }

}
