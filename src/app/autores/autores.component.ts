import { Component } from '@angular/core';
import { Autor } from '../autor';
import { AutoresService } from '../autores.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-autores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './autores.component.html',
  styleUrl: './autores.component.css'
})
export class AutoresComponent {
  autores: Autor[] = [];
  selectedAutor?: Autor;


  constructor(public autoresService: AutoresService) {
    this.autores = this.autoresService.getAutores();
  }


  selectAutor(autor: Autor) {
    //console.log(autor);
    this.selectedAutor = autor;

    //console.log(this.libros);
  }
  /*  guardarDescripcion(autor: Autor) {
      
    }*/
  cambiarDescripcion(autor: Autor, nuevaDescripcion: string) {

    //console.log(autor.nombre, autor.descripcion);
    autor.descripcion = nuevaDescripcion;
  }
}