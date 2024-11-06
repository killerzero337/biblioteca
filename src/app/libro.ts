import { Autor } from "./autor";

export interface Libro {
    id: number;
    nombre: string;
    autor: string;
    imagen: string;
    critica: string;
}