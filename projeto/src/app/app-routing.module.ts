import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Pessoa/listar/listar.component';
import { AdicioanarComponent } from './Pessoa/adicionar/adicioanar.component';
import { EditarComponent } from './Pessoa/editar/editar.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'adicionar', component: AdicioanarComponent},
  {path: 'editar', component: EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
