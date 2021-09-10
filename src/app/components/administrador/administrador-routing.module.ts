import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador.component';
import { InicioComponent } from './inicio/inicio.component';
import { NuevaTazaComponent } from './nueva-taza/nueva-taza.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { TazasComponent } from './tazas/tazas.component';

const routes: Routes = [
  {path:"", component:AdministradorComponent, children: [
    {path:"", component: InicioComponent},
    {path:"pedidos", component: PedidosComponent},
    {path:"tazas", component: TazasComponent},
    {path:"nueva-taza", component: NuevaTazaComponent},
  ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
