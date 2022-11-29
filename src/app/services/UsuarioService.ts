import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuarios } from '../classes/usuarios';
import { Observable } from 'rxjs';


@Injectable()
export class UsuarioService {

constructor(private http: HttpClient) { }

private _headers = new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' ,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials': 'false'
});

    protected UrlServiceV1: string = "https://localhost:7067/api/Auth/";

    async obterUsuarios() : Promise<Usuarios[]> {
        let opcoes = { headers: this._headers };
        return this.http
        .get<Usuarios[]>(this.UrlServiceV1 + "All",opcoes).toPromise().then()
    }
    async obterByUsuario(id:string) : Promise<Usuarios> {
        let opcoes = { headers: this._headers };
        return this.http
        .get<Usuarios>(this.UrlServiceV1 + "ById/" + id ,opcoes).toPromise().then()
    }
    async CriarUsuarios(usuario:Usuarios) : Promise<Usuarios> {
        let opcoes = { headers: this._headers };
        return this.http
        .post<Usuarios>(this.UrlServiceV1 + "Novo-Usuario",usuario).toPromise().then()
    }
    async ExcluirUsuarios(id:string) : Promise<Usuarios> {
        let opcoes = { headers: this._headers };
        return this.http
        .delete<Usuarios>(this.UrlServiceV1 + "Remove/"+ id,opcoes).toPromise().then()
    }
    async EditarUsuarios(usuario:Usuarios) : Promise<Usuarios> {
        let opcoes = { headers: this._headers };
        return this.http
        .put<Usuarios>(this.UrlServiceV1 + "Update",usuario,opcoes).toPromise().then()
    }
}