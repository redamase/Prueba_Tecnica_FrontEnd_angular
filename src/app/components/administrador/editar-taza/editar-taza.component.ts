import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceTaza } from '../nueva-taza/api.service.taza';
@Component({
  selector: 'app-editar-taza',
  templateUrl: './editar-taza.component.html',
  styleUrls: ['./editar-taza.component.css']
})
export class EditarTazaComponent implements OnInit {
  formTaza: FormGroup;
  loading: boolean = false;
  public listTypeCups:any = []
  listCups:any = []
  public tipo_taza:any = ''
  public eliminado:any = ''
  public id:any = '';
  constructor(private rutaActiva: ActivatedRoute, private ApiService:ApiServiceTaza, private fb: FormBuilder, private _snackbar: MatSnackBar, private router: Router) { 
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
        eliminado: ["", Validators.required],
      })
    this.id = this.rutaActiva.snapshot.paramMap.get("id");
     
  }

  
  
  ngOnInit(): void {
    this.getTypesCup();
    this.getDataCup();
    console.log(this.formTaza)
  }
  SendData(){
    console.log( this.formTaza.value.tipo_taza)
    this.ApiService.UpdateCup(`http://localhost:8081/api/inventario/taza/editar-taza/${this.id}`,{
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
      precio_final_compra: (this.formTaza.value.precio_compra*this.formTaza.value.cantidad_total),
      eliminado: this.formTaza.value.eliminado
    }).subscribe(respuesta =>{
      alert("Taza Guardada con éxito");
      window.location.href = "http://localhost:4200/administrador/";
    });
  }

  public getTypesCup(){
    this.ApiService.getCups(`http://localhost:8081/api/inventario/tipo-taza`).subscribe(respuesta =>{
      this.listTypeCups = respuesta;
    });
  }
  
  public getDataCup(){
    this.ApiService.getCup(`http://localhost:8081/api/inventario/taza/${this.id}`).subscribe(respuesta =>{
      this.listCups = respuesta;
      console.log(this.listCups)
      this.tipo_taza = this.listCups.tipo_taza
      this.eliminado = this.listCups.eliminado
      this.formTaza.setValue({
        tipo_taza: this.listCups.tipo_taza, 
        color_taza: this.listCups.color,
        capacidad_taza:  this.listCups.capacidad,
        dimension_taza:  this.listCups.dimensiones,
        modelo_taza: this.listCups.modelo,
        material_taza:  this.listCups.material,
        cantidad_total:  this.listCups.cantidad_total,
        precio_compra:  this.listCups.precio_compra,
        precio_venta:  this.listCups.precio_venta,
        eliminado:  this.listCups.eliminado, 
      });
    });
  }
}