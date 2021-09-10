import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from '../cliente/pedidos/pedidos.component';
import { ClienteComponent } from './cliente.component';
import { InicioComponent } from './inicio/inicio.component';
import { PedirTazasComponent } from './pedir-tazas/pedir-tazas.component';

const routes: Routes = [
  {path:"", component:ClienteComponent, children: [
    {path:"", component: InicioComponent},
    {path:"pedir-tazas/:id", component: PedirTazasComponent},
    {path:"pedidos", component: PedidosComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
