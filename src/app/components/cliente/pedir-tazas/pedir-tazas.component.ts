import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiServiceClient } from '../api.service.client';

@Component({
  selector: 'app-pedir-tazas',
  templateUrl: './pedir-tazas.component.html',
  styleUrls: ['./pedir-tazas.component.css']
})
export class PedirTazasComponent implements OnInit {
  
  formTaza: FormGroup;
  public listCups:any = '';
  public id:any = '';
  constructor(private rutaActiva: ActivatedRoute, private router: Router, private ApiService: ApiServiceClient, private fb: FormBuilder) { 
    this.id = this.rutaActiva.snapshot.paramMap.get("id");
    this.formTaza = this.fb.group({
      cantidad_comprar: ["", Validators.required],
    })
  }
  ngOnInit(): void {
    this.getDataCup();
  }

  
  public getDataCup(){
    this.ApiService.getCup(`http://localhost:8081/api/inventario/taza/${this.id}`).subscribe(respuesta =>{
      this.listCups = respuesta;
    });
  }
  SendData(){

    this.ApiService.SaveOrder(`http://localhost:8081/api/inventario/pedidos`,{
      id_taza: this.listCups.id,
      // cantidad_disponible: this.listCups.cantidad_disponible,
      tipo_taza: this.listCups.tipo_taza,
      color: this.listCups.color,
      dimensiones:this.listCups.dimensiones,
      capacidad: this.listCups.capacidad,
      modelo: this.listCups.modelo,
      material: this.listCups.material,
      cantidad_total: this.formTaza.value.cantidad_comprar,
      precio_total: (this.formTaza.value.cantidad_comprar*this.listCups.precio_venta),
      usuario_id: 2
    }).subscribe(respuesta =>{
     
      alert("Se ha realizado el pedido con exito");
      window.location.href = "http://localhost:4200/cliente/pedidos";
    }, err=>{
      alert(err.error);
    });
    }

}
