import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { AutoresComponent } from './autores/autores.component';
import { ConsultaComponent } from './consulta/consulta.component';
export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: "inicio", component: InicioComponent },
    { path: "libros", component: LibrosComponent },
    { path: "autores", component: AutoresComponent },
    { path: "consulta", component: ConsultaComponent },
    { path: '**', redirectTo: '/inicio' }
];

