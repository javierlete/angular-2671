import { Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivasComponent } from './directivas/directivas.component';

export const routes: Routes = [
    { path: '', component: CuerpoComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'directivas', component: DirectivasComponent },
];
