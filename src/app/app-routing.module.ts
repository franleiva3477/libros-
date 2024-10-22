import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosListadoComponent } from './libros/libros-listado/libros-listado.component';
import { LibrosAgregadoComponent } from './libros/libros-agregado/libros-agregado.component';
import { LibrosEditadoComponent } from './libros/libros-editado/libros-editado.component';

const routes: Routes = [
  { path: 'libros-listado', component: LibrosListadoComponent },
    { path: 'libros-agregado', component: LibrosAgregadoComponent },
    { path: 'libros-editado/:id', component: LibrosEditadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
