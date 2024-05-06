import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichaComponent } from './componentes/ficha/ficha.component';
import { FichasComponent } from './componentes/fichas/fichas.component';
import { ReproductorComponent } from './componentes/reproductor/reproductor.component';

@NgModule({
  declarations: [
    AppComponent,
    FichaComponent,
    FichasComponent,
    ReproductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
