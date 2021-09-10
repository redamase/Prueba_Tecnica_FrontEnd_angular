import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiServiceTaza } from './api.service.taza';

@Component({
  selector: 'app-nueva-taza',
  templateUrl: './nueva-taza.component.html',
  styleUrls: ['./nueva-taza.component.css']
})
export class NuevaTazaComponent implements OnInit {

  formTaza: FormGroup;
  loading: boolean = false;
  public listTypeCups:any = []
  constructor(private ApiService:ApiServiceTaza, private fb: FormBuilder, private _snackbar: MatSnackBar, private router: Router) { 
    this.formTaza = this.fb.group({
      tipo_taza: ["", Validators.required],
      color_taza: ["", Validators.required],
      capacidad_taza: ["", Validators.required],
      dimension_taza: ["", Validators.required],
      modelo_taza: ["", Validators.required],
      material_taza: ["", Validators.required],
      cantidad_total: ["", Validators.required],
      precio_compra: ["", Validators.required],
      precio_venta: ["", Validators.required],
    })
  }


  ngOnInit(): void {
    this.getDataCup();
  }

  SendData(){
    this.ApiService.SaveCups(`http://localhost:8081/api/inventario/taza`,{
      tipo_taza: this.formTaza.value.tipo_taza,
      color: this.formTaza.value.color_taza,
      dimensiones: this.formTaza.value.dimension_taza,
      capacidad: this.formTaza.value.capacidad_taza,
      modelo: this.formTaza.value.modelo_taza,
      material: this.formTaza.value.material_taza,
      cantidad_total: this.formTaza.value.cantidad_total,
      cantidad_disponible: this.formTaza.value.cantidad_total,
      precio_compra: this.formTaza.value.precio_compra,
      precio_venta: this.formTaza.value.precio_venta,
      precio_final_compra: (this.formTaza.value.precio_compra*this.formTaza.value.cantidad_total)
    }).subscribe(respuesta =>{
      alert("Taza Guardada con éxito");
      window.location.href = "http://localhost:4200/administrador/";
    });
    }

  public getDataCup(){
    this.ApiService.getCups(`http://localhost:8081/api/inventario/tipo-taza`).subscribe(respuesta =>{
      this.listTypeCups = respuesta;
    });
  }
}
