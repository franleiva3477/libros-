import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrossService, Libro } from 'src/app/libross.service';

@Component({
  selector: 'app-libros-agregado',
  templateUrl: './libros-agregado.component.html',
  styleUrls: ['./libros-agregado.component.css']
})
export class LibrosAgregadoComponent implements OnInit{

  formularioDeLibros:FormGroup;

  constructor(public formulario:FormBuilder,
    private servicioLibros:LibrossService,
    private routeador: Router
  ){
    
    this.formularioDeLibros=this.formulario.group({
      libTitulo: ['', [Validators.required]],
      libAnio: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]], // Valida que sea un año de 4 dígitos
      SigTopograficaID: [''],
      EditorialID: [''],
      MateriaID: [''],
      libNotaContenido: ['']

    })
   }

  ngOnInit(): void {
 
  }
  cargarLibros():any {
    console.log("me presionaste");
    console.log(this.formularioDeLibros.value);
    this.servicioLibros.agregarLibros(this.formularioDeLibros.value).subscribe();

    this.routeador.navigateByUrl('/biblioteca/libros-listado'); 

  }

  
}
