import { Injectable } from '@angular/core';
import { Autor } from './autor';
@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  Autores!: Autor[];
  constructor() {
    this.Autores = [
      /*    id: number;
    nombre: string;
    apellidos: string;
    imagen: string;
    descripcion: string;
    libros: Libro[];*/

      {
        id: 1,
        nombre: 'Patrick',
        apellidos: 'Rothfuss',
        imagen: '/Patrick_Rothfuss.jpg',
        descripcion: 'Autor de "El nombre del viento"',
        libros: []
      },
      {
        id: 2,
        nombre: 'Gabriel',
        apellidos: 'García Márquez',
        imagen: 'Gabriel_Garcia_Marquez.jpg',
        descripcion: 'Autor de "Cien años de soledad"',
        libros: []
      },
      {
        id: 3,
        nombre: 'H.P.',
        apellidos: 'Lovecraft',
        imagen: 'lovecraft.jpg',
        descripcion: 'Pionero del horror cósmico',
        libros: []
      },
      {
        id: 4,
        nombre: 'Brandon',
        apellidos: 'Sanderson',
        imagen: 'brandon_sandersonjpg.jpg',
        descripcion: 'Autor de la serie "El Archivo de las Tormentas"',
        libros: []
      },
      {
        id: 5,
        nombre: 'Neil',
        apellidos: 'Gaiman',
        imagen: 'neil-gaiman.jpg',
        descripcion: 'Autor de "American Gods"',
        libros: []
      },
      {
        id: 6,
        nombre: 'Kentaro',
        apellidos: 'Miura',
        imagen: 'Kentaro_Miura.webp',
        descripcion: 'Creador de el Manga de Berserk',
        libros: []
      },
      {
        id: 7,
        nombre: 'Ray',
        apellidos: 'Bradbury',
        imagen: 'Ray-Bradbury.webp',
        descripcion: 'Autor de "El hombre ilustrado"',
        libros: []
      },
      {
        id: 8,
        nombre: 'Anne',
        apellidos: 'Rice',
        imagen: 'Anne_Rice.jpg',
        descripcion: 'Autor de "Las crónicas vampíricas"',
        libros: []
      },
      {
        id: 9,
        nombre: 'Terry',
        apellidos: 'Pratchett',
        imagen: 'terry-pratchett.jpg',
        descripcion: '',
        libros: []
      },
      {
        id: 10,
        nombre: 'Stephen',
        apellidos: 'King',
        imagen: '/stephen_king.jpg',
        descripcion: 'Autor de "It"',
        libros: []
      }
    ];
  }


  getAutores(): Autor[] {
    return this.Autores;
  }


  getAutorById(id: number) {
    return this.Autores.find(autor => autor.id === id);
  }
}