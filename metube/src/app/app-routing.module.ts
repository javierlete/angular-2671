import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichasComponent } from './componentes/fichas/fichas.component';
import { ReproductorComponent } from './componentes/reproductor/reproductor.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

const routes: Routes = [
  { path: '', component: FichasComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'reproductor/:id', component: ReproductorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
