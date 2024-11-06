import { Injectable } from '@angular/core';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  libros!: Libro[];
  constructor() {
    this.libros = [
      // Como son ya muchas imagenes voy a proporcionar enlaces para que no pese tanto el proyecto
      { id: 1, nombre: 'El nombre del viento', autor: 'Patrick Rothfuss', imagen: 'https://atlascultural.com/wp-content/blogs.dir/34/files/2013/10/nombre-viento-portada.jpg', critica: 'Increíble narración.' },
      { id: 2, nombre: 'Cien años de soledad', autor: 'Gabriel García Márquez', imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Cien_a%C3%B1os_de_soledad.png', critica: 'Una obra maestra.' },
      { id: 3, nombre: 'El temor de un hombre sabio', autor: 'Patrick Rothfuss', imagen: 'https://m.media-amazon.com/images/I/81ln0VB5r1L.jpg', critica: 'Una secuela digna.' },
      { id: 4, nombre: 'La llamada de Cthulhu', autor: 'H.P. Lovecraft', imagen: 'https://m.media-amazon.com/images/I/81ZRGmDJn3L._UF1000,1000_QL80_.jpg', critica: 'Un clásico del horror.' },
      { id: 5, nombre: 'La sombra sobre Innsmouth', autor: 'H.P. Lovecraft', imagen: 'https://www.planetadelibros.com/usuaris/libros/fotos/383/original/portada_la-sombra-sobre-innsmouth_h-p-lovecraft_202310311551.jpg', critica: 'Una atmósfera inquietante.' },
      { id: 6, nombre: 'El camino de los reyes', autor: 'Brandon Sanderson', imagen: 'https://via-news.es/wp-content/uploads/2016/08/caminoreyes_500x300.jpg', critica: 'Un inicio épico.' },
      { id: 7, nombre: 'Palabras radiantes', autor: 'Brandon Sanderson', imagen: 'https://cosmere.es/wp-content/uploads/2017/08/20170827-MW-El-archivo-de-las-tormentas-02.jpg', critica: 'Una continuación brillante.' },
      { id: 8, nombre: 'El océano al final del camino', autor: 'Neil Gaiman', imagen: 'https://stars-my-destination.com/wp-content/uploads/2020/06/img_20200615_182953.jpg?w=640', critica: 'Una historia conmovedora.' },
      { id: 9, nombre: 'Sandman', autor: 'Neil Gaiman', imagen: 'https://m.media-amazon.com/images/I/91-XeIW3CML._AC_UF894,1000_QL80_.jpg', critica: 'Un hito en el cómic.' },
      { id: 10, nombre: 'Berserk', autor: 'Kentaro Miura', imagen: 'https://i.blogs.es/90ec11/guts-berserk/1366_2000.png', critica: 'Manga Seinen.' },
      { id: 11, nombre: 'El hombre ilustrado', autor: 'Ray Bradbury', imagen: 'https://www.planetadelibros.com/usuaris/libros/fotos/299/original/portada_el-hombre-ilustrado_ray-bradbury_201912181023.jpg', critica: 'Una obra impactante.' },
      { id: 12, nombre: 'Las crónicas vampíricas', autor: 'Anne Rice', imagen: 'https://i0.wp.com/resources.claroshop.com/medios-plazavip/s2/15586/2416096/611e9b4b160e8-9786073198929-1600x1600.jpg?resize=600%2C600&ssl=1', critica: 'Un nuevo enfoque al vampirismo.' },
      { id: 13, nombre: 'It', autor: 'Stephen King', imagen: 'https://www.caninomag.es/wp-content/uploads/2015/12/cabecera_king_minimal-1.jpg', critica: 'Una obra maestra del horror.' },
      { id: 14, nombre: 'El resplandor', autor: 'Stephen King', imagen: 'https://marcialpons.es/media/img/portadas/2020/1/21/9788412094756.jpg', critica: 'Tensión en cada página.' }
    ];
  }

  getLibros() {
    return this.libros;
  }

  getLibrosByAutor(autor: string) {
    console.log(autor);
    return this.libros.filter(libro => libro.autor === autor);
  }
}