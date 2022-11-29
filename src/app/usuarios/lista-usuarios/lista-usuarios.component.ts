import { Component, OnInit, ViewChild } from '@angular/core';

import { Usuarios } from '../../classes/usuarios';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort';
import { UsuarioService } from 'src/app/services/UsuarioService';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss'],
})
export class ListaUsuariosComponent implements OnInit {

  constructor(private UsuariosService: UsuarioService) { }

  public usuarios: Usuarios[];
  public usuario: Usuarios;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ['Nome', 'Email', 'DataNascimento', 'Escolaridade','Editar'];

  public dataSource: MatTableDataSource<Usuarios>;

  ngOnInit() {
    this.ListarUsuarios();
  }

  async ListarUsuarios() {
   await this.UsuariosService.obterUsuarios()
    .then((resp:Usuarios[])=>{
      this.usuarios = resp;
      this.dataSource = new MatTableDataSource(this.usuarios)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
    .catch((error)=>
    console.log(error))
  }

  EditarUsuario(usuario:Usuarios){
    this.UsuariosService.EditarUsuarios(usuario)
    .then((resp:Usuarios)=>{
      this.usuario = resp;
   
    })
  }

  SalvarUsuario(usuario:Usuarios){
    this.UsuariosService.CriarUsuarios(usuario)
    .then((resp:Usuarios)=>{
      this.usuario = resp;
    })
  }
}
