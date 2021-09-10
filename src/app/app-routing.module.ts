import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  {path: "", redirectTo:"login", pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: "administrador", loadChildren:() => import('./components/administrador/administrador.module').then(x => x.AdministradorModule)},
  {path: "cliente", loadChildren:() => import('./components/cliente/cliente.module').then(x => x.ClienteModule)},
  {path:"*", redirectTo:"login", pathMatch: "full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
