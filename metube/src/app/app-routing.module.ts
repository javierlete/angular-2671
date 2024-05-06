import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichasComponent } from './componentes/fichas/fichas.component';
import { ReproductorComponent } from './componentes/reproductor/reproductor.component';

const routes: Routes = [
  { path: '', component: FichasComponent },
  { path: 'reproductor/:id', component: ReproductorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
