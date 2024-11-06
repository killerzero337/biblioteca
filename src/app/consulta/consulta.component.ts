import { Component } from '@angular/core';
import { Autor } from '../autor';
import { AutoresService } from '../autores.service';
import { CommonModule } from '@angular/common';
import { Libro } from '../libro';
import { LibrosService } from '../libros.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent {
  autores: Autor[] = [];
  selectedAutor?: Autor;
  libros: Libro[] = [];

  constructor(
    public autoresService: AutoresService,
    public librosService: LibrosService
  ) {
    this.autores = this.autoresService.getAutores();
  }


  selectAutor(autor: Autor) {
    this.selectedAutor = autor;
    this.libros = this.librosService.getLibrosByAutor(autor.nombre + ' ' + autor.apellidos);
  }
}
