import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ClienteComponent } from './cliente.component';
import { PedirTazasComponent } from './pedir-tazas/pedir-tazas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PedidosComponent } from './pedidos/pedidos.component';


@NgModule({
  declarations: [
    ClienteComponent,
    PedirTazasComponent,
    NavbarComponent,
    InicioComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule
  ]
})
export class ClienteModule { }
