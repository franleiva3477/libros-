import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Libro {
  idLibro: string;
  libTitulo: string;
  libNotaContenido: string;
  libAnio: string;
  SigTopograficaID: string;
  EditorialID: string;
  MateriaID: string;
}

@Injectable({
  providedIn: 'root'
})
export class LibrossService {

  private apiUrlLibros = 'https://escuelasagarna.com/APIBiblioteca/libros.php';

  constructor(private clienteHttp: HttpClient) { }


  agregarLibros(libro:Libro):Observable<any>{
    return this.clienteHttp.post(this.apiUrlLibros,libro);
  }

  obtenerlibros(){
    return this.clienteHttp.get(this.apiUrlLibros);
  }
  
  borrarlibro(idLibro: any): Observable<any> {
    // Aquí formateamos la URL para incluir el idLibro como parámetro de consulta
    return this.clienteHttp.delete(`${this.apiUrlLibros}?idLibro=${idLibro}`);
  }
  obtenetLibro(idLibro: any): Observable<any> {
    // Aquí formateamos la URL para incluir el idLibro como parámetro de consulta
    return this.clienteHttp.get(`${this.apiUrlLibros}?idLibro=${idLibro}`);
  }
  
  
}
