import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/UsuarioService';

import { Usuarios } from '../../classes/usuarios';


@Component({
  selector: 'app-lista-usuariosForm',
  templateUrl: './usuarios-form.component.html',
  styleUrls:['./usuarios-form.component.scss']
})
export class UsuariosFormComponent implements OnInit {

  constructor(
    private UsuariosService: UsuarioService,
    private toastr: ToastrService,
    private router: Router,private route: ActivatedRoute) { }

  public usuario: Usuarios = {id:'',nome:'',sobrenome:'',email:'',dataNascimento:'',escolaridade:0};
  dataAtual = new Date()
  private id: string;

  ngOnInit() {
    this.id = this.route.snapshot.params[`id`];
    if(this.id !=undefined)
    {this.carregarUsuario(this.id);}
    
  }
  EditarUsuario(usuario:Usuarios){
    this.UsuariosService.EditarUsuarios(usuario)
    .then((resp:Usuarios)=>{
      this.usuario = resp;
    })
  }

  SalvarUsuario(usuario:Usuarios){
    usuario.id = crypto.randomUUID()
    console.log(usuario)
    this.UsuariosService.CriarUsuarios(usuario)
    .then((resp:Usuarios)=>{
      this.usuario = resp;
      this.showSucess('Cadastrado com sucesso','Sucesso');
      this.router.navigate(['/usuarios']);
    })
    .catch((resp)=>{
      this.showError(resp.messages,'erro')
    })
  }

    ExcluirUsuario(usuario: Usuarios) {
      this.UsuariosService.ExcluirUsuarios(usuario.id)
      .then((resp:Usuarios)=>{
        this.usuario = resp;
        this.showSucess('Excluido com sucesso','Sucesso');
        this.router.navigate(['/usuarios']);
      })
      }

      carregarUsuario(id:string){
        this.UsuariosService.obterByUsuario(id)
        .then((resp:Usuarios)=>{
          this.usuario = resp;
          console.log(resp)
        })

      }

  showError(descricao: any, titulo: any) {
    this.toastr.error(descricao, titulo, { timeOut: 4000 });
  }
  showSucess(descricao: any, titulo: any) {
    this.toastr.success(descricao, titulo, { timeOut: 4000 });
  } 

}
