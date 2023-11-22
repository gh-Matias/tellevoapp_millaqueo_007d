import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User,Users } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) { }

  //devuelve todos los objetos de tipo users almacenados en data
  GetAllUsers():Observable<User>{
    return this.httpclient.get<User>(`${environment.apiUrl}/usuarios`);
  }

  //obtenemos un observable de acuerdo al username ingresado en login
  GetUserById(codigo:any):Observable<User>{
    return this.httpclient.get<User>(`${environment.apiUrl}/usuarios/?email=${codigo}`);
  }

  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }

  CrearUsuario(newUsuario: Users): Observable<Users>{
    return this.httpclient.post<User>(`${environment.apiUrl}/usuarios`, newUsuario);
  }
  

  BuscarUsuarioId(id:number):Observable<User>{
    return this.httpclient.get<User>(`${environment.apiUrl}/usuarios/?id=${id}`);
  }

  ActualizarUsuario(usuario:any):Observable<User>{
    return this.httpclient.put<User>(`${environment.apiUrl}/usuarios/${usuario.id}`, usuario);
  }
}
