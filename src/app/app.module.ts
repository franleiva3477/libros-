import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LibrosListadoComponent } from './libros/libros-listado/libros-listado.component';
import { LibrosAgregadoComponent } from './libros/libros-agregado/libros-agregado.component';
import { LibrosEditadoComponent } from './libros/libros-editado/libros-editado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LibrossService } from './libross.service';

@NgModule({
  declarations: [
    AppComponent,
    LibrosListadoComponent,
    LibrosAgregadoComponent,
    LibrosEditadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LibrossService],
  bootstrap: [AppComponent]
})
export class AppModule { }
