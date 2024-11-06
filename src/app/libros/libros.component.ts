import { Component } from '@angular/core';
import { LibrosService } from '../libros.service';
import { Libro } from '../libro';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  libros: Libro[] = [];

  constructor(public librosService: LibrosService) {
    this.getLibros();
  }

  getLibros() {
    this.libros = this.librosService.getLibros();
  }


  cambiarCritica(libro: Libro, nuevaCritica: string) {
    //console.log(libro.critica);
    libro.critica = nuevaCritica;
  }

}
