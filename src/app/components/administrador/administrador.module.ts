import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdministradorComponent } from './administrador.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { TazasComponent } from './tazas/tazas.component';
import { NuevaTazaComponent } from './nueva-taza/nueva-taza.component';



@NgModule({
  declarations: [
    AdministradorComponent,
    InicioComponent,
    NavbarComponent,
    PedidosComponent,
    TazasComponent,
    NuevaTazaComponent,
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule
  ]
})
export class AdministradorModule { }
