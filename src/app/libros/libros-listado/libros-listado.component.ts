import { Component, OnInit } from '@angular/core';
import { Libro, LibrossService } from 'src/app/libross.service';


@Component({
  selector: 'app-libros-listado',
  templateUrl: './libros-listado.component.html',
  styleUrls: ['./libros-listado.component.css']
})

export class LibrosListadoComponent {
Libro:any;

constructor(
  private servicioLibros: LibrossService) {}

ngOnInit(): void {
  this.servicioLibros.obtenerlibros().subscribe(respuesta =>{
    console.log(respuesta);
    this.Libro=respuesta;
  });
  
}

borrarLibro(idLibro:any, idControl:any){
  console.log(idLibro);
  console.log(idControl);

  if(window.confirm("¿Desea borrar el registro?")){
    this.servicioLibros.borrarlibro(idLibro).subscribe((respuesta) =>{
      this.Libro.splice(idControl,1);
    });
  }

}





}


