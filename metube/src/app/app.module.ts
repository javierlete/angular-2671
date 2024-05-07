import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichaComponent } from './componentes/ficha/ficha.component';
import { FichasComponent } from './componentes/fichas/fichas.component';
import { ReproductorComponent } from './componentes/reproductor/reproductor.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SeguroPipe } from './pipes/seguro.pipe';
import { ValoracionComponent } from './componentes/valoracion/valoracion.component';

@NgModule({
  declarations: [
    AppComponent,
    FichaComponent,
    FichasComponent,
    ReproductorComponent,
    FormularioComponent,
    SeguroPipe,
    ValoracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
