import { Component } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LibrossService, Libro } from 'src/app/libross.service'; 



@Component({
  selector: 'app-libros-editado',
  templateUrl: './libros-editado.component.html',
  styleUrls: ['./libros-editado.component.css']
})
export class LibrosEditadoComponent {
  formularioDeLibros:FormGroup;
   idLibro:any;

constructor(
  public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private librosService: LibrossService,
    public ruteador:Router
){
  this.idLibro=this.activeRoute.snapshot.paramMap.get('id');
  console.log(this.idLibro);

  this.librosService.obtenetLibro(this.idLibro).subscribe(
    respuesta=>{
      console.log(respuesta);

      this.formularioDeLibros.setValue({
        libTitulo:respuesta  [0]['libTitulo'],
        libAnio:respuesta [0]['libAnio'],
        SigTopograficaID: respuesta  [0]['SigTopograficaID'],
        EditorialID: respuesta [0] ['EditorialID'],
        MateriaID: respuesta  [0] ['MateriaID'],
        libNotaContenido: respuesta  [0]['libNotaContenido']
      })
    }
  );

  this.formularioDeLibros=this.formulario.group({
    libTitulo: ['' ],
      libAnio: ['' ],
      SigTopograficaID: [''],
      EditorialID: [''],
      MateriaID: [''],
      libNotaContenido: [''] 
  } );

}
  


}


