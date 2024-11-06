import { Libro } from "./libro";

export interface Autor {
    id: number;
    nombre: string;
    apellidos: string;
    imagen: string;
    descripcion: string;
    libros: Libro[];
}