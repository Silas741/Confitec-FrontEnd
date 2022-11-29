import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { UsuariosFormComponent } from './usuarios/usuarios-form/usuarios-form.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'usuarios', component: ListaUsuariosComponent },
    { path: 'usuario-editar/:id', component: UsuariosFormComponent },
    { path: 'usuarios/Novo', component: UsuariosFormComponent }
];